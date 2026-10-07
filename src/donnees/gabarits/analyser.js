/**
 * Gabarits « Analyser des chiffres ». Chaque gabarit est décliné pour chaque métier :
 * {donnees}, {colonnes}, {indicateur}, {structure.un}… prennent le vocabulaire du métier
 * (voir ../vocabulaire.js). Les lignes d'un tableau dépendent du métier : chaque exercice fait
 * donc générer des données fictives sur les colonnes du métier, puis les analyse.
 */

export const gabarits = [
  {
    id: 'g-tableau-fictif-commente',
    titre: 'Générer un tableau fictif et le faire commenter',
    niveau: 'debutant',
    famille: 'analyser',
    duree: 15,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Vous travaillez dans {structure.un} à Nouméa et l’on vous a confié {donnees}. Avant de soumettre de vrais chiffres à une IA, vous voulez vous entraîner sur un tableau fictif construit sur le même modèle : mêmes colonnes, valeurs inventées mais vraisemblables.',
    objectif:
      'Faire générer des données fictives réalistes, puis obtenir un commentaire chiffré dont on vérifie les calculs.',
    etapes: [
      'Collez le prompt de départ : il demande un tableau fictif de 12 lignes avec les colonnes de votre activité, puis un commentaire.',
      'Vérifiez le tableau : 12 lignes, les bonnes colonnes, des montants en XPF, des valeurs vraisemblables et aucun nom de personne réelle.',
      'Lisez le commentaire en cinq points et soulignez chaque chiffre cité.',
      'Recalculez deux de ces chiffres à la calculatrice ou dans un tableur, par exemple un total et un maximum.',
      'Notez une phrase du commentaire que vous ne pourriez pas affirmer sans connaître la situation réelle.',
    ],
    prompt:
      'Tu es assistant dans {structure.un} à Nouméa, en Nouvelle-Calédonie. Je veux m’entraîner à analyser des chiffres sans utiliser de vraies données.\n\n1. Génère un tableau fictif de 12 lignes avec exactement ces colonnes : {colonnes}\nLes valeurs doivent être vraisemblables pour la Nouvelle-Calédonie, avec les montants en XPF et aucun nom de personne réelle.\n2. Commente ensuite ce tableau en 5 points courts : la tendance générale, la valeur la plus haute, la valeur la plus basse, un point d’attention et une question qu’un responsable devrait se poser.\n\nPour chaque chiffre que tu cites, indique le calcul effectué.',
    variantes: {
      simple: 'Demander seulement le tableau fictif et trois constats, sans calcul.',
      poussee:
        'Demander le tableau en fichier CSV, l’ouvrir dans Excel ou Google Sheets et refaire tous les totaux avec des formules pour les comparer au commentaire.',
    },
    astuces: {
      claude:
        'Demandez le tableau dans un artefact : il reste affiché à côté de la conversation pendant que vous posez vos questions.',
      chatgpt:
        'Demandez le tableau en fichier CSV à télécharger : l’analyse de données peut ensuite le relire et tracer un graphique.',
    },
    vigilance:
      'Pour cet entraînement, ne collez aucune vraie donnée de la structure. Un commentaire bien rédigé peut contenir un total faux : recalculez tout chiffre que vous comptez réutiliser.',
    formateur: {
      resultat:
        'Un tableau fictif de 12 lignes aux colonnes demandées, vraisemblable, suivi d’un commentaire en cinq points dont au moins deux chiffres ont été recalculés.',
      criteres: [
        'Le tableau respecte les colonnes et le nombre de lignes demandés.',
        'Les valeurs sont vraisemblables et les montants sont en XPF.',
        'L’apprenant a recalculé au moins deux chiffres du commentaire.',
        'Il sait dire quelle phrase du commentaire va au-delà de ce que montrent les chiffres.',
      ],
      pieges: [
        'Croire le commentaire juste parce qu’il est bien rédigé : les totaux et les moyennes sont parfois faux.',
        'Tableau de 10 ou 14 lignes au lieu de 12, sans que personne ne compte.',
        'Réutiliser ensuite ces chiffres fictifs comme s’ils décrivaient la réalité.',
      ],
      competence: 'description',
      technique: 'decomposer',
    },
    motsCles: ['données fictives', 'tableau', 'commentaire', 'chiffres'],
  },
  {
    id: 'g-indicateur-calcul-verifie',
    titre: 'Faire calculer {indicateur} et refaire le calcul à la main',
    niveau: 'debutant',
    famille: 'analyser',
    duree: 20,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Vous travaillez dans {structure.un} à Nouméa. Votre responsable vous demande de calculer {indicateur} pour le point mensuel avec la direction. L’IA peut vous faire gagner du temps, mais le chiffre sera présenté tel quel : il doit être juste.',
    objectif:
      'Obtenir un calcul expliqué étape par étape, le refaire soi-même et comprendre l’origine d’un éventuel écart.',
    etapes: [
      'Faites générer un tableau fictif de 10 lignes avec les colonnes suivantes, en ajoutant si besoin celles qui manquent pour le calcul : {colonnes}.',
      'Collez ce tableau dans le prompt de départ et demandez le calcul, avec la formule et chaque étape.',
      'Refaites le calcul vous-même, à la calculatrice ou dans un tableur, et remplissez la fiche de contrôle du matériau.',
      'S’il y a un écart, montrez votre calcul à l’IA et demandez-lui d’où vient la différence.',
      'Rédigez en une phrase le résultat à annoncer, avec la période et la méthode de calcul.',
    ],
    prompt:
      'Tu travailles avec moi dans {structure.un} à Nouméa. À partir du tableau ci-dessous, calcule {indicateur}.\n\n- Commence par écrire la formule utilisée, en une ligne.\n- Détaille ensuite le calcul étape par étape, en reprenant les valeurs du tableau.\n- Donne le résultat arrondi, avec son unité (XPF, %, jours…).\n- Si une donnée manque pour faire le calcul, dis-le au lieu de la supposer.\n\n<tableau>\n[collez le tableau ici]\n</tableau>',
    materiau: {
      titre: 'Fiche de contrôle du calcul',
      texte:
        'Formule annoncée par l’IA : …\nCette formule correspond-elle bien à l’indicateur demandé ? oui / non\nValeurs reprises du tableau : toutes exactes / erreur à la ligne …\nRésultat de l’IA : …\nMon résultat : …\nÉcart : …\nOrigine de l’écart (valeur mal recopiée, mauvaise base, arrondi…) : …\nPhrase à annoncer : …',
    },
    variantes: {
      simple:
        'Faire calculer seulement un total et une moyenne, puis les vérifier à la calculatrice.',
      poussee:
        'Demander la formule de tableur correspondante, l’appliquer au tableau dans Excel ou Google Sheets et comparer avec le résultat donné dans la conversation.',
    },
    astuces: {
      chatgpt:
        'Déposez le tableau en fichier : l’analyse de données calcule avec du code, ce qui évite les erreurs de calcul, mais pas les erreurs de méthode.',
      copilot:
        'Dans Excel, mettez les données sous forme de tableau avant de demander le calcul à Copilot (selon la licence).',
      gemini:
        'Dans Google Sheets, « Demander à Gemini » (Google Workspace) peut proposer la formule et l’insérer dans le tableau.',
    },
    vigilance:
      'Un calcul présenté avec assurance peut être faux : valeur mal recopiée, mauvaise période, pourcentage calculé sur la mauvaise base. Ne transmettez aucun chiffre que vous n’avez pas recalculé.',
    formateur: {
      resultat:
        'Un calcul détaillé avec sa formule, un résultat recalculé par l’apprenant, l’explication d’un éventuel écart et une phrase prête à annoncer, avec la période.',
      criteres: [
        'La formule est écrite et correspond bien à l’indicateur demandé.',
        'L’apprenant a refait le calcul et rempli la fiche de contrôle.',
        'Le résultat annoncé précise la période et l’unité.',
      ],
      pieges: [
        'Valeur mal recopiée du tableau par l’IA, qui fausse tout le calcul.',
        'Pourcentage calculé sur la mauvaise base, par exemple sur le total au lieu de la valeur de départ.',
        'Arrondis successifs qui décalent le résultat final.',
      ],
      competence: 'discernement',
      technique: 'critique',
    },
    motsCles: ['indicateur', 'calcul', 'vérification', 'formule'],
  },
  {
    id: 'g-formules-tableur',
    titre: 'Obtenir des formules de tableur expliquées pas à pas',
    niveau: 'debutant',
    famille: 'analyser',
    duree: 15,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'copilot',
    situation:
      'Dans votre tableur, vous tenez à jour {donnees}. Les colonnes sont les suivantes : {colonnes}. Vous voulez ajouter un total, une moyenne et une colonne qui signale toute seule les valeurs à surveiller, mais vous ne connaissez pas les formules.',
    objectif:
      'Obtenir des formules adaptées à son propre tableau, les tester sur des valeurs connues et savoir les expliquer.',
    etapes: [
      'Faites générer 8 lignes de données fictives en tableau avec ces colonnes, puis copiez-les dans un tableur (Excel ou Google Sheets) à partir de la cellule A1.',
      'Complétez le prompt de départ : langue du tableur, lettres des colonnes, dernière ligne, condition à surveiller.',
      'Collez chaque formule dans le tableur et vérifiez le résultat sur deux lignes, à la calculatrice.',
      'Demandez une explication de la formule conditionnelle, morceau par morceau, puis reformulez-la avec vos mots.',
      'Modifiez une valeur du tableau et vérifiez que les résultats se mettent à jour.',
    ],
    prompt:
      'Je travaille dans [Excel / Google Sheets], en français. Mon tableau commence en A1 avec ces colonnes : {colonnes}. Les données vont de la ligne 2 à la ligne [9].\n\nDonne-moi les formules pour :\n1. le total de la colonne [lettre] ;\n2. la moyenne de la colonne [lettre] ;\n3. une nouvelle colonne qui affiche « À surveiller » quand [condition, par exemple : la valeur de la colonne D dépasse 100 000] et reste vide sinon.\n\nPour chaque formule, donne la cellule où la coller, la formule exacte avec les noms de fonctions en français (SOMME, MOYENNE, SI…) et le point-virgule comme séparateur, puis une explication en une phrase simple.',
    variantes: {
      simple: 'Se limiter au total et à la moyenne.',
      poussee:
        'Ajouter une mise en forme conditionnelle et un tableau croisé dynamique, en demandant la marche à suivre clic par clic.',
    },
    astuces: {
      copilot:
        'Avec la licence, Copilot dans Excel propose la formule et l’insère dans le tableau : relisez-la avant de valider.',
      gemini:
        'Dans Google Sheets, « Demander à Gemini » propose une formule à partir de votre description (offre Google Workspace).',
    },
    vigilance:
      'Les noms de fonctions et le séparateur changent selon la langue du tableur (SUM ou SOMME, virgule ou point-virgule) : précisez la vôtre. Testez toujours une formule sur une valeur dont vous connaissez le résultat.',
    formateur: {
      resultat:
        'Trois formules qui fonctionnent dans le tableur de l’apprenant, testées sur des valeurs connues, et une explication de la formule conditionnelle reformulée avec ses mots.',
      criteres: [
        'Les formules sont dans la langue du tableur et fonctionnent sans message d’erreur.',
        'L’apprenant a vérifié au moins un résultat à la calculatrice.',
        'Il sait expliquer ce que fait la formule conditionnelle.',
      ],
      pieges: [
        'Formule en anglais ou avec des virgules dans un tableur français, qui renvoie une erreur.',
        'Plage de cellules qui oublie la dernière ligne : le total est faux sans aucun message d’erreur.',
      ],
      competence: 'description',
      technique: 'contexte',
    },
    motsCles: ['Excel', 'Google Sheets', 'formule', 'tableur'],
  },
  {
    id: 'g-anomalies-tableau',
    titre: 'Repérer les anomalies cachées dans un tableau de chiffres',
    niveau: 'intermediaire',
    famille: 'analyser',
    duree: 30,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Vous devez bientôt transmettre à la direction {donnees}. Avant l’envoi, vous voulez vérifier qu’aucune erreur ne s’est glissée dans les chiffres : doublon, zéro de trop, case vide, incohérence entre deux colonnes. Vous testez d’abord ce que l’IA repère vraiment, sur un tableau fictif dont vous connaissez les pièges.',
    objectif:
      'Faire contrôler un tableau par l’IA, mesurer ce qu’elle trouve, ce qu’elle rate et ce qu’elle signale à tort, et garder pour soi la décision de corriger.',
    etapes: [
      'Dans une première conversation, utilisez le prompt 1 : l’IA génère un tableau fictif de 15 lignes avec 4 anomalies cachées, et en donne la liste à part.',
      'Recopiez cette liste dans la grille du matériau, sans jamais la donner à l’IA par la suite.',
      'Ouvrez une nouvelle conversation, ou un autre outil, et collez seulement le tableau avec le prompt 2.',
      'Remplissez la grille : anomalies trouvées, anomalies ratées et fausses alertes.',
      'Pour chaque correction proposée, décidez vous-même : une valeur inhabituelle n’est pas forcément une erreur.',
    ],
    prompt:
      'Prompt 1 (première conversation) :\nGénère un tableau fictif de 15 lignes avec ces colonnes : {colonnes}. Les valeurs doivent être vraisemblables pour {structure.un} à Nouméa, avec les montants en XPF. Glisse 4 anomalies réalistes : un doublon, une valeur avec un zéro de trop, une case vide et une incohérence entre deux colonnes. Donne le tableau, puis, séparément, la liste des 4 anomalies avec leur numéro de ligne.\n\nPrompt 2 (nouvelle conversation) :\nTu es chargé du contrôle qualité des données dans {structure.un}. Examine le tableau ci-dessous et liste toutes les anomalies possibles : doublons, valeurs aberrantes, cases vides, incohérences. Pour chacune, donne la ligne, la colonne, la raison du doute et une correction possible. Classe-les de la plus certaine à la moins certaine. Ne modifie pas le tableau.\n\n<tableau>\n[collez le tableau ici]\n</tableau>',
    materiau: {
      titre: 'Grille de comparaison',
      texte:
        'Anomalie cachée 1 (doublon), ligne … : trouvée oui / non ; correction juste oui / non\nAnomalie cachée 2 (zéro de trop), ligne … : trouvée oui / non ; correction juste oui / non\nAnomalie cachée 3 (case vide), ligne … : trouvée oui / non ; correction juste oui / non\nAnomalie cachée 4 (incohérence), ligne … : trouvée oui / non ; correction juste oui / non\n\nFausses alertes de l’IA (valeurs signalées à tort) : …\nBilan : … anomalies trouvées sur 4, … fausses alertes.',
    },
    variantes: {
      simple:
        'Faire chercher seulement les doublons et les cases vides, sur un tableau de 10 lignes.',
      poussee:
        'Soumettre le même tableau à deux outils et comparer leurs bilans, puis demander une règle de mise en forme conditionnelle qui signale chaque type d’anomalie dans le tableur.',
    },
    astuces: {
      claude:
        'Demandez le résultat dans un artefact : le tableau avec les lignes douteuses signalées, plus facile à relire.',
      chatgpt:
        'Avec l’analyse de données, demandez un fichier Excel où les lignes suspectes sont surlignées.',
    },
    vigilance:
      'Sur de vraies données, ne laissez jamais l’IA corriger seule : une valeur inhabituelle peut être juste. Retirez les noms et les informations personnelles avant de déposer un fichier.',
    formateur: {
      resultat:
        'Une liste d’anomalies classée, comparée aux 4 anomalies cachées, avec un bilan chiffré : trouvées, ratées, fausses alertes.',
      criteres: [
        'Le tableau a été analysé dans une conversation qui ne connaissait pas les anomalies.',
        'Le bilan distingue les anomalies trouvées, ratées et signalées à tort.',
        'Chaque correction a été décidée par l’apprenant, pas appliquée telle quelle.',
      ],
      pieges: [
        'Rester dans la même conversation : l’IA « retrouve » les anomalies qu’elle vient d’inventer.',
        'Accepter une correction qui remplace une case vide par une valeur inventée.',
        'Croire que l’IA a tout trouvé parce qu’elle a signalé beaucoup de lignes.',
      ],
      competence: 'discernement',
      technique: 'structurer',
    },
    motsCles: ['anomalies', 'contrôle', 'doublons', 'qualité des données'],
  },
  {
    id: 'g-criteres-ponderes',
    titre: 'Comparer {comparaison} avec une grille de critères pondérés',
    niveau: 'intermediaire',
    famille: 'analyser',
    duree: 30,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Vous travaillez dans {structure.un} à Païta et vous devez comparer {comparaison}. Votre responsable attend une recommandation argumentée, fondée sur plusieurs critères et non sur une impression.',
    objectif:
      'Construire avec l’IA une grille de critères pondérés, l’appliquer, vérifier un score et tester la solidité du choix.',
    etapes: [
      'Avec l’étape 1 du prompt, faites proposer 6 critères de comparaison, puis choisissez vous-même leur poids (total : 100 %).',
      'Décrivez les deux options entre les balises, sans information confidentielle, ou faites générer deux descriptions fictives réalistes.',
      'Donnez vos poids et demandez la grille complète : note de 1 à 5 par critère, justification d’une ligne, score pondéré.',
      'Recalculez à la main le score pondéré de l’une des deux options.',
      'Baissez le poids du critère le plus lourd et regardez si le classement change : c’est le test de solidité.',
      'Rédigez la recommandation en cinq lignes, avec la principale réserve.',
    ],
    prompt:
      'Tu aides {structure.un} à Païta à prendre une décision. Je dois comparer {comparaison}.\n\nÉtape 1 : propose 6 critères de comparaison adaptés, avec une phrase pour expliquer chacun. N’attribue pas de poids : je les choisirai.\n\nÉtape 2, après ma réponse : avec mes poids, construis un tableau avec le critère, son poids, la note de 1 à 5 de chaque option, une justification d’une ligne tirée des descriptions et le score pondéré. Calcule le total sur 5 de chaque option en montrant le calcul. Si une information manque pour noter un critère, écris « non renseigné » au lieu de supposer.\n\n<option_a>\n[description de la première option]\n</option_a>\n\n<option_b>\n[description de la seconde option]\n</option_b>',
    materiau: {
      titre: 'Fiche de pondération',
      texte:
        'Critère 1 : … poids : … %\nCritère 2 : … poids : … %\nCritère 3 : … poids : … %\nCritère 4 : … poids : … %\nCritère 5 : … poids : … %\nCritère 6 : … poids : … %\nTotal : 100 %\n\nScore pondéré de l’option A, recalculé à la main : …\nScore annoncé par l’IA : …\nSi le critère le plus lourd perd 10 points de poids, le classement change-t-il ? …',
    },
    variantes: {
      simple: 'Comparer sur 4 critères de même poids, sans pondération.',
      poussee:
        'Ajouter une troisième option, puis chercher à partir de quel poids du critère principal le classement s’inverse.',
    },
    astuces: {
      claude:
        'Demandez la grille en fichier Excel avec ses formules (création de fichiers) : en changeant un poids, vous voyez le classement se recalculer.',
      chatgpt:
        'Demandez le tableau en Excel avec les formules du score pondéré, et non des valeurs figées.',
    },
    vigilance:
      'Sur un vrai choix, appuyez-vous sur les documents réels et vérifiez chaque information reprise dans la grille. Ne collez ni conditions confidentielles ni données personnelles dans un outil grand public.',
    formateur: {
      resultat:
        'Une grille de 6 critères pondérés par l’apprenant, des notes justifiées, un score recalculé à la main, un test de solidité et une recommandation de cinq lignes avec sa réserve.',
      criteres: [
        'Les poids ont été choisis par l’apprenant et totalisent 100 %.',
        'Un score pondéré a été recalculé à la main et correspond à celui de l’IA, ou l’écart est expliqué.',
        'Le test de solidité a été fait et commenté.',
        'La recommandation mentionne une réserve ou un risque.',
      ],
      pieges: [
        'Laisser l’IA choisir les poids : elle décide alors à la place de l’apprenant.',
        'Erreur dans le total pondéré, par exemple des notes additionnées sans tenir compte des poids.',
        'Notes justifiées par des informations absentes des descriptions.',
      ],
      competence: 'delegation',
      technique: 'decomposer',
    },
    motsCles: ['comparaison', 'critères', 'pondération', 'décision'],
  },
  {
    id: 'g-graphique-messages-direction',
    titre: 'Tirer d’un gros fichier un graphique et trois messages pour la direction',
    niveau: 'avance',
    famille: 'analyser',
    duree: 45,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Vous travaillez dans {structure.un} à Nouméa. Pour le prochain comité de direction, on vous demande une seule diapositive : un graphique lisible et trois messages clés, chiffrés et vérifiés. Les données à analyser : {donnees}. Pour vous entraîner, vous travaillez sur un export fictif de 200 lignes.',
    objectif:
      'Enchaîner les étapes d’une analyse (contrôle, calculs, graphique, messages) sur un fichier volumineux, en validant chaque étape avant la suivante.',
    etapes: [
      'Faites générer un fichier CSV fictif de 200 lignes avec ces colonnes : {colonnes}. Téléchargez-le et ouvrez-le pour vérifier qu’il est complet.',
      'Dans une nouvelle conversation, déposez le fichier avec le prompt de départ : l’IA commence par contrôler les données. Corrigez ce qui doit l’être avant d’aller plus loin.',
      'Passez aux calculs, puis vérifiez deux résultats dans un tableur.',
      'Faites proposer trois graphiques, choisissez celui qui sert le mieux le message et faites-le retoucher : un titre qui dit le message, des unités, la source, des axes lisibles.',
      'Faites rédiger les trois messages clés et vérifiez que chacun s’appuie sur un chiffre que vous avez contrôlé.',
      'Assemblez la diapositive dans PowerPoint, Google Slides ou Canva : graphique, trois messages, source et date des données.',
    ],
    prompt:
      'Tu es analyste dans {structure.un} à Nouméa. Le fichier joint est un export fictif de 200 lignes, avec ces colonnes : {colonnes}. Nous allons travailler par étapes : attends ma validation avant de passer à la suivante.\n\nÉtape 1 : contrôle le fichier. Donne le nombre de lignes, les cases vides, les doublons et les valeurs extrêmes, sans rien corriger.\nÉtape 2 : calcule les totaux, les moyennes, la répartition et l’évolution sur la période, en montrant les calculs.\nÉtape 3 : propose trois graphiques possibles et dis, pour chacun, quel message il met en valeur.\nÉtape 4 : rédige trois messages clés pour la direction, de 20 mots au plus, chacun appuyé sur un chiffre précis du fichier. N’interprète pas au-delà des données.\n\nCommence par l’étape 1.',
    materiau: {
      titre: 'Demande de la directrice',
      texte:
        'Objet : comité de direction de jeudi\n\nBonjour,\n\nPour le comité de jeudi, il me faudrait une seule diapositive sur nos chiffres de l’année : un graphique et trois messages, pas plus. Indiquez la source et la date des données, s’il vous plaît. Nous n’aurons que cinq minutes sur ce point, et j’aurai sûrement une question sur le chiffre le plus surprenant.\n\nMerci,\nSylvie Morel, directrice',
    },
    variantes: {
      simple:
        'Travailler sur un tableau de 15 lignes et produire seulement le graphique et un message clé.',
      poussee:
        'Préparer deux versions de la diapositive, l’une pour la direction et l’autre pour les équipes, puis faire relire les messages par un collègue qui n’a pas vu les données.',
    },
    astuces: {
      chatgpt:
        'L’analyse de données lit les gros fichiers et trace le graphique : demandez aussi le tableau des valeurs utilisées, pour le vérifier.',
      claude:
        'Une fois les messages validés, demandez la diapositive en fichier PowerPoint avec la création de fichiers.',
      copilot:
        'Avec la licence, ouvrez le fichier dans Excel et demandez le graphique à Copilot : il s’appuie sur le tableau réel.',
      gemini:
        'Importez le fichier dans Google Sheets et utilisez « Demander à Gemini » (Google Workspace) pour les calculs et le graphique.',
    },
    vigilance:
      'Ne déposez jamais un vrai export sans l’avoir anonymisé (noms, coordonnées, numéros de dossier). Un graphique peut tromper : axe qui ne part pas de zéro, période tronquée, moyenne qui cache de gros écarts.',
    formateur: {
      resultat:
        'Une diapositive avec un graphique titré par son message, trois messages clés chiffrés et vérifiés, la source et la date des données, à partir d’un fichier contrôlé avant l’analyse.',
      criteres: [
        'Le contrôle du fichier a été fait avant les calculs.',
        'Chaque étape a été validée avant de passer à la suivante.',
        'Chaque message clé s’appuie sur un chiffre vérifié par l’apprenant.',
        'Le graphique a un titre qui dit le message, des unités et une source.',
      ],
      pieges: [
        'Tout demander d’un coup : une erreur laissée au contrôle se retrouve dans les messages.',
        'Graphique trompeur ou illisible : axe tronqué, trop de catégories, camembert à quinze parts.',
        'Message qui interprète au-delà des données, par exemple en attribuant une hausse à une cause jamais mesurée.',
      ],
      competence: 'discernement',
      technique: 'decomposer',
    },
    motsCles: ['graphique', 'direction', 'messages clés', 'fichier CSV', 'diapositive'],
  },
  {
    id: 'g-tableau-de-bord-mensuel',
    titre: 'Construire un tableau de bord mensuel réutilisable',
    niveau: 'avance',
    famille: 'analyser',
    duree: 60,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Chaque mois, vous mettez à jour {donnees}, puis vous passez une demi-journée à refaire les mêmes calculs et le même commentaire pour la direction. Vous voulez un assistant qui produise ce tableau de bord en dix minutes, toujours au même format.',
    objectif:
      'Créer un assistant sur mesure qui applique toujours la même méthode d’analyse, puis le tester sur deux mois de données fictives et l’améliorer.',
    etapes: [
      'Fixez le contenu du tableau de bord : 4 à 6 indicateurs, dont {indicateur}, un graphique, trois constats et deux points d’attention.',
      'Créez un Projet (Claude, ChatGPT), un Gem (Gemini) ou un agent (Copilot, selon la licence), puis ajoutez-y les instructions du prompt de départ, complétées, et le modèle du matériau.',
      'Dans une conversation à part, faites générer deux fichiers fictifs, mois 1 et mois 2, avec ces colonnes : {colonnes}.',
      'Testez l’assistant avec le mois 1 : vérifiez deux indicateurs à la main, puis corrigez les instructions si le format ou un calcul ne convient pas.',
      'Testez avec le mois 2 : le format doit être identique et la comparaison avec le mois précédent doit apparaître.',
      'Rédigez en trois lignes le mode d’emploi de l’assistant pour un collègue.',
    ],
    prompt:
      'Tu es l’assistant d’analyse mensuelle de [nom de la structure], {structure.un} à Nouméa. Chaque mois, je te donne un fichier avec ces colonnes : {colonnes}.\n\nÀ chaque fichier reçu :\n1. Contrôle les données (nombre de lignes, cases vides, doublons) et signale tout problème avant de calculer.\n2. Calcule ces indicateurs en montrant la formule : [indicateur 1], [indicateur 2], [indicateur 3] et {indicateur}.\n3. Présente un tableau : indicateur, valeur du mois, valeur du mois précédent si je te l’ai donnée, évolution en %.\n4. Propose un graphique de l’indicateur principal.\n5. Rédige 3 constats et 2 points d’attention, de 25 mots au plus chacun, sans interpréter au-delà des chiffres.\n\nSuis toujours le modèle de tableau de bord fourni. Si une donnée manque, dis-le. N’invente jamais de valeur, ni pour le mois en cours ni pour le mois précédent.',
    materiau: {
      titre: 'Modèle de tableau de bord',
      texte:
        'Tableau de bord du mois de [mois et année]\n\n1. Contrôle des données : nombre de lignes, anomalies signalées\n2. Indicateurs : valeur du mois, valeur du mois précédent, évolution en %\n3. Graphique : l’indicateur principal sur la période\n4. Trois constats\n5. Deux points d’attention\n\nSource : [nom du fichier], exporté le [date]\nVérifié par : [prénom], le [date]',
    },
    variantes: {
      simple:
        'Enregistrer le prompt dans un document et le réutiliser chaque mois, sans créer d’assistant.',
      poussee:
        'Ajouter à l’assistant un fichier des objectifs de l’année pour comparer chaque mois aux objectifs, et faire produire le tableau de bord en fichier Excel.',
    },
    astuces: {
      claude:
        'Dans un Projet, ajoutez le modèle aux connaissances du projet et les règles dans ses instructions ; une compétence peut aussi porter cette méthode maison.',
      chatgpt:
        'Dans un Projet, l’analyse de données recalcule les indicateurs à chaque fichier déposé ; un GPT (création payante) permet de partager l’assistant.',
      gemini:
        'Créez un Gem avec ces instructions et le modèle, et gardez les fichiers mensuels dans Google Sheets.',
      copilot:
        'Créez un agent avec ces instructions (selon la licence) ; Copilot dans Excel peut aussi refaire les calculs dans le fichier.',
    },
    vigilance:
      'Un assistant régulier donne une impression de fiabilité : continuez à vérifier au moins un indicateur à la main chaque mois. N’ajoutez à l’assistant aucun fichier contenant des données personnelles.',
    formateur: {
      resultat:
        'Un assistant aux instructions claires, testé sur deux mois fictifs, qui rend un tableau de bord au format identique : contrôle des données, indicateurs, évolution, graphique, constats.',
      criteres: [
        'Les instructions fixent le format, les indicateurs et la conduite à tenir si une donnée manque.',
        'Les deux tests donnent un tableau de bord au même format.',
        'L’apprenant a corrigé les instructions après le premier test.',
        'Au moins un indicateur a été vérifié à la main à chaque test.',
      ],
      pieges: [
        'Instructions trop vagues : le format change d’un mois à l’autre.',
        'Évolution calculée sur un mois précédent inventé, alors qu’il n’a pas été fourni.',
        'Ne plus vérifier les chiffres une fois l’assistant en place.',
      ],
      competence: 'delegation',
      technique: 'instructions',
    },
    motsCles: ['tableau de bord', 'mensuel', 'assistant', 'Projet', 'Gem', 'indicateurs'],
  },
];
