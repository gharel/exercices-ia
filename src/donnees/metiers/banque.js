/**
 * Banque et assurance : agence bancaire, courtage, assurance, crédit.
 * Toutes les personnes, entreprises, contrats et sommes sont fictifs.
 * Secret bancaire : aucune vraie donnée client ; l’IA ne prend aucune décision de crédit.
 */

export const vocabulaire = {
  structure: { g: 'f', s: 'agence bancaire', p: 'agences bancaires' },
  client: { g: 'm', s: 'client de l’agence', p: 'clients de l’agence' },
  partenaire: { g: 'm', s: 'courtier en assurance', p: 'courtiers en assurance' },
  documentCourant: {
    g: 'm',
    s: 'compte rendu d’entretien client',
    p: 'comptes rendus d’entretien client',
  },
  documentLong: {
    g: 'f',
    s: 'notice d’information de l’assurance emprunteur',
    p: 'notices d’information d’assurance emprunteur',
  },
  reunion: {
    g: 'f',
    s: 'réunion commerciale mensuelle de l’agence',
    p: 'réunions commerciales mensuelles de l’agence',
  },
  offre: {
    g: 'm',
    s: 'compte épargne destiné aux 18-25 ans',
    p: 'comptes épargne destinés aux 18-25 ans',
  },
  poste: {
    g: 'm',
    s: 'conseiller clientèle particuliers',
    p: 'conseillers clientèle particuliers',
  },
  evenement: {
    g: 'f',
    s: 'matinée d’information sur le crédit immobilier',
    p: 'matinées d’information sur le crédit immobilier',
  },
  visuel: { g: 'f', s: 'affiche de vitrine', p: 'affiches de vitrine' },
  domaine: 'la banque et l’assurance',
  motifReclamation: 'des frais bancaires prélevés sans explication',
  donnees: 'le tableau des demandes de crédit du semestre, par type de prêt',
  colonnes:
    'Mois;Type de prêt;Demandes reçues;Dossiers acceptés;Montant accordé (XPF);Délai moyen de réponse (jours)',
  indicateur: 'le délai moyen de réponse aux demandes de crédit',
  veille: 'les évolutions de la réglementation et des tarifs bancaires en Nouvelle-Calédonie',
  sourcesVeille:
    'les publications de l’IEOM, les communiqués du gouvernement de la Nouvelle-Calédonie et la presse économique calédonienne',
  jargon: 'le TAEG, l’assurance emprunteur et le différé d’amortissement',
  procedure: 'l’ouverture d’un compte pour un nouveau client',
  situationTendue: 'un client en colère après le refus de son prêt immobilier',
  donneesSensibles:
    'les numéros de compte, les revenus, les relevés bancaires, les pièces d’identité et les informations de santé des clients',
  corpus:
    'les conditions générales, les notices des produits et les procédures internes de l’agence',
  publicCible: 'les jeunes de 18 à 25 ans qui commencent à épargner, et leurs parents',
  etranger: 'un client australien qui vient de s’installer à Nouméa',
  themeFormation: 'les signes d’une tentative de fraude par hameçonnage',
  tacheRepetitive: 'les relances des clients dont le dossier de prêt est incomplet',
  planning: 'les rendez-vous clients de la semaine pour trois conseillers',
  comparaison: 'deux logiciels de prise de rendez-vous en ligne pour l’agence',
};

