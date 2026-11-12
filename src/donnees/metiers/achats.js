/**
 * Achats et approvisionnement : consultation des fournisseurs, comparaison d’offres, commandes,
 * réception, suivi des stocks, dans un contexte insulaire (fret maritime, délais, ruptures).
 * Toutes les personnes, entreprises, adresses et sommes sont fictives.
 */

export const vocabulaire = {
  structure: { g: 'm', s: 'service achats', p: 'services achats' },
  client: { g: 'm', s: 'responsable de service', p: 'responsables de service' },
  partenaire: { g: 'm', s: 'fournisseur', p: 'fournisseurs' },
  documentCourant: { g: 'f', s: 'fiche fournisseur', p: 'fiches fournisseurs' },
  documentLong: {
    g: 'm',
    s: 'guide des achats de l’entreprise',
    p: 'guides des achats de l’entreprise',
  },
  reunion: {
    g: 'f',
    s: 'revue mensuelle des fournisseurs',
    p: 'revues mensuelles des fournisseurs',
  },
  offre: {
    g: 'f',
    s: 'vente du matériel réformé de l’entreprise',
    p: 'ventes du matériel réformé de l’entreprise',
  },
  poste: { g: 'm', s: 'acheteur', p: 'acheteurs' },
  evenement: {
    g: 'f',
    s: 'rencontre annuelle des fournisseurs locaux',
    p: 'rencontres annuelles des fournisseurs locaux',
  },
  visuel: {
    g: 'f',
    s: 'affiche d’information',
    p: 'affiches d’information',
  },
  domaine: 'les achats et l’approvisionnement',
  motifReclamation: 'une livraison en retard et un article reçu non conforme',
  donnees: 'le journal des commandes fournisseurs des trois derniers mois',
  colonnes:
    'Date;Fournisseur;Article;Quantité;Montant (XPF);Délai promis (jours);Délai réel (jours)',
  indicateur: 'le taux de livraisons reçues dans les délais par fournisseur',
  veille: 'les nouveaux fournisseurs et les produits de substitution pour les articles sensibles',
  sourcesVeille:
    'l’annuaire des entreprises de la CCI, la presse économique locale et les annonces des fournisseurs',
  jargon: 'les conditions de livraison et le coût total rendu Nouméa',
  procedure: 'le traitement d’un litige avec un fournisseur',
  situationTendue: 'un fournisseur qui annonce une rupture la veille d’une livraison urgente',
  donneesSensibles:
    'les tarifs négociés, les conditions des contrats et les coordonnées des fournisseurs',
  corpus:
    'les fiches techniques des articles, les procédures de réception et les notes du service achats',
  publicCible: 'les particuliers et les entreprises du Grand Nouméa',
  etranger: 'un fournisseur australien qui prépare une première livraison à Nouméa',
  themeFormation: 'la passation d’une commande et la réception des marchandises',
  tacheRepetitive: 'la relance des fournisseurs dont la livraison est en retard',
  planning: 'les réceptions de marchandises de la semaine sur deux quais',
  comparaison: 'deux transitaires pour l’acheminement des commandes d’Australie',
};

