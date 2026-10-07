/**
 * Les métiers. Chaque métier a son fichier dans metiers/ : son vocabulaire (pour décliner
 * les gabarits) et ses exercices écrits à la main.
 * « tous » porte le vocabulaire neutre, utilisé aussi pour « Autre métier ».
 */

import * as tous from './metiers/tous.js';
import * as immobilier from './metiers/immobilier.js';
import * as comptabilite from './metiers/comptabilite.js';
import * as btp from './metiers/btp.js';
import * as sante from './metiers/sante.js';
import * as rh from './metiers/rh.js';
import * as juridique from './metiers/juridique.js';
import * as commercial from './metiers/commercial.js';
import * as commerce from './metiers/commerce.js';
import * as assistanat from './metiers/assistanat.js';
import * as communication from './metiers/communication.js';
import * as tourisme from './metiers/tourisme.js';
import * as collectivites from './metiers/collectivites.js';
import * as industrie from './metiers/industrie.js';
import * as logistique from './metiers/logistique.js';
import * as banque from './metiers/banque.js';
import * as formation from './metiers/formation.js';

const FICHIERS = {
  tous,
  immobilier,
  comptabilite,
  btp,
  sante,
  rh,
  juridique,
  commercial,
  commerce,
  assistanat,
  communication,
  tourisme,
  collectivites,
  industrie,
  logistique,
  banque,
  formation,
};

const FICHES = [
  {
    slug: 'tous',
    court: 'Tous métiers',
    nom: 'Tous métiers',
    icone: 'layer-group',
    description: 'Les exercices transversaux et ceux de tous les métiers.',
  },
  {
    slug: 'immobilier',
    court: 'Immobilier',
    nom: 'Immobilier',
    icone: 'house',
    description: 'Agence, gestion locative, syndic, promotion.',
  },
  {
    slug: 'comptabilite',
    court: 'Comptabilité',
    nom: 'Comptabilité et gestion',
    icone: 'calculator',
    description: 'Cabinet comptable, service comptable, contrôle de gestion.',
  },
  {
    slug: 'btp',
    court: 'BTP',
    nom: 'Bâtiment et travaux publics',
    icone: 'helmet-safety',
    description: 'Entreprise de travaux, artisan, bureau d’études, maîtrise d’œuvre.',
  },
  {
    slug: 'sante',
    court: 'Santé',
    nom: 'Santé et médico-social',
    icone: 'stethoscope',
    description: 'Cabinet, clinique, pharmacie, établissement médico-social.',
  },
  {
    slug: 'rh',
    court: 'RH',
    nom: 'Ressources humaines',
    icone: 'users',
    description: 'Recrutement, paie, formation, relations sociales.',
  },
  {
    slug: 'juridique',
    court: 'Juridique',
    nom: 'Juridique',
    icone: 'scale-balanced',
    description: 'Cabinet d’avocats, étude notariale, service juridique.',
  },
  {
    slug: 'commercial',
    court: 'Commercial',
    nom: 'Commercial et vente',
    icone: 'handshake',
    description: 'Prospection, devis, négociation, suivi des clients professionnels.',
  },
  {
    slug: 'commerce',
    court: 'Commerce',
    nom: 'Commerce et distribution',
    icone: 'store',
    description: 'Magasin, grande surface, boutique en ligne.',
  },
  {
    slug: 'assistanat',
    court: 'Assistanat',
    nom: 'Assistanat et secrétariat',
    icone: 'folder-open',
    description: 'Accueil, agenda, courrier, classement, suivi administratif.',
  },
  {
    slug: 'communication',
    court: 'Communication',
    nom: 'Communication et marketing',
    icone: 'bullhorn',
    description: 'Réseaux sociaux, site web, campagnes, relations presse.',
  },
  {
    slug: 'tourisme',
    court: 'Tourisme',
    nom: 'Tourisme, hôtellerie et restauration',
    icone: 'umbrella-beach',
    description: 'Hôtel, gîte, restaurant, agence de voyages, activités.',
  },
  {
    slug: 'collectivites',
    court: 'Collectivités',
    nom: 'Collectivités et service public',
    icone: 'landmark',
    description: 'Mairie, province, établissement public, service aux usagers.',
  },
  {
    slug: 'industrie',
    court: 'Industrie',
    nom: 'Mine, industrie et maintenance',
    icone: 'industry',
    description: 'Site minier, usine, atelier de maintenance, sécurité.',
  },
  {
    slug: 'logistique',
    court: 'Logistique',
    nom: 'Transport et logistique',
    icone: 'truck',
    description: 'Transit, import, entrepôt, livraison, transport de personnes.',
  },
  {
    slug: 'banque',
    court: 'Banque, assurance',
    nom: 'Banque et assurance',
    icone: 'building-columns',
    description: 'Agence bancaire, courtage, assurance, crédit.',
  },
  {
    slug: 'formation',
    court: 'Formation',
    nom: 'Éducation et formation',
    icone: 'graduation-cap',
    description: 'Organisme de formation, établissement scolaire, formateur indépendant.',
  },
];

export const METIERS = FICHES.map((fiche) => ({
  ...fiche,
  vocabulaire: FICHIERS[fiche.slug].vocabulaire,
  exercices: FICHIERS[fiche.slug].exercices ?? [],
}));

/** Pseudo-métier : l'apprenant tape le sien. Il reprend le vocabulaire neutre de « tous ». */
export const AUTRE_METIER = {
  slug: 'autre',
  court: 'Autre métier',
  nom: 'Autre métier',
  icone: 'pen',
  description: 'Votre métier n’est pas dans la liste : tapez-le.',
};

export const SLUGS_METIERS = new Set(METIERS.map((m) => m.slug));

export function metierParSlug(slug) {
  return METIERS.find((m) => m.slug === slug);
}
