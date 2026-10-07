import { test, expect } from '@playwright/test';
import { verifierAccessibilite } from './outils.js';

const sansDefilementHorizontal = (page) =>
  page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth);

/** Textes des éléments qui dépassent, à gauche ou à droite, de leur cadre ou de l'écran. */
const horsDuCadre = (page, elements, cadre) =>
  page.evaluate(
    ([elements, cadre]) =>
      [...document.querySelectorAll(elements)]
        .filter((e) => {
          const r = e.getBoundingClientRect();
          const c = e.closest(cadre).getBoundingClientRect();
          return r.left < Math.max(c.left, 0) - 1 || r.right > Math.min(c.right, innerWidth) + 1;
        })
        .map((e) => e.textContent.trim()),
    [elements, cadre],
  );

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

    // Chaque titre (« Votre métier »…) garde un écart avec ses boutons.
    const ecarts = await page.evaluate(() =>
      [...document.querySelectorAll('.choix')].map((groupe) => {
        const titre = groupe.querySelector('legend').getBoundingClientRect();
        const boutons = groupe.querySelector('legend + *').getBoundingClientRect();
        return boutons.top - titre.bottom;
      }),
    );
    for (const ecart of ecarts) expect(ecart).toBeGreaterThanOrEqual(8);
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
  // L'aide des notes formateur passe sous le titre, sur une ligne, au lieu de se tasser à côté.
  const lignesAide = await fiche.locator('.fiche__formateur-aide').evaluate((aide) => {
    const plage = document.createRange();
    plage.selectNodeContents(aide);
    return plage.getClientRects().length;
  });
  expect(lignesAide).toBe(1);
  await verifierAccessibilite(page);
  await fiche.getByRole('button', { name: 'Fermer la fiche' }).tap();

  await page.locator('#bouton-seance').tap();
  await expect(page.getByRole('dialog').getByRole('heading', { name: 'Ma séance' })).toBeVisible();
  expect(await sansDefilementHorizontal(page)).toBe(true);
});

test('sur téléphone : les badges de la fiche ne passent jamais sous les flèches', async ({
  page,
}) => {
  // Les flèches et la croix flottent en haut à droite ; « Alimentation et métiers de bouche »,
  // badge le plus long, poussait les autres dessous (« Déb… »).
  for (const largeur of [390, 360]) {
    await page.setViewportSize({ width: largeur, height: 844 });
    await page.goto('/?metier=alimentation');
    await page.locator('.carte__lien').first().tap();
    const fiche = page.getByRole('dialog');
    await expect(fiche).toBeVisible();
    for (let i = 0; i < 8; i++) {
      await fiche.evaluate((d) => d.scrollTo(0, 0));
      const sousLesFleches = () =>
        fiche.evaluate((d) => {
          const nav = d.querySelector('.fiche__nav').getBoundingClientRect();
          return [...d.querySelectorAll('.fiche__badges > *')]
            .filter((badge) => {
              const r = badge.getBoundingClientRect();
              return (
                r.right > nav.left && r.left < nav.right && r.bottom > nav.top && r.top < nav.bottom
              );
            })
            .map((badge) => badge.textContent);
        });
      await expect.poll(sousLesFleches, { message: `à ${largeur} px` }).toEqual([]);
      await fiche.getByRole('button', { name: 'Exercice suivant' }).tap();
    }
  }
});

test('sur téléphone : onglets d’outils, sommaire des repères et état vide restent entiers', async ({
  page,
}) => {
  for (const largeur of [390, 360]) {
    await page.setViewportSize({ width: largeur, height: 844 });
    await page.goto('/');
    await expect(page.locator('.carte').first()).toBeVisible();
    await verifierAccessibilite(page);

    // Les onglets passent à la ligne au lieu de défiler : aucun outil coupé au bord.
    await page.locator('.carte__lien').first().tap();
    const fiche = page.getByRole('dialog');
    await expect(fiche.getByRole('tab')).not.toHaveCount(0);
    await expect.poll(() => horsDuCadre(page, '.onglets__onglet', '.onglets-outils')).toEqual([]);
    await fiche.getByRole('button', { name: 'Fermer la fiche' }).tap();

    await page.getByRole('button', { name: 'Repères', exact: true }).tap();
    await expect(page.getByRole('heading', { name: 'Repères' })).toBeVisible();
    await expect
      .poll(() => horsDuCadre(page, '.reperes__sommaire a', '.reperes__sommaire'))
      .toEqual([]);
    await page.getByRole('button', { name: 'Fermer les repères' }).tap();

    // Aucun résultat : le bouton passe à la ligne plutôt que de sortir du cadre.
    await page.getByRole('searchbox').fill('zzzzzzzz');
    await expect(page.locator('.vide')).toBeVisible();
    expect(await horsDuCadre(page, '.vide > *, .vide .bouton', '.vide')).toEqual([]);
    expect(await sansDefilementHorizontal(page)).toBe(true);
  }
});

