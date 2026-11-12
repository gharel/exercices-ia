/**
 * Numérique et télécoms : société de services informatiques, agence web, éditeur de logiciel,
 * intégrateur, opérateur, installateur de réseaux, boutique de téléphonie. Le secteur vend du
 * numérique à des clients (PME, collectivités) ; la fonction informatique interne est dans
 * informatique.js.
 * Toutes les personnes, entreprises, produits, adresses et sommes sont fictifs.
 */

export const vocabulaire = {
  structure: {
    g: 'f',
    s: 'société de services informatiques',
    p: 'sociétés de services informatiques',
  },
  client: { g: 'm', s: 'client', p: 'clients' },
  partenaire: { g: 'm', s: 'éditeur de logiciel', p: 'éditeurs de logiciels' },
  documentCourant: {
    g: 'f',
    s: 'proposition commerciale',
    p: 'propositions commerciales',
  },
  documentLong: { g: 'm', s: 'cahier des charges', p: 'cahiers des charges' },
  reunion: {
    g: 'f',
    s: 'réunion de lancement de projet',
    p: 'réunions de lancement de projet',
  },
  offre: {
    g: 'f',
    s: 'offre d’hébergement Pro Web',
    p: 'offres d’hébergement Pro Web',
  },
  poste: { g: 'm', s: 'technicien d’installation réseau', p: 'techniciens d’installation réseau' },
  evenement: {
    g: 'f',
    s: 'matinée de présentation des solutions numériques aux entreprises',
    p: 'matinées de présentation des solutions numériques aux entreprises',
  },
  visuel: { g: 'm', s: 'flyer commercial', p: 'flyers commerciaux' },
  domaine: 'le numérique et les télécoms',
  motifReclamation: 'les coupures répétées de sa connexion internet',
  donnees: 'le relevé mensuel des incidents détectés par la supervision, client par client',
  colonnes:
    'Mois;Client;Incidents;Durée d’indisponibilité (min);Délai moyen de prise en charge (min)',
  indicateur: 'le délai moyen de prise en charge des incidents sur le trimestre',
  veille:
    'les nouveautés des outils de création de sites, de vente et de paiement en ligne utilisables en Nouvelle-Calédonie',
  sourcesVeille:
    'les notes de version des éditeurs, les communiqués des banques et de l’OPT-NC, et la presse calédonienne',
  jargon: 'la différence entre le débit et la latence d’une connexion internet',
  procedure: 'l’installation d’une box fibre chez un client',
  situationTendue: 'un client furieux dont le site est hors service depuis deux jours',
  donneesSensibles:
    'les identifiants et mots de passe, le code, les adresses IP, les configurations réseau et les données personnelles des clients',
  corpus:
    'la documentation technique, les notes de version et les demandes d’assistance d’une application',
  publicCible: 'les gérants de petits commerces qui veulent un site web ou une connexion fiable',
  etranger: 'un éditeur de logiciel australien qui ne parle qu’anglais',
  themeFormation: 'les étapes de traitement d’une demande d’assistance, de l’appel à la clôture',
  tacheRepetitive: 'les e-mails de suivi envoyés après une intervention chez un client',
  planning: 'les interventions de la semaine de quatre techniciens, entre Nouméa et la brousse',
  comparaison: 'deux offres de connexion internet pour une PME',
};

