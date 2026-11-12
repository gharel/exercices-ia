/**
 * Agriculture, élevage et pêche : maraîchage, arboriculture, élevage, aquaculture, pêche,
 * coopératives et groupements de producteurs, vente directe.
 * Toutes les personnes, exploitations, adresses, prix et sommes sont fictives.
 */

export const vocabulaire = {
  structure: { g: 'f', s: 'coopérative agricole', p: 'coopératives agricoles' },
  client: { g: 'm', s: 'acheteur', p: 'acheteurs' },
  partenaire: { g: 'm', s: 'fournisseur d’intrants', p: 'fournisseurs d’intrants' },
  documentCourant: { g: 'f', s: 'fiche de traçabilité', p: 'fiches de traçabilité' },
  documentLong: {
    g: 'm',
    s: 'cahier des charges de la filière',
    p: 'cahiers des charges de la filière',
  },
  reunion: {
    g: 'f',
    s: 'réunion technique des producteurs',
    p: 'réunions techniques des producteurs',
  },
  offre: { g: 'm', s: 'panier de légumes de saison', p: 'paniers de légumes de saison' },
  poste: { g: 'm', s: 'ouvrier agricole', p: 'ouvriers agricoles' },
  evenement: {
    g: 'f',
    s: 'journée technique sur l’irrigation',
    p: 'journées techniques sur l’irrigation',
  },
  visuel: { g: 'f', s: 'affiche de stand de marché', p: 'affiches de stand de marché' },
  domaine: 'l’agriculture et l’élevage',
  motifReclamation: 'une commande livrée incomplète',
  donnees: 'le relevé des ventes des douze derniers mois, produit par produit',
  colonnes: 'Mois;Produit;Quantité vendue (kg);Prix moyen (XPF/kg);Chiffre d’affaires (XPF)',
  indicateur: 'le prix moyen de vente au kilo de chaque produit sur l’année',
  veille: 'les prix des intrants et les dispositifs d’aide aux producteurs',
  sourcesVeille:
    'les publications de la chambre d’agriculture, les sites des provinces et les annonces des fournisseurs d’intrants',
  jargon: 'les notions de calibre, de catégorie de qualité et de numéro de lot',
  procedure: 'la récolte et le conditionnement d’un lot destiné à la vente',
  situationTendue: 'l’acheteur d’une grande surface qui veut baisser de 10 % le prix des légumes',
  donneesSensibles:
    'les noms, coordonnées et comptes bancaires des adhérents, ainsi que leurs volumes de production et les prix négociés',
  corpus:
    'les conditions générales de vente, les grilles de prix et les cahiers des charges des acheteurs de la coopérative',
  publicCible: 'les familles du Grand Nouméa qui veulent des produits locaux de saison',
  etranger: 'un touriste australien qui visite le marché de producteurs',
  themeFormation: 'les gestes de récolte et de conditionnement avant la vente',
  tacheRepetitive: 'les réponses aux commandes de paniers de la semaine',
  planning: 'les tournées de récolte et de livraison de la semaine',
  comparaison: 'deux devis de matériel d’irrigation',
};

