/**
 * Les actions du bandeau : Repères, vue formateur / apprenant, thème, Ma séance.
 */
import { el, remplir, typographier } from '../ui.js';
import { icone } from '../icones.js';

const THEMES = {
  auto: { suivant: 'light', icone: 'circle-half-stroke', nom: 'Thème : celui du système' },
  light: { suivant: 'dark', icone: 'sun', nom: 'Thème : clair' },
  dark: { suivant: 'auto', icone: 'moon', nom: 'Thème : sombre' },
};

export function appliquerTheme(theme) {
  if (theme === 'light' || theme === 'dark') document.documentElement.dataset.theme = theme;
  else delete document.documentElement.dataset.theme;
}

export function monterBandeau(conteneur, magasin, { ouvrirSeance, ouvrirReperes }) {
  const vue = el(
    'div',
    { class: 'bascule-vue', role: 'group', 'aria-label': 'Vue' },
    [
      ['formateur', 'Formateur', 'chalkboard-user'],
      ['apprenant', 'Apprenant', 'user-graduate'],
    ].map(([valeur, nom, nomIcone]) =>
      el(
        'button',
        {
          type: 'button',
          class: 'bascule-vue__choix',
          'data-vue': valeur,
          title:
            valeur === 'apprenant' ? 'Masque les notes formateur' : 'Affiche les notes formateur',
          onclick: () => magasin.modifier({ vue: valeur }, ['vue']),
        },
        icone(nomIcone),
        el('span', { class: 'bascule-vue__nom' }, nom),
      ),
    ),
  );

  const theme = el('button', { type: 'button', class: 'bouton-icone', id: 'bouton-theme' });
  theme.addEventListener('click', () => {
    magasin.modifier({ theme: THEMES[magasin.get().theme].suivant }, ['theme']);
  });

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
        onclick: () => ouvrirReperes(),
      },
      icone('compass'),
      el('span', { class: 'bouton-reperes__texte' }, 'Repères'),
    ),
    vue,
    theme,
    seance,
  );

  function synchroniser(etat) {
    for (const b of vue.querySelectorAll('button')) {
      b.setAttribute('aria-pressed', String(b.dataset.vue === etat.vue));
    }
    const t = THEMES[etat.theme];
    theme.replaceChildren(icone(t.icone));
    theme.setAttribute('aria-label', typographier(`${t.nom}. Changer de thème`));
    theme.title = typographier(t.nom);
    appliquerTheme(etat.theme);
    const n = etat.seance.ids.length;
    compteur.textContent = String(n);
    compteur.hidden = n === 0;
    seance.setAttribute(
      'aria-label',
      n ? `Ma séance, ${n} exercice${n > 1 ? 's' : ''}` : 'Ma séance, vide',
    );
    document.body.dataset.vue = etat.vue;
  }

  magasin.ecouter((etat, quoi) => {
    if (quoi.has('vue') || quoi.has('theme') || quoi.has('seance')) synchroniser(etat);
  });
  synchroniser(magasin.get());
}