test('sur téléphone : les panneaux laissent l’écran au contenu, Fermer reste à portée', async ({
  page,
}) => {
  await page.goto('/');
  await expect(page.locator('.carte').first()).toBeVisible();
  const enBas = (zone) => zone.evaluate((z) => z.scrollTo(0, 1500));

  // Repères : titre et sommaire partent avec le contenu, le bouton Fermer flotte.
  await page.getByRole('button', { name: 'Repères', exact: true }).tap();
  const reperes = page.getByRole('dialog');
  const sommaire = reperes.getByRole('navigation', { name: 'Sommaire des repères' });
  const fermerReperes = reperes.getByRole('button', { name: 'Fermer les repères' });
  await enBas(reperes.locator('.reperes'));
  await expect(sommaire).not.toBeInViewport();
  await expect(fermerReperes).toBeInViewport();
  // Le sommaire mène à la section, qui s'arrête sous le bouton Fermer et non dessous.
  await reperes.locator('.reperes').evaluate((z) => z.scrollTo(0, 0));
  await sommaire.getByRole('link', { name: 'Sources' }).tap();
  const sources = reperes.getByRole('heading', { name: 'Sources officielles' });
  await expect(sources).toBeInViewport();
  const basFermer = await fermerReperes.evaluate((b) => b.getBoundingClientRect().bottom);
  await expect
    .poll(() => sources.evaluate((h) => h.getBoundingClientRect().top))
    .toBeGreaterThanOrEqual(basFermer);
  await fermerReperes.tap();
  await expect(reperes).toBeHidden();

  // Fiche : les flèches et la croix suivent le défilement (l'animation d'ouverture ne doit pas
  // rester en effet, sinon elles défilent avec le panneau).
  await page.locator('.carte__lien').first().tap();
  const fiche = page.getByRole('dialog');
  await enBas(fiche);
  await expect(fiche.getByRole('button', { name: 'Fermer la fiche' })).toBeInViewport();
  await fiche.getByRole('button', { name: 'Fermer la fiche' }).tap();

  // Séance : l'en-tête part aussi, le bouton Fermer reste.
  for (let i = 0; i < 4; i++) await page.locator('.carte__signet').nth(i).tap();
  await page.locator('#bouton-seance').tap();
  const seance = page.getByRole('dialog');
  await enBas(seance);
  await expect(seance.getByRole('heading', { name: 'Ma séance' })).not.toBeInViewport();
  await expect(seance.getByRole('button', { name: 'Fermer ma séance' })).toBeInViewport();
  await seance.getByRole('button', { name: 'Fermer ma séance' }).tap();
  await expect(seance).toBeHidden();
});

test('sur téléphone : l’icône d’un lien externe suit son dernier mot, même sur deux lignes', async ({
  page,
}) => {
  await page.goto('/');
  await expect(page.locator('.carte').first()).toBeVisible();
  await page.getByRole('button', { name: 'Repères', exact: true }).tap();
  const sources = page.getByRole('dialog').locator('#reperes-sources');
  // Pour chaque lien : ses lignes de texte visibles, l'écart entre le dernier mot et l'icône, et
  // l'écart vertical entre l'icône et la dernière ligne (en boîte flex, le texte passait en colonne
  // et l'icône se centrait à côté, entre deux lignes).
  const liens = await sources.locator('.lien-externe').evaluateAll((elements) =>
    elements.map((a) => {
      const parcours = document.createTreeWalker(a, NodeFilter.SHOW_TEXT);
      const morceaux = [];
      while (parcours.nextNode()) {
        if (parcours.currentNode.parentElement.closest('.hors-ecran')) continue;
        const plage = document.createRange();
        plage.selectNodeContents(parcours.currentNode);
        morceaux.push(...[...plage.getClientRects()].filter((r) => r.width > 0));
      }
      const dernierMot = morceaux.at(-1);
      const derniereLigne = morceaux.reduce((bas, r) => (r.bottom > bas.bottom ? r : bas));
      const icone = a.querySelector('.icone').getBoundingClientRect();
      const milieu = (r) => (r.top + r.bottom) / 2;
      return {
        texte: a.textContent,
        lignes: new Set(morceaux.map((r) => Math.round(r.top))).size,
        ecart: icone.left - dernierMot.right,
        decalage: Math.abs(milieu(icone) - milieu(derniereLigne)),
      };
    }),
  );
  expect(
    liens.some((l) => l.lignes > 1),
    'au moins un lien sur deux lignes',
  ).toBe(true);
  for (const l of liens) {
    expect(l.ecart, l.texte).toBeLessThanOrEqual(10);
    expect(l.decalage, l.texte).toBeLessThanOrEqual(4);
  }
});