export const exercices = [
  {
    id: 'agri-fiche-panier-legumes',
    titre: 'Rédiger la fiche de présentation d’un panier de légumes pour la vente directe',
    metier: 'agriculture',
    niveau: 'debutant',
    famille: 'rediger',
    duree: 15,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Vous cultivez des légumes à La Foa et vous vendez des paniers à la semaine, à récupérer au marché ou à la ferme. Vos clients demandent ce que contient le panier et d’où viennent les légumes. Vous avez noté la composition de cette semaine sur votre téléphone.',
    objectif:
      'Transformer une liste brute en fiche de présentation claire et fidèle, sans laisser l’IA ajouter de promesses que vous ne pouvez pas tenir.',
    etapes: [
      'Copiez les notes du matériau dans votre outil d’IA avec le prompt de départ.',
      'Complétez les crochets : le public visé et la longueur souhaitée.',
      'Relisez la fiche ligne à ligne et surlignez toute affirmation qui ne figure pas dans vos notes (label, mode de culture, origine).',
      'Demandez à l’IA de retirer tout ce qui n’est pas dans les notes, puis de proposer une phrase pour la semaine où un légume manque.',
      'Gardez la version finale : elle servira de modèle pour les prochaines semaines.',
    ],
    prompt:
      'Tu es un producteur de légumes à La Foa, en Nouvelle-Calédonie, qui vend des paniers en vente directe. À partir de mes notes ci-dessous, rédige la fiche de présentation du panier de la semaine pour [public visé], en [nombre] mots environ.\n\nRègles :\n- Utilise uniquement les informations des notes. N’ajoute aucun label, aucun mode de culture ni aucune promesse (« bio », « sans traitement », « récolté le matin ») qui n’y figure pas.\n- Structure : une accroche d’une phrase, la liste des légumes avec les quantités, une idée de recette par légume principal, puis le prix et les modalités de retrait.\n- Ton chaleureux, vouvoiement.\n- Après la fiche, liste les informations manquantes que des clients demanderont probablement.\n\n<notes>\n[collez vos notes ici]\n</notes>',
    materiau: {
      titre: 'Notes du producteur sur le panier de la semaine (fictives)',
      texte:
        'Panier famille de la semaine, ferme des Trois Collines, La Foa\n1 kg de tomates\n2 laitues\n500 g de haricots verts\n1 kg de patates douces\n1 chou chinois\n1 botte de basilic\n6 concombres\nlégumes cueillis jeudi et vendredi, panier prêt le samedi à 6 h\nprix du panier 3 500 XPF, panier du couple 2 200 XPF\nretrait au marché de La Foa le samedi de 6 h à 11 h, ou à la ferme sur rendez-vous\nje n’ai pas de label bio\npaiement en espèces ou virement\nsi ça manque : remplacer les haricots par des pastèques ou des choux\nnom du producteur : Marc (prénom seulement, c’est mon nom de marché)',
    },
    variantes: {
      simple: 'Demander seulement la liste du panier avec les quantités et le prix, en 60 mots.',
      poussee:
        'Demander la même fiche en trois versions (famille, couple, restaurateur), puis un message court pour une publication Facebook du producteur.',
    },
    astuces: {
      chatgpt:
        'Ouvrez la fiche dans le canevas : vous pouvez demander de raccourcir ou de changer le ton d’un seul paragraphe.',
      copilot:
        'Dans Copilot Chat, joignez vos notes et demandez la fiche ; transformez-la ensuite en Copilot Pages (compte professionnel) pour la partager avec le groupement.',
    },
    vigilance:
      'Ne laissez jamais passer « bio », « sans pesticides » ou « récolté du matin » si vous ne pouvez pas le prouver : une allégation fausse engage le producteur. N’ajoutez pas de numéro de téléphone personnel sur un document public sans l’avoir choisi.',
    formateur: {
      resultat:
        'Une fiche fidèle aux notes (composition, prix de 3 500 XPF et de 2 200 XPF, retrait le samedi), sans mention « bio », avec des idées de recettes et la liste des informations manquantes (composition du panier du couple, contact pour le rendez-vous à la ferme).',
      criteres: [
        'Toutes les informations de la fiche figurent dans les notes (composition, prix, horaires de retrait).',
        'Aucune mention « bio » ou « sans traitement » n’apparaît.',
        'Le prompt demande de ne rien ajouter et de lister ce qui manque.',
        'Les deux prix et les deux modes de retrait sont présents.',
      ],
      pieges: [
        'Garder une accroche qui parle de « légumes bio » ou « cultivés sans produits chimiques », ajoutée par l’IA.',
        'Laisser l’IA inventer des quantités (poids de la laitue, calibre des tomates).',
        'Publier la mention d’un remplacement possible comme si c’était un engagement.',
      ],
      competence: 'discernement',
      technique: 'structurer',
    },
    motsCles: ['panier', 'vente directe', 'légumes', 'fiche', 'marché'],
  },
  {
    id: 'agri-compte-rendu-assemblee-cooperative',
    titre: 'Résumer le compte rendu de l’assemblée d’une coopérative pour les adhérents absents',
    metier: 'agriculture',
    niveau: 'debutant',
    famille: 'synthetiser',
    duree: 20,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'copilot',
    situation:
      'Vous êtes secrétaire de la coopérative de producteurs de Pouembout. L’assemblée de samedi a duré trois heures, avec beaucoup d’absents. Vous avez des notes en vrac et vous devez envoyer lundi un résumé court aux 40 adhérents.',
    objectif:
      'Résumer des notes dispersées pour un public précis, et vérifier que chaque décision, chaque montant et chaque date sont exacts.',
    etapes: [
      'Collez les notes du matériau dans votre outil d’IA avec le prompt de départ.',
      'Vérifiez le tableau des décisions ligne par ligne : objet, décision, montant, échéance.',
      'Demandez un message de 10 lignes pour les adhérents absents, centré sur ce qui change pour eux.',
      'Demandez à l’IA de lister ce qui est resté en suspens ou imprécis, sans le trancher à votre place.',
      'Relisez le message final : aucun nom d’adhérent critiqué en séance ne doit y figurer.',
    ],
    prompt:
      'Tu es secrétaire d’une coopérative de producteurs en province Nord, en Nouvelle-Calédonie. Voici mes notes en vrac de l’assemblée de samedi. Prépare :\n1. un tableau des décisions (sujet, décision, montant, date ou échéance, responsable) ;\n2. un message de 10 lignes au maximum pour les adhérents absents, avec ce qui change pour eux et ce qu’ils doivent faire ;\n3. la liste des points restés en suspens ou imprécis.\nN’ajoute aucune information absente des notes. Si un montant ou une date manque, écris « non précisé ». Ne cite aucun adhérent nommément à propos d’un désaccord.\n\n<notes>\n[collez vos notes ici]\n</notes>',
    materiau: {
      titre: 'Notes de l’assemblée du samedi (fictives)',
      texte:
        'Assemblée coopérative Pouembout, salle des fêtes, 31 présents sur 40 adhérents\nbilan de la saison : 86 tonnes de produits collectés, un peu moins que l’an dernier à cause de la sécheresse de septembre\ncotisation de l’an prochain : 12 000 XPF par adhérent, vote à la majorité, 3 contre\nachat groupé d’engrais : le président a un devis du fournisseur pour 1 650 000 XPF, commande à passer avant fin novembre, chacun paie sa part selon ses hectares, répartition à calculer\ncamion frigorifique d’occasion : devis 4 800 000 XPF, beaucoup de discussion, M. D. trouve ça trop cher, on reporte la décision à la prochaine assemblée, le trésorier cherche un deuxième devis\nmarché de Koné : on garde le stand du samedi, il faut deux volontaires par semaine, liste à remplir\nrappel : les cageots doivent être rendus propres, plusieurs ont été rendus sales\nquestions diverses : une adhérente demande des nouvelles de l’aide à l’irrigation, pas de réponse du président, il se renseigne\nprochaine assemblée : mars, date à fixer\nle trésorier a rappelé que 5 adhérents n’ont pas encore payé la cotisation de cette année',
    },
    variantes: {
      simple: 'Demander seulement le tableau des décisions, sans le message aux adhérents.',
      poussee:
        'Demander aussi une version de 5 lignes pour un SMS, puis un ordre du jour pour la prochaine assemblée à partir des points en suspens.',
    },
    astuces: {
      copilot:
        'Si les notes sont dans un fil d’e-mails, utilisez « Résumer (Outlook) » ; sinon joignez-les dans Copilot Chat et demandez le tableau.',
      claude:
        'Demandez, pour chaque ligne du tableau, la phrase des notes dont elle vient : la vérification devient rapide.',
    },
    vigilance:
      'Les cotisations impayées et les désaccords personnels n’ont pas leur place dans un message envoyé à tous les adhérents. Le compte rendu officiel reste le seul document qui fait foi.',
    formateur: {
      resultat:
        'Un tableau exact des décisions (cotisation de 12 000 XPF, engrais à 1 650 000 XPF avant fin novembre, camion reporté, stand de Koné), un message court et une liste des points en suspens (répartition de l’engrais, deuxième devis, date de l’assemblée, aide à l’irrigation).',
      criteres: [
        'Les montants et les échéances sont identiques aux notes.',
        'La décision sur le camion apparaît comme reportée, ni acceptée ni refusée.',
        'Les dates manquantes sont signalées « non précisé » au lieu d’être inventées.',
        'Le message aux adhérents ne cite ni M. D. ni les adhérents en retard de cotisation.',
      ],
      pieges: [
        'Laisser l’IA répartir l’achat d’engrais selon des hectares qu’elle ne connaît pas.',
        'Présenter l’achat du camion comme décidé.',
        'Nommer l’adhérent qui trouvait le camion trop cher dans le message à tous.',
      ],
      competence: 'discernement',
      technique: 'sources',
    },
    motsCles: ['coopérative', 'assemblée', 'compte rendu', 'adhérents', 'synthèse'],
  },
  {
    id: 'agri-affiche-stand-vanille-canva',
    titre: 'Créer dans Canva l’affiche d’un stand de producteur de vanille pour une foire',
    metier: 'agriculture',
    niveau: 'debutant',
    famille: 'visuels',
    duree: 20,
    outils: ['canva', 'chatgpt', 'claude'],
    outilConseille: 'canva',
    situation:
      'Vous produisez de la vanille à Lifou et vous tenez un stand à la foire agricole de Bourail. Vous voulez une affiche A3 lisible de loin, et une version carrée pour votre page de producteur.',
    objectif:
      'Préparer le texte d’une affiche avec l’IA, puis générer et retoucher le visuel dans Canva en gardant des informations exactes.',
    etapes: [
      'Avec ChatGPT ou Claude, faites rédiger le texte de l’affiche à partir de la fiche du stand : un titre court, trois atouts et les informations pratiques.',
      'Dans Canva, décrivez l’affiche à l’IA Canva ou au Design magique : format A3 portrait, couleurs chaudes, texte lisible à trois mètres.',
      'Choisissez une proposition, remplacez le texte d’exemple par le vôtre et vérifiez les prix et le numéro du stand.',
      'Utilisez l’écriture magique pour raccourcir un texte qui déborde.',
      'Déclinez l’affiche en format carré, avec le redimensionnement magique (Pro) ou dans un nouveau design.',
    ],
    prompt:
      'Tu es chargé de communication pour un producteur de vanille de Lifou, en Nouvelle-Calédonie. À partir de la fiche ci-dessous, propose le texte d’une affiche de stand pour une foire agricole : un titre de cinq mots au maximum, trois atouts de quatre mots chacun, puis les produits avec leurs prix, le numéro du stand et le moyen de paiement. N’ajoute aucune information absente de la fiche, aucun label ni aucune récompense. Propose trois titres au choix.\n\n<fiche>\n[collez la fiche du stand ici]\n</fiche>',
    materiau: {
      titre: 'Fiche du stand (fictive)',
      texte:
        'Producteur : Vanille du Chemin de Drehu, Lifou (nom fictif)\nProduits : sachet de 5 gousses, 2 500 XPF ; flacon d’extrait de vanille, 1 800 XPF ; poudre de vanille, 1 500 XPF ; gousse à l’unité, 600 XPF\nFabrication : gousses préparées et séchées sur l’exploitation, récolte de la saison dernière\nStand : allée B, numéro 14, du vendredi au dimanche\nPaiement : espèces et virement, pas de carte bancaire\nAtouts cités par le producteur : production familiale, séchage au soleil, petit stock\nContact : réseau social « Vanille du Chemin de Drehu » (pas de téléphone sur l’affiche)',
    },
    variantes: {
      simple:
        'Partir directement d’un modèle d’affiche Canva et n’utiliser l’IA que pour le texte.',
      poussee:
        'Créer trois affiches de style différent (sobre, chaleureuse, très visuelle), les faire commenter par un voisin de stand, puis enregistrer la meilleure comme modèle pour les prochaines foires.',
    },
    astuces: {
      canva:
        'Utilisez Calques magiques sur une photo de vos gousses : l’image devient modifiable, élément par élément. Le kit de marque (Pro) garde vos couleurs d’un visuel à l’autre.',
      chatgpt:
        'Demandez trois titres, puis lequel se lit le mieux à trois mètres du stand, et pourquoi.',
    },
    vigilance:
      'Aucun label, aucune médaille ni aucune origine qui ne figurent pas sur la fiche. Une image générée par l’IA ne montre pas votre vanille : utilisez uniquement vos vraies photos.',
    formateur: {
      resultat:
        'Une affiche A3 lisible, avec un titre court, trois atouts tirés de la fiche, les quatre prix exacts, le numéro de stand et les moyens de paiement, et sa version carrée.',
      criteres: [
        'Les quatre prix, le numéro du stand et le moyen de paiement sont exacts.',
        'Aucun label, aucune médaille ni « bio » n’est inventé.',
        'L’affiche se lit de loin : peu de mots, bon contraste.',
        'Aucune image générée n’est présentée comme une photo du produit.',
      ],
      pieges: [
        'Garder le texte d’exemple du modèle Canva, avec de faux prix.',
        'Afficher « paiement par carte » parce que le modèle le propose.',
        'Illustrer avec des gousses générées par l’IA, plus belles que le vrai produit.',
      ],
      competence: 'diligence',
      technique: 'format',
    },
    motsCles: ['affiche', 'Canva', 'vanille', 'foire', 'stand'],
  },
  {
    id: 'agri-fiche-recolte-tracabilite',
    titre: 'Transformer des consignes orales en fiche de suivi de récolte et de traçabilité',
    metier: 'agriculture',
    niveau: 'debutant',
    famille: 'organiser',
    duree: 15,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Un producteur d’ignames de Poindimié emploie quatre saisonniers pour la récolte. Il vous a dicté ce qu’il veut noter pour chaque lot, pour pouvoir retrouver d’où vient un sac en cas de problème. Vous voulez une fiche simple, à imprimer et à remplir au champ.',
    objectif:
      'Transformer des consignes dictées en document structuré et utilisable sur le terrain, en précisant le format attendu.',
    etapes: [
      'Copiez les consignes dictées dans votre outil d’IA avec le prompt de départ.',
      'Vérifiez que la fiche contient chaque information demandée par le producteur, rien de plus.',
      'Demandez un tableau à remplir au champ, avec des cases assez grandes pour être écrites à la main.',
      'Demandez à l’IA de signaler ce qui manque ou est ambigu dans les consignes, sans l’inventer.',
      'Imprimez la fiche et testez-la sur un lot imaginaire de trois sacs.',
    ],
    prompt:
      'Tu es conseiller dans une exploitation d’ignames en province Nord, en Nouvelle-Calédonie. Voici les consignes que m’a dictées le producteur pour suivre la récolte et retrouver l’origine de chaque lot. Prépare une fiche de suivi imprimable en A4 paysage, sous forme de tableau, à remplir à la main au champ : une ligne par lot, les colonnes dans l’ordre des consignes. Ajoute en dessous une zone d’observations et une ligne de signature du responsable du lot. N’ajoute aucune colonne qui ne figure pas dans les consignes, mais liste à part les informations qui te semblent manquer.\n\n<consignes>\n[collez les consignes dictées ici]\n</consignes>',
    materiau: {
      titre: 'Consignes dictées par le producteur (fictives)',
      texte:
        'Pour chaque lot, je veux la date de récolte, la parcelle (j’en ai trois, A, B et C), la variété, le nom de celui qui a récolté, le nombre de sacs et le poids total, et où va le lot : marché, coutume, coopérative ou vente à la ferme.\nQuand on met en sac, on colle une étiquette avec un numéro de lot, c’est la date et la lettre de la parcelle.\nIl faut noter si l’igname a été abîmée à l’arrachage, et combien de sacs sont mis de côté.\nOn pèse sur la balance du hangar, on note le poids de chaque sac s’il est hors du lot habituel.\nLe soir, je vérifie tout et je signe.\nAu stockage : noter où le lot est rangé et la date de sortie.\nJe ne veux pas de grosse paperasse, un tableau suffit.',
    },
    variantes: {
      simple: 'Demander seulement la liste des informations à noter, sans mise en page.',
      poussee:
        'Demander ensuite la même fiche en tableau Excel avec une colonne « numéro de lot » calculée par une formule, puis un mode d’emploi d’une demi-page pour les saisonniers.',
    },
    astuces: {
      claude:
        'Demandez la fiche sous forme de fichier Excel avec la « Création de fichiers » : le tableau est prêt à imprimer et à remplir.',
      copilot:
        'Dans Copilot Chat, demandez le tableau puis copiez-le dans Excel pour régler la largeur des colonnes avant l’impression.',
    },
    vigilance:
      'Cette fiche aide à s’organiser, mais elle ne remplace pas les obligations de traçabilité qui s’appliquent à l’exploitation : demandez-les à la chambre d’agriculture ou au service compétent de la province.',
    formateur: {
      resultat:
        'Une fiche A4 paysage avec une ligne par lot, qui reprend toutes les informations dictées (date, parcelle, variété, récolteur, sacs, poids, destination, abîmés, stockage) et une liste des points flous.',
      criteres: [
        'Toutes les rubriques dictées sont présentes, dans l’ordre.',
        'Aucune rubrique n’est ajoutée sans avoir été demandée.',
        'La numérotation du lot (date et lettre de la parcelle) est expliquée sur la fiche.',
        'Les points ambigus sont listés (poids hors du lot habituel, durée de stockage).',
      ],
      pieges: [
        'Laisser l’IA ajouter des rubriques réglementaires (numéros d’agrément, délais) sans les avoir vérifiées.',
        'Accepter un tableau trop dense pour être rempli à la main au champ.',
      ],
      competence: 'description',
      technique: 'format',
    },
    motsCles: ['traçabilité', 'récolte', 'ignames', 'fiche de suivi', 'lot'],
  },
  {
    id: 'agri-cout-revient-tomates',
    titre: 'Calculer le coût de revient d’un kilo de tomates et l’effet d’une hausse des intrants',
    metier: 'agriculture',
    niveau: 'intermediaire',
    famille: 'analyser',
    duree: 30,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Vous cultivez des tomates sous abri à Bourail. Votre fournisseur annonce une hausse de l’engrais, des produits de traitement et du carburant. Avant de fixer votre prix pour la saison prochaine, vous voulez savoir ce que cela change sur chaque kilo vendu.',
    objectif:
      'Faire calculer un coût de revient par l’IA, vérifier les calculs à la main, puis simuler un scénario de hausse.',
    etapes: [
      'Collez le tableau des charges et des quantités avec le prompt de départ.',
      'Vérifiez à la calculatrice le total des charges et le coût de revient par kilo vendu.',
      'Demandez ce qui change si l’on divise par les kilos récoltés plutôt que par les kilos vendus, et lequel des deux est juste.',
      'Demandez l’effet des hausses sur le coût de revient et sur la marge pour un prix de vente donné.',
      'Rédigez vous-même la décision sur le prix : l’IA calcule, c’est vous qui choisissez.',
    ],
    prompt:
      'Tu es conseiller de gestion pour des exploitations agricoles en Nouvelle-Calédonie. Voici les charges d’une saison de tomates sous abri et les quantités produites (données fictives).\n\n1. Calcule le total des charges, puis le coût de revient par kilo vendu. Montre tes calculs.\n2. Explique pourquoi on divise par les kilos vendus et non par les kilos récoltés.\n3. Calcule le nouveau coût de revient avec les hausses indiquées, et la différence par kilo en XPF et en pourcentage.\n4. Calcule la marge par kilo avant et après les hausses pour un prix de vente de [prix de vente] XPF/kg.\nSi une donnée te semble incohérente, signale-la au lieu de la corriger.\n\n<donnees>\n[collez le tableau et les hausses ici]\n</donnees>',
    materiau: {
      titre: 'Charges d’une saison de tomates sous abri (fictives)',
      texte:
        'Poste;Montant de la saison (XPF)\nPlants et semences;180 000\nEngrais;240 000\nProduits de traitement;95 000\nEau et électricité (irrigation);130 000\nMain-d’œuvre saisonnière;620 000\nEmballages (cagettes, filets);85 000\nCarburant et entretien du matériel;110 000\nTransport vers le marché;75 000\nAmortissement du matériel (abri, goutte-à-goutte);150 000\n\nQuantités : 4 500 kg récoltés, 500 kg perdus ou invendables, 4 000 kg vendus.\nPrix de vente moyen actuel : 500 XPF/kg.\nHausses annoncées : engrais +15 %, produits de traitement +10 %, carburant et entretien +8 %. Les autres postes ne changent pas.',
    },
    variantes: {
      simple: 'Demander seulement le total des charges et le coût de revient par kilo vendu.',
      poussee:
        'Demander le prix de vente qui garde la marge actuelle, puis un graphique du poids de chaque poste dans le coût de revient, et enfin trois leviers pour compenser la hausse.',
    },
    astuces: {
      chatgpt:
        'Déposez le tableau en CSV : l’analyse de données calcule en code, que vous pouvez afficher pour vérifier.',
      claude:
        'Demandez le tableau de calcul dans un artefact, avec les formules visibles, puis un fichier Excel.',
      gemini:
        'Collez le tableau dans Google Sheets et utilisez « Demander à Gemini » pour ajouter la colonne du poids de chaque poste.',
    },
    vigilance:
      'Avec vos vraies charges, ne partagez pas vos relevés bancaires ni les noms de vos fournisseurs. Le prix de vente se décide en tenant compte du marché : l’IA ne le connaît pas.',
    formateur: {
      resultat:
        'Un total de 1 685 000 XPF, un coût de revient de 421,25 XPF/kg vendu (et non 374 XPF/kg si l’on divise par les kilos récoltés), un coût après hausse de 434,83 XPF/kg (+13,58 XPF/kg, environ +3,2 %) et une marge qui passe de 78,75 à 65,18 XPF/kg pour un prix de 500 XPF.',
      criteres: [
        'Le total des charges (1 685 000 XPF) et le coût de revient (421,25 XPF/kg) sont exacts.',
        'L’apprenant a compris qu’on divise par les kilos vendus, pas par les kilos récoltés.',
        'Les hausses sont appliquées aux trois postes concernés seulement (54 300 XPF en plus).',
        'La décision sur le prix est rédigée ou validée par l’apprenant.',
      ],
      pieges: [
        'Diviser par 4 500 kg et sous-estimer le coût de revient d’environ 11 %.',
        'Appliquer la hausse de 15 % à toutes les charges.',
        'Reprendre telle quelle une recommandation de prix de l’IA sans regarder le marché.',
      ],
      competence: 'discernement',
      technique: 'critique',
    },
    motsCles: ['coût de revient', 'tomates', 'intrants', 'marge', 'tableau'],
  },
  {
    id: 'agri-dossier-aide-irrigation',
    titre:
      'Préparer un dossier de demande d’aide à partir de notes en vrac, sans inventer les conditions',
    metier: 'agriculture',
    niveau: 'intermediaire',
    famille: 'rediger',
    duree: 30,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Un maraîcher de Boulouparis veut s’équiper d’un système d’irrigation goutte-à-goutte après deux saisons de sécheresse. Il pense qu’une aide de la province existe, mais il n’a pas le règlement sous la main. Vous l’aidez à préparer la présentation de son projet à partir de ses notes.',
    objectif:
      'Rédiger un projet clair à partir de notes dispersées, en séparant ce que l’on sait du projet de ce qu’il faut vérifier auprès de l’organisme.',
    etapes: [
      'Collez les notes du maraîcher avec le prompt de départ et demandez d’abord une analyse, sans rédiger.',
      'Demandez la présentation du projet en quatre parties : l’exploitation, le besoin, le projet chiffré, le plan de financement.',
      'Vérifiez que chaque montant vient des notes et que le total est juste.',
      'Demandez la liste des questions à poser à la province ou à la chambre d’agriculture : conditions, plafond, pièces, dates.',
      'Relisez le dossier : il ne doit affirmer aucune condition, aucun taux ni aucune date que vous n’avez pas lus dans un document officiel.',
    ],
    prompt:
      'Tu es conseiller auprès d’agriculteurs en Nouvelle-Calédonie. Voici les notes d’un maraîcher qui prépare une demande d’aide pour un système d’irrigation. Commence par analyser : liste ce qui est connu du projet et ce qui manque, sans rédiger. Je te demanderai ensuite de rédiger la présentation du projet.\n\nRègles pour toute la suite :\n- N’affirme aucune condition d’éligibilité, aucun taux ni plafond d’aide, aucune date limite ni aucune pièce obligatoire : écris « [à vérifier auprès de l’organisme] ».\n- N’utilise que les chiffres des notes.\n- Termine par la liste des questions à poser à l’organisme.\n\n<notes>\n[collez les notes ici]\n</notes>',
    materiau: {
      titre: 'Notes du maraîcher (fictives)',
      texte:
        'Exploitation : Ferme du Plateau (nom fictif), Boulouparis, 2,2 hectares dont 1,5 ha de cultures maraîchères, installé depuis 6 ans, 2 permanents + saisonniers\nProblème : deux saisons de sécheresse, arrosage à la main et avec un vieux tuyau, forage qui s’épuise en fin de saison, pertes d’environ 20 % sur les salades et les concombres l’an dernier\nProjet : goutte-à-goutte sur 1 ha, une cuve de stockage pour ne plus pomper en pleine journée, une pompe plus économe\nDevis : pompe 640 000 XPF ; réseau goutte-à-goutte 1 150 000 XPF ; cuve 480 000 XPF ; pose 220 000 XPF\nJ’ai 700 000 XPF de côté pour ma part\nJe veux déposer avant la saison fraîche\nJ’ai entendu qu’il y a une aide de la province, peut-être jusqu’à 50 %, mais je ne sais pas si c’est vrai ni si ça s’applique à la pose\nLe technicien de la chambre d’agriculture est passé en mars, il a trouvé le projet cohérent mais n’a rien écrit\nJe n’ai pas de comptabilité à jour pour l’an dernier, mon comptable la termine en décembre',
    },
    variantes: {
      simple:
        'Demander seulement le tableau du plan de financement et la liste des questions à poser à l’organisme.',
      poussee:
        'Demander ensuite un e-mail de prise de contact pour le service de la province, puis la liste des pièces à rassembler une fois les conditions confirmées.',
    },
    astuces: {
      claude:
        'Demandez le dossier dans un artefact en quatre parties : vous pouvez corriger chaque partie sans toucher aux autres.',
      chatgpt:
        'Ouvrez le dossier dans le canevas et demandez de surligner chaque passage marqué « à vérifier ».',
      copilot:
        'Avec Copilot dans Word (selon la licence), collez le dossier et demandez de mettre le plan de financement sous forme de tableau ; sinon, faites-le dans Copilot Chat.',
    },
    vigilance:
      'Les conditions et le montant d’une aide ne se lisent que dans le texte officiel de l’organisme : « jusqu’à 50 % » est une rumeur, pas une règle. Ne collez ni numéros de compte ni pièces d’identité.',
    formateur: {
      resultat:
        'Une présentation en quatre parties, un plan de financement exact (total des devis 2 490 000 XPF, autofinancement 700 000 XPF, besoin de 1 790 000 XPF) où le taux et les conditions restent à vérifier, et une liste de questions à poser à l’organisme.',
      criteres: [
        'Le total des devis (2 490 000 XPF) et l’autofinancement (700 000 XPF) sont justes.',
        'Aucune condition ni aucun taux d’aide n’est affirmé ; tout est marqué « à vérifier ».',
        'La rumeur « jusqu’à 50 % » n’apparaît pas comme un fait dans le dossier.',
        'Les questions à poser portent sur l’éligibilité de la pose, le plafond, les pièces et les dates.',
      ],
      pieges: [
        'Laisser l’IA inscrire un taux d’aide de 50 % dans le plan de financement.',
        'Écrire que le technicien a « validé » le projet, alors qu’il n’a rien écrit.',
        'Inventer l’état de la comptabilité de l’an dernier.',
      ],
      competence: 'diligence',
      technique: 'sources',
    },
    motsCles: ['aide', 'subvention', 'irrigation', 'dossier', 'province'],
  },
  {
    id: 'agri-planning-cultures-saison',
    titre:
      'Planifier les cultures d’une saison en tenant compte de la saison cyclonique et de la main-d’œuvre',
    metier: 'agriculture',
    niveau: 'intermediaire',
    famille: 'organiser',
    duree: 30,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'gemini',
    situation:
      'Vous exploitez trois parcelles à Boulouparis avec deux permanents et un saisonnier. Vous voulez planifier les plantations et les récoltes des prochains mois sans surcharger l’équipe, sans planter de culture fragile juste avant la saison cyclonique et en économisant l’eau.',
    objectif:
      'Construire un planning sous contraintes avec l’IA, le corriger en plusieurs échanges et repérer les contraintes incompatibles au lieu de les laisser trancher.',
    etapes: [
      'Donnez à l’IA les parcelles, les cultures et les contraintes du matériau, et demandez un calendrier mois par mois sous forme de tableau.',
      'Vérifiez chaque contrainte (cycles, eau, main-d’œuvre, congés) et signalez à l’IA ce qui ne va pas.',
      'Demandez une deuxième version avec une marge de sécurité de deux semaines avant la saison cyclonique, et comparez les deux.',
      'Demandez les semaines de pointe de travail et le besoin de saisonniers pour chacune.',
      'Notez les incompatibilités qu’il vous revient de trancher, puis faites relire le planning par votre technicien.',
    ],
    prompt:
      'Tu es conseiller agricole en Nouvelle-Calédonie. Nous sommes en [mois]. Propose un calendrier des plantations et des récoltes pour l’exploitation ci-dessous, mois par mois, jusqu’à fin [mois de fin]. Présente un tableau : parcelle, culture, plantation, récolte, besoin d’eau, charge de travail. Respecte toutes les contraintes. Si deux contraintes sont incompatibles, dis-le clairement au lieu de choisir à ma place. Ne donne aucune date de saison cyclonique ni aucun conseil de traitement : je les vérifierai auprès de Météo-France et de mon technicien.\n\n<exploitation_et_contraintes>\n[collez la description ici]\n</exploitation_et_contraintes>',
    materiau: {
      titre: 'Parcelles, cultures et contraintes (fictives)',
      texte:
        'PARCELLES\nA : 0,5 ha, sous abri, bonne irrigation\nB : 0,8 ha, plein champ, irrigation limitée au forage\nC : 0,6 ha, plein champ, terrain qui retient l’eau\n\nCULTURES ENVISAGÉES\nTomates sous abri : plantation puis récolte 4 mois après, récolte étalée sur 6 semaines\nPastèques : 3 mois de cycle, besoin d’eau important\nPatates douces : 4 mois de cycle, supportent un peu la sécheresse\nSalades : cycle de 6 semaines, à renouveler toutes les 3 semaines\n\nCONTRAINTES\n- Rien de fragile ne doit être en terre ou en pleine récolte quand arrive la saison cyclonique ; je la compte à partir de mi-novembre (à vérifier).\n- Le forage ne permet pas d’arroser plus de deux parcelles en même temps.\n- Équipe : 2 permanents ; 1 saisonnier disponible de septembre à décembre seulement.\n- Je ne veux pas plus de deux récoltes importantes la même semaine.\n- Congés des permanents : une semaine chacun en août, pas en même temps.\n- Marché de producteurs tous les samedis ; demande plus forte en décembre.\n- Je veux garder la parcelle C en repos 2 mois dans l’année.',
    },
    variantes: {
      simple: 'Planifier une seule parcelle, la parcelle A, sur quatre mois.',
      poussee:
        'Demander le calendrier en fichier Excel avec la charge de travail par semaine, puis un plan B en cas de cyclone annoncé à une semaine de la récolte.',
    },
    astuces: {
      gemini:
        'Demandez un tableau, puis exportez-le dans Google Sheets pour y colorer les semaines de pointe.',
      chatgpt: 'Demandez le tableau final au format Excel pour le transmettre au technicien.',
      claude:
        'Demandez le calendrier sous forme de fichier Excel avec la « Création de fichiers », prêt à partager.',
    },
    vigilance:
      'Les cycles de culture, les dates de la saison cyclonique et les besoins en eau varient selon la variété et le terrain : l’IA propose, votre technicien et vos observations tranchent. Ne planifiez rien de fragile sur la seule foi d’une date donnée par l’IA.',
    formateur: {
      resultat:
        'Un calendrier mois par mois qui évite les cultures fragiles en terre à la mi-novembre, ne dépasse jamais deux récoltes importantes par semaine, répartit l’eau sur deux parcelles maximum et signale les incompatibilités, notamment la demande plus forte en décembre alors que rien de fragile ne doit être en terre ni en récolte après la mi-novembre, et ce que « fragile » veut dire pour chaque culture.',
      criteres: [
        'Chaque contrainte est respectée ou explicitement signalée comme impossible à tenir.',
        'Le saisonnier n’est planifié qu’entre septembre et décembre.',
        'Les dates de la saison cyclonique sont marquées à vérifier, pas affirmées.',
        'Une marge de sécurité est visible dans la deuxième version.',
      ],
      pieges: [
        'Laisser les tomates en récolte pendant la saison cyclonique, sans marge.',
        'Arroser trois parcelles en même temps, contre la contrainte du forage.',
        'Accepter des durées de cycle différentes de celles du matériau sans le voir.',
      ],
      competence: 'discernement',
      technique: 'iterer',
    },
    motsCles: ['planning', 'cultures', 'saison cyclonique', 'main-d’œuvre', 'irrigation'],
  },
  {
    id: 'agri-reponse-lot-conteste',
    titre: 'Répondre à un acheteur qui conteste la qualité d’un lot livré',
    metier: 'agriculture',
    niveau: 'intermediaire',
    famille: 'rediger',
    duree: 20,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'copilot',
    situation:
      'Vous produisez des avocats à Koné et vous livrez un restaurant de Nouméa. Il vous écrit que le dernier lot est abîmé et demande un remboursement. Vos notes disent le contraire en partie. Vous voulez répondre calmement, sans reconnaître une faute que vous n’êtes pas sûr d’avoir commise.',
    objectif:
      'Construire une réponse délicate en plusieurs échanges : analyser, comparer deux versions, puis ajuster le ton et les engagements.',
    etapes: [
      'Donnez à l’IA l’e-mail de l’acheteur et vos notes, et demandez d’abord une analyse, sans rédiger.',
      'Demandez deux versions de réponse : une très factuelle, une plus commerciale.',
      'Comparez-les : laquelle respecte exactement votre consigne ? Laquelle reconnaît ou promet trop ?',
      'Demandez une version finale de 150 mots au maximum, qui propose de regarder les photos avant tout geste.',
      'Vérifiez qu’aucun montant, aucune date ni aucun engagement n’a été ajouté, puis relisez-la à voix haute.',
    ],
    prompt:
      'Tu es producteur d’avocats en Nouvelle-Calédonie et tu fournis des restaurants. Je dois répondre à un acheteur qui conteste la qualité d’un lot. Commence par analyser la situation, sans rédiger : résume ce que l’acheteur affirme, ce que mes notes confirment ou contredisent, et ce que je peux proposer sans me contredire. Je te demanderai ensuite des propositions de réponse.\n\n<email_acheteur>\n[collez l’e-mail de l’acheteur]\n</email_acheteur>\n\n<mes_notes>\n[collez vos notes]\n</mes_notes>',
    materiau: {
      titre: 'E-mail de l’acheteur et notes du producteur (fictifs)',
      texte:
        'E-MAIL DU RESTAURATEUR (restaurant fictif « Chez Hélène », Nouméa)\nBonjour,\nLe lot d’avocats de mardi est inutilisable : au moins 40 kg sur 120 sont noirs à l’intérieur ou trop mûrs. J’ai dû modifier ma carte. Je vous demande de rembourser les 40 kg, soit 18 000 XPF, et de livrer un lot correct demain.\nCordialement,\nHélène\n\nNOTES DU PRODUCTEUR\n- lot de 120 kg à 450 XPF/kg, soit 54 000 XPF, récolté lundi, livré mardi\n- le bon de livraison a été signé par le cuisinier à la réception, sans réserve\n- la chambre froide du restaurant était en panne l’an dernier, le cuisinier me l’a dit une fois\n- il y a toujours un peu de perte sur les fruits très mûrs, j’en avais prévenu : « lot mûr, à consommer sous 3 jours »\n- pas de photos de sa part, je n’ai pas de photo non plus du lot au départ\n- prêt à faire un geste jusqu’à 10 000 XPF si les photos montrent un vrai problème, pas avant\n- c’est un bon client depuis deux ans, il ne faut pas le perdre\n- pas de livraison possible demain, la prochaine tournée est vendredi',
    },
    variantes: {
      simple: 'Demander directement une seule réponse, puis la corriger en un échange.',
      poussee:
        'Faire jouer l’acheteur par l’IA pour préparer l’appel téléphonique qui suivra l’e-mail, puis lui demander un retour sur votre argumentation. Créer enfin une petite procédure « lot contesté ».',
    },
    astuces: {
      copilot:
        'Dans Outlook, partez d’un « Brouillon avec Copilot », puis lancez « Coaching par Copilot » sur la version finale pour vérifier le ressenti du lecteur.',
      claude:
        'Demandez les deux versions côte à côte dans un tableau, pour les comparer phrase par phrase.',
    },
    vigilance:
      'Ne reconnaissez pas de faute et ne promettez pas de remboursement avant d’avoir vu les photos. Le nom réel de l’acheteur n’est pas à coller dans l’outil : utilisez un prénom fictif ou une initiale.',
    formateur: {
      resultat:
        'Une réponse courtoise et ferme qui regrette la gêne, rappelle les faits (récolte lundi, livraison mardi, bon signé, lot annoncé mûr), demande des photos, propose de revoir la situation après réception et fixe la prochaine livraison vendredi, sans promettre de remboursement ni de livraison le lendemain.',
      criteres: [
        'L’analyse a été demandée avant la rédaction.',
        'La réponse ne promet ni le remboursement de 18 000 XPF ni une livraison demain.',
        'Le geste commercial de 10 000 XPF n’est pas annoncé dans l’e-mail.',
        'Le ton reste cordial et la réponse tient en 150 mots au maximum.',
      ],
      pieges: [
        'Accepter une version qui propose de rembourser « pour garder le client ».',
        'Laisser l’IA mentionner la panne de la chambre froide, qui est une remarque de bouche à oreille.',
        'Annoncer une livraison le lendemain, alors que la tournée est vendredi.',
      ],
      competence: 'description',
      technique: 'decomposer',
    },
    motsCles: ['réclamation', 'lot', 'acheteur', 'qualité', 'avocats'],
  },
  {
    id: 'agri-veille-hebdomadaire',
    titre: 'Programmer une veille hebdomadaire sur la météo, les prix et les alertes sanitaires',
    metier: 'agriculture',
    niveau: 'avance',
    famille: 'veiller',
    duree: 45,
    outils: ['gemini', 'chatgpt', 'claude', 'copilot'],
    outilConseille: 'gemini',
    situation:
      'Vous êtes technicien d’un groupement de producteurs de la côte Est. Chaque lundi, vous voulez un point de quelques lignes pour les adhérents : la météo de la semaine, les prix constatés sur les marchés et les alertes sanitaires publiées par les organismes officiels. Vous voulez que la veille se relance toute seule.',
    objectif:
      'Concevoir une veille récurrente et sourcée, vérifier chaque information et ne diffuser que ce qui a une source officielle.',
    etapes: [
      'Lancez une recherche avec le prompt de départ : Deep Research (Gemini), Recherche approfondie (ChatGPT), Recherche (Claude, payante) ou Copilot Chat.',
      'Ouvrez au moins cinq sources citées et vérifiez qu’elles disent bien ce que le rapport leur attribue. Notez ce qui n’est pas vérifiable.',
      'Demandez de remettre le résultat au format du modèle de fiche fourni, avec la source et la date de chaque ligne.',
      'Programmez la relance du lundi : « Programmer des actions » dans Gemini, ou une tâche planifiée dans ChatGPT ou Claude (selon votre offre).',
      'Après deux semaines, comparez les fiches reçues et corrigez le prompt : sources trop pauvres, informations périmées, ton.',
    ],
    prompt:
      'Tu es chargé de veille pour un groupement de producteurs de la côte Est de la Nouvelle-Calédonie (maraîchage, fruits, élevage). Prépare le point de la semaine à partir de sources ouvertes et récentes.\n\nPour chaque rubrique, cite la source, sa date et indique si l’information vient d’une seule source ou de plusieurs :\n1. la météo des sept prochains jours et les avis de vigilance éventuels (sources officielles uniquement) ;\n2. les prix constatés cette semaine sur les marchés et les produits du groupement, si des données publiques existent ;\n3. les alertes sanitaires publiées par les organismes officiels (animaux, végétaux).\nN’invente aucune donnée : si tu ne trouves rien de récent et de sourcé, écris « rien trouvé ». N’émets aucun conseil de traitement ni aucune consigne sanitaire : renvoie vers la source officielle.\n\nPrésente le résultat selon ce modèle :\n<modele>\n[collez le modèle de fiche de veille]\n</modele>',
    materiau: {
      titre: 'Modèle de fiche de veille du lundi',
      texte:
        'VEILLE DU LUNDI : semaine du [date]\n\n1. Météo et vigilance\nJour;Prévision;Vigilance éventuelle;Source et date\n\n2. Prix du marché\nProduit;Prix constaté;Lieu et date;Source;Plusieurs sources (oui/non)\n\n3. Alertes sanitaires\nAlerte;Concerne;Source officielle et date;Lien\n\n4. À vérifier avant diffusion\n\n5. En deux phrases : ce que les adhérents doivent retenir cette semaine',
    },
    variantes: {
      simple: 'Faire une seule recherche sur la météo de la semaine, sans planification.',
      poussee:
        'Chaque semaine, ajouter la fiche à un carnet Gemini Notebook pour suivre l’évolution des prix sur deux mois, citations à l’appui, puis en tirer une courte FAQ pour les adhérents.',
    },
    astuces: {
      gemini:
        'Exportez le rapport Deep Research dans Google Docs pour l’annoter, puis programmez la relance avec « Programmer des actions ».',
      chatgpt:
        'Une tâche planifiée (payante) relance la même demande chaque semaine : gardez le modèle de fiche dans le prompt.',
      claude:
        'Sans abonnement, la recherche web suffit pour un premier essai ; la Recherche, payante, rend un rapport plus complet.',
    },
    vigilance:
      'Une IA peut inventer un prix ou une alerte plausible. Rien n’est diffusé aux adhérents sans avoir ouvert la source. Les consignes sanitaires et les décisions de protection des cultures se lisent chez l’organisme officiel ou auprès du technicien, jamais dans le seul rapport.',
    formateur: {
      resultat:
        'Une fiche du lundi au format demandé, où chaque ligne a une source datée et ouverte, une rubrique « à vérifier » honnête, et une relance hebdomadaire programmée ou décrite avec précision.',
      criteres: [
        'Chaque information a une source datée, ouverte par l’apprenant.',
        'Les informations à source unique et les « rien trouvé » sont signalés.',
        'Aucune consigne sanitaire ni conseil de traitement n’est donné par l’IA.',
        'La relance du lundi est configurée ou décrite précisément.',
      ],
      pieges: [
        'Diffuser un prix ou une prévision dont la source n’existe pas ou parle d’une autre île.',
        'Confondre une alerte sanitaire de métropole ou d’un autre pays avec la situation locale.',
        'Prendre une prévision ancienne pour celle de la semaine.',
      ],
      competence: 'discernement',
      technique: 'sources',
    },
    motsCles: ['veille', 'météo', 'prix', 'alertes sanitaires', 'tâche planifiée'],
  },
  {
    id: 'agri-assistant-adherents-groupement',
    titre: 'Créer un assistant qui répond aux questions des adhérents d’un groupement',
    metier: 'agriculture',
    niveau: 'avance',
    famille: 'automatiser',
    duree: 60,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'copilot',
    situation:
      'Le groupement de producteurs de Poindimié compte 60 adhérents. Le technicien reçoit chaque semaine les mêmes questions : horaires de dépôt des cageots, cotisation, calendrier des livraisons, que faire si un lot est refusé. Vous voulez un assistant interne qui prépare les réponses à partir des documents du groupement et renvoie vers le technicien pour tout le reste.',
    objectif:
      'Créer un assistant réutilisable avec des instructions permanentes et des documents de référence, puis le tester et corriger ses réponses.',
    etapes: [
      'Rassemblez 3 ou 4 documents de référence sans données personnelles : règlement du groupement, calendrier des dépôts, grille des cotisations, guide de conditionnement.',
      'Créez un agent (Copilot), un Projet (Claude, ChatGPT) ou un Gem (Gemini) et ajoutez-y ces documents.',
      'Rédigez les instructions avec le prompt de départ : rôle, ton, sources à utiliser, conduite à tenir quand la réponse n’est pas dans les documents.',
      'Testez l’assistant avec les cinq questions du matériau et notez les réponses fausses ou inventées.',
      'Corrigez les instructions et refaites le test jusqu’à obtenir des réponses fiables qui citent le document utilisé et renvoient au technicien quand il le faut.',
    ],
    prompt:
      'Tu es l’assistant du groupement de producteurs de [nom du groupement], en province Nord de la Nouvelle-Calédonie. Tu prépares des projets de réponse aux questions des adhérents, que le technicien relit avant envoi.\n\nRègles :\n- Réponds uniquement à partir des documents fournis dans cet espace. Cite le document et le passage utilisés.\n- Si la réponse n’est pas dans les documents, dis-le clairement et propose de transmettre la question au technicien. N’invente jamais de règle, de prix, de délai ni de date.\n- Pour toute question de traitement des cultures, de soins aux animaux ou de santé des végétaux, ne donne aucun conseil : renvoie systématiquement vers le technicien ou le vétérinaire.\n- Ton : courtois, simple, en vouvoiement, 120 mots au maximum.\n- Termine par la signature : « Le groupement ».',
    materiau: {
      titre: 'Questions de test des adhérents',
      texte:
        '1. À quelle heure dois-je déposer mes cageots le jeudi ?\n2. Combien coûte l’adhésion cette année et à quelle date la payer ?\n3. Mon lot a été refusé au dépôt, que dois-je faire ?\n4. Mes courgettes ont des taches blanches sur les feuilles, quel produit dois-je utiliser et à quelle dose ?\n5. Quel prix le groupement me paie-t-il ce mois-ci pour mes ignames ?',
    },
    variantes: {
      simple:
        'Se contenter d’un prompt réutilisable enregistré dans un document, sans créer d’assistant.',
      poussee:
        'Ajouter des exemples de bonnes réponses dans les instructions, puis faire évaluer l’assistant par le technicien sur dix nouvelles questions réelles, sans noms.',
    },
    astuces: {
      copilot:
        'Dans « Créer un agent », collez les règles dans les instructions et ajoutez les documents comme sources ; partagez l’agent avec le technicien seulement.',
      claude:
        'Dans un Projet, déposez les documents dans les connaissances du projet et collez les règles dans ses instructions.',
      gemini: 'Créez un Gem, collez les règles dans ses instructions et ajoutez les documents.',
      chatgpt:
        'Un Projet suffit pour le technicien ; un GPT (création payante) permet de le partager plus largement.',
    },
    vigilance:
      'N’ajoutez aucun document contenant des noms, des volumes ou des prix individuels d’adhérents. L’assistant ne remplace ni le technicien ni le vétérinaire : il ne donne jamais de dose ni de traitement.',
    formateur: {
      resultat:
        'Un assistant qui répond juste aux questions couvertes par les documents (1, 2, 3), cite ses sources, et renvoie vers le technicien pour la question 4 (traitement) et pour la question 5 (prix, absent des documents).',
      criteres: [
        'Les instructions disent quoi faire quand l’information manque et interdisent tout conseil de traitement.',
        'Les réponses citent le document utilisé.',
        'La question 4 reçoit un renvoi vers le technicien, sans produit ni dose.',
        'L’apprenant a repéré au moins une réponse à corriger et a modifié les instructions en conséquence.',
      ],
      pieges: [
        'Se satisfaire d’une réponse plausible à la question 4, avec un produit et une dose inventés.',
        'Charger des documents avec des volumes et des prix individuels d’adhérents.',
        'Laisser l’assistant donner un prix pour la question 5 faute de document.',
      ],
      competence: 'delegation',
      technique: 'instructions',
    },
    motsCles: ['assistant', 'groupement', 'adhérents', 'agent', 'questions fréquentes'],
  },
  {
    id: 'agri-notebook-fiches-techniques',
    titre: 'Interroger des fiches techniques de culture avec un carnet Gemini Notebook',
    metier: 'agriculture',
    niveau: 'avance',
    famille: 'synthetiser',
    duree: 45,
    outils: ['notebook', 'gemini', 'chatgpt', 'claude'],
    outilConseille: 'notebook',
    situation:
      'Vous êtes technicien de coopérative et vous avez rassemblé une dizaine de fiches techniques de culture (tomate, patate douce, igname, salade…), des guides de bonnes pratiques et deux comptes rendus de visites de parcelles. Les producteurs posent des questions précises et vous voulez retrouver vite la réponse, avec sa source.',
    objectif:
      'Charger un corpus de documents dans un carnet, poser des questions précises, vérifier chaque citation et reconnaître ce que les sources ne disent pas.',
    etapes: [
      'Créez un carnet dans Gemini Notebook et ajoutez comme sources vos fiches techniques et guides (PDF ou Docs), sans données personnelles.',
      'Posez les questions du matériau dans la Discussion et ouvrez chaque citation numérotée pour vérifier le passage.',
      'Générez un rapport « FAQ » et un guide d’étude à partir des sources, puis relisez-les phrase par phrase.',
      'Posez volontairement une question dont la réponse n’est pas dans les sources et vérifiez que le carnet le dit au lieu d’inventer.',
      'Générez une carte mentale pour un nouveau salarié, puis partagez le carnet avec un collègue.',
    ],
    prompt:
      'Réponds uniquement à partir des sources du carnet. Pour la culture de [culture] à [commune], dis-moi : 1) les principales étapes de la plantation à la récolte ; 2) les points de vigilance cités par les sources ; 3) les différences entre les fiches si elles ne disent pas la même chose. Cite le passage de chaque source utilisée. Si une information n’est pas dans les sources, écris « non trouvé dans les sources » et ne complète pas avec tes connaissances générales. Ne donne aucune dose ni aucun délai : renvoie à la fiche technique ou au technicien.',
    materiau: {
      titre: 'Questions de test à poser au carnet',
      texte:
        '1. Quelles sont les étapes de la culture de la patate douce, de la plantation à la récolte ?\n2. Quelles maladies les fiches citent-elles pour la tomate sous abri ?\n3. Les deux guides recommandent-ils le même espacement entre les plants de salade ?\n4. Que disent les fiches de la conservation des ignames après la récolte ?\n5. Combien de litres d’eau par plant faut-il apporter en saison sèche ? (les fiches ne la traitent pas toutes, ni de la même façon)\n6. Quelle variété de tomate résiste le mieux aux cyclones ? (question piège : les fiches techniques n’en parlent en général pas)',
    },
    variantes: {
      simple: 'Charger seulement trois fiches et poser trois questions, sans rapport.',
      poussee:
        'Demander un rapport de comparaison de deux cultures, puis une FAQ de 10 questions que les nouveaux adhérents poseront, chaque réponse citée. Ajouter ensuite le Résumé audio comme présentation pour une réunion.',
    },
    astuces: {
      notebook:
        'Chargez les documents comme Sources, puis générez un rapport (FAQ) : chaque point renvoie à sa source. La Carte mentale donne un plan de formation pour un nouveau salarié.',
      gemini:
        'Pour une question qui sort des sources, ouvrez une conversation Gemini à part et vérifiez la réponse sur un site officiel.',
    },
    vigilance:
      'Le carnet ne répond qu’avec les documents chargés : si une fiche est ancienne ou propre à un autre pays, la réponse le sera aussi. Doses, délais et traitements se confirment auprès du technicien, jamais dans la seule réponse du carnet.',
    formateur: {
      resultat:
        'Un carnet qui répond aux questions 1 à 4 avec des citations vérifiables, qui signale « non trouvé » pour la question 6 si aucune source n’en parle, une réponse partielle et citée pour la question 5, et une FAQ relue par l’apprenant.',
      criteres: [
        'Chaque réponse s’accompagne d’une citation numérotée ouverte et vérifiée.',
        'La question piège (variété résistante aux cyclones) reçoit « non trouvé dans les sources ».',
        'Les différences entre deux fiches sont signalées, pas gommées.',
        'Aucune dose ni aucun délai n’est repris sans renvoi au technicien.',
      ],
      pieges: [
        'Compléter une réponse manquante avec les connaissances générales de l’IA, hors sources.',
        'Croire une citation sans ouvrir le passage cité.',
        'Charger des fiches dont les données (noms, parcelles) sont celles d’adhérents.',
      ],
      competence: 'discernement',
      technique: 'sources',
    },
    motsCles: ['Gemini Notebook', 'fiches techniques', 'carnet', 'citations', 'corpus'],
  },
  {
    id: 'agri-ventes-aquacole-previsionnel',
    titre: 'Analyser douze mois de ventes d’une ferme aquacole et bâtir le prévisionnel de l’année',
    metier: 'agriculture',
    niveau: 'avance',
    famille: 'analyser',
    duree: 60,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Vous gérez une petite ferme de crevettes près de Bourail. Vous avez saisi dans un tableur vos ventes et vos charges des douze derniers mois. Vous voulez comprendre la saison, repérer ce qui a coûté cher et préparer le prévisionnel de l’année prochaine pour votre banque et votre trésorerie.',
    objectif:
      'Enchaîner nettoyage des données, analyse, scénarios et rédaction, en vérifiant chaque étape avant de passer à la suivante.',
    etapes: [
      'Étape 1 : collez le tableau et faites contrôler les données : chiffre d’affaires recalculé (kilos par prix), totaux, valeurs anormales. Vérifiez vous-même deux lignes.',
      'Étape 2 : demandez l’analyse de la saison : mois forts et faibles, marge mensuelle (chiffre d’affaires moins charges), effet de l’événement du mois de mars.',
      'Étape 3 : demandez un prévisionnel de l’année suivante avec deux scénarios, en expliquant les hypothèses. Corrigez celles qui ne vous semblent pas réalistes.',
      'Étape 4 : demandez un graphique mois par mois (ventes et charges), puis un résumé d’une page pour la banque, avec les limites des prévisions.',
      'Relisez l’ensemble : les hypothèses et la décision de trésorerie restent les vôtres.',
    ],
    prompt:
      'Tu es conseiller de gestion pour une ferme aquacole en Nouvelle-Calédonie. Nous allons travailler en plusieurs étapes ; ne passe à l’étape suivante que lorsque je te le demande.\n\nÉtape 1 : voici les ventes et les charges des douze derniers mois (données fictives). Contrôle le tableau : recalcule le chiffre d’affaires de chaque mois (kilos × prix moyen) et compare-le à celui du tableau, calcule les totaux annuels et signale toute valeur anormale sans la corriger. Montre tes calculs.\n\n<donnees>\n[collez le tableau ici]\n</donnees>',
    materiau: {
      titre: 'Ventes et charges des douze derniers mois (fictives)',
      texte:
        'Mois;Crevettes vendues (kg);Prix moyen (XPF/kg);Chiffre d’affaires (XPF);Charges du mois (XPF);Remarques\nJanvier;620;2 100;1 302 000;950 000;\nFévrier;540;2 100;1 134 000;930 000;\nMars;180;2 200;396 000;1 400 000;cyclone : bassins endommagés, réparations\nAvril;410;2 150;881 500;900 000;reprise des ventes\nMai;560;2 100;1 176 000;940 000;\nJuin;480;2 000;960 000;900 000;\nJuillet;350;2 000;700 000;880 000;saison fraîche, croissance plus lente\nAoût;330;2 000;660 000;880 000;saison fraîche, croissance plus lente\nSeptembre;450;2 050;922 500;920 000;\nOctobre;590;2 100;1 329 000;950 000;\nNovembre;700;2 200;1 540 000;980 000;commandes de fêtes\nDécembre;980;2 300;2 254 000;1 100 000;pic des fêtes de fin d’année\n\nContexte : charges sans amortissement du matériel ; le remboursement de l’emprunt, 450 000 XPF par trimestre, n’est pas compris dans les charges. Les clients : restaurants, vente directe et deux grandes surfaces.',
    },
    variantes: {
      simple:
        'S’arrêter à l’étape 2 : obtenir le chiffre d’affaires et la marge de chaque mois, et les mois à surveiller.',
      poussee:
        'Créer un Projet ou un Gem « Ferme aquacole » avec le modèle de tableau et la méthode de prévision, pour refaire l’exercice chaque trimestre avec les nouveaux chiffres.',
    },
    astuces: {
      claude:
        'Demandez le prévisionnel dans un artefact, puis un fichier Excel avec les deux scénarios sur deux feuilles.',
      chatgpt:
        'Déposez le tableau en CSV : l’analyse de données calcule en code et trace le graphique, et vous pouvez afficher le code pour vérifier.',
      copilot:
        'Mettez les données sous forme de tableau Excel avant de demander l’analyse à Copilot : il les lit beaucoup mieux.',
    },
    vigilance:
      'Avec vos vraies données, retirez les noms de clients et les montants d’emprunt. Un prévisionnel n’est pas une promesse : il repose sur des hypothèses que vous devez pouvoir défendre, notamment pour les cyclones, qui ne se prévoient pas.',
    formateur: {
      resultat:
        'Un tableau contrôlé où l’erreur d’octobre est repérée (1 329 000 XPF dans le tableau contre 1 239 000 XPF calculés), un total de 6 190 kg et de 13 165 000 XPF de chiffre d’affaires, 11 730 000 XPF de charges soit 1 435 000 XPF de marge avant emprunt, un graphique, un prévisionnel à deux scénarios et un résumé pour la banque.',
      criteres: [
        'L’erreur d’octobre est repérée et signalée, pas corrigée en silence.',
        'Les totaux (6 190 kg, 13 165 000 XPF de chiffre d’affaires, 11 730 000 XPF de charges) sont exacts, l’emprunt de 1 800 000 XPF par an étant traité à part.',
        'Mars (cyclone, marge négative d’environ 1 004 000 XPF) est traité comme événement exceptionnel dans le prévisionnel.',
        'Les hypothèses des deux scénarios sont écrites et validées par l’apprenant.',
      ],
      pieges: [
        'Laisser l’erreur d’octobre gonfler le chiffre d’affaires de 90 000 XPF.',
        'Extrapoler le mois de mars comme un mois normal, ou bien l’effacer du prévisionnel.',
        'Oublier le remboursement de l’emprunt, qui fait passer le solde de l’année de 1 435 000 à −365 000 XPF de trésorerie.',
        'Présenter le prévisionnel à la banque sans mentionner ses hypothèses.',
      ],
      competence: 'discernement',
      technique: 'decomposer',
    },
    motsCles: ['aquaculture', 'crevettes', 'prévisionnel', 'ventes', 'trésorerie'],
  },
];
