/**
 * Les métiers. Chaque métier a son fichier dans metiers/ : son vocabulaire (pour décliner
 * les gabarits) et ses exercices écrits à la main.
 * Un métier est soit une fonction (`type: 'fonction'` : le poste tenu, quel que soit le
 * secteur), soit un secteur (`type: 'secteur'` : l'activité de la structure). Le profil
 * choisit l'une, l'autre ou les deux.
 * « tous » porte le vocabulaire neutre, utilisé aussi pour « Autre secteur ».
 */

import * as tous from './metiers/tous.js';
import * as direction from './metiers/direction.js';
import * as management from './metiers/management.js';
import * as accueil from './metiers/accueil.js';
import * as achats from './metiers/achats.js';
import * as informatique from './metiers/informatique.js';
import * as qualite from './metiers/qualite.js';
import * as projet from './metiers/projet.js';
import * as agriculture from './metiers/agriculture.js';
import * as associations from './metiers/associations.js';
import * as artisanat from './metiers/artisanat.js';
import * as automobile from './metiers/automobile.js';
import * as numerique from './metiers/numerique.js';
import * as energie from './metiers/energie.js';
import * as services from './metiers/services.js';
import * as social from './metiers/social.js';
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
import * as restauration from './metiers/restauration.js';
import * as alimentation from './metiers/alimentation.js';

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
  restauration,
  alimentation,
  direction,
  management,
  accueil,
  achats,
  informatique,
  qualite,
  projet,
  agriculture,
  associations,
  artisanat,
  automobile,
  numerique,
  energie,
  services,
  social,
};

/** Les fonctions (le poste tenu). Les autres métiers, sauf « tous », sont des secteurs. */
export const SLUGS_FONCTIONS = new Set([
  'accueil',
  'achats',
  'assistanat',
  'commercial',
  'communication',
  'comptabilite',
  'direction',
  'informatique',
  'management',
  'projet',
  'qualite',
  'rh',
]);

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
    nom: 'Comptabilité et finance',
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
    nom: 'Ressources humaines et paie',
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
    nom: 'Tourisme et hôtellerie',
    icone: 'umbrella-beach',
    description: 'Hôtel, gîte, accueil en tribu, agence de voyages, activités.',
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
  {
    slug: 'restauration',
    court: 'Restauration, bars',
    nom: 'Restauration, bars et cafés',
    icone: 'utensils',
    description: 'Restaurant, snack, bar, café, food truck, restauration rapide.',
  },
  {
    slug: 'alimentation',
    court: 'Alimentation',
    nom: 'Alimentation et métiers de bouche',
    icone: 'bread-slice',
    description: 'Boulangerie, boucherie, traiteur, épicerie, production alimentaire locale.',
  },
  // Fonctions
  {
    slug: 'direction',
    court: 'Direction',
    nom: 'Direction d’entreprise',
    icone: 'user-tie',
    description: 'Dirigeant, gérant, directeur général : pilotage, finances, décisions.',
  },
  {
    slug: 'management',
    court: 'Management',
    nom: 'Management d’équipe',
    icone: 'people-group',
    description: 'Chef d’équipe, responsable de service, manager de proximité.',
  },
  {
    slug: 'accueil',
    court: 'Accueil, relation client',
    nom: 'Accueil et relation client',
    icone: 'headset',
    description: 'Standard, guichet, service client, service après-vente.',
  },
  {
    slug: 'achats',
    court: 'Achats',
    nom: 'Achats et approvisionnement',
    icone: 'cart-shopping',
    description: 'Consultation des fournisseurs, commandes, stocks, négociation.',
  },
  {
    slug: 'informatique',
    court: 'Informatique',
    nom: 'Informatique et support',
    icone: 'laptop-code',
    description: 'Support aux utilisateurs, parc, procédures, sécurité du poste de travail.',
  },
  {
    slug: 'qualite',
    court: 'Qualité, sécurité',
    nom: 'Qualité, sécurité, environnement',
    icone: 'clipboard-check',
    description: 'Audits, procédures, prévention des risques, actions correctives.',
  },
  {
    slug: 'projet',
    court: 'Gestion de projet',
    nom: 'Gestion de projet',
    icone: 'diagram-project',
    description: 'Chef de projet, chargé d’affaires : cadrage, planning, risques, suivi.',
  },
  // Secteurs
  {
    slug: 'agriculture',
    court: 'Agriculture, pêche',
    nom: 'Agriculture, élevage et pêche',
    icone: 'tractor',
    description: 'Maraîchage, élevage, aquaculture, pêche, coopérative.',
  },
  {
    slug: 'associations',
    court: 'Associations',
    nom: 'Associations, culture et sport',
    icone: 'hand-holding-heart',
    description: 'Association, club sportif, centre culturel, événementiel.',
  },
  {
    slug: 'artisanat',
    court: 'Artisanat, services',
    nom: 'Artisanat et services de proximité',
    icone: 'scissors',
    description: 'Coiffure, esthétique, réparation, couture, fleuriste.',
  },
  {
    slug: 'automobile',
    court: 'Automobile',
    nom: 'Automobile et mécanique',
    icone: 'car',
    description: 'Concession, garage, location de véhicules, pièces détachées.',
  },
  {
    slug: 'numerique',
    court: 'Numérique',
    nom: 'Numérique et télécoms',
    icone: 'tower-cell',
    description: 'Société de services informatiques, agence web, télécoms.',
  },
  {
    slug: 'energie',
    court: 'Énergie, eau, déchets',
    nom: 'Énergie, eau et déchets',
    icone: 'bolt',
    description: 'Électricité, eau, assainissement, collecte et tri des déchets.',
  },
  {
    slug: 'services',
    court: 'Services aux entreprises',
    nom: 'Services aux entreprises',
    icone: 'building-user',
    description: 'Nettoyage, sécurité et gardiennage, intérim, conseil.',
  },
  {
    slug: 'social',
    court: 'Social, petite enfance',
    nom: 'Social et petite enfance',
    icone: 'children',
    description: 'Crèche, aide à domicile, action sociale, accompagnement du handicap.',
  },
];

function typeDe(slug) {
  if (slug === 'tous') return null;
  return SLUGS_FONCTIONS.has(slug) ? 'fonction' : 'secteur';
}

export const METIERS = FICHES.map((fiche) => ({
  ...fiche,
  type: typeDe(fiche.slug),
  vocabulaire: FICHIERS[fiche.slug].vocabulaire,
  exercices: FICHIERS[fiche.slug].exercices ?? [],
}));

export const FONCTIONS = METIERS.filter((m) => m.type === 'fonction');
export const SECTEURS = METIERS.filter((m) => m.type === 'secteur');

/** Pseudo-secteur : l'apprenant tape le sien. Il reprend le vocabulaire neutre de « tous ». */
export const AUTRE_METIER = {
  slug: 'autre',
  court: 'Autre secteur',
  nom: 'Autre secteur',
  icone: 'pen',
  description: 'Votre secteur n’est pas dans la liste : tapez-le.',
};

export const SLUGS_METIERS = new Set(METIERS.map((m) => m.slug));

export function metierParSlug(slug) {
  return METIERS.find((m) => m.slug === slug);
}
