/**
 * L'état de la page : profil, filtres, séance, vue, thème, et la séance partagée reçue par
 * lien. Gardé dans le stockage du navigateur (profil, séance, vue, thème) et dans l'adresse
 * (profil, séance partagée), pour qu'un lien ouvre la même sélection.
 */
import { lire, ecrire } from './stockage.js';
import { lireParametres, titreParDefaut } from './seance.js';
import { NIVEAUX } from '../donnees/referentiels.js';
import { OUTILS } from '../donnees/outils.js';
import { SLUGS_METIERS } from '../donnees/metiers.js';

const NIVEAUX_VALIDES = new Set([...NIVEAUX.map((n) => n.slug), 'tous']);
const OUTILS_VALIDES = new Set(OUTILS.map((o) => o.slug));
const METIERS_VALIDES = new Set([...SLUGS_METIERS, 'autre']);

export const PROFIL_PAR_DEFAUT = {
  metier: 'tous',
  metierLibre: '',
  niveau: 'debutant',
  outils: [],
};
export const PAS_AFFICHAGE = 24;

/** Garde seulement des valeurs connues : un stockage ou un lien abîmé ne casse rien. */
export function nettoyerProfil(brut) {
  const p = { ...PROFIL_PAR_DEFAUT };
  if (METIERS_VALIDES.has(brut?.metier)) p.metier = brut.metier;
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

  const profil = nettoyerProfil({
    ...lire('profil', {}),
    ...(parametres.metier && { metier: parametres.metier }),
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
    vue: parametres.vue ?? (lire('vue') === 'apprenant' ? 'apprenant' : 'formateur'),
    theme: ['light', 'dark'].includes(lire('theme')) ? lire('theme') : 'auto',
    partage,
    limite: PAS_AFFICHAGE,
  };

  const ecouteurs = new Set();

  function enregistrer() {
    ecrire('profil', etat.profil);
    ecrire('seance', etat.seance);
    ecrire('vue', etat.vue);
    ecrire('theme', etat.theme === 'auto' ? null : etat.theme);
    mettreAJourAdresse();
  }

  function mettreAJourAdresse() {
    if (!globalThis.history?.replaceState || !adresse) return;
    const p = new URLSearchParams();
    if (etat.partage) {
      p.set('s', etat.partage.ids.join(','));
      if (etat.partage.titre) p.set('t', etat.partage.titre);
      p.set('vue', etat.vue);
    } else {
      const { metier, niveau, outils, metierLibre } = etat.profil;
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
      enregistrer();
      for (const ecouteur of ecouteurs) ecouteur(etat, new Set(quoi));
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
