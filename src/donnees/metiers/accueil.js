/**
 * Accueil et relation client : accueil physique, téléphone, messages écrits, suivi des dossiers.
 * Toutes les personnes, entreprises, adresses et sommes sont fictives.
 */

export const vocabulaire = {
  structure: { g: 'm', s: 'service client', p: 'services clients' },
  client: { g: 'm', s: 'client', p: 'clients' },
  partenaire: { g: 'm', s: 'fournisseur', p: 'fournisseurs' },
  documentCourant: { g: 'm', s: 'courrier de réponse', p: 'courriers de réponse' },
  documentLong: {
    g: 'm',
    s: 'guide des procédures du service client',
    p: 'guides des procédures du service client',
  },
  reunion: { g: 'f', s: 'réunion d’équipe du lundi matin', p: 'réunions d’équipe du lundi matin' },
  offre: {
    g: 'f',
    s: 'offre d’abonnement à la fibre pour les particuliers de Nouméa',
    p: 'offres d’abonnement à la fibre pour les particuliers de Nouméa',
  },
  poste: { g: 'm', s: 'conseiller clientèle', p: 'conseillers clientèle' },
  evenement: {
    g: 'f',
    s: 'journée portes ouvertes de l’agence de Dumbéa',
    p: 'journées portes ouvertes de l’agence de Dumbéa',
  },
  visuel: {
    g: 'f',
    s: 'affichette de comptoir',
    p: 'affichettes de comptoir',
  },
  domaine: 'la relation client',
  motifReclamation: 'une commande livrée incomplète et un rappel promis resté sans suite',
  donnees: 'le journal des demandes reçues à l’accueil, au téléphone et par e-mail sur trois mois',
  colonnes:
    'Date;Canal (accueil, téléphone ou e-mail);Motif;Délai de réponse (minutes);Résolu au premier contact (oui ou non)',
  indicateur: 'le nombre moyen de demandes par jour et par canal',
  veille: 'les nouveautés des outils de relation client et de l’accueil en agence',
  sourcesVeille:
    'les sites des organismes calédoniens, la presse locale et les annonces officielles des éditeurs d’outils d’IA',
  jargon: 'les délais, les garanties et les étapes du suivi d’un dossier de réclamation',
  procedure: 'l’accueil d’un client mécontent au comptoir ou au téléphone',
  situationTendue:
    'un prestataire de nettoyage qui refuse de reprendre un travail mal fait dans le hall d’accueil',
  donneesSensibles:
    'les noms, numéros de téléphone, adresses, numéros de dossier et historiques d’achats des clients',
  corpus:
    'les comptes rendus de réunion d’équipe, les notes de service et les enquêtes de satisfaction de l’année',
  publicCible: 'les particuliers et les petites entreprises du Grand Nouméa',
  etranger: 'un client australien de passage à Nouméa',
  themeFormation: 'l’accueil et le suivi des demandes des clients',
  tacheRepetitive: 'l’accusé de réception des demandes des clients',
  planning: 'les formations de l’équipe d’accueil sur le trimestre, sans fermer le comptoir',
  comparaison: 'deux logiciels de gestion des demandes des clients',
};

