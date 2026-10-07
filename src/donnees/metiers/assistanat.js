/**
 * Assistanat et secrétariat : accueil, agenda, courrier, classement, suivi administratif.
 * Toutes les personnes, entreprises, adresses et sommes sont fictives.
 */

export const vocabulaire = {
  structure: { g: 'm', s: 'secrétariat de direction', p: 'secrétariats de direction' },
  client: { g: 'm', s: 'client', p: 'clients' },
  partenaire: { g: 'm', s: 'prestataire', p: 'prestataires' },
  documentCourant: { g: 'm', s: 'courrier administratif', p: 'courriers administratifs' },
  documentLong: { g: 'm', s: 'règlement intérieur', p: 'règlements intérieurs' },
  reunion: { g: 'f', s: 'réunion de direction mensuelle', p: 'réunions de direction mensuelles' },
  offre: {
    g: 'f',
    s: 'location de salles de réunion du centre d’affaires de Ducos',
    p: 'locations de salles de réunion du centre d’affaires de Ducos',
  },
  poste: { g: 'm', s: 'assistant de direction', p: 'assistants de direction' },
  evenement: {
    g: 'm',
    s: 'séminaire annuel de l’entreprise',
    p: 'séminaires annuels de l’entreprise',
  },
  visuel: { g: 'f', s: 'affichette d’information', p: 'affichettes d’information' },
  domaine: 'l’assistanat et le secrétariat',
  motifReclamation: 'une facture reçue en double et un appel resté sans réponse',
  donnees: 'le registre des courriers reçus et envoyés sur les trois derniers mois',
  colonnes:
    'Date;Sens (reçu ou envoyé);Expéditeur ou destinataire;Objet;Service concerné;Délai de traitement (jours)',
  indicateur: 'le délai moyen de traitement des courriers par service',
  veille: 'les démarches administratives en ligne et les nouveautés des outils de bureautique',
  sourcesVeille:
    'les sites des administrations calédoniennes, la presse locale et les annonces officielles de Microsoft et de Google',
  jargon: 'les étapes de traitement d’un dossier et les pièces justificatives demandées',
  procedure: 'l’accueil physique et téléphonique des visiteurs',
  situationTendue: 'un visiteur pressé qui exige de voir le directeur sans rendez-vous',
  donneesSensibles:
    'les noms, coordonnées, agendas et dossiers personnels des salariés, des clients et des dirigeants',
  corpus:
    'les procédures internes, les modèles de courriers et les notes de service de l’entreprise',
  publicCible: 'les entreprises et les travailleurs indépendants du Grand Nouméa',
  etranger: 'un partenaire australien qui prépare une visite à Nouméa',
  themeFormation: 'la gestion de l’agenda, du courrier et du classement au secrétariat',
  tacheRepetitive: 'la confirmation des rendez-vous du lendemain',
  planning: 'l’agenda de la semaine de deux directeurs',
  comparaison: 'deux offres de location de photocopieurs',
};

