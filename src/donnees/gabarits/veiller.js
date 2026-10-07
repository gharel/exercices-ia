/**
 * Gabarits « Rechercher et veiller ». Chaque gabarit est décliné pour chaque métier :
 * {veille}, {sourcesVeille}, {partenaire.un}… prennent le vocabulaire du métier
 * (voir ../vocabulaire.js). Les appels d'offres ne concernent que certains métiers (`metiers`).
 */

export const gabarits = [
  {
    id: 'g-recherche-sourcee',
    titre: 'Faire une recherche sourcée sur {veille}',
    niveau: 'debutant',
    famille: 'veiller',
    duree: 20,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'copilot',
    situation:
      'Vous travaillez dans {structure.un} à Nouméa. Votre responsable vous demande un point rapide sur {veille} pour la réunion de lundi. Vous avez vingt minutes et vous voulez des informations récentes, datées, dont la source se vérifie.',
    objectif:
      'Formuler une demande de recherche qui exige des sources et des dates, puis contrôler ces sources avant de s’en servir.',
    etapes: [
      'Vérifiez que votre outil peut chercher sur le web (dans Claude, activez la recherche web).',
      'Collez le prompt de départ en précisant la période, par exemple les six derniers mois.',
      'Ouvrez au moins trois des liens cités et vérifiez que l’information s’y trouve, avec la même date et les mêmes chiffres.',
      'Retirez de la synthèse tout ce qui n’a pas de source, ou dont la source dit autre chose.',
      'Gardez cinq points au plus, chacun avec sa source et sa date, prêts à être présentés.',
    ],
    prompt:
      'Tu es chargé de veille pour {structure.un} à Nouméa, en Nouvelle-Calédonie. Fais une recherche sur {veille}, pour la période [les six derniers mois].\n\nPrivilégie {sourcesVeille}.\n\nRends 5 points au plus. Pour chaque point : l’information en une ou deux phrases, la date de publication, le nom de la source et le lien. N’écris rien que tu ne peux pas sourcer, et si tu ne trouves rien de récent, dis-le. Signale ce qui concerne la France ou l’international plutôt que la Nouvelle-Calédonie. Termine par ce que tu n’as pas pu vérifier.',
    materiau: {
      titre: 'Fiche de vérification des sources',
      texte:
        'Point 1 : lien ouvert oui / non ; information présente oui / non ; même date oui / non\nPoint 2 : lien ouvert oui / non ; information présente oui / non ; même date oui / non\nPoint 3 : lien ouvert oui / non ; information présente oui / non ; même date oui / non\n\nInformations retirées, et pourquoi : …\nSource la plus fiable trouvée : …',
    },
    variantes: {
      simple: 'Limiter la recherche à trois informations et en vérifier une.',
      poussee:
        'Demander un tableau (information, date, source, type de source, fiabilité) et y ajouter une source officielle que vous trouvez vous-même.',
    },
    astuces: {
      claude:
        'Avec la recherche web activée, chaque passage de la réponse renvoie à la page utilisée : ouvrez-la avant de reprendre l’information.',
      copilot:
        'Copilot Chat cite les pages web utilisées : ouvrez chaque référence numérotée avant de reprendre une information.',
    },
    vigilance:
      'Une IA peut citer une page qui n’existe pas, ou lui faire dire ce qu’elle ne dit pas. N’utilisez une information qu’après avoir ouvert sa source, et méfiez-vous des chiffres sans date.',
    formateur: {
      resultat:
        'Une synthèse de cinq points au plus, datés et sourcés, dont au moins trois sources ont été ouvertes et confirmées.',
      criteres: [
        'Le prompt exige une date et une source pour chaque information.',
        'Au moins trois sources ont été ouvertes et vérifiées.',
        'Les informations non confirmées ont été retirées.',
      ],
      pieges: [
        'Lien qui ne mène nulle part, ou vers une page sans rapport.',
        'Information ancienne présentée comme récente.',
        'Information sur la France métropolitaine prise pour une information calédonienne.',
      ],
      competence: 'description',
      technique: 'sources',
    },
    motsCles: ['recherche web', 'sources', 'veille', 'vérification'],
  },
  {
    id: 'g-chasse-hallucinations',
    titre: 'Vérifier cinq affirmations d’une réponse d’IA',
    niveau: 'debutant',
    famille: 'veiller',
    duree: 20,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Un collègue a demandé à une IA un point sur {veille} et veut envoyer la réponse telle quelle à toute l’équipe. Avant, vous la vérifiez : une IA peut inventer un chiffre, une date, un organisme ou une source avec beaucoup d’assurance.',
    objectif:
      'Repérer dans une réponse d’IA les affirmations vérifiables, les contrôler une à une et classer chacune : confirmée, fausse ou invérifiable.',
    etapes: [
      'Posez la question de départ du prompt, si possible sans activer la recherche web.',
      'Choisissez cinq affirmations précises dans la réponse : un chiffre, une date, un nom d’organisme, un texte de référence, une source citée.',
      'Vérifiez chacune vous-même (site officiel, presse, publication citée) et notez la source consultée dans la grille du matériau.',
      'Classez chaque affirmation : confirmée, fausse ou invérifiable.',
      'Donnez votre grille à l’IA avec la seconde partie du prompt, et relisez la version corrigée.',
    ],
    prompt:
      'Question de départ :\nJe travaille dans {structure.un} en Nouvelle-Calédonie. Fais-moi un point précis sur {veille} : les chiffres récents, les dates importantes, les organismes concernés et les textes de référence. Cite tes sources.\n\nAprès vérification :\nVoici ma vérification de ta réponse. Retire les affirmations marquées « fausse » et signale comme incertaines celles marquées « invérifiable ». Réécris la réponse en ne gardant que ce qui est confirmé, puis liste ce qui reste à vérifier.\n\n<verification>\n[collez votre grille]\n</verification>',
    materiau: {
      titre: 'Grille de vérification',
      texte:
        'Affirmation 1 : …\nSource consultée : …\nVerdict : confirmée / fausse / invérifiable\n\nAffirmation 2 : …\nSource consultée : …\nVerdict : confirmée / fausse / invérifiable\n\n(même chose pour les affirmations 3, 4 et 5)\n\nBilan : … affirmations confirmées sur 5.',
    },
    variantes: {
      simple: 'Vérifier trois affirmations seulement, en commençant par les chiffres.',
      poussee:
        'Reposer la même question avec la recherche web activée, puis comparer le nombre d’affirmations confirmées dans les deux réponses.',
    },
    astuces: {
      claude:
        'Avant de vérifier, demandez à Claude de lister lui-même les affirmations dont il est le moins sûr, puis comparez avec votre grille.',
    },
    vigilance:
      'Une source citée n’est pas une preuve : vérifiez qu’elle existe et qu’elle dit bien ce qu’on lui fait dire. Ne diffusez rien qui reste invérifiable.',
    formateur: {
      resultat:
        'Une grille de cinq affirmations vérifiées, chacune avec sa source et son verdict, et une réponse réécrite qui ne garde que les éléments confirmés.',
      criteres: [
        'Les cinq affirmations choisies sont précises et vérifiables.',
        'Chaque verdict s’appuie sur une source consultée par l’apprenant, pas sur l’IA.',
        'La version finale retire ou signale les affirmations non confirmées.',
      ],
      pieges: [
        'Vérifier une affirmation en reposant la question à la même IA.',
        'Source inventée, ou lien vers une page qui ne dit pas la même chose.',
        'Règle ou chiffre de France métropolitaine présenté comme valable en Nouvelle-Calédonie.',
      ],
      competence: 'discernement',
      technique: 'critique',
    },
    motsCles: ['hallucinations', 'vérification', 'sources', 'esprit critique'],
  },
  {
    id: 'g-preparer-rendez-vous',
    titre: 'Préparer un premier rendez-vous avec {partenaire.un}',
    niveau: 'debutant',
    famille: 'veiller',
    duree: 20,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'gemini',
    situation:
      'Vous travaillez dans {structure.un} à Koné. Jeudi, vous avez un premier rendez-vous avec {partenaire.un}. Pour ne pas arriver les mains vides, vous voulez connaître le contexte de son activité, l’actualité de son secteur en Nouvelle-Calédonie et les questions qui risquent d’être posées.',
    objectif:
      'Préparer une fiche de rendez-vous à partir d’une recherche sourcée, en vérifiant les informations clés avant de s’en servir.',
    etapes: [
      'Complétez le prompt avec ce que vous savez : nom de l’entreprise ou de l’organisme s’il y en a un, objet du rendez-vous, ce que vous en attendez.',
      'Lancez la demande avec la recherche web activée.',
      'Ouvrez les sources des trois informations les plus importantes et vérifiez-les.',
      'Relisez les questions et les objections proposées : gardez celles qui sont utiles, reformulez les autres.',
      'Ramenez le tout à une fiche d’une page, à relire juste avant le rendez-vous.',
    ],
    prompt:
      'Tu m’aides à préparer un premier rendez-vous professionnel. Je travaille dans {structure.un} à Koné et je rencontre {partenaire.un} : [nom de l’entreprise ou de l’organisme, s’il y en a un].\nObjet du rendez-vous : [objet].\nCe que j’en attends : [objectif].\n\nFais une recherche web et prépare une fiche d’une page :\n1. Le contexte de son activité en Nouvelle-Calédonie, à partir d’informations publiques et professionnelles uniquement, avec les sources.\n2. L’actualité récente de son secteur, datée et sourcée.\n3. Cinq questions à poser.\n4. Trois objections possibles, avec une réponse courte pour chacune.\n\nSi tu ne trouves rien de fiable sur un point, dis-le plutôt que de supposer.',
    variantes: {
      simple: 'Se limiter aux cinq questions à poser, sans recherche web.',
      poussee:
        'Faire jouer l’interlocuteur par l’IA pendant cinq minutes pour s’entraîner aux objections, puis demander un retour sur vos réponses.',
    },
    astuces: {
      copilot:
        'Avec un compte professionnel, transformez la fiche en Copilot Page pour la partager avec le collègue qui vous accompagne.',
      gemini: 'Ouvrez la fiche dans Canvas pour la ramener à une page et la retoucher.',
    },
    vigilance:
      'Restez sur des informations professionnelles et publiques : aucune recherche sur la vie privée d’une personne. Ne mettez dans le prompt aucune information confidentielle sur le dossier ou sur les conditions en discussion.',
    formateur: {
      resultat:
        'Une fiche d’une page : contexte sourcé, actualité datée, cinq questions, trois objections avec leur réponse ; les trois informations clés ont été vérifiées.',
      criteres: [
        'Les informations de contexte sont publiques, professionnelles et sourcées.',
        'Les trois informations clés ont été vérifiées dans leur source.',
        'Les questions sont précises et servent l’objet du rendez-vous.',
      ],
      pieges: [
        'Confondre deux entreprises au nom proche, ou une entreprise de métropole avec une entreprise calédonienne.',
        'Arriver avec une information fausse ou périmée sur l’interlocuteur.',
        'Glisser dans le prompt des conditions commerciales confidentielles.',
      ],
      competence: 'diligence',
      technique: 'contexte',
    },
    motsCles: ['rendez-vous', 'préparation', 'recherche web', 'interlocuteur'],
  },
  {
    id: 'g-comparer-deux-outils-recherche',
    titre: 'Comparer les réponses de deux outils à la même recherche',
    niveau: 'intermediaire',
    famille: 'veiller',
    duree: 30,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    situation:
      'Vous devez présenter à votre équipe un état des lieux sur {veille}. Vous ne savez pas quel outil d’IA est le plus fiable pour ce genre de recherche : vous posez la même question à deux outils et vous comparez.',
    objectif:
      'Comparer deux réponses de recherche sur des critères précis (sources, dates, exactitude, utilité) et en tirer une synthèse qui ne garde que ce qui est confirmé.',
    etapes: [
      'Ouvrez deux outils d’IA capables de chercher sur le web et posez-leur exactement le même prompt.',
      'Remplissez la grille du matériau pour chaque réponse.',
      'Vérifiez dans leur source deux informations qui n’apparaissent que dans une seule des réponses.',
      'Collez la réponse de l’outil A dans l’outil B, et inversement, en demandant ce qui manque et ce qui est douteux.',
      'Rédigez une synthèse de dix lignes avec les seules informations confirmées, et notez quel outil vous utiliseriez la prochaine fois, et pourquoi.',
    ],
    prompt:
      'Tu es chargé de veille pour {structure.un} en Nouvelle-Calédonie. Fais un état des lieux sur {veille}, pour les douze derniers mois.\n\nSources à consulter en priorité : {sourcesVeille}.\n\nRends :\n- 5 à 8 informations clés, chacune avec sa date, sa source et le lien ;\n- les tendances qui se dégagent, en trois lignes ;\n- ce que tu n’as pas pu trouver ou vérifier.\n\nN’invente aucune source. Distingue ce qui concerne la Nouvelle-Calédonie de ce qui concerne la France ou l’international.',
    materiau: {
      titre: 'Grille de comparaison',
      texte:
        'Critère : outil A / outil B\nNombre de sources citées : … / …\nSources calédoniennes : … / …\nInformations datées de moins de 12 mois : … / …\nInformations présentes dans les deux réponses : …\nInformations isolées vérifiées : confirmées … / fausses …\nRéponse la plus utile pour l’équipe, et pourquoi : …',
    },
    variantes: {
      simple: 'Comparer seulement les sources citées par les deux outils.',
      poussee:
        'Lancer en plus une recherche approfondie (Recherche approfondie de ChatGPT, Deep Research de Gemini ou Recherche de Claude, offre payante) et mesurer ce qu’elle apporte pour le temps passé.',
    },
    astuces: {
      claude:
        'Collez la réponse de l’autre outil entre des balises <reponse> et demandez à Claude de la critiquer point par point.',
      copilot:
        'Copilot Chat numérote ses sources : comptez celles qui viennent de Nouvelle-Calédonie.',
    },
    vigilance:
      'Deux outils qui disent la même chose ne prouvent rien s’ils s’appuient sur la même page : comparez les sources, pas seulement les réponses.',
    formateur: {
      resultat:
        'Une grille remplie pour les deux réponses, deux informations isolées vérifiées, une synthèse de dix lignes fondée sur des informations confirmées et un choix d’outil argumenté.',
      criteres: [
        'Le même prompt a été posé aux deux outils.',
        'La grille compare les sources, pas seulement le style des réponses.',
        'La synthèse ne garde que des informations confirmées.',
      ],
      pieges: [
        'Préférer la réponse la plus longue ou la mieux rédigée sans regarder ses sources.',
        'Prendre l’accord des deux outils pour une preuve alors qu’ils citent la même page.',
        'Modifier le prompt entre les deux outils, ce qui fausse la comparaison.',
      ],
      competence: 'discernement',
      technique: 'options',
    },
    motsCles: ['comparaison', 'outils', 'recherche', 'sources', 'fiabilité'],
  },
  {
    id: 'g-appels-offres-go-no-go',
    titre: 'Repérer les appels d’offres utiles et décider d’y répondre',
    metiers: ['btp', 'communication', 'formation', 'logistique', 'industrie', 'commercial'],
    niveau: 'intermediaire',
    famille: 'veiller',
    duree: 45,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini', 'notebook'],
    outilConseille: 'claude',
    situation:
      'Vous travaillez dans {structure.un} à Nouméa. Votre structure répond de temps en temps à des marchés publics et à des consultations privées, mais l’équipe passe à côté de certains avis, ou se lance dans des réponses perdues d’avance. Vous voulez une méthode : repérer, résumer, puis décider vite avec une grille go/no-go.',
    objectif:
      'Utiliser l’IA pour repérer et résumer des appels d’offres, puis appliquer une grille de décision dont vous fixez vous-même les critères.',
    etapes: [
      'Avec la recherche web activée, demandez les appels d’offres en cours en Nouvelle-Calédonie dans {domaine}, avec l’acheteur, la date limite et le lien de publication.',
      'Vérifiez chaque avis sur la plateforme de publication ou dans le journal d’origine : certains sont déjà clos ou mal datés.',
      'Choisissez un avis (réel, ou fictif généré par l’IA si vous n’en trouvez pas) et faites-le résumer avec le prompt de départ ; si le dossier compte plusieurs pièces, chargez-les dans Gemini Notebook.',
      'Fixez les critères et les seuils de la grille go/no-go du matériau, puis faites-la appliquer critère par critère.',
      'Prenez vous-même la décision, après avoir vérifié dans le document d’origine la date limite, le mode de dépôt et les pièces obligatoires.',
    ],
    prompt:
      'Tu es chargé des réponses aux appels d’offres dans {structure.un} à Nouméa. Voici l’avis d’appel public à la concurrence, ou le règlement de consultation, d’un marché.\n\n1. Résume-le dans un tableau : acheteur, objet, lots, date et heure limites de remise des offres, mode de dépôt, pièces à fournir, critères de jugement et leur poids, visite obligatoire ou non.\n2. Applique ensuite la grille go/no-go ci-dessous, critère par critère, avec une justification d’une ligne tirée du document. Si une information n’est pas dans le document, écris « non précisé ».\n3. Termine par les questions à poser à l’acheteur avant de décider.\n\n<grille>\n[collez la grille complétée]\n</grille>\n\n<document>\n[collez le texte de l’avis ou joignez le fichier]\n</document>',
    materiau: {
      titre: 'Grille go/no-go à compléter',
      texte:
        'Chaque critère est noté 0 (non), 1 (en partie) ou 2 (oui).\n\n1. L’objet correspond à notre cœur de métier.\n2. Nous avons des références comparables à présenter.\n3. Le délai de remise nous laisse au moins [10] jours de préparation.\n4. Nous aurons les moyens humains et matériels pendant la période d’exécution.\n5. Le montant estimé est intéressant pour nous.\n6. Les pièces administratives demandées sont à jour et disponibles.\n7. Nos chances face à la concurrence sont réelles.\n\nDécision : go si [10] points ou plus sur 14 et aucun 0 aux critères 1, 3 et 6 ; sinon, no-go argumenté.',
    },
    variantes: {
      simple: 'Partir d’un avis fictif généré par l’IA et se limiter au résumé en tableau.',
      poussee:
        'Programmer une veille hebdomadaire des nouveaux avis (tâche planifiée dans ChatGPT ou Claude, offres payantes, ou « Programmer des actions » dans Gemini), puis appliquer la grille à chaque avis retenu.',
    },
    astuces: {
      claude:
        'Joignez le règlement de consultation en PDF et demandez de citer le passage qui justifie chaque note de la grille.',
      notebook:
        'Chargez toutes les pièces du dossier comme sources : chaque réponse renvoie à la pièce et au passage exacts.',
    },
    vigilance:
      'L’IA peut rater un appel d’offres ou se tromper de date limite : la plateforme ou le journal d’origine fait foi. Ne collez ni vos prix ni vos marges dans un outil grand public.',
    formateur: {
      resultat:
        'Une liste d’appels d’offres vérifiés, le résumé en tableau d’un avis, la grille go/no-go appliquée avec ses justifications et une décision prise par l’apprenant.',
      criteres: [
        'La date limite et l’acheteur ont été vérifiés dans le document d’origine.',
        'Les critères et les seuils de la grille ont été fixés par l’apprenant, pas par l’IA.',
        'Chaque note est justifiée par un passage du document, ou marquée « non précisé ».',
      ],
      pieges: [
        'Date ou heure limite mal recopiée : l’offre arrive hors délai.',
        'Appel d’offres déjà clos, ou publié hors de Nouvelle-Calédonie, présenté comme ouvert.',
        'Laisser l’IA décider du go/no-go sans tenir compte des moyens réels de l’équipe.',
      ],
      competence: 'delegation',
      technique: 'structurer',
    },
    motsCles: ['appels d’offres', 'marchés publics', 'go/no-go', 'décision', 'veille'],
  },
  {
    id: 'g-veille-hebdomadaire-planifiee',
    titre: 'Programmer une veille hebdomadaire sur {veille}',
    niveau: 'avance',
    famille: 'veiller',
    duree: 45,
    outils: ['claude', 'chatgpt', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Vous travaillez dans {structure.un} à Nouméa. Chaque semaine, vous cherchez à la main ce qui est paru sur {veille}, et vous oubliez une fois sur deux. Vous voulez recevoir chaque lundi matin une synthèse courte, toujours au même format, que vous n’aurez plus qu’à vérifier.',
    objectif:
      'Écrire un prompt de veille au format fixe, le tester, puis le programmer pour qu’il se relance seul chaque semaine.',
    etapes: [
      'Complétez le prompt de départ : sujet, sources, période couverte et format fixe.',
      'Testez-le une première fois à la main et ouvrez trois sources : corrigez le prompt si les résultats sont anciens, hors sujet ou sans lien.',
      'Programmez-le chaque lundi à 7 h, heure de Nouméa : tâche planifiée dans ChatGPT ou Claude (offres payantes), ou « Programmer des actions » dans Gemini (selon l’offre).',
      'Lancez la tâche une fois tout de suite pour voir le résultat tel qu’il arrivera.',
      'Remplissez la fiche de réglage du matériau, avec la personne qui vérifie avant diffusion et la date du premier bilan.',
    ],
    prompt:
      'Tu es chargé de veille pour {structure.un} à Nouméa, en Nouvelle-Calédonie. Recherche les informations publiées depuis 7 jours sur {veille}.\n\nSources à privilégier : {sourcesVeille}. N’utilise que des sources que tu peux citer avec un lien.\n\nFormat fixe, identique chaque semaine :\n1. En bref : 3 lignes au plus.\n2. Les nouveautés : 5 au plus, chacune avec un titre, deux phrases, la date de publication, la source et le lien.\n3. À surveiller : 1 ou 2 sujets qui pourraient évoluer.\n4. Non vérifié : ce que tu as vu sans pouvoir le confirmer.\n\nSi rien de nouveau n’a été publié, écris seulement « Rien de nouveau cette semaine » et ne reprends pas d’informations anciennes.',
    materiau: {
      titre: 'Fiche de réglage de la veille',
      texte:
        'Sujet : …\nSources à privilégier : …\nOutil : …\nFréquence : chaque lundi à 7 h (heure de Nouméa)\nFormat : En bref / Les nouveautés / À surveiller / Non vérifié\nRègle « rien de nouveau » : oui / non\nPersonne qui vérifie avant diffusion : …\nDate du premier bilan (après quatre envois) : …\nCe que l’on regardera au bilan : informations utiles, doublons, sources peu fiables',
    },
    variantes: {
      simple: 'Lancer le prompt de veille à la main chaque lundi, sans le programmer.',
      poussee:
        'Créer deux veilles complémentaires (actualité locale et nouveautés réglementaires), puis rassembler chaque mois les synthèses dans un carnet Gemini Notebook pour en tirer un bilan.',
    },
    astuces: {
      chatgpt:
        'Écrivez « chaque lundi à 7 h » dans la demande : ChatGPT propose de créer la tâche planifiée (offre payante).',
      claude:
        'Les tâches planifiées (offre payante) relancent la demande seules : précisez dans le prompt d’utiliser la recherche web.',
      gemini:
        '« Programmer des actions » relance la demande au jour et à l’heure choisis (selon l’offre) : vérifiez le fuseau horaire.',
    },
    vigilance:
      'Une veille automatique peut rapporter des informations fausses ou anciennes sans que personne ne relise : désignez qui vérifie avant de diffuser. Vérifiez aussi que la tâche est réglée sur l’heure de Nouméa.',
    formateur: {
      resultat:
        'Un prompt de veille au format fixe, testé une fois avec ses sources vérifiées, puis programmé chaque semaine, avec une règle « rien de nouveau » et une personne chargée de la vérification.',
      criteres: [
        'Le prompt fixe le sujet, les sources, la période et le format.',
        'Un premier test a été fait et trois sources ont été ouvertes.',
        'La tâche est programmée, ou la marche à suivre est notée si l’offre ne le permet pas.',
        'Une personne est désignée pour vérifier avant diffusion.',
      ],
      pieges: [
        'Période non précisée : la synthèse reprend chaque semaine les mêmes informations.',
        'Tâche réglée sur un autre fuseau horaire : la synthèse arrive en pleine nuit, ou un autre jour.',
        'Diffuser la synthèse sans ouvrir les liens.',
      ],
      competence: 'delegation',
      technique: 'instructions',
    },
    motsCles: [
      'veille',
      'tâche planifiée',
      'Programmer des actions',
      'automatisation',
      'synthèse hebdomadaire',
    ],
  },
  {
    id: 'g-carnet-veille-notebook',
    titre: 'Construire un carnet de veille sourcé dans Gemini Notebook',
    niveau: 'avance',
    famille: 'veiller',
    duree: 60,
    outils: ['notebook', 'chatgpt', 'gemini', 'claude'],
    outilConseille: 'notebook',
    situation:
      'Vous travaillez dans {structure.un} à Nouméa. Votre équipe veut une base de veille fiable sur {veille} : un endroit où chacun pose une question et obtient une réponse qui cite sa source. Vous partez d’une recherche approfondie, puis vous contrôlez ses affirmations dans un carnet Gemini Notebook.',
    objectif:
      'Produire un rapport de recherche approfondie, en contrôler les affirmations clés à partir de sources choisies, et construire un carnet de veille partagé avec l’équipe.',
    etapes: [
      'Lancez une recherche approfondie avec le prompt 1 : Recherche approfondie (ChatGPT), Deep Research (Gemini) ou Recherche (Claude, offre payante).',
      'Dans le rapport, repérez les 8 à 10 sources les plus utilisées et triez-les avec les critères du matériau.',
      'Créez un carnet dans Gemini Notebook et ajoutez comme sources les pages retenues, plus deux documents que vous choisissez vous-même. N’y ajoutez pas le rapport.',
      'Choisissez cinq affirmations clés du rapport et faites-les contrôler par le carnet avec le prompt 2.',
      'Retirez ou signalez dans le rapport ce que le carnet ne confirme pas.',
      'Générez une synthèse ou une FAQ (Rapports) et partagez le carnet avec l’équipe, en notant la date de la prochaine mise à jour des sources.',
    ],
    prompt:
      'Prompt 1 (recherche approfondie) :\nTu es chargé de veille pour {structure.un} à Nouméa. Fais une recherche approfondie sur {veille}, sur les deux dernières années. Consulte en priorité {sourcesVeille}. Rends un rapport de deux pages au plus : faits marquants datés, chiffres clés avec leur source, tendances, questions ouvertes. Chaque affirmation doit renvoyer à une source précise, avec son lien. Signale ce qui concerne la France ou l’international plutôt que la Nouvelle-Calédonie.\n\nPrompt 2 (dans Gemini Notebook, une fois les sources ajoutées) :\nVoici cinq affirmations tirées d’un rapport. Pour chacune, dis si les sources de ce carnet la confirment, la contredisent ou n’en parlent pas, en citant le passage exact.\n\n<affirmations>\n1. [affirmation]\n2. [affirmation]\n3. [affirmation]\n4. [affirmation]\n5. [affirmation]\n</affirmations>',
    materiau: {
      titre: 'Critères de choix des sources',
      texte:
        'À garder : auteur ou organisme identifié, date visible, information de première main (publication officielle, étude, communiqué, article de presse qui cite ses sources).\n\nÀ écarter : page sans date, contenu non signé, article qui ne dit pas d’où viennent ses chiffres, page sur la France présentée comme calédonienne, simple copie d’un autre article.\n\nÀ ajouter vous-même : au moins une publication officielle et un article de la presse locale.',
    },
    variantes: {
      simple:
        'Créer le carnet avec cinq sources choisies à la main, sans recherche approfondie, et lui poser trois questions.',
      poussee:
        'Générer un résumé audio du carnet pour l’équipe, et fixer une routine mensuelle : nouvelles sources ajoutées, affirmations clés contrôlées à nouveau.',
    },
    astuces: {
      notebook:
        'La recherche intégrée du carnet propose des sources : n’importez que celles qui passent vos critères, et décochez les autres avant de poser vos questions.',
      chatgpt:
        'La recherche approfondie pose souvent des questions de précision avant de démarrer : répondez-y, le rapport sera mieux ciblé.',
      gemini:
        'Deep Research propose un plan de recherche avant de commencer : modifiez-le si besoin, puis exportez le rapport dans Google Docs.',
      claude:
        'La Recherche (offre payante) rend un rapport sourcé ; sans elle, la recherche web suffit pour un premier rapport plus court.',
    },
    vigilance:
      'Un rapport de recherche approfondie a l’air sérieux, mais il peut mal résumer une source ou s’appuyer sur une page peu fiable. Un carnet partagé ne doit contenir aucun document interne confidentiel ni aucune donnée personnelle.',
    formateur: {
      resultat:
        'Un rapport de recherche approfondie, un carnet de 8 à 12 sources choisies selon des critères explicites, le contrôle des cinq affirmations clés avec citations, et un carnet prêt à partager.',
      criteres: [
        'Les sources ont été triées selon des critères explicites, pas reprises en bloc.',
        'Les cinq affirmations clés ont été contrôlées, avec la citation du passage.',
        'Au moins une affirmation non confirmée a été retirée ou signalée.',
        'Le carnet ne contient aucun document confidentiel.',
      ],
      pieges: [
        'Ajouter le rapport lui-même comme source : le carnet confirme alors ce qu’il contient.',
        'Garder des sources de France métropolitaine sans le signaler.',
        'Croire le rapport parce qu’il cite beaucoup de sources.',
      ],
      competence: 'discernement',
      technique: 'sources',
    },
    motsCles: [
      'Gemini Notebook',
      'recherche approfondie',
      'Deep Research',
      'sources',
      'carnet',
      'veille',
    ],
  },
];
