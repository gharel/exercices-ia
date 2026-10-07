/**
 * Icônes Font Awesome Free (licence CC BY 4.0), dessinées en SVG. La liste ci-dessous est la
 * seule source : `npm run icones` en extrait les tracés dans icones-donnees.js.
 * Les icônes sont décoratives (aria-hidden) : le texte voisin doit suffire.
 */
import { TRACES } from './icones-donnees.js';

export const ICONES = [
  // Familles de tâches
  'pen-nib',
  'spell-check',
  'list-ul',
  'chart-column',
  'magnifying-glass',
  'palette',
  'calendar-check',
  'robot',
  // Métiers
  'layer-group',
  'house',
  'calculator',
  'helmet-safety',
  'stethoscope',
  'users',
  'scale-balanced',
  'handshake',
  'store',
  'folder-open',
  'bullhorn',
  'umbrella-beach',
  'landmark',
  'industry',
  'truck',
  'building-columns',
  'graduation-cap',
  'pen',
  'utensils',
  'bread-slice',
  // Interface
  'clock',
  'bookmark',
  'plus',
  'minus',
  'check',
  'xmark',
  'copy',
  'download',
  'print',
  'link',
  'shuffle',
  'sun',
  'moon',
  'circle-half-stroke',
  'chalkboard-user',
  'user-graduate',
  'arrow-left',
  'arrow-right',
  'arrow-up',
  'arrow-down',
  'trash-can',
  'circle-info',
  'triangle-exclamation',
  'lightbulb',
  'list-check',
  'sliders',
  'chevron-down',
  'wand-magic-sparkles',
  'compass',
  'book-open',
  'shield-halved',
  'file-lines',
  'bullseye',
  'flag-checkered',
  'comments',
  'keyboard',
  'location-dot',
  'arrow-up-right-from-square',
  'rotate-left',
  'stairs',
  'toolbox',
  'brain',
];

const SVG = 'http://www.w3.org/2000/svg';

/**
 * icone('clock') → <svg class="icone" aria-hidden="true">…</svg>.
 * Une icône inconnue lève une erreur (tests/unit/icones.test.js vérifie les appels).
 */
export function icone(nom, { classe = '' } = {}) {
  const trace = TRACES[nom];
  if (!trace) throw new Error(`Icône inconnue : ${nom}`);
  const svg = document.createElementNS(SVG, 'svg');
  svg.setAttribute('viewBox', trace.viewBox);
  svg.setAttribute('class', classe ? `icone ${classe}` : 'icone');
  svg.setAttribute('aria-hidden', 'true');
  svg.setAttribute('focusable', 'false');
  for (const d of trace.d) {
    const chemin = document.createElementNS(SVG, 'path');
    chemin.setAttribute('d', d);
    svg.append(chemin);
  }
  return svg;
}
