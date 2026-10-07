import { test, expect } from '@playwright/test';
import { surveillerErreurs, verifierAccessibilite } from './outils.js';

test.beforeEach(async ({ page }) => {
  await page.goto('/?metier=immobilier');
  await expect(page.locator('.carte').first()).toBeVisible();
});

test('la fiche montre la consigne, copie le prompt et reste accessible', async ({ page }) => {
  const erreurs = surveillerErreurs(page);
  const premier = page.locator('.carte__lien').first();
  const titre = await premier.textContent();
  await premier.click();

  const fiche = page.getByRole('dialog');
  await expect(fiche.getByRole('heading', { level: 2 })).toHaveText(titre);
  await expect(fiche.getByRole('heading', { name: 'Votre mission' })).toBeVisible();
  await expect(fiche.locator('.etapes li').first()).toBeVisible();
  await expect(page).toHaveURL(/#/);

  await fiche.getByRole('button', { name: 'Copier le prompt' }).click();
  await expect(page.locator('#toast')).toContainText('Prompt copié');
  const copie = await page.evaluate(() => navigator.clipboard.readText());
  expect(copie.length).toBeGreaterThan(40);

  await verifierAccessibilite(page);
  await page.keyboard.press('Escape');
  await expect(fiche).toBeHidden();
  await expect(premier).toBeFocused();
  expect(erreurs).toEqual([]);
});

test('les flèches passent d’un exercice à l’autre', async ({ page }) => {
  const titres = await page.locator('.carte__lien').allTextContents();
  await page.locator('.carte__lien').first().click();
  const fiche = page.getByRole('dialog');
  await expect(fiche.locator('.fiche__position')).toHaveText(/^1 \/ \d+$/);
  await page.keyboard.press('ArrowRight');
  await expect(fiche.getByRole('heading', { level: 2 })).toHaveText(titres[1]);
  await fiche.getByRole('button', { name: 'Exercice précédent' }).click();
  await expect(fiche.getByRole('heading', { level: 2 })).toHaveText(titres[0]);
});

test('les notes formateur sont repliées, et restent ouvertes d’une fiche à l’autre', async ({
  page,
}) => {
  await page.locator('.carte__lien').first().click();
  const fiche = page.getByRole('dialog');
  const notes = fiche.locator('summary', { hasText: 'Notes formateur' });
  await expect(notes).toBeVisible();
  await expect(fiche.getByText('Résultat attendu.')).toBeHidden();
  await notes.click();
  await expect(fiche.getByText('Résultat attendu.')).toBeVisible();
  await fiche.getByRole('button', { name: 'Exercice suivant' }).click();
  await expect(fiche.getByText('Résultat attendu.')).toBeVisible();
  // Plus de bascule formateur / apprenant dans le bandeau.
  await expect(page.getByRole('button', { name: 'Apprenant' })).toHaveCount(0);
});

test('les onglets d’outils se manipulent au clavier', async ({ page }) => {
  await page.locator('.carte__lien').first().click();
  const onglets = page.getByRole('dialog').getByRole('tab');
  const n = await onglets.count();
  test.skip(n < 2, 'un seul outil pour cet exercice');
  const actif = page.getByRole('dialog').getByRole('tab', { selected: true });
  const premier = await actif.textContent();
  await actif.focus();
  await page.keyboard.press('ArrowRight');
  await expect(page.getByRole('dialog').getByRole('tab', { selected: true })).not.toHaveText(
    premier,
  );
  await expect(page.getByRole('dialog').getByRole('tabpanel')).toBeVisible();
});

test('un lien #exercice ouvre directement sa fiche', async ({ page }) => {
  await page.goto('/?metier=immobilier#immo-annonce-fautes');
  await expect(page.getByRole('dialog').getByRole('heading', { level: 2 })).toHaveText(
    'Corriger une annonce de location avant publication',
  );
  await expect(page.getByRole('dialog').locator('.bloc-materiau__texte')).toContainText(
    'A louer F3',
  );
});

test('le bouton « Au hasard » ouvre une fiche de la liste', async ({ page }) => {
  const titres = await page.locator('.carte__lien').allTextContents();
  await page.getByRole('button', { name: 'Au hasard' }).click();
  const titre = await page.getByRole('dialog').getByRole('heading', { level: 2 }).textContent();
  expect(titre.length).toBeGreaterThan(5);
  expect(titres.length).toBeGreaterThan(0);
});
