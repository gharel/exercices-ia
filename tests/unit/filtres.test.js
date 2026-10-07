import { describe, expect, it } from 'vitest';
import {
  exercicesDuMetier,
  motsRecherche,
  normaliser,
  personnaliser,
  selectionner,
  tirerAuHasard,
  trier,
} from '../../src/js/filtres.js';

function exo(id, champs = {}) {
  return {
    id,
    titre: `Titre ${id}`,
    metier: 'immobilier',
    niveau: 'debutant',
    famille: 'rediger',
    duree: 15,
    outils: ['claude', 'chatgpt'],
    situation: 'Situation',
    objectif: 'Objectif',
    prompt: 'Prompt',
    ...champs,
  };
}

const catalogue = [
  exo('immo-a'),
  exo('immo-b', { niveau: 'avance', famille: 'analyser', duree: 45, outils: ['copilot'] }),
  exo('g-x--immobilier', { gabarit: 'g-x', famille: 'corriger' }),
  exo('g-x--btp', { gabarit: 'g-x', metier: 'btp', famille: 'corriger' }),
  exo('g-x--tous', { gabarit: 'g-x', metier: 'tous', famille: 'corriger' }),
  exo('tous-a', { metier: 'tous', famille: 'organiser', titre: 'Organiser sa boîte de réception' }),
  exo('btp-a', { metier: 'btp', famille: 'visuels', motsCles: ['chantier'] }),
];
const ids = (liste) => liste.map((e) => e.id);

describe('exercicesDuMetier()', () => {
  it('un métier : ses exercices et ses déclinaisons', () => {
    expect(ids(exercicesDuMetier(catalogue, 'immobilier'))).toEqual([
      'immo-a',
      'immo-b',
      'g-x--immobilier',
    ]);
  });

  it('tous : version neutre, transversaux et exercices propres, sans doublons de gabarits', () => {
    expect(ids(exercicesDuMetier(catalogue, 'tous')).sort()).toEqual(
      ['btp-a', 'g-x--tous', 'immo-a', 'immo-b', 'tous-a'].sort(),
    );
  });

  it('autre : la version neutre seulement', () => {
    expect(ids(exercicesDuMetier(catalogue, 'autre'))).toEqual(['g-x--tous', 'tous-a']);
  });
});

describe('selectionner()', () => {
  it('filtre par niveau, outils, durée et famille, et compte par famille', () => {
    const profil = { metier: 'immobilier', niveau: 'tous', outils: ['copilot'] };
    const { exercices, parFamille } = selectionner(catalogue, profil, {});
    expect(ids(exercices)).toEqual(['immo-b']);
    expect(parFamille.analyser).toBe(1);
    expect(parFamille.rediger).toBe(0);

    const tous = selectionner(catalogue, { metier: 'immobilier', niveau: 'debutant', outils: [] });
    expect(ids(tous.exercices).sort()).toEqual(['g-x--immobilier', 'immo-a']);

    const court = selectionner(
      catalogue,
      { metier: 'immobilier', niveau: 'tous', outils: [] },
      {
        duree: 'long',
      },
    );
    expect(ids(court.exercices)).toEqual(['immo-b']);

    const famille = selectionner(
      catalogue,
      { metier: 'immobilier', niveau: 'tous', outils: [] },
      {
        familles: ['corriger'],
      },
    );
    expect(ids(famille.exercices)).toEqual(['g-x--immobilier']);
    expect(famille.parFamille.rediger).toBe(1);
  });

  it('cherche sans tenir compte des accents ni de la casse, dans les mots-clés aussi', () => {
    const profil = { metier: 'tous', niveau: 'tous', outils: [] };
    expect(ids(selectionner(catalogue, profil, { recherche: 'RECEPTION' }).exercices)).toEqual([
      'tous-a',
    ]);
    expect(ids(selectionner(catalogue, profil, { recherche: 'chantier' }).exercices)).toEqual([
      'btp-a',
    ]);
  });
});

describe('trier()', () => {
  it('alterne les familles et met les exercices écrits avant les gabarits', () => {
    const liste = [
      exo('g1', { gabarit: 'g', famille: 'rediger' }),
      exo('r1', { famille: 'rediger' }),
      exo('r2', { famille: 'rediger' }),
      exo('c1', { famille: 'corriger' }),
    ];
    expect(ids(trier(liste))).toEqual(['r1', 'c1', 'r2', 'g1']);
  });

  it('avec une recherche, les titres qui contiennent les mots passent devant', () => {
    const liste = [exo('a', { titre: 'Autre chose' }), exo('b', { titre: 'Annonce de location' })];
    expect(ids(trier(liste, motsRecherche('annonce')))).toEqual(['b', 'a']);
  });
});

describe('outils divers', () => {
  it('normalise et découpe la recherche', () => {
    expect(normaliser('Réclamation d’Été')).toBe('reclamation d ete');
    expect(motsRecherche('  le  Bail  ')).toEqual(['le', 'bail']);
  });

  it('tire au hasard un autre exercice que le précédent', () => {
    const liste = [exo('a'), exo('b')];
    expect(tirerAuHasard(liste, () => 0, 'a').id).toBe('b');
    expect(tirerAuHasard([], () => 0)).toBeNull();
  });

  it('personnalise la version neutre pour un autre métier', () => {
    const neutre = exo('g-x--tous', { metier: 'tous', gabarit: 'g-x' });
    const perso = personnaliser(neutre, ' fleuriste ');
    expect(perso.situation).toBe('Votre métier : fleuriste. Situation');
    expect(
      perso.prompt.startsWith('Contexte : je travaille dans le domaine suivant : fleuriste.'),
    ).toBe(true);
    expect(personnaliser(exo('immo-a'), 'fleuriste')).toEqual(exo('immo-a'));
    expect(personnaliser(neutre, '  ')).toBe(neutre);
  });
});