export const exercices = [
  {
    id: 'achats-demande-de-prix',
    titre: 'Rédiger une demande de prix à trois fournisseurs',
    metier: 'achats',
    niveau: 'debutant',
    famille: 'rediger',
    duree: 15,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'copilot',
    situation:
      'Vous êtes acheteur ou acheteuse dans une entreprise de distribution de Ducos. Le magasin central a besoin de gants de manutention pour l’entrepôt, et votre responsable veut consulter un fournisseur de Nouméa, un fournisseur de Brisbane et un fournisseur de métropole avant de commander.',
    objectif:
      'Obtenir une demande de prix claire, identique pour les trois fournisseurs, qui permettra de comparer les réponses sans nouvel e-mail de précisions.',
    etapes: [
      'Lisez le besoin du magasin central et repérez ce qui manque pour qu’un fournisseur puisse chiffrer.',
      'Collez les notes dans votre outil d’IA avec le prompt de départ, en complétant les [crochets].',
      'Vérifiez que la demande précise l’article, la quantité, la livraison à Ducos, la date souhaitée et la date limite de réponse.',
      'Contrôlez que la même liste d’informations est demandée aux trois fournisseurs : prix, fret, délai, validité, conditions de paiement.',
      'Demandez une version en anglais pour le fournisseur de Brisbane, sans changer le fond, et vérifiez-la par une retraduction.',
    ],
    prompt:
      'Tu es acheteur dans une entreprise de distribution de Ducos, en Nouvelle-Calédonie. Rédige une demande de prix par e-mail à partir des notes ci-dessous. Elle sera envoyée à trois fournisseurs : un à Nouméa, un à Brisbane et un en métropole.\n\nL’e-mail doit :\n- présenter l’entreprise et le besoin en deux phrases ;\n- demander dans une liste numérotée : prix unitaire, prix total, coût du fret et de l’assurance jusqu’à Nouméa, délai de livraison, durée de validité de l’offre, conditions de paiement ;\n- reprendre la date limite de réponse indiquée dans les notes ;\n- rester courtois et court (120 mots au maximum).\n\nN’invente aucune information absente des notes ; s’il en manque une, laisse un [crochet]. Ne parle ni de droits de douane ni de taxes : nous les calculerons nous-mêmes.\n\n<notes>\n[collez les notes ici]\n</notes>',
    materiau: {
      titre: 'Notes du magasin central',
      texte:
        'besoin : gants de manutention enduits, taille 9 et 10 (moitié-moitié)\nquantité : 600 paires pour 6 mois\nlivraison : entrepôt de Ducos, quai 2, du lundi au jeudi matin\nsouhaité : avant le 30 novembre\nnorme CE demandée, fiche technique à joindre\nquestion : possibilité de livrer en 2 fois ?\nacheteur : [votre prénom et nom], service achats\nréponse attendue avant le 23/10',
    },
    variantes: {
      simple: 'Rédiger la demande pour un seul fournisseur, de Nouméa.',
      poussee:
        'Ajouter un tableau vide de réponse que chaque fournisseur remplit, puis faire préparer le relevé pour comparer les trois retours.',
    },
    astuces: {
      copilot:
        'Dans Outlook, partez d’un « Brouillon avec Copilot », puis réglez la longueur ; envoyez la même version aux trois fournisseurs.',
      chatgpt:
        'Ouvrez l’e-mail dans le canevas pour raccourcir ou reformuler un seul paragraphe sans tout régénérer.',
    },
    vigilance:
      'Ne collez ni tarifs négociés ni noms de contacts : une demande de prix ne contient que le besoin. Ne laissez pas l’IA ajouter un engagement d’achat ou une promesse de commande.',
    formateur: {
      resultat:
        'Un e-mail de 120 mots au plus, avec la même liste de six informations demandées, la date limite du 23 octobre, la livraison à Ducos et la question de la livraison en deux fois.',
      criteres: [
        'Le besoin est chiffré : 600 paires, tailles 9 et 10, norme CE, avant le 30 novembre.',
        'Les six informations à fournir (dont fret et validité de l’offre) sont demandées explicitement.',
        'Aucune promesse de commande ni aucun taux de taxe n’a été ajouté par l’IA.',
      ],
      pieges: [
        'Oublier de demander le fret et l’assurance, ce qui rendra les offres étrangères incomparables avec l’offre locale.',
        'Laisser l’IA écrire « nous passerons commande rapidement », un engagement que personne n’a décidé.',
      ],
      competence: 'description',
      technique: 'format',
    },
    motsCles: ['demande de prix', 'consultation', 'fournisseurs', 'e-mail', 'devis'],
  },
  {
    id: 'achats-tableau-comparatif-devis',
    titre: 'Réunir trois devis dans un même tableau comparatif',
    metier: 'achats',
    niveau: 'debutant',
    famille: 'analyser',
    duree: 20,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Le cabinet d’expertise comptable où vous êtes assistant achats, à Nouméa, veut remplacer dix chaises de bureau. Vous avez reçu trois devis rédigés chacun à sa façon, et votre directrice veut un tableau pour trancher demain matin.',
    objectif:
      'Faire extraire des données de trois textes différents dans un tableau unique, et repérer ce qui n’est pas comparable en l’état.',
    etapes: [
      'Lisez les trois devis du matériau et notez, sans l’IA, ce qui change d’un devis à l’autre.',
      'Collez-les dans votre outil d’IA avec le prompt de départ.',
      'Lisez le tableau : une ligne par fournisseur, les mêmes colonnes pour tous.',
      'Vérifiez deux prix et un total contre les devis d’origine.',
      'Lisez la liste des points non comparables et préparez les questions à poser aux fournisseurs.',
    ],
    prompt:
      'Tu es assistant achats dans un cabinet d’expertise comptable à Nouméa. Voici trois devis pour dix chaises de bureau. Rassemble-les dans un tableau comparatif avec une ligne par fournisseur et ces colonnes : fournisseur, prix unitaire, prix des dix chaises, frais de livraison ou de fret, délai, garantie, durée de validité du devis, mention taxes. N’écris « non précisé » que si l’information est absente du devis.\n\nSous le tableau, liste les points qui rendent les devis difficiles à comparer et les questions à poser à chaque fournisseur. Ne choisis pas à ma place et ne calcule aucun taux de taxe ni droit de douane.\n\n<devis1>\n[collez le devis 1 ici]\n</devis1>\n\n<devis2>\n[collez le devis 2 ici]\n</devis2>\n\n<devis3>\n[collez le devis 3 ici]\n</devis3>',
    materiau: {
      titre: 'Les trois devis reçus',
      texte:
        'DEVIS 1 : Mobilier Pacifique, Nouméa (Ducos)\nChaise ergonomique Confort 400, 38 500 XPF pièce, 10 pièces = 385 000 XPF. Livraison incluse dans Nouméa. Disponible sous 10 jours. Garantie 2 ans. Devis valable 30 jours. Prix hors taxes.\n\nDEVIS 2 : Bureau Plus, Dumbéa\nNous vous proposons 10 sièges Flex à 34 900 XPF l’unité TTC. Livraison : 12 000 XPF. Délai : 3 semaines environ. Garantie 1 an. Offre valable 21 jours.\n\nDEVIS 3 : Ergo Océanie, Brisbane\n10 chairs Ergo Pro, 29 800 XPF each, total 298 000 XPF. Sea freight to Nouméa: 41 000 XPF. Delivery in 6 weeks after payment. 3-year warranty. Prices exclude duties and local taxes. Quote valid 14 days.',
    },
    variantes: {
      simple: 'Ne comparer que les devis 1 et 2, sur le prix et le délai.',
      poussee:
        'Ajouter une colonne « coût total estimé » et faire expliquer chaque hypothèse retenue, avec les montants que vous devrez demander aux fournisseurs.',
    },
    astuces: {
      claude:
        'Demandez le tableau sous forme d’artefact ou de fichier Excel : vous pourrez le compléter avec les réponses des fournisseurs.',
      copilot:
        'Collez le tableau dans Excel, mettez-le sous forme de tableau, puis demandez à Copilot une colonne de total : vérifiez la formule.',
    },
    vigilance:
      'Les devis contiennent des prix négociés et parfois des noms de commerciaux : retirez-les ou utilisez un compte professionnel avant de coller.',
    formateur: {
      resultat:
        'Un tableau de trois lignes aux mêmes colonnes, qui signale que le devis 1 est hors taxes, le 2 toutes taxes comprises et le 3 hors droits et taxes, avec des totaux livrés de 385 000, 361 000 (349 000 + 12 000) et 339 000 XPF (298 000 + 41 000) avant dédouanement.',
      criteres: [
        'Les trois prix et les trois délais du tableau sont identiques aux devis.',
        'Le tableau signale que les mentions de taxes diffèrent, sans les convertir.',
        'Le devis 3 est présenté comme incomplet : dédouanement et transport local ne sont pas chiffrés.',
        'Les questions à poser aux fournisseurs sont concrètes.',
      ],
      pieges: [
        'Conclure que le devis 3 est le moins cher alors que son prix exclut les droits et les taxes.',
        'Laisser l’IA convertir un prix hors taxes en toutes taxes comprises avec un taux qu’elle invente.',
        'Oublier que la validité du devis 3 expire dans 14 jours.',
      ],
      competence: 'discernement',
      technique: 'structurer',
    },
    motsCles: ['devis', 'comparatif', 'tableau', 'fournisseurs', 'extraction'],
  },
  {
    id: 'achats-reclamation-fournisseur',
    titre: 'Reformuler une réclamation ferme et courtoise à un fournisseur',
    metier: 'achats',
    niveau: 'debutant',
    famille: 'corriger',
    duree: 15,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'copilot',
    situation:
      'Une entreprise de BTP de Païta a reçu sa livraison de parpaings avec deux jours de retard et deux palettes endommagées. Vous avez écrit un brouillon à chaud, trop agressif pour partir tel quel. Le fournisseur reste un partenaire important : il faut être ferme, pas fâché.',
    objectif:
      'Reformuler un message pour garder les faits et les demandes, et retirer menaces et reproches personnels.',
    etapes: [
      'Relisez le brouillon et soulignez les phrases qui accusent ou menacent.',
      'Collez-le dans votre outil d’IA avec le prompt de départ.',
      'Vérifiez que les faits (numéro de commande, quantités, dates) sont restés exacts.',
      'Vérifiez que chaque demande est présente : remplacement, avoir, date de réponse.',
      'Relisez à voix haute : si vous ne diriez pas cela au téléphone, demandez une version plus naturelle.',
    ],
    prompt:
      'Tu es acheteur dans une entreprise de BTP à Païta. Réécris le brouillon d’e-mail ci-dessous pour un fournisseur avec lequel nous voulons continuer à travailler. Ton ferme, courtois, factuel ; vouvoiement ; 150 mots au maximum.\n\nGarde tous les faits et toutes les demandes. Supprime les menaces et les reproches personnels. N’ajoute aucun engagement, aucune pénalité, aucune référence à un contrat ou à une loi. Après l’e-mail, liste ce que tu as supprimé ou modifié.\n\n<brouillon>\n[collez le brouillon ici]\n</brouillon>',
    materiau: {
      titre: 'Brouillon à reformuler',
      texte:
        'Objet : ENCORE UNE LIVRAISON RATÉE\n\nBonjour,\n\nC’est franchement n’importe quoi. Notre commande BC-2026-0731 de 20 palettes de parpaings devait arriver le lundi 5 octobre, elle est arrivée le mercredi 7. Vos chauffeurs ont déchargé comme des brutes : 2 palettes sont cassées, on a pris des photos. C’est la troisième fois en deux mois que vous nous faites le coup.\n\nOn veut 2 palettes de remplacement avant le vendredi 16 octobre, sinon on ne paie pas la facture et on change de fournisseur. Et on veut un avoir pour le retard.\n\nRépondez-nous vite.\n\n[votre nom], service achats',
    },
    variantes: {
      simple: 'Garder le même brouillon et ne demander que le ton, sans la liste des changements.',
      poussee:
        'Faire produire trois versions (téléphone, e-mail, courrier recommandé) et comparer ce que chacune doit contenir.',
    },
    astuces: {
      copilot:
        'Dans Outlook, lancez « Coaching par Copilot » sur votre brouillon avant d’envoyer : il commente le ton et la clarté.',
      claude:
        'Demandez la liste des modifications après l’e-mail, pour vérifier que les faits n’ont pas bougé.',
    },
    vigilance:
      'Ne laissez pas l’IA inventer un motif de pénalité ou un fondement juridique : si un contrat existe, vérifiez vous-même ce qu’il prévoit avant d’en parler.',
    formateur: {
      resultat:
        'Un e-mail de 150 mots au plus qui garde la commande BC-2026-0731, le retard de deux jours, les deux palettes cassées, la date du 16 octobre et la demande d’avoir, sans menace de ne pas payer.',
      criteres: [
        'Les numéros, quantités et dates sont identiques au brouillon.',
        'La menace de ne pas payer et les mots « brutes » et « n’importe quoi » ont disparu.',
        'La demande d’un geste commercial est présente mais sans montant inventé.',
      ],
      pieges: [
        'Garder la menace de changer de fournisseur sous une forme à peine adoucie.',
        'Accepter une pénalité de retard chiffrée que l’IA a ajoutée.',
      ],
      competence: 'discernement',
      technique: 'critique',
    },
    motsCles: ['réclamation', 'fournisseur', 'livraison', 'ton', 'retard'],
  },
  {
    id: 'achats-checklist-reception',
    titre: 'Préparer la check-list de réception d’une commande',
    metier: 'achats',
    niveau: 'debutant',
    famille: 'organiser',
    duree: 15,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Dans un hôtel de la côte Ouest, près de Koné, les livraisons arrivent par camion deux fois par semaine, et chacun contrôle à sa façon. Le responsable veut une check-list unique que le magasinier utilisera au quai de réception, en quelques minutes.',
    objectif:
      'Transformer des notes en vrac en check-list courte et ordonnée, avec les cas où il faut refuser ou émettre des réserves.',
    etapes: [
      'Lisez les notes du responsable et repérez ce qui relève du contrôle documentaire, du contrôle physique et de la traçabilité.',
      'Collez-les dans votre outil d’IA avec le prompt de départ.',
      'Vérifiez l’ordre des étapes : de l’arrivée du camion à la mise en stock.',
      'Contrôlez que chaque case est une action vérifiable (« compter les colis »), pas une intention.',
      'Faites tenir la check-list sur une page, puis testez-la sur une livraison que vous avez reçue récemment.',
    ],
    prompt:
      'Tu es responsable des achats d’un hôtel en Nouvelle-Calédonie. Transforme les notes ci-dessous en check-list de réception de marchandises, en trois parties : avant le déchargement, pendant le déchargement, après le déchargement. Chaque ligne commence par un verbe d’action et tient en une ligne. Ajoute une partie « Quand émettre des réserves ou refuser » avec les cas du texte. Tiens sur une page. N’ajoute aucune règle sanitaire précise : écris [à valider avec le responsable qualité] à la place.\n\n<notes>\n[collez les notes ici]\n</notes>',
    materiau: {
      titre: 'Notes du responsable',
      texte:
        'livraisons mardi et vendredi, entre 7 h et 10 h, quai arrière\nle magasinier doit avoir le bon de commande sous les yeux\ncomparer le bon de livraison avec le bon de commande (quantités, références)\ncompter les colis devant le chauffeur avant de signer !!\nsi carton abîmé ou mouillé : on écrit une réserve sur le bon avant de signer et on prend une photo\nproduits frais : contrôler la température et les dates, ranger tout de suite en chambre froide\npas de signature sans contrôle même si le chauffeur est pressé\npalette cassée ou produit manquant → prévenir l’acheteur le jour même\npointer la réception dans le tableau de suivi puis ranger',
    },
    variantes: {
      simple: 'Ne garder que les cinq contrôles essentiels, sur une demi-page.',
      poussee:
        'Faire produire aussi un formulaire d’écart à remplir (article, quantité commandée, quantité reçue, photo, décision) et la procédure d’information de l’acheteur.',
    },
    astuces: {
      chatgpt:
        'Demandez un tableau avec une colonne « fait » à cocher, puis téléchargez-le au format Excel.',
      copilot:
        'Transformez la réponse en Copilot Page pour que le magasinier et le responsable la complètent avant de l’adopter.',
      claude:
        'Demandez la check-list sous forme de fichier Excel : une ligne par contrôle, prête à imprimer.',
    },
    vigilance:
      'Ne laissez pas l’IA inventer des seuils de température ou des règles sanitaires : ils viennent du responsable qualité et de la réglementation en vigueur.',
    formateur: {
      resultat:
        'Une check-list d’une page en trois temps, qui place le comptage devant le chauffeur avant la signature, prévoit réserve écrite et photo, et laisse les règles de température à valider.',
      criteres: [
        'Chaque ligne commence par un verbe d’action et est vérifiable.',
        'La réserve écrite sur le bon et la photo figurent avant la signature.',
        'Aucun seuil de température n’a été inventé.',
      ],
      pieges: [
        'Laisser l’IA fixer un seuil de température comme si c’était une règle officielle.',
        'Une check-list de deux pages que le magasinier n’utilisera pas au quai.',
      ],
      competence: 'description',
      technique: 'structurer',
    },
    motsCles: ['réception', 'check-list', 'livraison', 'magasinier', 'réserves'],
  },
  {
    id: 'achats-cout-total-rendu',
    titre: 'Comparer deux offres en coût total rendu Nouméa',
    metier: 'achats',
    niveau: 'intermediaire',
    famille: 'analyser',
    duree: 30,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'gemini',
    situation:
      'Un atelier de mécanique de Ducos doit commander 400 bidons d’huile hydraulique de 20 litres. Un fournisseur de Brisbane propose un prix unitaire plus bas, un fournisseur de Nouméa un prix plus élevé mais livré vite. Votre responsable veut savoir laquelle des deux offres coûte vraiment le moins une fois la marchandise rendue à l’atelier.',
    objectif:
      'Calculer un coût total rendu à partir de lignes de coût fournies, vérifier le calcul et discuter ce que le chiffre ne dit pas (délai, trésorerie, stock).',
    etapes: [
      'Lisez le tableau du matériau : repérez les lignes qui entrent dans le coût et celles qui n’y entrent pas (délai, paiement).',
      'Joignez le CSV ou collez-le, puis envoyez le prompt de départ.',
      'Refaites le total de chaque offre avec votre calculatrice et comparez avec celui de l’IA.',
      'Demandez ce qui n’est pas dans le chiffre : immobilisation de trésorerie, risque de rupture, stock de sécurité nécessaire pour un délai de 35 jours.',
      'Faites rédiger la recommandation en cinq lignes pour votre responsable, avec les questions à confirmer aux fournisseurs.',
    ],
    prompt:
      'Tu es acheteur dans un atelier de mécanique à Ducos. Voici deux offres pour 400 bidons d’huile hydraulique, sous forme de tableau CSV (séparateur : point-virgule). Les frais portuaires et de dédouanement sont des montants fournis par le transitaire : ne les recalcule pas et n’utilise aucun taux de taxe ni de droit de douane.\n\n<offres>\n[collez le tableau ici]\n</offres>\n\n1. Calcule, pour chaque offre, le coût total rendu à l’atelier (toutes les lignes de coût en XPF), puis le coût par bidon. Montre ton calcul.\n2. Donne l’écart entre les deux offres, en XPF et en pourcentage du coût le plus bas.\n3. Liste les éléments non chiffrés qui peuvent inverser la décision (délai, paiement, stock à immobiliser).\n4. Recommande une offre en cinq lignes, en signalant les points à confirmer. Si une donnée manque, dis-le au lieu de l’estimer.',
    materiau: {
      titre: 'Offres reçues pour 400 bidons d’huile hydraulique (montants fictifs)',
      texte:
        'Fournisseur;Poste;Montant (XPF);Précision\nSouthern Lubes (Brisbane);Marchandises (400 bidons);1680000;4200 XPF le bidon\nSouthern Lubes (Brisbane);Fret maritime;214000;conteneur partagé\nSouthern Lubes (Brisbane);Assurance transport;18500;\nSouthern Lubes (Brisbane);Frais portuaires et dédouanement;96000;montant estimé par le transitaire\nSouthern Lubes (Brisbane);Transport du port à l’atelier;22000;\nSouthern Lubes (Brisbane);Délai (jours);35;départ de Brisbane inclus\nSouthern Lubes (Brisbane);Paiement (jours);30;après réception\nCalédo Lubrifiants (Nouméa);Marchandises (400 bidons);1980000;4950 XPF le bidon\nCalédo Lubrifiants (Nouméa);Livraison à l’atelier;15000;\nCalédo Lubrifiants (Nouméa);Délai (jours);5;stock disponible\nCalédo Lubrifiants (Nouméa);Paiement (jours);0;à la commande',
    },
    variantes: {
      simple: 'Ne calculer que le coût total des deux offres, sans la discussion des délais.',
      poussee:
        'Ajouter un coût de stockage fictif de 1 500 XPF par jour pour les 35 jours de stock de sécurité, et refaire la comparaison en faisant varier le délai.',
    },
    astuces: {
      gemini:
        'Dans Google Sheets, « Demander à Gemini » propose les formules de total par fournisseur : vérifiez-les ligne par ligne.',
      chatgpt:
        'Avec l’analyse de données, joignez le CSV : ChatGPT montre ses calculs, contrôlez un total à la main.',
      claude:
        'Déposez le fichier CSV : Claude calcule, trace un graphique comparatif et peut rendre un fichier Excel.',
      copilot:
        'Dans Excel, mettez les lignes sous forme de tableau et demandez à Copilot le total par fournisseur.',
    },
    vigilance:
      'Les prix, les frais de dédouanement et les taxes viennent des fournisseurs et du transitaire : l’IA ne doit ni les estimer ni appliquer un taux. Utilisez des données anonymisées si ce sont de vraies offres.',
    formateur: {
      resultat:
        'Le coût total rendu est de 2 030 500 XPF pour Southern Lubes (1 680 000 + 214 000 + 18 500 + 96 000 + 22 000), soit 5 076,25 XPF le bidon, et de 1 995 000 XPF pour Calédo Lubrifiants (1 980 000 + 15 000), soit 4 987,50 XPF le bidon. L’offre locale est moins chère de 35 500 XPF, soit environ 1,8 % du coût le plus bas, avec un délai de 5 jours au lieu de 35.',
      criteres: [
        'Le total de Southern Lubes comprend les cinq lignes de coût et celui de Calédo les deux.',
        'Les lignes « délai » et « paiement » ne sont pas additionnées aux montants.',
        'L’écart est donné en XPF et en pourcentage, et l’apprenant l’a recalculé.',
        'L’IA signale les éléments non chiffrés : immobilisation de trésorerie, risque de rupture, stock plus important avec 35 jours de délai.',
      ],
      pieges: [
        'Conclure que l’offre de Brisbane est la moins chère en lisant seulement le prix unitaire (4 200 contre 4 950 XPF).',
        'Ne pas demander si le prix local est hors taxes et si les frais de dédouanement comprennent les taxes à l’importation : sans cette réponse, les deux totaux ne sont peut-être pas comparables.',
        'Additionner le délai de 35 jours ou le paiement à 30 jours avec les montants.',
        'Laisser l’IA appliquer un taux de taxe ou de droit de douane qui n’est pas dans le tableau.',
      ],
      competence: 'discernement',
      technique: 'decomposer',
    },
    motsCles: ['coût total rendu', 'fret', 'offres', 'comparaison', 'CSV', 'import'],
  },
  {
    id: 'achats-affiche-reception',
    titre: 'Créer dans Canva l’affiche des consignes de réception des marchandises',
    metier: 'achats',
    niveau: 'intermediaire',
    famille: 'visuels',
    duree: 30,
    outils: ['canva', 'claude', 'chatgpt'],
    outilConseille: 'canva',
    situation:
      'Dans un entrepôt de distribution de Païta, les magasiniers signent parfois les bons de livraison des chauffeurs avant le contrôle. Le responsable des achats veut une affiche A3 au quai de réception qui rappelle, en un coup d’œil, les gestes à faire avant de signer.',
    objectif:
      'Transformer des consignes validées en affiche lisible à deux mètres, sans que l’IA n’en change le contenu.',
    etapes: [
      'Lisez les consignes validées et gardez-les telles quelles : l’IA ne fait que les mettre en forme.',
      'Faites d’abord condenser chaque consigne en dix mots au maximum avec votre outil de rédaction, en gardant le sens.',
      'Ouvrez Canva, choisissez le format affiche A3 et collez la description du prompt de départ dans l’IA Canva.',
      'Choisissez une proposition, puis remplacez les textes par vos consignes condensées.',
      'Vérifiez à deux mètres de l’écran : titre lisible, une icône par consigne, couleurs de l’entreprise, aucune consigne ajoutée.',
    ],
    prompt:
      'Crée une affiche A3 verticale pour le quai de réception d’un entrepôt, titre : « Avant de signer : 5 gestes ». Style simple et lisible de loin, fond clair, [couleur de l’entreprise] en couleur d’accent, une icône par consigne, texte en grands caractères. Les cinq consignes, dans cet ordre :\n1. Comparer le bon de livraison au bon de commande.\n2. Compter les colis devant le chauffeur.\n3. Contrôler l’état des emballages.\n4. Écrire les réserves sur le bon, avec photo.\n5. Prévenir l’acheteur le jour même en cas d’écart.\nN’ajoute aucune consigne et ne change pas leur ordre. Pied de page : « Service achats, poste [numéro interne] ».',
    materiau: {
      titre: 'Consignes validées par le responsable des achats',
      texte:
        '1. Comparer le bon de livraison au bon de commande (quantités et références).\n2. Compter les colis devant le chauffeur, avant de signer.\n3. Contrôler l’état des emballages : carton abîmé, mouillé ou ouvert.\n4. En cas d’anomalie, écrire une réserve sur le bon de livraison avant de signer, et prendre une photo.\n5. En cas d’écart ou de casse, prévenir l’acheteur le jour même.\nRègle générale : pas de signature sans contrôle, même si le chauffeur est pressé.',
    },
    variantes: {
      simple: 'Faire la même affiche avec trois consignes seulement.',
      poussee:
        'Décliner l’affiche en format A4 et en story pour le groupe de messagerie des magasiniers, avec le redimensionnement magique (Pro), puis comparer la lisibilité.',
    },
    astuces: {
      canva:
        'Décrivez le format, le public et le message dans l’IA Canva ; l’écriture magique raccourcit un texte trop long pour l’affiche. Le redimensionnement magique, pour les autres formats, est une fonction Pro.',
      claude:
        'Demandez d’abord un artefact avec la mise en page proposée, puis reproduisez-la dans Canva.',
      chatgpt:
        'Utilisez la création d’images seulement pour une illustration : le texte de l’affiche se saisit dans Canva.',
    },
    vigilance:
      'Relisez chaque mot sur l’affiche finale : les IA de design modifient parfois un texte ou en ajoutent un. Pas de nom de salarié ni de photo identifiable.',
    formateur: {
      resultat:
        'Une affiche A3 à cinq consignes, dans l’ordre donné, lisible à deux mètres, aux couleurs de l’entreprise, sans consigne ajoutée.',
      criteres: [
        'Les cinq consignes sont présentes, dans le bon ordre, sans modification de sens.',
        'Le titre et les consignes sont lisibles à deux mètres.',
        'L’apprenant a relu et corrigé tous les textes de l’affiche finale.',
      ],
      pieges: [
        'Laisser Canva ajouter une consigne ou un chiffre absent des consignes validées.',
        'Une affiche chargée de texte, que personne ne lira au quai.',
      ],
      competence: 'diligence',
      technique: 'contexte',
    },
    motsCles: ['affiche', 'Canva', 'réception', 'consignes', 'quai'],
  },
  {
    id: 'achats-resume-contrat-fourniture',
    titre: 'Résumer un contrat de fourniture : engagements, pénalités, reconduction',
    metier: 'achats',
    niveau: 'intermediaire',
    famille: 'synthetiser',
    duree: 30,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Vous êtes acheteur dans une société de restauration collective de Koné. Un contrat de fourniture de produits d’hygiène arrive à son échéance, et votre directeur veut savoir ce que l’entreprise doit faire et avant quelle date. Le contrat fait plusieurs pages ; voici l’extrait utile.',
    objectif:
      'Obtenir un résumé fidèle d’un contrat, en repérant les dates, les engagements des deux parties et les pièges, sans que l’IA ne donne un avis juridique.',
    etapes: [
      'Lisez l’extrait du contrat une première fois, en notant les dates et les montants.',
      'Collez-le dans votre outil d’IA avec le prompt de départ.',
      'Vérifiez dans le contrat chaque date et chaque montant cités dans le résumé.',
      'Calculez vous-même la date limite pour refuser la reconduction, à partir de l’échéance.',
      'Faites rédiger le résumé pour le directeur : cinq lignes et la décision à prendre avant la date limite.',
    ],
    prompt:
      'Tu es acheteur dans une société de restauration collective en Nouvelle-Calédonie. Résume l’extrait de contrat ci-dessous pour mon directeur, en quatre parties : engagements du fournisseur, engagements de notre société, pénalités et conséquences financières, durée et reconduction. Cite l’article concerné pour chaque point. Reprends les chiffres et les dates exactement. Ajoute la date limite pour refuser la reconduction et montre comment tu l’as calculée. Si une clause est ambiguë, signale-la au lieu de l’interpréter. Ne donne aucun avis juridique : liste seulement les points à faire vérifier par un juriste.\n\n<contrat>\n[collez l’extrait ici]\n</contrat>',
    materiau: {
      titre: 'Contrat de fourniture CF-2026-014 (extrait fictif)',
      texte:
        'Entre Hygiène Pacifique SARL (le Fournisseur) et Nord Restauration SAS (le Client).\n\nArticle 2 – Fourniture. Le Fournisseur livre chaque mois, dans un délai de 5 jours ouvrés après chaque commande, les produits listés en annexe 1, aux prix de l’annexe 2.\nArticle 3 – Volume. Le Client s’engage à commander au moins 1 200 000 XPF par trimestre. À défaut, le Fournisseur peut facturer 20 % de la différence.\nArticle 4 – Retards. En cas de retard de livraison, le Fournisseur verse une pénalité de 1,5 % du montant de la commande par jour ouvré de retard, plafonnée à 10 % de cette commande.\nArticle 5 – Prix. Les prix peuvent être révisés au 1er janvier, selon la variation du tarif du Fournisseur, notifiée au moins 60 jours avant. Le Client peut refuser la révision et résilier.\nArticle 6 – Durée. Le contrat est conclu pour 12 mois à compter du 1er avril 2026. Il est reconduit tacitement pour des périodes d’un an, sauf dénonciation par lettre recommandée au moins 3 mois avant l’échéance.\nArticle 7 – Paiement. Les factures sont payables à 45 jours à compter de leur date.\nArticle 8 – Résiliation. En cas de manquement non corrigé dans les 15 jours suivant une mise en demeure, l’autre partie peut résilier le contrat.',
    },
    variantes: {
      simple: 'Résumer seulement les articles 4 et 6, en trois lignes.',
      poussee:
        'Faire comparer le contrat avec les conditions de l’offre d’un nouveau fournisseur et lister les clauses à renégocier.',
    },
    astuces: {
      claude:
        'Joignez le contrat et demandez de citer les passages utilisés : vous pourrez vérifier chaque point.',
      chatgpt:
        'Précisez la longueur et le public du résumé (direction, équipe) ; demandez le tableau des échéances en Excel.',
      copilot:
        'Dans Copilot Chat, joignez le document à résumer et demandez les passages cités entre guillemets.',
    },
    vigilance:
      'Un vrai contrat est confidentiel : ne le collez que dans un outil autorisé par l’entreprise, ou anonymisé. Le résumé de l’IA n’a aucune valeur juridique : seul le contrat fait foi.',
    formateur: {
      resultat:
        'Un résumé qui cite les articles 2 à 8, signale le volume minimum de 1 200 000 XPF par trimestre avec la facturation de 20 % de la différence en cas de manque, la pénalité de 1,5 % par jour ouvré plafonnée à 10 %, et la date limite du 31 décembre 2026 pour dénoncer la reconduction (échéance du 31 mars 2027 moins 3 mois).',
      criteres: [
        'Tous les chiffres et toutes les dates correspondent à l’extrait.',
        'La date limite de dénonciation est calculée et justifiée.',
        'L’ambiguïté de l’article 6 (la lettre doit-elle être envoyée ou reçue 3 mois avant ?) figure parmi les points à faire vérifier.',
        'La clause de volume minimum est présentée comme un engagement du client, pas du fournisseur.',
        'Les points à faire vérifier par un juriste sont listés sans avis juridique.',
      ],
      pieges: [
        'Oublier la reconduction tacite et la lettre recommandée, donc laisser passer le 31 décembre.',
        'Présenter la pénalité de 1,5 % par jour sans le plafond de 10 %, ou comme visant le client.',
        'Accepter une interprétation juridique de l’IA sur la clause de volume.',
      ],
      competence: 'discernement',
      technique: 'sources',
    },
    motsCles: ['contrat', 'fourniture', 'pénalités', 'reconduction tacite', 'résumé'],
  },
  {
    id: 'achats-seuil-reapprovisionnement',
    titre: 'Calculer un seuil de réapprovisionnement à partir des sorties de stock',
    metier: 'achats',
    niveau: 'intermediaire',
    famille: 'analyser',
    duree: 30,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'copilot',
    situation:
      'Un négoce de matériaux de Païta gère ses sacs de ciment de 25 kg. Le ciment arrive par bateau avec un délai de cinq semaines. Vous avez les sorties de stock des douze dernières semaines et vous devez dire à partir de quel niveau de stock il faut relancer une commande.',
    objectif:
      'Faire calculer un seuil de réapprovisionnement avec une méthode explicite, le refaire à la main, et mesurer l’effet d’un retard du bateau.',
    etapes: [
      'Lisez les sorties de stock et repérez la semaine la plus forte et la plus faible.',
      'Joignez le tableau ou collez-le, puis envoyez le prompt de départ.',
      'Vérifiez la moyenne hebdomadaire avec votre calculatrice : la somme des sorties divisée par douze.',
      'Refaites le calcul du seuil : consommation moyenne multipliée par le délai, plus le stock de sécurité.',
      'Comparez le seuil au stock actuel, puis demandez le nouveau seuil si le délai passe à sept semaines.',
    ],
    prompt:
      'Tu es gestionnaire de stock dans un négoce de matériaux à Païta. Voici les sorties hebdomadaires de sacs de ciment de 25 kg sur douze semaines (séparateur : point-virgule). Le délai de réapprovisionnement par bateau est de 5 semaines ; le stock actuel est de 280 sacs.\n\n<sorties>\n[collez le tableau ici]\n</sorties>\n\nMéthode à appliquer exactement : seuil de réapprovisionnement = consommation hebdomadaire moyenne × délai en semaines + stock de sécurité ; le stock de sécurité vaut 2 semaines de consommation moyenne.\n1. Calcule le total, la moyenne, la semaine la plus forte et la plus faible.\n2. Calcule le seuil, arrondi au sac supérieur. Montre chaque étape.\n3. Indique si le stock actuel est au-dessus ou en dessous du seuil.\n4. Calcule le seuil si le délai passe à 7 semaines.\nSi une donnée te paraît incohérente, signale-la sans la corriger.',
    materiau: {
      titre: 'Sorties de stock de sacs de ciment, du 27 juillet au 12 octobre 2026',
      texte:
        'Semaine;Début de semaine;Sorties (sacs)\n1;27/07/2026;42\n2;03/08/2026;38\n3;10/08/2026;45\n4;17/08/2026;51\n5;24/08/2026;40\n6;31/08/2026;36\n7;07/09/2026;48\n8;14/09/2026;44\n9;21/09/2026;39\n10;28/09/2026;47\n11;05/10/2026;41\n12;12/10/2026;49',
    },
    variantes: {
      simple: 'Ne calculer que le total et la moyenne hebdomadaire, sans le stock de sécurité.',
      poussee:
        'Remplacer le stock de sécurité par une règle fondée sur la semaine la plus forte, comparer les deux seuils et expliquer lequel retenir pour un article vital.',
    },
    astuces: {
      copilot:
        'Mettez les sorties sous forme de tableau Excel avant de les confier à Copilot : il lit mieux les données, vérifiez ses formules.',
      chatgpt:
        'Avec l’analyse de données, joignez le fichier : ChatGPT montre ses calculs, contrôlez la moyenne à la main.',
      gemini:
        'Dans Google Sheets, « Demander à Gemini » peut proposer la formule de la moyenne et du seuil.',
    },
    vigilance:
      'Les formules d’un seuil sont des conventions de l’entreprise : l’IA applique celle que vous donnez, elle ne choisit pas à votre place. Vérifiez aussi que les sorties ne comprennent pas de ventes exceptionnelles.',
    formateur: {
      resultat:
        'Total 520 sacs, moyenne 43,3 sacs par semaine, pic de 51 (semaine 4), minimum de 36 (semaine 6). Seuil : 43,33 × 5 = 216,7, plus 86,7 de sécurité, soit 303,3 donc 304 sacs. Le stock de 280 sacs est sous le seuil : il faut commander. Avec 7 semaines de délai, le seuil monte à 390 sacs.',
      criteres: [
        'La moyenne et le seuil sont recalculés par l’apprenant et concordent.',
        'L’arrondi est fait au sac supérieur (304) et non à l’entier le plus proche.',
        'Le stock actuel est comparé au seuil et la conclusion est claire : commander.',
        'L’effet du délai de 7 semaines est chiffré (390 sacs).',
      ],
      pieges: [
        'Confondre la moyenne (43,3) avec la semaine la plus forte (51) dans le calcul du seuil.',
        'Oublier le stock de sécurité et conclure que 280 sacs suffisent (seuil de 217).',
        'Accepter une moyenne fausse sans refaire la division.',
      ],
      competence: 'discernement',
      technique: 'decomposer',
    },
    motsCles: ['stock', 'seuil de réapprovisionnement', 'stock de sécurité', 'CSV', 'délai'],
  },
  {
    id: 'achats-grille-evaluation-fournisseurs',
    titre: 'Construire une grille d’évaluation des fournisseurs et la tester sur trois cas',
    metier: 'achats',
    niveau: 'avance',
    famille: 'organiser',
    duree: 45,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Le service achats d’une collectivité de la province Nord veut évaluer ses fournisseurs chaque année de la même façon, au lieu de se fier à l’impression des uns et des autres. Vous devez concevoir une grille de notation, la tester sur trois fournisseurs réels (ici fictifs) et vérifier qu’elle ne favorise pas le plus gros.',
    objectif:
      'Enchaîner la conception d’une grille, son application sur des cas et sa critique, en validant chaque étape avant la suivante.',
    etapes: [
      'Envoyez le prompt de départ : l’IA propose d’abord les critères, avec leur définition et leur façon de les mesurer, sans noter personne.',
      'Choisissez les poids vous-même : le total doit faire 100 points, avec davantage de poids sur les critères qui comptent pour vous.',
      'Faites noter les trois fournisseurs du matériau, en demandant pour chaque note la donnée qui la justifie.',
      'Faites chercher les failles de la grille : un petit nombre de livraisons, des critères qui se recoupent, un fournisseur favorisé.',
      'Corrigez la grille, refaites la notation et rédigez la fiche d’utilisation d’une page pour les collègues.',
    ],
    prompt:
      'Tu es responsable des achats d’une collectivité en province Nord, Nouvelle-Calédonie. Nous allons travailler en étapes : ne passe à l’étape suivante que lorsque je te le demande.\n\nÉtape 1 : propose une grille d’évaluation annuelle des fournisseurs avec cinq à six critères (par exemple ponctualité, conformité, prix, réactivité, qualité du service). Pour chacun : définition, indicateur mesurable avec la donnée à relever, échelle de notation de 0 à 10. Ne note encore aucun fournisseur et ne donne pas les poids : je les fixerai.\n\nContexte : nous achetons des fournitures techniques, des fournisseurs sont locaux et d’autres étrangers, certains livrent peu souvent. Dis-moi quels critères risquent de désavantager un fournisseur qui livre rarement.',
    materiau: {
      titre: 'Données de l’année pour trois fournisseurs (fictives)',
      texte:
        'FOURNISSEUR A : Calédo Négoce (Koné, local)\n- 50 livraisons dont 47 dans les délais (94 %), 2 non conformes (4 %)\n- prix : référence de comparaison, indice 100\n- réponse aux demandes : sous 24 h\n\nFOURNISSEUR B : Southern Supply (Brisbane)\n- 12 livraisons dont 9 dans les délais (75 %), 0 non conforme\n- prix : indice 88 par rapport au fournisseur A\n- réponse aux demandes : 3 jours\n\nFOURNISSEUR C : Tropic Import (Auckland)\n- 5 livraisons dont 5 dans les délais (100 %), 1 non conforme (20 %)\n- prix : indice 92 par rapport au fournisseur A\n- réponse aux demandes : 48 h',
    },
    variantes: {
      simple: 'Se limiter à trois critères (ponctualité, conformité, prix) et à deux fournisseurs.',
      poussee:
        'Transformer la grille en tableau de calcul automatique, avec un test sur dix faux fournisseurs fabriqués par l’IA, pour vérifier qu’aucune note n’est aberrante.',
    },
    astuces: {
      claude:
        'Demandez la grille sous forme de fichier Excel avec les formules de notation : vous testerez d’autres poids sans tout recommencer.',
      chatgpt:
        'Travaillez dans un Projet : la grille validée et les poids retenus restent disponibles pour l’évaluation de l’année suivante.',
      copilot:
        'Transformez la grille en Copilot Page pour que les collègues la commentent avant de l’adopter.',
      gemini:
        'Dans Google Sheets, « Demander à Gemini » aide à écrire les formules de notation pondérée.',
    },
    vigilance:
      'Une note de fournisseur a des effets réels sur ses commandes : elle s’appuie sur des données vérifiables, jamais sur une impression ni sur l’avis de l’IA. Ne communiquez pas les notes sans validation de votre responsable.',
    formateur: {
      resultat:
        'Une grille de cinq ou six critères aux indicateurs mesurables, des poids choisis par l’apprenant (total 100), trois fournisseurs notés avec la donnée justificative, et une critique qui relève au moins la fragilité des 5 livraisons du fournisseur C.',
      criteres: [
        'Chaque critère a une définition, un indicateur mesurable et une échelle.',
        'Le total des poids fait 100 et a été décidé par l’apprenant, pas par l’IA.',
        'Chaque note renvoie à une donnée du matériau (94 %, 75 %, 20 %, indice 88…).',
        'La critique relève le biais du petit échantillon : cinq livraisons ne suffisent pas à noter 100 % de ponctualité.',
        'La grille a été corrigée et la notation refaite.',
      ],
      pieges: [
        'Noter le fournisseur C parfait en ponctualité sur seulement cinq livraisons.',
        'Laisser l’IA fixer les poids, donc la décision.',
        'Des critères qui se recoupent (réactivité et qualité de service) et comptent deux fois la même chose.',
      ],
      competence: 'delegation',
      technique: 'decomposer',
    },
    motsCles: ['évaluation', 'fournisseurs', 'grille', 'notation', 'pondération'],
  },
  {
    id: 'achats-assistant-bons-de-commande',
    titre: 'Créer un assistant qui prépare les bons de commande à partir des demandes internes',
    metier: 'achats',
    niveau: 'avance',
    famille: 'automatiser',
    duree: 60,
    outils: ['claude', 'chatgpt', 'gemini', 'copilot'],
    outilConseille: 'chatgpt',
    situation:
      'Dans une société d’import-distribution de Ducos, les services envoient leurs besoins par e-mail, souvent incomplets : article sans référence, quantité absente, service non précisé. Vous retapez chaque demande dans le modèle de bon de commande. Vous créez un assistant qui prépare le brouillon, et qui pose les questions quand il manque quelque chose.',
    objectif:
      'Rédiger des instructions permanentes, fournir un modèle et des règles internes, et tester l’assistant sur des demandes incomplètes ou hors règle.',
    etapes: [
      'Rassemblez le modèle de bon de commande vierge, la liste des fournisseurs référencés (sans conditions tarifaires) et la règle de validation interne.',
      'Créez un Projet (Claude, ChatGPT), un Gem (Gemini) ou un agent (Copilot), ajoutez ces documents et collez les instructions du prompt de départ.',
      'Testez l’assistant avec les trois demandes du matériau.',
      'Notez chaque écart : information inventée, question oubliée, règle de validation ignorée. Ajoutez une règle pour chacun.',
      'Refaites les trois tests, puis faites essayer l’assistant par un collègue sur une quatrième demande.',
    ],
    prompt:
      'Tu es l’assistant du service achats de [nom de la société], à Ducos. Tu prépares des brouillons de bons de commande à partir des demandes des services ; une personne du service achats les vérifie, les valide et les envoie.\n\nRègles :\n- Utilise le modèle de bon de commande fourni et la liste des fournisseurs référencés.\n- Champs obligatoires : service demandeur, article et référence, quantité, fournisseur, date de livraison souhaitée, lieu de livraison. Si l’un manque, pose-moi la question avant de rédiger. N’invente jamais un prix, une référence ou une date.\n- Si le montant estimé dépasse [seuil de validation], indique en tête « Validation de la direction requise » et ne propose pas d’envoi.\n- Si l’article n’est pas chez un fournisseur référencé, signale-le sans en proposer un.\n- Termine chaque brouillon par la liste des points à vérifier avant envoi.',
    materiau: {
      titre: 'Demandes de test (fictives)',
      texte:
        '1. Salut, il nous faudrait des cartouches d’encre pour l’imprimante du 2e étage, vite. (Camille, compta)\n2. Service logistique : merci de commander 6 palettes de film étirable, référence FE-500, chez Pacific Emballages, pour livraison à l’entrepôt de Ducos avant le 30 octobre. Budget estimé : 780 000 XPF.\n3. Bonjour, pouvons-nous commander un nouveau chariot élévateur chez un fournisseur australien ? Le nôtre lâche. Estimation : 4 500 000 XPF. (Marc, entrepôt)',
    },
    variantes: {
      simple: 'Créer l’assistant pour un seul service et un seul fournisseur.',
      poussee:
        'Ajouter une règle de regroupement des demandes d’une même semaine chez le même fournisseur, un tableau de tests à rejouer à chaque modification et un partage à toute l’équipe.',
    },
    astuces: {
      chatgpt:
        'Un Projet suffit pour vous ; un GPT, dont la création est payante, se partage avec toute l’équipe.',
      claude:
        'Déposez le modèle et les règles dans un Projet ; pour une méthode maison utilisable partout, créez plutôt une compétence.',
      gemini:
        'Créez un Gem et joignez le modèle et la liste des fournisseurs : il s’y référera à chaque demande.',
      copilot:
        'Selon votre licence, « Créer un agent » permet de proposer l’assistant à tout le service achats.',
    },
    vigilance:
      'Un bon de commande engage l’entreprise : l’assistant prépare un brouillon, une personne habilitée vérifie et envoie. Ne déposez ni tarifs négociés ni coordonnées bancaires dans les documents de référence.',
    formateur: {
      resultat:
        'Un assistant qui pose des questions sur la demande 1 (référence, quantité, fournisseur, service), prépare un brouillon pour la demande 2 (si Pacific Emballages est référencé et 780 000 XPF sous le seuil fixé) et signale que la demande 3 nécessite une validation de la direction et un fournisseur à choisir.',
      criteres: [
        'Les instructions disent quoi faire quand une information manque et quand le montant dépasse le seuil.',
        'Demande 1 : l’assistant ne remplit pas la référence ni la quantité.',
        'Demande 3 : la validation de la direction est signalée et aucun fournisseur n’est inventé.',
        'L’apprenant a modifié les instructions après le premier test et constaté l’effet.',
      ],
      pieges: [
        'Un bon de commande rempli avec une quantité ou une référence inventée pour la demande 1.',
        'Laisser l’assistant proposer un fournisseur étranger absent de la liste référencée.',
        'Envoyer le brouillon sans la vérification humaine.',
      ],
      competence: 'delegation',
      technique: 'instructions',
    },
    motsCles: ['bon de commande', 'assistant', 'demandes internes', 'projet', 'gem', 'agent'],
  },
  {
    id: 'achats-veille-prix-delais',
    titre: 'Programmer une veille sur les prix et les délais d’approvisionnement',
    metier: 'achats',
    niveau: 'avance',
    famille: 'veiller',
    duree: 45,
    outils: ['gemini', 'chatgpt', 'claude'],
    outilConseille: 'gemini',
    situation:
      'Vous achetez des matériaux pour un groupe de BTP de Nouméa. Une hausse de prix, une rupture ou un retard de bateau peut bloquer un chantier. Chaque lundi, vous voulez recevoir un point de veille d’une page sur ce qui peut toucher vos approvisionnements des prochaines semaines.',
    objectif:
      'Cadrer une veille hebdomadaire, la tester une fois à la main, puis la programmer en demandant à l’IA de séparer ce qu’elle a vérifié de ce qu’elle ignore.',
    etapes: [
      'Listez vos quatre ou cinq familles d’articles sensibles (ciment, acier, bois, câbles…) et vos fournisseurs principaux.',
      'Lancez le prompt de départ une fois en conversation normale, avec la recherche web, et lisez le résultat.',
      'Ouvrez les sources citées : vérifiez deux informations (un délai, un prix) à la source, pas dans le résumé.',
      'Corrigez le prompt : sections, longueur, ce qui n’est pas utile, ce qui doit rester « non trouvé ».',
      'Programmez-le chaque lundi (Gemini, ChatGPT ou Claude selon votre offre) et prévoyez un contrôle de dix minutes à la lecture.',
    ],
    prompt:
      'Tu es assistant de veille pour le service achats d’un groupe de BTP à Nouméa. Fais le point de la semaine, en une page, sur :\n- les familles d’articles suivies : [liste] ;\n- les délais et la disponibilité du fret maritime vers Nouméa (Australie, Nouvelle-Zélande, métropole) ;\n- les hausses ou baisses de prix annoncées par des fournisseurs ou des sources publiques ;\n- les ruptures, les grèves ou les perturbations portuaires qui touchent ces approvisionnements.\n\nPour chaque information : la source (nom du site et lien), la date de publication, et si elle est confirmée par une deuxième source. Si tu ne trouves rien sur un sujet, écris « rien trouvé cette semaine » au lieu de compléter. Termine par trois actions que le service achats pourrait envisager. Ne cite ni prix ni taux de taxe sans source.',
    materiau: {
      titre: 'Fiche de cadrage de la veille',
      texte:
        'Familles suivies : ciment, ronds à béton, bois de charpente, câbles électriques, peinture\nFournisseurs principaux : trois en Australie, un en Nouvelle-Zélande, deux en métropole, deux locaux\nSources à privilégier : sites des compagnies maritimes, presse économique locale, communiqués des fournisseurs\nLecture : chaque lundi avant 8 h, 10 minutes\nDécision type : avancer ou reporter une commande, constituer un stock de précaution',
    },
    variantes: {
      simple:
        'Ne suivre qu’une seule famille d’articles, sans programmation : une seule exécution.',
      poussee:
        'Ajouter un tableau de suivi qui garde, semaine après semaine, les délais constatés par fournisseur, et faire détecter les dérives sur quatre semaines.',
    },
    astuces: {
      gemini:
        'Lancez Deep Research, puis exportez le rapport dans Google Docs pour l’annoter ; « Programmer des actions » relance la veille (selon l’offre).',
      chatgpt:
        'Une tâche planifiée (payante) relance la veille chaque lundi ; la recherche approfondie, limitée en gratuit, sert pour la première version.',
      claude:
        'La recherche web est gratuite ; les tâches planifiées sont payantes : à défaut, relancez la veille vous-même chaque lundi.',
    },
    vigilance:
      'Une veille produite par IA peut mélanger des sources anciennes et récentes : contrôlez la date de chaque information avant de décider d’une commande. Ne donnez à l’IA ni vos prix négociés ni vos volumes d’achat.',
    formateur: {
      resultat:
        'Un prompt de veille hebdomadaire aux sources citées et datées, une première exécution contrôlée à la source, des sujets sans résultat clairement marqués « rien trouvé », et une tâche programmée chaque lundi.',
      criteres: [
        'Le prompt exige la source, la date et la confirmation par une deuxième source.',
        'L’apprenant a ouvert au moins deux sources et confirmé les informations.',
        'Les sujets sans résultat sont écrits « rien trouvé » et non complétés.',
        'Les actions proposées sont des options, pas des ordres.',
      ],
      pieges: [
        'Décider d’avancer une commande sur la foi d’un article vieux de plusieurs mois.',
        'Laisser l’IA citer un prix ou une taxe sans source.',
        'Programmer la veille sans la relire : une dérive de la recherche passera inaperçue.',
      ],
      competence: 'diligence',
      technique: 'sources',
    },
    motsCles: ['veille', 'fret maritime', 'prix', 'délais', 'tâche planifiée'],
  },
  {
    id: 'achats-contrats-cadres-notebook',
    titre: 'Interroger les contrats-cadres avec Gemini Notebook',
    metier: 'achats',
    niveau: 'avance',
    famille: 'synthetiser',
    duree: 45,
    outils: ['notebook', 'claude'],
    outilConseille: 'notebook',
    situation:
      'Vous êtes responsable des achats d’un groupe hôtelier de Nouméa. Les contrats-cadres, conditions générales d’achat et fiches fournisseurs sont dispersés dans des dossiers, et chaque question d’un collègue vous fait fouiller dix PDF. Vous voulez un carnet qui répond avec citations et qui montre ce qui n’est écrit nulle part.',
    objectif:
      'Exploiter un corpus de contrats avec Gemini Notebook : synthèse, questions avec citations, repérage de ce qui n’est pas documenté.',
    etapes: [
      'Rassemblez 6 à 10 documents sans informations confidentielles de tarifs : contrats-cadres, conditions d’achat, fiches fournisseurs anonymisées.',
      'Créez un carnet dans Gemini Notebook et ajoutez-les comme sources.',
      'Envoyez le prompt de départ pour obtenir un tableau des échéances et des conditions.',
      'Posez les cinq questions du matériau et ouvrez chaque citation pour vérifier la réponse.',
      'Pour chaque question restée sans réponse, complétez vos documents plutôt que de laisser l’outil deviner.',
      'Partagez le carnet avec un collègue des achats et faites-lui poser trois questions de son choix.',
    ],
    prompt:
      'À partir uniquement des sources de ce carnet, établis un tableau de tous les contrats-cadres avec : fournisseur, objet, date d’échéance, préavis de non-reconduction, conditions de paiement, pénalités de retard et clause de révision des prix. Cite la source de chaque case. Si une information n’est dans aucune source, écris « non précisé dans les sources » au lieu de la déduire. Termine par la liste des contrats dont l’échéance ou le préavis tombent dans les six prochains mois, ou dont une clause importante est manquante.',
    materiau: {
      titre: 'Questions de test à poser au carnet',
      texte:
        '1. Quels contrats arrivent à échéance avant le 31 décembre, et quelle est leur date limite de dénonciation ?\n2. Quel est le délai de paiement prévu avec le fournisseur de linge ?\n3. Quelles sont les pénalités de retard prévues dans le contrat des produits d’accueil ?\n4. Quels fournisseurs peuvent réviser leurs prix en cours d’année, et à quelles conditions ?\n5. Quel est le prix actuel du kilo de café chez notre fournisseur ?',
    },
    variantes: {
      simple: 'Charger trois contrats et ne poser que les questions 1 et 2.',
      poussee:
        'Générer aussi un rapport de comparaison des clauses de révision de prix entre tous les contrats, puis une fiche de révision pour les nouveaux acheteurs.',
    },
    astuces: {
      notebook:
        'Les rapports citent leurs sources : cliquez sur chaque numéro pour relire le passage, en particulier pour les dates et les montants.',
      claude:
        'Pour comparer, déposez les mêmes documents dans un Projet et posez les cinq questions : notez les écarts entre les deux outils.',
    },
    vigilance:
      'Les contrats contiennent des conditions commerciales confidentielles : ne les chargez que dans un outil autorisé, et ne partagez le carnet qu’avec des collègues habilités. La réponse du carnet ne remplace pas la lecture du contrat par un juriste.',
    formateur: {
      resultat:
        'Un carnet partagé avec un tableau des contrats cité à la source, des réponses aux questions 1 à 4 avec citations vérifiées, et la question 5 sans réponse (le prix du café n’est pas dans les contrats-cadres) : le carnet doit le dire.',
      criteres: [
        'Chaque case du tableau renvoie à une source et l’apprenant en a ouvert plusieurs.',
        'Les informations absentes sont écrites « non précisé dans les sources ».',
        'La question 5 reste sans réponse plutôt que d’obtenir un prix inventé.',
        'Aucun document confidentiel n’a été chargé sans autorisation.',
      ],
      pieges: [
        'Croire une date d’échéance sans ouvrir la citation, alors qu’elle mélange deux contrats.',
        'Laisser le carnet répondre au prix du café à partir d’une source qui parle d’autre chose.',
        'Partager le carnet avec des personnes non habilitées.',
      ],
      competence: 'diligence',
      technique: 'sources',
    },
    motsCles: ['contrats-cadres', 'Gemini Notebook', 'échéances', 'corpus', 'citations'],
  },
];
