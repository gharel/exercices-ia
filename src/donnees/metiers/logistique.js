/**
 * Transport et logistique : transit, import par conteneur, entrepôt, livraison, transport
 * de personnes. Toutes les personnes, entreprises, navires et sommes sont fictifs.
 * Aucun taux de droits ou de taxes n’est donné : les exercices demandent de les vérifier.
 */

export const vocabulaire = {
  structure: {
    g: 'f',
    s: 'entreprise de transit et de logistique',
    p: 'entreprises de transit et de logistique',
  },
  client: { g: 'm', s: 'client importateur', p: 'clients importateurs' },
  partenaire: { g: 'm', s: 'transporteur', p: 'transporteurs' },
  documentCourant: { g: 'm', s: 'devis de transport', p: 'devis de transport' },
  documentLong: {
    g: 'm',
    s: 'contrat de prestation logistique',
    p: 'contrats de prestation logistique',
  },
  reunion: {
    g: 'f',
    s: 'réunion mensuelle d’exploitation',
    p: 'réunions mensuelles d’exploitation',
  },
  offre: {
    g: 'm',
    s: 'service de groupage maritime depuis Brisbane',
    p: 'services de groupage maritime depuis Brisbane',
  },
  poste: { g: 'm', s: 'préparateur de commandes cariste', p: 'préparateurs de commandes caristes' },
  evenement: {
    g: 'f',
    s: 'inauguration du nouvel entrepôt de Païta',
    p: 'inaugurations d’entrepôt',
  },
  visuel: { g: 'm', s: 'dépliant commercial', p: 'dépliants commerciaux' },
  domaine: 'le transport et la logistique',
  motifReclamation: 'un conteneur livré avec dix jours de retard et des cartons abîmés',
  donnees: 'le relevé des arrivages de conteneurs du trimestre, avec leurs retards',
  colonnes:
    'Conteneur;Origine;Arrivée prévue;Arrivée réelle;Retard (jours);Frais de stationnement (XPF)',
  indicateur: 'le taux de livraisons à l’heure du mois',
  veille: 'l’évolution des tarifs et des délais du fret maritime vers la Nouvelle-Calédonie',
  sourcesVeille:
    'les avis des compagnies maritimes, les informations du port autonome et la presse économique calédonienne',
  jargon: 'les incoterms, le connaissement et le groupage',
  procedure: 'la réception d’un conteneur à l’entrepôt',
  situationTendue:
    'un client importateur furieux que sa marchandise soit bloquée en douane la veille d’une promotion',
  donneesSensibles:
    'les adresses des clients, les valeurs déclarées des marchandises et les coordonnées des chauffeurs',
  corpus:
    'les contrats de prestation, les procédures d’entrepôt et les conditions générales de transport',
  publicCible: 'les commerçants et artisans qui importent de petites quantités depuis l’Australie',
  etranger: 'un fournisseur chinois qui écrit en anglais',
  themeFormation: 'les étapes du traitement d’un conteneur, de l’arrivée au port à la livraison',
  tacheRepetitive: 'les avis d’arrivée envoyés aux clients',
  planning: 'les tournées de livraison de la semaine pour quatre camions',
  comparaison: 'deux offres de compagnies maritimes pour un conteneur de 20 pieds',
};

