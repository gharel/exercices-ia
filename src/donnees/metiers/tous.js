/**
 * Tous métiers : le vocabulaire neutre (aussi utilisé pour « Autre métier ») et les
 * exercices transversaux écrits à la main, valables quel que soit le métier.
 */

export const vocabulaire = {
  structure: { g: 'f', s: 'entreprise', p: 'entreprises' },
  client: { g: 'm', s: 'client', p: 'clients' },
  partenaire: { g: 'm', s: 'fournisseur', p: 'fournisseurs' },
  documentCourant: { g: 'm', s: 'devis', p: 'devis' },
  documentLong: { g: 'm', s: 'contrat de prestation', p: 'contrats de prestation' },
  reunion: { g: 'f', s: 'réunion d’équipe mensuelle', p: 'réunions d’équipe mensuelles' },
  offre: { g: 'm', s: 'nouveau service', p: 'nouveaux services' },
  poste: { g: 'm', s: 'assistant administratif', p: 'assistants administratifs' },
  evenement: { g: 'f', s: 'journée portes ouvertes', p: 'journées portes ouvertes' },
  visuel: { g: 'f', s: 'affiche', p: 'affiches' },
  domaine: 'notre secteur d’activité',
  motifReclamation: 'un retard de livraison et une facture erronée',
  donnees: 'le tableau des ventes mensuelles de l’année, par produit',
  colonnes: 'Mois;Produit ou service;Quantité vendue;Chiffre d’affaires (XPF);Remises (XPF)',
  indicateur: 'l’évolution du chiffre d’affaires d’un mois sur l’autre',
  veille: 'les nouveautés de notre secteur en Nouvelle-Calédonie',
  sourcesVeille:
    'la presse locale, les sites des chambres consulaires et les réseaux professionnels',
  jargon: 'les termes techniques du métier que les clients comprennent mal',
  procedure: 'l’accueil d’un nouveau client',
  situationTendue: 'un client mécontent qui menace de partir à la concurrence',
  donneesSensibles:
    'les noms, coordonnées, numéros de compte et informations personnelles des clients et des salariés',
  corpus: 'les procédures internes et les guides de l’entreprise',
  publicCible: 'les particuliers et les professionnels du Grand Nouméa',
  etranger: 'un client anglophone de passage en Nouvelle-Calédonie',
  themeFormation: 'les règles de fonctionnement de l’équipe',
  tacheRepetitive: 'le compte rendu hebdomadaire d’activité',
  planning: 'les congés de l’équipe pour les vacances de fin d’année',
  comparaison: 'deux offres de fournisseurs pour le même besoin',
};

/**
 * Exercices transversaux, indépendants du métier. Inspirés des formations officielles :
 * Anthropic Academy « AI Fluency » (cadre 4D : Délégation, Description, Discernement,
 * Diligence), guides de prompting d’Anthropic et d’OpenAI Academy, « Responsible use of
 * ChatGPT at work ». Toutes les personnes, entreprises et sommes sont fictives.
 */
