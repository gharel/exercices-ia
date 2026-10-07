/**
 * Le bloc « Votre profil » : métier, niveau, outils (de vrais boutons radio et cases à cocher,
 * habillés en pastilles), et son résumé compact qui suit le défilement.
 */
import { el, remplir } from '../ui.js';
import { icone } from '../icones.js';
import { METIERS, AUTRE_METIER } from '../../donnees/metiers.js';
import { NIVEAUX } from '../../donnees/referentiels.js';
import { OUTILS } from '../../donnees/outils.js';
import { metier, nomNiveau, outil } from './commun.js';

export function libelleProfil(profil) {
  const nomMetier =
    profil.metier === 'autre' && profil.metierLibre
      ? profil.metierLibre
      : metier(profil.metier).nom;
  const outils = profil.outils.length
    ? profil.outils.map((o) => outil(o).nom).join(', ')
    : 'Tous les outils';
  return [nomMetier, nomNiveau(profil.niveau), outils];
}

// « Tous niveaux » en premier : c'est le choix par défaut.
const NIVEAUX_PROFIL = [
  {
    slug: 'tous',
    nom: 'Tous niveaux',
    accroche: 'Je compose',
    description: 'Les trois niveaux mélangés, pour composer une séance.',
  },
  ...NIVEAUX,
];

/** « Tous métiers » en tête, puis l'ordre alphabétique, puis « Autre métier ». */
export function metiersDansLOrdre() {
  const [tous, ...autres] = METIERS;
  const tries = [...autres].sort((a, b) =>
    a.court.localeCompare(b.court, 'fr', { sensitivity: 'base' }),
  );
  return [tous, ...tries, AUTRE_METIER];
}

