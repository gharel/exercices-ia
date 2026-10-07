/**
 * « Repères » : la méthode derrière les exercices. Une bonne demande, le cadre 4D, les
 * techniques de prompt, l'usage responsable, les outils et les sources officielles.
 */
import { el, remplir } from '../ui.js';
import { icone } from '../icones.js';
import { COMPETENCES, TECHNIQUES } from '../../donnees/referentiels.js';
import { OUTILS } from '../../donnees/outils.js';
import { EXEMPLE_PROMPT, INGREDIENTS, REGLES, SOURCES } from '../../donnees/reperes.js';
import { boutonIcone, texteAvecCrochets } from './commun.js';

function bloc(id, titre, chapo, ...contenu) {
  return el(
    'section',
    { class: 'reperes__bloc', id, 'aria-labelledby': `${id}-titre` },
    el('h3', { id: `${id}-titre`, tabindex: '-1' }, titre),
    chapo ? el('p', { class: 'reperes__chapo' }, chapo) : null,
    ...contenu,
  );
}

export function monterReperes(dialogue) {
  const sommaire = [
    ['reperes-demande', 'Une bonne demande'],
    ['reperes-4d', 'Le cadre 4D'],
    ['reperes-techniques', 'Techniques'],
    ['reperes-responsable', 'Usage responsable'],
    ['reperes-outils', 'Les outils'],
    ['reperes-sources', 'Sources'],
  ];

  /**
   * Fait défiler la zone de contenu jusqu'à `cible`, et seulement elle. scrollIntoView()
   * ferait aussi défiler la fenêtre elle-même (overflow masqué) : le sommaire sortait par le
   * haut et l'ascenseur restait bloqué.
   */
  function defilerVers(cible, { centrer = false, doux = false } = {}) {
    const corps = dialogue.querySelector('.panneau__corps');
    const ecart = cible.getBoundingClientRect().top - corps.getBoundingClientRect().top;
    const marge = centrer ? Math.max((corps.clientHeight - cible.offsetHeight) / 2, 16) : 16;
    const animer = doux && !globalThis.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    corps.scrollTo({ top: corps.scrollTop + ecart - marge, behavior: animer ? 'smooth' : 'auto' });
  }

  remplir(
    dialogue,
    el(
      'div',
      { class: 'reperes' },
      el(
        'header',
        { class: 'panneau__entete' },
        el(
          'div',
          {},
          el('h2', { id: 'titre-reperes' }, 'Repères'),
          el(
            'p',
            { class: 'seance__total' },
            'La méthode derrière les exercices, d’après les formations officielles d’Anthropic et d’OpenAI.',
          ),
        ),
        boutonIcone('xmark', 'Fermer les repères', { onclick: () => dialogue.close() }),
      ),
      el(
        'nav',
        { class: 'reperes__sommaire', 'aria-label': 'Sommaire des repères' },
        sommaire.map(([id, nom]) =>
          el(
            'a',
            {
              href: `#${id}`,
              onclick: (e) => {
                e.preventDefault();
                const section = dialogue.querySelector(`#${id}`);
                if (!section) return;
                defilerVers(section, { doux: true });
                // Le focus suit, pour le clavier et les lecteurs d'écran, sans redéfiler.
                section.querySelector('h3')?.focus({ preventScroll: true });
              },
            },
            nom,
          ),
        ),
      ),
      el(
        'div',
        { class: 'panneau__corps' },
        bloc(
          'reperes-demande',
          'Une bonne demande en cinq ingrédients',
          'L’IA ne connaît ni votre structure, ni votre client, ni vos habitudes. Plus la demande est précise, plus la réponse est utile.',
          el(
            'ol',
            { class: 'ingredients' },
            INGREDIENTS.map((i) => el('li', {}, el('strong', {}, i.nom), el('span', {}, i.texte))),
          ),
          el(
            'div',
            { class: 'avant-apres' },
            el(
              'div',
              { class: 'avant-apres__avant' },
              el('h4', {}, 'Avant'),
              el('p', {}, EXEMPLE_PROMPT.avant),
            ),
            el(
              'div',
              { class: 'avant-apres__apres' },
              el('h4', {}, 'Après'),
              el('pre', { class: 'bloc-prompt__texte' }, texteAvecCrochets(EXEMPLE_PROMPT.apres)),
            ),
          ),
        ),
        bloc(
          'reperes-4d',
          'Le cadre 4D d’Anthropic',
          'Le cours « AI Fluency » d’Anthropic décrit quatre compétences pour travailler avec l’IA de façon efficace et responsable. Chaque exercice en travaille une en priorité.',
          el(
            'div',
            { class: 'grille-4d' },
            COMPETENCES.map((c, i) =>
              el(
                'div',
                { class: 'carte-4d', id: `competence-${c.slug}`, tabindex: '-1' },
                el('span', { class: 'carte-4d__lettre', 'aria-hidden': 'true' }, `${i + 1}`),
                el('h4', {}, c.nom),
                el('p', { class: 'carte-4d__question' }, c.question),
                el('p', {}, c.description),
              ),
            ),
          ),
        ),
        bloc(
          'reperes-techniques',
          'Les techniques de prompt',
          'Tirées des guides de bonnes pratiques d’Anthropic et d’OpenAI Academy.',
          el(
            'dl',
            { class: 'techniques' },
            TECHNIQUES.map((t) =>
              el(
                'div',
                { id: `technique-${t.slug}`, tabindex: '-1' },
                el('dt', {}, t.nom),
                el('dd', {}, t.description),
              ),
            ),
          ),
        ),
        bloc(
          'reperes-responsable',
          'Utiliser l’IA de façon responsable',
          null,
          el(
            'ul',
            { class: 'regles' },
            REGLES.map((r) =>
              el(
                'li',
                {},
                icone(r.icone),
                el('div', {}, el('strong', {}, r.nom), el('p', {}, r.texte)),
              ),
            ),
          ),
        ),
        bloc(
          'reperes-outils',
          'Les outils et leurs fonctions utiles',
          'Noms vérifiés en octobre 2026. Les offres évoluent souvent : vérifiez ce que permet votre abonnement.',
          el(
            'div',
            { class: 'outils-reperes' },
            OUTILS.map((o) =>
              el(
                'div',
                { class: 'outil-repere' },
                el('h4', {}, o.nom, el('span', { class: 'outil-repere__editeur' }, o.editeur)),
                o.note ? el('p', { class: 'fiche__note' }, o.note) : null,
                el(
                  'ul',
                  {},
                  o.fonctions.map((f) =>
                    el(
                      'li',
                      {},
                      el('strong', {}, f.nom),
                      el('span', { class: 'offre' }, f.offre),
                      el('span', {}, f.role),
                    ),
                  ),
                ),
              ),
            ),
          ),
        ),
        bloc(
          'reperes-sources',
          'Sources officielles',
          null,
          el(
            'ul',
            { class: 'sources' },
            SOURCES.map((s) =>
              el(
                'li',
                {},
                el('span', { class: 'sources__editeur' }, s.editeur),
                el(
                  'a',
                  { href: s.lien, target: '_blank', rel: 'noopener', class: 'lien-externe' },
                  s.titre,
                  icone('arrow-up-right-from-square'),
                  el('span', { class: 'hors-ecran' }, ' (nouvel onglet)'),
                ),
              ),
            ),
          ),
        ),
      ),
    ),
  );

  dialogue.addEventListener('click', (evenement) => {
    if (evenement.target === dialogue) dialogue.close();
  });

  let retour = null;
  dialogue.addEventListener('close', () => retour?.focus());

  return {
    /** Ouvre les repères, éventuellement sur une section (« competence-description »). */
    ouvrir(ancre) {
      retour = document.activeElement;
      if (!dialogue.open) dialogue.showModal();
      const cible = ancre ? dialogue.querySelector(`#${CSS.escape(ancre)}`) : null;
      if (cible) {
        defilerVers(cible, { centrer: true });
        cible.focus({ preventScroll: true });
        cible.classList.add('repere-actif');
        setTimeout(() => cible.classList.remove('repere-actif'), 1600);
      } else {
        dialogue.querySelector('.panneau__corps').scrollTop = 0;
        dialogue.querySelector('#titre-reperes').setAttribute('tabindex', '-1');
        dialogue.querySelector('#titre-reperes').focus({ preventScroll: true });
      }
    },
  };
}
