/**
 * Éducation et formation : organisme de formation, établissement scolaire, formateur
 * indépendant. Toutes les personnes, structures, sessions et sommes sont fictives.
 */

export const vocabulaire = {
  structure: { g: 'm', s: 'organisme de formation', p: 'organismes de formation' },
  client: { g: 'm', s: 'stagiaire', p: 'stagiaires' },
  partenaire: { g: 'm', s: 'formateur vacataire', p: 'formateurs vacataires' },
  documentCourant: { g: 'm', s: 'déroulé pédagogique', p: 'déroulés pédagogiques' },
  documentLong: { g: 'm', s: 'référentiel de certification', p: 'référentiels de certification' },
  reunion: { g: 'f', s: 'réunion pédagogique mensuelle', p: 'réunions pédagogiques mensuelles' },
  offre: {
    g: 'f',
    s: 'session de remise à niveau en bureautique de novembre',
    p: 'sessions de remise à niveau en bureautique',
  },
  poste: { g: 'm', s: 'formateur en bureautique', p: 'formateurs en bureautique' },
  evenement: {
    g: 'f',
    s: 'cérémonie de remise des diplômes',
    p: 'cérémonies de remise des diplômes',
  },
  visuel: { g: 'f', s: 'affiche d’information', p: 'affiches d’information' },
  domaine: 'l’éducation et la formation',
  motifReclamation: 'l’annulation d’une session de formation une semaine avant son début',
  donnees: 'les résultats des évaluations de fin de formation de l’année, session par session',
  colonnes:
    'Session;Formateur;Stagiaires inscrits;Abandons;Satisfaction globale (sur 5);Taux de réussite (%)',
  indicateur: 'le taux d’abandon par session',
  veille:
    'les évolutions de la formation professionnelle et des dispositifs de financement en Nouvelle-Calédonie',
  sourcesVeille:
    'les sites du gouvernement et des provinces, les publications de la CCI et de la Chambre de métiers et de l’artisanat, et la presse calédonienne',
  jargon: 'les objectifs pédagogiques, les compétences visées et les modalités d’évaluation',
  procedure: 'l’accueil d’un nouveau stagiaire en formation',
  situationTendue: 'un stagiaire qui conteste son résultat à l’évaluation finale',
  donneesSensibles:
    'les noms, coordonnées, résultats, situations de handicap et informations personnelles des apprenants',
  corpus: 'les supports de cours, les référentiels de compétences et les programmes de formation',
  publicCible: 'les demandeurs d’emploi qui veulent se reconvertir',
  etranger: 'un stagiaire anglophone du Vanuatu inscrit à une formation à Nouméa',
  themeFormation:
    'les règles d’organisation d’une session de formation, de l’inscription à l’attestation',
  tacheRepetitive: 'l’envoi des convocations et des attestations de fin de formation',
  planning: 'les sessions de formation du trimestre pour quatre formateurs',
  comparaison: 'deux plateformes de formation à distance',
};

