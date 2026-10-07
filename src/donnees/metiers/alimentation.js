/**
 * Alimentation et métiers de bouche : boulangerie-pâtisserie, boucherie-charcuterie, traiteur,
 * épicerie, petits producteurs et transformateurs locaux, restauration collective.
 * Toutes les personnes, entreprises, recettes, prix et ventes sont fictifs.
 * Hygiène, étiquetage et allergènes : l’IA aide à rédiger, une personne compétente valide.
 */

export const vocabulaire = {
  structure: {
    g: 'f',
    s: 'boulangerie-pâtisserie traiteur',
    p: 'boulangeries-pâtisseries traiteurs',
  },
  client: { g: 'm', s: 'client', p: 'clients' },
  partenaire: { g: 'm', s: 'grossiste alimentaire', p: 'grossistes alimentaires' },
  documentCourant: { g: 'm', s: 'devis traiteur', p: 'devis traiteur' },
  documentLong: {
    g: 'm',
    s: 'contrat type de prestation traiteur',
    p: 'contrats types de prestation traiteur',
  },
  reunion: {
    g: 'f',
    s: 'réunion d’équipe entre la production et la boutique',
    p: 'réunions d’équipe entre la production et la boutique',
  },
  offre: { g: 'f', s: 'bûche de Noël letchi-vanille', p: 'bûches de Noël letchi-vanille' },
  poste: { g: 'm', s: 'vendeur en boutique', p: 'vendeurs en boutique' },
  evenement: {
    g: 'f',
    s: 'matinée de dégustation des produits du terroir',
    p: 'matinées de dégustation des produits du terroir',
  },
  visuel: { g: 'f', s: 'affiche de vitrine', p: 'affiches de vitrine' },
  domaine: 'l’alimentation et les métiers de bouche',
  motifReclamation: 'un gâteau d’anniversaire livré en retard et différent de sa commande',
  donnees:
    'le relevé quotidien de la production et des invendus de la boutique, produit par produit',
  colonnes:
    'Date;Produit;Quantité produite;Quantité vendue;Invendus;Coût de revient unitaire (XPF)',
  indicateur: 'le taux d’invendus de chaque produit',
  veille:
    'la réglementation sanitaire et l’étiquetage des denrées alimentaires en Nouvelle-Calédonie',
  sourcesVeille:
    'les publications du gouvernement de la Nouvelle-Calédonie (SIVAP de la DAVAR, DECAT), le Journal officiel de la Nouvelle-Calédonie et la Chambre de métiers et de l’artisanat',
  jargon: 'la chaîne du froid et les dates limites de consommation',
  procedure: 'la réception et le contrôle des marchandises livrées',
  situationTendue: 'un grossiste qui annonce une hausse de 12 % du prix de la farine',
  donneesSensibles:
    'les noms, téléphones et adresses de livraison des clients, et les allergies signalées dans leurs commandes',
  corpus:
    'les fiches techniques des recettes, les fiches allergènes et les fiches des fournisseurs',
  publicCible: 'les familles du Grand Nouméa qui commandent leur dessert pour le réveillon',
  etranger: 'un client australien qui commande un buffet pour un séminaire à Nouméa',
  themeFormation:
    'les règles d’hygiène au laboratoire et l’information des clients sur les allergènes',
  tacheRepetitive: 'les réponses aux demandes de commande de gâteaux reçues sur Messenger',
  planning: 'la production et les livraisons de la semaine de Noël',
  comparaison: 'deux fours professionnels proposés pour remplacer le four du laboratoire',
};

