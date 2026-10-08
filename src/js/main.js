/**
 * Montage de la page : état, bandeau, profil, résultats, fiche, séance, repères, pied.
 * Une adresse en #id-exercice ouvre directement sa fiche.
 */
import { CATALOGUE, EXERCICES_ECRITS } from '../donnees/catalogue.js';
import { GABARITS } from '../donnees/gabarits.js';
import { METIERS } from '../donnees/metiers.js';
import { el, remplir, pluriel } from './ui.js';
import { creerEtat } from './etat.js';
import { monterBandeau } from './vues/bandeau.js';
import { monterProfil } from './vues/profil.js';
import { monterResultats } from './vues/resultats.js';
import { monterFiche } from './vues/fiche.js';
import { monterSeance } from './vues/seance.js';
import { monterReperes } from './vues/reperes.js';
import { creerImpression } from './vues/impression.js';
import { DROITS, USAGE_RESERVE } from './vues/commun.js';

const $ = (id) => document.getElementById(id);
const magasin = creerEtat(CATALOGUE);
const imprimer = creerImpression($('impression'), magasin);

const reperes = monterReperes($('reperes'));
// La fiche est créée juste après : les résultats ne l'appellent qu'au premier clic.
const resultats = monterResultats($('resultats'), magasin, CATALOGUE, {
  ouvrirFiche: (id, liste) => fiche.ouvrir(id, liste),
});
const fiche = monterFiche($('fiche'), magasin, {
  exercice: resultats.exercice,
  ouvrirReperes: (ancre) => reperes.ouvrir(ancre),
  imprimer,
});
const seance = monterSeance($('seance'), magasin, {
  exercice: resultats.exercice,
  ouvrirFiche: (id, liste) => fiche.ouvrir(id, liste),
  imprimer,
});
monterBandeau($('actions-bandeau'), magasin, {
  ouvrirSeance: () => seance.ouvrir(),
  ouvrirReperes: (ancre) => reperes.ouvrir(ancre),
});
monterProfil($('profil'), $('resume-profil'), magasin);

// Les vrais nombres : un gabarit compte pour un exercice, même s'il est adapté à chaque métier.
const nbMetiers = METIERS.length - 1;
const nbEcrits = EXERCICES_ECRITS.length;
const nbTransversaux = GABARITS.length;
remplir(
  $('pied'),
  el(
    'p',
    {},
    el('strong', {}, 'Atelier d’exercices IA'),
    ` · ${pluriel(nbEcrits + nbTransversaux, 'exercice')} : ${nbEcrits} écrits pour un métier précis et ${nbTransversaux} transversaux, adaptés au vocabulaire de chacun des ${nbMetiers} métiers.`,
  ),
  el(
    'p',
    {},
    'Situations, personnes et chiffres sont fictifs. Inspiré des formations officielles d’Anthropic (AI Fluency) et d’OpenAI Academy. ',
    el(
      'button',
      { type: 'button', class: 'lien-bouton', onclick: () => reperes.ouvrir('reperes-sources') },
      'Voir les repères et les sources',
    ),
    '.',
  ),
  el(
    'p',
    {},
    `${DROITS}, Nouvelle-Calédonie · `,
    el(
      'a',
      { href: 'https://formation.skazy.nc', target: '_blank', rel: 'noopener', class: 'lien-pied' },
      'formation.skazy.nc',
    ),
  ),
  el('p', {}, USAGE_RESERVE),
);

// #id-exercice dans l'adresse : ouvre la fiche (lien copié depuis une fiche).
function ouvrirDepuisAdresse() {
  const id = decodeURIComponent(globalThis.location.hash.slice(1));
  if (id && /^[a-z0-9-]+$/.test(id)) fiche.ouvrir(id, resultats.courants());
}
globalThis.addEventListener('hashchange', ouvrirDepuisAdresse);
ouvrirDepuisAdresse();

magasin.mettreAJourAdresse();
document.documentElement.classList.add('pret');
