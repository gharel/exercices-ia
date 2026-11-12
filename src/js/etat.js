/**
 * L'état de la page : profil, filtres, séance, thème, et la séance partagée reçue par lien
 * (qui ouvre la vue apprenant, sans notes formateur). Gardé dans le stockage du navigateur
 * (profil, séance, thème) et dans l'adresse
 * (profil, séance partagée), pour qu'un lien ouvre la même sélection.
 * Le thème ('systeme', 'light' ou 'dark') est commun à tous les outils Skazy Formation.
 */
import { lire, ecrire, lireTheme, ecrireTheme } from './stockage.js';
import { lireParametres, titreParDefaut } from './seance.js';
import { NIVEAUX } from '../donnees/referentiels.js';
import { OUTILS } from '../donnees/outils.js';
import { SLUGS_METIERS, SLUGS_FONCTIONS } from '../donnees/metiers.js';

const NIVEAUX_VALIDES = new Set([...NIVEAUX.map((n) => n.slug), 'tous']);
const OUTILS_VALIDES = new Set(OUTILS.map((o) => o.slug));
// `metier` porte le secteur (ou « tous », « autre ») ; la fonction a son propre champ.
const SECTEURS_VALIDES = new Set([
  ...[...SLUGS_METIERS].filter((slug) => !SLUGS_FONCTIONS.has(slug)),
  'autre',
]);

export const PROFIL_PAR_DEFAUT = {
  fonction: '',
  metier: 'tous',
  metierLibre: '',
  niveau: 'tous',
  outils: [],
};
export const PAS_AFFICHAGE = 24;

/** Garde seulement des valeurs connues : un stockage ou un lien abîmé ne casse rien. */
export function nettoyerProfil(brut) {
  const p = { ...PROFIL_PAR_DEFAUT };
  if (SLUGS_FONCTIONS.has(brut?.fonction)) p.fonction = brut.fonction;
  if (SECTEURS_VALIDES.has(brut?.metier)) p.metier = brut.metier;
  // Ancien lien ou ancien profil (« ?metier=rh ») : la fonction était rangée parmi les métiers.
  else if (SLUGS_FONCTIONS.has(brut?.metier) && !p.fonction) p.fonction = brut.metier;
  if (typeof brut?.metierLibre === 'string') p.metierLibre = brut.metierLibre.slice(0, 80);
  if (NIVEAUX_VALIDES.has(brut?.niveau)) p.niveau = brut.niveau;
  if (Array.isArray(brut?.outils)) p.outils = brut.outils.filter((o) => OUTILS_VALIDES.has(o));
  return p;
}

export function nettoyerSeance(brut, idsConnus) {
  const ids = Array.isArray(brut?.ids) ? brut.ids.filter((id) => idsConnus.has(id)) : [];
  const titre =
    typeof brut?.titre === 'string' && brut.titre.trim() ? brut.titre.slice(0, 120) : '';
  return { ids: [...new Set(ids)], titre: titre || titreParDefaut() };
}

export function creerEtat(catalogue, adresse = globalThis.location) {
  const idsConnus = new Set(catalogue.map((e) => e.id));
  const parametres = lireParametres(adresse?.search ?? '');

  // Ancien lien « ?metier=rh » : la fonction qu'il désigne prime sur le profil gardé.
  const ancienneFonction = !parametres.fonction && SLUGS_FONCTIONS.has(parametres.metier);
  const profil = nettoyerProfil({
    ...lire('profil', {}),
    ...(parametres.fonction && { fonction: parametres.fonction }),
    ...(parametres.metier &&
      (ancienneFonction
        ? { fonction: parametres.metier, metier: 'tous' }
        : { metier: parametres.metier })),
    ...(parametres.niveau && { niveau: parametres.niveau }),
    ...(parametres.outils && { outils: parametres.outils }),
    ...(parametres.metierLibre !== null && { metierLibre: parametres.metierLibre }),
  });

  const partage = parametres.seance
    ? { ids: parametres.seance.filter((id) => idsConnus.has(id)), titre: parametres.titre ?? '' }
    : null;

  const etat = {
    profil,
    filtres: { familles: [], duree: '', recherche: '' },
    seance: nettoyerSeance(lire('seance', {}), idsConnus),
    vue: parametres.vue ?? 'formateur',
    theme: lireTheme(),
    partage,
    limite: PAS_AFFICHAGE,
  };

  const ecouteurs = new Set();

  function enregistrer(changements) {
    ecrire('profil', etat.profil);
    ecrire('seance', etat.seance);
    // Commun à tous les outils : écrit seulement quand on le change ici.
    if ('theme' in changements) ecrireTheme(etat.theme);
    mettreAJourAdresse();
  }

  function prevenir(quoi) {
    for (const ecouteur of ecouteurs) ecouteur(etat, new Set(quoi));
  }

  function mettreAJourAdresse() {
    if (!globalThis.history?.replaceState || !adresse) return;
    const p = new URLSearchParams();
    if (etat.partage) {
      p.set('s', etat.partage.ids.join(','));
      if (etat.partage.titre) p.set('t', etat.partage.titre);
      p.set('vue', etat.vue);
    } else {
      const { fonction, metier, niveau, outils, metierLibre } = etat.profil;
      if (fonction) p.set('fonction', fonction);
      if (metier !== PROFIL_PAR_DEFAUT.metier) p.set('metier', metier);
      if (metier === 'autre' && metierLibre) p.set('m', metierLibre);
      if (niveau !== PROFIL_PAR_DEFAUT.niveau) p.set('niveau', niveau);
      if (outils.length) p.set('outils', outils.join(','));
    }
    const requete = p.toString();
    const url = `${adresse.pathname}${requete ? `?${requete}` : ''}${adresse.hash}`;
    try {
      globalThis.history.replaceState(null, '', url);
    } catch {
      // adresse non modifiable (fichier ouvert en file:// dans certains navigateurs)
    }
  }

  return {
    get: () => etat,
    /** Change une partie de l'état puis prévient les vues. `quoi` dit ce qui a changé. */
    modifier(changements, quoi = Object.keys(changements)) {
      Object.assign(etat, changements);
      if ('profil' in changements || 'filtres' in changements)
        etat.limite = changements.limite ?? PAS_AFFICHAGE;
      enregistrer(changements);
      prevenir(quoi);
    },
    /** Le thème a changé dans un autre onglet ou un autre outil : on le relit, sans le réécrire. */
    relireTheme() {
      etat.theme = lireTheme();
      prevenir(['theme']);
    },
    ecouter(ecouteur) {
      ecouteurs.add(ecouteur);
      return () => ecouteurs.delete(ecouteur);
    },
    /** Ajoute ou retire un exercice de la séance. Renvoie true s'il y est maintenant. */
    basculerDansSeance(id) {
      const ids = etat.seance.ids.includes(id)
        ? etat.seance.ids.filter((x) => x !== id)
        : [...etat.seance.ids, id];
      this.modifier({ seance: { ...etat.seance, ids } }, ['seance']);
      return ids.includes(id);
    },
    mettreAJourAdresse,
  };
}