export function monterProfil(conteneur, resume, magasin) {
  const descriptionNiveau = el('p', {
    class: 'profil__aide',
    id: 'description-niveau',
    'aria-live': 'polite',
  });
  const choixMetiers = metiersDansLOrdre();

  const champAutre = el('input', {
    id: 'metier-libre',
    type: 'text',
    class: 'champ',
    maxlength: '80',
    autocomplete: 'off',
    placeholder: 'Ex. : fleuriste, garage automobile, crèche…',
    value: magasin.get().profil.metierLibre,
  });
  const blocAutre = el(
    'div',
    { class: 'profil__autre' },
    el('label', { for: 'metier-libre' }, 'Votre métier, en quelques mots'),
    champAutre,
    el(
      'p',
      { class: 'profil__aide' },
      'Les exercices transversaux s’affichent, avec votre métier glissé dans la situation et le prompt.',
    ),
  );

  const formulaire = el(
    'form',
    { class: 'profil__formulaire', onsubmit: (e) => e.preventDefault() },
    el(
      'fieldset',
      { class: 'choix' },
      el('legend', {}, el('span', { class: 'choix__etape' }, '1'), 'Votre métier'),
      el(
        'div',
        { class: 'pastilles pastilles--metiers' },
        choixMetiers.map((m) =>
          el(
            'label',
            { class: 'pastille', title: `${m.nom} : ${m.description}` },
            el('input', { type: 'radio', name: 'metier', value: m.slug, 'aria-label': m.nom }),
            el(
              'span',
              { class: 'pastille__corps', 'aria-hidden': 'true' },
              icone(m.icone),
              m.court,
            ),
          ),
        ),
      ),
      blocAutre,
    ),
    el(
      'fieldset',
      { class: 'choix' },
      el('legend', {}, el('span', { class: 'choix__etape' }, '2'), 'Votre niveau'),
      el(
        'div',
        { class: 'niveaux' },
        NIVEAUX_PROFIL.map((n) =>
          el(
            'label',
            { class: 'niveau' },
            el('input', { type: 'radio', name: 'niveau', value: n.slug }),
            el(
              'span',
              { class: 'niveau__corps' },
              el(
                'span',
                { class: 'niveau__marches', 'aria-hidden': 'true' },
                [0, 1, 2].map((m) => {
                  const rang = NIVEAUX.findIndex((x) => x.slug === n.slug);
                  return el('span', { class: rang < 0 ? 'mixte' : m <= rang ? 'plein' : '' });
                }),
              ),
              el('span', { class: 'niveau__nom' }, n.nom),
              el('span', { class: 'niveau__accroche' }, n.accroche),
            ),
          ),
        ),
      ),
      descriptionNiveau,
    ),
    el(
      'fieldset',
      { class: 'choix' },
      el('legend', {}, el('span', { class: 'choix__etape' }, '3'), 'Vos outils'),
      el(
        'div',
        { class: 'pastilles pastilles--outils' },
        el(
          'button',
          {
            type: 'button',
            class: 'pastille-action',
            id: 'tous-outils',
            title: 'Aucun outil coché : tous les exercices s’affichent',
          },
          'Tous les outils',
        ),
        OUTILS.map((o) =>
          el(
            'label',
            { class: 'pastille pastille--outil', title: o.note ?? o.editeur },
            el('input', { type: 'checkbox', name: 'outils', value: o.slug }),
            el(
              'span',
              { class: 'pastille__corps' },
              el('span', { class: 'pastille__coche' }, icone('check')),
              o.nom,
            ),
          ),
        ),
      ),
    ),
  );

  remplir(
    conteneur,
    el(
      'div',
      { class: 'profil__interieur' },
      el(
        'div',
        { class: 'profil__intro' },
        el('p', { class: 'surtitre' }, 'Pratiquer l’IA en formation'),
        el(
          'h1',
          { id: 'titre-profil' },
          'Des exercices concrets pour pratiquer l’IA dans votre métier',
        ),
        el(
          'p',
          { class: 'profil__chapo' },
          'Choisissez un métier, un niveau et vos outils : chaque exercice est prêt à faire, avec une situation calédonienne, un prompt de départ et des données fictives.',
        ),
      ),
      formulaire,
    ),
  );

  function synchroniser() {
    const { profil } = magasin.get();
    for (const radio of formulaire.querySelectorAll('input[name="metier"]')) {
      radio.checked = radio.value === profil.metier;
    }
    for (const radio of formulaire.querySelectorAll('input[name="niveau"]')) {
      radio.checked = radio.value === profil.niveau;
    }
    for (const caseOutil of formulaire.querySelectorAll('input[name="outils"]')) {
      caseOutil.checked = profil.outils.includes(caseOutil.value);
    }
    formulaire
      .querySelector('#tous-outils')
      .setAttribute('aria-pressed', String(!profil.outils.length));
    blocAutre.hidden = profil.metier !== 'autre';
    remplir(descriptionNiveau, NIVEAUX_PROFIL.find((n) => n.slug === profil.niveau).description);
    synchroniserResume();
  }

  function changerProfil(changement) {
    magasin.modifier({ profil: { ...magasin.get().profil, ...changement } }, ['profil']);
  }

  formulaire.addEventListener('change', (evenement) => {
    const cible = evenement.target;
    if (cible.name === 'metier') {
      changerProfil({ metier: cible.value });
      if (cible.value === 'autre') champAutre.focus();
    } else if (cible.name === 'niveau') changerProfil({ niveau: cible.value });
    else if (cible.name === 'outils') {
      const outils = [...formulaire.querySelectorAll('input[name="outils"]:checked')].map(
        (c) => c.value,
      );
      changerProfil({ outils });
    }
  });

  let minuterie;
  champAutre.addEventListener('input', () => {
    clearTimeout(minuterie);
    minuterie = setTimeout(() => changerProfil({ metierLibre: champAutre.value.trim() }), 250);
  });

  formulaire
    .querySelector('#tous-outils')
    .addEventListener('click', () => changerProfil({ outils: [] }));

  // Résumé compact : visible quand le bloc profil a quitté l'écran.
  function synchroniserResume() {
    const [nomMetier, nomNiv, outils] = libelleProfil(magasin.get().profil);
    remplir(
      resume,
      el(
        'div',
        { class: 'resume-profil__interieur' },
        el(
          'p',
          { class: 'resume-profil__texte' },
          el('span', { class: 'resume-profil__etiquette' }, 'Profil'),
          el('strong', {}, nomMetier),
          // Le point reste collé au niveau : il ne finit jamais seul une ligne.
          el(
            'span',
            { class: 'resume-profil__niveau' },
            el('span', { class: 'resume-profil__point', 'aria-hidden': 'true' }, '·'),
            nomNiv,
          ),
          el(
            'span',
            { class: 'resume-profil__outils' },
            el('span', { class: 'resume-profil__point', 'aria-hidden': 'true' }, '·'),
            outils,
          ),
        ),
        el(
          'button',
          {
            type: 'button',
            class: 'bouton bouton--discret',
            onclick: () => {
              conteneur.scrollIntoView({ behavior: 'smooth', block: 'start' });
              formulaire.querySelector('input:checked')?.focus({ preventScroll: true });
            },
          },
          icone('sliders'),
          'Modifier',
        ),
      ),
    );
  }

  if ('IntersectionObserver' in globalThis) {
    new IntersectionObserver(
      ([entree]) => {
        resume.hidden = entree.isIntersecting;
      },
      { rootMargin: '-72px 0px 0px 0px' },
    ).observe(formulaire);
  }

  magasin.ecouter((_etat, quoi) => {
    if (quoi.has('profil')) synchroniser();
  });
  synchroniser();
}
