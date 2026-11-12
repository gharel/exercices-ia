/**
 * Le bloc « Votre profil » : fonction, secteur, niveau, outils (de vrais boutons radio et cases
 * à cocher, habillés en pastilles), et son résumé compact qui suit le défilement.
 */
import { el, remplir } from '../ui.js';
import { icone } from '../icones.js';
import { FONCTIONS, SECTEURS, AUTRE_METIER } from '../../donnees/metiers.js';
import { NIVEAUX } from '../../donnees/referentiels.js';
import { OUTILS } from '../../donnees/outils.js';
import { metier, nomNiveau, outil } from './commun.js';

/**
 * La fonction et le secteur du profil : « Comptabilité et finance », « Bâtiment et travaux
 * publics », ou « Tous métiers » si aucun n'est choisi. `court` : les noms courts des pastilles.
 */
export function libelleMetier(profil, { court = false } = {}) {
  const nom = (slug) => (court ? metier(slug).court : metier(slug).nom);
  const parties = [];
  if (profil.fonction) parties.push(nom(profil.fonction));
  if (profil.metier === 'autre') parties.push(profil.metierLibre || AUTRE_METIER.nom);
  else if (profil.metier !== 'tous') parties.push(nom(profil.metier));
  return parties.length ? parties : [metier('tous').nom];
}

export function libelleProfil(profil) {
  const outils = profil.outils.length
    ? profil.outils.map((o) => outil(o).nom).join(', ')
    : 'Tous les outils';
  return [...libelleMetier(profil), nomNiveau(profil.niveau), outils];
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

const TOUTES_FONCTIONS = {
  slug: '',
  court: 'Toutes fonctions',
  nom: 'Toutes fonctions',
  icone: 'layer-group',
  description: 'Sans tenir compte du poste.',
};
const TOUS_SECTEURS = {
  slug: 'tous',
  court: 'Tous secteurs',
  nom: 'Tous secteurs',
  icone: 'layer-group',
  description: 'Sans tenir compte du secteur d’activité.',
};

const parNomCourt = (a, b) => a.court.localeCompare(b.court, 'fr', { sensitivity: 'base' });

/** « Toutes fonctions » en tête, puis l'ordre alphabétique. */
export function fonctionsDansLOrdre() {
  return [TOUTES_FONCTIONS, ...[...FONCTIONS].sort(parNomCourt)];
}

/** « Tous secteurs » en tête, puis l'ordre alphabétique, puis « Autre secteur ». */
export function secteursDansLOrdre() {
  return [TOUS_SECTEURS, ...[...SECTEURS].sort(parNomCourt), AUTRE_METIER];
}

/**
 * Un groupe de pastilles (boutons radio). Sur téléphone, il est replié sur le choix courant :
 * le bouton « Changer » déplie la liste, qui se replie dès qu'un choix est fait.
 */
function groupePastilles(nom, classe, choix) {
  const changer = el(
    'button',
    { type: 'button', class: 'pastille-action choix__changer', 'aria-expanded': 'false' },
    'Changer',
  );
  const liste = el(
    'div',
    { class: `pastilles pastilles--metiers ${classe}` },
    choix.map((m) =>
      el(
        'label',
        { class: 'pastille', title: `${m.nom} : ${m.description}` },
        el('input', { type: 'radio', name: nom, value: m.slug, 'aria-label': m.nom }),
        el('span', { class: 'pastille__corps', 'aria-hidden': 'true' }, icone(m.icone), m.court),
      ),
    ),
    changer,
  );
  const deplier = (ouvert) => {
    liste.toggleAttribute('data-ouvert', ouvert);
    changer.setAttribute('aria-expanded', String(ouvert));
    changer.textContent = ouvert ? 'Réduire' : 'Changer';
  };
  changer.addEventListener('click', () => deplier(!liste.hasAttribute('data-ouvert')));
  liste.addEventListener('change', () => deplier(false));
  return liste;
}

export function monterProfil(conteneur, resume, magasin) {
  const descriptionNiveau = el('p', {
    class: 'profil__aide',
    id: 'description-niveau',
    'aria-live': 'polite',
  });

  const champAutre = el('input', {
    id: 'metier-libre',
    type: 'text',
    class: 'champ',
    maxlength: '80',
    autocomplete: 'off',
    placeholder: 'Ex. : architecte, imprimerie, salle de sport…',
    value: magasin.get().profil.metierLibre,
  });
  const blocAutre = el(
    'div',
    { class: 'profil__autre' },
    el('label', { for: 'metier-libre' }, 'Votre secteur ou votre métier, en quelques mots'),
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
      el('legend', {}, el('span', { class: 'choix__etape' }, '1'), 'Votre fonction'),
      groupePastilles('fonction', 'pastilles--fonctions', fonctionsDansLOrdre()),
    ),
    el(
      'fieldset',
      { class: 'choix' },
      el('legend', {}, el('span', { class: 'choix__etape' }, '2'), 'Votre secteur'),
      groupePastilles('metier', 'pastilles--secteurs', secteursDansLOrdre()),
      blocAutre,
    ),
    el(
      'fieldset',
      { class: 'choix' },
      el('legend', {}, el('span', { class: 'choix__etape' }, '3'), 'Votre niveau'),
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
      el('legend', {}, el('span', { class: 'choix__etape' }, '4'), 'Vos outils'),
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
          // Cible du focus du bouton « Remonter en haut ».
          { id: 'titre-profil', tabindex: '-1' },
          'Des exercices concrets pour pratiquer l’IA dans votre métier',
        ),
        el(
          'p',
          { class: 'profil__chapo' },
          'Choisissez une fonction, un secteur ou les deux, puis un niveau et vos outils : chaque exercice est prêt à faire, avec une situation calédonienne, un prompt de départ et des données fictives.',
        ),
      ),
      formulaire,
    ),
  );

  function synchroniser() {
    const { profil } = magasin.get();
    for (const radio of formulaire.querySelectorAll('input[name="fonction"]')) {
      radio.checked = radio.value === profil.fonction;
    }
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
    if (cible.name === 'fonction') changerProfil({ fonction: cible.value });
    else if (cible.name === 'metier') {
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
    const { profil } = magasin.get();
    // Fonction et secteur ensemble : les noms courts, pour tenir sur un téléphone.
    const metiers = libelleMetier(profil, { court: Boolean(profil.fonction) });
    const [nomNiv, outils] = libelleProfil(profil).slice(-2);
    const suite = (classe, texte) =>
      el(
        'span',
        { class: classe },
        // Le point reste collé à ce qui le suit : il ne finit jamais seul une ligne.
        el('span', { class: 'resume-profil__point', 'aria-hidden': 'true' }, '·'),
        texte,
      );
    remplir(
      resume,
      el(
        'div',
        { class: 'resume-profil__interieur' },
        el(
          'p',
          { class: 'resume-profil__texte' },
          el('span', { class: 'resume-profil__etiquette' }, 'Profil'),
          el('strong', {}, metiers[0]),
          metiers.slice(1).map((nom) => suite('resume-profil__secteur', nom)),
          suite('resume-profil__niveau', nomNiv),
          suite('resume-profil__outils', outils),
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
