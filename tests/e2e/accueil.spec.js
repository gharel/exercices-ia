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

test('le bandeau : le nom mène à l’accueil, puis les actions, « Les outils », le logo en dernier', async ({
  page,
}) => {
  const bandeau = page.locator('.bandeau__interieur');
  const ordre = await bandeau.evaluate((b) =>
    [...b.children].map((e) => ({
      classe: e.classList[0],
      gauche: e.getBoundingClientRect().left,
    })),
  );
  expect(ordre.map((e) => e.classe)).toEqual([
    'bandeau__nom',
    'bandeau__actions',
    'bandeau__outils',
    'bandeau__filet',
    'bandeau__logo',
  ]);
  for (let i = 1; i < ordre.length; i++) {
    expect(ordre[i].gauche, ordre[i].classe).toBeGreaterThan(ordre[i - 1].gauche);
  }

  // La pastille et le nom forment un seul lien vers l'accueil de l'outil, la page courante.
  const nom = bandeau.getByRole('link', { name: 'Atelier d’exercices IA' });
  await expect(nom).toHaveAttribute('href', './');
  await expect(nom).toHaveAttribute('aria-current', 'page');
  await expect(nom.locator('.bandeau__pastille')).toBeVisible();
  expect(await nom.evaluate((a) => a.href)).toBe(new URL('/', page.url()).href);

  // « Les outils » : la page de tous les outils Skazy Formation, dans le même onglet.
  const outils = bandeau.getByRole('link', { name: 'Les outils', exact: true });
  await expect(outils).toHaveAttribute('href', 'https://gharel.github.io/home/');
  await expect(outils).toHaveAttribute('title', 'Tous les outils Skazy Formation');
  await expect(outils).not.toHaveAttribute('target', /.+/);
  await expect(outils.locator('img')).toBeVisible();
  await expect(outils.getByText('Les outils')).toBeVisible();

  // Le logo, dernier élément, ouvre le site de Skazy Formation dans un nouvel onglet.
  const logo = bandeau.getByRole('link', { name: 'Site de Skazy Formation (nouvel onglet)' });
  await expect(logo).toHaveAttribute('href', 'https://formation.skazy.nc');
  await expect(logo).toHaveAttribute('target', '_blank');
  await expect(logo).toHaveAttribute('rel', 'noopener');
  await expect(logo.locator('img').filter({ visible: true })).toHaveCount(1);
});

test('« Remonter en haut » apparaît après défilement, ramène en haut, jamais sur un panneau', async ({
  page,
}) => {
  const haut = page.getByRole('button', { name: 'Remonter en haut de la page' });
  await expect(haut).toBeHidden();
  await page.evaluate(() => window.scrollTo(0, 1500));
  await expect(haut).toBeInViewport({ ratio: 1 });

  // Masqué tant qu'un panneau est ouvert : séance, fiche, repères.
  await page.locator('#bouton-seance').click();
  await expect(page.getByRole('dialog')).toBeVisible();
  await expect(haut).toBeHidden();
  await page.getByRole('button', { name: 'Fermer ma séance' }).click();
  await expect(haut).toBeVisible();

  await page.locator('.carte__lien').nth(9).click();
  await expect(page.getByRole('dialog')).toBeVisible();
  await expect(haut).toBeHidden();
  await page.keyboard.press('Escape');
  await expect(page.getByRole('dialog')).toBeHidden();
  await page.evaluate(() => window.scrollTo(0, 1500));
  await expect(haut).toBeVisible();

  await page.getByRole('button', { name: 'Repères', exact: true }).click();
  await expect(page.getByRole('dialog')).toBeVisible();
  await expect(haut).toBeHidden();
  await page.getByRole('button', { name: 'Fermer les repères' }).click();
  await expect(haut).toBeVisible();

  // Au clic : retour en haut, focus sur le titre de la page, sans anneau.
  await haut.click();
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(0);
  const titre = page.locator('#titre-profil');
  await expect(titre).toBeFocused();
  expect(await titre.evaluate((e) => getComputedStyle(e).outlineStyle)).toBe('none');
  await expect(haut).toBeHidden();
});
