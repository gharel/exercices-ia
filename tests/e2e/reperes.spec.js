import { test, expect } from '@playwright/test';
import { verifierAccessibilite } from './outils.js';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('.carte').first()).toBeVisible();
  await page.getByRole('button', { name: 'Repères', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Repères' })).toBeVisible();
});

test('le sommaire mène aux sections sans bloquer le défilement', async ({ page }) => {
  const fenetre = page.getByRole('dialog');
  const sommaire = fenetre.getByRole('navigation', { name: 'Sommaire des repères' });
  const corps = fenetre.locator('.panneau__corps');

  await sommaire.getByRole('link', { name: 'Sources' }).click();
  const sources = fenetre.getByRole('heading', { name: 'Sources officielles' });
  await expect(sources).toBeInViewport();
  await expect(sources).toBeFocused();
  // La fenêtre elle-même n'a pas bougé : le sommaire reste visible et cliquable.
  expect(await fenetre.evaluate((d) => d.scrollTop)).toBe(0);
  await expect(sommaire).toBeInViewport();

  // Retour en haut par le sommaire, puis défilement à la molette : rien n'est bloqué.
  await sommaire.getByRole('link', { name: 'Une bonne demande' }).click();
  await expect(fenetre.getByRole('heading', { name: /cinq ingrédients/ })).toBeInViewport();
  await corps.hover();
  await page.mouse.wheel(0, 1500);
  await expect.poll(() => corps.evaluate((c) => c.scrollTop)).toBeGreaterThan(500);
  await expect(sommaire).toBeInViewport();
});

test('une fiche ouvre les repères sur la compétence travaillée', async ({ page }) => {
  await page.keyboard.press('Escape');
  await page.locator('.carte__lien').first().click();
  const fiche = page.locator('#fiche');
  await fiche.locator('summary', { hasText: 'Notes formateur' }).click();
  await fiche.getByRole('button', { name: /Compétence 4D/ }).click();
  const reperes = page.locator('#reperes');
  await expect(reperes.locator('.carte-4d:focus')).toBeInViewport();
  expect(await reperes.evaluate((d) => d.scrollTop)).toBe(0);
  await expect(reperes.getByRole('navigation', { name: 'Sommaire des repères' })).toBeInViewport();
  await verifierAccessibilite(page);
});
