/**
 * Gabarits « Organiser et planifier » : planning sous contraintes, procédure en check-list,
 * ordre du jour, priorités de la semaine, intégration d’un nouveau collègue, rétroplanning
 * d’un événement et guide de formation dans Gemini Notebook.
 * Chaque gabarit est décliné pour chaque métier : {planning}, {procedure}, {reunion.du}…
 * prennent le vocabulaire du métier (voir ../vocabulaire.js).
 */

export const gabarits = [
  {
    id: 'g-planning-sous-contraintes',
    titre: 'Organiser sous contraintes {planning}',
    niveau: 'debutant',
    famille: 'organiser',
    duree: 20,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Vous travaillez dans {structure.un} à Nouméa. Votre responsable vous demande d’organiser {planning}. Les contraintes s’accumulent : temps partiels, formations, congés déjà posés, règles de présence. Vous voulez un premier planning en quelques minutes, puis le vérifier vous-même.',
    objectif:
      'Donner toutes ses contraintes à l’IA de façon structurée, obtenir un planning en tableau, puis vérifier soi-même chaque contrainte au lieu de croire l’IA sur parole.',
    etapes: [
      'Adaptez les contraintes du matériau à votre cas, ou remplacez-les par les vôtres : prénoms des collègues, sans motif d’absence.',
      'Collez-les dans le prompt de départ, entre les balises, et répondez aux questions éventuelles de l’IA.',
      'Vérifiez vous-même chaque contrainte, ligne par ligne, dans le tableau proposé : ne vous fiez pas à la colonne « respectée ».',
      'Signalez à l’IA les erreurs trouvées et demandez une version corrigée.',
      'Ajoutez un imprévu (une absence de dernière minute) et demandez la solution qui change le moins de choses.',
      'Exportez le planning final dans Excel ou Google Sheets.',
    ],
    prompt:
      'Tu es un assistant de planification. Je travaille dans {structure.un} à Nouméa et je dois organiser {planning}.\n\nVoici les contraintes :\n<contraintes>\n[collez vos contraintes ici]\n</contraintes>\n\nPrésente le planning dans un tableau : une ligne par jour (ou par demi-journée), une colonne par personne. Sous le tableau, reprends chaque contrainte avec la mention « respectée » ou « non respectée », et explique les choix que tu as dû faire. S’il te manque une information indispensable, pose-moi la question avant de construire le planning.',
    materiau: {
      titre: 'Contraintes de l’équipe (fictives, à adapter)',
      texte:
        'Période : du lundi 7 au vendredi 18 décembre.\nPersonnes : Léa, Sione, Thi Lan et Marc.\n- Thi Lan travaille à 80 % : jamais le mercredi.\n- Marc est en formation à la CCI le jeudi 10 décembre, toute la journée.\n- Sione ne peut pas commencer avant 8 h (il dépose ses enfants à l’école à Dumbéa).\n- Léa est en congé à partir du lundi 14 décembre.\nHoraires : de 7 h 30 à 16 h 30, fermeture à 11 h 30 le vendredi.\nRègles :\n- au moins deux personnes présentes chaque demi-journée ;\n- pas plus de quatre rendez-vous par personne et par jour ;\n- une permanence téléphonique l’après-midi, tenue à tour de rôle par une seule personne.\nPriorité : équilibrer la charge entre les personnes présentes.',
    },
    variantes: {
      simple: 'Se limiter à trois personnes, trois contraintes et une seule semaine, sans imprévu.',
      poussee:
        'Demander deux plannings différents (l’un équilibre la charge, l’autre traite d’abord les demandes urgentes), puis justifier son choix devant le groupe.',
    },
    astuces: {
      chatgpt:
        'Demandez le planning en fichier Excel téléchargeable, avec une couleur par personne : vous vérifiez plus vite.',
      copilot:
        'Transformez la réponse en Copilot Page (compte professionnel) : vos collègues corrigent le planning directement.',
      gemini: 'Demandez le tableau, puis exportez-le dans Google Sheets pour le partager.',
    },
    vigilance:
      'Le motif d’une absence (santé, situation familiale) n’a rien à faire dans le prompt : « indisponible » suffit. Vérifiez aussi les jours fériés : l’IA peut appliquer le calendrier de métropole.',
    formateur: {
      resultat:
        'Un planning en tableau qui respecte toutes les contraintes, ou qui signale clairement celles qu’il ne peut pas tenir, vérifié ligne par ligne par l’apprenant et ajusté après un imprévu.',
      criteres: [
        'Toutes les contraintes sont dans le prompt, séparées des consignes par des balises.',
        'L’apprenant a vérifié chaque contrainte à la main dans le planning final.',
        'Les contraintes impossibles à tenir ensemble sont signalées, pas cachées.',
        'Le planning absorbe l’imprévu sans être entièrement refait.',
      ],
      pieges: [
        'Croire la colonne « respectée » : l’IA affirme souvent avoir tout respecté alors qu’une personne est placée sur son jour d’absence (Thi Lan un mercredi, Léa la deuxième semaine).',
        'Oublier une contrainte évidente pour soi (fermeture du vendredi, jour férié) : l’IA ne la devine pas.',
        'Coller des informations personnelles inutiles sur les collègues.',
      ],
      competence: 'description',
      technique: 'structurer',
    },
    motsCles: ['planning', 'contraintes', 'tableau', 'équipe', 'Excel'],
  },
  {
    id: 'g-procedure-check-list',
    titre: 'Rédiger en check-list la procédure pour {procedure}',
    niveau: 'debutant',
    famille: 'organiser',
    duree: 15,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Dans {structure.votre}, la procédure pour {procedure} n’est écrite nulle part. Chacun la fait à sa façon, et les nouveaux posent toujours les mêmes questions. Vous décidez de la mettre par écrit, sous forme de check-list à cocher.',
    objectif:
      'Transformer des notes en vrac en check-list claire, sans laisser l’IA ajouter des étapes qui n’existent pas chez vous.',
    etapes: [
      'Prenez cinq minutes pour noter en vrac tout ce que vous faites pour {procedure}, en vous aidant des questions du matériau. Pas besoin de phrases.',
      'Collez vos notes dans le prompt de départ et envoyez-le.',
      'Relisez la check-list : chaque étape vient-elle bien de vos notes ? Rayez celles que l’IA a ajoutées sans le signaler.',
      'Regardez la partie « Points à valider » : gardez ce qui manque vraiment chez vous, écartez le reste.',
      'Demandez une version d’une page, imprimable, avec une case à cocher devant chaque étape.',
      'Faites tester la check-list par un collègue : peut-il suivre la procédure sans vous poser de question ?',
    ],
    prompt:
      'Tu es [ton rôle, par exemple : responsable qualité] dans {structure.un} à Nouméa. Voici mes notes en vrac sur la procédure pour {procedure}.\n\n<notes>\n[collez vos notes ici]\n</notes>\n\nTransforme-les en check-list numérotée, à cocher, regroupée en trois temps : avant, pendant, après. Pour chaque étape, indique qui la fait et le document ou l’outil utilisé. Phrases courtes, qui commencent par un verbe à l’infinitif.\n\nN’ajoute aucune étape absente de mes notes. Si tu penses qu’il en manque, liste-les à part, sous le titre « Points à valider ».',
    materiau: {
      titre: 'Questions pour noter la procédure en vrac',
      texte:
        '- Qu’est-ce qui déclenche la procédure : un appel, un e-mail, une date ?\n- Quelle est la première chose que vous faites ? Et la dernière ?\n- Qui intervient, et à quel moment ?\n- Quels documents, modèles ou logiciels utilisez-vous ?\n- Qu’est-ce qu’on oublie le plus souvent ?\n- Quelles erreurs ont déjà coûté du temps ou de l’argent ?\n- Comment sait-on que c’est terminé ?',
    },
    variantes: {
      simple: 'Se limiter aux dix étapes principales, sans les responsables ni les outils.',
      poussee:
        'Demander en plus un logigramme en texte (étapes et décisions « oui / non ») et une version pour un nouvel arrivant, qui explique le « pourquoi » de chaque étape.',
    },
    astuces: {
      claude:
        'Demandez la check-list en document Word : la création de fichiers de Claude le produit directement, prêt à imprimer.',
      copilot:
        'Transformez la check-list en Copilot Page : l’équipe peut la compléter et signaler ce qui manque.',
    },
    vigilance:
      'Une procédure écrite engage : si elle touche à la sécurité, à la réglementation ou à l’argent, faites-la valider par la personne responsable avant de la diffuser.',
    formateur: {
      resultat:
        'Une check-list en trois temps, fidèle aux notes de l’apprenant, qui dit qui fait quoi, avec les ajouts de l’IA isolés dans « Points à valider » et triés.',
      criteres: [
        'Chaque étape de la check-list se retrouve dans les notes de départ.',
        'Les ajouts de l’IA sont repérés et triés, pas acceptés en bloc.',
        'Chaque étape indique qui la fait.',
        'Un collègue peut suivre la check-list sans aide.',
      ],
      pieges: [
        'Accepter des étapes génériques ajoutées par l’IA (« informer la direction », « archiver le dossier ») qui ne correspondent pas à la pratique.',
        'Donner des notes trop pauvres, puis reprocher à l’IA une check-list vague.',
      ],
      competence: 'discernement',
      technique: 'format',
    },
    motsCles: ['procédure', 'check-list', 'qualité', 'nouvel arrivant', 'mode opératoire'],
  },
  {
    id: 'g-ordre-du-jour-reunion',
    titre: 'Préparer l’ordre du jour {reunion.du} et les documents à prévoir',
    niveau: 'debutant',
    famille: 'organiser',
    duree: 15,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'copilot',
    situation:
      'Dans dix jours se tient {reunion.le}, et c’est à vous d’en préparer l’ordre du jour. Pendant le mois, vous avez noté les sujets en vrac, sur un carnet et dans vos e-mails. Il faut en faire un ordre du jour minuté et prévoir les documents à envoyer avant.',
    objectif:
      'Obtenir un ordre du jour structuré et minuté, avec la liste des documents à préparer, en donnant à l’IA la durée, les participants et le but de chaque sujet.',
    etapes: [
      'Complétez le prompt de départ : date, horaires, participants et votre rôle.',
      'Collez les sujets du matériau (ou les vôtres) entre les balises et envoyez.',
      'Additionnez vous-même les durées : le total tient-il dans le temps prévu ? Aucun sujet n’a-t-il disparu ?',
      'Vérifiez que les points « à décider » ne sont pas relégués en fin de réunion, et demandez une correction si besoin.',
      'Demandez l’e-mail d’invitation qui accompagne l’ordre du jour et la liste des documents.',
    ],
    prompt:
      'Tu es [ton rôle] dans {structure.un} à Nouméa. Je prépare {reunion.le} du [date], de [heure] à [heure], avec [participants].\n\nÀ partir des sujets notés en vrac ci-dessous, propose un ordre du jour :\n- sujets regroupés et classés dans un ordre logique ;\n- pour chaque point : durée, responsable, objectif (informer, discuter ou décider) ;\n- durée totale égale à celle de la réunion, avec cinq minutes de marge.\n\nAjoute ensuite la liste des documents à préparer ou à envoyer avant la réunion, avec la personne qui s’en charge et la date limite. Si un sujet te paraît hors de propos, signale-le au lieu de le supprimer.\n\n<sujets>\n[collez vos sujets ici]\n</sujets>',
    materiau: {
      titre: 'Sujets notés en vrac (exemple à adapter)',
      texte:
        '- suites de la dernière réunion : 3 actions décidées, dont une pas faite (mise à jour du classeur partagé)\n- retard sur deux dossiers depuis le départ de Marc\n- organisation pendant les grandes vacances scolaires : qui assure la permanence ?\n- budget fournitures dépassé de 180 000 XPF\n- proposition de Waïa : tester un outil d’IA pour les comptes rendus\n- rappel des consignes avant la saison cyclonique\n- question de Thi Lan sur les horaires du vendredi\n- point rapide sur {indicateur}\n- questions diverses\n- date de la prochaine réunion',
    },
    variantes: {
      simple: 'Demander seulement l’ordre du jour, sans durées ni liste de documents.',
      poussee:
        'Demander deux versions (réunion d’une heure, réunion de trente minutes) et la liste des sujets qui pourraient être traités par e-mail plutôt qu’en réunion.',
    },
    astuces: {
      copilot:
        'Dans Outlook, partez d’un « Brouillon avec Copilot » pour l’invitation, puis collez l’ordre du jour vérifié.',
      gemini:
        'Avec Google Workspace, activez « Prendre des notes pour moi » dans Meet le jour de la réunion : vous aurez une base pour le compte rendu.',
    },
    vigilance:
      'Un sujet sensible (conflit, situation d’un salarié) se note sans nom dans le prompt : « point RH confidentiel » suffit.',
    formateur: {
      resultat:
        'Un ordre du jour minuté qui reprend tous les sujets, avec un responsable et un objectif par point, une durée totale juste, et la liste des documents à préparer avec leur responsable.',
      criteres: [
        'Tous les sujets du matériau figurent dans l’ordre du jour ou sont explicitement reportés.',
        'La somme des durées correspond à la durée de la réunion.',
        'Chaque point a un objectif (informer, discuter, décider) et un responsable.',
        'La liste des documents indique qui les prépare et pour quand.',
      ],
      pieges: [
        'Ne pas recompter les durées : l’IA annonce souvent un total juste avec des durées qui ne s’additionnent pas.',
        'Laisser l’IA attribuer des responsables au hasard, sans les valider avec les intéressés.',
      ],
      competence: 'description',
      technique: 'format',
    },
    motsCles: ['réunion', 'ordre du jour', 'invitation', 'préparation', 'documents'],
  },
  {
    id: 'g-priorites-semaine-chargee',
    titre: 'Prioriser une semaine chargée avec la matrice urgent-important',
    niveau: 'intermediaire',
    famille: 'organiser',
    duree: 30,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Lundi, 7 h 30. Vous travaillez dans {structure.un} à Nouméa, votre liste de tâches déborde et vous êtes en rendez-vous à l’extérieur mardi matin. Vous voulez y voir clair avant d’ouvrir vos e-mails, sans laisser l’IA décider à votre place.',
    objectif:
      'Classer ses tâches avec l’IA en plusieurs échanges, contester son classement quand il ignore votre contexte, et garder la décision finale.',
    etapes: [
      'Copiez la liste du matériau dans le prompt de départ et complétez votre contexte : horaires, attentes de votre responsable.',
      'Répondez aux questions de l’IA : elle doit les poser avant de classer quoi que ce soit.',
      'Lisez le classement dans la matrice : chaque tâche a-t-elle une case, une durée et une justification ? Aucune n’a-t-elle disparu ?',
      'Contestez au moins un classement en donnant votre raison (par exemple : « l’imprimante bloque toute l’équipe, c’est urgent ») et demandez la mise à jour.',
      'Demandez un plan jour par jour dans un tableau, en comparant le temps nécessaire et le temps disponible.',
      'Décidez vous-même ce que vous déléguez, reportez ou abandonnez, et notez-le en une phrase par tâche.',
    ],
    prompt:
      'Tu es un assistant d’organisation. Je travaille dans {structure.un} à Nouméa. Cette semaine, je suis disponible [horaires], sauf mardi matin (rendez-vous à l’extérieur). Ce qui compte le plus pour mon responsable : [à compléter].\n\nAvant de classer quoi que ce soit, pose-moi au plus cinq questions sur les tâches qui te paraissent floues, puis attends mes réponses.\n\nEnsuite, classe les tâches ci-dessous dans une matrice urgent-important (quatre cases), avec pour chacune une durée estimée et une justification d’une ligne. Ne supprime aucune tâche.\n\n<taches>\n[collez la liste ici]\n</taches>',
    materiau: {
      titre: 'Tâches de la semaine (fictives)',
      texte:
        '1. Répondre {client.au} qui vous a écrit vendredi concernant {motifReclamation}.\n2. Finaliser {documentCourant.un} (à rendre mercredi midi).\n3. Préparer l’ordre du jour {reunion.du} de jeudi.\n4. Trier les 63 e-mails non lus de la boîte partagée.\n5. Relancer par e-mail {partenaire.le} : votre premier message est resté sans réponse depuis deux semaines.\n6. Organiser {planning} (à boucler avant vendredi).\n7. Faire votre note de frais du mois (à rendre avant le 10).\n8. Suivre la formation en ligne obligatoire sur la sécurité incendie (45 min, avant la fin du mois).\n9. Appeler le prestataire informatique : l’imprimante bloque depuis vendredi.\n10. Lire les articles mis de côté sur {veille}.\n11. Donner votre avis à un collègue sur son projet {visuel.de}.\n12. Préparer le point mensuel avec votre responsable (vendredi 14 h).\n13. Commander les fournitures : plus de papier à partir de jeudi.\n14. Mettre à jour le classeur partagé de suivi des dossiers.',
    },
    variantes: {
      simple: 'Se contenter du classement dans la matrice, sans plan jour par jour.',
      poussee:
        'Transformer le plan en tableau Excel avec une colonne « fait / reporté », puis demander à l’IA, vendredi, un bilan de la semaine à partir du tableau mis à jour.',
    },
    astuces: {
      claude:
        'Demandez la matrice en artefact : un tableau à quatre cases que vous gardez sous les yeux et que Claude met à jour à chaque échange.',
      copilot:
        'Transformez le plan en Copilot Page (compte professionnel) pour le mettre à jour au fil de la semaine.',
    },
    vigilance:
      'Ne collez que l’intitulé des tâches, jamais le contenu des e-mails ni les noms des personnes concernées. L’IA ne connaît ni les attentes de votre responsable ni l’historique de vos dossiers : la décision reste la vôtre.',
    formateur: {
      resultat:
        'Une matrice où les quatorze tâches ont une case, une durée et une justification, un plan jour par jour qui tient dans le temps disponible, et des décisions de report ou de délégation prises par l’apprenant.',
      criteres: [
        'L’IA a posé ses questions avant de classer, et l’apprenant y a répondu.',
        'Les quatorze tâches figurent dans la matrice : aucune n’a disparu.',
        'L’apprenant a contesté au moins un classement avec une raison tirée de son contexte.',
        'Le plan jour par jour ne dépasse pas le temps disponible, rendez-vous du mardi compris.',
      ],
      pieges: [
        'Accepter un plan qui place une tâche le mardi matin, pendant le rendez-vous.',
        'Laisser l’IA « supprimer » des tâches jugées secondaires sans l’avoir décidé soi-même.',
        'Recopier les durées estimées par l’IA sans les confronter à son expérience.',
      ],
      competence: 'delegation',
      technique: 'iterer',
    },
    motsCles: ['priorités', 'matrice', 'urgent', 'important', 'semaine', 'charge de travail'],
  },
  {
    id: 'g-integration-trente-jours',
    titre: 'Préparer l’intégration {poste.du} sur trente jours',
    niveau: 'intermediaire',
    famille: 'organiser',
    duree: 30,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'copilot',
    situation:
      'Lundi 2 novembre, {poste.un} rejoint {structure.votre}. Lors de la dernière arrivée, rien n’était prêt : pas d’ordinateur, pas d’accès aux logiciels, personne pour accueillir. Votre responsable vous confie un plan d’intégration sur trente jours, à partager avec l’équipe.',
    objectif:
      'Construire en plusieurs échanges un plan d’intégration complet, le compléter avec ce que l’IA ne peut pas savoir, et le partager avec l’équipe.',
    etapes: [
      'Collez le prompt de départ et les informations du matériau, puis répondez aux questions de l’IA.',
      'Vérifiez que le plan tient compte des contraintes : le congé de Waïa du 16 au 20 novembre et la date {reunion.du}.',
      'Si la première semaine est surchargée, demandez de l’alléger : un nouvel arrivant ne retient pas tout en cinq jours.',
      'Demandez un message d’accueil à envoyer la veille de l’arrivée, puis une fiche d’une page pour le tuteur.',
      'Partagez le plan avec l’équipe (Copilot Page, document partagé ou fichier Excel) et demandez à un collègue ce qui manque.',
    ],
    prompt:
      'Tu es responsable de l’intégration dans {structure.un} à Nouméa. Lundi 2 novembre, {poste.un} rejoint l’équipe. Aide-moi à préparer son intégration sur trente jours.\n\nVoici les informations dont je dispose :\n<infos>\n[collez les informations ici]\n</infos>\n\nCommence par me poser les questions dont tu as besoin, et attends mes réponses. Ensuite, propose :\n1. une check-list « avant l’arrivée » : qui fait quoi, pour quand ;\n2. un plan semaine par semaine, dans un tableau : objectifs, activités, personne référente, point de contrôle en fin de semaine ;\n3. les trois signes qui montreront, au bout de trente jours, que l’intégration est réussie.\n\nTiens compte des contraintes indiquées. Pour les formalités administratives d’embauche, ne donne aucune règle : écris seulement « à vérifier avec le service RH ».',
    materiau: {
      titre: 'Informations de départ (fictives)',
      texte:
        'Arrivée : lundi 2 novembre, 7 h 30.\nTuteur : Waïa, huit ans d’ancienneté, disponible surtout l’après-midi.\nResponsable : point hebdomadaire le vendredi à 14 h.\nÀ préparer : poste de travail, adresse e-mail, accès aux logiciels, badge et clés.\nÀ connaître en priorité :\n- la procédure pour {procedure} ;\n- les modèles {documentCourant.de} ;\n- les interlocuteurs habituels : {client.les} et {partenaire.les}.\nFormation obligatoire : sécurité incendie (date à fixer).\nContraintes : Waïa est en congé du 16 au 20 novembre ; {reunion.le} a lieu le jeudi 26 novembre.',
    },
    variantes: {
      simple:
        'Se limiter à la check-list « avant l’arrivée » et au programme de la première semaine.',
      poussee:
        'Ajouter un questionnaire d’étonnement à remplir par le nouvel arrivant au bout de quinze jours, et la trame de l’entretien de fin de premier mois.',
    },
    astuces: {
      copilot:
        'Transformez le plan en Copilot Page (compte professionnel) : l’équipe peut cocher les tâches et compléter le plan.',
      chatgpt:
        'Demandez la check-list « avant l’arrivée » en fichier Excel téléchargeable, avec une colonne « fait ».',
    },
    vigilance:
      'N’indiquez ni le nom, ni le salaire, ni les conditions du contrat de la personne recrutée. Pour les formalités d’embauche (déclarations, visite médicale, période d’essai), l’IA risque d’appliquer des règles de métropole : faites-les vérifier par le service RH.',
    formateur: {
      resultat:
        'Une check-list avant l’arrivée et un plan sur quatre semaines qui respecte le congé du tuteur et la date de la réunion, avec un message d’accueil, une fiche pour le tuteur, et des formalités renvoyées vers le service RH.',
      criteres: [
        'Le plan respecte les deux contraintes du matériau.',
        'Chaque semaine a un objectif et un point de contrôle.',
        'Aucune règle administrative n’est affirmée sans renvoi vers le service RH.',
        'Le plan a été partagé ou relu par un collègue.',
      ],
      pieges: [
        'Prévoir des activités avec le tuteur pendant son congé de la troisième semaine.',
        'Recopier des délais légaux de métropole (période d’essai, déclarations) proposés par l’IA.',
        'Un premier jour surchargé de présentations, sans temps pour pratiquer.',
      ],
      competence: 'description',
      technique: 'contexte',
    },
    motsCles: [
      'intégration',
      'accueil',
      'nouvel arrivant',
      'tutorat',
      'check-list',
      'Copilot Pages',
    ],
  },
  {
    id: 'g-retroplanning-evenement',
    titre: 'Préparer {evenement.le} en rétroplanning',
    niveau: 'avance',
    famille: 'organiser',
    duree: 45,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      '{Evenement.le} aura lieu le vendredi 4 décembre, en début de saison chaude et juste avant les grandes vacances scolaires. Vous avez deux mois pour tout préparer avec une petite équipe. Vous voulez un rétroplanning fiable, qui se recalcule si la date change.',
    objectif:
      'Enchaîner les étapes avec l’IA (liste des tâches, rétroplanning, analyse des risques, fichier de suivi) en validant chacune avant de passer à la suivante.',
    etapes: [
      'Envoyez le prompt de départ avec la note de cadrage : à ce stade, seulement la liste des tâches. Corrigez-la et complétez-la avant d’aller plus loin.',
      'Demandez le rétroplanning dans un tableau, de J-60 à J+7 : tâche, date au plus tard, responsable, dépendance, statut.',
      'Vérifiez à la main les délais du matériau : quinze jours ouvrés pour l’imprimeur, nombre de couverts au traiteur à J-10.',
      'Demandez à l’IA de critiquer son propre rétroplanning : risques (forte pluie, alerte cyclonique, absence d’un membre de l’équipe, retard d’un partenaire) et plan B pour chacun.',
      'Faites produire un fichier Excel ou Google Sheets où chaque date est calculée à partir de la date J, puis changez la date J pour tester le recalcul.',
      'Relisez le fichier : formules justes, week-ends et jours fériés évités. Corrigez ce qui doit l’être.',
    ],
    prompt:
      'Tu es chef de projet événementiel. Je travaille dans {structure.un} à Nouméa et je prépare {evenement.le}. Voici la note de cadrage :\n\n<cadrage>\n[collez la note ici]\n</cadrage>\n\nÉtape 1 seulement : liste toutes les tâches nécessaires, regroupées par lot (communication, logistique, budget, partenaires, sécurité, jour J, bilan). Pour chaque tâche : durée estimée, rôle responsable, tâches dont elle dépend.\n\nNe fais pas encore le rétroplanning. Termine par la liste des informations qui te manquent pour le faire.',
    materiau: {
      titre: 'Note de cadrage (fictive, chiffres à adapter)',
      texte:
        'Date : vendredi 4 décembre, de 8 h à 13 h (installation dès 6 h 30).\nLieu : [à préciser], en partie en extérieur.\nParticipants attendus : environ 150 personnes.\nBudget : 450 000 XPF (location de matériel, impression, collation, communication).\nÉquipe : quatre personnes, dont une à mi-temps ; un stagiaire disponible en novembre seulement.\nPartenaires : un traiteur, un imprimeur, un loueur de barnums et de sonorisation.\nÀ vérifier : autorisations éventuelles auprès de la mairie, assurance, accessibilité du lieu.\nContraintes : l’imprimeur demande quinze jours ouvrés ; le traiteur veut le nombre de couverts à J-10 ; risque de fortes pluies.',
    },
    variantes: {
      simple: 'Se limiter au rétroplanning des quatre dernières semaines, sans fichier.',
      poussee:
        'Ajouter une colonne budget par tâche et un suivi des dépenses, puis demander chaque lundi un point d’étape à partir du fichier mis à jour.',
    },
    astuces: {
      claude:
        'Demandez le fichier Excel avec la création de fichiers : chaque date devient une formule calculée à partir de la cellule « Date J ».',
      chatgpt:
        'L’analyse de données produit le fichier Excel ; ouvrez-le et changez la date J pour vérifier que tout suit.',
      copilot:
        'Avec la licence, Copilot dans Excel peut ajouter la colonne de dates calculées et mettre en couleur les tâches en retard.',
      gemini:
        'Exportez le tableau dans Google Sheets, puis utilisez « Demander à Gemini » (Google Workspace) pour obtenir la formule qui calcule chaque date à partir de J.',
    },
    vigilance:
      'L’IA ne connaît ni les délais réels de vos partenaires ni les démarches exigées par votre commune : appelez-les ou consultez les sites officiels avant de figer le rétroplanning. Budget, autorisations et engagements restent validés par vous ou votre responsable.',
    formateur: {
      resultat:
        'Un rétroplanning de J-60 à J+7 construit en plusieurs étapes validées, des risques assortis d’un plan B, et un fichier dont toutes les dates se recalculent quand on change la date J.',
      criteres: [
        'La liste des tâches a été corrigée et validée avant le rétroplanning.',
        'Les délais de l’imprimeur et du traiteur sont respectés dans le tableau.',
        'Au moins trois risques ont un plan B concret (abri en cas de pluie, report, remplaçant).',
        'Le changement de la date J recalcule toutes les dates du fichier.',
      ],
      pieges: [
        'Tout demander en un seul prompt : le résultat est long, générique et difficile à vérifier.',
        'Ne pas tester les formules : des dates écrites « en dur » ne bougent pas quand la date J change.',
        'Accepter des démarches administratives inventées (formulaire, délai d’autorisation).',
      ],
      competence: 'discernement',
      technique: 'decomposer',
    },
    motsCles: ['rétroplanning', 'événement', 'échéances', 'risques', 'Excel', 'projet'],
  },
  {
    id: 'g-guide-formation-notebook',
    titre: 'Créer avec Gemini Notebook un guide d’étude sur {themeFormation}',
    niveau: 'avance',
    famille: 'organiser',
    duree: 45,
    outils: ['notebook'],
    outilConseille: 'notebook',
    situation:
      'Chaque nouvel arrivant dans {structure.votre} pose les mêmes questions sur {themeFormation}. Les réponses existent, mais elles sont dispersées dans des procédures, des modèles et de vieux e-mails. Vous voulez rassembler ces documents dans un carnet Gemini Notebook et en tirer un guide d’étude et une FAQ fiables.',
    objectif:
      'Construire une base de formation à partir de vos propres documents, vérifier que chaque réponse renvoie à sa source, et repérer ce que les documents ne disent pas.',
    etapes: [
      'Rassemblez quatre à huit documents internes sur le sujet (procédures, modèles, notes, e-mails d’explication), après avoir retiré {donneesSensibles}.',
      'Créez un carnet dans Gemini Notebook et ajoutez ces documents comme sources.',
      'Dans Rapports, générez un guide d’étude, puis une FAQ. Cliquez sur trois citations au hasard pour vérifier qu’elles disent bien ce qu’on leur fait dire.',
      'Dans la discussion, envoyez le prompt de départ pour repérer les questions sans réponse dans vos sources, puis complétez ou mettez à jour les documents.',
      'Générez une carte mentale ou un résumé audio pour offrir un premier tour d’horizon du sujet.',
      'Faites tester le carnet par un collègue : il pose trois vraies questions de débutant et note si les réponses sont justes.',
    ],
    prompt:
      'Tu aides à former un nouveau collègue dans {structure.un} à Nouméa, sur {themeFormation}. En t’appuyant uniquement sur les sources de ce carnet :\n1. liste les dix questions qu’un débutant poserait sur ce sujet ;\n2. pour chacune, indique si les sources y répondent (oui, en partie, non), avec la citation ;\n3. pour les questions sans réponse, dis quel document il faudrait ajouter ou mettre à jour.\n\nN’invente rien : si une information n’est pas dans les sources, écris « absent des sources ».',
    variantes: {
      simple: 'Se limiter à deux ou trois documents et à la FAQ, en vérifiant chaque citation.',
      poussee:
        'Générer aussi des fiches et un quiz, puis en faire le test d’auto-évaluation de la fin de la première semaine du nouvel arrivant.',
    },
    astuces: {
      notebook:
        'Partagez le carnet avec le nouvel arrivant : il pose ses questions dans la discussion, et chaque réponse renvoie au passage exact de vos documents.',
    },
    vigilance:
      'Ne chargez aucun document contenant des données {client.dep} ou de collègues. Vérifiez aussi que les documents sont à jour : le carnet répète fidèlement une procédure périmée.',
    formateur: {
      resultat:
        'Un carnet d’au moins quatre sources nettoyées, un guide d’étude et une FAQ dont les citations ont été vérifiées, et une liste des questions sans réponse avec les documents à ajouter.',
      criteres: [
        'Les documents chargés ne contiennent pas de données personnelles.',
        'Au moins trois citations ont été ouvertes et vérifiées.',
        'Les questions sans réponse sont listées, avec le document à ajouter ou à mettre à jour.',
        'Un collègue a testé le carnet avec de vraies questions.',
      ],
      pieges: [
        'Charger un document périmé : le guide reprend fidèlement une ancienne procédure.',
        'Croire qu’une réponse citée est forcément juste : la citation peut être sortie de son contexte.',
        'Charger des e-mails non nettoyés, avec noms et coordonnées.',
      ],
      competence: 'discernement',
      technique: 'sources',
    },
    motsCles: [
      'Gemini Notebook',
      'NotebookLM',
      'formation interne',
      'guide d’étude',
      'FAQ',
      'intégration',
    ],
  },
];
