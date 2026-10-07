/**
 * Ressources humaines : recrutement, paie, formation, relations sociales.
 * Toutes les personnes, entreprises et sommes sont fictives. Le droit du travail calédonien
 * a ses propres textes : aucun exercice n’affirme de règle, il demande de la vérifier.
 */

export const vocabulaire = {
  structure: {
    g: 'm',
    s: 'service des ressources humaines',
    p: 'services des ressources humaines',
  },
  client: { g: 'm', s: 'salarié', p: 'salariés' },
  partenaire: { g: 'm', s: 'organisme de formation', p: 'organismes de formation' },
  documentCourant: {
    g: 'f',
    s: 'demande de prise en charge de formation',
    p: 'demandes de prise en charge de formation',
  },
  documentLong: { g: 'm', s: 'règlement intérieur', p: 'règlements intérieurs' },
  reunion: {
    g: 'f',
    s: 'réunion mensuelle des délégués du personnel',
    p: 'réunions mensuelles des délégués du personnel',
  },
  offre: {
    g: 'm',
    s: 'programme d’alternance de l’entreprise',
    p: 'programmes d’alternance des entreprises',
  },
  poste: { g: 'm', s: 'gestionnaire de paie', p: 'gestionnaires de paie' },
  evenement: {
    g: 'm',
    s: 'forum de l’alternance et de l’emploi',
    p: 'forums de l’alternance et de l’emploi',
  },
  visuel: { g: 'f', s: 'affiche d’offre d’emploi', p: 'affiches d’offres d’emploi' },
  domaine: 'les ressources humaines',
  motifReclamation: 'des heures supplémentaires oubliées sur le bulletin de paie de septembre',
  donnees: 'le relevé des effectifs, des absences et des départs de l’année, service par service',
  colonnes:
    'Service;Effectif moyen;Jours d’absence maladie;Jours d’accident du travail;Départs dans l’année',
  indicateur: 'le taux d’absentéisme par service',
  veille: 'l’évolution du droit du travail et des accords collectifs en Nouvelle-Calédonie',
  sourcesVeille:
    'le Journal officiel de la Nouvelle-Calédonie, le portail Leginova, les publications de la DTEFP et les informations de la CAFAT',
  jargon: 'le salaire brut, le salaire net et les cotisations sociales du bulletin de paie',
  procedure: 'l’accueil d’un nouveau salarié le jour de son arrivée',
  situationTendue: 'un salarié en colère contre le refus de ses congés pendant les fêtes',
  donneesSensibles:
    'les noms, numéros CAFAT, salaires, arrêts maladie et coordonnées bancaires des salariés',
  corpus: 'le règlement intérieur, les accords d’entreprise et les notes de service en vigueur',
  publicCible: 'les jeunes de 18 à 25 ans qui cherchent une alternance dans le Grand Nouméa',
  etranger: 'un ingénieur australien recruté par l’entreprise, qui s’installe à Nouméa en famille',
  themeFormation: 'les règles de pointage, de congés et d’absence de l’entreprise',
  tacheRepetitive: 'les réponses aux demandes d’attestation de travail',
  planning: 'les visites médicales du travail des salariés pour le trimestre',
  comparaison: 'deux offres d’organismes de formation pour le même stage de sécurité',
};