export const exercices = [
  {
    id: 'assist-trier-boite-reception',
    titre: 'Trier et prioriser une boîte de réception surchargée',
    metier: 'assistanat',
    niveau: 'debutant',
    famille: 'organiser',
    duree: 15,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'copilot',
    situation:
      'Vous êtes assistant ou assistante de direction dans une PME de services à Ducos. De retour d’une semaine de congés, vous trouvez plus de soixante e-mails non lus. Avant la réunion de 9 h avec votre directrice, vous voulez savoir lesquels traiter en premier.',
    objectif:
      'Faire classer des messages par urgence et par action à mener, en donnant à l’IA vos propres critères de priorité.',
    etapes: [
      'Lisez les dix objets d’e-mails du matériau et notez, sans l’IA, les trois qui vous semblent les plus urgents.',
      'Copiez la liste dans votre outil d’IA avec le prompt de départ, en complétant les services de l’entreprise.',
      'Lisez le tableau obtenu : objet, catégorie, action proposée, raison du classement.',
      'Comparez le classement de l’IA avec le vôtre et demandez-lui de justifier chaque écart.',
      'Corrigez le tableau si besoin, puis gardez vos critères de priorité pour la prochaine fois.',
    ],
    prompt:
      'Tu es assistant de direction dans une PME de services à Nouméa. Je reviens de congés et je dois trier ma boîte de réception avant 9 h. Classe les objets d’e-mails ci-dessous selon ces critères :\n- urgent : une échéance aujourd’hui ou demain, ou une demande de la direction ;\n- cette semaine : une demande avec un délai plus long ;\n- à déléguer : une demande qui relève d’un autre service ([précisez les services]) ;\n- à classer : une information sans action.\n\nRends un tableau en quatre colonnes : objet, catégorie, action proposée, raison du classement. Si un objet ne permet pas de trancher, écris « à ouvrir pour décider » au lieu de deviner. Signale tout message qui te paraît suspect.\n\n<objets>\n[collez la liste ici]\n</objets>',
    materiau: {
      titre: 'Objets des e-mails reçus pendant les congés (lundi 12 octobre, 7 h 30)',
      texte:
        '1. URGENT – Signature du contrat de maintenance climatisation avant ce soir (Clim Services NC)\n2. Rappel : éléments de la déclaration CAFAT du trimestre à transmettre au cabinet comptable avant le 15\n3. Lettre d’information de la CCI : programme des ateliers de novembre\n4. Re: Re: Re: Réservation de salle pour le séminaire du 6 novembre – des précisions svp ?\n5. Candidature spontanée – poste d’agent d’accueil\n6. Facture n° 2026-0412 – deuxième relance (Bureau Pacifique Fournitures)\n7. Sylvie (direction) : peux-tu me préparer le dossier du rendez-vous à la banque mardi ?\n8. Photos de la sortie d’équipe à l’îlot Maître\n9. Votre messagerie sera suspendue : confirmez vos identifiants sous 24 h en cliquant ici\n10. Livraison des ramettes de papier décalée à jeudi',
    },
    variantes: {
      simple: 'Classer seulement en deux catégories : à traiter aujourd’hui, et le reste.',
      poussee:
        'Faire proposer, pour chaque e-mail urgent, une réponse de deux lignes, puis une règle de tri automatique à créer dans la messagerie.',
    },
    astuces: {
      copilot:
        'Dans Outlook, « Résumer » condense un long fil comme le n° 4 : vous décidez de sa priorité sans tout relire.',
      claude:
        'Demandez le tableau sous forme d’artefact : vous pourrez le recopier dans votre outil de suivi.',
    },
    vigilance:
      'Ne collez que les objets, pas le contenu des e-mails ni les adresses des expéditeurs. Le message n° 9 ressemble à de l’hameçonnage : on ne clique pas, on le signale au service informatique.',
    formateur: {
      resultat:
        'Un tableau qui place en urgent les n° 1, 7 et 2, signale le n° 9 comme suspect, délègue le n° 5 (ressources humaines) et le n° 6 (comptabilité), demande d’ouvrir le n° 4 et classe les n° 3, 8 et 10.',
      criteres: [
        'Les critères de priorité sont écrits dans le prompt, pas laissés à l’IA.',
        'Le message n° 9 est repéré comme une tentative d’hameçonnage, pas comme une urgence.',
        'L’apprenant a comparé son propre tri avec celui de l’IA et tranché les écarts.',
      ],
      pieges: [
        'Classer le n° 9 en « urgent » parce qu’il annonce un délai de 24 h.',
        'Accepter un classement sans raison donnée, donc impossible à vérifier.',
      ],
      competence: 'delegation',
      technique: 'structurer',
    },
    motsCles: ['e-mails', 'priorités', 'boîte de réception', 'tri', 'hameçonnage'],
  },
  {
    id: 'assist-courrier-administration',
    titre: 'Rédiger un courrier officiel à une administration',
    metier: 'assistanat',
    niveau: 'debutant',
    famille: 'rediger',
    duree: 15,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'copilot',
    situation:
      'Votre entreprise, une société de nettoyage de Païta, a reçu de la Direction des services fiscaux une demande de pièces complémentaires. Votre gérant vous laisse ses notes en vrac et vous demande de préparer la réponse, qu’il signera demain.',
    objectif:
      'Transformer des notes en courrier administratif complet et bien structuré, sans que l’IA invente de référence ni d’engagement.',
    etapes: [
      'Lisez les notes du gérant et repérez les informations indispensables : référence du dossier, pièces jointes, date limite.',
      'Collez les notes dans votre outil d’IA avec le prompt de départ.',
      'Vérifiez la structure : expéditeur, destinataire, lieu et date, objet, référence, corps, formule de politesse, pièces jointes.',
      'Contrôlez une à une les références et les dates par rapport aux notes, et surlignez tout ce que l’IA a ajouté.',
      'Si le courrier dépasse une page, demandez une version plus courte qui garde toutes les informations.',
    ],
    prompt:
      'Tu es assistant administratif dans une PME de Nouvelle-Calédonie. Rédige un courrier officiel de réponse à une administration à partir des notes ci-dessous. Respecte la présentation d’un courrier administratif : bloc expéditeur, bloc destinataire, lieu et date, objet, référence, corps en trois paragraphes, formule de politesse, signature, liste des pièces jointes. Ton sobre et précis, vouvoiement.\n\nN’utilise que les informations des notes. Si une information manque, laisse un [crochet] à compléter au lieu de l’inventer. N’ajoute aucun article de loi.\n\n<notes>\n[collez les notes ici]\n</notes>',
    materiau: {
      titre: 'Notes du gérant',
      texte:
        'courrier DSF reçu le 2/10, réf. dossier 2026-TGC-0873, suivi par M. Ollivaud (bureau ? à retrouver)\nils veulent : factures fournisseurs juillet-août + relevé bancaire août + attestation de régularité\non envoie tout sauf l’attestation → demandée le 5/10, pas encore reçue, on la transmet dès réception\nrépondre avant le 20/10 !!\nsociété : Propre et Net Païta SARL, lot 12, zone artisanale, Païta\nsignature : Jean-Marc Hmaloko, gérant\nrester poli mais rappeler qu’on a déjà envoyé les factures de juin le 14/09',
    },
    variantes: {
      simple: 'Rédiger seulement le corps du courrier, sans la mise en page.',
      poussee:
        'Préparer aussi l’e-mail d’accompagnement et un tableau de suivi des pièces envoyées et attendues.',
    },
    astuces: {
      copilot:
        'Dans Word, Copilot peut rédiger le courrier directement dans votre modèle à en-tête : collez les notes dans sa demande.',
      claude:
        'La création de fichiers produit un document Word prêt à imprimer ; relisez-le entièrement avant la signature.',
    },
    vigilance:
      'Remplacez les vraies références de dossier et le vrai nom de l’agent par des [crochets] avant de coller : vous les remettrez dans le document final.',
    formateur: {
      resultat:
        'Un courrier d’une page qui liste les pièces jointes, annonce l’attestation manquante « dès réception » et rappelle avec courtoisie l’envoi des factures de juin, sans engagement inventé.',
      criteres: [
        'La référence du dossier et les dates sont identiques aux notes.',
        'L’attestation manquante est annoncée sans date de transmission inventée.',
        'Les informations manquantes (bureau de l’agent) restent entre crochets.',
        'Le courrier tient sur une page et suit la présentation demandée.',
      ],
      pieges: [
        'Laisser l’IA ajouter un article de loi ou un délai légal absent des notes.',
        'Garder un ton de reproche dans le rappel des factures de juin.',
      ],
      competence: 'description',
      technique: 'format',
    },
    motsCles: ['courrier', 'administration', 'DSF', 'pièces jointes', 'lettre officielle'],
  },
  {
    id: 'assist-compte-rendu-notes',
    titre: 'Rédiger un compte rendu à partir de notes manuscrites',
    metier: 'assistanat',
    niveau: 'debutant',
    famille: 'synthetiser',
    duree: 20,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Vous avez pris à la main les notes de la réunion de service de ce matin, dans un cabinet d’architectes de Nouméa, et vous les avez retranscrites telles quelles. Le compte rendu doit partir à l’équipe avant midi.',
    objectif:
      'Obtenir un compte rendu clair à partir de notes brutes, en séparant bien les discussions, les décisions et les actions.',
    etapes: [
      'Copiez les notes du matériau dans votre outil d’IA avec le prompt de départ.',
      'Vérifiez que chaque action a un responsable et une échéance tirés des notes, et repérez celles qui manquent.',
      'Contrôlez que les points discutés mais non tranchés ne sont pas présentés comme des décisions.',
      'Vérifiez le sens des abréviations (PC, AO, alu) et corrigez-les si besoin.',
      'Demandez une version de cinq lignes pour la direction.',
    ],
    prompt:
      'Tu es assistant dans un cabinet d’architectes à Nouméa. À partir de mes notes de réunion ci-dessous, rédige un compte rendu en quatre parties :\n1. participants et excusés ;\n2. points abordés, une phrase par point ;\n3. décisions prises ;\n4. tableau des actions (action, responsable, échéance).\n\nN’ajoute aucune information absente des notes : si un responsable ou une échéance manque, écris « à préciser ». Ne transforme pas une discussion en décision. Ton neutre, phrases courtes.\n\n<notes>\n[collez les notes ici]\n</notes>',
    materiau: {
      titre: 'Notes de la réunion de service du mardi 13 octobre',
      texte:
        'présents : Karine, Loïc, Mererava, Thierry (arrivé 9h20), moi\nexcusé : Ahmed (chantier Koné)\n1) école Dumbéa-sur-Mer : retard livraison menuiseries alu, 3 sem. → Loïc appelle le fournisseur cette semaine\n2) PC villa Ouémo : dossier complet à déposer en mairie, Mererava s’en occupe avant le 23/10\n3) AO province Sud (réhabilitation dispensaire) : on y va ? Thierry pour, Karine contre (charge de travail) → on en reparle le 27\n4) congés de fin d’année : chacun m’envoie ses dates avant le 30/10\n5) imprimante du 1er étage en panne depuis lundi !! qui appelle le technicien ?\n6) pot de départ de Loïc le 6/11 au bureau, budget 25 000 XPF validé',
    },
    variantes: {
      simple: 'Ne demander que le tableau des actions.',
      poussee:
        'Faire rédiger en plus l’e-mail d’envoi à l’équipe et la liste des rappels à programmer dans l’agenda pour chaque échéance.',
    },
    astuces: {
      copilot:
        'Pour une réunion sur Teams, avec la licence, comparez votre compte rendu au « Récapitulatif de réunion » de Copilot.',
      gemini:
        'Pour une réunion sur Meet, « Prendre des notes pour moi » range les notes dans Google Docs : relisez-les avec la même rigueur.',
    },
    vigilance:
      'Des notes de réunion contiennent souvent des remarques sur des personnes : retirez ce qui ne doit pas circuler avant de coller.',
    formateur: {
      resultat:
        'Un compte rendu structuré où l’appel d’offres reste une question reportée au 27, l’appel au technicien apparaît « à préciser » et toutes les dates sont exactes.',
      criteres: [
        'Le point 3 n’est pas présenté comme une décision.',
        'Le tableau des actions reprend les échéances des notes sans en inventer.',
        'Les abréviations sont correctement développées (permis de construire, appel d’offres, aluminium).',
      ],
      pieges: [
        'Accepter « décision : répondre à l’appel d’offres » alors que rien n’a été décidé.',
        'Laisser l’IA attribuer l’appel au technicien à quelqu’un au hasard.',
      ],
      competence: 'discernement',
      technique: 'structurer',
    },
    motsCles: ['compte rendu', 'réunion', 'notes', 'actions', 'décisions'],
  },
  {
    id: 'assist-note-service-fautes',
    titre: 'Corriger une note de service avant de l’afficher',
    metier: 'assistanat',
    niveau: 'debutant',
    famille: 'corriger',
    duree: 10,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Votre directeur a tapé rapidement une note sur la fermeture exceptionnelle des bureaux. Elle doit être affichée et envoyée à tout le personnel ce soir. Elle contient des fautes et une phrase qui peut se comprendre de deux façons.',
    objectif:
      'Faire corriger un texte en exigeant que les dates restent exactes et que les ambiguïtés soient signalées plutôt que tranchées par l’IA.',
    etapes: [
      'Copiez la note du matériau dans votre outil d’IA avec le prompt de départ.',
      'Lisez la note corrigée, puis la liste des corrections.',
      'Vérifiez les dates et les horaires un par un avec l’original.',
      'Lisez ce que l’IA dit de la phrase ambiguë et préparez la question à poser au directeur, au lieu de choisir à sa place.',
    ],
    prompt:
      'Corrige l’orthographe, la grammaire et la ponctuation de la note de service ci-dessous. Garde le ton et toutes les dates et heures telles quelles. Si une phrase peut se comprendre de deux façons, ne la réécris pas : signale-la après la note en expliquant les deux sens possibles. Présente la note corrigée, puis la liste des corrections.\n\n<note>\n[collez la note ici]\n</note>',
    materiau: {
      titre: 'Note de service à corriger',
      texte:
        'NOTE DE SERVICE\n\nObjet : fermeture exceptionelle des bureau le vendredi 30 octobre\n\nSuite au déménagement des archives au sous-sol, les bureaux seront fermer au public le vendredi 30 octobre toute la journée. Les salariés doive avoir libéré les armoires du couloir avant le mercredi 28 octobre a 16 h. Une permanence téléphonique sera assurée le matin, de 7 h 30 a 11 h 30, par l’accueil et la comptabilité, qui ne sera pas joignable l’après-midi.\n\nMerci de prévenir vos client et de mettre a jour votre message d’absence.\n\nLa direction',
    },
    variantes: {
      simple: 'Corriger seulement l’orthographe, sans chercher les ambiguïtés.',
      poussee:
        'Demander en plus une version courte pour un SMS au personnel et une version en gros caractères pour l’affichage.',
    },
    astuces: {
      chatgpt:
        'Dans le canevas, demandez des suggestions de modification : vous acceptez chaque correction une par une.',
      copilot:
        'Dans Outlook, « Coaching par Copilot » relit la note avant l’envoi à tout le personnel.',
    },
    vigilance:
      'Une IA peut « corriger » une date ou une heure sans le dire : comparez toujours chiffre par chiffre.',
    formateur: {
      resultat:
        'Une note sans faute (exceptionnelle, bureaux, fermés, doivent, à, clients), avec les mêmes dates et horaires, et la phrase sur la comptabilité signalée comme ambiguë.',
      criteres: [
        'Les dates et les horaires sont inchangés.',
        'L’ambiguïté de « qui ne sera pas joignable » est signalée : la comptabilité ou la permanence ?',
        'La liste des corrections a été relue.',
      ],
      pieges: [
        'Accepter une réécriture qui tranche l’ambiguïté au hasard.',
        'Laisser passer une heure ou un jour de la semaine modifié.',
      ],
      competence: 'discernement',
      technique: 'critique',
    },
    motsCles: ['note de service', 'orthographe', 'ambiguïté', 'relecture'],
  },
  {
    id: 'assist-reunion-six-participants',
    titre: 'Trouver le créneau d’une réunion à six participants',
    metier: 'assistanat',
    niveau: 'intermediaire',
    famille: 'organiser',
    duree: 30,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Votre directrice veut réunir six personnes à Nouméa pour lancer le projet de nouveau site de l’entreprise, avant la fin du mois. Chacun vous a envoyé ses disponibilités, avec ses contraintes : une participante vient de Koné, une autre ne travaille pas le mercredi.',
    objectif:
      'Faire chercher un créneau commun à partir de contraintes précises, vérifier la proposition, puis préparer l’invitation et l’ordre du jour en plusieurs échanges.',
    etapes: [
      'Collez les disponibilités du matériau avec le prompt de départ.',
      'Vérifiez vous-même le créneau recommandé contre chaque contrainte : l’IA se trompe souvent sur les jours de la semaine.',
      'Demandez quelle alternative existerait si Maïna tient à venir à Nouméa, et qui serait alors absent.',
      'Une fois le créneau validé, faites rédiger l’invitation et un ordre du jour de 1 h 30 en quatre points.',
      'Relisez l’invitation : date, heure, lieu, lien de visio, ce que chacun doit préparer.',
    ],
    prompt:
      'Tu es assistant de direction à Nouméa. Je dois organiser une réunion de 1 h 30 avec six participants entre le lundi 19 et le vendredi 30 octobre 2026, sur les horaires de bureau (7 h 30 à 16 h 30). Voici les disponibilités et les contraintes de chacun.\n\n<contraintes>\n[collez les contraintes ici]\n</contraintes>\n\nÉtape 1 : liste, dans un tableau, chaque jour de la période avec son jour de la semaine, puis les participants obligatoires indisponibles ce jour-là.\nÉtape 2 : déduis les créneaux où tous les participants obligatoires sont disponibles et recommande le meilleur, en expliquant pourquoi.\nN’écris pas encore l’invitation : j’attends de valider le créneau.',
    materiau: {
      titre: 'Disponibilités reçues par e-mail',
      texte:
        'Sylvie (directrice, obligatoire) : indisponible le lundi 19, le jeudi 22 et le vendredi 30 ; préfère le matin.\nLaurent (commercial, obligatoire) : en tournée à Bourail les mardis 20 et 27 ; disponible les autres jours.\nTeresa (communication, obligatoire) : ne travaille pas le mercredi ; en formation du lundi 26 au mercredi 28.\nKevin (informatique, obligatoire) : disponible uniquement l’après-midi, à partir de 13 h, et jamais le vendredi.\nMaïna (agence web, obligatoire) : basée à Koné ; à Nouméa seulement les jeudi 22 et vendredi 23 ; en visio possible les autres jours.\nPhilippe (comptabilité, facultatif) : en congés du lundi 19 au vendredi 23.',
    },
    variantes: {
      simple: 'Ne garder que trois participants et une seule semaine.',
      poussee:
        'Ajouter une salle disponible seulement deux après-midi et un participant qui arrive de Lifou par avion, puis faire comparer deux scénarios.',
    },
    astuces: {
      claude:
        'Demandez le tableau des jours en artefact : vous cocherez vous-même chaque contrainte avant de valider.',
      copilot:
        'Transformez le tableau en Copilot Page : les participants peuvent confirmer leur présence au même endroit.',
    },
    vigilance:
      'Ne collez ni agendas complets ni motifs personnels d’absence : seules les disponibilités sont utiles.',
    formateur: {
      resultat:
        'Un seul créneau respecte toutes les contraintes : le jeudi 29 octobre l’après-midi (à partir de 13 h), avec Maïna en visio et Philippe présent. L’invitation n’est rédigée qu’après cette validation.',
      criteres: [
        'L’apprenant a vérifié chaque contrainte sur le créneau retenu, sans croire l’IA sur parole.',
        'Les jours de la semaine correspondent aux dates (le 29 octobre 2026 est un jeudi).',
        'L’alternative en présentiel (le 23, sans Kevin, ou le 22, sans Sylvie) est présentée avec ses absents.',
      ],
      pieges: [
        'Accepter un mercredi alors que Teresa ne travaille pas ce jour-là.',
        'Retenir le matin pour satisfaire Sylvie en oubliant que Kevin n’est libre que l’après-midi.',
        'Décaler les jours de la semaine d’une date, erreur fréquente de l’IA.',
      ],
      competence: 'discernement',
      technique: 'decomposer',
    },
    motsCles: ['réunion', 'agenda', 'créneau', 'disponibilités', 'invitation'],
  },
  {
    id: 'assist-modeles-reponses-accueil',
    titre: 'Créer les modèles de réponses de l’accueil téléphonique et écrit',
    metier: 'assistanat',
    niveau: 'intermediaire',
    famille: 'rediger',
    duree: 30,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'À l’accueil d’un centre d’affaires de Nouméa, vous répondez chaque jour aux mêmes demandes : horaires, location de salles, colis, domiciliation. Chaque collègue répond à sa façon. Vous voulez une procédure d’accueil téléphonique et des modèles de réponses communs.',
    objectif:
      'Construire en plusieurs échanges des modèles de réponses cohérents, à partir d’un exemple de bonne réponse et des informations réelles du centre.',
    etapes: [
      'Envoyez le prompt de départ avec la fiche d’informations et l’exemple de réponse du matériau.',
      'Relisez la procédure d’accueil téléphonique proposée et faites-la tenir sur une demi-page.',
      'Vérifiez que chaque modèle reprend les horaires et les tarifs de la fiche, sans en ajouter.',
      'Lisez les versions téléphoniques à voix haute avec un collègue ; demandez une version plus naturelle pour celles qui sonnent faux.',
      'Rassemblez la procédure et les modèles validés dans un seul document partagé.',
    ],
    prompt:
      'Tu es responsable de l’accueil d’un centre d’affaires à Nouméa. Prépare d’abord une procédure d’accueil téléphonique en cinq étapes : décrocher, identifier la demande, répondre ou transférer, noter un message, conclure.\n\nPuis rédige des modèles de réponses pour chaque demande de la fiche ci-dessous, en deux versions : une phrase à dire au téléphone (40 mots au maximum) et un e-mail court (80 mots au maximum). Reprends le ton de l’exemple. N’utilise que les informations de la fiche ; si une information manque, écris [à compléter].\n\n<fiche>\n[collez la fiche ici]\n</fiche>\n\n<exemple>\n[collez l’exemple de réponse ici]\n</exemple>',
    materiau: {
      titre: 'Fiche d’informations et exemple de réponse (centre d’affaires Le Phare)',
      texte:
        'FICHE D’INFORMATIONS\n- Accueil : du lundi au vendredi, de 7 h 30 à 17 h ; fermé le week-end et les jours fériés.\n- Salles : Lagon (6 personnes) 4 500 XPF l’heure ; Récif (14 personnes) 9 000 XPF l’heure ; réservation au moins 48 h à l’avance.\n- Colis : reçus uniquement pour les entreprises domiciliées ; retrait sur présentation d’une pièce d’identité.\n- Domiciliation : offre sur devis, après rendez-vous avec la responsable commerciale.\n- Parking visiteurs : [à compléter].\n\nEXEMPLE DE RÉPONSE PAR E-MAIL\nBonjour Madame,\nMerci pour votre message. La salle Récif peut accueillir vos 12 participants le jeudi 22 octobre de 8 h à 10 h, pour 18 000 XPF. Je vous la réserve dès votre confirmation par retour d’e-mail.\nBelle journée,\nL’accueil du centre Le Phare',
    },
    variantes: {
      simple: 'Ne rédiger que les phrases à dire au téléphone.',
      poussee:
        'Ajouter des versions en anglais pour les clients de passage et une fiche réflexe pour les appels difficiles (client mécontent, démarchage insistant).',
    },
    astuces: {
      chatgpt:
        'Ouvrez les modèles dans le canevas : vous retouchez une seule réponse sans régénérer les autres.',
      gemini:
        'Dans Gmail, « Aide-moi à écrire » adapte un modèle au cas du jour : partez toujours du modèle validé.',
      claude:
        'Mettez la fiche et les modèles validés dans un Projet : toute l’équipe repartira des mêmes informations.',
    },
    vigilance:
      'Ne laissez pas l’IA compléter le parking ou un tarif manquant : une information inventée donnée à un client engage le centre.',
    formateur: {
      resultat:
        'Une procédure courte et dix modèles (cinq oraux, cinq écrits) fidèles à la fiche, le parking restant « à compléter ».',
      criteres: [
        'Les tarifs et horaires des modèles sont ceux de la fiche.',
        'Les versions orales sont courtes et naturelles ; les versions écrites suivent l’exemple.',
        'Le parking n’est pas inventé.',
      ],
      pieges: [
        'Accepter un tarif à la demi-journée calculé ou inventé par l’IA.',
        'Garder des phrases trop longues pour être dites au téléphone.',
      ],
      competence: 'description',
      technique: 'exemples',
    },
    motsCles: ['accueil', 'téléphone', 'modèles', 'réponses types', 'procédure'],
  },
  {
    id: 'assist-deplacement-lifou',
    titre: 'Préparer le déplacement d’une équipe à Lifou',
    metier: 'assistanat',
    niveau: 'intermediaire',
    famille: 'veiller',
    duree: 30,
    outils: ['claude', 'chatgpt', 'gemini', 'copilot'],
    outilConseille: 'claude',
    situation:
      'Trois salariés de votre entreprise doivent animer une réunion d’information à Wé, sur l’île de Lifou, un jeudi de novembre. Vous préparez le déplacement : transport depuis Nouméa, hébergement, déplacements sur place. Le budget prévu est de 150 000 XPF par personne.',
    objectif:
      'Mener une recherche documentée avec l’IA, vérifier chaque information sur sa source et produire une fiche de déplacement fiable.',
    etapes: [
      'Activez la recherche web de votre outil et envoyez le prompt de départ.',
      'Ouvrez chaque source citée : vérifiez horaires et tarifs sur le site de la compagnie ou du prestataire, pas dans la réponse de l’IA.',
      'Demandez une fiche de déplacement d’une page : programme heure par heure, contacts, coûts estimés, points à confirmer.',
      'Complétez avec ce que l’IA ne peut pas savoir et que vos interlocuteurs à Lifou vous diront : démarche éventuelle auprès des autorités coutumières selon le lieu, moyens de paiement acceptés, horaires de l’hébergement.',
      'Comparez le coût total au budget et signalez les dépassements.',
    ],
    prompt:
      'Tu es assistant de direction dans une entreprise de Nouméa. Je prépare le déplacement de trois salariés à Wé (Lifou) pour une réunion le jeudi [date] de 9 h à 12 h. Ils partent de Nouméa la veille et rentrent le jeudi soir si possible. Budget : 150 000 XPF par personne, tout compris.\n\nCherche sur le web :\n1. les liaisons aériennes ou maritimes possibles et leurs horaires habituels ;\n2. trois hébergements à Wé ou à proximité ;\n3. les solutions de déplacement sur place.\n\nPour chaque information, donne la source (nom du site et lien) et précise si elle risque d’avoir changé. Si tu ne trouves pas une information, dis-le au lieu de l’estimer. Termine par la liste des points à confirmer par téléphone.',
    variantes: {
      simple: 'Se limiter au transport aller-retour et à l’hébergement.',
      poussee:
        'Comparer avec un déplacement à Koné par la route (durée, fatigue, coût) et présenter les deux options à la direction dans un tableau.',
    },
    astuces: {
      claude:
        'Activez la recherche web : Claude cite les pages utilisées, ouvrez-les avant de reprendre un horaire.',
      chatgpt:
        'La recherche approfondie, limitée en gratuit, rend un rapport sourcé utile pour comparer les hébergements.',
      gemini:
        'Lancez Deep Research, puis exportez le rapport dans Google Docs pour y noter vos vérifications.',
    },
    vigilance:
      'Les horaires et les tarifs changent : seule la confirmation de la compagnie ou de l’hébergeur fait foi. Ne donnez pas à l’IA les noms ni les numéros de pièce d’identité des voyageurs.',
    formateur: {
      resultat:
        'Une fiche de déplacement d’une page, avec des sources ouvertes et vérifiées, un coût par personne comparé au budget et une liste de points à confirmer.',
      criteres: [
        'Chaque horaire ou tarif est relié à une source que l’apprenant a ouverte.',
        'Les informations non trouvées sont signalées, pas estimées.',
        'La fiche prévoit de confirmer sur place les usages et démarches locales, sans les faire décrire par l’IA.',
      ],
      pieges: [
        'Recopier un horaire de vol donné par l’IA sans l’avoir vu sur le site de la compagnie.',
        'Retenir un hébergement fermé, trouvé dans une page ancienne.',
        'Laisser l’IA décrire des règles coutumières au lieu de poser la question aux interlocuteurs locaux.',
      ],
      competence: 'discernement',
      technique: 'sources',
    },
    motsCles: ['déplacement', 'Lifou', 'îles Loyauté', 'recherche web', 'sources'],
  },
  {
    id: 'assist-tableau-suivi-contrats',
    titre: 'Repérer les contrats à renouveler dans un tableau de suivi',
    metier: 'assistanat',
    niveau: 'intermediaire',
    famille: 'analyser',
    duree: 30,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'copilot',
    situation:
      'Vous tenez le tableau de suivi des contrats de prestataires d’une PME de Dumbéa : maintenance, nettoyage, assurance, téléphonie… Avant le comité de direction du 2 novembre, la direction veut savoir quels contrats doivent être résiliés ou renégociés d’ici la fin de l’année, et ce qu’ils coûtent.',
    objectif:
      'Faire analyser un tableau par l’IA, vérifier ses calculs et ses dates, puis obtenir une note claire pour la direction.',
    etapes: [
      'Copiez le tableau du matériau, ou enregistrez-le en fichier CSV et joignez-le.',
      'Envoyez le prompt de départ et lisez la liste des contrats à traiter, triée par date limite.',
      'Vérifiez deux dates limites à la main (échéance moins préavis) et un total avec la calculatrice.',
      'Lisez les incohérences signalées et décidez, vous, comment les corriger.',
      'Faites rédiger une note de dix lignes pour le comité, avec les décisions à prendre.',
    ],
    prompt:
      'Tu es assistant de direction dans une PME de Dumbéa. Voici le tableau de suivi de nos contrats (séparateur : point-virgule). Nous sommes le lundi 12 octobre 2026.\n\n<tableau>\n[collez le tableau ici]\n</tableau>\n\n1. Calcule pour chaque contrat la date limite de résiliation (date d’échéance moins le préavis).\n2. Liste les contrats dont cette date limite tombe entre aujourd’hui et le 31 décembre 2026, triés par date.\n3. Liste à part les contrats dont la date limite est déjà passée.\n4. Calcule le coût annuel de tous les contrats, puis celui des contrats de la liste 2.\n5. Signale toute incohérence dans les données, sans la corriger.\nMontre tes calculs.',
    materiau: {
      titre: 'Suivi des contrats (export du 12 octobre 2026)',
      texte:
        'Prestataire;Objet;Montant mensuel (XPF);Date d’échéance;Préavis (mois);Reconduction tacite\nClim Services NC;Maintenance climatisation;38000;31/12/2026;2;oui\nPropre et Net Païta;Nettoyage des bureaux;145000;30/06/2027;3;oui\nAssurances du Pacifique;Multirisque bureaux;52500;31/12/2026;1;oui\nTéléNet Calédonie;Téléphonie et internet;64000;15/01/2027;1;oui\nBureau Pacifique Fournitures;Fournitures de bureau;22000;31/03/2027;1;non\nCopie Plus Nouméa;Location photocopieur;41500;30/11/2026;3;oui\nSécuri-Garde;Télésurveillance;18900;31/12/2026;3;oui\nJardins de Koutio;Entretien des espaces verts;27000;28/02/2027;2;oui\nInfoGest NC;Logiciel de paie;15500;31/12/2026;2;non\nEau Pure Calédonie;Fontaines à eau;9800;31/10/2026;1;oui\nArchiv’Express;Stockage d’archives;12000;31/12/2025;2;oui\nClim Services NC;Maintenance climatisation;38000;31/12/2026;2;oui',
    },
    variantes: {
      simple:
        'Demander seulement la liste des contrats dont l’échéance tombe avant la fin de l’année.',
      poussee:
        'Faire produire un fichier Excel avec une colonne « date limite » calculée par formule et une mise en forme qui colore les échéances à moins de 60 jours.',
    },
    astuces: {
      copilot:
        'Mettez les données sous forme de tableau dans Excel, puis demandez à Copilot d’ajouter la colonne « date limite » : vérifiez la formule proposée.',
      chatgpt:
        'Avec l’analyse de données, joignez le fichier CSV : ChatGPT montre ses calculs, contrôlez un total à la main.',
      gemini:
        'Dans Google Sheets, « Demander à Gemini » peut proposer la formule de la date limite de résiliation.',
    },
    vigilance:
      'Un vrai tableau de contrats contient des montants négociés et des noms de contacts : travaillez sur une copie anonymisée.',
    formateur: {
      resultat:
        'Une liste juste, une liste des dates dépassées, deux incohérences relevées et une note de dix lignes pour le comité.',
      criteres: [
        'À traiter avant le 31 décembre : climatisation (31/10), assurance (30/11), téléphonie (15/12), espaces verts (28/12) ; le logiciel de paie, sans reconduction tacite, est à renouveler avant le 31/12.',
        'Dates limites déjà passées, contrats sans doute reconduits (à vérifier) : photocopieur (30/08), télésurveillance et fontaines (30/09).',
        'Le doublon de la climatisation et l’échéance 2025 des archives sont signalés comme incohérences.',
        'Coût annuel vérifié : 5 354 400 XPF sans le doublon (5 810 400 XPF s’il est compté).',
      ],
      pieges: [
        'Confondre la date d’échéance et la date limite de résiliation.',
        'Compter deux fois le contrat de climatisation.',
        'Laisser l’IA « corriger » l’année 2025 sans le dire.',
      ],
      competence: 'discernement',
      technique: 'decomposer',
    },
    motsCles: ['contrats', 'échéances', 'tableau', 'CSV', 'résiliation', 'suivi'],
  },
  {
    id: 'assist-plan-classement',
    titre: 'Concevoir un plan de classement et une règle de nommage des fichiers',
    metier: 'assistanat',
    niveau: 'avance',
    famille: 'organiser',
    duree: 45,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Le dossier partagé du secrétariat d’une association de Koné est devenu inutilisable : noms de fichiers fantaisistes, doublons, versions multiples. La présidente vous demande un plan de classement simple, une règle de nommage commune et un guide d’une page pour les bénévoles.',
    objectif:
      'Enchaîner plusieurs étapes avec l’IA (analyse, proposition, application, guide) en validant chacune avant de passer à la suivante.',
    etapes: [
      'Envoyez le prompt de départ avec la liste de fichiers du matériau : l’IA ne fait d’abord qu’une analyse.',
      'Demandez ensuite une arborescence de trois niveaux au maximum et une règle de nommage (date AAAA-MM-JJ, type, objet, version).',
      'Faites appliquer la règle aux quinze fichiers dans un tableau : ancien nom, nouveau nom, dossier de destination.',
      'Vérifiez le tableau : aucune date inventée, doublons signalés, fichiers douteux marqués « à ouvrir ».',
      'Demandez un guide d’une page avec trois exemples, puis testez-le en nommant vous-même deux nouveaux fichiers.',
    ],
    prompt:
      'Tu es assistant administratif d’une association basée à Koné. Je veux réorganiser notre dossier partagé. Nous allons travailler par étapes : ne passe à l’étape suivante que lorsque je te le demande.\n\nÉtape 1 : analyse la liste de fichiers ci-dessous. Regroupe-les par type de document, repère les problèmes de nommage et les doublons probables. Ne propose encore aucune solution.\n\n<fichiers>\n[collez la liste ici]\n</fichiers>\n\nContraintes pour la suite : arborescence de trois niveaux au maximum, noms sans accents ni espaces, dates au format AAAA-MM-JJ. Si la date d’un fichier ne figure pas dans son nom, ne l’invente pas : écris « date à vérifier ».',
    materiau: {
      titre: 'Contenu du dossier partagé SECRETARIAT',
      texte:
        'CR reunion bureau 12 mars.docx\nCR_bureau_mars_VF.docx\ncompte rendu AG 2025 version finale (2).docx\nfacture imprimeur.pdf\nFacture_Imprim_Kone_juin.pdf\nadhesions 2026.xlsx\nAdhesions2026_MAJ_Teresa.xlsx\ndemande subvention province nord.docx\nsubvention PN dossier complet DEF.pdf\nphoto fete association.jpg\nstatuts.pdf\nstatuts modifies AG.pdf\ncourrier mairie salle.docx\nScan_0042.pdf\nnouveau document (3).docx',
    },
    variantes: {
      simple: 'S’arrêter à la règle de nommage et l’appliquer à cinq fichiers.',
      poussee:
        'Écrire une compétence (Claude) ou un Gem qui propose le nom et le dossier de tout nouveau fichier selon la règle, puis le tester sur cinq cas.',
    },
    astuces: {
      claude:
        'Demandez le tableau de renommage en fichier Excel grâce à la création de fichiers : il servira de liste de contrôle pendant le rangement.',
      chatgpt:
        'Travaillez dans un Projet : les étapes validées restent disponibles pour les conversations suivantes.',
      copilot:
        'Transformez le guide en Copilot Page pour que les bénévoles le commentent avant de l’adopter.',
    },
    vigilance:
      'Ne transmettez que des noms de fichiers, jamais leur contenu : les listes d’adhérents et les dossiers de subvention contiennent des données personnelles.',
    formateur: {
      resultat:
        'Une arborescence simple (vie associative, finances, adhérents, subventions, communication), une règle claire, un tableau de renommage qui signale les doublons (comptes rendus de mars, adhésions, subvention, statuts) et les fichiers à ouvrir (Scan_0042, nouveau document).',
      criteres: [
        'L’apprenant a validé chaque étape avant de lancer la suivante.',
        'Les fichiers sans date sont marqués « date à vérifier ».',
        'Les doublons sont signalés, pas supprimés d’office.',
        'Le guide tient sur une page et l’apprenant a su l’appliquer à deux nouveaux fichiers.',
      ],
      pieges: [
        'Accepter « 2026-03-12_CR_bureau » alors que l’année du compte rendu n’est pas connue.',
        'Laisser l’IA décider quelle version des statuts est la bonne.',
        'Une arborescence trop profonde, que personne ne suivra.',
      ],
      competence: 'delegation',
      technique: 'decomposer',
    },
    motsCles: ['classement', 'nommage', 'fichiers', 'arborescence', 'dossier partagé'],
  },
  {
    id: 'assist-assistant-courriers',
    titre: 'Créer un assistant de rédaction de courriers au style de la maison',
    metier: 'assistanat',
    niveau: 'avance',
    famille: 'automatiser',
    duree: 60,
    outils: ['claude', 'chatgpt', 'gemini', 'copilot'],
    outilConseille: 'claude',
    situation:
      'Au secrétariat d’une société de transport de Nouméa, vous rédigez chaque semaine les mêmes types de courriers : réponses aux réclamations, attestations, convocations, relances. Chacun a son style, et la direction veut des courriers homogènes. Vous créez un assistant qui prépare les brouillons selon les modèles de la maison.',
    objectif:
      'Rédiger des instructions permanentes, fournir des modèles de référence et tester l’assistant jusqu’à obtenir des brouillons fiables.',
    etapes: [
      'Rassemblez trois courriers types anonymisés et une fiche de style : formules d’appel et de politesse, signature, mentions de l’entreprise.',
      'Créez un Projet (Claude, ChatGPT), un Gem (Gemini) ou un agent (Copilot), ajoutez ces documents et collez les instructions du prompt de départ.',
      'Testez l’assistant avec les trois demandes du matériau.',
      'Notez chaque écart (formule non conforme, information inventée, ton inadapté) et ajoutez une règle ou un exemple pour le corriger.',
      'Refaites les trois tests, puis faites essayer l’assistant par un collègue sur une demande nouvelle.',
    ],
    prompt:
      'Tu es l’assistant de rédaction du secrétariat de [nom de l’entreprise], à Nouméa. Tu prépares des brouillons de courriers qu’une personne du secrétariat relit et signe.\n\nRègles :\n- Suis la fiche de style et le modèle qui correspond au type de courrier demandé (réponse à une réclamation, attestation, convocation, relance).\n- Si une information manque (destinataire, date, référence, montant, signataire), pose-moi d’abord la question. N’invente jamais une date, une référence ou un engagement.\n- Vouvoiement, phrases courtes, une page au maximum.\n- Termine chaque brouillon par la liste des éléments à vérifier avant signature.',
    materiau: {
      titre: 'Demandes de test',
      texte:
        '1. Réponds à M. Wakaine, qui se plaint que le bus scolaire de la ligne 12 est passé en avance trois fois la semaine dernière à Tina. Nous avons rappelé la consigne au chauffeur.\n2. Fais une attestation d’emploi pour Mme Malia Tauvale, conductrice chez nous depuis le 3 mars 2021.\n3. Relance la société Bati-Sud pour la facture n° 2026-118 de 186 500 XPF, échue depuis le 15 septembre.',
    },
    variantes: {
      simple: 'Créer l’assistant pour un seul type de courrier : les relances de factures.',
      poussee:
        'Partager l’assistant avec l’équipe et tenir un tableau des tests à rejouer à chaque modification des instructions.',
    },
    astuces: {
      claude:
        'Déposez les modèles dans le Projet ; pour une méthode maison utilisable dans toutes vos conversations, créez plutôt une compétence.',
      chatgpt:
        'Un Projet suffit pour vous ; un GPT, dont la création est payante, se partage avec toute l’équipe.',
      gemini: 'Créez un Gem et joignez les modèles : il s’y référera à chaque demande.',
      copilot:
        'Selon votre licence, « Créer un agent » permet de proposer l’assistant à tout le secrétariat.',
    },
    vigilance:
      'Les modèles déposés doivent être anonymisés. Une attestation d’emploi engage l’entreprise : elle est vérifiée et signée par une personne habilitée.',
    formateur: {
      resultat:
        'Un assistant qui pose des questions quand il manque des informations (type de contrat, numéro RIDET, signataire), suit les modèles et termine chaque brouillon par une liste de vérifications.',
      criteres: [
        'Les instructions disent quoi faire quand une information manque.',
        'Les trois brouillons suivent la fiche de style.',
        'L’apprenant a modifié les instructions après le premier test et constaté l’effet.',
      ],
      pieges: [
        'Accepter une attestation qui invente le type de contrat, le numéro RIDET ou le signataire.',
        'Une réponse à la réclamation qui promet une sanction ou un geste commercial non décidé.',
      ],
      competence: 'delegation',
      technique: 'instructions',
    },
    motsCles: ['assistant', 'courriers', 'modèles', 'projet', 'gem', 'agent'],
  },
  {
    id: 'assist-carnet-procedures',
    titre: 'Préparer un remplacement avec un carnet de procédures',
    metier: 'assistanat',
    niveau: 'avance',
    famille: 'synthetiser',
    duree: 45,
    outils: ['notebook', 'claude'],
    outilConseille: 'notebook',
    situation:
      'Vous partez trois mois en congé et une intérimaire va vous remplacer au secrétariat d’une clinique vétérinaire de Païta. Vos procédures sont éparpillées dans une dizaine de documents. Vous voulez lui laisser un carnet qu’elle pourra interroger et une synthèse de la semaine type.',
    objectif:
      'Exploiter un corpus de documents avec Gemini Notebook : synthèse, FAQ, questions avec citations, et repérage de ce qui n’est pas documenté.',
    etapes: [
      'Rassemblez 6 à 10 documents internes sans données personnelles : procédures, notes de service, modèles, calendrier des échéances.',
      'Créez un carnet dans Gemini Notebook et ajoutez-les comme sources.',
      'Envoyez le prompt de départ, puis générez une FAQ à partir des sources.',
      'Posez les cinq questions du matériau et ouvrez chaque citation pour vérifier la réponse.',
      'Pour chaque question restée sans réponse, complétez vos documents plutôt que de laisser l’outil deviner.',
      'Partagez le carnet avec la remplaçante et faites-lui poser trois questions de son choix.',
    ],
    prompt:
      'À partir uniquement des sources de ce carnet, rédige une synthèse intitulée « Semaine type du secrétariat » pour une personne qui me remplace pendant trois mois. Organise-la par jour, du lundi au vendredi, puis ajoute une partie « Échéances du mois » et une partie « À qui s’adresser ». Cite la source de chaque tâche. Si une tâche courante d’un secrétariat n’est décrite dans aucune source, signale-la dans une liste « À documenter ».',
    materiau: {
      titre: 'Questions de test à poser au carnet',
      texte:
        '1. Que faire si un client appelle pour une urgence en dehors des heures d’ouverture ?\n2. Quand et à qui transmet-on les éléments de paie du mois ?\n3. Comment commander les vaccins, et auprès de quel fournisseur ?\n4. Qui peut accorder une remise sur une facture ?\n5. Quel est le code de l’alarme du bâtiment ?',
    },
    variantes: {
      simple: 'Charger trois documents et générer seulement la FAQ.',
      poussee:
        'Générer aussi un résumé audio que la remplaçante écoutera avant son premier jour, et des fiches de révision sur les procédures clés.',
    },
    astuces: {
      notebook:
        'Les rapports (synthèse, FAQ, guide d’étude) citent leurs sources : cliquez sur chaque numéro pour relire le passage.',
      claude:
        'Pour comparer, déposez les mêmes documents dans un Projet et posez les cinq questions : notez les écarts entre les deux outils.',
    },
    vigilance:
      'Aucun code d’accès, mot de passe ni donnée de client ou de salarié dans les sources : le carnet sera partagé. Ces informations se transmettent en main propre.',
    formateur: {
      resultat:
        'Un carnet partagé, une synthèse par jour avec citations, une FAQ et une liste « À documenter » qui révèle les trous des procédures. La question 5 reste sans réponse, comme il se doit.',
      criteres: [
        'Chaque point de la synthèse renvoie à une source vérifiée.',
        'Les questions sans réponse dans les sources sont repérées et les documents complétés.',
        'Aucune donnée sensible (codes, coordonnées de clients) ne figure dans les sources.',
      ],
      pieges: [
        'Ajouter un document contenant les mots de passe « pour que ce soit complet ».',
        'Croire une réponse sans ouvrir la citation, alors qu’elle mélange deux procédures.',
      ],
      competence: 'diligence',
      technique: 'sources',
    },
    motsCles: ['procédures', 'remplacement', 'Gemini Notebook', 'FAQ', 'passation'],
  },
  {
    id: 'assist-support-reunion-direction',
    titre: 'Préparer le support de la réunion de direction à partir de trois documents',
    metier: 'assistanat',
    niveau: 'avance',
    famille: 'visuels',
    duree: 45,
    outils: ['copilot', 'canva', 'claude', 'chatgpt'],
    outilConseille: 'canva',
    situation:
      'Chaque mois, vous préparez le support projeté en réunion de direction d’une entreprise de distribution de Ducos. Cette fois, vous partez de trois documents : le bilan des ventes, le point sur les recrutements et les notes de la directrice. Elle veut huit diapositives au maximum, lisibles du fond de la salle.',
    objectif:
      'Enchaîner synthèse, plan et mise en forme : faire produire un support de présentation, puis le rendre lisible et fidèle aux chiffres.',
    etapes: [
      'Collez les trois documents du matériau avec le prompt de départ et lisez le plan proposé.',
      'Validez ou corrigez le plan avant toute mise en forme.',
      'Faites générer le support : Copilot dans PowerPoint (selon la licence), Canva, ou un fichier PowerPoint créé par Claude.',
      'Vérifiez chaque chiffre affiché contre le matériau et corrigez à la main.',
      'Appliquez les couleurs et le logo de l’entreprise, puis contrôlez la lisibilité : gros caractères, un graphique simple plutôt qu’un tableau.',
    ],
    prompt:
      'Tu es assistant de direction. À partir des trois documents ci-dessous, propose le plan d’un support de huit diapositives au maximum pour la réunion de direction du [date]. Pour chaque diapositive : un titre qui énonce le message (par exemple « Septembre dépasse l’objectif »), trois points au maximum, et le visuel conseillé (graphique, chiffre clé, tableau). Reprends les chiffres exactement. Termine par une diapositive « Décisions à prendre ».\n\n<bilan_ventes>\n[collez ici]\n</bilan_ventes>\n\n<recrutements>\n[collez ici]\n</recrutements>\n\n<notes_directrice>\n[collez ici]\n</notes_directrice>',
    materiau: {
      titre: 'Les trois documents',
      texte:
        'BILAN DES VENTES (en millions de XPF)\nJuillet : 48,2 ; août : 44,7 ; septembre : 51,9 ; objectif mensuel : 50.\nMeilleure gamme en septembre : boissons (+12 %) ; en recul : produits d’entretien (-8 %).\nRuptures de stock : 14 références en septembre, dont 9 liées au retard d’un bateau.\n\nPOINT RECRUTEMENTS\n2 postes pourvus : préparateur de commandes, commercial terrain Nord.\n1 poste ouvert depuis 10 semaines : responsable d’entrepôt ; 3 candidatures, aucune retenue.\n\nNOTES DE LA DIRECTRICE\nparler du bateau → stock de sécurité ?\nrecrutement entrepôt : passer par un cabinet ? coût à chiffrer\nféliciter l’équipe commerciale Nord\ndécider du stock de sécurité avant fin octobre',
    },
    variantes: {
      simple: 'Faire seulement le plan et deux diapositives dans Canva.',
      poussee:
        'Créer un modèle de support mensuel dans Canva avec le Kit de marque (Pro) et un prompt type pour le plan, à réutiliser chaque mois.',
    },
    astuces: {
      copilot:
        'Selon la licence, Copilot dans PowerPoint crée une présentation à partir d’un document Word qui contient votre plan validé.',
      canva:
        'Collez le plan validé dans l’IA Canva pour obtenir des propositions de présentation, puis vérifiez chaque chiffre.',
      claude:
        'La création de fichiers produit un PowerPoint à partir du plan : une solution si vous n’avez ni Copilot ni Canva.',
    },
    vigilance:
      'Les chiffres de vente et les informations de recrutement sont confidentiels : utilisez un compte professionnel ou anonymisez les données avant de les coller.',
    formateur: {
      resultat:
        'Un support de six à huit diapositives aux titres-messages clairs, aux chiffres exacts (51,9 millions de XPF en septembre pour un objectif de 50), qui se termine par les décisions sur le stock de sécurité et le recours à un cabinet.',
      criteres: [
        'Le plan a été validé avant la mise en forme.',
        'Tous les chiffres affichés sont identiques au matériau.',
        'Chaque diapositive porte un seul message, lisible de loin.',
        'Les décisions à prendre sont formulées comme des questions claires pour la direction.',
      ],
      pieges: [
        'Un graphique généré avec des valeurs arrondies ou inventées.',
        'Recopier les notes de la directrice telles quelles, avec leurs abréviations.',
      ],
      competence: 'discernement',
      technique: 'decomposer',
    },
    motsCles: ['présentation', 'diapositives', 'réunion de direction', 'Canva', 'PowerPoint'],
  },
];
