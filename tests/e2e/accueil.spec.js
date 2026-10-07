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

test('le profil filtre les exercices : métier, niveau, outils', async ({ page }) => {
  await page.locator('label.pastille', { hasText: 'Immobilier' }).click();
  await expect(page.locator('.resultats__contexte')).toContainText('Immobilier');
  const immobilier = await nombre(page);
  expect(immobilier).toBeGreaterThan(10);

  await page.locator('label.niveau', { hasText: 'Tous niveaux' }).click();
  await expect.poll(() => nombre(page)).toBeGreaterThan(immobilier);

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

  await page.getByLabel('Durée').selectOption('court');
  for (const duree of await page.locator('.carte__duree').allTextContents()) {
    expect(Number(duree.replace(/\D/g, ''))).toBeLessThanOrEqual(15);
  }
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
