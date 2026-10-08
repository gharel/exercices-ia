/**
 * Impression : les fiches sont construites dans #impression (masqué à l'écran), la feuille
 * impression.css n'imprime que cette zone, puis tout est nettoyé après l'impression.
 */
import { el, remplir } from '../ui.js';
import { resume, formaterDuree, dureeTotale } from '../seance.js';
import { DROITS, USAGE_RESERVE } from './commun.js';

function ficheImprimee(e) {
  return el(
    'article',
    { class: 'imp-fiche' },
    el('h2', {}, e.titre),
    el('p', { class: 'imp-meta' }, resume(e)),
    el('p', {}, el('strong', {}, 'Mise en situation. '), e.situation),
    el('p', {}, el('strong', {}, 'Objectif. '), e.objectif),
    el('h3', {}, 'Votre mission'),
    el(
      'ol',
      {},
      e.etapes.map((x) => el('li', {}, x)),
    ),
    el('h3', {}, 'Prompt de départ'),
    el('pre', {}, e.prompt),
    e.materiau ? [el('h3', {}, e.materiau.titre), el('pre', {}, e.materiau.texte)] : null,
    el('p', {}, el('strong', {}, 'Plus simple. '), e.variantes.simple),
    el('p', {}, el('strong', {}, 'Pour aller plus loin. '), e.variantes.poussee),
    e.vigilance
      ? el('p', { class: 'imp-vigilance' }, el('strong', {}, 'Vigilance. '), e.vigilance)
      : null,
  );
}

export function creerImpression(zone, magasin) {
  globalThis.addEventListener?.('afterprint', () => {
    document.body.classList.remove('en-impression');
    zone.replaceChildren();
  });

  /** Imprime une ou plusieurs fiches, toujours en version apprenant (sans notes formateur). */
  return function imprimer(exercices) {
    const { seance } = magasin.get();
    remplir(
      zone,
      exercices.length > 1
        ? el(
            'header',
            { class: 'imp-entete' },
            el('h1', {}, seance.titre),
            el(
              'p',
              { class: 'imp-meta' },
              `${exercices.length} exercices · ${formaterDuree(dureeTotale(exercices))}`,
            ),
          )
        : null,
      exercices.map((e) => ficheImprimee(e)),
      el(
        'p',
        { class: 'imp-pied' },
        `Atelier d’exercices IA · ${DROITS} · Données d’exercice fictives. ${USAGE_RESERVE}`,
      ),
    );
    document.body.classList.add('en-impression');
    globalThis.print();
  };
}
