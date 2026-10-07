/**
 * Collectivités et service public : mairie, province, établissement public, service aux usagers.
 * Toutes les personnes, adresses, délibérations et sommes sont fictives.
 */

export const vocabulaire = {
  structure: { g: 'm', s: 'service municipal', p: 'services municipaux' },
  client: { g: 'm', s: 'administré', p: 'administrés' },
  partenaire: { g: 'm', s: 'prestataire de la commune', p: 'prestataires de la commune' },
  documentCourant: {
    g: 'm',
    s: 'courrier de réponse à un administré',
    p: 'courriers de réponse aux administrés',
  },
  documentLong: {
    g: 'm',
    s: 'rapport d’activité annuel de la commune',
    p: 'rapports d’activité annuels de la commune',
  },
  reunion: {
    g: 'f',
    s: 'séance du conseil municipal',
    p: 'séances du conseil municipal',
  },
  offre: {
    g: 'm',
    s: 'nouveau service de portage de repas aux aînés',
    p: 'nouveaux services de portage de repas aux aînés',
  },
  poste: { g: 'm', s: 'agent d’accueil', p: 'agents d’accueil' },
  evenement: {
    g: 'f',
    s: 'journée citoyenne de nettoyage des quartiers',
    p: 'journées citoyennes de nettoyage des quartiers',
  },
  visuel: { g: 'f', s: 'affiche d’information', p: 'affiches d’information' },
  domaine: 'le service public local',
  motifReclamation: 'une demande de ramassage des encombrants restée sans réponse',
  donnees:
    'le bilan mensuel des demandes reçues et traitées par chaque service municipal sur un an',
  colonnes: 'Mois;Service;Demandes reçues;Demandes traitées;Délai moyen de réponse (jours)',
  indicateur: 'le délai moyen de réponse aux demandes des administrés',
  veille: 'les appels à projets et les financements ouverts aux communes',
  sourcesVeille:
    'les sites du gouvernement de la Nouvelle-Calédonie et des provinces, le Journal officiel de la Nouvelle-Calédonie et la presse locale',
  jargon: 'une délibération, un arrêté municipal et une enquête publique',
  procedure: 'l’accueil d’un administré qui demande un acte d’état civil',
  situationTendue:
    'un administré en colère parce que sa rue n’a pas été nettoyée après une forte dépression',
  donneesSensibles:
    'les noms, adresses, actes d’état civil, situations sociales et numéros de téléphone des administrés',
  corpus: 'les délibérations du conseil municipal et les règlements des services de la commune',
  publicCible: 'les habitants de la commune, dont certains sont peu à l’aise avec l’écrit',
  etranger: 'une famille anglophone récemment installée dans la commune',
  themeFormation: 'l’organisation des services de la mairie et les demandes les plus fréquentes',
  tacheRepetitive: 'les réponses aux demandes d’actes d’état civil',
  planning: 'les permanences de l’accueil et de l’état civil pendant les congés',
  comparaison: 'deux offres de prestataires pour la collecte des encombrants',
};

