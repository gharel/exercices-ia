import { test, expect } from '@playwright/test';
import { verifierAccessibilite } from './outils.js';

const sansDefilementHorizontal = (page) =>
  page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth);

test('sur téléphone : métiers, niveaux et filtres tiennent dans l’écran, rien ne défile', async ({
  page,
}) => {
  // 390 px (iPhone) et 360 px (Android courant).
  for (const largeur of [390, 360]) {
    await page.setViewportSize({ width: largeur, height: 844 });
    await page.goto('/');
    await expect(page.locator('.carte').first()).toBeVisible();
    const debordements = await page.evaluate(() =>
      [
        ...document.querySelectorAll(
          '.pastille, .niveau__nom, .niveau__accroche, .filtre-famille, .duree__option',
        ),
      ]
        .filter((e) => {
          const { left, right } = e.getBoundingClientRect();
          return left < 0 || right > window.innerWidth || e.scrollWidth > e.clientWidth;
        })
        .map((e) => e.textContent.trim()),
    );
    expect(debordements, `à ${largeur} px`).toEqual([]);
  }
});

test('sur téléphone : pas de défilement horizontal, fiche en plein écran', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('.carte').first()).toBeVisible();
  expect(await sansDefilementHorizontal(page)).toBe(true);

  await page.locator('label.pastille', { hasText: 'Santé' }).click();
  await expect(page.locator('.resultats__contexte')).toContainText('Santé');
  expect(await sansDefilementHorizontal(page)).toBe(true);

  await page.locator('.carte__lien').first().tap();
  const fiche = page.getByRole('dialog');
  await expect(fiche).toBeVisible();
  const largeur = await fiche.evaluate((d) => d.getBoundingClientRect().width);
  expect(largeur).toBeGreaterThanOrEqual(388);
  await verifierAccessibilite(page);
  await fiche.getByRole('button', { name: 'Fermer la fiche' }).tap();

  await page.locator('#bouton-seance').tap();
  await expect(page.getByRole('dialog').getByRole('heading', { name: 'Ma séance' })).toBeVisible();
  expect(await sansDefilementHorizontal(page)).toBe(true);
});
