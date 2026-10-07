/**
 * Commerce et distribution (vente aux particuliers) : magasin, grande surface, supérette,
 * boutique en ligne. Toutes les personnes, enseignes, prix et ventes sont fictifs.
 */

export const vocabulaire = {
  structure: {
    g: 'm',
    s: 'magasin d’électroménager et de décoration',
    p: 'magasins d’électroménager et de décoration',
  },
  client: { g: 'm', s: 'client', p: 'clients' },
  partenaire: { g: 'm', s: 'importateur', p: 'importateurs' },
  documentCourant: { g: 'f', s: 'fiche produit', p: 'fiches produits' },
  documentLong: {
    g: 'm',
    s: 'règlement du programme de fidélité',
    p: 'règlements des programmes de fidélité',
  },
  reunion: {
    g: 'f',
    s: 'réunion mensuelle de l’équipe de vente',
    p: 'réunions mensuelles de l’équipe de vente',
  },
  offre: { g: 'f', s: 'quinzaine de la climatisation', p: 'quinzaines de la climatisation' },
  poste: { g: 'm', s: 'vendeur conseil', p: 'vendeurs conseils' },
  evenement: { g: 'f', s: 'soirée des clients fidèles', p: 'soirées des clients fidèles' },
  visuel: { g: 'f', s: 'affiche de vitrine', p: 'affiches de vitrine' },
  domaine: 'le commerce de détail',
  motifReclamation: 'un téléviseur livré en panne et un remboursement qui tarde',
  donnees: 'le relevé mensuel des ventes de la boutique en ligne sur les douze derniers mois',
  colonnes: 'Mois;Commandes;Panier moyen (XPF);Chiffre d’affaires (XPF);Produits retournés',
  indicateur: 'l’évolution du panier moyen de la boutique en ligne',
  veille:
    'les prix pratiqués par les magasins concurrents et les nouvelles tendances de consommation',
  sourcesVeille:
    'les catalogues et prospectus des concurrents, la presse locale et les publications de l’ISEE sur les prix',
  jargon: 'la garantie légale, la garantie commerciale et l’extension de garantie',
  procedure: 'le traitement d’un retour de produit en caisse',
  situationTendue: 'un client qui exige d’être remboursé sans ticket de caisse',
  donneesSensibles:
    'les noms, téléphones, adresses de livraison et historiques d’achat des clients de la carte de fidélité',
  corpus: 'les notices, les fiches techniques et les conditions de garantie des fournisseurs',
  publicCible: 'les jeunes couples qui s’installent dans le Grand Nouméa',
  etranger: 'un touriste néo-zélandais qui cherche un adaptateur et un chargeur',
  themeFormation: 'l’accueil en magasin, l’encaissement et les règles de retour des produits',
  tacheRepetitive: 'les réponses aux questions sur le suivi des commandes en ligne',
  planning: 'la réception des livraisons et la mise en rayon de la semaine',
  comparaison: 'deux climatiseurs de même puissance pour conseiller un client',
};

