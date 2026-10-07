/**
 * Petits éléments partagés par les vues : noms des référentiels, badges, boutons, message.
 */
import { el, typographier } from '../ui.js';
import { icone } from '../icones.js';
import { FAMILLES, NIVEAUX, COMPETENCES, TECHNIQUES } from '../../donnees/referentiels.js';
import { OUTILS } from '../../donnees/outils.js';
import { METIERS, AUTRE_METIER } from '../../donnees/metiers.js';

const parSlug = (liste) => new Map(liste.map((x) => [x.slug, x]));
const FAMILLE = parSlug(FAMILLES);
const NIVEAU = parSlug(NIVEAUX);
const OUTIL = parSlug(OUTILS);
const METIER = parSlug([...METIERS, AUTRE_METIER]);
const COMPETENCE = parSlug(COMPETENCES);
const TECHNIQUE = parSlug(TECHNIQUES);

export const famille = (slug) => FAMILLE.get(slug);
export const niveau = (slug) => NIVEAU.get(slug);
export const outil = (slug) => OUTIL.get(slug);
export const metier = (slug) => METIER.get(slug);
export const competence = (slug) => COMPETENCE.get(slug);
export const technique = (slug) => TECHNIQUE.get(slug);

export const nomNiveau = (slug) =>
  slug === 'tous' ? 'Tous niveaux' : (NIVEAU.get(slug)?.nom ?? slug);

/** Badge de famille, en majuscules, aux couleurs de la catégorie. */
export function badgeFamille(slug, { taille = '' } = {}) {
  const f = famille(slug);
  return el(
    'span',
    { class: `badge${taille ? ` badge--${taille}` : ''}`, 'data-couleur': f.couleur },
    icone(f.icone),
    f.court,
  );
}

/** Bouton : variante 'primaire' | 'secondaire' | 'fantome' | 'discret', icône facultative. */
export function bouton(
  texte,
  { variante = 'secondaire', icone: nomIcone, classe = '', ...attributs } = {},
) {
  return el(
    'button',
    {
      type: 'button',
      class: `bouton bouton--${variante}${classe ? ` ${classe}` : ''}`,
      ...attributs,
    },
    nomIcone ? icone(nomIcone) : null,
    texte ? el('span', { class: 'bouton__texte' }, texte) : null,
  );
}

/**
 * Lien vers un autre site, ouvert dans un nouvel onglet. L'icône reste collée au dernier mot :
 * quand le texte passe sur deux lignes, elle le suit au lieu de partir au bout de la ligne.
 */
export function lienExterne(href, texte) {
  // Typographié d'abord : la coupure ne tombe jamais entre un mot et son « ? » ou son « : ».
  const propre = typographier(texte);
  const coupure = propre.lastIndexOf(' ') + 1;
  return el(
    'a',
    { class: 'lien-externe', href, target: '_blank', rel: 'noopener' },
    propre.slice(0, coupure),
    el(
      'span',
      { class: 'lien-externe__fin' },
      propre.slice(coupure),
      icone('arrow-up-right-from-square'),
    ),
    el('span', { class: 'hors-ecran' }, ' (nouvel onglet)'),
  );
}

/** Bouton fait d'une seule icône, avec son nom pour les lecteurs d'écran. */
export function boutonIcone(nomIcone, libelle, attributs = {}) {
  return el(
    'button',
    { type: 'button', class: 'bouton-icone', 'aria-label': libelle, title: libelle, ...attributs },
    icone(nomIcone),
  );
}

let minuterieToast;
/** Petit message temporaire en bas de l'écran (lu aussi par les lecteurs d'écran). */
export function toast(texte) {
  const zone = document.getElementById('toast');
  if (!zone) return;
  zone.textContent = '';
  zone.append(el('span', {}, icone('check'), texte));
  zone.classList.add('toast--visible');
  clearTimeout(minuterieToast);
  minuterieToast = setTimeout(() => zone.classList.remove('toast--visible'), 2600);
}

/** Texte avec les [passages à compléter] surlignés. */
export function texteAvecCrochets(texte) {
  return texte
    .split(/(\[[^\]\n]{1,120}\])/)
    .filter(Boolean)
    .map((morceau) =>
      /^\[.*\]$/.test(morceau) ? el('mark', { class: 'a-completer' }, morceau) : morceau,
    );
}