export const exercices = [
  {
    id: 'accueil-messages-attente-absence',
    titre: 'Réécrire le message d’attente téléphonique et le message d’absence',
    metier: 'accueil',
    niveau: 'debutant',
    famille: 'corriger',
    duree: 15,
    outils: ['copilot', 'claude', 'chatgpt', 'gemini'],
    outilConseille: 'copilot',
    situation:
      'Vous êtes chargée d’accueil au service client d’un fournisseur d’accès internet de Nouméa. Le message d’attente du standard dure plus d’une minute et le message d’absence de votre collègue Marie, qui part en congé, est confus. Votre responsable veut les deux textes remis à neuf avant lundi.',
    objectif:
      'Faire corriger et raccourcir deux textes destinés à être entendus ou lus par des clients, sans que l’IA modifie un horaire ni invente un numéro.',
    etapes: [
      'Lisez les deux textes du matériau et notez ce qui vous gêne : longueur, fautes, phrases floues, informations manquantes.',
      'Collez-les dans votre outil d’IA avec le prompt de départ, en précisant le temps visé pour le message d’attente.',
      'Comparez chaque horaire, chaque numéro et chaque date avec l’original, chiffre par chiffre.',
      'Lisez le message d’attente à voix haute en le chronométrant : refaites une demande si une phrase est difficile à dire.',
      'Complétez vous-même les informations laissées entre crochets, puis faites valider les deux textes par votre responsable.',
    ],
    prompt:
      'Tu es chargé d’accueil au service client d’un fournisseur d’accès internet à Nouméa. Corrige l’orthographe et la ponctuation des deux textes ci-dessous et rends-les plus clairs.\n\n- Le message d’attente sera dit par une voix enregistrée : 20 secondes au maximum, phrases courtes faciles à prononcer, sans abréviation.\n- Le message d’absence sera envoyé par e-mail : cinq lignes au maximum, avec les dates, le nom de la personne à contacter et son moyen de contact.\n\nGarde tous les horaires, les dates et les noms exactement tels quels. Si une information manque ou si une phrase est ambiguë, ne l’invente pas : mets un [crochet] et signale-la après les textes. Termine par la liste de ce que tu as changé.\n\n<message_attente>\n[collez le message d’attente ici]\n</message_attente>\n\n<message_absence>\n[collez le message d’absence ici]\n</message_absence>',
    materiau: {
      titre: 'Les deux textes à reprendre',
      texte:
        'MESSAGE D’ATTENTE\nBonjour et bienvenue au service client d’Océanie Net, votre appel est important pour nous. Nos conseillers sont actuellement tous occupé avec d’autres clients, merci de bien vouloir patienter quelques instants et de ne pas racrocher, nous allons vous répondre dans les meilleurs délais. Pour une question sur votre facture tapez 1, pour un problème de réseau tapez 2, pour toute autre demande restez en ligne. Nous vous rappelons que notre service est ouvert du lundi au vendredi de 7 h 30 à 16 h 30 et que le samedi matin de 8 h à 11 h, nos agences sont fermées les jours fériés. Vous pouvez aussi consulter notre site internet ou notre application pour trouver des réponses. Merci de votre patience et à tout de suite.\n\nMESSAGE D’ABSENCE\nBonjour, je suis absente du lundi 16 au vendredi 20 novembre inclu, je ne pourrais pas répondre a vos messages pendant cette période. Pour tout ce qui est urgent vous pouvez contacter Marc au poste de l’accueil et pour les dossiers en cours ma collègue Nadia qui est joignable la semaine du 16 mais pas le jeudi. Je reviendrai le lundi suivant et je traiterai votre demande en priorité.\nCordialement, Marie',
    },
    variantes: {
      simple: 'Ne reprendre que le message d’absence.',
      poussee:
        'Faire écrire une version en anglais du message d’attente, puis la faire relire par un collègue qui parle anglais avant de l’enregistrer.',
    },
    astuces: {
      copilot:
        'Dans Outlook, collez le message d’absence dans un nouvel e-mail : « Coaching par Copilot » commente le ton et la clarté avant l’enregistrement dans les réponses automatiques.',
      claude:
        'Demandez la liste des modifications après les textes corrigés, pour vérifier qu’aucun horaire n’a bougé.',
      chatgpt:
        'Ouvrez le message d’attente dans le canevas : vous raccourcissez une phrase à la fois sans tout régénérer.',
    },
    vigilance:
      'Ne collez que les messages, jamais de numéros de téléphone personnels de collègues : remplacez-les par des [crochets] et remettez-les dans la version finale.',
    formateur: {
      resultat:
        'Un message d’attente de 20 secondes environ, avec les horaires exacts (7 h 30 à 16 h 30, samedi de 8 h à 11 h), et un message d’absence de cinq lignes avec les dates du 16 au 20 novembre, Marc et Nadia, et le moyen de contact laissé entre crochets.',
      criteres: [
        'Les horaires et les dates sont identiques à l’original.',
        'Le message d’attente se dit en 20 secondes environ, chronométré à voix haute.',
        'L’ambiguïté sur la disponibilité de Nadia (« pas le jeudi ») et l’absence de moyen de contact pour Marc sont signalées, pas comblées.',
        'La liste des modifications a été relue.',
      ],
      pieges: [
        'Accepter un numéro de téléphone ou une adresse e-mail inventés pour Marc.',
        'Garder un message d’attente trop long parce que « tout est utile ».',
        'Laisser passer un horaire modifié, par exemple un samedi matin étendu à l’après-midi.',
      ],
      competence: 'discernement',
      technique: 'critique',
    },
    motsCles: ['message d’attente', 'message d’absence', 'standard', 'téléphone', 'relecture'],
  },
  {
    id: 'accueil-procedure-retour-reponses-clients',
    titre: 'Transformer la procédure de retour d’un produit en réponses simples pour les clients',
    metier: 'accueil',
    niveau: 'debutant',
    famille: 'rediger',
    duree: 20,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Vous êtes conseiller au service après-vente d’un magasin d’électroménager de Dumbéa. La procédure interne de retour d’un produit tient sur une page pleine de jargon et vos collègues l’expliquent chacun à leur façon. Vous voulez des réponses simples, que n’importe qui peut donner à un client au comptoir, au téléphone ou par e-mail.',
    objectif:
      'Traduire une procédure interne en réponses claires pour des clients, sans y ajouter de règle que le document ne contient pas.',
    etapes: [
      'Lisez la procédure du matériau et soulignez les mots que seul le personnel comprend (RMA, avoir, bon de retour).',
      'Collez-la dans votre outil d’IA avec le prompt de départ.',
      'Vérifiez que chaque délai, chaque condition et chaque pièce demandée vient bien de la procédure.',
      'Cherchez les phrases qui ressemblent à une règle générale ou à un droit du client : la procédure n’en parle pas, elles doivent disparaître ou être signalées.',
      'Lisez les réponses téléphoniques à voix haute et demandez une version plus courte pour celles qui sont trop longues.',
    ],
    prompt:
      'Tu es conseiller au service après-vente d’un magasin d’électroménager à Dumbéa. À partir de la procédure interne ci-dessous, rédige des réponses simples pour les clients, à dire au comptoir ou au téléphone puis à envoyer par e-mail :\n1. « Comment retourner un produit ? » ;\n2. « Quels papiers dois-je apporter ? » ;\n3. « Dans quel délai serai-je remboursé ? » ;\n4. « Mon produit est ouvert, est-ce possible ? ».\n\nPour chaque question : une réponse orale de 40 mots au maximum et une réponse écrite de 80 mots au maximum, en langage courant, sans le jargon de la procédure. N’utilise que les informations de la procédure. N’affirme aucun droit ni aucune règle générale du commerce : si la procédure ne répond pas à la question, écris [à confirmer auprès du responsable].\n\n<procedure>\n[collez la procédure ici]\n</procedure>',
    materiau: {
      titre: 'Procédure interne de retour produit (extrait, fictif)',
      texte:
        'PROCÉDURE RETOUR PRODUIT – magasin Pacific Électro Dumbéa\n1. Le client se présente au SAV avec le produit et le ticket de caisse. Sans ticket : recherche par numéro de carte de fidélité, sinon pas de retour (voir responsable).\n2. Délai interne : retour accepté jusqu’à 30 jours après l’achat, geste commercial du magasin. Au-delà : orientation vers le fabricant pour la garantie.\n3. Contrôle du produit : emballage d’origine et accessoires complets. Produit ouvert accepté uniquement si défaut constaté par le technicien (RMA ouvert).\n4. Le conseiller édite un bon de retour et ouvre un RMA si le produit est défectueux.\n5. Remboursement : sur le moyen de paiement d’origine ou en avoir, au choix du client. Le virement est traité par la comptabilité sous 10 jours ouvrés après validation du RMA.\n6. Cas particuliers (gros électroménager livré, produit sur commande) : validation par le responsable du magasin.',
    },
    variantes: {
      simple: 'Ne traiter que les deux premières questions.',
      poussee:
        'Ajouter trois questions de clients pièges (« Je n’ai plus mon ticket », « C’est pour un cadeau », « Je veux l’échanger contre un autre modèle ») et faire préparer des réponses qui renvoient vers un responsable quand la procédure ne tranche pas.',
    },
    astuces: {
      claude:
        'Mettez la procédure et les réponses validées dans un Projet : toute l’équipe repartira du même texte.',
      chatgpt:
        'Ouvrez les réponses dans le canevas pour raccourcir ou assouplir une phrase sans toucher aux autres.',
      copilot:
        'Dans Outlook, « Brouillon avec Copilot » adapte la réponse écrite validée au cas précis d’un client.',
    },
    vigilance:
      'Ne collez jamais de ticket de caisse ni de nom de client réel. Une promesse inventée par l’IA (« remboursement garanti sous 48 h ») engage le magasin.',
    formateur: {
      resultat:
        'Quatre réponses courtes, en deux versions, fidèles à la procédure : 30 jours, ticket de caisse, produit ouvert accepté seulement avec un défaut constaté, remboursement sous 10 jours ouvrés après validation, cas particuliers renvoyés au responsable.',
      criteres: [
        'Les délais (30 jours, 10 jours ouvrés) et les conditions sont ceux de la procédure.',
        'Le jargon (RMA, bon de retour) est remplacé par des mots de client.',
        'Les questions sans réponse dans la procédure renvoient vers le responsable au lieu d’être comblées.',
        'Les versions orales tiennent en 40 mots.',
      ],
      pieges: [
        'Laisser l’IA présenter les 30 jours comme un droit du client alors que c’est un geste du magasin.',
        'Accepter « produit ouvert accepté sous 30 jours » sans la condition du défaut constaté.',
        'Ajouter un délai de garantie absent du document.',
      ],
      competence: 'description',
      technique: 'format',
    },
    motsCles: ['retour produit', 'SAV', 'procédure', 'langage clair', 'réponses types'],
  },
  {
    id: 'accueil-resumer-historique-dossier',
    titre: 'Résumer l’historique d’un dossier avant de rappeler un client',
    metier: 'accueil',
    niveau: 'debutant',
    famille: 'synthetiser',
    duree: 15,
    outils: ['copilot', 'claude', 'chatgpt', 'gemini'],
    outilConseille: 'copilot',
    situation:
      'Vous êtes conseillère clientèle chez un fournisseur d’énergie de Nouméa. Une cliente rappelle pour la quatrième fois au sujet d’un remboursement. Quatre collègues se sont succédé sur son dossier. Vous avez dix minutes avant de la rappeler et vous ne voulez pas lui faire répéter son histoire.',
    objectif:
      'Obtenir en quelques lignes la chronologie d’un dossier, ce qui a été promis et ce qui reste ouvert, en repérant les contradictions de l’historique.',
    etapes: [
      'Lisez l’historique du matériau en deux minutes, puis écrivez en une phrase ce que vous en avez compris.',
      'Collez-le dans votre outil d’IA avec le prompt de départ.',
      'Comparez le résumé à votre phrase : la chronologie est-elle juste ? les promesses sont-elles toutes relevées ?',
      'Vérifiez les montants et les dates mentionnés dans le résumé, un par un.',
      'Demandez trois phrases à dire pour ouvrir le rappel, puis préparez la question que vous poserez à votre responsable sur le point contradictoire.',
    ],
    prompt:
      'Tu es conseillère clientèle chez un fournisseur d’énergie à Nouméa. Je dois rappeler une cliente dans dix minutes. Voici l’historique de son dossier. Prépare-moi :\n1. la chronologie en cinq lignes maximum (date, ce qui s’est passé) ;\n2. la liste de ce qui a été promis à la cliente, avec le nom de la personne qui l’a promis ;\n3. ce qui reste à faire ;\n4. toute contradiction entre deux notes, sans la résoudre ;\n5. trois phrases pour ouvrir le rappel.\n\nN’utilise que les informations de l’historique. Si une information manque, écris « non précisé ».\n\n<historique>\n[collez l’historique ici]\n</historique>',
    materiau: {
      titre: 'Historique du dossier n° [numéro] (données fictives)',
      texte:
        '03/09 – Téléphone – Hélène : la cliente signale une double facturation en août. Montant en trop : 18 400 XPF. Elle demande un remboursement. Promesse : réponse sous une semaine.\n10/09 – Aucune action enregistrée.\n14/09 – E-mail de la cliente : sans nouvelles, elle relance. Pas de réponse notée.\n17/09 – Téléphone – Olivier : vérification faite, la double facturation est confirmée. Dossier transmis à la comptabilité. Promesse : remboursement par virement « avant fin septembre ».\n29/09 – Téléphone – la cliente rappelle, rien reçu. Karine note : « virement de 14 800 XPF en cours de validation ».\n05/10 – Accueil – la cliente se déplace en agence, très agacée. Pierre lui conseille d’attendre. Aucune note sur le montant.\n12/11 – Rappel de la cliente. Elle dit avoir perdu une demi-journée de congé pour se déplacer.',
    },
    variantes: {
      simple: 'Demander seulement la chronologie en cinq lignes.',
      poussee:
        'Faire écrire en plus l’e-mail de suivi à envoyer à la cliente après l’appel, avec la date de la prochaine action laissée entre crochets tant que vous ne l’avez pas obtenue.',
    },
    astuces: {
      copilot:
        'Dans Outlook, si l’historique est un fil d’e-mails, « Résumer » en donne les points clés ; relisez-les avec le fil sous les yeux.',
      claude:
        'Demandez de citer entre guillemets la note qui justifie chaque point : vous vérifiez en quelques secondes.',
      gemini:
        'Collez l’historique dans Gemini et précisez le public du résumé (vous-même, avant un appel) et sa longueur.',
    },
    vigilance:
      'Retirez le nom, le numéro de téléphone et l’adresse de la cliente avant de coller l’historique. Une contradiction de montant ne se résout pas avec l’IA : on la vérifie dans le dossier de facturation.',
    formateur: {
      resultat:
        'Un résumé qui montre une double facturation de 18 400 XPF, deux promesses non tenues (une semaine, avant fin septembre), un montant de 14 800 XPF noté le 29/09 qui contredit le premier, et un rappel à ouvrir par des excuses plutôt que par une demande de répétition.',
      criteres: [
        'La contradiction 18 400 XPF contre 14 800 XPF est signalée, pas tranchée.',
        'Les deux promesses sont attribuées à Hélène et à Olivier.',
        'Les silences apparaissent dans la chronologie : rien le 10/09, pas de réponse au 14/09, plus rien du 05/10 au 12/11.',
        'L’apprenant a vérifié les dates dans l’historique d’origine.',
      ],
      pieges: [
        'Annoncer à la cliente un montant de remboursement choisi par l’IA.',
        'Oublier la visite en agence du 05/10, pourtant la plus grave pour la relation.',
        'Présenter le virement comme effectué alors que la note dit « en cours de validation ».',
      ],
      competence: 'discernement',
      technique: 'structurer',
    },
    motsCles: ['historique', 'dossier', 'rappel client', 'résumé', 'remboursement'],
  },
  {
    id: 'accueil-affichette-horaires-pieces',
    titre: 'Créer dans Canva l’affichette des horaires et des pièces à apporter',
    metier: 'accueil',
    niveau: 'debutant',
    famille: 'visuels',
    duree: 20,
    outils: ['canva', 'chatgpt', 'claude'],
    outilConseille: 'canva',
    situation:
      'Vous tenez l’accueil de la Maison des services de Bourail. Les usagers posent chaque jour les mêmes questions sur les horaires et sur les pièces à apporter. Votre responsable vous demande une affichette A4 pour la porte et le comptoir.',
    objectif:
      'Faire concevoir une affichette lisible à partir d’un texte fourni, puis la vérifier mot à mot : un horaire faux sur une porte trompe tous les usagers.',
    etapes: [
      'Relisez le texte du matériau et surlignez ce qui doit absolument figurer : horaires, jours de fermeture, pièces à apporter.',
      'Demandez à votre outil d’IA un texte raccourci (titre, trois blocs, deux lignes de contact) avec le prompt de départ.',
      'Dans Canva, décrivez le design voulu à l’IA Canva : A4 portrait, grands caractères, trois blocs, couleurs sobres. Collez ensuite votre texte validé.',
      'Vérifiez chaque horaire et chaque pièce affichés, caractère par caractère, avec le matériau.',
      'Contrôlez la lisibilité à deux mètres : taille du texte, contraste, pas plus de trois couleurs. Faites relire l’affichette par un collègue avant de l’imprimer.',
    ],
    prompt:
      'Tu es chargé d’accueil à la Maison des services de Bourail. Prépare le texte d’une affichette A4 à lire en trois secondes, à partir des informations ci-dessous.\n\nStructure : un titre, un bloc « Horaires », un bloc « Pièces à apporter » (liste de cinq lignes au maximum, en gras pour l’essentiel), un bloc « Besoin d’aide ? » avec le téléphone. Phrases très courtes, vouvoiement, aucune information en dehors de celles fournies. Si une information manque, écris [à compléter].\n\n<informations>\n[collez les informations ici]\n</informations>',
    materiau: {
      titre: 'Informations de la Maison des services (fictives)',
      texte:
        'Maison des services de Bourail – accueil du public\nHoraires : lundi, mardi, jeudi, vendredi de 7 h 30 à 11 h 30 et de 12 h 30 à 15 h 30 ; mercredi de 7 h 30 à 11 h 30 seulement ; fermé le week-end et les jours fériés.\nPièces à apporter pour la plupart des démarches : une pièce d’identité en cours de validité ; un justificatif de domicile de moins de trois mois ; le courrier ou l’e-mail reçu au sujet de la démarche. Pour une démarche pour un proche : sa procuration écrite et sa pièce d’identité. Selon la démarche, d’autres pièces peuvent être demandées (liste à confirmer par le responsable).\nTéléphone de l’accueil : [à compléter]\nLe dernier dossier est pris 15 minutes avant la fermeture.',
    },
    variantes: {
      simple: 'Ne faire que le bloc des horaires, en grand, sans mise en page particulière.',
      poussee:
        'Décliner l’affichette en story pour le réseau social de la commune avec le redimensionnement magique (Pro), puis préparer une version en gros caractères pour l’accueil.',
    },
    astuces: {
      canva:
        'Décrivez le design à l’IA Canva (format, public, message), puis modifiez les textes à la main : les propositions sont modifiables élément par élément.',
      chatgpt:
        'Demandez trois titres différents pour l’affichette et choisissez-en un : le plus court est souvent le plus lisible.',
      claude:
        'Demandez un artefact avec l’affichette : une maquette à relire avant de la refaire dans Canva.',
    },
    vigilance:
      'La liste des pièces dépend de chaque démarche et de ce que l’organisme exige : l’IA ne doit rien ajouter, et la liste est confirmée par le responsable avant impression. Pas de photo d’usagers reconnaissables.',
    formateur: {
      resultat:
        'Une affichette A4 avec un titre, trois blocs (horaires, pièces, aide), les horaires exacts, le mercredi après-midi fermé, une liste de pièces limitée à celles du texte et le téléphone encore à compléter.',
      criteres: [
        'Chaque horaire est identique au matériau, y compris la fermeture du mercredi après-midi.',
        'Aucune pièce n’est ajoutée par l’IA ; le numéro de téléphone reste entre crochets tant qu’il n’est pas fourni.',
        'L’affichette se lit à deux mètres : peu de mots, grands caractères, fort contraste.',
        'Un collègue a relu l’affichette imprimée avant affichage.',
      ],
      pieges: [
        'Laisser l’IA « arrondir » 15 h 30 en 16 h, ou oublier la pause de midi.',
        'Faire figurer une liste de pièces plus longue ou plus courte que celle validée.',
        'Utiliser un fond coloré et un texte clair qui se lisent mal imprimés en noir et blanc.',
      ],
      competence: 'discernement',
      technique: 'format',
    },
    motsCles: ['affichette', 'horaires', 'pièces à apporter', 'Canva', 'accueil physique'],
  },
  {
    id: 'accueil-simuler-client-en-colere',
    titre: 'S’entraîner à calmer un client en colère avec un jeu de rôle',
    metier: 'accueil',
    niveau: 'intermediaire',
    famille: 'organiser',
    duree: 30,
    outils: ['chatgpt', 'claude', 'gemini', 'copilot'],
    outilConseille: 'chatgpt',
    situation:
      'Vous êtes conseiller d’accueil à l’atelier d’une concession automobile du Mont-Dore. Un client est venu récupérer son véhicule avec trois jours de retard et une facture supérieure au devis. Vous voulez vous préparer à ce genre d’échange, plutôt que de le découvrir au comptoir.',
    objectif:
      'Utiliser l’IA comme partenaire d’entraînement : jouer la scène, recevoir un retour précis sur votre façon de répondre, puis rejouer avec une autre approche.',
    etapes: [
      'Lisez la fiche de scénario et la grille de retour du matériau.',
      'Collez le prompt de départ : l’IA joue le client et ne sort pas de son rôle avant six échanges.',
      'Jouez la scène en répondant comme vous le feriez vraiment ; ne cherchez pas à « gagner ».',
      'Après six échanges, demandez le retour selon la grille : points forts, deux erreurs, reformulations possibles.',
      'Rejouez la scène en changeant une seule chose (par exemple, commencer par une reformulation) et comparez les deux retours.',
      'Notez les trois phrases qui ont le mieux calmé la situation, pour les réutiliser à l’accueil.',
    ],
    prompt:
      'Je m’entraîne à l’accueil d’un client mécontent. Tu joues le client, tu restes dans ton rôle jusqu’à ce que j’écrive « FIN ».\n\nRègles du jeu :\n- tu es en colère mais pas insultant, tu réagis à ce que je dis : si je t’écoute et reformule, tu te calmes un peu ; si je me justifie ou promets sans pouvoir tenir, tu t’énerves ;\n- tu ne réponds que par une à trois phrases, comme à l’oral ;\n- tu ne cèdes pas tant que je ne propose pas une solution concrète dans mes pouvoirs.\n\nLe scénario et mes pouvoirs sont dans la fiche ci-dessous. Commence par la première réplique du client. Après « FIN », donne-moi un retour selon la grille : trois points forts, deux erreurs avec la phrase exacte concernée, et une reformulation que j’aurais pu utiliser.\n\n<fiche>\n[collez la fiche ici]\n</fiche>',
    materiau: {
      titre: 'Fiche de scénario et grille de retour (fictives)',
      texte:
        'SCÉNARIO\nLieu : atelier de la concession Pacifique Auto, Mont-Dore. Le client, M. Thierry Walewene, devait récupérer sa voiture mardi ; elle est rendue vendredi. Le devis annonçait 82 000 XPF, la facture indique 96 500 XPF (remplacement d’un joint non prévu au devis, validé par téléphone avec son épouse). Il a dû emprunter un véhicule pour aller travailler trois jours. Il arrive au comptoir à 16 h 45, il est fatigué et sûr de son droit.\n\nVOS POUVOIRS\nVous pouvez : écouter, expliquer la facture ligne par ligne, noter la réclamation, proposer un rappel du chef d’atelier sous 24 h.\nVous ne pouvez pas : accorder une remise, promettre un remboursement, modifier la facture.\n\nGRILLE DE RETOUR\n1. J’ai laissé le client s’exprimer sans l’interrompre.\n2. J’ai reformulé ce qu’il vit, avant de répondre sur le fond.\n3. Je n’ai pas promis ce que je ne peux pas décider.\n4. J’ai proposé une prochaine étape précise (qui, quand).\n5. Mon ton est resté calme du début à la fin.',
    },
    variantes: {
      simple:
        'Faire une seule scène de trois échanges, sans grille : seulement un retour d’une phrase.',
      poussee:
        'Faire jouer trois clients différents (pressé, bavard, méfiant) à la suite, puis demander un tableau comparatif de vos réponses et un plan de progression en trois points.',
    },
    astuces: {
      chatgpt:
        'Après « FIN », demandez de rejouer la même scène avec un client plus méfiant, puis comparez les deux retours.',
      claude:
        'Placez la fiche de scénario dans un Projet : vous rejouez le même scénario, ou un nouveau, sans rien recoller.',
      gemini:
        'Créez un Gem « Client difficile » avec les règles du jeu : toute l’équipe peut s’entraîner de la même façon.',
    },
    vigilance:
      'N’utilisez jamais les nom, numéro de dossier ou histoire d’un vrai client : le scénario est fictif. L’IA joue un personnage, pas un expert : son retour ne remplace pas celui de votre responsable.',
    formateur: {
      resultat:
        'Une scène jouée sur au moins six échanges, un retour structuré selon la grille avec les phrases exactes à corriger, une seconde scène où l’apprenant a changé un seul point d’approche, et trois phrases réutilisables notées.',
      criteres: [
        'L’IA est restée dans son rôle jusqu’à « FIN » et a réagi à la manière de répondre.',
        'Le retour cite des phrases exactes de l’apprenant, pas des conseils généraux.',
        'L’apprenant n’a promis ni remise ni remboursement hors de ses pouvoirs.',
        'La deuxième scène change un seul paramètre, ce qui rend la comparaison possible.',
      ],
      pieges: [
        'S’entraîner à promettre une remise pour « faire plier » le client simulé.',
        'Accepter un retour trop flatteur sans demander les erreurs.',
        'Prendre les réactions du client simulé pour celles de vrais clients.',
      ],
      competence: 'description',
      technique: 'simulation',
    },
    motsCles: ['jeu de rôle', 'client en colère', 'accueil', 'réclamation', 'entraînement'],
  },
  {
    id: 'accueil-motifs-demandes-irritants',
    titre: 'Classer les demandes reçues par motif et repérer les trois irritants',
    metier: 'accueil',
    niveau: 'intermediaire',
    famille: 'analyser',
    duree: 30,
    outils: ['gemini', 'chatgpt', 'copilot', 'claude'],
    outilConseille: 'gemini',
    situation:
      'Vous êtes chargé d’accueil dans l’agence de Païta d’un opérateur de services. Votre responsable prépare le point du lundi et vous demande de lui apporter un extrait du journal des deux dernières semaines, avec les motifs qui reviennent le plus et ce qui agace le plus les clients.',
    objectif:
      'Faire analyser un journal de demandes, vérifier les comptages à la main et distinguer ce que le tableau prouve de ce que l’IA suppose.',
    etapes: [
      'Collez le tableau du matériau, ou enregistrez-le en fichier CSV et joignez-le.',
      'Envoyez le prompt de départ et lisez les comptages par motif et par canal.',
      'Recomptez à la main les demandes d’un motif et vérifiez un délai moyen avec la calculatrice.',
      'Lisez les trois irritants proposés : chacun doit s’appuyer sur des chiffres du tableau. Rejetez ceux qui sont des suppositions.',
      'Demandez une note de dix lignes pour le point du lundi, avec une action possible par irritant, présentée comme une piste et non comme une décision.',
    ],
    prompt:
      'Tu es analyste de la relation client dans une agence de Païta. Voici le journal des demandes des deux dernières semaines (séparateur : point-virgule).\n\n<journal>\n[collez le tableau ici]\n</journal>\n\n1. Compte les demandes par motif, puis par canal.\n2. Calcule, par motif, la part des demandes résolues au premier contact.\n3. Calcule le délai de réponse moyen par canal.\n4. Propose trois irritants pour les clients, chacun appuyé sur des chiffres du tableau. Si un chiffre ne suffit pas à conclure, écris « à vérifier ».\n5. Signale ce que le tableau ne permet pas de savoir (satisfaction, causes des problèmes).\nMontre tes calculs et n’invente aucune donnée.',
    materiau: {
      titre: 'Extrait du journal des demandes, du 2 au 10 novembre (données fictives)',
      texte:
        'Date;Canal;Motif;Délai de réponse (minutes);Résolu au premier contact\n02/11;Téléphone;Suivi de commande;12;non\n02/11;Accueil;Horaires et pièces à apporter;2;oui\n03/11;E-mail;Suivi de commande;1560;non\n03/11;Téléphone;Facture contestée;25;non\n04/11;Accueil;Retour d’un produit;15;oui\n04/11;Téléphone;Suivi de commande;8;non\n05/11;E-mail;Facture contestée;2880;non\n05/11;Téléphone;Horaires et pièces à apporter;3;oui\n06/11;Accueil;Suivi de commande;10;oui\n06/11;E-mail;Retour d’un produit;1440;oui\n06/11;Téléphone;Panne ou réparation;30;non\n09/11;Accueil;Facture contestée;20;non\n09/11;E-mail;Horaires et pièces à apporter;120;oui\n10/11;Téléphone;Suivi de commande;6;non',
    },
    variantes: {
      simple: 'Demander seulement le comptage des demandes par motif et le motif le plus fréquent.',
      poussee:
        'Faire produire un graphique des motifs et des délais par canal, puis une proposition de trois actions chiffrées pour réduire le premier irritant, présentée avec ses limites.',
    },
    astuces: {
      gemini:
        'Dans Google Sheets, « Demander à Gemini » compte les motifs et propose les formules : vérifiez-en une à la main.',
      chatgpt:
        'Avec l’analyse de données, joignez le fichier CSV : ChatGPT montre ses calculs et trace les graphiques demandés.',
      copilot:
        'Mettez les données sous forme de tableau dans Excel avant de les confier à Copilot : il les lit beaucoup mieux.',
    },
    vigilance:
      'Un vrai journal contient des noms de clients et des références de dossier : travaillez sur une copie sans ces colonnes. Le tableau décrit ce qui s’est passé, pas pourquoi : l’IA ne doit pas en déduire des causes.',
    formateur: {
      resultat:
        'Des comptages exacts (suivi de commande 5, facture contestée 3, horaires 3, retour 2, panne 1), 6 demandes sur 14 résolues au premier contact, un délai moyen de 1 500 minutes par e-mail contre 14 au téléphone, et trois irritants : le suivi de commande, la facture contestée jamais résolue d’emblée, les e-mails qui attendent un à deux jours.',
      criteres: [
        'Les comptages par motif correspondent aux 14 lignes du tableau.',
        'Chaque irritant s’appuie sur un chiffre : 4 suivis de commande sur 5 non résolus, 3 factures sur 3 non résolues, 1 500 minutes de délai moyen par e-mail.',
        'L’IA précise ce que le tableau ne dit pas (causes, satisfaction).',
        'L’apprenant a recompté un motif et un délai moyen à la main.',
      ],
      pieges: [
        'Accepter une cause (« les clients ne comprennent pas le suivi ») que le tableau ne montre pas.',
        'Oublier une ligne (13 demandes au lieu de 14) ou inventer un motif en regroupant mal.',
        'Calculer une moyenne des délais sans distinguer le canal, qui masque l’écart entre l’e-mail et le téléphone.',
      ],
      competence: 'discernement',
      technique: 'decomposer',
    },
    motsCles: ['motifs', 'irritants', 'CSV', 'journal des demandes', 'comptage'],
  },
  {
    id: 'accueil-faq-questions-recues',
    titre: 'Rédiger la FAQ du service à partir des questions réellement reçues',
    metier: 'accueil',
    niveau: 'intermediaire',
    famille: 'rediger',
    duree: 30,
    outils: ['chatgpt', 'claude', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Vous êtes chargé d’accueil à la Clinique du Lagon, à Nouméa. Pendant deux semaines, vous avez noté les questions posées au comptoir et au téléphone. Votre direction veut une page « Questions fréquentes » pour le site et un exemplaire à l’accueil, qui réponde aux vraies questions, avec les mots des patients.',
    objectif:
      'Transformer des questions brutes en FAQ claire, en s’appuyant sur les réponses validées par le service et en laissant de côté tout ce qui n’est pas validé.',
    etapes: [
      'Lisez les questions et les réponses validées du matériau : certaines questions n’ont pas de réponse.',
      'Envoyez le prompt de départ : l’IA regroupe d’abord les questions par thème et ne rédige rien.',
      'Validez les thèmes, puis demandez les réponses de la FAQ, dans l’ordre des thèmes.',
      'Vérifiez que chaque réponse reprend la réponse validée, sans ajout, et que les questions sans réponse sont signalées.',
      'Demandez une version courte de chaque réponse pour l’exemplaire papier, puis relisez le tout à voix haute.',
    ],
    prompt:
      'Tu es chargé d’accueil à la Clinique du Lagon à Nouméa. Je prépare une FAQ pour les patients à partir de questions réellement posées.\n\nÉtape 1 : regroupe les questions ci-dessous en quatre ou cinq thèmes et propose un titre simple pour chacun. Ne rédige pas encore de réponses, j’attends de valider les thèmes.\n\nÉtape suivante (quand je te le dirai) : rédige pour chaque question une réponse de 50 mots au maximum, en vouvoiement, avec les mots des patients, à partir des seules réponses validées. Si une question n’a pas de réponse validée, écris [réponse à valider par le service] au lieu de répondre. Ne donne jamais de conseil médical.\n\n<questions>\n[collez les questions et les réponses validées ici]\n</questions>',
    materiau: {
      titre: 'Questions notées à l’accueil et réponses validées par le service (fictif)',
      texte:
        '1. Faut-il prendre rendez-vous ? → Oui pour les consultations ; sans rendez-vous uniquement pour les prises de sang du matin, de 7 h à 9 h.\n2. Comment je prends rendez-vous ? → Par téléphone ou à l’accueil, du lundi au vendredi de 7 h 30 à 16 h 30.\n3. Qu’est-ce que j’apporte ? → Pièce d’identité, carte CAFAT, ordonnance ou courrier du médecin si vous en avez un, carnet de santé pour un enfant.\n4. Je dois être à jeun ? → Pour une prise de sang, la consigne est donnée par le laboratoire : demandez-la à l’accueil. Pas de réponse générale.\n5. Où je me gare ? → Parking visiteurs devant l’entrée, places limitées ; parking de la rue voisine en complément.\n6. Combien ça coûte ? → [pas de réponse validée]\n7. Je peux venir avec mon enfant ? → Oui, un accompagnant est accepté pour les consultations.\n8. Quand j’ai mes résultats ? → [pas de réponse validée]\n9. Vous prenez ma mutuelle ? → [pas de réponse validée]\n10. Je suis en retard, je fais quoi ? → Prévenez l’accueil par téléphone : selon l’agenda du praticien, le rendez-vous peut être maintenu ou reporté.\n11. Comment annuler un rendez-vous ? → Par téléphone, le plus tôt possible, pour libérer la place.\n12. Je peux payer comment ? → Espèces et carte bancaire ; chèques non acceptés.',
    },
    variantes: {
      simple:
        'Rédiger seulement les réponses aux cinq questions qui ont une réponse validée et courte.',
      poussee:
        'Ajouter à la FAQ une section « Ce que nous ne pouvons pas vous dire au téléphone », un tableau de suivi des questions à faire valider et une version en gros caractères pour l’accueil.',
    },
    astuces: {
      chatgpt:
        'Ouvrez la FAQ dans le canevas : vous raccourcissez ou reformulez une seule réponse sans toucher aux autres.',
      claude:
        'Demandez un artefact avec la FAQ : vous la relisez comme une page du site avant de la copier.',
      copilot:
        'Transformez la FAQ en Copilot Page pour que le service médical et la direction la valident au même endroit.',
    },
    vigilance:
      'Aucune donnée de patient dans les questions collées. L’IA ne doit rien répondre sur le prix, les délais de résultats ou la prise en charge : ce sont des informations à faire valider, pas à deviner. Aucun conseil médical.',
    formateur: {
      resultat:
        'Une FAQ en quatre ou cinq thèmes dont les neuf réponses validées sont reprises fidèlement, et trois questions (prix, résultats, mutuelle) marquées « à valider par le service » plutôt que comblées.',
      criteres: [
        'Les trois questions sans réponse validée portent la mention « à valider ».',
        'Les horaires (7 h à 9 h pour les prises de sang, 7 h 30 à 16 h 30 pour les rendez-vous) sont exacts.',
        'La question 4 ne reçoit pas de réponse générale sur le jeûne.',
        'Chaque réponse tient en 50 mots et reprend le vocabulaire des patients.',
      ],
      pieges: [
        'Laisser l’IA répondre « oui, toutes les mutuelles sont acceptées ».',
        'Inventer un délai de résultats pour faire une FAQ « complète ».',
        'Reformuler la consigne de jeûne en conseil médical.',
      ],
      competence: 'diligence',
      technique: 'decomposer',
    },
    motsCles: ['FAQ', 'questions fréquentes', 'patients', 'accueil', 'clinique'],
  },
  {
    id: 'accueil-consignes-accueil-handicap',
    titre: 'Préparer les consignes d’accueil d’un public en situation de handicap',
    metier: 'accueil',
    niveau: 'intermediaire',
    famille: 'veiller',
    duree: 45,
    outils: ['claude', 'chatgpt', 'gemini', 'copilot'],
    outilConseille: 'claude',
    situation:
      'Vous travaillez à l’accueil de la mairie annexe de Dumbéa. Votre responsable veut une fiche de consignes pour accueillir au mieux les personnes en situation de handicap (moteur, visuel, auditif, mental ou psychique) et vous demande de la préparer en une semaine. Elle sera relue par une association locale avant diffusion.',
    objectif:
      'Mener une recherche documentée, distinguer les bonnes pratiques d’accueil des obligations réglementaires, et produire une fiche fiable à faire valider par les personnes concernées.',
    etapes: [
      'Activez la recherche web de votre outil et envoyez le prompt de départ.',
      'Ouvrez chaque source citée : elle doit venir d’un organisme officiel ou d’une association reconnue, pas d’un site commercial.',
      'Faites rédiger une fiche d’une page : trois conseils par type de handicap, formulés comme des gestes à faire à l’accueil.',
      'Repérez toute phrase qui parle d’une obligation légale ou réglementaire : l’IA ne doit pas la rédiger, la fiche la renvoie à votre responsable.',
      'Préparez la liste de questions à poser à l’association locale pour valider ou corriger la fiche.',
    ],
    prompt:
      'Tu es chargé d’accueil dans une mairie annexe à Dumbéa, en Nouvelle-Calédonie. Je prépare une fiche d’une page de consignes d’accueil pour les personnes en situation de handicap moteur, visuel, auditif, mental ou psychique.\n\nCherche sur le web des recommandations de bonnes pratiques d’accueil publiées par des organismes officiels ou des associations reconnues, en priorité calédoniens, sinon français. Pour chaque conseil, donne la source (nom du site et lien) et la date si elle figure sur la page.\n\nRédige ensuite la fiche : trois gestes concrets par type de handicap, en phrases courtes. N’affirme aucune obligation légale ni aucune règle d’accessibilité des locaux : si une source en parle, indique-le sans la reprendre et classe-la dans une liste « À faire vérifier ». Si tu ne trouves pas d’information locale, dis-le au lieu de l’estimer. Termine par les questions à poser à une association de personnes en situation de handicap pour valider la fiche.',
    variantes: {
      simple: 'Se limiter à deux types de handicap (moteur et auditif) et à deux sources.',
      poussee:
        'Ajouter une fiche pour l’accueil téléphonique et une pour la signalétique du hall, puis faire préparer un plan de formation de dix minutes pour l’équipe.',
    },
    astuces: {
      claude:
        'Activez la recherche web : Claude cite les pages utilisées, ouvrez-les avant de reprendre un conseil.',
      chatgpt:
        'La recherche approfondie, limitée en gratuit, rend un rapport sourcé utile pour comparer plusieurs organismes.',
      gemini:
        'Lancez Deep Research, puis exportez le rapport dans Google Docs pour y noter vos vérifications.',
    },
    vigilance:
      'Ne citez jamais le cas d’une personne réelle venue à l’accueil. Ces consignes touchent à la dignité des personnes : elles sont validées par une association concernée, pas par l’IA. Les obligations réglementaires se vérifient auprès de votre responsable.',
    formateur: {
      resultat:
        'Une fiche d’une page avec trois gestes par type de handicap, chaque conseil relié à une source ouverte, une liste « À faire vérifier » pour tout ce qui touche à la réglementation, et une liste de questions pour l’association locale.',
      criteres: [
        'Chaque conseil est relié à une source que l’apprenant a ouverte et jugée fiable.',
        'Aucune obligation légale ou règle d’accessibilité n’est affirmée dans la fiche.',
        'Les informations locales non trouvées sont signalées, pas estimées.',
        'La fiche est présentée comme un projet à faire valider par une association.',
      ],
      pieges: [
        'Reprendre un conseil d’un site commercial ou d’une page ancienne sans en vérifier l’origine.',
        'Laisser l’IA écrire « la loi impose… » sans source officielle ouverte.',
        'Diffuser la fiche sans validation par les personnes concernées.',
      ],
      competence: 'diligence',
      technique: 'sources',
    },
    motsCles: ['handicap', 'accessibilité', 'accueil du public', 'recherche web', 'sources'],
  },
  {
    id: 'accueil-assistant-reponses-renvoi-humain',
    titre: 'Créer un assistant qui prépare les réponses et renvoie vers un humain',
    metier: 'accueil',
    niveau: 'avance',
    famille: 'automatiser',
    duree: 60,
    outils: ['claude', 'chatgpt', 'gemini', 'copilot'],
    outilConseille: 'claude',
    situation:
      'Au service client d’un fournisseur d’accès internet de Nouméa, vous recevez chaque jour des dizaines de messages. Vous voulez un assistant qui prépare un brouillon de réponse que vous relisez et envoyez. Mais certains messages ne doivent jamais recevoir de réponse automatique : litige, menace, détresse, données personnelles, demande de geste commercial.',
    objectif:
      'Rédiger les instructions d’un assistant qui sait quand répondre et quand s’arrêter, puis le tester sur des cas ordinaires et des cas qui sortent du cadre.',
    etapes: [
      'Rassemblez les documents de référence anonymisés : trois réponses types, la liste des horaires et services, la fiche des pouvoirs des conseillers.',
      'Créez un Projet (Claude, ChatGPT), un Gem (Gemini) ou un agent (Copilot) et collez les instructions du prompt de départ, après les avoir complétées.',
      'Testez avec les six messages du matériau : trois ordinaires, trois qui doivent déclencher un renvoi vers un humain.',
      'Notez chaque écart : réponse là où il fallait renvoyer, information inventée, ton inadapté. Ajoutez une règle ou un exemple pour chacun.',
      'Rejouez les six tests, puis demandez à un collègue d’en inventer trois nouveaux pour chercher les failles.',
      'Rédigez une page « Ce que l’assistant ne fait jamais » à afficher près des postes.',
    ],
    prompt:
      'Tu es l’assistant de préparation des réponses du service client de [nom de l’entreprise], un fournisseur d’accès internet à Nouméa. Tu prépares un brouillon qu’un conseiller relit avant envoi : tu ne t’adresses jamais directement au client.\n\nRègles :\n- Réponds uniquement avec les documents fournis (réponses types, horaires et services, fiche des pouvoirs). Si une information manque, écris [à compléter par le conseiller].\n- Ne promets jamais un remboursement, un geste commercial, un délai de rétablissement ou une date d’intervention.\n- Renvoie vers un humain, sans rédiger de réponse, quand le message contient : une menace ou une insulte, une situation de détresse, une demande de geste commercial ou de résiliation, un litige sur une facture, un cas médical, des données personnelles sensibles. Réponds alors seulement « À TRAITER PAR UN CONSEILLER » avec le motif en une phrase.\n- Pour les messages ordinaires : vouvoiement, cinq lignes au maximum, et à la fin la liste des points que le conseiller doit vérifier avant envoi.',
    materiau: {
      titre: 'Six messages de test (fictifs)',
      texte:
        '1. Bonjour, quels sont vos horaires d’ouverture à l’agence de Païta ? Je voudrais venir samedi.\n2. Ma connexion est très lente depuis hier soir à Dumbéa. Que dois-je faire avant de vous appeler ?\n3. Pouvez-vous m’envoyer un duplicata de ma facture de septembre ? Je n’ai plus accès à mon espace client.\n4. Cela fait trois semaines que j’attends l’intervention d’un technicien. Si personne ne vient cette semaine, je vous traîne devant les tribunaux et je ferai du bruit sur les réseaux.\n5. Je suis alité et sans internet, mon médecin a besoin de me joindre pour mes soins. Je panique, faites quelque chose tout de suite.\n6. Vous m’avez facturé deux fois le mois d’octobre. Je veux être remboursé et un geste pour le dérangement.',
    },
    variantes: {
      simple:
        'Créer l’assistant pour un seul type de message : les questions d’horaires et de services.',
      poussee:
        'Ajouter un tableau des renvois vers un humain (motif, fréquence, personne à qui transmettre) et rejouer chaque mois les tests avec les nouveaux messages difficiles de la semaine.',
    },
    astuces: {
      claude:
        'Déposez les documents de référence dans le Projet ; pour une méthode de tri maison utilisable dans toutes vos conversations, créez plutôt une compétence.',
      chatgpt:
        'Un Projet suffit pour vous ; un GPT, dont la création est payante, se partage avec toute l’équipe.',
      gemini:
        'Créez un Gem et joignez-y les documents de référence : il s’y référera à chaque message.',
      copilot:
        'Selon votre licence, « Créer un agent » permet de proposer l’assistant à tout le service avec ses sources.',
    },
    vigilance:
      'Les documents du Projet doivent être anonymisés, et les messages de test sont fictifs : ne collez jamais un vrai message de client. L’assistant prépare, le conseiller décide et envoie, y compris pour les cas ordinaires.',
    formateur: {
      resultat:
        'Un assistant dont les instructions listent les cas de renvoi : il prépare les réponses des messages 1 à 3, avec une liste de vérifications, et répond « À TRAITER PAR UN CONSEILLER » aux messages 4, 5 et 6.',
      criteres: [
        'Les cas de renvoi vers un humain sont listés dans les instructions, pas laissés à l’appréciation de l’IA.',
        'Les messages 4, 5 et 6 ne reçoivent aucune réponse rédigée, juste un renvoi avec le motif.',
        'Les messages ordinaires ne contiennent aucune promesse ni information inventée.',
        'L’apprenant a modifié les instructions après un test raté et constaté l’effet.',
      ],
      pieges: [
        'Un assistant qui répond poliment à la menace du message 4 en promettant une intervention.',
        'Le message 5, urgent, traité comme une demande de dépannage ordinaire.',
        'Laisser l’assistant s’adresser directement aux clients sans relecture.',
      ],
      competence: 'delegation',
      technique: 'instructions',
    },
    motsCles: ['assistant', 'projet', 'gem', 'agent', 'renvoi vers un humain', 'relation client'],
  },
  {
    id: 'accueil-delais-reponse-planning',
    titre: 'Analyser les délais de réponse et ajuster le planning de l’accueil',
    metier: 'accueil',
    niveau: 'avance',
    famille: 'analyser',
    duree: 45,
    outils: ['copilot', 'chatgpt', 'gemini', 'claude'],
    outilConseille: 'copilot',
    situation:
      'Vous coordonnez l’accueil de l’agence de Koné d’un opérateur de services. Les clients se plaignent d’attendre trop longtemps certains jours. Vous avez le relevé d’une semaine par créneau : demandes reçues, délai moyen de réponse et nombre d’agents présents. Vous devez proposer un nouveau planning avec le même nombre total de présences.',
    objectif:
      'Analyser un relevé, repérer les créneaux sous tension, proposer un planning ajusté sous contraintes et vérifier ses effets plutôt que de croire une simulation.',
    etapes: [
      'Collez le tableau du matériau et lancez l’analyse du prompt de départ : l’IA ne propose pas encore de planning.',
      'Vérifiez à la main deux ratios (demandes par agent) et le total de demandes d’une journée.',
      'Demandez ensuite un planning ajusté : même nombre de présences (28), jamais moins d’un agent par créneau, jamais plus de deux.',
      'Contrôlez que le total de présences est inchangé et que la proposition ne dégrade pas un créneau déjà tendu.',
      'Demandez à l’IA ce qu’elle ne peut pas savoir (absences, compétences de chacun, pauses) et préparez les questions à poser à l’équipe avant toute décision.',
    ],
    prompt:
      'Tu es analyste de l’organisation d’un accueil, agence de Koné. Voici le relevé d’une semaine (séparateur : point-virgule).\n\n<releve>\n[collez le tableau ici]\n</releve>\n\nÉtape 1 : calcule le total de demandes par jour et le nombre de demandes par agent pour chaque créneau. Classe les créneaux du plus tendu au moins tendu, en t’appuyant sur le délai moyen de réponse.\nÉtape 2 : propose, sans changer le nombre total de présences, un planning ajusté, avec ces contraintes : au moins un agent et au plus deux par créneau. Explique chaque déplacement par les chiffres.\nÉtape 3 : indique ce que le relevé ne permet pas de savoir et qui pourrait remettre en cause ta proposition. N’invente aucune donnée.\n\nNe passe à l’étape suivante que quand je te le demande.',
    materiau: {
      titre: 'Relevé de la semaine du 2 au 6 novembre (données fictives)',
      texte:
        'Jour;Créneau;Demandes reçues;Délai moyen de réponse (minutes);Agents présents\nLundi;7 h 30-10 h;42;18;2\nLundi;10 h-13 h;35;9;2\nLundi;13 h-16 h 30;28;7;2\nMardi;7 h 30-10 h;30;10;2\nMardi;10 h-13 h;26;8;2\nMardi;13 h-16 h 30;22;6;2\nMercredi;7 h 30-10 h;24;7;2\nMercredi;10 h-13 h;21;6;2\nMercredi;13 h-16 h 30;19;5;1\nJeudi;7 h 30-10 h;27;9;2\nJeudi;10 h-13 h;25;8;2\nJeudi;13 h-16 h 30;23;6;2\nVendredi;7 h 30-10 h;38;21;2\nVendredi;10 h-13 h;33;12;2\nVendredi;13 h-16 h 30;40;27;1',
    },
    variantes: {
      simple: 'Se limiter à l’étape 1 et au classement des trois créneaux les plus tendus.',
      poussee:
        'Ajouter une contrainte (un agent absent le mardi après-midi, un autre qui ne travaille jamais le lundi matin) et faire comparer deux plannings dans un tableau, avec leurs risques.',
    },
    astuces: {
      copilot:
        'Mettez le relevé sous forme de tableau dans Excel avant de le confier à Copilot, puis vérifiez la formule d’un ratio avant de l’étendre.',
      chatgpt:
        'Avec l’analyse de données, joignez le fichier CSV : ChatGPT montre ses calculs et trace le graphique des délais par créneau.',
      gemini:
        'Dans Google Sheets, « Demander à Gemini » propose la formule des demandes par agent ; comparez-la à votre calcul manuel.',
    },
    vigilance:
      'Un planning touche aux conditions de travail de vos collègues : vous proposez, la direction décide, et personne ne doit être désigné nommément à l’IA. Le relevé d’une semaine ne suffit pas à conclure : il faut vérifier les semaines voisines.',
    formateur: {
      resultat:
        'Un classement où le vendredi après-midi (40 demandes, 1 agent, 27 minutes), le vendredi matin (21 minutes) et le lundi matin (18 minutes) sont les plus tendus, et un planning à 28 présences qui renforce le vendredi après-midi en prenant un agent là où la charge est la plus faible, par exemple le mercredi de 10 h à 13 h (21 demandes pour deux agents, 6 minutes).',
      criteres: [
        'Le total de présences reste 28 (6, 6, 5, 6, 5 par jour dans le relevé) et les contraintes de un à deux agents sont respectées.',
        'Chaque déplacement est justifié par des chiffres du relevé, par exemple 40 demandes pour un agent le vendredi après-midi.',
        'Le total de demandes par jour (105, 78, 64, 75, 111) est vérifié à la main.',
        'La réponse indique ce que le relevé ne montre pas : absences, pauses, nature des demandes.',
      ],
      pieges: [
        'Proposer un planning qui compte 29 présences sans le dire.',
        'Prendre un agent au lundi matin, pourtant déjà en tension.',
        'Conclure à partir d’une seule semaine, sans signaler qu’un autre relevé peut changer le classement.',
      ],
      competence: 'discernement',
      technique: 'decomposer',
    },
    motsCles: ['planning', 'délais de réponse', 'CSV', 'effectifs', 'accueil'],
  },
  {
    id: 'accueil-carnet-base-reponses',
    titre: 'Construire la base de réponses du service dans un carnet Gemini Notebook',
    metier: 'accueil',
    niveau: 'avance',
    famille: 'synthetiser',
    duree: 45,
    outils: ['notebook', 'claude'],
    outilConseille: 'notebook',
    situation:
      'Vous êtes référent du service client d’un fournisseur d’eau et d’énergie du Nord, à Koné. Les nouveaux conseillers perdent un temps considérable à chercher la bonne réponse dans une dizaine de documents. Vous voulez un carnet partagé qu’ils interrogent, avec la référence exacte de chaque réponse.',
    objectif:
      'Exploiter un corpus de documents avec Gemini Notebook, vérifier les citations et repérer les contradictions et les trous de la documentation du service.',
    etapes: [
      'Rassemblez 6 à 10 documents sans données de clients : procédures, conditions de vente, modèles de réponses, fiche des horaires et tarifs de service.',
      'Créez un carnet dans Gemini Notebook et ajoutez-les comme sources.',
      'Envoyez le prompt de départ et générez une FAQ à partir des sources.',
      'Posez les six questions du matériau et ouvrez chaque citation pour vérifier la réponse.',
      'Notez les contradictions entre deux documents et les questions restées sans réponse : corrigez vos documents plutôt que de laisser l’outil trancher.',
      'Partagez le carnet avec un nouveau conseiller et faites-lui poser trois questions de son choix.',
    ],
    prompt:
      'À partir uniquement des sources de ce carnet, rédige une base de réponses pour les nouveaux conseillers du service client, organisée par thème (facturation, interventions, horaires et accueil, réclamations). Pour chaque réponse, cite la source. Si deux sources se contredisent, présente les deux versions avec leur source, sans choisir, dans une liste « Contradictions à régler ». Si une question courante n’est traitée par aucune source, signale-la dans une liste « À documenter ». Ne donne jamais un montant, un délai ou une règle qui ne figure pas dans les sources.',
    materiau: {
      titre: 'Questions de test à poser au carnet',
      texte:
        '1. Quels sont les horaires de l’accueil de l’agence de Koné ?\n2. Dans quel délai répond-on à un e-mail de client ?\n3. Que faire si un client conteste une facture ?\n4. Qui peut décider d’un geste commercial, et jusqu’à quel montant ?\n5. Comment ouvrir un dossier d’intervention en urgence, le week-end ?\n6. Quel est le numéro de portable personnel du directeur ?',
    },
    variantes: {
      simple: 'Charger trois documents et ne poser que les trois premières questions.',
      poussee:
        'Générer aussi un résumé audio d’intégration pour un nouveau conseiller et des fiches de révision, puis comparer les réponses du carnet avec celles d’un Projet Claude alimenté des mêmes documents.',
    },
    astuces: {
      notebook:
        'Les rapports (FAQ, guide d’étude) citent leurs sources : cliquez sur chaque numéro pour relire le passage avant de l’adopter.',
      claude:
        'Pour comparer, déposez les mêmes documents dans un Projet, posez les mêmes questions et notez les écarts avec le carnet.',
    },
    vigilance:
      'Aucun code d’accès, mot de passe, numéro personnel ni donnée de client dans les sources : le carnet sera partagé avec toute l’équipe. La question 6 est un piège volontaire : le carnet ne doit pas répondre.',
    formateur: {
      resultat:
        'Un carnet partagé avec une base de réponses par thème et citations vérifiées, une liste de contradictions (par exemple deux horaires différents dans deux documents) et une liste « À documenter » où figurent les questions sans réponse, dont la question 6.',
      criteres: [
        'Chaque réponse renvoie à une source dont l’apprenant a ouvert la citation.',
        'Les contradictions entre deux documents sont listées, pas résolues par l’IA.',
        'La question 6 reste sans réponse et aucune donnée sensible ne figure dans les sources.',
        'Les documents du service sont corrigés ou complétés après la liste « À documenter ».',
      ],
      pieges: [
        'Croire une réponse sans ouvrir la citation, alors qu’elle mélange deux procédures.',
        'Ajouter un document avec des identifiants « pour que ce soit complet ».',
        'Laisser le carnet répondre à la question 4 avec un montant qui n’est dans aucune source.',
      ],
      competence: 'diligence',
      technique: 'sources',
    },
    motsCles: ['carnet', 'Gemini Notebook', 'base de réponses', 'sources', 'procédures'],
  },
  {
    id: 'accueil-charte-relation-client-dix-cas',
    titre: 'Rédiger la charte de relation client et la tester sur dix cas',
    metier: 'accueil',
    niveau: 'avance',
    famille: 'organiser',
    duree: 60,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Le magasin Tiaré Équipement de Païta, qui compte une quinzaine de salariés, n’a aucune règle écrite pour répondre aux clients : chacun fait comme il le sent. Le gérant vous demande une charte de relation client d’une page, avec un engagement sur les délais et ce qu’on fait quand on ne peut pas répondre, puis la preuve qu’elle fonctionne sur des cas réels.',
    objectif:
      'Rédiger une charte en plusieurs étapes avec l’IA, puis la tester sur des cas concrets pour trouver ses failles avant de la présenter à l’équipe.',
    etapes: [
      'Notez en dix lignes ce que vous savez du magasin : horaires, canaux de contact, qui décide d’un geste commercial.',
      'Envoyez le prompt de départ : l’IA propose d’abord le plan de la charte, sans rédiger.',
      'Validez le plan, puis faites rédiger la charte d’une page : principes, délais visés (à compléter par vous), règles de renvoi vers un responsable.',
      'Testez-la sur les dix cas du matériau : pour chaque cas, l’IA applique la charte et signale si elle est silencieuse ou ambiguë.',
      'Corrigez la charte là où elle a échoué, puis retestez les cas qui avaient échoué.',
      'Faites relire la charte à deux collègues avant de la présenter au gérant, avec la liste des cas qu’elle ne règle pas.',
    ],
    prompt:
      'Tu es consultant en relation client pour un magasin d’équipement de 15 salariés à Païta. Je dois rédiger une charte de relation client d’une page et la tester.\n\nÉtape 1 : propose un plan en cinq parties (principes, canaux et horaires, délais de réponse, que faire quand on ne sait pas ou quand on n’est pas d’accord, qui décide de quoi). Ne rédige rien, j’attends de valider.\n\nÉtape 2 (quand je te le dirai) : rédige la charte en phrases courtes. Les délais, les montants et les noms des décideurs sont à laisser entre [crochets] : n’en invente aucun. Elle ne contient aucune référence à la loi.\n\nÉtape 3 : applique la charte à chacun des dix cas ci-dessous. Pour chaque cas, réponds en une ligne : la règle appliquée, ou « la charte ne dit rien ». Signale tout cas où deux règles se contredisent.\n\n<cas>\n[collez les cas ici]\n</cas>',
    materiau: {
      titre: 'Dix cas de test (fictifs)',
      texte:
        '1. Un client appelle à 16 h 25 pour une question de livraison. Le magasin ferme à 16 h 30.\n2. Un client écrit en majuscules, très agressif, après un retard de livraison de deux semaines.\n3. Une cliente demande une remise de 15 % parce qu’elle est une cliente fidèle depuis dix ans.\n4. Un client reçoit un produit abîmé et envoie une photo par SMS au numéro personnel d’un vendeur.\n5. Un client s’adresse en anglais, l’équipe ne parle pas bien anglais.\n6. Un client demande à parler au gérant pour une question de remboursement.\n7. Un e-mail arrive un vendredi à 17 h avec la mention « urgent ».\n8. Une personne âgée ne comprend pas le formulaire de commande et demande de le remplir à sa place.\n9. Un client demande des informations sur un autre client (« il a acheté la même chose que moi, combien a-t-il payé ? »).\n10. Un client menace de laisser un avis très négatif en ligne si on ne lui rembourse pas immédiatement.',
    },
    variantes: {
      simple: 'Rédiger seulement les principes et les délais, et tester sur cinq cas.',
      poussee:
        'Faire produire une version affichée à l’accueil et une version pour le site, rédiger un guide de mise en œuvre en trois étapes pour l’équipe, puis rejouer les dix cas avec quinze cas nouveaux inventés par vos collègues.',
    },
    astuces: {
      claude:
        'Placez la charte dans un Projet : vous testez chaque nouvelle version sur les dix cas sans rien recoller.',
      chatgpt:
        'Ouvrez la charte dans le canevas pour reformuler un article précis après chaque test.',
      copilot:
        'Transformez la charte en Copilot Page : l’équipe la commente avant que le gérant la valide.',
      gemini:
        'Demandez un tableau (cas, règle appliquée, charte silencieuse ou ambiguë) et exportez-le dans Google Sheets pour le suivre.',
    },
    vigilance:
      'La charte engage le magasin : délais, remboursements et pouvoirs de chacun sont décidés par le gérant, pas par l’IA. Le cas 9 touche à la confidentialité des clients : la charte doit l’interdire. Aucun vrai cas de client dans les tests.',
    formateur: {
      resultat:
        'Une charte d’une page avec des délais et des montants laissés entre crochets, validée par le gérant, et un tableau des dix cas où la charte est silencieuse sur au moins trois d’entre eux (anglais, personne âgée, SMS sur un numéro personnel), puis corrigée.',
      criteres: [
        'La charte ne contient ni délai ni montant inventé : tout ce qui relève du gérant est à compléter.',
        'Chaque cas est testé et le tableau distingue les règles appliquées des silences de la charte.',
        'Le cas 9 est réglé par une règle de confidentialité claire.',
        'La charte a été corrigée puis retestée sur les cas qui avaient échoué.',
      ],
      pieges: [
        'Laisser l’IA fixer un délai de réponse ou un taux de remise sans validation du gérant.',
        'Considérer la charte comme finie sans l’avoir testée sur le cas 4 ou le cas 10.',
        'Écrire des règles que l’équipe ne peut pas tenir, par exemple répondre à tout e-mail en une heure.',
      ],
      competence: 'delegation',
      technique: 'decomposer',
    },
    motsCles: ['charte', 'relation client', 'règles', 'cas pratiques', 'engagements'],
  },
];
