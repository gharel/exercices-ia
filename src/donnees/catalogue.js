/**
 * Le catalogue complet : les exercices écrits pour chaque métier, plus les gabarits déclinés
 * pour chaque métier (et en version neutre pour « tous »).
 * Une déclinaison impossible (vocabulaire incomplet) est écartée et signalée en console :
 * la page reste utilisable, et tests/unit/donnees.test.js la fait échouer.
 */

import { METIERS } from './metiers.js';
import { GABARITS } from './gabarits.js';
import { concerne, declinerGabarit } from '../js/gabarits.js';

export const EXERCICES_ECRITS = METIERS.flatMap((m) => m.exercices);

export const EXERCICES_DECLINES = GABARITS.flatMap((gabarit) =>
  METIERS.filter((metier) => concerne(gabarit, metier.slug)).flatMap((metier) => {
    try {
      return [declinerGabarit(gabarit, metier)];
    } catch (erreur) {
      console.error(`Gabarit ${gabarit.id} × ${metier.slug} : ${erreur.message}`);
      return [];
    }
  }),
);

export const CATALOGUE = [...EXERCICES_ECRITS, ...EXERCICES_DECLINES];
