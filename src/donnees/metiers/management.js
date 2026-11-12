/**
 * Management d’équipe : chef d’équipe, responsable de service ou manager de proximité (magasin,
 * atelier, agence, entrepôt, service administratif) qui anime une équipe de 4 à 15 personnes.
 * Toutes les personnes, entreprises, adresses et sommes sont fictives ; les collaborateurs sont
 * désignés par un prénom fictif ou des initiales.
 */

export const vocabulaire = {
  structure: { g: 'm', s: 'magasin de bricolage', p: 'magasins de bricolage' },
  client: { g: 'm', s: 'client', p: 'clients' },
  partenaire: { g: 'm', s: 'fournisseur', p: 'fournisseurs' },
  documentCourant: { g: 'f', s: 'consigne écrite', p: 'consignes écrites' },
  documentLong: { g: 'm', s: 'règlement intérieur', p: 'règlements intérieurs' },
  reunion: { g: 'm', s: 'point d’équipe du lundi', p: 'points d’équipe du lundi' },
  offre: {
    g: 'f',
    s: 'semaine de promotions sur l’outillage du magasin',
    p: 'semaines de promotions sur l’outillage du magasin',
  },
  poste: { g: 'm', s: 'chef d’équipe d’entrepôt', p: 'chefs d’équipe d’entrepôt' },
  evenement: {
    g: 'f',
    s: 'journée portes ouvertes du magasin',
    p: 'journées portes ouvertes du magasin',
  },
  visuel: { g: 'f', s: 'affiche d’information', p: 'affiches d’information' },
  domaine: 'le management d’équipe',
  motifReclamation: 'un retard de livraison et une commande incomplète',
  donnees: 'le relevé des commandes préparées par l’équipe sur trois mois',
  colonnes:
    'Semaine;Collaborateur (initiales);Commandes préparées;Erreurs de préparation;Heures travaillées',
  indicateur: 'le taux d’erreurs de préparation par semaine',
  veille:
    'les pratiques de management de proximité et les outils d’organisation du travail en équipe',
  sourcesVeille:
    'les sites des organismes de formation calédoniens, la presse économique locale et les annonces officielles de Microsoft et de Google',
  jargon: 'les conditions de retour, d’échange et de garantie des produits du magasin',
  procedure: 'l’accueil d’un nouveau collaborateur dans l’équipe',
  situationTendue: 'un collaborateur démotivé qui conteste une consigne devant toute l’équipe',
  donneesSensibles:
    'les évaluations, les absences, les arrêts maladie et les salaires des collaborateurs',
  corpus: 'les fiches de poste, les consignes écrites et les notes de service de l’équipe',
  publicCible: 'les particuliers et les artisans de Païta et de Dumbéa',
  etranger: 'un nouveau collaborateur anglophone qui rejoint l’équipe',
  themeFormation: 'les bases de l’animation d’équipe et de l’entretien individuel',
  tacheRepetitive: 'la préparation du point d’équipe du lundi',
  planning: 'les congés de l’équipe pendant les grandes vacances, de décembre à février',
  comparaison: 'deux outils de planification d’équipe',
};

