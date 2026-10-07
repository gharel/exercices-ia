/**
 * Aperçu d'un gabarit décliné, pour relire l'accord du français.
 *   node outils/apercu.js g-email-avant-envoi            → tous les métiers
 *   node outils/apercu.js g-email-avant-envoi btp sante  → ces métiers seulement
 * Affiche le titre, la situation et le prompt de chaque déclinaison.
 */
import { GABARITS } from '../src/donnees/gabarits.js';
import { METIERS } from '../src/donnees/metiers.js';
import { concerne, declinerGabarit } from '../src/js/gabarits.js';

const [id, ...slugs] = process.argv.slice(2);
const gabarit = GABARITS.find((g) => g.id === id);
if (!gabarit) {
  console.error(`Gabarit inconnu : ${id}\nGabarits : ${GABARITS.map((g) => g.id).join(', ')}`);
  process.exit(1);
}

for (const metier of METIERS) {
  if (slugs.length && !slugs.includes(metier.slug)) continue;
  if (!concerne(gabarit, metier.slug)) continue;
  try {
    const ex = declinerGabarit(gabarit, metier);
    console.log(`\n=== ${metier.slug} ===\n${ex.titre}\n\n${ex.situation}\n\n${ex.prompt}`);
  } catch (e) {
    console.log(`\n=== ${metier.slug} === ERREUR : ${e.message}`);
  }
}
