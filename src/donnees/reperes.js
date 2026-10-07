/**
 * Contenu de la fenêtre « Repères » : la méthode, l'usage responsable et les sources
 * officielles dont s'inspirent les exercices.
 */

export const INGREDIENTS = [
  {
    nom: 'Le contexte',
    texte: 'Qui vous êtes, pour qui est le résultat, et pourquoi vous en avez besoin.',
  },
  { nom: 'La tâche', texte: 'Ce que l’IA doit faire, avec un verbe d’action précis.' },
  {
    nom: 'Le format',
    texte: 'Longueur, structure, ton, public : tableau, liste, e-mail de 120 mots…',
  },
  {
    nom: 'Les exemples ou les sources',
    texte: 'Un modèle à imiter, ou les documents sur lesquels s’appuyer (et les citer).',
  },
  {
    nom: 'Les limites',
    texte: 'Ce qui ne doit pas changer, et quoi faire si l’information manque : le dire.',
  },
];

export const EXEMPLE_PROMPT = {
  avant: 'Écris un mail pour un client mécontent.',
  apres:
    'Tu es conseiller clientèle dans une agence immobilière à Nouméa. Un locataire nous écrit, mécontent du délai de restitution de son dépôt de garantie (son e-mail est ci-dessous). Rédige une réponse courtoise, en vouvoiement, de 120 mots au maximum, qui reconnaît le retard, explique la prochaine étape et donne un délai. Ne promets aucun geste financier. Si une information te manque, signale-la entre crochets.\n\n<email>\n[collez l’e-mail sans le nom du locataire]\n</email>',
};

export const REGLES = [
  {
    icone: 'shield-halved',
    nom: 'Protégez les données',
    texte:
      'Ne collez ni données personnelles (noms, adresses, santé, salaires, comptes) ni informations confidentielles réelles. Remplacez-les par des données fictives ou des [crochets].',
  },
  {
    icone: 'magnifying-glass',
    nom: 'Vérifiez tout',
    texte:
      'L’IA peut inventer un chiffre, une date, une règle ou une source avec beaucoup d’assurance. Recalculez, ouvrez les sources, relisez.',
  },
  {
    icone: 'users',
    nom: 'Gardez la décision',
    texte:
      'Santé, droit, recrutement, crédit, sécurité : l’IA aide à préparer, une personne compétente décide et valide.',
  },
  {
    icone: 'circle-info',
    nom: 'Soyez transparent',
    texte:
      'Dites quand un document a été préparé avec l’IA, surtout s’il part chez un client ou un usager.',
  },
  {
    icone: 'book-open',
    nom: 'Suivez les règles de votre structure',
    texte:
      'Quels outils sont autorisés, avec quel compte, pour quelles données : la politique de votre employeur passe d’abord.',
  },
  {
    icone: 'scale-balanced',
    nom: 'Repérez les biais',
    texte:
      'Relisez les textes et les tris produits par l’IA pour repérer stéréotypes et inégalités de traitement.',
  },
];

export const SOURCES = [
  {
    editeur: 'Anthropic',
    titre: 'AI Fluency : Framework & Foundations (cadre 4D)',
    lien: 'https://anthropic.skilljar.com/ai-fluency-framework-foundations',
  },
  {
    editeur: 'Anthropic',
    titre: 'Bonnes pratiques de prompt (Claude)',
    lien: 'https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices',
  },
  {
    editeur: 'Anthropic',
    titre: 'Réduire les hallucinations',
    lien: 'https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/reduce-hallucinations',
  },
  {
    editeur: 'Anthropic',
    titre: 'Centre d’aide Claude : fonctionnalités',
    lien: 'https://support.claude.com/fr/collections/18031719-caracteristiques-et-fonctionnalites',
  },
  {
    editeur: 'OpenAI Academy',
    titre: 'Prompting (ChatGPT au travail)',
    lien: 'https://academy.openai.com/public/clubs/work-users-ynjqu/resources/prompting',
  },
  {
    editeur: 'OpenAI Academy',
    titre: 'Utiliser ChatGPT de façon responsable au travail',
    lien: 'https://academy.openai.com/public/clubs/work-users-ynjqu/resources/responsible-use-of-chatgpt-at-work-2025-09-08',
  },
  {
    editeur: 'OpenAI Academy',
    titre: 'Cas d’usage par métier (RH, ventes, finance…)',
    lien: 'https://academy.openai.com/public/clubs/work-users-ynjqu/resources/use-cases-hr',
  },
  {
    editeur: 'Google',
    titre: 'Aide Gemini Notebook (ex-NotebookLM)',
    lien: 'https://support.google.com/notebooklm/answer/16206563?hl=fr',
  },
  {
    editeur: 'Microsoft',
    titre: 'Questions fréquentes sur Copilot dans Outlook',
    lien: 'https://support.microsoft.com/fr-FR/Outlook/frequently-asked-questions-about-copilot-in-outlook',
  },
  {
    editeur: 'Canva',
    titre: 'Calques magiques',
    lien: 'https://www.canva.com/fr_fr/calques-magiques/',
  },
];
