import { describe, expect, it } from 'vitest';
import {
  dureeTotale,
  echapperHtml,
  exerciceEnMarkdown,
  formaterDuree,
  lienDePartage,
  lireParametres,
  nomDeFichier,
  seanceEnHtml,
  seanceEnMarkdown,
} from '../../src/js/seance.js';

const exercice = {
  id: 'immo-a',
  titre: 'Corriger une annonce',
  metier: 'immobilier',
  niveau: 'debutant',
  famille: 'corriger',
  duree: 15,
  outils: ['claude', 'chatgpt'],
  situation: 'Une annonce <urgente>.',
  objectif: 'Corriger.',
  etapes: ['Copier', 'Demander', 'Vérifier'],
  prompt: 'Corrige ceci :\n<annonce>…</annonce>',
  materiau: { titre: 'Annonce', texte: 'A louer F3' },
  variantes: { simple: 'Simple.', poussee: 'Poussée.' },
  vigilance: 'Relire les chiffres.',
  formateur: {
    resultat: 'Une annonce juste.',
    criteres: ['Chiffres identiques', 'Liste des corrections'],
    pieges: ['Inventer'],
    competence: 'discernement',
    technique: 'format',
  },
};

describe('durées', () => {
  it('additionne et formate', () => {
    expect(dureeTotale([exercice, { ...exercice, duree: 60 }])).toBe(75);
    expect(formaterDuree(45)).toBe('45 min');
    expect(formaterDuree(60)).toBe('1 h');
    expect(formaterDuree(75)).toBe('1 h 15');
    expect(formaterDuree(125)).toBe('2 h 05');
  });
});

describe('exports', () => {
  it('Markdown : consigne, prompt en bloc de code, notes formateur seulement si demandé', () => {
    const apprenant = exerciceEnMarkdown(exercice);
    expect(apprenant).toContain('## Corriger une annonce');
    expect(apprenant).toContain('1. Copier');
    expect(apprenant).toContain('```\nCorrige ceci :');
    expect(apprenant).not.toContain('Notes formateur');
    const formateur = exerciceEnMarkdown(exercice, { formateur: true });
    expect(formateur).toContain('### Notes formateur');
    expect(formateur).toContain('- [ ] Chiffres identiques');
    expect(formateur).toContain('Discernement');
  });

  it('Markdown de séance : titre, sommaire et durée totale', () => {
    const md = seanceEnMarkdown('Ma séance', [exercice, exercice]);
    expect(md.startsWith('# Ma séance\n\n2 exercices · 30 min')).toBe(true);
    expect(md).toContain('2. Corriger une annonce (15 min)');
  });

  it('HTML : page autonome, texte échappé', () => {
    const html = seanceEnHtml('Séance <test>', [exercice], { formateur: true });
    expect(html.startsWith('<!doctype html>')).toBe(true);
    expect(html).toContain('<title>Séance &lt;test&gt;</title>');
    expect(html).toContain('Une annonce &lt;urgente&gt;.');
    expect(html).toContain('Notes formateur');
    expect(html).not.toContain('<urgente>');
    expect(echapperHtml('"a" & <b>')).toBe('&quot;a&quot; &amp; &lt;b&gt;');
  });

  it('nom de fichier sans accents ni espaces', () => {
    expect(nomDeFichier('Séance du 7 octobre : IA & RH')).toBe('seance-du-7-octobre-ia-rh');
    expect(nomDeFichier('!!!')).toBe('seance');
  });
});

describe('adresse', () => {
  it('construit le lien de partage et le relit', () => {
    const lien = lienDePartage('https://exemple.nc/outil/?metier=btp#x', {
      ids: ['immo-a', 'g-x--btp'],
      titre: 'Séance RH',
    });
    expect(lien).toBe(
      'https://exemple.nc/outil/?s=immo-a%2Cg-x--btp&t=S%C3%A9ance+RH&vue=apprenant',
    );
    const p = lireParametres(new URL(lien).search);
    expect(p.seance).toEqual(['immo-a', 'g-x--btp']);
    expect(p.titre).toBe('Séance RH');
    expect(p.vue).toBe('apprenant');
    expect(p.metier).toBeNull();
  });

  it('ignore les valeurs mal formées', () => {
    const p = lireParametres('?metier=<script>&niveau=avance&outils=claude,EVIL!,canva&vue=root');
    expect(p.metier).toBeNull();
    expect(p.niveau).toBe('avance');
    expect(p.outils).toEqual(['claude', 'canva']);
    expect(p.vue).toBeNull();
    expect(p.seance).toBeNull();
  });
});