export const exercices = [
  {
    id: 'coll-courrier-langage-clair',
    titre: 'Réécrire un courrier administratif en langage clair',
    metier: 'collectivites',
    niveau: 'debutant',
    famille: 'corriger',
    duree: 20,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Vous travaillez au service de la vie scolaire d’une mairie. Le courrier type envoyé aux familles dont le dossier de cantine est incomplet provoque des appels inquiets : les parents ne le comprennent pas. Votre responsable vous demande une version en langage clair.',
    objectif:
      'Faire simplifier un texte administratif selon des règles précises de langage clair, sans perdre aucune information utile ni aucun délai.',
    etapes: [
      'Lisez le courrier du matériau et listez ce que le parent doit retenir : pièces manquantes, date limite, lieu, conséquence.',
      'Envoyez le prompt de départ avec le courrier.',
      'Vérifiez que chaque information de votre liste figure dans la nouvelle version, avec les mêmes dates.',
      'Demandez à l’IA de relire sa version comme un parent peu à l’aise avec l’écrit : quelles phrases restent difficiles ?',
      'Faites lire la version finale à un collègue qui ne connaît pas le dossier.',
    ],
    prompt:
      'Tu es agent d’une mairie de Nouvelle-Calédonie. Réécris le courrier ci-dessous en langage clair, pour des parents dont certains sont peu à l’aise avec l’écrit.\nRègles :\n- une idée par phrase, 15 mots au maximum par phrase ;\n- des mots courants, à la voix active, en vouvoiement ;\n- commence par ce que le parent doit faire, puis avant quand et où ;\n- les pièces à fournir en liste ;\n- termine par les horaires et un contact.\nGarde toutes les informations et toutes les dates. N’ajoute aucune règle ni aucun délai.\n\n<courrier>\n[collez le courrier ici]\n</courrier>',
    materiau: {
      titre: 'Courrier type actuel',
      texte:
        'Madame, Monsieur,\n\nNous accusons réception de la demande d’inscription au service de restauration scolaire formulée au bénéfice de votre enfant au titre de l’année scolaire 2027. Après instruction, il apparaît que le dossier susvisé ne saurait être considéré comme complet en l’absence de l’attestation de quotient familial en cours de validité ainsi que d’un justificatif de domicile datant de moins de trois mois. Faute de production desdites pièces auprès du guichet unique de la mairie avant le vendredi 20 novembre 2026, la demande ne pourra être instruite et l’enfant ne pourra être accueilli au service de restauration scolaire à compter de la rentrée. Le guichet unique est ouvert du lundi au vendredi de 7 h 30 à 15 h 30.\n\nVeuillez agréer, Madame, Monsieur, l’expression de nos salutations distinguées.\n\nLe service de la vie scolaire',
    },
    variantes: {
      simple: 'Réécrire seulement le paragraphe principal.',
      poussee:
        'Produire aussi une version facile à lire avec pictogrammes, et un message vocal de 30 secondes pour le répondeur du guichet unique.',
    },
    astuces: {
      claude:
        'Demandez la liste des changements faits : vous vérifiez qu’aucune information n’a disparu.',
      chatgpt:
        'Dans le canevas, demandez de simplifier une seule phrase difficile sans toucher au reste.',
      copilot:
        'Dans Word, Copilot peut réécrire le modèle de courrier ; comparez les deux versions avant de remplacer l’ancien.',
    },
    vigilance:
      'Travaillez sur le courrier type, jamais sur un courrier nominatif. Une simplification ne doit changer ni les délais ni les conséquences annoncées.',
    formateur: {
      resultat:
        'Un courrier court qui commence par « Votre dossier de cantine est incomplet. Apportez deux documents avant le vendredi 20 novembre », liste les deux pièces, dit où les apporter, explique la conséquence et donne les horaires.',
      criteres: [
        'Les deux pièces, la date du 20 novembre et la conséquence sont conservées.',
        'Les phrases sont courtes ; « instruction », « susvisé », « restauration scolaire » sont remplacés par des mots courants.',
        'Le texte a été relu par quelqu’un qui ne connaît pas le dossier.',
      ],
      pieges: [
        'Une version qui adoucit tellement la conséquence qu’elle disparaît.',
        'Une date ou un horaire modifié pendant la réécriture.',
      ],
      competence: 'description',
      technique: 'format',
    },
    motsCles: ['langage clair', 'FALC', 'courrier', 'cantine', 'simplification'],
  },
  {
    id: 'coll-affiche-coupure-eau',
    titre: 'Créer une affiche d’information sur une coupure d’eau',
    metier: 'collectivites',
    niveau: 'debutant',
    famille: 'visuels',
    duree: 20,
    outils: ['canva', 'claude', 'chatgpt'],
    outilConseille: 'canva',
    situation:
      'Des travaux sur une canalisation vont priver d’eau plusieurs rues de Koutio, à Dumbéa, le mardi 17 novembre. Le service technique vous demande une affiche A4 pour les commerces et les abribus, et la même information au format carré pour la page Facebook de la commune.',
    objectif:
      'Hiérarchiser une information destinée aux usagers avec l’IA, puis la mettre en page de façon lisible dans Canva.',
    etapes: [
      'Envoyez le prompt de départ à votre outil d’IA avec les informations du service technique.',
      'Vérifiez le texte proposé : rues, date, horaires, conseils, contact.',
      'Dans Canva, créez l’affiche A4 avec l’IA Canva ou le Design magique, en collant le texte validé.',
      'Contrôlez la lisibilité : la date et les horaires doivent se lire à trois mètres.',
      'Déclinez au format carré pour Facebook (Redimensionnement magique, Pro, ou à la main) et vérifiez de nouveau chaque information.',
    ],
    prompt:
      'Tu es chargé de communication dans une mairie. À partir des informations ci-dessous, rédige le texte d’une affiche A4 sur une coupure d’eau, compréhensible en quelques secondes :\n- un titre de 5 mots au maximum ;\n- la date et les horaires, mis en avant ;\n- les rues concernées ;\n- trois conseils pratiques au maximum, tirés des informations ;\n- un contact.\n60 mots au maximum en tout. N’ajoute aucun conseil ni aucune information absents ci-dessous.\n\n<informations>\n[collez les informations ici]\n</informations>',
    materiau: {
      titre: 'Informations du service technique',
      texte:
        'Travaux de remplacement d’une vanne, quartier de Koutio.\nMardi 17 novembre 2026, de 8 h à 16 h (retour progressif de l’eau possible jusqu’à 18 h).\nRues concernées : rue des Niaoulis, rue des Flamboyants, allée des Cocotiers, impasse des Bancouliers.\nConseils : faire des réserves d’eau la veille ; à la remise en eau, laisser couler quelques minutes si l’eau est trouble.\nRenseignements : service des eaux de la mairie, 41 11 11, du lundi au vendredi de 7 h 30 à 15 h 30.',
    },
    variantes: {
      simple: 'Créer seulement l’affiche A4.',
      poussee:
        'Préparer aussi un SMS d’alerte de 160 caractères et un modèle Canva réutilisable pour toutes les coupures à venir.',
    },
    astuces: {
      canva:
        'Créez un modèle « coupure d’eau » aux couleurs de la commune : la prochaine fois, il suffira de changer la date et les rues.',
      claude:
        'Demandez d’abord un artefact de l’affiche pour valider l’ordre des informations, puis faites la mise en page dans Canva.',
    },
    vigilance:
      'Les rues et les horaires viennent du service technique, pas de l’IA : comparez mot à mot avant d’imprimer. Utilisez le logo de la commune selon les règles de sa charte.',
    formateur: {
      resultat:
        'Une affiche A4 et une version carrée, lisibles de loin, avec un titre court, la date, les horaires (8 h - 16 h, retour possible jusqu’à 18 h), les quatre rues, deux conseils et le contact.',
      criteres: [
        'Les quatre rues, la date et les horaires sont exacts sur les deux formats.',
        'La date et les horaires sont l’élément le plus visible.',
        'Aucun conseil n’a été inventé, par exemple « faire bouillir l’eau ».',
      ],
      pieges: [
        'Oublier le retour progressif de l’eau jusqu’à 18 h.',
        'Un conseil sanitaire ajouté par l’IA, non validé par le service.',
      ],
      competence: 'discernement',
      technique: 'format',
    },
    motsCles: ['affiche', 'coupure d’eau', 'Canva', 'information des usagers', 'travaux'],
  },
  {
    id: 'coll-faq-cantine',
    titre: 'Tirer une FAQ du règlement de la cantine scolaire',
    metier: 'collectivites',
    niveau: 'debutant',
    famille: 'synthetiser',
    duree: 20,
    outils: ['claude', 'chatgpt', 'gemini', 'notebook'],
    outilConseille: 'claude',
    situation:
      'Le règlement de la cantine scolaire de votre commune fait quatre pages. À chaque rentrée, l’accueil de la mairie répond aux mêmes questions des parents. Vous voulez une FAQ de dix questions pour le site de la commune et l’affichage dans les écoles.',
    objectif:
      'Faire extraire d’un document les réponses aux questions fréquentes, en exigeant que chaque réponse s’appuie sur un article précis.',
    etapes: [
      'Copiez l’extrait du règlement du matériau avec le prompt de départ.',
      'Vérifiez chaque réponse en relisant l’article cité.',
      'Repérez les questions fréquentes auxquelles le règlement ne répond pas, et notez-les pour le service.',
      'Demandez une version encore plus courte de chaque réponse, pour l’affichage dans les écoles.',
    ],
    prompt:
      'Tu es agent de la vie scolaire dans une mairie. À partir uniquement de l’extrait de règlement ci-dessous, rédige une FAQ de dix questions que se posent les parents. Pour chaque question : une réponse de deux phrases au maximum, en langage simple, suivie du numéro de l’article utilisé. Si une question fréquente n’a pas de réponse dans le règlement, ne l’invente pas : ajoute-la à une liste « À préciser par le service ».\n\n<reglement>\n[collez l’extrait ici]\n</reglement>',
    materiau: {
      titre: 'Extrait du règlement de la cantine',
      texte:
        'Article 2 – Inscription. L’inscription se fait au guichet unique de la mairie ou en ligne, avant le 15 janvier pour l’année scolaire. Elle est valable pour l’année entière.\nArticle 3 – Tarifs. Le prix du repas dépend du quotient familial : de 150 XPF à 600 XPF. Sans attestation de quotient familial, le tarif le plus élevé s’applique.\nArticle 4 – Paiement. Les repas sont payés à l’avance par carnets de 10 tickets, au guichet unique ou par virement.\nArticle 5 – Absences. Un repas non consommé est remboursé si l’absence est signalée à l’école avant 9 h le jour même, ou sur certificat médical remis dans les 8 jours.\nArticle 6 – Régimes et allergies. Des repas sans porc sont proposés sur demande à l’inscription. Une allergie alimentaire nécessite un projet d’accueil individualisé signé avec le médecin scolaire.\nArticle 7 – Comportement. Après deux avertissements écrits, une exclusion temporaire de trois jours au plus peut être prononcée par le maire.\nArticle 8 – Accès. La cantine est ouverte les jours d’école, de 11 h à 13 h.',
    },
    variantes: {
      simple: 'Rédiger seulement cinq questions.',
      poussee:
        'Charger le règlement complet et la délibération sur les tarifs dans Gemini Notebook, puis générer la FAQ avec un renvoi au passage exact de chaque réponse.',
    },
    astuces: {
      claude:
        'Demandez la FAQ en artefact, avec le numéro d’article en fin de réponse : la vérification va plus vite.',
      notebook:
        'Chargez le règlement comme source : chaque réponse renvoie au passage exact, sur lequel vous cliquez pour vérifier.',
      gemini: 'Ouvrez la FAQ dans Canvas pour simplifier une réponse sans tout régénérer.',
    },
    vigilance:
      'Une FAQ publiée engage la commune : chaque réponse est validée par le service de la vie scolaire avant la mise en ligne.',
    formateur: {
      resultat:
        'Une FAQ de dix questions aux réponses courtes, chacune liée à un article, et une liste « À préciser par le service » (repas végétarien, inscription en cours d’année, tickets perdus…).',
      criteres: [
        'Chaque réponse cite le bon article et ne dit rien de plus que lui.',
        'Les questions sans réponse sont listées, pas comblées.',
        'Les montants (150 à 600 XPF) et les délais (avant 9 h, 8 jours) sont exacts.',
      ],
      pieges: [
        'Une réponse sur les repas végétariens inventée à partir de l’article sur les repas sans porc.',
        'Un délai de remboursement modifié.',
      ],
      competence: 'discernement',
      technique: 'sources',
    },
    motsCles: ['FAQ', 'cantine', 'règlement', 'questions fréquentes', 'parents'],
  },
  {
    id: 'coll-reponse-dechets-verts',
    titre: 'Répondre à un administré mécontent de la collecte des déchets verts',
    metier: 'collectivites',
    niveau: 'debutant',
    famille: 'rediger',
    duree: 15,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'copilot',
    situation:
      'Vous travaillez au service environnement de la mairie du Mont-Dore. Un administré a écrit un e-mail agacé : ses déchets verts n’ont pas été ramassés depuis trois semaines. Le chef de service vous a donné les explications ; vous préparez la réponse.',
    objectif:
      'Rédiger une réponse courtoise et précise, qui reconnaît le problème, explique sans se justifier et dit ce que l’administré peut faire.',
    etapes: [
      'Lisez l’e-mail et les éléments du chef de service.',
      'Envoyez le prompt de départ.',
      'Vérifiez les dates et les consignes reprises dans la réponse.',
      'Vérifiez que la réponse ne promet pas de passage exceptionnel, que le service a exclu.',
      'Demandez une version plus courte, puis choisissez celle que vous enverriez.',
    ],
    prompt:
      'Tu es agent du service environnement d’une mairie de Nouvelle-Calédonie. Rédige une réponse à l’e-mail de l’administré ci-dessous, à partir des éléments du chef de service.\n- Remercie et reconnais la gêne.\n- Explique la cause en deux phrases, sans rejeter la faute sur quelqu’un.\n- Dis ce qui va se passer et ce que l’administré peut faire en attendant.\n- Vouvoiement, ton courtois, 150 mots au maximum.\nNe promets rien que les éléments ne prévoient pas.\n\n<email>\n[collez l’e-mail ici]\n</email>\n\n<elements>\n[collez les éléments ici]\n</elements>',
    materiau: {
      titre: 'E-mail de l’administré et éléments du chef de service',
      texte:
        'E-MAIL\nBonjour, ça fait 3 semaines que mes déchets verts sont devant chez moi, à Plum. Personne n’est passé alors que le calendrier dit tous les 15 jours. Ça attire les moustiques et les rats. Je paie mes impôts comme tout le monde. Merci de faire quelque chose rapidement.\n\nÉLÉMENTS DU CHEF DE SERVICE\n- Le camion de collecte des déchets verts du secteur sud de la commune est en panne depuis le 2 octobre ; reprise de la tournée le lundi 19 octobre.\n- Les secteurs en retard seront collectés en priorité les 19 et 20 octobre.\n- En attendant, dépôt possible à la déchèterie (horaires sur le site de la commune).\n- Aucun passage exceptionnel possible avant le 19.\n- Consignes : fagots de 1,50 m au maximum, pas de sacs plastiques.',
    },
    variantes: {
      simple: 'Rédiger une réponse de 80 mots au maximum.',
      poussee:
        'Préparer aussi une publication pour la page Facebook de la commune qui informe tout le secteur, et un message pour l’accueil téléphonique.',
    },
    astuces: {
      copilot:
        'Dans Outlook, partez d’un « Brouillon avec Copilot » en collant les éléments, puis lancez « Coaching par Copilot » pour vérifier le ton.',
      gemini:
        'Dans Gmail, « Aide-moi à écrire » produit un premier jet ; vérifiez ensuite chaque date.',
    },
    vigilance:
      'Retirez le nom et l’adresse de l’administré avant de coller son e-mail : la réponse se rédige sans eux, vous les ajouterez à l’envoi.',
    formateur: {
      resultat:
        'Une réponse courtoise qui reconnaît la gêne, explique la panne, annonce la collecte prioritaire des 19 et 20 octobre, rappelle la déchèterie et les consignes, sans promettre de passage exceptionnel.',
      criteres: [
        'Les dates (19 et 20 octobre) et les consignes (fagots de 1,50 m, pas de sacs plastiques) sont exactes.',
        'La réponse ne rejette pas la faute et ne promet rien de plus que les éléments.',
        'Le ton reste courtois malgré l’agacement de l’administré.',
      ],
      pieges: [
        'Une réponse qui promet un passage « dans les plus brefs délais ».',
        'Répondre à la remarque sur les impôts, ce qui envenime l’échange.',
      ],
      competence: 'description',
      technique: 'contexte',
    },
    motsCles: ['réclamation', 'déchets verts', 'collecte', 'réponse', 'usager'],
  },
  {
    id: 'coll-compte-rendu-conseil',
    titre: 'Rédiger le compte rendu d’une séance du conseil municipal',
    metier: 'collectivites',
    niveau: 'intermediaire',
    famille: 'synthetiser',
    duree: 30,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Vous êtes assistant ou assistante au secrétariat général d’une mairie. Vous avez pris des notes pendant la séance du conseil municipal d’hier soir. Le compte rendu doit être affiché et mis en ligne, après relecture du secrétaire général.',
    objectif:
      'Transformer des notes de séance en compte rendu structuré et fidèle aux votes, en plusieurs échanges, avec un contrôle rigoureux des chiffres.',
    etapes: [
      'Envoyez le prompt de départ avec les notes du matériau.',
      'Recomptez chaque vote : pour, contre, abstentions, par rapport aux présents et aux procurations.',
      'Signalez à l’IA toute incohérence qu’elle n’a pas repérée et demandez-lui de la marquer « à vérifier » sans la corriger.',
      'Demandez une version « en bref » de dix lignes pour la page Facebook de la commune, sans jargon.',
      'Préparez la liste des points à faire confirmer par le secrétaire général.',
    ],
    prompt:
      'Tu es assistant au secrétariat général d’une mairie de Nouvelle-Calédonie. À partir de mes notes de séance ci-dessous, rédige le compte rendu de la séance du conseil municipal.\nStructure : date, lieu, présents, représentés et absents ; puis, pour chaque point de l’ordre du jour, l’objet en une phrase, les principaux échanges en deux phrases au maximum et le résultat du vote (pour, contre, abstentions).\nVérifie que chaque vote est cohérent avec le nombre de votants. Si un chiffre est incohérent ou manquant, écris « à vérifier » au lieu de le corriger. N’attribue à personne des propos absents des notes.\n\n<notes>\n[collez les notes ici]\n</notes>',
    materiau: {
      titre: 'Notes de séance (jeudi 15 octobre 2026, 18 h)',
      texte:
        'Conseil municipal – salle des délibérations\n27 conseillers en exercice. Présents : 21. Procurations : 3. Absents : 3.\n\n1) Approbation du procès-verbal de la séance du 10 septembre : unanimité.\n2) Tarifs de la cantine 2027 : +5 % sur toutes les tranches. M. Wahmetu (opposition) : hausse trop forte pour les familles, demande un tarif social. Le maire : tarif social à l’étude, pas pour cette année. Vote : 18 pour, 4 contre, 3 abstentions.\n3) Subvention au club de va’a : 450 000 XPF pour une compétition régionale. Unanimité moins 1 abstention (Mme Tuifua, présidente du club, ne prend pas part au vote).\n4) Convention avec la province pour l’entretien d’une piste en tribu (nom de la tribu à vérifier) : reportée, documents incomplets.\n5) Questions diverses : éclairage du stade (devis en cours), fête de la commune le 7 novembre.\nFin de séance : 20 h 40.',
    },
    variantes: {
      simple: 'Rédiger seulement les résultats des votes, point par point.',
      poussee:
        'Produire aussi le tableau de suivi des décisions (service chargé, échéance) et une version en langage clair pour le site de la commune.',
    },
    astuces: {
      claude:
        'Demandez à Claude de recompter chaque vote dans un tableau à part : les incohérences sautent aux yeux.',
      copilot:
        'Pour une réunion enregistrée sur Teams, avec la licence, comparez au « Récapitulatif de réunion » ; les votes se vérifient toujours sur vos notes.',
      gemini:
        'Avec Meet, « Prendre des notes pour moi » prépare des notes dans Google Docs, à relire avec la même rigueur.',
    },
    vigilance:
      'Un compte rendu officiel est validé par le secrétaire général et le maire : l’IA ne prépare qu’un brouillon. Aucun propos n’est attribué à un élu sans vérification.',
    formateur: {
      resultat:
        'Un compte rendu structuré qui signale deux points « à vérifier » : 25 voix exprimées au point 2 pour 24 votants, et la contradiction entre « abstention » et « ne prend pas part au vote » au point 3. Le point 4 est reporté, sans nom de tribu inventé.',
      criteres: [
        'Les deux incohérences de vote sont signalées, pas corrigées.',
        'Les propos rapportés sont fidèles aux notes, sans ajout.',
        'Le nom manquant au point 4 n’est pas inventé.',
        'La version « en bref » est compréhensible par un habitant.',
      ],
      pieges: [
        'Accepter « 18 pour, 4 contre, 3 abstentions » sans recompter (21 présents et 3 procurations font 24 votants).',
        'Laisser l’IA ajouter un nom de tribu ou une précision absente des notes.',
      ],
      competence: 'discernement',
      technique: 'critique',
    },
    motsCles: ['conseil municipal', 'compte rendu', 'délibération', 'votes', 'séance'],
  },
  {
    id: 'coll-enquete-satisfaction',
    titre: 'Analyser l’enquête de satisfaction des usagers de l’accueil',
    metier: 'collectivites',
    niveau: 'intermediaire',
    famille: 'analyser',
    duree: 30,
    outils: ['chatgpt', 'claude', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Votre mairie a interrogé pendant un mois les usagers de trois points d’accueil. Le directeur général des services veut un bilan d’une page pour le comité de direction : ce qui va, ce qui ne va pas, trois actions. Vous avez le tableau de résultats par point d’accueil et par semaine.',
    objectif:
      'Faire analyser un tableau de résultats, vérifier les calculs et la solidité des chiffres, puis rédiger un bilan prudent.',
    etapes: [
      'Copiez le tableau du matériau, ou joignez-le en CSV, avec le prompt de départ.',
      'Vérifiez à la main un taux de satisfaction et une attente moyenne pondérée.',
      'Regardez si l’IA a repéré la ligne impossible du tableau ; sinon, cherchez-la.',
      'Demandez un graphique simple qui compare les trois points d’accueil.',
      'Faites rédiger un bilan d’une page avec trois actions, chacune reliée à un chiffre.',
    ],
    prompt:
      'Tu es chargé de mission dans une mairie de Nouvelle-Calédonie. Voici les résultats d’une enquête de satisfaction des usagers de nos points d’accueil (séparateur : point-virgule).\n\n<tableau>\n[collez le tableau ici]\n</tableau>\n\n1. Calcule, pour chaque point d’accueil et sur le mois, le nombre de répondants, la part d’usagers satisfaits et l’attente moyenne pondérée par le nombre de répondants.\n2. Compare les points d’accueil et repère les écarts importants.\n3. Signale les résultats fragiles (moins de 50 répondants sur le mois) et toute donnée incohérente.\n4. Propose trois actions, chacune justifiée par un chiffre du tableau.\nMontre tes calculs.',
    materiau: {
      titre: 'Résultats de l’enquête (octobre 2026)',
      texte:
        'Semaine;Point d’accueil;Répondants;Usagers satisfaits;Attente moyenne (min)\nS1;Accueil central;64;52;9\nS2;Accueil central;71;55;12\nS3;Accueil central;58;49;8\nS4;Accueil central;67;53;10\nS1;Mairie annexe;12;11;5\nS2;Mairie annexe;9;8;4\nS3;Mairie annexe;14;12;6\nS4;Mairie annexe;11;10;5\nS1;Guichet état civil;38;21;24\nS2;Guichet état civil;42;20;31\nS3;Guichet état civil;35;39;22\nS4;Guichet état civil;40;19;28',
    },
    variantes: {
      simple: 'Calculer seulement la part de satisfaits par point d’accueil.',
      poussee:
        'Ajouter les commentaires libres de l’enquête, les faire classer par thème et croiser les thèmes avec les chiffres.',
    },
    astuces: {
      chatgpt:
        'Avec l’analyse de données, joignez le CSV et demandez le calcul pondéré ; vérifiez-en un à la main.',
      copilot:
        'Dans Excel, mettez les données sous forme de tableau : Copilot propose alors un tableau croisé par point d’accueil.',
      gemini:
        'Dans Google Sheets, « Demander à Gemini » peut créer le tableau de synthèse et un graphique.',
    },
    vigilance:
      'Les réponses individuelles d’une enquête peuvent contenir des noms ou des situations personnelles : ne transmettez à l’IA que le tableau agrégé.',
    formateur: {
      resultat:
        'Accueil central : 260 répondants, 80,4 % de satisfaits, 9,9 min d’attente. Mairie annexe : 89,1 % mais seulement 46 répondants, 5,1 min. État civil : 155 répondants, 26,5 min d’attente, 50 % de satisfaits hors semaine 3 (ligne impossible), d’où la priorité donnée à l’état civil.',
      criteres: [
        'La ligne S3 du guichet état civil (39 satisfaits pour 35 répondants) est signalée et traitée à part.',
        'L’attente moyenne est pondérée par le nombre de répondants.',
        'La mairie annexe est présentée comme un résultat fragile.',
        'Les trois actions s’appuient sur des chiffres, en priorité l’attente à l’état civil.',
      ],
      pieges: [
        'Faire la moyenne simple des moyennes hebdomadaires, sans pondérer.',
        'Présenter les 89 % de la mairie annexe comme le meilleur résultat sans parler du faible nombre de répondants.',
      ],
      competence: 'discernement',
      technique: 'decomposer',
    },
    motsCles: ['enquête de satisfaction', 'usagers', 'accueil', 'CSV', 'indicateurs'],
  },
  {
    id: 'coll-evenement-communal',
    titre: 'Planifier la fête de la commune',
    metier: 'collectivites',
    niveau: 'intermediaire',
    famille: 'organiser',
    duree: 30,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'La fête de la commune de Boulouparis a lieu le samedi 7 novembre, sur le terrain municipal. Vous coordonnez l’organisation pour la mairie : associations, sécurité, buvette, scène, communication. Il reste quatre semaines et les informations arrivent par morceaux.',
    objectif:
      'Faire construire un rétroplanning et une liste de tâches à partir d’informations éparses, puis les ajuster en plusieurs échanges.',
    etapes: [
      'Envoyez le prompt de départ avec les notes du matériau.',
      'Vérifiez le rétroplanning : chaque tâche a un responsable, une échéance réaliste, et les dépendances sont respectées (pas d’affiche avant le programme validé).',
      'Demandez la liste des points bloquants et des décisions à faire prendre par les élus.',
      'Faites ajouter un plan B en cas de forte pluie ou d’alerte météo.',
      'Exportez le tout en tableau partagé et demandez une check-list du jour J.',
    ],
    prompt:
      'Tu es chargé de l’événementiel dans une mairie de Nouvelle-Calédonie. À partir des notes ci-dessous, prépare le rétroplanning de la fête de la commune du samedi 7 novembre 2026. Nous sommes le lundi 12 octobre.\nRends un tableau : tâche, responsable, échéance, dépendance (tâche à terminer avant), statut. Trie par échéance.\nSi un responsable ou une information manque, écris « à désigner » ou « à confirmer ». N’invente aucun délai administratif. Termine par la liste des décisions à faire prendre par les élus.\n\n<notes>\n[collez les notes ici]\n</notes>',
    materiau: {
      titre: 'Notes en vrac',
      texte:
        '- terrain municipal réservé ; salle polyvalente en repli si pluie (à confirmer avec le service des sports)\n- 14 associations inscrites, 3 en attente ; clôture des inscriptions le 16/10\n- scène et sono : devis de 280 000 XPF reçu, à faire valider par le maire\n- buvette tenue par le comité des fêtes ; autorisation à demander (délai ? se renseigner)\n- sécurité : renfort de la police municipale et poste de secours à prévoir (qui contacter ?)\n- programme : danses des associations, concours de bougna, tournoi de pétanque, groupe de musique le soir\n- communication : affiche, page Facebook, radio locale ; l’imprimeur demande 10 jours\n- toilettes mobiles : 2 devis à comparer\n- bénévoles : il en faut 25, on en a 12',
    },
    variantes: {
      simple: 'Planifier seulement la communication de l’événement.',
      poussee:
        'Ajouter le budget prévisionnel et le suivi des dépenses dans un tableau partagé que chaque responsable met à jour.',
    },
    astuces: {
      claude:
        'Demandez le rétroplanning en fichier Excel grâce à la création de fichiers, avec un onglet pour la check-list du jour J.',
      copilot:
        'Transformez le tableau en Copilot Page pour que chaque responsable mette à jour son statut.',
      gemini: 'Exportez le tableau dans Google Sheets et partagez-le avec les associations.',
    },
    vigilance:
      'Les délais administratifs (autorisation de buvette, sécurité) ne se devinent pas : vérifiez-les auprès des services concernés. Ne donnez pas à l’IA les coordonnées personnelles des bénévoles.',
    formateur: {
      resultat:
        'Un rétroplanning trié par échéance, avec ses dépendances (devis validé avant commande, programme validé avant l’affiche, affiche chez l’imprimeur au plus tard vers le 26 octobre), des responsables « à désigner », un plan B pluie et les décisions pour les élus (scène, toilettes, repli en salle).',
      criteres: [
        'Les dépendances entre tâches sont respectées.',
        'Les délais inconnus (buvette, sécurité) restent « à confirmer », pas inventés.',
        'Le manque de 13 bénévoles apparaît comme un point bloquant.',
        'Un plan B météo est prévu.',
      ],
      pieges: [
        'Un délai d’autorisation de buvette inventé par l’IA et présenté comme une règle.',
        'Une affiche programmée avant la validation du programme.',
      ],
      competence: 'delegation',
      technique: 'decomposer',
    },
    motsCles: ['événement', 'fête de la commune', 'rétroplanning', 'organisation', 'associations'],
  },
  {
    id: 'coll-avis-tous-publics',
    titre: 'Adapter un avis aux usagers pour un public peu à l’aise avec l’écrit',
    metier: 'collectivites',
    niveau: 'intermediaire',
    famille: 'corriger',
    duree: 30,
    outils: ['claude', 'chatgpt', 'gemini', 'copilot'],
    outilConseille: 'claude',
    situation:
      'Le centre communal d’action sociale (CCAS) ouvre les demandes d’aide à la scolarité. L’avis officiel est long et technique. Une partie du public lit difficilement le français ; certaines familles parlent surtout une langue kanak, le wallisien ou le futunien. Vous préparez des versions adaptées, qui serviront aussi aux médiateurs.',
    objectif:
      'Produire en plusieurs échanges une version facile à lire, un texte à dire à voix haute et une trame pour les médiateurs, en vérifiant la fidélité au texte officiel.',
    etapes: [
      'Envoyez le prompt de départ avec l’avis du matériau pour obtenir la version facile à lire.',
      'Comparez avec l’original : conditions, pièces, dates et lieux doivent être identiques.',
      'Demandez ensuite un texte de 45 secondes à lire à voix haute (radio, accueil, réunion de quartier).',
      'Demandez une trame de questions-réponses pour les agents et les médiateurs qui expliqueront l’aide dans leur langue.',
      'Faites tester la version facile à lire par un médiateur ou deux personnes du public visé, puis corrigez.',
    ],
    prompt:
      'Tu es agent d’un centre communal d’action sociale en Nouvelle-Calédonie. Réécris l’avis ci-dessous en version facile à lire et à comprendre :\n- des phrases très courtes, une idée par phrase ;\n- des mots de tous les jours ; si un mot difficile est indispensable, explique-le ;\n- des titres sous forme de questions : « C’est quoi ? », « Pour qui ? », « Comment faire ? », « Avant quand ? » ;\n- les papiers à apporter en liste.\nGarde toutes les conditions, dates et lieux. N’ajoute aucune condition. Ne traduis pas dans une autre langue : cette version servira de base aux médiateurs.\n\n<avis>\n[collez l’avis ici]\n</avis>',
    materiau: {
      titre: 'Avis officiel',
      texte:
        'AVIS – AIDE COMMUNALE À LA SCOLARITÉ 2027\nEn application de la délibération n° 2026-58 du conseil municipal, une aide forfaitaire de 15 000 XPF par enfant scolarisé, de l’école maternelle au lycée, est attribuée aux foyers domiciliés sur le territoire communal dont le quotient familial n’excède pas le plafond fixé par ladite délibération. Les demandes sont recevables du lundi 2 novembre au vendredi 18 décembre 2026 inclus, au CCAS (hôtel de ville, rez-de-chaussée) ou lors des permanences organisées dans les maisons de quartier selon le calendrier affiché. Pièces justificatives : livret de famille ou acte de naissance de l’enfant, justificatif de domicile de moins de trois mois, attestation de quotient familial, relevé d’identité bancaire. Les dossiers incomplets ne pourront faire l’objet d’une instruction. Le versement interviendra par virement au cours du mois de février 2027.',
    },
    variantes: {
      simple: 'Réécrire seulement la partie « papiers à apporter ».',
      poussee:
        'Créer l’affiche correspondante dans Canva avec des pictogrammes, et la faire valider par des médiateurs de chaque communauté.',
    },
    astuces: {
      claude:
        'Demandez à Claude la liste de ce qu’il a retiré ou reformulé : vous vérifiez qu’aucune condition n’a disparu.',
      chatgpt: 'Dans le canevas, simplifiez une seule rubrique à la fois.',
      gemini:
        'Ouvrez la version facile à lire dans Canvas et ajustez une rubrique sans tout régénérer.',
    },
    vigilance:
      'Une traduction automatique dans une langue kanak, en wallisien ou en futunien n’est pas fiable : passez par des agents ou des médiateurs qui parlent la langue. Le texte simplifié ne remplace pas l’avis officiel, qui reste affiché.',
    formateur: {
      resultat:
        'Une version facile à lire fidèle (15 000 XPF par enfant, de la maternelle au lycée, du 2 novembre au 18 décembre, quatre papiers, virement en février) qui renvoie au CCAS pour le plafond, non chiffré dans l’avis ; un texte de 45 secondes ; une trame pour les médiateurs.',
      criteres: [
        'Les conditions, dates, lieux et pièces sont identiques à l’avis.',
        'Le plafond, non chiffré dans l’avis, n’est pas inventé.',
        'La version a été testée auprès d’un médiateur ou du public visé.',
        'Aucune traduction automatique n’est diffusée sans relecture par un locuteur.',
      ],
      pieges: [
        'Une version qui invente un montant de plafond.',
        'Une traduction automatique publiée telle quelle.',
      ],
      competence: 'diligence',
      technique: 'iterer',
    },
    motsCles: ['facile à lire', 'FALC', 'simplification', 'CCAS', 'médiateurs', 'langues'],
  },
  {
    id: 'coll-note-elus-dossier',
    titre: 'Préparer une note de synthèse pour les élus à partir d’un dossier',
    metier: 'collectivites',
    niveau: 'avance',
    famille: 'synthetiser',
    duree: 45,
    outils: ['notebook', 'claude'],
    outilConseille: 'notebook',
    situation:
      'Le conseil municipal doit se prononcer sur un projet de déchèterie intercommunale. Le dossier dépasse 150 pages : étude de faisabilité, compte rendu de réunion publique, projet de délibération, avis des services. Le maire veut une note de deux pages pour les élus, neutre et sourcée.',
    objectif:
      'Exploiter un corpus avec Gemini Notebook pour produire une note neutre, dont chaque affirmation renvoie à un passage du dossier.',
    etapes: [
      'Rassemblez les documents publics du dossier ; à défaut, faites générer un dossier fictif d’entraînement avec la consigne du matériau.',
      'Créez un carnet dans Gemini Notebook, ajoutez les documents comme sources et générez une carte mentale pour repérer les grands thèmes.',
      'Envoyez le prompt de départ pour obtenir la note.',
      'Ouvrez chaque citation pour vérifier les chiffres (coûts, surfaces, dates) et corrigez la note si besoin.',
      'Vérifiez que les contradictions entre documents sont signalées et que la note ne recommande rien.',
      'Faites relire la note par le directeur général des services avant diffusion.',
    ],
    prompt:
      'À partir uniquement des sources de ce carnet, rédige une note de synthèse de deux pages pour les élus du conseil municipal sur le projet de déchèterie intercommunale.\nStructure : objet de la décision ; présentation du projet ; coûts et financements ; avantages attendus ; réserves exprimées ; calendrier ; questions encore ouvertes.\nTon neutre : ne recommande rien. Cite la source de chaque chiffre et de chaque position. Signale les points où les documents se contredisent. Si une information attendue (le coût de fonctionnement annuel, par exemple) ne figure pas dans les sources, écris-le.',
    materiau: {
      titre: 'Consigne pour générer un dossier fictif d’entraînement',
      texte:
        'Génère quatre documents fictifs de deux pages chacun sur un projet de déchèterie intercommunale en Nouvelle-Calédonie :\n1. une étude de faisabilité (investissement : 180 millions de XPF ; terrain de 1,2 hectare) ;\n2. le compte rendu d’une réunion publique (inquiétudes sur la circulation des camions et les odeurs) ;\n3. un projet de délibération (participation de la commune : 25 % de l’investissement ; terrain de 1,5 hectare) ;\n4. l’avis du service technique, qui ne chiffre pas le coût de fonctionnement.\nNoms de personnes et de lieux fictifs. Présente chaque document séparément, avec un titre.',
    },
    variantes: {
      simple: 'Charger deux documents et demander seulement la partie « coûts et financements ».',
      poussee:
        'Générer aussi un résumé audio pour les élus qui préfèrent écouter, et une FAQ des questions posées en réunion publique avec les réponses du dossier.',
    },
    astuces: {
      notebook:
        'La carte mentale aide à bâtir le plan ; les citations numérotées permettent de vérifier chaque chiffre en un clic.',
      claude:
        'Pour l’entraînement, Claude peut générer les quatre documents fictifs en fichiers Word grâce à la création de fichiers, à charger ensuite dans le carnet.',
    },
    vigilance:
      'Une note pour les élus reste neutre : vérifiez qu’aucun avis ne s’y glisse. Ne chargez aucun document contenant des données personnelles (noms de riverains, courriers nominatifs).',
    formateur: {
      resultat:
        'Une note neutre de deux pages dont chaque chiffre est sourcé (180 millions de XPF, participation de 25 %, soit 45 millions), qui signale la contradiction sur la surface du terrain (1,2 ou 1,5 hectare) et l’absence de coût de fonctionnement.',
      criteres: [
        'Chaque chiffre de la note a été vérifié dans sa source.',
        'La contradiction sur la surface du terrain est signalée.',
        'La note ne recommande rien et rapporte les réserves de la réunion publique.',
        'Les informations absentes sont dites comme telles.',
      ],
      pieges: [
        'Une note qui conclut que « le projet est favorable » : ce n’est pas son rôle.',
        'Un coût de fonctionnement estimé alors qu’il ne figure dans aucune source.',
      ],
      competence: 'discernement',
      technique: 'sources',
    },
    motsCles: ['note de synthèse', 'élus', 'dossier', 'Gemini Notebook', 'délibération'],
  },
  {
    id: 'coll-veille-appels-projets',
    titre: 'Mettre en place une veille sur les appels à projets ouverts aux communes',
    metier: 'collectivites',
    niveau: 'avance',
    famille: 'veiller',
    duree: 45,
    outils: ['gemini', 'chatgpt', 'claude'],
    outilConseille: 'gemini',
    situation:
      'Votre commune veut financer la rénovation de ses équipements sportifs et un projet de jardins partagés. Le directeur général des services vous demande de repérer chaque mois les appels à projets et les financements auxquels elle peut répondre, avec leurs dates limites.',
    objectif:
      'Mettre en place une veille sourcée et planifiée, vérifier chaque appel à projets sur sa page officielle et tenir un tableau de suivi.',
    etapes: [
      'Lancez une recherche approfondie avec le prompt de départ, en précisant les projets de la commune.',
      'Ouvrez chaque source : l’appel existe-t-il, est-il ouvert aux communes calédoniennes, la date limite est-elle exacte ?',
      'Écartez les appels clos, ceux d’un autre territoire et ceux dont la page officielle est introuvable.',
      'Rassemblez les appels retenus dans un tableau : financeur, objet, bénéficiaires, montant, date limite, pièces demandées, lien.',
      'Programmez la relance chaque mois (« Programmer des actions » dans Gemini, ou tâche planifiée, payante, dans ChatGPT ou Claude).',
      'Relisez la première note reçue et n’ajoutez au tableau que ce que vous avez vérifié.',
    ],
    prompt:
      'Tu es chargé de mission financements dans une mairie de Nouvelle-Calédonie. Recherche les appels à projets, subventions et programmes de financement actuellement ouverts aux communes de Nouvelle-Calédonie pour ces projets : [rénovation d’équipements sportifs, jardins partagés…].\nCherche notamment du côté du gouvernement de la Nouvelle-Calédonie, des provinces, de l’État et des fonds européens ou régionaux accessibles au territoire.\nPour chaque financement : financeur, objet, bénéficiaires éligibles, montant ou taux, date limite, lien vers la page officielle. Ne retiens que ce qui est ouvert aujourd’hui. Si une information n’est pas sur la page officielle, écris « non indiqué ». N’invente aucun dispositif.',
    variantes: {
      simple: 'Faire une recherche ponctuelle pour un seul projet.',
      poussee:
        'Charger les règlements des appels retenus dans Gemini Notebook pour préparer la liste des pièces à fournir et un calendrier de réponse.',
    },
    astuces: {
      gemini:
        'Deep Research rend un rapport sourcé à exporter dans Google Docs ; « Programmer des actions » relance la veille chaque mois.',
      chatgpt:
        'La recherche approfondie, limitée en gratuit, suffit pour la première recherche ; les tâches planifiées sont payantes.',
      claude:
        'La Recherche, payante, convient à cette enquête en plusieurs étapes ; ouvrez chaque lien cité.',
    },
    vigilance:
      'Un dispositif inventé ou périmé fait perdre des semaines : seule la page officielle du financeur fait foi. L’éligibilité et les dates se confirment aussi par téléphone auprès du financeur.',
    formateur: {
      resultat:
        'Un tableau de suivi des financements vérifiés sur leurs pages officielles, avec dates limites et liens, une liste des pistes écartées avec leur raison, et une veille mensuelle programmée.',
      criteres: [
        'Chaque ligne du tableau renvoie à une page officielle ouverte par l’apprenant.',
        'Les appels clos ou hors territoire sont écartés.',
        'La veille est programmée et la première note a été relue.',
      ],
      pieges: [
        'Un appel à projets réservé à la métropole présenté comme ouvert aux communes calédoniennes.',
        'Une date limite recopiée sans vérification, déjà dépassée.',
        'Un lien inventé qui ne mène nulle part.',
      ],
      competence: 'discernement',
      technique: 'sources',
    },
    motsCles: ['appels à projets', 'subventions', 'financements', 'veille', 'Deep Research'],
  },
  {
    id: 'coll-assistant-accueil',
    titre: 'Créer un assistant d’accueil pour les agents, avec des limites strictes',
    metier: 'collectivites',
    niveau: 'avance',
    famille: 'automatiser',
    duree: 60,
    outils: ['copilot', 'claude', 'chatgpt', 'gemini'],
    outilConseille: 'copilot',
    situation:
      'Les agents d’accueil de votre mairie répondent chaque jour aux mêmes questions : pièces pour une carte d’identité, inscription à la cantine, collecte des encombrants, horaires des services. Vous créez un assistant interne qui les aide à retrouver la bonne réponse dans les documents de la mairie. Il ne doit jamais recevoir de données d’usagers.',
    objectif:
      'Concevoir un assistant dont les instructions fixent ce qu’il fait, ce qu’il refuse et comment il cite ses sources, puis le tester, y compris sur des cas à risque.',
    etapes: [
      'Rassemblez les documents de référence publics : guides des démarches, règlements des services, horaires, tarifs votés.',
      'Créez un agent (Copilot), un Projet (Claude, ChatGPT) ou un Gem (Gemini) avec ces documents et les instructions du prompt de départ.',
      'Testez les six questions du matériau, dont deux sont des pièges.',
      'Vérifiez que l’assistant cite le document utilisé, renvoie vers le service compétent quand il ne sait pas et n’utilise aucune donnée personnelle.',
      'Corrigez les instructions et refaites les tests.',
      'Rédigez une consigne d’utilisation d’une demi-page pour les agents.',
    ],
    prompt:
      'Tu es l’assistant interne des agents d’accueil de la mairie de [nom de la commune]. Tu aides les agents à trouver la bonne information dans les documents de la mairie ; tu ne t’adresses jamais directement aux usagers.\n\nRègles :\n- Réponds uniquement à partir des documents fournis et cite le document et le passage utilisés.\n- Si la réponse n’y est pas, dis-le et indique le service à contacter. N’invente jamais une pièce, un délai, un tarif ou une règle.\n- Si un agent te donne des informations sur un usager (nom, adresse, situation, numéro de dossier), ne les utilise pas : rappelle que l’assistant ne doit pas recevoir de données personnelles et réponds de façon générale.\n- Tu ne prends aucune décision sur un dossier : tu informes l’agent.\n- Réponses courtes : une liste ou trois phrases au maximum.',
    materiau: {
      titre: 'Questions de test',
      texte:
        '1. Quelles pièces faut-il pour une première carte d’identité pour un enfant mineur ?\n2. Quand passe la collecte des encombrants dans le quartier de Tindu ?\n3. Mme Kaloi, 12 rue des Manguiers, est en difficulté financière et n’a pas payé la cantine : peut-elle avoir une remise ?\n4. Quels sont les horaires du service de l’état civil le samedi ?\n5. Un usager demande si son permis de construire sera accepté. Que lui répondre ?\n6. Combien coûte la location de la salle polyvalente pour un mariage ?',
    },
    variantes: {
      simple: 'Créer un prompt réutilisable avec trois documents, sans assistant partagé.',
      poussee:
        'Organiser une semaine de test avec trois agents et un registre des réponses fausses, avant toute généralisation.',
    },
    astuces: {
      copilot:
        'Selon la licence, « Créer un agent » permet de le partager aux agents d’accueil dans l’environnement Microsoft 365 de la mairie.',
      claude:
        'Dans un Projet, déposez les guides des démarches dans les fichiers et les règles dans les instructions.',
      chatgpt:
        'Un Projet suffit pour tester ; vérifiez avec le service informatique quel outil est autorisé pour les agents.',
      gemini: 'Un Gem avec les guides des démarches en fichiers convient pour un premier test.',
    },
    vigilance:
      'Une collectivité traite des données personnelles protégées : l’assistant ne reçoit aucune donnée d’usager, et son usage est validé par la direction et le service informatique avant tout déploiement. L’agent vérifie chaque réponse.',
    formateur: {
      resultat:
        'Un assistant qui répond avec citation aux questions 1, 2, 4 et 6 si les documents le permettent, n’utilise pas les données personnelles de la question 3 et répond de façon générale, et renvoie la question 5 vers le service de l’urbanisme sans se prononcer.',
      criteres: [
        'Les instructions fixent les refus : données personnelles, décisions sur un dossier.',
        'L’assistant cite ses sources et dit quand il ne sait pas.',
        'Les deux questions pièges (3 et 5) sont bien traitées après correction des instructions.',
        'Une consigne d’utilisation pour les agents est rédigée.',
      ],
      pieges: [
        'Un assistant qui « accorde » une remise ou se prononce sur un permis de construire.',
        'Des tests faits avec de vraies données d’usagers.',
      ],
      competence: 'diligence',
      technique: 'instructions',
    },
    motsCles: ['assistant', 'accueil', 'agent', 'données personnelles', 'démarches'],
  },
  {
    id: 'coll-continuite-cyclone',
    titre: 'Préparer la continuité du service aux usagers pendant une alerte cyclonique',
    metier: 'collectivites',
    niveau: 'avance',
    famille: 'organiser',
    duree: 45,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Votre mairie doit mettre à jour l’organisation de l’accueil des usagers en période cyclonique : fermeture des guichets, permanence téléphonique, informations à diffuser, reprise après le passage du cyclone. Le plan actuel date de 2020 et ne prévoit ni réseaux sociaux ni SMS.',
    objectif:
      'Enchaîner diagnostic, organisation, messages et check-lists avec l’IA, en vérifiant sur les sources officielles tout ce qui relève des autorités.',
    etapes: [
      'Envoyez le prompt de départ avec l’extrait du plan actuel : l’IA fait d’abord un diagnostic, sans proposer de solution.',
      'Vérifiez sur les sites officiels (haut-commissariat, sécurité civile, Météo-France Nouvelle-Calédonie) les phases d’alerte et les consignes à la population ; corrigez l’IA si besoin.',
      'Demandez une organisation par phase : qui fait quoi à l’accueil, au standard, sur les réseaux sociaux, avec un suppléant pour chaque rôle.',
      'Faites rédiger les messages types de chaque phase, qui renvoient toujours aux consignes officielles.',
      'Demandez une check-list d’une page pour la fermeture des guichets et une pour leur réouverture.',
      'Faites relire l’ensemble par l’IA pour repérer les contradictions, puis par votre responsable.',
    ],
    prompt:
      'Tu es chargé de l’organisation des services dans une mairie de Nouvelle-Calédonie. Voici un extrait de notre plan de continuité de l’accueil en période cyclonique, qui date de 2020.\n\n<plan_actuel>\n[collez l’extrait ici]\n</plan_actuel>\n\nÉtape 1 seulement : fais un diagnostic. Liste ce qui manque ou paraît dépassé, en particulier les canaux d’information (réseaux sociaux, SMS, site), les suppléances et la reprise après le cyclone. Ne propose pas encore de solution. Pour tout ce qui relève des autorités (phases d’alerte, consignes à la population), précise que je dois le vérifier sur les sources officielles.',
    materiau: {
      titre: 'Extrait du plan actuel (2020)',
      texte:
        '1. En cas d’alerte, le secrétaire général décide de la fermeture des guichets.\n2. L’accueil prévient les usagers présents et ferme les portes.\n3. Un message est enregistré sur le répondeur.\n4. Le standard est renvoyé sur le portable du secrétaire général.\n5. Après le cyclone, les services rouvrent quand le secrétaire général le décide.\n6. Numéros utiles : voir le classeur rouge à l’accueil.',
    },
    variantes: {
      simple: 'Rédiger seulement la check-list de fermeture des guichets.',
      poussee:
        'Organiser un exercice sur table : l’IA joue les appels d’usagers et les messages sur les réseaux pendant une alerte simulée, l’équipe répond, puis tout le monde fait le bilan.',
    },
    astuces: {
      claude:
        'Demandez les check-lists en fichier Word grâce à la création de fichiers, à imprimer et ranger avec le plan.',
      chatgpt:
        'Travaillez dans un Projet : le diagnostic validé reste disponible pour les étapes suivantes.',
      copilot:
        'Transformez les check-lists en Copilot Page pour que les chefs de service les complètent.',
      gemini:
        'Deep Research peut rassembler les sources officielles ; ouvrez-les vous-même avant de reprendre une consigne.',
    },
    vigilance:
      'Les consignes de sécurité à la population viennent des autorités : la mairie les relaie, elle ne les invente pas. Ne mettez pas les numéros personnels des agents dans l’outil d’IA.',
    formateur: {
      resultat:
        'Un plan mis à jour : diagnostic (une seule personne décide et reçoit les appels, aucun canal numérique, pas de critère de réouverture), organisation par phase avec suppléants, messages types renvoyant aux consignes officielles, check-lists de fermeture et de réouverture.',
      criteres: [
        'Les phases d’alerte ont été vérifiées sur une source officielle.',
        'Chaque rôle a un suppléant : la décision ne repose plus sur une seule personne.',
        'Les messages renvoient aux consignes officielles sans en inventer.',
        'Le travail a été mené par étapes, chacune validée avant la suivante.',
      ],
      pieges: [
        'Des consignes de sécurité inventées ou venues d’un autre pays.',
        'Un plan qui garde un seul décideur, joignable sur un seul téléphone.',
      ],
      competence: 'diligence',
      technique: 'decomposer',
    },
    motsCles: ['continuité de service', 'cyclone', 'alerte', 'accueil', 'check-list'],
  },
];
