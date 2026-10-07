/**
 * Référentiels : les axes de filtre (niveaux, familles de tâches, outils) et les repères
 * pédagogiques (compétences 4D, techniques de prompt). Les exercices s'y réfèrent par leur slug.
 * Les couleurs sont des noms : leur valeur est dans styles/charte.css (data-couleur).
 */

export const NIVEAUX = [
  {
    slug: 'debutant',
    nom: 'Débutant',
    accroche: 'Je découvre',
    description:
      'Une demande claire, en une fois : le contexte, la tâche et le format attendu. On apprend à relire la réponse.',
  },
  {
    slug: 'intermediaire',
    nom: 'Intermédiaire',
    accroche: 'Je pratique',
    description:
      'On affine en plusieurs échanges, on donne des exemples, on joint des documents et on compare les versions.',
  },
  {
    slug: 'avance',
    nom: 'Avancé',
    accroche: 'J’automatise',
    description:
      'On enchaîne les étapes, on crée un assistant sur mesure, on planifie une veille, on exploite un corpus de documents.',
  },
];

export const FAMILLES = [
  {
    slug: 'rediger',
    nom: 'Rédiger et répondre',
    court: 'Rédiger',
    icone: 'pen-nib',
    couleur: 'bleu',
    description: 'E-mails, courriers, annonces, réponses aux clients.',
  },
  {
    slug: 'corriger',
    nom: 'Corriger et reformuler',
    court: 'Corriger',
    icone: 'spell-check',
    couleur: 'violet',
    description: 'Orthographe, ton, clarté, version simplifiée ou traduite.',
  },
  {
    slug: 'synthetiser',
    nom: 'Synthétiser',
    court: 'Synthétiser',
    icone: 'list-ul',
    couleur: 'turquoise',
    description: 'Comptes rendus, résumés de documents longs, points clés.',
  },
  {
    slug: 'analyser',
    nom: 'Analyser des chiffres',
    court: 'Analyser',
    icone: 'chart-column',
    couleur: 'jaune',
    description: 'Tableaux, indicateurs, comparaisons, graphiques.',
  },
  {
    slug: 'veiller',
    nom: 'Rechercher et veiller',
    court: 'Rechercher',
    icone: 'magnifying-glass',
    couleur: 'rose',
    description: 'Recherche documentée, veille, appels d’offres, vérification des sources.',
  },
  {
    slug: 'visuels',
    nom: 'Créer des visuels',
    court: 'Visuels',
    icone: 'palette',
    couleur: 'orange',
    description: 'Affiches, publications, présentations, images.',
  },
  {
    slug: 'organiser',
    nom: 'Organiser et planifier',
    court: 'Organiser',
    icone: 'calendar-check',
    couleur: 'vert',
    description: 'Plannings, procédures, check-lists, préparation de réunions.',
  },
  {
    slug: 'automatiser',
    nom: 'Automatiser et créer un assistant',
    court: 'Automatiser',
    icone: 'robot',
    couleur: 'anthracite',
    description: 'Assistants sur mesure, modèles réutilisables, tâches planifiées, enchaînements.',
  },
];

export const DUREES = [10, 15, 20, 30, 45, 60];

/** Tranches de durée proposées dans les filtres. */
export const TRANCHES_DUREE = [
  { slug: 'court', nom: '15 min ou moins', court: '≤ 15 min', min: 0, max: 15 },
  { slug: 'moyen', nom: '20 à 30 min', court: '20 à 30 min', min: 16, max: 30 },
  { slug: 'long', nom: '45 min et plus', court: '45 min et +', min: 31, max: Infinity },
];

/**
 * Le cadre 4D du cours « AI Fluency: Framework & Foundations » d'Anthropic
 * (Rick Dakan et Joseph Feller).
 */
