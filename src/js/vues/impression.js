/**
 * Impression : les fiches sont construites dans #impression (masqué à l'écran), la feuille
 * impression.css n'imprime que cette zone, puis tout est nettoyé après l'impression.
 */
import { el, remplir } from '../ui.js';
import { competence, technique } from './commun.js';
import { resume, formaterDuree, dureeTotale } from '../seance.js';

function ficheImprimee(e, formateur) {
  const f = e.formateur;
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
    formateur
      ? el(
          'div',
          { class: 'imp-formateur' },
          el('h3', {}, 'Notes formateur'),
          el('p', {}, el('strong', {}, 'Résultat attendu. '), f.resultat),
          el('p', {}, el('strong', {}, 'Critères de réussite')),
          el(
            'ul',
            {},
            f.criteres.map((x) => el('li', {}, x)),
          ),
          el('p', {}, el('strong', {}, 'Pièges fréquents')),
          el(
            'ul',
            {},
            f.pieges.map((x) => el('li', {}, x)),
          ),
          el(
            'p',
            {},
            el('strong', {}, 'Compétence. '),
            competence(f.competence).nom,
            ' · ',
            el('strong', {}, 'Technique. '),
            technique(f.technique).nom,
          ),
        )
      : null,
  );
}

export function creerImpression(zone, magasin) {
  globalThis.addEventListener?.('afterprint', () => {
    document.body.classList.remove('en-impression');
    zone.replaceChildren();
  });

  /** Imprime une ou plusieurs fiches ; par défaut, les notes suivent la vue choisie. */
  return function imprimer(exercices, { formateur = magasin.get().vue === 'formateur' } = {}) {
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
      exercices.map((e) => ficheImprimee(e, formateur)),
      el(
        'p',
        { class: 'imp-pied' },
        'Atelier d’exercices IA · Skazy Formation · Données d’exercice fictives.',
      ),
    );
    document.body.classList.add('en-impression');
    globalThis.print();
  };
}
