/**
 * Sélection des exercices : profil (fonction, secteur, niveau, outils), filtres (familles, durée,
 * recherche), tri et tirage au hasard. Fonctions pures, sans accès à la page.
 */
import { FAMILLES, TRANCHES_DUREE } from '../donnees/referentiels.js';

const ORDRE_FAMILLES = new Map(FAMILLES.map((f, i) => [f.slug, i]));

/** « Réclamation » → « reclamation » : minuscules, sans accents, pour la recherche. */
export function normaliser(texte) {
  return String(texte)
    .toLocaleLowerCase('fr')
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/[’']/g, ' ');
}

/** Un exercice écrit pour un métier (et non décliné d'un gabarit). */
export function estPropreAuMetier(exercice) {
  return !exercice.gabarit && exercice.metier !== 'tous';
}

/**
 * Les exercices d'un secteur :
 * - un secteur : ses exercices écrits et les gabarits déclinés pour lui ;
 * - « tous » : les gabarits en version neutre, les exercices transversaux, et les exercices
 *   écrits de chaque métier (pas les déclinaisons, qui seraient des doublons) ;
 * - « autre » : la version neutre seulement.
 */
function exercicesDuSecteur(catalogue, metier) {
  if (metier === 'tous') {
    return catalogue.filter((e) => e.metier === 'tous' || estPropreAuMetier(e));
  }
  if (metier === 'autre') return catalogue.filter((e) => e.metier === 'tous');
  return catalogue.filter((e) => e.metier === metier);
}

/**
 * Les exercices d'un profil. `metier` porte le secteur, `fonction` le poste tenu :
 * - sans fonction : les exercices du secteur ;
 * - une fonction, tous secteurs : ses exercices écrits et les gabarits déclinés pour elle ;
 * - une fonction et un secteur (ou « autre ») : les exercices écrits de la fonction, puis
 *   ceux du secteur. Les gabarits ne sont pris qu'une fois, avec le vocabulaire du secteur.
 */
export function exercicesDuProfil(catalogue, { metier = 'tous', fonction = '' } = {}) {
  if (!fonction) return exercicesDuSecteur(catalogue, metier);
  if (metier === 'tous') return catalogue.filter((e) => e.metier === fonction);
  return [
    ...catalogue.filter((e) => e.metier === fonction && !e.gabarit),
    ...exercicesDuSecteur(catalogue, metier),
  ];
}

/** La liste mêle plusieurs métiers : chaque carte affiche alors le sien. */
export function meleLesMetiers({ metier = 'tous', fonction = '' } = {}) {
  return fonction ? metier !== 'tous' : metier === 'tous';
}

function correspondProfil(e, { niveau, outils }) {
  if (niveau && niveau !== 'tous' && e.niveau !== niveau) return false;
  if (outils?.length && !e.outils.some((o) => outils.includes(o))) return false;
  return true;
}

function correspondDuree(e, duree) {
  if (!duree) return true;
  const tranche = TRANCHES_DUREE.find((t) => t.slug === duree);
  return !tranche || (e.duree >= tranche.min && e.duree <= tranche.max);
}

/** Texte cherché dans un exercice : titre, situation, objectif, mots-clés. */
function texteRecherche(e) {
  return normaliser([e.titre, e.situation, e.objectif, ...(e.motsCles ?? [])].join(' '));
}

function correspondRecherche(e, mots) {
  if (!mots.length) return true;
  const texte = texteRecherche(e);
  return mots.every((mot) => texte.includes(mot));
}

export function motsRecherche(recherche) {
  return normaliser(recherche ?? '')
    .split(/\s+/)
    .filter((m) => m.length > 1);
}

/** La tranche de durée d'un exercice (« court », « moyen », « long »). */
export function trancheDe(duree) {
  return TRANCHES_DUREE.find((t) => duree >= t.min && duree <= t.max)?.slug;
}

/**
 * Applique profil et filtres. Renvoie les exercices retenus et, pour les pastilles, le
 * nombre d'exercices par famille (sans le filtre de famille) et par tranche de durée
 * (sans le filtre de durée) : chaque pastille annonce ce qu'elle donnerait.
 */
export function selectionner(catalogue, profil, filtres = {}) {
  const mots = motsRecherche(filtres.recherche);
  const familles = filtres.familles ?? [];
  const base = exercicesDuProfil(catalogue, profil).filter(
    (e) => correspondProfil(e, profil) && correspondRecherche(e, mots),
  );
  const dansFamilles = (e) => !familles.length || familles.includes(e.famille);

  const parFamille = Object.fromEntries(FAMILLES.map((f) => [f.slug, 0]));
  const parDuree = Object.fromEntries(TRANCHES_DUREE.map((t) => [t.slug, 0]));
  let toutesDurees = 0;
  for (const e of base) {
    if (correspondDuree(e, filtres.duree)) parFamille[e.famille] += 1;
    if (dansFamilles(e)) {
      parDuree[trancheDe(e.duree)] += 1;
      toutesDurees += 1;
    }
  }
  const retenus = base.filter((e) => correspondDuree(e, filtres.duree) && dansFamilles(e));
  return {
    exercices: trier(retenus, mots, profil.fonction),
    parFamille,
    parDuree: { '': toutesDurees, ...parDuree },
  };
}

/**
 * Ordre d'affichage varié : les familles alternent (une de chaque, à tour de rôle), et dans
 * chaque famille les exercices propres au métier passent avant les gabarits ; quand une
 * fonction est choisie avec un secteur, ses exercices écrits passent avant ceux du secteur.
 * Avec une recherche, les exercices dont le titre contient les mots passent devant.
 */
export function trier(exercices, mots = [], fonction = '') {
  const groupes = new Map(FAMILLES.map((f) => [f.slug, []]));
  const rang = (e) => {
    if (e.gabarit) return 2;
    return fonction && e.metier !== fonction ? 1 : 0;
  };
  const tries = [...exercices].sort(
    (a, b) => rang(a) - rang(b) || ORDRE_FAMILLES.get(a.famille) - ORDRE_FAMILLES.get(b.famille),
  );
  for (const e of tries) groupes.get(e.famille)?.push(e);
  const resultat = [];
  const files = [...groupes.values()].filter((g) => g.length);
  while (files.some((g) => g.length)) {
    for (const file of files) if (file.length) resultat.push(file.shift());
  }
  if (!mots.length) return resultat;
  const dansTitre = (e) => mots.every((m) => normaliser(e.titre).includes(m));
  return [...resultat.filter(dansTitre), ...resultat.filter((e) => !dansTitre(e))];
}

/** Tire un exercice au hasard, différent de `sauf` si possible. `hasard` renvoie [0, 1[. */
export function tirerAuHasard(exercices, hasard = Math.random, sauf = null) {
  const candidats = exercices.length > 1 ? exercices.filter((e) => e.id !== sauf) : exercices;
  if (!candidats.length) return null;
  return candidats[Math.floor(hasard() * candidats.length)];
}

/**
 * « Autre métier » : la version neutre, avec le métier tapé par l'apprenant ajouté à la
 * situation et au prompt.
 */
export function personnaliser(exercice, metierLibre) {
  const metier = String(metierLibre ?? '').trim();
  if (!metier || exercice.metier !== 'tous') return exercice;
  return {
    ...exercice,
    situation: `Votre métier : ${metier}. ${exercice.situation}`,
    prompt: `Contexte : je travaille dans le domaine suivant : ${metier}.\n\n${exercice.prompt}`,
  };
}
