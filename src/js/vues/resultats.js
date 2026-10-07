/**
 * Les résultats : barre d'outils (recherche, durée, hasard), pastilles de familles avec leur
 * nombre d'exercices, grille de cartes affichée par lots, état vide, séance partagée.
 */
import { el, remplir, pluriel, annoncer } from '../ui.js';
import { icone } from '../icones.js';
import { FAMILLES, TRANCHES_DUREE } from '../../donnees/referentiels.js';
import { selectionner, tirerAuHasard, personnaliser } from '../filtres.js';
import { PAS_AFFICHAGE } from '../etat.js';
import { creerCarte, majSignet } from './carte.js';
import { bouton, toast } from './commun.js';
import { libelleProfil } from './profil.js';

export function monterResultats(conteneur, magasin, catalogue, { ouvrirFiche }) {
  const parId = new Map(catalogue.map((e) => [e.id, e]));
  let courants = [];
  let dernierTirage = null;

  const recherche = el('input', {
    type: 'search',
    id: 'recherche',
    class: 'champ champ--recherche',
    placeholder: 'Rechercher : annonce, planning…',
    'aria-label': 'Rechercher un exercice',
    autocomplete: 'off',
  });
  // Durée : un groupe de boutons radio habillé en sélecteur segmenté, avec le nombre
  // d'exercices de chaque tranche ; une tranche vide est grisée.
  const CHOIX_DUREE = [{ slug: '', nom: 'Toutes durées', court: 'Toutes' }, ...TRANCHES_DUREE];
  const duree = el(
    'fieldset',
    { class: 'duree' },
    el('legend', { class: 'hors-ecran' }, 'Durée'),
    el(
      'div',
      { class: 'duree__choix' },
      el('span', { class: 'duree__icone', 'aria-hidden': 'true', title: 'Durée' }, icone('clock')),
      CHOIX_DUREE.map((t) =>
        el(
          'label',
          { class: 'duree__option', title: t.nom },
          el('input', { type: 'radio', name: 'duree', value: t.slug, 'data-nom': t.nom }),
          el('span', { class: 'duree__texte' }, t.court),
          el('span', { class: 'duree__nombre' }, '0'),
        ),
      ),
    ),
  );
  const radiosDuree = [...duree.querySelectorAll('input')];
  const hasard = bouton('Au hasard', { icone: 'shuffle', variante: 'secondaire', id: 'hasard' });
  const titre = el('h2', { id: 'titre-resultats' });
  const contexte = el('p', { class: 'resultats__contexte' });
  const familles = el('div', {
    class: 'familles',
    role: 'group',
    'aria-label': 'Filtrer par famille de tâches',
  });
  const reinitialiser = bouton('Effacer les filtres', {
    icone: 'rotate-left',
    variante: 'discret',
    classe: 'resultats__effacer',
  });
  const banniere = el('div', { class: 'banniere-partage', hidden: true });
  const grille = el('div', { class: 'grille', id: 'grille' });
  const vide = el('div', { class: 'vide', hidden: true });
  const plus = el('div', { class: 'resultats__plus' });

  const boutonsFamilles = new Map(
    FAMILLES.map((f) => {
      const b = el(
        'button',
        {
          type: 'button',
          class: 'filtre-famille',
          'data-couleur': f.couleur,
          'aria-pressed': 'false',
          'data-famille': f.slug,
        },
        icone(f.icone),
        el('span', {}, f.court),
        el('span', { class: 'filtre-famille__nombre' }, '0'),
      );
      b.addEventListener('click', () => {
        const { filtres } = magasin.get();
        const actives = filtres.familles.includes(f.slug)
          ? filtres.familles.filter((x) => x !== f.slug)
          : [...filtres.familles, f.slug];
        magasin.modifier({ filtres: { ...filtres, familles: actives } }, ['filtres']);
      });
      return [f.slug, b];
    }),
  );
  familles.append(...boutonsFamilles.values());
  // Familles et durée sur une même ligne de filtres, qui passe à la ligne si besoin.
  const filtresLigne = el('div', { class: 'filtres' }, familles, duree, reinitialiser);

  remplir(
    conteneur,
    el(
      'div',
      { class: 'resultats__interieur' },
      el(
        'div',
        { class: 'resultats__entete' },
        el('div', { class: 'resultats__titres' }, titre, contexte),
        el(
          'div',
          { class: 'resultats__outils' },
          el('div', { class: 'champ-icone' }, icone('magnifying-glass'), recherche),
          hasard,
        ),
      ),
      filtresLigne,
      banniere,
      grille,
      vide,
      plus,
    ),
  );

  let minuterie;
  recherche.addEventListener('input', () => {
    clearTimeout(minuterie);
    minuterie = setTimeout(() => {
      const { filtres } = magasin.get();
      magasin.modifier({ filtres: { ...filtres, recherche: recherche.value } }, ['filtres']);
    }, 200);
  });
  duree.addEventListener('change', (evenement) => {
    const { filtres } = magasin.get();
    magasin.modifier({ filtres: { ...filtres, duree: evenement.target.value } }, ['filtres']);
  });
  reinitialiser.addEventListener('click', () => {
    recherche.value = '';
    magasin.modifier({ filtres: { familles: [], duree: '', recherche: '' } }, ['filtres']);
    recherche.focus();
  });
  hasard.addEventListener('click', () => {
    const tire = tirerAuHasard(courants, Math.random, dernierTirage);
    if (!tire) return;
    dernierTirage = tire.id;
    ouvrirFiche(tire.id, courants);
  });

  function basculer(id) {
    const dedans = magasin.basculerDansSeance(id);
    toast(dedans ? 'Ajouté à votre séance' : 'Retiré de votre séance');
  }

  /** Les exercices à afficher : la séance partagée, ou la sélection du profil. */
  function calculer() {
    const { profil, filtres, partage } = magasin.get();
    if (partage) {
      return {
        exercices: partage.ids.map((id) => parId.get(id)).filter(Boolean),
        parFamille: null,
        parDuree: null,
      };
    }
    const resultat = selectionner(catalogue, profil, filtres);
    if (profil.metier === 'autre') {
      resultat.exercices = resultat.exercices.map((e) => personnaliser(e, profil.metierLibre));
    }
    return resultat;
  }

  function afficherGrille(etat) {
    const ids = new Set(etat.seance.ids);
    const visibles = courants.slice(0, etat.limite);
    remplir(
      grille,
      visibles.map((e) =>
        creerCarte(e, {
          dansSeance: ids.has(e.id),
          afficherMetier: etat.partage || etat.profil.metier === 'tous',
          onOuvrir: (id) => ouvrirFiche(id, courants),
          onBasculer: basculer,
        }),
      ),
    );
    const restants = courants.length - visibles.length;
    remplir(
      plus,
      restants > 0
        ? [
            el('p', { class: 'resultats__compte' }, `${visibles.length} sur ${courants.length}`),
            bouton(`Afficher ${Math.min(PAS_AFFICHAGE, restants)} de plus`, {
              icone: 'chevron-down',
              variante: 'secondaire',
              onclick: () => {
                const premierNouveau = visibles.length;
                magasin.modifier({ limite: etat.limite + PAS_AFFICHAGE }, ['limite']);
                grille.children[premierNouveau]?.querySelector('.carte__lien')?.focus();
              },
            }),
          ]
        : [],
    );
  }

  function afficher(etat) {
    const { exercices, parFamille, parDuree } = calculer();
    courants = exercices;
    const { profil, filtres, partage } = etat;

    if (partage) {
      titre.textContent = partage.titre || 'Séance partagée';
      remplir(contexte, pluriel(exercices.length, 'exercice'), ' choisis par votre formateur');
    } else {
      remplir(titre, pluriel(exercices.length, 'exercice'));
      remplir(contexte, libelleProfil(profil).join(' · '));
    }
    filtresLigne.hidden = Boolean(partage);
    conteneur.querySelector('.resultats__outils').hidden = Boolean(partage);

    for (const [slug, b] of boutonsFamilles) {
      b.setAttribute('aria-pressed', String(filtres.familles.includes(slug)));
      const n = parFamille?.[slug] ?? 0;
      b.querySelector('.filtre-famille__nombre').textContent = n;
      b.classList.toggle('filtre-famille--vide', n === 0);
    }
    reinitialiser.hidden = !(filtres.familles.length || filtres.duree || filtres.recherche);
    if (recherche.value !== filtres.recherche && document.activeElement !== recherche) {
      recherche.value = filtres.recherche;
    }
    for (const radio of radiosDuree) {
      const n = parDuree?.[radio.value] ?? 0;
      radio.checked = radio.value === filtres.duree;
      // Une tranche vide ne se choisit pas (sauf si elle est déjà choisie : on peut la quitter).
      radio.disabled = n === 0 && !radio.checked;
      radio.setAttribute('aria-label', `${radio.dataset.nom}, ${pluriel(n, 'exercice')}`);
      radio.parentElement.querySelector('.duree__nombre').textContent = n;
    }

    banniere.hidden = !partage;
    if (partage) {
      remplir(
        banniere,
        icone('chalkboard-user'),
        el('p', {}, 'Vous consultez une séance préparée par votre formateur.'),
        bouton('Voir tous les exercices', {
          variante: 'discret',
          icone: 'arrow-right',
          onclick: () => magasin.modifier({ partage: null }, ['partage']),
        }),
      );
    }

    vide.hidden = exercices.length > 0;
    if (!exercices.length) {
      remplir(
        vide,
        icone('compass', { classe: 'vide__icone' }),
        el('h3', {}, 'Aucun exercice ne correspond'),
        el(
          'p',
          {},
          'Élargissez la recherche : tous les niveaux, tous les outils, ou sans filtre de famille.',
        ),
        el(
          'div',
          { class: 'vide__actions' },
          bouton('Tous les niveaux et tous les outils', {
            variante: 'primaire',
            onclick: () =>
              magasin.modifier(
                {
                  profil: { ...profil, niveau: 'tous', outils: [] },
                  filtres: { familles: [], duree: '', recherche: '' },
                },
                ['profil', 'filtres'],
              ),
          }),
        ),
      );
    }
    afficherGrille(etat);
  }

  magasin.ecouter((etat, quoi) => {
    if (quoi.has('profil') || quoi.has('filtres') || quoi.has('partage')) {
      afficher(etat);
      if (quoi.has('profil') || quoi.has('filtres')) {
        annoncer(`${pluriel(courants.length, 'exercice')} trouvé${courants.length > 1 ? 's' : ''}`);
      }
    } else if (quoi.has('limite')) afficherGrille(etat);
    else if (quoi.has('seance')) majSignets(etat);
  });

  /** La séance a changé (ici ou depuis une fiche) : seuls les signets changent, le focus reste. */
  function majSignets(etat) {
    const ids = new Set(etat.seance.ids);
    for (const carte of grille.querySelectorAll('.carte')) {
      const id = carte.dataset.id;
      const signet = carte.querySelector('.carte__signet');
      const dedans = ids.has(id);
      if (signet.getAttribute('aria-pressed') !== String(dedans)) {
        majSignet(signet, dedans, parId.get(id).titre);
      }
    }
  }
  afficher(magasin.get());

  return {
    /** La liste affichée (pour naviguer d'une fiche à l'autre). */
    courants: () => courants,
    /** Un exercice du catalogue, personnalisé si le profil est « Autre métier ». */
    exercice: (id) => {
      const e = parId.get(id);
      const { profil } = magasin.get();
      return e && profil.metier === 'autre' ? personnaliser(e, profil.metierLibre) : e;
    },
  };
}
