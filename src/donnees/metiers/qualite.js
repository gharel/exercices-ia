/**
 * Qualité, sécurité, environnement : non-conformités, audits internes, procédures, prévention,
 * actions correctives, indicateurs. La fonction existe dans tous les secteurs (agroalimentaire,
 * clinique, hôtel, transport, formation, nettoyage, BTP…).
 * Toutes les personnes, entreprises, adresses et sommes sont fictives.
 */

export const vocabulaire = {
  structure: {
    g: 'm',
    s: 'service qualité, sécurité et environnement',
    p: 'services qualité, sécurité et environnement',
  },
  client: { g: 'm', s: 'client', p: 'clients' },
  partenaire: { g: 'm', s: 'fournisseur', p: 'fournisseurs' },
  documentCourant: { g: 'm', s: 'rapport de non-conformité', p: 'rapports de non-conformité' },
  documentLong: { g: 'm', s: 'manuel qualité', p: 'manuels qualité' },
  reunion: { g: 'f', s: 'revue qualité mensuelle', p: 'revues qualité mensuelles' },
  offre: {
    g: 'f',
    s: 'formation aux premiers secours organisée à Ducos',
    p: 'formations aux premiers secours organisées à Ducos',
  },
  poste: {
    g: 'm',
    s: 'animateur qualité, sécurité et environnement',
    p: 'animateurs qualité, sécurité et environnement',
  },
  evenement: {
    g: 'f',
    s: 'semaine de la sécurité de l’entreprise',
    p: 'semaines de la sécurité de l’entreprise',
  },
  visuel: { g: 'f', s: 'affiche d’information interne', p: 'affiches d’information interne' },
  domaine: 'la qualité, la sécurité et l’environnement',
  motifReclamation:
    'un lot livré non conforme à sa commande et une intervention promise puis oubliée',
  donnees: 'le registre des non-conformités des douze derniers mois',
  colonnes:
    'Date;Site;Type (produit, sécurité, environnement);Gravité (1 à 3);Cause identifiée;Délai de clôture (jours)',
  indicateur: 'le taux de non-conformités clôturées dans les délais',
  veille:
    'les bonnes pratiques de prévention des risques professionnels et de réduction des déchets',
  sourcesVeille:
    'les publications des organismes de prévention, des chambres consulaires et des provinces, ainsi que la presse spécialisée',
  jargon: 'les notions de non-conformité, d’action corrective et d’audit interne',
  procedure: 'la déclaration d’un presqu’accident',
  situationTendue:
    'un responsable de production qui conteste une non-conformité et refuse de l’enregistrer',
  donneesSensibles:
    'les noms des personnes impliquées dans un accident ou un presqu’accident, les données de santé et les résultats d’audit non publiés',
  corpus:
    'les procédures, les rapports d’audit et les comptes rendus de revue de direction de l’entreprise',
  publicCible: 'les salariés et les sous-traitants du site',
  etranger: 'un auditeur australien en visite sur le site',
  themeFormation: 'les règles de sécurité et de tri des déchets de l’entreprise',
  tacheRepetitive: 'la relance des actions correctives en retard',
  planning: 'le programme des audits internes de l’année',
  comparaison: 'deux offres de prestataires pour le contrôle des extincteurs',
};

