/**
 * Tous les gabarits (exercices transversaux paramétrés), un fichier par famille de tâches.
 * Voir js/gabarits.js pour la syntaxe {cle} et {cle.forme}, et vocabulaire.js pour les clés.
 */

import { gabarits as rediger } from './gabarits/rediger.js';
import { gabarits as corriger } from './gabarits/corriger.js';
import { gabarits as synthetiser } from './gabarits/synthetiser.js';
import { gabarits as analyser } from './gabarits/analyser.js';
import { gabarits as veiller } from './gabarits/veiller.js';
import { gabarits as visuels } from './gabarits/visuels.js';
import { gabarits as organiser } from './gabarits/organiser.js';
import { gabarits as automatiser } from './gabarits/automatiser.js';

export const GABARITS = [
  ...rediger,
  ...corriger,
  ...synthetiser,
  ...analyser,
  ...veiller,
  ...visuels,
  ...organiser,
  ...automatiser,
];
