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

  it('résiste à un stockage abîmé', () => {
    localStorage.setItem('skazy-exos:profil', '{pas du json');
    localStorage.setItem('skazy-exos:seance', '42');
    const etat = creerEtat(catalogue, adresse('')).get();
    expect(etat.profil).toEqual(PROFIL_PAR_DEFAUT);
    expect(etat.seance.ids).toEqual([]);
  });
});