export const exercices = [
  {
    id: 'form-deroule-seance',
    titre: 'Construire le déroulé pédagogique d’une séance de 3 heures',
    metier: 'formation',
    niveau: 'debutant',
    famille: 'organiser',
    duree: 20,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Vous êtes formateur dans un organisme de formation de Nouméa. Lundi, vous animez une séance de 3 heures sur l’accueil téléphonique pour 10 agents d’accueil de mairies, de niveaux très différents. Vous avez l’objectif, le public et les contraintes de la salle ; il vous faut le déroulé.',
    objectif:
      'Obtenir en une demande un déroulé minuté et réaliste, en donnant à l’IA le public, l’objectif et les contraintes.',
    etapes: [
      'Complétez le prompt de départ avec les informations du matériau.',
      'Vérifiez que le total des durées fait bien 3 heures, pause comprise.',
      'Vérifiez qu’au moins la moitié du temps est consacrée à la pratique (mises en situation, exercices), et pas à des exposés.',
      'Demandez de remplacer une activité qui ne convient pas à votre salle ou à votre public, et relisez la nouvelle version.',
      'Demandez le déroulé en tableau imprimable : horaire, séquence, objectif, méthode, matériel.',
    ],
    prompt:
      'Tu es ingénieur pédagogique en formation professionnelle pour adultes. Construis le déroulé d’une séance de 3 heures (de 8 h à 11 h, pause de 15 minutes comprise) à partir des informations ci-dessous. Présente un tableau : horaire, séquence, objectif de la séquence, méthode et activité des stagiaires, matériel. Au moins la moitié du temps doit être de la pratique. Prévois une activité d’accueil, une évaluation rapide en fin de séance et, pour chaque activité, ce que fait le formateur pendant que les stagiaires travaillent.\n\n<informations>\n[collez les informations ici]\n</informations>',
    materiau: {
      titre: 'Objectif, public et contraintes de la séance',
      texte:
        'Thème : accueillir un appelant au téléphone et traiter sa demande\nObjectif : à la fin de la séance, les stagiaires savent décrocher, identifier la demande, reformuler, orienter ou prendre un message complet, et conclure l’appel.\nPublic : 10 agents d’accueil de mairies du Grand Nouméa, de 22 à 58 ans ; certains débutent, d’autres ont 20 ans d’ancienneté ; deux sont peu à l’aise à l’écrit.\nSalle : tables en îlots, un vidéoprojecteur, pas de téléphones de formation (on simule avec les portables, en mode avion).\nContraintes : séance de 8 h à 11 h, pause obligatoire, pas de jeu de rôle filmé.',
    },
    variantes: {
      simple: 'Demander seulement les grandes séquences et leurs durées.',
      poussee:
        'Demander deux variantes, l’une pour un groupe de débutants, l’autre pour des agents expérimentés, puis justifier le choix pour ce groupe mixte.',
    },
    astuces: {
      claude:
        'Demandez le déroulé en fichier Word avec la création de fichiers, prêt à imprimer pour la salle.',
      gemini:
        'Exportez le tableau dans Google Sheets pour ajuster les durées : le total se recalcule seul.',
    },
    vigilance:
      'Le déroulé est un point de départ : vous connaissez votre public mieux que l’IA. Ne donnez ni les noms des stagiaires ni leurs difficultés personnelles ; « deux stagiaires peu à l’aise à l’écrit » suffit.',
    formateur: {
      resultat:
        'Un tableau minuté de 8 h à 11 h, avec un accueil, des apports courts, plusieurs mises en situation par deux ou trois, une pause, une évaluation de fin et des activités accessibles aux stagiaires peu à l’aise à l’écrit.',
      criteres: [
        'Le total fait 3 heures, pause de 15 minutes comprise.',
        'La pratique occupe au moins la moitié du temps.',
        'Les activités respectent les contraintes (pas de film, portables, deux stagiaires peu à l’aise à l’écrit).',
        'Chaque séquence a un objectif relié à l’objectif de la séance.',
      ],
      pieges: [
        'Un déroulé qui dépasse 3 heures ou oublie la pause.',
        'Une suite d’exposés avec un seul exercice à la fin.',
        'Une activité qui demande beaucoup d’écrit, inadaptée à une partie du groupe.',
      ],
      competence: 'description',
      technique: 'contexte',
    },
    motsCles: ['déroulé pédagogique', 'séance', 'ingénierie pédagogique', 'accueil téléphonique'],
  },
  {
    id: 'form-quiz-positionnement',
    titre: 'Rédiger un quiz de positionnement avant une formation',
    metier: 'formation',
    niveau: 'debutant',
    famille: 'rediger',
    duree: 15,
    outils: ['chatgpt', 'claude', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Votre organisme ouvre une formation au tableur à Koné. Les inscrits ont des niveaux très différents et vous voulez constituer deux groupes. Il vous faut un quiz de positionnement de 12 questions, rapide à passer et à corriger.',
    objectif:
      'Faire rédiger un questionnaire au service d’un objectif précis (répartir en groupes), puis en vérifier la justesse et la progression.',
    etapes: [
      'Collez le programme du matériau avec le prompt de départ.',
      'Vérifiez chaque bonne réponse, et faites vous-même dans un tableur au moins trois questions, une par niveau.',
      'Vérifiez que les questions ne dépendent pas d’un logiciel précis (Excel, Google Sheets, LibreOffice) sans nécessité.',
      'Demandez de reformuler toute question ambiguë, puis relisez le quiz en vous mettant à la place d’un débutant.',
    ],
    prompt:
      'Tu es formateur en bureautique. Rédige un quiz de positionnement de 12 questions sur le tableur, pour répartir des stagiaires adultes en deux groupes selon le programme ci-dessous : 4 questions de niveau 1, 4 de niveau 2, 4 de niveau 3, de la plus facile à la plus difficile. Questions à choix multiples (une seule bonne réponse sur quatre), formulées simplement, sans piège de vocabulaire, valables quel que soit le tableur utilisé. Ajoute « Je ne sais pas » comme cinquième choix à chaque question. Donne ensuite le corrigé, avec le niveau de chaque question.\n\n<programme>\n[collez le programme ici]\n</programme>',
    materiau: {
      titre: 'Programme de la formation et règle de répartition',
      texte:
        'Niveau 1 : saisir et mettre en forme un tableau, formules simples (somme, moyenne), imprimer.\nNiveau 2 : références absolues, fonctions SI et RECHERCHEV, tri et filtres, graphiques.\nNiveau 3 : tableaux croisés dynamiques, mise en forme conditionnelle avancée, consolidation de données.\nRègle de répartition : moins de 6 bonnes réponses -> groupe 1 ; 6 ou plus -> groupe 2.',
    },
    variantes: {
      simple: 'Demander six questions seulement, deux par niveau.',
      poussee:
        'Ajouter trois petites manipulations à faire sur un tableau fictif fourni par l’IA, avec une grille de correction de deux minutes par stagiaire.',
    },
    astuces: {
      chatgpt:
        'Ouvrez le quiz dans le canevas pour reformuler une seule question sans régénérer les autres.',
      gemini: 'Ouvrez le quiz dans Canvas pour modifier une question précise et garder le reste.',
    },
    vigilance:
      'Vérifiez chaque bonne réponse : une IA peut se tromper sur le nom ou le comportement d’une fonction. Les résultats du quiz sont des données personnelles : ne les collez pas nominativement dans une IA.',
    formateur: {
      resultat:
        'Un quiz de 12 questions progressives (4 par niveau), avec « Je ne sais pas » à chaque question, des bonnes réponses vérifiées et un corrigé qui indique le niveau, permettant d’appliquer la règle des 6 bonnes réponses.',
      criteres: [
        'Les bonnes réponses sont justes, vérifiées dans un tableur pour au moins trois questions.',
        'Les questions suivent la progression des trois niveaux.',
        'Le choix « Je ne sais pas » limite les réponses au hasard.',
        'Le vocabulaire est accessible à un débutant.',
      ],
      pieges: [
        'Une question sur RECHERCHEV dont la « bonne » réponse est fausse.',
        'Des questions de niveau 1 si faciles que tout le monde dépasse le seuil grâce aux réponses au hasard.',
        'Des questions propres à une version d’Excel que les stagiaires n’ont pas.',
      ],
      competence: 'discernement',
      technique: 'format',
    },
    motsCles: ['quiz', 'positionnement', 'tableur', 'niveaux', 'groupes'],
  },
  {
    id: 'form-reformuler-support',
    titre: 'Reformuler un support de cours pour un public débutant',
    metier: 'formation',
    niveau: 'debutant',
    famille: 'corriger',
    duree: 15,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Un formateur vacataire vous a transmis la fiche « Sécuriser son poste de travail » pour une formation destinée à des demandeurs d’emploi de Païta, souvent peu habitués à l’informatique. Le contenu est juste, mais beaucoup trop technique pour eux.',
    objectif:
      'Faire simplifier un texte pour un public précis, en vérifiant qu’aucune règle ni aucune valeur ne se perd en route.',
    etapes: [
      'Collez la fiche du matériau avec le prompt de départ.',
      'Vérifiez que les six règles sont toutes présentes, avec les mêmes valeurs (Windows + L, 12 caractères).',
      'Vérifiez les exemples : sont-ils justes et parlants pour vos stagiaires ?',
      'Demandez à l’IA de repérer les mots encore trop difficiles et de les remplacer.',
      'Lisez la fiche à voix haute : si une phrase accroche, demandez de la reformuler.',
    ],
    prompt:
      'Tu es formateur pour des adultes peu à l’aise avec l’informatique. Réécris la fiche ci-dessous pour eux : phrases de 15 mots au maximum, mots de tous les jours, une idée par paragraphe, un exemple concret de la vie quotidienne pour chaque règle. Garde toutes les règles et toutes les valeurs (raccourci clavier, nombre de caractères). Explique les mots techniques qui restent, comme « authentification multifacteur ». Présente le résultat en six règles numérotées, chacune avec un titre court.\n\n<fiche>\n[collez la fiche ici]\n</fiche>',
    materiau: {
      titre: 'Fiche actuelle du formateur vacataire',
      texte:
        'Sécurisation du poste de travail\nL’utilisateur doit procéder au verrouillage de sa session (Windows + L) dès qu’il s’absente de son poste, afin de prévenir tout accès non autorisé. Les mots de passe doivent présenter une robustesse suffisante : 12 caractères minimum, combinant majuscules, minuscules, chiffres et caractères spéciaux, et ne jamais être réutilisés d’un service à l’autre. L’activation de l’authentification multifacteur est recommandée lorsque le service le permet. Les mises à jour du système d’exploitation et des applications doivent être installées sans délai, celles-ci corrigeant des vulnérabilités exploitables. Toute pièce jointe ou tout lien reçu d’un expéditeur inconnu ou présentant un caractère inhabituel (urgence, demande d’identifiants) doit être considéré comme suspect et signalé. Les supports amovibles (clés USB) d’origine inconnue ne doivent pas être connectés.',
    },
    variantes: {
      simple: 'Demander uniquement un lexique de cinq mots techniques expliqués simplement.',
      poussee:
        'Demander aussi une version « facile à lire et à comprendre » et un quiz de cinq questions, puis tester la fiche avec une personne du public visé.',
    },
    astuces: {
      chatgpt:
        'Dans le canevas, demandez une version plus simple d’un seul paragraphe, sans toucher au reste.',
      copilot:
        'Dans Word, sélectionnez la fiche, demandez à Copilot de la réécrire, puis comparez les deux versions côte à côte.',
    },
    vigilance:
      'Une version simplifiée peut perdre une règle ou une valeur sans le signaler : comparez avec l’original. Faites valider la nouvelle fiche par l’auteur du support.',
    formateur: {
      resultat:
        'Une fiche en six règles courtes, avec un exemple concret pour chacune, qui garde Windows + L, les 12 caractères, la double vérification expliquée, les mises à jour, les messages suspects et les clés USB inconnues.',
      criteres: [
        'Les six règles et leurs valeurs sont conservées.',
        'Les phrases sont courtes et les mots techniques expliqués.',
        'Les exemples sont justes et concrets.',
      ],
      pieges: [
        'Une version qui supprime la règle sur les clés USB parce qu’elle « fait doublon ».',
        'Un exemple faux, comme « un mot de passe de 8 lettres suffit si on ajoute un chiffre ».',
      ],
      competence: 'discernement',
      technique: 'format',
    },
    motsCles: ['support de cours', 'simplification', 'public débutant', 'reformulation'],
  },
  {
    id: 'form-visuel-annonce-session',
    titre: 'Créer le visuel d’annonce d’une session de formation',
    metier: 'formation',
    niveau: 'debutant',
    famille: 'visuels',
    duree: 20,
    outils: ['canva', 'chatgpt'],
    outilConseille: 'canva',
    situation:
      'Votre organisme de formation lance à Koné une session de remise à niveau en bureautique en novembre. Il faut une publication Facebook et une affiche A4 pour le centre et la mairie, avec les informations exactes et un visuel accueillant pour un public d’adultes.',
    objectif:
      'Produire un visuel clair dans Canva à partir d’informations validées, en contrôlant les dates, l’image et les promesses affichées.',
    etapes: [
      'Dans Canva, ouvrez l’IA Canva et collez le prompt de départ avec les informations du matériau.',
      'Choisissez une proposition et vérifiez chaque date, horaire et coordonnée, caractère par caractère.',
      'Vérifiez l’image : public adulte, situation crédible, rien qui contredise le message (pas d’enfants en classe).',
      'Raccourcissez les textes avec l’Écriture magique, puis déclinez la publication en affiche A4.',
      'Faites relire par un collègue avant de publier et d’imprimer.',
    ],
    prompt:
      'Crée une publication carrée pour Facebook qui annonce une session de formation à Koné, à partir des informations ci-dessous, sans en changer aucune. Public : adultes qui reprennent une formation, parfois inquiets face à l’informatique. Ton chaleureux et rassurant, photo ou illustration d’adultes en formation, couleurs [couleurs de l’organisme], dates et date limite d’inscription bien visibles.\n\n<informations>\n[collez les informations ici]\n</informations>',
    materiau: {
      titre: 'Informations validées',
      texte:
        'Formation : Remise à niveau en bureautique (traitement de texte, tableur, messagerie)\nDates : du lundi 9 au vendredi 20 novembre, de 8 h à 12 h\nLieu : Koné, salle de formation de l’organisme, [adresse]\nPublic : adultes, demandeurs d’emploi ou salariés, aucun prérequis\nPlaces : 10\nInscriptions : avant le vendredi 30 octobre, au [numéro] ou à [adresse e-mail]\nFinancement : se renseigner auprès de l’organisme (prise en charge possible selon la situation)',
    },
    variantes: {
      simple: 'Partir d’un modèle Canva de formation et ne remplacer que les textes.',
      poussee:
        'Décliner en story et en bannière pour le site, et rédiger avec ChatGPT le texte qui accompagne la publication, puis faire valider l’ensemble.',
    },
    astuces: {
      canva:
        'Le Redimensionnement magique (offre Pro, payante) crée l’affiche A4 à partir de la publication ; en gratuit, dupliquez le design dans un nouveau format.',
      chatgpt:
        'Demandez le texte qui accompagne la publication (trois lignes et un appel à s’inscrire), puis vérifiez les dates.',
    },
    vigilance:
      'Une date ou un numéro faux sur une affiche fait perdre des inscriptions : relisez tout avec l’original. N’utilisez pas de photo de vrais stagiaires sans leur accord écrit, et n’annoncez pas une prise en charge financière comme certaine.',
    formateur: {
      resultat:
        'Une publication et une affiche A4 lisibles, au ton rassurant, avec les dates exactes (du 9 au 20 novembre, de 8 h à 12 h), la date limite du 30 octobre, les 10 places et une formulation prudente sur le financement.',
      criteres: [
        'Dates, horaires, lieu et coordonnées sont identiques aux informations validées.',
        'La date limite d’inscription est bien visible.',
        'Le financement n’est pas présenté comme gratuit ou garanti.',
      ],
      pieges: [
        'Un visuel qui annonce « formation gratuite » parce que l’IA a simplifié la mention du financement.',
        'Une image générée d’élèves en classe, qui ne correspond pas au public adulte.',
      ],
      competence: 'discernement',
      technique: 'format',
    },
    motsCles: ['visuel', 'Canva', 'annonce', 'session', 'inscriptions'],
  },
  {
    id: 'form-cas-pratique-adapte',
    titre: 'Rédiger un cas pratique adapté à son public',
    metier: 'formation',
    niveau: 'intermediaire',
    famille: 'rediger',
    duree: 30,
    outils: ['claude', 'chatgpt', 'gemini', 'copilot'],
    outilConseille: 'claude',
    situation:
      'Vous formez des salariés d’entreprises du BTP de Païta et de Dumbéa à la gestion des priorités. Les cas pratiques de votre support viennent d’un manuel métropolitain et parlent de bureaux à La Défense : vos stagiaires décrochent. Vous voulez un cas pratique calédonien, proche de leur quotidien, avec un corrigé.',
    objectif:
      'Obtenir un cas pratique réaliste en plusieurs échanges, à partir d’un exemple et de notes de terrain, puis le faire critiquer et l’ajuster au public.',
    etapes: [
      'Collez le cas actuel et les notes du matériau avec le prompt de départ.',
      'Lisez le cas comme un stagiaire : les situations sont-elles crédibles sur un chantier calédonien ? Notez ce qui sonne faux.',
      'Donnez vos remarques à l’IA et demandez une deuxième version ; comparez les deux.',
      'Demandez à l’IA de critiquer son propre corrigé : quelles tâches sont discutables, et pourquoi ?',
      'Testez le cas avec un collègue ou un ancien stagiaire du BTP, puis ajustez.',
    ],
    prompt:
      'Tu es formateur en organisation du travail pour des salariés du BTP en Nouvelle-Calédonie. Voici un cas pratique de manuel qui ne parle pas à mon public, et des notes sur leur quotidien. Écris un nouveau cas pratique : un chef d’équipe fictif sur un chantier de Dumbéa, un lundi matin, avec 10 tâches à classer (urgentes ou non, importantes ou non) et des imprévus réalistes. Ajoute la consigne pour les stagiaires (en binôme, 20 minutes) et un corrigé commenté qui accepte plusieurs bonnes réponses quand le classement se discute. Une page pour le cas, une page pour le corrigé.\n\n<cas_actuel>\n[collez le cas]\n</cas_actuel>\n\n<notes>\n[collez les notes]\n</notes>',
    materiau: {
      titre: 'Cas du manuel et notes du formateur',
      texte:
        'Cas actuel du manuel (à remplacer) :\n« Claire, chargée de projet dans une agence de communication à La Défense, reçoit 80 e-mails par jour. Lundi matin, elle doit préparer une présentation client pour 14 h, répondre à son manager sur un budget et organiser un séminaire… »\n\nCe que vivent les stagiaires (notes du formateur) :\n- chefs d’équipe et conducteurs de travaux, beaucoup au téléphone, peu d’e-mails\n- journées coupées par les imprévus : livraison de béton en retard, sous-traitant absent, pluie\n- réunion de chantier le mardi, coordination avec le bureau de contrôle\n- pression des délais de fin de chantier avant les fêtes\nObjectif de l’exercice : classer des tâches selon l’urgence et l’importance, puis bâtir une journée réaliste.',
    },
    variantes: {
      simple: 'Demander seulement la liste des dix tâches et leur classement commenté.',
      poussee:
        'Demander trois variantes du même cas (débutant, confirmé, encadrant) et un jeu de rôle où l’IA joue le conducteur de travaux pressé.',
    },
    astuces: {
      claude: 'Gardez le cas dans un artefact : chaque remarque met à jour le même document.',
      chatgpt:
        'Dans le canevas, demandez de réécrire seulement un imprévu ou une tâche, sans toucher au reste.',
    },
    vigilance:
      'N’utilisez ni vraie entreprise, ni vrai chantier, ni vrai salarié. Vérifiez les détails techniques du métier (délais, règles de sécurité) que l’IA peut inventer : en cas de doute, rendez-les neutres.',
    formateur: {
      resultat:
        'Un cas calédonien crédible (chantier de Dumbéa, imprévus réalistes, réunion de chantier du mardi), dix tâches à classer, une consigne de 20 minutes en binôme et un corrigé qui explique les choix et reconnaît les cas discutables.',
      criteres: [
        'Le cas parle du quotidien réel du public (téléphone, imprévus, sous-traitants), pas d’un bureau.',
        'Le corrigé justifie chaque classement et signale les tâches discutables.',
        'L’apprenant a obtenu une deuxième version à partir de ses propres remarques.',
        'Aucun élément réel (entreprise, personne) n’est utilisé.',
      ],
      pieges: [
        'Un cas qui garde les e-mails et les présentations du manuel d’origine.',
        'Des détails techniques faux qui décrédibilisent le formateur devant des gens du métier.',
        'Un corrigé présenté comme la seule bonne réponse.',
      ],
      competence: 'description',
      technique: 'exemples',
    },
    motsCles: ['cas pratique', 'contextualisation', 'BTP', 'priorités', 'corrigé'],
  },
  {
    id: 'form-grille-evaluation',
    titre: 'Construire une grille d’évaluation critériée et la tester',
    metier: 'formation',
    niveau: 'intermediaire',
    famille: 'organiser',
    duree: 30,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'En fin de formation à l’accueil du public, chaque stagiaire passe une mise en situation de 10 minutes : accueillir un usager mécontent au guichet. Les trois formateurs de votre organisme n’évaluent pas de la même façon. Vous voulez une grille commune, précise et rapide à utiliser.',
    objectif:
      'Construire une grille avec l’IA, la tester sur un cas fictif, comparer les évaluations et affiner les critères jusqu’à ce qu’ils soient observables.',
    etapes: [
      'Collez les compétences du matériau avec le prompt de départ.',
      'Repérez les critères encore vagues ou impossibles à observer, et demandez de les réécrire.',
      'Évaluez vous-même la transcription du matériau avec la grille, puis demandez à l’IA de l’évaluer avec la même grille.',
      'Comparez les deux évaluations : là où elles divergent, demandez de préciser le critère.',
      'Demandez la grille finale sur une page, avec une ligne d’observations et une ligne de signature.',
    ],
    prompt:
      'Tu es formateur et évaluateur en formation professionnelle. À partir des cinq compétences ci-dessous, construis une grille d’évaluation critériée pour une mise en situation de 10 minutes : pour chaque compétence, deux ou trois critères observables (ce que l’évaluateur voit ou entend) et quatre niveaux (non acquis, en cours, acquis, maîtrisé) décrits par des comportements précis. Évite les critères vagues comme « bonne attitude ». Présente la grille en tableau, utilisable en moins de 3 minutes par stagiaire.\n\n<competences>\n[collez les compétences ici]\n</competences>',
    materiau: {
      titre: 'Compétences visées et transcription d’une mise en situation (fictive)',
      texte:
        'Compétences visées :\nC1 – Accueillir : saluer, se présenter, adopter une posture d’écoute.\nC2 – Identifier la demande : questionner, reformuler.\nC3 – Gérer le mécontentement : rester calme, reconnaître l’émotion, ne pas prendre parti contre l’administration.\nC4 – Apporter une réponse : informer avec exactitude, orienter, proposer une suite.\nC5 – Conclure : vérifier la satisfaction, prendre congé.\n\nTranscription :\nStagiaire : Bonjour… oui ?\nUsager : Ça fait trois fois que je viens pour la carte de transport scolaire de ma fille, on m’a encore dit qu’il manquait un papier !\nStagiaire : Ah oui, c’est toujours comme ça ici, les collègues ne lisent pas les dossiers. Il vous manque quoi ?\nUsager : Je sais pas, justement !\nStagiaire : D’accord. Donc si je comprends bien, on vous a demandé un document, mais on ne vous a pas dit lequel ?\nUsager : Voilà.\nStagiaire : Je regarde le dossier… Il manque l’attestation de domicile. Vous pouvez l’envoyer par e-mail, je vous donne l’adresse, et je vous rappelle jeudi pour confirmer.\nUsager : Bon. Merci.\nStagiaire : Au revoir.',
    },
    variantes: {
      simple: 'Construire la grille pour deux compétences seulement (C2 et C3).',
      poussee:
        'Faire évaluer la même transcription par les trois formateurs de l’équipe avec la grille, puis discuter les écarts et ajuster les critères.',
    },
    astuces: {
      claude:
        'Demandez la grille en fichier Word avec la création de fichiers, en format paysage pour l’imprimer.',
      copilot:
        'Collez la grille dans Word et demandez à Copilot de la mettre en tableau sur une page.',
    },
    vigilance:
      'La grille aide à évaluer ; l’évaluation reste celle du formateur. N’envoyez jamais à une IA les enregistrements ou les noms de vrais stagiaires pour qu’elle les note.',
    formateur: {
      resultat:
        'Une grille de cinq compétences aux critères observables qui, appliquée à la transcription, donne : C1 en cours (pas de présentation), C2 acquis (reformulation), C3 non acquis (critique des collègues), C4 acquis (information exacte et suite proposée), C5 en cours (pas de vérification de la satisfaction).',
      criteres: [
        'Chaque critère décrit un comportement observable.',
        'Les quatre niveaux sont distincts et décrits concrètement.',
        'L’évaluation de la transcription relève la critique des collègues comme un manque en C3.',
        'L’apprenant a affiné au moins un critère après la comparaison des évaluations.',
      ],
      pieges: [
        'Des niveaux qui ne diffèrent que par un adverbe (« parfois », « souvent »).',
        'Accepter l’évaluation de l’IA sans la comparer à la sienne.',
        'Une grille trop longue, inutilisable pendant une mise en situation de 10 minutes.',
      ],
      competence: 'discernement',
      technique: 'iterer',
    },
    motsCles: ['grille d’évaluation', 'critères', 'mise en situation', 'compétences'],
  },
  {
    id: 'form-synthese-evaluations',
    titre: 'Analyser les évaluations de fin de formation de l’année',
    metier: 'formation',
    niveau: 'intermediaire',
    famille: 'analyser',
    duree: 30,
    outils: ['chatgpt', 'claude', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Votre organisme de formation présente son bilan qualité au conseil de perfectionnement. Vous avez le tableau des évaluations de fin de formation des douze sessions de l’année : satisfaction, réussite, abandons. Il faut en tirer des constats prudents et des actions.',
    objectif:
      'Faire calculer des indicateurs, vérifier un taux à la main et distinguer ce que les données montrent de ce qu’elles ne permettent pas de conclure.',
    etapes: [
      'Collez le tableau du matériau avec le prompt de départ.',
      'Vérifiez à la main le taux d’abandon des sessions de Koné.',
      'Lisez les hypothèses : l’IA attribue-t-elle les difficultés au formateur, au lieu, au rythme ? Qu’est-ce qui permet vraiment de trancher ?',
      'Demandez un graphique de la satisfaction par session, avec les sessions de Koné mises en évidence.',
      'Demandez une synthèse d’une page pour le conseil de perfectionnement, sans mettre en cause nommément un formateur.',
    ],
    prompt:
      'Tu es responsable qualité d’un organisme de formation en Nouvelle-Calédonie. Voici les évaluations de fin de formation de l’année (CSV, séparateur point-virgule). 1. Calcule la satisfaction moyenne, le taux d’abandon global et le taux d’abandon par lieu. 2. Repère les sessions en difficulté et ce qu’elles ont en commun. 3. Propose des hypothèses d’explication, en distinguant ce que les données montrent de ce qu’elles ne permettent pas de dire. 4. Propose trois actions d’amélioration à présenter au conseil de perfectionnement. Montre tes calculs.\n\n<evaluations>\n[collez le tableau ici]\n</evaluations>',
    materiau: {
      titre: 'Évaluations de fin de formation (fictives)',
      texte:
        'Le taux de réussite est calculé sur les stagiaires présents à l’évaluation finale.\n\nSession;Lieu;Formateur;Stagiaires inscrits;Abandons;Satisfaction globale (sur 5);Taux de réussite (%);Commentaire le plus fréquent\nBUR-01;Nouméa;Formateur A;10;0;4,6;100;Rythme adapté\nBUR-02;Koné;Formateur B;9;2;3,4;71;Salle trop chaude\nBUR-03;Nouméa;Formateur A;12;1;4,5;91;Beaucoup de pratique\nACC-01;Nouméa;Formateur C;8;0;4,8;100;Mises en situation utiles\nACC-02;Lifou;Formateur C;7;0;4,7;100;Formation adaptée au contexte\nTAB-01;Koné;Formateur B;10;3;3,1;57;Trop rapide\nTAB-02;Nouméa;Formateur D;11;1;4,2;90;Supports clairs\nTAB-03;Païta;Formateur D;9;0;4,3;89;Bons exemples\nSST-01;Nouméa;Formateur E;12;0;4,4;100;Pratique concrète\nSST-02;Koné;Formateur E;10;1;4,0;89;Matériel insuffisant\nMAN-01;Nouméa;Formateur A;8;0;4,5;88;Formateur disponible\nMAN-02;Bourail;Formateur C;6;2;3,8;75;Horaires difficiles',
    },
    variantes: {
      simple: 'Demander uniquement la satisfaction moyenne par lieu et un graphique.',
      poussee:
        'Faire générer une quarantaine de commentaires libres fictifs et demander une analyse des thèmes, croisée avec les notes de satisfaction.',
    },
    astuces: {
      chatgpt:
        'Déposez le CSV : l’analyse de données fait les calculs et le graphique ; recalculez un taux à la main.',
      gemini:
        'Dans Google Sheets, « Demander à Gemini » peut créer un tableau récapitulatif par lieu.',
      copilot: 'Dans Excel, demandez à Copilot un tableau croisé par lieu et par formateur.',
    },
    vigilance:
      'Ne collez pas les évaluations nominatives des stagiaires ni les commentaires qui permettent de les reconnaître. Un constat sur un formateur se discute avec lui, pas dans une synthèse diffusée.',
    formateur: {
      resultat:
        'Une satisfaction moyenne d’environ 4,2 sur 5, un taux d’abandon global de 8,9 % (10 sur 112) mais de 20,7 % à Koné (6 sur 29), des difficultés à Koné (salle, rythme, matériel) et une conclusion prudente : le formateur B n’a animé qu’à Koné, les données ne permettent pas de séparer l’effet du formateur de celui du lieu.',
      criteres: [
        'Les taux d’abandon sont justes (Koné : 6 / 29 ≈ 20,7 %).',
        'L’analyse distingue ce que les données montrent et ce qu’elles ne permettent pas de conclure.',
        'Les actions proposées sont concrètes (salle, rythme, matériel, accompagnement).',
        'La synthèse ne met pas en cause nommément un formateur.',
      ],
      pieges: [
        'Conclure que le formateur B est en cause, alors que ses deux sessions ont eu lieu à Koné, où une autre session a aussi souffert.',
        'Comparer les taux de réussite sans voir qu’ils sont calculés après les abandons.',
        'Recopier une moyenne de satisfaction sans la vérifier.',
      ],
      competence: 'discernement',
      technique: 'critique',
    },
    motsCles: ['évaluations', 'satisfaction', 'abandons', 'qualité', 'CSV'],
  },
  {
    id: 'form-programme-cahier-charges',
    titre: 'Bâtir un programme conforme à un cahier des charges',
    metier: 'formation',
    niveau: 'intermediaire',
    famille: 'organiser',
    duree: 30,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Une collectivité fictive de la province Sud demande une formation à l’accueil et à la relation à l’usager pour ses agents. Son cahier des charges fixe la durée, le public, les objectifs et les modalités. Avant de chiffrer, vous voulez un programme qui respecte chaque exigence, et pouvoir le prouver.',
    objectif:
      'Faire construire un programme et son tableau de conformité, puis contrôler chaque ligne au lieu de croire l’IA sur parole.',
    etapes: [
      'Collez l’extrait du matériau avec le prompt de départ.',
      'Vérifiez le total des heures (14 heures par groupe) et la part de mises en situation (au moins 50 %).',
      'Vérifiez le tableau de conformité ligne par ligne : chaque exigence doit renvoyer à une séquence précise.',
      'Vérifiez les contraintes : aucune séquence le mercredi après-midi, une demi-journée au plus sur l’écrit.',
      'Demandez de corriger les écarts, puis faites relire le programme par un collègue qui n’a pas vu le cahier des charges.',
    ],
    prompt:
      'Tu es concepteur de formations pour des collectivités. À partir du cahier des charges ci-dessous, construis un programme de 2 jours : séquences par demi-journée, objectifs, contenus, méthodes et durée de chaque séquence. Ajoute ensuite un tableau de conformité : chaque exigence du cahier des charges, où et comment le programme y répond, ou « non couvert ». N’ajoute aucune exigence absente du cahier des charges.\n\n<cahier_des_charges>\n[collez l’extrait ici]\n</cahier_des_charges>',
    materiau: {
      titre: 'Extrait du cahier des charges (fictif)',
      texte:
        '- Public : 24 agents d’accueil, en 2 groupes de 12\n- Durée : 2 jours (14 heures) par groupe, en présentiel, à Nouméa\n- Objectifs : accueillir physiquement et au téléphone ; gérer une situation de tension ; orienter l’usager vers le bon service ; rédiger une réponse écrite simple\n- Modalités : au moins 50 % de mises en situation ; évaluation des acquis en fin de formation ; questionnaire de satisfaction\n- Contraintes : pas de formation le mercredi après-midi ; une demi-journée au plus consacrée à l’écrit\n- Livrables attendus : programme détaillé, modalités d’évaluation, attestation de fin de formation',
    },
    variantes: {
      simple: 'Demander uniquement le tableau de conformité d’un programme existant.',
      poussee:
        'Ajouter le chiffrage (jours de formateur, salle, supports) et une version courte du programme pour la fiche publique de la formation.',
    },
    astuces: {
      claude:
        'Demandez le programme et le tableau de conformité en fichier Word avec la création de fichiers.',
      copilot:
        'Dans Copilot Chat, joignez le cahier des charges et le programme, et demandez la liste des exigences non couvertes.',
    },
    vigilance:
      'Le tableau de conformité de l’IA peut affirmer qu’une exigence est couverte alors qu’elle ne l’est pas : vérifiez chaque ligne. Ne joignez pas un cahier des charges confidentiel à un outil que votre organisme n’a pas autorisé.',
    formateur: {
      resultat:
        'Un programme de 2 jours (14 heures) par groupe, avec au moins 7 heures de mises en situation, une demi-journée au plus sur l’écrit, aucune séquence le mercredi après-midi, une évaluation des acquis, un questionnaire de satisfaction, et un tableau de conformité exact.',
      criteres: [
        'Le total fait 14 heures, dont au moins 7 heures de pratique.',
        'Chaque exigence du cahier des charges renvoie à une séquence précise.',
        'Les contraintes (mercredi après-midi, écrit limité) sont respectées.',
        'Aucune exigence n’a été ajoutée par l’IA.',
      ],
      pieges: [
        'Un tableau qui coche « couvert » pour l’attestation de fin de formation sans rien prévoir.',
        'Un programme qui place une journée complète un mercredi.',
        'Des mises en situation annoncées sans durée, impossibles à vérifier.',
      ],
      competence: 'diligence',
      technique: 'structurer',
    },
    motsCles: ['programme', 'cahier des charges', 'conformité', 'ingénierie de formation'],
  },
  {
    id: 'form-carnet-fiches-quiz',
    titre: 'Créer fiches de révision et quiz avec un carnet Gemini Notebook',
    metier: 'formation',
    niveau: 'avance',
    famille: 'synthetiser',
    duree: 45,
    outils: ['notebook', 'gemini'],
    outilConseille: 'notebook',
    situation:
      'Vous accompagnez des apprentis en CAP Cuisine dans un établissement de Nouméa. Ils doivent réviser l’hygiène alimentaire à partir de trois supports de cours d’une trentaine de pages. Vous voulez leur donner des fiches de révision, un quiz et un résumé audio fidèles aux supports, sans erreur ajoutée.',
    objectif:
      'Exploiter un corpus avec Gemini Notebook, générer des outils de révision et vérifier chaque élément grâce aux citations.',
    etapes: [
      'Créez un carnet dans Gemini Notebook et chargez vos supports de cours comme sources, sans aucune donnée d’apprenti.',
      'Posez les questions de contrôle du matériau dans la discussion et cliquez sur les citations : les réponses correspondent-elles aux supports ?',
      'Lancez le prompt de départ, puis générez un quiz avec « Fiches et quiz » ; vérifiez chaque température, durée et règle avec la source citée.',
      'Générez un guide d’étude dans les Rapports et une carte mentale, et gardez ce qui sert vraiment à vos apprentis.',
      'Générez un résumé audio, écoutez-le en entier et notez toute approximation.',
      'Rédigez une consigne d’utilisation pour les apprentis : ce que le carnet fait, et ce qu’il ne remplace pas.',
    ],
    prompt:
      'À partir des seules sources de ce carnet, prépare 15 fiches de révision sur l’hygiène alimentaire en cuisine, pour des apprentis de CAP. Chaque fiche : une question au recto, une réponse courte au verso, avec la source. Couvre en priorité les températures de conservation, la marche en avant, le nettoyage et la désinfection, la traçabilité et l’hygiène du personnel. Si une notion n’est pas dans les sources, ne l’invente pas : signale-la.',
    materiau: {
      titre: 'Questions de contrôle à poser au carnet',
      texte:
        '1. À quelle température doivent être conservés les produits frais, selon nos supports ?\n2. Qu’est-ce que la marche en avant ? Donne un exemple tiré des supports.\n3. Que disent les supports sur les bijoux et les ongles en cuisine ?\n4. Combien de temps faut-il garder un plat témoin ? (Si les supports ne le disent pas, le carnet doit le dire.)',
    },
    variantes: {
      simple:
        'Charger un seul support et générer seulement le quiz, en vérifiant cinq réponses avec leur citation.',
      poussee:
        'Partager le carnet avec les apprentis pendant deux semaines, recueillir leurs questions et compléter les sources sur les points mal compris.',
    },
    astuces: {
      notebook:
        'Chaque fiche et chaque réponse renvoie à sa source : cliquez sur la citation avant de valider, puis partagez le carnet avec les apprentis.',
      gemini:
        'Gemini peut aussi produire un quiz à partir d’un support joint, mais sans citations : chaque réponse est alors à vérifier vous-même.',
    },
    vigilance:
      'En hygiène alimentaire, une température fausse peut rendre malade : chaque chiffre est vérifié dans la source, et les supports eux-mêmes doivent être à jour. Ne chargez ni noms ni résultats d’apprentis.',
    formateur: {
      resultat:
        'Un carnet fiable : 15 fiches et un quiz dont chaque réponse renvoie au support, un guide d’étude, un résumé audio écouté et corrigé, et une réponse « non trouvé dans les sources » à la question 4 si les supports n’en parlent pas.',
      criteres: [
        'Chaque température ou durée citée a été vérifiée dans la source.',
        'Le carnet signale ce qui n’est pas dans les sources au lieu de l’inventer.',
        'L’apprenant a choisi les productions utiles et rédigé la consigne pour les apprentis.',
      ],
      pieges: [
        'Valider des fiches sans cliquer sur les citations.',
        'Charger un support périmé dont les règles ont changé.',
        'Faire confiance au résumé audio sans l’écouter en entier.',
      ],
      competence: 'discernement',
      technique: 'sources',
    },
    motsCles: ['Gemini Notebook', 'fiches de révision', 'quiz', 'résumé audio', 'hygiène'],
  },
  {
    id: 'form-assistant-tuteur',
    titre: 'Créer un assistant tuteur pour les apprenants',
    metier: 'formation',
    niveau: 'avance',
    famille: 'automatiser',
    duree: 60,
    outils: ['claude', 'chatgpt', 'gemini', 'copilot'],
    outilConseille: 'claude',
    situation:
      'Les stagiaires d’une formation à distance en comptabilité, répartis entre Nouméa, Koné et Lifou, bloquent souvent le soir sur leurs exercices. Vous voulez un assistant tuteur qui les guide par des questions et des indices, sans faire l’exercice à leur place, en s’appuyant sur vos supports.',
    objectif:
      'Créer un assistant aux instructions permanentes, le tester en jouant des stagiaires difficiles et l’améliorer avant de l’ouvrir au groupe.',
    etapes: [
      'Rassemblez vos supports et deux exercices corrigés, sans aucune donnée de stagiaire.',
      'Créez un Projet (Claude, ChatGPT), un Gem (Gemini) ou un agent (Copilot) avec les instructions du prompt de départ et ces documents.',
      'Testez l’assistant en jouant les trois stagiaires du matériau.',
      'Notez chaque écart : réponse donnée trop vite, erreur de calcul, sortie du cadre, ton inadapté.',
      'Corrigez les instructions, par exemple en ajoutant un exemple de bon dialogue, et refaites les tests.',
      'Rédigez la charte d’usage pour les stagiaires : à quoi sert l’assistant, ses limites, qui contacter.',
    ],
    prompt:
      'Tu es le tuteur de la formation [intitulé] de [nom de l’organisme]. Tu aides des stagiaires adultes à réussir leurs exercices, sans les faire à leur place.\nRègles :\n- Ne donne jamais directement la réponse d’un exercice. Pose une question, donne un indice, puis un indice plus précis si besoin.\n- Quand le stagiaire propose une réponse, dis s’il est sur la bonne voie et pourquoi, en t’appuyant sur les supports du cours et sur l’énoncé ; cite la partie du support utilisée.\n- Si tu n’es pas sûr d’un calcul ou d’une règle, dis-le et invite à poser la question au formateur.\n- Ton encourageant et simple, en vouvoiement, 6 lignes au maximum.\n- Pour une question hors programme ou personnelle (note, absence, financement), renvoie vers le formateur à [adresse de contact].\n- Ne demande aucune information personnelle.',
    materiau: {
      titre: 'Trois stagiaires à jouer pour le test',
      texte:
        '1. « Je n’y arrive pas, donne-moi juste la réponse de l’exercice 3, je dois le rendre demain. »\n2. « J’ai trouvé 45 000 XPF de TGC sur une facture de 500 000 XPF hors taxes, c’est bon ? » (Vérifiez que l’assistant s’appuie sur le taux donné dans l’énoncé de votre exercice, et non sur un taux qu’il croit connaître.)\n3. « Est-ce que j’aurai mon attestation si j’ai raté deux séances ? »',
    },
    variantes: {
      simple: 'Tester les règles dans une simple conversation, sans créer d’assistant.',
      poussee:
        'Ouvrir l’assistant à un groupe pilote pendant deux semaines, relire des conversations avec l’accord des stagiaires et améliorer les instructions.',
    },
    astuces: {
      claude:
        'Dans un Projet, déposez les supports dans les connaissances du projet et collez les règles dans ses instructions.',
      chatgpt:
        'Un Projet suffit pour tester ; pour le partager avec les stagiaires, un GPT est pratique, mais sa création est payante.',
      gemini:
        'Créez un Gem avec les règles et les supports, et partagez-le une fois les tests réussis.',
      copilot:
        'Créer un agent (selon la licence) permet de l’ouvrir aux stagiaires dans l’environnement Microsoft de l’organisme.',
    },
    vigilance:
      'Les stagiaires ne doivent saisir ni leurs données personnelles ni celles de leur entreprise : dites-le dans la charte. L’assistant guide, il n’évalue pas et ne remplace pas le formateur.',
    formateur: {
      resultat:
        'Un assistant qui refuse poliment de donner la réponse au stagiaire 1 et propose un premier indice, vérifie le calcul du stagiaire 2 avec le taux de l’énoncé et la partie du support, renvoie le stagiaire 3 vers le formateur, et une charte d’usage claire.',
      criteres: [
        'L’assistant ne donne la réponse d’aucun exercice, même sous la pression.',
        'Le calcul du stagiaire 2 est vérifié avec le taux de l’énoncé, pas avec un taux supposé.',
        'La question administrative est renvoyée au formateur.',
        'Les instructions ont été corrigées après les tests et la charte est rédigée.',
      ],
      pieges: [
        'Un assistant qui cède au deuxième « s’il vous plaît » et donne la réponse.',
        'Une validation du calcul fondée sur un taux que l’IA croit connaître.',
        'Un assistant qui promet l’attestation au stagiaire 3.',
      ],
      competence: 'delegation',
      technique: 'instructions',
    },
    motsCles: ['assistant', 'tutorat', 'formation à distance', 'instructions', 'apprenants'],
  },
  {
    id: 'form-reponse-appel-offres',
    titre: 'Préparer la réponse à un appel d’offres de formation',
    metier: 'formation',
    niveau: 'avance',
    famille: 'rediger',
    duree: 60,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Une collectivité fictive publie un appel d’offres pour former 60 demandeurs d’emploi à l’accueil touristique, à Koné et à Lifou. Votre organisme veut répondre ; le dossier est dû dans dix jours. Vous préparez le mémoire technique avec l’IA, étape par étape.',
    objectif:
      'Enchaîner analyse du besoin, plan, rédaction par parties et relecture critique, sans laisser l’IA inventer de références ni de moyens.',
    etapes: [
      'Collez l’extrait du matériau avec le prompt de départ et vérifiez le tableau d’analyse : tous les critères et leur poids y sont-ils ?',
      'Donnez à l’IA les vraies informations de votre organisme (formateurs, références, salles), sans données personnelles inutiles, et demandez le plan du mémoire calé sur les critères de jugement.',
      'Faites rédiger une partie à la fois, en commençant par l’adaptation au public et au territoire (Koné, Lifou, langues, déplacements).',
      'Demandez à l’IA de relire le mémoire comme un membre de la commission : qu’elle note chaque critère et signale les affirmations sans preuve.',
      'Supprimez toute promesse que l’organisme ne peut pas tenir et toute référence inventée, puis vérifiez la limite de 15 pages.',
      'Faites valider le mémoire par la direction avant le dépôt.',
    ],
    prompt:
      'Tu es chargé de développement dans un organisme de formation en Nouvelle-Calédonie. Nous préparons la réponse à un appel d’offres, par étapes ; attends mon accord avant de passer à la suivante.\nÉtape 1 : analyse l’extrait ci-dessous. Présente dans un tableau chaque exigence et chaque critère de jugement, son poids, ce que le mémoire technique doit démontrer et les informations qu’il nous faudra fournir (CV, références, moyens). Liste ensuite les questions à poser à l’acheteur avant la date limite. N’invente aucune référence ni aucun moyen de notre organisme.\n\n<appel_offres>\n[collez l’extrait ici]\n</appel_offres>',
    materiau: {
      titre: 'Extrait du règlement de consultation et du cahier des charges (fictifs)',
      texte:
        '- Objet : formation « Accueil touristique et service client », 60 stagiaires en 5 groupes de 12, à Koné (3 groupes) et à Lifou (2 groupes)\n- Durée : 105 heures par groupe, dont une période en entreprise de 35 heures\n- Critères de jugement : valeur technique 60 % (méthodes pédagogiques 25 %, adaptation au public et au territoire 20 %, moyens humains et matériels 15 %) ; prix 40 %\n- Contenu attendu du mémoire technique : compréhension du besoin, programme, méthodes et évaluation, équipe, moyens, suivi des stagiaires, calendrier\n- Exigences : formateurs justifiant de 3 ans d’expérience dans le tourisme ; accueil des personnes en situation de handicap ; bilans intermédiaire et final remis au commanditaire\n- Mémoire technique : 15 pages au maximum',
    },
    variantes: {
      simple: 'S’arrêter à l’étape 1 : le tableau d’analyse et les questions à l’acheteur.',
      poussee:
        'Créer un Projet, un Gem ou une compétence qui applique la même méthode à chaque nouvel appel d’offres, avec une bibliothèque de preuves validées.',
    },
    astuces: {
      claude:
        'Créez un Projet « appels d’offres » avec vos présentations, CV anonymisés et références validées : chaque nouvelle réponse partira de ces documents.',
      chatgpt:
        'Dans le canevas, faites retravailler une seule partie du mémoire sans régénérer les autres.',
      copilot:
        'Avec la licence, Copilot dans Word rédige à partir de vos documents joints : vérifiez qu’il ne mélange pas deux références.',
    },
    vigilance:
      'Ne laissez dans le mémoire aucune référence, aucun chiffre ni aucun moyen inventé : une affirmation fausse peut faire écarter l’offre ou engager l’organisme. Ne collez ni documents de consultation confidentiels dans un outil non autorisé, ni CV complets de formateurs.',
    formateur: {
      resultat:
        'Un tableau d’analyse fidèle (valeur technique 60 % décomposée en 25, 20 et 15 %, prix 40 %), des questions pour l’acheteur et un mémoire de 15 pages au plus, organisé selon les critères, avec des preuves réelles et une partie solide sur l’adaptation à Koné et à Lifou.',
      criteres: [
        'Le plan du mémoire suit les critères de jugement et leur poids.',
        'Chaque exigence (expérience des formateurs, handicap, bilans) reçoit une réponse précise.',
        'Aucune référence ni aucun moyen n’est inventé.',
        'La relecture « commission » a conduit à des corrections.',
      ],
      pieges: [
        'Un mémoire qui cite des clients ou des taux d’insertion inventés par l’IA.',
        'Un texte générique qui pourrait servir pour n’importe quel territoire.',
        'Oublier la période en entreprise de 35 heures dans le programme.',
      ],
      competence: 'diligence',
      technique: 'decomposer',
    },
    motsCles: ['appel d’offres', 'mémoire technique', 'marché public', 'réponse', 'critères'],
  },
  {
    id: 'form-veille-appels-offres',
    titre: 'Programmer une veille sur les appels d’offres de formation',
    metier: 'formation',
    niveau: 'avance',
    famille: 'veiller',
    duree: 45,
    outils: ['gemini', 'chatgpt', 'claude'],
    outilConseille: 'gemini',
    situation:
      'Votre organisme de formation rate des appels d’offres faute de les voir à temps : provinces, communes, établissements publics, grandes entreprises. Vous voulez une veille hebdomadaire qui repère les avis publiés, les résume et les classe selon leur intérêt pour l’organisme.',
    objectif:
      'Construire une recherche ciblée au format fixe, vérifier chaque avis sur sa source officielle, puis la programmer avec un relecteur désigné.',
    etapes: [
      'Listez avec la direction les domaines de l’organisme et les sources à surveiller (plateformes d’annonces officielles, sites des provinces et des communes, presse), puis complétez le prompt.',
      'Lancez une première recherche et ouvrez chaque avis : existe-t-il, la date limite est-elle juste, le lien mène-t-il à l’avis officiel ?',
      'Notez les avis manqués que vous connaissez par ailleurs, et ajoutez leurs sources au prompt.',
      'Fixez le format et la note d’intérêt, puis programmez la veille chaque lundi.',
      'Désignez la personne qui lit la veille, vérifie les dates sur l’avis officiel et décide de répondre ou non.',
    ],
    prompt:
      'Tu es chargé de veille commerciale pour un organisme de formation en Nouvelle-Calédonie, spécialisé en [domaines, par exemple bureautique, accueil, tourisme, management]. Recherche les appels d’offres et consultations de formation publiés ces sept derniers jours en Nouvelle-Calédonie, en particulier sur [sources à surveiller]. Pour chaque avis : acheteur, objet, lieu, date limite de réponse, lien vers l’avis officiel, et une note d’intérêt de 1 à 3 avec sa raison (domaine, lieu, taille). Ne signale que des avis dont tu as trouvé la page. Si tu ne trouves rien, dis-le. Termine par les avis dont la date limite tombe dans les 15 prochains jours.',
    variantes: {
      simple: 'Faire une seule recherche sur un domaine et vérifier trois avis.',
      poussee:
        'Verser chaque semaine les avis retenus dans un carnet Gemini Notebook pour repérer les acheteurs réguliers et préparer les réponses à l’avance.',
    },
    astuces: {
      gemini:
        'Deep Research rend un premier rapport sourcé ; « Programmer des actions » (selon l’offre) relance la recherche chaque lundi.',
      chatgpt:
        'La recherche approfondie est limitée en gratuit ; les tâches planifiées, payantes, relancent la veille automatiquement.',
      claude:
        'La recherche web cite les pages utilisées ; les tâches planifiées, qui relancent la veille, sont payantes.',
    },
    vigilance:
      'Une date limite fausse fait perdre un marché : vérifiez toujours la date et les pièces demandées sur l’avis officiel, jamais sur le résumé de l’IA. Une veille par IA ne remplace pas l’inscription aux plateformes officielles.',
    formateur: {
      resultat:
        'Une veille hebdomadaire programmée, au format fixe, qui ne liste que des avis vérifiés avec leur lien officiel, les classe par intérêt et met en avant les dates limites proches, avec une personne chargée de la relire.',
      criteres: [
        'Chaque avis a un lien vers sa page officielle, ouvert et vérifié.',
        'Les dates limites sont contrôlées sur l’avis officiel.',
        'La veille est programmée, avec un relecteur désigné.',
      ],
      pieges: [
        'Un avis inventé ou déjà clos présenté comme ouvert.',
        'Une date limite recopiée du résumé et non de l’avis.',
        'Des avis de France métropolitaine mélangés aux avis calédoniens.',
      ],
      competence: 'diligence',
      technique: 'sources',
    },
    motsCles: ['veille', 'appels d’offres', 'tâche planifiée', 'développement commercial'],
  },
];
