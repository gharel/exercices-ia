/**
 * Sélection des exercices : profil (métier, niveau, outils), filtres (familles, durée,
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
 * Les exercices d'un métier :
 * - un métier : ses exercices écrits et les gabarits déclinés pour lui ;
 * - « tous » : les gabarits en version neutre, les exercices transversaux, et les exercices
 *   écrits de chaque métier (pas les déclinaisons, qui seraient des doublons) ;
 * - « autre » : la version neutre seulement.
 */
export function exercicesDuMetier(catalogue, metier) {
  if (metier === 'tous') {
    return catalogue.filter((e) => e.metier === 'tous' || estPropreAuMetier(e));
  }
  if (metier === 'autre') return catalogue.filter((e) => e.metier === 'tous');
  return catalogue.filter((e) => e.metier === metier);
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

/**
 * Applique profil et filtres. Renvoie les exercices retenus et, pour les pastilles de
 * familles, le nombre d'exercices par famille avant le filtre de famille.
 */
export function selectionner(catalogue, profil, filtres = {}) {
  const mots = motsRecherche(filtres.recherche);
  const avantFamilles = exercicesDuMetier(catalogue, profil.metier).filter(
    (e) =>
      correspondProfil(e, profil) &&
      correspondDuree(e, filtres.duree) &&
      correspondRecherche(e, mots),
  );
  const parFamille = Object.fromEntries(FAMILLES.map((f) => [f.slug, 0]));
  for (const e of avantFamilles) parFamille[e.famille] += 1;
  const familles = filtres.familles ?? [];
  const retenus = familles.length
    ? avantFamilles.filter((e) => familles.includes(e.famille))
    : avantFamilles;
  return { exercices: trier(retenus, mots), parFamille };
}

/**
 * Ordre d'affichage varié : les familles alternent (une de chaque, à tour de rôle), et dans
 * chaque famille les exercices propres au métier passent avant les gabarits.
 * Avec une recherche, les exercices dont le titre contient les mots passent devant.
 */
export function trier(exercices, mots = []) {
  const groupes = new Map(FAMILLES.map((f) => [f.slug, []]));
  const rang = (e) => (e.gabarit ? 1 : 0);
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
