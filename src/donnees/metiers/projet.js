/**
 * Gestion de projet : cadrage, planning, risques, budget, comités de pilotage, suivi, bilan.
 * Le « client » est le commanditaire du projet.
 * Toutes les personnes, entreprises, adresses et sommes sont fictives.
 */

export const vocabulaire = {
  structure: { g: 'm', s: 'bureau de gestion de projets', p: 'bureaux de gestion de projets' },
  client: { g: 'm', s: 'commanditaire', p: 'commanditaires' },
  partenaire: { g: 'm', s: 'prestataire', p: 'prestataires' },
  documentCourant: { g: 'f', s: 'note de cadrage', p: 'notes de cadrage' },
  documentLong: { g: 'm', s: 'cahier des charges', p: 'cahiers des charges' },
  reunion: { g: 'm', s: 'comité de pilotage', p: 'comités de pilotage' },
  offre: {
    g: 'f',
    s: 'formation à la gestion de projet proposée aux associations de la province Nord',
    p: 'formations à la gestion de projet proposées aux associations de la province Nord',
  },
  poste: { g: 'm', s: 'chargé de projet', p: 'chargés de projet' },
  evenement: {
    g: 'm',
    s: 'lancement officiel du projet',
    p: 'lancements officiels du projet',
  },
  visuel: { g: 'f', s: 'affiche d’information', p: 'affiches d’information' },
  domaine: 'la gestion de projet',
  motifReclamation: 'un retard de livraison annoncé trop tard et un budget qui dépasse l’enveloppe',
  donnees: 'le tableau de suivi des tâches du projet, avec leurs dates et leur avancement',
  colonnes:
    'Tâche;Responsable;Début prévu;Fin prévue;Avancement (%);Budget prévu (XPF);Dépensé (XPF)',
  indicateur: 'le taux de tâches terminées dans les délais prévus',
  veille: 'les appels à projets et les financements publics ouverts en Nouvelle-Calédonie',
  sourcesVeille:
    'les sites des provinces, du gouvernement de la Nouvelle-Calédonie et de la CCI, ainsi que la presse locale',
  jargon: 'le chemin critique, les jalons et la marge d’un planning',
  procedure: 'la clôture d’un projet et sa remise au service qui l’exploitera',
  situationTendue:
    'un commanditaire qui réclame une fonctionnalité de plus alors que le budget et les délais sont déjà épuisés',
  donneesSensibles:
    'les budgets, les offres des prestataires, les noms et les coordonnées des équipes et des commanditaires',
  corpus: 'les comptes rendus, le planning et les rapports d’avancement du projet',
  publicCible: 'les responsables et les bénévoles des associations de la province Nord',
  etranger: 'un sous-traitant australien qui intervient sur le projet',
  themeFormation: 'la conduite d’un projet, du cadrage au bilan',
  tacheRepetitive: 'la rédaction du point d’avancement hebdomadaire envoyé au commanditaire',
  planning: 'le planning des interventions de trois prestataires sur un même chantier',
  comparaison: 'deux logiciels de gestion de projet en ligne pour l’équipe',
};

