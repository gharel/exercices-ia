/**
 * Contrôle des données : vocabulaire de chaque métier, schéma de chaque exercice (écrit ou
 * décliné d'un gabarit), unicité, typographie et couverture (assez d'exercices partout).
 * Pour ne tester qu'un fichier : npx vitest run tests/unit/donnees.test.js -t "btp"
 */
import { describe, expect, it } from 'vitest';
import { METIERS, SLUGS_METIERS } from '../../src/donnees/metiers.js';
import { GABARITS } from '../../src/donnees/gabarits.js';
import { FAMILLES, NIVEAUX } from '../../src/donnees/referentiels.js';
import { CLES_NOMS, CLES_EXPRESSIONS } from '../../src/donnees/vocabulaire.js';
import { declinerGabarit, declinerTout, estNom } from '../../src/js/gabarits.js';
import { fautesTypo, textesDe, validerExercice } from '../../src/js/schema.js';

const METIERS_REELS = METIERS.filter((m) => m.slug !== 'tous');

function problemesDe(exercice) {
  const problemes = validerExercice(exercice, SLUGS_METIERS);
  for (const t of textesDe(exercice)) {
    for (const faute of fautesTypo(t))
      problemes.push(`${exercice.id} : ${faute} dans « ${t.slice(0, 80)} »`);
  }
  return problemes;
}

describe.each(METIERS.map((m) => [m.slug, m]))('métier %s', (slug, metier) => {
  it('fournit tout le vocabulaire des gabarits', () => {
    const problemes = [];
    for (const cle of Object.keys(CLES_NOMS)) {
      if (!estNom(metier.vocabulaire[cle])) problemes.push(`${cle} : nom { g, s, p } attendu`);
    }
    for (const cle of Object.keys(CLES_EXPRESSIONS)) {
      const v = metier.vocabulaire[cle];
      if (typeof v !== 'string' || !v.trim()) problemes.push(`${cle} : expression attendue`);
    }
    for (const cle of Object.keys(metier.vocabulaire)) {
      if (!(cle in CLES_NOMS) && !(cle in CLES_EXPRESSIONS))
        problemes.push(`${cle} : clé inconnue`);
    }
    for (const t of textesDe(metier.vocabulaire)) {
      for (const faute of fautesTypo(t)) problemes.push(`${faute} dans « ${t} »`);
    }
    expect(problemes).toEqual([]);
  });

  it('a des exercices écrits valides, rattachés à ce métier', () => {
    const problemes = metier.exercices.flatMap(problemesDe);
    for (const ex of metier.exercices) {
      if (ex.metier !== slug)
        problemes.push(`${ex.id} : metier « ${ex.metier} » au lieu de « ${slug} »`);
    }
    expect(problemes).toEqual([]);
  });

  if (slug !== 'tous') {
    it('a au moins 12 exercices écrits, dont 3 par niveau', () => {
      expect(metier.exercices.length).toBeGreaterThanOrEqual(12);
      for (const niveau of NIVEAUX) {
        const n = metier.exercices.filter((e) => e.niveau === niveau.slug).length;
        expect(n, niveau.slug).toBeGreaterThanOrEqual(3);
      }
    });
  }
});

describe.each(FAMILLES.map((f) => [f.slug, f]))('gabarits %s', (famille) => {
  const gabarits = GABARITS.filter((g) => g.famille === famille);

  it('se déclinent sans erreur pour chaque métier', () => {
    const problemes = [];
    for (const gabarit of gabarits) {
      for (const metier of METIERS) {
        try {
          problemes.push(...problemesDe(declinerGabarit(gabarit, metier)));
        } catch (e) {
          problemes.push(`${gabarit.id} × ${metier.slug} : ${e.message}`);
        }
      }
    }
    expect(problemes).toEqual([]);
  });

  it('existent pour chaque niveau', () => {
    for (const niveau of NIVEAUX) {
      expect(
        gabarits.some((g) => g.niveau === niveau.slug),
        niveau.slug,
      ).toBe(true);
    }
  });
});

describe('catalogue', () => {
  // Calculé dans chaque test, pas à l'import : un métier incomplet ne bloque pas les autres tests.
  const catalogue = () => [
    ...METIERS.flatMap((m) => m.exercices),
    ...declinerTout(GABARITS, METIERS),
  ];

  it('a des identifiants uniques', () => {
    const vus = new Set();
    const doublons = catalogue()
      .map((e) => e.id)
      .filter((id) => vus.size === vus.add(id).size);
    expect(doublons).toEqual([]);
  });

  it('couvre chaque métier : 18 exercices par niveau au moins, toutes les familles', () => {
    const manques = [];
    for (const metier of METIERS_REELS) {
      const siens = catalogue().filter((e) => e.metier === metier.slug);
      for (const niveau of NIVEAUX) {
        const n = siens.filter((e) => e.niveau === niveau.slug).length;
        if (n < 18) manques.push(`${metier.slug} / ${niveau.slug} : ${n}`);
      }
      for (const famille of FAMILLES) {
        if (!siens.some((e) => e.famille === famille.slug)) {
          manques.push(`${metier.slug} : aucune famille ${famille.slug}`);
        }
      }
    }
    expect(manques).toEqual([]);
  });

  it('utilise chaque outil dans au moins 20 exercices', () => {
    const compte = {};
    for (const e of catalogue()) for (const o of e.outils) compte[o] = (compte[o] ?? 0) + 1;
    for (const outil of ['claude', 'chatgpt', 'copilot', 'gemini', 'notebook', 'canva']) {
      expect(compte[outil] ?? 0, outil).toBeGreaterThanOrEqual(20);
    }
  });
});
