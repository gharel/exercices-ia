import { describe, expect, it } from 'vitest';
import {
  concerne,
  declinerGabarit,
  declinerTout,
  formes,
  remplacer,
  remplacerPartout,
} from '../../src/js/gabarits.js';

const vocabulaire = {
  client: { g: 'm', s: 'locataire', p: 'locataires' },
  structure: { g: 'f', s: 'agence immobilière', p: 'agences immobilières' },
  hotel: { g: 'm', s: 'hôtel', p: 'hôtels' },
  heros: { g: 'm', s: 'héros', p: 'héros', elision: false },
  reunion: { g: 'f', s: 'réunion', p: 'réunions' },
  veille: 'les loyers à Nouméa',
};

describe('formes()', () => {
  it('accorde un nom masculin', () => {
    const f = formes(vocabulaire.client);
    expect(f.un).toBe('un locataire');
    expect(f.le).toBe('le locataire');
    expect(f.du).toBe('du locataire');
    expect(f.au).toBe('au locataire');
    expect(f.des).toBe('des locataires');
    expect(f.ce).toBe('ce locataire');
    expect(f.son).toBe('son locataire');
  });

  it('accorde un nom féminin', () => {
    const f = formes(vocabulaire.structure);
    expect(f.un).toBe('une agence immobilière');
    expect(f.le).toBe('l’agence immobilière');
    expect(f.du).toBe('de l’agence immobilière');
    expect(f.au).toBe('à l’agence immobilière');
    expect(f.ce).toBe('cette agence immobilière');
    expect(f.son).toBe('son agence immobilière');
    expect(f.dep).toBe('d’agences immobilières');
  });

  it('élide devant une voyelle ou un h muet, pas devant un h aspiré', () => {
    expect(formes(vocabulaire.hotel).le).toBe('l’hôtel');
    expect(formes(vocabulaire.hotel).ce).toBe('cet hôtel');
    expect(formes(vocabulaire.heros).le).toBe('le héros');
    expect(formes(vocabulaire.heros).de).toBe('de héros');
  });

  it('féminin sans élision', () => {
    const f = formes(vocabulaire.reunion);
    expect(f.le).toBe('la réunion');
    expect(f.du).toBe('de la réunion');
    expect(f.au).toBe('à la réunion');
    expect(f.son).toBe('sa réunion');
  });
});

describe('remplacer()', () => {
  it('insère expressions et formes, avec majuscule initiale', () => {
    expect(remplacer('{Client.le} écrit à {structure.le} sur {veille}.', vocabulaire)).toBe(
      'Le locataire écrit à l’agence immobilière sur les loyers à Nouméa.',
    );
  });

  it('refuse une clé inconnue, une forme inconnue ou une forme sur une expression', () => {
    expect(() => remplacer('{inconnu}', vocabulaire)).toThrow(/inconnue/);
    expect(() => remplacer('{client.xyz}', vocabulaire)).toThrow(/Forme inconnue/);
    expect(() => remplacer('{veille.le}', vocabulaire)).toThrow(/pas un nom/);
    expect(() => remplacer('{client}', vocabulaire)).toThrow(/il faut une forme/);
  });

  it('parcourt objets et tableaux', () => {
    expect(remplacerPartout({ a: ['{client.un}'], n: 3 }, vocabulaire)).toEqual({
      a: ['un locataire'],
      n: 3,
    });
  });
});

describe('déclinaison', () => {
  const gabarit = { id: 'g-test', titre: 'Répondre {client.au}', metiers: ['immo'] };
  const immo = { slug: 'immo', vocabulaire };
  const autre = { slug: 'autre', vocabulaire };
  const tous = { slug: 'tous', vocabulaire };

  it('respecte les listes de métiers', () => {
    expect(concerne(gabarit, 'immo')).toBe(true);
    expect(concerne(gabarit, 'autre')).toBe(false);
    expect(concerne(gabarit, 'tous')).toBe(true);
    expect(concerne({ exclure: ['immo'] }, 'immo')).toBe(false);
  });

  it('produit un exercice identifié par gabarit et métier', () => {
    expect(declinerGabarit(gabarit, immo)).toEqual({
      id: 'g-test--immo',
      gabarit: 'g-test',
      metier: 'immo',
      titre: 'Répondre au locataire',
    });
    expect(declinerTout([gabarit], [immo, autre, tous]).map((e) => e.id)).toEqual([
      'g-test--immo',
      'g-test--tous',
    ]);
  });
});
