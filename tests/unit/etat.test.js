import { beforeEach, describe, expect, it } from 'vitest';
import { creerEtat, nettoyerProfil, nettoyerSeance, PROFIL_PAR_DEFAUT } from '../../src/js/etat.js';

describe('nettoyage', () => {
  it('garde seulement un profil valide', () => {
    expect(nettoyerProfil(null)).toEqual(PROFIL_PAR_DEFAUT);
    expect(
      nettoyerProfil({
        metier: 'btp',
        niveau: 'avance',
        outils: ['canva', 'pirate'],
        metierLibre: 3,
      }),
    ).toEqual({ metier: 'btp', metierLibre: '', niveau: 'avance', outils: ['canva'] });
    expect(nettoyerProfil({ metier: '<script>', niveau: 'expert' })).toEqual(PROFIL_PAR_DEFAUT);
    expect(
      nettoyerProfil({ metier: 'autre', metierLibre: 'x'.repeat(200) }).metierLibre,
    ).toHaveLength(80);
  });

  it('garde une séance d’exercices connus, sans doublon, avec un titre', () => {
    const connus = new Set(['a', 'b']);
    const s = nettoyerSeance({ ids: ['a', 'zzz', 'a', 'b'], titre: '  ' }, connus);
    expect(s.ids).toEqual(['a', 'b']);
    expect(s.titre).toMatch(/^Séance du /);
    expect(nettoyerSeance('n’importe quoi', connus).ids).toEqual([]);
  });
});

describe('creerEtat()', () => {
  const catalogue = [{ id: 'immo-a' }, { id: 'g-x--btp' }];
  const adresse = (search) => ({ search, pathname: '/', hash: '' });

  beforeEach(() => localStorage.clear());

  it('lit le profil dans l’adresse, avant le stockage', () => {
    localStorage.setItem(
      'skazy-exos:profil',
      JSON.stringify({ metier: 'sante', niveau: 'avance' }),
    );
    const etat = creerEtat(catalogue, adresse('?metier=btp&outils=claude')).get();
    expect(etat.profil).toMatchObject({ metier: 'btp', niveau: 'avance', outils: ['claude'] });
  });

  it('reçoit une séance partagée et passe en vue apprenant', () => {
    const etat = creerEtat(catalogue, adresse('?s=immo-a,inconnu&t=Atelier&vue=apprenant')).get();
    expect(etat.partage).toEqual({ ids: ['immo-a'], titre: 'Atelier' });
    expect(etat.vue).toBe('apprenant');
  });

  it('ajoute et retire un exercice de la séance, et le garde', () => {
    const magasin = creerEtat(catalogue, adresse(''));
    const changements = [];
    magasin.ecouter((_e, quoi) => changements.push([...quoi]));
    expect(magasin.basculerDansSeance('immo-a')).toBe(true);
    expect(JSON.parse(localStorage.getItem('skazy-exos:seance')).ids).toEqual(['immo-a']);
    expect(magasin.basculerDansSeance('immo-a')).toBe(false);
    expect(changements).toEqual([['seance'], ['seance']]);
  });

  it('lit le thème commun à tous les outils et ne l’écrit que quand on le change', () => {
    localStorage.setItem('skazy-outils:theme', '"dark"');
    localStorage.setItem('skazy-exos:theme', '"light"');
    const magasin = creerEtat(catalogue, adresse(''));
    expect(magasin.get().theme).toBe('dark');
    // Changé dans un autre outil : changer le profil ici ne le réécrit pas.
    localStorage.setItem('skazy-outils:theme', '"light"');
    magasin.modifier({ profil: { ...magasin.get().profil, niveau: 'avance' } }, ['profil']);
    expect(localStorage.getItem('skazy-outils:theme')).toBe('"light"');
    const changements = [];
    magasin.ecouter((etat, quoi) => changements.push([etat.theme, [...quoi]]));
    magasin.relireTheme();
    expect(changements).toEqual([['light', ['theme']]]);
    magasin.modifier({ theme: 'systeme' }, ['theme']);
    expect(localStorage.getItem('skazy-outils:theme')).toBeNull();
    magasin.modifier({ theme: 'dark' }, ['theme']);
    expect(localStorage.getItem('skazy-outils:theme')).toBe('"dark"');
    // L'ancienne clé de l'outil n'est plus ni lue ni écrite.
    expect(localStorage.getItem('skazy-exos:theme')).toBe('"light"');
  });

  it('résiste à un stockage abîmé', () => {
    localStorage.setItem('skazy-exos:profil', '{pas du json');
    localStorage.setItem('skazy-exos:seance', '42');
    const etat = creerEtat(catalogue, adresse('')).get();
    expect(etat.profil).toEqual(PROFIL_PAR_DEFAUT);
    expect(etat.seance.ids).toEqual([]);
  });
});
