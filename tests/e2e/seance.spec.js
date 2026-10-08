import { test, expect } from '@playwright/test';
import { verifierAccessibilite } from './outils.js';

test('composer une séance, l’exporter et la partager', async ({ page, context }) => {
  await page.goto('/?metier=btp');
  const cartes = page.locator('.carte');
  await expect(cartes.first()).toBeVisible();
  const titres = await page.locator('.carte__lien').allTextContents();

  await cartes.nth(0).locator('.carte__signet').click();
  await cartes.nth(1).locator('.carte__signet').click();
  await expect(cartes.nth(0).locator('.carte__signet')).toHaveAttribute('aria-pressed', 'true');
  await expect(page.locator('#bouton-seance .compteur')).toHaveText('2');

  await page.locator('#bouton-seance').click();
  const seance = page.getByRole('dialog');
  await expect(seance.getByRole('heading', { name: 'Ma séance' })).toBeVisible();
  const lignes = seance.locator('.seance__titre');
  await expect(lignes).toHaveText([titres[0], titres[1]]);

  // Réordonner
  await seance.getByRole('button', { name: `Descendre : ${titres[0]}` }).click();
  await expect(lignes).toHaveText([titres[1], titres[0]]);

  await seance.getByLabel('Titre de la séance').fill('Atelier BTP du jeudi');
  await seance.getByLabel('Titre de la séance').press('Tab');
  await verifierAccessibilite(page);

  // Une seule sortie papier, en version apprenant : plus d'export texte, Markdown ou HTML.
  for (const nom of ['Copier le texte', 'Markdown', 'Page HTML']) {
    await expect(seance.getByRole('button', { name: nom })).toHaveCount(0);
  }
  await expect(seance.getByRole('radio')).toHaveCount(0);
  // On intercepte la boîte d'impression pour lire ce qui serait imprimé.
  await page.evaluate(() => {
    window.print = () => {
      window.imprime = document.getElementById('impression').innerText;
    };
  });
  await seance.getByRole('button', { name: 'Imprimer' }).click();
  const imprime = await page.evaluate(() => window.imprime);
  expect(imprime).toContain('Atelier BTP du jeudi');
  expect(imprime).toContain(titres[0]);
  expect(imprime).toContain('Votre mission');
  expect(imprime).not.toContain('Notes formateur');
  expect(imprime).not.toContain('Résultat attendu');
  expect(imprime).toContain('© 2026 Skazy Formation');
  expect(imprime).toContain('Usage réservé aux stagiaires de Skazy Formation');

  // Lien de partage, ouvert comme un apprenant
  await seance.getByRole('button', { name: 'Copier le lien de partage' }).click();
  const lien = await page.evaluate(() => navigator.clipboard.readText());
  expect(lien).toContain('vue=apprenant');

  const apprenant = await context.newPage();
  await apprenant.goto(lien);
  await expect(apprenant.locator('#titre-resultats')).toHaveText('Atelier BTP du jeudi');
  await expect(apprenant.locator('.banniere-partage')).toBeVisible();
  await expect(apprenant.locator('.carte__lien')).toHaveText([titres[1], titres[0]]);
  await apprenant.locator('.carte__lien').first().click();
  // Lien partagé aux apprenants : aucune note formateur, même repliée.
  await expect(apprenant.getByRole('dialog').getByText('Notes formateur')).toHaveCount(0);
  await apprenant.keyboard.press('Escape');
  await apprenant.getByRole('button', { name: 'Voir tous les exercices' }).click();
  await expect(apprenant.locator('.banniere-partage')).toBeHidden();
  await expect(apprenant.locator('.carte')).toHaveCount(24);
});

test('vider la séance demande une confirmation', async ({ page }) => {
  await page.goto('/');
  await page.locator('.carte').first().locator('.carte__signet').click();
  await page.locator('#bouton-seance').click();
  const seance = page.getByRole('dialog');
  await seance.getByRole('button', { name: 'Vider la séance' }).click();
  await expect(seance.locator('.seance__liste li')).toHaveCount(1);
  await seance.getByRole('button', { name: 'Confirmer : vider la séance' }).click();
  await expect(seance.getByRole('heading', { name: 'Votre séance est vide' })).toBeVisible();
});

test('la séance est gardée d’une visite à l’autre', async ({ page }) => {
  await page.goto('/');
  await page.locator('.carte').first().locator('.carte__signet').click();
  await page.reload();
  await expect(page.locator('#bouton-seance .compteur')).toHaveText('1');
});
