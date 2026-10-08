import { test, expect } from '@playwright/test';
import { surveillerErreurs, verifierAccessibilite } from './outils.js';

const titre = (page) => page.locator('#titre-resultats');
const nombre = async (page) => Number((await titre(page).textContent()).replace(/\D/g, ''));

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('.carte').first()).toBeVisible();
});

test('la page s’ouvre sur des exercices, sans erreur et accessible', async ({ page }) => {
  const erreurs = surveillerErreurs(page);
  await page.reload();
  await expect(page.getByRole('heading', { level: 1 })).toContainText('pratiquer l’IA');
  expect(await nombre(page)).toBeGreaterThan(20);
  await expect(page.locator('.carte')).toHaveCount(24);
  await verifierAccessibilite(page);
  expect(erreurs).toEqual([]);
});

test('les métiers sont dans l’ordre alphabétique, « Tous » en tête', async ({ page }) => {
  const metiers = (await page.locator('.pastilles--metiers .pastille').allTextContents()).map((t) =>
    t.trim(),
  );
  expect(metiers[0]).toBe('Tous métiers');
  expect(metiers.at(-1)).toBe('Autre métier');
  const milieu = metiers.slice(1, -1);
  const trie = [...milieu].sort((a, b) => a.localeCompare(b, 'fr', { sensitivity: 'base' }));
  expect(milieu).toEqual(trie);
  await expect(page.locator('label.niveau').first()).toContainText('Tous niveaux');
  await expect(page.locator('.pastilles--outils > *').first()).toHaveText('Tous les outils');
});

test('le pied de page donne le vrai nombre d’exercices, sans téléchargement', async ({ page }) => {
  const pied = page.locator('.pied');
  await expect(pied).toContainText(
    /\d+ exercices\s:\s\d+ écrits pour un métier précis et \d+ transversaux/,
  );
  await expect(pied.getByRole('link', { name: /Télécharger/ })).toHaveCount(0);
});

test('la page est réservée aux stagiaires : non indexée, droits en pied de page', async ({
  page,
}) => {
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex');
  const pied = page.locator('.pied');
  await expect(pied).toContainText('© 2026 Skazy Formation');
  await expect(pied).toContainText(
    /Usage réservé aux stagiaires de Skazy Formation\s:\sreproduction et réutilisation dans une autre formation interdites sans accord écrit\./,
  );
});

test('le profil filtre les exercices : métier, niveau, outils', async ({ page }) => {
  await page.locator('label.pastille', { hasText: 'Immobilier' }).click();
  await expect(page.locator('.resultats__contexte')).toContainText('Immobilier');
  const immobilier = await nombre(page);
  expect(immobilier).toBeGreaterThan(10);

  await page.locator('label.niveau', { hasText: 'Débutant' }).click();
  await expect.poll(() => nombre(page)).toBeLessThan(immobilier);

  await page.locator('label.pastille', { hasText: 'Canva' }).click();
  await expect(page.locator('.resultats__contexte')).toContainText('Canva');
  const canva = await nombre(page);
  expect(canva).toBeGreaterThan(0);
  for (const outils of await page.locator('.carte__outils').allTextContents()) {
    expect(outils).toContain('Canva');
  }

  // Le profil est gardé dans l'adresse.
  await expect(page).toHaveURL(/metier=immobilier/);
  await expect(page).toHaveURL(/outils=canva/);
});

test('les familles, la recherche et la durée affinent la liste', async ({ page }) => {
  const total = await nombre(page);
  const visuels = page.locator('.filtre-famille', { hasText: 'Visuels' });
  const annonce = Number(await visuels.locator('.filtre-famille__nombre').textContent());
  await visuels.click();
  await expect(visuels).toHaveAttribute('aria-pressed', 'true');
  await expect.poll(() => nombre(page)).toBe(annonce);
  for (const badge of await page.locator('.carte .badge').allTextContents()) {
    expect(badge.toLowerCase()).toContain('visuels');
  }

  await page.getByRole('button', { name: 'Effacer les filtres' }).click();
  await expect.poll(() => nombre(page)).toBe(total);

  await page.getByRole('searchbox', { name: 'Rechercher un exercice' }).fill('zzzzzz introuvable');
  await expect(page.getByRole('heading', { name: 'Aucun exercice ne correspond' })).toBeVisible();
  await page.getByRole('button', { name: 'Effacer les filtres' }).click();
  await expect.poll(() => nombre(page)).toBe(total);

  await page.getByRole('radio', { name: /^15 min ou moins/ }).check();
  for (const duree of await page.locator('.carte__duree').allTextContents()) {
    expect(Number(duree.replace(/\D/g, ''))).toBeLessThanOrEqual(15);
  }
});

test('chaque durée annonce son nombre d’exercices, une tranche vide est grisée', async ({
  page,
}) => {
  const longs = page.getByRole('radio', { name: /^45 min et plus/ });
  await expect(longs).toBeEnabled();
  const annonce = Number((await longs.getAttribute('aria-label')).match(/, (\d+) exercice/)[1]);
  expect(annonce).toBeGreaterThan(20);
  await longs.check();
  await expect.poll(() => nombre(page)).toBe(annonce);
  for (const duree of await page.locator('.carte__duree').allTextContents()) {
    expect(Number(duree.replace(/\D/g, ''))).toBeGreaterThanOrEqual(45);
  }
  // Les débutants n'ont pas d'exercice de plus de 30 min : la tranche se grise.
  await page.getByRole('radio', { name: /^Toutes durées/ }).check();
  await page.locator('label.niveau', { hasText: 'Débutant' }).click();
  await expect(longs).toBeDisabled();
  await expect(longs).toHaveAttribute('aria-label', /, 0 exercice$/);
});

test('« Afficher plus » ajoute un lot de cartes', async ({ page }) => {
  await page.locator('label.niveau', { hasText: 'Tous niveaux' }).click();
  await expect(page.locator('.carte')).toHaveCount(24);
  await page.getByRole('button', { name: /Afficher \d+ de plus/ }).click();
  await expect(page.locator('.carte')).toHaveCount(48);
});

test('« Autre métier » glisse le métier tapé dans l’exercice', async ({ page }) => {
  await page.locator('label.pastille', { hasText: 'Autre métier' }).click();
  await page.getByLabel('Votre métier, en quelques mots').fill('fleuriste');
  await expect(page.locator('.resultats__contexte')).toContainText('fleuriste');
  await page.locator('.carte__lien').first().click();
  await expect(page.locator('#fiche .fiche__situation')).toContainText('Votre métier : fleuriste.');
});

test('le thème sombre se choisit et reste accessible', async ({ page }) => {
  const theme = page.locator('#bouton-theme');
  await theme.click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  await theme.click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await verifierAccessibilite(page);
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
});
