/**
 * Carte d'exercice, sur le modèle TrainingCard du design system : barre de couleur de la
 * famille en haut, badge, titre, début de la situation, durée et outils, bouton signet.
 */
import { el, typographier } from '../ui.js';
import { icone } from '../icones.js';
import { badgeFamille, famille, metier, nomNiveau, outil } from './commun.js';

export function creerCarte(e, { dansSeance, afficherMetier, onOuvrir, onBasculer }) {
  const f = famille(e.famille);
  const signet = el(
    'button',
    {
      type: 'button',
      class: 'carte__signet',
      'aria-pressed': String(dansSeance),
      'aria-label': `${dansSeance ? 'Retirer de' : 'Ajouter à'} ma séance : ${e.titre}`,
      title: dansSeance ? 'Retirer de ma séance' : 'Ajouter à ma séance',
      onclick: () => onBasculer(e.id, signet),
    },
    icone(dansSeance ? 'check' : 'plus'),
  );

  return el(
    'article',
    { class: 'carte', 'data-couleur': f.couleur, 'data-id': e.id },
    el('div', { class: 'carte__barre', 'aria-hidden': 'true' }),
    el(
      'div',
      { class: 'carte__corps' },
      el(
        'div',
        { class: 'carte__haut' },
        badgeFamille(e.famille, { taille: 'sm' }),
        el('span', { class: `carte__niveau carte__niveau--${e.niveau}` }, nomNiveau(e.niveau)),
      ),
      el(
        'h3',
        { class: 'carte__titre' },
        el(
          'a',
          {
            href: `#${e.id}`,
            class: 'carte__lien',
            onclick: (evenement) => {
              evenement.preventDefault();
              onOuvrir(e.id);
            },
          },
          e.titre,
        ),
      ),
      afficherMetier && e.metier !== 'tous'
        ? el('p', { class: 'carte__metier' }, icone(metier(e.metier).icone), metier(e.metier).nom)
        : null,
      el('p', { class: 'carte__situation' }, e.situation),
      el(
        'div',
        { class: 'carte__pied' },
        el('span', { class: 'carte__duree' }, icone('clock'), `${e.duree} min`),
        el(
          'span',
          { class: 'carte__outils' },
          e.outils.map((o) => el('span', { class: 'outil-mini' }, outil(o).nom)),
        ),
        signet,
      ),
    ),
  );
}

/** Met à jour le bouton signet d'une carte sans la reconstruire. */
export function majSignet(bouton, dansSeance, titre) {
  bouton.setAttribute('aria-pressed', String(dansSeance));
  bouton.setAttribute(
    'aria-label',
    typographier(`${dansSeance ? 'Retirer de' : 'Ajouter à'} ma séance : ${titre}`),
  );
  bouton.title = dansSeance ? 'Retirer de ma séance' : 'Ajouter à ma séance';
  bouton.replaceChildren(icone(dansSeance ? 'check' : 'plus'));
}