export const exercices = [
  {
    id: 'alim-etiquette-sables',
    titre: 'Rédiger le projet d’étiquette d’un sachet de biscuits artisanaux',
    metier: 'alimentation',
    niveau: 'debutant',
    famille: 'rediger',
    duree: 20,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Vous travaillez dans une petite biscuiterie artisanale de Païta qui vend ses sablés coco-vanille en vrac au marché de Port-Moselle. Deux épiceries de Nouméa veulent les vendre en sachets fermés de 150 g : il faut une étiquette. Le gérant vous confie la recette et ses notes ; le projet sera validé avant toute impression.',
    objectif:
      'Faire rédiger un projet d’étiquette complet et ordonné à partir d’une recette, repérer ce que l’IA ajoute ou affirme sans source, et préparer sa validation.',
    etapes: [
      'Copiez la recette et les notes du matériau avec le prompt de départ.',
      'Vérifiez l’ordre des ingrédients : du plus lourd au plus léger, d’après les quantités de la recette.',
      'Vérifiez que les allergènes de la recette sont mis en évidence, et qu’aucun n’a été ajouté ni oublié.',
      'Repérez les mentions que l’IA a complétées seule (durée de conservation, « fait maison », traces possibles) et remplacez-les par [à valider].',
      'Comparez le projet avec la fiche pratique « Étiquetage des denrées alimentaires » de la DECAT (gouvernement de la Nouvelle-Calédonie), puis notez les questions à poser avant impression.',
    ],
    prompt:
      'Tu es conseiller qualité pour les petits producteurs alimentaires en Nouvelle-Calédonie. À partir de la recette et des notes ci-dessous, rédige le projet d’étiquette d’un sachet de sablés vendu en épicerie. Rubriques : dénomination du produit ; liste des ingrédients par ordre décroissant de poids, allergènes en gras ; poids net ; conditions de conservation ; date (laisse [date] à compléter) ; numéro de lot ; nom et adresse du producteur. N’ajoute aucune mention qui ne vient pas des notes : écris [à valider] quand une information manque ou n’est pas prouvée. Après l’étiquette, liste les points à faire vérifier, et dis-le si tu n’es pas sûr d’une règle applicable en Nouvelle-Calédonie.\n\n<recette>\n[collez la recette et les notes ici]\n</recette>',
    materiau: {
      titre: 'Recette d’une fournée et notes du gérant (fictives)',
      texte:
        'Sablés coco-vanille, recette pour une fournée (environ 1 kg de pâte)\n- farine de blé T55 : 400 g\n- beurre doux : 250 g\n- sucre de canne : 180 g\n- noix de coco râpée : 120 g\n- œufs entiers : 50 g (1 œuf)\n- vanille de Lifou en gousse : 2 g\n- sel : 2 g\n\nNotes du gérant :\n- sachet fermé de 150 g, vendu 650 XPF en épicerie\n- conservation : au sec, à l’abri de la chaleur ; après ouverture, en boîte hermétique\n- ça se garde 6 semaines je pense, mais on n’a jamais fait tester\n- même atelier que les rochers aux noix de cajou (mêmes plaques, nettoyées entre deux)\n- producteur : Biscuiterie Kaori, Païta (adresse complète à ajouter)\n- numéro de lot : la date de fabrication, par exemple 261014',
    },
    variantes: {
      simple:
        'Rédiger seulement la liste des ingrédients, dans le bon ordre, avec les allergènes en gras.',
      poussee:
        'Décliner l’étiquette pour les rochers aux noix de cajou, puis préparer l’affichette des allergènes pour la vente en vrac au marché, et faire valider l’ensemble.',
    },
    astuces: {
      claude:
        'Demandez l’étiquette dans un artefact, au format d’une étiquette de 10 × 6 cm : vous jugerez tout de suite la place disponible.',
      chatgpt:
        'Ouvrez le projet dans le canevas pour retoucher une seule rubrique sans régénérer toute l’étiquette.',
    },
    vigilance:
      'L’IA aide à rédiger, une personne compétente valide : l’étiquette engage le producteur. La Nouvelle-Calédonie a ses propres règles de consommation et d’étiquetage : un règlement européen ou une règle métropolitaine cités par l’IA ne s’appliquent pas tels quels. Renseignez-vous auprès de la DECAT avant impression, et n’affirmez aucune durée de conservation ni aucune absence d’allergène sans preuve.',
    formateur: {
      resultat:
        'Un projet d’étiquette avec la dénomination « Sablés coco-vanille », les ingrédients dans l’ordre (farine de blé, beurre, sucre de canne, noix de coco râpée, œufs, puis vanille de Lifou et sel à égalité), le blé, le beurre (lait) et les œufs en gras, 150 g, la conservation au sec, et des [à valider] pour la date, les traces possibles de noix de cajou et l’adresse.',
      criteres: [
        'L’ordre des ingrédients suit exactement les quantités de la recette.',
        'Les allergènes de la recette (blé, lait du beurre, œufs) sont mis en évidence, sans ajout inventé.',
        'La durée de conservation et la mention de traces de noix de cajou restent [à valider].',
        'L’apprenant a listé les questions à poser avant impression (DECAT, conseiller, gérant).',
      ],
      pieges: [
        'Accepter « à consommer de préférence dans les 6 semaines » alors que la durée n’a jamais été testée.',
        'Laisser l’IA citer le règlement européen sur l’information du consommateur comme s’il s’appliquait en Nouvelle-Calédonie.',
        'Oublier que le beurre apporte un allergène (le lait), parce que le mot « lait » n’apparaît pas dans la recette.',
      ],
      competence: 'diligence',
      technique: 'format',
    },
    motsCles: ['étiquetage', 'allergènes', 'ingrédients', 'biscuits', 'DECAT', 'producteur'],
  },
  {
    id: 'alim-affiche-commandes-fetes',
    titre: 'Créer dans Canva l’affiche des commandes de fêtes d’une boucherie',
    metier: 'alimentation',
    niveau: 'debutant',
    famille: 'visuels',
    duree: 20,
    outils: ['canva'],
    outilConseille: 'canva',
    situation:
      'Vous travaillez dans une boucherie-charcuterie de Païta. Les commandes de fêtes ouvrent le 1er décembre : jambon à l’os, rôti de cerf, colis grillades. Le patron veut une affiche A4 pour le comptoir et une publication carrée pour Facebook, avec des prix et des dates exacts.',
    objectif:
      'Obtenir avec l’IA Canva un visuel clair et appétissant, puis vérifier mot à mot les prix, les dates et les conditions qui engagent la boucherie.',
    etapes: [
      'Dans Canva, ouvrez l’IA Canva ou le Design magique et décrivez l’affiche avec le prompt de départ.',
      'Choisissez une proposition et remplacez le texte par les informations exactes du matériau.',
      'Vérifiez mot à mot les prix (au kilo ou au colis), la date limite de commande, les jours de retrait et l’acompte.',
      'Remplacez les images hors sujet (neige, sapin enneigé, produit différent de celui vendu) par vos propres photos ou par des éléments sobres.',
      'Créez la version carrée pour Facebook (Redimensionnement magique avec Canva Pro, payant, ou en dupliquant le design), puis faites relire les deux versions par le patron.',
    ],
    prompt:
      'Crée une affiche A4 verticale pour le comptoir d’une boucherie-charcuterie de Païta, en Nouvelle-Calédonie. Thème : « Les commandes de fêtes sont ouvertes ». Style : chaleureux et festif, sans neige ni décor d’hiver (ici, Noël tombe en plein été), lisible à 2 mètres, 6 blocs de texte au maximum. Éléments à afficher : titre, trois produits avec leur prix, date limite de commande, jours de retrait, acompte, horaires, téléphone. Couleurs : rouge brique, crème et vert feuille.',
    materiau: {
      titre: 'Informations validées par le patron (fictives)',
      texte:
        '- Titre : « Les commandes de fêtes sont ouvertes »\n- Jambon à l’os cuit au torchon : 3 200 XPF le kg\n- Rôti de cerf ficelé : 3 650 XPF le kg\n- Colis grillades (saucisses, côtes de porc, brochettes), environ 3 kg : 7 900 XPF le colis\n- Commandes du 1er au 12 décembre, au comptoir ou par téléphone\n- Acompte de 5 000 XPF à la commande\n- Retrait du 22 au 24 décembre, de 6 h 30 à 12 h\n- Ouvert du mardi au samedi de 6 h 30 à 12 h 30 et de 15 h à 18 h 30, le dimanche de 6 h 30 à 11 h 30\n- Téléphone : [numéro de la boucherie]',
    },
    variantes: {
      simple: 'Créer seulement la publication carrée pour Facebook.',
      poussee:
        'Décliner l’opération en affiche, publication, story et chevalet de comptoir avec la même charte, et préparer avec l’Écriture magique un texte de publication de 60 mots, relu avant diffusion.',
    },
    astuces: {
      canva:
        'Tapez vous-même les prix et les dates dans les blocs de texte : l’IA Canva peut en inventer ou les arrondir. Le Kit de marque (offre Pro, payante) garde le logo et les couleurs de la boucherie pour les prochaines affiches.',
    },
    vigilance:
      'Un prix ou une date faux engage la boucherie : faites relire avant impression et publication. N’utilisez pas d’image qui montre un autre produit que celui vendu (un jambon fumé pour un jambon cuit), ni de mention que personne n’a vérifiée, comme « 100 % local ».',
    formateur: {
      resultat:
        'Une affiche A4 lisible et une publication carrée qui affichent les trois produits et leurs prix exacts (3 200 et 3 650 XPF le kg, 7 900 XPF le colis), les commandes jusqu’au 12 décembre, l’acompte de 5 000 XPF, le retrait du 22 au 24 décembre et les horaires, sans décor de neige.',
      criteres: [
        'Prix, unités, dates, acompte et horaires sont exacts sur les deux formats.',
        'L’affiche compte 6 blocs de texte au plus et se lit à distance.',
        'Aucune image ne montre un produit différent ou un décor hors contexte.',
        'Le patron a relu les deux visuels avant diffusion.',
      ],
      pieges: [
        'Un colis grillades affiché « 7 900 XPF le kg » au lieu de « le colis ».',
        'Une mention ajoutée par l’IA (« livraison offerte », « viande 100 % calédonienne ») que personne n’a validée.',
      ],
      competence: 'discernement',
      technique: 'format',
    },
    motsCles: ['affiche', 'Canva', 'boucherie', 'fêtes de fin d’année', 'Facebook', 'commandes'],
  },
  {
    id: 'alim-presentation-apiculteur',
    titre: 'Corriger le texte de présentation d’un apiculteur pour son stand de foire',
    metier: 'alimentation',
    niveau: 'debutant',
    famille: 'corriger',
    duree: 15,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Vous aidez un apiculteur de La Foa qui tiendra un stand à la Foire de Bourail et vend aussi en épicerie à Nouméa. Il a écrit lui-même le texte de présentation de son miel, pour le panneau du stand et pour le site d’une épicerie fine. Le texte est sincère, mais plein de fautes et de promesses qu’il ne peut pas prouver.',
    objectif:
      'Faire corriger un texte en gardant la voix du producteur, et faire retirer les allégations de santé ou de qualité invérifiables, sans en laisser l’IA en ajouter d’autres.',
    etapes: [
      'Lisez le texte du matériau et soulignez vous-même les phrases qui promettent un effet sur la santé ou une qualité invérifiable.',
      'Collez le texte avec le prompt de départ.',
      'Vérifiez que toutes les fautes sont corrigées et que le ton reste celui de l’apiculteur.',
      'Vérifiez que les phrases soulignées ont été retirées ou ramenées à des faits, et que l’IA n’a pas glissé une autre promesse à la place.',
      'Demandez une version de 40 mots pour le panneau du stand, puis faites valider les deux versions par l’apiculteur.',
    ],
    prompt:
      'Tu es rédacteur pour des producteurs locaux en Nouvelle-Calédonie. Corrige le texte ci-dessous : orthographe, grammaire, ponctuation, phrases trop longues. Garde la voix simple et chaleureuse de l’apiculteur, à la première personne. Retire toute affirmation sur la santé (soigner, guérir, prévenir) et toute qualité qu’il ne peut pas prouver ; ne la remplace pas par une autre promesse. N’ajoute aucune information. Rends le texte corrigé, puis un tableau : phrase d’origine, ce que tu as changé, pourquoi.\n\n<texte>\n[collez le texte ici]\n</texte>',
    materiau: {
      titre: 'Texte écrit par l’apiculteur (fictif)',
      texte:
        'Le Rucher des Niaoulis\n\nJe m’apelle Gérard, apiculteur a La Foa depuis 1998. Mes 60 ruches sont installé en bord de rivière et au milieu des niaoulis, loin des champs traités. Mon miel de niaouli est récolté a la main et mis en pot sans être chauffer, il garde tout ses qualitées. C’est le meilleur miel de Calédonie, tout le monde le dit à la foire !\n\nLe miel de niaouli soigne la toux et les maux de gorge, c’est prouvé scientifiquement, et il remplace les antibiotiques pour les enfants. Il est 100 % bio et sans aucun pesticides.\n\nVous me trouverez au marché de La Foa le samedi matin, et en épicerie à Nouméa. Pot de 500 g : 2 200 XPF.',
    },
    variantes: {
      simple: 'Corriger seulement les fautes du premier paragraphe.',
      poussee:
        'Rédiger ensuite, à partir du texte validé, une fiche produit pour le site de l’épicerie (titre, description de 80 mots, poids, prix, conservation), puis sa traduction en anglais pour les croisiéristes.',
    },
    astuces: {
      chatgpt:
        'Dans le canevas, demandez des suggestions de modification : chaque correction apparaît, vous l’acceptez ou non.',
      gemini:
        'Ouvrez le texte dans Canvas et retravaillez seulement le paragraphe sur la santé, sans toucher au reste.',
    },
    vigilance:
      'Une allégation de santé ou un label (« bio », « prouvé scientifiquement ») engage le producteur et peut tromper, voire mettre en danger, le client : on ne garde que ce qu’il peut prouver, certificat ou analyse à l’appui. Ici, le texte parle d’enfants et d’antibiotiques : cette phrase doit disparaître.',
    formateur: {
      resultat:
        'Un texte sans faute, à la première personne, qui garde les faits (60 ruches, La Foa depuis 1998, récolte et mise en pot sans chauffage, marché du samedi, 2 200 XPF le pot de 500 g), retire les allégations de santé, « le meilleur miel » et « 100 % bio », et une version de 40 mots pour le stand.',
      criteres: [
        'Les fautes sont toutes corrigées (apelle, a, installé, chauffer, tout ses qualitées, aucun pesticides).',
        'Aucune allégation de santé ne subsiste, ni sous une autre forme.',
        '« 100 % bio » et « sans aucun pesticide » sont retirés ou signalés comme à prouver.',
        'Les faits, le prix et le ton du producteur sont conservés.',
      ],
      pieges: [
        'Une IA qui remplace « soigne la toux » par « réputé pour ses bienfaits », qui reste une promesse.',
        'Un texte devenu lisse et publicitaire, où l’on n’entend plus l’apiculteur.',
        'Garder « loin des champs traités » ou « sans pesticides » comme une garantie, sans analyse pour le prouver.',
      ],
      competence: 'discernement',
      technique: 'critique',
    },
    motsCles: ['correction', 'producteur local', 'miel', 'allégations', 'Foire de Bourail'],
  },
  {
    id: 'alim-plan-nettoyage',
    titre: 'Transformer des consignes orales en plan de nettoyage et de désinfection',
    metier: 'alimentation',
    niveau: 'debutant',
    famille: 'organiser',
    duree: 20,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Vous êtes second dans le laboratoire d’un traiteur de Dumbéa. Le chef explique le nettoyage oralement à chaque nouvel arrivant, et rien n’est affiché. Il vous a dicté ses consignes : vous devez en tirer un projet de plan de nettoyage et de désinfection, qu’il validera avant affichage.',
    objectif:
      'Obtenir un tableau clair et complet à partir de notes dictées, sans que l’IA invente de produit, de dosage ni de fréquence.',
    etapes: [
      'Copiez les consignes du matériau avec le prompt de départ.',
      'Vérifiez que chaque zone et chaque équipement des notes figurent dans le tableau, avec la bonne fréquence.',
      'Repérez les dosages, températures ou temps d’action que l’IA aurait ajoutés, et remplacez-les par [voir fiche technique du produit].',
      'Vérifiez que les règles de sécurité du chef sont mises en évidence, dont la trancheuse débranchée.',
      'Faites relire le plan par le chef, puis testez-le avec un collègue qui ne connaît pas le laboratoire.',
    ],
    prompt:
      'Tu es second de cuisine chez un traiteur de Dumbéa, en Nouvelle-Calédonie. À partir des consignes ci-dessous, rédige un projet de plan de nettoyage et de désinfection du laboratoire. Format : un tableau avec les colonnes Zone ou équipement, Fréquence, Produit, Méthode (étapes courtes), Qui, Visa ; puis un encadré « Règles de sécurité ». Reprends uniquement les consignes fournies : si un produit, un dosage ou un temps d’action n’est pas précisé, écris [voir fiche technique du produit] au lieu de l’inventer. Termine par la liste des questions à poser au chef.\n\n<consignes>\n[collez les consignes ici]\n</consignes>',
    materiau: {
      titre: 'Consignes dictées par le chef (fictives)',
      texte:
        'tous les jours en fin de service : plans de travail et planches → détergent-désinfectant D2 (le bidon bleu), rincer à l’eau claire si c’est écrit sur l’étiquette ; trancheuse : toujours débranchée avant, démonter, laver les pièces, désinfecter, sécher, remonter ; sols du labo : balayage humide puis lavage au D2, en dernier ; poubelles vidées et sacs changés à chaque fin de service\nchambre froide positive : rangement tous les jours, nettoyage complet le samedi après la dernière livraison, on vide une étagère à la fois\nfour mixte : programme de nettoyage automatique le lundi et le jeudi\nhotte : filtres au lave-vaisselle tous les vendredis\nlave-mains : savon et essuie-mains vérifiés le matin et à midi\nchaque tâche faite = on signe la feuille avec l’heure\nsécurité : jamais mélanger deux produits ; gants et lunettes pour le produit du four',
    },
    variantes: {
      simple: 'Faire seulement le tableau du nettoyage quotidien de fin de service.',
      poussee:
        'Transformer le plan en feuille d’enregistrement hebdomadaire à cocher et en affiche d’une page avec pictogrammes, puis en tirer un quiz de cinq questions pour les nouveaux.',
    },
    astuces: {
      claude:
        'Demandez le plan en fichier Excel grâce à la création de fichiers : une ligne par tâche, une colonne par jour pour les visas.',
      copilot:
        'Transformez le plan en Copilot Page : le chef peut corriger les lignes directement.',
    },
    vigilance:
      'L’IA aide à rédiger, une personne compétente valide : produits, dosages et temps d’action viennent des fiches techniques des fournisseurs, jamais de l’IA. Le plan est validé par le chef avant affichage ; pour les exigences des contrôles d’hygiène, renseignez-vous auprès du SIVAP de la DAVAR.',
    formateur: {
      resultat:
        'Un tableau complet (plans de travail et planches, trancheuse, sols, poubelles, chambre froide, four, hotte, lave-mains), avec les fréquences exactes, le D2 là où il est cité, [voir fiche technique du produit] ailleurs, un encadré sécurité et des questions au chef (produit du four, rinçage, désinfection de la chambre froide).',
      criteres: [
        'Toutes les zones des consignes figurent, avec la bonne fréquence (four le lundi et le jeudi, hotte le vendredi, chambre froide le samedi).',
        'Aucun dosage, aucune température ni aucun temps d’action inventés.',
        'Les règles de sécurité sont mises en évidence, dont la trancheuse débranchée.',
        'Une colonne Visa permet de savoir qui a fait quoi, et à quelle heure.',
      ],
      pieges: [
        'Accepter « D2 dilué à 2 % pendant 5 minutes » : aucune de ces valeurs n’est dans les notes.',
        'Perdre l’ordre logique : les sols se lavent en dernier.',
        'Présenter le plan comme validé alors que le chef ne l’a pas relu.',
      ],
      competence: 'description',
      technique: 'format',
    },
    motsCles: ['plan de nettoyage', 'hygiène', 'désinfection', 'check-list', 'traiteur'],
  },
  {
    id: 'alim-cout-revient-tarte',
    titre: 'Calculer le coût de revient d’une recette et l’effet d’une hausse de la farine',
    metier: 'alimentation',
    niveau: 'intermediaire',
    famille: 'analyser',
    duree: 30,
    outils: ['chatgpt', 'claude', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Vous travaillez dans une boulangerie-pâtisserie de Koné. Le grossiste annonce une hausse de 15 % de la farine, et le fret fait monter le prix du beurre. Avant de refaire ses étiquettes de prix, la gérante veut savoir ce que coûte vraiment une tarte coco de 8 parts, et à quel prix la vendre.',
    objectif:
      'Faire calculer un coût de revient ligne par ligne, vérifier les conversions d’unités à la main, puis mesurer l’effet réel d’une hausse sur la recette.',
    etapes: [
      'Collez la fiche et les hypothèses avec le prompt de départ, ou déposez-les dans un fichier CSV.',
      'Vérifiez à la main deux lignes : le beurre (120 g d’un carton de 10 kg à 18 000 XPF) et la vanille (une demi-gousse).',
      'Contrôlez les totaux : coût matière, coût de revient avec le forfait, prix de vente hors taxes de la tarte et de la part.',
      'Lisez le tableau avant / après : quelle hausse pèse le plus sur cette recette ? Faites détailler l’écart en XPF, ingrédient par ingrédient.',
      'Demandez deux pistes pour garder la marge (prix, recette, format), présentées comme des options que la gérante tranchera.',
    ],
    prompt:
      'Tu es contrôleur de gestion pour des artisans boulangers-pâtissiers en Nouvelle-Calédonie. Voici la fiche des ingrédients d’une tarte coco de 8 parts (CSV, séparateur point-virgule, montants en XPF) et les hypothèses de la gérante.\n1) Calcule le coût de chaque ligne : prix du conditionnement ramené à l’unité utilisée, multiplié par la quantité. Montre chaque calcul.\n2) Calcule le coût matière, puis le coût de revient avec le forfait de main-d’œuvre et d’énergie.\n3) Calcule le prix de vente hors taxes avec le coefficient indiqué, pour la tarte et pour une part.\n4) Refais les calculs avec les hausses annoncées et présente un tableau avant / après.\nNe calcule pas la TGC : son taux sera vérifié avec le comptable.\n\n<fiche>\n[collez le tableau et les hypothèses ici]\n</fiche>',
    materiau: {
      titre: 'Ingrédients d’une tarte coco de 8 parts et hypothèses (fictifs)',
      texte:
        'Ingrédient;Quantité utilisée;Unité;Conditionnement acheté;Prix du conditionnement (XPF)\nFarine de blé T55;200;g;sac de 25 kg;4500\nBeurre doux;120;g;carton de 10 kg;18000\nSucre de canne;130;g;sac de 25 kg;4000\nŒufs;3;pièce;plateau de 30;1950\nNoix de coco râpée;150;g;sachet de 1 kg;1400\nLait de coco;200;ml;boîte de 400 ml;350\nCrème liquide 35 %;100;ml;brique de 1 L;1100\nVanille de Lifou;0,5;gousse;sachet de 10 gousses;3000\nSel;2;g;paquet de 1 kg;150\nBoîte carton et étiquette;1;pièce;lot de 100;6500\n\nHypothèses de la gérante :\n- main-d’œuvre et énergie : forfait de 900 XPF par tarte (à confirmer avec le comptable)\n- prix de vente hors taxes = coût de revient × 1,6\n- hausses annoncées : farine +15 % ; beurre +10 % (fret)',
    },
    variantes: {
      simple: 'Calculer seulement le coût matière de la tarte, sans les hausses.',
      poussee:
        'Construire un modèle de fiche de coût de revient dans un tableur (formules par ligne, une cellule pour le coefficient et une pour chaque hausse), puis l’appliquer à trois autres recettes.',
    },
    astuces: {
      chatgpt:
        'Déposez le fichier CSV : l’analyse de données fait les calculs. Demandez à voir le tableau intermédiaire du prix par gramme ou par pièce.',
      gemini:
        'Importez le CSV dans Google Sheets et ouvrez « Demander à Gemini » pour écrire la formule du coût par ligne ; vérifiez-la sur une cellule.',
      claude:
        'Demandez le résultat en fichier Excel grâce à la création de fichiers, avec des formules plutôt que des valeurs figées.',
    },
    vigilance:
      'Vos vrais prix d’achat sont confidentiels : dans un outil grand public, travaillez avec des chiffres arrondis ou fictifs. Le taux de TGC et le forfait de main-d’œuvre se vérifient avec le comptable. Certains produits, comme la baguette, peuvent avoir un prix réglementé en Nouvelle-Calédonie : renseignez-vous auprès de la DECAT avant d’appliquer un coefficient.',
    formateur: {
      resultat:
        'Un coût matière de 1 113 XPF (beurre 216, coco 210, œufs 195, lait de coco 175, vanille 150, crème 110, farine 36, sucre 21), 1 178 XPF avec la boîte, un coût de revient de 2 078 XPF et un prix de vente hors taxes d’environ 3 325 XPF la tarte (416 XPF la part). Après les hausses : +27 XPF par tarte, dont 5,4 XPF pour la farine et 21,6 XPF pour le beurre, soit un prix hors taxes d’environ 3 368 XPF.',
      criteres: [
        'Le coût du beurre (216 XPF) et de la vanille (150 XPF) est juste.',
        'Le coût de revient (environ 2 078 XPF) et le prix hors taxes (environ 3 325 XPF) sont justes.',
        'L’apprenant a relevé que la hausse de la farine pèse peu sur cette recette (environ 5 XPF par tarte).',
        'Les pistes pour garder la marge sont présentées comme des options, pas comme des décisions.',
      ],
      pieges: [
        'Une erreur d’unité : 120 g de beurre comptés 2 160 XPF au lieu de 216 XPF.',
        'Une TGC calculée avec un taux inventé par l’IA.',
        'Conclure qu’il faut augmenter tous les prix de 15 % parce que la farine augmente de 15 %.',
      ],
      competence: 'discernement',
      technique: 'decomposer',
    },
    motsCles: ['coût de revient', 'prix de vente', 'recette', 'marge', 'hausse des prix', 'CSV'],
  },
  {
    id: 'alim-invendus-gaspillage',
    titre: 'Analyser les invendus d’une boulangerie et proposer des actions anti-gaspillage',
    metier: 'alimentation',
    niveau: 'intermediaire',
    famille: 'analyser',
    duree: 30,
    outils: ['chatgpt', 'claude', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Vous êtes adjoint dans une boulangerie de Dumbéa. Chaque soir, des invendus partent à la poubelle, et la gérante veut réduire ce gaspillage sans manquer de produits en journée. Elle vous confie les moyennes par jour des quatre dernières semaines, produit par produit.',
    objectif:
      'Faire calculer des taux et des valeurs, comparer plusieurs classements, et refuser une action qui contredit les données (un produit souvent en rupture).',
    etapes: [
      'Collez le relevé avec le prompt de départ, ou déposez-le en fichier CSV.',
      'Vérifiez à la main deux lignes : le sandwich jambon-beurre et le pain complet.',
      'Comparez les trois classements : quel produit arrive en tête en nombre, en taux et en valeur ? Pourquoi ce ne sont pas les mêmes ?',
      'Vérifiez qu’aucune action ne réduit un produit souvent en rupture (pain au chocolat, croissant, baguette).',
      'Faites marquer « à vérifier » les actions qui touchent l’hygiène ou le don, puis choisissez trois actions à tester pendant deux semaines.',
    ],
    prompt:
      'Tu es conseiller en gestion pour des boulangeries en Nouvelle-Calédonie. Voici les moyennes par jour d’une boulangerie sur les quatre dernières semaines (24 jours d’ouverture), en CSV avec séparateur point-virgule.\n1) Calcule pour chaque produit : invendus par jour, taux d’invendus (invendus / production), valeur des invendus au coût de revient, par jour et sur 24 jours.\n2) Classe les produits de trois façons : par nombre d’invendus, par taux, par valeur.\n3) Tiens compte des ruptures : ne propose pas de baisser la production d’un produit souvent en rupture.\n4) Propose cinq actions concrètes pour réduire le gaspillage, avec le gain estimé, en séparant ce qui est sûr de ce qui est à vérifier.\nMontre tes calculs dans un tableau.\n\n<releve>\n[collez le tableau ici]\n</releve>',
    materiau: {
      titre: 'Moyennes par jour sur quatre semaines (fictives)',
      texte:
        'Produit;Production moyenne par jour;Ventes moyennes par jour;Coût de revient unitaire (XPF);Jours de rupture avant 17 h (sur 24)\nBaguette;420;402;38;6\nPain de mie;30;22;120;0\nPain complet;25;14;95;0\nCroissant;180;171;55;9\nPain au chocolat;160;158;60;14\nChausson aux pommes;40;26;70;0\nPain coco;60;51;45;2\nFlan pâtissier (part);48;30;90;0\nÉclair au chocolat;36;31;110;3\nTarte aux fruits (part);40;33;130;1\nSandwich jambon-beurre;90;72;210;0\nPart de pizza;50;35;140;0\nGâteau coco (part);24;21;85;4',
    },
    variantes: {
      simple:
        'Calculer seulement le taux d’invendus de chaque produit et la valeur totale des invendus par jour.',
      poussee:
        'Faire générer un relevé fictif jour par jour (du lundi au samedi) pour les quatre produits les plus gaspillés, puis proposer une production différente selon le jour de la semaine.',
    },
    astuces: {
      chatgpt:
        'L’analyse de données trace un graphique des invendus en valeur ; demandez aussi les trois classements dans un fichier Excel.',
      copilot:
        'Collez le relevé dans Excel, mettez-le sous forme de tableau, puis demandez à Copilot d’ajouter les colonnes calculées (licence requise).',
    },
    vigilance:
      'Transformer des invendus (pain perdu, croûtons) ou les donner obéit à des règles d’hygiène et de traçabilité : toute action de ce type est validée par une personne compétente, après vous être renseigné auprès des services compétents. L’IA donne des pistes, pas des règles.',
    formateur: {
      resultat:
        'Un tableau juste : 137 invendus par jour sur 1 203 produits (11,4 %), soit 13 904 XPF par jour au coût de revient et environ 333 700 XPF sur 24 jours. En valeur, le sandwich (3 780 XPF par jour) et la pizza (2 100 XPF) font 42 % du total ; en taux, le pain complet (44 %), le flan (37,5 %) et le chausson (35 %) arrivent en tête. Le pain au chocolat, en rupture 14 jours sur 24, est à augmenter, pas à réduire.',
      criteres: [
        'La valeur des invendus du sandwich (18 × 210 = 3 780 XPF par jour) est juste.',
        'Les trois classements sont distingués et commentés.',
        'Aucune action ne réduit la production du pain au chocolat, du croissant ou de la baguette.',
        'Les actions qui touchent l’hygiène ou le don sont marquées « à vérifier ».',
      ],
      pieges: [
        'Proposer de baisser la baguette parce qu’elle compte 18 invendus, sans voir qu’elle a le plus faible taux (4,3 %) et des ruptures.',
        'Ne regarder que le nombre d’invendus et passer à côté du sandwich, qui pèse le plus en valeur.',
        'Accepter « donner les invendus à une association est obligatoire » sans vérifier la règle en Nouvelle-Calédonie.',
      ],
      competence: 'discernement',
      technique: 'critique',
    },
    motsCles: ['invendus', 'gaspillage', 'boulangerie', 'production', 'CSV', 'ruptures'],
  },
  {
    id: 'alim-corps-etranger',
    titre: 'Répondre à une cliente qui signale un corps étranger dans un produit',
    metier: 'alimentation',
    niveau: 'intermediaire',
    famille: 'rediger',
    duree: 20,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Vous travaillez dans une boucherie-charcuterie de Nouméa. Une cliente écrit sur Messenger qu’elle a trouvé un morceau de plastique dur dans un pâté en croûte acheté samedi, photo à l’appui. Un collègue a préparé une réponse ; le responsable veut une réponse juste et la fiche d’incident avant midi.',
    objectif:
      'Faire rédiger en plusieurs échanges une réponse humaine qui ne reconnaît aucune responsabilité non validée, puis une fiche d’incident utile à la traçabilité.',
    etapes: [
      'Copiez le message, le brouillon du collègue et la consigne interne avec le prompt de départ.',
      'Lisez la réponse : remercie-t-elle, demande-t-elle si quelqu’un a été blessé, et demande-t-elle de garder le produit, l’emballage et le ticket ?',
      'Repérez toute phrase qui avance une cause, reconnaît une faute ou promet un geste, et faites-la reformuler selon la consigne.',
      'Demandez ensuite la fiche d’incident interne : faits, produit, date d’achat, lot et date de fabrication à retrouver, premières actions proposées.',
      'Comparez avec le brouillon du collègue, puis faites valider la réponse par le responsable avant l’envoi.',
    ],
    prompt:
      'Tu es responsable qualité d’une boucherie-charcuterie à Nouméa. Une cliente signale un corps étranger dans un de nos produits (message ci-dessous). Rédige la réponse à lui envoyer sur Messenger, en suivant strictement la consigne interne : remercier, s’inquiéter de sa santé et de celle de sa famille, demander de conserver le produit, l’emballage et le ticket, proposer un appel ou un passage en boutique avec le responsable, annoncer une vérification interne. N’avance aucune cause, ne reconnais aucune responsabilité, ne promets ni remboursement ni geste : ces décisions reviennent au responsable. Ton humain et sobre, vouvoiement, 120 mots au plus. Liste ensuite ce que tu as changé par rapport au brouillon de mon collègue.\n\n<message_cliente>\n[collez le message]\n</message_cliente>\n\n<brouillon>\n[collez le brouillon]\n</brouillon>\n\n<consigne>\n[collez la consigne interne]\n</consigne>',
    materiau: {
      titre: 'Message de la cliente, brouillon et consigne interne (fictifs)',
      texte:
        'MESSAGE DE LA CLIENTE (lundi, 9 h 12)\nBonjour, samedi j’ai acheté chez vous un pâté en croûte de 500 g. Hier midi, en le coupant, j’ai trouvé un morceau de plastique bleu dur d’environ 2 cm, heureusement avant que mes enfants en mangent. Je vous envoie la photo. Je suis très déçue, je suis cliente depuis des années. J’attends des explications.\n\nBROUILLON DU COLLÈGUE\nBonjour madame, désolé c’est surement un bout de bac qui est tombé dans la préparation, c’est notre faute. On vous rembourse le pâté et on vous offre un colis grillades pour se faire pardonner. Bonne journée.\n\nCONSIGNE INTERNE\n- Remercier le client et s’inquiéter de sa santé.\n- Demander de conserver le produit, l’emballage et le ticket.\n- Proposer un appel ou un passage en boutique avec le responsable.\n- Ne jamais avancer de cause ni reconnaître de responsabilité par écrit avant la vérification interne.\n- Remboursement ou geste : décision du responsable uniquement.\n- Remonter l’incident le jour même sur la fiche d’incident (produit, lot, date de fabrication, photo, actions).',
    },
    variantes: {
      simple: 'Rédiger seulement la réponse à la cliente, sans la fiche d’incident.',
      poussee:
        'S’entraîner ensuite à l’appel téléphonique : l’IA joue la cliente, inquiète puis agacée, vous répondez en suivant la consigne, puis elle vous fait un retour sur votre ton.',
    },
    astuces: {
      claude:
        'Demandez d’abord un tableau à deux colonnes : ce que dit le brouillon, ce que permet la consigne. La réponse s’écrit ensuite presque seule.',
      chatgpt:
        'Dans le canevas, raccourcissez la réponse à la cliente sans toucher à la fiche d’incident.',
    },
    vigilance:
      'Ne collez ni le nom, ni le téléphone, ni la photo de la cliente dans l’outil d’IA. Une réponse écrite peut être réutilisée : aucune cause supposée, aucun aveu, aucune promesse sans l’accord du responsable. Si une personne a été blessée ou malade, c’est le responsable qui décide des suites et des services à prévenir.',
    formateur: {
      resultat:
        'Une réponse de 120 mots au plus qui remercie, demande si quelqu’un a été blessé, invite à garder le pâté, l’emballage et le ticket, propose un appel ou un passage avec le responsable et annonce une vérification, sans cause ni promesse ; une fiche d’incident avec le produit, la date d’achat, le lot et la date de fabrication à retrouver, la photo et des actions proposées (vérifier les bacs et ustensiles bleus du laboratoire, examiner le reste du lot).',
      criteres: [
        'La réponse n’avance aucune cause et ne reconnaît aucune faute.',
        'Aucun remboursement ni geste n’est promis ; la décision est renvoyée au responsable.',
        'La cliente sait quoi conserver et comment joindre le responsable.',
        'La fiche d’incident contient les informations de traçabilité à retrouver (lot, date de fabrication).',
      ],
      pieges: [
        'Garder « c’est sûrement un bout de bac » : une hypothèse écrite devient un aveu.',
        'Une réponse froide et juridique, qui oublie de demander si quelqu’un a été blessé.',
        'Coller la photo et le nom de la cliente dans l’outil d’IA.',
      ],
      competence: 'diligence',
      technique: 'structurer',
    },
    motsCles: ['réclamation', 'corps étranger', 'traçabilité', 'service client', 'charcuterie'],
  },
  {
    id: 'alim-devis-mariage',
    titre: 'Rédiger un devis traiteur pour un mariage à partir de la demande d’une cliente',
    metier: 'alimentation',
    niveau: 'intermediaire',
    famille: 'rediger',
    duree: 30,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Vous êtes chargé des devis chez un traiteur de Païta. Une cliente demande par e-mail un buffet pour son mariage à La Foa, avec des adultes, des enfants, une allergie et des convives qui ne mangent pas de porc. Le devis doit partir demain, avec la fiche des quantités pour la cuisine.',
    objectif:
      'Faire poser les bonnes questions à l’IA avant de chiffrer, obtenir un devis fidèle à la grille et des quantités justes, sans promesse sur les allergies.',
    etapes: [
      'Copiez la demande et la grille avec le prompt de départ : l’IA commence par lister les informations manquantes.',
      'Répondez à ses questions avec les seules informations du matériau, et notez ce qu’il faudra demander à la cliente.',
      'Vérifiez à la main le total hors TGC et l’acompte, puis les quantités pour 120 adultes et 20 enfants.',
      'Vérifiez les réponses sur l’arachide et le porc : rien ne doit être garanti sans l’accord du chef.',
      'Demandez la fiche des quantités pour la cuisine, puis faites relire le devis par le responsable avant l’envoi.',
    ],
    prompt:
      'Tu es chargé des devis chez un traiteur de Païta, en Nouvelle-Calédonie. À partir de la demande de la cliente et de notre grille ci-dessous, nous allons préparer un devis en plusieurs étapes.\nÉtape 1 seulement : liste les informations qui manquent ou qui sont à confirmer avant de chiffrer, puis attends mes réponses.\nEnsuite, tu rédigeras le devis : prestations, quantités facturées, prix unitaires et totaux hors TGC, acompte, conditions. Utilise uniquement les prix et les règles de la grille ; écris [à vérifier] pour la TGC ; ne promets rien sur l’allergie ni sur le porc qui ne figure pas dans la grille.\n\n<demande>\n[collez l’e-mail de la cliente]\n</demande>\n\n<grille>\n[collez la grille du traiteur]\n</grille>',
    materiau: {
      titre: 'Demande de la cliente et grille du traiteur (fictives)',
      texte:
        'E-MAIL DE LA CLIENTE\nBonjour, nous nous marions le samedi 14 novembre à La Foa. Nous serons 120 adultes et 20 enfants de moins de 12 ans. Nous voudrions un buffet à 18 h avec du poisson cru, du cerf, de la salade de papaye, du riz et des desserts. Ma tante est allergique à l’arachide, et une partie de la famille ne mange pas de porc. Notre budget est d’environ 600 000 XPF. Pouvez-vous livrer et installer ? Merci, Mme [nom]\n\nGRILLE DU TRAITEUR (prix hors TGC)\n- Formule buffet « Brousse » : 3 500 XPF par adulte, 1 750 XPF par enfant de moins de 12 ans.\n- Quantités par adulte : salade de papaye verte 100 g ; poisson cru au lait de coco 120 g ; civet de cerf 150 g ; riz 80 g (cru) ; gratin de patates douces 150 g ; desserts 2 parts ; 1 petit pain. Enfant : la moitié.\n- Livraison et installation à La Foa : forfait de 25 000 XPF.\n- Service par 2 serveurs de 18 h à 23 h : 48 000 XPF.\n- Acompte de 30 % à la signature ; nombre définitif de convives 10 jours avant.\n- Le civet de cerf est cuisiné avec des lardons : une version sans lardons est possible, sur accord du chef.\n- Le laboratoire utilise de l’arachide (sauce saté) : aucune garantie « sans arachide » ; un plat préparé à part est possible, sur décision du chef.',
    },
    variantes: {
      simple: 'Rédiger seulement le devis, sans la fiche des quantités, pour 120 adultes.',
      poussee:
        'Construire un modèle de devis réutilisable et un tableau des quantités par personne avec formules, puis l’appliquer à un repas d’entreprise de 85 personnes.',
    },
    astuces: {
      claude:
        'Demandez le devis final en fichier Word et la fiche des quantités en fichier Excel, grâce à la création de fichiers.',
      chatgpt:
        'Ouvrez le devis dans le canevas pour modifier une ligne, puis demandez de recalculer les totaux et de montrer le calcul.',
    },
    vigilance:
      'Le nom de la cliente et l’allergie de sa tante sont des données personnelles : écrivez [nom] avant de coller. Vos prix d’achat et vos marges restent hors de l’outil. Toute réponse sur une allergie est validée par le chef : un traiteur qui manipule de l’arachide ne peut pas la garantir absente.',
    formateur: {
      resultat:
        'Un devis de 528 000 XPF hors TGC (repas : 420 000 + 35 000 ; livraison : 25 000 ; service : 48 000), un acompte de 158 400 XPF, la TGC à vérifier, des réponses prudentes sur l’arachide et le porc (version sans lardons et plat à part, sur accord du chef), et une fiche pour 130 parts adultes : 13 kg de salade de papaye, 15,6 kg de poisson cru, 19,5 kg de civet, 10,4 kg de riz cru, 19,5 kg de gratin, 260 parts de dessert, 130 petits pains.',
      criteres: [
        'Le total hors TGC (528 000 XPF) et l’acompte (158 400 XPF) sont justes.',
        'Les quantités tiennent compte des demi-portions des enfants (130 parts adultes).',
        'Aucune garantie « sans arachide » ni « sans porc » n’est donnée sans l’accord du chef.',
        'Le devis n’affirme pas que le budget est respecté tant que la TGC n’est pas vérifiée.',
      ],
      pieges: [
        'Compter les enfants au prix adulte, ou oublier leur demi-portion dans les quantités.',
        'Une TGC calculée à un taux inventé, ou un devis annoncé « dans votre budget » sans la TGC.',
        'Écrire « buffet garanti sans arachide » pour rassurer la cliente.',
      ],
      competence: 'delegation',
      technique: 'decomposer',
    },
    motsCles: ['devis', 'traiteur', 'mariage', 'quantités', 'allergies', 'buffet'],
  },
  {
    id: 'alim-assistant-allergenes',
    titre: 'Créer un assistant qui répond aux vendeurs sur les ingrédients et les allergènes',
    metier: 'alimentation',
    niveau: 'avance',
    famille: 'automatiser',
    duree: 60,
    outils: ['claude', 'chatgpt', 'gemini', 'copilot', 'notebook'],
    outilConseille: 'claude',
    situation:
      'Dans une boulangerie-pâtisserie de Nouméa, les vendeurs répondent de mémoire aux questions sur les ingrédients et les allergènes, et se trompent parfois. La gérante a fait valider une fiche par produit : ingrédients, allergènes, traces possibles, date de mise à jour. Vous créez un assistant qui répond aux vendeurs à partir de ces seules fiches et renvoie vers la responsable au moindre doute.',
    objectif:
      'Créer un assistant avec des instructions permanentes et des documents validés, le tester sur des questions pièges et l’ajuster jusqu’à ce qu’il ne rassure jamais sans source.',
    etapes: [
      'Rassemblez les fiches produits validées et datées, sans aucune donnée client : une fiche par produit.',
      'Créez l’assistant (Projet, GPT, Gem ou agent) avec ces fiches et les instructions du prompt de départ.',
      'Testez-le avec les huit questions du matériau et notez chaque réponse : juste et sourcée, incomplète, ou inventée.',
      'Corrigez les instructions ou complétez les fiches, puis refaites le test.',
      'Rédigez la règle d’usage pour l’équipe : l’assistant aide à retrouver une fiche ; en cas d’allergie grave, le vendeur montre la fiche et appelle la responsable.',
      'Prévoyez la mise à jour : à chaque changement de recette ou de fournisseur, la fiche change avant l’assistant.',
    ],
    prompt:
      'Tu es l’assistant des vendeurs de [nom de la boulangerie], à Nouméa. Tu les aides à retrouver ce que disent les fiches produits validées sur les ingrédients et les allergènes.\n\nRègles :\n- Réponds uniquement à partir des fiches fournies. Cite le nom de la fiche et sa date.\n- Si un produit n’a pas de fiche, ou si la fiche ne répond pas, écris : « Je ne trouve pas cette information : montrez la fiche ou appelez la responsable. » N’invente jamais un ingrédient, un allergène ou l’absence d’un allergène.\n- Ne dis jamais qu’un produit est « sans » allergène ou « sans risque » : cite ce que dit la fiche, y compris les traces possibles.\n- Si le client parle d’une allergie grave ou d’une réaction, commence par : « Allergie grave : appelez la responsable avant toute vente. »\n- Réponses courtes : 5 lignes au maximum, en français simple.',
    materiau: {
      titre: 'Questions de test des vendeurs',
      texte:
        '1. Le pain coco, il y a des œufs dedans ?\n2. Une cliente allergique aux fruits à coque demande si elle peut prendre un éclair au chocolat.\n3. Le flan pâtissier contient du gluten ?\n4. Vous avez quelque chose sans lactose pour un enfant ?\n5. La nouvelle tarte passion meringuée, elle contient quoi ? (elle n’a pas encore de fiche)\n6. Un client dit que son fils a fait une réaction la semaine dernière avec nos croissants. Je lui dis quoi ?\n7. Est-ce que la noix de coco compte comme fruit à coque ?\n8. Le pain complet est bio ?',
    },
    variantes: {
      simple:
        'Charger trois fiches produits dans Gemini Notebook, poser les questions 1, 2, 3 et 5, puis vérifier chaque citation.',
      poussee:
        'Partager l’assistant avec deux vendeurs pendant une semaine, relever les questions sans réponse, compléter les fiches et mesurer la part de réponses justes et sourcées.',
    },
    astuces: {
      claude:
        'Dans un Projet, déposez les fiches dans les connaissances du projet et collez les règles dans ses instructions.',
      chatgpt:
        'Un Projet suffit pour tester ; un GPT se partage avec les vendeurs, mais sa création est payante.',
      gemini: 'Créez un Gem : les règles en instructions, les fiches en fichiers.',
      copilot:
        'Créer un agent (selon la licence) le met à disposition de l’équipe dans Microsoft 365.',
      notebook:
        'Chaque réponse renvoie, par une citation numérotée, au passage exact de la fiche : cliquez pour vérifier avant de répondre au client.',
    },
    vigilance:
      'Un assistant ne garantit jamais l’absence d’un allergène : il aide à retrouver une fiche validée, la responsable décide. Ne chargez que des fiches à jour, sans données de clients. La question 6 (une réaction déjà survenue) relève de la responsable, pas de l’assistant.',
    formateur: {
      resultat:
        'Un assistant qui cite la fiche et sa date pour les questions 1, 2 et 3, signale les traces possibles pour l’éclair, répond qu’il ne trouve pas l’information pour la tarte sans fiche (question 5), renvoie la question 6 à la responsable avec la phrase d’alerte, ne tranche pas la question 7 sans source et ne dit pas « bio » sans fiche (question 8).',
      criteres: [
        'Chaque réponse cite une fiche et sa date, ou dit qu’elle ne trouve pas.',
        'Aucune réponse ne dit « sans allergène » ni « sans risque ».',
        'Les questions 5 et 6 obtiennent un renvoi vers la responsable, pas une réponse inventée.',
        'Les instructions ou les fiches ont été corrigées au moins une fois après le test.',
      ],
      pieges: [
        'Une réponse plausible sur la tarte passion meringuée, tirée des connaissances générales de l’IA.',
        'Une liste de produits « sans lactose » (question 4) qui ne vient d’aucune fiche.',
        'Charger des fiches périmées : l’assistant les cite avec assurance.',
      ],
      competence: 'delegation',
      technique: 'instructions',
    },
    motsCles: ['assistant', 'allergènes', 'fiches produits', 'vendeurs', 'projet', 'gem'],
  },
  {
    id: 'alim-candidature-appel-projets',
    titre: 'Préparer avec Gemini Notebook la candidature d’un producteur à un appel à projets',
    metier: 'alimentation',
    niveau: 'avance',
    famille: 'synthetiser',
    duree: 45,
    outils: ['notebook', 'claude'],
    outilConseille: 'notebook',
    situation:
      'Vous accompagnez une petite entreprise de Sarraméa qui torréfie et vend du café de Nouvelle-Calédonie. Elle veut répondre à un appel à projets (fictif) de la province pour financer du matériel. Le règlement, la grille d’évaluation, le formulaire et ses propres documents font une trentaine de pages : vous les chargez dans un carnet Gemini Notebook pour ne rien rater.',
    objectif:
      'Exploiter un corpus avec des réponses citées : extraire critères, pièces et dates, calculer l’aide possible et repérer les contradictions, sans rien inventer.',
    etapes: [
      'Créez un carnet et chargez comme sources le règlement, la grille d’évaluation, le formulaire et les documents de l’entreprise (présentation, devis, chiffres de vente), sans données personnelles.',
      'Posez les questions du prompt de départ et ouvrez chaque citation pour vérifier le passage.',
      'Comparez vous-même le tableau des pièces au règlement : rien ne doit manquer.',
      'Vérifiez le calcul de l’aide : quelles dépenses sont éligibles, lesquelles sont exclues ?',
      'Faites rédiger le projet de réponse aux questions du formulaire, en citant les sources, puis relisez chaque chiffre.',
      'Listez les questions à poser au service de la province avant le dépôt.',
    ],
    prompt:
      'Réponds uniquement à partir des sources de ce carnet. Pour chaque réponse, cite la source et le passage. Si les sources ne répondent pas, écris « non précisé dans les documents ».\n1. Qui peut candidater ? Quelles dépenses sont éligibles, lesquelles sont exclues ?\n2. Dresse le tableau des pièces à fournir, avec pour chacune : où la trouver dans nos documents, ou « manquante ».\n3. Donne la date et l’heure limites de dépôt, le mode de dépôt, le taux et le plafond de l’aide, puis calcule l’aide possible pour nos devis.\n4. Pour chaque critère de la grille, indique ce qui y répond dans nos documents et ce qui manque.\n5. Signale toute contradiction entre nos documents (chiffres, dates, montants).',
    materiau: {
      titre: 'Extraits du corpus (fictifs)',
      texte:
        'RÈGLEMENT (extrait) : appel à projets « Valorisation des produits du terroir »\n- Bénéficiaires : entreprises de transformation agroalimentaire installées dans la province depuis au moins deux ans.\n- Dépenses éligibles : matériel neuf de transformation et de conditionnement. Exclus : véhicules, travaux sur les bâtiments, matériel d’occasion.\n- Aide : 40 % des dépenses éligibles hors taxes, plafonnée à 3 000 000 XPF.\n- Dépôt : dossier complet, par voie électronique, avant le vendredi 27 novembre à 12 h.\n- Pièces : formulaire signé ; extrait d’inscription au RCS ou au RIDET de moins de trois mois ; devis ; plan de financement ; attestations de régularité fiscale et sociale.\n\nGRILLE D’ÉVALUATION (extrait) : création d’emplois (30 points) ; part de matière première locale (30 points) ; viabilité économique (25 points) ; démarche environnementale (15 points).\n\nNOTES DE L’ENTREPRISE\n- Café torréfié vendu : 4,2 tonnes l’an dernier, dont 70 % de café récolté en Nouvelle-Calédonie.\n- Devis : séchoir neuf 2 900 000 XPF HT ; ensacheuse d’occasion 1 800 000 XPF HT ; pick-up de livraison 3 200 000 XPF HT.\n- Projet : un emploi à mi-temps créé.\n- Plaquette de présentation : « plus de 5 tonnes de café vendues chaque année ».',
    },
    variantes: {
      simple: 'Charger seulement le règlement et poser les questions 1 et 3.',
      poussee:
        'Générer avec les Rapports une FAQ du règlement pour l’équipe, puis un résumé audio à écouter avant le rendez-vous à la province, en notant ce qu’il simplifie trop.',
    },
    astuces: {
      notebook:
        'Cliquez sur chaque citation numérotée avant de recopier un chiffre dans le dossier : elle ouvre le passage exact de la source.',
      claude:
        'Dans un Projet, déposez les mêmes documents : Claude rédige les réponses du formulaire et indique le passage utilisé pour chaque chiffre.',
    },
    vigilance:
      'Le règlement officiel fait foi : vérifiez la date limite, le taux, le plafond et les pièces sur le document publié par la province. Ne chargez pas de pièces contenant des données personnelles (pièces d’identité, relevés bancaires). Un chiffre faux dans un dossier de financement peut le faire rejeter.',
    formateur: {
      resultat:
        'Un tableau des pièces (formulaire, extrait RCS ou RIDET, devis, plan de financement, attestations) et la date limite du vendredi 27 novembre à 12 h, cités ; un calcul juste : seul le séchoir neuf (2 900 000 XPF) est éligible, soit une aide de 1 160 000 XPF, l’ensacheuse d’occasion et le pick-up étant exclus ; la contradiction entre 4,2 tonnes et « plus de 5 tonnes » signalée ; l’emploi à mi-temps présenté tel quel.',
      criteres: [
        'Les dépenses exclues (occasion, véhicule) sont repérées, avec la citation du règlement.',
        'L’aide calculée (40 % de 2 900 000 XPF, soit 1 160 000 XPF) est juste.',
        'La contradiction sur les tonnes vendues est signalée, et tranchée par l’entreprise, pas par l’IA.',
        'Chaque chiffre du projet de dossier a été vérifié dans sa source.',
      ],
      pieges: [
        'Accepter une aide de 3 000 000 XPF calculée sur les 7 900 000 XPF de devis.',
        'Recopier « plus de 5 tonnes » dans le dossier parce que la phrase est plus flatteuse.',
        'Prendre la date limite donnée par l’IA sans ouvrir le règlement.',
      ],
      competence: 'discernement',
      technique: 'sources',
    },
    motsCles: [
      'appel à projets',
      'province',
      'Gemini Notebook',
      'café',
      'candidature',
      'subvention',
    ],
  },
  {
    id: 'alim-marche-repas-cantine',
    titre: 'Analyser le dossier d’un marché de repas scolaires et décider d’y répondre',
    metier: 'alimentation',
    niveau: 'avance',
    famille: 'veiller',
    duree: 45,
    outils: ['notebook', 'claude', 'chatgpt', 'gemini'],
    outilConseille: 'notebook',
    situation:
      'Vous travaillez chez un traiteur de Bourail qui livre déjà des repas d’entreprise. Une commune de la côte Ouest (fictive) lance une consultation pour les repas de deux écoles, en liaison froide. Le dossier compte plusieurs pièces, et la gérante veut savoir, chiffres à l’appui, si l’entreprise peut répondre, et quelles questions poser à l’acheteur.',
    objectif:
      'Extraire d’un dossier de consultation les exigences qui comptent, les confronter aux capacités réelles de l’entreprise avec une grille go/no-go, et vérifier chaque point dans la pièce d’origine.',
    etapes: [
      'Chargez les pièces du dossier dans Gemini Notebook, une source par pièce (ou joignez-les à Claude) ; pour vous entraîner, utilisez les extraits fictifs du matériau.',
      'Faites résumer les exigences avec le prompt de départ, puis ouvrez chaque citation : dates, volumes, livraison, allergies, produits locaux, pénalités.',
      'Faites comparer les exigences aux capacités de l’entreprise et calculer le chiffre d’affaires annuel estimé ; vérifiez le calcul.',
      'Appliquez une grille go/no-go (cœur de métier, capacité de production, livraison, exigences techniques, prix, délai de préparation), chaque critère noté 0, 1 ou 2, avec des seuils que vous fixez vous-même.',
      'Rédigez les questions à envoyer à l’acheteur avant la date limite des questions, et prenez la décision avec la gérante.',
    ],
    prompt:
      'Réponds uniquement à partir des pièces du dossier de consultation chargées. Pour chaque point, cite la pièce et le passage ; écris « non précisé » si l’information manque.\n1. Résume les exigences dans un tableau : objet, durée, volumes, mode et horaires de livraison, exigences sur les menus et les allergies, part de produits locaux, critères de jugement et leur poids, pénalités, date et heure limites de remise, date limite des questions.\n2. Compare ces exigences avec nos capacités ci-dessous et signale chaque écart.\n3. Calcule le chiffre d’affaires annuel maximal au prix plafond, en montrant le calcul.\n4. Liste les questions à poser à l’acheteur.\n\n<capacites>\n[collez les capacités de l’entreprise]\n</capacites>',
    materiau: {
      titre: 'Extraits du dossier de consultation et capacités de l’entreprise (fictifs)',
      texte:
        'RÈGLEMENT DE LA CONSULTATION (extrait)\n- Objet : fourniture et livraison de repas en liaison froide pour les écoles Les Flamboyants et Les Niaoulis.\n- Durée : un an, renouvelable une fois.\n- Remise des offres : lundi 16 novembre à 11 h, par dépôt électronique ; questions écrites jusqu’au lundi 9 novembre.\n- Critères : prix 40 % ; valeur technique 40 % ; part de produits locaux 20 %.\n\nCAHIER DES CLAUSES TECHNIQUES (extrait)\n- Volumes : environ 380 repas par jour scolaire (220 + 160), 140 jours scolaires par an.\n- Livraison chaque jour avant 10 h 30 dans les deux écoles, distantes de 18 km.\n- Menus validés chaque mois par une diététicienne ; repas adaptés pour les enfants qui ont un protocole d’accueil pour allergie, selon les consignes de la commune.\n- Au moins 30 % de produits issus de la production locale, justifiés par les factures.\n- Pénalité : 50 000 XPF par livraison en retard de plus de 30 minutes.\n\nBORDEREAU DES PRIX (extrait) : prix plafond de 650 XPF hors TGC par repas.\n\nCAPACITÉS DE L’ENTREPRISE (notes de la gérante)\n- cuisine actuelle : 250 repas par jour au maximum, en liaison chaude\n- un camion réfrigéré, un chauffeur\n- produits locaux : environ 20 % des achats aujourd’hui\n- pas de diététicienne dans l’équipe\n- dernier repas d’entreprise : 720 XPF de coût de revient par repas',
    },
    variantes: {
      simple: 'Se limiter au tableau des exigences et à la liste des écarts avec les capacités.',
      poussee:
        'Si l’acheteur confirme un lot par école, préparer le mémoire technique pour l’école de 220 repas, avec un menu type sur une semaine à faire valider par une diététicienne et le calcul du prix par repas.',
    },
    astuces: {
      notebook:
        'Chargez chaque pièce comme une source distincte : la citation montre de quelle pièce vient chaque exigence.',
      claude:
        'Joignez les pièces en PDF et demandez un tableau des exigences avec, pour chacune, la pièce et la page du passage.',
    },
    vigilance:
      'La plateforme de publication et les pièces officielles font foi : vérifiez la date limite et le mode de dépôt à la source. Ne collez ni vos prix d’achat ni vos marges dans un outil grand public, et aucune donnée sur les enfants (noms, allergies). Les règles sur l’accueil des enfants allergiques viennent de l’acheteur, pas de l’IA.',
    formateur: {
      resultat:
        'Un tableau des exigences cité pièce par pièce, un chiffre d’affaires maximal de 34 580 000 XPF par an (380 × 140 × 650), et des écarts nets : 250 repas de capacité pour 380 demandés, liaison chaude au lieu de froide, pas de diététicienne, 20 % de produits locaux pour 30 % exigés, un coût de revient récent au-dessus du prix plafond (sur un repas différent). Décision attendue : no-go en l’état, ou go conditionnel si l’acheteur confirme un lot par école ; questions envoyées avant le 9 novembre.',
      criteres: [
        'Les dates (questions jusqu’au 9 novembre, remise le 16 novembre à 11 h) ont été vérifiées dans la pièce d’origine.',
        'Le chiffre d’affaires est juste et présenté comme un maximum.',
        'Les quatre écarts principaux (capacité, liaison froide, diététicienne, produits locaux) sont relevés.',
        'La décision est prise par l’apprenant et la gérante, et argumentée par la grille.',
      ],
      pieges: [
        'Conclure « go » parce que le chiffre d’affaires est attirant, sans voir l’écart de capacité.',
        'Comparer le prix plafond de 650 XPF au coût d’un repas d’entreprise sans dire que les deux repas sont différents.',
        'Laisser l’IA affirmer des règles sur les allergies à l’école qui ne figurent pas dans le dossier.',
      ],
      competence: 'delegation',
      technique: 'sources',
    },
    motsCles: [
      'appel d’offres',
      'restauration collective',
      'cantine',
      'go/no-go',
      'Gemini Notebook',
      'traiteur',
    ],
  },
  {
    id: 'alim-plan-production-semaine',
    titre: 'Bâtir le plan de production d’une semaine avec un jour férié et des commandes',
    metier: 'alimentation',
    niveau: 'avance',
    famille: 'organiser',
    duree: 45,
    outils: ['claude', 'chatgpt', 'gemini', 'copilot'],
    outilConseille: 'claude',
    situation:
      'Vous êtes responsable de production dans une boulangerie de La Foa. La semaine du 9 au 14 novembre compte un jour férié, le mercredi 11, et trois commandes importantes. La gérante veut un plan de production jour par jour, le nombre de fournées et la commande de farine à passer au grossiste avant lundi 10 h.',
    objectif:
      'Enchaîner prévision, plan de production, contrôle des contraintes et calcul des besoins en plusieurs étapes, en vérifiant chaque étape avant la suivante.',
    etapes: [
      'Collez les ventes, les commandes et les règles avec le prompt de départ : l’IA calcule d’abord seulement les ventes prévues en boutique, jour par jour.',
      'Vérifiez deux calculs à la main : la baguette du mercredi 11 (férié) et celle du samedi.',
      'Demandez ensuite le plan de production : ventes prévues plus commandes, puis le nombre de fournées de baguettes chaque matin.',
      'Demandez à l’IA de contrôler son plan règle par règle (fournées avant 7 h, heures de livraison) et de signaler chaque conflit au lieu de le masquer ; contrôlez vous-même le samedi.',
      'Faites calculer le besoin en farine pour les baguettes et la commande à passer, puis vérifiez-les.',
      'Exportez le plan dans un tableur et soumettez-le à la gérante, avec la liste des hypothèses à confirmer.',
    ],
    prompt:
      'Tu es responsable de production dans une boulangerie de La Foa, en Nouvelle-Calédonie. Nous allons préparer le plan de production de la semaine du lundi 9 au samedi 14 novembre, en plusieurs étapes ; ne passe pas à l’étape suivante sans mon accord.\nÉtape 1 : à partir des ventes moyennes ci-dessous, calcule pour chaque produit et chaque jour les ventes prévues en boutique, en appliquant les règles fournies (jour férié, marge de sécurité, arrondi). Ne compte pas encore les commandes. Présente un tableau produit par jour, et montre le calcul de chaque case pour la baguette.\n\n<ventes>\n[collez les ventes moyennes]\n</ventes>\n\n<commandes_et_regles>\n[collez les commandes et les règles]\n</commandes_et_regles>',
    materiau: {
      titre: 'Ventes moyennes des quatre dernières semaines, commandes et règles (fictives)',
      texte:
        'Produit;Lundi;Mardi;Mercredi;Jeudi;Vendredi;Samedi\nBaguette;310;290;300;295;340;420\nPain de mie;18;16;17;16;20;28\nCroissant;110;100;105;100;130;190\nPain au chocolat;100;95;100;95;125;180\nPain coco;40;35;38;36;45;60\n\nCommandes reçues :\n- jeudi 12 : 60 croissants pour une entreprise, retirés à 7 h\n- vendredi 13 : 120 pains au chocolat pour la kermesse d’une école, livrés à 7 h 30\n- samedi 14 : 200 petits pains de 50 g pour un mariage, livrés à 11 h\n\nRègles de la gérante :\n- mercredi 11 novembre, jour férié : ouverture de 6 h à 12 h ; l’an dernier, les ventes ont été de 60 % d’un mercredi habituel, pour tous les produits\n- marge de sécurité : +5 % sur les ventes prévues en boutique (pas sur les commandes), arrondi à l’unité supérieure\n- four : 60 baguettes ou 120 petits pains par fournée ; 8 fournées au plus avant 7 h\n- farine : 0,16 kg par baguette ; stock du lundi matin : 10 sacs de 25 kg ; livraison du grossiste le mardi si la commande part avant lundi 10 h',
    },
    variantes: {
      simple:
        'S’arrêter à l’étape 1 : les ventes prévues en boutique, jour par jour, pour la baguette et le croissant.',
      poussee:
        'Créer un Projet ou une compétence qui refait ce plan chaque semaine à partir du nouveau relevé des ventes et des commandes, avec les mêmes contrôles et la même présentation.',
    },
    astuces: {
      claude:
        'Demandez le plan final en fichier Excel grâce à la création de fichiers, avec des formules pour la marge, l’arrondi et les fournées.',
      chatgpt:
        'L’analyse de données calcule les ventes prévues : demandez à voir le tableau intermédiaire avant le plan de production.',
      gemini:
        'Exportez le plan dans Google Sheets, puis utilisez « Demander à Gemini » pour vérifier la formule qui calcule les fournées.',
    },
    vigilance:
      'Le plan de l’IA est un brouillon : il ignore la météo, les absences et les imprévus du fournil. Vérifiez les calculs, et faites valider par la gérante avant de passer la commande de farine.',
    formateur: {
      resultat:
        'Un plan juste : 326, 305, 189, 310, 357 et 441 baguettes du lundi au samedi (1 928 dans la semaine), soit 6, 6, 4, 6, 6 et 8 fournées ; 165 croissants le jeudi et 252 pains au chocolat le vendredi avec les commandes ; les deux fournées de petits pains du samedi cuites après 7 h, la limite de 8 fournées étant atteinte par les baguettes. Farine pour les baguettes : environ 308,5 kg pour 250 kg en stock, donc au moins 3 sacs à commander avant lundi 10 h, la farine des autres produits restant à calculer.',
      criteres: [
        'Le mercredi férié est calculé à 60 % puis majoré de 5 % (189 baguettes).',
        'Les commandes sont ajoutées sans marge de sécurité.',
        'La limite du samedi (8 fournées avant 7 h) est signalée et respectée grâce à la livraison des petits pains à 11 h.',
        'Le besoin en farine et la commande sont justes, et l’IA signale ce qu’elle n’a pas pu calculer (petits pains, viennoiseries).',
      ],
      pieges: [
        'Appliquer la marge de 5 % aux commandes : 126 pains au chocolat pour la kermesse au lieu de 120.',
        'Croire l’IA quand elle annonce que « toutes les règles sont respectées », sans recompter les fournées du samedi.',
        'Tout demander en une fois et ne plus pouvoir vérifier les ventes prévues.',
      ],
      competence: 'discernement',
      technique: 'decomposer',
    },
    motsCles: [
      'plan de production',
      'boulangerie',
      'jour férié',
      'commandes',
      'farine',
      'fournées',
    ],
  },
];
