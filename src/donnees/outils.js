/**
 * Les outils d'IA couverts (noms vérifiés en octobre 2026, interface en français).
 * `fonctions` : celles qui servent en formation ; `offre` dit si elles sont gratuites.
 * `astuces` : l'astuce par défaut pour chaque famille de tâches, quand un exercice n'en
 * donne pas. Les marques sont écrites en texte : pas de logo (droit des marques).
 * Ne citer dans les exercices que des fonctions de cette liste.
 */

export const OUTILS = [
  {
    slug: 'claude',
    nom: 'Claude',
    editeur: 'Anthropic',
    lien: 'https://claude.ai',
    fonctions: [
      {
        nom: 'Projets',
        offre: 'Gratuit (5 projets)',
        role: 'Un espace avec ses documents et ses instructions, repris à chaque conversation.',
      },
      {
        nom: 'Artefacts',
        offre: 'Gratuit',
        role: 'Un document, un tableau ou une petite application affichés à côté de la conversation.',
      },
      {
        nom: 'Création de fichiers',
        offre: 'Gratuit',
        role: 'Produit directement des fichiers Word, Excel, PowerPoint ou PDF.',
      },
      {
        nom: 'Recherche web',
        offre: 'Gratuit',
        role: 'Cherche des informations récentes et cite les pages utilisées.',
      },
      {
        nom: 'Recherche',
        offre: 'Payant',
        role: 'Une recherche approfondie en plusieurs étapes, rendue en rapport sourcé.',
      },
      {
        nom: 'Compétences',
        offre: 'Gratuit',
        role: 'Une méthode ou un modèle maison (Skill) que Claude applique dès que la tâche s’y prête.',
      },
      {
        nom: 'Connecteurs',
        offre: 'Gratuit',
        role: 'Un accès à vos outils (Google Drive, Gmail, agenda…), si vous l’autorisez.',
      },
      {
        nom: 'Tâches planifiées',
        offre: 'Payant',
        role: 'Une demande que Claude relance seul, à l’heure prévue.',
      },
    ],
    astuces: {
      rediger:
        'Demandez deux ou trois versions de ton différent, puis combinez la meilleure ouverture et la meilleure conclusion.',
      corriger:
        'Demandez la liste des modifications après le texte corrigé, pour vérifier que rien d’important n’a changé.',
      synthetiser:
        'Joignez le document et demandez de citer les passages utilisés : vous pourrez vérifier chaque point.',
      analyser:
        'Déposez le fichier Excel ou CSV : Claude calcule, trace un graphique et peut rendre un fichier Excel.',
      veiller:
        'Activez la recherche web et demandez les sources de chaque information ; ouvrez-les avant de les citer.',
      visuels:
        'Demandez un artefact : une affiche ou une infographie simple, à retoucher ensuite dans Canva.',
      organiser:
        'Demandez le planning ou la check-list sous forme de fichier Excel, prêt à partager.',
      automatiser:
        'Créez un Projet avec vos documents de référence et des instructions permanentes, ou une compétence pour une méthode maison.',
    },
  },
  {
    slug: 'chatgpt',
    nom: 'ChatGPT',
    editeur: 'OpenAI',
    lien: 'https://chatgpt.com',
    fonctions: [
      {
        nom: 'Projets',
        offre: 'Gratuit',
        role: 'Regroupe conversations, fichiers et instructions autour d’un même sujet.',
      },
      {
        nom: 'GPT',
        offre: 'Création payante',
        role: 'Un assistant sur mesure avec ses instructions et ses documents, partageable.',
      },
      {
        nom: 'Canevas',
        offre: 'Gratuit',
        role: 'Une zone d’édition à côté de la conversation pour retravailler un texte passage par passage.',
      },
      {
        nom: 'Recherche approfondie',
        offre: 'Limité en gratuit',
        role: 'Une recherche en plusieurs étapes sur le web, rendue en rapport sourcé.',
      },
      {
        nom: 'Tâches planifiées',
        offre: 'Payant',
        role: 'Une demande qui se relance seule, chaque jour ou chaque semaine.',
      },
      {
        nom: 'Analyse de données',
        offre: 'Gratuit',
        role: 'Analyse un fichier Excel ou CSV, calcule et trace des graphiques.',
      },
      {
        nom: 'Création d’images',
        offre: 'Gratuit',
        role: 'Crée ou modifie une image à partir d’une description.',
      },
      {
        nom: 'Mémoire',
        offre: 'Gratuit',
        role: 'Retient vos préférences d’une conversation à l’autre (désactivable).',
      },
    ],
    astuces: {
      rediger:
        'Ouvrez le texte dans le canevas : vous pouvez demander de raccourcir ou de changer le ton d’un seul paragraphe.',
      corriger:
        'Dans le canevas, demandez des suggestions de modification pour voir chaque correction proposée.',
      synthetiser:
        'Joignez le document et précisez la longueur et le public du résumé (direction, client, équipe).',
      analyser:
        'Déposez le fichier : ChatGPT fait les calculs, puis trace les graphiques demandés. Vérifiez un total à la main.',
      veiller:
        'Utilisez la recherche approfondie pour une synthèse sourcée ; une tâche planifiée peut relancer la veille chaque semaine.',
      visuels:
        'Décrivez l’image voulue (format, couleurs, texte à afficher) et demandez des retouches successives.',
      organiser: 'Demandez un tableau, puis téléchargez-le au format Excel.',
      automatiser:
        'Créez un Projet avec des instructions et des fichiers, ou un GPT à partager avec l’équipe.',
    },
  },
  {
    slug: 'copilot',
    nom: 'Microsoft Copilot',
    editeur: 'Microsoft',
    lien: 'https://m365.cloud.microsoft/chat',
    fonctions: [
      {
        nom: 'Copilot Chat',
        offre: 'Inclus dans Microsoft 365',
        role: 'La conversation, avec vos fichiers joints et la recherche web.',
      },
      {
        nom: 'Brouillon avec Copilot (Outlook)',
        offre: 'Inclus dans Microsoft 365',
        role: 'Rédige un premier jet d’e-mail à partir de quelques mots.',
      },
      {
        nom: 'Coaching par Copilot (Outlook)',
        offre: 'Inclus dans Microsoft 365',
        role: 'Relit votre e-mail et conseille sur le ton, la clarté et le ressenti du lecteur.',
      },
      {
        nom: 'Résumer (Outlook)',
        offre: 'Inclus dans Microsoft 365',
        role: 'Résume un long fil de discussion en quelques points.',
      },
      {
        nom: 'Copilot Pages',
        offre: 'Compte professionnel',
        role: 'Transforme une réponse en page modifiable et partageable avec l’équipe.',
      },
      {
        nom: 'Copilot dans Word, Excel et PowerPoint',
        offre: 'Selon la licence',
        role: 'Rédige, analyse un tableau ou crée une présentation directement dans le fichier.',
      },
      {
        nom: 'Récapitulatif de réunion (Teams)',
        offre: 'Licence Copilot',
        role: 'Résume une réunion et liste les actions décidées.',
      },
      {
        nom: 'Créer un agent',
        offre: 'Selon la licence',
        role: 'Un assistant sur mesure, avec ses instructions et ses sources.',
      },
    ],
    astuces: {
      rediger:
        'Dans Outlook, partez d’un « Brouillon avec Copilot », puis réglez le ton et la longueur.',
      corriger:
        'Dans Outlook, lancez « Coaching par Copilot » avant d’envoyer : il commente le ton et la clarté.',
      synthetiser:
        'Dans Outlook, « Résumer » condense un long fil ; dans Copilot Chat, joignez le document à résumer.',
      analyser:
        'Mettez les données sous forme de tableau Excel avant de les confier à Copilot : il les lit beaucoup mieux.',
      veiller:
        'Demandez les sources de chaque affirmation et ouvrez-les : Copilot Chat cite les pages web utilisées.',
      visuels:
        'Avec la licence, PowerPoint peut générer une première présentation à partir d’un document Word.',
      organiser:
        'Transformez la réponse en Copilot Page pour que l’équipe complète le planning ou la check-list.',
      automatiser:
        'Créez un agent avec vos instructions et vos documents de référence, à partager avec l’équipe.',
    },
  },
  {
    slug: 'gemini',
    nom: 'Google Gemini',
    editeur: 'Google',
    lien: 'https://gemini.google.com',
    fonctions: [
      {
        nom: 'Gems',
        offre: 'Gratuit',
        role: 'Un assistant sur mesure avec ses instructions et ses fichiers.',
      },
      {
        nom: 'Canvas',
        offre: 'Gratuit',
        role: 'Un espace pour rédiger et retoucher un document avec Gemini.',
      },
      {
        nom: 'Deep Research',
        offre: 'Limité en gratuit',
        role: 'Une recherche approfondie sur le web, rendue en rapport sourcé.',
      },
      {
        nom: 'Programmer des actions',
        offre: 'Selon l’offre',
        role: 'Une demande que Gemini relance seul, chaque jour ou chaque semaine.',
      },
      {
        nom: 'Aide-moi à écrire (Gmail, Docs)',
        offre: 'Google Workspace',
        role: 'Rédige ou reformule un e-mail ou un document.',
      },
      {
        nom: 'Demander à Gemini (Sheets)',
        offre: 'Google Workspace',
        role: 'Crée un tableau, propose des formules, analyse les données.',
      },
      {
        nom: 'Prendre des notes pour moi (Meet)',
        offre: 'Google Workspace',
        role: 'Prend les notes de la réunion et les range dans Google Docs.',
      },
    ],
    astuces: {
      rediger:
        'Dans Gmail, utilisez « Aide-moi à écrire », puis affinez : plus court, plus formel, plus détaillé.',
      corriger: 'Ouvrez le texte dans Canvas pour retoucher un passage précis sans tout régénérer.',
      synthetiser:
        'Joignez le document ou collez-le, et précisez le public et la longueur du résumé attendu.',
      analyser:
        'Dans Google Sheets, ouvrez « Demander à Gemini » pour expliquer une tendance ou proposer une formule.',
      veiller:
        'Lancez Deep Research, puis exportez le rapport dans Google Docs pour l’annoter ; « Programmer des actions » relance une veille.',
      visuels:
        'Demandez une image en précisant format, style et texte, puis comparez plusieurs propositions.',
      organiser: 'Demandez un tableau, puis exportez-le dans Google Sheets.',
      automatiser: 'Créez un Gem avec vos instructions et vos documents de référence.',
    },
  },
  {
    slug: 'notebook',
    nom: 'Gemini Notebook',
    editeur: 'Google',
    lien: 'https://notebooklm.google.com',
    note: 'Anciennement NotebookLM.',
    fonctions: [
      {
        nom: 'Sources',
        offre: 'Gratuit (50 par carnet)',
        role: 'Les documents chargés (PDF, Docs, sites, vidéos YouTube…) : les réponses ne s’appuient que sur eux.',
      },
      {
        nom: 'Discussion',
        offre: 'Gratuit',
        role: 'Chaque réponse renvoie, par une citation numérotée, au passage exact de la source.',
      },
      {
        nom: 'Résumé audio',
        offre: 'Gratuit',
        role: 'Une discussion audio entre deux voix qui présente vos sources.',
      },
      {
        nom: 'Carte mentale',
        offre: 'Gratuit',
        role: 'Une carte des notions de vos sources, à explorer en cliquant.',
      },
      {
        nom: 'Rapports',
        offre: 'Gratuit',
        role: 'Guide d’étude, synthèse, FAQ… générés à partir des sources.',
      },
      {
        nom: 'Fiches et quiz',
        offre: 'Gratuit',
        role: 'Des cartes de révision et des questionnaires tirés des sources.',
      },
    ],
    astuces: {
      rediger:
        'Chargez vos documents de référence comme sources : le texte rédigé s’appuiera uniquement sur eux.',
      corriger:
        'Ajoutez votre guide de style comme source, puis demandez si un texte le respecte, citations à l’appui.',
      synthetiser:
        'Chargez les documents, puis générez un rapport (synthèse ou FAQ) : chaque point renvoie à sa source.',
      analyser:
        'Chargez plusieurs rapports et demandez de comparer leurs chiffres clés, avec la citation de chaque chiffre.',
      veiller:
        'Ajoutez des sources par la recherche intégrée, puis interrogez l’ensemble : chaque réponse cite son passage.',
      visuels: 'Générez une carte mentale des sources pour bâtir le plan d’une présentation.',
      organiser:
        'Générez un guide d’étude ou une FAQ pour préparer une réunion ou l’arrivée d’un collègue.',
      automatiser:
        'Partagez le carnet avec l’équipe : il devient une base de questions-réponses sur vos documents.',
    },
  },
  {
    slug: 'canva',
    nom: 'Canva',
    editeur: 'Canva',
    lien: 'https://www.canva.com',
    fonctions: [
      {
        nom: 'IA Canva',
        offre: 'Gratuit (limité)',
        role: 'L’assistant de Canva : décrivez ce que vous voulez créer, il propose des designs modifiables.',
      },
      {
        nom: 'Design magique',
        offre: 'Gratuit (limité)',
        role: 'Génère des propositions de design à partir d’une description.',
      },
      {
        nom: 'Écriture magique',
        offre: 'Gratuit (limité)',
        role: 'Rédige, raccourcit ou reformule un texte dans le design.',
      },
      {
        nom: 'Calques magiques',
        offre: 'Gratuit (limité)',
        role: 'Transforme une image plate (PNG, JPG) en design modifiable, élément par élément.',
      },
      {
        nom: 'Redimensionnement magique',
        offre: 'Pro',
        role: 'Décline un design dans d’autres formats (publication, story, affiche).',
      },
      {
        nom: 'Gomme magique',
        offre: 'Pro',
        role: 'Efface un élément gênant d’une photo.',
      },
      {
        nom: 'Kit de marque',
        offre: 'Pro',
        role: 'Regroupe logos, couleurs et polices pour garder une charte cohérente.',
      },
    ],
    astuces: {
      rediger:
        'Utilisez l’écriture magique dans le design pour raccourcir un texte trop long pour le visuel.',
      corriger:
        'Sélectionnez le bloc de texte et demandez à l’écriture magique une version plus courte ou plus claire.',
      synthetiser:
        'Demandez à l’IA Canva de transformer un texte long en infographie de quelques blocs.',
      analyser:
        'Collez vos chiffres dans un graphique Canva pour les mettre en valeur dans une présentation.',
      veiller:
        'Canva ne fait pas de veille : préparez le contenu dans un autre outil, puis mettez-le en forme ici.',
      visuels:
        'Décrivez le design voulu (format, public, message) ; pour retoucher une image existante, utilisez Calques magiques.',
      organiser:
        'Partez d’un modèle de planning Canva et remplissez-le avec le contenu préparé par l’IA.',
      automatiser:
        'Préparez un modèle aux couleurs de la structure : chaque nouveau visuel part de ce modèle.',
    },
  },
];
