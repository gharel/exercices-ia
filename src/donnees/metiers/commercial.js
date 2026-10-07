/**
 * Commercial et vente aux professionnels (B2B) : prospection, devis, négociation, suivi
 * des clients. Les exercices suivent surtout une société fictive de climatisation et de
 * froid de Nouméa. Toutes les personnes, entreprises et sommes sont fictives.
 */

export const vocabulaire = {
  structure: {
    g: 'f',
    s: 'société de distribution de matériel professionnel',
    p: 'sociétés de distribution de matériel professionnel',
  },
  client: { g: 'm', s: 'client professionnel', p: 'clients professionnels' },
  partenaire: { g: 'm', s: 'fabricant partenaire', p: 'fabricants partenaires' },
  documentCourant: { g: 'm', s: 'devis', p: 'devis' },
  documentLong: { g: 'm', s: 'contrat-cadre de maintenance', p: 'contrats-cadres de maintenance' },
  reunion: { g: 'f', s: 'réunion commerciale mensuelle', p: 'réunions commerciales mensuelles' },
  offre: {
    g: 'm',
    s: 'contrat d’entretien annuel des climatiseurs de bureaux',
    p: 'contrats d’entretien annuel des climatiseurs de bureaux',
  },
  poste: { g: 'm', s: 'technico-commercial', p: 'technico-commerciaux' },
  evenement: {
    g: 'm',
    s: 'petit-déjeuner de présentation de la nouvelle gamme',
    p: 'petits-déjeuners de présentation de la nouvelle gamme',
  },
  visuel: { g: 'f', s: 'plaquette commerciale', p: 'plaquettes commerciales' },
  domaine: 'la vente d’équipements aux professionnels',
  motifReclamation: 'une livraison incomplète et un écart de prix entre le devis et la facture',
  donnees: 'le chiffre d’affaires de l’année, client par client, avec le commercial responsable',
  colonnes: 'Client;Secteur;Commercial;CA N-1 (XPF HT);CA N (XPF HT);Nombre de commandes',
  indicateur: 'l’évolution du chiffre d’affaires par client d’une année sur l’autre',
  veille: 'les appels d’offres publics et les projets d’équipement des entreprises calédoniennes',
  sourcesVeille:
    'les avis d’appels d’offres publiés par les collectivités, la presse économique locale et les publications de la CCI',
  jargon: 'les conditions de garantie, de maintenance et de reprise du matériel',
  procedure: 'le passage d’un devis accepté à la commande et à la livraison',
  situationTendue: 'un acheteur qui exige 15 % de remise en menaçant de passer chez un concurrent',
  donneesSensibles:
    'les coordonnées des contacts, les conditions tarifaires négociées et l’historique des commandes des clients',
  corpus:
    'les fiches techniques des produits, les conditions générales de vente et les grilles tarifaires',
  publicCible: 'les gérants de PME et les services achats des entreprises du Grand Nouméa',
  etranger: 'un acheteur australien d’une société minière installée dans le Nord',
  themeFormation: 'la gamme de produits et la politique de remise de l’entreprise',
  tacheRepetitive: 'la préparation du point hebdomadaire des ventes pour la direction',
  planning: 'la tournée de visites de la semaine chez les clients du Grand Nouméa et du Nord',
  comparaison: 'deux logiciels de gestion de la relation client',
};

