/**
 * Schéma d'un exercice : validerExercice() renvoie la liste des problèmes (vide si tout va
 * bien). Sert aux tests, et de documentation pour qui écrit des exercices.
 *
 * {
 *   id: 'immo-annonce-fautes',            unique, minuscules et tirets
 *   titre: 'Corriger une annonce…',        commence par un verbe à l'infinitif
 *   metier: 'immobilier',                  slug d'un métier, ou 'tous'
 *   niveau: 'debutant',                    debutant | intermediaire | avance
 *   famille: 'corriger',                   slug d'une famille de tâches
 *   duree: 15,                             minutes : 10, 15, 20, 30, 45 ou 60
 *   outils: ['claude', 'chatgpt'],         outils avec lesquels l'exercice se fait
 *   outilConseille: 'chatgpt',             facultatif, parmi `outils`
 *   situation: '…',                        mise en situation (Nouvelle-Calédonie), 1 à 4 phrases
 *   objectif: '…',                         ce que l'apprenant saura faire
 *   etapes: ['…', '…'],                    la consigne, 3 à 7 étapes, au vouvoiement
 *   prompt: '…',                           prompt de départ, avec [à compléter] si besoin
 *   materiau: { titre, texte },            facultatif : e-mail, notes, tableau fictif à copier
 *   variantes: { simple: '…', poussee: '…' },
 *   astuces: { chatgpt: '…' },             facultatif : une astuce par outil de `outils`
 *   vigilance: '…',                        facultatif : données personnelles, vérification
 *   formateur: {
 *     resultat: '…',                       le résultat attendu
 *     criteres: ['…'],                     2 à 5 critères de réussite
 *     pieges: ['…'],                       1 à 4 pièges fréquents
 *     competence: 'description',           compétence 4D principale
 *     technique: 'contexte',               technique de prompt principale
 *   },
 *   motsCles: ['annonce'],                 facultatif, pour la recherche
 * }
 */

import { NIVEAUX, FAMILLES, DUREES, COMPETENCES, TECHNIQUES } from '../donnees/referentiels.js';
import { OUTILS } from '../donnees/outils.js';

const SLUGS = {
  niveau: new Set(NIVEAUX.map((n) => n.slug)),
  famille: new Set(FAMILLES.map((f) => f.slug)),
  outil: new Set(OUTILS.map((o) => o.slug)),
  competence: new Set(COMPETENCES.map((c) => c.slug)),
  technique: new Set(TECHNIQUES.map((t) => t.slug)),
};

const CHAMPS = new Set([
  'id',
  'titre',
  'metier',
  'niveau',
  'famille',
  'duree',
  'outils',
  'outilConseille',
  'situation',
  'objectif',
  'etapes',
  'prompt',
  'materiau',
  'variantes',
  'astuces',
  'vigilance',
  'formateur',
  'motsCles',
  'gabarit',
]);

function texte(valeur) {
  return typeof valeur === 'string' && valeur.trim().length > 0;
}

function listeDeTextes(valeur, min, max) {
  return (
    Array.isArray(valeur) && valeur.length >= min && valeur.length <= max && valeur.every(texte)
  );
}

export function validerExercice(ex, slugsMetiers) {
  const problemes = [];
  const p = (message) => problemes.push(`${ex?.id ?? '(sans id)'} : ${message}`);
  if (!ex || typeof ex !== 'object') return ['exercice absent'];

  for (const cle of Object.keys(ex)) if (!CHAMPS.has(cle)) p(`champ inconnu « ${cle} »`);
  if (!/^[a-z0-9]+(-{1,2}[a-z0-9]+)*$/.test(ex.id ?? '')) p('id invalide');
  if (!texte(ex.titre)) p('titre manquant');
  if (!slugsMetiers.has(ex.metier)) p(`métier inconnu « ${ex.metier} »`);
  if (!SLUGS.niveau.has(ex.niveau)) p(`niveau inconnu « ${ex.niveau} »`);
  if (!SLUGS.famille.has(ex.famille)) p(`famille inconnue « ${ex.famille} »`);
  if (!DUREES.includes(ex.duree)) p(`durée invalide « ${ex.duree} »`);

  if (!Array.isArray(ex.outils) || ex.outils.length === 0) p('outils manquants');
  else {
    for (const o of ex.outils) if (!SLUGS.outil.has(o)) p(`outil inconnu « ${o} »`);
    if (new Set(ex.outils).size !== ex.outils.length) p('outil en double');
  }
  if (ex.outilConseille !== undefined && !ex.outils?.includes(ex.outilConseille)) {
    p('outilConseille absent de outils');
  }

  for (const champ of ['situation', 'objectif', 'prompt'])
    if (!texte(ex[champ])) p(`${champ} manquant`);
  if (!listeDeTextes(ex.etapes, 3, 7)) p('etapes : 3 à 7 textes');

  if (ex.materiau !== undefined && !(texte(ex.materiau?.titre) && texte(ex.materiau?.texte))) {
    p('materiau : titre et texte');
  }
  if (!texte(ex.variantes?.simple) || !texte(ex.variantes?.poussee)) {
    p('variantes : simple et poussee');
  }
  if (ex.astuces !== undefined) {
    for (const [outil, astuce] of Object.entries(ex.astuces)) {
      if (!ex.outils?.includes(outil)) p(`astuce pour un outil absent : ${outil}`);
      if (!texte(astuce)) p(`astuce vide : ${outil}`);
    }
  }
  if (ex.vigilance !== undefined && !texte(ex.vigilance)) p('vigilance vide');

  const f = ex.formateur;
  if (!f || typeof f !== 'object') p('formateur manquant');
  else {
    if (!texte(f.resultat)) p('formateur.resultat manquant');
    if (!listeDeTextes(f.criteres, 2, 5)) p('formateur.criteres : 2 à 5 textes');
    if (!listeDeTextes(f.pieges, 1, 4)) p('formateur.pieges : 1 à 4 textes');
    if (!SLUGS.competence.has(f.competence)) p(`compétence inconnue « ${f.competence} »`);
    if (!SLUGS.technique.has(f.technique)) p(`technique inconnue « ${f.technique} »`);
  }
  if (ex.motsCles !== undefined && !listeDeTextes(ex.motsCles, 1, 12)) p('motsCles invalides');
  return problemes;
}

/** Tous les textes d'un exercice, pour la recherche et les contrôles de typographie. */
export function textesDe(valeur) {
  if (typeof valeur === 'string') return [valeur];
  if (Array.isArray(valeur)) return valeur.flatMap(textesDe);
  if (valeur && typeof valeur === 'object') return Object.values(valeur).flatMap(textesDe);
  return [];
}

/**
 * Typographie attendue dans les données : apostrophe courbe ’, guillemets « », points de
 * suspension …, pas d'emoji. Renvoie les fautes trouvées dans un texte.
 */
export function fautesTypo(t) {
  const fautes = [];
  if (/[A-Za-zÀ-ÿ]'[A-Za-zÀ-ÿ]/.test(t)) fautes.push('apostrophe droite (utiliser ’)');
  if (/"/.test(t)) fautes.push('guillemets droits (utiliser « »)');
  if (/\.\.\./.test(t)) fautes.push('trois points (utiliser …)');
  if (/\p{Extended_Pictographic}/u.test(t)) fautes.push('emoji');
  if (/[{}]/.test(t)) fautes.push('accolade restante');
  return fautes;
}