export const exercices = [
  // ------------------------------------------------------------------ Débutant
  {
    id: 'tous-prompt-vague-quatre-etapes',
    titre: 'Améliorer un prompt vague en quatre étapes',
    metier: 'tous',
    niveau: 'debutant',
    famille: 'rediger',
    duree: 20,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Une collègue de votre entreprise, à Nouméa, vous montre son prompt : « Écris un mail pour dire que le bureau est fermé. » Le résultat est fade, trop long, et parle de « notre établissement » sans donner les bonnes dates. Vous lui montrez comment l’améliorer, étape par étape.',
    objectif:
      'Constater l’effet de chaque ingrédient d’un bon prompt : le contexte, la tâche précise avec le format, puis un exemple.',
    etapes: [
      'Envoyez le prompt vague du matériau tel quel et gardez la réponse : c’est la version 0.',
      'Dans une nouvelle conversation, ajoutez le contexte (étape 1 du matériau) : version 1.',
      'Dans une nouvelle conversation, ajoutez aussi la tâche précise et le format (étape 2) : version 2. Le prompt de départ montre où placer chaque élément.',
      'Dans une dernière conversation, ajoutez l’exemple de style (étape 3) : version 3.',
      'Comparez les quatre versions dans un tableau : qu’a changé chaque ajout ? Gardez le prompt final dans vos notes.',
    ],
    prompt:
      'Je travaille dans [type d’entreprise] à Nouméa. J’écris à [destinataires], parce que [raison de la fermeture].\n\nRédige un e-mail pour annoncer la fermeture de nos bureaux du [date] au [date]. Indique le numéro à appeler en cas d’urgence, [numéro], et la date de reprise, [date et heure].\n\nFormat : un objet clair, 80 mots au maximum, ton chaleureux et professionnel, vouvoiement.\n\nInspire-toi du style de l’e-mail ci-dessous, sans reprendre son contenu :\n<exemple>\n[collez l’exemple de style]\n</exemple>',
    materiau: {
      titre: 'Le prompt vague et les éléments à ajouter',
      texte:
        'Prompt vague : « Écris un mail pour dire que le bureau est fermé. »\n\nÉtape 1, le contexte : entreprise de services de douze salariés à Nouméa ; e-mail destiné aux clients professionnels ; fermeture pour l’inventaire annuel et la formation de l’équipe.\n\nÉtape 2, la tâche et le format : fermeture du lundi 21 au mercredi 23 décembre ; urgences au 78 45 12 ; reprise le jeudi 24 décembre à 7 h 30 ; 80 mots au maximum ; ton chaleureux et professionnel ; vouvoiement.\n\nÉtape 3, l’exemple de style :\nBonjour,\nPetite information pratique : notre accueil sera fermé le vendredi 9 octobre pour une journée de formation. Pour toute urgence, appelez le 78 45 12. Nous traiterons vos demandes dès le lundi 12 octobre.\nMerci de votre compréhension et bonne semaine,\nL’équipe',
    },
    variantes: {
      simple: 'S’arrêter à la version 2 (contexte, tâche et format), sans exemple.',
      poussee:
        'Demander à l’IA de critiquer le prompt final (ce qui reste ambigu), l’améliorer une dernière fois, puis l’enregistrer dans sa bibliothèque de prompts.',
    },
    astuces: {
      chatgpt:
        'Ouvrez une nouvelle conversation pour chaque version : sinon, ChatGPT tient compte des échanges précédents et la comparaison est faussée.',
      claude:
        'Demandez enfin à Claude ce qu’il aurait aimé savoir de plus : c’est souvent la prochaine amélioration du prompt.',
    },
    vigilance:
      'L’exemple de style ne doit contenir ni nom de client ni information confidentielle : prenez un e-mail que vous avez écrit vous-même, ou inventez-le.',
    formateur: {
      resultat:
        'Quatre versions comparées, qui montrent que le contexte change le fond, que le format règle la longueur et le ton, et que l’exemple règle le style. L’e-mail final annonce la fermeture du 21 au 23 décembre, le numéro d’urgence et la reprise le 24 à 7 h 30, en 80 mots au plus.',
      criteres: [
        'Les quatre versions ont été produites dans des conversations séparées.',
        'Le tableau de comparaison nomme l’effet de chaque ajout.',
        'L’e-mail final contient les bonnes dates, le numéro d’urgence et la date de reprise.',
        'Il fait 80 mots au maximum.',
      ],
      pieges: [
        'Rester dans la même conversation : l’IA garde le contexte précédent et les versions ne sont plus comparables.',
        'Voir l’IA recopier le contenu de l’exemple (vendredi 9 octobre, journée de formation) au lieu d’en reprendre le style.',
      ],
      competence: 'description',
      technique: 'contexte',
    },
    motsCles: ['prompt', 'contexte', 'format', 'exemple', 'e-mail', 'bien débuter'],
  },
  {
    id: 'tous-questions-avant-de-repondre',
    titre: 'Demander à l’IA de poser ses questions avant de répondre',
    metier: 'tous',
    niveau: 'debutant',
    famille: 'organiser',
    duree: 15,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Votre responsable vous demande d’organiser une demi-journée de cohésion pour l’équipe avant les fêtes. Vous demandez de l’aide à l’IA, mais la première réponse est générique : un atelier « dans un lieu à définir », un budget en euros, des activités pour cinquante personnes alors que vous êtes neuf.',
    objectif:
      'Faire poser les bonnes questions par l’IA pour obtenir une réponse adaptée, et mesurer l’écart avec une demande sans questions.',
    etapes: [
      'Envoyez la demande courte du matériau et gardez la réponse.',
      'Dans une nouvelle conversation, envoyez le prompt de départ : l’IA doit poser ses questions avant de proposer quoi que ce soit.',
      'Répondez à ses questions avec les informations du matériau, ou avec les vôtres.',
      'Comparez les deux propositions : budget en XPF, lieu réaliste, taille du groupe, contraintes respectées.',
      'Notez les deux questions de l’IA qui ont le plus changé le résultat : la prochaine fois, vous donnerez ces informations d’emblée.',
    ],
    prompt:
      'Je dois organiser une demi-journée de cohésion pour mon équipe, avant les fêtes de fin d’année.\n\nAvant de me proposer quoi que ce soit, pose-moi les questions dont tu as besoin pour faire une proposition vraiment adaptée : dix au maximum, en liste numérotée. Attends mes réponses.\n\nEnsuite, propose deux programmes détaillés, avec les horaires et un budget estimé en XPF.',
    materiau: {
      titre: 'La demande courte et les informations à donner',
      texte:
        'Demande courte (étape 1) : « Propose-moi une demi-journée de cohésion pour mon équipe. »\n\nInformations à donner quand l’IA pose ses questions :\n- 9 personnes, de 23 à 61 ans, dont une collègue en fauteuil roulant ;\n- un vendredi après-midi de décembre, de 13 h à 17 h ;\n- budget : 150 000 XPF en tout, transport compris ;\n- l’équipe travaille à Dumbéa : pas plus de 30 minutes de route ;\n- deux collègues ne mangent pas de porc, une ne boit pas d’alcool ;\n- objectif : se retrouver après une année chargée, sans esprit de compétition ;\n- prévoir une solution de repli en cas de forte pluie.',
    },
    variantes: {
      simple: 'Limiter l’IA à cinq questions.',
      poussee:
        'Demander à l’IA, après sa proposition, quelles informations auraient encore amélioré le résultat, puis rédiger un prompt « idéal » qui les donne toutes d’emblée.',
    },
    astuces: {
      claude:
        'Ajoutez « Pose-moi une question à la fois » : l’échange ressemble à un entretien et vous oubliez moins de choses.',
    },
    vigilance:
      'Les informations sur la santé ou les convictions de vos collègues sont sensibles : ne donnez que ce qui est utile (« deux personnes ne mangent pas de porc »), jamais de nom.',
    formateur: {
      resultat:
        'Deux propositions très différentes : l’une générique, l’autre adaptée (budget de 150 000 XPF respecté, lieu accessible à moins de 30 minutes de Dumbéa, repas compatible, solution en cas de pluie).',
      criteres: [
        'L’IA a posé ses questions avant de proposer, et l’apprenant y a répondu.',
        'La proposition finale respecte le budget, l’accessibilité et la distance.',
        'L’apprenant sait citer les informations qui ont le plus changé le résultat.',
      ],
      pieges: [
        'Une IA qui pose ses questions puis propose aussitôt, sans attendre les réponses : il faut écrire « Attends mes réponses ».',
        'Croire aux lieux et aux prix proposés sans les vérifier : l’IA peut inventer un prestataire ou un tarif.',
      ],
      competence: 'description',
      technique: 'contexte',
    },
    motsCles: ['questions', 'contexte', 'cohésion', 'organisation', 'bien débuter'],
  },
  {
    id: 'tous-faire-dire-je-ne-sais-pas',
    titre: 'Faire dire « je ne sais pas » à l’IA et repérer une invention',
    metier: 'tous',
    niveau: 'debutant',
    famille: 'veiller',
    duree: 20,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'En réunion, un collègue cite un chiffre « trouvé par l’IA ». Personne ne sait d’où il vient. Vous voulez comprendre dans quels cas l’IA invente, et comment l’autoriser à dire qu’elle ne sait pas.',
    objectif:
      'Reconnaître les questions qui poussent l’IA à inventer (chiffre précis, entreprise inconnue, fausse affirmation dans la question) et formuler une demande qui l’autorise à dire « je ne sais pas ».',
    etapes: [
      'Posez les cinq questions du matériau, une par une, sans rien ajouter. Notez les réponses.',
      'Pour chaque réponse, notez votre niveau de confiance : sûre, à vérifier, probablement inventée.',
      'Dans une nouvelle conversation, envoyez le prompt de départ avec les mêmes questions, et comparez.',
      'Pour les questions 2 et 4, demandez les sources (avec la recherche web de Claude ou de Copilot Chat, par exemple) et ouvrez-les : disent-elles bien ce que l’IA affirme ?',
      'Écrivez en une phrase la règle que vous appliquerez avant de reprendre un chiffre donné par l’IA.',
    ],
    prompt:
      'Réponds aux questions ci-dessous. Pour chacune :\n- si tu n’es pas sûr, réponds « je ne sais pas » ou « je ne suis pas sûr », plutôt que de proposer une réponse plausible ;\n- si la question contient une affirmation fausse, signale-le ;\n- indique ton niveau de confiance (élevé, moyen, faible), ce qu’il faudrait vérifier, et où.\n\n<questions>\n[collez les cinq questions ici]\n</questions>',
    materiau: {
      titre: 'Cinq questions de test',
      texte:
        '1. Quelle est la monnaie utilisée en Nouvelle-Calédonie ?\n2. Quel est le chiffre d’affaires 2025 de la société Kaori Numérique, installée à Koné ?\n3. Pourquoi la loi calédonienne de 2023 interdit-elle l’usage de l’IA dans les administrations ?\n4. Quel est le montant actuel du salaire minimum garanti (SMG) en Nouvelle-Calédonie ?\n5. Quel était le thème du discours du président de la CCI lors de la cérémonie des vœux de janvier 2022 ?',
    },
    variantes: {
      simple: 'Se limiter aux questions 1, 2 et 3.',
      poussee:
        'Demander à l’IA d’écrire trois questions pièges sur votre métier, les poser à un autre outil d’IA, et comparer les réponses.',
    },
    astuces: {
      claude:
        'Activez la recherche web pour la question 4 : Claude cite les pages utilisées. Regardez la date de chaque page.',
      copilot:
        'Copilot Chat cite les pages web utilisées : cliquez sur chaque référence avant de reprendre un chiffre.',
    },
    vigilance:
      'Un chiffre précis n’est pas un chiffre juste. Avant de reprendre un montant, une date ou un nom donné par l’IA, retrouvez-le dans une source officielle (gouvernement, CAFAT, ISEE…).',
    formateur: {
      resultat:
        'Une réponse juste à la question 1 (le franc pacifique, XPF). Pour les autres, l’IA doit dire qu’elle ne sait pas (la société de la question 2 est fictive), signaler la fausse affirmation (la loi de la question 3 n’existe pas), renvoyer vers une source officielle pour le SMG, dont le montant change, et reconnaître son ignorance pour la question 5.',
      criteres: [
        'L’apprenant a repéré au moins une réponse inventée lors du premier essai.',
        'Le second prompt autorise explicitement « je ne sais pas » et le signalement des fausses affirmations.',
        'Les sources ont été ouvertes, pas seulement lues dans la réponse.',
        'L’apprenant formule une règle personnelle de vérification.',
      ],
      pieges: [
        'Prendre un ton assuré pour une preuve : l’IA invente avec la même assurance qu’elle dit vrai.',
        'Accepter une source citée sans l’ouvrir : le lien peut ne pas exister ou dire autre chose.',
        'Reprendre un montant de SMG périmé.',
      ],
      competence: 'discernement',
      technique: 'sources',
    },
    motsCles: ['hallucination', 'invention', 'je ne sais pas', 'vérifier', 'sources', 'fiabilité'],
  },
  {
    id: 'tous-resumer-article-presse',
    titre: 'Résumer un article de presse locale pour ses collègues',
    metier: 'tous',
    niveau: 'debutant',
    famille: 'synthetiser',
    duree: 15,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Votre responsable a repéré un article sur l’usage de l’IA dans les entreprises calédoniennes. Elle n’a pas le temps de le lire et vous demande un résumé à présenter à la prochaine réunion d’équipe.',
    objectif:
      'Obtenir un résumé court et fidèle, vérifier chaque chiffre repris et éviter les généralisations abusives.',
    etapes: [
      'Collez l’article du matériau dans le prompt de départ et envoyez-le.',
      'Vérifiez chaque chiffre clé : retrouvez-le dans l’article, avec son contexte (sur combien d’entreprises ? où ? quand ?).',
      'Cherchez les généralisations : le résumé parle-t-il « des entreprises calédoniennes » alors que l’enquête porte sur 120 entreprises ?',
      'Demandez une version en trois lignes, pour la messagerie de l’équipe.',
      'Comparez avec le résumé d’un voisin : qui a le mieux gardé l’idée principale de l’article ?',
    ],
    prompt:
      'Résume l’article ci-dessous pour mes collègues, qui le découvriront en réunion d’équipe.\n\nFormat :\n- un titre ;\n- cinq lignes au maximum ;\n- puis les trois chiffres clés, chacun avec la phrase exacte de l’article dont il vient.\n\nReste fidèle : n’ajoute aucune information absente de l’article, et ne généralise pas au-delà des entreprises interrogées.\n\n<article>\n[collez l’article ici]\n</article>',
    materiau: {
      titre: 'Article (fictif)',
      texte:
        'IA : les entreprises calédoniennes s’y mettent, prudemment\n\nNouméa. Selon une enquête menée en août par le cabinet Néa Conseil auprès de 120 entreprises du Grand Nouméa et de la province Nord, 37 d’entre elles déclarent utiliser au moins un outil d’IA chaque semaine, soit près d’une sur trois. Elles n’étaient que 14 lors de la même enquête, deux ans plus tôt.\n\nLes usages les plus cités sont la rédaction d’e-mails (29 entreprises), la traduction (17) et la préparation de devis ou de comptes rendus (12). « On gagne une heure par jour sur les courriers, mais on relit tout », explique la gérante d’une agence de voyages de Koné.\n\nLes freins restent nombreux : 61 entreprises citent la peur de diffuser des données confidentielles, 44 le manque de formation, 23 le coût des abonnements. Seules 9 entreprises ont rédigé des règles internes d’usage.\n\nPour le cabinet, « le principal risque n’est pas l’outil, mais l’absence de règles ». Une nouvelle enquête est prévue dans deux ans, élargie aux îles Loyauté.',
    },
    variantes: {
      simple: 'Demander seulement le résumé en cinq lignes, puis vérifier les chiffres.',
      poussee:
        'Demander trois résumés pour trois publics (direction, équipe, clients sur Facebook) et vérifier qu’aucun ne déforme les chiffres.',
    },
    astuces: {
      chatgpt:
        'Demandez ensuite « Qu’est-ce que ce résumé laisse de côté ? » : ChatGPT liste les nuances qu’il a coupées.',
    },
    vigilance:
      'Citez la source (titre du journal, date) quand vous partagez le résumé. Pour reprendre un chiffre dans un document officiel, revenez toujours à l’article ou à l’enquête d’origine.',
    formateur: {
      resultat:
        'Un résumé de cinq lignes fidèle, qui parle des 120 entreprises interrogées et non de toutes les entreprises calédoniennes, avec trois chiffres clés exacts : 37 sur 120 utilisent l’IA chaque semaine (contre 14 deux ans plus tôt), 61 craignent pour leurs données, 9 seulement ont des règles internes.',
      criteres: [
        'Chaque chiffre du résumé se retrouve dans l’article.',
        'Le résumé précise le périmètre de l’enquête (120 entreprises, Grand Nouméa et province Nord).',
        'L’idée principale est gardée : l’usage progresse, mais presque sans règles internes.',
      ],
      pieges: [
        'Écrire « un tiers des entreprises calédoniennes » : l’enquête ne porte que sur 120 entreprises, hors îles Loyauté.',
        'Laisser passer « le nombre a triplé » : il est passé de 14 à 37, soit une multiplication par 2,6.',
      ],
      competence: 'discernement',
      technique: 'format',
    },
    motsCles: ['résumé', 'presse', 'article', 'chiffres', 'fidélité', 'généralisation'],
  },
  {
    id: 'tous-tableau-suivi-demandes',
    titre: 'Créer un tableau de suivi de ses demandes en cours',
    metier: 'tous',
    niveau: 'debutant',
    famille: 'analyser',
    duree: 20,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Les demandes arrivent de partout : e-mails, appels, couloir. Vous en oubliez une de temps en temps, et vous perdez du temps à retrouver qui attend quoi. Vous voulez un tableau simple, à mettre à jour chaque matin.',
    objectif:
      'Faire créer un tableau prêt à l’emploi, avec les bonnes colonnes et une formule de retard, puis vérifier qu’il fonctionne.',
    etapes: [
      'Collez les demandes du matériau dans le prompt de départ et envoyez-le.',
      'Vérifiez que les dix demandes sont dans le tableau et que les échéances absentes ou floues sont marquées « à préciser ».',
      'Téléchargez le tableau en Excel ou copiez-le dans Google Sheets, puis collez la formule des jours de retard.',
      'Testez la formule : remplacez une échéance par une date passée et vérifiez que le retard s’affiche.',
      'Demandez une mise en forme : en rouge les demandes en retard, en gris les demandes terminées.',
    ],
    prompt:
      'Crée-moi un tableau de suivi de mes demandes en cours, que je mettrai à jour chaque matin dans Excel ou Google Sheets.\n\nColonnes : date de réception, demandeur, demande, échéance, priorité (haute, moyenne, basse), statut (à faire, en cours, en attente, fait), prochaine action, jours de retard.\n\nLa colonne « jours de retard » doit être une formule : le nombre de jours écoulés depuis l’échéance si la demande n’est pas faite, vide sinon. Donne-moi la formule.\n\nRemplis le tableau avec les demandes ci-dessous. Si une échéance n’est pas indiquée ou reste floue, écris « à préciser » au lieu d’en inventer une.\n\n<demandes>\n[collez les demandes ici]\n</demandes>',
    materiau: {
      titre: 'Demandes en cours, notées en vrac (fictives)',
      texte:
        '- Sione veut le bilan des congés de l’équipe pour vendredi\n- relancer le fournisseur de cartouches : commande du 28/09 pas livrée\n- Mme Tein (cliente) attend un rappel depuis lundi pour son devis\n- préparer la salle pour la formation du 15/10\n- la direction veut les chiffres du trimestre avant le 20/10\n- répondre à la mairie de Dumbéa sur le dossier de subvention, échéance le 12/10\n- Thi Lan demande de l’aide sur un tableau Excel, pas urgent\n- commander les badges des deux stagiaires qui arrivent le 2/11\n- vérifier la facture du prestataire informatique (écart de 18 500 XPF)\n- envoyer le planning de décembre à l’équipe avant le 30/10',
    },
    variantes: {
      simple: 'Se contenter du tableau, sans formule ni mise en forme.',
      poussee:
        'Ajouter un onglet de synthèse : nombre de demandes par statut et par demandeur, et la liste des trois plus urgentes.',
    },
    astuces: {
      chatgpt:
        'Demandez directement un fichier Excel : l’analyse de données le crée avec la formule déjà en place.',
      claude:
        'La création de fichiers produit un vrai fichier Excel, formules comprises : ouvrez-le pour vérifier.',
      copilot:
        'Avec la licence, Copilot dans Excel ajoute la colonne calculée et la mise en forme conditionnelle.',
      gemini:
        'Dans Google Sheets, « Demander à Gemini » (Google Workspace) propose la formule et la mise en forme.',
    },
    vigilance:
      'Dans un vrai tableau, désignez les demandeurs par leur prénom ou leur service, sans coordonnées ni détails personnels : l’IA n’en a pas besoin.',
    formateur: {
      resultat:
        'Un tableau de dix lignes où les échéances absentes ou floues (le fournisseur, la cliente à rappeler, Thi Lan, la facture, le « vendredi » de Sione) sont marquées « à préciser », avec une formule de retard testée et une mise en forme lisible.',
      criteres: [
        'Les dix demandes figurent dans le tableau, sans doublon.',
        'Aucune échéance n’a été inventée.',
        'La formule de retard a été testée avec une date passée.',
        'Le fichier s’ouvre correctement dans Excel ou Google Sheets.',
      ],
      pieges: [
        'L’IA transforme « vendredi » en date au hasard : elle ne sait pas toujours quel jour on est.',
        'Une formule qui compte aussi le retard des demandes déjà faites.',
        'Des dates inversées (mois et jour) après l’export, au format anglais.',
      ],
      competence: 'description',
      technique: 'format',
    },
    motsCles: ['tableau', 'suivi', 'Excel', 'Google Sheets', 'formule', 'organisation'],
  },

  // ------------------------------------------------------------- Intermédiaire
  {
    id: 'tous-comparer-deux-outils',
    titre: 'Comparer la même demande dans deux outils d’IA',
    metier: 'tous',
    niveau: 'intermediaire',
    famille: 'corriger',
    duree: 30,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    situation:
      'Votre entreprise hésite entre deux outils d’IA pour l’équipe. Plutôt que de croire les publicités, vous faites un test simple : la même demande, le même texte, dans deux outils, et une grille pour comparer.',
    objectif:
      'Comparer deux réponses avec des critères objectifs, sans se laisser séduire par la plus longue ou la mieux présentée.',
    etapes: [
      'Préparez une grille : fidélité (règles et chiffres gardés), clarté, longueur, ton, respect des consignes, chaque critère noté de 1 à 4.',
      'Envoyez exactement le même prompt, avec la note du matériau, dans deux outils différents, chacun dans une nouvelle conversation.',
      'Dans chaque version, cochez une à une les informations clés de la note : dates, montant, distance, accord préalable.',
      'Remplissez la grille et comptez les mots de chaque version.',
      'Donnez à chaque outil la version de l’autre et demandez-lui de la critiquer : ces critiques confirment-elles votre grille ?',
      'Concluez en trois lignes : quel outil pour ce type de tâche, et pourquoi ?',
    ],
    prompt:
      'Réécris la note de service ci-dessous pour qu’elle soit comprise en une seule lecture par tous les salariés, y compris ceux qui lisent peu.\n\nContraintes :\n- 120 mots au maximum ;\n- phrases courtes, mots simples, une liste à puces pour les règles ;\n- garde toutes les règles, tous les chiffres et toutes les dates, sans en ajouter.\n\nAprès la note, liste les informations que tu as supprimées ou reformulées.\n\n<note>\n[collez la note ici]\n</note>',
    materiau: {
      titre: 'Note de service à simplifier (fictive)',
      texte:
        'Objet : Modalités de remboursement des frais professionnels\n\nIl est porté à la connaissance de l’ensemble du personnel qu’à compter du 1er novembre, les demandes de remboursement de frais engagés dans le cadre de l’exercice des missions professionnelles devront impérativement être transmises au service comptable au moyen du formulaire dédié, dûment complété et accompagné de l’intégralité des justificatifs originaux, au plus tard le 5 du mois suivant celui au cours duquel lesdits frais ont été exposés. Toute demande parvenue postérieurement à cette date sera traitée lors de la période de remboursement ultérieure. Il est rappelé que les frais de repas sont pris en charge dans la limite de 2 500 XPF par repas, sous réserve que le déplacement excède un rayon de 25 kilomètres autour du lieu de travail habituel, et que les frais kilométriques font l’objet d’un barème interne disponible auprès du service comptable. Les déplacements vers les îles et la province Nord sont soumis à l’accord préalable écrit du responsable hiérarchique.',
    },
    variantes: {
      simple: 'Comparer seulement la fidélité des chiffres et la longueur.',
      poussee:
        'Comparer trois outils sur trois tâches différentes (simplifier, résumer, rédiger) et présenter les résultats au groupe dans un tableau.',
    },
    astuces: {
      chatgpt:
        'Vérifiez ce que contient la mémoire avant le test : des préférences enregistrées peuvent avantager un outil.',
    },
    vigilance:
      'Pour un test sur un vrai document interne, vérifiez d’abord que vous avez le droit de le confier aux deux outils, surtout avec un compte gratuit ou personnel.',
    formateur: {
      resultat:
        'Une grille remplie pour deux outils, une vérification point par point des informations clés (à partir du 1er novembre, avant le 5 du mois suivant, report en cas de retard, justificatifs originaux, 2 500 XPF par repas, au-delà de 25 km, barème interne, accord écrit pour les îles et la province Nord) et une conclusion argumentée.',
      criteres: [
        'Le même prompt a été envoyé dans deux conversations neuves.',
        'Les informations clés ont été vérifiées une à une dans chaque version.',
        'La conclusion s’appuie sur la grille, pas sur une impression.',
        'Le dépassement éventuel des 120 mots a été relevé.',
      ],
      pieges: [
        'Préférer la version la mieux présentée alors qu’elle a perdu une règle, souvent l’accord préalable pour les îles et la province Nord.',
        'Comparer deux conversations dont l’une contenait déjà des échanges.',
        'Conclure sur un seul essai : refaire le test sur une autre tâche avant de trancher.',
      ],
      competence: 'discernement',
      technique: 'options',
    },
    motsCles: ['comparer', 'outils', 'grille', 'simplifier', 'note de service', 'évaluer'],
  },
  {
    id: 'tous-grille-delegation',
    titre: 'Décider ce que vous confiez à l’IA dans votre semaine',
    metier: 'tous',
    niveau: 'intermediaire',
    famille: 'automatiser',
    duree: 30,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Après quelques essais, vous utilisez l’IA un peu au hasard : parfois pour des tâches où elle fait perdre du temps, jamais pour celles où elle en ferait gagner. Vous prenez une demi-heure pour passer votre semaine type au crible.',
    objectif:
      'Classer ses tâches réelles entre ce que l’IA peut faire, ce qu’elle peut aider à faire et ce que l’on garde, avec des critères explicites, puis confronter ses choix à un regard critique.',
    etapes: [
      'Listez huit à dix tâches de votre semaine type, une ligne chacune, sans nom de personne.',
      'Remplissez la grille du matériau pour chaque tâche, choix compris, sans l’IA.',
      'Envoyez la grille avec le prompt de départ : l’IA doit discuter vos choix, pas les faire à votre place.',
      'Répondez à ses objections : maintenez ou changez votre choix, en notant la raison.',
      'Retenez deux tâches à tester la semaine prochaine, et le critère qui dira si l’essai est réussi (temps, qualité, erreurs).',
    ],
    prompt:
      'Je veux décider, tâche par tâche, ce que je confie à l’IA. Voici ma grille, remplie pour [nombre] tâches de ma semaine type :\n\n<grille>\n[collez votre grille ici]\n</grille>\n\nPour chaque tâche, dis si tu es d’accord avec mon choix (l’IA fait et je vérifie, l’IA m’aide, je garde) et pourquoi. Sois exigeant : signale les risques que je sous-estime (données sensibles, erreurs difficiles à repérer) et les gains que je néglige. Ne change pas mes choix toi-même.\n\nTermine par les deux tâches à tester en premier la semaine prochaine.',
    materiau: {
      titre: 'Grille de délégation (avec deux exemples)',
      texte:
        'Tâche | Fréquence et temps | Données sensibles ? | Conséquence d’une erreur | Part de jugement humain | Choix\nRédiger le compte rendu de la réunion d’équipe | chaque semaine, 45 min | non | faible, relu par tous | faible | l’IA fait, je vérifie\nAnnoncer un refus de congés à un collègue | deux fois par an, 20 min | oui | forte, relation de travail | forte | je garde\n[votre tâche] | | | | |\n\nTrois choix possibles :\n- l’IA fait, je vérifie : tâche simple, répétitive, peu risquée ;\n- l’IA m’aide : premier jet, idées, relecture, mais je reste l’auteur ;\n- je garde : données sensibles, jugement, relation humaine, responsabilité.',
    },
    variantes: {
      simple: 'Classer seulement cinq tâches, sans les colonnes de risques.',
      poussee:
        'Comparer sa grille avec celle d’un collègue du même service, puis proposer à l’équipe une liste commune « l’IA fait / l’IA aide / jamais l’IA ».',
    },
    astuces: {
      claude:
        'Demandez la grille finale en artefact : un tableau propre à copier dans un document.',
      copilot:
        'Transformez la grille en Copilot Page (compte professionnel) pour la compléter avec votre équipe.',
    },
    vigilance:
      'Une tâche qui touche à des données personnelles (santé, salaires, dossiers de clients) ou à une décision sur une personne reste de votre ressort, même si l’IA pourrait techniquement la faire.',
    formateur: {
      resultat:
        'Une grille de huit à dix tâches réelles, discutée avec l’IA, où chaque choix est justifié, et deux tâches à tester avec un critère de réussite mesurable.',
      criteres: [
        'Les tâches viennent de la vraie semaine de l’apprenant.',
        'Chaque choix est justifié par au moins un critère de la grille.',
        'L’apprenant a maintenu ou changé au moins un choix après discussion, avec une raison.',
        'Les deux essais ont un critère de réussite mesurable.',
      ],
      pieges: [
        'Laisser l’IA remplir la grille seule : elle ne connaît ni vos risques ni vos priorités.',
        'Tout confier à l’IA par enthousiasme, y compris des tâches avec des données sensibles.',
        'Ne rien confier par méfiance, sans avoir rien testé.',
      ],
      competence: 'delegation',
      technique: 'critique',
    },
    motsCles: ['délégation', 'choisir', 'tâches', 'risques', '4D', 'organisation'],
  },
  {
    id: 'tous-preparer-entretien-annuel',
    titre: 'Préparer son entretien annuel à partir de ses notes de l’année',
    metier: 'tous',
    niveau: 'intermediaire',
    famille: 'synthetiser',
    duree: 30,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Votre entretien annuel a lieu dans une semaine. Vous avez des notes éparses sur votre année, mais vous peinez à les présenter clairement, sans vous survaloriser ni oublier vos réussites. Vous préparez l’entretien avec l’IA, puis vous vous entraînez.',
    objectif:
      'Transformer des notes en bilan structuré et fidèle, puis s’entraîner aux questions difficiles grâce à une simulation.',
    etapes: [
      'Envoyez le prompt de départ avec les notes du matériau, ou avec les vôtres (sans nom de collègue).',
      'Relisez le bilan ligne à ligne : chaque réussite et chaque chiffre viennent-ils bien des notes ? Rayez ce qui a été embelli.',
      'Demandez à l’IA de jouer votre responsable et de vous poser trois questions difficiles, une à la fois (le retard de juillet, les heures supplémentaires, la demande de temps partiel). Répondez comme en entretien.',
      'Demandez un retour sur vos réponses : clarté, arguments, ton.',
      'Terminez par une fiche d’une page à emporter : trois réussites, deux demandes, une question.',
    ],
    prompt:
      'Je prépare mon entretien annuel avec mon responsable, dans une entreprise de Nouméa. À partir de mes notes ci-dessous, fais un bilan en quatre parties : réussites (avec les chiffres de mes notes), difficultés et ce que j’en ai appris, besoins de formation, souhaits pour l’année à venir.\n\nRègles : n’utilise que mes notes, n’ajoute aucun chiffre ni aucune réussite. Ton factuel, ni trop modeste ni exagéré. Signale les points qu’il vaudrait mieux appuyer par une preuve (document, chiffre) avant l’entretien.\n\n<notes>\n[collez vos notes ici]\n</notes>',
    materiau: {
      titre: 'Notes en vrac sur l’année (fictives)',
      texte:
        '- classement des dossiers repris sans renfort de mars à juin, après le départ de Marc\n- 2 stagiaires formés (avril et septembre), retours positifs de leur école\n- réclamations : de 15 par mois en janvier à 9 en septembre, après la nouvelle procédure (chiffres du tableau de suivi)\n- changement de logiciel de facturation en juin : 2 mois difficiles, beaucoup d’heures en plus\n- heures supplémentaires en août et septembre (salon professionnel)\n- un retard sur le rapport trimestriel de juillet, dû à une erreur de planning de ma part\n- tension avec un collègue au printemps, réglée en discutant\n- envies : formation Excel (tableaux croisés dynamiques) et formation à l’IA\n- questions : passer à 4 jours et demi ? évoluer vers un poste de coordination ?',
    },
    variantes: {
      simple: 'Se limiter au bilan en quatre parties, sans simulation.',
      poussee:
        'Préparer aussi le point de vue du responsable : demander quelles objections il pourrait faire à chaque demande, et préparer une réponse argumentée.',
    },
    astuces: {
      claude:
        'Pour la simulation, précisez « Pose une seule question, puis attends ma réponse » : l’échange ressemble davantage à un vrai entretien.',
      gemini: 'Ouvrez le bilan dans Canvas pour le retoucher passage par passage.',
    },
    vigilance:
      'Ne collez ni votre fiche de poste nominative, ni votre salaire, ni d’appréciation sur vos collègues. Le temps partiel et l’évolution de poste dépendent de règles et d’accords internes : renseignez-vous auprès du service RH, pas auprès de l’IA.',
    formateur: {
      resultat:
        'Un bilan fidèle aux notes (réclamations passées de 15 à 9 par mois, deux stagiaires formés, classement des dossiers repris), qui reconnaît le retard de juillet sans dramatiser, et des réponses entraînées aux trois questions difficiles.',
      criteres: [
        'Aucun chiffre ni aucune réussite n’a été ajouté par rapport aux notes.',
        'Les difficultés sont présentées avec ce qui en a été appris.',
        'La simulation a été menée question par question, avec un retour.',
        'La fiche finale tient sur une page.',
      ],
      pieges: [
        'Garder un vocabulaire gonflé (« pilotage stratégique », « transformation digitale ») qui ne correspond pas au poste.',
        'Accepter une réussite ou un pourcentage que l’on ne saura pas justifier pendant l’entretien.',
        'Coller des notes qui nomment des collègues et décrivent un conflit.',
      ],
      competence: 'discernement',
      technique: 'simulation',
    },
    motsCles: ['entretien annuel', 'bilan', 'simulation', 'responsable', 'préparation'],
  },
  {
    id: 'tous-organiser-boite-reception',
    titre: 'Organiser sa boîte de réception avec l’IA',
    metier: 'tous',
    niveau: 'intermediaire',
    famille: 'organiser',
    duree: 30,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'copilot',
    situation:
      'De retour de deux semaines de congés, vous trouvez 140 e-mails non lus. Vous voulez trier vite, répondre aux plus urgents, et mettre en place des règles pour que la boîte reste rangée ensuite.',
    objectif:
      'Faire trier des e-mails à partir de leurs objets et expéditeurs, sans coller leur contenu, puis construire un système de dossiers et de règles durable.',
    etapes: [
      'Collez la liste du matériau dans le prompt de départ : objets et expéditeurs seulement.',
      'Vérifiez le classement : les deux e-mails suspects (6 et 11) sont-ils repérés ? Les deux messages de Mme Tein sont-ils regroupés ?',
      'Contestez au moins un classement selon votre contexte et demandez la correction.',
      'Demandez un brouillon de réponse courte pour les e-mails 3 et 7, puis relisez-les.',
      'Si vous le pouvez, créez dans votre messagerie les dossiers et une des règles proposées.',
    ],
    prompt:
      'Je reviens de congés et j’ai 140 e-mails non lus. Voici les expéditeurs et les objets d’un extrait, sans leur contenu.\n\n<emails>\n[collez la liste ici]\n</emails>\n\n1. Classe chaque e-mail : à traiter aujourd’hui, cette semaine, à déléguer, à lire plus tard, à archiver, ou suspect. Justifie en une ligne.\n2. Signale les e-mails qui se suivent ou portent sur le même sujet.\n3. Propose un système de cinq dossiers au maximum et trois règles de tri automatique pour éviter que cela se reproduise.\n\nN’invente pas le contenu des e-mails : si tu as besoin d’en savoir plus, dis-le.',
    materiau: {
      titre: 'Extrait de la boîte de réception (fictif)',
      texte:
        '1. Direction : « URGENT : chiffres du trimestre pour la réunion de jeudi »\n2. Fournisseur de bureau : « Promotions de fin d’année »\n3. Mme Tein (cliente) : « Relance : toujours pas de réponse à ma demande du 2 octobre »\n4. Service comptable : « Note de frais de septembre incomplète »\n5. Teams : « Vous avez été mentionné dans Projet salon »\n6. « CAFAT » : « Votre espace en ligne : nouveau message » (adresse d’expédition sans rapport avec la CAFAT)\n7. Sione (collègue) : « Tu peux me remplacer à la permanence du 24 ? »\n8. Prestataire informatique : « Maintenance du serveur samedi de 8 h à 12 h »\n9. Ressources humaines : « Entretiens annuels : choisissez votre créneau avant le 15 »\n10. Réseau professionnel : « Invitation : petit-déjeuner de la CCI le 22 octobre »\n11. Expéditeur inconnu : « Facture impayée n° 5521, cliquez ici pour régler »\n12. Service qualité : « Compte rendu de la réunion du 30 septembre »\n13. Mme Tein (cliente) : « Je vais finir par aller voir ailleurs »',
    },
    variantes: {
      simple: 'Ne classer que les e-mails, sans dossiers ni règles.',
      poussee:
        'Faire écrire une réponse automatique d’absence efficace pour les prochains congés, et une check-list de retour de congés en dix minutes.',
    },
    astuces: {
      copilot:
        'Dans Outlook, « Résumer » condense un long fil ; « Brouillon avec Copilot » prépare la réponse à Mme Tein, à relire avant envoi.',
      gemini:
        'Dans Gmail, « Aide-moi à écrire » (Google Workspace) rédige les réponses courtes à partir de quelques mots.',
    },
    vigilance:
      'Ne collez pas le contenu des e-mails : expéditeurs et objets suffisent pour trier. Un message qui presse de cliquer ou de payer se vérifie hors de la messagerie, par le site officiel ou par téléphone.',
    formateur: {
      resultat:
        'Un tri où les e-mails 6 et 11 sont repérés comme suspects, les deux messages de Mme Tein regroupés et traités en priorité, la demande de la direction traitée le jour même, et un système de quelques dossiers avec des règles simples.',
      criteres: [
        'Les deux e-mails suspects sont repérés.',
        'Les deux relances de la même cliente sont regroupées.',
        'Seuls les expéditeurs et les objets ont été collés.',
        'Les dossiers proposés sont peu nombreux et utilisables.',
      ],
      pieges: [
        'Classer la fausse facture ou le faux message de la CAFAT en « urgent », puis cliquer.',
        'Coller le contenu complet des e-mails, avec les données des clients.',
        'Accepter un système de quinze dossiers que personne ne tiendra.',
      ],
      competence: 'diligence',
      technique: 'structurer',
    },
    motsCles: ['e-mails', 'boîte de réception', 'tri', 'Outlook', 'Gmail', 'hameçonnage'],
  },
  {
    id: 'tous-confidentialite-outil',
    titre: 'Vérifier ce que devient ce que vous confiez à votre outil d’IA',
    metier: 'tous',
    niveau: 'intermediaire',
    famille: 'veiller',
    duree: 30,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    situation:
      'Un collègue colle des contrats de clients dans un outil d’IA gratuit, avec son compte personnel. Votre responsable vous demande de vérifier, pour les outils utilisés dans l’équipe, ce que deviennent les données saisies : sont-elles conservées, servent-elles à entraîner les modèles, et peut-on l’empêcher ?',
    objectif:
      'Trouver l’information officielle sur la confidentialité d’un outil, la confronter aux paramètres de son compte, et en tirer des règles simples pour l’équipe.',
    etapes: [
      'Choisissez l’outil que vous utilisez le plus et envoyez-lui le prompt de départ.',
      'Ouvrez les pages officielles citées (politique de confidentialité, centre d’aide de l’éditeur) et vérifiez au moins deux affirmations de la réponse.',
      'Ouvrez les paramètres de votre compte : retrouvez le réglage sur l’utilisation de vos conversations pour améliorer les modèles, et celui de l’historique. Notez ce que vous voyez dans la fiche du matériau.',
      'Si l’entreprise a un compte professionnel, comparez avec votre compte personnel : les conditions ne sont pas les mêmes.',
      'Rédigez trois règles pour l’équipe : quel compte utiliser, quelles données ne jamais coller, quel réglage vérifier.',
    ],
    prompt:
      'J’utilise [nom de l’outil] avec un compte [gratuit, payant personnel ou professionnel de mon entreprise]. Réponds précisément, en citant les pages officielles de l’éditeur, avec leur date si elle est indiquée :\n1. Mes conversations sont-elles conservées, et combien de temps ?\n2. Peuvent-elles servir à entraîner les modèles ? Comment le refuser ?\n3. Qu’est-ce qui change avec un compte professionnel ?\n4. Que deviennent les fichiers que je joins ?\n\nSi tu n’es pas sûr, ou si l’information a pu changer depuis tes données d’entraînement, dis-le et indique où je dois vérifier.',
    materiau: {
      titre: 'Fiche de vérification à remplir',
      texte:
        'Outil et type de compte : [à compléter]\n\nQuestion | Réponse de l’IA | Page officielle (lien, date) | Ce que montrent mes paramètres\nConservation des conversations | | |\nUtilisation pour entraîner les modèles | | |\nRéglage pour le refuser | | |\nFichiers joints | | |\nCompte professionnel : ce qui change | | |\n\nMes trois règles pour l’équipe :\n1.\n2.\n3.',
    },
    variantes: {
      simple: 'Ne traiter que la question de l’entraînement des modèles, pour un seul outil.',
      poussee:
        'Remplir la fiche pour tous les outils de l’équipe et en tirer un tableau comparatif à présenter en réunion.',
    },
    astuces: {
      claude:
        'Activez la recherche web : Claude cite les pages du centre d’aide. Ouvrez-les, car ces règles changent régulièrement.',
      chatgpt:
        'Regardez aussi la mémoire : vous pouvez consulter ce que ChatGPT a retenu de vous, et l’effacer.',
      copilot:
        'Avec un compte professionnel, demandez au service informatique quelles règles l’entreprise a fixées pour Copilot.',
    },
    vigilance:
      'Ce que l’IA dit de sa propre politique de confidentialité peut être faux ou dépassé : seules la page officielle et vos paramètres font foi. Dans le doute, ne collez pas de données confidentielles.',
    formateur: {
      resultat:
        'Une fiche remplie pour au moins un outil, où chaque affirmation de l’IA est confrontée à la page officielle et aux paramètres du compte, et trois règles concrètes pour l’équipe.',
      criteres: [
        'Au moins deux affirmations de l’IA ont été vérifiées sur une page officielle.',
        'Le réglage d’utilisation des conversations a été retrouvé dans les paramètres.',
        'La différence entre compte personnel et compte professionnel est notée.',
        'Les trois règles sont concrètes et applicables.',
      ],
      pieges: [
        'Croire la réponse de l’IA sur ses propres règles sans ouvrir la page officielle.',
        'Confondre compte gratuit personnel et compte professionnel de l’entreprise.',
        'Conclure « c’est sans risque » parce qu’un réglage est désactivé : il faut toujours limiter les données collées.',
      ],
      competence: 'diligence',
      technique: 'sources',
    },
    motsCles: [
      'confidentialité',
      'données',
      'paramètres',
      'compte professionnel',
      'entraînement',
      'sécurité',
    ],
  },

  // -------------------------------------------------------------------- Avancé
  {
    id: 'tous-charte-usage-ia',
    titre: 'Rédiger la charte d’usage de l’IA de votre équipe',
    metier: 'tous',
    niveau: 'avance',
    famille: 'rediger',
    duree: 60,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Dans votre service, chacun utilise l’IA à sa manière : certains collent des documents de clients, d’autres n’osent rien faire. Votre responsable vous charge de proposer une charte d’une page, discutée avec l’équipe, qui dise ce qui est encouragé, ce qui est interdit et comment vérifier.',
    objectif:
      'Construire une charte courte et applicable en plusieurs étapes : partir des pratiques réelles, rédiger, faire critiquer, puis tester sur des cas concrets.',
    etapes: [
      'Envoyez le prompt de départ avec les pratiques du matériau, et répondez aux questions de l’IA.',
      'Relisez la première version : chaque pratique du matériau est-elle couverte par une règle ? Chaque règle est-elle applicable par un collègue pressé ?',
      'Demandez à l’IA de jouer trois collègues (Thi Lan la méfiante, Léa la pressée, le responsable) et de critiquer la charte de leur point de vue.',
      'Intégrez les critiques utiles et coupez tout ce qui dépasse une page.',
      'Testez la charte sur cinq situations concrètes que vous inventez (« Puis-je coller ce contrat ? ») : permet-elle de répondre sans hésiter ?',
      'Faites relire les points juridiques (données personnelles, confidentialité) par la personne compétente avant de diffuser.',
    ],
    prompt:
      'Tu es consultant en organisation. Aide-moi à rédiger la charte d’usage de l’IA de mon équipe : 8 personnes, dans une entreprise de services à Nouméa. Voici les pratiques relevées :\n\n<pratiques>\n[collez les pratiques ici]\n</pratiques>\n\nCommence par me poser les questions nécessaires (outils autorisés, types de comptes, données manipulées, validation), et attends mes réponses.\n\nEnsuite, propose une charte d’une page en cinq parties : pourquoi cette charte, ce qui est encouragé, ce qui est interdit, comment vérifier, qui contacter. Phrases courtes, règles concrètes, un exemple par règle. N’affirme aucune obligation légale : écris « à vérifier » quand une règle dépend de la loi.',
    materiau: {
      titre: 'Pratiques relevées dans l’équipe (fictives)',
      texte:
        '- Léa colle les e-mails des clients dans ChatGPT pour préparer ses réponses, avec les noms et les numéros de dossier.\n- Sione utilise Copilot avec le compte professionnel pour résumer les comptes rendus internes.\n- Thi Lan refuse d’utiliser l’IA : « on ne sait pas où vont les données ».\n- Marc a publié sur la page Facebook de l’entreprise un texte rédigé par l’IA, avec une date fausse.\n- Waïa a créé un Gem avec les procédures internes et l’a partagé avec deux collègues.\n- Personne ne sait s’il faut dire à un client qu’un courrier a été préparé avec l’IA.\n- Le responsable veut gagner du temps sur les comptes rendus et les réponses courantes.',
    },
    variantes: {
      simple:
        'Rédiger seulement la partie « ce qui est interdit », en cinq règles avec un exemple chacune.',
      poussee:
        'Transformer la charte en quiz de cinq questions pour l’accueil des nouveaux arrivants, et prévoir sa révision dans six mois.',
    },
    astuces: {
      claude:
        'Demandez la charte en document Word avec la création de fichiers, prête à être commentée par l’équipe.',
      chatgpt:
        'Ouvrez la charte dans le canevas pour retravailler une partie sans régénérer le reste.',
      copilot:
        'Transformez la charte en Copilot Page (compte professionnel) : chaque collègue peut la commenter et proposer des modifications.',
    },
    vigilance:
      'La charte ne remplace ni les règles de l’entreprise ni la loi sur les données personnelles : faites valider les points juridiques. Ne citez aucun texte de loi proposé par l’IA sans l’avoir vérifié.',
    formateur: {
      resultat:
        'Une charte d’une page en cinq parties qui répond à chaque pratique du matériau (données des clients, compte professionnel, vérification avant publication, transparence envers les clients, assistants partagés), critiquée sous trois angles et testée sur cinq cas.',
      criteres: [
        'Chaque pratique du matériau trouve une réponse dans la charte.',
        'Les règles sont concrètes, avec un exemple chacune.',
        'La charte tient sur une page après les critiques.',
        'Aucune obligation légale n’est affirmée sans vérification.',
      ],
      pieges: [
        'Une charte générique et longue, copiée de l’IA, que personne ne lira.',
        'Des règles juridiques inventées ou importées de métropole, présentées comme certaines.',
        'Oublier la question de la transparence envers les clients.',
      ],
      competence: 'diligence',
      technique: 'decomposer',
    },
    motsCles: [
      'charte',
      'règles',
      'usage responsable',
      'données personnelles',
      'équipe',
      'diligence',
    ],
  },
  {
    id: 'tous-assistant-style-ecriture',
    titre: 'Créer un assistant qui écrit avec votre style',
    metier: 'tous',
    niveau: 'avance',
    famille: 'automatiser',
    duree: 45,
    outils: ['claude', 'chatgpt', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Les textes rédigés par l’IA « sonnent IA » : formules creuses, phrases longues, enthousiasme forcé. Vous voulez un assistant personnel qui connaît vos préférences d’écriture et produit des premiers jets que vous n’avez presque plus à retoucher.',
    objectif:
      'Faire analyser son style à partir d’exemples, en tirer un guide de style, et l’installer dans un assistant (Projet, GPT ou Gem) testé à l’aveugle.',
    etapes: [
      'Choisissez trois textes que vous avez écrits et que vous aimez (e-mails, notes), et retirez-en noms, chiffres et informations confidentielles.',
      'Envoyez le prompt de départ avec ces trois textes : l’IA en tire un guide de style.',
      'Corrigez le guide : ajoutez vos préférences et vos interdits (le matériau donne des exemples), retirez ce qui ne vous ressemble pas.',
      'Créez un Projet (Claude ou ChatGPT), un GPT (création payante) ou un Gem (Gemini) : collez le guide dans les instructions et ajoutez les trois textes comme exemples.',
      'Testez sur trois demandes réelles (un e-mail, une note, une réponse délicate) et comparez avec l’IA sans assistant.',
      'Faites un test à l’aveugle : montrez à un collègue un texte de vous et un texte de l’assistant, et demandez-lui lequel est le vôtre.',
    ],
    prompt:
      'Voici trois textes que j’ai écrits. Analyse mon style et rédige un guide que tu pourrais suivre pour écrire comme moi : longueur des phrases, niveau de langue, formules d’ouverture et de clôture, ponctuation, mots que j’emploie et ceux que je n’emploie jamais, façon d’annoncer une demande ou une mauvaise nouvelle.\n\nDonne pour chaque règle un exemple tiré de mes textes. Ne reprends aucune information de fond.\n\n<texte1>\n[collez le premier texte]\n</texte1>\n<texte2>\n[collez le deuxième texte]\n</texte2>\n<texte3>\n[collez le troisième texte]\n</texte3>',
    materiau: {
      titre: 'Exemples de préférences et d’interdits à ajouter au guide',
      texte:
        '- Jamais « Je me permets de », « N’hésitez pas », « Dans un monde en constante évolution ».\n- Une idée par phrase ; 20 mots au maximum par phrase.\n- Ouverture : « Bonjour [prénom], » ; clôture : « Bonne journée, » puis le prénom.\n- Vouvoiement avec les clients, tutoiement entre collègues.\n- Pas de points d’exclamation en série, pas d’emoji.\n- La mauvaise nouvelle en premier, la solution juste après.\n- Montants en XPF, dates écrites en toutes lettres (« jeudi 15 octobre »).',
    },
    variantes: {
      simple:
        'Ne pas créer d’assistant : enregistrer le guide de style et le coller au début des conversations de rédaction.',
      poussee:
        'Créer deux assistants (style client, style interne), les faire utiliser une semaine par un collègue du même service, puis comparer le temps de retouche.',
    },
    astuces: {
      claude:
        'Dans un Projet, collez le guide dans les instructions et déposez les trois textes dans les connaissances du projet.',
      chatgpt:
        'Un Projet suffit pour vous ; la création d’un GPT, payante, permet de partager l’assistant.',
      gemini:
        'Créez un Gem : collez le guide dans ses instructions et ajoutez les textes en fichiers.',
    },
    vigilance:
      'Vos textes d’exemple doivent être nettoyés : un vieil e-mail contient souvent des noms, des montants ou des informations sur un dossier. Un assistant qui écrit comme vous ne vous dispense pas de relire : vous restez l’auteur.',
    formateur: {
      resultat:
        'Un guide de style personnel, corrigé par l’apprenant et installé dans un assistant, et trois textes produits que l’apprenant juge proches des siens ; au test à l’aveugle, le collègue hésite.',
      criteres: [
        'Les textes d’exemple ont été nettoyés avant d’être collés.',
        'Le guide contient des règles précises avec des exemples, et des interdits.',
        'L’assistant a été comparé à l’IA sans instructions, sur les mêmes demandes.',
        'Le test à l’aveugle a été fait.',
      ],
      pieges: [
        'Un guide trop vague (« style professionnel et chaleureux ») qui ne change rien.',
        'Un assistant qui recopie des passages des textes d’exemple au lieu d’en reprendre le style.',
        'Des exemples non nettoyés, qui contiennent des données de clients.',
      ],
      competence: 'description',
      technique: 'exemples',
    },
    motsCles: ['style', 'assistant', 'Projet', 'GPT', 'Gem', 'préférences', 'écriture'],
  },
  {
    id: 'tous-notebook-canva-fiche-memo',
    titre: 'Enchaîner Gemini Notebook et Canva pour créer une fiche mémo',
    metier: 'tous',
    niveau: 'avance',
    famille: 'visuels',
    duree: 60,
    outils: ['notebook', 'canva'],
    outilConseille: 'notebook',
    situation:
      'Avant la saison cyclonique, votre direction veut afficher près des postes de travail une fiche mémo « Ce que je fais ». Les consignes existent dans une note interne de deux pages que personne ne relit. Vous en tirez une fiche d’une page, fidèle à la note, mise en forme dans Canva.',
    objectif:
      'Enchaîner deux outils : extraire avec Gemini Notebook un texte fidèle aux sources, puis le mettre en forme dans Canva sans en changer le sens.',
    etapes: [
      'Créez un carnet dans Gemini Notebook et ajoutez la note du matériau comme source, en collant le texte.',
      'Dans la discussion, envoyez le prompt de départ : il produit le texte de la fiche, chaque consigne renvoyant à sa source par une citation.',
      'Cliquez sur chaque citation pour vérifier la consigne correspondante ; corrigez ou supprimez ce qui ne vient pas de la note.',
      'Dans Canva, demandez à l’IA Canva une fiche A4 verticale en cinq blocs colorés (avant la saison, pré-alerte, alerte 1, alerte 2, après), puis collez votre texte vérifié.',
      'Si un bloc déborde, raccourcissez-le avec l’écriture magique, puis comparez de nouveau avec la note : aucune consigne ne doit avoir changé de sens.',
      'Vérifiez la lisibilité à deux mètres (taille du texte, contraste) et faites relire la fiche par un collègue avant de l’imprimer.',
    ],
    prompt:
      'À partir des sources de ce carnet uniquement, rédige le texte d’une fiche mémo d’une page pour les salariés, intitulée « Saison cyclonique : ce que je fais ».\n\nStructure : cinq blocs (avant la saison, pré-alerte, alerte de niveau 1, alerte de niveau 2, après la levée de l’alerte), chacun avec quatre consignes au maximum, à l’infinitif, de dix mots au maximum.\n\nAjoute en bas les contacts utiles et la phrase : « Suivez toujours les consignes officielles de la sécurité civile. »\n\nN’ajoute aucune consigne absente des sources. Si une consigne est trop longue pour être raccourcie sans perdre son sens, signale-le.',
    materiau: {
      titre: 'Note interne : saison cyclonique (fictive)',
      texte:
        'Objet : organisation du service pendant la saison cyclonique\n\nAvant la saison : chaque responsable vérifie la liste téléphonique de son équipe et la met à jour dans le classeur partagé. Le service informatique teste la sauvegarde du serveur et l’accès à distance. Les réserves d’eau (30 bouteilles) et la trousse de secours sont contrôlées en octobre par l’assistante de direction.\n\nEn pré-alerte : sauvegarder ses fichiers sur le serveur, emporter son ordinateur portable le soir, rentrer le mobilier de la terrasse, vérifier que les fenêtres ferment. Les rendez-vous du lendemain sont confirmés ou reportés par téléphone.\n\nEn alerte de niveau 1 : l’accueil ferme au public ; les salariés quittent les locaux dans l’heure pour rejoindre leur domicile ; le dernier parti coupe les appareils non essentiels et ferme le local. Le responsable de permanence, inscrit au planning affiché à l’accueil, prévient l’équipe par SMS.\n\nEn alerte de niveau 2 : personne ne se rend au bureau, et aucun travail n’est demandé.\n\nAprès la levée de l’alerte : attendre le message du responsable de permanence avant de revenir ; signaler tout dégât par une photo envoyée au groupe de l’équipe ; travailler à distance si les locaux sont inaccessibles.\n\nContacts utiles : responsable de permanence (voir le planning), service informatique (poste 214). Pour les consignes officielles, suivre les annonces de la sécurité civile et de la radio.',
    },
    variantes: {
      simple:
        'Faire seulement le texte de la fiche dans Gemini Notebook, sans la mise en forme dans Canva.',
      poussee:
        'Décliner la fiche en publication pour le groupe de messagerie de l’équipe, et générer un résumé audio de la note pour les collègues qui travaillent sur le terrain.',
    },
    astuces: {
      notebook:
        'Collez la note comme source de type texte : chaque consigne de la fiche renverra au passage exact par une citation numérotée.',
      canva:
        'Avec l’offre Pro, le kit de marque applique les couleurs et le logo de l’entreprise ; sinon, choisissez deux couleurs bien contrastées.',
    },
    vigilance:
      'Une fiche de sécurité affichée engage l’entreprise : faites-la valider par le responsable avant de la diffuser. Les consignes officielles de la sécurité civile priment toujours sur la fiche.',
    formateur: {
      resultat:
        'Une fiche A4 en cinq blocs, lisible à distance, dont chaque consigne vient de la note interne, sans consigne inventée, avec les contacts et le renvoi vers les consignes officielles.',
      criteres: [
        'Chaque consigne de la fiche se retrouve dans la note (citations vérifiées).',
        'Le passage dans Canva n’a changé le sens d’aucune consigne.',
        'La fiche est lisible à distance (taille, contraste).',
        'La fiche renvoie vers les consignes officielles.',
      ],
      pieges: [
        'Laisser l’IA Canva ou l’écriture magique ajouter des consignes génériques (« faire des réserves de piles ») absentes de la note.',
        'Inverser des consignes entre deux niveaux d’alerte en raccourcissant.',
        'Recopier une règle officielle trouvée en ligne sans la vérifier.',
      ],
      competence: 'discernement',
      technique: 'sources',
    },
    motsCles: ['Gemini Notebook', 'Canva', 'fiche mémo', 'affiche', 'cyclone', 'enchaîner'],
  },
  {
    id: 'tous-verifier-recherche-approfondie',
    titre: 'Vérifier une recherche approfondie, source par source',
    metier: 'tous',
    niveau: 'avance',
    famille: 'veiller',
    duree: 60,
    outils: ['claude', 'chatgpt', 'gemini'],
    outilConseille: 'gemini',
    situation:
      'Votre direction veut savoir quelles règles de protection des données personnelles s’appliquent quand l’entreprise utilise l’IA en Nouvelle-Calédonie. Une recherche approfondie produit en dix minutes un rapport de plusieurs pages, très convaincant. Avant de le transmettre, vous vérifiez ce qu’il affirme.',
    objectif:
      'Lancer une recherche approfondie bien cadrée, contrôler ses affirmations clés en remontant aux sources, et rendre une synthèse qui distingue le vérifié du douteux.',
    etapes: [
      'Lancez une recherche approfondie avec le prompt de départ : Recherche dans Claude, Recherche approfondie dans ChatGPT ou Deep Research dans Gemini.',
      'Relevez dans le rapport les cinq affirmations les plus importantes pour la décision (règle applicable, obligations, autorité compétente…).',
      'Pour chacune, ouvrez la source citée : existe-t-elle, est-elle officielle, dit-elle exactement cela, et pour la Nouvelle-Calédonie ?',
      'Classez les affirmations dans le tableau du matériau : vérifiée, nuancée, absente de la source, contredite.',
      'Lancez la même recherche dans un deuxième outil et relevez les points où les deux rapports divergent.',
      'Rédigez une synthèse d’une demi-page pour la direction, qui sépare ce qui est vérifié de ce qui doit être confirmé par un juriste.',
    ],
    prompt:
      'Fais une recherche approfondie sur cette question : quelles règles de protection des données personnelles s’appliquent à une entreprise privée de Nouvelle-Calédonie qui utilise des outils d’IA en ligne (Claude, ChatGPT, Copilot, Gemini) avec des données de clients ?\n\nDistingue ce qui relève du droit applicable en Nouvelle-Calédonie et ce qui relève du droit de l’Union européenne ou de la métropole, en signalant les points incertains ou discutés.\n\nPrivilégie les sources officielles (textes, autorités de contrôle, administrations) et cite chaque source avec son lien et sa date. Termine par la liste des questions à poser à un juriste.',
    materiau: {
      titre: 'Tableau de vérification',
      texte:
        'Affirmation du rapport | Source citée (lien) | Source officielle ? | Ce que dit vraiment la source | Verdict (vérifiée, nuancée, absente, contredite)\n1. | | | |\n2. | | | |\n3. | | | |\n4. | | | |\n5. | | | |',
    },
    variantes: {
      simple: 'Vérifier seulement trois affirmations, dans un seul outil.',
      poussee:
        'Faire la même vérification sur un sujet de votre métier (une réglementation, un dispositif d’aide), puis présenter au groupe les erreurs les plus fréquentes des rapports.',
    },
    astuces: {
      claude:
        'La Recherche est réservée aux offres payantes ; avec l’offre gratuite, la recherche web cite aussi ses pages, sur une question plus ciblée.',
      chatgpt:
        'La recherche approfondie est limitée en gratuit : préparez bien la question avant de la lancer.',
      gemini:
        'Deep Research propose d’abord un plan de recherche : relisez-le et précisez « en Nouvelle-Calédonie » partout où c’est nécessaire avant de lancer.',
    },
    vigilance:
      'Un rapport sourcé n’est pas un avis juridique. Ne transmettez aucune conclusion sur une règle de droit sans la faire confirmer par un juriste ou par l’autorité compétente.',
    formateur: {
      resultat:
        'Un tableau de cinq affirmations vérifiées à la source, une comparaison de deux outils, et une synthèse qui distingue clairement le vérifié, le nuancé et ce qui doit être confirmé par un juriste, notamment sur ce qui s’applique ou non en Nouvelle-Calédonie.',
      criteres: [
        'Les cinq affirmations ont été confrontées à leur source, ouverte.',
        'Les sources non officielles (blogs, sites commerciaux) sont repérées comme telles.',
        'Les divergences entre les deux outils sont relevées.',
        'La synthèse ne présente aucune règle comme certaine sans source officielle.',
      ],
      pieges: [
        'Transposer sans le voir une règle de métropole ou de l’Union européenne à la Nouvelle-Calédonie.',
        'Juger un rapport au nombre de ses sources plutôt qu’à leur qualité.',
        'Un lien cité qui ne contient pas l’information, ou une page qui n’existe plus.',
      ],
      competence: 'discernement',
      technique: 'sources',
    },
    motsCles: [
      'recherche approfondie',
      'Deep Research',
      'sources',
      'vérification',
      'données personnelles',
      'juridique',
    ],
  },
  {
    id: 'tous-mesurer-temps-gagne',
    titre: 'Mesurer le temps réellement gagné grâce à l’IA',
    metier: 'tous',
    niveau: 'avance',
    famille: 'analyser',
    duree: 45,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Après deux semaines d’essai, votre responsable veut savoir si l’IA fait vraiment gagner du temps à l’équipe avant de payer des abonnements. Trois collègues ont tenu un journal de bord. Vous l’analysez pour donner une réponse chiffrée et honnête.',
    objectif:
      'Analyser un journal de bord avec l’IA, en comptant le temps de relecture et de correction, vérifier les calculs, et présenter un bilan nuancé.',
    etapes: [
      'Déposez ou collez le journal du matériau avec le prompt de départ.',
      'Vérifiez à la main, ou avec une calculatrice, le total : temps sans IA, temps avec IA, différence.',
      'Demandez un graphique du temps gagné par type de tâche, et vérifiez qu’il correspond au tableau.',
      'Demandez à l’IA ce que ces données ne permettent pas de conclure, et ajoutez vos propres réserves.',
      'Faites rédiger une note d’une demi-page pour la direction : gains, tâches à privilégier, tâches à éviter, conditions (relecture), limites.',
      'Proposez un journal amélioré pour le mois suivant : colonnes à ajouter ou à préciser.',
    ],
    prompt:
      'Tu es analyste. Voici le journal de bord de trois collègues qui ont testé l’IA pendant deux semaines (CSV, séparateur point-virgule).\n\n<journal>\n[collez le journal ici]\n</journal>\n\n1. Calcule le temps gagné au total, par personne et par type de tâche, en minutes et en pourcentage. Montre tes calculs.\n2. Repère les tâches où l’IA n’a rien fait gagner, ou a fait perdre du temps.\n3. Mets en relation les erreurs trouvées après envoi et les corrections déclarées.\n4. Liste les limites de ces données (estimations, petit nombre de cas).\n\nNe tire aucune conclusion que les données ne permettent pas.',
    materiau: {
      titre: 'Journal de bord (fictif, CSV)',
      texte:
        'Date;Personne;Tâche;Outil;Temps sans IA estimé (min);Temps avec IA, relecture comprise (min);Corrections nécessaires;Erreur trouvée après envoi\n06/10;Léa;Réponse client courante;ChatGPT;15;6;mineures;non\n06/10;Sione;Compte rendu de réunion;Copilot;45;20;mineures;non\n07/10;Thi Lan;Tableau de suivi;Gemini;60;35;importantes;non\n07/10;Léa;Publication Facebook;ChatGPT;20;10;aucune;oui (date fausse)\n08/10;Sione;Résumé d’un rapport de 30 pages;Copilot;90;25;mineures;non\n08/10;Léa;Réponse à une réclamation;ChatGPT;30;35;importantes;non\n09/10;Thi Lan;Traduction d’un e-mail en anglais;Gemini;25;8;aucune;non\n09/10;Sione;Compte rendu de réunion;Copilot;45;15;aucune;non\n12/10;Léa;Réponse client courante;ChatGPT;15;5;aucune;non\n12/10;Thi Lan;Formules Excel;Gemini;40;15;mineures;non\n13/10;Sione;Note de synthèse pour la direction;Copilot;60;50;importantes;non\n13/10;Léa;Réponse client courante;ChatGPT;15;4;mineures;oui (montant faux)\n14/10;Thi Lan;Planning de l’équipe;Gemini;30;30;importantes;non\n15/10;Sione;Compte rendu de réunion;Copilot;45;15;mineures;non\n15/10;Léa;Publication Facebook;ChatGPT;20;8;mineures;non',
    },
    variantes: {
      simple: 'Calculer seulement le gain total et le gain par type de tâche, sans note.',
      poussee:
        'Estimer la valeur du temps gagné en XPF avec un coût horaire fictif, la comparer au prix des abonnements, et présenter le calcul avec ses hypothèses.',
    },
    astuces: {
      chatgpt:
        'Déposez le fichier CSV : l’analyse de données fait les calculs et trace le graphique. Demandez le détail des calculs pour les vérifier.',
      claude:
        'Demandez la synthèse et le graphique en fichier Excel : les formules permettent de vérifier les totaux.',
      copilot:
        'Avec la licence, collez le journal dans Excel, mettez-le sous forme de tableau, puis demandez l’analyse à Copilot dans Excel.',
      gemini:
        'Importez le journal dans Google Sheets et utilisez « Demander à Gemini » (Google Workspace) pour le graphique.',
    },
    vigilance:
      'Un journal de bord nominatif sert à évaluer l’outil, pas les personnes : dans la note à la direction, présentez les résultats par type de tâche plutôt que par collègue.',
    formateur: {
      resultat:
        'Total : 555 minutes estimées sans IA contre 281 avec IA, soit 274 minutes gagnées (environ 49 %) en deux semaines. Les comptes rendus (85 minutes gagnées) et le résumé de rapport (65) rapportent le plus ; la réponse à une réclamation fait perdre 5 minutes et le planning ne fait rien gagner. Deux erreurs sont parties après envoi, dont une sur une tâche déclarée « sans correction ». La note rappelle que les temps sans IA sont des estimations, sur quinze cas seulement.',
      criteres: [
        'Le total (274 minutes gagnées) a été vérifié à la main.',
        'Les tâches sans gain ou en perte sont identifiées.',
        'Le lien entre « aucune correction » et erreur après envoi est relevé.',
        'La note présente les limites et ne met pas les personnes en cause.',
      ],
      pieges: [
        'Reprendre un total faux calculé par l’IA sans le recalculer.',
        'Annoncer « l’IA fait gagner 50 % de temps » sans dire que les temps sans IA sont estimés et les cas peu nombreux.',
        'Classer les collègues du plus au moins efficace dans la note.',
      ],
      competence: 'discernement',
      technique: 'critique',
    },
    motsCles: ['temps gagné', 'mesure', 'journal de bord', 'CSV', 'analyse', 'bilan'],
  },
];