export const exercices = [
  {
    id: 'projet-note-cadrage-email',
    titre: 'Rédiger une note de cadrage à partir de l’e-mail d’un commanditaire',
    metier: 'projet',
    niveau: 'debutant',
    famille: 'rediger',
    duree: 20,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'copilot',
    situation:
      'Vous êtes chargée de projet dans une PME de Dumbéa. Le directeur vous confie le déménagement de l’agence de Païta et vous écrit un e-mail enthousiaste, mais flou. Avant de lancer quoi que ce soit, vous devez lui soumettre une note de cadrage qu’il pourra valider.',
    objectif:
      'Transformer un e-mail imprécis en note de cadrage d’une page, en faisant lister les manques plutôt que les combler.',
    etapes: [
      'Lisez l’e-mail du matériau et notez, sans l’IA, trois informations qui manquent pour lancer le projet.',
      'Collez l’e-mail dans votre outil d’IA avec le prompt de départ.',
      'Vérifiez que chaque chiffre et chaque date de la note figurent dans l’e-mail ; surlignez tout ce que l’IA a ajouté.',
      'Comparez la liste de « questions à poser au directeur » avec vos trois manques : lesquels l’IA a-t-elle oubliés ?',
      'Demandez une version courte de la note, en dix lignes, à joindre à votre réponse au directeur.',
    ],
    prompt:
      'Tu es chef de projet dans une PME de Dumbéa. Le directeur m’a envoyé l’e-mail ci-dessous pour lancer un projet. Rédige une note de cadrage d’une page en sept rubriques : contexte, objectifs, périmètre (inclus et exclu), livrables, parties prenantes, budget et calendrier, risques. Utilise uniquement les informations de l’e-mail. Pour tout ce qui manque ou reste flou, n’invente rien : écris « à confirmer ». Termine par la liste des questions à poser au directeur avant de lancer le projet. Ton sobre, phrases courtes.\n\n<email>\n[collez l’e-mail ici]\n</email>',
    materiau: {
      titre: 'E-mail du directeur',
      texte:
        'Objet : déménagement Païta\n\nBonjour,\n\nComme évoqué, il faut que l’agence de Païta déménage vers un local plus grand à Dumbéa, si possible avant les vacances de fin d’année. On est une vingtaine et on manque de place ; je voudrais aussi une vraie salle d’accueil pour les clients.\nJ’ai visité un local de 280 m² avec Dylan, de l’agence Immo Pacifique : le loyer m’a l’air raisonnable, à voir. Il faudra s’occuper du téléphone, d’internet et des meubles, je n’ai pas regardé.\nLe budget, je pense qu’on peut aller jusqu’à 8 millions de XPF, mais pas plus, sous réserve de l’accord de la comptabilité. Je ne veux pas que l’agence reste fermée plus de deux jours.\nJ’ai le conseil d’administration le 18 juin et j’aimerais lui présenter quelque chose.\n\nMarc Poadja\nDirecteur',
    },
    variantes: {
      simple: 'Ne demander que les objectifs, le périmètre et les questions à poser.',
      poussee:
        'Faire ajouter un tableau des parties prenantes (rôle, intérêt, niveau d’influence) et trois scénarios de calendrier, puis faire critiquer la note par une IA jouant le directeur financier.',
    },
    astuces: {
      copilot:
        'Dans Outlook, « Résumer » condense un échange long ; pour la note, « Copilot dans Word, Excel et PowerPoint » (selon la licence) la rédige directement dans votre modèle.',
      claude:
        'Demandez la note sous forme d’artefact : vous la retouchez rubrique par rubrique avant de l’envoyer.',
      chatgpt:
        'Ouvrez la note dans le canevas : vous pouvez demander de raccourcir une seule rubrique sans toucher aux autres.',
    },
    vigilance:
      'Retirez les noms de personnes et de l’agence immobilière avant de coller l’e-mail. Un montant de budget est une donnée interne : travaillez avec un compte professionnel.',
    formateur: {
      resultat:
        'Une note d’une page où le budget de 8 millions de XPF, la fermeture de deux jours au plus et la date du 18 juin sont repris tels quels, et où tout le reste (date du déménagement, périmètre du téléphone, des meubles, des archives, validation du loyer) est marqué « à confirmer » avec des questions précises.',
      criteres: [
        'Les chiffres et dates de la note sont identiques à l’e-mail.',
        'Les manques sont signalés « à confirmer », sans date de déménagement inventée.',
        'Le budget est présenté comme une limite sous réserve de la comptabilité, pas comme un budget validé.',
        'La liste de questions est précise et utilisable telle quelle (qui valide, quel périmètre, quelle date butoir).',
      ],
      pieges: [
        'Accepter une note qui fixe une date de déménagement ou un loyer que le directeur n’a jamais donnés.',
        'Présenter les 8 millions de XPF comme un budget validé alors qu’il manque l’accord de la comptabilité.',
        'Laisser l’IA affirmer que le local de 280 m² convient pour vingt personnes sans vérification.',
      ],
      competence: 'description',
      technique: 'format',
    },
    motsCles: ['note de cadrage', 'cadrage', 'commanditaire', 'déménagement', 'périmètre'],
  },
  {
    id: 'projet-fil-messages-actions',
    titre: 'Transformer un échange de messages en liste d’actions',
    metier: 'projet',
    niveau: 'debutant',
    famille: 'synthetiser',
    duree: 15,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'copilot',
    situation:
      'Vous coordonnez l’ouverture d’un point de vente à Koné. L’équipe échange toute la matinée sur la messagerie interne : personne ne sait plus qui doit faire quoi. Vous voulez en tirer une liste d’actions claire avant la réunion de 14 h.',
    objectif:
      'Extraire d’un fil de messages les actions, leurs responsables et leurs échéances, et repérer ce qui n’est pas décidé.',
    etapes: [
      'Lisez le fil du matériau et notez, sans l’IA, qui fait quoi.',
      'Collez-le dans votre outil d’IA avec le prompt de départ.',
      'Vérifiez le tableau : chaque ligne s’appuie-t-elle sur un message précis ?',
      'Repérez les actions dont le responsable ou l’échéance reste « à préciser », et celles qui dépendent d’une autre.',
      'Demandez l’e-mail de trois lignes qui confirmera ces actions à l’équipe.',
    ],
    prompt:
      'Tu es coordinateur de projet. Voici un fil de messages de l’équipe qui ouvre un point de vente à Koné. Extrais-en un tableau des actions avec les colonnes : action, responsable, échéance, dépend de, message d’origine. Les dates relatives (« jeudi », « lundi ») sont à convertir en date complète en partant du mardi 3 novembre 2026. N’invente aucun responsable ni aucune date : si l’information manque ou reste conditionnelle, écris « à préciser ». Après le tableau, liste séparément les décisions encore ouvertes et les incohérences que tu repères.\n\n<messages>\n[collez le fil ici]\n</messages>',
    materiau: {
      titre: 'Fil de messagerie du mardi 3 novembre 2026',
      texte:
        '08:12 Nadia : Pour Koné, le bail est signé, les clés arrivent le 16/11. Qui s’occupe de l’alarme et de la caisse ?\n08:30 Rémi : Je prends l’alarme, je vois la société de télésurveillance cette semaine.\n08:41 Nadia : Top. La caisse, c’est Josée ?\n09:02 Josée : Pas dispo avant jeudi, j’appelle le fournisseur jeudi. Mais il faut d’abord que quelqu’un valide le modèle de caisse avec la compta.\n09:15 Rémi : La compta, c’est Aurélie, elle est en congé jusqu’au 9.\n09:20 Nadia : OK on attend. Autre chose : les affiches pour l’inauguration, Teddy, tu peux faire un brouillon ?\n09:44 Teddy : Oui, brouillon lundi.\n10:05 Nadia : Et quelqu’un doit prévenir la mairie pour l’autorisation d’enseigne. Josée, tu t’en occupes ?\n10:30 Josée : Je regarde mais je ne promets rien.\n11:12 Rémi : Inauguration le 28/11 ou on décale ? À trancher avec Marc.',
    },
    variantes: {
      simple: 'Ne demander que la liste des actions, sans les décisions ouvertes.',
      poussee:
        'Ajouter un niveau de priorité à chaque action, puis faire rédiger les messages de rappel individuels et l’ordre du jour de la réunion de 14 h.',
    },
    astuces: {
      copilot:
        'Dans Copilot Chat, collez le fil ; pour une réunion Teams, comparez ensuite votre tableau au « Récapitulatif de réunion (Teams) » (licence Copilot).',
      claude:
        'Joignez le fil et demandez de citer le message d’origine de chaque action : vous vérifiez chaque ligne en quelques secondes.',
      gemini:
        'Demandez le tableau, puis exportez-le dans Google Sheets pour y ajouter une colonne « statut ».',
    },
    vigilance:
      'Un fil de messagerie contient des remarques sur les personnes et des informations internes : ne collez que les messages utiles, sans les noms réels si vous utilisez un compte personnel.',
    formateur: {
      resultat:
        'Un tableau de quatre actions : alarme (Rémi, cette semaine, échéance à préciser), appel au fournisseur de caisse (Josée, jeudi 5 novembre, mais conditionné à la validation d’Aurélie, absente jusqu’au 9), affiches (Teddy, lundi 9 novembre), autorisation d’enseigne (Josée, responsable non confirmé, échéance à préciser) et, à part, la date d’inauguration, décision encore ouverte à trancher avec Marc.',
      criteres: [
        'Le jeudi est converti en 5 novembre et le lundi en 9 novembre.',
        'L’action de la mairie n’a pas de responsable ferme : la réponse de Josée est signalée comme ambiguë.',
        'L’incohérence est relevée : Josée appelle le fournisseur jeudi 5, alors que la validation de la compta attend le retour d’Aurélie, en congé jusqu’au 9.',
        'La date de l’inauguration figure parmi les décisions ouvertes, pas parmi les actions.',
      ],
      pieges: [
        'Attribuer l’action « mairie » à Josée alors qu’elle n’a pas accepté.',
        'Oublier la dépendance entre la caisse et la validation de la compta.',
        'Convertir « cette semaine » en une date précise que personne n’a donnée.',
      ],
      competence: 'discernement',
      technique: 'structurer',
    },
    motsCles: ['actions', 'responsable', 'échéance', 'messagerie', 'point de vente', 'Koné'],
  },
  {
    id: 'projet-decouper-jardin-pedagogique',
    titre: 'Découper un projet associatif en tâches et en jalons',
    metier: 'projet',
    niveau: 'debutant',
    famille: 'organiser',
    duree: 20,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Une association de Pouembout a obtenu l’accord de principe de la province Nord pour financer un jardin pédagogique destiné aux écoles. Vous l’aidez comme chargé de mission : il faut transformer l’idée en tâches concrètes avant de réunir les bénévoles.',
    objectif:
      'Faire découper un projet en phases, tâches et jalons, puis vérifier que rien d’important n’est oublié et que chaque tâche a un résultat visible.',
    etapes: [
      'Lisez la note de l’association et soulignez les contraintes : date d’ouverture, budget, conditions du financement.',
      'Collez la note dans votre outil d’IA avec le prompt de départ.',
      'Vérifiez que chaque tâche a un livrable (« devis signé », « clôture posée ») et pas seulement un verbe vague.',
      'Repérez les jalons : sont-ils des moments précis (« convention signée ») plutôt que des activités ?',
      'Demandez à l’IA quelles tâches manquent, puis ajoutez celles que vous jugez utiles.',
    ],
    prompt:
      'Tu es chargé de mission et tu aides une petite association à gérer un projet. À partir de la note ci-dessous, découpe le projet en cinq phases maximum. Pour chaque phase, liste les tâches (une tâche = un livrable vérifiable, 1 à 5 jours de travail) et propose un ordre. Termine par la liste des jalons : un jalon est un événement daté, comme « convention signée », pas une activité. N’invente ni date ni montant absent de la note : écris « à fixer ». Présente le résultat dans un tableau : phase, tâche, livrable, jalon (oui ou non).\n\n<note>\n[collez la note de l’association ici]\n</note>',
    materiau: {
      titre: 'Note de l’association Graines d’avenir (Pouembout)',
      texte:
        'Projet : créer un jardin pédagogique de 800 m² sur un terrain prêté par la commune, pour accueillir les classes des écoles de Pouembout.\nContenu : clôture, arrosage, 12 bacs de culture, un abri pour le matériel, une quarantaine d’arbres fruitiers, trois animations pour les classes.\nFinancement : la province Nord a donné son accord de principe pour 6 500 000 XPF ; la convention n’est pas encore signée et elle demande un rapport d’étape à mi-parcours.\nÉquipe : une salariée à mi-temps, quatre bénévoles, un animateur pendant les vacances.\nCalendrier : ouverture aux écoles pour la rentrée scolaire de février 2027.\nPas encore fait : convention avec la commune pour le terrain, devis, recrutement des bénévoles pour les journées de plantation.',
    },
    variantes: {
      simple: 'Ne demander que les cinq phases et les jalons, sans le détail des tâches.',
      poussee:
        'Demander ensuite l’estimation de la durée de chaque tâche, un ordre de réalisation avec les dépendances, et une liste des dix questions à poser au financeur.',
    },
    astuces: {
      chatgpt:
        'Demandez le tableau, puis téléchargez-le au format Excel : les bénévoles pourront le compléter.',
      claude:
        'Demandez le planning sous forme de fichier Excel grâce à la création de fichiers, prêt à partager.',
      copilot:
        'Transformez la réponse en Copilot Page (compte professionnel) pour que l’équipe complète les tâches.',
    },
    vigilance:
      'Ne collez ni noms de bénévoles ni coordonnées de la commune. Les délais et conditions du financement sont à vérifier auprès de la province, pas auprès de l’IA.',
    formateur: {
      resultat:
        'Un tableau de quatre à cinq phases (démarrage administratif, préparation du terrain, installations, plantations et animations, ouverture) avec des tâches à livrable vérifiable et des jalons comme « convention de financement signée » ou « ouverture aux écoles ».',
      criteres: [
        'Chaque tâche a un livrable vérifiable et une taille raisonnable (1 à 5 jours).',
        'Les jalons sont des événements : convention avec la commune, convention de financement, fin des plantations, ouverture.',
        'Les dates et montants non fournis sont marqués « à fixer ».',
        'Le rapport d’étape à mi-parcours demandé par la province apparaît dans le plan.',
      ],
      pieges: [
        'Accepter des tâches vagues comme « s’occuper de l’arrosage » sans livrable.',
        'Lancer les achats avant la signature de la convention de financement, alors que la note ne donne qu’un accord de principe.',
        'Laisser l’IA inventer le calendrier détaillé alors que seule la rentrée de février est connue.',
      ],
      competence: 'delegation',
      technique: 'decomposer',
    },
    motsCles: ['découpage', 'tâches', 'jalons', 'association', 'province Nord', 'Pouembout'],
  },
  {
    id: 'projet-message-technique-simplifie',
    titre: 'Reformuler un message d’avancement trop technique pour la direction',
    metier: 'projet',
    niveau: 'debutant',
    famille: 'corriger',
    duree: 15,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'gemini',
    situation:
      'Vous pilotez la mise en place d’un nouveau logiciel de gestion dans une société de distribution de Nouméa. L’intégrateur vous envoie son point d’avancement, que vous devez transmettre à la direction et aux responsables de service. Il est illisible pour eux.',
    objectif:
      'Faire reformuler un message technique en langage clair pour des décideurs, sans changer un seul chiffre ni une seule date.',
    etapes: [
      'Lisez le message du matériau et soulignez ce que la direction ne comprendra pas.',
      'Collez-le dans votre outil d’IA avec le prompt de départ.',
      'Comparez chaque chiffre et chaque date avec le message d’origine.',
      'Vérifiez que la décision demandée à la direction est bien formulée en une phrase.',
      'Relisez à voix haute : un responsable de service comprend-il ce qu’on attend de lui ?',
    ],
    prompt:
      'Tu es chef de projet. Je dois transmettre le message ci-dessous à la direction et aux responsables de service, qui ne sont pas informaticiens. Reformule-le en cinq phrases au maximum, en langage clair, avec ce plan : où nous en sommes, ce qui est risqué, ce que cela change pour les équipes, la décision attendue de la direction. Garde exactement les chiffres et les dates. Explique chaque terme technique en quelques mots ou remplace-le. N’ajoute aucune information absente du message.\n\n<message>\n[collez le message ici]\n</message>',
    materiau: {
      titre: 'Message de l’intégrateur',
      texte:
        'Point d’avancement lot 2 : la recette fonctionnelle est en KO sur 14 scénarios sur 60, dont 3 bloquants (écart de paramétrage de la TGC sur les avoirs, plantage de l’import CSV des articles, timeout sur l’interface comptable). La bascule du 18/01 est à risque ; un go/no-go est calé au 07/01 selon les correctifs livrés en recette. Reprise des données clients : 70 % migrés, doublons à purger côté métier. Besoin d’un arbitrage sur le gel du périmètre (CR n° 7) et de la dispo de 3 key users pendant 2 jours pour la recette.',
    },
    variantes: {
      simple: 'Ne demander que la phrase de la décision attendue.',
      poussee:
        'Obtenir trois versions pour trois publics (direction, responsables de service, utilisateurs) et un glossaire de cinq termes à joindre au message.',
    },
    astuces: {
      gemini:
        'Ouvrez le message dans Canvas pour ajuster le ton paragraphe par paragraphe, ou utilisez « Aide-moi à écrire (Gmail, Docs) » dans l’e-mail.',
      copilot:
        'Dans Outlook, « Coaching par Copilot » relit votre message avant l’envoi et commente la clarté et le ton.',
      claude:
        'Demandez la liste des changements après la reformulation : vous vérifiez que rien d’important n’a été retiré.',
    },
    vigilance:
      'Le message d’un prestataire peut contenir des éléments contractuels : ne le collez pas en entier si vous utilisez un compte personnel. Comparez chaque chiffre avec l’original avant l’envoi.',
    formateur: {
      resultat:
        'Un message de cinq phrases : 14 tests sur 60 échouent dont 3 bloquants, la mise en service du 18 janvier est menacée, la décision go ou no-go est fixée au 7 janvier, 70 % des données clients sont reprises, et la direction doit trancher sur le gel du périmètre et libérer trois utilisateurs pendant deux jours.',
      criteres: [
        'Les chiffres 14, 60, 3, 70 %, 18/01, 07/01 et 2 jours sont conservés.',
        'Les termes recette, KO, bascule, go/no-go, key users et gel du périmètre sont expliqués ou remplacés.',
        'La décision attendue est formulée explicitement.',
      ],
      pieges: [
        'Une reformulation qui rassure à tort (« tout avance bien ») alors que la bascule est à risque.',
        'Un chiffre arrondi ou une date modifiée sans que l’IA le signale.',
        'Expliquer « TGC » de façon approximative ou en inventant une règle fiscale.',
      ],
      competence: 'discernement',
      technique: 'critique',
    },
    motsCles: ['avancement', 'langage clair', 'vulgarisation', 'logiciel', 'parties prenantes'],
  },
  {
    id: 'projet-registre-risques-lifou',
    titre: 'Construire le registre des risques d’un projet et le faire critiquer',
    metier: 'projet',
    niveau: 'intermediaire',
    famille: 'organiser',
    duree: 30,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Vous êtes chargé de projet pour la rénovation du foyer des jeunes de Wé, à Lifou. Avant le comité de lancement, la province, qui finance le projet, vous demande un registre des risques. Vous voulez qu’il parte de la réalité du chantier, pas d’une liste générique.',
    objectif:
      'Obtenir un registre de risques chiffré en probabilité et en impact, puis le faire critiquer pour trouver ce qui manque.',
    etapes: [
      'Lisez la fiche du projet et notez trois risques que vous voyez vous-même.',
      'Envoyez le prompt de départ et lisez le registre obtenu.',
      'Vérifiez la cotation : une probabilité ou un impact de 3 est-il justifié, ou l’IA a-t-elle tout mis au maximum ?',
      'Demandez à l’IA de jouer un chef de projet expérimenté qui critique le registre : quels risques manquent, lesquels sont mal formulés ?',
      'Retenez les cinq risques les plus critiques, et attribuez à chacun une personne responsable de son suivi.',
    ],
    prompt:
      'Tu es chef de projet expérimenté dans la rénovation de bâtiments publics en Nouvelle-Calédonie. À partir de la fiche ci-dessous, construis un registre des risques dans un tableau : risque (une phrase « si… alors… »), cause, conséquence, probabilité (1 à 3), impact (1 à 3), criticité (probabilité multipliée par impact), mesure préventive, plan B, responsable (un rôle). Propose dix à douze risques propres à ce projet, pas des risques génériques. Pour toute règle administrative, réglementaire ou coutumière, n’affirme rien : écris « à vérifier auprès de… » avec l’interlocuteur concerné.\n\nDans un second temps, quand je te le demanderai, tu critiqueras ton registre : risques oubliés, cotations discutables, mesures vagues.\n\n<fiche>\n[collez la fiche du projet ici]\n</fiche>',
    materiau: {
      titre: 'Fiche du projet de rénovation du foyer des jeunes de Wé',
      texte:
        'Bâtiment : foyer des jeunes de Wé (Lifou), 220 m², construit dans les années 1990.\nTravaux : réfection de la toiture, reprise de l’électricité, remplacement de quatre blocs sanitaires, peinture intérieure et extérieure.\nBudget : 28 000 000 XPF, financés par la province des Îles ; versement en deux fois (acompte puis solde à la réception).\nCalendrier : début des travaux en janvier, livraison souhaitée fin mai.\nContraintes : matériaux acheminés par bateau depuis Nouméa (une rotation par semaine selon la météo) ; main-d’œuvre mixte entre entreprises de Lifou et de Nouméa ; foyer utilisé par les jeunes le week-end et pendant les vacances ; travaux en pleine saison cyclonique.\nPartenaires : une entreprise de toiture de Nouméa, un artisan électricien de Lifou, un bureau d’études (diagnostic fait il y a deux ans).',
    },
    variantes: {
      simple:
        'Se limiter à cinq risques et à un tableau à trois colonnes : risque, probabilité, mesure.',
      poussee:
        'Faire construire une matrice probabilité-impact et un plan de suivi mensuel des cinq risques majeurs, avec des seuils qui déclenchent le plan B.',
    },
    astuces: {
      claude:
        'Demandez le registre en fichier Excel grâce à la création de fichiers, puis faites-le critiquer dans la même conversation.',
      chatgpt: 'Dans le canevas, retouchez une ligne du registre sans régénérer le tableau entier.',
      gemini:
        'Exportez le tableau dans Google Sheets et utilisez « Demander à Gemini (Sheets) » pour trier par criticité.',
    },
    vigilance:
      'Les règles de l’urbanisme, de la sécurité des chantiers et celles propres aux lieux coutumiers se vérifient auprès des services compétents et des interlocuteurs locaux, jamais auprès de l’IA.',
    formateur: {
      resultat:
        'Un registre de dix à douze risques spécifiques (retard de bateau, dépression tropicale, diagnostic de la toiture vieux de deux ans, coordination entre entreprises, indisponibilité du foyer, dérive du budget…), avec cotation justifiée, plan B et responsable, puis une critique qui fait apparaître au moins trois risques nouveaux.',
      criteres: [
        'Les risques sont propres au projet (acheminement par bateau, saison cyclonique) et formulés en « si… alors… ».',
        'La criticité est bien calculée et la cotation n’est pas uniformément élevée.',
        'Chaque mesure est concrète et chaque risque majeur a un responsable.',
        'Les points administratifs ou coutumiers sont « à vérifier » auprès d’un interlocuteur nommé.',
        'La critique a fait émerger des risques absents du premier registre.',
      ],
      pieges: [
        'Un registre générique qui conviendrait à n’importe quel chantier.',
        'Laisser l’IA affirmer des règles locales ou coutumières comme si elles étaient établies.',
        'Une cotation tout en 3 qui ne permet de prioriser aucun risque.',
        'Une mesure comme « surveiller » sans action ni déclencheur.',
      ],
      competence: 'discernement',
      technique: 'critique',
    },
    motsCles: ['risques', 'registre', 'rénovation', 'Lifou', 'criticité', 'plan B'],
  },
  {
    id: 'projet-planning-chemin-critique-salon',
    titre: 'Bâtir un planning avec ses dépendances et repérer le chemin le plus long',
    metier: 'projet',
    niveau: 'intermediaire',
    famille: 'organiser',
    duree: 30,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'La mairie de Païta organise le salon des entreprises du Grand Nouméa et vous en confie la coordination. Vous avez listé treize tâches avec leur durée et leurs prédécesseurs. Il faut savoir en combien de jours ouvrés le projet peut être prêt, et quelles tâches ne doivent surtout pas glisser.',
    objectif:
      'Faire calculer un planning avec dépendances, repérer le chemin critique et les marges, et contrôler le calcul à la main.',
    etapes: [
      'Lisez le tableau du matériau et tracez à la main, au brouillon, le chemin qui vous semble le plus long.',
      'Envoyez le prompt de départ avec le tableau et lisez le calcul tâche par tâche.',
      'Vérifiez à la main le début et la fin de trois tâches, dont la tâche D.',
      'Comparez le chemin critique de l’IA avec votre brouillon et demandez-lui de justifier l’écart éventuel.',
      'Posez une question « et si » : le recrutement des exposants prend 20 jours au lieu de 15, que devient la durée totale ?',
    ],
    prompt:
      'Tu es planificateur de projet. Voici les tâches d’un salon, avec leur durée en jours ouvrés et leurs prédécesseurs (séparateur : point-virgule). Une tâche ne peut démarrer qu’après la fin de tous ses prédécesseurs.\n\n<tableau>\n[collez le tableau ici]\n</tableau>\n\n1. Calcule, pour chaque tâche, le début au plus tôt et la fin au plus tôt (le jour 0 est le premier jour du projet).\n2. Donne la durée totale du projet et le chemin critique, c’est-à-dire la suite de tâches qui détermine cette durée.\n3. Donne la marge de chaque tâche hors chemin critique.\n4. Signale toute incohérence dans les données, sans la corriger.\nMontre ton calcul sous forme de tableau.',
    materiau: {
      titre: 'Tâches du salon des entreprises de Païta',
      texte:
        'Id;Tâche;Durée (jours ouvrés);Prédécesseurs\nA;Valider le budget et la date avec la mairie;3;\nB;Réserver la salle polyvalente;2;A\nC;Recruter les exposants (appels et inscriptions);15;A\nD;Concevoir le plan d’implantation des stands;5;B,C\nE;Concevoir les affiches et les invitations;4;A\nF;Imprimer les affiches et les invitations;5;E\nG;Diffuser la communication (presse et réseaux);10;F\nH;Commander et installer la signalétique;6;D\nI;Contracter la sonorisation et le traiteur;4;B\nJ;Installer les stands et la sonorisation;2;D,H,I\nK;Former les bénévoles d’accueil;2;D\nL;Contrôler la sécurité et répéter l’ouverture;1;J,K\nM;Tenir le salon;2;L,G',
    },
    variantes: {
      simple: 'Ne garder que les tâches A à H et chercher seulement le chemin critique.',
      poussee:
        'Faire produire un diagramme de Gantt sous forme de tableau Excel avec les marges, puis comparer deux scénarios : plus de moyens pour le recrutement, ou une salle réservée plus tard.',
    },
    astuces: {
      chatgpt:
        'Avec l’analyse de données, joignez le tableau : ChatGPT montre ses calculs, mais refaites vous-même deux dates au brouillon.',
      claude:
        'Demandez le planning dans un artefact : un tableau trié par début, que vous pouvez corriger tâche par tâche.',
      copilot:
        'Dans Excel, avec la licence adaptée, demandez à Copilot d’ajouter les colonnes de début et de fin au plus tôt, puis relisez les formules.',
    },
    vigilance:
      'Une IA se trompe volontiers sur un chemin critique quand plusieurs tâches ont plusieurs prédécesseurs : ne retenez le résultat qu’après l’avoir recalculé. Le planning est une base de discussion, pas un engagement.',
    formateur: {
      resultat:
        'Une durée totale de 34 jours ouvrés (et non les 61 jours de la somme des durées) ; chemin critique A, C, D, H, J, L, M. Marges : E, F et G 10 jours, B 13 jours, I 20 jours, K 6 jours.',
      criteres: [
        'Le chemin critique est A, C, D, H, J, L, M, soit 3 + 15 + 5 + 6 + 2 + 1 + 2 = 34 jours ouvrés.',
        'Les marges des tâches hors chemin critique sont justes (E, F, G : 10 ; B : 13 ; I : 20 ; K : 6).',
        'La question « et si » donne 39 jours : le recrutement à 20 jours rallonge d’autant le projet.',
        'L’apprenant a recalculé au moins deux dates à la main.',
      ],
      pieges: [
        'Additionner toutes les durées (61 jours) et croire que c’est la durée du projet.',
        'Prendre la communication (E, F, G) pour le chemin critique parce qu’elle est la plus visible.',
        'Ne retenir que le prédécesseur B de la tâche D, en oubliant C.',
      ],
      competence: 'discernement',
      technique: 'decomposer',
    },
    motsCles: ['planning', 'chemin critique', 'dépendances', 'marge', 'salon', 'Païta'],
  },
  {
    id: 'projet-estimation-charge-budget-logiciel',
    titre: 'Estimer la charge et le budget d’un projet avec trois hypothèses',
    metier: 'projet',
    niveau: 'intermediaire',
    famille: 'analyser',
    duree: 30,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'copilot',
    situation:
      'Une société de distribution de Nouméa veut remplacer son logiciel de gestion. Vous avez demandé aux équipes une estimation de la charge par lot, en trois hypothèses. La direction dispose d’une enveloppe de 9 000 000 XPF et veut savoir si elle suffit.',
    objectif:
      'Faire calculer trois scénarios de budget à partir d’un tableau de charges, vérifier les totaux et formuler une recommandation prudente.',
    etapes: [
      'Copiez le tableau du matériau dans votre outil d’IA, ou joignez-le en fichier CSV.',
      'Envoyez le prompt de départ : un coût par lot et un total pour chaque hypothèse.',
      'Vérifiez à la calculatrice deux lignes et un total, en pensant à ajouter les licences.',
      'Comparez chaque total à l’enveloppe de 9 000 000 XPF et lisez ce que l’IA conclut.',
      'Faites rédiger un paragraphe de cinq lignes pour la direction, avec l’hypothèse à retenir et ses conditions.',
    ],
    prompt:
      'Tu es chef de projet. Voici l’estimation de charge d’un projet de logiciel de gestion : jours optimistes, probables et pessimistes par lot, et taux journalier par profil (en XPF). Séparateur : point-virgule.\n\n<tableau>\n[collez le tableau ici]\n</tableau>\n\n1. Calcule le coût de chaque lot dans les trois hypothèses (jours multipliés par le taux journalier), puis le total des jours et le total du coût de chaque hypothèse.\n2. Ajoute les licences et l’hébergement sur douze mois : 2 400 000 XPF, identiques dans les trois hypothèses.\n3. Compare chaque total à l’enveloppe de 9 000 000 XPF : suffit-elle, avec quelle marge ou quel dépassement ?\n4. Dis quels lots pèsent le plus dans l’écart entre l’hypothèse probable et la pessimiste.\nMontre tous tes calculs et n’arrondis rien.',
    materiau: {
      titre: 'Estimation de charge du projet de logiciel de gestion',
      texte:
        'Lot;Profil;Jours optimistes;Jours probables;Jours pessimistes;Taux journalier (XPF)\nCadrage et spécifications;Chef de projet;5;7;10;80000\nParamétrage du logiciel;Consultant;12;18;28;75000\nReprise des données clients et articles;Consultant;6;10;18;75000\nDéveloppements spécifiques (interface comptable);Développeur;8;12;20;70000\nTests et recette;Chef de projet;5;8;12;80000\nFormation des utilisateurs (12 personnes);Formateur;4;6;8;65000\nConduite du changement et communication;Chef de projet;2;4;7;80000\nMise en production et accompagnement;Consultant;3;5;9;75000\nPilotage et réunions de suivi;Chef de projet;5;7;10;80000',
    },
    variantes: {
      simple: 'Ne calculer que l’hypothèse probable et la comparer à l’enveloppe.',
      poussee:
        'Ajouter une réserve pour aléas de 10 % sur les journées, tester une hypothèse où la reprise des données prend le double du temps, et faire rédiger les trois options à présenter à la direction.',
    },
    astuces: {
      copilot:
        'Mettez le tableau sous forme de tableau Excel, puis demandez à Copilot (selon la licence) d’ajouter les colonnes de coût : relisez la formule proposée.',
      chatgpt:
        'Avec l’analyse de données, joignez le CSV : ChatGPT calcule et trace un graphique des trois scénarios, vérifiez un total à la main.',
      gemini:
        'Dans Google Sheets, « Demander à Gemini » peut proposer les formules de coût et un graphique en barres.',
    },
    vigilance:
      'Des taux journaliers et des budgets sont des données commerciales sensibles : travaillez sur un tableau anonymisé. Une estimation n’est pas un devis : ne promettez pas un chiffre à la direction sans ses conditions.',
    formateur: {
      resultat:
        'Optimiste : 50 jours, 3 755 000 XPF, soit 6 155 000 XPF avec les licences. Probable : 77 jours, 5 785 000 XPF, soit 8 185 000 XPF. Pessimiste : 122 jours, 9 165 000 XPF, soit 11 565 000 XPF. L’enveloppe de 9 000 000 XPF suffit dans les deux premiers cas (marges de 2 845 000 et 815 000 XPF), mais est dépassée de 2 565 000 XPF dans le pessimiste.',
      criteres: [
        'Les totaux sont exacts : 6 155 000, 8 185 000 et 11 565 000 XPF licences comprises.',
        'Les licences de 2 400 000 XPF sont ajoutées une seule fois dans chaque hypothèse.',
        'Le dépassement du scénario pessimiste est signalé, avec les lots qui pèsent le plus (paramétrage, reprise des données, développements).',
        'La recommandation est prudente et conditionnelle, pas une certitude.',
      ],
      pieges: [
        'Oublier les licences ou les compter dans chaque ligne.',
        'Annoncer que l’enveloppe suffit sans montrer que le pessimiste la dépasse.',
        'Se tromper d’un zéro dans un taux journalier (75 000 et non 750 000).',
      ],
      competence: 'discernement',
      technique: 'critique',
    },
    motsCles: ['estimation', 'charge', 'budget', 'hypothèses', 'logiciel', 'XPF'],
  },
  {
    id: 'projet-support-copil-canva',
    titre: 'Préparer le support du comité de pilotage en cinq diapositives',
    metier: 'projet',
    niveau: 'intermediaire',
    famille: 'visuels',
    duree: 30,
    outils: ['canva', 'claude', 'chatgpt', 'copilot'],
    outilConseille: 'canva',
    situation:
      'Le comité de pilotage du projet de logiciel de gestion a lieu demain, à Nouméa, avec trois directeurs. Vous avez vos chiffres, mais pas de support. Vous disposez de dix minutes : il faut cinq diapositives lisibles et une demande de décision claire.',
    objectif:
      'Passer d’un tableau de chiffres à un support de comité de pilotage lisible, avec un message par diapositive et une décision à prendre.',
    etapes: [
      'Collez les points d’avancement du matériau avec le prompt de départ et lisez le plan des cinq diapositives.',
      'Validez ou corrigez le plan avant toute mise en forme : un seul message par diapositive.',
      'Dans Canva, collez le plan validé dans l’IA Canva pour obtenir un premier support.',
      'Vérifiez chaque chiffre affiché contre le matériau et corrigez à la main.',
      'Contrôlez la lisibilité : gros caractères, un graphique simple, pas plus de trois points par diapositive.',
    ],
    prompt:
      'Tu es chef de projet. À partir des points d’avancement ci-dessous, propose le plan d’un support de comité de pilotage de cinq diapositives : 1) la situation en un chiffre, 2) le budget, 3) le planning, 4) les risques, 5) les décisions à prendre. Pour chaque diapositive : un titre qui énonce le message (par exemple « Le budget est consommé plus vite que l’avancement »), trois points au maximum et le visuel conseillé (jauge, graphique en barres, frise, tableau). Reprends les chiffres exactement et ne les arrondis pas. Formule les décisions comme des questions fermées à la direction.\n\n<avancement>\n[collez les points d’avancement ici]\n</avancement>',
    materiau: {
      titre: 'Points d’avancement du projet à mi-parcours',
      texte:
        'Projet : mise en place du logiciel de gestion, société de distribution (Nouméa).\nBudget : 9 000 000 XPF ; consommé : 5 400 000 XPF (60 %). Avancement mesuré : 45 %.\nPlanning : mise en production prévue le 18/01/2027 ; estimée au 01/02/2027 (14 jours de retard), car la recette a glissé de deux semaines.\nÉquipe : migration des données à 70 % ; 12 utilisateurs à former ; 2 des 3 utilisateurs clés prévus pour la recette sont disponibles.\nRisques : correctifs de l’intégrateur en retard (probabilité forte) ; indisponibilité des utilisateurs clés en décembre (probabilité moyenne) ; plan de formation non finalisé.\nDécisions à prendre : 1) accepter le report au 01/02/2027 ou renforcer l’équipe avec un consultant 6 jours supplémentaires (450 000 XPF) ; 2) libérer le troisième utilisateur clé pendant la recette.',
    },
    variantes: {
      simple: 'Ne produire que la diapositive des décisions et celle de la situation.',
      poussee:
        'Créer avec le Kit de marque (Pro) un modèle de support de comité de pilotage réutilisable à chaque réunion, avec un prompt type pour mettre à jour les chiffres.',
    },
    astuces: {
      canva:
        'Collez le plan validé dans l’IA Canva, puis retouchez le texte avec l’Écriture magique ; saisissez vous-même les chiffres dans les graphiques.',
      claude:
        'La création de fichiers produit un PowerPoint à partir du plan validé : une solution si vous préférez ce format.',
      copilot:
        'Avec la licence, « Copilot dans Word, Excel et PowerPoint » crée une présentation à partir d’un document Word qui contient votre plan.',
    },
    vigilance:
      'Les chiffres d’un projet sont confidentiels : travaillez avec un compte professionnel ou en anonymisant les montants. Un graphique généré par l’IA peut afficher des valeurs inventées : saisissez-les vous-même.',
    formateur: {
      resultat:
        'Cinq diapositives aux titres-messages clairs : consommation du budget à 60 % pour 45 % d’avancement, mise en production estimée au 1er février 2027 (14 jours de retard), trois risques classés, et deux décisions formulées en questions fermées.',
      criteres: [
        'Le plan a été validé avant la mise en forme.',
        'Tous les chiffres affichés sont identiques au matériau (9 000 000, 5 400 000, 60 %, 45 %, 14 jours, 450 000 XPF).',
        'Chaque diapositive porte un seul message, lisible de loin.',
        'Le plan met en évidence l’écart entre la consommation du budget (60 %) et l’avancement (45 %).',
      ],
      pieges: [
        'Un graphique généré avec des valeurs arrondies ou inventées.',
        'Cacher le retard dans les détails au lieu de le mettre en titre.',
        'Surcharger une diapositive avec le tableau entier des risques.',
      ],
      competence: 'discernement',
      technique: 'format',
    },
    motsCles: [
      'comité de pilotage',
      'présentation',
      'diapositives',
      'Canva',
      'avancement',
      'décision',
    ],
  },
  {
    id: 'projet-assistant-suivi-actions',
    titre: 'Créer un assistant de suivi qui prépare les relances et le reste à faire',
    metier: 'projet',
    niveau: 'avance',
    famille: 'automatiser',
    duree: 60,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Vous coordonnez le projet de jardin pédagogique d’une association de Pouembout, financé par la province Nord. Chaque lundi, vous passez une heure à relire le registre des actions pour savoir qui relancer. Vous créez un assistant qui prépare ce travail à votre place, et que vous relisez.',
    objectif:
      'Rédiger des instructions permanentes, tester l’assistant sur un registre réel et l’améliorer jusqu’à obtenir un suivi fiable, avec des relances qui ne promettent rien à votre place.',
    etapes: [
      'Créez un Projet (Claude, ChatGPT), un Gem (Gemini) ou un agent (Copilot) et collez les instructions du prompt de départ.',
      'Testez l’assistant avec le registre du matériau et la date du jour : comparez son décompte au vôtre.',
      'Vérifiez les jours de retard de chaque action, puis relisez chaque message de relance : ton, précision, aucune promesse.',
      'Notez chaque écart (action en retard oubliée, jour de retard faux, ton sec, relance d’une action déjà faite) et ajoutez une règle pour le corriger.',
      'Refaites le test, puis essayez l’assistant avec une semaine sans aucun retard : que répond-il ?',
    ],
    prompt:
      'Tu es l’assistant de suivi du projet [nom du projet] de l’association [nom de l’association]. Chaque semaine, je te colle le registre des actions et la date du jour ; tu prépares mon point du lundi, que je relis avant de l’envoyer.\n\nTu produis, dans cet ordre :\n1. le reste à faire : nombre d’actions faites, en cours, non démarrées, bloquées, en retard ;\n2. la liste des actions en retard (échéance dépassée et statut différent de « Fait »), avec le nombre de jours de retard, triée du plus grand au plus petit ;\n3. un message de relance de trois phrases pour chaque responsable concerné : courtois, il rappelle l’action et l’échéance, et demande une nouvelle date ou la difficulté rencontrée ;\n4. trois points d’attention pour le comité de suivi.\n\nRègles :\n- Calcule les retards à partir de la date du jour que je donne ; si elle manque, demande-la.\n- Ne relance jamais une action « Fait ». Pour une action « Bloquée », propose comment lever le blocage au lieu de relancer.\n- N’invente aucune date, aucun responsable et aucun engagement. Ne promets rien à la place du chef de projet.\n- Si le registre est incomplet ou incohérent, signale-le avant de répondre.',
    materiau: {
      titre: 'Registre des actions au lundi 9 novembre 2026',
      texte:
        'Date du jour : lundi 9 novembre 2026.\nN°;Action;Responsable;Échéance;Statut;Dernière relance\n1;Déposer le dossier de demande de subvention à la province Nord;Hélène;30/10/2026;Fait;\n2;Signer la convention d’occupation du terrain avec la commune;Jean-Pierre;06/11/2026;En cours;02/11/2026\n3;Commander les clôtures et le grillage;Marcelline;13/11/2026;Non démarré;\n4;Obtenir trois devis pour le système d’arrosage;Kevin;04/11/2026;En cours;28/10/2026\n5;Recruter deux animateurs pour la rentrée;Hélène;27/11/2026;Non démarré;\n6;Convoquer l’assemblée générale pour valider le budget;Jean-Pierre;20/11/2026;Non démarré;\n7;Prévenir l’école de Pouembout des dates de visite;Marcelline;30/10/2026;Non démarré;\n8;Ouvrir le compte bancaire dédié au projet;Kevin;23/10/2026;Bloqué (attente du procès-verbal);05/11/2026\n9;Préparer le premier rapport d’étape pour la province;Hélène;04/12/2026;Non démarré;\n10;Organiser la journée de plantation avec les bénévoles;Ludovic;28/11/2026;Non démarré;',
    },
    variantes: {
      simple:
        'Créer l’assistant pour un seul rôle : repérer les actions en retard et calculer les jours.',
      poussee:
        'Ajouter une tâche planifiée qui prépare le point chaque lundi matin, et une règle de montée en alerte (deux relances sans réponse) à transmettre au président de l’association.',
    },
    astuces: {
      claude:
        'Créez un Projet avec les instructions ; une tâche planifiée (payante) peut ensuite relancer la préparation chaque lundi.',
      chatgpt:
        'Un Projet suffit pour vous ; une tâche planifiée (payante) peut relancer le point chaque semaine, un GPT (création payante) se partage.',
      copilot:
        'Selon la licence, « Créer un agent » permet de partager l’assistant avec le secrétariat de l’association.',
      gemini:
        'Créez un Gem avec ces instructions ; « Programmer des actions » (selon l’offre) relance le point chaque semaine.',
    },
    vigilance:
      'Le registre ne doit contenir ni numéros de téléphone ni adresses de particuliers. Les messages de relance sont relus et envoyés par vous : l’assistant ne contacte personne.',
    formateur: {
      resultat:
        'Un assistant qui compte une action faite, deux en cours, six non démarrées et une bloquée ; repère quatre retards (n° 8 : 17 jours, n° 7 : 10 jours, n° 4 : 5 jours, n° 2 : 3 jours) ; propose une relance courtoise pour chaque responsable concerné et un déblocage pour l’action n° 8 ; ne relance pas l’action n° 1.',
      criteres: [
        'Les quatre retards et leurs jours (17, 10, 5, 3) sont justes et triés.',
        'L’action bloquée donne lieu à une proposition de déblocage, pas à une simple relance.',
        'L’action déjà faite n’est pas relancée et aucun engagement n’est promis.',
        'L’apprenant a ajouté au moins une règle après le premier test et constaté son effet.',
      ],
      pieges: [
        'Compter l’action n° 3 (échéance le 13/11) comme en retard, ou oublier l’action n° 7 (aucune relance enregistrée).',
        'Un message de relance qui promet un délai ou un financement au nom de l’association.',
        'Faire confiance aux jours de retard de l’IA sans les recompter.',
      ],
      competence: 'delegation',
      technique: 'instructions',
    },
    motsCles: [
      'suivi',
      'relances',
      'assistant',
      'registre des actions',
      'tâche planifiée',
      'association',
    ],
  },
  {
    id: 'projet-tableau-bord-cantine-bourail',
    titre: 'Construire le tableau de bord d’avancement du projet : délais, budget, risques',
    metier: 'projet',
    niveau: 'avance',
    famille: 'analyser',
    duree: 45,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Vous êtes chargé de mission pour la commune de Bourail, qui agrandit la cantine de son école. Le maire veut un tableau de bord d’une page, à jour du 6 novembre 2026, qui montre où en sont les délais et le budget, et ce qui risque de déraper.',
    objectif:
      'Faire construire un tableau de bord à partir d’un tableau de lots : indicateurs, graphiques, alertes, puis vérifier les chiffres et trancher les incohérences.',
    etapes: [
      'Joignez le tableau du matériau ou collez-le, avec le prompt de départ.',
      'Vérifiez à la main trois chiffres : le budget total, le total engagé et le retard de la fin de chantier.',
      'Repérez les incohérences signalées et décidez, vous, comment les traiter ou qui interroger.',
      'Demandez deux graphiques simples (budget engagé et payé par lot, retard par lot) et vérifiez que leurs valeurs sont celles du tableau.',
      'Faites rédiger les trois messages clés pour le maire, puis enregistrez le modèle de tableau de bord pour la prochaine mise à jour.',
    ],
    prompt:
      'Tu es chargé de mission et tu prépares un tableau de bord de projet pour un maire. Voici l’état des lots d’un chantier au 6 novembre 2026 (séparateur : point-virgule, montants en XPF, dates JJ/MM/AAAA).\n\n<tableau>\n[collez le tableau ici]\n</tableau>\n\n1. Calcule le budget total, le total engagé, le total payé, et leur part du budget.\n2. Calcule pour chaque lot l’écart entre la fin prévue et la fin estimée en jours, puis le retard de la fin du chantier.\n3. Estime le coût final probable : engagé plus budget prévu des lots pas encore engagés, hors nouveaux aléas ; compare-le au budget.\n4. Signale toute incohérence dans les données, sans la corriger.\n5. Propose un tableau de bord d’une page : trois indicateurs clés avec un feu (vert, orange, rouge) et sa règle, deux graphiques, trois messages pour le maire.\nMontre les calculs.',
    materiau: {
      titre: 'État des lots du chantier de la cantine (6 novembre 2026)',
      texte:
        'Lot;Entreprise;Budget prévu (XPF);Engagé (XPF);Payé (XPF);Avancement (%);Fin prévue;Fin estimée\nTerrassement et fondations;Sud Terrassement;9500000;9500000;9500000;100;18/09/2026;25/09/2026\nGros œuvre (murs et dalle);Béton Services NC;18200000;19100000;14560000;85;16/10/2026;20/11/2026\nCharpente et couverture;Toitures du Centre;12400000;12400000;3720000;30;30/10/2026;18/12/2026\nÉlectricité;Élec Nord Pacifique;6800000;6800000;0;0;20/11/2026;11/12/2026\nPlomberie et sanitaires;Hydro Tech NC;5900000;5900000;1180000;20;27/11/2026;18/12/2026\nCuisine professionnelle (équipements);Froid Inox Calédonie;14500000;0;0;0;11/12/2026;08/01/2027\nPeinture et finitions;Couleurs du Nord;3600000;0;0;0;18/12/2026;15/01/2027\nAléas et divers;;4000000;1150000;1150000;;;',
    },
    variantes: {
      simple: 'Ne calculer que le budget et le retard, avec un seul graphique.',
      poussee:
        'Ajouter une colonne de risques (probabilité et impact par lot), un indicateur d’écart de budget à terminaison, et une version courte du tableau de bord pour un affichage en conseil municipal.',
    },
    astuces: {
      chatgpt:
        'Avec l’analyse de données, joignez le CSV : ChatGPT calcule et trace les graphiques ; refaites un total à la main avant de les copier.',
      claude:
        'Demandez le tableau de bord sous forme d’artefact : une page avec indicateurs et graphiques que vous retouchez.',
      copilot:
        'Dans Excel, avec la licence adaptée, demandez à Copilot de proposer les formules d’écart et un graphique, puis relisez-les.',
      gemini:
        'Dans Google Sheets, « Demander à Gemini » propose les formules d’écart en jours et un graphique par lot.',
    },
    vigilance:
      'Un budget de commune détaillé par entreprise est confidentiel tant qu’il n’est pas présenté : travaillez sur un tableau anonymisé. L’IA ne sait pas dire si un avenant est justifié.',
    formateur: {
      resultat:
        'Budget total 74 900 000 XPF ; engagé 54 850 000 (73,2 %) ; payé 30 110 000 (40,2 %) ; avancement pondéré par le budget des sept lots (hors aléas) d’environ 42 %, contre 34 % en moyenne simple. Fin de chantier : 15/01/2027 contre 18/12/2026, soit 28 jours de retard. Coût final probable : 54 850 000 + 14 500 000 + 3 600 000 = 72 950 000 XPF, soit 1 950 000 de marge. Incohérence : l’avenant du gros œuvre (900 000 XPF) est-il déjà compté dans la ligne « Aléas » (1 150 000 XPF engagés) ?',
      criteres: [
        'Les totaux sont justes : 74 900 000, 54 850 000 et 30 110 000 XPF.',
        'Le retard final de 28 jours est calculé sur la dernière fin prévue et non sur la moyenne des lots.',
        'L’engagé du gros œuvre (19 100 000) dépasse son budget (18 200 000) de 900 000 XPF : écart signalé.',
        'Le doute sur le double compte entre l’avenant et la ligne des aléas est posé comme une question à traiter, pas tranché par l’IA.',
        'Les feux de couleur ont une règle écrite (par exemple retard de plus de 14 jours = rouge).',
      ],
      pieges: [
        'Calculer l’avancement comme la moyenne simple des pourcentages (sans pondérer par le budget).',
        'Confondre « engagé » (commandé) et « payé » (réglé).',
        'Annoncer un coût final sans préciser qu’il exclut tout nouvel aléa.',
        'Laisser l’IA « corriger » les lignes d’aléas pour faire coïncider les totaux.',
      ],
      competence: 'discernement',
      technique: 'decomposer',
    },
    motsCles: ['tableau de bord', 'budget', 'délais', 'indicateurs', 'cantine', 'Bourail'],
  },
  {
    id: 'projet-retour-experience-notebook',
    titre: 'Tirer le retour d’expérience du projet avec un carnet Gemini Notebook',
    metier: 'projet',
    niveau: 'avance',
    famille: 'synthetiser',
    duree: 45,
    outils: ['notebook', 'claude'],
    outilConseille: 'notebook',
    situation:
      'Le déménagement de l’agence de Païta à Dumbéa est terminé. La direction demande un retour d’expérience avant d’archiver le projet : qu’est-ce qui a bien marché, qu’est-ce qui a coincé, que ferait-on autrement ? Les informations sont éparpillées dans les comptes rendus, le bilan budgétaire et le retour des salariés.',
    objectif:
      'Exploiter un corpus de documents de projet avec Gemini Notebook pour produire un retour d’expérience sourcé, et repérer ce que les documents ne disent pas.',
    etapes: [
      'Enregistrez les quatre documents du matériau (ou vos propres documents anonymisés) dans un dossier.',
      'Créez un carnet dans Gemini Notebook et ajoutez ces documents comme sources.',
      'Envoyez le prompt de départ, puis posez les quatre questions du matériau : ouvrez chaque citation pour la vérifier.',
      'Repérez la liste « À documenter » : quelles informations manquent pour comprendre ce qui s’est passé ?',
      'Complétez vos documents, puis rédigez avec votre responsable les trois recommandations à reprendre au prochain projet.',
    ],
    prompt:
      'À partir uniquement des sources de ce carnet, rédige le retour d’expérience du projet de déménagement de l’agence en quatre parties : ce qui a bien fonctionné, ce qui a posé problème, les causes de ces problèmes, trois recommandations pour un prochain projet. Cite la source de chaque affirmation. Si une cause ou une décision n’est pas documentée dans les sources, ne la devine pas : place-la dans une liste « À documenter ». Les chiffres doivent être repris tels qu’ils figurent dans les sources.',
    materiau: {
      titre: 'Quatre documents de projet (extraits fictifs) et questions de test',
      texte:
        'DOCUMENT 1 : Compte rendu du comité de pilotage n° 3 (12/10)\nL’opérateur annonce le raccordement de la fibre pour le 12/11 au lieu du 19/10. Décision : le déménagement est maintenu au samedi 07/11 avec un routeur 4G provisoire ; le standard téléphonique ne pourra pas fonctionner avec ce routeur, d’où une coupure de la téléphonie jusqu’au raccordement. Le déménageur facture un avenant de 120 000 XPF pour intervenir le week-end.\n\nDOCUMENT 2 : Bilan budgétaire final\nBudget initial : 8 000 000 XPF. Dépensé : 8 460 000 XPF. Déménagement (avenant de 120 000 compris) : 2 080 000 ; aménagement : 3 400 000 ; informatique et réseau : 2 150 000 ; signalétique et accueil : 480 000 ; imprévus : 350 000.\n\nDOCUMENT 3 : Enquête auprès des salariés (extrait)\n17 réponses sur 21 salariés ; satisfaction moyenne : 4,1 sur 5. Irritants cités : téléphonie coupée trois jours, cartons mal étiquetés, pas de plan du nouveau local à l’arrivée.\n\nDOCUMENT 4 : Note du prestataire informatique\nL’opérateur annonce huit semaines de délai pour une fibre ; la commande n’a été passée que mi-septembre. Une commande en juin aurait laissé la marge nécessaire.\n\nQUESTIONS À POSER AU CARNET\n1. Pourquoi la téléphonie a-t-elle été coupée ?\n2. De combien le budget a-t-il été dépassé et par quels postes ?\n3. Qu’a décidé le comité de pilotage n° 3 ?\n4. Qui a validé le plan d’aménagement du nouveau local ?',
    },
    variantes: {
      simple: 'Charger deux documents et ne poser que les questions 2 et 3.',
      poussee:
        'Générer aussi un résumé audio pour l’équipe et un quiz sur les leçons du projet, puis rédiger un modèle de retour d’expérience réutilisable pour les prochains projets.',
    },
    astuces: {
      notebook:
        'Les rapports citent leurs sources : cliquez sur chaque numéro pour relire le passage, surtout pour les chiffres et les causes.',
      claude:
        'Pour comparer, déposez les mêmes documents dans un Projet et posez les quatre questions : notez les écarts entre les deux outils.',
    },
    vigilance:
      'Les comptes rendus et les enquêtes contiennent des remarques sur des personnes : anonymisez avant de les charger, car le carnet sera partagé. Un retour d’expérience désigne des causes, pas des coupables.',
    formateur: {
      resultat:
        'Un retour d’expérience sourcé : dépassement de 460 000 XPF (5,75 % du budget de 8 000 000), cause principale la fibre commandée mi-septembre alors qu’il fallait huit semaines, solution provisoire par routeur 4G, satisfaction de 4,1 sur 5, et une liste « À documenter » où figure la validation du plan d’aménagement, que personne n’a documentée.',
      criteres: [
        'Chaque point du retour d’expérience renvoie à une source ouverte et vérifiée.',
        'La question 4 reste sans réponse et apparaît dans « À documenter » : le carnet n’a rien inventé.',
        'La cause de la coupure téléphonique est reliée à la commande tardive de la fibre, avec la source.',
        'Les recommandations découlent des causes documentées (commander plus tôt, fournir le plan du local).',
      ],
      pieges: [
        'Laisser le carnet dire « le directeur a validé le plan » sans source.',
        'Présenter les 120 000 XPF d’avenant comme le montant total du dépassement.',
        'Écrire des recommandations générales qui ne s’appuient sur aucune source.',
      ],
      competence: 'diligence',
      technique: 'sources',
    },
    motsCles: [
      'retour d’expérience',
      'bilan',
      'Gemini Notebook',
      'sources',
      'clôture',
      'déménagement',
    ],
  },
  {
    id: 'projet-comparer-offres-demenageurs',
    titre: 'Comparer trois offres de prestataires et rédiger la recommandation argumentée',
    metier: 'projet',
    niveau: 'avance',
    famille: 'analyser',
    duree: 45,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'gemini',
    situation:
      'Pour le déménagement de l’agence de Païta, vous avez reçu trois offres de déménageurs. L’enveloppe est de 2 000 000 XPF, l’agence ne doit pas rester fermée plus de deux jours, et le matériel à assurer représente environ 9 000 000 XPF. Le directeur attend votre recommandation écrite.',
    objectif:
      'Rendre comparables trois offres présentées de façon différente, puis rédiger une recommandation argumentée et prudente.',
    etapes: [
      'Lisez les trois offres et listez ce que chacune inclut ou non : emballage, assurance, durée.',
      'Collez-les dans votre outil d’IA avec le prompt de départ : l’IA établit d’abord un tableau comparable, sans recommander.',
      'Recalculez à la main le prix complet de chaque offre, puis vérifiez les cases du tableau.',
      'Demandez ensuite la recommandation, avec les critères, les risques de chaque option et les questions à poser avant de signer.',
      'Relisez la note : elle explique pourquoi, sans présenter comme certain ce qui ne figure pas dans les offres.',
    ],
    prompt:
      'Tu es chef de projet. Je dois recommander un déménageur pour une agence de vingt personnes, à Païta. Contraintes : enveloppe de 2 000 000 XPF, fermeture de l’agence de deux jours au maximum, matériel à assurer d’environ 9 000 000 XPF. Voici les trois offres.\n\n<offres>\n[collez les offres ici]\n</offres>\n\nÉtape 1 : établis un tableau comparable (prix de base, éléments en option à ajouter, prix complet, durée, plafond d’assurance, acompte, références) sans recommander encore. Si une information manque ou est ambiguë, écris « à confirmer ».\nÉtape 2 : vérifie chaque offre par rapport à mes trois contraintes.\nÉtape 3 : rédige une recommandation de dix lignes : l’offre retenue, pourquoi, ce qui reste à confirmer avant de signer. N’invente aucun chiffre. Si notre organisme est soumis à des règles de mise en concurrence, rappelle simplement de les vérifier, sans les décrire.',
    materiau: {
      titre: 'Les trois offres reçues',
      texte:
        'OFFRE A : Transports Pacifique Déménagement\n1 850 000 XPF, emballage et démontage du mobilier inclus. Assurance en option : 140 000 XPF, plafond de 10 000 000 XPF. Équipe de 8 personnes, 2 jours. Acompte de 30 % à la commande. Références : deux déménagements d’agences à Nouméa.\n\nOFFRE B : Cargo Mobil NC\n1 420 000 XPF, transport et manutention uniquement. Emballage en option : 380 000 XPF. Assurance incluse, plafond de 3 000 000 XPF. Équipe de 6 personnes, 3 jours. Acompte de 50 % à la commande. Références : un déménagement de bureaux à Païta.\n\nOFFRE C : Calédo Déménagements\n1 960 000 XPF, tout compris (emballage, démontage, assurance au plafond de 10 000 000 XPF). Équipe de 7 personnes, 2 jours. Acompte de 30 % à la commande. Références : une seule, un cabinet de 8 personnes à Dumbéa.',
    },
    variantes: {
      simple: 'Se limiter au tableau comparable et au prix complet de chaque offre.',
      poussee:
        'Ajouter une grille de critères pondérés (prix, durée, assurance, références), faire jouer à l’IA un directeur financier hostile qui conteste la recommandation, puis rédiger la réponse aux deux prestataires non retenus.',
    },
    astuces: {
      gemini:
        'Demandez le tableau comparable, puis exportez-le dans Google Sheets avec « Demander à Gemini (Sheets) » pour recalculer les prix complets.',
      claude:
        'Demandez le tableau et la note dans deux artefacts séparés : le tableau se vérifie, la note se retouche.',
      chatgpt:
        'Ouvrez la note de recommandation dans le canevas : vous corrigez un paragraphe sans refaire tout le tableau.',
      copilot:
        'Dans Word, Copilot (selon la licence) met la recommandation dans votre modèle de note ; vérifiez chaque chiffre repris.',
    },
    vigilance:
      'Les offres de prestataires sont confidentielles : n’envoyez ni noms ni prix réels sur un compte personnel. L’IA ne remplace pas la vérification des références ni les règles de choix d’un prestataire propres à votre organisme.',
    formateur: {
      resultat:
        'Prix complets : A 1 990 000 XPF (avec l’assurance), B 1 800 000 XPF (avec l’emballage) mais 3 jours et assurance limitée à 3 000 000 XPF, C 1 960 000 XPF. Seules A et C respectent les deux jours et l’assurance de 9 000 000 XPF ; C est la moins chère (30 000 XPF de moins) mais n’a qu’une référence. La recommandation reste prudente et liste les points à confirmer.',
      criteres: [
        'Les prix complets sont exacts : A 1 990 000, B 1 800 000, C 1 960 000 XPF.',
        'L’offre B est écartée sur ses deux contraintes (3 jours au lieu de 2, assurance de 3 000 000 XPF pour 9 000 000 XPF de matériel), pas seulement sur le prix.',
        'La note signale la faiblesse de l’offre C (une seule référence) et ce qu’il reste à confirmer.',
        'La recommandation n’affirme rien sur les règles de mise en concurrence : elle renvoie à leur vérification.',
      ],
      pieges: [
        'Comparer 1 850 000, 1 420 000 et 1 960 000 XPF sans ajouter les options, et recommander B comme la moins chère.',
        'Oublier la contrainte des deux jours de fermeture.',
        'Présenter l’offre C comme la meilleure sans mentionner qu’elle n’a qu’une référence.',
        'Faire écrire à l’IA que les trois offres respectent les règles d’achat de l’organisme.',
      ],
      competence: 'discernement',
      technique: 'critique',
    },
    motsCles: ['offres', 'prestataires', 'comparaison', 'recommandation', 'déménagement', 'devis'],
  },
];