export const exercices = [
  {
    id: 'rh-fiche-poste-notes',
    titre: 'Rédiger une fiche de poste à partir des notes du manager',
    metier: 'rh',
    niveau: 'debutant',
    famille: 'rediger',
    duree: 15,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Le responsable de l’entrepôt de Ducos d’une entreprise de distribution vous a envoyé ses notes en vrac pour remplacer un magasinier cariste qui part à la retraite. Vous devez en tirer une fiche de poste claire, qui servira ensuite à rédiger l’offre d’emploi.',
    objectif:
      'Transformer des notes désordonnées en document structuré, en imposant la structure attendue et en faisant lister ce qui manque au lieu de l’inventer.',
    etapes: [
      'Copiez les notes du manager dans votre outil d’IA avec le prompt de départ.',
      'Lisez la fiche obtenue : chaque rubrique (missions, compétences, conditions de travail) est-elle remplie à partir des notes ?',
      'Vérifiez que les horaires, le lieu, le salaire et la date de démarrage correspondent exactement aux notes.',
      'Repérez les critères qui n’ont pas leur place dans une fiche de poste (âge, situation personnelle) et vérifiez ce que l’IA en a fait.',
      'Relisez la liste des questions à poser au manager et complétez-la si besoin.',
    ],
    prompt:
      'Tu es chargé de ressources humaines dans une entreprise de distribution à Nouméa. À partir des notes du responsable ci-dessous, rédige une fiche de poste structurée : intitulé, service et rattachement, mission principale, activités (6 à 8 puces), compétences et qualités attendues, conditions de travail (lieu, horaires, rémunération). Reprends uniquement les informations des notes. Ensuite, liste à part les informations manquantes ou ambiguës, sous forme de questions à poser au responsable.\n\n<notes>\n[collez les notes ici]\n</notes>',
    materiau: {
      titre: 'Notes du responsable d’entrepôt',
      texte:
        'Besoin d’un magasinier cariste pour l’entrepôt de Ducos, remplacement de Marcel qui part à la retraite fin novembre.\n- réception des conteneurs (2 à 3 par semaine), contrôle des colis par rapport aux bons de livraison\n- préparation des commandes pour les magasins (Nouméa, Dumbéa, et Koné le jeudi)\n- inventaire tournant\n- formation cariste à jour obligatoire, sinon on la finance ??\n- horaires 6 h 30 – 14 h 30 du lundi au vendredi, samedi matin une semaine sur deux\n- salaire : voir avec la direction, autour de 230 000 brut\n- idéalement un jeune, dynamique, pour tenir le rythme\n- sérieux, ponctuel, qui sait utiliser le logiciel de stock (ou qui apprend vite)\n- port de charges, chaussures de sécurité fournies\n- démarrage idéalement le 15 novembre pour travailler deux semaines avec Marcel',
    },
    variantes: {
      simple: 'Se limiter à la fiche de poste, sans la liste des questions au manager.',
      poussee:
        'Tirer de la fiche validée une offre d’emploi de 150 mots pour un site d’emploi local, puis comparer les deux documents.',
    },
    astuces: {
      claude:
        'Demandez la fiche en fichier Word grâce à la création de fichiers : elle sera prête à mettre en page.',
      copilot:
        'Avec la licence, Copilot dans Word rédige la fiche directement dans le modèle de document de l’entreprise.',
    },
    vigilance:
      'Une fiche de poste ne mentionne ni l’âge, ni la situation de famille, ni l’origine : relisez chaque critère. Le salaire et la date de démarrage restent à valider par la direction.',
    formateur: {
      resultat:
        'Une fiche de poste structurée, fidèle aux notes, sans critère d’âge, accompagnée de questions précises au manager : formation cariste exigée ou financée, salaire exact, rythme du samedi, déplacement ou non à Koné le jeudi.',
      criteres: [
        'Les horaires, le lieu et la date de démarrage sont ceux des notes.',
        'Le souhait d’« un jeune » est supprimé ou signalé comme critère à proscrire, pas reformulé.',
        'Le salaire est présenté comme une fourchette à confirmer, pas comme un montant ferme.',
        'La liste des questions au manager couvre au moins trois points flous.',
      ],
      pieges: [
        'Laisser l’IA reformuler « un jeune » en « profil junior et dynamique » : le critère d’âge reste.',
        'Accepter des avantages inventés (prime, mutuelle, véhicule) absents des notes.',
        'Garder la mention du départ en retraite de Marcel dans la fiche.',
      ],
      competence: 'description',
      technique: 'format',
    },
    motsCles: ['fiche de poste', 'recrutement', 'notes', 'discrimination'],
  },
  {
    id: 'rh-note-changement-horaires',
    titre: 'Corriger une note d’information sur un changement d’horaires',
    metier: 'rh',
    niveau: 'debutant',
    famille: 'corriger',
    duree: 15,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Une boulangerie industrielle de Païta décale les horaires de son équipe de production pour livrer les hôtels plus tard. Le directeur de production a écrit une note à afficher et à envoyer aux salariés. Elle contient des fautes et son ton risque d’inquiéter, voire de braquer l’équipe.',
    objectif:
      'Faire corriger et reformuler une note interne en précisant le public, le ton voulu et ce qui ne doit pas changer.',
    etapes: [
      'Copiez la note du matériau dans votre outil d’IA avec le prompt de départ.',
      'Vérifiez dans le tableau avant / après chaque horaire et la date, en les comparant à l’original.',
      'Relisez la liste des modifications : l’IA a-t-elle ajouté une mesure que la direction n’a pas décidée ?',
      'Demandez à l’IA les cinq questions que les salariés risquent de poser, et vérifiez que la note indique à qui les adresser.',
      'Choisissez la version que vous soumettrez au directeur, avec vos remarques.',
    ],
    prompt:
      'Tu es chargé de ressources humaines dans une entreprise de Païta. Corrige et reformule la note ci-dessous, destinée à l’équipe de production. Objectifs : aucune faute, un ton clair et respectueux, une explication courte de la raison du changement. Ne modifie ni la date ni les horaires. Présente les horaires dans un tableau avant / après. Termine par la personne à contacter : [nom et poste du contact RH]. Donne ensuite la liste des modifications faites.\n\n<note>\n[collez la note ici]\n</note>',
    materiau: {
      titre: 'Note rédigée par le directeur de production',
      texte:
        'NOTE A TOUT LE PERSONNEL DE PRODUCTION\n\nSuite a la demande de nos client hôtels et restaurants qui veulent être livré plus tard, la direction a décider de modifier les horaires de production. A partir du lundi 2 novembre, l’équipe du matin commencera a 4h au lieu de 3h et finira a 12h au lieu de 11h. L’équipe d’après-midi travaillera de 12h a 20h au lieu de 11h a 19h. Les pause restent les même. Ceux qui on un problème de transport doivent le signaler avant le 20 octobre. Ceux qui sont pas content peuvent venir me voir mais la décision est prise.\n\nLe directeur de production',
    },
    variantes: {
      simple: 'Se limiter à la correction de l’orthographe, sans tableau ni reformulation du ton.',
      poussee:
        'Préparer aussi une version très courte pour un message aux salariés et le texte d’une annonce orale de deux minutes en réunion d’équipe.',
    },
    astuces: {
      chatgpt:
        'Ouvrez la note dans le canevas : vous pouvez demander de reprendre seulement le dernier paragraphe, le plus délicat.',
      copilot:
        'Dans Outlook, « Coaching par Copilot » relit le message d’accompagnement et commente le ressenti probable des lecteurs.',
    },
    vigilance:
      'Un changement d’horaires peut imposer des démarches préalables (information des délégués du personnel, accord des salariés selon les cas) : faites vérifier ces points par la direction ou un juriste avant toute diffusion. L’IA ne les connaît pas pour votre entreprise.',
    formateur: {
      resultat:
        'Une note sans faute, au ton respectueux, avec un tableau avant / après exact (matin de 4 h à 12 h au lieu de 3 h à 11 h, après-midi de 12 h à 20 h au lieu de 11 h à 19 h), la date du 2 novembre, l’échéance du 20 octobre et un contact RH.',
      criteres: [
        'Les horaires et les deux dates sont identiques à l’original.',
        'La phrase « la décision est prise » est remplacée par une invitation à poser des questions.',
        'Le tableau avant / après est juste pour les deux équipes.',
        'L’apprenant a relu la liste des modifications.',
      ],
      pieges: [
        'Accepter une note qui ajoute des mesures non décidées (prime, transport organisé, période d’essai des horaires).',
        'Laisser l’IA affirmer que le changement « respecte le Code du travail » : elle n’en sait rien.',
      ],
      competence: 'discernement',
      technique: 'format',
    },
    motsCles: ['note de service', 'horaires', 'communication interne', 'orthographe'],
  },
  {
    id: 'rh-verifier-regles-conges',
    titre: 'Vérifier ce que l’IA affirme sur les congés payés en Nouvelle-Calédonie',
    metier: 'rh',
    niveau: 'debutant',
    famille: 'veiller',
    duree: 20,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Les salariés posent souvent les mêmes questions sur les congés. Avant de préparer une foire aux questions, vous testez ce que l’IA répond, et d’où viennent ses réponses. Le droit du travail de la Nouvelle-Calédonie a ses propres textes, distincts de ceux de la métropole.',
    objectif:
      'Repérer qu’une réponse de l’IA peut s’appuyer sur des règles qui ne s’appliquent pas ici, et exiger des sources officielles vérifiables.',
    etapes: [
      'Posez à l’IA les trois questions du matériau sans préciser le lieu, et notez ses réponses.',
      'Ouvrez une nouvelle conversation et posez les mêmes questions avec le prompt de départ, qui précise la Nouvelle-Calédonie et exige des sources.',
      'Comparez les deux séries : les réponses ont-elles changé ? Les sources citées sont-elles calédoniennes ou métropolitaines ?',
      'Ouvrez chaque source citée et vérifiez qu’elle existe et dit bien ce que l’IA affirme (Code du travail de la Nouvelle-Calédonie, site de la DTEFP, portail Leginova).',
      'Rédigez trois questions de foire aux questions dont les réponses portent la mention « à valider auprès de la DTEFP ou d’un juriste ».',
    ],
    prompt:
      'Je travaille au service des ressources humaines d’une entreprise privée en Nouvelle-Calédonie. Le droit du travail calédonien a ses propres textes, distincts du Code du travail métropolitain. Réponds aux questions ci-dessous en t’appuyant uniquement sur les textes applicables en Nouvelle-Calédonie. Pour chaque réponse, cite la source précise et indique ton niveau de certitude. Si tu ne sais pas, ou si la règle dépend d’une convention collective, dis-le au lieu de deviner.\n\n<questions>\n[collez les questions ici]\n</questions>',
    materiau: {
      titre: 'Questions des salariés',
      texte:
        '1. Combien de jours de congés payés est-ce que j’acquiers par mois travaillé ?\n2. Mon employeur peut-il m’imposer de prendre mes congés pendant la fermeture annuelle de fin d’année ?\n3. Si je n’ai pas pris tous mes congés au 31 mai, est-ce que je les perds ?',
    },
    variantes: {
      simple: 'Travailler sur une seule question et une seule source.',
      poussee:
        'Comparer les réponses de deux outils différents, puis présenter au groupe la source officielle qui tranche.',
    },
    astuces: {
      claude:
        'Activez la recherche web : Claude cite les pages consultées, que vous pouvez ouvrir une à une.',
      copilot:
        'Copilot Chat cite les pages web utilisées : vérifiez qu’elles viennent bien de sites calédoniens officiels.',
      gemini:
        'Avec Deep Research, regardez la liste des sources du rapport : combien sont calédoniennes ?',
    },
    vigilance:
      'L’IA confond souvent le droit métropolitain et le droit calédonien. Aucune réponse de la foire aux questions ne part sans validation par une personne compétente, au vu des textes et de la convention collective applicable.',
    formateur: {
      resultat:
        'Un tableau qui compare les deux séries de réponses, avec pour chacune la source citée et son origine (métropole ou Nouvelle-Calédonie), et trois questions de foire aux questions marquées « à valider ».',
      criteres: [
        'L’apprenant a repéré au moins une réponse fondée sur le Code du travail métropolitain.',
        'Chaque source citée a été ouverte et classée : existe et dit cela, existe mais dit autre chose, introuvable.',
        'Aucune réponse de la foire aux questions n’est présentée comme définitive.',
      ],
      pieges: [
        'Croire une réponse parce qu’elle cite un numéro d’article précis : il peut venir du code métropolitain ou être inventé.',
        'Ne pas se demander si la date du 31 mai, courante en métropole, vaut aussi en Nouvelle-Calédonie.',
      ],
      competence: 'discernement',
      technique: 'sources',
    },
    motsCles: ['congés payés', 'droit du travail', 'sources', 'DTEFP', 'vérification'],
  },
  {
    id: 'rh-plan-integration',
    titre: 'Préparer le programme de la première semaine d’un nouveau salarié',
    metier: 'rh',
    niveau: 'debutant',
    famille: 'organiser',
    duree: 20,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'copilot',
    situation:
      'Une assistante comptable rejoint lundi prochain le service comptable d’une société de transport de Dumbéa. Sa responsable vous a transmis ses contraintes en vrac. Vous préparez le programme de sa première semaine et ce qu’il faut faire avant son arrivée.',
    objectif:
      'Obtenir un planning réaliste en donnant toutes les contraintes, puis vérifier qu’aucune n’a été oubliée.',
    etapes: [
      'Copiez les contraintes du matériau avec le prompt de départ.',
      'Vérifiez le tableau contrainte par contrainte : poste informatique, absence de la responsable, visite du dépôt, réunion du vendredi.',
      'Demandez à l’IA de corriger ce qui ne va pas, en lui citant la contrainte non respectée.',
      'Relisez la check-list des tâches à faire avant l’arrivée (accès, badge, rendez-vous à demander).',
      'Demandez un e-mail d’accueil de 100 mots au maximum, à envoyer à la nouvelle salariée vendredi.',
    ],
    prompt:
      'Tu es chargé de ressources humaines dans une société de transport à Dumbéa. Une assistante comptable arrive lundi. À partir des contraintes ci-dessous, propose le programme de sa première semaine dans un tableau : jour, horaire, activité, interlocuteur. Respecte toutes les contraintes et signale celles qui sont incompatibles. Ajoute une check-list des tâches à faire avant son arrivée. Ne fixe aucun rendez-vous qui dépend d’une personne extérieure : indique « à demander ».\n\n<contraintes>\n[collez les contraintes ici]\n</contraintes>',
    materiau: {
      titre: 'Contraintes transmises par la responsable comptable',
      texte:
        '- Arrivée lundi 8 h, accueil par la RH (papiers, badge, visite des locaux)\n- Poste informatique prêt seulement mardi midi (le service informatique est à Nouméa)\n- Formation au logiciel comptable avec Karine : mardi après-midi et jeudi matin\n- Visite du dépôt de Païta avec le chef d’exploitation : mercredi matin uniquement\n- La responsable comptable est absente jeudi toute la journée\n- Réunion d’équipe tous les vendredis à 9 h\n- Visite médicale d’embauche à prévoir (rendez-vous à demander)\n- Déjeuner d’accueil avec l’équipe : à caler\n- Point de fin de semaine avec la responsable : vendredi après-midi',
    },
    variantes: {
      simple: 'Se limiter au programme des deux premiers jours.',
      poussee:
        'Étendre le programme aux trois premiers mois : objectifs à 30, 60 et 90 jours et points de suivi avec la responsable.',
    },
    astuces: {
      copilot:
        'Transformez le programme en Copilot Page : la responsable comptable pourra le compléter directement.',
      claude:
        'Demandez le programme et la check-list en fichier Excel grâce à la création de fichiers.',
    },
    vigilance:
      'N’indiquez ni le nom complet, ni l’adresse, ni la date de naissance de la nouvelle salariée : le programme n’en a pas besoin.',
    formateur: {
      resultat:
        'Un tableau de cinq jours qui respecte les contraintes (rien sur ordinateur avant mardi midi, visite du dépôt mercredi matin, rien avec la responsable jeudi, point final vendredi après-midi), une check-list avant l’arrivée et un e-mail d’accueil chaleureux.',
      criteres: [
        'Aucune activité sur ordinateur n’est prévue lundi ni mardi matin.',
        'La visite médicale et le déjeuner restent « à demander » ou « à caler ».',
        'La check-list comprend le badge, les accès informatiques et la prise de rendez-vous.',
      ],
      pieges: [
        'Une prise en main du logiciel prévue lundi, alors que le poste n’est prêt que mardi midi.',
        'Un rendez-vous de visite médicale inventé, avec une date et une heure.',
        'Un point avec la responsable placé jeudi, jour de son absence.',
      ],
      competence: 'description',
      technique: 'structurer',
    },
    motsCles: ['intégration', 'accueil', 'planning', 'nouvel arrivant'],
  },
  {
    id: 'rh-simulation-entretien',
    titre: 'Construire une grille d’entretien et s’entraîner avec un candidat simulé',
    metier: 'rh',
    niveau: 'intermediaire',
    famille: 'organiser',
    duree: 30,
    outils: ['chatgpt', 'claude', 'gemini', 'copilot'],
    outilConseille: 'chatgpt',
    situation:
      'Vous recrutez un réceptionniste (H/F) pour un hôtel de l’Anse-Vata. Les entretiens commencent la semaine prochaine, et chaque manager pose ses propres questions : les candidats ne sont pas évalués de la même façon. Vous voulez une grille commune, et vous entraîner à la conduite d’entretien.',
    objectif:
      'Construire une grille d’entretien structurée reliée aux exigences du poste, puis la tester en faisant jouer un candidat à l’IA.',
    etapes: [
      'Donnez à l’IA les exigences du poste (matériau) avec la première partie du prompt et obtenez six questions comportementales notées de 1 à 4.',
      'Retirez ou reformulez toute question sur la vie privée, la santé, la famille, l’âge ou l’origine.',
      'Ouvrez une nouvelle conversation et lancez la simulation avec la seconde partie du prompt : l’IA joue le candidat, vous posez vos questions une à une.',
      'Relancez au moins une réponse vague (« Que s’est-il passé ensuite ? », « Qu’avez-vous fait, vous ? »).',
      'Notez le candidat avec la grille, puis tapez « FIN » et comparez votre note avec le retour de l’IA sur votre conduite d’entretien.',
    ],
    prompt:
      '1) Grille :\nTu es chargé de recrutement dans un hôtel de Nouméa. À partir des exigences ci-dessous, propose 6 questions d’entretien comportementales (« Racontez-moi une fois où… »), chacune reliée à une compétence. Pour chaque question, indique ce qu’on attend d’une bonne réponse et une grille de notation de 1 à 4 avec un exemple par note. Aucune question sur la vie privée, la santé, la famille, l’âge ou l’origine.\n\n<exigences>\n[collez les exigences ici]\n</exigences>\n\n2) Simulation (nouvelle conversation) :\nJoue le rôle d’un candidat au poste de réceptionniste dans un hôtel de Nouméa. Ton profil : [expérience, langues, disponibilités]. Réponds comme un vrai candidat un peu nerveux, parfois vague, pour que je doive relancer. Réponds seulement à la question posée, puis attends la suivante. Quand j’écris « FIN », sors du rôle et fais-moi un retour sur ma conduite d’entretien : clarté des questions, relances, questions à éviter.',
    materiau: {
      titre: 'Exigences du poste (note du directeur de l’hôtel)',
      texte:
        'Réceptionniste H/F, CDI, hôtel trois étoiles de 60 chambres à l’Anse-Vata.\n- Accueil des clients, arrivées et départs, réservations par téléphone et par e-mail\n- Clientèle : 40 % australienne et néo-zélandaise, 20 % japonaise, le reste de métropole et du pays\n- Anglais courant obligatoire, japonais apprécié\n- Travail en roulement, week-ends et jours fériés\n- Gestion des réclamations (bruit, climatisation, attente)\n- Encaissement et clôture de caisse\n- Travail en équipe avec le ménage et la maintenance',
    },
    variantes: {
      simple: 'Se limiter à la grille de questions, sans simulation.',
      poussee:
        'Faire jouer deux candidats de profils opposés, les noter avec la même grille, puis comparer ses notes avec celles d’un collègue.',
    },
    astuces: {
      gemini:
        'Créez un Gem « candidat simulé » avec le profil en instructions : chaque manager pourra s’entraîner avant ses entretiens.',
      claude:
        'Demandez la grille dans un artefact : vous l’imprimerez pour l’avoir sous les yeux pendant les entretiens.',
    },
    vigilance:
      'L’IA n’évalue pas de vrais candidats : la simulation sert à vous entraîner. La décision d’embauche reste celle des recruteurs, sur des critères liés au poste.',
    formateur: {
      resultat:
        'Une grille de six questions comportementales reliées aux exigences, notées de 1 à 4 avec des exemples, et une simulation suivie d’un retour exploité par l’apprenant.',
      criteres: [
        'Chaque question est reliée à une exigence du poste (anglais, réclamations, roulement, caisse, travail en équipe).',
        'Aucune question ne porte sur la vie privée, la famille, la santé ou l’origine.',
        'L’apprenant a relancé au moins une réponse vague pendant la simulation.',
        'La note du candidat simulé s’appuie sur la grille.',
      ],
      pieges: [
        'Garder « Avez-vous des enfants ? » pour vérifier la disponibilité le week-end : on demande plutôt si les horaires en roulement conviennent.',
        'Laisser l’IA jouer le candidat et le recruteur à la fois, sans poser soi-même les questions.',
      ],
      competence: 'description',
      technique: 'simulation',
    },
    motsCles: ['entretien', 'recrutement', 'grille', 'simulation', 'hôtellerie'],
  },
  {
    id: 'rh-climat-social',
    titre: 'Analyser les résultats d’un questionnaire de climat social',
    metier: 'rh',
    niveau: 'intermediaire',
    famille: 'analyser',
    duree: 30,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Une entreprise de distribution de 140 salariés a mené un questionnaire anonyme de climat social. Les résultats agrégés par service sont dans un tableau. La direction veut une synthèse pour la prochaine réunion avec les délégués du personnel.',
    objectif:
      'Faire calculer et interpréter des résultats d’enquête par l’IA, en repérant les résultats peu fiables et ceux qui menacent l’anonymat.',
    etapes: [
      'Copiez le tableau avec le prompt de départ, ou déposez-le en fichier CSV.',
      'Vérifiez à la main deux calculs : le taux de réponse global et celui de la maintenance.',
      'Contrôlez que les points faibles annoncés s’appuient sur des chiffres du tableau.',
      'Repérez les services dont les résultats ne doivent pas être commentés seuls (moins de 5 répondants).',
      'Demandez une synthèse d’une page pour la réunion, sans aucun résultat qui permette de reconnaître une personne.',
    ],
    prompt:
      'Tu es chargé de ressources humaines. Voici les résultats agrégés d’un questionnaire anonyme de climat social, par service (notes sur 5). Calcule le taux de réponse par service et au global. Identifie les trois points forts et les trois points faibles, chiffres à l’appui. Signale les résultats peu fiables (moins de 5 répondants) et ne tire aucune conclusion sur une personne. Termine par trois pistes d’action à discuter avec les délégués du personnel.\n\n<donnees>\n[collez le tableau ici]\n</donnees>',
    materiau: {
      titre: 'Résultats agrégés par service (fictifs)',
      texte:
        'Service;Effectif;Répondants;Satisfaction globale (sur 5);Charge de travail (sur 5);Reconnaissance (sur 5);Relations avec le manager (sur 5);Souhait de partir (%)\nAccueil et caisses;32;25;3,1;2,4;2,6;3,4;28\nLogistique Ducos;24;20;2,6;2,1;2,3;2,2;40\nLivraison;12;9;3,3;3,0;2,8;3,6;22\nRayons alimentaires;28;22;3,4;2,9;3,1;3,5;18\nRayons non alimentaires;18;15;3,6;3,2;3,3;3,8;13\nComptabilité;6;6;3,9;3,1;3,5;4,1;0\nInformatique;4;2;4,2;3,4;3,8;4,5;0\nRessources humaines;3;3;4,0;2,8;3,6;4,2;33\nDirection commerciale;5;5;3,8;2,7;3,2;3,9;20\nMaintenance;8;4;2,9;2,6;2,4;2,8;25',
    },
    variantes: {
      simple: 'Se limiter au taux de réponse et aux trois points faibles.',
      poussee:
        'Faire tracer un graphique par thème, puis préparer trois diapositives pour la réunion avec les délégués du personnel.',
    },
    astuces: {
      chatgpt:
        'Déposez le fichier CSV : l’analyse de données calcule les taux et trace un graphique par service. Recalculez un taux à la main.',
      gemini:
        'Dans Google Sheets, « Demander à Gemini » propose la formule du taux de réponse : vérifiez-la sur une ligne.',
    },
    vigilance:
      'Dans un petit service, une moyenne peut révéler l’avis d’une seule personne : ne diffusez aucun résultat par service sous un seuil de répondants fixé à l’avance. Ne collez jamais de réponses individuelles ni de commentaires libres nominatifs.',
    formateur: {
      resultat:
        'Un taux de réponse global d’environ 79 % (111 sur 140), la logistique identifiée comme le service le plus en difficulté (charge de travail 2,1, relations avec le manager 2,2, 40 % de souhait de départ), les services de moins de 5 répondants signalés comme non interprétables, et une synthèse d’une page sans résultat identifiant.',
      criteres: [
        'Le taux de réponse global (environ 79 %) et celui de la maintenance (50 %) sont justes.',
        'La logistique est identifiée comme prioritaire, chiffres à l’appui.',
        'L’informatique, les ressources humaines et la maintenance ne sont pas commentées seules.',
        'Les pistes d’action découlent des chiffres, pas de suppositions.',
      ],
      pieges: [
        'Commenter les 33 % de souhait de départ des ressources humaines : il s’agit d’une seule personne sur trois répondants.',
        'Accepter une moyenne générale calculée sans tenir compte du nombre de répondants de chaque service.',
        'Laisser l’IA expliquer les résultats par des causes inventées (manager autoritaire, conflits).',
      ],
      competence: 'discernement',
      technique: 'structurer',
    },
    motsCles: ['climat social', 'enquête', 'tableau', 'anonymat', 'délégués du personnel'],
  },
  {
    id: 'rh-entretiens-depart',
    titre: 'Synthétiser les entretiens de départ de l’année',
    metier: 'rh',
    niveau: 'intermediaire',
    famille: 'synthetiser',
    duree: 30,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Une entreprise de nettoyage de 90 salariés à Nouméa a vu partir douze agents cette année. Le service des ressources humaines a mené des entretiens de départ et noté les réponses en vrac. La direction veut comprendre pourquoi les gens partent.',
    objectif:
      'Obtenir une synthèse par thèmes fidèle aux notes, avec les comptes et les références, et séparer ce sur quoi l’entreprise peut agir.',
    etapes: [
      'Copiez les notes du matériau avec le prompt de départ.',
      'Vérifiez deux comptes à la main, par exemple celui des horaires coupés et celui du transport.',
      'Repérez tout thème ou toute citation qui ne figure pas dans les notes, et demandez de le retirer.',
      'Relevez avec l’IA le sujet qui ne peut pas attendre la synthèse annuelle.',
      'Demandez une synthèse de dix lignes au maximum pour la direction, avec trois actions prioritaires tirées des notes.',
    ],
    prompt:
      'Tu es chargé de ressources humaines dans une entreprise de nettoyage à Nouméa. Voici les notes anonymisées de huit entretiens de départ. Regroupe les motifs de départ par thème dans un tableau : thème, nombre d’entretiens, références (A1, A2…), citation courte. Un même entretien peut relever de plusieurs thèmes. Sépare les motifs sur lesquels l’entreprise peut agir des motifs personnels. N’ajoute aucun motif absent des notes. Termine par une synthèse de dix lignes au maximum pour la direction.\n\n<notes>\n[collez les notes ici]\n</notes>',
    materiau: {
      titre: 'Notes des entretiens de départ (anonymisées)',
      texte:
        'A1 (agente, 2 ans) : a trouvé un poste plus près de chez elle à Païta, 2 h de bus par jour, sinon contente de l’équipe.\nA2 (agent, 8 mois) : horaires coupés trop durs (5 h – 8 h puis 17 h – 20 h), salaire correct.\nA3 (cheffe d’équipe, 5 ans) : pas d’évolution depuis 3 ans, a demandé une formation à l’encadrement, jamais obtenue.\nA4 (agent, 4 mois) : horaires coupés, et produits qui irritent la peau, gants pas toujours fournis.\nA5 (agente, 1 an) : part pour suivre son conjoint à Koné.\nA6 (agent, 6 mois) : mieux payé dans une autre société (+20 000 XPF par mois), « ici on ne nous dit jamais merci ».\nA7 (agente, 3 ans) : horaires coupés et transport, propose des tournées regroupées par quartier.\nA8 (agent, 2 mois) : aucune formation à l’arrivée, laissé seul sur un site dès le deuxième jour.',
    },
    variantes: {
      simple: 'Se limiter au tableau des thèmes, sans synthèse pour la direction.',
      poussee:
        'Proposer un questionnaire de départ structuré, pour que les entretiens de l’an prochain soient comparables.',
    },
    astuces: {
      claude:
        'Demandez le tableau dans un artefact : vous pourrez corriger un compte puis le copier dans votre note.',
      copilot:
        'Avec la licence, Copilot dans Word peut mettre la synthèse au format de vos notes à la direction.',
    },
    vigilance:
      'Même anonymisées, des notes avec l’ancienneté et le poste permettent de reconnaître quelqu’un dans une petite équipe : la synthèse ne circule qu’au niveau des thèmes. Le problème des gants et des produits relève de la sécurité au travail et se traite sans attendre.',
    formateur: {
      resultat:
        'Un tableau des thèmes (horaires coupés : 3 ; transport : 2 ; évolution et intégration : 2 ; rémunération et reconnaissance : 1 ; sécurité : 1 ; motif personnel : 1), une distinction claire entre motifs actionnables et personnels, et une synthèse qui met en avant les horaires coupés.',
      criteres: [
        'Les comptes par thème sont justes et renvoient aux bonnes références.',
        'Le manque de gants et les produits irritants sont repérés comme un sujet de sécurité urgent.',
        'La synthèse ne contient aucun motif inventé.',
        'Les actions proposées découlent des notes (tournées par quartier, formation à l’arrivée…).',
      ],
      pieges: [
        'Présenter un pourcentage calculé sur huit entretiens comme une tendance sûre.',
        'Laisser passer un thème inventé (« ambiance dégradée », « management toxique ») absent des notes.',
      ],
      competence: 'discernement',
      technique: 'structurer',
    },
    motsCles: ['entretien de départ', 'turnover', 'synthèse', 'fidélisation'],
  },
  {
    id: 'rh-infographie-premiere-semaine',
    titre: 'Créer l’infographie « Votre première semaine » dans Canva',
    metier: 'rh',
    niveau: 'intermediaire',
    famille: 'visuels',
    duree: 30,
    outils: ['canva', 'claude', 'chatgpt', 'gemini'],
    outilConseille: 'canva',
    situation:
      'Une société de transport de Dumbéa veut remettre à chaque nouveau salarié une page illustrée qui résume sa première semaine et les contacts utiles. Le contenu existe dans un livret d’accueil de trois pages que personne ne lit.',
    objectif:
      'Faire condenser un texte par l’IA, puis le mettre en forme dans Canva sans perdre l’exactitude des informations.',
    etapes: [
      'Donnez l’extrait du livret à votre outil d’IA avec le prompt de départ.',
      'Vérifiez que les horaires, les numéros de poste et le montant de remboursement sont exacts.',
      'Dans Canva, demandez à l’IA Canva ou au Design magique une infographie verticale au format A4 à partir des blocs validés.',
      'Mettez les couleurs et le logo de l’entreprise, et retirez toute image hors contexte.',
      'Relisez l’infographie après chaque retouche, puis faites-la lire à un collègue : comprend-il en 30 secondes ce qu’il doit faire le premier jour ?',
    ],
    prompt:
      'Tu es chargé de communication interne dans une société de transport à Dumbéa. Transforme le texte ci-dessous en contenu d’infographie pour les nouveaux salariés : un titre, 5 blocs de 15 mots au maximum (premier jour, badge et tenue, sécurité, contacts, première semaine) et une phrase d’accueil. Garde exactement les horaires, les numéros de poste et les montants. Ton chaleureux, en vouvoiement.\n\n<texte>\n[collez le texte ici]\n</texte>',
    materiau: {
      titre: 'Extrait du livret d’accueil',
      texte:
        'Bienvenue dans l’entreprise. Le premier jour, présentez-vous à 7 h 30 à l’accueil du siège de Dumbéa. Votre badge vous sera remis par le service des ressources humaines (poste 214). La tenue de travail (deux polos, un pantalon) est fournie le premier jour ; les chaussures de sécurité sont obligatoires au dépôt de Païta et remboursées sur facture, dans la limite de 12 000 XPF. Le matin du premier jour, vous suivez une séance de sécurité de deux heures, obligatoire avant tout accès au dépôt. Pour une question sur votre paie, contactez le service paie (poste 220) ; pour l’informatique, le support (poste 230). Pendant la première semaine, votre tuteur vous accompagne chaque jour et vous faites un point avec votre responsable le vendredi après-midi. Il n’y a pas de cantine sur le site : un réfrigérateur et un micro-ondes sont à votre disposition en salle de pause.',
    },
    variantes: {
      simple: 'Créer seulement le bloc « Premier jour » sous forme de carte au format A5.',
      poussee:
        'Décliner l’infographie en écran d’accueil pour la salle de pause et en version anglaise pour les salariés anglophones.',
    },
    astuces: {
      canva:
        'Si un ancien livret existe en image, Calques magiques le rend modifiable ; le Kit de marque (Pro) applique les couleurs de l’entreprise.',
    },
    vigilance:
      'N’utilisez pas de photo de vrais salariés sans leur accord. L’écriture magique de Canva peut réécrire un bloc : relisez les numéros et les montants après chaque retouche.',
    formateur: {
      resultat:
        'Une infographie A4 lisible, aux couleurs de l’entreprise, avec les bonnes informations : 7 h 30, séance de sécurité le premier matin, postes 214, 220 et 230, remboursement des chaussures dans la limite de 12 000 XPF, point du vendredi.',
      criteres: [
        'Tous les horaires, numéros de poste et montants sont exacts.',
        'Le texte tient en 5 blocs courts, lisibles en 30 secondes.',
        'Aucune image ne contredit le contexte (paysage enneigé, uniforme d’un autre secteur, logo inventé).',
      ],
      pieges: [
        'Laisser Canva réécrire un bloc et changer un numéro de poste ou le montant.',
        'Oublier que la séance de sécurité est obligatoire avant l’accès au dépôt.',
      ],
      competence: 'discernement',
      technique: 'format',
    },
    motsCles: ['infographie', 'livret d’accueil', 'intégration', 'Canva'],
  },
  {
    id: 'rh-tri-cv-biais',
    titre: 'Présélectionner des CV fictifs avec des critères explicites et contrôler les biais',
    metier: 'rh',
    niveau: 'avance',
    famille: 'analyser',
    duree: 45,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Vous avez reçu 40 candidatures pour un poste d’assistant de paie (H/F). Un collègue propose de « tout donner à l’IA pour qu’elle choisisse ». Avant toute décision, vous testez la méthode sur six CV fictifs : l’IA peut-elle aider à lire des candidatures sans discriminer ?',
    objectif:
      'Utiliser l’IA comme aide à la lecture de candidatures avec des critères liés au poste, détecter ses biais et garder la décision humaine.',
    etapes: [
      'Écrivez d’abord, sans l’IA, trois critères obligatoires et trois critères souhaitables liés au poste, et complétez le prompt.',
      'Donnez les CV fictifs du matériau à l’IA et obtenez le tableau critère par critère, avec la phrase du CV qui justifie chaque note.',
      'Dans une nouvelle conversation, refaites la demande avec des CV dont vous avez retiré prénoms, âges et communes, puis comparez les deux tableaux.',
      'Demandez à l’IA de relire sa propre analyse : quels éléments ont pu introduire un biais (âge, commune, prénom, interruption de carrière, reconversion) ?',
      'Décidez vous-même quels candidats convoquer, et écrivez une ligne de justification pour chacun.',
    ],
    prompt:
      'Tu aides le service des ressources humaines à lire des candidatures pour un poste d’assistant de paie. Tu ne décides pas : tu prépares une analyse que le recruteur vérifiera.\n\nCritères obligatoires : [critère 1], [critère 2], [critère 3].\nCritères souhaitables : [critère 4], [critère 5], [critère 6].\n\nPour chaque CV, remplis un tableau : critère, oui / non / partiel, phrase du CV qui le justifie. N’utilise aucun autre critère et ne fais aucun classement général. Ne tiens jamais compte de l’âge, du sexe, de l’origine, du prénom, de la commune, de la situation familiale ni des interruptions de carrière. Si une information manque, écris « non indiqué ».\n\n<cv>\n[collez les CV fictifs ici]\n</cv>',
    materiau: {
      titre: 'Six CV fictifs résumés',
      texte:
        'CV 1 – Mélanie, 46 ans, Rivière-Salée. BTS comptabilité. 10 ans d’assistante comptable en cabinet, dont 3 ans sur la paie. Interruption de 2 ans (congé parental). Excel avancé.\nCV 2 – Kévin, 24 ans, Dumbéa. Bac professionnel gestion. Alternance de 2 ans dans un service RH : saisie des absences, préparation des éléments variables de paie. Excel intermédiaire.\nCV 3 – Sione, 35 ans, Mont-Dore. Licence de gestion. 6 ans de gestionnaire de paie dans une entreprise de BTP (150 bulletins par mois, déclarations à la CAFAT). Anglais courant.\nCV 4 – Claire, 29 ans, arrivée de métropole il y a 3 mois. Master RH. 4 ans de paie en métropole, découvre les règles calédoniennes.\nCV 5 – Jean-Paul, 58 ans, Koné, prêt à s’installer à Nouméa. 25 ans de comptabilité générale sur un site minier, paie occasionnelle en remplacement.\nCV 6 – Anaïs, 31 ans, Nouméa. CAP coiffure puis reconversion : formation qualifiante de gestionnaire de paie obtenue cette année, stage de 2 mois en cabinet comptable.',
    },
    variantes: {
      simple:
        'Travailler sur trois CV seulement et un seul passage, en vérifiant la justification de chaque note.',
      poussee:
        'Rédiger la procédure d’usage de l’IA au recrutement : ce qu’on lui confie, ce qu’on anonymise, qui décide, comment on informe les candidats.',
    },
    astuces: {
      claude:
        'Demandez le tableau dans un artefact : comparez côte à côte les deux passages, avec et sans prénoms, âges et communes.',
      chatgpt:
        'La mémoire peut garder des éléments d’une conversation à l’autre : désactivez-la pour cet exercice, afin que le second passage ne s’inspire pas du premier.',
    },
    vigilance:
      'Utilisez uniquement des CV fictifs pour cet exercice. Avec de vrais CV, retirez prénoms, photos, âges et adresses, vérifiez les règles de protection des données applicables, et ne laissez jamais l’IA écarter seule une candidature : la décision et sa justification restent humaines.',
    formateur: {
      resultat:
        'Un tableau critère par critère justifié par des phrases des CV, une comparaison des deux passages, une liste des biais possibles repérés et une liste de convocations décidée et justifiée par l’apprenant.',
      criteres: [
        'Les critères sont fixés avant de lire les CV et sont tous liés au poste.',
        'Chaque note de l’IA est justifiée par une phrase du CV.',
        'L’apprenant a repéré au moins un biais possible (âge du CV 5, congé parental du CV 1, arrivée récente du CV 4, reconversion du CV 6).',
        'La décision de convocation est écrite par l’apprenant, pas copiée de l’IA.',
      ],
      pieges: [
        'Laisser l’IA écarter le CV 1 à cause de son interruption ou le CV 5 à cause de son âge.',
        'Accepter une note sur la « motivation » ou la « personnalité » qui ne s’appuie sur aucune phrase du CV.',
        'Croire qu’un classement chiffré est objectif parce qu’il est précis.',
      ],
      competence: 'diligence',
      technique: 'critique',
    },
    motsCles: ['CV', 'présélection', 'biais', 'discrimination', 'recrutement'],
  },
  {
    id: 'rh-assistant-questions-salaries',
    titre: 'Créer un assistant RH qui prépare les réponses aux questions des salariés',
    metier: 'rh',
    niveau: 'avance',
    famille: 'automatiser',
    duree: 60,
    outils: ['claude', 'chatgpt', 'gemini', 'copilot'],
    outilConseille: 'claude',
    situation:
      'Le service des ressources humaines d’une entreprise de 200 salariés à Nouméa reçoit chaque jour les mêmes questions : comment poser un congé, à qui envoyer un arrêt de travail, quand arrive le bulletin de paie. Vous préparez un assistant interne qui rédige des projets de réponse à partir des documents de l’entreprise, relus par un gestionnaire.',
    objectif:
      'Créer un assistant avec des instructions permanentes et des documents de référence, puis le tester jusqu’à ce qu’il sache dire « je ne sais pas ».',
    etapes: [
      'Rassemblez 3 ou 4 documents internes sans donnée personnelle : règlement intérieur, procédure de demande de congés, calendrier de paie, note sur les arrêts de travail.',
      'Créez un Projet (Claude, ChatGPT), un Gem (Gemini) ou un agent (Copilot) et ajoutez-y ces documents.',
      'Collez les instructions du prompt de départ et complétez les crochets.',
      'Testez l’assistant avec les six questions du matériau et notez les réponses inventées ou non sourcées.',
      'Corrigez les instructions jusqu’à ce que l’assistant renvoie les questions 5 et 6 vers une personne.',
      'Faites tester l’assistant par un collègue et listez ce qu’il faudrait ajouter aux documents.',
    ],
    prompt:
      'Tu es l’assistant du service des ressources humaines de [nom de l’entreprise], à Nouméa. Tu prépares des projets de réponse aux questions des salariés ; un gestionnaire RH les relit avant envoi.\n\nRègles :\n- Réponds uniquement à partir des documents de ce projet et cite le document utilisé.\n- Si la réponse n’y est pas, écris : « Je transmets votre question au service RH » et n’invente rien.\n- N’affirme jamais une règle du Code du travail de la Nouvelle-Calédonie, un taux ou un délai qui ne figure pas dans les documents.\n- Pour toute question de santé, de discipline, de conflit ou de situation personnelle, renvoie vers [nom du contact RH] sans donner d’avis.\n- Ne demande jamais de numéro CAFAT, de diagnostic médical ni de coordonnées bancaires.\n- Ton : clair et bienveillant, vouvoiement, 120 mots au maximum.',
    materiau: {
      titre: 'Questions de test',
      texte:
        '1. Comment je fais pour poser une semaine de congés en janvier ?\n2. Mon bulletin de paie arrive quand ce mois-ci ?\n3. Je suis malade depuis ce matin, à qui j’envoie mon arrêt de travail ?\n4. Est-ce que je peux venir en short le samedi ?\n5. Mon chef m’a mal parlé devant tout le monde, je veux porter plainte, je fais comment ?\n6. Combien de jours de congé j’ai pour le mariage de ma sœur ?',
    },
    variantes: {
      simple:
        'Se contenter d’un prompt réutilisable enregistré dans un document, testé sur trois questions.',
      poussee:
        'Ajouter trois exemples de bonnes réponses dans les instructions, puis faire évaluer l’assistant par deux gestionnaires sur dix nouvelles questions.',
    },
    astuces: {
      claude:
        'Dans un Projet, ajoutez les documents aux connaissances du projet et collez les règles dans ses instructions.',
      chatgpt:
        'Un Projet suffit pour vous ; un GPT (création payante) peut être partagé avec toute l’équipe RH.',
      gemini: 'Créez un Gem, collez les règles dans ses instructions et ajoutez les documents.',
      copilot:
        'Créer un agent dépend de votre licence : renseignez-vous auprès du service informatique avant de commencer.',
    },
    vigilance:
      'L’assistant ne voit que les documents fournis : il ne connaît ni le dossier de chaque salarié ni l’évolution des textes. Aucune réponse ne part sans relecture, et aucun document chargé ne contient de donnée personnelle.',
    formateur: {
      resultat:
        'Un assistant qui répond aux questions 1 à 4 à partir des documents en citant sa source, et qui renvoie vers une personne la question 5 (conflit, possible souffrance au travail) et la question 6 (règle de congé absente des documents).',
      criteres: [
        'Les instructions disent quoi faire quand l’information manque.',
        'La question 5 est orientée vers une personne, sans conseil juridique ni jugement.',
        'La question 6 ne reçoit aucun nombre de jours inventé.',
        'L’apprenant a modifié ses instructions après un premier test raté.',
      ],
      pieges: [
        'Accepter un nombre de jours de congé pour mariage tiré du droit métropolitain.',
        'Charger des documents qui contiennent des noms ou des salaires.',
        'Laisser l’assistant donner un avis sur la plainte de la question 5.',
      ],
      competence: 'delegation',
      technique: 'instructions',
    },
    motsCles: ['assistant', 'projet', 'gem', 'questions des salariés', 'foire aux questions'],
  },
  {
    id: 'rh-campagne-entretiens-annuels',
    titre: 'Organiser la campagne d’entretiens annuels de bout en bout',
    metier: 'rh',
    niveau: 'avance',
    famille: 'organiser',
    duree: 45,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Vous organisez les entretiens annuels de 36 salariés répartis entre Nouméa et Koné, du 9 novembre au 11 décembre. Quatre managers ont des congés, des formations et des déplacements. Il faut un planning, des messages d’invitation, une trame d’entretien et un guide pour les managers.',
    objectif:
      'Enchaîner plusieurs étapes avec l’IA en vérifiant chaque résultat avant de passer au suivant, et obtenir qu’elle signale une contrainte impossible au lieu de la contourner.',
    etapes: [
      'Étape 1 : donnez les contraintes à l’IA avec le prompt de départ et obtenez un planning semaine par semaine.',
      'Étape 2 : demandez à l’IA de vérifier son planning contrainte par contrainte, puis contrôlez vous-même trois d’entre elles.',
      'Étape 3 : faites rédiger le message d’invitation type et le rappel envoyé deux jours avant l’entretien.',
      'Étape 4 : faites préparer une trame d’entretien commune (bilan, objectifs, besoins de formation) et un guide d’une page pour les managers.',
      'Étape 5 : rassemblez le tout dans un fichier prêt à partager, et notez ce que vous avez corrigé à chaque étape.',
    ],
    prompt:
      'Tu es chargé de ressources humaines. Je dois organiser les entretiens annuels de 36 salariés du lundi 9 novembre au vendredi 11 décembre. Nous allons travailler par étapes : ne passe à l’étape suivante que quand je te le demande.\n\nÉtape 1 : propose un planning semaine par semaine dans un tableau (manager, site, semaine, jours, nombre d’entretiens). Règles : 1 h par entretien, 4 entretiens au maximum par jour et par manager, aucun entretien les jours d’indisponibilité. Si une contrainte rend le planning impossible, dis-le et propose des solutions au lieu de la contourner.\n\n<contraintes>\n[collez les contraintes ici]\n</contraintes>',
    materiau: {
      titre: 'Contraintes de la campagne',
      texte:
        'Période : du lundi 9 novembre au vendredi 11 décembre.\nRègles : 1 h par entretien, 4 entretiens au maximum par jour et par manager.\n\n- Nadia (Nouméa) : 12 salariés. Matinées uniquement. En congé du 23 novembre au 4 décembre.\n- Patrice (Nouméa) : 8 salariés. Jamais le vendredi.\n- Samuel (Koné) : 10 salariés, entretiens à Koné uniquement. À Nouméa du 16 au 20 novembre.\n- Virginie (Nouméa et Koné) : 4 salariés à Nouméa, 2 à Koné. Un seul déplacement possible à Koné, le mercredi 25 novembre. En formation les 2 et 3 décembre. Elle doit aussi assister toute la journée du 25 novembre à la réunion des délégués du personnel, à Nouméa.\n- Les comptes rendus d’entretien sont remis au service RH au plus tard le 15 décembre.',
    },
    variantes: {
      simple: 'Se limiter au planning (étapes 1 et 2).',
      poussee:
        'Ajouter un tableau de suivi de la campagne (entretien fait, compte rendu reçu, besoin de formation) et un rappel automatique chaque lundi par une tâche planifiée.',
    },
    astuces: {
      claude:
        'Demandez le planning final en fichier Excel grâce à la création de fichiers, avec une feuille par manager.',
      gemini:
        'Exportez le planning dans Google Sheets, puis rédigez les invitations avec « Aide-moi à écrire » dans Gmail.',
      copilot:
        'Transformez la trame d’entretien en Copilot Page pour que les managers la commentent avant validation.',
    },
    vigilance:
      'Le planning ne contient que des prénoms de managers et des nombres : la liste nominative des salariés n’est pas nécessaire. La trame d’entretien est validée par la direction, et présentée aux délégués du personnel si c’est l’usage dans l’entreprise.',
    formateur: {
      resultat:
        'Un planning réaliste qui respecte congés, formations, jours interdits et capacités, qui signale le conflit du 25 novembre pour Virginie au lieu de l’ignorer, avec des messages types, une trame d’entretien et un guide pour les managers.',
      criteres: [
        'Le conflit du 25 novembre est signalé, avec des solutions (autre date à valider, entretien en visioconférence, autre manager).',
        'Aucun entretien de Nadia l’après-midi ni pendant ses congés, aucun de Patrice un vendredi.',
        'L’apprenant a contrôlé lui-même au moins trois contraintes.',
        'Chaque étape a été vérifiée avant de passer à la suivante.',
      ],
      pieges: [
        'Accepter le déplacement de Virginie à Koné le 25 novembre sans voir qu’elle est attendue à Nouméa ce jour-là.',
        'Laisser l’IA enchaîner toutes les étapes d’un coup : une erreur du planning se retrouve dans tous les messages.',
      ],
      competence: 'delegation',
      technique: 'decomposer',
    },
    motsCles: ['entretiens annuels', 'planning', 'campagne', 'managers'],
  },
  {
    id: 'rh-carnet-reunion-dp',
    titre: 'Préparer la réunion des délégués du personnel avec un carnet Gemini Notebook',
    metier: 'rh',
    niveau: 'avance',
    famille: 'synthetiser',
    duree: 45,
    outils: ['notebook'],
    outilConseille: 'notebook',
    situation:
      'Les délégués du personnel ont envoyé leurs questions pour la réunion mensuelle. Pour y répondre, vous devez retrouver ce que disent le règlement intérieur, l’accord sur le temps de travail et les comptes rendus des réunions précédentes. Vous rassemblez ces documents dans un carnet Gemini Notebook.',
    objectif:
      'Exploiter un corpus de documents internes avec des réponses citées, et distinguer ce que disent les documents de ce que la direction doit décider.',
    etapes: [
      'Créez un carnet et chargez comme sources 4 à 6 documents internes sans donnée personnelle (ou des versions fictives demandées à une IA pour l’exercice).',
      'Collez le prompt de départ avec les questions des délégués dans la discussion.',
      'Pour chaque réponse, cliquez sur les citations et vérifiez que le passage dit bien ce qui est affirmé.',
      'Classez les questions : réponse dans les documents, décision à prendre par la direction, point à vérifier auprès d’un juriste.',
      'Générez un rapport (FAQ ou synthèse) qui servira de base au projet de réponses, et relisez-le avant de l’envoyer à la direction.',
    ],
    prompt:
      'Pour chaque question des délégués ci-dessous, réponds uniquement à partir des sources du carnet. Cite le document et le passage. Si les sources ne répondent pas, ou se contredisent, dis-le clairement. Termine par un tableau : question, ce que disent les documents, décision à prendre par la direction, point à vérifier.\n\n<questions>\n[collez les questions des délégués ici]\n</questions>',
    materiau: {
      titre: 'Questions des délégués du personnel (réunion de novembre)',
      texte:
        '1. Les heures faites pendant l’inventaire de fin d’année seront-elles payées en heures supplémentaires ou récupérées ?\n2. Le règlement intérieur autorise-t-il le port du short au dépôt ?\n3. Le compte rendu d’octobre prévoyait l’installation d’un second climatiseur en salle de pause : où en est-on ?\n4. Les salariés de Koné peuvent-ils suivre la formation sécurité en visioconférence ?\n5. Pourquoi la prime de fin d’année n’apparaît-elle pas dans l’accord sur le temps de travail ?',
    },
    variantes: {
      simple: 'Charger seulement le règlement intérieur et traiter les questions 2 et 4.',
      poussee:
        'Partager le carnet avec la direction pour qu’elle consulte les sources elle-même, et générer un résumé audio pour la briefer avant la réunion.',
    },
    astuces: {
      notebook:
        'Décochez les sources sans rapport avec une question : la réponse ne s’appuie alors que sur les documents restés cochés.',
    },
    vigilance:
      'Ne chargez ni compte rendu nominatif, ni dossier disciplinaire, ni bulletin de paie. Le carnet aide à retrouver l’information ; les réponses aux délégués engagent la direction, qui les valide.',
    formateur: {
      resultat:
        'Un tableau des cinq questions, avec pour chacune les passages vérifiés, et une distinction nette entre ce que disent les documents et ce qui relève d’une décision de la direction ou d’une vérification juridique.',
      criteres: [
        'Chaque réponse retenue s’appuie sur une citation ouverte et vérifiée.',
        'Les questions sans réponse dans les sources sont identifiées comme telles.',
        'Aucune donnée personnelle n’a été chargée.',
      ],
      pieges: [
        'Prendre une réponse générale sur les heures supplémentaires pour la règle de l’entreprise.',
        'Répondre à la question 5 sans relever qu’elle mélange deux sujets (prime et temps de travail).',
      ],
      competence: 'discernement',
      technique: 'sources',
    },
    motsCles: ['délégués du personnel', 'Gemini Notebook', 'corpus', 'relations sociales'],
  },
];
