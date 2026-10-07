/**
 * La séance du formateur : durée, résumé d'un exercice, lien de partage et lecture des
 * paramètres d'adresse. Fonctions pures, sans accès à la page.
 */
import { FAMILLES, NIVEAUX } from '../donnees/referentiels.js';
import { OUTILS } from '../donnees/outils.js';

const nomDe = (liste, slug) => liste.find((x) => x.slug === slug)?.nom ?? slug;

export function dureeTotale(exercices) {
  return exercices.reduce((total, e) => total + (e.duree ?? 0), 0);
}

/** 45 → « 45 min », 60 → « 1 h », 135 → « 2 h 15 ». */
export function formaterDuree(minutes) {
  if (minutes < 60) return `${minutes} min`;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return m ? `${h} h ${String(m).padStart(2, '0')}` : `${h} h`;
}

/** « Séance du 7 octobre 2026 » */
export function titreParDefaut(date = new Date()) {
  return `Séance du ${date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}`;
}

/** Les informations d'en-tête d'un exercice : famille, niveau, durée, outils. */
export function resume(e) {
  return [
    nomDe(FAMILLES, e.famille),
    nomDe(NIVEAUX, e.niveau),
    formaterDuree(e.duree),
    e.outils.map((o) => nomDe(OUTILS, o)).join(', '),
  ].join(' · ');
}

/** Lien de partage : la séance (ids), son titre et la vue. */
export function lienDePartage(base, { ids, titre, vue = 'apprenant' }) {
  const url = new URL(base);
  url.search = '';
  url.hash = '';
  url.searchParams.set('s', ids.join(','));
  if (titre) url.searchParams.set('t', titre);
  url.searchParams.set('vue', vue);
  return url.toString();
}

const SLUG = /^[a-z0-9-]+$/;

/** Lit les paramètres d'adresse utiles, en ignorant tout ce qui est mal formé. */
export function lireParametres(recherche) {
  const p = new URLSearchParams(recherche);
  const liste = (cle) =>
    (p.get(cle) ?? '')
      .split(',')
      .map((x) => x.trim())
      .filter((x) => SLUG.test(x));
  const slug = (cle) => (SLUG.test(p.get(cle) ?? '') ? p.get(cle) : null);
  const vue = p.get('vue');
  return {
    metier: slug('metier'),
    niveau: slug('niveau'),
    outils: p.has('outils') ? liste('outils') : null,
    metierLibre: p.get('m')?.slice(0, 80) ?? null,
    seance: p.has('s') ? liste('s') : null,
    titre: p.get('t')?.slice(0, 120) ?? null,
    vue: vue === 'apprenant' || vue === 'formateur' ? vue : null,
  };
}
