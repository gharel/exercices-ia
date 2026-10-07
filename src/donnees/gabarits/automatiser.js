/**
 * Gabarits « Automatiser et créer un assistant » : bibliothèque de prompts, instructions
 * permanentes, Projet ou Gem nourri de documents, assistant de mise en forme, veille
 * planifiée, compétence ou agent pour une méthode maison, chaîne d’étapes contrôlées.
 * Chaque gabarit est décliné pour chaque métier : {tacheRepetitive}, {documentCourant.un}…
 * prennent le vocabulaire du métier (voir ../vocabulaire.js).
 */

export const gabarits = [
  {
    id: 'g-bibliotheque-prompts',
    titre: 'Créer sa bibliothèque de prompts : un premier modèle pour {tacheRepetitive}',
    niveau: 'debutant',
    famille: 'automatiser',
    duree: 20,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Dans {structure.votre}, une tâche revient sans cesse : {tacheRepetitive}. À chaque fois, vous réécrivez votre demande à l’IA de mémoire, avec des résultats inégaux. Vous décidez d’écrire une fois pour toutes un prompt modèle, de le tester, puis de le ranger dans une bibliothèque partagée avec l’équipe.',
    objectif:
      'Écrire un prompt réutilisable, avec des [crochets] pour ce qui change et des balises pour les données, puis le ranger dans une fiche que toute l’équipe peut reprendre.',
    etapes: [
      'Envoyez le prompt de départ et répondez aux questions de l’IA sur votre tâche.',
      'Testez le prompt obtenu dans une nouvelle conversation, avec des données fictives (ou demandez à l’IA d’en inventer).',
      'Notez ce qui ne va pas dans le résultat (ton, longueur, oubli) et corrigez le prompt lui-même, pas seulement la réponse.',
      'Refaites le test : le résultat doit être bon du premier coup.',
      'Remplissez la fiche du matériau et rangez-la dans un document partagé « Bibliothèque de prompts ».',
    ],
    prompt:
      'Tu es expert en rédaction de prompts. Je travaille dans {structure.un} à Nouméa. Une tâche revient chaque semaine : {tacheRepetitive}.\n\nÉcris-moi un prompt réutilisable pour la confier à une IA. Ce prompt doit :\n- donner un rôle à l’IA et le contexte (Nouvelle-Calédonie, montants en XPF) ;\n- laisser entre [crochets] ce que je compléterai à chaque fois ;\n- placer les données dans des balises, par exemple <notes>…</notes> ;\n- décrire le format attendu (longueur, ton, structure) ;\n- demander à l’IA de signaler les informations manquantes au lieu de les inventer.\n\nSi tu as besoin de précisions sur ma tâche, pose-moi d’abord trois questions au maximum.',
    materiau: {
      titre: 'Fiche de la bibliothèque de prompts',
      texte:
        'Nom du prompt : [un verbe et un objet, court et parlant]\nÀ quoi il sert : [une phrase]\nOutil testé : [Claude, ChatGPT, Copilot ou Gemini], le [date du test]\nÀ compléter à chaque fois : [la liste des crochets]\nÀ ne jamais coller : [données personnelles, numéros de compte, informations confidentielles]\nPrompt :\n[collez le prompt ici]\nExemple de bon résultat : [collez un résultat validé, anonymisé]\nPoints à vérifier avant envoi : [chiffres, dates, noms]\nAuteur et dernière mise à jour : [prénom, date]',
    },
    variantes: {
      simple:
        'Écrire le prompt soi-même (contexte, tâche, format), sans le faire générer par l’IA, puis le tester une fois.',
      poussee:
        'Écrire trois prompts pour trois tâches répétitives, les faire tester par un collègue sans explication, et noter ce qu’il a dû deviner.',
    },
    astuces: {
      claude:
        'Avant de tester, demandez à Claude de critiquer le prompt : ce qui est ambigu, ce qui manque, ce qui pourrait être mal compris.',
      chatgpt:
        'Rangez le prompt dans un Projet : vous le retrouvez avec les conversations qui l’utilisent.',
    },
    vigilance:
      'Un prompt modèle ne contient jamais de vraies données, seulement des [crochets]. Indiquez dans la fiche ce qu’il ne faut pas coller, pour que vos collègues aient le bon réflexe.',
    formateur: {
      resultat:
        'Un prompt modèle testé deux fois, avec des [crochets], des balises et un format précis, rangé dans une fiche complète et partageable.',
      criteres: [
        'Le prompt contient des [crochets] pour ce qui change et des balises pour les données.',
        'Il demande à l’IA de signaler les informations manquantes.',
        'Le prompt a été corrigé après le premier test, puis testé de nouveau.',
        'La fiche indique ce qu’il ne faut jamais coller.',
      ],
      pieges: [
        'Corriger la réponse au lieu de corriger le prompt : le problème revient la fois suivante.',
        'Laisser une vraie donnée (nom, montant réel) dans le prompt modèle.',
      ],
      competence: 'description',
      technique: 'structurer',
    },
    motsCles: ['bibliothèque de prompts', 'modèle', 'réutilisable', 'gain de temps', 'équipe'],
  },
  {
    id: 'g-instructions-permanentes',
    titre: 'Écrire des instructions permanentes pour que l’IA connaisse votre contexte',
    niveau: 'debutant',
    famille: 'automatiser',
    duree: 15,
    outils: ['claude', 'chatgpt', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'À chaque conversation, vous réexpliquez à l’IA que vous travaillez dans {structure.un} à Nouméa, que les montants sont en XPF et que vous vouvoyez {client.les}. Vous voulez écrire ces informations une fois pour toutes, là où votre outil les garde.',
    objectif:
      'Rédiger un court texte de contexte et de préférences, le placer dans la mémoire ou les instructions de son outil, et mesurer la différence sur une même demande.',
    etapes: [
      'Faites d’abord un essai témoin : demandez « Rédige un e-mail {client.aux} pour annoncer une fermeture exceptionnelle vendredi après-midi » et gardez la réponse.',
      'Envoyez le prompt de départ et répondez une à une aux questions de l’IA.',
      'Relisez le texte proposé : retirez toute donnée personnelle, ajoutez ce qui manque en vous inspirant de l’exemple du matériau.',
      'Placez le texte là où votre outil le garde : demandez à ChatGPT de le retenir (Mémoire), ou collez-le dans les instructions d’un Projet Claude ou d’un Gem Gemini.',
      'Refaites l’essai témoin dans une nouvelle conversation (dans le Projet ou le Gem) et comparez les deux réponses.',
    ],
    prompt:
      'Je veux écrire des instructions permanentes pour mon assistant IA, afin de ne plus réexpliquer mon contexte à chaque conversation.\n\nPose-moi sept questions, une à la fois, sur mon métier, mes interlocuteurs, le ton et les formats que je préfère, et ce que je ne veux jamais voir dans une réponse.\n\nEnsuite, rédige un texte de 150 mots au maximum, que je pourrai coller dans les instructions de mon outil, sur le modèle : contexte, ton, format, conduite à tenir quand une information manque. N’y mets aucune donnée personnelle.',
    materiau: {
      titre: 'Exemple d’instructions permanentes (fictif)',
      texte:
        'Je travaille dans {structure.un} à Nouméa, en Nouvelle-Calédonie. Mes interlocuteurs sont surtout {client.des} et {partenaire.des}.\nContexte : les montants sont en XPF (franc pacifique). Les règles de métropole ne s’appliquent pas toujours ici : quand tu cites une règle, signale-le et dis-moi de la vérifier.\nTon : vouvoiement, phrases courtes, pas de formules toutes faites (« n’hésitez pas », « je me permets »).\nFormat : réponse courte par défaut ; une liste au-delà de trois éléments ; termine par les points que je dois vérifier.\nSi une information te manque, pose-moi la question au lieu de l’inventer.',
    },
    variantes: {
      simple:
        'Écrire seulement trois lignes (qui je suis, le ton, la monnaie) et refaire l’essai témoin.',
      poussee:
        'Ajouter aux instructions un exemple de réponse idéale, puis comparer les résultats avec et sans cet exemple sur trois demandes différentes.',
    },
    astuces: {
      chatgpt:
        'Écrivez « Retiens que… » : la mémoire garde l’information, et vous pouvez consulter ou effacer ce qu’elle a retenu dans les paramètres.',
      claude:
        'Créez un Projet (gratuit, jusqu’à cinq) et collez le texte dans ses instructions : il s’applique à toutes les conversations du Projet.',
      gemini:
        'Créez un Gem et collez le texte dans ses instructions : ouvrez ce Gem pour toutes vos demandes de travail.',
    },
    vigilance:
      'Ces instructions sont relues à chaque conversation : n’y mettez ni nom de personne, ni numéro de téléphone, ni information confidentielle sur {structure.le}.',
    formateur: {
      resultat:
        'Un texte de 150 mots au plus, sans donnée personnelle, enregistré dans l’outil, et deux réponses comparées qui montrent la différence (XPF, vouvoiement, points à vérifier en fin de réponse).',
      criteres: [
        'Le texte décrit le contexte, le ton, le format et la conduite à tenir quand une information manque.',
        'Il ne contient aucune donnée personnelle ou confidentielle.',
        'L’essai témoin a été refait après l’enregistrement, et l’écart est constaté.',
      ],
      pieges: [
        'Écrire des instructions longues ou contradictoires (« sois bref » et « détaille tout ») que l’IA applique mal.',
        'Oublier que la mémoire retient aussi ce qu’on tape par erreur : vérifier régulièrement ce qu’elle contient.',
      ],
      competence: 'description',
      technique: 'instructions',
    },
    motsCles: ['instructions', 'mémoire', 'préférences', 'personnaliser', 'Projet', 'Gem'],
  },
  {
    id: 'g-projet-questions-clients',
    titre: 'Créer un Projet ou un Gem qui prépare les réponses aux questions {client.des}',
    niveau: 'intermediaire',
    famille: 'automatiser',
    duree: 45,
    outils: ['claude', 'chatgpt', 'gemini'],
    outilConseille: 'claude',
    situation:
      '{Client.les} posent souvent les mêmes questions : horaires, documents à fournir, délais, suivi de leur demande. Les réponses existent dans vos documents, mais chacun répond à sa façon. Vous voulez un espace de travail qui prépare des projets de réponse fondés sur ces documents, relus avant envoi.',
    objectif:
      'Créer un espace avec des documents de référence et des instructions, puis le tester sur des questions couvertes et non couvertes par les documents.',
    etapes: [
      'Rassemblez deux ou trois documents publics de {structure.votre} (horaires, démarches, conditions, foire aux questions). Si vous n’en avez pas, demandez à l’IA d’en créer des versions fictives et réalistes.',
      'Créez un Projet (Claude ou ChatGPT) ou un Gem (Gemini), ajoutez-y les documents et collez le prompt de départ dans ses instructions.',
      'Testez avec les six questions du matériau, chacune dans une nouvelle conversation de l’espace.',
      'Notez pour chaque réponse : juste et sourcée, inventée, ou correctement renvoyée vers un collègue. Les questions 5 et 6 sont des pièges : l’assistant ne doit rien inventer.',
      'Modifiez les instructions pour corriger les écarts, puis refaites le test.',
    ],
    prompt:
      'Tu es l’assistant {structure.du} [nom], à Nouméa. Tu prépares des projets de réponse aux questions {client.des}, qu’un membre de l’équipe relit avant envoi.\n\nRègles :\n- Appuie-toi uniquement sur les documents de cet espace, et cite celui que tu utilises.\n- Si la réponse n’y est pas, écris : « Je transmets votre question à un collègue, qui vous répondra rapidement. » Puis indique, en note interne, ce qu’il faut vérifier.\n- N’invente jamais d’horaire, de tarif ou de délai, et ne prends aucun engagement.\n- Ton : courtois, vouvoiement, 120 mots au maximum.\n- Montants en XPF.',
    materiau: {
      titre: 'Questions de test',
      texte:
        '1. Quels sont vos horaires pendant les fêtes de fin d’année ?\n2. Quels documents dois-je fournir pour ma demande ?\n3. Comment puis-je suivre l’avancement de ma demande ?\n4. Je vous ai écrit il y a dix jours et je n’ai pas de réponse. C’est normal ?\n5. Vous êtes ouverts le 24 septembre ?\n6. Si je vous renvoie tout aujourd’hui, vous pouvez traiter ma demande avant vendredi ?',
    },
    variantes: {
      simple: 'Ne tester que les questions 1, 5 et 6, avec un seul document.',
      poussee:
        'Ajouter aux instructions deux exemples de réponses idéales, puis faire tester l’assistant par un collègue avec dix questions de son choix.',
    },
    astuces: {
      claude:
        'Les Projets sont gratuits (jusqu’à cinq) : déposez les documents dans les connaissances du projet et les règles dans ses instructions.',
      chatgpt:
        'Un Projet suffit pour vous ; la création d’un GPT, payante, permet de partager l’assistant avec l’équipe.',
      gemini:
        'Créez un Gem, collez les règles dans ses instructions et ajoutez les documents comme fichiers.',
    },
    vigilance:
      'N’ajoutez que des documents publics ou anonymisés. L’assistant ne connaît pas le dossier de chaque personne : ses réponses restent des projets, relus avant envoi.',
    formateur: {
      resultat:
        'Un espace qui répond aux questions 1 à 4 à partir des documents, en citant sa source, et qui renvoie les questions 5 et 6 vers un collègue sans rien inventer.',
      criteres: [
        'Les instructions disent quoi faire quand l’information manque.',
        'Chaque réponse cite le document utilisé.',
        'Les questions pièges (5 et 6) ne reçoivent ni horaire inventé ni promesse de délai.',
        'L’apprenant a modifié les instructions après le premier test.',
      ],
      pieges: [
        'Tester avec une seule question facile et conclure que tout fonctionne.',
        'Accepter une réponse plausible mais absente des documents, souvent sur un jour férié ou un délai.',
        'Déposer un document interne qui contient des données personnelles.',
      ],
      competence: 'delegation',
      technique: 'instructions',
    },
    motsCles: ['Projet', 'Gem', 'questions fréquentes', 'assistant', 'FAQ', 'réponses types'],
  },
  {
    id: 'g-assistant-notes-en-vrac',
    titre: 'Créer un assistant qui prépare {documentCourant.un} à partir de notes en vrac',
    niveau: 'intermediaire',
    famille: 'automatiser',
    duree: 30,
    outils: ['claude', 'chatgpt', 'gemini', 'copilot'],
    outilConseille: 'claude',
    situation:
      'Vous rédigez {documentCourant.des} plusieurs fois par semaine. En rendez-vous, au téléphone ou sur le terrain, vous prenez des notes rapides, puis vous perdez du temps à les remettre en forme. Vous voulez un assistant qui connaît votre modèle, transforme vos notes en document propre et signale ce qui manque.',
    objectif:
      'Donner un modèle et des règles à un assistant, puis vérifier qu’il signale les informations manquantes au lieu de les inventer.',
    etapes: [
      'Préparez un modèle {documentCourant.de}, sans données réelles : le vôtre, anonymisé, ou un modèle fictif demandé à l’IA.',
      'Créez un Projet (Claude, ChatGPT), un Gem (Gemini) ou un agent (Copilot), ajoutez le modèle et collez le prompt de départ dans les instructions.',
      'Dans une autre conversation, demandez à l’IA deux jeux de notes fictives, écrites comme on les prend sur le vif : abréviations, désordre, et une information importante manquante dans le second.',
      'Donnez les deux jeux de notes à l’assistant. Dans le second document, « [À COMPLÉTER] » doit apparaître là où l’information manque.',
      'Comparez chaque document produit avec les notes : aucun chiffre, aucune date, aucun nom ne doit avoir été ajouté ou modifié.',
      'Corrigez les instructions si besoin, et estimez le temps gagné par rapport à une mise en forme à la main.',
    ],
    prompt:
      'Tu es l’assistant de rédaction {structure.du} [nom], à Nouméa. Ton rôle : rédiger {documentCourant.un} à partir de mes notes en vrac, en suivant exactement le modèle joint.\n\nRègles :\n- Garde la structure, les titres et l’ordre du modèle.\n- N’utilise que les informations de mes notes. Si une information du modèle manque, écris « [À COMPLÉTER] » à sa place et liste ces manques à la fin.\n- Ne modifie aucun chiffre, aucune date, aucun nom.\n- Développe une abréviation seulement si tu es sûr de son sens ; sinon, demande-moi.\n- Style : phrases courtes et professionnelles, montants en XPF.',
    variantes: {
      simple:
        'Ne pas créer d’assistant : coller le modèle et les règles au début d’une conversation, puis les notes.',
      poussee:
        'Ajouter aux instructions un exemple complet (notes, puis document final correspondant) et mesurer la différence sur trois nouveaux jeux de notes.',
    },
    astuces: {
      claude:
        'Dans un Projet, déposez le modèle dans les connaissances : Claude peut aussi rendre le document en fichier Word.',
      copilot:
        '« Créer un agent » dépend de votre licence ; sinon, collez le modèle et les règles au début d’une conversation dans Copilot Chat.',
      gemini: 'Ajoutez le modèle au Gem, puis ouvrez le résultat dans Canvas pour le retoucher.',
    },
    vigilance:
      'Vos vraies notes contiennent souvent des noms, des numéros et des détails personnels : remplacez-les par des repères ([Client 1], [Adresse]) avant de les coller, et complétez le document final hors de l’IA.',
    formateur: {
      resultat:
        'Un assistant qui suit le modèle, produit un document fidèle à partir des notes complètes, et marque « [À COMPLÉTER] » dans le document issu des notes incomplètes au lieu d’inventer.',
      criteres: [
        'Le modèle et les règles sont dans les instructions de l’assistant, pas répétés dans chaque message.',
        'Le document issu des notes incomplètes signale le manque au lieu de le combler.',
        'L’apprenant a comparé chaque chiffre et chaque date avec les notes.',
        'Le temps gagné a été estimé.',
      ],
      pieges: [
        'L’assistant « complète » une date ou un montant plausible : c’est le piège principal.',
        'Des abréviations mal développées qui changent le sens.',
        'Coller des notes réelles avec des données personnelles.',
      ],
      competence: 'discernement',
      technique: 'exemples',
    },
    motsCles: ['assistant', 'modèle', 'notes', 'mise en forme', 'Projet', 'Gem', 'agent'],
  },
  {
    id: 'g-veille-planifiee',
    titre: 'Programmer chaque semaine un point de veille sur {veille}',
    niveau: 'avance',
    famille: 'automatiser',
    duree: 30,
    outils: ['claude', 'chatgpt', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Vous suivez {veille} « quand vous avez le temps », c’est-à-dire rarement. Vous voulez qu’une IA prépare chaque lundi matin un point court et sourcé, à lire en dix minutes avant de commencer la semaine.',
    objectif:
      'Mettre au point un prompt de veille fiable, vérifier ses sources, puis le programmer pour qu’il se relance seul chaque semaine.',
    etapes: [
      'Lancez le prompt de départ une première fois, à la main, avec la recherche web activée.',
      'Ouvrez chaque lien cité : la page existe-t-elle, dit-elle bien ce qui est résumé, date-t-elle de la semaine ?',
      'Corrigez le prompt selon ce que vous avez constaté (sources à privilégier, longueur, sujets à écarter) et relancez-le.',
      'Programmez-le chaque lundi à 6 h 30 : Tâches planifiées dans Claude ou ChatGPT (offres payantes), ou « Programmer des actions » dans Gemini (selon l’offre).',
      'Vérifiez le fuseau horaire retenu par l’outil : 6 h 30 doit être l’heure de Nouméa.',
      'Fixez une date de bilan dans deux semaines : si les points ne vous apprennent rien, ajustez le prompt ou arrêtez la tâche.',
    ],
    prompt:
      'Tu prépares ma veille hebdomadaire. Je travaille dans {structure.un} à Nouméa.\n\nSujet : {veille}.\nSources à privilégier : {sourcesVeille}.\nPériode : les sept derniers jours uniquement.\n\nPour chaque information nouvelle (cinq au maximum) : un titre, la date, la source avec son lien, un résumé de deux lignes et, en une ligne, ce que cela change pour nous. Classe-les de la plus utile à la moins utile.\n\nS’il n’y a rien de nouveau, écris simplement « Rien de notable cette semaine ». Ne cite jamais une page que tu n’as pas consultée, et n’invente aucun lien.',
    variantes: {
      simple:
        'Ne pas programmer : enregistrer le prompt testé dans sa bibliothèque et le relancer soi-même chaque lundi.',
      poussee:
        'Ajouter une tâche mensuelle qui fait la synthèse des quatre derniers points hebdomadaires et repère les tendances.',
    },
    astuces: {
      claude:
        'Les tâches planifiées sont réservées aux offres payantes ; avec l’offre gratuite, gardez le prompt et relancez-le vous-même avec la recherche web.',
      chatgpt:
        'Les tâches planifiées (offre payante) vous préviennent quand le résultat est prêt ; pour un sujet de fond, préférez une recherche approfondie ponctuelle.',
      gemini:
        'Avec « Programmer des actions » (selon votre offre), choisissez une fréquence hebdomadaire, puis relisez attentivement le premier résultat.',
    },
    vigilance:
      'Une veille automatique peut citer une page mal lue ou ancienne : ne relayez jamais une information sans avoir ouvert la source. Ne mettez dans le prompt aucune information confidentielle sur vos projets.',
    formateur: {
      resultat:
        'Un prompt de veille testé à la main, dont les liens ont été vérifiés, puis programmé chaque lundi à l’heure de Nouméa, avec une date de bilan.',
      criteres: [
        'Chaque lien du premier résultat a été ouvert et vérifié.',
        'Le prompt précise la période, les sources, le format et la conduite à tenir quand il n’y a rien de nouveau.',
        'La tâche est programmée à l’heure de Nouméa, ou l’apprenant sait comment le faire avec son offre.',
        'Une date de bilan est prévue.',
      ],
      pieges: [
        'Programmer sans avoir testé : on reçoit chaque semaine un résultat creux ou inventé.',
        'Une heure réglée sur un autre fuseau : le point arrive en pleine nuit ou le dimanche.',
        'Des « nouveautés » vieilles de plusieurs mois, faute d’avoir précisé la période.',
      ],
      competence: 'delegation',
      technique: 'sources',
    },
    motsCles: ['veille', 'tâche planifiée', 'programmer', 'hebdomadaire', 'sources', 'automatique'],
  },
  {
    id: 'g-competence-methode-maison',
    titre: 'Créer une compétence Claude ou un agent Copilot pour contrôler {documentCourant.vos}',
    niveau: 'avance',
    famille: 'automatiser',
    duree: 60,
    outils: ['claude', 'copilot'],
    outilConseille: 'claude',
    situation:
      'Dans {structure.votre}, les erreurs dans {documentCourant.les} se répètent : chiffres incohérents, rubriques vides, ton inadapté. Une collègue expérimentée a une méthode de relecture en six points qui fonctionne, mais elle est seule à l’appliquer. Vous voulez en faire un outil que l’IA applique à chaque fois, de la même façon.',
    objectif:
      'Écrire une méthode maison sous forme d’instructions précises, l’installer comme compétence ou comme agent, puis la tester sur un document piégé.',
    etapes: [
      'Adaptez la méthode du matériau à votre pratique, ou gardez-la telle quelle pour l’exercice.',
      'Avec Claude, envoyez le prompt de départ et créez la compétence à partir de sa réponse. Avec Copilot, utilisez « Créer un agent » et collez-y les instructions obtenues.',
      'Dans une autre conversation, faites rédiger un exemple fictif {documentCourant.de}, puis glissez-y vous-même trois erreurs (un total faux, une date passée, une rubrique vide). Notez-les.',
      'Demandez à la compétence ou à l’agent de contrôler ce document : les trois erreurs sont-elles trouvées ? Y a-t-il de fausses alertes ?',
      'Améliorez les instructions là où le contrôle a échoué, puis refaites le test avec un nouveau document piégé.',
      'Rédigez en trois lignes la règle d’usage : qui utilise l’outil, pour quels documents, et qui garde la décision finale.',
    ],
    prompt:
      'Aide-moi à créer une compétence (Skill) Claude qui applique la méthode de relecture ci-dessous chaque fois que je demande de contrôler {documentCourant.un}.\n\n<methode>\n[collez la méthode ici]\n</methode>\n\nRédige :\n1. un nom court, et une description qui dit précisément quand utiliser la compétence ;\n2. les instructions pas à pas, avec le format exact du résultat attendu ;\n3. deux exemples : un document conforme et un document avec trois erreurs, avec le résultat attendu pour chacun.\n\nSi la méthode est ambiguë sur un point, pose-moi la question avant de rédiger.',
    materiau: {
      titre: 'Méthode de relecture en six points (exemple à adapter)',
      texte:
        '1. Destinataire et références : le nom, la référence du dossier et la date sont présents et cohérents entre eux.\n2. Chiffres : chaque montant (en XPF) et chaque quantité correspond aux pièces du dossier ; les totaux sont justes.\n3. Dates : aucune échéance déjà passée, aucun rendez-vous un dimanche ou un jour férié.\n4. Complétude : toutes les rubriques obligatoires du modèle sont remplies.\n5. Ton : vouvoiement, phrases courtes, jargon expliqué.\n6. Confidentialité : aucune information sur une autre personne ou un autre dossier.\n\nRésultat attendu : un tableau « point, conforme (oui ou non), problème, correction proposée », puis un verdict « prêt à envoyer » ou « à reprendre ».',
    },
    variantes: {
      simple:
        'Ne pas créer de compétence : enregistrer la méthode comme prompt réutilisable et l’appliquer à un document test.',
      poussee:
        'Joindre à la compétence un modèle de document et un fichier d’exemples, puis la faire tester par deux collègues sur leurs propres documents fictifs.',
    },
    astuces: {
      claude:
        'Une compétence est un dossier dont le fichier SKILL.md contient la description (quand l’utiliser) et les instructions. Vérifiez qu’elle se déclenche quand vous écrivez simplement « contrôle ce document ».',
      copilot:
        '« Créer un agent » dépend de votre licence : collez les instructions, ajoutez la méthode comme source, puis partagez l’agent avec l’équipe.',
    },
    vigilance:
      'Un outil de contrôle ne remplace pas la relecture : il aide à ne rien oublier. Testez-le uniquement avec des documents fictifs, et décidez qui reste responsable de l’envoi.',
    formateur: {
      resultat:
        'Une compétence ou un agent qui applique les six points, rend un tableau de contrôle et un verdict, et trouve les trois erreurs glissées dans le document de test.',
      criteres: [
        'La description dit clairement quand utiliser la compétence ou l’agent.',
        'Les instructions précisent le format du résultat (tableau, puis verdict).',
        'Les trois erreurs glissées sont trouvées, sans fausse alerte gênante.',
        'Une règle d’usage dit qui garde la décision finale.',
      ],
      pieges: [
        'Une description trop vague : la compétence ne se déclenche pas, ou se déclenche pour tout.',
        'Tester sur un document sans erreur et conclure que l’outil fonctionne.',
        'Faire confiance au verdict « prêt à envoyer » sans relire soi-même.',
      ],
      competence: 'delegation',
      technique: 'instructions',
    },
    motsCles: ['compétence', 'Skill', 'agent', 'méthode', 'contrôle qualité', 'relecture'],
  },
  {
    id: 'g-chaine-controle-humain',
    titre: 'Traiter une réclamation en chaîne, avec un contrôle humain à chaque étape',
    niveau: 'avance',
    famille: 'automatiser',
    duree: 45,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      '{Client.un} vous écrit concernant {motifReclamation}. C’est sa troisième relance et le ton monte. Plutôt que de tout demander à l’IA d’un coup, vous découpez le traitement en quatre étapes et vous vérifiez chacune avant de passer à la suivante.',
    objectif:
      'Concevoir une chaîne de prompts réutilisable où l’IA prépare, et où l’humain contrôle et décide à chaque étape.',
    etapes: [
      'Anonymisez le message du matériau : remplacez le nom, le téléphone et la référence par [Nom], [Téléphone] et [Référence].',
      'Étape 1, extraire : envoyez le prompt de départ. Contrôle : comparez le tableau avec le message, et ajoutez ce que vous seul savez (état réel du dossier, documents reçus ou non).',
      'Étape 2, proposer : demandez deux options de réponse, avec leurs avantages et leurs risques. Contrôle : choisissez vous-même, et faites valider tout engagement (délai, remboursement, compensation) par votre responsable.',
      'Étape 3, rédiger : demandez la réponse selon l’option choisie, plus une note interne de trois lignes. Contrôle : relisez dates et promesses, remettez le vrai nom hors de l’IA.',
      'Étape 4, suivre : demandez la ligne à ajouter au tableau de suivi (date, action, échéance, responsable) et le texte d’un rappel. Contrôle : enregistrez-la vous-même.',
      'Rassemblez les quatre prompts dans un document « Chaîne réclamation », avec le contrôle à faire après chaque étape, pour la prochaine fois.',
    ],
    prompt:
      'Tu m’aides à traiter une réclamation en plusieurs étapes. Je travaille dans {structure.un} à Nouméa. Nous ferons une étape à la fois : n’anticipe pas les suivantes.\n\nÉtape 1 : à partir du message ci-dessous, fais un tableau avec les faits (et leur date), les demandes, l’échéance fixée, le ton, et les informations qui me manquent pour répondre. Ne propose encore aucune réponse.\n\n<message>\n[collez le message anonymisé ici]\n</message>',
    materiau: {
      titre: 'Message reçu (fictif)',
      texte:
        'Bonjour,\n\nC’est la troisième fois que je vous contacte au sujet de ma demande (référence 26-0418). J’ai appelé le vendredi 2 octobre, puis le mardi 6, et on m’a promis à chaque fois un rappel qui n’est jamais venu. Je vous ai pourtant envoyé le 29 septembre tout ce que vous m’aviez demandé.\n\nJe veux une réponse écrite et une solution avant le vendredi 16 octobre. Sinon, je m’adresserai directement à votre direction.\n\nCordialement,\nJ. Wahéo\nTél. : 79 41 25',
    },
    variantes: {
      simple: 'Se limiter aux étapes 1 et 3 (extraire, rédiger), avec un contrôle entre les deux.',
      poussee:
        'Transformer la chaîne en Projet ou en Gem dont les instructions imposent l’arrêt après chaque étape, puis la tester sur une deuxième réclamation inventée par un collègue.',
    },
    astuces: {
      claude:
        'Menez la chaîne dans un Projet : les quatre prompts et les points de contrôle restent disponibles pour la prochaine réclamation.',
      chatgpt:
        'Ouvrez la réponse de l’étape 3 dans le canevas pour retoucher un seul paragraphe sans tout régénérer.',
      copilot:
        'Si le message arrive dans Outlook, « Résumer » donne un premier aperçu du fil, mais faites quand même l’étape 1 en entier.',
      gemini: 'Ouvrez la réponse de l’étape 3 dans Canvas pour la retoucher passage par passage.',
    },
    vigilance:
      'Ne collez jamais le message brut : nom, téléphone et référence n’aident pas l’IA. Aucun engagement (délai, remboursement, compensation) ne part sans validation humaine.',
    formateur: {
      resultat:
        'Une réclamation traitée en quatre étapes vérifiées, une réponse sans engagement non validé, une ligne de suivi, et une chaîne de prompts réutilisable avec ses points de contrôle.',
      criteres: [
        'Le message a été anonymisé avant d’être collé.',
        'Chaque étape a été contrôlée avant la suivante, et au moins une correction a été apportée.',
        'L’option de réponse a été choisie par l’apprenant, pas par l’IA.',
        'La chaîne est documentée et réutilisable.',
      ],
      pieges: [
        'Tout demander en une seule fois : l’IA invente l’état du dossier et promet une solution.',
        'Laisser passer une date fausse dans la réponse (le 2 et le 6 octobre deviennent le 2 et le 16).',
        'Accepter un délai ou une compensation proposés par l’IA sans validation.',
      ],
      competence: 'diligence',
      technique: 'decomposer',
    },
    motsCles: ['chaîne', 'étapes', 'contrôle humain', 'réclamation', 'suivi', 'automatisation'],
  },
];