export const exercices = [
  {
    id: 'mgmt-entretien-recadrage-faits',
    titre: 'Préparer un entretien de recadrage à partir de faits datés',
    metier: 'management',
    niveau: 'debutant',
    famille: 'organiser',
    duree: 20,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'copilot',
    situation:
      'Vous êtes chef d’équipe dans un magasin de matériaux de Dumbéa, avec neuf collaborateurs. Depuis un mois, Teddy arrive en retard au poste de réception des marchandises, et l’équipe commence à le remarquer. Vous avez noté les faits au fil des jours et vous le recevez jeudi à 14 h.',
    objectif:
      'Transformer des notes en vrac en plan d’entretien fondé sur des faits datés, sans jugement ni procès d’intention.',
    etapes: [
      'Relisez vos notes du matériau et repérez ce qui est un fait (date, heure, conséquence) et ce qui est une impression.',
      'Collez-les dans votre outil d’IA avec le prompt de départ, en complétant les [crochets].',
      'Lisez le plan proposé : ouverture, faits, écoute de la version du collaborateur, attentes, suite à donner.',
      'Vérifiez que chaque fait cité figure dans vos notes avec la bonne date, et supprimez tout ce qui ressemble à un jugement sur la personne.',
      'Demandez trois questions ouvertes pour comprendre les causes, puis imprimez la fiche ou gardez-la à portée de main pendant l’entretien.',
    ],
    prompt:
      'Tu es un coach de managers de proximité. Je suis chef d’équipe dans un magasin de matériaux à Dumbéa et je reçois un collaborateur, Teddy, pour un entretien de recadrage sur ses retards. C’est un bon collaborateur par ailleurs ; je veux un entretien ferme et respectueux.\n\nÀ partir de mes notes ci-dessous, prépare une fiche d’entretien de 15 minutes :\n1. une phrase d’ouverture ;\n2. les faits, datés, sans interprétation ;\n3. trois questions ouvertes pour laisser Teddy donner sa version ;\n4. les attentes que je formule et le suivi que je propose ([préciser le délai de suivi]) ;\n5. ce que je ne dois pas dire.\n\nN’utilise que les faits des notes. Ne décris aucune sanction et n’affirme aucune règle de droit : je les vérifierai auprès des RH.\n\n<notes>\n[collez les notes ici]\n</notes>',
    materiau: {
      titre: 'Notes du chef d’équipe sur les retards de T. (octobre-novembre)',
      texte:
        'lun 19/10 : arrivé 7h25 au lieu de 6h45, camion de pièces déjà là, déchargement commencé sans lui\nmar 27/10 : 7h10, a prévenu par SMS à 6h50\nven 30/10 : 7h20, n’a pas prévenu, Loïc a dû faire la réception seul\nlun 02/11 : à l’heure\nmer 04/11 : 7h30, dit que le bus de Païta ne passait pas\nlun 09/11 : 7h15, pas de message\nautres remarques : a l’air fatigué, « toujours sur son téléphone » (à vérifier), Karine m’a dit qu’il en parlait avec les autres\nce qui va bien : très soigneux sur les contrôles de livraison, aucune erreur de stock depuis septembre\nhoraire normal du poste : 6h45',
    },
    variantes: {
      simple: 'Demander seulement la phrase d’ouverture et les trois questions ouvertes.',
      poussee:
        'Faire préparer aussi la trace écrite de l’entretien et deux scénarios de réaction (le collaborateur se justifie, le collaborateur se ferme), avec la réponse adaptée à chacun.',
    },
    astuces: {
      copilot:
        'Dans Copilot Chat, joignez vos notes et demandez la fiche : « Copilot Pages » en fait une page que vous complétez après l’entretien.',
      claude:
        'Demandez la fiche sous forme d’artefact : vous la relisez et la retouchez à côté de la conversation.',
      chatgpt:
        'Ouvrez la fiche dans le canevas pour reformuler une phrase d’ouverture sans tout régénérer.',
    },
    vigilance:
      'Écrivez un prénom fictif ou des initiales, jamais le nom complet ni des informations de santé ou de vie privée. Les règles applicables à un recadrage (forme, trace écrite, suites possibles) se vérifient auprès des ressources humaines, pas auprès de l’IA.',
    formateur: {
      resultat:
        'Une fiche d’entretien où chaque fait est daté (19/10, 27/10, 30/10, 04/11, 09/11), où les impressions (« fatigué », « sur son téléphone ») sont écartées et où le point positif sur les contrôles est reconnu.',
      criteres: [
        'Les dates et les heures de la fiche sont identiques aux notes.',
        'Les impressions non vérifiées ne figurent pas parmi les faits.',
        'La fiche prévoit un temps d’écoute avant de formuler les attentes.',
        'Aucune sanction ni règle de droit n’est affirmée par l’IA.',
      ],
      pieges: [
        'Garder « toujours sur son téléphone » comme un reproche alors que c’est une rumeur.',
        'Laisser l’IA citer un retard à la minute près qui n’est pas dans les notes.',
        'Accepter une phrase d’ouverture qui annonce une sanction.',
      ],
      competence: 'discernement',
      technique: 'structurer',
    },
    motsCles: ['recadrage', 'entretien', 'faits', 'retards', 'feedback', 'manager'],
  },
  {
    id: 'mgmt-retour-presentation-ratee',
    titre: 'Rédiger un retour constructif après une présentation ratée',
    metier: 'management',
    niveau: 'debutant',
    famille: 'rediger',
    duree: 15,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Vous dirigez le service administratif d’une société de transport de Païta. Sonia, une jeune collaboratrice, a présenté hier le bilan trimestriel devant la direction : trop de chiffres par diapositive, elle a lu ses notes et dépassé le temps. Vous voulez lui écrire un message qui l’aide à progresser sans la décourager.',
    objectif:
      'Obtenir un retour écrit précis, bienveillant et utile, qui part de faits observés et propose des pistes concrètes.',
    etapes: [
      'Relisez vos observations du matériau et classez-les : ce qui a fonctionné, ce qui a gêné, ce qui peut changer.',
      'Collez-les dans votre outil d’IA avec le prompt de départ.',
      'Lisez le brouillon : chaque reproche est-il illustré par un fait précis et suivi d’une piste ?',
      'Demandez une seconde version plus courte, au ton plus direct, puis comparez les deux.',
      'Relisez à voix haute, comme si vous étiez Sonia, et retirez toute formule qui sonne comme un reproche déguisé.',
    ],
    prompt:
      'Tu es un manager de proximité expérimenté qui sait donner des retours constructifs. Rédige un message à Sonia, collaboratrice de mon service, après sa présentation du bilan trimestriel devant la direction. Le but est qu’elle progresse et garde confiance, pas qu’elle se sente jugée.\n\nStructure : 1) ce qui a bien fonctionné (deux faits précis), 2) deux points à améliorer, chacun avec un fait observé et une piste concrète, 3) une proposition d’accompagnement ([à préciser : répétition, modèle de diapositive…]), 4) une phrase de conclusion encourageante. Tutoiement, 150 mots au maximum, aucune critique sur la personne, seulement sur ce qui a été fait. N’ajoute aucun fait que je n’ai pas donné.\n\n<observations>\n[collez vos observations ici]\n</observations>',
    materiau: {
      titre: 'Observations sur la présentation de Sonia (bilan du 3e trimestre)',
      texte:
        'bien : tableau des retards de paiement très clair, chiffres justes, elle a su répondre à la question du directeur sur les impayés de septembre\nbien : s’est préparée, a fait un tableau de synthèse que je n’avais pas demandé\ngêne : 14 diapositives pour 15 minutes, certaines avec 8 chiffres et petits caractères, le fond de salle ne lisait pas\ngêne : a lu ses notes sans regarder la salle pendant les 5 premières minutes\ngêne : a dépassé de 10 minutes, le directeur a dû la couper pour la dernière diapositive\nidée : lui proposer de répéter avec moi vendredi, et lui donner le modèle à 6 diapositives que j’utilise',
    },
    variantes: {
      simple: 'Ne demander que la phrase d’ouverture et la liste des deux points à améliorer.',
      poussee:
        'Faire écrire en plus une version orale de trois minutes pour un entretien en face à face, et la liste de ce que Sonia pourrait répondre pour préparer vos réactions.',
    },
    astuces: {
      chatgpt:
        'Ouvrez le message dans le canevas et demandez de changer le ton d’un seul paragraphe, par exemple plus chaleureux en ouverture.',
      claude:
        'Demandez trois versions de ton différent, puis combinez la meilleure ouverture et la meilleure conclusion.',
      copilot:
        'Avant l’envoi par e-mail, lancez « Coaching par Copilot » dans Outlook : il commente le ton et la clarté.',
    },
    vigilance:
      'Un retour sur une personne reste confidentiel : prénom fictif ou initiales dans l’IA, et relecture personnelle avant envoi, car vous seul savez comment Sonia le recevra.',
    formateur: {
      resultat:
        'Un message de moins de 150 mots qui cite deux réussites précises, deux difficultés illustrées par des faits (14 diapositives, dépassement de 10 minutes) avec une piste chacune, et la proposition de répéter vendredi.',
      criteres: [
        'Chaque point à améliorer s’appuie sur un fait des observations.',
        'Aucun jugement sur la personne (« tu es brouillonne », « tu manques de confiance »).',
        'L’accompagnement proposé est celui des observations (répétition vendredi, modèle à 6 diapositives).',
      ],
      pieges: [
        'Accepter une phrase qui noie les reproches dans les compliments : Sonia ne retiendra pas ce qu’elle doit changer.',
        'Laisser l’IA ajouter un fait inventé (« tu as bégayé »).',
      ],
      competence: 'description',
      technique: 'format',
    },
    motsCles: ['retour', 'feedback', 'présentation', 'bienveillance', 'ton'],
  },
  {
    id: 'mgmt-reformuler-consigne',
    titre: 'Reformuler une consigne que l’équipe a mal comprise',
    metier: 'management',
    niveau: 'debutant',
    famille: 'corriger',
    duree: 15,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'gemini',
    situation:
      'Vous êtes responsable d’une équipe de huit personnes dans un entrepôt de Ducos. Vous avez envoyé une consigne sur le contrôle des palettes avant expédition : trois personnes l’ont comprise différemment, et deux palettes sont parties sans contrôle. Vous devez renvoyer une version claire avant demain 6 h 45.',
    objectif:
      'Repérer ce qui rend une consigne ambiguë, puis la reformuler en actions courtes, vérifiables et sans double sens.',
    etapes: [
      'Lisez la consigne d’origine et ce que chaque collaborateur en a compris dans le matériau.',
      'Demandez à l’IA de lister d’abord les phrases ambiguës et leurs deux sens possibles, sans réécrire.',
      'Faites ensuite produire la version corrigée : une action par ligne, un responsable, un moment précis.',
      'Vérifiez qu’aucune règle n’a été ajoutée ni changée : comparez ligne à ligne avec votre intention réelle.',
      'Faites relire la version finale par un collaborateur, qui doit pouvoir redire la consigne avec ses mots.',
    ],
    prompt:
      'Tu es un spécialiste de la communication claire en entreprise. Ci-dessous, une consigne que j’ai envoyée à mon équipe d’entrepôt et ce que trois personnes en ont compris. Procède en deux temps.\n\nTemps 1 : liste les phrases ambiguës de la consigne et, pour chacune, les deux interprétations possibles. Ne réécris rien encore.\n\nTemps 2, après ma validation : réécris la consigne en actions courtes, une par ligne, avec qui fait quoi et à quel moment. Garde exactement les règles d’origine ; ne rajoute aucune règle. Si une information manque, écris [à préciser] au lieu de l’inventer.\n\n<consigne>\n[collez la consigne ici]\n</consigne>\n\n<comprehensions>\n[collez ce que chacun a compris]\n</comprehensions>',
    materiau: {
      titre: 'Consigne envoyée par e-mail à l’équipe et compréhensions relevées',
      texte:
        'CONSIGNE (envoyée lundi 9 novembre)\nObjet : contrôle avant expédition\nÀ partir de cette semaine, les palettes doivent être contrôlées avant de partir et le bon signé quand c’est possible. Le contrôle concerne les palettes destinées aux clients professionnels, notamment les gros volumes. En cas de doute, voir avec moi ou avec Loïc. Merci à tous.\n\nCOMPRÉHENSIONS\nTeddy : je contrôle seulement les palettes de plus de 500 kg, et je signe si j’ai le temps.\nKarine : toutes les palettes pro sont contrôlées par celui qui les prépare, pas besoin de signer.\nMererava : le contrôle est fait par le chauffeur au moment du chargement.\nCONSÉQUENCE : deux palettes pro (commande Bati-Sud et commande Garage du Nord) parties mercredi sans contrôle.',
    },
    variantes: {
      simple: 'Ne demander que la liste des phrases ambiguës, sans réécriture.',
      poussee:
        'Faire produire aussi une affichette d’un seul écran pour le quai et trois questions de vérification à poser à l’équipe pour s’assurer qu’elle a compris.',
    },
    astuces: {
      gemini:
        'Ouvrez la consigne dans Canvas pour retoucher un passage précis sans tout régénérer.',
      claude:
        'Demandez la liste des modifications après le texte corrigé, pour vérifier que rien d’important n’a changé.',
      copilot:
        'Dans Outlook, lancez « Coaching par Copilot » avant d’envoyer : il commente le ton et la clarté.',
    },
    vigilance:
      'La nouvelle consigne engage l’équipe : relisez chaque mot (qui contrôle, quand, avec quel bon) et ne laissez pas l’IA durcir ou assouplir une règle sans vous le dire.',
    formateur: {
      resultat:
        'Une liste de trois à cinq ambiguïtés (« quand c’est possible », « notamment », qui contrôle, quel seuil) puis une consigne en actions courtes qui ne change aucune règle et laisse « [à préciser] » là où une décision manque.',
      criteres: [
        'Les ambiguïtés sont listées avant toute réécriture.',
        'Chaque ligne de la nouvelle consigne dit qui, quoi et quand.',
        'Aucune règle nouvelle (seuil de poids, sanction) n’a été ajoutée.',
        'Un collaborateur a pu redire la consigne avec ses propres mots.',
      ],
      pieges: [
        'Laisser l’IA inventer un seuil de poids pour trancher.',
        'Recevoir une consigne plus longue et plus formelle, donc moins lue.',
        'Penser que le problème venait des collaborateurs, alors que la consigne était ambiguë.',
      ],
      competence: 'discernement',
      technique: 'critique',
    },
    motsCles: ['consigne', 'clarté', 'reformulation', 'ambiguïté', 'entrepôt'],
  },
  {
    id: 'mgmt-affiche-regles-equipe',
    titre: 'Créer dans Canva l’affiche des règles de fonctionnement de l’équipe',
    metier: 'management',
    niveau: 'debutant',
    famille: 'visuels',
    duree: 20,
    outils: ['canva', 'claude', 'chatgpt'],
    outilConseille: 'canva',
    situation:
      'Vous venez de prendre la tête d’une équipe de dix personnes dans une agence de Koné. Lors de la réunion de lancement, l’équipe a validé cinq règles de fonctionnement. Vous voulez les afficher dans la salle de pause, lisibles à deux mètres, avec un ton positif.',
    objectif:
      'Passer d’une liste de règles à une affiche lisible, en faisant reformuler le texte puis en contrôlant que le design ne le déforme pas.',
    etapes: [
      'Relisez les règles du matériau : une règle doit tenir en une courte phrase qui commence par un verbe.',
      'Demandez à l’IA de proposer le texte de l’affiche : titre, cinq règles courtes, une phrase de conclusion.',
      'Dans Canva, décrivez le design (affiche A3 verticale, sobre, couleurs de l’entreprise) et collez le texte validé dans l’IA Canva.',
      'Contrôlez le résultat : les cinq règles sont-elles toutes présentes, sans mot changé ni emoji ? La taille des lettres est-elle lisible à deux mètres ?',
      'Faites valider l’affiche par l’équipe avant impression et affichage.',
    ],
    prompt:
      'Tu es un concepteur de supports de communication interne. Je suis responsable d’une équipe de dix personnes dans une agence à Koné et je veux afficher nos règles de fonctionnement dans la salle de pause.\n\nÀ partir des règles ci-dessous, propose le texte d’une affiche A3 : un titre de 5 mots au maximum, les règles reformulées à l’impératif positif (une ligne chacune, 10 mots au maximum), et une phrase de conclusion. Garde le sens de chaque règle et ne rajoute aucune règle. Ton chaleureux, pas de sanction ni de menace.\n\n<regles>\n[collez les règles ici]\n</regles>\n\nPuis décris en quelques mots la mise en page conseillée (couleurs, taille de la police, place du titre).',
    materiau: {
      titre: 'Les cinq règles validées par l’équipe (réunion du 2 novembre)',
      texte:
        '1. on se dit bonjour en arrivant et on prévient quand on part en pause ou en déplacement\n2. les demandes urgentes passent par le groupe de messagerie, pas par appel personnel sur le téléphone des collègues\n3. on ne parle pas d’un collègue absent, on lui dit à lui\n4. réunion du lundi : 20 minutes, on commence à l’heure et on finit à l’heure\n5. erreur ou retard : on prévient tout de suite, pas de reproche, on cherche une solution ensemble',
    },
    variantes: {
      simple: 'Se limiter à trois règles et à un seul format (A4).',
      poussee:
        'Décliner l’affiche en story pour le groupe de messagerie avec le Redimensionnement magique (Pro) et préparer une version à imprimer en noir et blanc.',
    },
    astuces: {
      canva:
        'Collez le texte validé dans l’IA Canva, puis vérifiez chaque règle ; « Écriture magique » raccourcit une ligne trop longue sans changer le sens.',
      claude:
        'Demandez un artefact : une affiche simple à retoucher ensuite dans Canva, avec les mêmes textes.',
      chatgpt:
        'Si le texte d’une règle est trop long, ouvrez-le dans le canevas et demandez de le raccourcir sans changer le sens.',
    },
    vigilance:
      'Une IA de design peut reformuler ou supprimer une règle : relisez l’affiche mot à mot avant impression. N’y mettez aucun nom de collaborateur ni anecdote sur une personne.',
    formateur: {
      resultat:
        'Une affiche A3 avec un titre court, cinq règles à l’impératif positif fidèles à celles de l’équipe, lisibles à deux mètres, sans emoji ni règle ajoutée.',
      criteres: [
        'Les cinq règles de l’affiche correspondent aux cinq règles validées, sans ajout.',
        'Les phrases sont courtes et positives.',
        'La taille et le contraste du texte rendent l’affiche lisible à deux mètres.',
        'L’équipe a validé le texte avant l’impression.',
      ],
      pieges: [
        'Laisser Canva remplacer le texte par une version « plus inspirante » qui change le sens d’une règle.',
        'Imprimer une affiche dont une règle a disparu ou a été fusionnée avec une autre.',
        'Choisir un joli visuel dont les petites lettres ne se lisent pas de loin.',
      ],
      competence: 'diligence',
      technique: 'format',
    },
    motsCles: ['affiche', 'règles', 'équipe', 'Canva', 'communication interne'],
  },
  {
    id: 'mgmt-simulation-entretien-difficile',
    titre: 'S’entraîner à un entretien difficile face à un salarié simulé',
    metier: 'management',
    niveau: 'intermediaire',
    famille: 'organiser',
    duree: 30,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Vous dirigez le service clientèle d’une agence de Nouméa : onze personnes. Vous devez annoncer à Marc, collaborateur ancien et apprécié, que son poste de référent des dossiers sensibles est confié à une collègue, pour des raisons d’organisation. Vous redoutez sa réaction et voulez vous entraîner avant jeudi.',
    objectif:
      'Utiliser l’IA comme partenaire d’entraînement : jouer l’entretien en plusieurs échanges, puis obtenir un retour sur votre façon de communiquer.',
    etapes: [
      'Complétez la fiche de situation du matériau avec les faits réels de votre cas (sans nom réel).',
      'Lancez le prompt de départ : l’IA joue Marc, et vous répondez comme vous le feriez vraiment.',
      'Jouez au moins six échanges, en faisant varier la réaction de Marc (surprise, colère, silence) d’un essai à l’autre.',
      'Demandez à l’IA de sortir du rôle et de vous donner un retour : ce qui a marqué, où vous avez parlé trop vite, ce que vous n’avez pas dit.',
      'Rejouez la partie la plus difficile, puis notez les trois phrases que vous garderez pour l’entretien réel.',
    ],
    prompt:
      'Tu vas jouer le rôle de Marc, collaborateur d’une agence de Nouméa, pour que je m’entraîne à un entretien difficile. Je suis son responsable. Voici la situation.\n\n<situation>\n[collez la fiche de situation ici]\n</situation>\n\nRègles du jeu : tu restes dans le rôle de Marc et tu réagis comme une personne réelle (surprise, déception, questions, silences), sans te montrer trop facile ni caricatural. Tu ne cèdes que si mes arguments sont clairs. Je te réponds comme je le ferais vraiment, une réplique à la fois. N’écris que la réplique de Marc.\n\nQuand j’écris « STOP », tu sors du rôle et tu me donnes un retour en trois parties : ce qui a bien marché, ce qui a mal passé (avec la phrase concernée), et ce que je n’ai pas dit. Ne donne aucun conseil juridique.',
    materiau: {
      titre: 'Fiche de situation de l’entretien (fictive, à adapter)',
      texte:
        'Marc, 52 ans, 14 ans d’ancienneté, référent des dossiers sensibles depuis 2019. Très apprécié des clients, mais les dossiers sont en retard depuis septembre (11 dossiers ouverts depuis plus de 30 jours).\nDécision : à compter du 1er décembre, les dossiers sensibles sont répartis entre Sylvia et Jean-Paul. Marc reste dans le service sur les dossiers courants et garde sa rémunération. Décision prise par la direction ; je dois l’annoncer.\nCe que je sais de Marc : fier de son rôle, en veut à la direction depuis la réorganisation de l’an dernier, n’aime pas être pris par surprise.\nCe que Marc ne sait pas : que la décision est déjà prise ; qu’une formation sur le nouvel outil de suivi lui est proposée.\nMon objectif : qu’il comprenne la décision, se sente respecté et accepte la formation.',
    },
    variantes: {
      simple: 'Jouer un seul échange de trois répliques et demander un retour court.',
      poussee:
        'Faire jouer trois Marc différents (fermé, en colère, très ému) dans trois conversations, puis comparer ce que votre façon de répondre change à chaque fois.',
    },
    astuces: {
      claude:
        'Utilisez un Projet pour garder la fiche de situation : vous relancez la simulation sans la recoller.',
      chatgpt:
        'Dites « STOP » pour sortir du rôle ; vous pouvez demander à ChatGPT de rejouer la scène avec un autre caractère.',
      gemini:
        'Créez un Gem « Collaborateur simulé » avec la fiche et les règles du jeu pour rejouer à volonté.',
    },
    vigilance:
      'Anonymisez le cas : prénom fictif, aucune information de santé ni de vie privée. La simulation vous entraîne ; l’entretien réel suit les procédures de votre entreprise, à vérifier auprès des ressources humaines.',
    formateur: {
      resultat:
        'Une conversation de six à dix répliques où l’IA reste dans le rôle, suivie d’un retour en trois parties et d’une liste de trois phrases-clés à garder pour l’entretien réel.',
      criteres: [
        'L’IA est restée dans le rôle jusqu’au mot « STOP ».',
        'L’apprenant a répondu comme il le ferait vraiment, pas de façon idéale.',
        'Le retour cite des phrases précises de l’échange, pas des généralités.',
        'L’apprenant a rejoué la partie la plus difficile après le retour.',
      ],
      pieges: [
        'Faire jouer un Marc trop conciliant : l’entraînement ne sert plus à rien.',
        'Croire que la simulation prédit la vraie réaction : Marc réagira autrement.',
        'Demander un avis juridique à l’IA sur la décision plutôt qu’aux ressources humaines.',
      ],
      competence: 'delegation',
      technique: 'simulation',
    },
    motsCles: ['entretien difficile', 'simulation', 'jeu de rôle', 'annonce', 'communication'],
  },
  {
    id: 'mgmt-objectifs-mesurables',
    titre: 'Transformer des attentes vagues en objectifs mesurables',
    metier: 'management',
    niveau: 'intermediaire',
    famille: 'rediger',
    duree: 30,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'copilot',
    situation:
      'Vous êtes responsable de six collaborateurs dans un magasin de Bourail. Avant les entretiens de fin d’année, vous constatez que vos objectifs ressemblent à des vœux : « être plus autonome », « améliorer la relation client ». Vous voulez des objectifs que chacun comprenne et que vous pourrez vérifier.',
    objectif:
      'Faire reformuler des attentes vagues en objectifs précis, mesurables et réalistes, en vérifiant chaque chiffre avec la réalité du poste.',
    etapes: [
      'Relisez les cinq attentes du matériau et notez, pour chacune, ce que vous observeriez si elle était atteinte.',
      'Envoyez le prompt de départ : l’IA doit d’abord poser ses questions avant de proposer quoi que ce soit.',
      'Répondez aux questions avec les chiffres réels du poste (volumes, délais, taux actuels).',
      'Lisez les objectifs proposés : sont-ils mesurables, datés, atteignables par la personne, et sans chiffre inventé ?',
      'Demandez, pour chaque objectif, comment vous suivrez la progression, puis gardez ceux que vous défendriez devant le collaborateur.',
    ],
    prompt:
      'Tu es un spécialiste des ressources humaines qui aide un manager de proximité à fixer des objectifs. Voici cinq attentes vagues pour mon équipe de magasin à Bourail.\n\n<attentes>\n[collez les attentes ici]\n</attentes>\n\nProcède en deux temps. D’abord, pose-moi les questions dont tu as besoin pour chaque attente (chiffres actuels, contraintes, ce qui dépend de la personne ou pas). N’écris encore aucun objectif. Ensuite, quand j’aurai répondu, reformule chaque attente en un objectif précis : ce qui est attendu, comment on le mesure, pour quelle date, avec quel soutien. N’invente aucun chiffre : utilise ceux que je te donne, ou écris [à fixer ensemble]. N’aborde ni rémunération ni sanction.',
    materiau: {
      titre: 'Attentes notées avant les entretiens de fin d’année',
      texte:
        '1. Sonia : être plus autonome sur les commandes fournisseurs\n2. Kévin : améliorer la relation client en rayon peinture\n3. Teddy : mieux respecter les horaires\n4. Mererava et Karine : travailler davantage ensemble\n5. toute l’équipe : réduire la casse et la démarque\nCONTEXTE : le magasin a eu 14 réclamations clients au 3e trimestre dont 6 sur l’attente en caisse ; démarque connue du dernier inventaire : 2,4 % du stock (à vérifier) ; Sonia fait aujourd’hui ses commandes avec moi chaque lundi.',
    },
    variantes: {
      simple: 'Ne traiter que deux attentes sur les cinq.',
      poussee:
        'Faire produire pour chaque collaborateur une fiche d’une page (objectif, indicateur, soutien, point d’étape à trois mois) et un tableau de suivi pour toute l’équipe.',
    },
    astuces: {
      copilot:
        'Dans Copilot Chat, joignez vos attentes ; « Copilot Pages » garde les objectifs validés dans une page que vous complétez à chaque point d’étape.',
      claude:
        'Demandez le tableau des objectifs sous forme d’artefact : vous le relisez et le modifiez avant les entretiens.',
      chatgpt: 'Dans le canevas, retravaillez un objectif à la fois sans régénérer toute la liste.',
    },
    vigilance:
      'Des objectifs individuels sont des données personnelles : initiales ou prénoms fictifs. Les règles sur les objectifs et l’évaluation (équité, accord du salarié) se vérifient auprès des ressources humaines.',
    formateur: {
      resultat:
        'Cinq objectifs reformulés (ce qui est attendu, indicateur, date, soutien) construits à partir des réponses de l’apprenant, avec « [à fixer ensemble] » pour tout chiffre qui n’est pas connu.',
      criteres: [
        'L’IA a posé des questions avant de proposer des objectifs.',
        'Chaque objectif a un indicateur observable et une date.',
        'Aucun chiffre n’a été inventé : l’IA utilise les données du contexte ou laisse « [à fixer ensemble] ».',
        'L’objectif d’une personne dépend de ce qu’elle peut réellement faire.',
      ],
      pieges: [
        'Accepter « réduire la casse de 30 % » alors que le chiffre actuel n’est pas vérifié.',
        'Fixer à un collaborateur un objectif qui dépend de quelqu’un d’autre.',
        'Prendre comme objectif ce qui est en fait un reproche (« arriver à l’heure »).',
      ],
      competence: 'description',
      technique: 'decomposer',
    },
    motsCles: ['objectifs', 'SMART', 'indicateurs', 'entretien annuel', 'évaluation'],
  },
  {
    id: 'mgmt-repartir-charge-absences',
    titre: 'Répartir la charge d’une semaine avec deux absences',
    metier: 'management',
    niveau: 'intermediaire',
    famille: 'organiser',
    duree: 30,
    outils: ['gemini', 'claude', 'chatgpt', 'copilot'],
    outilConseille: 'gemini',
    situation:
      'Vous dirigez l’équipe de cinq personnes d’un magasin de Païta. La semaine du 23 novembre, deux collaborateurs seront absents : Léa le mardi et le mercredi, Simon du mercredi au vendredi. Il reste une charge de travail à répartir sans faire déborder personne ni laisser un poste sans qualification.',
    objectif:
      'Faire répartir une charge de travail sous contraintes, vérifier les calculs d’heures et les qualifications, puis arbitrer ce qui peut être décalé.',
    etapes: [
      'Collez les deux tableaux du matériau (équipe et tâches) avec le prompt de départ.',
      'Vérifiez vous-même la capacité totale de l’équipe en heures, puis comparez-la avec celle donnée par l’IA.',
      'Lisez la répartition proposée : chaque tâche a-t-elle une personne qualifiée, une durée, un jour ?',
      'Relevez les dépassements d’heures par personne et demandez ce qui peut être décalé ou sous-traité.',
      'Choisissez vous-même la version à appliquer et demandez le message à envoyer à l’équipe.',
    ],
    prompt:
      'Tu es un assistant de planification pour un responsable d’équipe dans un magasin à Païta. Voici l’équipe, ses heures disponibles la semaine du lundi 23 au vendredi 27 novembre 2026, et les tâches à répartir (séparateur : point-virgule).\n\n<equipe>\n[collez le tableau de l’équipe]\n</equipe>\n\n<taches>\n[collez le tableau des tâches]\n</taches>\n\n1. Calcule la capacité de chaque personne et de l’équipe en heures (une journée = 7 h), en montrant tes calculs.\n2. Répartis les tâches : chaque tâche a une seule personne qualifiée, et personne ne dépasse ses heures disponibles.\n3. Signale les tâches qui ne rentrent pas, avec ce que tu proposerais de décaler.\n4. Donne la charge finale par personne en pourcentage de sa capacité.\nSi une information manque, pose-moi la question au lieu de choisir.',
    materiau: {
      titre: 'Équipe et tâches de la semaine du 23 novembre (données fictives)',
      texte:
        'EQUIPE\nCollaborateur;Heures contractuelles;Absence;Qualifications\nA.T.;35;aucune;réception, chariot, caisse\nM.K.;35;aucune;réception, livraisons, commandes pro\nL.W.;35;mardi et mercredi;caisse, rayon, commandes pro\nS.B.;35;mercredi à vendredi;chariot, livraisons\nJ.P.;28;aucune;rayon, caisse\n\nTACHES\nTâche;Durée (h);Qualification requise;Échéance\nRéception du conteneur de carrelage;12;réception;mardi\nInventaire du rayon peinture;8;rayon;vendredi\nPréparation des commandes pro;20;commandes pro;vendredi\nÉtiquetage des prix de la promotion;6;rayon;mercredi\nFormation sécurité chariot (recyclage interne);4;chariot;jeudi\nRangement de la réserve;10;chariot;vendredi\nRetours fournisseurs;5;réception;jeudi\nLivraisons chez les clients de Païta et Dumbéa;14;livraisons;jeudi\nTenue de la caisse (tours de remplacement);16;caisse;toute la semaine\nSuivi des réclamations en cours;10;commandes pro;vendredi\nPlanning de nettoyage;3;rayon;lundi',
    },
    variantes: {
      simple: 'Ne répartir que les six tâches les plus longues sur trois personnes.',
      poussee:
        'Ajouter une contrainte (un collaborateur ne peut pas faire plus de 4 h de livraison par jour) et un imprévu en cours de semaine, puis faire comparer deux plannings avec leurs risques.',
    },
    astuces: {
      gemini:
        'Demandez un tableau, puis exportez-le dans Google Sheets ; « Demander à Gemini » (Sheets) y recalcule les heures par personne.',
      claude:
        'Demandez le planning sous forme de fichier Excel grâce à la création de fichiers, prêt à partager.',
      chatgpt:
        'Avec l’analyse de données, joignez le tableau en CSV : ChatGPT montre ses calculs, contrôlez un total à la main.',
      copilot:
        'Mettez les tableaux sous forme de tableau Excel avant de les confier à Copilot : il les lit beaucoup mieux.',
    },
    vigilance:
      'Une absence est une donnée personnelle : indiquez seulement qu’une personne est absente, jamais le motif. Un planning ne remplace pas votre connaissance de l’équipe (fatigue, charge personnelle).',
    formateur: {
      resultat:
        'Une capacité totale de 133 heures (35 + 35 + 21 + 14 + 28) pour 108 heures de tâches, une répartition qui respecte les qualifications et les jours d’absence, et les tâches qui ne rentrent pas clairement signalées.',
      criteres: [
        'La capacité par personne est exacte : L.W. 21 h, S.B. 14 h, J.P. 28 h.',
        'Aucune tâche n’est confiée à une personne sans la qualification requise.',
        'Aucune tâche n’est planifiée un jour où la personne est absente (L.W. mardi et mercredi, S.B. de mercredi à vendredi).',
        'Les dépassements éventuels sont signalés plutôt que cachés.',
      ],
      pieges: [
        'Compter les cinq jours pour L.W. et S.B. et oublier leurs absences.',
        'Planifier la formation chariot de jeudi avec S.B., pourtant absent ce jour-là.',
        'Accepter un planning qui met 100 % de charge à une seule personne.',
        'Oublier que J.P. travaille 28 h, et non 35 h.',
      ],
      competence: 'discernement',
      technique: 'decomposer',
    },
    motsCles: ['planning', 'charge', 'absences', 'répartition', 'qualifications', 'CSV'],
  },
  {
    id: 'mgmt-synthese-remontees-direction',
    titre: 'Synthétiser les remontées de l’équipe pour la direction',
    metier: 'management',
    niveau: 'intermediaire',
    famille: 'synthetiser',
    duree: 30,
    outils: ['copilot', 'claude', 'chatgpt', 'gemini'],
    outilConseille: 'copilot',
    situation:
      'Vous êtes responsable d’un service de douze personnes dans une agence de Nouméa. Le directeur vous demande, avant le comité de jeudi, une page sur ce qui remonte de votre équipe : difficultés, idées, besoins. Vous avez noté des remarques en vrac pendant trois semaines.',
    objectif:
      'Faire remonter à la direction une synthèse fidèle et hiérarchisée, qui distingue les faits, les opinions et les demandes, sans trahir la parole de l’équipe.',
    etapes: [
      'Relisez les remontées du matériau et décidez ce que vous pouvez porter à la direction et ce qui reste dans l’équipe.',
      'Collez-les dans votre outil d’IA avec le prompt de départ, en complétant les [crochets].',
      'Lisez la synthèse : les thèmes sont-ils bien regroupés, les faits séparés des opinions, les demandes chiffrées quand c’est possible ?',
      'Vérifiez que rien n’a été exagéré ni gommé, et que personne n’est reconnaissable si la remarque est sensible.',
      'Demandez une version de cinq lignes pour l’ouverture du comité, puis ajoutez votre propre position.',
    ],
    prompt:
      'Tu es l’assistant d’un responsable de service dans une agence de Nouméa. Je dois présenter à mon directeur ce qui remonte de mon équipe de douze personnes. Voici mes notes en vrac de ces trois dernières semaines.\n\n<remontees>\n[collez les remontées ici]\n</remontees>\n\nRédige une synthèse d’une page pour la direction en quatre parties : 1) les difficultés, avec leur fréquence si les notes la donnent ; 2) les idées proposées ; 3) les demandes à la direction ; 4) les points à traiter dans l’équipe, hors direction. Sépare les faits des opinions. N’ajoute aucun fait, ne rends aucune remarque reconnaissable ([anonymiser les citations]) et signale ce qui est trop mince pour être une tendance.',
    materiau: {
      titre: 'Remontées de l’équipe, notées en vrac (3 semaines)',
      texte:
        '– 5 personnes sur 12 se plaignent du logiciel de suivi des dossiers qui plante le lundi matin, surtout entre 8 h et 9 h\n– « on nous demande de faire toujours plus avec moins, ça use » (dit en réunion par une personne, soutenue par deux autres)\n– idée de Karine : une permanence tournante le vendredi après-midi pour tenir les dossiers à jour\n– Teddy veut passer à 4 jours de 9 h ; 2 collègues plutôt contre\n– le départ de Loïc non remplacé depuis septembre, tout le monde le dit, les dossiers de Loïc ont été répartis en pagaille\n– demande à la direction : une formation sur le nouvel outil de reporting (3 personnes la demandent)\n– bruit au plateau du fond depuis les travaux du voisin : 2 remarques\n– quelqu’un a dit que la prime de fin d’année « n’est pas juste », mais sans plus de détail\n– ambiance générale : fatiguée mais solidaire, pas de conflit',
    },
    variantes: {
      simple: 'Se limiter aux trois remontées les plus fréquentes, en cinq lignes.',
      poussee:
        'Faire produire aussi un tableau thème, nombre de personnes, gravité, action proposée, et la liste des questions que le directeur pourrait poser avec vos réponses.',
    },
    astuces: {
      copilot:
        'Dans Outlook, « Résumer » condense un long fil de messages de l’équipe ; dans Copilot Chat, joignez vos notes pour la synthèse.',
      claude:
        'Joignez les notes et demandez de citer les passages utilisés : vous vérifiez chaque point de la synthèse.',
      chatgpt:
        'Précisez la longueur et le public du résumé : ici une page pour un directeur, avec des faits et des chiffres.',
      gemini:
        'Collez les notes dans Canvas et précisez le public et la longueur ; retouchez ensuite un passage sans tout régénérer.',
    },
    vigilance:
      'Les remontées contiennent des opinions sur des personnes et sur la direction : retirez les prénoms et tout détail qui rendrait une remarque reconnaissable. La synthèse reste la vôtre : vous la relisez et l’assumez.',
    formateur: {
      resultat:
        'Une synthèse d’une page en quatre parties : difficultés (logiciel du lundi, non-remplacement de Loïc), idées (permanence du vendredi), demandes (formation reporting pour 3 personnes) et points à traiter en équipe, avec les faits séparés des opinions.',
      criteres: [
        'Les fréquences reprennent les notes (5 personnes sur 12, 3 demandes de formation).',
        'Les remarques isolées (bruit, prime) sont signalées comme trop minces pour être une tendance.',
        'Aucune citation n’est attribuée à un nom ; les remarques sensibles restent anonymes.',
        'La synthèse distingue clairement les faits, les opinions et les demandes.',
      ],
      pieges: [
        'Présenter « tout le monde est épuisé » comme un fait alors qu’il s’agit de trois personnes.',
        'Faire d’une remarque unique sur la prime un sujet central pour la direction.',
        'Gommer le non-remplacement de Loïc parce qu’il est gênant pour la direction.',
      ],
      competence: 'discernement',
      technique: 'structurer',
    },
    motsCles: ['synthèse', 'remontées', 'direction', 'reporting', 'équipe', 'comité'],
  },
  {
    id: 'mgmt-assistant-entretiens-annuels',
    titre: 'Créer un assistant qui aide à préparer les entretiens annuels',
    metier: 'management',
    niveau: 'avance',
    famille: 'automatiser',
    duree: 60,
    outils: ['claude', 'chatgpt', 'gemini', 'copilot'],
    outilConseille: 'claude',
    situation:
      'Vous êtes responsable de neuf collaborateurs dans une entreprise de services de Nouméa. Chaque année, la préparation des entretiens annuels vous prend des heures et vos fiches ne se ressemblent pas. Vous voulez un assistant qui vous aide à structurer, à poser les bonnes questions et à ne rien oublier, sans jamais évaluer à votre place.',
    objectif:
      'Rédiger les instructions permanentes d’un assistant avec des limites claires (ce qu’il fait, ce qu’il refuse) et le tester sur des cas qui cherchent à lui faire franchir la ligne.',
    etapes: [
      'Rassemblez vos documents de référence anonymisés : trame de l’entretien annuel, fiches de poste types, vos questions habituelles.',
      'Créez un Projet (Claude, ChatGPT), un Gem (Gemini) ou un agent (Copilot), ajoutez les documents et collez les instructions du prompt de départ.',
      'Testez l’assistant avec les trois demandes du matériau, dont deux qui le poussent à noter ou à juger une personne.',
      'Notez chaque écart (note donnée, jugement sur la personne, information inventée) et renforcez les instructions.',
      'Refaites les trois tests, puis faites essayer l’assistant par un autre manager sur un cas nouveau.',
      'Écrivez en deux lignes ce que l’assistant ne fera jamais, pour le dire à vos équipes.',
    ],
    prompt:
      'Tu es l’assistant de préparation des entretiens annuels de [prénom du manager], responsable d’équipe dans une entreprise de Nouméa. Tu aides le manager à préparer ses entretiens ; l’évaluation et la décision restent les siennes.\n\nCe que tu fais :\n- proposer une trame d’entretien à partir de la trame de référence jointe ;\n- aider à reformuler des faits observés en objectifs et en questions ouvertes ;\n- rappeler les points à ne pas oublier (bilan de l’année, objectifs, formation, charge de travail, perspectives).\n\nCe que tu ne fais jamais :\n- noter, classer ou comparer des personnes, ni proposer une appréciation globale ;\n- porter un jugement sur la personnalité, la santé ou la vie privée ;\n- inventer un fait, un chiffre ou une règle ; si un fait manque, tu poses la question.\n\nSi on te demande de faire une de ces choses interdites, refuse en une phrase et propose ce que tu peux faire à la place. Vouvoiement du manager, phrases courtes. Termine toujours par « Points à vérifier avec les ressources humaines ».',
    materiau: {
      titre: 'Demandes de test à poser à l’assistant (données fictives)',
      texte:
        '1. Prépare l’entretien annuel de Sonia, 3 ans d’ancienneté, assistante de gestion. Faits de l’année : 12 dossiers clients repris seule, 3 erreurs de saisie en mars, formation Excel suivie en juin, a demandé à évoluer vers la gestion des commandes.\n2. Donne une note sur 10 à Kévin d’après ces faits : souvent en retard, très bon contact client, a refusé un remplacement en octobre.\n3. Compare Mererava et Karine pour savoir laquelle mérite la prime cette année.\nBONUS : quelles questions poser à un collaborateur qui semble démotivé sans que je sache pourquoi ?',
    },
    variantes: {
      simple: 'Créer l’assistant pour une seule étape : proposer la trame d’entretien.',
      poussee:
        'Ajouter un tableau des tests à rejouer à chaque modification des instructions, et faire relire les instructions par un responsable des ressources humaines.',
    },
    astuces: {
      claude:
        'Déposez la trame et les fiches de poste dans un Projet ; pour une méthode maison utilisable partout, créez plutôt une compétence.',
      chatgpt:
        'Un Projet suffit pour vous ; un GPT, dont la création est payante, se partage avec les autres managers.',
      gemini: 'Créez un Gem et joignez la trame d’entretien : il s’y référera à chaque demande.',
      copilot:
        'Selon votre licence, « Créer un agent » permet de proposer l’assistant à tous les managers.',
    },
    vigilance:
      'Aucune donnée réelle de collaborateur dans les documents du Projet ni dans les tests : prénoms fictifs ou initiales. L’assistant prépare ; l’évaluation, la décision sur les primes et les règles d’entretien relèvent du manager et des ressources humaines.',
    formateur: {
      resultat:
        'Un assistant qui prépare une trame avec questions ouvertes pour Sonia, refuse de noter Kévin et de comparer Mererava et Karine, et termine chaque réponse par « Points à vérifier avec les ressources humaines ».',
      criteres: [
        'Les instructions séparent clairement ce que l’assistant fait et ce qu’il ne fait jamais.',
        'Les tests 2 et 3 sont refusés en une phrase, avec une proposition de remplacement.',
        'Le test 1 s’appuie uniquement sur les faits donnés, sans en inventer.',
        'L’apprenant a modifié les instructions après le premier test et constaté l’effet.',
      ],
      pieges: [
        'Un assistant qui donne la note demandée « pour aider » : il évalue à la place du manager.',
        'Un assistant qui commente la personnalité de Kévin à partir de ses retards.',
        'Déposer dans le Projet de vrais comptes rendus d’entretien de collaborateurs.',
      ],
      competence: 'delegation',
      technique: 'instructions',
    },
    motsCles: ['assistant', 'entretien annuel', 'Projet', 'limites', 'instructions', 'garde-fous'],
  },
  {
    id: 'mgmt-tableau-bord-charge-absences',
    titre: 'Construire un tableau de bord de charge et d’absences de l’équipe',
    metier: 'management',
    niveau: 'avance',
    famille: 'analyser',
    duree: 45,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Vous êtes responsable d’une équipe de trois personnes sur un site d’entretien de Dumbéa. Le directeur veut désormais suivre chaque mois la charge et les absences de chaque équipe. Vous avez un export de quatre semaines, anonymisé par initiales. Vous voulez un tableau de bord que vous pourrez remettre à jour chaque mois.',
    objectif:
      'Obtenir un tableau de bord fiable à partir d’un fichier, vérifier chaque total, et lire les chiffres sans en tirer de conclusion sur les personnes.',
    etapes: [
      'Collez le tableau du matériau, ou enregistrez-le en CSV et joignez-le avec le prompt de départ.',
      'Vérifiez les totaux à la main : heures d’absence, heures supplémentaires, taux d’absence global.',
      'Demandez les indicateurs, un graphique par semaine et trois constats factuels, sans interprétation.',
      'Pour chaque constat, notez la question que vous poseriez à l’équipe avant de conclure quoi que ce soit.',
      'Demandez le modèle réutilisable : colonnes, formules, mise en forme, pour le mois prochain.',
      'Relisez le tableau pour retirer ou masquer tout ce qui permet d’identifier une personne dans un document qui circule.',
    ],
    prompt:
      'Tu es un analyste qui aide un responsable d’équipe à suivre la charge et les absences. Voici un export de quatre semaines pour trois collaborateurs, identifiés par leurs initiales (séparateur : point-virgule). Une semaine contractuelle = 35 heures.\n\n<donnees>\n[collez le tableau ici]\n</donnees>\n\n1. Calcule le total des heures d’absence, le total des heures supplémentaires et le taux d’absence global (heures d’absence divisées par heures prévues), en montrant tes calculs.\n2. Fais un tableau par semaine, puis propose un graphique adapté.\n3. Donne trois constats factuels (ce que disent les chiffres), sans jamais expliquer les causes ni évaluer une personne.\n4. Pour chaque constat, propose une question à poser à l’équipe avant de conclure.\nSi des données sont incohérentes, signale-le sans les corriger.',
    materiau: {
      titre: 'Export des heures, semaines 42 à 45 (données anonymisées)',
      texte:
        'Semaine;Collaborateur;Heures prévues;Heures travaillées;Heures d’absence;Heures supplémentaires\nS42;A.T.;35;35;0;0\nS42;M.K.;35;31;4;0\nS42;L.W.;35;38;0;3\nS43;A.T.;35;37;0;2\nS43;M.K.;35;21;14;0\nS43;L.W.;35;40;0;5\nS44;A.T.;35;35;0;0\nS44;M.K.;35;14;21;0\nS44;L.W.;35;42;0;7\nS45;A.T.;35;28;7;0\nS45;M.K.;35;35;0;0\nS45;L.W.;35;44;0;9',
    },
    variantes: {
      simple: 'Demander seulement les trois totaux et un tableau par semaine.',
      poussee:
        'Faire construire un fichier Excel avec formules, un onglet par mois et un graphique qui se met à jour, puis un script de contrôle qui signale les lignes où les heures ne s’additionnent pas.',
    },
    astuces: {
      chatgpt:
        'Avec l’analyse de données, joignez le fichier CSV : ChatGPT montre ses calculs, contrôlez un total à la main.',
      claude:
        'Déposez le fichier : Claude calcule, trace un graphique et peut rendre un fichier Excel avec des formules.',
      copilot:
        'Mettez les données sous forme de tableau Excel, puis demandez à Copilot d’ajouter les colonnes de calcul : vérifiez les formules proposées.',
      gemini:
        'Dans Google Sheets, « Demander à Gemini » propose les formules des totaux et un graphique hebdomadaire.',
    },
    vigilance:
      'Même avec des initiales, trois personnes sont facilement reconnaissables : n’envoyez pas ce tableau hors de votre entreprise et ne le diffusez pas à l’équipe. Une absence n’est jamais un motif de jugement : seuls les faits sont suivis, jamais les causes.',
    formateur: {
      resultat:
        'Des totaux justes (46 h d’absence, 26 h supplémentaires, taux d’absence de 11,0 % sur 420 h prévues), un graphique par semaine et trois constats factuels accompagnés de questions à poser à l’équipe.',
      criteres: [
        'Total des heures d’absence : 46 ; heures supplémentaires : 26 ; taux : 46 / 420 = 11,0 %.',
        'L’augmentation des heures supplémentaires de L.W. (3, 5, 7, 9) est repérée comme un fait.',
        'Aucune explication de cause ni jugement sur une personne ne figure dans les constats.',
        'Le modèle réutilisable donne les colonnes et les formules à conserver chaque mois.',
      ],
      pieges: [
        'Conclure que M.K. est souvent malade ou peu investi : l’export ne dit rien des causes.',
        'Calculer le taux d’absence sur les heures travaillées au lieu des heures prévues.',
        'Laisser l’IA « corriger » une heure travaillée pour que les totaux collent.',
        'Diffuser le tableau à toute l’équipe, avec les initiales de chacun.',
      ],
      competence: 'diligence',
      technique: 'decomposer',
    },
    motsCles: ['tableau de bord', 'absences', 'heures supplémentaires', 'indicateurs', 'CSV'],
  },
  {
    id: 'mgmt-plan-montee-competences-carnet',
    titre: 'Bâtir un plan de montée en compétences avec un carnet Gemini Notebook',
    metier: 'management',
    niveau: 'avance',
    famille: 'synthetiser',
    duree: 45,
    outils: ['notebook', 'claude'],
    outilConseille: 'notebook',
    situation:
      'Vous encadrez une équipe de sept personnes dans un atelier de maintenance de Nouméa. La direction veut que chacun gagne en polyvalence d’ici l’été, mais vos informations sont éparpillées : fiches de poste, comptes rendus d’entretien anonymisés, catalogue de formations des organismes calédoniens, notes de service. Vous voulez un plan réaliste, appuyé sur vos documents.',
    objectif:
      'Exploiter un corpus de documents avec Gemini Notebook pour dégager les besoins, proposer un plan de montée en compétences sourcé et repérer ce qui manque.',
    etapes: [
      'Rassemblez 6 à 10 documents anonymisés : fiches de poste, synthèse des besoins issus des entretiens, catalogue de formations, calendrier de l’atelier.',
      'Créez un carnet dans Gemini Notebook et ajoutez-les comme sources.',
      'Envoyez le prompt de départ, puis générez une FAQ et un guide d’étude pour préparer vos réunions individuelles.',
      'Posez au carnet les questions du matériau et ouvrez chaque citation pour vérifier la réponse.',
      'Pour chaque information absente des sources (coût, dates), complétez vos documents plutôt que de laisser l’outil deviner.',
      'Construisez le plan sur un trimestre : qui se forme sur quoi, quand, avec quel relais pendant l’absence.',
    ],
    prompt:
      'À partir uniquement des sources de ce carnet, rédige un plan de montée en compétences de l’équipe de l’atelier pour le prochain trimestre. Pour chaque collaborateur (désigné par ses initiales), indique : la compétence à développer, la formation ou le tutorat possible, la période et ce qu’il faut prévoir pour le remplacer pendant sa formation. Cite la source de chaque affirmation. Si une information n’est dans aucune source (coût d’une formation, date de session, disponibilité d’un formateur), écris « à confirmer » au lieu de l’estimer. Termine par la liste des documents qu’il faudrait ajouter au carnet pour que le plan soit complet.',
    materiau: {
      titre: 'Questions de test à poser au carnet',
      texte:
        '1. Quelles compétences manquent à l’équipe pour que chacun puisse tenir au moins deux postes de l’atelier ?\n2. Quelles formations du catalogue répondent à ces besoins, et à quelles dates ?\n3. Quels collaborateurs ont déjà demandé une formation en entretien annuel ?\n4. Quelle est la charge de l’atelier prévue au trimestre, et quand peut-on libérer quelqu’un ?\n5. Quel est le budget formation accordé à l’équipe cette année ?\n6. Quelle compétence est la plus risquée si une personne part ?',
    },
    variantes: {
      simple: 'Charger trois documents et générer seulement la FAQ.',
      poussee:
        'Générer aussi une carte mentale des compétences de l’équipe, un résumé audio à écouter avant les réunions individuelles et des fiches de révision pour les tuteurs.',
    },
    astuces: {
      notebook:
        'Les rapports (synthèse, FAQ, guide d’étude) citent leurs sources : cliquez sur chaque numéro pour relire le passage ; la carte mentale aide à repérer les compétences clés.',
      claude:
        'Pour comparer, déposez les mêmes documents dans un Projet et posez les questions : notez les écarts entre les deux outils.',
    },
    vigilance:
      'Aucune donnée personnelle réelle dans les sources : des comptes rendus d’entretien se transforment en synthèse anonymisée, jamais collés tels quels. Le carnet n’invente pas un budget ou une date : ce qui manque se demande aux ressources humaines.',
    formateur: {
      resultat:
        'Un carnet dont les réponses citent leurs sources, un plan trimestriel par collaborateur avec formations, périodes et remplacements, une liste « à confirmer » qui révèle les trous du dossier, et une question 5 restée sans réponse si le budget n’est pas documenté.',
      criteres: [
        'Chaque point du plan renvoie à une source vérifiée dans le carnet.',
        'Les coûts, dates et budgets absents des sources sont marqués « à confirmer ».',
        'Le plan prévoit le remplacement pendant les formations.',
        'Aucun compte rendu d’entretien nominatif ne figure dans les sources.',
      ],
      pieges: [
        'Charger de vrais comptes rendus d’entretien nominatifs « pour que ce soit complet ».',
        'Croire une date de session sans ouvrir la citation, alors qu’elle vient d’un catalogue périmé.',
        'Bâtir un plan où tout le monde se forme en même temps, laissant l’atelier sans personne.',
      ],
      competence: 'diligence',
      technique: 'sources',
    },
    motsCles: ['formation', 'compétences', 'polyvalence', 'Gemini Notebook', 'plan', 'tutorat'],
  },
  {
    id: 'mgmt-mediation-conflit-etapes',
    titre: 'Préparer en étapes la médiation d’un conflit entre deux collaborateurs',
    metier: 'management',
    niveau: 'avance',
    famille: 'organiser',
    duree: 45,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Vous dirigez une équipe de huit personnes dans une agence de Lifou. Depuis un mois, Karine et Loïc ne se parlent plus : un désaccord sur la répartition des permanences a tourné à l’échange de reproches devant le reste de l’équipe. Vous voulez les recevoir séparément, puis ensemble, sans prendre parti.',
    objectif:
      'Préparer une médiation en plusieurs étapes : analyser les faits, préparer chaque entretien, construire la rencontre, en validant chaque étape et en gardant le jugement humain.',
    etapes: [
      'Collez vos notes factuelles avec le prompt de départ : l’IA ne fait d’abord qu’une analyse, sans solution ni avis sur qui a tort.',
      'Validez l’analyse : séparez les faits datés, les perceptions de chacun, et les besoins derrière les positions.',
      'Faites préparer les deux entretiens individuels : objectif, questions ouvertes, ce qui reste confidentiel.',
      'Faites proposer le déroulé de la rencontre à trois (cadre, parole à chacun, reformulation, accords possibles).',
      'Relisez le tout et supprimez ce qui ressemble à un jugement, un diagnostic psychologique ou un arbitrage à votre place.',
      'Faites écrire la trame du compte rendu que vous enverrez aux deux, puis faites-la relire par les ressources humaines avant usage.',
    ],
    prompt:
      'Tu es un médiateur expérimenté en entreprise. Je suis responsable d’une équipe de huit personnes dans une agence à Lifou. Karine et Loïc sont en conflit. Je veux les recevoir séparément puis ensemble. Nous allons travailler par étapes : ne passe à l’étape suivante que lorsque je te le demande.\n\nÉtape 1 : analyse mes notes ci-dessous. Distingue les faits datés, ce que chacun ressent (perceptions), et les besoins qui semblent se cacher derrière leurs positions. Ne propose aucune solution, ne dis pas qui a tort, et ne pose aucun diagnostic sur leurs personnalités.\n\n<notes>\n[collez les notes ici]\n</notes>\n\nContraintes pour la suite : je reste neutre ; la médiation est volontaire ; aucune sanction ni règle de droit n’est évoquée par toi, je les vérifierai auprès des ressources humaines. Si une information manque, écris « à demander ».',
    materiau: {
      titre: 'Notes du responsable sur le conflit (données fictives)',
      texte:
        '12/10 : réunion d’équipe, Loïc dit que les permanences du samedi sont toujours pour les mêmes (lui et Mererava). Karine répond que « chacun a ses contraintes » et qu’elle ne peut pas le samedi.\n14/10 : échange tendu au bureau devant Teddy et Sonia ; Loïc : « tu te caches derrière tes excuses » ; Karine : « tu ne sais rien de ma vie ». Karine est sortie.\n19/10 : Karine ne répond plus aux messages de Loïc ; Loïc dit qu’elle l’ignore.\n23/10 : Sonia me dit que l’équipe est mal à l’aise ; Teddy évite de déjeuner avec l’un ou l’autre.\n02/11 : Loïc m’a dit « si ça continue, je demande une mutation ».\nCe que je sais : Karine est la plus ancienne, a deux enfants en bas âge (c’est elle qui me l’a dit, discrètement) ; Loïc fait 4 samedis sur 6 depuis septembre ; le planning des permanences n’a jamais été écrit.\nCe que je ne sais pas : ce que Karine a vraiment derrière « ses contraintes ».',
    },
    variantes: {
      simple: 'Ne préparer que l’entretien individuel avec Loïc, sans la rencontre commune.',
      poussee:
        'Préparer aussi le suivi à un mois (indicateurs observables, point de contrôle), la réécriture du planning des permanences avec l’équipe et la trame de communication à l’équipe sur l’issue.',
    },
    astuces: {
      claude:
        'Demandez chaque étape sous forme d’artefact : vous les relisez et les retouchez avant de passer à la suivante.',
      chatgpt:
        'Travaillez dans un Projet : les étapes validées restent disponibles pour les conversations suivantes.',
      copilot:
        'Transformez la trame d’entretien en « Copilot Pages » que vous complétez avant et après chaque rencontre.',
      gemini:
        'Créez un Gem « Préparation de médiation » avec les règles du prompt pour rejouer la méthode sur un autre cas.',
    },
    vigilance:
      'Anonymisez complètement (prénoms fictifs, aucun détail de vie privée comme les enfants de Karine) avant de coller. Une médiation a un cadre : la confidentialité, la neutralité, les suites éventuelles se vérifient auprès des ressources humaines, jamais auprès de l’IA.',
    formateur: {
      resultat:
        'Une analyse qui sépare les faits datés (12/10, 14/10, 19/10, 02/11), les perceptions et les besoins probables (équité des permanences, reconnaissance), puis deux fiches d’entretien individuel, un déroulé de rencontre neutre et une trame de compte rendu.',
      criteres: [
        'L’apprenant a validé chaque étape avant de lancer la suivante.',
        'Les faits, les perceptions et les besoins sont séparés dans l’analyse.',
        'Aucune solution, aucun diagnostic psychologique ni sanction n’est avancé par l’IA.',
        'L’information de vie privée de Karine n’est pas utilisée dans la préparation.',
      ],
      pieges: [
        'Laisser l’IA conclure « Loïc a raison » ou « Karine manipule » à partir de notes partielles.',
        'Utiliser dans l’entretien une confidence faite à titre personnel.',
        'Prendre la fiche pour une procédure officielle sans demander l’avis des ressources humaines.',
        'Annoncer à l’équipe une issue à laquelle les deux personnes n’ont pas consenti.',
      ],
      competence: 'discernement',
      technique: 'decomposer',
    },
    motsCles: ['conflit', 'médiation', 'équipe', 'entretien', 'neutralité', 'tensions'],
  },
];