export const exercices = [
  {
    id: 'commerce-avis-clients',
    titre: 'Répondre aux avis clients publiés en ligne',
    metier: 'commerce',
    niveau: 'debutant',
    famille: 'rediger',
    duree: 15,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Vous travaillez dans un magasin d’électroménager et de décoration de Nouméa. Trois avis ont été publiés cette semaine sur la fiche Google du magasin et sur sa page Facebook. Le responsable vous demande d’y répondre avant vendredi, dans le respect des consignes de la maison.',
    objectif:
      'Faire rédiger des réponses publiques adaptées à chaque avis en donnant à l’IA des consignes claires, puis vérifier qu’elle n’a rien promis.',
    etapes: [
      'Copiez les avis et les consignes du magasin avec le prompt de départ.',
      'Lisez les trois réponses : chaque consigne est-elle respectée ?',
      'Vérifiez que la réponse à l’avis 2 ne promet ni date, ni échange, ni remboursement.',
      'Demandez une version plus courte de la réponse à l’avis 3, calme et factuelle.',
      'Choisissez vos trois réponses finales et faites-les valider par le responsable.',
    ],
    prompt:
      'Tu es responsable de la relation client d’un magasin d’électroménager et de décoration à Nouméa. Rédige une réponse à chacun des trois avis ci-dessous, en respectant strictement les consignes du magasin. Ton chaleureux et professionnel, vouvoiement, 60 mots au maximum par réponse. Ne promets rien qui ne figure pas dans les consignes.\n\n<consignes>\n[collez les consignes ici]\n</consignes>\n\n<avis>\n[collez les avis ici]\n</avis>',
    materiau: {
      titre: 'Avis de la semaine et consignes du magasin',
      texte:
        'Avis 1 (5 étoiles, Google) : « Super accueil de Mélissa au rayon cuisine, elle a pris le temps de comparer trois fours avec moi. Livraison à Dumbéa le lendemain. Merci ! »\n\nAvis 2 (2 étoiles, Google) : « Ventilateur acheté il y a 3 semaines, il fait un bruit infernal. Le SAV m’a dit qu’il fallait attendre le passage du technicien du fournisseur, sans date. C’est inadmissible en pleine saison chaude. »\n\nAvis 3 (1 étoile, Facebook) : « Magasin de voleurs, prix plus chers qu’à Sydney !!! Jamais plus. »\n\nConsignes du magasin :\n- on remercie toujours ;\n- on ne promet ni remboursement ni geste commercial en ligne ;\n- on invite à contacter le service client au [numéro du magasin] ;\n- on ne cite jamais le nom d’un client ;\n- on cite le prénom d’un vendeur seulement s’il est d’accord.',
    },
    variantes: {
      simple: 'Répondre seulement à l’avis 2.',
      poussee:
        'Rédiger une charte de réponse aux avis d’une page, avec trois modèles (avis positif, avis négatif fondé, avis injuste), à partager avec l’équipe.',
    },
    astuces: {
      chatgpt:
        'Ouvrez les réponses dans le canevas pour raccourcir une seule réponse sans toucher aux autres.',
      gemini:
        'Demandez trois versions de la réponse à l’avis 3, puis comparez-les avant d’en choisir une.',
    },
    vigilance:
      'Une réponse publique reste en ligne : aucune donnée sur le client (numéro de commande, adresse) et aucun engagement non validé. Le prénom de la vendeuse ne figure dans la réponse qu’avec son accord.',
    formateur: {
      resultat:
        'Trois réponses courtes : un remerciement personnalisé pour l’avis 1 (prénom de la vendeuse seulement avec son accord), une réponse empathique pour l’avis 2 qui invite à contacter le service client sans promettre de date, une réponse calme à l’avis 3 qui ne polémique pas sur les prix.',
      criteres: [
        'Aucune réponse ne promet de remboursement, d’échange ou de date.',
        'La réponse à l’avis 2 reconnaît la gêne et propose un contact direct.',
        'La réponse à l’avis 3 reste courtoise et n’avance aucun chiffre de prix.',
      ],
      pieges: [
        'Accepter « nous allons vous échanger votre ventilateur » : le magasin n’a rien décidé.',
        'Répondre à l’avis 3 par une longue justification sur le fret et les taxes, qui relance la polémique.',
      ],
      competence: 'description',
      technique: 'contexte',
    },
    motsCles: ['avis clients', 'Google', 'Facebook', 'e-réputation', 'réponse'],
  },
  {
    id: 'commerce-affiche-promotion',
    titre: 'Créer l’affiche d’une promotion dans Canva',
    metier: 'commerce',
    niveau: 'debutant',
    famille: 'visuels',
    duree: 20,
    outils: ['canva'],
    outilConseille: 'canva',
    situation:
      'Le magasin lance une promotion sur les climatiseurs et les ventilateurs du 1er au 15 novembre, avant la saison chaude. Il faut une affiche A3 pour la vitrine et une version carrée pour Facebook. Le texte doit être exact : prix, dates, conditions.',
    objectif:
      'Obtenir une affiche lisible avec l’IA de Canva, puis vérifier mot à mot les informations qui engagent le magasin.',
    etapes: [
      'Dans Canva, ouvrez l’IA Canva ou le Design magique et décrivez l’affiche avec le prompt de départ.',
      'Choisissez une proposition et remplacez le texte par les informations exactes du matériau.',
      'Vérifiez les prix, les dates et la mention obligatoire, mot à mot.',
      'Retirez les images hors contexte (neige, sapin, paysage étranger) et les éléments de texte ajoutés par l’IA.',
      'Créez la version carrée pour Facebook (Redimensionnement magique avec Canva Pro, ou à la main), puis relisez-la à nouveau.',
    ],
    prompt:
      'Crée une affiche A3 verticale pour la vitrine d’un magasin d’électroménager à Nouméa. Thème : promotion « Prêts pour la saison chaude » sur les climatiseurs et les ventilateurs, du 1er au 15 novembre. Style : frais et lumineux, bleu et blanc, lisible à 3 mètres, 5 blocs de texte au maximum. Éléments : titre, prix barré du climatiseur mural 9 000 BTU (109 900 XPF, ramené à 89 900 XPF), « -20 % sur les ventilateurs colonne », dates, horaires, mention « Offre valable dans la limite des stocks disponibles. Voir conditions en magasin. »',
    materiau: {
      titre: 'Informations de la promotion',
      texte:
        '- Nom de l’opération : « Prêts pour la saison chaude »\n- Du 1er au 15 novembre, dans la limite des stocks disponibles\n- Climatiseur mural 9 000 BTU : 89 900 XPF au lieu de 109 900 XPF\n- Ventilateurs colonne : -20 %\n- Pose de climatiseur : devis gratuit en magasin\n- Magasin ouvert du lundi au samedi, de 8 h 30 à 18 h\n- Mention obligatoire : « Offre valable dans la limite des stocks disponibles. Voir conditions en magasin. »',
    },
    variantes: {
      simple: 'Créer seulement la version carrée pour Facebook.',
      poussee:
        'Décliner l’opération en affiche, publication, story et étiquettes de rayon, avec la même charte, puis faire relire l’ensemble par un collègue.',
    },
    astuces: {
      canva:
        'Si le magasin a déjà une affiche en image, Calques magiques la rend modifiable : vous ne changez que les prix et les dates.',
    },
    vigilance:
      'Un prix ou une date faux sur une affiche engage le magasin : faites-la relire par le responsable avant impression. N’utilisez ni logo de marque ni photo de produit sans l’accord du fournisseur.',
    formateur: {
      resultat:
        'Une affiche A3 lisible et une version carrée, avec les prix exacts (89 900 XPF au lieu de 109 900 XPF, -20 % sur les ventilateurs colonne), les dates du 1er au 15 novembre, les horaires et la mention obligatoire.',
      criteres: [
        'Prix, réduction et dates sont exacts sur les deux formats.',
        'La mention obligatoire est lisible.',
        'Le titre se lit à distance et l’affiche compte 5 blocs de texte au plus.',
        'Aucune image hors contexte.',
      ],
      pieges: [
        'Une affiche qui annonce « -20 % sur tout » ou « -20 % sur les climatiseurs ».',
        'Un texte de l’IA Canva qui remplace les dates par « ce mois-ci » ou ajoute « livraison offerte ».',
      ],
      competence: 'discernement',
      technique: 'format',
    },
    motsCles: ['affiche', 'promotion', 'Canva', 'vitrine', 'Facebook'],
  },
  {
    id: 'commerce-traduction-croisieristes',
    titre: 'Traduire les panneaux et phrases utiles pour les croisiéristes',
    metier: 'commerce',
    niveau: 'debutant',
    famille: 'corriger',
    duree: 15,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Les jours d’escale des paquebots, des centaines de croisiéristes australiens passent devant votre boutique de produits locaux et de souvenirs du centre-ville de Nouméa. Vous voulez des panneaux en anglais et quelques phrases pour les vendeurs.',
    objectif:
      'Obtenir une traduction naturelle et fidèle, et la contrôler par la retraduction, surtout pour les phrases délicates.',
    etapes: [
      'Copiez les textes du matériau avec le prompt de départ.',
      'Demandez une retraduction en français de chaque panneau pour vérifier que le sens n’a pas changé.',
      'Vérifiez surtout le panneau 4 : il ne doit ni rassurer ni inquiéter plus que l’original.',
      'Demandez une prononciation approchée des phrases des vendeurs, écrite pour un francophone.',
      'Faites relire les panneaux par une personne anglophone si possible, avant impression.',
    ],
    prompt:
      'Tu es traducteur spécialisé dans le commerce et le tourisme. Traduis les textes ci-dessous en anglais, pour des croisiéristes australiens de passage à Nouméa. Style : court, poli, naturel pour un Australien, adapté à un panneau en magasin. Garde les montants en XPF. N’ajoute aucune information. Présente un tableau : texte français, traduction, remarque éventuelle.\n\n<textes>\n[collez les textes ici]\n</textes>',
    materiau: {
      titre: 'Textes à traduire',
      texte:
        'Panneau 1 : « Produits fabriqués en Nouvelle-Calédonie »\nPanneau 2 : « Paiement par carte accepté à partir de 1 000 XPF. Nous acceptons aussi les dollars australiens, au cours affiché en caisse. »\nPanneau 3 : « Merci de ne pas toucher les sculptures : demandez à un vendeur. »\nPanneau 4 : « Les produits à base de plantes ou de bois peuvent être soumis à des contrôles à l’arrivée en Australie. Renseignez-vous avant l’achat. »\nPhrases des vendeurs : « Vous voulez un sac ? » ; « C’est pour offrir ? Je peux faire un paquet cadeau. » ; « À quelle heure repart votre paquebot ? Je vous conseille de garder 30 minutes pour revenir au quai. »',
    },
    variantes: {
      simple: 'Traduire seulement les panneaux 1 et 3.',
      poussee:
        'Ajouter une version en japonais pour les escales de paquebots asiatiques, et la faire vérifier par un locuteur.',
    },
    astuces: {
      chatgpt:
        'Dans le canevas, demandez de raccourcir un seul panneau trop long, sans toucher aux autres.',
      copilot:
        'Avec la licence, Copilot dans Word traduit le document ouvert ; gardez la version française à côté pour comparer.',
    },
    vigilance:
      'Le panneau 4 évoque les règles d’un autre pays : la traduction ne doit pas transformer « peuvent être soumis à des contrôles » en promesse ou en interdiction. Ne convertissez pas les prix en dollars australiens sans le cours réel du jour.',
    formateur: {
      resultat:
        'Un tableau de traductions courtes et naturelles, une retraduction qui confirme le sens, un panneau 4 aussi prudent que l’original (« may be subject to inspection ») et des phrases de vendeurs avec leur prononciation approchée.',
      criteres: [
        'Le sens de chaque panneau est conservé, vérifié par retraduction.',
        'Les montants restent en XPF et la règle du dollar australien est fidèle.',
        'Le panneau 4 garde sa formulation prudente.',
      ],
      pieges: [
        'Une traduction du panneau 4 qui devient « Allowed in Australia » ou « Prohibited in Australia ».',
        'Accepter une conversion des prix en dollars australiens que personne n’a vérifiée.',
      ],
      competence: 'discernement',
      technique: 'critique',
    },
    motsCles: ['traduction', 'anglais', 'croisiéristes', 'tourisme', 'panneaux'],
  },
  {
    id: 'commerce-procedure-ouverture-fermeture',
    titre: 'Rédiger la procédure d’ouverture et de fermeture du magasin',
    metier: 'commerce',
    niveau: 'debutant',
    famille: 'organiser',
    duree: 20,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Vous êtes adjoint du responsable d’une supérette de Dumbéa. Deux nouveaux employés vont faire seuls l’ouverture et la fermeture du samedi. Aujourd’hui, tout est dans la tête du responsable, qui vous a dicté ses notes.',
    objectif:
      'Transformer des notes dictées en check-lists claires, sans que l’IA invente de seuil, de code ou de numéro.',
    etapes: [
      'Copiez les notes avec le prompt de départ.',
      'Vérifiez que chaque consigne des notes figure dans la procédure, dans le bon ordre, et qu’aucune n’a été ajoutée.',
      'Repérez les [à compléter] et notez qui peut vous donner l’information manquante.',
      'Vérifiez que les deux règles de sécurité sont mises en évidence.',
      'Faites relire la procédure par le responsable, puis testez-la avec un collègue qui ne connaît pas le magasin.',
    ],
    prompt:
      'Tu es adjoint du responsable d’une supérette à Dumbéa. À partir des notes ci-dessous, rédige la procédure d’ouverture et de fermeture du magasin pour de nouveaux employés. Format : deux check-lists numérotées, une action par ligne, avec l’heure quand elle est connue, puis un encadré « En cas de problème ». Phrases courtes à l’impératif. Reprends uniquement les consignes des notes : si une information manque (numéro, seuil), écris [à compléter] au lieu de l’inventer.\n\n<notes>\n[collez les notes ici]\n</notes>',
    materiau: {
      titre: 'Notes dictées par le responsable',
      texte:
        'ouverture 6 h 30 : désactiver l’alarme (code dans l’enveloppe au coffre, jamais écrit ailleurs), vérifier les températures des frigos et des congélateurs et les noter dans le cahier (les seuils sont sur l’étiquette de chaque meuble), si une température n’est pas bonne appeler le frigoriste (numéro sur le tableau du bureau), compter le fond de caisse (30 000 XPF), réception du pain à 6 h 45, mise en rayon, retirer les produits à date dépassée et les noter en casse, lever le rideau à 7 h.\nfermeture 20 h : baisser le rideau à 20 h pile, finir de servir les clients présents, compter les caisses, si écart de plus de 2 000 XPF appeler le responsable, ranger la recette au coffre, éteindre les lumières sauf les vitrines réfrigérées, vérifier la porte arrière, mettre l’alarme, sortir par l’arrière.\nimportant : jamais seul pour aller au coffre, ne jamais laisser la porte arrière ouverte pendant la réception.',
    },
    variantes: {
      simple: 'Rédiger seulement la check-list d’ouverture.',
      poussee:
        'Transformer la procédure en affiche plastifiée d’une page et en quiz de cinq questions pour les nouveaux employés.',
    },
    astuces: {
      claude:
        'Demandez la procédure en fichier Word grâce à la création de fichiers, prête à imprimer et à plastifier.',
      copilot:
        'Transformez la procédure en Copilot Page : le responsable peut la compléter directement.',
    },
    vigilance:
      'Une procédure affichée ne contient jamais le code de l’alarme ni celui du coffre. Les seuils de température et les règles d’hygiène viennent de vos consignes internes et des fabricants, pas de l’IA.',
    formateur: {
      resultat:
        'Deux check-lists claires et complètes (ouverture : alarme, températures notées, fond de caisse de 30 000 XPF, pain à 6 h 45, dates, rideau à 7 h ; fermeture : rideau à 20 h, caisses, écart de plus de 2 000 XPF, coffre, porte arrière, alarme) et un encadré « En cas de problème », sans code ni seuil inventé.',
      criteres: [
        'Toutes les consignes des notes figurent, dans le bon ordre.',
        'Aucun code, aucun seuil de température, aucun numéro inventé.',
        'Les deux règles de sécurité (jamais seul au coffre, porte arrière fermée) sont mises en évidence.',
      ],
      pieges: [
        'Accepter des seuils de température ajoutés par l’IA et présentés comme la règle.',
        'Oublier la consigne de sécurité sur la porte arrière pendant la réception.',
      ],
      competence: 'description',
      technique: 'format',
    },
    motsCles: ['procédure', 'ouverture', 'fermeture', 'check-list', 'supérette'],
  },
  {
    id: 'commerce-fiches-produits',
    titre: 'Rédiger des fiches produits pour la boutique en ligne à partir d’un modèle',
    metier: 'commerce',
    niveau: 'intermediaire',
    famille: 'rediger',
    duree: 30,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Le magasin d’électroménager ouvre sa boutique en ligne : il faut 40 fiches produits avant le lancement. Le fournisseur n’a donné que des caractéristiques techniques en vrac. Vous testez la méthode sur trois produits, en donnant à l’IA une fiche modèle déjà validée.',
    objectif:
      'Faire reproduire un format à partir d’un exemple, puis traquer les caractéristiques que l’IA ajoute sans source.',
    etapes: [
      'Copiez la fiche modèle et les données des trois produits avec le prompt de départ.',
      'Comparez chaque fiche avec les données : chaque caractéristique est-elle dans le matériau ?',
      'Surlignez ce que l’IA a ajouté (surface conseillée, classe énergétique, adjectifs comme « silencieux ») et demandez de le retirer.',
      'Demandez un titre optimisé pour la recherche (les mots que tape un client) sans changer les faits.',
      'Rédigez la consigne finale que vous réutiliserez pour les 37 fiches restantes.',
    ],
    prompt:
      'Tu rédiges les fiches produits de la boutique en ligne d’un magasin d’électroménager à Nouméa. Voici une fiche modèle validée : reprends exactement sa structure, son ton et sa longueur. Rédige ensuite une fiche pour chacun des trois produits. Règles : n’utilise que les caractéristiques fournies ; n’ajoute aucune performance, surface, classe énergétique ou qualité non indiquée ; si une information utile manque, signale-la après la fiche, sous le titre « À demander au fournisseur ». Prix en XPF TTC, tels que fournis.\n\n<modele>\n[collez la fiche modèle ici]\n</modele>\n\n<produits>\n[collez les données des produits ici]\n</produits>',
    materiau: {
      titre: 'Fiche modèle validée et données des trois produits',
      texte:
        'FICHE MODÈLE\nTitre : Ventilateur colonne 45 W – 3 vitesses, télécommande\nEn bref : Pour rafraîchir une chambre ou un bureau pendant la saison chaude.\nPoints forts :\n- 3 vitesses et mode nuit\n- Télécommande et minuterie jusqu’à 8 h\n- Oscillation sur 70°\nCaractéristiques : puissance 45 W ; hauteur 105 cm ; garantie 1 an\nPrix : 8 900 XPF TTC\n\nPRODUITS À RÉDIGER\n1. Climatiseur mobile – réf. CM-9 – 9 000 BTU – 3 modes (froid, ventilation, déshumidification) – kit fenêtre fourni – 32 kg – 52 dB – garantie 2 ans – 79 900 XPF TTC\n2. Déshumidificateur – réf. DH-20 – 20 litres par jour – réservoir de 3 litres – arrêt automatique quand le réservoir est plein – garantie 2 ans – 34 900 XPF TTC\n3. Bouilloire inox 1,7 litre – réf. BK-17 – 2 200 W – arrêt automatique – socle pivotant à 360° – garantie 1 an – 4 500 XPF TTC',
    },
    variantes: {
      simple: 'Rédiger une seule fiche, celle de la bouilloire.',
      poussee:
        'Joindre un fichier Excel de dix produits, faire rédiger les fiches par lots de cinq, et tenir un registre des corrections pour améliorer la consigne.',
    },
    astuces: {
      chatgpt:
        'Si vous joignez un fichier Excel, demandez d’abord trois fiches, vérifiez-les, puis la suite par petits lots.',
      claude:
        'Demandez les fiches en fichier Excel grâce à la création de fichiers : une ligne par produit, prête à importer dans la boutique.',
    },
    vigilance:
      'Une caractéristique inventée sur une fiche produit trompe le client et peut engager le magasin. Les prix et les garanties sont vérifiés dans le logiciel de caisse avant publication.',
    formateur: {
      resultat:
        'Trois fiches au format du modèle, fidèles aux données (9 000 BTU, 52 dB, 32 kg, 20 litres par jour, 2 200 W, garanties et prix exacts), sans ajout, avec une liste « À demander au fournisseur » (surface conseillée du climatiseur, consommation électrique).',
      criteres: [
        'Chaque caractéristique figure dans les données.',
        'Le climatiseur n’est présenté ni comme « silencieux » ni comme adapté à une surface précise sans source.',
        'La structure du modèle est respectée sur les trois fiches.',
        'Une consigne réutilisable est rédigée.',
      ],
      pieges: [
        'Laisser passer une surface conseillée ou une classe énergétique inventées.',
        'Accepter un prix arrondi ou converti.',
      ],
      competence: 'discernement',
      technique: 'exemples',
    },
    motsCles: ['fiches produits', 'boutique en ligne', 'e-commerce', 'modèle', 'rédaction'],
  },
  {
    id: 'commerce-ventes-par-rayon',
    titre: 'Analyser les ventes par rayon et comprendre une baisse de marge',
    metier: 'commerce',
    niveau: 'intermediaire',
    famille: 'analyser',
    duree: 30,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Vous êtes adjoint dans une supérette de Dumbéa. Le chiffre d’affaires du troisième trimestre a progressé, mais la marge a baissé. Le responsable veut comprendre pourquoi avant le point de lundi avec l’équipe, et vous transmet le relevé des ventes par rayon.',
    objectif:
      'Faire calculer des évolutions et des taux par l’IA, vérifier les résultats, et distinguer les constats chiffrés des hypothèses.',
    etapes: [
      'Collez le tableau avec le prompt de départ, ou déposez-le en fichier CSV.',
      'Vérifiez à la main deux résultats : la marge totale du trimestre et le taux de marge des boissons.',
      'Relisez le classement des rayons qui expliquent la baisse : est-il cohérent avec les chiffres ?',
      'Repérez les explications présentées comme des faits (« promotions », « concurrence ») et faites-les reformuler en hypothèses.',
      'Demandez trois questions à poser à l’équipe et un graphique simple pour le point du lundi.',
    ],
    prompt:
      'Tu es contrôleur de gestion dans le commerce de détail. Voici les ventes du troisième trimestre d’une supérette, par rayon (montants en XPF, N-1 = même trimestre de l’an dernier). 1) Calcule pour chaque rayon et au total : l’évolution du chiffre d’affaires en %, le taux de marge N-1 et N, l’évolution de la marge en XPF, la casse en % du chiffre d’affaires. 2) Classe les rayons selon leur contribution à la baisse de marge. 3) Propose des hypothèses à vérifier, sans les présenter comme des certitudes. Montre tes calculs dans un tableau.\n\n<ventes>\n[collez le tableau ici]\n</ventes>',
    materiau: {
      titre: 'Ventes du troisième trimestre par rayon (fictives, en XPF)',
      texte:
        'Rayon;CA T3 N-1;CA T3 N;Marge T3 N-1;Marge T3 N;Casse et démarque T3 N\nFruits et légumes;4200000;3900000;1300000;1170000;310000\nBoucherie libre-service;3600000;3750000;970000;900000;260000\nCrèmerie;2900000;3050000;750000;760000;95000\nSurgelés;2100000;2300000;600000;640000;40000\nÉpicerie salée;5800000;5950000;1510000;1490000;60000\nÉpicerie sucrée;3300000;3150000;900000;880000;35000\nBoissons;6100000;6700000;1400000;1340000;55000\nBoulangerie;1900000;2000000;740000;760000;180000\nHygiène et entretien;2600000;2400000;830000;780000;25000\nBazar;800000;650000;280000;230000;40000',
    },
    variantes: {
      simple:
        'Se limiter au total : évolution du chiffre d’affaires, de la marge et du taux de marge.',
      poussee:
        'Construire un petit tableau de bord trimestriel réutilisable, avec un graphique de la contribution de chaque rayon à l’évolution de la marge.',
    },
    astuces: {
      chatgpt:
        'L’analyse de données calcule à partir du fichier et trace le graphique ; demandez aussi le tableau final en fichier Excel.',
      gemini:
        'Dans Google Sheets, « Demander à Gemini » propose les formules du taux de marge, à vérifier cellule par cellule.',
    },
    vigilance:
      'L’IA calcule vite mais peut se tromper de colonne : recalculez au moins un total. Ses explications sont des hypothèses à confirmer avec l’équipe, pas des faits.',
    formateur: {
      resultat:
        'Un tableau juste : chiffre d’affaires en hausse de 1,7 % (de 33,3 à 33,85 millions XPF), marge en baisse de 330 000 XPF (taux de 27,9 % à 26,4 %), expliquée surtout par les fruits et légumes (-130 000 XPF, casse de 310 000 XPF), la boucherie (-70 000 XPF, taux de 26,9 % à 24 %) et les boissons (ventes en hausse de près de 10 %, taux de 23 % à 20 %).',
      criteres: [
        'La marge totale (8 950 000 XPF contre 9 280 000 XPF) est juste.',
        'Le paradoxe des boissons est relevé : plus de ventes, moins de marge.',
        'La casse des fruits et légumes et de la boulangerie est signalée.',
        'Les causes sont présentées comme des hypothèses.',
      ],
      pieges: [
        'Conclure que « tout va bien » parce que le chiffre d’affaires augmente.',
        'Accepter une explication inventée (« arrivée d’un concurrent ») présentée comme un fait.',
      ],
      competence: 'discernement',
      technique: 'decomposer',
    },
    motsCles: ['ventes', 'marge', 'rayons', 'casse', 'tableau'],
  },
  {
    id: 'commerce-client-mecontent',
    titre: 'Reformuler la réponse à un client mécontent d’une livraison',
    metier: 'commerce',
    niveau: 'intermediaire',
    famille: 'corriger',
    duree: 20,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'copilot',
    situation:
      'Un client de la boutique en ligne a reçu à Païta un réfrigérateur rayé, livré avec deux jours de retard. Il a écrit le jour même un e-mail en colère. Votre collègue a préparé une réponse sur la défensive : vous devez la reprendre avant l’envoi, en respectant la politique du magasin.',
    objectif:
      'Faire reformuler une réponse en croisant trois documents (réclamation, brouillon, politique), sans laisser l’IA promettre plus que ce qui est permis.',
    etapes: [
      'Copiez les trois textes du matériau avec le prompt de départ.',
      'Lisez la réponse : reconnaît-elle le retard et la rayure sans rejeter la faute sur le transporteur ou sur le client ?',
      'Vérifiez que les solutions proposées sont exactement celles de la politique, ni plus ni moins.',
      'Vérifiez que la demande de dédommagement est transmise au responsable, sans être promise ni refusée sèchement.',
      'Demandez une version plus courte, et choisissez celle que vous enverriez.',
    ],
    prompt:
      'Tu es responsable du service client d’un magasin d’électroménager de Nouméa qui vend aussi en ligne. Reprends la réponse préparée par mon collègue au client ci-dessous. Objectifs : reconnaître le retard et le désagrément, sans rejeter la faute sur le transporteur ni sur le client ; proposer uniquement les solutions prévues par la politique du magasin ; dire clairement ce que le client doit faire ensuite ; transmettre sa demande de dédommagement au responsable sans la promettre. 150 mots au maximum, vouvoiement, sans faute. Donne ensuite la liste de ce que tu as changé.\n\n<email_client>\n[collez l’e-mail du client]\n</email_client>\n\n<reponse_collegue>\n[collez la réponse du collègue]\n</reponse_collegue>\n\n<politique>\n[collez la politique du magasin]\n</politique>',
    materiau: {
      titre: 'Réclamation, brouillon de réponse et politique du magasin',
      texte:
        'E-MAIL DU CLIENT\nJ’ai commandé un réfrigérateur le 12 septembre, livraison promise le 16, arrivé le 18 sans aucun appel. En plus il est rayé sur le côté ! J’ai posé deux jours de congé pour rien. Je veux un remboursement complet et un dédommagement pour mes congés, sinon je laisse des avis partout et je contacte une association de consommateurs.\n\nRÉPONSE PRÉPARÉE PAR LE COLLÈGUE\nBonjour, le retard est du au transporteur et pas a nous. Pour la rayure vous auriez du la signaler sur le bon de livraison. On ne rembourse pas les congés. Cordialement.\n\nPOLITIQUE DU MAGASIN\n- Défaut d’aspect signalé dans les 48 h après la livraison, avec photos : échange ou remise de 10 %, au choix du client.\n- Retard de livraison : excuses, et remboursement des frais de livraison (3 500 XPF).\n- Aucun dédommagement d’un autre préjudice sans l’accord du responsable.',
    },
    variantes: {
      simple: 'Se limiter à la correction des fautes et du ton, sans croiser la politique.',
      poussee:
        'S’entraîner ensuite à l’appel téléphonique : l’IA joue le client toujours en colère, vous répondez, puis elle vous fait un retour.',
    },
    astuces: {
      copilot:
        'Dans Outlook, lancez « Coaching par Copilot » sur votre version finale : il signale un ton encore défensif.',
      claude:
        'Demandez d’abord un tableau à trois colonnes : ce que veut le client, ce que permet la politique, ce qui relève du responsable.',
    },
    vigilance:
      'Ne collez ni le nom, ni l’adresse, ni le numéro de commande réels du client. Toute somme ou tout geste au-delà de la politique est validé par le responsable avant d’être écrit.',
    formateur: {
      resultat:
        'Une réponse courtoise qui s’excuse du retard, rembourse les frais de livraison (3 500 XPF), propose l’échange ou une remise de 10 % au choix du client sur envoi de photos, et transmet la demande de dédommagement au responsable sans la promettre.',
      criteres: [
        'Les solutions proposées sont exactement celles de la politique.',
        'La faute n’est rejetée ni sur le transporteur ni sur le client.',
        'La demande de dédommagement est transmise, ni promise ni refusée sèchement.',
        'Aucune faute d’orthographe.',
      ],
      pieges: [
        'Accepter « nous vous remboursons intégralement » pour calmer le client.',
        'Garder « vous auriez dû la signaler sur le bon de livraison », qui contredit la politique des 48 heures.',
      ],
      competence: 'discernement',
      technique: 'structurer',
    },
    motsCles: ['réclamation', 'client mécontent', 'service client', 'livraison', 'ton'],
  },
  {
    id: 'commerce-rupture-stock',
    titre: 'Gérer une rupture de stock : plan d’action et messages aux clients',
    metier: 'commerce',
    niveau: 'intermediaire',
    famille: 'organiser',
    duree: 20,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Le conteneur des ventilateurs et des climatiseurs mobiles, attendu le 20 novembre, arrivera au mieux le 10 décembre à cause d’un retard du navire. Il ne reste que 12 ventilateurs en stock, alors que les températures montent, et 23 clients ont réservé un climatiseur mobile.',
    objectif:
      'Faire organiser une situation imprévue par l’IA (actions, priorités, messages par canal) sans laisser passer de promesse incertaine.',
    etapes: [
      'Copiez la situation avec le prompt de départ.',
      'Vérifiez que le plan d’action a un responsable et une échéance pour chaque action.',
      'Vérifiez qu’aucun message ne présente le 10 décembre comme une date certaine, et que le SMS fait 160 caractères au plus.',
      'Vérifiez que les clients qui ont versé un acompte ont trois choix clairs : attendre, être remboursés, choisir un autre produit.',
      'Relisez la liste des décisions à faire valider par le responsable avant tout envoi.',
    ],
    prompt:
      'Tu es adjoint du responsable d’un magasin d’électroménager à Nouméa. Une rupture de stock touche les ventilateurs et les climatiseurs mobiles (situation ci-dessous). 1) Propose un plan d’action priorisé : action, responsable, échéance. 2) Rédige les messages pour chaque canal : SMS de 160 caractères au maximum pour les clients ayant réservé, publication Facebook, affichette en magasin, réponse type au téléphone. Règles : ne présente aucune date comme certaine ; propose aux clients ayant versé un acompte de choisir entre attendre, être remboursés ou choisir un autre produit ; n’annonce aucun prix ni geste commercial non validé. 3) Liste les décisions à faire valider par le responsable.\n\n<situation>\n[collez la situation ici]\n</situation>',
    materiau: {
      titre: 'Situation et contraintes',
      texte:
        '- Conteneur attendu le 20 novembre ; nouvelle date annoncée par le transitaire : « au mieux le 10 décembre », sans garantie\n- Stock restant : 12 ventilateurs colonne, aucun climatiseur mobile\n- 23 clients ont réservé un climatiseur mobile avec un acompte de 10 000 XPF (liste dans le logiciel de caisse)\n- Solution de remplacement possible : 6 climatiseurs muraux en stock (pose à prévoir, prix plus élevé)\n- Un autre fournisseur local pourrait livrer 20 ventilateurs sous 5 jours, à un prix d’achat plus élevé de 15 % (à valider par le responsable)\n- Canaux : SMS aux clients ayant réservé, page Facebook du magasin, affichette en magasin, réponse type au téléphone',
    },
    variantes: {
      simple: 'Se limiter au SMS et à la réponse type au téléphone.',
      poussee:
        'Préparer aussi le message de suivi à envoyer quand la date d’arrivée sera confirmée, et un tableau de suivi des choix des 23 clients.',
    },
    astuces: {
      claude:
        'Demandez le plan d’action dans un artefact sous forme de tableau, à imprimer pour le brief du matin.',
      copilot: 'Transformez le plan en Copilot Page : l’équipe y coche les actions faites.',
    },
    vigilance:
      'Ne donnez pas à l’IA la liste des clients (noms, téléphones) : les SMS partent de votre logiciel. Les remboursements d’acompte suivent les règles du magasin.',
    formateur: {
      resultat:
        'Un plan priorisé (prévenir les 23 clients, décider du réassort local, préparer la solution murale), quatre messages adaptés à leur canal, prudents sur la date, qui laissent le choix aux clients, et une liste de décisions à valider (achat local à +15 %, prix et pose des climatiseurs muraux, modalités de remboursement).',
      criteres: [
        'Aucun message ne promet une livraison le 10 décembre.',
        'Le SMS fait 160 caractères au plus.',
        'Les clients ayant versé un acompte ont trois options claires.',
        'Les décisions à valider sont isolées.',
      ],
      pieges: [
        'Accepter « livraison garantie le 10 décembre ».',
        'Laisser l’IA annoncer une remise sur les climatiseurs muraux que personne n’a décidée.',
      ],
      competence: 'delegation',
      technique: 'decomposer',
    },
    motsCles: ['rupture de stock', 'communication', 'SMS', 'plan d’action', 'clients'],
  },
  {
    id: 'commerce-calendrier-commercial',
    titre: 'Construire le calendrier commercial de l’année avec des dates vérifiées',
    metier: 'commerce',
    niveau: 'avance',
    famille: 'veiller',
    duree: 45,
    outils: ['claude', 'chatgpt', 'gemini', 'copilot'],
    outilConseille: 'gemini',
    situation:
      'Vous préparez le calendrier commercial de l’an prochain pour un magasin d’équipement de la maison de Nouméa : rentrée scolaire de février, saison chaude, fêtes de fin d’année, foires et événements locaux. L’IA connaît mal les événements calédoniens et peut inventer des dates.',
    objectif:
      'Faire une recherche documentée, vérifier chaque date dans une source fiable, puis transformer le résultat en calendrier exploitable et en rappel automatique.',
    etapes: [
      'Lancez une recherche avec le prompt de départ et obtenez un tableau des temps forts avec leurs sources.',
      'Vérifiez chaque date dans une source officielle ou auprès de l’organisateur : calendrier scolaire de la Nouvelle-Calédonie, jours fériés, sites des foires et des communes.',
      'Classez les résultats : vérifié, à confirmer, introuvable.',
      'Ajoutez les contraintes du magasin (matériau) et demandez un calendrier de 8 opérations au plus, avec les dates de commande et de préparation.',
      'Contrôlez le calcul des dates de commande, 10 semaines avant chaque opération.',
      'Programmez un rappel mensuel qui vous liste les opérations à préparer (tâche planifiée ou action programmée).',
    ],
    prompt:
      'Tu es responsable marketing d’un magasin d’équipement de la maison à Nouméa. Recherche les temps forts commerciaux de l’année [année] en Nouvelle-Calédonie : rentrée scolaire, vacances scolaires, jours fériés, fête des mères et des pères, saison chaude, fêtes de fin d’année, foires et salons locaux (par exemple la Foire de Bourail). Pour chaque événement, donne la date ou la période, la source consultée avec son lien, et ton niveau de certitude. Si tu ne trouves pas de source pour une date, écris « à confirmer » : n’invente aucune date. Présente le résultat dans un tableau trié par mois.',
    materiau: {
      titre: 'Contraintes du magasin',
      texte:
        '- Arrivages : un conteneur par mois, commande à passer 10 semaines avant l’opération\n- Affiches et publications : à préparer 3 semaines avant chaque opération\n- Congés de l’équipe : jamais plus de 2 vendeurs absents en même temps, aucun congé en décembre\n- Opérations qui ont bien marché l’an dernier : rentrée (fournitures de bureau, petits meubles), climatisation (novembre), fête des mères (petit électroménager), Noël (tout le magasin)\n- Budget publicitaire : 8 opérations au maximum dans l’année',
    },
    variantes: {
      simple: 'Se limiter aux trois temps forts les plus importants, avec leurs dates vérifiées.',
      poussee:
        'Transformer le calendrier en tableau partagé avec les commandes de conteneurs, les supports à créer et le responsable de chaque opération.',
    },
    astuces: {
      gemini:
        'Lancez Deep Research, exportez le rapport dans Google Docs pour l’annoter, puis utilisez « Programmer des actions » pour le rappel mensuel.',
      claude:
        'Activez la recherche web ; les tâches planifiées (payantes) peuvent envoyer le rappel mensuel.',
      chatgpt:
        'La recherche approfondie (limitée en gratuit) donne un rapport sourcé ; une tâche planifiée (payante) relance le rappel chaque mois.',
    },
    vigilance:
      'Une date fausse sur une affiche ou dans une commande de conteneur coûte cher : ne gardez que des dates vérifiées dans une source officielle ou auprès de l’organisateur.',
    formateur: {
      resultat:
        'Un tableau des temps forts dont chaque date est classée (vérifiée, à confirmer, introuvable), un calendrier de 8 opérations au plus avec les dates de commande (10 semaines avant) et de préparation des supports (3 semaines avant), et un rappel mensuel programmé.',
      criteres: [
        'Chaque date retenue a été vérifiée dans une source ouverte par l’apprenant.',
        'Les dates de commande et de préparation sont calculées à partir des contraintes.',
        'Le calendrier respecte les 8 opérations et l’absence de congés en décembre.',
      ],
      pieges: [
        'Reprendre une date de métropole (vacances scolaires, fête des mères) sans vérifier le calendrier calédonien.',
        'Garder une foire « annuelle » dont l’IA a inventé la date ou le lieu.',
        'Oublier que la commande du conteneur de Noël doit partir dès la mi-septembre.',
      ],
      competence: 'diligence',
      technique: 'sources',
    },
    motsCles: ['calendrier commercial', 'temps forts', 'rentrée', 'foires', 'veille'],
  },
  {
    id: 'commerce-assistant-service-client',
    titre: 'Créer un assistant qui prépare les réponses du service client en ligne',
    metier: 'commerce',
    niveau: 'avance',
    famille: 'automatiser',
    duree: 60,
    outils: ['claude', 'chatgpt', 'gemini', 'copilot'],
    outilConseille: 'claude',
    situation:
      'La boutique en ligne reçoit chaque jour des messages sur Facebook et par e-mail : livraison à Koné ou aux îles, retrait en magasin, garantie, retour d’un produit. Vous créez un assistant qui prépare les réponses à partir des conditions de vente et de la foire aux questions du magasin ; un vendeur les relit avant l’envoi.',
    objectif:
      'Créer un assistant avec des instructions permanentes et des documents de référence, le tester sur des cas variés et l’améliorer jusqu’à ce qu’il n’invente plus rien.',
    etapes: [
      'Rassemblez les documents de référence, sans donnée client : conditions générales de vente, grille des délais et frais de livraison, politique de retour, foire aux questions.',
      'Créez l’assistant (Projet, GPT, Gem ou agent) avec ces documents et les instructions du prompt de départ.',
      'Testez-le avec les huit messages du matériau et notez chaque réponse : juste, incomplète ou inventée.',
      'Corrigez les instructions et complétez les documents (c’est souvent la foire aux questions qui manque), puis refaites le test.',
      'Écrivez la règle d’usage pour l’équipe : qui relit, et ce que l’assistant ne traite jamais (litige, remboursement hors politique).',
    ],
    prompt:
      'Tu es l’assistant du service client de la boutique en ligne de [nom du magasin], à Nouméa. Tu prépares des projets de réponse aux messages des clients ; un vendeur les relit avant envoi.\n\nRègles :\n- Réponds uniquement à partir des documents fournis (conditions de vente, livraisons, retours, foire aux questions) et indique le document utilisé.\n- Si l’information n’y est pas, écris : « Je vérifie et je reviens vers vous » et signale la question au vendeur. N’invente jamais un délai, un prix, un stock ni une garantie.\n- Ne promets aucun remboursement ni geste commercial : propose de transmettre au responsable.\n- Ne demande jamais de numéro de carte bancaire.\n- Ton : chaleureux et simple, vouvoiement, 80 mots au maximum. Si le client écrit en anglais, réponds en anglais.',
    materiau: {
      titre: 'Messages de test',
      texte:
        '1. Bonjour, vous livrez à Lifou ? Combien ça coûte ?\n2. Le frigo que j’ai commandé lundi arrive quand à Koné ?\n3. Je peux venir chercher ma commande au magasin samedi ?\n4. Mon micro-ondes ne marche plus après 13 mois, il est encore garanti ?\n5. Hi, do you ship to Ouvéa? I am staying there for two weeks.\n6. Vous avez encore le climatiseur mobile en stock ?\n7. Je veux un remboursement, la couleur ne me plaît pas, je l’ai ouvert hier.\n8. C’est scandaleux, troisième fois que j’appelle ! Je veux parler au patron.',
    },
    variantes: {
      simple:
        'Se contenter d’un prompt réutilisable enregistré dans un document, testé sur les messages 1, 3 et 7.',
      poussee:
        'Ajouter des exemples de réponses validées dans les documents, puis faire évaluer l’assistant par deux vendeurs sur dix nouveaux messages réels anonymisés.',
    },
    astuces: {
      claude:
        'Dans un Projet, déposez les documents dans les connaissances du projet et collez les règles dans ses instructions.',
      chatgpt:
        'Un Projet suffit pour vous ; un GPT (création payante) peut être partagé avec les vendeurs.',
      gemini: 'Créez un Gem avec les règles en instructions et les documents en fichiers.',
      copilot: 'Si votre licence le permet, créez un agent et partagez-le avec l’équipe.',
    },
    vigilance:
      'L’assistant ne connaît ni le stock en temps réel ni le suivi des commandes : il ne doit jamais les inventer (messages 2 et 6). Aucun document chargé ne contient de données clients.',
    formateur: {
      resultat:
        'Un assistant qui répond juste aux questions couvertes par les documents (livraison, retrait, retours, garantie), répond en anglais au message 5, renvoie vers un vendeur pour le stock et le suivi de commande, et transmet le message 8 au responsable sans se justifier.',
      criteres: [
        'Les réponses citent le document utilisé.',
        'Aucun stock ni délai de commande inventé (messages 2 et 6).',
        'Le message 7 reçoit la politique de retour exacte, sans promesse de remboursement.',
        'L’apprenant a amélioré ses instructions ou ses documents après le premier test.',
      ],
      pieges: [
        'Se satisfaire d’une réponse plausible sur la garantie (message 4) qui ne vient d’aucun document.',
        'Charger un export de commandes avec les noms et adresses des clients.',
      ],
      competence: 'delegation',
      technique: 'instructions',
    },
    motsCles: ['assistant', 'service client', 'boutique en ligne', 'projet', 'gem'],
  },
  {
    id: 'commerce-carnet-notices',
    titre: 'Former les vendeurs avec un carnet Gemini Notebook sur les notices des produits',
    metier: 'commerce',
    niveau: 'avance',
    famille: 'synthetiser',
    duree: 45,
    outils: ['notebook'],
    outilConseille: 'notebook',
    situation:
      'Le rayon climatisation compte 15 modèles de 4 marques. Les vendeurs se trompent souvent sur l’entretien, la garantie ou la pose, et les clients repartent avec de mauvaises informations. Vous rassemblez les notices et les conditions de garantie dans un carnet Gemini Notebook pour en tirer une foire aux questions et un quiz.',
    objectif:
      'Exploiter un corpus de documents techniques avec des réponses citées, et en tirer des supports de formation vérifiés.',
    etapes: [
      'Créez un carnet et chargez comme sources les notices en PDF et les conditions de garantie des fournisseurs (documents publics, sans donnée client).',
      'Collez le prompt de départ avec les questions des clients, et ouvrez chaque citation pour vérifier le passage.',
      'Générez un rapport de type FAQ pour les vendeurs, puis relisez chaque réponse avec sa source.',
      'Générez des fiches et un quiz, et testez-les avec deux vendeurs.',
      'Générez un résumé audio à écouter avant l’ouverture, et notez ce qu’il simplifie trop.',
      'Listez les questions auxquelles les notices ne répondent pas, à poser aux fournisseurs.',
    ],
    prompt:
      'Réponds aux questions ci-dessous uniquement à partir des notices et des conditions de garantie chargées. Pour chaque réponse, indique la marque et le modèle concernés, cite le passage, et signale si les marques diffèrent. Si les sources ne répondent pas, écris « non précisé dans les notices ».\n\n<questions>\n[collez les questions ici]\n</questions>',
    materiau: {
      titre: 'Questions fréquentes des clients',
      texte:
        '1. Tous les combien faut-il nettoyer les filtres ?\n2. La garantie est-elle valable si la pose n’est pas faite par un installateur agréé ?\n3. Quelle surface peut rafraîchir chaque modèle ?\n4. Peut-on laisser le climatiseur allumé jour et nuit ?\n5. Que faire en cas d’alerte cyclonique ?\n6. Quelle est la consommation électrique en mode économique ?',
    },
    variantes: {
      simple: 'Charger les notices d’une seule marque et traiter les questions 1 à 3.',
      poussee:
        'Partager le carnet avec l’équipe pour qu’il serve de base de questions-réponses au comptoir, et le mettre à jour à chaque nouveau modèle.',
    },
    astuces: {
      notebook:
        'Le quiz et les fiches se génèrent en un clic depuis les sources : relisez-les avant de les distribuer, une question peut être ambiguë.',
    },
    vigilance:
      'Les notices peuvent dater : vérifiez auprès des fournisseurs les conditions de garantie en vigueur en Nouvelle-Calédonie, qui peuvent différer de celles d’autres pays. Le résumé audio simplifie : ce n’est pas une source.',
    formateur: {
      resultat:
        'Une foire aux questions sourcée pour les vendeurs, un quiz testé, et une liste de questions sans réponse dans les notices (alerte cyclonique, conditions de garantie locales), avec les écarts entre marques mis en évidence.',
      criteres: [
        'Chaque réponse de la foire aux questions renvoie à une notice précise.',
        'Les différences entre marques sont signalées, pas fondues en une règle générale.',
        'Les questions sans réponse sont listées pour les fournisseurs.',
        'Le quiz a été relu et testé.',
      ],
      pieges: [
        'Généraliser la règle d’une marque à toutes les autres.',
        'Prendre le résumé audio pour une source fiable : il simplifie et peut déformer.',
      ],
      competence: 'discernement',
      technique: 'sources',
    },
    motsCles: ['Gemini Notebook', 'notices', 'formation des vendeurs', 'quiz', 'garantie'],
  },
  {
    id: 'commerce-planning-vendeurs-fetes',
    titre: 'Établir et contrôler le planning des vendeurs pendant les fêtes',
    metier: 'commerce',
    niveau: 'avance',
    famille: 'organiser',
    duree: 45,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Du 14 au 31 décembre, le magasin d’électroménager ferme à 20 h et ouvre le dimanche matin. Dix vendeurs, des contrats différents, des congés déjà accordés et une fréquentation qui double l’après-midi : vous devez proposer un planning, puis le faire contrôler avant de l’afficher.',
    objectif:
      'Faire produire un planning complexe par étapes, le faire contrôler règle par règle, et obtenir de l’IA qu’elle signale une impossibilité au lieu de la masquer.',
    etapes: [
      'Collez les contraintes et le tableau des vendeurs avec le prompt de départ : l’IA traite d’abord la semaine du 14 au 20 décembre.',
      'Demandez à l’IA de contrôler son planning règle par règle et de lister les écarts ; contrôlez vous-même trois vendeurs.',
      'Comparez les heures nécessaires et les heures prévues par les contrats : que propose l’IA si elles ne suffisent pas ?',
      'Une fois la première semaine juste, faites produire les deux semaines suivantes avec la même méthode, en tenant compte du 24, du 25 et du 31 décembre.',
      'Demandez le planning final en fichier Excel, avec le total d’heures par vendeur et par semaine.',
      'Listez les heures supplémentaires et les choix à faire valider par le responsable.',
    ],
    prompt:
      'Tu es responsable adjoint d’un magasin d’électroménager à Nouméa. Je dois établir le planning des vendeurs du 14 au 31 décembre. Commence par la semaine du 14 au 20 décembre uniquement. Tableau : une ligne par vendeur, une colonne par jour, horaires de chaque vendeur. Respecte les besoins, les indisponibilités, les compétences et les règles ci-dessous. Si une contrainte est impossible à respecter, dis-le et propose des solutions au lieu de la contourner. Termine par le total d’heures de chaque vendeur et la liste des écarts.\n\n<contraintes>\n[collez les contraintes ici]\n</contraintes>\n\n<vendeurs>\n[collez le tableau des vendeurs ici]\n</vendeurs>',
    materiau: {
      titre: 'Contraintes et vendeurs (fictifs)',
      texte:
        'Ouverture : du lundi au samedi de 8 h 30 à 20 h, le dimanche de 8 h 30 à 12 h 30 ; fermé le 25 décembre ; fermeture à 17 h le 24 et le 31.\nBesoins : 4 vendeurs le matin (8 h 30 – 14 h), 7 l’après-midi (14 h – 20 h), dont toujours 1 en climatisation et 2 en caisse ; le dimanche, 4 vendeurs.\nRègles internes : pas plus de 6 jours de travail d’affilée ; durée hebdomadaire du contrat respectée, heures supplémentaires à valider par le responsable.\n\nVendeur;Contrat (h/semaine);Indisponibilités du 14 au 31 décembre;Compétences\nAline;35;aucune;caisse, électroménager\nBruno;35;congé du 24 au 26;climatisation, caisse\nCéline;24;pas le dimanche;décoration\nDavid;35;aucune;électroménager, livraison\nÉmilie;20;matins uniquement;caisse\nFabrice;35;congé du 28 au 31;climatisation\nGaëlle;35;aucune;décoration, caisse\nHugo;28;pas après 18 h;électroménager\nInès;35;indisponible le 15 et le 16;caisse, décoration\nJoël;35;aucune;climatisation, livraison',
    },
    variantes: {
      simple: 'Planifier seulement le samedi 19 décembre, la journée la plus chargée.',
      poussee:
        'Construire un modèle de planning réutilisable en Excel, avec des formules qui signalent automatiquement les dépassements d’heures et les créneaux sous-dotés.',
    },
    astuces: {
      claude:
        'Demandez le planning en fichier Excel grâce à la création de fichiers, avec une formule de total par vendeur.',
      gemini:
        'Dans Google Sheets, « Demander à Gemini » propose la formule qui totalise les heures de chaque vendeur.',
      copilot:
        'Avec la licence, Copilot dans Excel ajoute les totaux par vendeur et aide à repérer les dépassements.',
    },
    vigilance:
      'Les règles sur le travail du dimanche, les jours fériés, les repos et les heures supplémentaires sont à vérifier pour votre magasin (Code du travail de la Nouvelle-Calédonie, accords applicables) : l’IA ne les connaît pas. Ne donnez à l’IA que des prénoms, sans motif d’absence.',
    formateur: {
      resultat:
        'Un planning semaine par semaine, contrôlé, qui fait apparaître que les besoins (environ 400 heures par semaine) dépassent les heures des contrats (317 heures) : l’IA doit le signaler et proposer des options (heures supplémentaires à valider, renfort temporaire, besoins revus) au lieu de dépasser les contrats sans le dire.',
      criteres: [
        'L’écart entre besoins et heures disponibles est repéré et chiffré.',
        'Aucune indisponibilité n’est ignorée (Inès les 15 et 16, matins d’Émilie, Hugo jamais après 18 h).',
        'Chaque créneau a au moins 1 vendeur en climatisation et 2 en caisse, ou l’écart est signalé.',
        'Les heures supplémentaires sont listées pour validation, pas glissées dans le planning.',
      ],
      pieges: [
        'Accepter un planning « complet » où plusieurs vendeurs dépassent leur contrat sans que ce soit signalé.',
        'Demander les trois semaines d’un coup : les erreurs se multiplient et deviennent invisibles.',
        'Oublier que la deuxième semaine compte deux journées particulières (fermeture à 17 h le 24, magasin fermé le 25).',
      ],
      competence: 'discernement',
      technique: 'decomposer',
    },
    motsCles: ['planning', 'vendeurs', 'fêtes de fin d’année', 'horaires', 'Excel'],
  },
];