export const exercices = [
  {
    id: 'vente-email-prospection',
    titre: 'Rédiger un e-mail de prospection personnalisé',
    metier: 'commercial',
    niveau: 'debutant',
    famille: 'rediger',
    duree: 15,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'copilot',
    situation:
      'Vous êtes commercial dans une société de Nouméa qui installe et entretient des climatiseurs pour les entreprises. Vous avez appris qu’un cabinet d’expertise comptable de 25 personnes déménage en janvier dans un immeuble neuf de Ducos. Vous voulez obtenir un rendez-vous.',
    objectif:
      'Obtenir un e-mail court et personnalisé en donnant à l’IA la situation du prospect, l’objectif et les contraintes de ton et de longueur.',
    etapes: [
      'Copiez les informations du matériau avec le prompt de départ.',
      'Lisez l’e-mail obtenu : est-il centré sur la situation du prospect ou sur votre entreprise ?',
      'Vérifiez qu’il ne cite aucun client sans accord et ne présente pas comme certaine une information à confirmer.',
      'Demandez trois objets d’e-mail différents et choisissez-en un.',
      'Demandez une version de 80 mots et comparez-la avec la première.',
    ],
    prompt:
      'Tu es commercial dans une société de Nouméa qui installe et entretient des climatiseurs pour les entreprises. Rédige un e-mail de prospection à la responsable administrative d’un cabinet comptable qui déménage à Ducos en janvier. Objectif : obtenir un rendez-vous de 30 minutes pour une étude gratuite des besoins. Contraintes : 120 mots au maximum, vouvoiement, une seule demande claire, aucun superlatif. Pars de sa situation (le déménagement), pas de notre catalogue. N’utilise que les informations ci-dessous et ne cite aucun client.\n\n<informations>\n[collez les informations ici]\n</informations>',
    materiau: {
      titre: 'Ce que vous savez du prospect',
      texte:
        '- Cabinet d’expertise comptable, 25 salariés, aujourd’hui au centre-ville\n- Déménagement prévu en janvier dans un immeuble neuf à Ducos (article de la presse locale)\n- Contact : la responsable administrative, [prénom et nom à compléter]\n- Les bureaux neufs seraient livrés sans climatisation (information de l’agent immobilier, à confirmer)\n- Notre offre : étude gratuite des besoins, installation, contrat d’entretien annuel, dépannage sous 24 h ouvrées dans le Grand Nouméa\n- Nous équipons deux autres cabinets comptables (accord écrit pour les citer : non)',
    },
    variantes: {
      simple: 'Se contenter de l’e-mail, sans variantes d’objet ni version courte.',
      poussee:
        'Préparer aussi le message de relance à J+7 et le texte d’un appel téléphonique de 30 secondes sur le même angle.',
    },
    astuces: {
      copilot:
        'Dans Outlook, « Brouillon avec Copilot » propose un premier jet ; « Coaching par Copilot » commente ensuite le ton avant l’envoi.',
      gemini:
        'Dans Gmail, « Aide-moi à écrire » propose un premier jet, que vous raccourcissez ensuite d’un clic.',
    },
    vigilance:
      'Ne présentez pas comme un fait une information à confirmer. Ne citez un client comme référence qu’avec son accord écrit, et vérifiez les règles qui encadrent la prospection par e-mail auprès des professionnels.',
    formateur: {
      resultat:
        'Un e-mail de 120 mots au plus, qui part du déménagement, propose un rendez-vous de 30 minutes, ne cite aucun client, évoque la climatisation des nouveaux locaux sous forme de question, avec un objet court et concret.',
      criteres: [
        'L’e-mail parle d’abord de la situation du prospect.',
        'Une seule demande : le rendez-vous.',
        'Aucun client cité, aucune remise ni promesse inventée.',
        'L’information « à confirmer » est formulée comme une question.',
      ],
      pieges: [
        'Garder une phrase comme « comme deux autres cabinets comptables de la place » alors que l’accord n’existe pas.',
        'Accepter une promesse non prévue (remise de lancement, installation offerte, intervention en 4 h).',
      ],
      competence: 'description',
      technique: 'contexte',
    },
    motsCles: ['prospection', 'e-mail', 'rendez-vous', 'personnalisation'],
  },
  {
    id: 'vente-relance-devis',
    titre: 'Reformuler une relance après devis trop insistante',
    metier: 'commercial',
    niveau: 'debutant',
    famille: 'corriger',
    duree: 10,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'copilot',
    situation:
      'Il y a trois semaines, votre collègue a envoyé un devis de 1 860 000 XPF HT à un hôtel de Bourail pour le remplacement de douze climatiseurs. Aucune réponse. Il a préparé une relance, mais elle est maladroite et risque de braquer le directeur de l’hôtel.',
    objectif:
      'Faire reformuler un message commercial en fixant l’objectif, le ton et ce qui ne doit pas changer.',
    etapes: [
      'Copiez la relance du matériau avec le prompt de départ.',
      'Vérifiez que la date du devis et l’échéance du 1er novembre sont conservées, sans condition nouvelle.',
      'Demandez à l’IA ce qui pouvait braquer le client dans la version d’origine.',
      'Demandez deux variantes : une très courte, une qui propose un appel de 10 minutes.',
      'Choisissez la version que vous enverriez et justifiez votre choix.',
    ],
    prompt:
      'Tu es commercial dans une société de climatisation à Nouméa. Reformule la relance ci-dessous, destinée au directeur d’un hôtel de Bourail. Objectif : obtenir une réponse, même négative, sans pression. Garde la date du devis et l’information sur la hausse des prix au 1er novembre, formulée de façon factuelle. N’ajoute ni remise ni nouvelle condition. 100 mots au maximum, vouvoiement, sans faute. Propose aussi un objet d’e-mail. Donne ensuite la liste des changements.\n\n<relance>\n[collez la relance ici]\n</relance>',
    materiau: {
      titre: 'Relance préparée par votre collègue',
      texte:
        'Objet : URGENT devis climatisation\n\nBonjour,\n\nJe me permet de vous relancer car je n’ai toujours pas eu de retour sur notre devis du 15 septembre alors que je vous ai déjà appelé deux fois. Comme je vous l’avais dit les prix vont augmenter au 1er novembre a cause du fret donc il faudrait vous décider rapidement. Si vous avez signer avec un concurrent merci de me le dire pour que je ne perde pas mon temps.\n\nCordialement\nKevin',
    },
    variantes: {
      simple: 'Se limiter à la correction des fautes et au retrait de « URGENT ».',
      poussee:
        'Écrire aussi le script d’un appel de relance de deux minutes, avec deux questions ouvertes pour comprendre le silence du client.',
    },
    astuces: {
      copilot:
        'Dans Outlook, lancez « Coaching par Copilot » sur la version d’origine, puis sur la vôtre : comparez ses commentaires.',
      chatgpt:
        'Dans le canevas, sélectionnez la dernière phrase et demandez seulement de la reformuler.',
    },
    vigilance:
      'Avant d’annoncer une hausse de prix, vérifiez qu’elle est confirmée par votre direction : l’IA reformule ce que vous lui donnez, elle ne vérifie rien.',
    formateur: {
      resultat:
        'Une relance courte et courtoise qui rappelle le devis du 15 septembre, mentionne factuellement la hausse prévue au 1er novembre, propose un échange et laisse au client la possibilité de dire non.',
      criteres: [
        'La date du devis et l’échéance du 1er novembre sont conservées.',
        'Le reproche sur les appels et la phrase sur le concurrent ont disparu ou sont transformés.',
        'Aucune remise ni condition nouvelle.',
      ],
      pieges: [
        'Accepter une version qui offre une remise « pour toute signature avant le 31 octobre » que personne n’a décidée.',
        'Garder « URGENT » dans l’objet.',
      ],
      competence: 'discernement',
      technique: 'contexte',
    },
    motsCles: ['relance', 'devis', 'ton', 'e-mail'],
  },
  {
    id: 'vente-questions-decouverte',
    titre: 'Préparer les questions de découverte d’un premier rendez-vous',
    metier: 'commercial',
    niveau: 'debutant',
    famille: 'organiser',
    duree: 15,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Vous êtes commercial chez un distributeur de copieurs et de solutions d’impression à Nouméa. Demain, vous rencontrez pour la première fois le gérant d’une entreprise de BTP de Païta qui se plaint de son matériel actuel. Vous voulez comprendre ses besoins avant de parler de produits.',
    objectif:
      'Obtenir une trame de rendez-vous centrée sur le client, avec des questions ouvertes, et l’adapter à ce que l’on sait déjà.',
    etapes: [
      'Copiez les informations du matériau avec le prompt de départ.',
      'Vérifiez que les questions sont ouvertes et portent sur ses besoins, pas sur vos produits.',
      'Ajoutez ou faites ajouter une question pour chaque inconnue : contrat actuel, impression grand format, rôle de la comptable.',
      'Demandez à l’IA les trois réponses du client qui changeraient votre proposition, et préparez-vous à les entendre.',
      'Imprimez ou recopiez la trame en gardant de la place pour vos notes.',
    ],
    prompt:
      'Tu es un commercial expérimenté en vente aux entreprises. Je vends des copieurs et des solutions d’impression à Nouméa. Prépare la trame d’un premier rendez-vous de 30 minutes avec le gérant d’une entreprise de BTP, à partir des informations ci-dessous. Je veux : une introduction de deux phrases, 10 questions ouvertes de découverte classées par thème (usages, problèmes actuels, contrat en cours, décision et budget), une phrase de reformulation type et une proposition de prochaine étape. Ne parle pas de nos produits avant la reformulation.\n\n<informations>\n[collez les informations ici]\n</informations>',
    materiau: {
      titre: 'Ce que vous savez avant le rendez-vous',
      texte:
        '- Entreprise de BTP, 45 salariés, siège à Païta, deux chantiers en cours à Koné et au Mont-Dore\n- Le gérant a appelé : « nos photocopieurs tombent tout le temps en panne et le prestataire met une semaine à venir »\n- Contrat actuel : inconnu (durée, échéance, coût)\n- Impression de plans en grand format : à vérifier\n- Décision : le gérant, mais la comptable gère les factures et les contrats',
    },
    variantes: {
      simple: 'Se limiter aux 10 questions, sans introduction ni prochaine étape.',
      poussee:
        'Faire jouer le gérant par l’IA pendant 10 minutes pour tester la trame, puis lui demander quelles questions l’ont mis mal à l’aise.',
    },
    astuces: {
      copilot:
        'Transformez la trame en Copilot Page : vous la retrouverez sur votre téléphone pendant le rendez-vous.',
      claude:
        'Demandez la trame dans un artefact d’une page, avec une colonne vide pour vos notes.',
    },
    vigilance:
      'Dans vos notes et dans l’IA, ne conservez que des informations professionnelles utiles à la relation : aucun commentaire personnel sur vos interlocuteurs.',
    formateur: {
      resultat:
        'Une trame de 30 minutes avec 10 questions ouvertes réparties par thème, qui couvre les inconnues (échéance du contrat actuel, grand format, rôle de la comptable) et se termine par une prochaine étape concrète.',
      criteres: [
        'Les questions sont ouvertes (« Comment… », « Qu’est-ce qui… »), pas fermées.',
        'Chaque inconnue du matériau donne lieu à une question.',
        'Aucun produit n’est présenté avant la reformulation.',
        'La prochaine étape est concrète (relevé des volumes, visite d’un chantier, rendez-vous avec la comptable).',
      ],
      pieges: [
        'Accepter des questions qui orientent la réponse (« Vous seriez d’accord pour changer de prestataire ? »).',
        'Oublier la comptable, qui pèse dans la décision.',
      ],
      competence: 'description',
      technique: 'role',
    },
    motsCles: ['découverte', 'rendez-vous', 'questions', 'besoins'],
  },
  {
    id: 'vente-compte-rendu-crm',
    titre: 'Transformer ses notes de rendez-vous en fiche CRM',
    metier: 'commercial',
    niveau: 'debutant',
    famille: 'synthetiser',
    duree: 15,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Vous sortez d’un rendez-vous avec le directeur d’un grossiste alimentaire de Ducos, qui veut remplacer deux chambres froides. Vos notes sont prises en vrac sur votre téléphone. Vous devez remplir la fiche de l’opportunité dans le logiciel de gestion de la relation client (CRM) avant ce soir.',
    objectif:
      'Obtenir une fiche structurée et fidèle, sans laisser l’IA déduire ce qui n’a pas été dit.',
    etapes: [
      'Copiez les notes avec le prompt de départ.',
      'Vérifiez chaque chiffre et chaque date avec vos notes.',
      'Repérez ce que l’IA a déduit sans base (budget, probabilité de signature, intentions du client) et supprimez-le.',
      'Vérifiez que chaque action a un responsable et une échéance.',
      'Demandez un e-mail de remerciement de 80 mots au directeur, qui confirme la visite technique.',
    ],
    prompt:
      'Tu es commercial dans une société de froid et de climatisation à Nouméa. Transforme mes notes de rendez-vous ci-dessous en fiche pour le CRM, avec ces rubriques : contexte, besoin, enjeu pour le client, budget, décideurs, concurrence, prochaine étape (date, heure), actions à faire (qui, quoi, quand). Reprends uniquement ce qui est dans les notes. Si une information manque, écris « non connu ». Phrases courtes, 150 mots au maximum.\n\n<notes>\n[collez les notes ici]\n</notes>',
    materiau: {
      titre: 'Notes prises pendant le rendez-vous',
      texte:
        'RDV Ducos 9 h – directeur + resp. technique (Jérôme)\n2 chambres froides positives, installées en 2009, 3 pannes depuis janvier (dernière : perte de marchandise d’environ 800 000 XPF)\nveulent remplacer avant décembre (fêtes = gros volumes)\nbudget pas donné, « on a eu un devis à 9 M chez un concurrent, trop cher »\ndécision : le directeur, validation par l’actionnaire (holding familiale)\nresp. technique veut du matériel facile à dépanner, pièces en stock à Nouméa\nprochaine étape : visite technique mardi 14 h avec notre frigoriste, puis devis sous 10 jours\nà faire : vérifier la dispo du frigoriste mardi, demander les plans du local\nconcurrent déjà venu, nom pas donné',
    },
    variantes: {
      simple: 'Se limiter aux rubriques besoin, prochaine étape et actions.',
      poussee:
        'Préparer un modèle de prompt réutilisable pour tous les comptes rendus de l’équipe, avec les rubriques du CRM de l’entreprise.',
    },
    astuces: {
      copilot:
        'Si le rendez-vous a eu lieu sur Teams, le récapitulatif de réunion (licence Copilot) donne une base, à vérifier avec vos notes.',
      gemini:
        'Pour un rendez-vous sur Meet, « Prendre des notes pour moi » fournit un premier compte rendu, à relire avant de l’utiliser.',
    },
    vigilance:
      'Dans un CRM, on note des faits utiles à la relation commerciale, pas d’appréciation personnelle sur les interlocuteurs. Ne collez pas dans l’IA leurs coordonnées personnelles.',
    formateur: {
      resultat:
        'Une fiche courte et fidèle : deux chambres froides de 2009, trois pannes et une perte d’environ 800 000 XPF, remplacement avant décembre, budget non connu (devis concurrent à 9 millions jugé trop cher), décision du directeur avec validation de l’actionnaire, visite mardi à 14 h, devis sous 10 jours, deux actions.',
      criteres: [
        'Les chiffres (2009, 3 pannes, 800 000 XPF, 9 millions) et le rendez-vous de mardi 14 h sont exacts.',
        'Le budget est noté « non connu », pas déduit du devis concurrent.',
        'Chaque action a un responsable.',
      ],
      pieges: [
        'Accepter un budget « estimé à 8 millions » que le client n’a jamais donné.',
        'Laisser une probabilité de signature inventée (« 70 % »).',
      ],
      competence: 'discernement',
      technique: 'structurer',
    },
    motsCles: ['compte rendu', 'CRM', 'rendez-vous', 'notes'],
  },
  {
    id: 'vente-objections-simulation',
    titre: 'S’entraîner à traiter les objections face à un acheteur simulé',
    metier: 'commercial',
    niveau: 'intermediaire',
    famille: 'organiser',
    duree: 30,
    outils: ['chatgpt', 'claude', 'gemini', 'copilot'],
    outilConseille: 'chatgpt',
    situation:
      'La semaine prochaine, vous présentez un contrat d’entretien annuel de climatisation au responsable des achats d’un groupe de six supermarchés du Grand Nouméa. Il est connu pour négocier durement. Vous voulez vous entraîner avant le rendez-vous.',
    objectif:
      'Préparer ses réponses aux objections, les tester dans une simulation où l’IA joue l’acheteur, et exploiter son retour.',
    etapes: [
      'Demandez à l’IA les huit objections les plus probables de cet acheteur, à partir du matériau.',
      'Écrivez vous-même votre réponse à chacune, puis demandez à l’IA de la critiquer et de proposer une amélioration.',
      'Ouvrez une nouvelle conversation et lancez la simulation avec le prompt de départ : l’IA joue l’acheteur, vous répondez.',
      'Tenez au moins dix échanges sans accorder de concession hors de votre marge de négociation.',
      'Tapez « FIN » et lisez le retour : écoute, reformulation, concessions, prochaine étape obtenue.',
    ],
    prompt:
      'Joue le rôle du responsable des achats d’un groupe de six supermarchés à Nouméa. Je viens te présenter un contrat d’entretien annuel de climatisation (informations ci-dessous). Tu es courtois mais dur en négociation : tu compares avec ton prestataire actuel, tu exiges 15 % de remise, tu doutes de notre délai d’intervention et tu veux des pénalités de retard. Ne cède pas facilement. Une seule réplique à la fois, puis attends ma réponse. Quand j’écris « FIN », sors du rôle et fais-moi un retour précis : ce que j’ai bien fait, ce que j’ai lâché trop vite, trois conseils.\n\n<offre>\n[collez l’offre et votre marge de négociation ici]\n</offre>',
    materiau: {
      titre: 'Votre offre et votre marge de négociation',
      texte:
        '- Contrat d’entretien annuel : 2 visites préventives par an et par magasin, nettoyage des filtres, contrôle des fluides\n- Prix catalogue : 3 600 000 XPF HT par an pour les 6 magasins\n- Dépannage sous 24 h ouvrées dans le Grand Nouméa (engagement écrit)\n- Marge de négociation autorisée : 5 % de remise au maximum contre un engagement de 3 ans, ou une visite supplémentaire offerte\n- Pas de pénalités de retard dans nos contrats types (à valider par la direction au cas par cas)\n- Prestataire actuel de l’acheteur : inconnu ; il se plaint de délais de 3 à 4 jours',
    },
    variantes: {
      simple:
        'Préparer seulement les réponses aux trois objections les plus probables, sans simulation.',
      poussee:
        'Refaire la simulation avec un acheteur pressé et peu bavard, puis comparer les deux retours de l’IA.',
    },
    astuces: {
      gemini:
        'Créez un Gem « acheteur difficile » avec ce rôle en instructions, pour vous entraîner avant chaque rendez-vous.',
      claude:
        'Dans un Projet, gardez l’offre et vos réponses aux objections : chaque nouvelle simulation part de vos dernières versions.',
    },
    vigilance:
      'Dans la simulation, n’utilisez pas le nom réel de l’acheteur ni de son entreprise. Les concessions réelles restent celles que votre direction autorise.',
    formateur: {
      resultat:
        'Une liste de huit objections avec des réponses écrites par l’apprenant puis améliorées, une simulation d’au moins dix échanges où la marge est tenue (5 % au maximum contre un engagement de 3 ans), et un retour de l’IA exploité.',
      criteres: [
        'L’apprenant a écrit ses réponses avant de demander l’aide de l’IA.',
        'Aucune concession hors marge (plus de 5 %, pénalités acceptées sans validation).',
        'L’apprenant reformule l’objection avant d’y répondre.',
        'Une prochaine étape est obtenue à la fin de la simulation.',
      ],
      pieges: [
        'Laisser l’IA écrire les réponses à sa place : l’entraînement perd son intérêt.',
        'Accorder la remise demandée pour « conclure », sans contrepartie.',
      ],
      competence: 'delegation',
      technique: 'simulation',
    },
    motsCles: ['objections', 'négociation', 'simulation', 'jeu de rôle', 'acheteur'],
  },
  {
    id: 'vente-proposition-commerciale',
    titre: 'Construire une proposition commerciale structurée',
    metier: 'commercial',
    niveau: 'intermediaire',
    famille: 'rediger',
    duree: 30,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Après la visite technique chez le grossiste alimentaire de Ducos, vous devez envoyer une proposition pour le remplacement de deux chambres froides. Le directeur la comparera avec une offre concurrente qu’il juge trop chère. Vous disposez du compte rendu et du chiffrage technique.',
    objectif:
      'Faire construire un document en plusieurs étapes (plan validé, puis rédaction, puis relecture critique), en gardant la main sur les chiffres et les engagements.',
    etapes: [
      'Demandez d’abord un plan avec le prompt de départ, et validez-le ou modifiez-le.',
      'Faites rédiger chaque partie en vous appuyant sur le matériau.',
      'Vérifiez le chiffrage ligne par ligne et le total : l’IA ne doit ni arrondir ni ajouter de ligne.',
      'Demandez à l’IA de relire la proposition du point de vue du directeur : qu’est-ce qui le ferait hésiter ?',
      'Corrigez, puis listez les mentions à faire valider par votre direction (garantie, conditions de paiement, validité de l’offre).',
    ],
    prompt:
      'Tu es commercial dans une société de froid et de climatisation à Nouméa. Je dois envoyer une proposition commerciale à un grossiste alimentaire. Commence seulement par le plan : 6 parties au maximum, dans l’ordre qui convaincra un directeur pressé (son enjeu d’abord, notre solution ensuite, le prix et les conditions à la fin). Pour chaque partie, indique en une ligne ce qu’elle contiendra. Attends ma validation avant de rédiger. Utilise uniquement le compte rendu et le chiffrage ci-dessous, et ne calcule aucun montant toutes taxes comprises.\n\n<compte_rendu>\n[collez le compte rendu et le chiffrage ici]\n</compte_rendu>',
    materiau: {
      titre: 'Compte rendu et chiffrage',
      texte:
        'Besoin : remplacer 2 chambres froides positives installées en 2009 ; 3 pannes depuis janvier, dont une perte de marchandise d’environ 800 000 XPF.\nÉchéance : en service avant le 1er décembre (pic des fêtes).\nAttentes du responsable technique : pièces disponibles à Nouméa, dépannage rapide.\n\nChiffrage :\n- Fourniture de 2 groupes froids et des panneaux isolants : 4 950 000 XPF HT\n- Dépose de l’ancien matériel et pose : 1 200 000 XPF HT\n- Mise en service et formation de l’équipe : 150 000 XPF HT\n- Total : 6 300 000 XPF HT\n- Option contrat d’entretien : 480 000 XPF HT par an\n- Délai : 5 semaines après la commande (matériel en stock à Nouméa), travaux sur 4 jours, une chambre après l’autre pour ne pas arrêter l’activité\n- Garantie constructeur : [durée à confirmer par le fournisseur]',
    },
    variantes: {
      simple: 'Se limiter au plan et à la partie « notre solution ».',
      poussee:
        'Préparer aussi une synthèse d’une page pour l’actionnaire, et trois diapositives pour présenter la proposition en rendez-vous.',
    },
    astuces: {
      claude:
        'Une fois le texte validé, demandez la proposition en fichier Word grâce à la création de fichiers.',
      copilot:
        'Avec la licence, Copilot dans Word rédige la proposition directement dans le modèle de document de l’entreprise.',
    },
    vigilance:
      'Le prix du concurrent a été confié oralement par le client : il n’apparaît nulle part dans la proposition. La garantie et les conditions de paiement sont validées par votre direction avant l’envoi.',
    formateur: {
      resultat:
        'Une proposition qui commence par l’enjeu du client (pannes, pertes, fêtes), présente une solution qui répond aux attentes techniques, reprend un chiffrage exact (6 300 000 XPF HT, option à 480 000 XPF HT par an) et laisse la garantie à confirmer.',
      criteres: [
        'Le total de 6 300 000 XPF HT et le détail des lignes sont exacts.',
        'Le planning répond à l’échéance du 1er décembre (5 semaines, puis 4 jours de travaux, une chambre après l’autre).',
        'La garantie reste « à confirmer », sans durée inventée.',
        'Le prix du concurrent n’apparaît pas.',
      ],
      pieges: [
        'Accepter une garantie « de 2 ans » inventée par l’IA.',
        'Laisser l’IA calculer un montant TTC avec un taux de TVA de métropole au lieu de la TGC.',
        'Mentionner le devis concurrent à 9 millions : le client l’a dit en confiance.',
      ],
      competence: 'description',
      technique: 'decomposer',
    },
    motsCles: ['proposition commerciale', 'devis', 'chiffrage', 'argumentaire'],
  },
  {
    id: 'vente-analyse-pipeline',
    titre: 'Analyser le pipeline commercial avant la prévision de fin d’année',
    metier: 'commercial',
    niveau: 'intermediaire',
    famille: 'analyser',
    duree: 30,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Début octobre, votre directeur commercial prépare la prévision de fin d’année. Il vous envoie l’extrait du CRM avec les opportunités en cours de l’équipe et vous demande ce que l’on peut raisonnablement signer d’ici le 31 décembre.',
    objectif:
      'Faire calculer et commenter un pipeline par l’IA, repérer les opportunités douteuses et construire des scénarios argumentés.',
    etapes: [
      'Collez le tableau avec le prompt de départ en indiquant la date du jour, ou déposez-le en fichier CSV.',
      'Vérifiez vous-même le total du pipeline et le montant pondéré de deux lignes.',
      'Vérifiez que l’IA a bien lu les dates au format jour/mois.',
      'Relisez les opportunités signalées comme à risque : êtes-vous d’accord ? En manque-t-il ?',
      'Choisissez un scénario et rédigez trois lignes pour le directeur.',
    ],
    prompt:
      'Tu es analyste commercial. Voici l’extrait du CRM de notre équipe (montants en XPF HT, dates au format jour/mois ; nous sommes le [date du jour]). 1) Calcule le total du pipeline et le total pondéré par la probabilité, puis la répartition par étape et par commercial. 2) Repère les opportunités à risque : dernier contact de plus de 30 jours, probabilité qui ne correspond pas à l’étape, gros montant incertain. 3) Propose trois scénarios de signature d’ici le 31 décembre (prudent, réaliste, optimiste) en listant les opportunités retenues dans chacun. Montre tes calculs.\n\n<pipeline>\n[collez le tableau ici]\n</pipeline>',
    materiau: {
      titre: 'Extrait du CRM (fictif, montants en XPF HT)',
      texte:
        'Opportunité;Client;Commercial;Montant;Étape;Probabilité (%);Clôture prévue;Dernier contact\nOPP-101;Hôtel Bourail;Kevin;1860000;Devis envoyé;50;30/10;15/09\nOPP-102;Grossiste Ducos;Laura;6300000;Proposition envoyée;60;15/11;06/10\nOPP-103;Supermarchés (6 magasins);Laura;3600000;Négociation;70;30/11;01/10\nOPP-104;Cabinet comptable Ducos;Kevin;2400000;Découverte;20;15/12;28/09\nOPP-105;Clinique vétérinaire Dumbéa;Sione;950000;Devis envoyé;50;31/10;02/08\nOPP-106;Mairie (appel d’offres);Sione;14500000;Réponse déposée;30;20/12;10/09\nOPP-107;Restaurant baie des Citrons;Kevin;780000;Signature imminente;90;10/10;05/10\nOPP-108;École privée Mont-Dore;Laura;4200000;Découverte;20;31/12;20/09\nOPP-109;Concession automobile Ducos;Sione;5100000;Négociation;60;30/11;12/07\nOPP-110;Résidence hôtelière Anse-Vata;Kevin;8700000;Proposition envoyée;40;15/12;25/09\nOPP-111;Pharmacie Koné;Laura;620000;Devis envoyé;50;20/10;30/09\nOPP-112;Atelier mécanique Païta;Sione;1150000;Devis envoyé;50;31/10;03/09',
    },
    variantes: {
      simple: 'Se limiter au total, au pondéré et aux opportunités sans contact depuis 30 jours.',
      poussee:
        'Faire tracer un graphique du pipeline par étape et par commercial, puis préparer la revue du pipeline pour la prochaine réunion commerciale.',
    },
    astuces: {
      chatgpt:
        'L’analyse de données calcule à partir du fichier et peut tracer le pipeline par étape ; demandez à voir le tableau intermédiaire.',
      gemini:
        'Dans Google Sheets, « Demander à Gemini » propose la formule du montant pondéré, à vérifier sur une ligne.',
    },
    vigilance:
      'Une probabilité saisie dans un CRM est une estimation du commercial, pas une mesure : la prévision n’est jamais plus fiable que les données. Vérifiez au moins un total à la main.',
    formateur: {
      resultat:
        'Un pipeline total de 50 160 000 XPF HT et un pondéré de 21 502 000 XPF HT, des alertes sur les opportunités sans contact récent (OPP-109 depuis juillet, OPP-105 depuis août, OPP-112 depuis début septembre), la dépendance à l’appel d’offres de la mairie (14,5 millions) et trois scénarios argumentés.',
      criteres: [
        'Le total (50 160 000) et le pondéré (21 502 000) sont justes ou vérifiés.',
        'OPP-109 est signalée : en négociation à 60 % mais sans contact depuis le 12 juillet.',
        'L’appel d’offres de la mairie est traité à part : c’est tout ou rien, et il pèse lourd dans le pondéré.',
        'Les scénarios listent des opportunités précises.',
      ],
      pieges: [
        'Présenter le pondéré comme le chiffre d’affaires qui sera signé.',
        'Ne pas voir que l’IA a lu les dates au format américain mois/jour.',
      ],
      competence: 'discernement',
      technique: 'decomposer',
    },
    motsCles: ['pipeline', 'prévision', 'CRM', 'tableau', 'opportunités'],
  },
  {
    id: 'vente-argumentaire-concurrent',
    titre: 'Préparer un argumentaire face à un concurrent, à partir d’informations vérifiées',
    metier: 'commercial',
    niveau: 'intermediaire',
    famille: 'veiller',
    duree: 30,
    outils: ['claude', 'chatgpt', 'gemini', 'copilot'],
    outilConseille: 'claude',
    situation:
      'Un concurrent vient d’ouvrir une agence à Nouméa et propose des contrats d’entretien de climatisation « 20 % moins chers ». Trois clients vous en ont parlé. Avant vos prochains rendez-vous, vous voulez un argumentaire honnête, fondé sur des informations vérifiées.',
    objectif:
      'Faire une recherche sur un concurrent en séparant faits sourcés, témoignages et suppositions, puis en tirer un argumentaire sans dénigrement.',
    etapes: [
      'Lancez une recherche web avec le prompt de départ, en indiquant un concurrent réel de votre secteur ou un nom fictif pour l’exercice.',
      'Ouvrez chaque source citée et classez chaque information : vérifiée (site de l’entreprise, document officiel), indirecte (presse, avis), supposition.',
      'Ajoutez ce que vos clients vous ont dit (matériau), marqué comme témoignage non vérifié.',
      'Demandez un tableau comparatif sur les critères qui comptent pour le client, pas seulement le prix.',
      'Faites rédiger trois réponses courtes à « votre concurrent est 20 % moins cher », sans dénigrer.',
    ],
    prompt:
      'Tu es chargé d’études commerciales. Recherche des informations publiques sur [nom du concurrent], entreprise de climatisation installée en Nouvelle-Calédonie : offre, zone d’intervention, délais annoncés, références, prix publics s’il y en a. Pour chaque information, donne la source et sa date. Sépare les faits vérifiables des opinions (avis clients, forums). Si tu ne trouves rien sur un point, écris « non trouvé » au lieu de supposer.',
    materiau: {
      titre: 'Ce que disent vos clients, et votre offre',
      texte:
        'Témoignages :\n- Hôtel de Bourail : « Ils m’ont proposé 20 % moins cher, mais je ne sais pas ce qui est compris. »\n- Pharmacie de Koné : « D’après leur commercial, ils ne montent pas dans le Nord pour l’instant. »\n- Concession de Ducos : « Leur technicien est passé en 2 heures, impressionnant. »\n\nNotre offre : 2 visites préventives par an, dépannage sous 24 h ouvrées dans le Grand Nouméa et sous 48 h ouvrées dans le Nord, pièces en stock à Nouméa, 3 techniciens frigoristes.',
    },
    variantes: {
      simple: 'Se limiter aux trois réponses à l’objection du prix, à partir des témoignages.',
      poussee:
        'Bâtir une fiche concurrent d’une page à partager avec l’équipe, avec une date de mise à jour et le nom de la personne qui l’a vérifiée.',
    },
    astuces: {
      claude:
        'Activez la recherche web : chaque information est liée à la page consultée, que vous pouvez ouvrir.',
      gemini:
        'Deep Research rend un rapport sourcé ; vérifiez la date de chaque source, souvent ancienne.',
      copilot:
        'Copilot Chat cite les pages web utilisées : ouvrez-les avant de reprendre une information.',
    },
    vigilance:
      'Ne présentez jamais une supposition sur un concurrent comme un fait : le dénigrement est contre-productif et peut engager la responsabilité de l’entreprise. Ne citez que ce que vous pouvez prouver.',
    formateur: {
      resultat:
        'Un tableau qui sépare faits sourcés, témoignages et suppositions, un comparatif sur des critères utiles (contenu de l’offre, délais, zone couverte, stock de pièces) et trois réponses factuelles à l’objection du prix.',
      criteres: [
        'Chaque information sur le concurrent a une source ouverte et datée, ou est marquée « non vérifiée ».',
        'Les témoignages clients sont distingués des faits.',
        'Les réponses à l’objection du prix comparent le contenu des offres sans dénigrer.',
      ],
      pieges: [
        'Reprendre un chiffre trouvé par l’IA (prix, nombre de techniciens) sans ouvrir la source.',
        'Écrire « ils n’interviennent pas dans le Nord » à partir d’un seul témoignage.',
      ],
      competence: 'discernement',
      technique: 'sources',
    },
    motsCles: ['concurrence', 'argumentaire', 'recherche web', 'objection prix'],
  },
  {
    id: 'vente-plan-de-compte',
    titre: 'Construire le plan de compte d’un client stratégique',
    metier: 'commercial',
    niveau: 'avance',
    famille: 'analyser',
    duree: 45,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Un groupe de BTP calédonien est client depuis trois ans, mais seule une partie de ses sites est équipée de votre matériel. Votre directeur vous demande un plan de compte pour l’an prochain : où en est-on, quel potentiel, quelles actions et quand.',
    objectif:
      'Enchaîner analyse chiffrée, carte des décideurs et plan d’actions avec l’IA, en validant chaque étape et en refusant les chiffres sans calcul.',
    etapes: [
      'Collez le tableau et les notes avec le prompt de départ, et validez l’état des lieux chiffré.',
      'Vérifiez deux chiffres à la main : le nombre total de climatiseurs et la part fournie par vous.',
      'Passez à l’étape 2 : carte des décideurs et de leurs attentes, en signalant ce qui est inconnu.',
      'Passez à l’étape 3 : opportunités classées par potentiel et facilité, avec leur justification chiffrée.',
      'Passez à l’étape 4 : plan d’actions trimestriel (qui, quoi, quand), calé sur le vote du budget en mars.',
      'Relisez le tout et supprimez ce que l’IA a supposé sans base (montants, intentions du client).',
    ],
    prompt:
      'Tu es directeur commercial, expérimenté en vente aux entreprises. Aide-moi à bâtir le plan de compte d’un client stratégique, un groupe de BTP calédonien, à partir du tableau et des notes ci-dessous. Procède par étapes et attends ma validation entre chacune :\n1. État des lieux chiffré : parc total, part équipée par nous, sites sous contrat, sites à risque (âge, pannes).\n2. Décideurs et attentes, en signalant les inconnues.\n3. Opportunités classées par potentiel et facilité, avec la justification.\n4. Plan d’actions par trimestre (qui, quoi, quand).\nN’invente aucun montant de potentiel : si tu en estimes un, montre le calcul et l’hypothèse.\n\n<donnees>\n[collez le tableau et les notes ici]\n</donnees>',
    materiau: {
      titre: 'Parc du client par site et notes de compte (fictifs)',
      texte:
        'Site;Type;Climatiseurs installés;Dont fournis par nous;Âge moyen du parc (ans);Contrat d’entretien chez nous;Achats chez nous sur 12 mois (XPF HT);Pannes signalées sur 12 mois\nSiège Nouméa;Bureaux;24;24;3;Oui;1450000;2\nAtelier Ducos;Atelier;10;6;7;Oui;620000;4\nDépôt Païta;Entrepôt;6;0;11;Non;0;5\nBase vie Koné;Hébergement;18;0;9;Non;0;7\nBureau Koné;Bureaux;5;5;2;Oui;310000;0\nAgence Mont-Dore;Bureaux;4;0;6;Non;0;1\nBase chantier Dumbéa;Modulaires;8;8;1;Non;980000;0\nAgence Bourail;Bureaux;3;0;12;Non;0;3\n\nNotes : interlocuteur principal = responsable des services généraux, à Nouméa. Le directeur d’exploitation du Nord décide pour les sites de Koné. Budget d’investissement voté en mars. Agrandissement de la base vie de Koné (+10 chambres) évoqué en réunion, date inconnue. Un concurrent entretient le dépôt de Païta et la base vie de Koné.',
    },
    variantes: {
      simple: 'Se limiter à l’état des lieux chiffré et aux trois sites prioritaires.',
      poussee:
        'Transformer le plan en présentation de cinq diapositives pour le directeur, avec un graphique du parc par site.',
    },
    astuces: {
      claude:
        'Créez un Projet par compte stratégique : le tableau, les notes et le plan restent disponibles d’une conversation à l’autre.',
      chatgpt:
        'L’analyse de données trace la répartition du parc par site : utile pour la présentation au directeur.',
      copilot:
        'Mettez le tableau au format Excel ; avec la licence, Copilot dans Excel ajoute les totaux et la part de chaque site.',
    },
    vigilance:
      'Un plan de compte contient des informations confidentielles sur le client : utilisez l’outil validé par votre entreprise, sans coordonnées nominatives des interlocuteurs.',
    formateur: {
      resultat:
        'Un état des lieux juste (78 climatiseurs, dont 43 fournis par vous, soit 55 % ; 3 360 000 XPF HT d’achats sur 12 mois), des priorités argumentées (base vie de Koné, dépôt de Païta, agence de Bourail : parc ancien, pannes, entretien chez un concurrent pour deux d’entre eux), une carte des décideurs avec les inconnues, et un plan d’actions calé sur le budget voté en mars.',
      criteres: [
        'Les totaux et la part de 55 % sont justes.',
        'La base vie de Koné est prioritaire, avec le bon décideur (directeur d’exploitation du Nord).',
        'Une proposition est prévue avant le vote du budget en mars.',
        'Tout montant de potentiel estimé montre son calcul.',
      ],
      pieges: [
        'Accepter un « potentiel de 25 millions » sorti de nulle part.',
        'Traiter l’agrandissement de Koné comme une certitude : c’est une question à poser.',
      ],
      competence: 'delegation',
      technique: 'decomposer',
    },
    motsCles: ['plan de compte', 'grand compte', 'potentiel', 'décideurs', 'plan d’actions'],
  },
  {
    id: 'vente-assistant-relances',
    titre: 'Créer un assistant qui prépare les relances après devis',
    metier: 'commercial',
    niveau: 'avance',
    famille: 'automatiser',
    duree: 45,
    outils: ['claude', 'chatgpt', 'gemini', 'copilot'],
    outilConseille: 'chatgpt',
    situation:
      'Chaque commercial de l’équipe envoie une trentaine de devis par mois, et beaucoup restent sans réponse faute de relance. Vous voulez une séquence commune (J+5, J+15, J+30) et un assistant qui prépare chaque message à partir des informations du devis, relu par le commercial avant l’envoi.',
    objectif:
      'Écrire une séquence et des instructions permanentes, donner des exemples de style, puis tester l’assistant sur des cas dont on connaît la bonne réponse.',
    etapes: [
      'Relisez la séquence du prompt de départ avec l’équipe et ajoutez ce qui arrête la séquence (réponse du client, refus, commande).',
      'Rédigez deux exemples de bonnes relances que vous avez réellement envoyées, sans nom de client : ils serviront de modèles.',
      'Créez l’assistant (Projet, GPT, Gem ou agent) avec les instructions et les deux exemples.',
      'Testez-le sur les trois devis fictifs du matériau : chaque message reprend-il les bonnes informations ?',
      'Corrigez les instructions, puis faites tester l’assistant par un collègue sur ses propres devis, anonymisés.',
    ],
    prompt:
      'Tu es l’assistant de relance des devis de l’équipe commerciale de [nom de l’entreprise], à Nouméa. Je te donne pour chaque devis : type de client (sans nom de personne), objet, montant HT, date d’envoi, dernier échange, numéro de relance.\n\nSéquence :\n- Relance 1 (J+5) : vérifier la bonne réception, proposer de répondre aux questions.\n- Relance 2 (J+15) : apporter un élément utile (délai, disponibilité, précision technique) et proposer un appel de 10 minutes.\n- Relance 3 (J+30) : message de clôture courtois, qui laisse la porte ouverte.\n\nRègles : 90 mots au maximum, vouvoiement, une seule question, aucune remise ni condition nouvelle, aucune information absente de ma demande. Si une information manque pour répondre au client, demande-la-moi avant de rédiger. Inspire-toi du style des exemples joints.',
    materiau: {
      titre: 'Trois devis fictifs pour tester l’assistant',
      texte:
        '1. Clinique vétérinaire à Dumbéa – remplacement de 3 climatiseurs – 950 000 XPF HT – envoyé le 2 août – dernier échange : aucun – relance n° 3\n2. Atelier mécanique à Païta – climatisation du bureau d’accueil – 1 150 000 XPF HT – envoyé le 3 septembre – dernier échange : le client attend l’accord de son associé – relance n° 2\n3. Pharmacie à Koné – contrat d’entretien annuel – 620 000 XPF HT – envoyé le 30 septembre – dernier échange : appel du client, qui demande si le délai de 48 h vaut aussi le week-end – relance n° 1',
    },
    variantes: {
      simple:
        'Se contenter d’un prompt réutilisable enregistré dans un document, testé sur un devis.',
      poussee:
        'Programmer un rappel hebdomadaire (tâche planifiée, payante) qui vous demande la liste des devis à relancer, et mesurer le taux de réponse après un mois.',
    },
    astuces: {
      claude:
        'Dans un Projet, mettez la séquence dans les instructions et les deux exemples dans les connaissances du projet.',
      chatgpt:
        'Un Projet suffit pour vous ; un GPT (création payante) se partage avec toute l’équipe commerciale.',
      gemini:
        'Créez un Gem « relances devis » avec la séquence en instructions et vos exemples en fichiers.',
      copilot:
        'Si votre licence le permet, créez un agent et partagez-le avec l’équipe commerciale.',
    },
    vigilance:
      'Ne collez ni nom ni adresse e-mail de vos contacts dans l’assistant. Chaque relance est relue et envoyée par le commercial, qui reste responsable de ce qui part.',
    formateur: {
      resultat:
        'Une séquence écrite, un assistant aux instructions claires, testé sur les trois devis : un message de clôture courtois pour la clinique, une relance qui tient compte de l’associé pour l’atelier, et pour la pharmacie une question posée au commercial sur le week-end au lieu d’une réponse inventée.',
      criteres: [
        'Chaque message reprend exactement le montant, l’objet et la date du devis.',
        'L’assistant demande l’information manquante (délai le week-end) au lieu de l’inventer.',
        'Aucun message ne contient de remise ni d’urgence artificielle.',
        'Les instructions ont été corrigées après un premier test.',
      ],
      pieges: [
        'Laisser l’assistant répondre « oui, 48 h week-end compris » sans que personne ne l’ait décidé.',
        'Continuer la séquence avec un client qui a déjà répondu.',
      ],
      competence: 'delegation',
      technique: 'instructions',
    },
    motsCles: ['relance', 'séquence', 'assistant', 'GPT', 'devis'],
  },
  {
    id: 'vente-plaquette-canva',
    titre: 'Décliner une offre en plaquette, présentation et publication avec Canva',
    metier: 'commercial',
    niveau: 'avance',
    famille: 'visuels',
    duree: 45,
    outils: ['canva', 'claude', 'chatgpt', 'gemini'],
    outilConseille: 'canva',
    situation:
      'Votre société lance un contrat d’entretien annuel des climatiseurs de bureaux. Il faut une plaquette d’une page pour les rendez-vous, trois diapositives pour le petit-déjeuner de présentation et une publication LinkedIn. Tout doit être cohérent et exact.',
    objectif:
      'Enchaîner rédaction et mise en forme : un texte source validé, puis plusieurs supports Canva cohérents, sans que les chiffres changent en route.',
    etapes: [
      'Avec votre outil d’IA et le prompt de départ, rédigez le texte source à partir du matériau.',
      'Faites valider ce texte (prix, délais, mentions) avant toute mise en forme.',
      'Dans Canva, créez la plaquette A4 avec l’IA Canva ou le Design magique à partir du texte validé.',
      'Déclinez-la en trois diapositives et en publication carrée (Redimensionnement magique avec Canva Pro, ou à la main).',
      'Appliquez les couleurs et le logo de l’entreprise (Kit de marque avec Canva Pro, ou à la main).',
      'Relisez chaque support : chiffres, délais et mentions identiques au texte validé.',
    ],
    prompt:
      'Tu es chargé de marketing dans une société de climatisation de Nouméa qui vend aux entreprises. À partir des informations ci-dessous, rédige le texte source d’une plaquette d’une page : une accroche de 10 mots au maximum, 3 bénéfices concrets pour un gérant de PME, le contenu de l’offre en 4 puces, le prix, un appel à l’action. Ton professionnel et direct, aucun superlatif, aucune promesse absente des informations. Propose ensuite une version de 60 mots pour une publication LinkedIn.\n\n<informations>\n[collez les informations ici]\n</informations>',
    materiau: {
      titre: 'Informations validées sur l’offre',
      texte:
        '- Contrat d’entretien annuel des climatiseurs de bureaux\n- 2 visites préventives par an : nettoyage des filtres, contrôle des fluides, vérification des évacuations\n- Dépannage sous 24 h ouvrées dans le Grand Nouméa, 48 h ouvrées dans le Nord\n- Prix : 42 000 XPF HT par an et par appareil, dégressif à partir de 10 appareils (barème sur demande)\n- Pièces courantes en stock à Nouméa\n- Contact : [téléphone et e-mail de l’entreprise]\n- Mention obligatoire : « Offre réservée aux professionnels. Prix hors TGC. »',
    },
    variantes: {
      simple: 'Se limiter à la plaquette A4.',
      poussee:
        'Créer un modèle Canva réutilisable pour toutes les offres de l’entreprise, avec des zones de texte verrouillées pour les mentions obligatoires.',
    },
    astuces: {
      canva:
        'Le Redimensionnement magique et le Kit de marque sont réservés à Canva Pro ; sans eux, dupliquez le design et ajustez le format à la main.',
      claude:
        'Demandez un artefact pour prévisualiser la plaquette avant de la construire dans Canva.',
    },
    vigilance:
      'Après chaque passage par l’écriture magique ou le redimensionnement, relisez les chiffres : « 24 h ouvrées » peut devenir « 24 h ». N’utilisez ni photo de clients ni photo de locaux réels sans autorisation.',
    formateur: {
      resultat:
        'Trois supports cohérents (plaquette A4, trois diapositives, publication carrée) aux couleurs de l’entreprise, avec les mêmes chiffres partout : 42 000 XPF HT par appareil et par an, 24 h ouvrées dans le Grand Nouméa, 48 h ouvrées dans le Nord, mention « hors TGC ».',
      criteres: [
        'Le texte source a été validé avant la mise en forme.',
        'Prix, délais et mentions sont identiques sur les trois supports.',
        'La mention « Offre réservée aux professionnels. Prix hors TGC. » figure sur la plaquette.',
        'Aucune image ne contredit le contexte (paysage enneigé, autre secteur).',
      ],
      pieges: [
        'Laisser disparaître « ouvrées » dans une version raccourcie : la promesse change.',
        'Accepter un slogan qui promet une « intervention immédiate » ou une « satisfaction garantie ».',
      ],
      competence: 'diligence',
      technique: 'decomposer',
    },
    motsCles: ['plaquette', 'Canva', 'présentation', 'LinkedIn', 'supports commerciaux'],
  },
  {
    id: 'vente-appel-offres-carnet',
    titre: 'Analyser un dossier d’appel d’offres avec un carnet Gemini Notebook',
    metier: 'commercial',
    niveau: 'avance',
    famille: 'synthetiser',
    duree: 45,
    outils: ['notebook'],
    outilConseille: 'notebook',
    situation:
      'Une collectivité lance un appel d’offres pour l’entretien de la climatisation de ses bâtiments. Le dossier de consultation fait 80 pages : règlement de la consultation, cahier des clauses techniques, bordereau des prix. Vous avez dix jours pour décider de répondre et préparer la réponse.',
    objectif:
      'Exploiter un dossier volumineux dans un carnet Gemini Notebook pour en tirer exigences, critères et risques, avec des réponses citées et vérifiées.',
    etapes: [
      'Créez un carnet et chargez comme sources les pièces du dossier de consultation (un dossier public réel ou un dossier fictif généré pour l’exercice).',
      'Collez le prompt de départ dans la discussion et ouvrez chaque citation pour vérifier le passage.',
      'Faites générer un rapport : pièces à fournir, dates limites, critères de jugement et leur pondération.',
      'Remplissez la grille de décision du matériau avec les exigences trouvées.',
      'Rédigez vous-même la recommandation « on répond / on ne répond pas », avec trois arguments, pour votre direction.',
    ],
    prompt:
      'Réponds uniquement à partir des sources du carnet, en citant le document et le passage pour chaque point. Si une information n’y est pas, écris « non précisé dans le dossier ». Questions :\n1. Quelles sont la date et l’heure limites de remise des offres, et le mode de dépôt ?\n2. Quelles pièces faut-il fournir, administratives et techniques ?\n3. Quels sont les critères de jugement des offres et leur pondération ?\n4. Quels délais d’intervention et quelles pénalités sont prévus ?\n5. Une visite des sites est-elle obligatoire ?\n6. Quelles exigences pourraient nous exclure (certifications, chiffre d’affaires minimum, références) ?',
    materiau: {
      titre: 'Grille de décision à compléter',
      texte:
        'Critère;Notre situation;Exigence du dossier;Écart\nCapacité d’intervention;3 techniciens frigoristes, Grand Nouméa et Nord;[à compléter];[à compléter]\nDélai d’intervention;24 h ouvrées dans le Grand Nouméa, 48 h dans le Nord;[à compléter];[à compléter]\nRéférences;12 contrats d’entretien d’entreprises, aucun avec une collectivité;[à compléter];[à compléter]\nAssurances;Responsabilité civile professionnelle à jour;[à compléter];[à compléter]\nCharge de travail;Pic d’activité de novembre à mars (saison chaude);[à compléter];[à compléter]\nPrix;Grille interne à 42 000 XPF HT par appareil et par an;[à compléter];[à compléter]',
    },
    variantes: {
      simple: 'Se limiter aux questions 1, 2 et 5, les plus éliminatoires.',
      poussee:
        'Générer une carte mentale du cahier des clauses techniques pour répartir la rédaction du mémoire technique entre trois collègues.',
    },
    astuces: {
      notebook:
        'Chargez chaque pièce du dossier comme une source séparée : les citations renverront au bon document.',
    },
    vigilance:
      'Vérifiez toujours la date limite et les pièces exigées dans le règlement de la consultation lui-même : une erreur sur ce point écarte l’offre. La décision de répondre et le prix proposé restent ceux de la direction.',
    formateur: {
      resultat:
        'Un tableau des exigences avec citations vérifiées, la date limite et les pièces exactes, les critères pondérés, les clauses à risque, une grille de décision remplie et une recommandation argumentée rédigée par l’apprenant.',
      criteres: [
        'Chaque réponse renvoie à une citation vérifiée dans le dossier.',
        'Les points absents sont signalés « non précisé », pas complétés.',
        'La grille fait apparaître les écarts (références avec des collectivités, pic de la saison chaude).',
        'La recommandation est écrite par l’apprenant.',
      ],
      pieges: [
        'Se fier au rapport pour la date limite sans ouvrir le règlement de la consultation.',
        'Ne pas voir une exigence éliminatoire noyée dans le cahier des clauses techniques.',
      ],
      competence: 'discernement',
      technique: 'sources',
    },
    motsCles: ['appel d’offres', 'marché public', 'Gemini Notebook', 'dossier de consultation'],
  },
];
