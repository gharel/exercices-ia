/**
 * Icônes et charte : chaque icône utilisée existe, aucune emoji dans l'interface, aucune
 * couleur écrite en dur hors de charte.css (et de impression.css, pour le papier).
 */
import { describe, expect, it } from 'vitest';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { ICONES } from '../../src/js/icones.js';
import { TRACES } from '../../src/js/icones-donnees.js';
import { FAMILLES } from '../../src/donnees/referentiels.js';
import { METIERS, AUTRE_METIER } from '../../src/donnees/metiers.js';
import { REGLES } from '../../src/donnees/reperes.js';

// Chemins relatifs au dossier du projet (vitest s'y lance) : sous jsdom, import.meta.url
// n'est pas une adresse file://.
const lire = (chemin) => readFileSync(join('src', chemin), 'utf8');
const fichiersJs = [
  'js/main.js',
  ...readdirSync(join('src', 'js', 'vues')).map((f) => `js/vues/${f}`),
];

describe('icônes', () => {
  it('ont toutes un tracé généré (sinon : npm run icones)', () => {
    expect(ICONES.filter((nom) => !TRACES[nom])).toEqual([]);
  });

  it('existent pour chaque appel icone(…) des vues', () => {
    const appelees = fichiersJs.flatMap((f) =>
      [...lire(f).matchAll(/icone\('([a-z0-9-]+)'/g)].map((m) => m[1]),
    );
    const boutons = fichiersJs.flatMap((f) =>
      [...lire(f).matchAll(/icone: '([a-z0-9-]+)'/g)].map((m) => m[1]),
    );
    const icones = new Set(ICONES);
    expect([...appelees, ...boutons].filter((nom) => !icones.has(nom))).toEqual([]);
  });

  it('existent pour les familles, les métiers et les repères', () => {
    const icones = new Set(ICONES);
    const utilisees = [...FAMILLES, ...METIERS, AUTRE_METIER, ...REGLES].map((x) => x.icone);
    expect(utilisees.filter((nom) => !icones.has(nom))).toEqual([]);
  });
});

describe('charte', () => {
  it('aucune emoji dans l’interface', () => {
    const avecEmoji = [...fichiersJs, 'index.html'].filter((f) =>
      /\p{Extended_Pictographic}/u.test(lire(f)),
    );
    expect(avecEmoji).toEqual([]);
  });

  it('aucune couleur en dur hors de charte.css', () => {
    const fautes = ['styles/base.css', 'styles/composants.css', ...fichiersJs].filter((f) =>
      /#[0-9a-f]{3,8}\b(?![-\w])|rgb\(\d/i.test(lire(f).replace(/#[a-z][\w-]*/gi, '')),
    );
    expect(fautes).toEqual([]);
  });
});