export const exercices = [
  {
    id: 'logi-email-retard-conteneur',
    titre: 'Annoncer à un client le retard de son conteneur',
    metier: 'logistique',
    niveau: 'debutant',
    famille: 'rediger',
    duree: 15,
    outils: ['copilot', 'claude', 'chatgpt', 'gemini'],
    outilConseille: 'copilot',
    situation:
      'Vous travaillez au service clients d’un transitaire de Ducos. Le conteneur d’une quincaillerie de Païta devait arriver le 14 octobre ; la compagnie maritime annonce dix jours de retard. La cliente comptait sur cette marchandise pour sa promotion de fin octobre, et elle n’a toujours pas envoyé la facture commerciale définitive.',
    objectif:
      'Rédiger en une demande un e-mail honnête et précis, qui annonce une mauvaise nouvelle sans promettre ce qu’on ne maîtrise pas.',
    etapes: [
      'Lisez le matériau et calculez vous-même la date de livraison au plus tôt.',
      'Collez le matériau dans votre outil d’IA avec le prompt de départ.',
      'Vérifiez les dates, le numéro de conteneur et l’absence de toute promesse que vous ne pouvez pas tenir.',
      'Vérifiez que l’e-mail demande bien la facture commerciale définitive et explique pourquoi.',
      'Demandez une version de trois phrases pour un SMS, et vérifiez qu’elle garde les mêmes dates.',
    ],
    prompt:
      'Tu es chargé de clientèle chez un transitaire à Nouméa. Rédige un e-mail à notre cliente, responsable des achats d’une quincaillerie, pour l’informer du retard de son conteneur. Utilise uniquement les informations ci-dessous. L’e-mail doit : annoncer le retard et sa cause en une phrase ; donner la nouvelle date d’arrivée et la date de livraison au plus tôt, en précisant qu’elles restent prévisionnelles ; demander la facture commerciale définitive pour préparer le dédouanement ; proposer un point téléphonique. Ton professionnel et empathique, 150 mots au maximum, vouvoiement. N’invente aucun geste commercial.\n\n<informations>\n[collez le message et la note ici]\n</informations>',
    materiau: {
      titre: 'Message de la compagnie maritime et note interne',
      texte:
        'Message de la compagnie maritime (reçu ce matin) :\nNavire Coral Fictif, voyage 214S – escale de Nouméa décalée. Nouvelle date d’arrivée prévue : 24/10 au lieu du 14/10, à la suite d’une congestion au port de Brisbane. Les conteneurs seront débarqués sous 48 h après l’arrivée.\n\nNote interne :\nCliente : quincaillerie de Païta, responsable des achats\nConteneur 40 pieds TCLU 482713-6, 312 colis (outillage, peinture)\nElle voulait la marchandise pour sa promotion qui commence le 25/10\nDédouanement : on peut préparer la déclaration avant l’arrivée si on a la facture commerciale définitive -> toujours pas reçue\nLivraison possible au plus tôt 2 jours ouvrés après le débarquement, si la douane est faite',
    },
    variantes: {
      simple:
        'Rédiger seulement les trois phrases essentielles : retard, nouvelle date, document attendu.',
      poussee:
        'Préparer aussi une note interne au commercial avec deux solutions à proposer à la cliente (livraison partielle prioritaire, report de la promotion), à valider avant d’en parler.',
    },
    astuces: {
      copilot:
        'Dans Outlook, partez d’un « Brouillon avec Copilot » avec les informations, puis lancez « Coaching par Copilot » avant d’envoyer.',
      gemini:
        'Dans Gmail, « Aide-moi à écrire » rédige le premier jet ; demandez ensuite une version plus courte.',
    },
    vigilance:
      'N’annoncez jamais une date comme certaine : les arrivées de navires bougent encore. Ne collez ni la valeur de la marchandise ni les coordonnées de la cliente dans un outil que votre entreprise n’a pas autorisé.',
    formateur: {
      resultat:
        'Un e-mail court qui annonce l’arrivée prévue le 24/10, une livraison au plus tôt vers le 28/10 (débarquement sous 48 h, puis 2 jours ouvrés), donc après le début de la promotion, demande la facture définitive et propose un appel.',
      criteres: [
        'Les dates sont justes et présentées comme prévisionnelles.',
        'L’e-mail ne promet ni livraison avant le 25/10 ni geste commercial.',
        'La demande de facture commerciale est claire et justifiée.',
        'Le numéro de conteneur est exact (TCLU 482713-6).',
      ],
      pieges: [
        'Un e-mail rassurant qui laisse croire que la marchandise sera là pour la promotion.',
        'Une remise ou une prise en charge des frais proposée par l’IA sans accord de la direction.',
      ],
      competence: 'description',
      technique: 'contexte',
    },
    motsCles: ['retard', 'conteneur', 'e-mail', 'client', 'transit'],
  },
  {
    id: 'logi-reponse-litige-casse',
    titre: 'Reformuler une réponse à un litige de casse',
    metier: 'logistique',
    niveau: 'debutant',
    famille: 'corriger',
    duree: 15,
    outils: ['chatgpt', 'claude', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Une épicerie de Koné a reçu une palette de vaisselle avec 14 cartons cassés sur 60 et a écrit un e-mail en colère. Votre collègue a préparé une réponse : elle est sèche, pleine de fautes, et rejette toute responsabilité avant même l’enquête. Vous devez la retravailler avant l’envoi.',
    objectif:
      'Faire corriger et changer le ton d’une réponse sensible, en contrôlant ce que l’IA promet ou affirme à la place de l’entreprise.',
    etapes: [
      'Repérez dans le brouillon les fautes, les phrases blessantes et les affirmations non vérifiées.',
      'Collez l’e-mail du client et le brouillon avec le prompt de départ.',
      'Vérifiez que la nouvelle version ne promet rien et ne rejette rien avant l’enquête.',
      'Remplacez la mention [délai prévu par nos conditions générales] par le délai réel de votre entreprise, vérifié dans le document.',
      'Relisez la liste des changements et gardez les informations utiles du brouillon (pièces à fournir).',
    ],
    prompt:
      'Tu es chargé de clientèle chez un transporteur à Nouméa. Réécris le brouillon de réponse ci-dessous, en corrigeant les fautes et en changeant le ton : reconnaître le désagrément, ne pas rejeter la responsabilité avant l’enquête, ne rien promettre (ni remboursement, ni geste commercial), expliquer les pièces à envoyer (photos, bon de livraison, liste des cartons cassés) et le délai pour le faire, en écrivant [délai prévu par nos conditions générales]. 150 mots au maximum, vouvoiement. Donne ensuite la liste des changements faits.\n\n<email_client>\n[collez l’e-mail du client]\n</email_client>\n\n<brouillon>\n[collez le brouillon]\n</brouillon>',
    materiau: {
      titre: 'E-mail du client et brouillon de réponse',
      texte:
        'E-mail du client :\nBonjour, je viens de recevoir la palette de vaisselle, 14 cartons sur 60 sont cassés !! C’est la deuxième fois cette année. J’ai signé le bon parce que le chauffeur était pressé. Je veux être remboursé intégralement.\nLe gérant de l’épicerie\n\nBrouillon de réponse du collègue :\nBonjour,\nNous avons bien recu votre mail. Malheureusement vous avez signé le bon de livraison sans réserves donc on ne peut rien faire, la casse ne peut pas être de notre fait. Par ailleurs la marchandise était peut etre mal emballé par votre fournisseur. Pour tout litiges il faut envoyer les photos et le bon de livraison sous 48h, aprés c’est trop tard.\nCdt',
    },
    variantes: {
      simple: 'Se limiter à la correction des fautes et à un ton plus courtois.',
      poussee:
        'Rédiger aussi une note interne au chef d’exploitation sur les deux litiges de l’année avec ce client, et proposer une action (formation des chauffeurs aux réserves).',
    },
    astuces: {
      chatgpt:
        'Dans le canevas, demandez des suggestions de modification pour voir chaque correction proposée.',
      copilot:
        'Dans Outlook, lancez « Coaching par Copilot » sur la version finale : il commente le ressenti du lecteur.',
    },
    vigilance:
      'Ne laissez pas l’IA trancher la responsabilité ni citer un délai comme une règle légale : la réponse dépend de vos conditions générales et de l’enquête. Retirez le nom du client avant de coller un vrai e-mail.',
    formateur: {
      resultat:
        'Une réponse courtoise et sans faute, qui reconnaît le problème, liste les pièces à fournir, renvoie au délai des conditions générales et ne promet ni ne refuse rien avant l’enquête.',
      criteres: [
        'Aucune promesse de remboursement ni rejet de responsabilité.',
        'Les pièces à fournir sont listées clairement.',
        'Le délai vient des conditions générales de l’entreprise, pas de l’IA.',
        'Les fautes du brouillon (reçu, peut-être, emballée, litige, après) sont corrigées.',
      ],
      pieges: [
        'Une version « empathique » qui promet un remboursement intégral.',
        'Garder « vous avez signé sans réserves donc on ne peut rien faire », qui braque le client.',
        'Accepter un délai de réclamation présenté par l’IA comme une règle légale.',
      ],
      competence: 'discernement',
      technique: 'contexte',
    },
    motsCles: ['litige', 'casse', 'réclamation', 'ton', 'livraison'],
  },
  {
    id: 'logi-procedure-reception',
    titre: 'Rédiger la procédure de réception d’un conteneur en check-list',
    metier: 'logistique',
    niveau: 'debutant',
    famille: 'organiser',
    duree: 20,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'L’entrepôt d’un distributeur fictif à Païta reçoit trois à cinq conteneurs par semaine. Chaque cariste fait la réception à sa façon et les écarts de stock se multiplient. Le chef d’entrepôt vous donne ses notes et vous demande une procédure de réception d’une page, en check-list.',
    objectif:
      'Transformer des notes en vrac en procédure ordonnée, sans laisser l’IA ajouter de règles que personne n’a validées.',
    etapes: [
      'Lisez les notes du matériau et repérez celles qui sont dans le désordre.',
      'Collez les notes avec le prompt de départ.',
      'Vérifiez l’ordre : contrôle du plomb avant l’ouverture, photos avant le déchargement, réserves écrites avant la signature.',
      'Lisez les suggestions de l’IA, séparées de la check-list, et décidez avec le chef d’entrepôt celles à garder.',
      'Demandez la check-list en tableau imprimable, avec une ligne de signature pour le cariste.',
    ],
    prompt:
      'Tu es chef d’équipe dans un entrepôt logistique à Païta. À partir des notes ci-dessous, rédige une procédure de réception de conteneur sous forme de check-list d’une page : étapes numérotées dans l’ordre chronologique, une case à cocher par action, et pour chaque étape ce qu’il faut faire en cas de problème. N’ajoute aucune règle absente des notes ; si une étape te semble manquer, liste-la à part, comme suggestion à valider.\n\n<notes>\n[collez les notes ici]\n</notes>',
    materiau: {
      titre: 'Notes du chef d’entrepôt',
      texte:
        '- vérifier n° de conteneur et n° de plomb avec l’avis d’arrivée AVANT d’ouvrir ; plomb cassé ou différent -> on n’ouvre pas, photos + appel au transitaire\n- étiqueter les palettes avec le n° de réception\n- photos du conteneur fermé puis ouvert (avant déchargement)\n- EPI : chaussures, gilet, gants\n- étiquette de fumigation sur le conteneur -> on n’entre pas, on prévient le chef d’entrepôt (procédure à part)\n- décharger au transpalette ou au chariot, jamais plus de 2 palettes gerbées au sol\n- compter les colis par rapport à la liste de colisage, noter les écarts sur le bon\n- colis abîmés : photo, mise de côté en zone litiges, réserves écrites sur le bon AVANT de signer\n- saisie dans le logiciel de stock le jour même\n- conteneur vide : balayer, photo, prévenir le transitaire pour la restitution (sinon frais de stationnement)',
    },
    variantes: {
      simple:
        'Demander uniquement la liste des étapes dans le bon ordre, sans les cas de problème.',
      poussee:
        'Demander aussi une version en pictogrammes pour l’affichage au quai, et un quiz de cinq questions pour former les nouveaux caristes.',
    },
    astuces: {
      claude:
        'Demandez la check-list en fichier Word ou PDF avec la création de fichiers, prête à imprimer.',
      copilot:
        'Transformez la réponse en Copilot Page pour que le chef d’entrepôt la complète avant validation.',
    },
    vigilance:
      'Une procédure ne s’applique qu’après validation par le chef d’entrepôt. Pour les conteneurs fumigés, l’IA ne doit pas inventer de délai d’aération ni de mesure de gaz : c’est une procédure de sécurité à part.',
    formateur: {
      resultat:
        'Une check-list d’une page dans l’ordre : contrôle du numéro et du plomb, photos, EPI et fumigation, déchargement, comptage, réserves avant signature, étiquetage, saisie, restitution du conteneur ; les ajouts de l’IA sont séparés en suggestions.',
      criteres: [
        'Le plomb est vérifié avant l’ouverture et les réserves sont écrites avant la signature.',
        'Chaque étape dit quoi faire en cas de problème.',
        'Aucune règle inventée (délai d’aération, nombre de photos) dans la check-list elle-même.',
      ],
      pieges: [
        'Une check-list qui place la signature du bon avant le comptage des colis.',
        'Un délai d’aération des conteneurs fumigés inventé par l’IA.',
      ],
      competence: 'description',
      technique: 'structurer',
    },
    motsCles: ['réception', 'conteneur', 'entrepôt', 'check-list', 'procédure'],
  },
  {
    id: 'logi-visuel-dates-fin-annee',
    titre: 'Créer un visuel des dates limites de dépôt avant les fêtes',
    metier: 'logistique',
    niveau: 'debutant',
    famille: 'visuels',
    duree: 20,
    outils: ['canva', 'chatgpt'],
    outilConseille: 'canva',
    situation:
      'Une entreprise de transport fictive livre la brousse et les îles Loyauté depuis son dépôt de Ducos. Avant les fêtes, elle veut prévenir ses clients professionnels des dernières dates de dépôt et des jours de fermeture, par une publication Facebook et une affiche au comptoir.',
    objectif:
      'Produire un visuel clair dans Canva à partir d’informations validées, et vérifier qu’aucune date n’a été modifiée en route.',
    etapes: [
      'Demandez trois accroches de 8 mots au maximum, dans Canva ou dans votre outil d’IA, et choisissez-en une.',
      'Dans Canva, ouvrez l’IA Canva et collez le prompt de départ avec les informations du matériau.',
      'Choisissez la proposition la plus lisible, puis vérifiez chaque date, chaque heure et chaque nom de lieu avec l’original.',
      'Raccourcissez les textes trop longs avec l’Écriture magique, puis déclinez le visuel en affiche A4 pour le comptoir.',
      'Faites relire par un collègue avant de publier.',
    ],
    prompt:
      'Crée un visuel carré pour Facebook, pour une entreprise de transport en Nouvelle-Calédonie, qui annonce les dates limites de dépôt avant les fêtes. Utilise exactement les informations ci-dessous, sans en changer aucune. Style clair et professionnel, couleurs [couleurs de l’entreprise], une icône de camion et une icône de bateau, texte lisible sur un téléphone. Mets en avant les deux dates limites.\n\n<informations>\n[collez les informations ici]\n</informations>',
    materiau: {
      titre: 'Informations validées par la direction',
      texte:
        'Accroche proposée : « Anticipez vos envois de fin d’année »\n- Dernier dépôt pour Lifou, Maré et Ouvéa : jeudi 17 décembre, 12 h\n- Dernier dépôt pour la brousse (Bourail, Koné, Poindimié…) : vendredi 18 décembre, 16 h\n- Dépôt de Ducos fermé le vendredi 25 décembre et le vendredi 1er janvier\n- Reprise normale des enlèvements : lundi 4 janvier\n- Renseignements : [numéro du service clients]',
    },
    variantes: {
      simple: 'Partir d’un modèle Canva existant et ne remplacer que les textes.',
      poussee:
        'Décliner le visuel en story et en affiche A4, puis préparer avec l’IA le texte de la publication (trois lignes) et une version courte pour un SMS aux clients.',
    },
    astuces: {
      canva:
        'Le Redimensionnement magique (offre Pro, payante) transforme le visuel carré en affiche A4 ; en gratuit, créez un nouveau design et copiez-y les éléments.',
      chatgpt:
        'La création d’images écrit souvent mal les dates et les noms propres : réservez-la à une illustration sans texte, et posez le texte dans Canva.',
    },
    vigilance:
      'Une erreur de date sur un visuel public coûte cher : comparez chaque date et chaque heure avec l’original, et faites valider avant de publier.',
    formateur: {
      resultat:
        'Un visuel carré lisible sur téléphone et une affiche A4 avec les dates exactes : 17 décembre à 12 h pour les îles, 18 décembre à 16 h pour la brousse, fermetures des 25 décembre et 1er janvier, reprise le 4 janvier.',
      criteres: [
        'Toutes les dates, heures et noms de lieux sont identiques aux informations validées.',
        'Les deux dates limites sont les éléments les plus visibles.',
        'Le texte reste lisible sur un téléphone.',
      ],
      pieges: [
        'Une date « corrigée » par l’IA (jeudi 18 décembre) qui ne correspond plus au jour de la semaine.',
        'Un visuel surchargé où les dates se perdent dans la décoration.',
      ],
      competence: 'discernement',
      technique: 'format',
    },
    motsCles: ['visuel', 'Canva', 'fêtes', 'dates limites', 'îles Loyauté'],
  },
  {
    id: 'logi-suivi-arrivages',
    titre: 'Analyser le suivi des arrivages et définir une alerte',
    metier: 'logistique',
    niveau: 'intermediaire',
    famille: 'analyser',
    duree: 30,
    outils: ['chatgpt', 'claude', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Vous suivez les arrivages de conteneurs d’un importateur fictif de produits alimentaires à Nouméa. La direction veut savoir d’où viennent les frais de stationnement du trimestre, quelles lignes maritimes sont les moins fiables, et souhaite une règle d’alerte simple.',
    objectif:
      'Faire recalculer et analyser un tableau en plusieurs demandes, repérer une erreur et distinguer deux causes que les chiffres mélangent.',
    etapes: [
      'Collez la règle et le tableau du matériau avec le prompt de départ.',
      'Vérifiez que l’IA a bien recalculé chaque ligne et repéré la ligne dont le montant est faux.',
      'Vérifiez à la main le retard moyen d’une ligne maritime.',
      'Demandez si les frais viennent surtout du retard des navires ou du délai d’enlèvement, avec les chiffres à l’appui.',
      'Faites préciser la règle d’alerte jusqu’à ce qu’elle soit applicable telle quelle (qui reçoit l’alerte, à quel moment).',
    ],
    prompt:
      'Tu es analyste logistique chez un importateur à Nouméa. Voici la règle de frais de stationnement et le suivi des arrivages du trimestre (CSV, séparateur point-virgule). 1. Recalcule les frais de chaque conteneur avec la règle et signale toute ligne où le montant du tableau ne correspond pas. 2. Calcule le retard moyen par ligne maritime et les frais totaux par ligne, avec les montants corrigés. 3. Explique d’où viennent surtout les frais : du retard des navires ou du délai d’enlèvement ? 4. Propose une règle d’alerte simple pour les éviter. Montre tes calculs.\n\n<regle>\n[collez la règle ici]\n</regle>\n\n<donnees>\n[collez le tableau ici]\n</donnees>',
    materiau: {
      titre: 'Règle de frais et suivi des arrivages, juillet à septembre (fictifs)',
      texte:
        'Règle (fictive) : 5 jours de franchise après l’arrivée réelle, puis 8 000 XPF par jour et par conteneur.\n\nConteneur;Origine;Ligne;Arrivée prévue;Arrivée réelle;Retard (jours);Jours au port avant enlèvement;Frais de stationnement (XPF)\nMSKU 100231;Sydney;Ligne A;02/07;02/07;0;3;0\nMSKU 100245;Brisbane;Ligne A;09/07;11/07;2;4;0\nCMAU 554012;Shanghai;Ligne B;12/07;19/07;7;6;8000\nCMAU 554078;Ningbo;Ligne B;20/07;30/07;10;9;32000\nTGHU 870021;Auckland;Ligne C;22/07;22/07;0;2;0\nMSKU 100302;Sydney;Ligne A;06/08;07/08;1;5;0\nCMAU 554133;Shanghai;Ligne B;10/08;17/08;7;8;24000\nTGHU 870055;Auckland;Ligne C;19/08;20/08;1;7;16000\nCMAU 554190;Bangkok;Ligne B;25/08;03/09;9;4;0\nMSKU 100377;Brisbane;Ligne A;03/09;03/09;0;11;48000\nTGHU 870102;Auckland;Ligne C;10/09;12/09;2;3;0\nCMAU 554251;Shanghai;Ligne B;15/09;27/09;12;6;16000',
    },
    variantes: {
      simple: 'Demander uniquement le retard moyen par ligne maritime et un graphique.',
      poussee:
        'Faire générer trois mois de données supplémentaires, puis demander un tableau de bord mensuel (fichier Excel) avec les alertes, à mettre à jour chaque semaine.',
    },
    astuces: {
      chatgpt:
        'Déposez le tableau en CSV : l’analyse de données recalcule chaque ligne ; demandez le tableau corrigé à télécharger.',
      gemini:
        'Dans Google Sheets, « Demander à Gemini » peut proposer la formule de calcul des frais pour toute la colonne.',
      copilot:
        'Dans Excel, demandez à Copilot une mise en forme qui colore les conteneurs restés au port plus de 4 jours.',
    },
    vigilance:
      'Les franchises et les tarifs dépendent de vos contrats et du terminal : utilisez les vôtres, pas ceux que l’IA suppose. Retirez les noms des clients finaux avant de coller de vraies données.',
    formateur: {
      resultat:
        'Une analyse qui corrige CMAU 554251 (8 000 XPF et non 16 000), soit 136 000 XPF de frais réels au lieu de 144 000, montre que la ligne B est la plus en retard (9 jours en moyenne) mais que les frais viennent surtout du délai d’enlèvement, comme MSKU 100377, arrivé à l’heure et resté 11 jours au port.',
      criteres: [
        'L’erreur de la dernière ligne est repérée et corrigée.',
        'Les retards moyens par ligne sont justes (A : 0,75 jour, B : 9 jours, C : 1 jour).',
        'L’analyse distingue le retard du navire et le délai d’enlèvement.',
        'La règle d’alerte est concrète (par exemple : alerte au transitaire et au magasinier dès le 4e jour au port sans enlèvement).',
      ],
      pieges: [
        'Reprendre les totaux du tableau sans les recalculer.',
        'Conclure que seule la ligne B coûte de l’argent.',
        'Une règle d’alerte vague (« surveiller les conteneurs »).',
      ],
      competence: 'discernement',
      technique: 'decomposer',
    },
    motsCles: ['arrivages', 'conteneurs', 'frais de stationnement', 'CSV', 'alerte'],
  },
  {
    id: 'logi-planning-chauffeurs',
    titre: 'Construire le planning des chauffeurs d’une semaine',
    metier: 'logistique',
    niveau: 'intermediaire',
    famille: 'organiser',
    duree: 30,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Une entreprise fictive de transport de personnes assure des navettes entre Païta, Dumbéa et Nouméa, et des transferts vers l’aéroport de La Tontouta. Le responsable d’exploitation doit bâtir le planning de la semaine pour six chauffeurs, avec des permis, des disponibilités et des règles internes différentes.',
    objectif:
      'Faire construire un planning sous contraintes, le contrôler soi-même et obliger l’IA à reconnaître ce qui est impossible plutôt que de le masquer.',
    etapes: [
      'Retirez du matériau les informations personnelles inutiles (le motif d’une indisponibilité ne regarde pas l’IA), puis collez-le avec le prompt de départ.',
      'Contrôlez vous-même le planning sur trois points : les permis, l’amplitude de chaque chauffeur et le mercredi.',
      'Si l’IA a « réussi » à tout couvrir, cherchez la contrainte violée et signalez-la-lui.',
      'Demandez deux solutions pour le service non couvert, avec leurs inconvénients.',
      'Demandez le planning final en tableau imprimable, avec la liste des points à valider par le responsable.',
    ],
    prompt:
      'Tu es responsable d’exploitation dans une entreprise de transport de personnes à Nouméa. Construis le planning du lundi au vendredi des six chauffeurs ci-dessous, en respectant toutes les contraintes : permis, disponibilités, amplitude, repos, nombre de jours. Présente un tableau (jours en colonnes, services en lignes, prénom du chauffeur dans chaque case). Vérifie ensuite chaque contrainte une par une. Si un service ne peut pas être couvert, dis-le clairement au lieu de forcer une solution.\n\n<chauffeurs_et_services>\n[collez les informations ici]\n</chauffeurs_et_services>',
    materiau: {
      titre: 'Chauffeurs, services et règles internes (fictifs)',
      texte:
        'Chauffeurs :\n- Sione : permis D, disponible du lundi au vendredi\n- Marie-Claire : permis D, pas de service avant 7 h (doit déposer son enfant à l’école)\n- Kevin : permis B uniquement\n- Joseph : permis D, en congé mercredi\n- Lana : permis D, disponible toute la semaine\n- Eddy : permis B, disponible uniquement à partir de 12 h\n\nServices à couvrir chaque jour, du lundi au vendredi :\n- Navette 1 aller, Païta–Nouméa : 5 h 30 – 9 h 30 (car de 50 places, permis D)\n- Navette 2 aller, Dumbéa–Nouméa : 6 h – 9 h (car de 50 places, permis D)\n- Transferts aéroport du matin : 10 h – 14 h (minibus, permis B ou D)\n- Navette 1 retour : 15 h 30 – 19 h (car, permis D)\n- Navette 2 retour : 16 h – 19 h (car, permis D)\n- Transferts aéroport du soir : 18 h – 23 h (minibus, permis B ou D)\n\nRègles internes : 10 heures d’amplitude au maximum par jour et par chauffeur ; 11 heures de repos entre deux journées ; chacun travaille au moins 4 jours dans la semaine.',
    },
    variantes: {
      simple: 'Planifier une seule journée (le lundi) et vérifier les contraintes.',
      poussee:
        'Ajouter un samedi avec service réduit et une rotation équitable des débuts à 5 h 30, puis faire calculer les heures de chacun sur la semaine.',
    },
    astuces: {
      claude:
        'Demandez le planning dans un artefact : chaque correction met à jour le même tableau.',
      gemini:
        'Exportez le planning validé dans Google Sheets pour le partager avec les chauffeurs.',
    },
    vigilance:
      'Les règles de l’exercice sont fictives : dans la réalité, vérifiez les temps de conduite et de repos applicables avec votre responsable. Ne donnez pas à l’IA les motifs d’absence ni d’informations de santé : « pas de service avant 7 h » suffit.',
    formateur: {
      resultat:
        'Un planning qui couvre les quatre services en car le lundi, le mardi, le jeudi et le vendredi avec Sione, Joseph, Lana et Marie-Claire, confie les transferts à Kevin (10 h – 14 h) et à Eddy (18 h – 23 h), et signale que le mercredi un service en car reste sans chauffeur à cause du congé de Joseph.',
      criteres: [
        'Aucun chauffeur en permis B n’est affecté à un car.',
        'Aucune journée ne dépasse 10 heures d’amplitude : pas d’aller le matin et de retour le soir pour le même chauffeur.',
        'Le manque du mercredi est signalé avec des solutions, pas masqué.',
        'Le motif personnel de Marie-Claire a été retiré avant d’envoyer le prompt.',
      ],
      pieges: [
        'Un planning « complet » où un chauffeur fait la navette du matin et celle du soir (13 heures d’amplitude).',
        'Kevin affecté à un car parce que l’IA a oublié son permis.',
        'Une rotation où un chauffeur finit à 19 h et reprend à 5 h 30 le lendemain, avec seulement 10 h 30 de repos.',
        'Croire l’IA quand elle affirme avoir vérifié toutes les contraintes.',
      ],
      competence: 'discernement',
      technique: 'critique',
    },
    motsCles: ['planning', 'chauffeurs', 'transport de personnes', 'navette', 'contraintes'],
  },
  {
    id: 'logi-synthese-reclamations-navette',
    titre: 'Synthétiser les réclamations des usagers d’une ligne de navettes',
    metier: 'logistique',
    niveau: 'intermediaire',
    famille: 'synthetiser',
    duree: 30,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Une entreprise fictive de transport de personnes exploite une ligne de navettes entre le Mont-Dore et Nouméa. Le formulaire en ligne a reçu douze messages en septembre. Le responsable qualité veut une synthèse d’une page pour la réunion d’exploitation : thèmes, fréquence, gravité et actions possibles.',
    objectif:
      'Faire regrouper des retours d’usagers par thème, vérifier les comptes et faire passer la gravité avant la fréquence.',
    etapes: [
      'Collez les messages du matériau avec le prompt de départ.',
      'Vérifiez que chaque message est rangé dans un thème, sans double compte ni oubli (douze au total).',
      'Vérifiez la place du message 10 (conduite rapide) : un seul signalement, mais un sujet de sécurité.',
      'Demandez une version de cinq lignes pour le directeur, puis comparez-la avec la synthèse complète : qu’est-ce qui a disparu ?',
      'Préparez une question à poser en réunion pour chaque thème prioritaire.',
    ],
    prompt:
      'Tu es responsable qualité dans une entreprise de transport de personnes en Nouvelle-Calédonie. Voici les messages reçus en septembre sur la ligne Mont-Dore–Nouméa. 1. Regroupe-les par thème dans un tableau : thème, numéros des messages, nombre, citation courte. 2. Classe les thèmes par priorité, en tenant compte de la fréquence mais aussi de la gravité (la sécurité d’abord). 3. Propose pour chaque thème une action concrète, sans inventer de chiffre ni de cause. 4. Signale les remarques positives. Une page au maximum.\n\n<messages>\n[collez les messages ici]\n</messages>',
    materiau: {
      titre: 'Messages reçus en septembre (anonymisés)',
      texte:
        '1. Le bus de 6 h 45 à Boulari est passé avec 10 minutes d’avance, je l’ai raté et je suis arrivée en retard au travail.\n2. Chauffeur très aimable ce matin, merci à lui.\n3. Encore la clim en panne dans le bus de 17 h, on étouffe.\n4. Pas de bus à 7 h 15 mardi, aucune information sur la page Facebook.\n5. Impossible de payer par carte, le terminal ne marchait pas, on m’a demandé l’appoint.\n6. Le bus de 6 h 45 est parti en avance deux fois cette semaine.\n7. Les horaires affichés à l’arrêt de La Coulée ne correspondent pas à ceux du site internet.\n8. Clim en panne, et les vitres ne s’ouvrent pas.\n9. Bus bondé à 7 h 15, des gens sont restés sur le trottoir à Robinson.\n10. Le chauffeur roulait très vite sur la voie express ce soir, j’ai eu peur.\n11. Quand un bus est supprimé, on n’est jamais prévenus. Il faudrait des SMS.\n12. Terminal de paiement encore en panne.',
    },
    variantes: {
      simple: 'Demander seulement les trois thèmes les plus fréquents avec un exemple chacun.',
      poussee:
        'Faire générer 40 messages fictifs sur trois mois, puis demander l’évolution des thèmes d’un mois sur l’autre et un graphique.',
    },
    astuces: {
      copilot:
        'Si les réclamations arrivent par e-mail, « Résumer » dans Outlook condense un long fil ; collez ensuite les résumés dans Copilot Chat pour les regrouper.',
      chatgpt:
        'Demandez le tableau des thèmes, puis téléchargez-le au format Excel pour suivre les actions mois après mois.',
    },
    vigilance:
      'Retirez les noms, téléphones et adresses e-mail des usagers avant de coller de vrais messages. Vérifiez les comptes par thème : l’IA se trompe souvent en additionnant.',
    formateur: {
      resultat:
        'Un tableau d’environ sept thèmes (ponctualité, suppressions et information, climatisation, paiement, horaires affichés, surcharge, conduite) qui couvre les douze messages, place la conduite rapide en priorité malgré un seul signalement et relève le remerciement au chauffeur.',
      criteres: [
        'Les douze messages sont tous classés, sans double compte.',
        'Le message sur la conduite est traité comme prioritaire.',
        'Les actions proposées sont concrètes et n’inventent pas de cause.',
        'La remarque positive est mentionnée.',
      ],
      pieges: [
        'Un classement uniquement par fréquence qui relègue la sécurité en bas du tableau.',
        'Une cause inventée (« les chauffeurs partent en avance pour finir plus tôt »).',
        'Un total par thème faux, non vérifié.',
      ],
      competence: 'discernement',
      technique: 'structurer',
    },
    motsCles: ['réclamations', 'usagers', 'navette', 'synthèse', 'qualité'],
  },
  {
    id: 'logi-checklist-dedouanement',
    titre: 'Préparer une check-list de dédouanement à faire valider',
    metier: 'logistique',
    niveau: 'intermediaire',
    famille: 'organiser',
    duree: 30,
    outils: ['chatgpt', 'claude', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Une jeune entreprise de Dumbéa importe pour la première fois des panneaux solaires de Chine et vous demande quels documents préparer. Votre responsable veut une check-list de dédouanement claire pour ce type de client, rédigée avec l’IA puis validée par le déclarant en douane de l’entreprise.',
    objectif:
      'Construire une check-list en plusieurs échanges en interdisant à l’IA d’affirmer des taux, des délais ou des règles, et en préparant la validation par un spécialiste.',
    etapes: [
      'Collez l’e-mail du client avec le prompt de départ.',
      'Repérez dans la réponse tout taux, délai ou règle présenté comme certain, et demandez à l’IA de le remplacer par « [à vérifier] ».',
      'Demandez une explication simple de l’incoterm FOB pour le client, puis vérifiez-la sur une source officielle.',
      'Demandez ce qui pourrait concerner précisément les panneaux solaires et les onduleurs (normes, autorisations), sous forme de questions au déclarant.',
      'Préparez la version à soumettre au déclarant en douane, avec la liste de ses points de validation.',
    ],
    prompt:
      'Tu es assistant d’un transitaire à Nouméa. Prépare une check-list de dédouanement à l’import pour un client qui reçoit son premier conteneur de Chine. Organise-la en trois parties : avant l’expédition, avant l’arrivée du navire, à l’arrivée. Pour chaque document ou action : à quoi il sert, qui le fournit, et une colonne « à vérifier par notre déclarant ». N’indique aucun taux de droits ou de taxes, aucun délai précis, aucune exigence réglementaire comme certaine : écris « [à vérifier] ». Ajoute à la fin les questions à poser au client.\n\n<email_client>\n[collez l’e-mail ici]\n</email_client>',
    materiau: {
      titre: 'E-mail du client',
      texte:
        'Bonjour,\nNous allons recevoir notre premier conteneur de 20 pieds de panneaux solaires et d’onduleurs depuis Ningbo, le fournisseur dit que c’est en FOB. Je ne sais pas du tout quels papiers il faut ni combien on va payer de taxes. Est-ce que vous pouvez nous dire ce qu’il faut préparer ? Et combien de temps ça prend ?\nMerci,\nLa gérante',
    },
    variantes: {
      simple: 'Demander uniquement la liste des documents à réclamer au fournisseur chinois.',
      poussee:
        'Transformer la check-list validée en modèle réutilisable pour chaque nouveau client importateur, avec un e-mail type d’accompagnement.',
    },
    astuces: {
      claude:
        'Activez la recherche web pour vérifier une notion comme l’incoterm FOB, et ouvrez la source citée.',
      copilot:
        'Transformez la check-list en Copilot Page : le déclarant y note ses corrections directement.',
    },
    vigilance:
      'Les droits, taxes et formalités en Nouvelle-Calédonie sont propres au territoire et changent : l’IA peut les confondre avec ceux de la métropole ou de l’Union européenne. Rien ne part au client sans validation du déclarant en douane.',
    formateur: {
      resultat:
        'Une check-list en trois temps (facture commerciale, liste de colisage, connaissement, fiches techniques, certificat d’origine éventuel, déclaration en douane, paiement des droits et taxes, enlèvement), sans aucun taux ni délai affirmé, avec des questions précises pour le déclarant et pour le client.',
      criteres: [
        'Aucun taux de droits ou de taxes n’est donné comme certain.',
        'Chaque ligne précise qui fournit le document.',
        'Les spécificités du produit sont posées en questions au déclarant, pas en affirmations.',
        'La check-list est présentée comme un projet à valider.',
      ],
      pieges: [
        'Laisser un taux de TGC ou de droits de douane cité de mémoire par l’IA.',
        'Une réponse au client qui promet un délai de dédouanement.',
        'Recopier une liste de documents valable dans l’Union européenne.',
      ],
      competence: 'diligence',
      technique: 'format',
    },
    motsCles: ['dédouanement', 'import', 'check-list', 'incoterm', 'transit'],
  },
  {
    id: 'logi-tournees-grand-noumea',
    titre: 'Optimiser les tournées de livraison dans le Grand Nouméa',
    metier: 'logistique',
    niveau: 'avance',
    famille: 'organiser',
    duree: 45,
    outils: ['chatgpt', 'claude', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Un distributeur fictif de boissons livre chaque matin depuis son dépôt de Ducos. Le jeudi, quatorze clients sont répartis entre Nouméa, Dumbéa, le Mont-Dore et Païta, avec des créneaux horaires et deux camions. Le responsable veut voir si l’IA propose de meilleures tournées que celles faites « à l’habitude ».',
    objectif:
      'Enchaîner répartition, ordonnancement et scénario dégradé, en confrontant les hypothèses de l’IA à la réalité du terrain (temps de trajet, bouchons, accès).',
    etapes: [
      'Collez les informations du matériau avec le prompt de départ.',
      'Vérifiez la somme des palettes de chaque camion, puis chaque créneau, arrêt par arrêt.',
      'Contrôlez trois temps de trajet avec une application de cartographie, en tenant compte des bouchons du matin sur la voie express, et donnez les vrais temps à l’IA.',
      'Demandez une version corrigée, puis un scénario dégradé : le camion 2 part avec 45 minutes de retard.',
      'Comparez avec les tournées habituelles et notez ce que les chauffeurs savent et que l’IA ignore (accès, horaires réels de réception, stationnement).',
      'Demandez une feuille de route imprimable par camion.',
    ],
    prompt:
      'Tu es planificateur de tournées pour un distributeur de boissons à Nouméa. Nous allons procéder par étapes.\nÉtape 1 : répartis les quatorze clients ci-dessous en deux tournées cohérentes géographiquement, en respectant la capacité de chaque camion (somme des palettes).\nÉtape 2 : ordonne les arrêts de chaque tournée pour respecter les créneaux, avec une heure d’arrivée estimée.\nÉtape 3 : liste les hypothèses que tu as faites sur les temps de trajet et les points à vérifier.\nSi une contrainte ne peut pas être tenue, dis-le. Présente chaque tournée en tableau.\n\n<tournees>\n[collez les informations ici]\n</tournees>',
    materiau: {
      titre: 'Clients du jeudi et contraintes (fictifs)',
      texte:
        'Dépôt : Ducos, départ à partir de 6 h, retour au dépôt avant 13 h. Camion 1 : 11 palettes. Camion 2 : 8 palettes.\n\nClient;Commune ou quartier;Palettes;Créneau de livraison\nSnack La Baie;Nouméa, Baie-des-Citrons;1;avant 9 h\nSupérette Magenta;Nouméa, Magenta;2;7 h – 10 h\nRestaurant Le Lagon;Nouméa, Anse-Vata;1;avant 10 h\nHôtel Corail;Nouméa, Anse-Vata;2;6 h 30 – 8 h\nÉpicerie Rivière-Salée;Nouméa, Rivière-Salée;1;8 h – 12 h\nCash Koutio;Dumbéa, Koutio;2;6 h – 9 h\nSupérette Dumbéa-sur-Mer;Dumbéa, Dumbéa-sur-Mer;1;9 h – 12 h\nBar Les Pêcheurs;Mont-Dore, Boulari;1;10 h – 12 h\nSnack Plum;Mont-Dore, Plum;1;après 10 h\nStation Pont-des-Français;Mont-Dore, Pont-des-Français;1;7 h – 11 h\nMagasin Païta Centre;Païta;2;8 h – 11 h\nRoulotte Tontouta;Païta, Tontouta;1;avant 11 h\nRestaurant Ouémo;Nouméa, Ouémo;1;9 h – 11 h\nSupérette Normandie;Nouméa, Normandie;1;7 h – 9 h',
    },
    variantes: {
      simple: 'Faire seulement l’étape 1 : la répartition des clients entre les deux camions.',
      poussee:
        'Ajouter un troisième camion et un client à La Foa, puis comparer les deux organisations en kilomètres et en heures de chauffeur.',
    },
    astuces: {
      chatgpt:
        'Ajoutez les contraintes une par une (vrais temps de trajet, retard, client absent) : chaque version se compare à la précédente.',
      claude:
        'Demandez les feuilles de route en fichier Excel avec la création de fichiers, une feuille par camion.',
      gemini:
        'Faites estimer les temps de trajet, puis vérifiez-les dans une application de cartographie avant de les garder.',
    },
    vigilance:
      'L’IA ne connaît ni la circulation réelle sur la voie express ni les contraintes d’accès des clients : ses horaires sont des estimations. Les chauffeurs gardent la main sur la tournée. Ne collez ni les adresses précises ni les téléphones des clients.',
    formateur: {
      resultat:
        'Deux tournées cohérentes, l’une vers le nord (Koutio, Dumbéa-sur-Mer, Rivière-Salée, Païta, Tontouta), l’autre vers le sud et l’est (Anse-Vata, Baie-des-Citrons, Magenta, Normandie, Ouémo, Mont-Dore), qui respectent la capacité des camions, avec des horaires recalculés après vérification des trajets et un scénario de retard traité.',
      criteres: [
        'Aucun camion ne dépasse sa capacité (18 palettes au total pour 19 places).',
        'Les créneaux serrés (Hôtel Corail avant 8 h, Cash Koutio et Supérette Normandie avant 9 h) sont respectés.',
        'Les temps de trajet ont été contrôlés et corrigés.',
        'Le scénario de retard fait apparaître les clients à prévenir.',
      ],
      pieges: [
        'Accepter 15 minutes de trajet entre Païta et Ducos à l’heure de pointe.',
        'Une tournée qui dépasse la capacité d’un camion sans que l’IA le signale.',
        'Croire que la tournée « optimisée » est meilleure sans demander l’avis des chauffeurs.',
      ],
      competence: 'delegation',
      technique: 'decomposer',
    },
    motsCles: ['tournées', 'livraison', 'Grand Nouméa', 'optimisation', 'créneaux'],
  },
  {
    id: 'logi-cout-revient-import',
    titre: 'Construire un modèle de coût de revient à l’import',
    metier: 'logistique',
    niveau: 'avance',
    famille: 'analyser',
    duree: 45,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Un commerçant fictif de Koné veut importer des vélos électriques d’Australie et vous demande, en tant que transitaire, le coût de revient unitaire rendu magasin. Vous voulez un modèle de calcul réutilisable, dans lequel le taux de change et les droits et taxes sont des paramètres à remplir après vérification.',
    objectif:
      'Faire bâtir un modèle de calcul par étapes, vérifier les formules, tester des scénarios et ne jamais laisser l’IA fixer un taux réglementaire.',
    etapes: [
      'Donnez les données du matériau avec le prompt de départ : demandez d’abord la structure du calcul, sans chiffres.',
      'Faites calculer avec un taux de change fictif de 1 AUD = 80 XPF, sans droits ni taxes, et vérifiez le total à la main.',
      'Demandez un fichier tableur où le taux de change et chaque taux de droits ou de taxes sont des cellules à remplir, clairement signalées.',
      'Testez trois scénarios de change (76, 80 et 84 XPF pour 1 AUD) et demandez l’effet sur le coût par vélo.',
      'Faites vérifier par le déclarant en douane la base de calcul et les taux applicables, puis complétez le modèle.',
      'Rédigez le message au client : estimation, hypothèses, ce qui reste à confirmer.',
    ],
    prompt:
      'Tu es transitaire à Nouméa. Je veux un modèle de calcul du coût de revient unitaire, rendu magasin à Koné, pour une importation depuis l’Australie. Nous allons travailler par étapes.\nÉtape 1 : à partir des données ci-dessous, propose la structure du calcul : la liste des postes de coût, la formule de chacun et les paramètres à vérifier. N’indique aucun taux de droits de douane ou de taxes : laisse-les en paramètres « [à vérifier] », et formule sous forme de questions pour notre déclarant la base sur laquelle ils pourraient s’appliquer.\n\n<commande>\n[collez les données ici]\n</commande>',
    materiau: {
      titre: 'Données de la commande (fictives)',
      texte:
        '- 40 vélos électriques, prix d’achat 1 150 AUD pièce, incoterm FOB Brisbane\n- Taux de change : [taux du jour à vérifier] XPF pour 1 AUD\n- Fret maritime Brisbane–Nouméa (conteneur de 20 pieds) : 420 000 XPF\n- Assurance transport : 0,5 % de la valeur de la marchandise augmentée du fret\n- Frais de port et de manutention à Nouméa : 85 000 XPF\n- Honoraires de dédouanement : 35 000 XPF\n- Droits et taxes à l’import : [taux et base à vérifier auprès du déclarant en douane]\n- Transport Nouméa–Koné : 95 000 XPF\n- Frais bancaires du virement international : 6 500 XPF',
    },
    variantes: {
      simple:
        'Faire seulement le calcul hors droits et taxes avec le taux de change fictif, et vérifier le total.',
      poussee:
        'Créer une compétence ou un Projet « chiffrage import » qui applique ce modèle à chaque demande et liste les paramètres à faire vérifier.',
    },
    astuces: {
      claude:
        'Demandez le modèle en fichier Excel avec la création de fichiers, puis vérifiez que les cellules contiennent des formules et non des valeurs recopiées.',
      chatgpt:
        'L’analyse de données peut produire le tableau des trois scénarios et un graphique de sensibilité au taux de change.',
      copilot:
        'Dans Excel, demandez à Copilot d’expliquer chaque formule du modèle avant de vous en servir.',
    },
    vigilance:
      'Ne laissez jamais un taux de droits ou de taxes « deviné » par l’IA dans un chiffrage envoyé à un client : les règles calédoniennes sont propres au territoire et évoluent. Présentez toujours le résultat comme une estimation, avec ses hypothèses.',
    formateur: {
      resultat:
        'Un modèle tableur où le change et les taxes sont des paramètres ; avec 1 AUD = 80 XPF et sans droits ni taxes, le coût atteint 4 342 000 XPF, soit 108 550 XPF par vélo, et le message au client liste ce qui reste à confirmer.',
      criteres: [
        'Le total hors droits et taxes est juste : 4 342 000 XPF, dont 20 500 XPF d’assurance.',
        'Aucun taux de droits ou de taxes n’est inscrit sans vérification.',
        'Les scénarios de change montrent l’écart du coût par vélo.',
        'Le message au client présente une estimation avec ses hypothèses.',
      ],
      pieges: [
        'Un taux de TGC ou de droits « par défaut » glissé par l’IA dans le modèle.',
        'Une assurance calculée sur la seule valeur des vélos au lieu de la valeur augmentée du fret.',
        'Des cellules qui contiennent des chiffres recopiés au lieu de formules : le modèle ne se met pas à jour.',
      ],
      competence: 'diligence',
      technique: 'decomposer',
    },
    motsCles: ['coût de revient', 'import', 'chiffrage', 'taux de change', 'tableur'],
  },
  {
    id: 'logi-veille-fret-maritime',
    titre: 'Programmer une veille hebdomadaire sur le fret maritime',
    metier: 'logistique',
    niveau: 'avance',
    famille: 'veiller',
    duree: 45,
    outils: ['chatgpt', 'gemini', 'claude'],
    outilConseille: 'chatgpt',
    situation:
      'Les tarifs et les délais du fret maritime vers Nouméa bougent sans cesse : congestion des ports de transbordement, surcharges, changements de rotation. La direction commerciale d’un transitaire fictif veut une note de veille chaque lundi pour ajuster les cotations et prévenir les clients importateurs.',
    objectif:
      'Construire une recherche sourcée au format stable, vérifier ses sources, puis la transformer en tâche planifiée relue avant diffusion.',
    etapes: [
      'Choisissez avec la direction commerciale les ports et les compagnies à surveiller, et complétez le prompt de départ.',
      'Lancez la recherche approfondie et ouvrez chaque source : vérifiez la date et que le chiffre cité figure bien dans la page.',
      'Écartez les informations sans source fiable ou trop anciennes, et indiquez dans le prompt les sources à privilégier.',
      'Fixez le format (tableau, puis trois points à surveiller) pour comparer les semaines entre elles.',
      'Programmez la veille chaque lundi matin et désignez la personne qui la relit avant diffusion aux commerciaux.',
    ],
    prompt:
      'Tu es chargé de veille dans une entreprise de transit à Nouméa. Recherche les informations publiées ces sept derniers jours sur : 1. les surcharges et évolutions de tarifs annoncées par les compagnies maritimes qui desservent la Nouvelle-Calédonie ; 2. la congestion ou les perturbations dans [ports à surveiller, par exemple Brisbane, Sydney, Auckland] ; 3. les changements de rotation ou d’escale à Nouméa. Pour chaque information : date, source avec lien, résumé en deux lignes, conséquence possible pour nos clients (à vérifier). Ne donne aucun chiffre sans source. Si rien de nouveau, écris-le. Termine par trois points à surveiller la semaine suivante.',
    variantes: {
      simple: 'Faire une seule recherche sur un port et vérifier trois sources.',
      poussee:
        'Verser chaque note dans un carnet Gemini Notebook pour pouvoir interroger trois mois de veille (« quelles surcharges ont été annoncées depuis juillet ? »).',
    },
    astuces: {
      chatgpt:
        'La recherche approfondie (limitée en gratuit) rend un rapport sourcé ; les tâches planifiées, payantes, relancent la veille chaque lundi.',
      gemini:
        'Lancez Deep Research pour la première note, puis « Programmer des actions » (selon l’offre) pour la relancer.',
      claude:
        'Activez la recherche web et demandez la source de chaque chiffre ; les tâches planifiées sont payantes.',
    },
    vigilance:
      'Les chiffres de fret circulent beaucoup sans source fiable : ne transmettez à un client qu’une information vérifiée sur sa source d’origine (compagnie, port, presse spécialisée). Les données de vos clients n’ont rien à faire dans une recherche web.',
    formateur: {
      resultat:
        'Une note hebdomadaire au format fixe, où chaque information est datée et sourcée, avec ses conséquences possibles pour les clients et trois points à surveiller, programmée et relue avant diffusion.',
      criteres: [
        'Chaque chiffre a une source ouverte et datée.',
        'Le format reste le même d’une semaine à l’autre.',
        'La tâche est programmée et un relecteur est désigné.',
      ],
      pieges: [
        'Transmettre une surcharge chiffrée trouvée sur un forum ou un site non officiel.',
        'Une information vieille de plusieurs mois présentée comme nouvelle.',
        'Une note trop longue que personne ne lit.',
      ],
      competence: 'diligence',
      technique: 'sources',
    },
    motsCles: ['veille', 'fret maritime', 'tâche planifiée', 'surcharges', 'sources'],
  },
  {
    id: 'logi-assistant-cotation',
    titre: 'Créer un assistant pour les demandes de cotation',
    metier: 'logistique',
    niveau: 'avance',
    famille: 'automatiser',
    duree: 60,
    outils: ['chatgpt', 'claude', 'gemini', 'copilot'],
    outilConseille: 'chatgpt',
    situation:
      'Le service commercial d’un transitaire fictif reçoit chaque jour des demandes de cotation incomplètes : pas de poids, pas d’incoterm, pas de dimensions. Vous voulez un assistant qui analyse chaque demande, liste les informations manquantes, prépare la réponse au client et, si possible, le tableau de cotation à partir de la grille tarifaire interne.',
    objectif:
      'Créer un assistant avec des instructions permanentes et un document de référence, le tester sur des demandes pièges et l’améliorer avant de le confier à l’équipe.',
    etapes: [
      'Préparez une grille tarifaire fictive de quelques lignes (origine, mode, prix au mètre cube ou au conteneur), sans aucune donnée client, ou demandez à l’IA d’en générer une.',
      'Créez un Projet, un GPT, un Gem ou un agent avec les instructions du prompt de départ et la grille en document de référence.',
      'Testez les trois demandes du matériau et notez les erreurs : manques oubliés, prix inventés, délai promis.',
      'Corrigez les instructions, par exemple en ajoutant un exemple de bonne réponse, et refaites le test.',
      'Ajoutez deux demandes tirées de votre expérience, anonymisées, et vérifiez le comportement de l’assistant.',
      'Rédigez la règle d’usage pour l’équipe : qui l’utilise, ce qui est toujours relu, ce qu’on ne colle jamais.',
    ],
    prompt:
      'Tu es l’assistant cotation de [nom de l’entreprise], transitaire à Nouméa. Pour chaque demande de cotation :\n1. Résume la demande en une ligne.\n2. Liste les informations manquantes pour coter (origine, destination, nature et poids, dimensions, incoterm, date souhaitée, marchandise dangereuse ou non, assurance).\n3. Prépare un e-mail de réponse courtois qui demande ces informations, en vouvoiement, 120 mots au maximum.\n4. Si la demande est complète, prépare le tableau de cotation à partir de la grille tarifaire jointe uniquement, en indiquant la ligne utilisée. Ne donne jamais de prix, de délai ou de taux de droits qui ne figure pas dans la grille : écris « à chiffrer par un commercial ».\n5. Signale les points sensibles (urgence, marchandise réglementée, véhicule).\nUn commercial relit toujours ta proposition avant envoi.',
    materiau: {
      titre: 'Trois demandes de test',
      texte:
        '1. « Bonjour, combien pour faire venir une voiture d’occasion du Japon ? Merci. »\n2. « Nous avons 3 palettes de produits d’entretien à faire venir d’Auckland, 1,2 t au total, 120 × 100 × 150 cm chacune, en FCA, livraison à notre entrepôt de Ducos. Quel est votre tarif et le délai ? »\n3. « Urgent : 200 kg de pièces détachées pour une pelle, de Brisbane à Thio, il faut que ça arrive avant vendredi. »',
    },
    variantes: {
      simple:
        'Enregistrer le prompt dans un document et l’utiliser à la main sur les trois demandes, sans créer d’assistant.',
      poussee:
        'Ajouter des exemples de bonnes réponses dans les instructions et faire évaluer l’assistant par deux commerciaux sur dix demandes réelles anonymisées.',
    },
    astuces: {
      chatgpt:
        'Un Projet suffit pour tester ; pour partager l’assistant avec l’équipe, un GPT est plus pratique, mais sa création est payante.',
      claude:
        'Créez un Projet : la grille va dans les connaissances du projet, les règles dans ses instructions.',
      gemini: 'Créez un Gem avec les instructions et la grille tarifaire en fichier.',
      copilot:
        'Créer un agent (selon la licence) permet à l’équipe commerciale de l’utiliser depuis Microsoft 365.',
    },
    vigilance:
      'Ne chargez pas de grille contenant des tarifs négociés avec des clients nommés, ni de données clients. Aucune cotation ne part sans relecture d’un commercial : l’assistant prépare, il n’engage pas l’entreprise.',
    formateur: {
      resultat:
        'Un assistant qui, pour la demande 1, liste les nombreux manques et signale le véhicule comme point sensible ; pour la demande 2, cote à partir de la grille en citant la ligne utilisée ; pour la demande 3, demande les informations manquantes et refuse de promettre une arrivée avant vendredi.',
      criteres: [
        'Aucun prix ni délai n’est inventé hors de la grille.',
        'Les informations manquantes sont justes pour chaque demande.',
        'Les instructions ont été améliorées après le premier test.',
        'La règle d’usage pour l’équipe est rédigée.',
      ],
      pieges: [
        'Un assistant qui promet « livraison avant vendredi » pour faire plaisir au client.',
        'Un prix plausible inventé pour l’import de la voiture.',
        'Une grille de test qui contient de vrais tarifs clients.',
      ],
      competence: 'delegation',
      technique: 'instructions',
    },
    motsCles: ['cotation', 'assistant', 'devis', 'transit', 'instructions'],
  },
];