export const exercices = [
  {
    id: 'banq-expliquer-assurance-emprunteur',
    titre: 'Expliquer l’assurance emprunteur en langage clair',
    metier: 'banque',
    niveau: 'debutant',
    famille: 'corriger',
    duree: 15,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Vous êtes conseiller dans une agence bancaire de Nouméa. Un jeune couple qui achète un appartement à Dumbéa ne comprend pas la fiche de l’assurance emprunteur : quotité, franchise, délai de carence… Vous voulez leur remettre une explication simple, fidèle au texte, avant le rendez-vous de signature.',
    objectif:
      'Faire reformuler un texte technique pour un public non spécialiste, sans perdre ni déformer une condition importante.',
    etapes: [
      'Collez l’extrait de fiche du matériau avec le prompt de départ.',
      'Vérifiez que chaque chiffre (quotité, franchise, carence, âges de fin de garantie) est repris à l’identique.',
      'Vérifiez que toutes les exclusions sont présentes : une explication « simple » ne doit pas les faire disparaître.',
      'Demandez un exemple chiffré fictif pour illustrer la quotité, et vérifiez le calcul.',
      'Vérifiez la phrase finale qui renvoie au contrat et à votre conseil pour toute question.',
    ],
    prompt:
      'Tu es conseiller bancaire en Nouvelle-Calédonie. Réécris l’extrait de fiche produit ci-dessous pour un jeune couple qui achète son premier logement et ne connaît pas le vocabulaire de l’assurance. Une page au maximum, phrases courtes, un intertitre par notion, chaque terme technique expliqué avec des mots simples. Garde tous les chiffres et toutes les exclusions, sans rien ajouter. Termine par une phrase qui rappelle que seul le contrat fait foi.\n\n<fiche>\n[collez l’extrait ici]\n</fiche>',
    materiau: {
      titre: 'Extrait de la fiche « Assurance emprunteur » (fictive)',
      texte:
        'Garanties : décès, perte totale et irréversible d’autonomie (PTIA), incapacité temporaire totale de travail (ITT).\nQuotité assurée : choisie par chaque emprunteur, de 50 % à 100 % du capital emprunté ; la somme des quotités des co-emprunteurs doit être au moins égale à 100 %.\nITT : prise en charge des mensualités après une franchise de 90 jours d’arrêt continu, à hauteur de la quotité assurée.\nDélai de carence : 6 mois à compter de la date d’effet pour l’ITT due à une maladie ; aucun délai en cas d’accident.\nExclusions : affections dorsales et psychiques, sauf hospitalisation de plus de 10 jours ; pratique de sports aériens ; conséquences d’une maladie antérieure non déclarée.\nCessation des garanties : décès et PTIA au 80e anniversaire, ITT au 67e anniversaire ou au départ à la retraite.',
    },
    variantes: {
      simple:
        'Demander uniquement un petit lexique de six mots : quotité, franchise, carence, PTIA, ITT, exclusion.',
      poussee:
        'Demander aussi une version anglaise pour un client australien et une FAQ de cinq questions, puis faire relire le tout par le service assurance.',
    },
    astuces: {
      claude:
        'Demandez de citer, pour chaque explication, la ligne de la fiche d’où elle vient : la vérification sera rapide.',
      chatgpt:
        'Ouvrez l’explication dans le canevas et demandez de simplifier un seul paragraphe s’il reste obscur.',
    },
    vigilance:
      'Une explication simplifiée ne remplace pas le contrat : remettez-la après relecture, sans promettre une prise en charge que seul l’assureur décide. Ne collez jamais les informations de santé ni les données d’un client réel.',
    formateur: {
      resultat:
        'Une page claire, avec un intertitre par notion, qui garde la quotité de 50 à 100 %, la franchise de 90 jours, la carence de 6 mois pour maladie, les trois exclusions et les âges de fin de garantie, avec un exemple de quotité juste.',
      criteres: [
        'Tous les chiffres sont identiques à la fiche.',
        'Les trois exclusions sont présentes et compréhensibles.',
        'L’exemple de quotité est juste (par exemple 50 % chacun, ou 100 % chacun pour être mieux protégés).',
        'Le texte rappelle que seul le contrat fait foi.',
      ],
      pieges: [
        'Une simplification qui écrit « l’assurance rembourse le prêt en cas d’arrêt de travail », sans franchise ni carence.',
        'Les exclusions résumées en « quelques cas particuliers ».',
      ],
      competence: 'discernement',
      technique: 'format',
    },
    motsCles: ['assurance emprunteur', 'langage clair', 'reformulation', 'crédit immobilier'],
  },
  {
    id: 'banq-reclamation-frais',
    titre: 'Répondre à une réclamation sur des frais bancaires',
    metier: 'banque',
    niveau: 'debutant',
    famille: 'rediger',
    duree: 15,
    outils: ['copilot', 'claude', 'chatgpt', 'gemini'],
    outilConseille: 'copilot',
    situation:
      'Une cliente de l’agence de Koné écrit, très mécontente : 4 500 XPF de frais ont été prélevés en septembre et elle ne comprend pas pourquoi. Vous avez vérifié le dossier dans l’outil interne et noté les faits, sans aucune donnée d’identification. Vous devez lui répondre.',
    objectif:
      'Rédiger en une demande une réponse claire et respectueuse, fondée uniquement sur des faits vérifiés et sur le geste décidé par la direction.',
    etapes: [
      'Collez l’e-mail et la vérification du matériau avec le prompt de départ.',
      'Vérifiez les montants : trois commissions de 1 500 XPF, un remboursement de 1 500 XPF, pas davantage.',
      'Vérifiez que l’explication des frais est juste et compréhensible, sans culpabiliser la cliente.',
      'Demandez une version plus courte et choisissez celle que vous enverriez.',
    ],
    prompt:
      'Tu es conseiller dans une agence bancaire en Nouvelle-Calédonie. Rédige une réponse à la cliente ci-dessous. Explique simplement ce que sont les frais prélevés, sans jargon, en t’appuyant uniquement sur les faits vérifiés. Annonce le geste accordé par le directeur, ni plus ni moins. Propose un rendez-vous pour mettre en place une alerte de solde ou revoir son découvert autorisé. Ton respectueux et chaleureux, 180 mots au maximum, vouvoiement. Ne cite aucun texte de loi.\n\n<email_cliente>\n[collez l’e-mail]\n</email_cliente>\n\n<faits_verifies>\n[collez la vérification]\n</faits_verifies>',
    materiau: {
      titre: 'E-mail de la cliente et vérification du dossier (fictifs)',
      texte:
        'E-mail de la cliente :\nBonjour, je découvre 4 500 F de frais sur mon relevé de septembre, sans aucune explication. Je suis cliente depuis 12 ans et je trouve ça scandaleux. Je veux être remboursée, sinon je change de banque.\n\nVérification dans le dossier :\n- 3 prélèvements présentés les 5, 12 et 19 septembre alors que le compte dépassait le découvert autorisé\n- 3 commissions d’intervention de 1 500 XPF chacune, conformes à la brochure tarifaire en vigueur (« Commission d’intervention : 1 500 XPF par opération »)\n- Aucun incident de ce type dans les 12 mois précédents\n- Le directeur d’agence accorde, à titre exceptionnel, le remboursement d’une seule commission (1 500 XPF)',
    },
    variantes: {
      simple: 'Rédiger seulement le paragraphe qui explique les frais.',
      poussee:
        'Préparer aussi la fiche du rendez-vous : questions à poser sur le budget de la cliente et solutions possibles à présenter, sans rien décider à l’avance.',
    },
    astuces: {
      copilot:
        'Dans Outlook, « Coaching par Copilot » indique comment la cliente risque de ressentir votre réponse.',
      gemini:
        'Dans Gmail, « Aide-moi à écrire » propose un premier jet ; demandez ensuite un ton plus chaleureux.',
    },
    vigilance:
      'Secret bancaire : n’envoyez jamais à une IA le nom, le numéro de compte ou le relevé d’un client. Travaillez avec « la cliente » et les faits utiles, puis finalisez la réponse dans votre outil interne.',
    formateur: {
      resultat:
        'Une réponse claire qui explique les trois commissions de 1 500 XPF liées à des prélèvements présentés au-delà du découvert autorisé, annonce le remboursement exceptionnel d’une seule commission et propose un rendez-vous.',
      criteres: [
        'Les montants sont exacts et le geste correspond à ce que le directeur a accordé.',
        'L’explication des frais se comprend sans jargon.',
        'Aucune donnée personnelle réelle n’a été collée dans l’outil.',
        'Le ton reste respectueux, sans reproche.',
      ],
      pieges: [
        'Une réponse qui rembourse les 4 500 XPF pour « fidéliser » la cliente.',
        'Une explication qui cite un article de loi inventé.',
        'Le copier-coller du vrai relevé de la cliente dans l’outil.',
      ],
      competence: 'diligence',
      technique: 'contexte',
    },
    motsCles: ['réclamation', 'frais bancaires', 'e-mail', 'secret bancaire', 'relation client'],
  },
  {
    id: 'banq-preparer-rendez-vous',
    titre: 'Préparer un rendez-vous client à partir de notes d’appel',
    metier: 'banque',
    niveau: 'debutant',
    famille: 'organiser',
    duree: 20,
    outils: ['copilot', 'claude', 'chatgpt', 'gemini'],
    outilConseille: 'copilot',
    situation:
      'Demain à 9 h, vous recevez à l’agence de Païta un artisan électricien qui veut financer un utilitaire et transférer son compte professionnel. Vous avez quelques notes de son appel. Vous voulez arriver avec un déroulé clair, les bonnes questions et la liste des pièces à demander.',
    objectif:
      'Obtenir en une demande une fiche de préparation complète, en interdisant à l’IA d’inventer des conditions et en gardant le jugement du dossier pour la banque.',
    etapes: [
      'Collez les notes du matériau avec le prompt de départ.',
      'Vérifiez que le déroulé tient en 45 minutes et laisse au client le temps de parler.',
      'Comparez la liste des pièces avec la procédure de votre établissement, et corrigez-la.',
      'Relisez la réponse prévue à sa question sur un accord « tout de suite » : elle ne doit ni promettre ni décourager.',
      'Demandez une version imprimable d’une page, avec des cases pour vos notes.',
    ],
    prompt:
      'Tu es conseiller clientèle professionnels dans une agence bancaire à Païta. Prépare mon rendez-vous de 45 minutes avec le prospect décrit dans les notes ci-dessous. Donne : 1. un déroulé minuté ; 2. les questions à poser, regroupées par thème (activité, financement, compte, assurance) ; 3. la liste des pièces à lui demander, en signalant celles à vérifier dans nos procédures internes ; 4. une réponse honnête à sa question sur un accord « tout de suite ». N’invente aucun taux, aucune condition d’octroi ni aucun délai.\n\n<notes>\n[collez les notes ici]\n</notes>',
    materiau: {
      titre: 'Notes de l’appel (anonymisées)',
      texte:
        '- artisan électricien, travaille seul, inscrit au RIDET depuis 3 ans, chantiers surtout à Païta et Dumbéa\n- veut un utilitaire d’environ 3 500 000 XPF, apport possible de 500 000\n- compte pro dans une autre banque, pas content (frais, conseiller injoignable)\n- chiffre d’affaires « autour de 9 millions par an » d’après lui\n- veut aussi assurer son outillage\n- 45 min maximum, chantier à 10 h à Tontouta\n- a demandé si le prêt pouvait être accepté « tout de suite »',
    },
    variantes: {
      simple: 'Demander uniquement les dix questions à poser.',
      poussee:
        'Simuler le rendez-vous : l’IA joue l’artisan, pressé et méfiant ; vous menez l’entretien, puis vous demandez un retour sur vos questions.',
    },
    astuces: {
      copilot:
        'Transformez la préparation en Copilot Page pour la compléter juste après le rendez-vous.',
      claude: 'Demandez la fiche dans un artefact imprimable, avec des cases pour vos notes.',
    },
    vigilance:
      'Ne mettez dans le prompt ni le nom, ni le numéro RIDET, ni aucun élément qui identifie le prospect. La décision de crédit appartient à la banque, selon ses procédures : l’IA prépare l’entretien, elle ne juge pas le dossier.',
    formateur: {
      resultat:
        'Une fiche d’une page : déroulé de 45 minutes, questions par thème (dont les charges et les comptes, pas seulement le chiffre d’affaires annoncé), pièces à vérifier dans la procédure, et une réponse honnête : l’étude du dossier prend du temps et la décision dépend de l’analyse complète.',
      criteres: [
        'Le déroulé tient en 45 minutes.',
        'Les questions portent aussi sur les charges et les comptes de l’entreprise.',
        'Aucun taux ni délai d’accord n’est inventé.',
        'La liste des pièces est confrontée à la procédure interne.',
      ],
      pieges: [
        'Une fiche qui affirme que le prêt sera accordé au vu du chiffre d’affaires annoncé.',
        'Recopier une liste de pièces « type » sans la vérifier dans la procédure de l’établissement.',
      ],
      competence: 'description',
      technique: 'contexte',
    },
    motsCles: ['rendez-vous', 'préparation', 'professionnel', 'crédit', 'questions'],
  },
  {
    id: 'banq-affiche-hameconnage',
    titre: 'Créer une affiche de prévention contre le hameçonnage',
    metier: 'banque',
    niveau: 'debutant',
    famille: 'visuels',
    duree: 20,
    outils: ['canva', 'chatgpt'],
    outilConseille: 'canva',
    situation:
      'Plusieurs clients de l’agence du Mont-Dore ont reçu des SMS imitant leur banque, avec un lien vers un faux site. Le directeur veut une affiche pour la salle d’attente et un visuel pour l’écran de l’agence : trois réflexes simples, lisibles en dix secondes.',
    objectif:
      'Créer un visuel de prévention dans Canva à partir de messages validés, en vérifiant qu’aucun élément trompeur ou inventé ne s’y glisse.',
    etapes: [
      'Dans Canva, ouvrez l’IA Canva et collez le prompt de départ avec les messages du matériau.',
      'Choisissez la proposition la plus lisible et vérifiez que les trois réflexes sont repris mot pour mot.',
      'Vérifiez l’illustration : aucun logo réel, aucun numéro de téléphone ni lien qui pourrait exister.',
      'Si le titre dépasse huit mots, demandez cinq titres plus courts à l’Écriture magique ou à ChatGPT, puis déclinez le visuel pour l’écran de l’agence.',
      'Faites valider l’affiche par le service conformité avant impression.',
    ],
    prompt:
      'Crée une affiche A3 portrait pour la salle d’attente d’une agence bancaire en Nouvelle-Calédonie, sur la prévention du hameçonnage par SMS. Titre court et fort, trois réflexes numérotés repris exactement des messages ci-dessous, une illustration simple de téléphone avec un faux SMS barré, ton rassurant et non alarmiste, couleurs [couleurs de la banque]. Le texte doit se lire en dix secondes.\n\n<messages>\n[collez les messages ici]\n</messages>',
    materiau: {
      titre: 'Messages validés par le service conformité',
      texte:
        '1. La banque ne vous demandera jamais vos codes, ni par SMS, ni par e-mail, ni par téléphone.\n2. Ne cliquez pas sur un lien reçu par SMS : connectez-vous toujours par l’application ou en tapant vous-même l’adresse.\n3. Un doute ? Appelez votre conseiller au numéro habituel ou passez à l’agence.\n\nExemple de faux SMS reçu : « Votre carte est suspendue. Validez votre identité sous 24 h : [lien] »',
    },
    variantes: {
      simple: 'Partir d’un modèle d’affiche Canva et remplacer seulement les textes.',
      poussee:
        'Créer une série de trois visuels pour les réseaux sociaux (un réflexe par visuel) et une version anglaise, validées par la conformité.',
    },
    astuces: {
      canva:
        'Le Kit de marque (offre Pro, payante) applique les couleurs et le logo de la banque ; en gratuit, saisissez les codes couleur à la main.',
      chatgpt:
        'Demandez cinq titres de ton différent (rassurant, ferme, complice) avant de choisir.',
    },
    vigilance:
      'N’utilisez ni le logo ni le nom d’une autre banque, et n’affichez aucun lien ou numéro inventé : un faux numéro sur une affiche de prévention serait un comble. Le message doit être validé par la conformité.',
    formateur: {
      resultat:
        'Une affiche lisible en dix secondes, avec les trois réflexes repris mot pour mot, un exemple de faux SMS clairement barré et aucun élément réel détourné.',
      criteres: [
        'Les trois réflexes sont identiques aux messages validés.',
        'Aucun numéro, lien ou logo inventé n’apparaît.',
        'Le ton rassure au lieu de faire peur.',
      ],
      pieges: [
        'Une illustration générée qui affiche un lien plausible et lisible.',
        'Un titre alarmiste qui inquiète les clients les plus âgés.',
      ],
      competence: 'diligence',
      technique: 'format',
    },
    motsCles: ['fraude', 'hameçonnage', 'affiche', 'Canva', 'prévention'],
  },
  {
    id: 'banq-budget-familial',
    titre: 'Analyser un budget familial pour préparer un entretien',
    metier: 'banque',
    niveau: 'intermediaire',
    famille: 'analyser',
    duree: 30,
    outils: ['chatgpt', 'claude', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Un couple fictif de Dumbéa demande un rendez-vous parce qu’il « n’arrive plus à finir le mois ». Il a rempli le tableau de budget proposé par l’agence. Avant l’entretien, vous voulez une vue claire des postes, des écarts et des pistes à discuter avec lui, sans rien décider à sa place.',
    objectif:
      'Faire calculer et commenter un tableau, vérifier les totaux, et cantonner l’IA à la préparation de l’entretien, sans conseil de produit.',
    etapes: [
      'Collez le tableau du matériau avec le prompt de départ.',
      'Vérifiez à la main le solde d’un mois, par exemple septembre.',
      'Demandez un graphique de l’évolution des postes qui augmentent.',
      'Relisez les pistes : supprimez toute recommandation de produit et toute décision qui appartient au couple ou à la banque.',
      'Demandez une synthèse d’une demi-page à partager avec le couple, en langage simple et sans jugement.',
    ],
    prompt:
      'Tu es conseiller bancaire et tu prépares un entretien d’accompagnement budgétaire avec un couple. Voici son budget sur trois mois (CSV, séparateur point-virgule, données fictives). 1. Calcule pour chaque mois le total des revenus, le total des dépenses et le solde. 2. Calcule la part de chaque poste dans les revenus et repère les postes qui augmentent. 3. Propose cinq questions à poser au couple et trois pistes à discuter avec lui, sans décider à sa place et sans proposer de produit bancaire. Montre tes calculs.\n\n<budget>\n[collez le tableau ici]\n</budget>',
    materiau: {
      titre: 'Budget du couple, juillet à septembre (fictif)',
      texte:
        'Poste;Juillet (XPF);Août (XPF);Septembre (XPF)\nSalaires nets;412000;412000;412000\nAllocations familiales;28000;28000;28000\nLoyer;145000;145000;145000\nÉlectricité et eau;22000;24500;21000\nAlimentation;118000;126000;131000\nCarburant;38000;41000;44000\nCrédit voiture;52000;52000;52000\nCrédit renouvelable;25000;25000;25000\nTéléphone et internet;14500;14500;14500\nAbonnements (télévision, musique, sport);11800;11800;15800\nCantine et garde d’enfants;32000;0;34000\nLoisirs et divers;30000;45000;38000',
    },
    variantes: {
      simple: 'Demander uniquement les totaux et le solde de chaque mois.',
      poussee:
        'Demander trois scénarios chiffrés (baisse des loisirs, du carburant, des abonnements) et leur effet sur le solde, présentés comme des pistes à discuter avec le couple.',
    },
    astuces: {
      chatgpt:
        'Déposez le tableau : l’analyse de données calcule les totaux et trace le graphique ; vérifiez un total à la main.',
      gemini:
        'Dans Google Sheets, « Demander à Gemini » propose les formules de total et de part des revenus.',
      copilot:
        'Collez le tableau dans Excel, mettez-le sous forme de tableau, puis demandez à Copilot les postes en hausse.',
    },
    vigilance:
      'Ces données sont fictives : avec un vrai client, aucune donnée bancaire ne sort des outils autorisés par l’établissement (secret bancaire). L’IA prépare l’entretien ; elle ne décide ni d’un crédit, ni d’un rachat de crédits, ni d’un découvert.',
    formateur: {
      resultat:
        'Un tableau qui montre 440 000 XPF de revenus par mois et un déficit de 48 300, 44 800 puis 80 300 XPF (173 400 XPF sur trois mois), un loyer à 33 % des revenus, des crédits à 17,5 %, des postes en hausse (alimentation, carburant, abonnements) et une question sur la façon dont le déficit est couvert.',
      criteres: [
        'Les soldes mensuels sont justes (septembre : 440 000 – 520 300 = – 80 300 XPF).',
        'Les postes en hausse sont repérés avec leur évolution.',
        'Les pistes ne recommandent aucun produit et ne prennent aucune décision.',
        'Une question porte sur le financement du déficit (découvert, crédit renouvelable).',
      ],
      pieges: [
        'Une IA qui conseille un rachat de crédits ou un nouveau prêt.',
        'Un taux d’endettement comparé à un « seuil légal » cité de mémoire.',
        'Un total faux, non vérifié, qui fausse tout l’entretien.',
      ],
      competence: 'discernement',
      technique: 'decomposer',
    },
    motsCles: ['budget', 'accompagnement', 'CSV', 'entretien', 'fragilité financière'],
  },
  {
    id: 'banq-comparatif-assurance-habitation',
    titre: 'Comparer deux contrats d’assurance habitation',
    metier: 'banque',
    niveau: 'intermediaire',
    famille: 'synthetiser',
    duree: 30,
    outils: ['claude', 'chatgpt', 'gemini', 'notebook'],
    outilConseille: 'claude',
    situation:
      'Un client de l’agence, locataire d’une maison au Mont-Dore, hésite entre deux contrats d’assurance habitation (fictifs) et vous demande « lequel est le mieux ». Vous voulez un tableau comparatif fidèle aux deux documents, pour l’aider à choisir lui-même selon ses besoins.',
    objectif:
      'Faire comparer deux documents de façon fidèle, distinguer « non » de « non précisé », vérifier des calculs de franchise et laisser le choix au client.',
    etapes: [
      'Collez les deux contrats du matériau avec le prompt de départ.',
      'Vérifiez chaque case du tableau avec le document d’origine, en particulier les franchises et les plafonds.',
      'Vérifiez les deux exemples de franchise : le minimum de 50 000 XPF du contrat A doit être appliqué.',
      'Repérez les cases « non précisé » et notez ce qu’il faut vérifier dans les conditions générales complètes.',
      'Demandez une version du tableau à remettre au client, avec ses questions à se poser et la mention que seuls les contrats font foi.',
    ],
    prompt:
      'Tu es conseiller en assurance dans une agence bancaire en Nouvelle-Calédonie. Compare les deux contrats ci-dessous dans un tableau : une ligne par garantie, une colonne par contrat, avec cotisation, franchises, plafonds et exclusions. Écris « non précisé » quand un document ne dit rien, au lieu de supposer. Ajoute la cotisation annuelle de chaque contrat. Illustre ensuite la franchise « événements climatiques » sur deux exemples de dommages : 300 000 et 1 000 000 XPF. Ne dis pas quel contrat est le meilleur : liste plutôt les questions que le client doit se poser selon sa situation.\n\n<contrat_A>\n[collez le contrat A]\n</contrat_A>\n\n<contrat_B>\n[collez le contrat B]\n</contrat_B>',
    materiau: {
      titre: 'Deux contrats d’assurance habitation (fictifs)',
      texte:
        'Contrat A – Formule Essentielle\nCotisation : 6 900 XPF par mois\nIncendie, dégâts des eaux : oui, franchise 15 000 XPF\nÉvénements climatiques (cyclone, vent violent) : oui, franchise de 10 % des dommages, minimum 50 000 XPF\nVol : oui en cas d’effraction, plafond 800 000 XPF, bijoux exclus\nResponsabilité civile vie privée : oui\nBris de glace : non\nMatériel informatique : plafond 150 000 XPF\nAssistance relogement : 5 nuits\n\nContrat B – Formule Confort\nCotisation : 8 400 XPF par mois\nIncendie, dégâts des eaux : oui, franchise 20 000 XPF\nÉvénements climatiques (cyclone, vent violent) : oui, franchise fixe de 30 000 XPF\nVol : oui en cas d’effraction, plafond 1 500 000 XPF, bijoux plafonnés à 200 000 XPF\nResponsabilité civile vie privée : oui\nBris de glace : oui, franchise 10 000 XPF\nMatériel informatique : plafond 400 000 XPF\nAssistance relogement : 10 nuits\nExclusion : dépendances non closes (carport, faré ouvert)',
    },
    variantes: {
      simple: 'Comparer seulement la cotisation, les franchises et le vol.',
      poussee:
        'Ajouter le profil du client (maison avec carport, deux ordinateurs, bijoux de famille) et demander quelles lignes deviennent décisives, sans recommander de contrat.',
    },
    astuces: {
      notebook:
        'Chargez les deux notices complètes comme sources : chaque réponse renverra au passage exact du contrat.',
      claude:
        'Demandez le tableau dans un artefact, puis la citation de la ligne du contrat pour chaque case.',
    },
    vigilance:
      'Seuls les contrats et leurs conditions générales font foi : le tableau est une aide, à faire relire. Ne recommandez pas un contrat à la place du client, et respectez les règles de votre établissement sur le conseil en assurance.',
    formateur: {
      resultat:
        'Un tableau fidèle : A à 82 800 XPF par an, B à 100 800 XPF (18 000 XPF d’écart) ; franchise climatique de 50 000 XPF pour A contre 30 000 XPF pour B sur 300 000 XPF de dommages, et de 100 000 contre 30 000 XPF sur 1 000 000 XPF ; l’exclusion des dépendances non closes du contrat B est signalée, et le client reçoit ses questions à se poser.',
      criteres: [
        'Chaque case correspond au document, sans supposition.',
        'Les franchises calculées sont justes, minimum compris.',
        'L’exclusion des dépendances non closes est mise en évidence.',
        'Le document ne désigne pas de « meilleur » contrat et rappelle que seuls les contrats font foi.',
      ],
      pieges: [
        'Un tableau qui indique « non » au lieu de « non précisé » pour les dépendances du contrat A.',
        'Une franchise du contrat A calculée à 30 000 XPF en oubliant le minimum de 50 000 XPF.',
        'Une conclusion de l’IA qui choisit à la place du client.',
      ],
      competence: 'discernement',
      technique: 'structurer',
    },
    motsCles: ['assurance habitation', 'comparatif', 'franchise', 'contrat', 'conseil'],
  },
  {
    id: 'banq-lettre-refus-credit',
    titre: 'Rédiger une lettre de refus de crédit bienveillante',
    metier: 'banque',
    niveau: 'intermediaire',
    famille: 'rediger',
    duree: 30,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Le comité de crédit a refusé la demande de prêt personnel d’une cliente fictive qui voulait refaire sa toiture. La décision est prise ; vous devez rédiger le courrier. Il doit être clair et respectueux, sans détailler l’analyse interne, et proposer un rendez-vous pour étudier d’autres pistes.',
    objectif:
      'Comparer plusieurs versions d’un courrier délicat, les combiner et les faire relire du point de vue du destinataire, sur une décision prise par des humains.',
    etapes: [
      'Collez les éléments du matériau avec le prompt de départ.',
      'Comparez les deux versions : clarté de l’annonce, ton, respect des consignes de la direction.',
      'Repérez toute phrase qui laisse croire que la décision pourrait changer, ou qui révèle un élément d’analyse interne.',
      'Combinez la meilleure ouverture et la meilleure conclusion, puis demandez à l’IA de relire le résultat comme le ferait la cliente.',
      'Remplacez [voies de réclamation selon notre procédure] par le texte officiel de votre établissement, puis soumettez le courrier à votre responsable.',
    ],
    prompt:
      'Tu es conseiller dans une agence bancaire en Nouvelle-Calédonie. La décision de refus ci-dessous a été prise par le comité de crédit : tu ne la remets pas en cause et tu ne la justifies pas par des chiffres. Rédige le courrier à la cliente : annonce claire de la décision dès le premier paragraphe, explication générale et respectueuse, proposition d’un rendez-vous sans engagement pour étudier d’autres pistes, rappel des voies de réclamation avec la formule [voies de réclamation selon notre procédure]. 200 mots au maximum, vouvoiement. Propose deux versions : une plus formelle, une plus chaleureuse.\n\n<decision>\n[collez les éléments ici]\n</decision>',
    materiau: {
      titre: 'Éléments de la décision (fictifs)',
      texte:
        '- Demande : prêt personnel de 1 800 000 XPF sur 48 mois pour des travaux de toiture\n- Décision du comité du [date] : refus\n- Motif interne : charges de remboursement trop élevées par rapport aux revenus actuels\n- Ce que l’agence peut proposer : un rendez-vous pour réexaminer le projet (montant plus faible, autre durée, apport, travaux en plusieurs tranches), sans engagement\n- Consignes de la direction : aucun chiffre interne (ratio, score), aucune promesse, mention des voies de réclamation selon la procédure de l’établissement',
    },
    variantes: {
      simple: 'Rédiger seulement la version formelle et la relire avec la liste des consignes.',
      poussee:
        'Préparer aussi le déroulé du rendez-vous de réexamen, puis simuler l’échange avec l’IA dans le rôle de la cliente déçue.',
    },
    astuces: {
      claude:
        'Demandez à Claude de relire la lettre en se mettant à la place de la cliente et de signaler les phrases blessantes ou ambiguës.',
      copilot:
        'Dans Word, Copilot peut réécrire un seul paragraphe dans un ton plus chaleureux sans toucher au reste.',
    },
    vigilance:
      'L’IA ne décide jamais d’un crédit et ne réécrit pas la décision : elle met en forme un courrier sur une décision déjà prise par le comité. Aucune donnée réelle de la cliente dans le prompt. Le courrier est validé par un responsable avant envoi.',
    formateur: {
      resultat:
        'Un courrier de 200 mots au plus, qui annonce le refus dès le début, sans chiffre interne, propose un rendez-vous sans engagement et renvoie aux voies de réclamation officielles, validé avant envoi.',
      criteres: [
        'La décision est annoncée clairement dans le premier paragraphe.',
        'Aucun ratio, score ou élément d’analyse interne n’apparaît.',
        'Le rendez-vous est proposé sans promesse d’accord.',
        'Les voies de réclamation viennent de la procédure officielle, pas de l’IA.',
      ],
      pieges: [
        'Une formule comme « nous ne doutons pas qu’un nouveau dossier aboutira », qui crée une fausse attente.',
        'Une explication chiffrée du refus reprise par l’IA (« vos charges dépassent tel pourcentage »).',
        'Des voies de réclamation ou un médiateur inventés.',
      ],
      competence: 'delegation',
      technique: 'options',
    },
    motsCles: ['refus de crédit', 'courrier', 'ton', 'décision', 'relation client'],
  },
  {
    id: 'banq-quiz-fraude',
    titre: 'Préparer un quiz interne sur la fraude par hameçonnage',
    metier: 'banque',
    niveau: 'intermediaire',
    famille: 'organiser',
    duree: 30,
    outils: ['notebook', 'claude', 'chatgpt', 'copilot'],
    outilConseille: 'notebook',
    situation:
      'Le service conformité organise une sensibilisation de 30 minutes pour les conseillers des agences de Nouméa, Koné et Bourail : faux SMS, faux conseillers au téléphone, faux changements de coordonnées bancaires. Vous êtes chargé du quiz de dix questions, à partir de la note interne de la conformité.',
    objectif:
      'Produire un quiz fidèle à un document source, le tester sur un collègue et l’améliorer à partir des questions ambiguës.',
    etapes: [
      'Chargez la note du matériau dans votre outil (ou collez-la) avec le prompt de départ.',
      'Vérifiez chaque bonne réponse avec la note, et que les mauvaises réponses sont plausibles mais clairement fausses.',
      'Regardez où tombent les bonnes réponses : si elles sont presque toujours en B, demandez de les répartir.',
      'Faites passer le quiz à un collègue, notez les questions ambiguës et demandez à l’IA de les reformuler.',
      'Demandez la version finale en deux documents : le questionnaire sans réponses et le corrigé expliqué.',
    ],
    prompt:
      'Tu es formateur conformité dans une banque en Nouvelle-Calédonie. À partir de la note ci-dessous uniquement, rédige un quiz de dix questions pour des conseillers en agence : six questions à choix multiples (quatre réponses, une seule juste) et quatre mises en situation courtes (« Un client vous appelle et dit… Que faites-vous ? »). Pour chaque question, donne la bonne réponse et une explication d’une ou deux phrases qui cite le point de la note. Varie la place de la bonne réponse. Aucune question sur un chiffre à retenir par cœur.\n\n<note>\n[collez la note ici]\n</note>',
    materiau: {
      titre: 'Note conformité : fraudes signalées au dernier trimestre (fictive)',
      texte:
        '1. Faux SMS « carte suspendue » renvoyant vers un faux site : 34 signalements. Les clients y saisissent leurs identifiants et le code reçu par SMS.\n2. Faux conseiller au téléphone : l’escroc connaît le nom et l’agence du client, annonce une « opération suspecte » et demande de valider une opération pour « l’annuler ». 12 signalements, 4 pertes.\n3. Faux fournisseur : un client professionnel reçoit un e-mail annonçant le changement de coordonnées bancaires d’un fournisseur habituel. 3 signalements, dont un virement de 2 400 000 XPF.\n4. Réflexes à transmettre aux clients : la banque ne demande jamais de code ni de validation d’opération par téléphone ; raccrocher et rappeler au numéro habituel ; vérifier tout changement de coordonnées bancaires par un appel au numéro connu du fournisseur ; signaler au service conformité.\n5. En agence : ne jamais communiquer d’information sur un compte à un appelant non authentifié ; signaler toute demande inhabituelle de virement urgent, en particulier d’un client âgé.',
    },
    variantes: {
      simple: 'Rédiger seulement cinq questions à choix multiples.',
      poussee:
        'Transformer le quiz en jeu de rôle : l’IA joue un faux conseiller au téléphone, l’apprenant repère les signaux et réagit, puis l’IA commente ses réponses.',
    },
    astuces: {
      notebook:
        'Chargez la note comme source et utilisez « Fiches et quiz » pour une première série ; ajoutez ensuite les mises en situation.',
      claude:
        'Demandez le questionnaire et le corrigé en deux fichiers Word avec la création de fichiers.',
      copilot:
        'Avec la licence, Copilot dans Word met en forme le questionnaire à partir de la réponse collée.',
    },
    vigilance:
      'N’utilisez jamais un vrai cas client, même approximativement anonymisé : les détails d’une fraude réelle peuvent identifier la victime. Faites valider le quiz par la conformité avant la session.',
    formateur: {
      resultat:
        'Un quiz de dix questions fidèle à la note : six questions à choix multiples aux bonnes réponses bien réparties, quatre mises en situation (faux conseiller, faux SMS, changement de coordonnées d’un fournisseur, client âgé pressé de faire un virement), chacune expliquée par un renvoi à la note.',
      criteres: [
        'Chaque bonne réponse est justifiée par un point de la note.',
        'Les bonnes réponses sont réparties entre A, B, C et D.',
        'Les mises en situation couvrent les trois types de fraude et le réflexe d’agence.',
        'Le quiz a été testé par un collègue et corrigé.',
      ],
      pieges: [
        'Une « bonne » réponse qui ajoute une règle absente de la note.',
        'Des mauvaises réponses absurdes qui rendent le quiz trop facile.',
        'Une question sur le nombre exact de signalements, sans intérêt pour la pratique.',
      ],
      competence: 'discernement',
      technique: 'sources',
    },
    motsCles: ['fraude', 'hameçonnage', 'quiz', 'conformité', 'sensibilisation'],
  },
  {
    id: 'banq-checklist-kyc',
    titre: 'Transformer une procédure de connaissance client en check-list à valider',
    metier: 'banque',
    niveau: 'avance',
    famille: 'organiser',
    duree: 45,
    outils: ['claude', 'chatgpt', 'copilot'],
    outilConseille: 'claude',
    situation:
      'Votre agence ouvre beaucoup de comptes pour de nouveaux arrivants en Nouvelle-Calédonie. La procédure interne de connaissance client (KYC) fait douze pages et les conseillers oublient des étapes. Le responsable conformité vous demande un projet de check-list d’ouverture de compte, qu’il validera avant toute diffusion.',
    objectif:
      'Enchaîner extraction, mise en forme et contrôle croisé sur un document de conformité, sans laisser l’IA ajouter d’exigence, et préparer la validation humaine.',
    etapes: [
      'Collez l’extrait de procédure avec le prompt de départ, puis vérifiez la liste d’actions section par section.',
      'Demandez ensuite la check-list d’une page : case à cocher, pièce ou contrôle, conduite à tenir en cas de problème.',
      'Demandez à l’IA de comparer la check-list à la procédure et de lister toute différence, tout ajout et tout oubli.',
      'Vérifiez vous-même les points sensibles : personnes politiquement exposées, alerte sur les listes de sanctions, validation par un second conseiller.',
      'Laissez les renvois à d’autres documents (seuil de la note de service) en « [à compléter par la conformité] ».',
      'Rédigez le message d’envoi au responsable conformité, avec la liste des points à trancher.',
    ],
    prompt:
      'Tu es assistant du service conformité d’une banque. Je prépare un projet de check-list d’ouverture de compte à partir de notre procédure interne. Ce projet sera validé par le responsable conformité : ne le présente jamais comme définitif et n’ajoute aucune exigence réglementaire de ton côté.\nÉtape 1 seulement : extrais de la procédure ci-dessous toutes les actions, dans l’ordre, sous forme de liste numérotée. Pour chaque action, indique le numéro de section, la pièce ou le contrôle attendu, et ce qu’il faut faire en cas de problème. Signale les points qui renvoient à un autre document (note de service, outil interne).\n\n<procedure>\n[collez la procédure ici]\n</procedure>',
    materiau: {
      titre: 'Extrait de la procédure KYC, ouverture de compte d’un particulier (fictive)',
      texte:
        '3.1 Identification : recueillir une pièce d’identité officielle en cours de validité ; en faire une copie lisible recto verso ; vérifier la concordance de la photo avec la personne présente.\n3.2 Domicile : recueillir un justificatif de domicile de moins de trois mois. Pour une personne hébergée : attestation d’hébergement, pièce d’identité et justificatif de domicile de l’hébergeant.\n3.3 Situation professionnelle : recueillir un justificatif de revenus ou de situation (bulletin de salaire, contrat de travail, attestation d’employeur, avis de pension).\n3.4 Origine des fonds : pour tout dépôt initial supérieur au seuil fixé par la note de service en vigueur, recueillir un justificatif de l’origine des fonds.\n3.5 Personnes politiquement exposées : poser la question au client et consulter l’outil interne de filtrage ; en cas de réponse positive, transmettre au service conformité avant toute ouverture.\n3.6 Listes de sanctions : lancer le contrôle automatique dans le logiciel ; en cas d’alerte, ne pas ouvrir le compte et transmettre au service conformité, sans en informer le client.\n3.7 Profil : renseigner dans le logiciel l’objet de la relation, les opérations prévues et le profil de risque.\n3.8 Validation : le dossier est validé par un second conseiller (principe des quatre yeux) avant l’activation du compte.',
    },
    variantes: {
      simple:
        'S’arrêter à la liste d’actions de l’étape 1 et la comparer avec celle d’un collègue.',
      poussee:
        'Appliquer la même méthode à l’ouverture d’un compte professionnel à partir d’un second extrait de procédure, puis comparer les deux check-lists.',
    },
    astuces: {
      claude:
        'Créez une compétence « check-list depuis une procédure » qui impose les étapes, les numéros de section et la mention « projet à valider ».',
      chatgpt:
        'Ouvrez la check-list dans le canevas pour corriger une ligne sans régénérer l’ensemble.',
      copilot: 'Transformez la check-list en Copilot Page pour que la conformité l’annote.',
    },
    vigilance:
      'L’IA aide à mettre en forme, jamais à valider une procédure de conformité. Elle ne doit ajouter aucune obligation de mémoire ni fixer le seuil de la note de service. Aucun document client dans l’outil : seulement l’extrait de procédure, sans donnée personnelle.',
    formateur: {
      resultat:
        'Une check-list d’une page qui suit les sections 3.1 à 3.8 dans l’ordre, garde les conduites à tenir (transmission à la conformité, client non informé en cas d’alerte, validation à quatre yeux), laisse le seuil « à compléter par la conformité » et part avec une note qui la présente comme un projet.',
      criteres: [
        'Les huit sections sont couvertes, dans l’ordre, sans exigence ajoutée.',
        'Les conduites à tenir en cas d’alerte sont exactes, y compris le fait de ne pas informer le client.',
        'Le seuil de dépôt n’est pas inventé.',
        'La note d’envoi demande une validation et liste les points à trancher.',
      ],
      pieges: [
        'Un seuil « réglementaire » d’origine des fonds inventé par l’IA.',
        'Une check-list qui fusionne le contrôle des listes de sanctions et la question sur les personnes politiquement exposées.',
        'Une version « simplifiée » qui supprime la validation par un second conseiller.',
      ],
      competence: 'diligence',
      technique: 'decomposer',
    },
    motsCles: ['KYC', 'conformité', 'ouverture de compte', 'check-list', 'procédure'],
  },
  {
    id: 'banq-synthese-reglementaire',
    titre: 'Rédiger une synthèse réglementaire sourcée et la tenir à jour',
    metier: 'banque',
    niveau: 'avance',
    famille: 'veiller',
    duree: 45,
    outils: ['gemini', 'chatgpt', 'claude', 'notebook'],
    outilConseille: 'gemini',
    situation:
      'La direction de votre établissement veut une note de deux pages sur un sujet réglementaire qui touche les agences, par exemple l’encadrement des tarifs bancaires ou la lutte contre le blanchiment, en distinguant ce qui s’applique en Nouvelle-Calédonie. Vous la préparez avec une recherche approfondie, puis vous prévoyez sa mise à jour.',
    objectif:
      'Mener une recherche sourcée, contrôler chaque source et l’applicabilité locale, recouper avec un corpus de textes officiels, puis programmer la mise à jour.',
    etapes: [
      'Choisissez le sujet avec votre responsable et complétez le prompt de départ.',
      'Lancez la recherche approfondie, puis ouvrez chaque source citée : existe-t-elle, est-elle à jour, dit-elle vraiment ce que la synthèse affirme ?',
      'Contrôlez particulièrement l’applicabilité en Nouvelle-Calédonie : une source métropolitaine ne suffit pas à conclure.',
      'Chargez les textes officiels vérifiés dans Gemini Notebook et posez trois questions de contrôle : les réponses citées doivent confirmer la synthèse.',
      'Rédigez la note de deux pages en séparant « vérifié » et « à confirmer par le service juridique ».',
      'Programmez une recherche de mise à jour chaque mois sur le même sujet.',
    ],
    prompt:
      'Tu es juriste en conformité bancaire. Fais une recherche approfondie sur [sujet, par exemple l’encadrement des tarifs bancaires] et sur son application en Nouvelle-Calédonie. Je veux : 1. les textes et décisions applicables, avec leur date et la source officielle ; 2. ce qui s’applique en Nouvelle-Calédonie et ce qui ne s’applique qu’en France métropolitaine, en expliquant pourquoi, ou en disant que tu n’es pas sûr ; 3. les évolutions des douze derniers mois ; 4. les conséquences concrètes pour une agence ; 5. les points que tu n’as pas pu vérifier. Cite une source pour chaque affirmation et préfère les sources officielles (Journal officiel de la Nouvelle-Calédonie, IEOM, Légifrance, gouvernement de la Nouvelle-Calédonie). Si tu ne trouves pas, dis-le.',
    variantes: {
      simple:
        'Limiter la recherche à un seul texte récent et vérifier ses trois sources principales.',
      poussee:
        'Créer un carnet Gemini Notebook partagé avec le service conformité, enrichi chaque mois des nouvelles sources vérifiées.',
    },
    astuces: {
      gemini:
        'Deep Research rend un rapport sourcé exportable dans Google Docs ; « Programmer des actions » (selon l’offre) relance la recherche chaque mois.',
      notebook:
        'Dans le carnet, chaque réponse renvoie au passage exact du texte officiel : c’est le meilleur contrôle de la synthèse.',
      chatgpt:
        'La recherche approfondie est limitée en gratuit ; les tâches planifiées, payantes, peuvent relancer la mise à jour.',
      claude:
        'La Recherche (payante) rend un rapport sourcé ; en gratuit, la recherche web cite aussi les pages utilisées.',
    },
    vigilance:
      'Le droit applicable en Nouvelle-Calédonie diffère souvent du droit métropolitain, et une IA les confond facilement. Aucune note réglementaire ne circule sans validation du service juridique ou conformité. Ne joignez aucun document interne confidentiel à une recherche web.',
    formateur: {
      resultat:
        'Une note de deux pages dont chaque affirmation est sourcée et vérifiée, qui sépare ce qui s’applique en Nouvelle-Calédonie, ce qui ne s’applique qu’en métropole et ce qui reste à confirmer, avec une mise à jour programmée.',
      criteres: [
        'Chaque affirmation renvoie à une source ouverte et vérifiée.',
        'L’applicabilité en Nouvelle-Calédonie est traitée explicitement, doutes compris.',
        'Les réponses du carnet confirment ou corrigent la synthèse.',
        'La mise à jour est programmée et la validation juridique prévue.',
      ],
      pieges: [
        'Présenter un texte métropolitain comme applicable sur le territoire.',
        'Une source citée qui ne contient pas l’information annoncée.',
        'Une synthèse sans date, impossible à mettre à jour.',
      ],
      competence: 'diligence',
      technique: 'sources',
    },
    motsCles: ['réglementation', 'veille', 'sources', 'conformité', 'Nouvelle-Calédonie'],
  },
  {
    id: 'banq-simulation-pret',
    titre: 'Vérifier une simulation de prêt et l’expliquer au client',
    metier: 'banque',
    niveau: 'avance',
    famille: 'analyser',
    duree: 45,
    outils: ['chatgpt', 'claude', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Un client fictif envisage un prêt immobilier de 20 000 000 XPF au taux nominal fictif de 3,9 % pour acheter un appartement à Nouméa. Il hésite entre 15, 20 et 25 ans et veut comprendre l’écart de coût. Vous voulez un tableau de comparaison vérifié dans un tableur, puis une explication simple, sans recommandation.',
    objectif:
      'Enchaîner calcul, contrôle au tableur et explication, en faisant retrouver ses erreurs à l’IA et en la tenant à l’écart de toute décision.',
    etapes: [
      'Collez les hypothèses du matériau avec le prompt de départ et demandez uniquement l’étape 1.',
      'Recalculez les trois mensualités dans un tableur avec la fonction VPM (PMT en anglais) et comparez avec le tableau de l’IA.',
      'Si un écart apparaît, montrez-le à l’IA et demandez-lui de retrouver son erreur.',
      'Demandez le tableau d’amortissement de la première année sur 20 ans, et vérifiez que capital et intérêts s’additionnent bien à la mensualité.',
      'Passez à l’étape 2 et relisez l’explication : aucun conseil de durée, aucune promesse d’accord, mention des éléments exclus.',
    ],
    prompt:
      'Tu es conseiller en crédit immobilier. Nous allons travailler par étapes.\nÉtape 1 : à partir des hypothèses ci-dessous, donne la formule de la mensualité d’un prêt à taux fixe et mensualités constantes, puis calcule pour 15, 20 et 25 ans la mensualité, le total remboursé et le coût total des intérêts. Présente un tableau, montre le calcul détaillé pour 20 ans et précise que ces chiffres excluent l’assurance et les frais.\nÉtape 2, après ma vérification : rédige une explication d’une demi-page pour le client, en langage simple, sur ce qui change avec la durée. Ne recommande aucune durée et ne te prononce pas sur l’accord du prêt.\n\n<hypotheses>\n[collez les hypothèses ici]\n</hypotheses>',
    materiau: {
      titre: 'Hypothèses de simulation (fictives, hors assurance et frais)',
      texte:
        '- Capital emprunté : 20 000 000 XPF\n- Taux nominal annuel : 3,9 %, taux fixe, mensualités constantes\n- Durées à comparer : 15, 20 et 25 ans\n- Revenus nets du foyer : 680 000 XPF par mois (pour illustrer la part des revenus, sans rien conclure)',
    },
    variantes: {
      simple: 'Comparer seulement 15 et 25 ans et vérifier une mensualité au tableur.',
      poussee:
        'Ajouter un remboursement anticipé fictif de 2 000 000 XPF après cinq ans et comparer ses deux effets possibles (durée réduite ou mensualité réduite), toujours sans recommandation.',
    },
    astuces: {
      chatgpt:
        'L’analyse de données calcule par programme : demandez à voir la formule utilisée et le tableau d’amortissement complet.',
      copilot:
        'Dans Excel, demandez à Copilot la formule VPM pour chaque durée, puis vérifiez les arguments : taux mensuel et nombre de mois.',
      gemini:
        'Dans Google Sheets, « Demander à Gemini » propose la formule de mensualité ; vérifiez qu’elle divise bien le taux annuel par 12.',
    },
    vigilance:
      'Ces chiffres sont des simulations fictives, hors assurance et frais : une vraie proposition passe par les outils et les procédures de l’établissement. L’IA n’évalue jamais la capacité d’emprunt d’un client et ne décide de rien. Aucune donnée réelle de client dans le prompt.',
    formateur: {
      resultat:
        'Un tableau vérifié au tableur : environ 146 940 XPF par mois sur 15 ans (6,45 millions d’intérêts), 120 145 XPF sur 20 ans (8,83 millions) et 104 465 XPF sur 25 ans (11,34 millions), avec une explication neutre : allonger la durée baisse la mensualité mais augmente le coût total.',
      criteres: [
        'Les mensualités concordent avec le tableur à quelques francs près.',
        'Le tableau d’amortissement de la première année est cohérent (capital et intérêts font la mensualité).',
        'L’explication au client ne recommande aucune durée et rappelle les éléments exclus.',
        'L’apprenant a fait corriger au moins un point par l’IA ou confirmé chaque calcul.',
      ],
      pieges: [
        'Un calcul avec le taux annuel non divisé par 12, qui donne des mensualités absurdes.',
        'Une explication qui conclut « la durée de 20 ans est la plus adaptée à votre situation ».',
        'Oublier que l’assurance emprunteur et les frais changent le coût réel.',
      ],
      competence: 'discernement',
      technique: 'decomposer',
    },
    motsCles: ['crédit immobilier', 'simulation', 'mensualité', 'tableur', 'amortissement'],
  },
  {
    id: 'banq-assistant-questions-frequentes',
    titre: 'Créer un assistant pour les questions fréquentes à l’accueil',
    metier: 'banque',
    niveau: 'avance',
    famille: 'automatiser',
    duree: 60,
    outils: ['notebook', 'claude', 'chatgpt', 'gemini', 'copilot'],
    outilConseille: 'notebook',
    situation:
      'À l’accueil des agences de Nouméa, les mêmes questions reviennent : plafond de carte, opposition, virement vers l’Australie, procuration, clôture de compte. Vous voulez un assistant interne qui prépare des réponses à partir des seuls documents de l’établissement, pour les chargés d’accueil, qui relisent avant de répondre.',
    objectif:
      'Construire un assistant borné par des documents et des règles strictes, le tester sur des questions pièges (données personnelles, fraude, situation individuelle) et l’ajuster.',
    etapes: [
      'Rassemblez 5 à 8 documents validés, sans aucune donnée client : brochure tarifaire, conditions générales, fiches produits, procédures d’accueil.',
      'Chargez-les dans Gemini Notebook, ou dans un Projet (Claude, ChatGPT), un Gem ou un agent Copilot, à condition que l’outil soit autorisé par votre établissement.',
      'Rédigez les instructions à partir du prompt de départ.',
      'Testez avec les six questions du matériau et notez pour chacune : réponse juste et sourcée, renvoi correct vers un conseiller, ou invention.',
      'Corrigez les instructions ou ajoutez le document manquant, puis refaites le test.',
      'Rédigez la règle d’usage : aucune donnée client saisie, réponses toujours relues, questions sensibles transmises à un conseiller.',
    ],
    prompt:
      'Tu es l’assistant des chargés d’accueil de [nom de l’établissement]. Tu prépares des réponses aux questions fréquentes des clients ; le chargé d’accueil les relit avant de répondre.\nRègles :\n- Réponds uniquement à partir des documents fournis et cite le document et le passage utilisés.\n- Si la réponse n’y est pas, écris : « Information non trouvée dans nos documents : à voir avec un conseiller. » N’invente jamais un tarif, un plafond, un délai ou une condition.\n- Ne traite jamais une situation personnelle (compte, crédit, incident) : renvoie vers un conseiller.\n- En cas de soupçon de fraude, commence par : « Faites opposition immédiatement au [numéro du service d’opposition] », puis renvoie vers un conseiller.\n- Ne demande et ne reprends jamais de donnée personnelle (nom, numéro de compte ou de dossier, code).\n- Réponses courtes et claires, en vouvoiement.',
    materiau: {
      titre: 'Questions de test',
      texte:
        '1. Quel est le plafond de retrait de la carte classique ?\n2. Combien coûte un virement vers un compte en Australie ?\n3. J’ai perdu ma carte à l’aéroport de La Tontouta, que dois-je faire ?\n4. Ma mère est hospitalisée, comment puis-je gérer ses comptes ?\n5. Pourquoi mon prêt n’est-il pas encore accordé ? Voici mon numéro de dossier : 2024-8812.\n6. Un conseiller m’a appelé pour annuler un paiement et m’a demandé le code reçu par SMS, c’est normal ?',
    },
    variantes: {
      simple:
        'Charger la brochure tarifaire dans Gemini Notebook et poser les questions 1 à 3, en vérifiant chaque citation.',
      poussee:
        'Ajouter des exemples de bonnes réponses dans les instructions, puis faire évaluer l’assistant par deux chargés d’accueil sur vingt questions.',
    },
    astuces: {
      notebook:
        'Les réponses de la discussion citent le passage exact des sources ; partagez le carnet avec les chargés d’accueil une fois testé.',
      claude:
        'Dans un Projet, déposez les documents dans les connaissances du projet et collez les règles dans ses instructions.',
      chatgpt:
        'Désactivez la Mémoire pour cet usage et travaillez dans un Projet plutôt que dans une conversation libre.',
      gemini: 'Créez un Gem avec les règles et les documents, et testez-le avant de le partager.',
      copilot:
        'Créer un agent (selon la licence) garde l’assistant dans l’environnement Microsoft de l’établissement.',
    },
    vigilance:
      'Secret bancaire : aucune donnée client ne doit être saisie dans l’assistant, et seul un outil autorisé par l’établissement peut servir. L’assistant ne remplace pas un conseiller : il ne traite aucune situation personnelle et ne décide de rien.',
    formateur: {
      resultat:
        'Un assistant qui répond aux questions 1 à 3 en citant les documents (ou signale l’absence d’information), renvoie vers un conseiller pour les questions 4 et 5 sans reprendre le numéro de dossier, et place l’alerte de fraude en tête de la réponse à la question 6.',
      criteres: [
        'Aucun tarif ni plafond n’est inventé : chaque chiffre renvoie à un document.',
        'La question 5 n’est pas traitée et le numéro de dossier n’est pas repris.',
        'La question 6 déclenche d’abord le message d’alerte.',
        'Les instructions ont été corrigées après le premier test et la règle d’usage est rédigée.',
      ],
      pieges: [
        'Un plafond de carte ou un tarif de virement plausible, tiré des connaissances générales de l’IA.',
        'Un assistant qui commente le dossier de prêt de la question 5.',
        'Charger une brochure tarifaire périmée.',
      ],
      competence: 'delegation',
      technique: 'instructions',
    },
    motsCles: [
      'assistant',
      'questions fréquentes',
      'accueil',
      'Gemini Notebook',
      'secret bancaire',
    ],
  },
];