export const exercices = [
  {
    id: 'num-expliquer-offre-hebergement',
    titre: 'Expliquer une offre d’hébergement web à un client non technicien',
    metier: 'numerique',
    niveau: 'debutant',
    famille: 'corriger',
    duree: 15,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Vous êtes chargé de clientèle dans une agence web de Nouméa. Mme Dupuy, gérante d’une boulangerie à Dumbéa, vous demande ce que contient l’offre d’hébergement « Pro Web » avant de signer. Vous avez seulement la fiche technique, écrite pour les techniciens.',
    objectif:
      'Traduire un texte technique en explication claire pour un client, sans changer un seul chiffre ni inventer une garantie.',
    etapes: [
      'Copiez la fiche technique du matériau dans votre outil d’IA avec le prompt de départ.',
      'Complétez les crochets : le nom du client, son activité et la longueur souhaitée.',
      'Relisez l’explication : chaque sigle est-il traduit ? chaque chiffre est-il identique à la fiche ?',
      'Demandez à l’IA de lister les points de la fiche qu’elle n’a pas expliqués ou dont elle n’est pas sûre.',
      'Gardez la version finale et ajoutez vous-même les deux questions que la cliente devrait vous poser avant de signer.',
    ],
    prompt:
      'Tu es chargé de clientèle dans une agence web à Nouméa. Explique l’offre décrite dans la fiche ci-dessous à [nom du client], gérant de [activité], qui n’est pas technicien. Écris en vouvoyant, en [nombre] mots environ, sans sigle non expliqué et avec une seule comparaison tirée du quotidien. Termine par une partie « Ce que cela change pour vous » en quatre puces. Ne modifie aucun chiffre et n’ajoute aucune garantie absente de la fiche. Si un point de la fiche est ambigu, signale-le au lieu de le deviner.\n\n<fiche>\n[collez la fiche technique ici]\n</fiche>',
    materiau: {
      titre: 'Fiche technique de l’offre « Pro Web » (fictive)',
      texte:
        'OFFRE PRO WEB : hébergement mutualisé SSD\nEspace disque : 20 Go SSD\nRessources : 1 vCPU partagé, 2 Go de RAM\nBande passante : non mesurée (usage raisonnable)\nTechnologies : PHP 8.x, base MySQL, accès SFTP\nCertificat TLS : inclus, renouvelé automatiquement\nMessagerie : 5 boîtes IMAP/SMTP de 2 Go\nSauvegardes : quotidiennes, rétention 7 jours, restauration sur demande (ticket)\nDisponibilité cible (SLA) : 99,5 % par mois, hors maintenances programmées\nSupport : e-mail et téléphone, jours ouvrés 7 h 30 à 16 h 30 (heure de Nouméa)\nLocalisation des serveurs : datacenter à Sydney (Australie)\nNom de domaine .nc : non inclus, à la charge du client\nTarif : 6 900 XPF HT par mois, engagement 12 mois',
    },
    variantes: {
      simple:
        'Demander seulement l’explication en 100 mots, sans la partie « Ce que cela change ».',
      poussee:
        'Demander ensuite la réponse à trois questions de la cliente : « Et si mon site tombe un dimanche ? », « Mes données sont où ? », « Combien de temps pour récupérer une sauvegarde ? », avec l’indication des points à confirmer auprès de l’équipe technique.',
    },
    astuces: {
      chatgpt:
        'Ouvrez le texte dans le canevas : vous pouvez demander de simplifier un seul paragraphe sans toucher au reste.',
      copilot:
        'Dans Outlook, partez d’un « Brouillon avec Copilot » pour l’e-mail à la cliente, puis lancez « Coaching par Copilot » avant d’envoyer.',
      gemini:
        'Dans Gmail, « Aide-moi à écrire » met la réponse en forme ; collez toujours les chiffres de la fiche dans la demande.',
    },
    vigilance:
      'Ne collez aucune information réelle sur un client ni sur la configuration de vos serveurs. Une explication simplifiée ne doit jamais promettre plus que la fiche : vérifiez la disponibilité, les sauvegardes et les horaires du support.',
    formateur: {
      resultat:
        'Une explication de 150 mots environ, sans sigle opaque, qui garde tous les chiffres (20 Go, 5 boîtes, sauvegarde sur 7 jours, 99,5 %, 6 900 XPF HT, 12 mois), mentionne le serveur à Sydney et le domaine .nc non inclus.',
      criteres: [
        'Les chiffres et conditions de la fiche sont identiques dans l’explication.',
        'Chaque sigle (SSD, SLA, TLS, SFTP) est traduit ou supprimé.',
        'Le serveur à Sydney et le domaine .nc non inclus sont mentionnés.',
        'Aucune garantie nouvelle n’a été ajoutée (« zéro panne », « sauvegarde illimitée »).',
      ],
      pieges: [
        'Laisser l’IA écrire « disponible 24 h sur 24 » alors que le support n’est ouvert que les jours ouvrés.',
        'Traduire 99,5 % par « toujours en ligne » : cela représente environ 3 h 36 d’interruption possible par mois de 30 jours, à confirmer avec l’équipe.',
        'Oublier que le nom de domaine n’est pas inclus.',
      ],
      competence: 'discernement',
      technique: 'format',
    },
    motsCles: ['hébergement', 'offre', 'vulgariser', 'jargon', 'client', 'sla'],
  },
  {
    id: 'num-compte-rendu-intervention',
    titre: 'Rédiger le compte rendu d’une intervention à partir de notes de terrain',
    metier: 'numerique',
    niveau: 'debutant',
    famille: 'rediger',
    duree: 15,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'copilot',
    situation:
      'Vous êtes technicien d’installation dans une société de services informatiques. Ce matin, vous êtes intervenu dans un cabinet comptable de Ducos pour un Wi-Fi très lent. Vous avez pris des notes sur votre téléphone entre deux câbles. Le client attend un compte rendu clair avant la fin de la journée.',
    objectif:
      'Transformer des notes brutes en compte rendu fidèle et lisible par le client, sans y ajouter de diagnostic imaginé.',
    etapes: [
      'Copiez vos notes de terrain dans votre outil d’IA avec le prompt de départ.',
      'Complétez les crochets : le nom du contact (un prénom suffit) et la longueur souhaitée.',
      'Relisez le compte rendu en cochant chaque fait : est-il dans vos notes ? Rayez ce que l’IA a ajouté.',
      'Vérifiez les chiffres : débits avant et après, durée de l’intervention, matériel remplacé.',
      'Demandez de séparer ce qui est réglé de ce qui reste à faire, avec la date de la prochaine visite.',
    ],
    prompt:
      'Tu es technicien d’installation dans une société de services informatiques à Nouméa. À partir de mes notes de terrain ci-dessous, rédige le compte rendu d’intervention destiné à [prénom du contact], le client, qui n’est pas technicien. Structure : 1) motif de l’intervention, 2) ce qui a été constaté, 3) ce qui a été fait, 4) ce qui reste à faire avec la date, 5) un conseil pratique. Utilise uniquement les informations des notes : si une information manque, écris « à préciser » au lieu de la deviner. Ton factuel et courtois, vouvoiement, 200 mots au maximum.\n\n<notes>\n[collez vos notes de terrain ici]\n</notes>',
    materiau: {
      titre: 'Notes de terrain prises sur le téléphone (client fictif)',
      texte:
        'Cabinet Pacifique Compta, Ducos, intervention mardi 10 nov\narrivé 8h40, accueil par Mme Wéa\nmotif : wifi très lent salle de réunion et bureau du fond, depuis 2 semaines\ntest débit avant : 8 Mbit/s dans la salle de réunion, 45 Mbit/s à l’accueil\nbox en bout de couloir derrière un meuble métal, cachée\ncâble RJ45 du bureau du fond écrasé par un pied de bureau, coupures\nai déplacé la box à l’accueil, remplacé 12 m de câble (réf. câble cat6 12m)\nbornes wifi supplémentaire pas posée, pas en stock, à commander\ntest débit après : 90 Mbit/s salle de réunion, 85 Mbit/s bureau du fond\nimprimante réseau toujours pas détectée par 2 postes, à revoir\nmot de passe du wifi affiché sur un post-it collé sur la box, à changer (leur dire)\nclient un peu agacé d’avoir attendu 1h le matin (ma faute, bouchon à Ducos)\nfini 11h55, 3h15 sur place\nprochaine visite jeudi 12 nov à 14h pour l’imprimante',
    },
    variantes: {
      simple: 'Demander uniquement la liste « fait / reste à faire », sans mise en forme d’e-mail.',
      poussee:
        'Demander deux versions, l’une pour le client et l’autre pour le dossier interne (avec les détails techniques et le temps passé), puis comparer ce qui change.',
    },
    astuces: {
      copilot:
        'Dans Outlook, « Brouillon avec Copilot » rédige le premier jet à partir de vos notes ; vérifiez ensuite chaque chiffre.',
      claude:
        'Demandez le compte rendu dans un artefact : vous pourrez retoucher une partie sans régénérer le reste.',
    },
    vigilance:
      'Dans un compte rendu, ne reprenez jamais de mot de passe ni de configuration réelle du réseau du client. Le post-it se signale sans le recopier. Remplacez le nom du client par un nom fictif avant de coller vos notes.',
    formateur: {
      resultat:
        'Un compte rendu en cinq parties : motif, constat (box cachée, câble écrasé), actions (box déplacée, 12 m de câble remplacés, débit de 8 à 90 Mbit/s), reste à faire (borne à commander, imprimante, visite jeudi 12 novembre à 14 h) et conseil (changer le mot de passe).',
      criteres: [
        'Tous les chiffres (8 puis 90 Mbit/s, 12 m, 3 h 15) sont conformes aux notes.',
        'La date et l’heure de la prochaine visite sont reprises.',
        'Le mot de passe n’est pas recopié et un changement est recommandé.',
        'Aucune cause ou action absente des notes n’a été ajoutée.',
      ],
      pieges: [
        'Laisser l’IA conclure que « le problème est entièrement résolu » alors que l’imprimante ne l’est pas.',
        'Faire figurer le retard du matin ou une excuse inventée dans le compte rendu.',
        'Inventer la marque ou le modèle de la box.',
      ],
      competence: 'discernement',
      technique: 'structurer',
    },
    motsCles: ['intervention', 'compte rendu', 'notes', 'technicien', 'wifi'],
  },
  {
    id: 'num-questions-demande-confuse',
    titre: 'Transformer la demande confuse d’un client en liste de questions à lui poser',
    metier: 'numerique',
    niveau: 'debutant',
    famille: 'organiser',
    duree: 15,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'gemini',
    situation:
      'Vous êtes chef de projet dans une agence web de Nouméa. Un gérant de gîtes de Lifou et de Maré vous écrit un e-mail long et décousu pour « un site où on peut réserver ». Avant de chiffrer quoi que ce soit, vous devez comprendre ce qu’il veut vraiment.',
    objectif:
      'Faire trier à l’IA ce qui est dit, ce qui est contradictoire et ce qui manque, puis obtenir des questions de cadrage classées par priorité.',
    etapes: [
      'Copiez l’e-mail du client dans votre outil d’IA avec le prompt de départ.',
      'Vérifiez le tri : « ce que le client demande », « ce qu’on ne sait pas », « ce qui se contredit ». Ajoutez ce que l’IA a manqué.',
      'Demandez de classer les questions en trois bloquantes (sans réponse, impossible de chiffrer) et le reste.',
      'Relisez le ton des questions : elles doivent être compréhensibles par un client qui n’est pas technicien.',
      'Mettez la liste en forme d’e-mail court, que vous enverrez après l’avoir relu.',
    ],
    prompt:
      'Tu es chef de projet dans une agence web à Nouméa. Voici l’e-mail confus d’un client. Fais-moi :\n1. un résumé de ce qu’il demande, en cinq points au maximum ;\n2. la liste de ce qui est contradictoire ou flou dans son message ;\n3. une liste de dix questions à lui poser, avec les trois questions bloquantes en premier, formulées simplement, sans jargon.\nN’invente aucune fonctionnalité qu’il n’a pas demandée. Si une information est implicite, écris-la comme une hypothèse à confirmer.\n\n<email>\n[collez l’e-mail du client ici]\n</email>',
    materiau: {
      titre: 'E-mail du client (fictif)',
      texte:
        'Objet : site réservation URGENT\n\nBonjour,\nJe m’appelle M. Hnamano, je gère deux gîtes, un à Lifou et un à Maré. Mon neveu avait fait le site il y a 5 ans mais il est parti en Australie et personne n’a les accès. Je voudrais un nouveau site où les gens peuvent réserver directement comme chez les gros, avec paiement, mais pas trop cher.\nIl faut que ça marche aussi sur téléphone parce que mes clients sont souvent en vacances. Et en anglais aussi, on a beaucoup d’Australiens. Les photos, j’en ai plein sur mon ordinateur et sur Facebook.\nIl faut que ça soit prêt pour la saison de décembre. Mon comptable veut que ça se connecte à son logiciel de compta, je ne sais pas lequel. Je ne veux pas payer de commission aux plateformes. Mais je veux quand même apparaître sur les sites de réservation, c’est important.\nPour le budget je pensais à 300 000 XPF mais si c’est mieux je peux aller plus haut. Appelez-moi plutôt le soir, la connexion à Maré est mauvaise le matin.\nCordialement',
    },
    variantes: {
      simple: 'Demander seulement les trois questions bloquantes, sans résumé.',
      poussee:
        'Demander ensuite un plan de rendez-vous de 30 minutes par téléphone avec ces questions, puis faire jouer le client par l’IA pour vous entraîner à poser les questions.',
    },
    astuces: {
      gemini:
        'Ouvrez la liste de questions dans Canvas pour la reformuler en e-mail court sans tout régénérer.',
      copilot:
        'Dans Outlook, « Résumer » est utile si le client a écrit plusieurs e-mails : vous obtenez les points communs avant de poser vos questions.',
    },
    vigilance:
      'Remplacez le nom du client et ses lieux précis par des données fictives avant de coller son e-mail dans un outil d’IA. Ne collez jamais les accès à l’ancien site : ils ne doivent même pas figurer dans l’e-mail.',
    formateur: {
      resultat:
        'Un résumé fidèle, la liste des contradictions (pas de commission mais présence sur les plateformes ; « pas trop cher » mais budget flou ; urgence et accès perdus) et dix questions dont trois bloquantes : accès à l’ancien site et au domaine, budget plafond, plateformes à relier.',
      criteres: [
        'Les contradictions principales sont repérées.',
        'Les questions bloquantes empêchent vraiment de chiffrer.',
        'Les questions sont formulées simplement, sans jargon.',
        'Aucune fonctionnalité n’est ajoutée sans avoir été présentée comme une hypothèse.',
      ],
      pieges: [
        'Laisser l’IA déduire un budget ou un délai qui ne figure pas dans l’e-mail.',
        'Oublier que le domaine du site actuel et ses accès sont inconnus.',
        'Poser dix questions techniques que le client ne peut pas comprendre.',
      ],
      competence: 'description',
      technique: 'structurer',
    },
    motsCles: ['cadrage', 'brief', 'questions', 'e-mail', 'réservation', 'client'],
  },
  {
    id: 'num-affiche-atelier-canva',
    titre: 'Créer dans Canva le visuel d’annonce d’un atelier numérique',
    metier: 'numerique',
    niveau: 'debutant',
    famille: 'visuels',
    duree: 20,
    outils: ['canva', 'chatgpt', 'claude'],
    outilConseille: 'canva',
    situation:
      'Votre agence organise un atelier gratuit pour les commerçants de Koné : « Protéger son entreprise des arnaques par e-mail ». Vous devez préparer l’affiche pour la vitrine et la publication carrée pour les réseaux sociaux de l’agence.',
    objectif:
      'Préparer le texte avec l’IA, générer le visuel dans Canva, puis relire chaque information (date, lieu, inscription) avant publication.',
    etapes: [
      'Avec ChatGPT ou Claude, faites rédiger le texte de l’affiche à partir de la fiche : un titre court, trois points forts et les informations pratiques.',
      'Dans Canva, décrivez l’affiche voulue à l’IA Canva ou au Design magique : format A4 portrait, couleurs de l’agence, texte lisible de loin.',
      'Choisissez une proposition, remplacez le texte d’exemple par le vôtre et vérifiez la date, l’heure, le lieu et le moyen de s’inscrire.',
      'Utilisez l’écriture magique pour raccourcir un texte qui déborde.',
      'Déclinez l’affiche en format carré avec le redimensionnement magique (Pro) ou dans un nouveau design.',
    ],
    prompt:
      'Tu es chargé de communication dans une agence web en Nouvelle-Calédonie. À partir de la fiche ci-dessous, propose le texte d’une affiche pour un atelier gratuit : un titre de six mots au maximum, trois points forts de cinq mots chacun, puis la date, l’heure, le lieu et l’inscription. N’ajoute aucune information absente de la fiche. Propose trois titres au choix, dont un qui s’adresse directement aux commerçants.\n\n<fiche>\n[collez la fiche de l’atelier ici]\n</fiche>',
    materiau: {
      titre: 'Fiche de l’atelier (fictive)',
      texte:
        'Atelier : Protéger son entreprise des arnaques par e-mail\nPublic : commerçants, artisans et gérants de TPE du Nord\nLieu : espace numérique de Koné (salle de formation, rez-de-chaussée)\nDate : jeudi 26 novembre, de 14 h à 16 h\nContenu : reconnaître un e-mail frauduleux, mots de passe et double authentification, que faire en cas de doute\nGratuit, 20 places, inscription obligatoire avant le 23 novembre\nInscription : par e-mail à atelier@agence-exemple.nc ou au 25 00 00\nAnimé par Lucie, formatrice de l’agence\nApportez votre téléphone ou votre ordinateur portable',
    },
    variantes: {
      simple:
        'Partir directement d’un modèle d’affiche Canva et n’utiliser l’IA que pour raccourcir les textes.',
      poussee:
        'Créer trois affiches de style différent (sobre, chaleureuse, très visuelle), les faire commenter par un collègue, puis enregistrer la meilleure comme modèle pour les prochains ateliers.',
    },
    astuces: {
      canva:
        'Si l’agence a un kit de marque (Pro), appliquez-le : couleurs, polices et logo se mettent en place en un clic.',
      chatgpt:
        'Demandez trois titres, puis lequel se lit le mieux à trois mètres de la vitrine, et pourquoi.',
    },
    vigilance:
      'L’affiche est publique : pas d’adresse e-mail personnelle d’un salarié ni de nom de famille, seulement le contact prévu pour les inscriptions. Relisez la date : le jeudi 26 novembre doit bien tomber un jeudi dans le calendrier de l’année.',
    formateur: {
      resultat:
        'Une affiche A4 lisible avec un titre court, trois points forts, la date (jeudi 26 novembre, 14 h à 16 h), le lieu, le nombre de places, la date limite d’inscription (23 novembre) et le contact, ainsi que sa version carrée.',
      criteres: [
        'Date, heure, lieu, limite d’inscription et contact sont exacts.',
        'Le texte se lit de loin : peu de mots, bon contraste.',
        'Aucune promesse ajoutée (certificat, matériel offert, repas).',
        'La version carrée garde les mêmes informations.',
      ],
      pieges: [
        'Garder un texte d’exemple du modèle Canva (fausse date, faux lieu).',
        'Laisser un texte trop long, coupé sur le bord du visuel.',
        'Afficher l’atelier comme « certifiant » alors que la fiche ne le dit pas.',
      ],
      competence: 'diligence',
      technique: 'format',
    },
    motsCles: ['affiche', 'Canva', 'atelier', 'sensibilisation', 'Koné'],
  },
  {
    id: 'num-cahier-des-charges-entretien',
    titre: 'Rédiger le cahier des charges d’un site web à partir d’un entretien client',
    metier: 'numerique',
    niveau: 'intermediaire',
    famille: 'rediger',
    duree: 30,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Vous êtes chef de projet dans une agence web de Nouméa. Vous venez d’interviewer la directrice d’une coopérative agricole de Koné qui veut vendre ses produits en ligne. Une transcription automatique de l’entretien vous attend. Il faut en tirer un cahier des charges que la coopérative validera avant tout devis.',
    objectif:
      'Structurer un document à partir d’un échange oral, repérer les contradictions et laisser les points flous visibles au lieu de les combler.',
    etapes: [
      'Collez la transcription dans votre outil d’IA avec le prompt de départ et demandez d’abord la liste des exigences, sans rédiger.',
      'Vérifiez la liste : chaque exigence figure-t-elle vraiment dans la transcription ? Marquez celles qui sont des suppositions.',
      'Demandez le cahier des charges en parties : contexte, objectifs, public, fonctionnalités (obligatoires et souhaitables), contraintes, délais, budget, ce qui est exclu.',
      'Demandez une liste « points à valider avec la cliente » qui reprend toutes les contradictions et tous les chiffres flous.',
      'Comparez le budget et les délais cités à ceux de la transcription : ce sont les points où l’IA se trompe le plus.',
      'Relisez l’ensemble : le cahier des charges engage l’agence, il reste un document que vous signez.',
    ],
    prompt:
      'Tu es chef de projet dans une agence web à Nouméa. Voici la transcription d’un entretien avec une cliente. Commence par établir la liste de ses exigences sous forme de tableau : exigence, citation de la transcription, statut (explicite, déduite). Ne rédige pas encore le cahier des charges. Signale les contradictions et les informations absentes. N’invente ni fonctionnalité, ni chiffre, ni délai : écris « à valider » quand un point n’est pas clair.\n\n<transcription>\n[collez la transcription ici]\n</transcription>',
    materiau: {
      titre: 'Transcription de l’entretien (cliente fictive)',
      texte:
        'Chef de projet : Pouvez-vous me présenter la coopérative ?\nMme Tein : Oui, on est une coopérative d’une quarantaine d’adhérents, à Koné, on produit du miel, des fruits, un peu de café, du jus de… euh, de pamplemousse surtout. Aujourd’hui on vend au marché et dans quelques magasins.\nChef de projet : Et le site, ce serait pour quoi faire ?\nMme Tein : Vendre en ligne. Livrer à Nouméa, parce que c’est là qu’il y a les clients. Enfin, Nouméa et le Nord. Les îles, ça on verra, c’est trop compliqué avec le fret.\nChef de projet : Les produits, vous en avez combien ?\nMme Tein : Une trentaine, mais ça change selon les saisons. Le miel, on en a toute l’année, les fruits non. Il faut que ce soit facile de les mettre en pause quand il n’y a plus de stock.\nChef de projet : Qui s’occupera du site au quotidien ?\nMme Tein : Moi et une employée, Aurélie. On n’est pas très informatiques. Il faut que ce soit simple. Les commandes, on veut les recevoir par e-mail, mais aussi un tableau Excel avec tout, parce que c’est comme ça que le comptable travaille.\nChef de projet : Et le paiement ?\nMme Tein : Par carte, oui. Mais aussi qu’on puisse payer à la livraison, parce que beaucoup de gens du Nord ne veulent pas payer en ligne. Et peut-être un virement. Je ne sais pas ce qui est possible.\nChef de projet : Pour le calendrier ?\nMme Tein : On voudrait être en ligne avant les fêtes. Mi-décembre au plus tard, sinon ça ne sert à rien. On peut commencer à la rentrée, enfin début novembre.\nChef de projet : Et le budget ?\nMme Tein : Un million et demi, c’est ce que le conseil d’administration a voté. Mais si c’est deux millions, on trouvera. Enfin, je dois demander.\nChef de projet : Vous avez déjà un nom de domaine, un logo ?\nMme Tein : Un logo oui, que l’on a fait faire il y a longtemps, la qualité n’est pas bonne. Le nom de domaine, je ne sais pas, il faudra demander à Aurélie.\nChef de projet : Il y aura des photos ?\nMme Tein : Oui, mais c’est des photos de téléphone. Peut-être qu’il faudrait refaire des photos, mais on n’a pas de budget pour ça. Enfin si, un petit peu.',
    },
    variantes: {
      simple:
        'Se limiter au tableau des exigences et à la liste des points à valider, sans rédiger le cahier des charges.',
      poussee:
        'Demander ensuite une version « allotie » en deux phases (indispensable avant les fêtes, ensuite) avec ce qui peut être livré plus tard, puis un e-mail de validation à la cliente.',
    },
    astuces: {
      claude:
        'Demandez le cahier des charges dans un artefact : vous retouchez une partie à la fois, et pouvez le faire exporter en fichier Word avec « Création de fichiers ».',
      copilot:
        'Dans Word, collez la transcription et demandez à Copilot de rédiger le cahier des charges ; il reste modifiable dans le document.',
      chatgpt:
        'Ouvrez le résultat dans le canevas pour demander de raccourcir ou de reformuler une partie précise.',
    },
    vigilance:
      'Une transcription réelle contient des noms et des chiffres de la cliente : remplacez-les avant de la coller. Le cahier des charges ne doit contenir aucun prix, délai ni fonctionnalité que la cliente n’a pas dits : ce qui manque se pose en question.',
    formateur: {
      resultat:
        'Un cahier des charges structuré, avec une liste des exigences (une trentaine de produits à mettre en pause, livraison Nouméa et Nord, paiement par carte ou à la livraison, commandes reçues par e-mail et en tableau Excel) et une liste de points à valider : budget (1 500 000 ou 2 000 000 XPF), livraison dans les îles, virement, domaine, photos, début des travaux.',
      criteres: [
        'Chaque exigence renvoie à une citation de la transcription.',
        'Les deux budgets (1 500 000 et 2 000 000 XPF) sont signalés comme à valider.',
        'Le calendrier (en ligne mi-décembre) est mis en regard de la date de démarrage incertaine.',
        'Les fonctionnalités non demandées (programme de fidélité, application mobile) sont absentes.',
      ],
      pieges: [
        'Laisser l’IA fixer un budget unique ou une date de livraison fermes.',
        'Ajouter la livraison dans les îles que la cliente a écartée pour l’instant.',
        'Présenter le virement ou la gestion des stocks comme confirmés alors qu’ils ne le sont pas.',
      ],
      competence: 'discernement',
      technique: 'decomposer',
    },
    motsCles: ['cahier des charges', 'entretien', 'transcription', 'boutique en ligne', 'cadrage'],
  },
  {
    id: 'num-estimation-charge-projet-web',
    titre: 'Estimer la charge d’un projet web poste par poste, avec trois hypothèses',
    metier: 'numerique',
    niveau: 'intermediaire',
    famille: 'analyser',
    duree: 30,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'copilot',
    situation:
      'Vous êtes responsable de projets dans une agence web de Nouméa. Une chaîne de gîtes (Lifou, Maré, Poindimié) vous demande un site de réservation. Votre équipe a donné ses estimations en jours par poste, avec un minimum, un probable et un maximum. Il faut présenter à la direction trois hypothèses de coût en XPF.',
    objectif:
      'Faire calculer et commenter une estimation par l’IA, vérifier les totaux à la main et garder la décision du prix à l’humain.',
    etapes: [
      'Collez le tableau des estimations dans votre outil d’IA avec le prompt de départ.',
      'Vérifiez à la calculatrice le total de la ligne « Moteur de réservation » dans les trois hypothèses.',
      'Demandez les totaux (jours et XPF HT) pour chaque hypothèse, et une liste des incohérences dans les données.',
      'Demandez un tableau de synthèse pour la direction : hypothèse, jours, coût, risques.',
      'Rédigez vous-même la recommandation : l’IA calcule, elle ne décide pas du prix proposé au client.',
    ],
    prompt:
      'Tu es analyste de gestion dans une agence web de Nouméa. Voici les estimations de l’équipe pour un projet (jours minimum, probable et maximum, taux journalier en XPF hors taxes). Pour chaque ligne, calcule le coût dans les trois hypothèses. Donne ensuite, dans un tableau, le total des jours et le total en XPF pour : hypothèse basse (jours minimum), hypothèse probable et hypothèse haute (jours maximum). Montre tes calculs. Si une donnée te semble incohérente, signale-la au lieu de la corriger. Ne propose aucun prix de vente : ce n’est pas ton rôle.\n\n<estimations>\n[collez le tableau ici]\n</estimations>',
    materiau: {
      titre: 'Estimations de l’équipe (projet et tarifs fictifs, XPF HT)',
      texte:
        'Poste;Tâche;Jours minimum;Jours probable;Jours maximum;Taux journalier (XPF)\nChef de projet;Cadrage et ateliers avec le client;2;3;4;55 000\nChef de projet;Suivi et réunions;3;5;8;55 000\nDesigner;Maquettes et charte;3;4;6;48 000\nDéveloppeur;Moteur de réservation;8;12;20;60 000\nDéveloppeur;Paiement en ligne;2;3;6;60 000\nDéveloppeur;Pages des gîtes et galeries photos;3;4;6;60 000\nRédacteur;Contenus et traduction en anglais;2;4;5;40 000\nTesteur;Tests et recette;4;3;5;45 000\nFormateur;Formation de l’équipe cliente;1;1;2;55 000\nChef de projet;Mise en ligne et suivi après lancement;1;2;3;55 000',
    },
    variantes: {
      simple: 'Demander uniquement le total de l’hypothèse probable, en jours et en XPF.',
      poussee:
        'Demander un graphique de la répartition du coût par poste, puis une marge d’aléas calculée à part (en laissant le pourcentage entre crochets) et une note de deux pages pour la direction.',
    },
    astuces: {
      copilot:
        'Mettez le tableau dans Excel avant de le confier à Copilot dans Excel : il le lit beaucoup mieux ; vérifiez ensuite les formules qu’il propose.',
      chatgpt:
        'Déposez le fichier : l’analyse de données calcule en code, que vous pouvez afficher pour vérifier un total.',
      gemini:
        'Collez le tableau dans Google Sheets et utilisez « Demander à Gemini » pour ajouter les colonnes de coût.',
    },
    vigilance:
      'Les taux journaliers et les marges de votre agence sont confidentiels : utilisez des chiffres fictifs ou arrondis pour vous entraîner. Les totaux se vérifient toujours à la main, ligne par ligne.',
    formateur: {
      resultat:
        'Trois totaux : 29 jours et 1 569 000 XPF HT (hypothèse basse), 41 jours et 2 232 000 XPF HT (probable), 65 jours et 3 568 000 XPF HT (haute), avec la ligne « Tests et recette » signalée (probable de 3 jours inférieur au minimum de 4).',
      criteres: [
        'Les trois totaux en jours et en XPF sont exacts et vérifiés par l’apprenant.',
        'L’incohérence de la ligne « Tests et recette » est repérée, non corrigée en silence.',
        'Aucun prix de vente n’est proposé par l’IA.',
        'La recommandation finale est rédigée par l’apprenant.',
      ],
      pieges: [
        'Laisser l’IA « corriger » les 3 jours probables en 4 sans le dire (le total probable passerait alors à 2 277 000 XPF).',
        'Confondre un minimum et un objectif : l’hypothèse basse est rarement tenue sur un projet de réservation en ligne.',
        'Présenter à la direction les totaux de l’IA sans les avoir recalculés.',
      ],
      competence: 'discernement',
      technique: 'critique',
    },
    motsCles: ['estimation', 'charge', 'chiffrage', 'projet web', 'XPF', 'hypothèses'],
  },
  {
    id: 'num-rapport-incident-coupure',
    titre: 'Rédiger le rapport d’incident d’une coupure de service pour les clients',
    metier: 'numerique',
    niveau: 'intermediaire',
    famille: 'rediger',
    duree: 30,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Mardi matin, le service de messagerie hébergé par votre société a été coupé puis très ralenti pendant près de trois heures pour une quarantaine de clients. Vous êtes responsable de la relation client : le directeur vous demande un rapport factuel à envoyer aux clients concernés, qui ne promette rien d’hasardeux.',
    objectif:
      'Construire un message en plusieurs échanges à partir d’une chronologie : faits, cause confirmée ou hypothèse, actions, et ce qui reste incertain.',
    etapes: [
      'Collez la chronologie et les consignes du directeur dans votre outil d’IA, et demandez d’abord un tableau « faits confirmés / hypothèses / décisions à prendre », sans rédiger.',
      'Vérifiez les durées : calculez vous-même celle de la coupure et celle de la dégradation.',
      'Demandez le rapport pour les clients, en 250 mots au maximum, en séparant impact, cause, actions réalisées et prochaines étapes.',
      'Demandez à l’IA de repérer toute phrase qui promet, minimise ou affirme une cause non confirmée, et réécrivez-les.',
      'Faites valider le rapport par le directeur et l’équipe technique avant envoi.',
    ],
    prompt:
      'Tu es responsable de la relation client d’une société de services informatiques à Nouméa. À partir de la chronologie ci-dessous, prépare d’abord un tableau en trois colonnes : faits confirmés, hypothèses non confirmées, décisions que la direction doit encore prendre. Ne rédige pas encore le rapport. N’utilise aucun élément absent de la chronologie et n’en déduis aucune cause : si un point manque, écris « à confirmer ».\n\n<chronologie>\n[collez la chronologie ici]\n</chronologie>\n\n<consignes_direction>\n[collez les consignes ici]\n</consignes_direction>',
    materiau: {
      titre: 'Chronologie de l’incident et consignes du directeur (fictives)',
      texte:
        'CHRONOLOGIE (mardi 3 novembre, heure de Nouméa)\n06h52 : alerte de la supervision, le serveur de messagerie ne répond plus\n07h05 : première prise en charge par l’astreinte (Claire)\n07h20 : premiers appels de clients (cabinet dentaire, deux hôtels)\n07h40 : constat d’un disque plein sur le serveur, hypothèse d’une saturation des journaux\n08h15 : espace libéré, redémarrage du service, la messagerie reçoit mais reste très lente\n08h50 : file d’attente de 4 200 messages en cours de traitement\n09h47 : retour à la normale confirmé, la file est vide\n10h30 : message d’information envoyé aux clients par le standard\n\nCE QU’ON SAIT : 38 comptes d’entreprise concernés. Aucune perte de message constatée à ce stade, à confirmer par les journaux. La cause exacte de la saturation du disque n’est pas encore identifiée.\n\nCONSIGNES DU DIRECTEUR : « Écrivez que l’incident est définitivement réglé et que cela n’arrivera plus. Dites aussi qu’on offre un mois aux clients. » (aucun geste commercial n’a été décidé par la direction commerciale)',
    },
    variantes: {
      simple:
        'Demander seulement un message de 100 mots, sans le tableau faits confirmés et hypothèses.',
      poussee:
        'Demander ensuite une version interne pour l’équipe technique, avec les actions de prévention proposées (à valider), puis une réponse type à un client en colère qui réclame un remboursement.',
    },
    astuces: {
      claude:
        'Demandez le tableau dans un artefact, puis le rapport dans un second : vous pouvez comparer la chronologie et le texte côte à côte.',
      copilot:
        'Dans Outlook, lancez « Coaching par Copilot » sur votre message final pour repérer le ton trop rassurant ou trop défensif.',
      chatgpt:
        'Ouvrez le rapport dans le canevas et demandez de supprimer une promesse sans réécrire le reste.',
      gemini: 'Dans Canvas, demandez de réduire le texte à 250 mots sans changer les heures.',
    },
    vigilance:
      'Ne citez dans le rapport aucun nom de client, aucune adresse ni aucun détail de configuration du serveur. N’écrivez pas ce qui n’est pas établi : une cause supposée, une garantie de non-retour, un geste commercial non décidé.',
    formateur: {
      resultat:
        'Un tableau puis un rapport d’environ 250 mots : coupure de 06h52 à 08h15 (1 h 23), puis messagerie dégradée jusqu’à 09h47 (1 h 32), soit 2 h 55 d’incident au total, cause encore à confirmer, aucune perte de message constatée à ce stade, aucune promesse ni geste commercial non décidé.',
      criteres: [
        'Les durées (1 h 23 de coupure, 1 h 32 de service dégradé, 2 h 55 au total) sont exactes et les heures conformes à la chronologie.',
        'La cause du disque plein est présentée comme une hypothèse ou une piste, pas un fait.',
        'Les promesses « définitivement réglé », « cela n’arrivera plus » et « un mois offert » n’apparaissent pas.',
        'Le rapport distingue impact, cause, actions et prochaines étapes.',
      ],
      pieges: [
        'Accepter une formule comme « incident sans conséquence » alors que 38 comptes ont été touchés.',
        'Écrire « aucun message perdu » sans le conditionner à la vérification des journaux.',
        'Laisser l’IA inventer un plan d’action technique ou une date de fin.',
      ],
      competence: 'diligence',
      technique: 'decomposer',
    },
    motsCles: ['incident', 'coupure', 'rapport', 'messagerie', 'communication de crise'],
  },
  {
    id: 'num-analyse-assistance-maintenance',
    titre:
      'Analyser les demandes d’assistance d’un trimestre pour proposer une offre de maintenance',
    metier: 'numerique',
    niveau: 'intermediaire',
    famille: 'analyser',
    duree: 30,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Vous êtes consultant dans une société de services informatiques de Nouméa. La direction constate que le support débordé facture mal ses interventions. Elle vous demande une analyse des demandes du dernier trimestre et une première idée d’offre de maintenance mensuelle.',
    objectif:
      'Faire analyser un tableau par l’IA, repérer ce qui n’est pas facturé, et construire une proposition à partir de chiffres vérifiés.',
    etapes: [
      'Collez le tableau dans votre outil d’IA avec le prompt de départ.',
      'Vérifiez à la calculatrice le total des heures et le total facturé.',
      'Demandez l’écart entre le facturé et la valeur des heures passées au tarif de 8 000 XPF de l’heure, client par client.',
      'Demandez les deux catégories de demandes les plus consommatrices d’heures et les clients à surveiller.',
      'Demandez deux formules de maintenance mensuelle (essentielle et confort), avec les hypothèses de prix entre crochets : vous fixerez les prix vous-même.',
    ],
    prompt:
      'Tu es consultant dans une société de services informatiques à Nouméa. Voici les demandes d’assistance du dernier trimestre. Le tarif horaire affiché est de 8 000 XPF HT.\n1. Calcule le total des demandes, le total des heures et le total facturé.\n2. Pour chaque client, calcule la valeur des heures au tarif affiché, le montant facturé et l’écart.\n3. Indique les catégories qui consomment le plus d’heures.\n4. Signale les clients dont l’écart est important et propose une explication possible, présentée comme une hypothèse.\n5. Propose deux formules de maintenance mensuelle, avec leur contenu ; laisse les prix entre crochets.\nMontre tes calculs. Si une donnée te semble anormale, signale-la au lieu de la corriger.\n\n<demandes>\n[collez le tableau ici]\n</demandes>',
    materiau: {
      titre: 'Demandes d’assistance du trimestre (clients et montants fictifs)',
      texte:
        'Client;Commune;Catégorie principale;Demandes;Heures passées;Facturé (XPF)\nCabinet dentaire;Nouméa;Messagerie;18;11;88 000\nBoulangerie Les Délices;Dumbéa;Caisse et imprimante;9;6;48 000\nTransports Nord Express;Koné;Wi-Fi et réseau;22;19;120 000\nGîte de la Baie;Poindimié;Connexion internet;7;8;0\nCabinet comptable;Nouméa;Sauvegarde;12;7;56 000\nAssociation sportive;Païta;Messagerie;5;3;24 000\nPharmacie;Nouméa;Poste de travail;16;10;80 000\nGarage Pacifique;Dumbéa;Logiciel de gestion;27;24;96 000\nHôtel de Lifou;Lifou;Wi-Fi et réseau;11;15;72 000\nAgence de voyages;Nouméa;Messagerie;8;4;32 000\nMenuiserie du Sud;Mont-Dore;Poste de travail;4;2;16 000\nÉpicerie de Maré;Maré;Caisse et imprimante;6;5;40 000',
    },
    variantes: {
      simple: 'Demander seulement les totaux et l’écart global entre heures valorisées et facturé.',
      poussee:
        'Demander un graphique des heures par catégorie, puis une présentation de trois diapositives pour la direction, avec les prix proposés par vous, justifiés.',
    },
    astuces: {
      chatgpt:
        'Déposez le fichier : l’analyse de données calcule en code, que vous pouvez afficher pour vérifier les totaux.',
      copilot:
        'Mettez le tableau dans Excel et demandez à Copilot dans Excel d’ajouter la colonne d’écart ; contrôlez une formule à la main.',
      claude:
        'Déposez le fichier CSV : Claude calcule et peut rendre un tableau de synthèse en fichier Excel avec « Création de fichiers ».',
    },
    vigilance:
      'Les noms de clients, les heures et les montants de votre société sont confidentiels : entraînez-vous avec des données fictives ou anonymisées. Une offre de maintenance engage l’agence : le prix final est décidé par vous et la direction, pas par l’IA.',
    formateur: {
      resultat:
        'Un tableau avec les totaux (145 demandes, 114 heures, 672 000 XPF facturés pour 912 000 XPF de valeur au tarif affiché, soit 240 000 XPF d’écart), les clients à écart marqué (Garage Pacifique 96 000, Gîte de la Baie 64 000, Hôtel de Lifou 48 000, Transports Nord Express 32 000) et deux formules de maintenance.',
      criteres: [
        'Les totaux (145, 114, 672 000) sont exacts et vérifiés par l’apprenant.',
        'Le Gîte de la Baie (8 h sans facturation) est signalé.',
        'Les explications des écarts sont présentées comme des hypothèses.',
        'Les prix des formules sont fixés par l’apprenant, pas repris sans réflexion de l’IA.',
      ],
      pieges: [
        'Accepter l’affirmation que tous les clients sont facturés au tarif affiché.',
        'Présenter les écarts comme des pertes alors que certains peuvent être des gestes commerciaux décidés.',
        'Proposer des prix sans relier les formules aux heures réellement consommées.',
      ],
      competence: 'discernement',
      technique: 'critique',
    },
    motsCles: ['maintenance', 'assistance', 'facturation', 'tickets', 'offre', 'XPF'],
  },
  {
    id: 'num-documentation-utilisateur-notebook',
    titre: 'Rédiger la documentation utilisateur d’une application avec un carnet Gemini Notebook',
    metier: 'numerique',
    niveau: 'avance',
    famille: 'synthetiser',
    duree: 60,
    outils: ['notebook', 'claude', 'chatgpt', 'gemini'],
    outilConseille: 'notebook',
    situation:
      'Vous êtes consultant chez un éditeur de logiciel calédonien. Votre application de prise de rendez-vous « RDV Pacifique », utilisée par des cabinets et des commerces, n’a pas de guide pour les utilisateurs. Les connaissances sont dispersées : notes de l’équipe, notes de version, questions fréquentes du support. Vous devez produire un guide utilisateur fiable.',
    objectif:
      'Réunir des sources dans un carnet, générer un guide structuré avec citations, puis le faire vérifier avant de le publier.',
    etapes: [
      'Rassemblez les trois documents du matériau (ou vos propres notes sans aucune donnée de client) et chargez-les comme sources dans un nouveau carnet Gemini Notebook.',
      'Dans la discussion, demandez le plan du guide : les tâches principales de l’utilisateur, dans l’ordre où il les rencontre.',
      'Demandez ensuite la rédaction d’une rubrique à la fois avec le prompt de départ, étape par étape, en gardant les citations des sources.',
      'Générez un rapport de type FAQ et vérifiez que chaque réponse renvoie à un passage des sources.',
      'Testez le pas-à-pas dans l’application avec une personne de l’équipe, et notez chaque étape fausse ou manquante.',
      'Corrigez les sources ou les instructions, puis régénérez la rubrique concernée.',
    ],
    prompt:
      'Tu es rédacteur technique pour l’éditeur de l’application RDV Pacifique. En te basant uniquement sur les sources du carnet, rédige la rubrique du guide utilisateur : « [titre de la rubrique] ». Public : le gérant d’un petit commerce ou d’un cabinet, qui n’est pas technicien. Structure : à quoi cela sert, avant de commencer, étapes numérotées (une action par étape), résultat attendu, que faire en cas de problème. Pour chaque étape, cite la source utilisée. Si une information manque dans les sources, écris « à confirmer par l’équipe » : n’invente aucun bouton, aucun menu, aucun réglage.',
    materiau: {
      titre: 'Trois sources à charger dans le carnet (application fictive)',
      texte:
        'SOURCE 1 : NOTES DE L’ÉQUIPE (version 2.4)\n- Créer un rendez-vous : bouton « Nouveau rendez-vous » en haut à droite du calendrier, choisir le client, le service, l’heure ; la durée se remplit selon le service.\n- Rappel automatique par SMS la veille à 17 h, on peut le désactiver par service dans Réglages > Rappels.\n- Un rendez-vous déplacé envoie un nouveau SMS au client, sauf si on décoche « Prévenir le client ».\n- Les créneaux se bloquent par la fonction « Indisponibilité » (congés, réunion), pas en créant un faux rendez-vous.\n- L’export du planning se fait en PDF ou en tableau, pour une semaine ou un mois.\n- Les clients ne peuvent pas réserver eux-mêmes pour l’instant : la réservation en ligne sera pour la 3.0.\n\nSOURCE 2 : NOTES DE VERSION 2.4\n- Nouveau : rappel par SMS configurable.\n- Nouveau : export du planning en tableau.\n- Corrigé : les rendez-vous de fin de journée se décalaient d’une heure à l’affichage sur certains téléphones.\n- Connu : l’export en PDF est lent au-delà de deux mois.\n\nSOURCE 3 : QUESTIONS FRÉQUENTES DU SUPPORT\n- « Mes clients ne reçoivent pas les SMS » : vérifier que le numéro est au format 6 chiffres de Nouvelle-Calédonie avec l’indicatif, que les rappels sont activés pour le service, et que le crédit SMS n’est pas épuisé.\n- « J’ai supprimé un rendez-vous par erreur » : la suppression est définitive, mais le client reste dans la fiche ; il faut recréer le rendez-vous.\n- « Je ne vois pas le planning de ma collègue » : ses droits d’accès se règlent par l’administrateur du compte.',
    },
    variantes: {
      simple:
        'Ne produire qu’une seule rubrique (créer un rendez-vous) et la tester dans l’application.',
      poussee:
        'Générer le guide complet, une FAQ et une carte mentale, puis partager le carnet avec l’équipe support pour qu’elle l’interroge comme base de questions-réponses.',
    },
    astuces: {
      notebook:
        'Chargez les sources, puis utilisez la discussion pour demander chaque rubrique : chaque réponse renvoie au passage exact. Les rapports (FAQ, synthèse) servent à vérifier la couverture.',
      claude:
        'Pour mettre en forme le guide final avec captures et sommaire, demandez à Claude un document avec « Création de fichiers » à partir du texte validé.',
    },
    vigilance:
      'Ne chargez jamais dans le carnet des données de clients, des identifiants ni des extraits de la base de données. Le guide décrit l’application telle qu’elle est : toute fonction annoncée mais absente (comme la réservation en ligne) ne doit pas y figurer.',
    formateur: {
      resultat:
        'Un guide à rubriques dont chaque étape cite une source du carnet, une FAQ sourcée, la réservation en ligne exclue (prévue en version 3.0), et une liste d’étapes à confirmer ou corriger après le test dans l’application.',
      criteres: [
        'Chaque étape du guide renvoie à un passage des sources.',
        'La réservation en ligne n’apparaît pas comme une fonction disponible.',
        'Les informations absentes sont signalées « à confirmer par l’équipe ».',
        'Le guide a été testé dans l’application par l’apprenant ou un collègue.',
      ],
      pieges: [
        'Laisser le guide décrire un menu ou un bouton qui n’existe pas.',
        'Mélanger les notes de plusieurs versions : l’export en tableau n’existe qu’à partir de la 2.4.',
        'Charger des captures d’écran contenant des noms de clients réels.',
      ],
      competence: 'diligence',
      technique: 'sources',
    },
    motsCles: ['documentation', 'guide utilisateur', 'Gemini Notebook', 'application', 'sources'],
  },
  {
    id: 'num-assistant-devis-grille',
    titre: 'Créer un assistant qui prépare les réponses aux demandes de devis',
    metier: 'numerique',
    niveau: 'avance',
    famille: 'automatiser',
    duree: 60,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Vous êtes commercial dans une agence web de Nouméa. Chaque semaine, les mêmes demandes de devis arrivent : site vitrine, boutique, hébergement, formation. Vous voulez un assistant interne qui prépare un projet de réponse à partir de la grille tarifaire de l’agence, qu’un commercial relit avant envoi.',
    objectif:
      'Créer un assistant avec des instructions permanentes et un tarif de référence, le tester sur des demandes réelles, y compris celles qu’il ne doit pas traiter seul.',
    etapes: [
      'Mettez la grille tarifaire du matériau dans un document sans aucune donnée de client.',
      'Créez un Projet (Claude, ChatGPT), un Gem (Gemini) ou un agent (Copilot) et ajoutez-y la grille.',
      'Rédigez les instructions avec le prompt de départ : rôle, ton, calculs à montrer, conduite à tenir quand une demande sort de la grille.',
      'Testez l’assistant avec les trois demandes du matériau et recalculez chaque total à la main.',
      'Corrigez les instructions et refaites le test jusqu’à obtenir des réponses fiables, qui signalent ce qui sort de la grille.',
    ],
    prompt:
      'Tu es l’assistant commercial d’une agence web à Nouméa. Tu prépares des projets de réponse aux demandes de devis, qu’un commercial relit avant envoi.\n\nRègles :\n- Utilise uniquement la grille tarifaire du projet. Cite la ligne de la grille pour chaque montant.\n- Présente un tableau : prestation, quantité, prix unitaire, total en XPF hors taxes. Montre le calcul du total. Ne calcule aucune taxe : écris que les montants sont hors taxes.\n- Si la demande sort de la grille (prestation absente, quantité au-delà de la limite, remise, délai), ne propose aucun prix : écris « À chiffrer par un commercial » et pose les questions qu’il faut poser au client.\n- N’accorde aucune remise et ne promets aucun délai.\n- Ton : courtois, clair, en vouvoiement, 200 mots au maximum. Termine par : « L’équipe commerciale ».',
    materiau: {
      titre: 'Grille tarifaire de l’agence et demandes de test (fictives, XPF HT)',
      texte:
        'GRILLE TARIFAIRE (hors taxes)\nSite vitrine, jusqu’à 5 pages, clé en main : 280 000 XPF\nPage supplémentaire : 25 000 XPF par page\nBoutique en ligne, jusqu’à 50 produits : 650 000 XPF\nHébergement mutualisé : 6 900 XPF par mois\nMaintenance du site : 12 000 XPF par mois\nJournée de formation (jusqu’à 6 personnes) : 60 000 XPF\nDéplacement dans le Grand Nouméa : 6 000 XPF ; hors Grand Nouméa : 18 000 XPF ; îles : sur devis\nNom de domaine .nc : non inclus, à la charge du client\n\nDEMANDES DE TEST\n1. Un restaurant de Koné veut un site vitrine de 7 pages, l’hébergement mutualisé et une journée de formation sur place.\n2. Une boutique de Nouméa veut une boutique en ligne avec 120 produits, et demande 20 % de remise « parce qu’on est un ancien client ».\n3. Une association de Maré veut une application mobile pour ses adhérents, pour la semaine prochaine.',
    },
    variantes: {
      simple:
        'Se contenter d’un prompt réutilisable enregistré dans un document, sans créer d’assistant.',
      poussee:
        'Ajouter dans les instructions deux exemples de bonnes réponses, puis faire tester l’assistant par un collègue sur dix nouvelles demandes, dont trois pièges.',
    },
    astuces: {
      claude:
        'Dans un Projet, déposez la grille dans les connaissances du projet et collez les règles dans ses instructions.',
      chatgpt:
        'Un Projet suffit pour l’équipe ; un GPT personnalisé (création payante) permet de le partager plus largement.',
      copilot:
        'Avec « Créer un agent » (selon la licence), ajoutez la grille comme source et collez les règles dans les instructions.',
      gemini: 'Créez un Gem, collez les règles dans ses instructions et ajoutez la grille.',
    },
    vigilance:
      'Ne mettez dans l’assistant aucune information sur un client réel ni aucune marge interne. Les réponses restent des projets relus par un commercial : l’assistant ne connaît ni la charge de l’équipe ni les conditions particulières.',
    formateur: {
      resultat:
        'Un assistant qui chiffre correctement la demande 1 (408 000 XPF HT hors hébergement mensuel : 280 000 + 2 pages à 25 000 + 60 000 de formation + 18 000 de déplacement, hébergement à 6 900 XPF par mois) et renvoie les demandes 2 et 3 au commercial sans inventer de prix.',
      criteres: [
        'Le total de la demande 1 (408 000 XPF HT) est exact et le calcul est montré.',
        'La demande 2 (120 produits, remise de 20 %) est signalée comme hors grille.',
        'La demande 3 (application mobile) n’est pas chiffrée.',
        'Les instructions disent quoi faire quand la grille ne suffit pas.',
      ],
      pieges: [
        'Laisser l’assistant extrapoler un prix pour 120 produits à partir du tarif de 50.',
        'Accepter une remise « par défaut » ou un délai promis.',
        'Oublier le déplacement hors Grand Nouméa pour Koné.',
      ],
      competence: 'delegation',
      technique: 'instructions',
    },
    motsCles: ['devis', 'assistant', 'grille tarifaire', 'projet', 'gem', 'agent'],
  },
  {
    id: 'num-veille-techno-reglementaire',
    titre: 'Programmer une veille sur la sécurité, la protection des données et l’IA',
    metier: 'numerique',
    niveau: 'avance',
    famille: 'veiller',
    duree: 45,
    outils: ['gemini', 'chatgpt', 'claude'],
    outilConseille: 'gemini',
    situation:
      'Vous êtes consultant dans une société de services informatiques de Nouméa. Vos clients (PME et collectivités) vous demandent régulièrement ce qu’ils doivent faire en matière de sécurité, de données personnelles et d’intelligence artificielle. La direction veut un point de veille hebdomadaire, sourcé, pour l’équipe commerciale et les consultants.',
    objectif:
      'Concevoir une veille récurrente et sourcée, distinguer ce qui s’applique en Nouvelle-Calédonie de ce qui vient d’ailleurs, et vérifier chaque information avant diffusion.',
    etapes: [
      'Lancez une recherche approfondie avec le prompt de départ : Deep Research (Gemini), Recherche approfondie (ChatGPT) ou Recherche (Claude, payante).',
      'Ouvrez au moins cinq sources citées et vérifiez qu’elles disent bien ce que le rapport leur attribue. Notez celles qui sont introuvables ou datées.',
      'Pour chaque règle ou obligation citée, notez si la source concerne la Nouvelle-Calédonie, la France, l’Union européenne ou un autre pays.',
      'Demandez de remettre le rapport au format du modèle fourni, avec la source et la date de chaque ligne.',
      'Programmez la relance hebdomadaire : « Programmer des actions » dans Gemini ou une tâche planifiée (payante) dans ChatGPT ou Claude, selon votre offre.',
    ],
    prompt:
      'Tu es chargé de veille dans une société de services informatiques à Nouméa. Fais une recherche sur les nouveautés des [nombre] derniers jours dans trois domaines : 1) la cybersécurité (failles et alertes des éditeurs de logiciels courants dans les PME), 2) la protection des données personnelles, 3) l’intelligence artificielle appliquée aux entreprises. Pour chaque information : titre, résumé en deux phrases, source et date, territoire concerné (Nouvelle-Calédonie, France, Union européenne, autre) et intérêt pour nos clients. N’affirme aucune obligation légale : renvoie vers la source officielle et indique que la règle applicable en Nouvelle-Calédonie est à vérifier. Si tu trouves peu d’informations, dis-le. Présente le résultat selon ce modèle :\n<modele>\n[collez le modèle de point de veille]\n</modele>',
    materiau: {
      titre: 'Modèle de point de veille hebdomadaire',
      texte:
        'POINT DE VEILLE : semaine du [date]\n\n1. Alertes de sécurité à connaître cette semaine (3 au maximum)\nAlerte;Produit concerné;Gravité annoncée;Source et date;Action conseillée à nos clients\n\n2. Protection des données personnelles\nInformation;Territoire concerné;Source et date;À vérifier avant de la communiquer\n\n3. Intelligence artificielle\nInformation;Intérêt pour nos clients;Source et date\n\n4. Ce qui a changé depuis la semaine dernière (3 lignes au maximum)\n\n5. À vérifier avant diffusion\n\n6. Une idée de message à envoyer à nos clients',
    },
    variantes: {
      simple:
        'Faire une seule recherche sur les alertes de sécurité de la semaine, sans programmer de relance.',
      poussee:
        'Faire produire chaque semaine, à partir du point de veille, un message d’information de 120 mots pour les clients, puis le faire relire par la direction avant envoi.',
    },
    astuces: {
      gemini:
        'Exportez le rapport Deep Research dans Google Docs pour l’annoter, puis programmez la relance avec « Programmer des actions ».',
      chatgpt:
        'Une tâche planifiée (payante) relance la même demande chaque semaine : gardez le modèle de point de veille dans le prompt.',
      claude:
        'Sans abonnement, la recherche web suffit pour un premier essai ; la Recherche, payante, rend un rapport plus complet.',
    },
    vigilance:
      'Une IA peut citer un texte qui n’existe pas ou appliquer une règle d’un autre territoire. Rien ne part aux clients sans vérification de la source officielle. N’y mettez aucune information sur vos clients ni aucune configuration de leurs systèmes.',
    formateur: {
      resultat:
        'Un point de veille au format demandé, où chaque information a une source datée, un territoire concerné et une mention « à vérifier », et une relance hebdomadaire programmée ou décrite précisément.',
      criteres: [
        'Chaque information a une source datée, ouverte par l’apprenant.',
        'Le territoire concerné est indiqué pour chaque règle citée.',
        'Aucune obligation n’est affirmée sans renvoi à la source officielle.',
        'La relance hebdomadaire est configurée ou décrite précisément.',
      ],
      pieges: [
        'Présenter une obligation européenne ou métropolitaine comme applicable en Nouvelle-Calédonie sans vérification.',
        'Diffuser une alerte de sécurité dont la source est introuvable ou périmée.',
        'Laisser le rapport afficher une certitude sur l’avenir de la réglementation de l’intelligence artificielle.',
      ],
      competence: 'discernement',
      technique: 'sources',
    },
    motsCles: ['veille', 'cybersécurité', 'données personnelles', 'IA', 'réglementation'],
  },
  {
    id: 'num-reponse-consultation-collectivite',
    titre: 'Préparer la réponse à la consultation d’une collectivité',
    metier: 'numerique',
    niveau: 'avance',
    famille: 'synthetiser',
    duree: 60,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Vous êtes chef de projet dans une agence web de Nouméa. Une commune du Nord a publié une consultation pour la refonte de son site et la création d’un portail de démarches en ligne. Vous avez trois semaines pour répondre. Avant d’écrire, il faut comprendre ce que la commune demande, comment elle notera les offres, et construire le plan du mémoire technique.',
    objectif:
      'Analyser un document de consultation, repérer les exigences, les ambiguïtés et les critères, puis bâtir un plan de mémoire technique sans inventer de références ni d’engagements.',
    etapes: [
      'Collez l’extrait de la consultation du matériau dans votre outil d’IA avec le prompt de départ et demandez d’abord un tableau des exigences.',
      'Vérifiez le tableau : chaque exigence est-elle bien dans le texte ? Contrôlez le total des pondérations de notation.',
      'Demandez la liste des points ambigus à poser par écrit à la commune, sans les interpréter.',
      'Demandez un plan de mémoire technique de 15 pages au maximum, avec le nombre de pages par partie proportionnel aux critères que le mémoire doit couvrir : le prix, lui, se juge sur l’offre de prix.',
      'Complétez vous-même les parties qui engagent l’agence : références, équipe, planning, prix.',
      'Relisez l’ensemble avec le service juridique ou la direction : seule la direction décide de répondre.',
    ],
    prompt:
      'Tu es chef de projet dans une agence web à Nouméa. Voici un extrait d’une consultation d’une commune. Fais :\n1. un tableau des exigences : exigence, obligatoire ou souhaitable, partie du document, comment l’agence peut y répondre ;\n2. la liste des points ambigus ou manquants, à poser par écrit à la commune ;\n3. un plan de mémoire technique de [nombre] pages au maximum, avec le nombre de pages de chaque partie proportionnel aux critères de notation qu’il couvre (le prix est jugé à part, sur l’offre de prix) ;\n4. la liste des éléments que l’agence doit fournir elle-même (références, équipe, planning, prix).\nN’invente aucune exigence, aucune référence, aucun engagement. N’affirme aucune règle de marché public : indique à vérifier avec le service juridique.\n\n<consultation>\n[collez l’extrait de la consultation ici]\n</consultation>',
    materiau: {
      titre: 'Extrait d’une consultation (commune et documents fictifs)',
      texte:
        'COMMUNE DE [NOM MASQUÉ] : CONSULTATION POUR LA REFONTE DU SITE INTERNET ET UN PORTAIL DE DÉMARCHES EN LIGNE\n\n1. Objet : refonte du site de la commune et création d’un portail permettant aux habitants de faire en ligne trois démarches : demande d’acte d’état civil, réservation d’une salle municipale, signalement d’un problème sur la voirie.\n\n2. Calendrier : remise des offres au plus tard le 4 décembre à 11 h (heure de Nouméa). Choix de l’attributaire en janvier. Mise en ligne attendue dans les six mois suivant la notification.\n\n3. Exigences techniques : site utilisable sur téléphone ; respect des règles d’accessibilité ; hébergement des données précisé dans l’offre ; sauvegardes quotidiennes ; gestion des contenus autonome par deux agents de la commune ; documentation et formation de deux jours.\n\n4. Maintenance : trois ans, avec un engagement de réponse aux incidents graves en jours ouvrés (délai à proposer par le candidat).\n\n5. Contenu de l’offre : un mémoire technique de 15 pages au maximum ; un calendrier ; trois références de projets comparables ; un prix détaillé en XPF hors taxes.\n\n6. Critères de notation : valeur technique 50 points ; prix 30 points ; délais et organisation 10 points ; démarche environnementale 10 points.\n\n7. Questions : par écrit, jusqu’au 20 novembre. La commune répondra à tous les candidats.',
    },
    variantes: {
      simple:
        'Se limiter au tableau des exigences et à la liste des questions à poser à la commune.',
      poussee:
        'Créer un Projet avec les consultations précédentes (sans prix ni données confidentielles) pour préparer un modèle réutilisable de mémoire technique, puis un planning de rédaction à rebours jusqu’à la date limite.',
    },
    astuces: {
      claude:
        'Demandez le tableau des exigences dans un artefact, puis exportez-le en fichier Excel avec « Création de fichiers » pour le suivre en équipe.',
      copilot:
        'Dans Word, collez l’extrait et demandez à Copilot de proposer le plan du mémoire : vous gardez la mise en page de l’agence.',
      chatgpt: 'Ouvrez le plan dans le canevas pour ajuster le nombre de pages de chaque partie.',
      gemini:
        'Dans Canvas, demandez de réduire un plan trop long tout en gardant la proportion des critères de notation.',
    },
    vigilance:
      'N’affirmez rien sur les règles des marchés publics ni sur la valeur juridique d’une réponse : le service juridique ou la direction vérifie. Ne mettez dans l’IA ni prix réels, ni références de clients, ni information confidentielle sur l’agence.',
    formateur: {
      resultat:
        'Un tableau des exigences (mobile, accessibilité, hébergement précisé, sauvegardes quotidiennes, deux agents autonomes, formation de deux jours, maintenance de trois ans), les points ambigus à poser avant le 20 novembre (règles d’accessibilité, lieu d’hébergement, délai de réponse aux incidents), et un plan de 15 pages réparti selon les critères que traite le mémoire (valeur technique 50, délais et organisation 10, démarche environnementale 10, soit environ 11, 2 et 2 pages), le prix sur 30 points relevant de l’offre de prix.',
      criteres: [
        'Les critères de notation totalisent bien 100 points et le plan en tient compte.',
        'Les points ambigus sont posés comme questions et non résolus par l’IA.',
        'Aucune référence, engagement ou prix n’est inventé.',
        'La date limite des questions (20 novembre) et de remise (4 décembre à 11 h) est reprise.',
      ],
      pieges: [
        'Consacrer tout le mémoire à la technique et rien à la démarche environnementale, pourtant notée sur 10 points, ou réserver des pages au prix, jugé sur l’offre de prix.',
        'Laisser l’IA écrire des références de projets qui n’existent pas.',
        'Affirmer une règle de marché public (forme de la réponse, délai de validité) sans la vérifier.',
      ],
      competence: 'delegation',
      technique: 'decomposer',
    },
    motsCles: ['consultation', 'collectivité', 'mémoire technique', 'appel d’offres', 'analyse'],
  },
];
