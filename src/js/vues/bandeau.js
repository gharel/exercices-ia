/**
 * Les actions du bandeau : Repères, thème, Ma séance.
 * Le thème suit le système, ou il est clair ou sombre ; l'icône montre le thème actuel. Le choix
 * vaut pour tous les outils Skazy Formation et se reprend aussitôt quand il change ailleurs.
 */
import { el, remplir, typographier } from '../ui.js';
import { icone } from '../icones.js';
import { ecouterTheme } from '../stockage.js';

const THEMES = {
  systeme: { suivant: 'light', icone: 'circle-half-stroke', nom: 'Thème : celui du système' },
  light: { suivant: 'dark', icone: 'sun', nom: 'Thème : clair' },
  dark: { suivant: 'systeme', icone: 'moon', nom: 'Thème : sombre' },
};

export function appliquerTheme(theme) {
  const choisi = theme === 'light' || theme === 'dark';
  if (choisi) document.documentElement.dataset.theme = theme;
  else delete document.documentElement.dataset.theme;
  // Barre du navigateur sur téléphone : de la couleur du bandeau dans le thème choisi ; thème du
  // système : celle que index.html donne à chaque schéma de couleurs.
  const bandeau = getComputedStyle(document.documentElement).getPropertyValue('--surface').trim();
  for (const meta of document.querySelectorAll('meta[name="theme-color"]')) {
    meta.dataset.systeme ??= meta.content;
    meta.content = choisi ? bandeau : meta.dataset.systeme;
  }
}

export function monterBandeau(conteneur, magasin, { ouvrirSeance, ouvrirReperes }) {
  const theme = el('button', { type: 'button', class: 'bouton-icone', id: 'bouton-theme' });
  theme.addEventListener('click', () => {
    magasin.modifier({ theme: THEMES[magasin.get().theme].suivant }, ['theme']);
  });
  // Choisi dans un autre onglet ou un autre outil, ou au retour sur la page : on le reprend.
  ecouterTheme(() => magasin.relireTheme());

  const compteur = el('span', { class: 'compteur' });
  const seance = el(
    'button',
    {
      type: 'button',
      class: 'bouton bouton--primaire bouton-seance',
      id: 'bouton-seance',
      onclick: ouvrirSeance,
    },
    icone('bookmark'),
    el('span', { class: 'bouton-seance__texte' }, 'Ma séance'),
    compteur,
  );

  remplir(
    conteneur,
    el(
      'button',
      {
        type: 'button',
        class: 'bouton bouton--fantome bouton-reperes',
        // Sous 960 px, seule l'icône reste : le nom passe par aria-label et l'info-bulle.
        'aria-label': 'Repères',
        title: 'Repères',
        onclick: () => ouvrirReperes(),
      },
      icone('compass'),
      el('span', { class: 'bouton-reperes__texte' }, 'Repères'),
    ),
    theme,
    seance,
  );

  function synchroniser(etat) {
    const t = THEMES[etat.theme];
    theme.replaceChildren(icone(t.icone));
    const nom = typographier(`${t.nom}. Changer de thème`);
    theme.setAttribute('aria-label', nom);
    theme.title = nom;
    appliquerTheme(etat.theme);
    const n = etat.seance.ids.length;
    compteur.textContent = String(n);
    compteur.hidden = n === 0;
    seance.setAttribute(
      'aria-label',
      n ? `Ma séance, ${n} exercice${n > 1 ? 's' : ''}` : 'Ma séance, vide',
    );
  }

  magasin.ecouter((etat, quoi) => {
    if (quoi.has('theme') || quoi.has('seance')) synchroniser(etat);
  });
  synchroniser(magasin.get());
}
