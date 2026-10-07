/**
 * node outils/captures.js [dossier] : construit puis photographie dist/index.html (ouvert en
 * file://) en 1280×720, 1920×1080 et 390 px, en clair et en sombre, avec une fiche ouverte.
 * Pour vérifier l'interface à l'œil sans lancer de serveur. Les images vont dans le dossier
 * donné (par défaut captures/, ignoré par git).
 */
import { chromium } from '@playwright/test';
import { mkdirSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';

const RACINE = fileURLToPath(new URL('..', import.meta.url));
const DOSSIER = process.argv[2] ?? `${RACINE}captures`;
const FICHIER = pathToFileURL(`${RACINE}dist/index.html`).href;
mkdirSync(DOSSIER, { recursive: true });

const navigateur = await chromium.launch();
const erreurs = [];

async function capturer(nom, { largeur, hauteur, theme = 'light', action, pleinePage = false }) {
  const page = await navigateur.newPage({
    viewport: { width: largeur, height: hauteur },
    colorScheme: theme,
    reducedMotion: 'reduce',
  });
  page.on('pageerror', (e) => erreurs.push(`${nom} : ${e.message}`));
  page.on('console', (m) => m.type() === 'error' && erreurs.push(`${nom} : ${m.text()}`));
  await page.goto(FICHIER);
  await page.locator('.carte').first().waitFor();
  if (action) await action(page);
  await page.waitForTimeout(300);
  await page.screenshot({ path: `${DOSSIER}/${nom}.png`, fullPage: pleinePage });
  await page.close();
}

const ouvrirFiche = async (page) => {
  await page.locator('label.pastille', { hasText: 'Immobilier' }).click();
  await page.locator('.carte__lien').first().click();
  await page.getByRole('dialog').waitFor();
};

await capturer('accueil-1280', { largeur: 1280, hauteur: 720 });
await capturer('accueil-1920', { largeur: 1920, hauteur: 1080 });
await capturer('accueil-1280-sombre', { largeur: 1280, hauteur: 720, theme: 'dark' });
await capturer('defilement-1280', {
  largeur: 1280,
  hauteur: 720,
  action: (page) => page.evaluate(() => window.scrollTo(0, 700)),
});
await capturer('fiche-1280', { largeur: 1280, hauteur: 720, action: ouvrirFiche });
await capturer('fiche-1280-sombre', {
  largeur: 1280,
  hauteur: 720,
  theme: 'dark',
  action: ouvrirFiche,
});
await capturer('accueil-390', { largeur: 390, hauteur: 844, pleinePage: true });
await capturer('fiche-390', { largeur: 390, hauteur: 844, action: ouvrirFiche });
await capturer('seance-1280', {
  largeur: 1280,
  hauteur: 720,
  action: async (page) => {
    await page.locator('.carte__signet').nth(0).click();
    await page.locator('.carte__signet').nth(1).click();
    await page.locator('#bouton-seance').click();
  },
});
await capturer('reperes-1280', {
  largeur: 1280,
  hauteur: 720,
  action: (page) => page.getByRole('button', { name: 'Repères', exact: true }).click(),
});

await navigateur.close();
console.log(`Captures dans ${DOSSIER}`);
if (erreurs.length) console.log(`Erreurs :\n${[...new Set(erreurs)].slice(0, 10).join('\n')}`);