export const COMPETENCES = [
  {
    slug: 'delegation',
    nom: 'Délégation',
    question: 'Quoi confier à l’IA, et quoi garder ?',
    description:
      'Fixer l’objectif, puis décider si, quand et comment utiliser l’IA : ce qu’on lui confie, ce qu’on garde pour soi.',
  },
  {
    slug: 'description',
    nom: 'Description',
    question: 'Comment bien formuler la demande ?',
    description:
      'Décrire l’objectif, le contexte, les contraintes et le format attendu, assez précisément pour obtenir un résultat utile.',
  },
  {
    slug: 'discernement',
    nom: 'Discernement',
    question: 'La réponse est-elle juste et utilisable ?',
    description:
      'Évaluer avec un œil critique ce que l’IA produit : exactitude, pertinence, ton, oublis, erreurs inventées.',
  },
  {
    slug: 'diligence',
    nom: 'Diligence',
    question: 'Est-ce que j’utilise l’IA de façon responsable ?',
    description:
      'Assumer ce que l’on fait avec l’IA : données protégées, vérification avant envoi, transparence sur son usage.',
  },
];

/** Techniques de formulation, d'après les guides officiels d'Anthropic et d'OpenAI. */
export const TECHNIQUES = [
  {
    slug: 'contexte',
    nom: 'Donner le contexte',
    description:
      'Dire qui vous êtes, à qui s’adresse le résultat et pourquoi vous en avez besoin. L’IA ne devine pas ce que vous savez.',
  },
  {
    slug: 'role',
    nom: 'Attribuer un rôle',
    description:
      'Demander à l’IA d’adopter un point de vue précis (« Tu es un conseiller clientèle expérimenté… ») pour cadrer le ton et le niveau d’expertise.',
  },
  {
    slug: 'format',
    nom: 'Décrire le résultat attendu',
    description:
      'Préciser la forme : longueur, structure, ton, public, tableau ou liste. Dire ce qu’il faut faire plutôt que ce qu’il faut éviter.',
  },
  {
    slug: 'exemples',
    nom: 'Montrer des exemples',
    description:
      'Fournir un ou plusieurs modèles de ce que vous attendez : l’IA en reprend le style et la structure.',
  },
  {
    slug: 'decomposer',
    nom: 'Découper en étapes',
    description:
      'Traiter une tâche complexe en plusieurs demandes successives, en vérifiant chaque étape avant la suivante.',
  },
  {
    slug: 'iterer',
    nom: 'Itérer et affiner',
    description:
      'Considérer la première réponse comme un brouillon : demander des ajustements précis jusqu’au résultat voulu.',
  },
  {
    slug: 'sources',
    nom: 'S’appuyer sur des sources',
    description:
      'Joindre les documents de référence, demander de citer les passages utilisés et d’indiquer ce qui manque plutôt que d’inventer.',
  },
  {
    slug: 'options',
    nom: 'Demander plusieurs options',
    description: 'Obtenir plusieurs propositions pour comparer, choisir et combiner.',
  },
  {
    slug: 'critique',
    nom: 'Faire vérifier',
    description:
      'Demander à l’IA de relire, de lister ses incertitudes ou de critiquer sa propre réponse, puis vérifier soi-même.',
  },
  {
    slug: 'structurer',
    nom: 'Structurer la demande',
    description:
      'Séparer clairement les consignes, les données et le format attendu (titres, listes, balises comme <document>).',
  },
  {
    slug: 'simulation',
    nom: 'Simuler une situation',
    description:
      'Faire jouer un rôle à l’IA (client, candidat, jury) pour s’entraîner, puis lui demander un retour.',
  },
  {
    slug: 'instructions',
    nom: 'Écrire des instructions permanentes',
    description:
      'Rédiger une fois pour toutes les consignes d’un assistant (Projet, GPT, Gem, Skill) pour obtenir des réponses régulières.',
  },
];

/**
 * Les outils couverts. `fonctions` : les fonctions utiles en formation, nommées comme dans
 * l'interface. `astuces` : l'astuce par défaut pour chaque famille de tâches, quand l'exercice
 * n'en donne pas.
 */
export { OUTILS } from './outils.js';