export const exercices = [
  {
    id: 'qse-fiche-non-conformite-notes',
    titre: 'Rédiger une fiche de non-conformité à partir de notes de terrain',
    metier: 'qualite',
    niveau: 'debutant',
    famille: 'rediger',
    duree: 15,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'copilot',
    situation:
      'Vous êtes référent qualité de la cuisine centrale d’une entreprise de restauration collective à Dumbéa. Ce matin, le magasinier vous a laissé ses notes sur un écart constaté en chambre froide. La fiche de non-conformité doit être ouverte avant la fin de la matinée pour que la direction décide quoi faire du stock.',
    objectif:
      'Transformer des notes en vrac en fiche de non-conformité claire : faits constatés, produits concernés, mesures immédiates, sans que l’IA invente une cause ni une décision.',
    etapes: [
      'Lisez les notes du matériau et soulignez ce qui est un fait observé, ce qui est une hypothèse et ce qui manque.',
      'Collez les notes dans votre outil d’IA avec le prompt de départ.',
      'Vérifiez que la fiche sépare bien les faits, les mesures déjà prises et les décisions encore à prendre.',
      'Contrôlez chaque chiffre, heure et numéro de lot par rapport aux notes, et repérez tout ce que l’IA a ajouté.',
      'Gardez les cases « cause » et « action corrective » vides ou à l’état de questions : ce sont les vôtres, pas celles de l’IA.',
    ],
    prompt:
      'Tu es référent qualité dans une cuisine centrale en Nouvelle-Calédonie. À partir des notes de terrain ci-dessous, rédige une fiche de non-conformité avec ces rubriques : date et heure du constat, lieu, produits et lots concernés, faits constatés, mesures immédiates déjà prises, décision à prendre (avec qui), cause (à rechercher) et action corrective (à définir).\n\nN’utilise que les informations des notes. Si une information manque, écris « à préciser » au lieu de l’inventer. Ne propose ni cause ni action corrective : liste plutôt les questions à poser pour les trouver. Ne conclus pas sur la consommabilité des produits : cette décision revient au responsable.\n\n<notes>\n[collez les notes ici]\n</notes>',
    materiau: {
      titre: 'Notes du magasinier (jeudi 5 novembre)',
      texte:
        'chambre froide n°2, arrivé 6h15 : afficheur 9 °C. la consigne collée sur la porte dit 4 °C max\nporte pas bien fermée ? je crois que c’est la livraison d’hier soir 18h, personne n’a vérifié\nà l’intérieur : 3 palettes de desserts lactés (lots 1104 et 1105), 2 palettes de fruits coupés, 1 palette de sauces\nj’ai pris la température à cœur de 2 pots sur la palette du haut avec la sonde : 8 °C et 7 °C\nj’ai tout bloqué avec l’étiquette rouge « ne pas utiliser », rien n’est parti en cuisine\nprévenu Mika (chef de cuisine) à 6h40, pas encore la qualité\nla sonde est celle de la cuisine, pas vérifiée depuis longtemps ?\nlivraisons de ce midi : 220 repas pour l’école de Dumbéa-sur-Mer !!\nj’ai déplacé rien d’autre',
    },
    variantes: {
      simple: 'Ne remplir que les rubriques « faits constatés » et « mesures immédiates ».',
      poussee:
        'Faire proposer, en plus, un message d’alerte de trois lignes à la direction et la liste des questions à poser pour rechercher la cause, sans y répondre.',
    },
    astuces: {
      copilot:
        'Dans Word, Copilot (selon la licence) peut remplir votre modèle de fiche : collez-y les notes et vérifiez chaque rubrique.',
      claude:
        'Avec la création de fichiers, demandez la fiche en document Word, puis relisez-la entièrement avant de la diffuser.',
      gemini:
        'Ouvrez la fiche dans Canvas pour reformuler une rubrique sans régénérer toute la fiche.',
    },
    vigilance:
      'Ne collez pas les noms des salariés impliqués : écrivez « le magasinier », « le chef de cuisine ». La décision sur le sort des produits appartient à une personne compétente, jamais à l’IA.',
    formateur: {
      resultat:
        'Une fiche où les faits sont séparés des mesures prises et des décisions à prendre ; la cause et l’action corrective sont laissées à rechercher ; l’heure de la livraison, les lots, les températures et les 220 repas apparaissent exactement comme dans les notes.',
      criteres: [
        'Chiffres, heures et numéros de lot identiques aux notes.',
        'Les rubriques sans information sont marquées « à préciser », pas remplies par l’IA.',
        'Aucune cause ni action corrective affirmée : seulement des questions à poser.',
        'Le doute sur la sonde non vérifiée est signalé.',
      ],
      pieges: [
        'Laisser l’IA écrire « cause : porte mal fermée » alors que ce n’est qu’une supposition du magasinier.',
        'Accepter une conclusion du type « produits propres à la consommation » ou « à jeter ».',
        'Perdre le fait que la sonde n’a peut-être pas été vérifiée.',
      ],
      competence: 'discernement',
      technique: 'structurer',
    },
    motsCles: ['non-conformité', 'fiche', 'chambre froide', 'notes de terrain', 'agroalimentaire'],
  },
  {
    id: 'qse-simplifier-consigne-securite',
    titre: 'Simplifier une consigne de sécurité pour qu’elle soit comprise de tous',
    metier: 'qualite',
    niveau: 'debutant',
    famille: 'corriger',
    duree: 15,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'gemini',
    situation:
      'Vous êtes correspondant sécurité d’une entreprise de nettoyage de Nouméa. La consigne sur la dilution d’un détergent est écrite dans un style administratif : les agents, dont certains lisent difficilement le français, ne la lisent pas. Vous devez la proposer en version claire avant la prochaine réunion d’équipe.',
    objectif:
      'Réécrire une consigne en langage clair sans changer une seule valeur ni une seule règle, et faire signaler tout ce qui est ambigu.',
    etapes: [
      'Lisez la consigne du matériau et soulignez les mots qu’un agent pourrait ne pas comprendre.',
      'Collez-la dans votre outil d’IA avec le prompt de départ.',
      'Comparez chaque quantité, chaque durée et chaque interdiction entre l’original et la version claire.',
      'Lisez la liste des points ambigus : ils sont à confirmer par l’auteur de la consigne, pas à trancher par l’IA.',
      'Testez la version finale auprès d’un collègue : demandez-lui de vous expliquer la consigne avec ses mots.',
    ],
    prompt:
      'Réécris la consigne de sécurité ci-dessous en langage clair pour des agents d’entretien dont certains lisent difficilement le français : phrases de 12 mots au maximum, un verbe d’action au début de chaque phrase, un ordre d’exécution numéroté, vocabulaire simple.\n\nGarde exactement les mêmes quantités, durées, noms de produits et interdictions. Ne rajoute aucune règle. Si une phrase est ambiguë ou incomplète, ne la complète pas : signale-la dans une liste « À confirmer » après la consigne. Termine par un tableau « avant / après » des cinq phrases les plus modifiées.\n\n<consigne>\n[collez la consigne ici]\n</consigne>',
    materiau: {
      titre: 'Consigne actuelle : dilution du détergent Netto-Sol (fictive)',
      texte:
        'CONSIGNE C-07 – Préparation et utilisation du détergent Netto-Sol\n\nIl est impératif que le personnel procède, préalablement à toute dilution, à la vérification du port des équipements de protection individuelle adaptés (gants et lunettes), et ce afin de prévenir tout risque de projection. La dilution est réalisée à raison de 50 mL de produit pour 5 L d’eau, le produit étant versé après l’eau dans le seau. Le mélange avec tout autre produit est proscrit. Les seaux utilisés doivent faire l’objet d’un étiquetage mentionnant la date de préparation, et toute solution préparée depuis plus de 24 heures doit être éliminée. En cas de contact avec la peau ou les yeux, il convient de rincer abondamment et d’en informer le responsable d’équipe dans les meilleurs délais.',
    },
    variantes: {
      simple: 'Garder une seule consigne de cinq phrases, sans le tableau « avant / après ».',
      poussee:
        'Demander ensuite une version en trois langues parlées par l’équipe, puis la faire relire par des locuteurs avant toute diffusion.',
    },
    astuces: {
      gemini: 'Ouvrez le texte dans Canvas pour retoucher une phrase précise sans tout régénérer.',
      claude:
        'Demandez la liste des modifications après le texte corrigé, pour vérifier que rien d’important n’a changé.',
      chatgpt:
        'Dans le canevas, demandez des suggestions de modification : vous acceptez les changements un par un.',
    },
    vigilance:
      'Une IA peut « simplifier » en supprimant une précaution ou en arrondissant une quantité. Seule une personne compétente valide la version finale d’une consigne de sécurité.',
    formateur: {
      resultat:
        'Une consigne numérotée en phrases courtes qui garde 50 mL pour 5 L, l’eau versée avant le produit, l’interdiction de mélanger, l’étiquette avec la date et l’élimination après 24 heures ; la liste « À confirmer » relève au moins « dans les meilleurs délais » et l’absence de précision sur la durée du rinçage.',
      criteres: [
        'Les valeurs 50 mL, 5 L et 24 heures sont inchangées.',
        'Aucune règle n’est ajoutée ou supprimée.',
        'Les imprécisions sont signalées dans « À confirmer » au lieu d’être comblées.',
        'La version a été testée auprès d’un lecteur réel.',
      ],
      pieges: [
        'Accepter une durée de rinçage inventée (« 15 minutes ») pour combler le vide.',
        'Perdre l’ordre « eau d’abord, produit ensuite » dans la simplification.',
        'Diffuser la consigne sans validation de la personne responsable.',
      ],
      competence: 'discernement',
      technique: 'critique',
    },
    motsCles: ['consigne', 'langage clair', 'détergent', 'sécurité', 'simplification'],
  },
  {
    id: 'qse-checklist-visite-securite',
    titre: 'Préparer la check-list d’une visite sécurité de site',
    metier: 'qualite',
    niveau: 'debutant',
    famille: 'organiser',
    duree: 20,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Vous êtes correspondant sécurité d’un collège privé de Dumbéa. La direction vous demande une première visite sécurité de l’établissement vendredi, accompagné du gestionnaire. Vous n’avez pas de trame et vous voulez une check-list à remplir sur place, zone par zone.',
    objectif:
      'Obtenir une check-list de terrain utilisable, en donnant à l’IA la description du site et le format attendu, et en lui interdisant d’inventer des exigences réglementaires.',
    etapes: [
      'Lisez la description du site dans le matériau et complétez-la avec une ou deux zones que vous connaissez.',
      'Envoyez le prompt de départ avec la description.',
      'Relisez la check-list zone par zone : chaque point doit être observable (oui, non, sans objet) et non une intention.',
      'Supprimez les points qui ne concernent pas votre site et ajoutez ceux que vous connaissez et que l’IA ne peut pas deviner.',
      'Demandez un tableau final avec une colonne pour la photo, l’observation et le niveau d’urgence, imprimable en paysage.',
    ],
    prompt:
      'Tu es correspondant sécurité dans un établissement scolaire privé en Nouvelle-Calédonie. Prépare la check-list d’une visite sécurité du site décrit ci-dessous, à remplir sur place.\n\nOrganise-la par zone. Pour chaque zone, 5 à 8 points, chacun formulé de façon observable et à cocher (conforme, non conforme, sans objet), avec une colonne « observation » et une colonne « urgence à traiter » (immédiate, sous un mois, à planifier). Pas de point vague du type « la sécurité est-elle assurée ? ».\n\nNe cite aucun texte réglementaire ni aucune exigence chiffrée : si un point dépend d’une règle, écris « à vérifier dans le référentiel de l’établissement ».\n\n<site>\n[collez la description du site ici]\n</site>',
    materiau: {
      titre: 'Description du site (fictive)',
      texte:
        'Collège privé Saint-Aubin, Dumbéa – environ 400 élèves, 40 adultes\n- Bâtiments : deux ailes de classes sur deux niveaux, un bloc administratif, un réfectoire avec cuisine, un gymnase, un atelier de technologie\n- Extérieur : cour centrale avec préau, parking de 30 places, portail principal et portail de service, escaliers extérieurs, rampes\n- Zones à risque connues : laboratoire de sciences (produits en armoire), local technique (électricité, groupe électrogène), local de stockage des produits d’entretien, cuisine\n- Points de vigilance signalés par l’équipe : sols glissants dans la cour par temps de pluie, dépôt de cartons dans un couloir, éclairage défaillant dans l’escalier de l’aile B\n- Déjà en place : plan d’évacuation affiché dans les couloirs, registre de sécurité tenu par la vie scolaire',
    },
    variantes: {
      simple: 'Se limiter à trois zones : cour, réfectoire et laboratoire.',
      poussee:
        'Faire préparer aussi le modèle du compte rendu de visite : constats, priorités, actions proposées avec pilote et échéance à désigner, et un message de restitution à la direction.',
    },
    astuces: {
      claude:
        'Avec la création de fichiers, demandez la check-list en fichier Excel : une feuille par zone, prête à imprimer.',
      chatgpt:
        'Demandez un tableau, puis téléchargez-le au format Excel pour l’imprimer en paysage.',
      copilot:
        'Transformez la check-list en Copilot Page (compte professionnel) pour que le gestionnaire ajoute ses points avant la visite.',
    },
    vigilance:
      'Une check-list générée est un point de départ : elle ne remplace ni votre connaissance du site ni les référentiels de l’établissement. Une zone absente de la liste n’est pas une zone sans risque.',
    formateur: {
      resultat:
        'Une check-list par zone (cour, parking, escaliers, cuisine, laboratoire, local technique…) dont chaque point est observable et cochable, avec les trois points de vigilance du matériau intégrés et aucune exigence réglementaire inventée.',
      criteres: [
        'Chaque point est une observation vérifiable sur place, pas une intention.',
        'Les trois points signalés par l’équipe figurent dans la liste.',
        'Les points qui dépendent d’une règle sont renvoyés au référentiel, sans chiffre inventé.',
        'L’apprenant a retiré ou ajouté des points pour son propre site.',
      ],
      pieges: [
        'Accepter des distances, des nombres d’extincteurs ou des fréquences de contrôle présentés comme obligatoires.',
        'Oublier les zones que l’IA ne connaît pas (local de stockage des produits d’entretien).',
        'Une check-list trop longue que personne ne remplira jusqu’au bout.',
      ],
      competence: 'description',
      technique: 'format',
    },
    motsCles: ['visite sécurité', 'check-list', 'établissement', 'zones', 'prévention'],
  },
  {
    id: 'qse-affiche-tri-dechets-canva',
    titre: 'Créer dans Canva une affiche de sensibilisation au tri des déchets',
    metier: 'qualite',
    niveau: 'debutant',
    famille: 'visuels',
    duree: 20,
    outils: ['canva', 'chatgpt', 'claude'],
    outilConseille: 'canva',
    situation:
      'Vous êtes référent environnement d’un hôtel de Lifou. Les bacs de tri sont mal utilisés : le verre part dans les bacs d’emballages et les déchets de cuisine dans les poubelles de couloir. Vous voulez une affiche A3 pour la zone de plonge et le local déchets, lisible à deux mètres.',
    objectif:
      'Concevoir une affiche de sensibilisation avec l’IA de Canva : un message principal, quatre consignes courtes, des couleurs qui correspondent aux bacs, sans erreur de consigne.',
    etapes: [
      'Lisez les règles de tri de l’hôtel dans le matériau : ce sont elles qui font foi, pas l’IA.',
      'Demandez à votre outil d’IA de rédiger le texte de l’affiche : un titre, quatre consignes de dix mots au maximum, une phrase de rappel.',
      'Vérifiez le texte contre les règles : chaque bac, chaque couleur et chaque exception doivent être exacts.',
      'Dans Canva, décrivez le design à l’IA Canva avec le prompt de départ, puis collez le texte validé.',
      'Contrôlez la lisibilité (gros caractères, contraste) et ajustez les couleurs des bacs, puis faites relire l’affiche par un collègue de la plonge.',
    ],
    prompt:
      'Crée une affiche A3 en portrait pour la zone de plonge et le local déchets d’un hôtel de Lifou. Titre : « Un bac, un déchet ». Style simple, sobre, fond clair, gros caractères lisibles à deux mètres. Quatre blocs, un par bac (verre, emballages, déchets de cuisine, ordures ménagères), chacun avec une pastille de la couleur du bac, une icône et une consigne courte. En bas, une ligne : « Un doute ? Demandez à [nom du référent environnement], poste [numéro] ». Utilise exactement ce texte et ne reformule pas les consignes :\n\n<texte>\n[collez ici le texte validé]\n</texte>',
    materiau: {
      titre: 'Règles de tri de l’hôtel (fictives)',
      texte:
        'Bac VERT (verre) : bouteilles et bocaux vides, sans bouchon. Pas de vaisselle cassée, pas de verre de fenêtre.\nBac JAUNE (emballages) : cartons pliés, canettes, bouteilles en plastique vides et écrasées, boîtes de conserve rincées. Pas de barquettes sales.\nBac MARRON (déchets de cuisine) : épluchures, restes de repas, marc de café, coquilles. Pas de sacs plastique, pas de liquides.\nBac GRIS (ordures ménagères) : tout le reste, y compris la vaisselle cassée, les barquettes sales, les mouchoirs.\nPiles, ampoules et produits d’entretien vides : rapportés au local déchets dangereux, jamais dans les bacs.\nCollecte : le mardi et le vendredi.',
    },
    variantes: {
      simple: 'Ne créer qu’un bloc : le bac de verre, en format A4.',
      poussee:
        'Décliner l’affiche en deux formats (A3 et A4) et en deux langues, puis préparer un message de rappel pour le tableau d’affichage du personnel.',
    },
    astuces: {
      canva:
        'Collez la description dans l’IA Canva pour obtenir des propositions de design, puis modifiez chaque bloc à la main ; Redimensionnement magique (Pro) décline ensuite le format.',
      chatgpt:
        'Demandez-lui seulement le texte court de l’affiche, avec les consignes en dix mots au maximum ; la mise en page se fait dans Canva.',
      claude:
        'Demandez un artefact qui montre la disposition des quatre blocs, puis refaites-la dans Canva.',
    },
    vigilance:
      'N’utilisez pas de photo de salariés ni de logo qui n’est pas à vous. Les règles de tri sont celles de votre commune et de votre prestataire de collecte : vérifiez-les avant d’imprimer.',
    formateur: {
      resultat:
        'Une affiche A3 lisible, avec quatre blocs aux couleurs des bacs, des consignes de dix mots au maximum conformes aux règles fournies, et le contact du référent.',
      criteres: [
        'Chaque consigne est identique aux règles fournies (la vaisselle cassée va dans le bac gris, pas dans le vert).',
        'Les couleurs des pastilles correspondent aux bacs.',
        'Le texte est lisible à deux mètres : gros caractères, contraste fort.',
        'Le texte est celui de l’apprenant, pas une reformulation libre de l’IA.',
      ],
      pieges: [
        'Laisser l’IA de Canva réécrire les consignes et placer la vaisselle cassée dans le bac de verre.',
        'Oublier la mention des déchets dangereux, jamais dans les bacs.',
        'Surcharger l’affiche de texte et d’images décoratives.',
      ],
      competence: 'description',
      technique: 'format',
    },
    motsCles: ['affiche', 'tri des déchets', 'Canva', 'environnement', 'sensibilisation', 'hôtel'],
  },
  {
    id: 'qse-analyser-presquaccidents',
    titre: 'Analyser les presqu’accidents déclarés depuis janvier',
    metier: 'qualite',
    niveau: 'intermediaire',
    famille: 'analyser',
    duree: 30,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'copilot',
    situation:
      'Vous êtes animateur sécurité d’une entreprise de distribution à Païta : un entrepôt, un atelier de préparation et un parking pour les camions. Depuis janvier, les salariés déclarent des presqu’accidents. Avant la réunion du comité de sécurité, vous voulez savoir ce qu’ils racontent : où, quoi, et lesquels n’ont reçu aucune réponse.',
    objectif:
      'Faire analyser un tableau de déclarations par l’IA, vérifier ses comptages et passer des chiffres aux questions à poser, sans que l’IA tire de conclusions sur les causes.',
    etapes: [
      'Collez le tableau du matériau dans votre outil d’IA avec le prompt de départ, ou joignez-le en fichier CSV.',
      'Lisez les regroupements proposés : par type, par lieu, par gravité potentielle, par réponse apportée.',
      'Vérifiez à la main deux comptages (par exemple les chariots au quai 2 et les gravités 3 sans action) avant d’aller plus loin.',
      'Demandez les récurrences et les signaux faibles, puis les questions à poser sur le terrain pour les comprendre.',
      'Faites rédiger trois messages de dix lignes au maximum pour le comité de sécurité, en distinguant ce que disent les chiffres de ce qu’il reste à comprendre.',
    ],
    prompt:
      'Tu es animateur sécurité dans une entreprise de distribution en Nouvelle-Calédonie. Voici les presqu’accidents déclarés du 1er janvier au 31 août 2026 (séparateur : point-virgule, une ligne par déclaration, aucune donnée personnelle).\n\n<tableau>\n[collez le tableau ici]\n</tableau>\n\n1. Compte les déclarations par type, par lieu, par gravité potentielle (1 à 3) et selon qu’une action a été décidée ou non.\n2. Repère les lieux et les types qui reviennent, et les déclarations de gravité 3 sans action décidée.\n3. Propose des questions à poser sur le terrain pour comprendre chaque récurrence, sans en déduire la cause.\n4. Signale ce que le tableau ne permet pas de dire (taux de déclaration par service, évolution réelle du risque…).\nMontre tes comptages.',
    materiau: {
      titre: 'Presqu’accidents déclarés de janvier à août 2026 (14 lignes, fictives)',
      texte:
        'Date;Zone;Lieu;Type;Gravité potentielle (1 à 3);Service déclarant;Action décidée (oui/non)\n05/01/2026;Entrepôt;Quai 2;Circulation chariot;3;Exploitation;oui\n19/01/2026;Entrepôt;Allée C;Chute de plain-pied;1;Exploitation;oui\n02/02/2026;Atelier;Poste de lavage;Produit chimique;2;Atelier;non\n16/02/2026;Entrepôt;Quai 2;Circulation chariot;3;Exploitation;non\n09/03/2026;Entrepôt;Rayonnage D;Chute d’objet;3;Exploitation;oui\n23/03/2026;Parking;Sortie camions;Circulation camion;2;Transport;non\n14/04/2026;Entrepôt;Quai 2;Circulation chariot;2;Exploitation;non\n28/04/2026;Atelier;Établi 3;Électrique;2;Atelier;oui\n11/05/2026;Entrepôt;Allée C;Chute de plain-pied;1;Exploitation;non\n08/06/2026;Parking;Sortie camions;Circulation camion;3;Transport;oui\n22/06/2026;Entrepôt;Quai 1;Manutention;1;Exploitation;non\n06/07/2026;Entrepôt;Quai 2;Circulation chariot;3;Exploitation;non\n20/07/2026;Atelier;Poste de lavage;Produit chimique;2;Atelier;non\n03/08/2026;Entrepôt;Rayonnage D;Chute d’objet;2;Exploitation;oui',
    },
    variantes: {
      simple: 'Demander seulement le comptage par type et par lieu, sans les questions de terrain.',
      poussee:
        'Faire produire un graphique des déclarations par mois et par type, et une note qui compare ce que dit l’IA avec ce que vous savez du terrain (saisonnalité, travaux, intérimaires).',
    },
    astuces: {
      copilot:
        'Mettez le tableau sous forme de tableau Excel, puis demandez à Copilot (selon la licence) de compter par type et par lieu : il le lit bien mieux.',
      chatgpt:
        'Avec l’analyse de données, joignez le fichier CSV : ChatGPT montre ses calculs, contrôlez un comptage à la main.',
      claude:
        'Déposez le fichier CSV : Claude compte, trace un graphique et peut rendre un fichier Excel.',
    },
    vigilance:
      'Les déclarations réelles contiennent souvent des noms ou des détails qui identifient quelqu’un : n’en gardez que les colonnes utiles. Un presqu’accident non déclaré n’apparaît pas dans le tableau : il ne prouve pas l’absence de risque.',
    formateur: {
      resultat:
        'Des comptages exacts (14 déclarations ; chariots : 4, tous au quai 2 ; gravité 3 : 5, dont 2 sans action décidée ; 8 déclarations sans action contre 6 avec), les récurrences signalées (quai 2, poste de lavage, rayonnage D, sortie camions) et des questions de terrain plutôt que des causes affirmées.',
      criteres: [
        'Les comptages de l’IA ont été vérifiés à la main sur au moins deux regroupements.',
        'Le quai 2 est repéré : quatre déclarations de circulation de chariots, dont trois sans action.',
        'Les deux déclarations de gravité 3 sans action (16 février et 6 juillet) sont signalées.',
        'Les limites du tableau sont écrites : pas de causes, pas de taux par service.',
      ],
      pieges: [
        'Accepter une cause affirmée (« manque de formation ») qui ne figure pas dans les données.',
        'Un comptage faux, par exemple 5 déclarations au quai 2 ou 4 gravités 3.',
        'Lire un faible nombre de déclarations comme un faible niveau de risque, alors qu’il peut traduire de faibles remontées du terrain.',
      ],
      competence: 'discernement',
      technique: 'decomposer',
    },
    motsCles: ['presqu’accidents', 'CSV', 'analyse', 'récurrences', 'comité de sécurité'],
  },
  {
    id: 'qse-preparer-audit-interne',
    titre: 'Préparer un audit interne : questions à poser et preuves attendues',
    metier: 'qualite',
    niveau: 'intermediaire',
    famille: 'organiser',
    duree: 30,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Vous êtes responsable qualité d’un organisme de formation de Nouméa. Le programme annuel prévoit un audit interne du processus « accueil et suivi des stagiaires » dans quinze jours. Vous êtes l’auditeur ; l’audité est la coordinatrice pédagogique. Vous voulez une trame d’entretien et une liste des preuves à demander.',
    objectif:
      'Préparer l’audit en plusieurs échanges : questions ouvertes, preuves à regarder, échantillon à tirer, sans que l’IA invente les exigences de votre référentiel.',
    etapes: [
      'Lisez le descriptif du processus dans le matériau et notez le référentiel sur lequel vous êtes audité (le vôtre, pas celui de l’IA).',
      'Envoyez le prompt de départ : l’IA ne propose d’abord que la trame des questions.',
      'Relisez les questions : elles doivent être ouvertes (« comment faites-vous quand… ? ») et renvoyer à une preuve concrète.',
      'Demandez ensuite le tableau des preuves attendues et la taille de l’échantillon à justifier, puis corrigez les exigences à la lumière de votre référentiel.',
      'Faites rédiger la convocation à l’audité : objet, périmètre, durée, documents à préparer, sur un ton rassurant.',
    ],
    prompt:
      'Tu es responsable qualité et auditeur interne dans un organisme de formation à Nouméa. Je prépare l’audit du processus décrit ci-dessous. Travaillons par étapes : ne passe à l’étape suivante que lorsque je te le demande.\n\nÉtape 1 : propose une trame de 12 à 15 questions ouvertes, regroupées selon les étapes du processus. Pour chaque question, indique l’intention (ce que je cherche à vérifier).\n\nContraintes : ne cite aucune exigence de norme ni de réglementation. Là où une exigence de mon référentiel est nécessaire, écris « [exigence à relier au référentiel] ». N’invente aucun enregistrement : si le processus ne le mentionne pas, signale-le.\n\n<processus>\n[collez la description du processus ici]\n</processus>',
    materiau: {
      titre: 'Descriptif du processus « accueil et suivi des stagiaires » (fictif)',
      texte:
        'Organisme de formation Pacifique Compétences – Nouméa – 6 salariés, une vingtaine de sessions par an\n1. Avant la session : le stagiaire reçoit la convocation et le programme par e-mail une semaine avant le début (coordinatrice pédagogique).\n2. Jour 1 : accueil, émargement, remise du livret d’accueil, tour de table sur les attentes (formateur).\n3. Pendant la session : feuille d’émargement signée matin et après-midi ; le formateur note les difficultés rencontrées dans le cahier de session.\n4. Fin de session : questionnaire de satisfaction « à chaud » ; remise de l’attestation de fin de formation (coordinatrice).\n5. Suivi : appel de suivi à trois mois, tenu par la coordinatrice ; les résultats sont résumés dans un tableau Excel.\n6. Réclamations : le stagiaire peut écrire à l’adresse de l’organisme ; la réclamation est enregistrée dans un classeur et traitée par la directrice.\nPoints d’attention de l’année : 2 retards de convocation en septembre ; le tableau de suivi à trois mois n’est pas à jour depuis juillet.',
    },
    variantes: {
      simple: 'Ne préparer que cinq questions, sur la première moitié du processus.',
      poussee:
        'Faire jouer à l’IA la coordinatrice pendant un entretien d’entraînement, puis demander un retour sur la formulation de vos questions et sur votre façon de rebondir.',
    },
    astuces: {
      chatgpt:
        'Travaillez dans un Projet : la trame validée y reste, et vous la reprenez pour les prochains audits.',
      claude:
        'Avec la création de fichiers, demandez la trame et les preuves attendues en fichier Excel, que vous complétez pendant l’audit.',
      copilot:
        'Transformez la trame en Copilot Page (compte professionnel) : l’audité peut y déposer les documents à préparer.',
    },
    vigilance:
      'Les rapports d’audit et les résultats de réclamations sont confidentiels : ne collez que la description du processus, jamais de noms de stagiaires ni de comptes rendus réels. L’IA propose des questions : elle ne décide d’aucun écart.',
    formateur: {
      resultat:
        'Une trame de 12 à 15 questions ouvertes reliées aux six étapes, un tableau des preuves à demander (convocations, émargements, cahier de session, questionnaires, tableau de suivi, classeur des réclamations), les deux points d’attention de l’année et une convocation courtoise.',
      criteres: [
        'Les questions sont ouvertes et renvoient chacune à une preuve concrète.',
        'Les deux points d’attention (retards de convocation, tableau non à jour) sont couverts par des questions précises.',
        'Aucune exigence de norme n’est affirmée : les renvois sont marqués « à relier au référentiel ».',
        'L’apprenant a validé la trame avant de demander la convocation.',
      ],
      pieges: [
        'Accepter une liste d’exigences normatives présentées comme obligatoires.',
        'Des questions fermées (« avez-vous une procédure ? ») qui n’appellent aucune preuve.',
        'Laisser l’IA conclure à un écart avant d’avoir vu les preuves.',
      ],
      competence: 'delegation',
      technique: 'decomposer',
    },
    motsCles: ['audit interne', 'questions', 'preuves', 'processus', 'organisme de formation'],
  },
  {
    id: 'qse-procedure-entretien-operateur',
    titre: 'Rédiger une procédure à partir de l’entretien avec la personne qui fait le travail',
    metier: 'qualite',
    niveau: 'intermediaire',
    famille: 'rediger',
    duree: 30,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Dans une charcuterie de Koné, le nettoyage de fin de poste de la trancheuse n’est pas écrit : chacun le fait à sa façon. Vous êtes le référent qualité ; vous avez enregistré l’entretien de Tevita, qui fait ce travail depuis dix ans. Vous voulez en tirer une procédure en étapes que les nouveaux pourront suivre.',
    objectif:
      'Passer d’un récit oral à une procédure écrite fidèle, en repérant les contradictions et les trous plutôt qu’en les comblant, puis la faire valider par la personne qui fait le travail.',
    etapes: [
      'Lisez la transcription du matériau et repérez, sans l’IA, deux endroits où la personne se contredit ou hésite.',
      'Collez-la avec le prompt de départ : l’IA produit la procédure, la liste des incohérences et les questions à poser.',
      'Comparez la procédure à la transcription : chaque étape doit s’y retrouver, rien n’est ajouté.',
      'Posez les questions à Tevita (ici, jouez son rôle ou relisez la transcription) pour trancher les contradictions : durée de contact, dose, rinçage.',
      'Demandez la version finale en check-list d’une page, puis faites-la relire par la personne qui fait le travail avant diffusion.',
    ],
    prompt:
      'Tu es référent qualité dans une charcuterie en Nouvelle-Calédonie. À partir de la transcription d’entretien ci-dessous, rédige la procédure de nettoyage de fin de poste de la trancheuse : objet, matériel et produits, équipements de protection, étapes numérotées (une action par étape), points de vigilance, enregistrement à faire.\n\nRègles : n’utilise que ce que dit la personne. Si elle se contredit ou si une valeur manque (dose, durée, fréquence), ne choisis pas : écris « à confirmer » dans la procédure et liste le point dans « Questions à poser ». Corrige le style, pas le fond : garde les noms de produits et les chiffres tels qu’ils sont dits.\n\n<entretien>\n[collez la transcription ici]\n</entretien>',
    materiau: {
      titre: 'Transcription de l’entretien avec Tevita (brute, fictive)',
      texte:
        'Alors, en fin de poste, d’abord j’arrête la machine et je débranche, ça c’est le plus important. Ensuite je mets les gants anti-coupure, les gants en métal quoi, et le tablier. Je retire la lame… non d’abord je baisse le plateau, après je retire le carter de la lame, il faut le tenir par la poignée, jamais par le bord. La lame je la démonte pas tous les jours, euh, seulement le vendredi, les autres jours je la nettoie en place avec la brosse, toujours du dos vers le tranchant, jamais dans l’autre sens.\nJe rince à l’eau d’abord pour enlever les restes. Après je passe le Sanitop dilué, je mets… c’est un bouchon pour un demi-seau, ou un bouchon pour un seau, je sais plus, ça dépend de la bouteille. On laisse agir dix minutes, non cinq, enfin la dernière fois le chef disait dix. Ensuite je rince bien à l’eau claire, deux fois. Pas au jet, hein, jamais le jet sur le moteur.\nJ’essuie avec le papier, je remets le carter, je rebranche pas, je laisse débranché jusqu’au lendemain. Je note sur la feuille accrochée au mur : date, heure et mon nom. Si je vois un défaut sur la lame ou le carter, je préviens le chef et je mets l’étiquette rouge sur la machine.',
    },
    variantes: {
      simple:
        'Ne rédiger que les étapes numérotées, sans les rubriques matériel et enregistrement.',
      poussee:
        'Faire produire en plus la fiche d’une page pour affichage près de la machine et dix questions de contrôle pour vérifier que le nouveau a compris la procédure.',
    },
    astuces: {
      claude:
        'Avec la création de fichiers, demandez la procédure en document Word, puis la fiche d’affichage en PDF ; relisez les deux entièrement.',
      chatgpt:
        'Ouvrez la procédure dans le canevas : vous retouchez une étape sans régénérer tout le document.',
      gemini:
        'Dans Google Docs, « Aide-moi à écrire » reformule une étape ; partez toujours de la procédure validée.',
    },
    vigilance:
      'Une procédure de sécurité décrite par une IA n’est pas validée : seul un responsable compétent, avec la personne qui fait le travail, la valide. Ne mentionnez pas les noms réels des salariés ni les références des produits de votre fournisseur si vous n’êtes pas sûr de pouvoir les partager.',
    formateur: {
      resultat:
        'Une procédure en étapes qui respecte l’ordre dit (arrêter et débrancher, gants et tablier, baisser le plateau, retirer le carter par la poignée), signale « à confirmer » la dose de produit, la durée de contact (5 ou 10 minutes) et la fréquence de démontage, et liste les questions pour Tevita.',
      criteres: [
        'La dose et la durée de contact ne sont pas tranchées par l’IA : elles figurent « à confirmer ».',
        'L’ordre « arrêter, débrancher » précède toute intervention, et l’interdiction du jet sur le moteur est conservée.',
        'La procédure ne contient aucune étape absente de la transcription.',
        'Elle a été relue par la personne qui fait le travail avant diffusion.',
      ],
      pieges: [
        'Laisser l’IA fixer « 10 minutes » ou « 1 bouchon pour un seau » pour faire propre.',
        'Perdre les mises en garde dites à l’oral (poignée du carter, sens de la brosse).',
        'Diffuser la procédure telle quelle, avec ses « à confirmer ».',
      ],
      competence: 'discernement',
      technique: 'critique',
    },
    motsCles: ['procédure', 'entretien', 'transcription', 'nettoyage', 'trancheuse', 'charcuterie'],
  },
  {
    id: 'qse-synthese-reclamations-trimestre',
    titre: 'Synthétiser les réclamations qualité du trimestre pour la réunion qualité',
    metier: 'qualite',
    niveau: 'intermediaire',
    famille: 'synthetiser',
    duree: 30,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'copilot',
    situation:
      'Vous êtes responsable qualité d’une biscuiterie de Bourail. La réunion qualité du lundi 5 octobre porte sur les réclamations clients du troisième trimestre. Vous disposez du registre de quatorze réclamations, saisies au fil de l’eau, et il faut en tirer une synthèse d’une page pour la direction et la production.',
    objectif:
      'Synthétiser des réclamations en gardant les chiffres exacts, faire émerger les lots et les clients récurrents, et séparer faits, hypothèses et décisions à prendre.',
    etapes: [
      'Collez le registre du matériau avec le prompt de départ.',
      'Vérifiez le comptage par motif et par mois : les totaux doivent faire 14.',
      'Lisez les récurrences repérées (lots, clients) et cherchez dans le registre la ligne qui les prouve.',
      'Faites distinguer ce qui est constaté, ce qui reste à comprendre et ce qui est à décider en réunion.',
      'Demandez une synthèse d’une page à destination de la direction, puis une version en cinq points pour la production.',
    ],
    prompt:
      'Tu es responsable qualité d’une biscuiterie à Bourail. Voici le registre des réclamations clients du 3e trimestre 2026 (une ligne par réclamation, séparateur : barre verticale).\n\n<registre>\n[collez le registre ici]\n</registre>\n\nRédige une synthèse d’une page pour la réunion qualité du 5 octobre avec : 1) le nombre de réclamations par motif et par mois, 2) les récurrences (lots, clients), 3) l’état des réclamations (ouvertes, clôturées), 4) ce qui est constaté, ce qui reste à comprendre, ce qui est à décider. Cite le numéro de la réclamation (R01…) à chaque affirmation. N’affirme aucune cause et ne conclus pas sur un risque pour la santé : signale seulement que le sujet doit être examiné par le responsable.',
    materiau: {
      titre: 'Registre des réclamations, juillet à septembre 2026 (fictif)',
      texte:
        'R01 | 03/07 | Supermarché Nouméa | Emballage | Sachets mal soudés, biscuits brisés, lot 0712 | Clôturée\nR02 | 09/07 | Snack Païta | Livraison | Livrée avec un jour de retard | Clôturée\nR03 | 15/07 | Supermarché Dumbéa | Emballage | Sachets mal soudés, lot 0712 | Clôturée\nR04 | 22/07 | Restaurant Koné | Quantité | 2 cartons manquants sur 10 | Clôturée\nR05 | 29/07 | Supermarché Nouméa | Goût | Goût de rance signalé, lot 0725 | Ouverte\nR06 | 05/08 | Épicerie Bourail | Date | Date limite jugée trop courte par le client à la livraison | Clôturée\nR07 | 12/08 | Supermarché Nouméa | Emballage | Carton écrasé, 4 paquets abîmés | Clôturée\nR08 | 19/08 | Snack Païta | Livraison | Retard de 2 jours | Clôturée\nR09 | 26/08 | Supermarché Dumbéa | Goût | Goût de rance signalé, lot 0725 | Ouverte\nR10 | 02/09 | Restaurant Koné | Livraison | Livrée à la mauvaise adresse | Clôturée\nR11 | 09/09 | Supermarché Nouméa | Goût | Goût de rance signalé, lot 0725 | Ouverte\nR12 | 16/09 | Épicerie Bourail | Quantité | 1 carton manquant sur 6 | Clôturée\nR13 | 23/09 | Supermarché Dumbéa | Emballage | Sachets mal soudés, lot 0905 | Ouverte\nR14 | 30/09 | Snack Païta | Livraison | Retard d’un jour | Clôturée',
    },
    variantes: {
      simple:
        'Demander seulement le comptage par motif et la liste des réclamations encore ouvertes.',
      poussee:
        'Ajouter le registre du trimestre précédent (à fournir) et faire comparer les deux trimestres, puis rédiger les trois décisions à soumettre à la direction.',
    },
    astuces: {
      copilot:
        'Dans Copilot Chat, joignez le registre et demandez de citer les numéros de réclamation ; « Résumer » dans Outlook condense ensuite le fil d’échanges avec la production.',
      chatgpt:
        'Joignez le registre en fichier CSV : avec l’analyse de données, ChatGPT compte, puis précisez la longueur et le public de la synthèse.',
      gemini:
        'Joignez le registre ou collez-le, et précisez le public et la longueur ; relisez les chiffres avant de reprendre la synthèse.',
    },
    vigilance:
      'Un vrai registre contient des noms de clients et de contacts : gardez le type de client, retirez le reste. Un goût anormal sur un produit alimentaire se traite avec le responsable qualité et les autorités compétentes, pas dans une synthèse rédigée par l’IA.',
    formateur: {
      resultat:
        'Une synthèse d’une page avec les comptages exacts (14 réclamations ; emballage 4, livraison 4, goût 3, quantité 2, date 1 ; juillet 5, août 4, septembre 5 ; 4 ouvertes et 10 clôturées), les récurrences citées avec leurs numéros (lot 0725 : R05, R09, R11 ; lot 0712 : R01, R03 ; retards au snack de Païta : R02, R08, R14) et une liste de décisions à prendre.',
      criteres: [
        'Les totaux par motif et par mois sont corrects (14 au total).',
        'Le lot 0725, avec trois réclamations « goût » encore ouvertes, est mis en avant comme sujet à examiner.',
        'Chaque affirmation renvoie à un numéro de réclamation.',
        'Faits, hypothèses et décisions à prendre sont séparés.',
      ],
      pieges: [
        'Affirmer une cause (mauvais stockage, défaut de soudeuse) qui ne figure pas dans le registre.',
        'Classer le goût de rance parmi les « petites » réclamations parce que les chiffres sont faibles.',
        'Un comptage faux qui fait disparaître la récurrence du lot 0725.',
      ],
      competence: 'discernement',
      technique: 'sources',
    },
    motsCles: ['réclamations', 'synthèse', 'revue qualité', 'lots', 'biscuiterie'],
  },
  {
    id: 'qse-cinq-pourquoi-actions-correctives',
    titre: 'Construire un plan d’actions correctives en cherchant la cause racine',
    metier: 'qualite',
    niveau: 'avance',
    famille: 'organiser',
    duree: 45,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Vous êtes animateur qualité, sécurité et environnement d’une entreprise de terrassement du Mont-Dore. Le 14 octobre, une pelle hydraulique a fui sur le chantier : de l’huile s’est répandue sur environ trois mètres carrés de sol. Le sol a été traité, mais le chef d’entreprise veut un plan d’actions qui évite que cela recommence.',
    objectif:
      'Utiliser l’IA comme partenaire de questionnement pour une analyse des cinq pourquoi, séparer faits et hypothèses, puis bâtir un plan d’actions avec pilotes, échéances et indicateurs d’efficacité que vous seul fixez.',
    etapes: [
      'Lisez les éléments du matériau et séparez, dans deux colonnes, les faits établis et les hypothèses.',
      'Envoyez le prompt de départ : l’IA pose ses questions une à une et attend vos réponses, sans répondre à votre place.',
      'Menez les cinq pourquoi en vous arrêtant à chaque « parce que » : demandez de quelle preuve vous disposez, ou ce qu’il faut vérifier sur le terrain.',
      'Arrêtez la chaîne quand la cause est une défaillance d’organisation ou de règle, pas une personne : refusez « erreur de l’opérateur » comme cause racine.',
      'Faites construire le tableau d’actions (action, cause visée, pilote, échéance, indicateur d’efficacité) en y laissant « à désigner » et « à fixer » : le choix des personnes et des dates est le vôtre.',
      'Demandez la liste des actions préventives à vérifier sur les autres engins, puis un message de restitution à la direction.',
    ],
    prompt:
      'Tu es un animateur qualité-sécurité-environnement expérimenté et tu m’accompagnes dans une analyse par la méthode des cinq pourquoi, après la fuite d’huile d’une pelle hydraulique sur un chantier du Mont-Dore. Voici les éléments connus. Procède ainsi :\n1. Classe d’abord les éléments en faits établis et en hypothèses, sans rien ajouter.\n2. Pose-moi UNE question « pourquoi » à la fois et attends ma réponse avant de poser la suivante. Si ma réponse est une hypothèse, demande-moi quelle preuve je peux obtenir.\n3. N’invente aucune cause. Si je cite une personne comme cause, aide-moi à chercher ce qui, dans l’organisation ou les règles, a rendu l’erreur possible.\n4. Quand la chaîne est terminée, propose un tableau d’actions : action, cause visée, pilote [à désigner], échéance [à fixer], indicateur pour vérifier l’efficacité.\n\n<elements>\n[collez les éléments ici]\n</elements>',
    materiau: {
      titre: 'Éléments connus sur la fuite du 14 octobre (fictifs)',
      texte:
        'Chantier : terrassement d’un lotissement, Mont-Dore. Engin : pelle hydraulique de 20 tonnes, achetée d’occasion il y a deux ans.\nLe 14 octobre, 9 h 20 : le conducteur voit de l’huile couler sous la pelle ; il arrête l’engin et prévient le chef de chantier.\nConstat : un flexible hydraulique du bras est fendu à proximité d’un raccord ; environ trois mètres carrés de sol souillés.\nMesures prises : engin arrêté, sol traité avec du matériau absorbant puis évacué dans un big-bag, chantier signalé à la direction.\nLe kit antipollution n’était pas dans la cabine : il avait été prêté à un autre chantier la semaine précédente. Le conducteur a utilisé des sacs de sable et un seau.\nLe 22 septembre, lors d’une inspection des engins, le flexible avait été noté « usure à surveiller » sur la fiche ; aucune date de remplacement n’avait été fixée.\nL’entretien périodique de la pelle (prévu début octobre) a été reporté de trois semaines : une pièce est en rupture chez le fournisseur.\nHypothèses évoquées dans l’équipe : « le conducteur n’a pas regardé le flexible », « la pelle est trop vieille », « le fournisseur est trop lent ».\nLe chef de chantier ne sait pas si la fiche d’inspection du 22 septembre a été transmise au responsable du matériel.',
    },
    variantes: {
      simple: 'Se limiter aux trois premiers « pourquoi » et à deux actions.',
      poussee:
        'Ajouter une vérification d’efficacité à trois mois : les indicateurs à relever, un tableau de suivi et le message de relance à envoyer aux pilotes d’actions en retard.',
    },
    astuces: {
      claude:
        'Avec la création de fichiers, demandez le plan d’actions en fichier Excel, avec une colonne « statut » à tenir à jour chaque semaine.',
      chatgpt:
        'Travaillez dans un Projet : l’analyse, les preuves et le plan restent ensemble, et vous reprenez le fil lors du suivi.',
      copilot:
        'Transformez le plan en Copilot Page (compte professionnel) : chaque pilote y voit ses actions et ses échéances.',
      gemini:
        'Exportez le tableau dans Google Sheets : l’équipe y met à jour le statut de chaque action.',
    },
    vigilance:
      'N’écrivez pas de nom de personne dans l’analyse : cherchez la cause dans l’organisation. L’IA propose des questions et des actions ; l’évaluation du risque, le choix des priorités et la déclaration éventuelle de l’événement à une autorité relèvent d’un responsable compétent, à vérifier dans les textes officiels.',
    formateur: {
      resultat:
        'Une chaîne des cinq pourquoi où chaque cause est reliée à une preuve ou à une vérification à faire (suivi d’un point « à surveiller » sans échéance, circulation de la fiche d’inspection, gestion du kit antipollution prêté, report d’entretien lié à une rupture de pièce), et un tableau d’actions avec pilotes et échéances laissés à l’apprenant.',
      criteres: [
        'Faits et hypothèses sont séparés avant le premier « pourquoi ».',
        'L’IA pose les questions une à une ; l’apprenant répond et demande les preuves.',
        'La chaîne s’arrête sur une cause d’organisation, pas sur « erreur du conducteur ».',
        'Chaque action vise une cause précise et a un indicateur d’efficacité ; pilotes et dates sont décidés par l’apprenant.',
        'Les actions préventives sur les autres engins sont listées.',
      ],
      pieges: [
        'Accepter « le conducteur n’a pas regardé le flexible » comme cause racine.',
        'Laisser l’IA inventer une cause plausible (ancienneté de la pelle) sans preuve.',
        'Un plan d’actions « sensibiliser les équipes » sans pilote, sans échéance, sans indicateur.',
        'Laisser l’IA décider si l’événement doit être déclaré à une autorité.',
      ],
      competence: 'delegation',
      technique: 'decomposer',
    },
    motsCles: ['cinq pourquoi', 'cause racine', 'actions correctives', 'pollution', 'chantier'],
  },
  {
    id: 'qse-veille-reglementaire-sources-officielles',
    titre: 'Organiser une veille réglementaire vérifiée dans les sources officielles',
    metier: 'qualite',
    niveau: 'avance',
    famille: 'veiller',
    duree: 45,
    outils: ['chatgpt', 'claude', 'gemini', 'copilot'],
    outilConseille: 'chatgpt',
    situation:
      'Vous êtes référent qualité, sécurité et environnement d’une clinique de Koné. La direction veut être prévenue quand un texte touche l’établissement : déchets, produits chimiques, sécurité au travail, incendie. Vous voulez un point de veille chaque semaine, mais pas n’importe quelle information : un texte cité doit pouvoir être ouvert à sa source officielle avant d’être diffusé.',
    objectif:
      'Mettre en place une veille hebdomadaire avec l’IA, régler le format du registre, vérifier chaque texte à la source officielle et distinguer ce qui informe de ce qui oblige à agir.',
    etapes: [
      'Listez avec votre direction les cinq sujets à surveiller et les sources officielles à utiliser (Journal officiel, sites des provinces, de l’inspection du travail…).',
      'Testez le prompt de départ une première fois, à la main, avec la recherche web de votre outil.',
      'Ouvrez chaque lien cité : une date, un titre ou un numéro de texte non retrouvé à la source est une erreur de l’IA.',
      'Remplissez le registre de veille avec les textes confirmés : texte, source, date, ce que cela change pour la clinique, pilote [à désigner].',
      'Programmez la veille chaque lundi, avec un format fixe, et testez-la deux semaines avant d’en faire un rendez-vous de l’équipe.',
      'Prévoyez une règle : un texte est diffusé à la direction seulement après vérification par une personne.',
    ],
    prompt:
      'Tu es un assistant de veille pour le référent qualité, sécurité et environnement d’une clinique en Nouvelle-Calédonie. Chaque lundi, cherche les textes et publications officiels récents (moins de 30 jours) sur ces sujets : [indiquez les cinq sujets]. Utilise uniquement les sources suivantes : [indiquez les sources officielles].\n\nPour chaque résultat, remplis une ligne de tableau : intitulé exact du texte ou de la publication, date, source (nom du site et lien), ce que cela change pour une clinique en une phrase, niveau de certitude (confirmé à la source, à vérifier). N’indique jamais un texte dont tu n’as pas ouvert la source ; si tu ne trouves rien de nouveau, écris « rien à signaler ». N’interprète pas l’obligation juridique : écris « à faire confirmer par un responsable ».',
    materiau: {
      titre: 'Registre de veille à remplir (modèle)',
      texte:
        'Date de la veille;Sujet;Intitulé exact du texte;Date de publication;Source (site et lien);Ce que cela change pour la clinique;Certitude (confirmé ou à vérifier);Vérifié par (nom) et le (date);Pilote de l’action [à désigner]\n[lundi];[déchets];[…];[…];[…];[…];[…];[…];[…]\n\nRègle de diffusion : aucune ligne n’est transmise à la direction tant que la colonne « Vérifié par » est vide.',
    },
    variantes: {
      simple: 'Ne surveiller qu’un sujet (les déchets) et lancer la recherche à la main une fois.',
      poussee:
        'Ajouter un second point de veille mensuel sur les publications des organismes de prévention, et un tableau de bord des textes vérifiés et des actions ouvertes.',
    },
    astuces: {
      chatgpt:
        'La recherche approfondie donne un rapport sourcé ; une tâche planifiée (payante) relance la veille chaque lundi. Ouvrez les liens avant de diffuser.',
      claude:
        'La recherche web cite les pages utilisées ; la fonction Recherche (payante) rend un rapport plus complet. Dans les deux cas, ouvrez chaque source.',
      gemini:
        'Lancez Deep Research (limité en gratuit), puis exportez le rapport dans Google Docs pour annoter ; Programmer des actions (selon l’offre) relance une veille.',
      copilot:
        'Copilot Chat cite les pages web utilisées : demandez le lien de chaque affirmation, puis transformez le tableau en Copilot Page (compte professionnel).',
    },
    vigilance:
      'L’IA peut citer un texte qui n’existe pas, ou en attribuer la date à un autre. Elle n’interprète pas la loi : seule la personne compétente dit si un texte oblige l’établissement à agir. Ne donnez à l’outil aucune donnée sur les patients ni sur le personnel.',
    formateur: {
      resultat:
        'Un registre de veille rempli avec des textes ouverts et vérifiés à leur source officielle, des lignes « à vérifier » conservées telles quelles, une tâche planifiée testée deux semaines et une règle de diffusion respectée.',
      criteres: [
        'Chaque ligne du registre pointe vers une source officielle que l’apprenant a ouverte.',
        'Les textes non retrouvés ou douteux sont marqués « à vérifier », pas diffusés.',
        'Le prompt interdit d’interpréter l’obligation juridique.',
        'La veille est programmée avec un format fixe et a été testée.',
      ],
      pieges: [
        'Diffuser à la direction un intitulé ou une date de texte donnés par l’IA sans les avoir vus à la source.',
        'Laisser l’IA résumer « ce que la loi impose à la clinique » sans confirmation.',
        'Une veille qui se remplit de textes anciens ou sans rapport avec l’activité.',
      ],
      competence: 'diligence',
      technique: 'sources',
    },
    motsCles: [
      'veille réglementaire',
      'sources officielles',
      'registre',
      'tâche planifiée',
      'clinique',
    ],
  },
  {
    id: 'qse-revue-direction-carnet-notebook',
    titre: 'Préparer la revue de direction avec un carnet Gemini Notebook',
    metier: 'qualite',
    niveau: 'avance',
    famille: 'synthetiser',
    duree: 45,
    outils: ['notebook', 'claude'],
    outilConseille: 'notebook',
    situation:
      'Vous êtes responsable qualité, sécurité et environnement d’une société de transport de marchandises à Ducos. La revue de direction a lieu dans trois semaines : le gérant attend une synthèse de l’année. Les éléments sont dispersés : rapports d’audits internes, comptes rendus de revues qualité mensuelles, bilan des accidents, résultats de l’enquête de satisfaction, suivi des actions.',
    objectif:
      'Exploiter un corpus de documents avec Gemini Notebook pour préparer la revue : synthèse sourcée, questions à poser aux sources, et repérage de ce qui n’est documenté nulle part.',
    etapes: [
      'Rassemblez 6 à 10 documents de l’année, sans nom de salarié ni de client, et notez ce que votre référentiel demande de présenter en revue de direction. En formation, faites rédiger par l’IA des versions fictives et courtes des sept documents listés dans le matériau, sans y mentionner de budget de formation.',
      'Créez un carnet dans Gemini Notebook et ajoutez-les comme sources.',
      'Envoyez le prompt de départ en complétant les rubriques attendues par votre référentiel, puis générez un rapport de type synthèse.',
      'Posez les cinq questions du matériau et ouvrez chaque citation : une affirmation sans passage correspondant est à écarter.',
      'Pour chaque question sans réponse, complétez vos documents plutôt que de laisser l’outil deviner.',
      'Partagez le carnet avec le gérant avant la revue, et préparez les trois décisions que vous lui demanderez de prendre.',
    ],
    prompt:
      'À partir uniquement des sources de ce carnet, rédige une synthèse intitulée « Préparation de la revue de direction » pour le gérant d’une société de transport. Organise-la ainsi : 1) résultats des audits internes de l’année, 2) évolution des indicateurs qualité, sécurité et environnement, 3) état d’avancement des actions correctives, 4) réclamations et satisfaction des clients, 5) pistes d’amélioration et décisions à prendre. [Ajoutez ici les rubriques que votre référentiel exige.] Cite la source de chaque affirmation. Si une rubrique n’est documentée dans aucune source, écris-le dans une liste « Non documenté » sans la compléter. Ne tire aucune conclusion sur la conformité de l’entreprise à un référentiel.',
    materiau: {
      titre: 'Documents à charger et questions de test',
      texte:
        'Sources à charger (versions anonymisées) : 1) rapport d’audit interne du processus « livraison » ; 2) rapport d’audit interne du processus « maintenance des véhicules » ; 3) comptes rendus des revues qualité de janvier à octobre ; 4) bilan annuel des accidents et presqu’accidents ; 5) résultats de l’enquête de satisfaction clients ; 6) tableau de suivi des actions correctives ; 7) bilan des consommations de carburant.\n\nQuestions à poser au carnet :\n1. Quels écarts ont été relevés lors des deux audits internes, et lesquels sont déjà soldés ?\n2. Quelles actions correctives sont ouvertes depuis plus de trois mois ?\n3. Comment le nombre d’accidents a-t-il évolué par rapport à l’an dernier ?\n4. Que disent les clients de la ponctualité des livraisons ?\n5. Quel budget a été décidé pour la formation à la conduite préventive ?',
    },
    variantes: {
      simple:
        'Charger trois documents (audits et tableau des actions) et générer seulement la synthèse.',
      poussee:
        'Générer en plus une carte mentale des sources pour bâtir le plan de la présentation, et un résumé audio à écouter avant la revue.',
    },
    astuces: {
      notebook:
        'Les rapports citent leurs sources : cliquez sur chaque numéro pour relire le passage avant de reprendre un chiffre dans la synthèse.',
      claude:
        'Pour comparer, déposez les mêmes documents dans un Projet et posez les cinq questions : notez les écarts entre les deux outils.',
    },
    vigilance:
      'Les rapports d’audit et les résultats d’accidents sont confidentiels : n’ajoutez que des documents anonymisés et que vous avez le droit de partager. Le carnet synthétise, il ne conclut pas sur la conformité : la décision appartient à la direction.',
    formateur: {
      resultat:
        'Un carnet partagé, une synthèse en cinq rubriques dont chaque point renvoie à une citation vérifiée, une liste « Non documenté » (la question 5 reste sans réponse, comme il se doit) et trois décisions préparées pour la revue.',
      criteres: [
        'Chaque chiffre et chaque écart de la synthèse renvoie à un passage d’une source, ouvert par l’apprenant.',
        'La question 5 est identifiée comme sans réponse dans les sources.',
        'Aucun nom de salarié, de client ou donnée de santé ne figure dans les sources.',
        'Les décisions à prendre sont formulées pour le gérant, sans conclusion de conformité.',
      ],
      pieges: [
        'Accepter une réponse sans ouvrir la citation, alors qu’elle mélange deux audits.',
        'Compléter soi-même la question sans réponse avec un budget supposé.',
        'Ajouter des rapports d’accident nominatifs « pour que ce soit complet ».',
      ],
      competence: 'diligence',
      technique: 'sources',
    },
    motsCles: ['revue de direction', 'Gemini Notebook', 'audits', 'indicateurs', 'synthèse'],
  },
  {
    id: 'qse-tableau-de-bord-indicateurs-qse',
    titre: 'Construire le tableau de bord mensuel des indicateurs qualité, sécurité, environnement',
    metier: 'qualite',
    niveau: 'avance',
    famille: 'analyser',
    duree: 45,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Vous êtes animateur qualité, sécurité et environnement d’une menuiserie industrielle de Dumbéa. Chaque mois, le gérant demande où en sont les non-conformités, les accidents et le tri des déchets, mais les chiffres sont dans des fichiers différents. Vous venez de les regrouper sur douze mois et vous voulez un tableau de bord réutilisable.',
    objectif:
      'Faire calculer et présenter des indicateurs à partir d’un fichier, contrôler les calculs et les définitions, et repérer les données manquantes avant de produire le tableau de bord.',
    etapes: [
      'Collez le tableau du matériau, ou joignez-le en fichier CSV, avec le prompt de départ.',
      'Demandez d’abord la liste des indicateurs calculables, leur formule et les données manquantes, avant tout calcul.',
      'Faites calculer les indicateurs mois par mois et pour l’année, puis refaites deux calculs à la main.',
      'Repérez la donnée manquante (août) : décidez comment la traiter sans laisser l’IA l’inventer.',
      'Demandez un tableau de bord d’une page : trois chiffres clés, trois graphiques simples, trois points d’attention.',
      'Faites écrire le mode d’emploi du mois suivant : quelles données ajouter, dans quel ordre, quels contrôles faire avant de présenter.',
    ],
    prompt:
      'Tu es animateur qualité, sécurité et environnement dans une menuiserie industrielle de Nouvelle-Calédonie. Voici les données mensuelles de novembre 2025 à octobre 2026 (séparateur : point-virgule).\n\n<donnees>\n[collez le tableau ici]\n</donnees>\n\nÉtape 1 : liste les indicateurs que ces données permettent de calculer, avec la formule exacte de chacun, et signale les données manquantes ou douteuses. Ne calcule encore rien.\nÉtape 2 : une fois ma validation, calcule avec les définitions retenues par notre entreprise, que je fais valider par ailleurs : le ratio de clôture (clôturées ÷ ouvertes), le taux de fréquence (accidents avec arrêt × 1 000 000 ÷ heures travaillées) et le taux de tri (déchets valorisés ÷ déchets totaux), par mois et sur l’année. Ne présente pas ces formules comme des définitions officielles. Ne remplace jamais une valeur manquante : exclus le mois concerné du calcul concerné et dis-le. Montre tes calculs.',
    materiau: {
      titre: 'Données mensuelles de novembre 2025 à octobre 2026 (fictives)',
      texte:
        'Mois;NC ouvertes;NC clôturées;Accidents avec arrêt;Heures travaillées;Déchets totaux (kg);Déchets valorisés (kg);Électricité (kWh)\n2025-11;12;9;0;5200;3100;1240;41200\n2025-12;15;11;1;5600;3600;1260;46800\n2026-01;10;12;0;5400;3300;1320;48900\n2026-02;9;8;0;5000;3000;1350;49500\n2026-03;14;10;1;5500;3200;1600;47300\n2026-04;11;11;0;5300;3000;1650;44100\n2026-05;8;10;0;5100;2800;1680;40800\n2026-06;13;9;0;5200;2900;1740;39500\n2026-07;10;10;1;5600;3400;1700;40100\n2026-08;9;12;0;5500;3500;;41900\n2026-09;7;7;0;5300;3100;1860;43000\n2026-10;11;8;0;5400;3200;1920;45600',
    },
    variantes: {
      simple:
        'Ne calculer qu’un seul indicateur, le ratio de clôture, et le présenter en un graphique.',
      poussee:
        'Faire produire un fichier Excel réutilisable avec formules, mise en forme conditionnelle et une feuille de saisie pour les mois suivants, puis un message de présentation de dix lignes pour le gérant.',
    },
    astuces: {
      chatgpt:
        'Avec l’analyse de données, joignez le fichier CSV : ChatGPT calcule et trace les graphiques ; contrôlez un total à la main.',
      claude:
        'Déposez le fichier : Claude calcule, trace un graphique et peut rendre un fichier Excel avec les formules.',
      copilot:
        'Dans Excel, Copilot (selon la licence) ajoute les colonnes calculées : mettez d’abord les données sous forme de tableau et vérifiez chaque formule.',
      gemini:
        'Dans Google Sheets, « Demander à Gemini » propose les formules et explique une tendance ; vérifiez-les sur deux lignes.',
    },
    vigilance:
      'Les définitions des indicateurs (taux de fréquence, taux de clôture) sont celles de votre entreprise ou de votre référentiel : faites-les valider avant de comparer à d’autres sites. Des chiffres d’accidents réels sont sensibles : travaillez sur des données agrégées.',
    formateur: {
      resultat:
        'Les indicateurs calculés avec les formules de l’entreprise (convention maison, à faire valider) : ratio de clôture annuel 117 ÷ 129 soit 90,7 % ; taux de fréquence 3 × 1 000 000 ÷ 64 100 soit 46,8 ; taux de tri 17 320 ÷ 34 600 soit 50,1 % sur onze mois, août exclu faute de valeur. La donnée manquante est signalée, pas inventée.',
      criteres: [
        'Les formules sont validées avant les calculs.',
        'Les totaux sont exacts : 129 ouvertes, 117 clôturées, 3 accidents, 64 100 heures.',
        'Le taux de tri exclut août et l’IA le dit : 50,1 % sur onze mois (17 320 ÷ 34 600).',
        'Deux calculs ont été refaits à la main par l’apprenant.',
        'Le mode d’emploi du mois suivant liste les contrôles à faire avant présentation.',
      ],
      pieges: [
        'Laisser l’IA remplacer la valeur manquante d’août par une moyenne ou un zéro.',
        'Calculer le taux de tri sur douze mois en comptant août à zéro (le taux tombe à 45,5 %).',
        'Présenter le ratio de clôture comme une performance sans noter qu’il compare des flux de mois différents.',
        'Comparer le taux de fréquence à celui d’un autre site sans vérifier les définitions.',
      ],
      competence: 'discernement',
      technique: 'decomposer',
    },
    motsCles: [
      'tableau de bord',
      'indicateurs',
      'taux de fréquence',
      'CSV',
      'déchets',
      'non-conformités',
    ],
  },
];
