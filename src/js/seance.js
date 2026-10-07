/**
 * La séance du formateur : durée, exports (Markdown, HTML autonome), lien de partage et
 * lecture des paramètres d'adresse. Fonctions pures, sans accès à la page.
 */
import { FAMILLES, NIVEAUX, COMPETENCES, TECHNIQUES } from '../donnees/referentiels.js';
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

/** Nom de fichier sûr : « Séance du 7 octobre » → « seance-du-7-octobre ». */
export function nomDeFichier(titre) {
  return (
    String(titre)
      .toLocaleLowerCase('fr')
      .normalize('NFD')
      .replace(/\p{Diacritic}/gu, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')
      .slice(0, 60) || 'seance'
  );
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

function blocCode(texte) {
  const barrieres = texte.includes('```') ? '~~~~' : '```';
  return `${barrieres}\n${texte}\n${barrieres}`;
}

/** Un exercice en Markdown. `formateur` : ajoute les notes formateur. */
export function exerciceEnMarkdown(e, { formateur = false } = {}) {
  const lignes = [
    `## ${e.titre}`,
    '',
    `*${resume(e)}*`,
    '',
    `**Mise en situation.** ${e.situation}`,
  ];
  lignes.push('', `**Objectif.** ${e.objectif}`, '', '**Votre mission**', '');
  e.etapes.forEach((etape, i) => lignes.push(`${i + 1}. ${etape}`));
  lignes.push('', '**Prompt de départ**', '', blocCode(e.prompt));
  if (e.materiau) lignes.push('', `**${e.materiau.titre}**`, '', blocCode(e.materiau.texte));
  lignes.push(
    '',
    `**Plus simple.** ${e.variantes.simple}`,
    '',
    `**Pour aller plus loin.** ${e.variantes.poussee}`,
  );
  if (e.vigilance) lignes.push('', `**Vigilance.** ${e.vigilance}`);
  if (formateur) {
    const f = e.formateur;
    lignes.push('', '### Notes formateur', '', `**Résultat attendu.** ${f.resultat}`, '');
    lignes.push('**Critères de réussite**', '', ...f.criteres.map((c) => `- [ ] ${c}`), '');
    lignes.push('**Pièges fréquents**', '', ...f.pieges.map((p) => `- ${p}`), '');
    lignes.push(
      `**Compétence travaillée.** ${nomDe(COMPETENCES, f.competence)} · **Technique.** ${nomDe(TECHNIQUES, f.technique)}`,
    );
  }
  return lignes.join('\n');
}

/** Toute la séance en Markdown. */
export function seanceEnMarkdown(titre, exercices, options = {}) {
  const entete = [
    `# ${titre}`,
    '',
    `${exercices.length} exercice${exercices.length > 1 ? 's' : ''} · ${formaterDuree(dureeTotale(exercices))}`,
    '',
    ...exercices.map((e, i) => `${i + 1}. ${e.titre} (${formaterDuree(e.duree)})`),
  ];
  return [...entete, ...exercices.flatMap((e) => ['', '---', '', exerciceEnMarkdown(e, options)])]
    .join('\n')
    .concat('\n');
}

export function echapperHtml(texte) {
  return String(texte)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function exerciceEnHtml(e, { formateur = false } = {}) {
  const h = echapperHtml;
  const parties = [
    `<section class="exo"><h2>${h(e.titre)}</h2><p class="meta">${h(resume(e))}</p>`,
    `<p><strong>Mise en situation.</strong> ${h(e.situation)}</p>`,
    `<p><strong>Objectif.</strong> ${h(e.objectif)}</p>`,
    `<h3>Votre mission</h3><ol>${e.etapes.map((x) => `<li>${h(x)}</li>`).join('')}</ol>`,
    `<h3>Prompt de départ</h3><pre>${h(e.prompt)}</pre>`,
  ];
  if (e.materiau) parties.push(`<h3>${h(e.materiau.titre)}</h3><pre>${h(e.materiau.texte)}</pre>`);
  parties.push(
    `<p><strong>Plus simple.</strong> ${h(e.variantes.simple)}</p>`,
    `<p><strong>Pour aller plus loin.</strong> ${h(e.variantes.poussee)}</p>`,
  );
  if (e.vigilance)
    parties.push(`<p class="vigilance"><strong>Vigilance.</strong> ${h(e.vigilance)}</p>`);
  if (formateur) {
    const f = e.formateur;
    parties.push(
      `<div class="formateur"><h3>Notes formateur</h3><p><strong>Résultat attendu.</strong> ${h(f.resultat)}</p>`,
      `<p><strong>Critères de réussite</strong></p><ul>${f.criteres.map((c) => `<li>${h(c)}</li>`).join('')}</ul>`,
      `<p><strong>Pièges fréquents</strong></p><ul>${f.pieges.map((p) => `<li>${h(p)}</li>`).join('')}</ul>`,
      `<p><strong>Compétence.</strong> ${h(nomDe(COMPETENCES, f.competence))} · <strong>Technique.</strong> ${h(nomDe(TECHNIQUES, f.technique))}</p></div>`,
    );
  }
  parties.push('</section>');
  return parties.join('\n');
}

/** Toute la séance en page HTML autonome (à ouvrir, imprimer ou envoyer). */
export function seanceEnHtml(titre, exercices, options = {}) {
  const h = echapperHtml;
  const sommaire = exercices
    .map((e) => `<li>${h(e.titre)} <span class="meta">(${h(formaterDuree(e.duree))})</span></li>`)
    .join('');
  return `<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${h(titre)}</title>
<style>
body{font-family:Georama,system-ui,-apple-system,'Segoe UI',Roboto,Arial,sans-serif;color:#4a4a4a;max-width:46rem;margin:0 auto;padding:2rem 1rem;line-height:1.55}
h1,h2,h3{color:#2e2e2e;line-height:1.25}h1{font-size:1.9rem}h2{font-size:1.35rem;margin-top:0}
.exo{border-top:6px solid #50967c;padding-top:1.25rem;margin-top:2.5rem;break-inside:avoid-page}
.meta{color:#5c646c;font-size:.9rem}pre{white-space:pre-wrap;background:#f1f3f5;border-radius:8px;padding:.85rem 1rem;font-size:.9rem}
.vigilance{background:#fdf3dc;border-radius:8px;padding:.6rem .9rem}.formateur{background:#e8f5f0;border-radius:12px;padding:.25rem 1rem .75rem}
footer{margin-top:3rem;color:#5c646c;font-size:.85rem}
</style>
</head>
<body>
<h1>${h(titre)}</h1>
<p class="meta">${exercices.length} exercice${exercices.length > 1 ? 's' : ''} · ${h(formaterDuree(dureeTotale(exercices)))}</p>
<ol>${sommaire}</ol>
${exercices.map((e) => exerciceEnHtml(e, options)).join('\n')}
<footer>Atelier d’exercices IA · Skazy Formation · formation.skazy.nc. Données d’exercice fictives.</footer>
</body>
</html>
`;
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
