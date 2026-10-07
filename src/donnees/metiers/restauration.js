/**
 * Restauration, bars et cafés : restaurant, brasserie, snack, bar, café, food truck,
 * restauration rapide (Nouméa, Baie des Citrons, Anse Vata, Port-Moselle, Koné, Bourail, Lifou…).
 * Le tourisme et l'hôtellerie ont leur propre métier : ici, la salle, le bar et la cuisine.
 * Toutes les personnes, entreprises, adresses, prix et ventes sont fictifs.
 */

export const vocabulaire = {
  structure: { g: 'm', s: 'restaurant', p: 'restaurants' },
  client: { g: 'm', s: 'client', p: 'clients' },
  partenaire: {
    g: 'm',
    s: 'fournisseur de produits frais',
    p: 'fournisseurs de produits frais',
  },
  documentCourant: { g: 'm', s: 'devis de repas de groupe', p: 'devis de repas de groupe' },
  documentLong: {
    g: 'm',
    s: 'contrat type de privatisation du restaurant',
    p: 'contrats types de privatisation du restaurant',
  },
  reunion: {
    g: 'f',
    s: 'réunion d’équipe entre la salle et la cuisine',
    p: 'réunions d’équipe entre la salle et la cuisine',
  },
  offre: {
    g: 'm',
    s: 'brunch du dimanche à la Baie des Citrons',
    p: 'brunchs du dimanche à la Baie des Citrons',
  },
  poste: { g: 'm', s: 'maître d’hôtel', p: 'maîtres d’hôtel' },
  evenement: {
    g: 'f',
    s: 'matinée de rencontre avec les producteurs locaux',
    p: 'matinées de rencontre avec les producteurs locaux',
  },
  visuel: { g: 'f', s: 'affiche promotionnelle', p: 'affiches promotionnelles' },
  domaine: 'la restauration',
  motifReclamation:
    'deux plats facturés en trop sur son addition et un remboursement qui se fait attendre',
  donnees: 'le relevé mensuel des couverts et du chiffre d’affaires du restaurant sur douze mois',
  colonnes:
    'Mois;Jours d’ouverture;Couverts servis;Chiffre d’affaires hors taxes (XPF);Coût des matières consommées (XPF)',
  indicateur: 'le ticket moyen par couvert',
  veille:
    'les tendances de la restauration, les nouvelles adresses du Grand Nouméa et les prix des produits alimentaires',
  sourcesVeille:
    'la presse locale, les sites d’avis en ligne, les pages des restaurants concurrents sur les réseaux sociaux, les publications de l’ISEE sur les prix et celles de la CCI de Nouvelle-Calédonie',
  jargon: 'l’acompte, le menu unique imposé et le droit de bouchon pour les repas de groupe',
  procedure: 'la réception d’une livraison de produits frais',
  situationTendue:
    'un fournisseur de poisson qui annonce une hausse de 15 % de ses prix juste avant les fêtes',
  donneesSensibles:
    'les noms, téléphones et allergies des clients notés dans le cahier de réservations',
  corpus:
    'les fiches techniques des recettes, le plan de maîtrise sanitaire et les fiches des produits des fournisseurs',
  publicCible:
    'les familles et les groupes d’amis du Grand Nouméa qui cherchent une sortie le dimanche matin',
  etranger: 'un croisiériste australien en escale pour la journée',
  themeFormation:
    'la prise de commande, les cuissons et l’information des clients sur les allergènes',
  tacheRepetitive: 'la rédaction de l’ardoise du jour et de sa publication sur Facebook',
  planning: 'les horaires de l’équipe de salle pendant les fêtes de fin d’année',
  comparaison: 'deux offres de fournisseurs de poisson du lagon',
};

export const exercices = [
  {
    id: 'resto-carte-descriptions',
    titre: 'Réécrire les descriptions de la carte sans rien promettre de plus',
    metier: 'restauration',
    niveau: 'debutant',
    famille: 'corriger',
    duree: 15,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Vous travaillez dans un restaurant de bord de mer à l’Anse Vata. Le chef change la carte pour la saison chaude et vous confie ses notes : des descriptions sèches, pleines de fautes, qui ne donnent pas envie. Vous devez les réécrire avant l’impression, sans rien affirmer que la cuisine ne puisse tenir.',
    objectif:
      'Faire réécrire des descriptions de plats appétissantes et fidèles, et repérer les promesses ajoutées par l’IA : fraîcheur, origine, « fait maison », pêche du jour.',
    etapes: [
      'Copiez les notes du chef avec le prompt de départ.',
      'Comparez chaque description avec les notes : ingrédients, accompagnements, prix et allergènes doivent être identiques.',
      'Surlignez les mots ajoutés qui engagent le restaurant (« frais », « du lagon », « fait maison », « pêché ce matin ») et cherchez-les dans les notes : les crevettes sont surgelées, le poisson dépend de l’arrivage.',
      'Demandez de retirer chaque promesse sans fondement, en gardant la mention des allergènes.',
      'Faites relire la version finale par le chef avant l’impression.',
    ],
    prompt:
      'Tu es rédacteur pour un restaurant de bord de mer à Nouméa. Réécris les descriptions de plats ci-dessous pour la nouvelle carte.\n- Corrige toutes les fautes.\n- 25 mots au maximum par plat, ton gourmand et simple, sans superlatifs.\n- Garde le nom du plat, les ingrédients, les accompagnements, le prix et les allergènes signalés, à l’identique.\nN’ajoute aucune information : ni origine, ni fraîcheur, ni « fait maison », ni ingrédient absent des notes. Termine par un tableau : plat, informations reprises, mots que tu as ajoutés.\n\n<notes>\n[collez les notes du chef ici]\n</notes>',
    materiau: {
      titre: 'Notes du chef pour la carte de la saison chaude',
      texte:
        'Tartare de thon : thon jaune coupé au couteaux, citron vert, gingembre, coriandre, sauce soja, servi avec des chip de patate douce. 2 200 XPF. Allergènes : poisson, soja, gluten (sauce soja).\nCrevettes sautées ail et persil : crevette calédoniènnes (surgelées, décongelées le matin), riz blanc ou frites au choix. 2 900 XPF. Allergènes : crustacés.\nPoisson du jour grillé : selon arrivage (vivaneau, bec de cane ou loche), beure au citron vert, légumes du jour. 3 200 XPF. Allergènes : poisson, lait.\nSalade de papaye verte : papaye rapée, carotte, cacahuettes concassé, sauce nuoc-mâm, menthe. 1 600 XPF. Allergènes : arachide, poisson (nuoc-mâm).\nTarte coco : pâte sablé acheter chez le boulanger, crème coco faite ici. 1 000 XPF. Allergènes : gluten, œufs, lait.\nNB : pas de « fait maison » sur la carte tant que la direction n’a pas tranché.',
    },
    variantes: {
      simple: 'Réécrire seulement les deux premiers plats.',
      poussee:
        'Ajouter la version anglaise des descriptions pour les croisiéristes, vérifiée par une retraduction, avec la phrase « Allergies : merci de prévenir notre équipe » dans les deux langues.',
    },
    astuces: {
      chatgpt:
        'Dans le canevas, demandez de raccourcir une seule description sans toucher aux autres.',
      claude:
        'Demandez à Claude de relire sa propre version comme un client allergique : quelle information lui manque, laquelle pourrait le tromper ?',
    },
    vigilance:
      'Sur une carte, chaque mot engage le restaurant : « frais » pour un produit surgelé ou « fait maison » non vérifié trompe le client. Les allergènes indiqués restent ceux validés par le chef.',
    formateur: {
      resultat:
        'Cinq descriptions de 25 mots au plus, sans faute, qui gardent prix, ingrédients et allergènes à l’identique, ne présentent pas les crevettes comme fraîches ni le poisson comme pêché le jour même, et n’emploient pas « fait maison », même pour la tarte coco.',
      criteres: [
        'Les prix et les allergènes sont repris à l’identique.',
        'Aucune promesse absente des notes : fraîcheur, origine, « fait maison ».',
        'Les fautes sont toutes corrigées (couteau, chips, calédoniennes, beurre, râpée, cacahuètes concassées, pâte sablée achetée).',
        'Le tableau final a servi à vérifier chaque mot ajouté.',
      ],
      pieges: [
        'Accepter « crevettes fraîches » ou « poisson pêché ce matin dans le lagon ».',
        'Perdre la sauce soja (gluten) ou le nuoc-mâm (poisson) en raccourcissant une description.',
        'Une « tarte coco maison » alors que la pâte vient du boulanger.',
      ],
      competence: 'discernement',
      technique: 'format',
    },
    motsCles: ['carte', 'menu', 'descriptions', 'allergènes', 'relecture', 'fait maison'],
  },
  {
    id: 'resto-reservations-non-honorees',
    titre: 'Rédiger les messages qui limitent les réservations non honorées',
    metier: 'restauration',
    niveau: 'debutant',
    famille: 'rediger',
    duree: 15,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'gemini',
    situation:
      'Vous êtes responsable de salle dans un restaurant familial de Dumbéa. Samedi dernier, trois tables réservées ne sont pas venues : 14 couverts perdus un soir complet. La gérante met en place une confirmation la veille et un acompte pour les grands groupes, et vous demande les messages.',
    objectif:
      'Rédiger des messages courts, aimables et exacts, qui annoncent une règle nouvelle sans culpabiliser les clients.',
    etapes: [
      'Lisez la note de la gérante : repérez ce qui s’applique à toutes les réservations et ce qui ne concerne que les groupes.',
      'Envoyez le prompt de départ avec la note.',
      'Vérifiez chaque message : heure d’envoi, heure limite de réponse, seuil de 8 personnes, montant et délai de l’acompte, exception de l’alerte cyclonique.',
      'Recomptez vous-même les caractères du SMS : 160 au maximum.',
      'Supprimez tout reproche, toute menace et toute pénalité que la gérante n’a pas décidée.',
    ],
    prompt:
      'Tu es responsable de salle d’un restaurant familial à Dumbéa. À partir de la note ci-dessous, rédige :\n1. le SMS de confirmation envoyé la veille à 14 h, 160 caractères au maximum ;\n2. la réponse à une demande de réservation pour un groupe de 8 personnes ou plus, qui explique l’acompte, 80 mots au maximum ;\n3. une phrase pour la page Facebook du restaurant qui annonce la nouvelle règle.\nTon aimable et direct, vouvoiement, sans reproche ni menace. N’ajoute aucune règle, aucun montant et aucune pénalité absents de la note.\n\n<note>\n[collez la note de la gérante ici]\n</note>',
    materiau: {
      titre: 'Note de la gérante',
      texte:
        'À partir du 1er novembre :\n- toutes les réservations du soir sont confirmées par SMS la veille à 14 h ; le client répond OUI ou appelle avant 18 h, sinon la table est remise en vente ;\n- groupes de 8 personnes ou plus : acompte de 2 000 XPF par personne, à verser au plus tard 48 h avant, par virement ou au comptoir ; il est déduit de l’addition ;\n- annulation d’un groupe plus de 48 h avant : acompte remboursé ; moins de 48 h avant : acompte conservé, sauf en cas d’alerte cyclonique ;\n- on reste gentils : la plupart des clients oublient, ils ne le font pas exprès.\nTéléphone du restaurant : 27 00 00.',
    },
    variantes: {
      simple: 'Rédiger seulement le SMS de confirmation.',
      poussee:
        'Préparer aussi la réponse à un client qui conteste l’acompte conservé après une annulation la veille, et la faire relire par la gérante.',
    },
    astuces: {
      gemini:
        'Dans Gmail, « Aide-moi à écrire » adapte ensuite la réponse aux groupes à une demande précise, par exemple un anniversaire de 12 personnes.',
      copilot:
        'Dans Outlook, lancez « Coaching par Copilot » sur la réponse aux groupes : il signale un ton trop sec.',
      claude:
        'Demandez à Claude de relire le SMS comme un client pressé : comprend-il en une lecture ce qu’il doit faire, et avant quelle heure ?',
    },
    vigilance:
      'Ne collez pas le cahier de réservations dans l’IA : noms, téléphones et allergies des clients n’ont rien à y faire. Les conditions d’acompte sont celles de la gérante ; en cas de doute sur ce qui est permis, c’est elle qui tranche.',
    formateur: {
      resultat:
        'Un SMS de 160 caractères au plus (confirmation, réponse avant 18 h, numéro du restaurant), une réponse aux groupes qui donne 2 000 XPF par personne, le délai de 48 h, la déduction de l’addition et les conditions d’annulation avec l’exception cyclonique, et une phrase Facebook courte et positive.',
      criteres: [
        'Le seuil de 8 personnes, le montant et les délais sont exacts.',
        'Le SMS fait 160 caractères au plus, recompté par l’apprenant.',
        'Aucun message ne culpabilise ni ne menace le client.',
        'L’exception de l’alerte cyclonique figure dans la réponse aux groupes.',
      ],
      pieges: [
        'Un SMS qui menace de « facturer la table » : aucune pénalité n’existe pour les petites tables.',
        'Croire le nombre de caractères annoncé par l’IA sans le recompter.',
        'Écrire 2 000 XPF « par table » au lieu de « par personne ».',
      ],
      competence: 'description',
      technique: 'contexte',
    },
    motsCles: ['réservations', 'no-show', 'SMS', 'acompte', 'groupes', 'Facebook'],
  },
  {
    id: 'resto-affiche-soiree-sans-alcool',
    titre: 'Créer le visuel d’une soirée musicale sans faire de publicité pour l’alcool',
    metier: 'restauration',
    niveau: 'debutant',
    famille: 'visuels',
    duree: 20,
    outils: ['canva'],
    outilConseille: 'canva',
    situation:
      'Le snack-bar où vous travaillez, à la Baie des Citrons, organise une soirée reggae le vendredi 13 novembre. Le gérant veut une publication pour Facebook et Instagram et une affiche A4 pour la vitrine. Ses notes mélangent le programme, le menu et une promotion sur la bière.',
    objectif:
      'Créer un visuel avec l’IA de Canva, vérifier chaque information et retirer tout ce qui ferait la publicité ou la promotion d’une boisson alcoolisée.',
    etapes: [
      'Lisez les notes du gérant et repérez ce qui concerne l’alcool : en Nouvelle-Calédonie, la publicité et les promotions en faveur des boissons alcooliques sont interdites, y compris sur les réseaux sociaux.',
      'Dans Canva, ouvrez l’IA Canva ou le Design magique et décrivez la publication avec le prompt de départ.',
      'Choisissez une proposition et vérifiez les textes mot à mot : date, horaires, prix des tapas, numéro.',
      'Retirez les images ajoutées par l’IA qui montrent des verres, des bouteilles ou des cocktails, et tout texte comme « happy hour » ou « apéro ».',
      'Déclinez la publication en affiche A4 (Redimensionnement magique avec Canva Pro, ou à la main), relisez-la, puis faites valider les deux formats par le gérant.',
    ],
    prompt:
      'Crée une publication carrée pour Facebook et Instagram qui annonce une soirée reggae dans un snack-bar de la Baie des Citrons, à Nouméa. Style : chaleureux, couleurs orange et vert, lisible sur téléphone, 5 blocs de texte au maximum.\nTextes à afficher, sans en ajouter d’autres :\n- titre : « Soirée reggae live » ;\n- vendredi 13 novembre, de 19 h à 23 h, avec le groupe Lagon Riddim ;\n- assiette de tapas à partager : 2 800 XPF ;\n- entrée libre, réservation conseillée au 27 00 00.\nImages : le groupe, la terrasse ou les tapas, sans aucune boisson.',
    materiau: {
      titre: 'Notes du gérant',
      texte:
        'Soirée reggae live vendredi 13 novembre, 19 h - 23 h, avec le groupe Lagon Riddim (vérifier l’orthographe du nom avec eux).\nEntrée libre, réservation conseillée au 27 00 00.\nAssiette de tapas à partager 2 800 XPF (accras, brochettes de poulet, frites de manioc).\nHappy hour 17 h - 19 h : pinte à 600 au lieu de 900 !!\nMettre une photo de nos cocktails, ça attire.\nCouleurs du snack : orange et vert.',
    },
    variantes: {
      simple: 'Créer seulement la publication carrée.',
      poussee:
        'Ajouter une story et mettre en avant, sur la publication, les jus de fruits locaux et les boissons sans alcool de la carte, puis faire relire l’ensemble par le gérant.',
    },
    astuces: {
      canva:
        'Si une proposition vous plaît mais montre des verres ou des bouteilles, remplacez l’image par une photo des tapas ou du groupe, prise avec l’accord des personnes.',
    },
    vigilance:
      'En Nouvelle-Calédonie, la loi du pays n° 2018-6 du 30 juin 2018 relative à la lutte contre l’alcoolisme interdit la publicité en faveur des boissons alcooliques, y compris sur les réseaux sociaux, ainsi que les promotions du type « prix réduit pendant une période limitée ». Vérifiez le texte en vigueur sur Juridoc et la fiche pratique de la DECAT avant de publier. Aucune photo de musicien ou de client sans son accord.',
    formateur: {
      resultat:
        'Une publication carrée et une affiche A4 lisibles, aux couleurs du snack, avec la date, les horaires, le nom du groupe, le prix des tapas (2 800 XPF) et le numéro exacts, sans happy hour, sans prix de la bière et sans image de boisson alcoolisée.',
      criteres: [
        'Date, horaires, prix et numéro sont exacts sur les deux formats.',
        'Aucun texte ni aucune image ne fait la promotion d’une boisson alcoolisée.',
        'L’apprenant sait expliquer pourquoi la happy hour et la photo de cocktails ont été retirées.',
        'Le visuel compte 5 blocs de texte au plus et se lit sur téléphone.',
      ],
      pieges: [
        'Garder la happy hour « parce que le gérant l’a demandée ».',
        'Une image générée avec des cocktails ou des bouteilles à l’arrière-plan, que personne ne remarque.',
        'Un texte de l’IA Canva qui ajoute « ambiance festive et apéro » ou change l’horaire.',
      ],
      competence: 'diligence',
      technique: 'format',
    },
    motsCles: ['Canva', 'soirée', 'publication', 'Instagram', 'bar', 'alcool', 'affiche'],
  },
  {
    id: 'resto-checklist-fermeture-cuisine',
    titre: 'Transformer les consignes du chef en check-list de fermeture de la cuisine',
    metier: 'restauration',
    niveau: 'debutant',
    famille: 'organiser',
    duree: 20,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Vous êtes second de cuisine dans un restaurant de Wé, à Lifou. Le week-end, ce sont deux commis et un extra qui ferment la cuisine. Les consignes du chef tiennent sur un brouillon : il veut une check-list d’une page, à plastifier et à afficher près du passe.',
    objectif:
      'Transformer des notes en check-list claire, sans que l’IA invente de température, de durée de conservation ou de dosage.',
    etapes: [
      'Copiez le brouillon du chef avec le prompt de départ.',
      'Vérifiez que chaque consigne du brouillon figure dans la check-list, dans un ordre logique, et qu’aucune n’a été ajoutée.',
      'Cherchez tous les chiffres : chaque température, durée ou dosage doit venir du brouillon, sinon remplacez-le par [à compléter].',
      'Vérifiez que les consignes de sécurité sont mises en évidence : gaz, friteuses, personne dans la chambre froide.',
      'Faites valider la check-list par le chef, puis testez-la avec un commis un soir de fermeture.',
    ],
    prompt:
      'Tu es second de cuisine dans un restaurant. À partir du brouillon du chef ci-dessous, rédige la check-list de fermeture de la cuisine pour des commis et des extras.\nFormat : une page, des rubriques (produits, équipements, nettoyage, sécurité, départ), une action par ligne avec une case à cocher, des phrases courtes à l’impératif. Mets en évidence les consignes de sécurité.\nReprends uniquement les consignes du brouillon : si une information manque (température, durée, produit), écris [à compléter] au lieu de l’inventer.\n\n<brouillon>\n[collez le brouillon ici]\n</brouillon>',
    materiau: {
      titre: 'Brouillon du chef',
      texte:
        'fermeture cuisine (le dernier qui part) :\n- filmer et étiqueter ce qui reste (nom + date de fabrication), ranger en chambre froide ; les restes du buffet à la poubelle, pas au frigo\n- noter la température des frigos et de la chambre froide sur la feuille de relevés (les bonnes valeurs sont sur l’étiquette verte de chaque appareil) ; si ce n’est pas bon, appeler le chef même tard\n- friteuses : éteindre, laisser refroidir avant de filtrer l’huile, jamais filtrer chaud\n- couper le gaz à la vanne générale (derrière le piano)\n- filtres des hottes au lave-vaisselle le samedi\n- balayer, laver le sol avec le produit du bidon bleu (dosage écrit sur le bidon), désinfecter les plans de travail\n- poubelles au conteneur, couvercles fermés (chiens errants)\n- vérifier que personne n’est dans la chambre froide et que sa porte est bien fermée\n- éteindre la plonge et les lumières, fermer la porte de service à clé, clé dans la boîte du bar',
    },
    variantes: {
      simple: 'Faire seulement les rubriques « Équipements » et « Sécurité ».',
      poussee:
        'Ajouter la check-list d’ouverture du lendemain et une version illustrée dans Canva, avec des pictogrammes, pour les extras qui lisent peu le français.',
    },
    astuces: {
      claude:
        'Demandez la check-list en fichier Word grâce à la création de fichiers, prête à imprimer et à plastifier.',
      copilot:
        'Transformez la check-list en Copilot Page : le chef peut la compléter et la corriger directement.',
    },
    vigilance:
      'Les températures, les durées de conservation et les règles d’hygiène viennent du plan de maîtrise sanitaire du restaurant et des notices des fabricants, validés par le chef. Pour les règles officielles, renseignez-vous auprès du SIVAP, le service d’inspection vétérinaire, alimentaire et phytosanitaire de la DAVAR : l’IA ne doit pas en inventer.',
    formateur: {
      resultat:
        'Une check-list d’une page, complète et ordonnée (produits filmés et étiquetés, restes du buffet jetés, relevé des températures, friteuses refroidies avant filtrage, gaz coupé, filtres des hottes le samedi, sols et plans de travail, poubelles fermées, chambre froide vérifiée, porte à clé), sans aucune température ni durée inventée, avec la sécurité mise en évidence.',
      criteres: [
        'Toutes les consignes du brouillon sont présentes.',
        'Aucun chiffre absent du brouillon : température, durée de conservation, dosage.',
        'Les consignes de sécurité se voient au premier coup d’œil.',
        'La check-list tient sur une page.',
      ],
      pieges: [
        'Accepter « chambre froide entre 0 et 3 °C » ou « restes conservés trois jours » ajoutés par l’IA.',
        'Oublier que les restes du buffet sont jetés, et non remis au froid.',
      ],
      competence: 'description',
      technique: 'structurer',
    },
    motsCles: ['check-list', 'fermeture', 'cuisine', 'hygiène', 'procédure', 'sécurité'],
  },
  {
    id: 'resto-allergenes-carte',
    titre: 'Repérer les allergènes probables de la carte et préparer une information à valider',
    metier: 'restauration',
    niveau: 'intermediaire',
    famille: 'synthetiser',
    duree: 30,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Le restaurant de cuisine fusion où vous travaillez, dans le quartier Latin de Nouméa, reçoit de plus en plus de questions sur les allergies. La gérante veut un tableau des allergènes par plat pour l’équipe de salle et une affichette pour les clients. Vous partez des recettes du chef, mais plusieurs ingrédients sont des produits achetés tout prêts.',
    objectif:
      'Faire repérer les allergènes probables en plusieurs échanges, débusquer ceux qui se cachent dans les produits composés, et produire un document clairement marqué « à valider ».',
    etapes: [
      'Envoyez le prompt de départ avec les recettes : l’IA rend un tableau et la liste des produits à vérifier.',
      'Contrôlez les produits composés : sauce soja, pâte de curry, sauce d’huître, nems surgelés, chapelure, mayonnaise. L’IA les a-t-elle tous repérés ?',
      'Demandez-lui ce qu’elle ne peut pas savoir, et les questions à poser au chef : étiquettes, friteuse commune, bacs partagés.',
      'Faites rédiger l’affichette pour les clients, qui les invite à signaler toute allergie avant de commander.',
      'Marquez le tableau « Projet à valider par le chef » et listez les étiquettes à contrôler avant toute diffusion.',
    ],
    prompt:
      'Tu es conseiller en hygiène et sécurité des aliments pour un restaurant de Nouméa. À partir des recettes ci-dessous, repère les allergènes probables de chaque plat.\nRends un tableau : plat, ingrédient concerné, allergène probable, niveau de certitude (certain, probable, à vérifier sur l’étiquette).\nPour chaque produit composé ou acheté tout prêt, indique les allergènes qu’il contient souvent et précise qu’il faut vérifier l’étiquette du fournisseur. Signale aussi les risques de contamination croisée.\nNe conclus jamais qu’un plat est « sans allergène ». Termine par la liste des questions à poser au chef.\n\n<recettes>\n[collez les recettes ici]\n</recettes>',
    materiau: {
      titre: 'Recettes du chef (extraits)',
      texte:
        '1. Bo bun au bœuf : vermicelles de riz, bœuf mariné (sauce soja, ail, citronnelle), salade, carotte, cacahuètes concassées, nems aux légumes achetés surgelés, sauce nuoc-mâm.\n2. Curry de crevettes : crevettes, pâte de curry rouge (pot du fournisseur), lait de coco, poivron, basilic thaï, riz jasmin.\n3. Poulet croustillant : filets de poulet, farine, œuf, chapelure panko, frites (même friteuse que le poulet), mayonnaise faite sur place (jaune d’œuf, moutarde, huile).\n4. Wok de légumes au tofu : tofu, brocolis, pak choï, sauce d’huître, huile et graines de sésame, nouilles aux œufs.\n5. Tarte au citron vert meringuée : pâte sablée (beurre, farine, sucre), crème au citron (œufs, beurre), meringue.\n6. Sorbet mangue-passion : fruits, sucre, eau ; préparé dans la même turbine que la glace pistache-noisette.',
    },
    variantes: {
      simple: 'Traiter seulement les plats 1 à 3.',
      poussee:
        'Construire avec le chef une fiche par plat, à mettre à jour à chaque changement de fournisseur, et une phrase type en anglais pour les croisiéristes.',
    },
    astuces: {
      claude:
        'Demandez le tableau en artefact : le chef le corrige à l’écran, ligne par ligne, avant toute impression.',
      chatgpt:
        'Dans une nouvelle conversation, collez le tableau et demandez de le critiquer : quels allergènes manquent, lesquels sont douteux ?',
      copilot:
        'Une fois le tableau validé, Copilot dans Word peut le mettre en page pour l’équipe de salle.',
    },
    vigilance:
      'L’IA ne garantit rien : elle ne connaît ni vos étiquettes ni ce qui se passe en cuisine. Le tableau est validé par le chef, fiches des fournisseurs en main, avant toute diffusion. La liste de 14 allergènes que cite souvent l’IA vient de la réglementation européenne : vérifiez ce qui s’applique en Nouvelle-Calédonie auprès des services du gouvernement (SIVAP de la DAVAR pour la sécurité des aliments, DECAT pour l’information du consommateur).',
    formateur: {
      resultat:
        'Un tableau qui repère l’arachide (cacahuètes), le poisson (nuoc-mâm), le soja et le gluten (sauce soja, tofu, panko, farine, nouilles), les crustacés (crevettes, pâte de curry à vérifier), les mollusques (sauce d’huître), le sésame, les œufs, la moutarde et le lait, les nems à vérifier sur l’étiquette, la friteuse commune et le risque de fruits à coque pour le sorbet, avec une affichette prudente et une liste de questions au chef.',
      criteres: [
        'Les allergènes des produits composés sont repérés ou marqués « à vérifier » : sauce soja, pâte de curry, sauce d’huître, nems.',
        'Les contaminations croisées sont signalées : friteuse commune, turbine du sorbet.',
        'Aucun plat n’est déclaré « sans allergène ».',
        'Le document porte la mention « à valider » et la liste des étiquettes à contrôler.',
      ],
      pieges: [
        'Classer le lait de coco dans le lait et oublier la sauce d’huître (mollusques).',
        'Croire le sorbet sans risque parce que la recette ne contient que des fruits.',
        'Diffuser le tableau à la salle avant la validation du chef.',
      ],
      competence: 'diligence',
      technique: 'critique',
    },
    motsCles: ['allergènes', 'carte', 'sécurité des aliments', 'information client', 'validation'],
  },
  {
    id: 'resto-cout-matiere-fiche-technique',
    titre: 'Calculer le coût matière d’une recette et proposer un prix de vente',
    metier: 'restauration',
    niveau: 'intermediaire',
    famille: 'analyser',
    duree: 30,
    outils: ['chatgpt', 'claude', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Le chef d’un restaurant de La Foa veut mettre à la carte un « vivaneau grillé, sauce vanille et riz coco ». Il a écrit la fiche technique pour 10 portions avec les prix de ses fournisseurs. Le gérant vise un ratio coût matière de 30 % : vous devez calculer le coût par portion et proposer un prix de vente.',
    objectif:
      'Faire calculer un coût matière par l’IA, contrôler les unités et le rendement, et vérifier le résultat à la main avant de proposer un prix.',
    etapes: [
      'Collez la fiche technique avec le prompt de départ, ou joignez-la en CSV.',
      'Vérifiez les unités ligne par ligne : quantités en grammes ou en millilitres, prix au kilo, au litre ou à la pièce.',
      'Refaites à la main le calcul de deux lignes, dont celle du poisson, acheté entier : quel poids faut-il acheter pour obtenir 1 500 g de filets ?',
      'Regardez si l’IA a repéré la ligne en double ; sinon, cherchez-la et posez la question au chef.',
      'Vérifiez le prix conseillé : coût par portion divisé par 0,30, puis arrondi à la centaine.',
      'Demandez ce qui peut faire varier ce coût (prix du poisson selon la saison, pertes) et notez ce qu’il faudra suivre.',
    ],
    prompt:
      'Tu es contrôleur de gestion en restauration. Voici la fiche technique d’une recette pour 10 portions (séparateur : point-virgule ; prix hors taxes, en XPF).\n\n<fiche>\n[collez la fiche ici]\n</fiche>\n\n1. Calcule le coût de chaque ligne, en tenant compte des unités et des remarques.\n2. Calcule le coût total, puis le coût par portion.\n3. Calcule le prix de vente hors taxes qui donne un ratio coût matière de 30 %, puis propose un prix arrondi à la centaine.\n4. Signale toute donnée qui te paraît incohérente, sans la corriger.\nMontre tes calculs dans un tableau.',
    materiau: {
      titre: 'Fiche technique : vivaneau grillé, sauce vanille, riz coco (10 portions)',
      texte:
        'Ingrédient;Quantité nette pour 10 portions;Unité;Prix d’achat HT (XPF);Prix par;Remarque\nVivaneau (filets);1500;g;2400;kg;acheté entier, rendement 50 % en filets\nRiz jasmin;700;g;350;kg;\nLait de coco;800;ml;900;l;\nVanille de Lifou;2;gousse;250;gousse;\nCrème liquide;500;ml;1200;l;\nBeurre;150;g;1800;kg;sauce\nÉchalotes;200;g;900;kg;\nCitrons verts;4;pièce;60;pièce;\nHaricots verts;1000;g;800;kg;\nBeurre;150;g;1800;kg;sauce\nHuile, sel, poivre;1;forfait;200;forfait;',
    },
    variantes: {
      simple: 'Calculer seulement le coût par portion, sans prix de vente.',
      poussee:
        'Construire dans un tableur une fiche technique réutilisable, où le coût et le prix conseillé se recalculent quand un prix d’achat change, puis simuler une hausse de 20 % du poisson.',
    },
    astuces: {
      chatgpt:
        'Avec l’analyse de données, demandez le tableau de calcul en fichier Excel, puis vérifiez la formule de la ligne du poisson.',
      copilot:
        'Dans Excel, demandez à Copilot une colonne de coût par ligne et vérifiez qu’il convertit bien les grammes en kilos.',
      gemini:
        'Dans Google Sheets, « Demander à Gemini » propose les formules ; testez-les sur une ligne calculée à la main.',
    },
    vigilance:
      'Les prix sont fictifs : avec vos vrais prix d’achat, travaillez sur un compte professionnel. Le prix affiché sur la carte ajoute la TGC au taux applicable, à vérifier : ne laissez pas l’IA choisir ce taux.',
    formateur: {
      resultat:
        'Un tableau juste : 3 kg de poisson entier à acheter (7 200 XPF), un coût total de 10 955 XPF, soit 1 095,50 XPF par portion, et un prix de vente conseillé de 3 700 XPF hors taxes (ratio d’environ 29,6 %). La ligne de beurre en double est signalée ; le chef confirme qu’il s’agit d’un doublon (avec le doublon, 11 225 XPF au total).',
      criteres: [
        'Le rendement est appliqué dans le bon sens : 3 kg de poisson entier, pas 750 g.',
        'Les conversions d’unités sont justes (800 ml de lait de coco : 720 XPF ; 500 ml de crème : 600 XPF).',
        'Deux lignes ont été recalculées à la main.',
        'Le doublon du beurre est repéré et vérifié auprès du chef.',
      ],
      pieges: [
        'Un poisson à 1 800 XPF : le rendement a été multiplié au lieu d’être divisé.',
        'Accepter le total sans voir que le beurre est compté deux fois.',
        'Confondre le prix hors taxes calculé et le prix affiché sur la carte.',
      ],
      competence: 'discernement',
      technique: 'critique',
    },
    motsCles: ['coût matière', 'fiche technique', 'prix de vente', 'ratio', 'rendement', 'CSV'],
  },
  {
    id: 'resto-avis-sante-anglais',
    titre: 'Répondre à trois avis en ligne, dont un qui évoque un malaise après le repas',
    metier: 'restauration',
    niveau: 'intermediaire',
    famille: 'rediger',
    duree: 30,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Vous gérez la fiche Google d’un restaurant de l’Anse Vata. Trois avis sont arrivés ce week-end : un compliment, un croisiériste australien mécontent de l’attente, et une cliente qui dit que son mari a été malade après un tartare. La gérante veut des réponses publiques aujourd’hui, dans le respect de la charte de la maison.',
    objectif:
      'Rédiger des réponses publiques en plusieurs échanges, à partir d’une charte et d’un exemple, en comparant plusieurs versions pour l’avis le plus délicat.',
    etapes: [
      'Envoyez le prompt de départ avec la charte, l’exemple de réponse validée et les trois avis.',
      'Dans une nouvelle conversation, faites retraduire en français la réponse écrite en anglais, pour vérifier ce qu’elle dit.',
      'Pour l’avis 3, demandez deux autres versions et comparez-les : laquelle prend la cliente au sérieux sans rien reconnaître ni contester sur le fond ?',
      'Vérifiez qu’aucune réponse ne cite un salarié, une information interne ou un geste commercial.',
      'Faites valider la réponse à l’avis 3 par la gérante avant de la publier.',
    ],
    prompt:
      'Tu es responsable de la relation client d’un restaurant de l’Anse Vata, à Nouméa. Rédige une réponse publique à chacun des trois avis ci-dessous, dans la langue de l’avis.\nRespecte strictement la charte, et inspire-toi du ton de l’exemple validé sans le recopier. Les informations internes servent à comprendre la situation : elles ne doivent pas apparaître dans les réponses.\n80 mots au maximum par réponse, sans emoji.\n\n<charte>\n[collez la charte ici]\n</charte>\n\n<exemple>\n[collez l’exemple ici]\n</exemple>\n\n<avis>\n[collez les avis ici]\n</avis>\n\n<informations_internes>\n[collez les informations internes ici]\n</informations_internes>',
    materiau: {
      titre: 'Charte, exemple validé, avis du week-end et informations internes',
      texte:
        'CHARTE DE RÉPONSE AUX AVIS\n- On remercie toujours et on cite un point précis de l’avis.\n- On ne cite jamais le nom d’un salarié ni d’un client.\n- On ne promet aucun geste commercial en public.\n- Problème de santé : on exprime une inquiétude sincère, on invite la personne à nous appeler au 27 00 00, on ne conteste pas et on ne reconnaît rien sur le fond.\n\nEXEMPLE DE RÉPONSE VALIDÉE\n« Merci d’avoir pris le temps de nous écrire. Nous sommes désolés que l’attente ait gâché votre déjeuner : ce n’est pas l’accueil que nous voulons vous réserver. Nous avons revu l’organisation du service du midi. Au plaisir de vous revoir. »\n\nAVIS 1 – 5 sur 5 : Super soirée en terrasse, le poisson cru au lait de coco était parfait et Mélanie nous a très bien conseillés. On reviendra !\nAVIS 2 – 2 sur 5 : We came off the cruise ship for lunch. Food was nice but we waited 50 minutes for two fish and chips and nearly missed the last shuttle back to the ship. Nobody apologised.\nAVIS 3 – 1 sur 5 : Mon mari a été malade toute la nuit après le tartare de thon de samedi midi. On ne reviendra plus, et j’ai prévenu tous mes amis.\n\nINFORMATIONS INTERNES (à ne pas publier)\n- Samedi midi, il manquait un serveur.\n- La gérante a lancé une vérification sur le thon de samedi : fiche de réception, relevés de température.\n- Aucun autre client ne s’est plaint.',
    },
    variantes: {
      simple: 'Répondre seulement aux avis 1 et 2.',
      poussee:
        'Préparer aussi ce que la gérante dira si la cliente de l’avis 3 appelle, et la fiche interne de suivi de la plainte.',
    },
    astuces: {
      claude:
        'Demandez à Claude de relire la réponse à l’avis 3 en se mettant à la place de la cliente : se sent-elle écoutée, ou soupçonnée ?',
      chatgpt:
        'Dans le canevas, demandez une version « moins défensive » de la seule réponse 3, sans toucher aux deux autres.',
    },
    vigilance:
      'Une réponse publique reste en ligne : ni nom de salarié, ni détail de la vérification interne, ni avis médical. Si un client signale un problème de santé, la gérante traite la plainte en interne et, si besoin, demande conseil au SIVAP (DAVAR), chargé du contrôle de l’hygiène des aliments : l’IA ne remplace pas cet avis.',
    formateur: {
      resultat:
        'Trois réponses de 80 mots au plus : un remerciement qui cite le poisson cru sans nommer la serveuse ; une réponse en anglais qui reconnaît l’attente et l’absence d’excuses, sans parler du serveur manquant ; une réponse à l’avis 3 inquiète et sincère, qui invite à appeler le 27 00 00 sans contester, sans reconnaître de faute et sans rien dire de la vérification.',
      criteres: [
        'Aucune réponse ne cite Mélanie ni une information interne.',
        'La réponse en anglais a été vérifiée par une retraduction.',
        'La réponse à l’avis 3 ne minimise pas et ne reconnaît aucune faute.',
        'Au moins trois versions de la réponse 3 ont été comparées.',
      ],
      pieges: [
        'Remercier « Mélanie » parce que le client l’a citée.',
        'Écrire publiquement qu’« aucun autre client ne s’est plaint » ou que les contrôles du thon sont « conformes ».',
        'Promettre un repas offert pour apaiser la cliente.',
      ],
      competence: 'discernement',
      technique: 'exemples',
    },
    motsCles: ['avis en ligne', 'e-réputation', 'Google', 'anglais', 'croisiéristes', 'plainte'],
  },
  {
    id: 'resto-planning-jours-paquebot',
    titre:
      'Établir le planning de la salle en service coupé, avec des extras les jours de paquebot',
    metier: 'restauration',
    niveau: 'intermediaire',
    famille: 'organiser',
    duree: 30,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'copilot',
    situation:
      'Vous êtes maître d’hôtel dans une brasserie du centre-ville de Nouméa, à deux pas du port. La semaine du 17 au 22 novembre, deux paquebots font escale, le mardi et le jeudi : le midi, la salle déborde. Avec quatre serveurs, dont trois en service coupé, et deux extras possibles, vous devez proposer un planning qui respecte les règles de la maison.',
    objectif:
      'Faire construire un planning sous contraintes, recompter les heures et les services coupés, et le corriger en plusieurs échanges.',
    etapes: [
      'Envoyez le prompt de départ avec les besoins, les règles et l’équipe.',
      'Vérifiez le planning service par service : le nombre de serveurs est-il exact, chaque disponibilité respectée ?',
      'Recomptez à la main les heures et les services coupés de chaque personne, et les vacations d’extras.',
      'Signalez chaque erreur à l’IA et demandez une version corrigée, sans tout refaire.',
      'Exportez le planning en tableau et faites-le valider par la direction.',
    ],
    prompt:
      'Tu es maître d’hôtel dans une brasserie de Nouméa. Construis le planning de la salle du mardi 17 au dimanche 22 novembre 2026, à partir des besoins, des règles et de l’équipe ci-dessous.\nRends un tableau : une ligne par personne, une colonne par jour, avec « midi », « soir », « coupé » ou « repos ». Ajoute pour chacun le total d’heures (midi : 4 h ; soir : 4 h 30 ; coupé : 8 h 30) et le nombre de services coupés, puis le nombre de vacations d’extras.\nSi une règle ne peut pas être respectée, dis-le clairement au lieu de l’ignorer.\n\n<besoins_regles_equipe>\n[collez le matériau ici]\n</besoins_regles_equipe>',
    materiau: {
      titre: 'Besoins, règles de la maison et équipe',
      texte:
        'BESOINS EN SALLE\n- Ouvert du mardi au samedi midi et soir, et le dimanche midi ; fermé le lundi.\n- Midi (10 h 30 - 14 h 30) : 2 serveurs ; 5 les jours de paquebot (mardi 17 et jeudi 19) ; 3 le dimanche.\n- Soir (18 h - 22 h 30) : 2 serveurs ; 3 le vendredi et le samedi.\n\nRÈGLES DE LA MAISON\n- Service coupé (midi et soir le même jour) : trois par semaine au maximum par personne.\n- 39 heures au maximum par serveur sur la semaine ; au-delà, heures supplémentaires à valider par la direction.\n- Repos : le lundi et un autre jour dans la semaine pour chacun.\n- Jours de paquebot : au moins deux personnes qui parlent anglais le midi.\n- Extras : 5 vacations au maximum sur la semaine.\n\nÉQUIPE\n- Lucas : temps plein (39 h).\n- Marie-Ange : temps plein (39 h), pas disponible le samedi.\n- Teiva : temps plein (39 h), parle anglais.\n- Sarah : temps partiel (20 h), le midi uniquement, parle anglais.\n- Kevin, extra : disponible mardi et jeudi midi et samedi soir ; parle anglais.\n- Aïcha, extra : disponible vendredi soir, samedi soir et dimanche midi.',
    },
    variantes: {
      simple: 'Planifier seulement les deux jours de paquebot.',
      poussee:
        'Construire un modèle de planning dans un tableur, avec des formules qui comptent les heures, les services coupés et les serveurs de chaque service, puis le réutiliser la semaine suivante.',
    },
    astuces: {
      copilot:
        'Dans Excel, demandez à Copilot une colonne qui totalise les heures de chaque serveur, puis vérifiez la formule sur une ligne.',
      claude:
        'Demandez le planning en fichier Excel grâce à la création de fichiers, avec un onglet qui contrôle chaque règle.',
      gemini:
        'Exportez le tableau dans Google Sheets, puis « Demander à Gemini » pour vérifier les totaux d’heures.',
    },
    vigilance:
      'Les règles de durée du travail, de repos et de service coupé se vérifient dans le Code du travail de la Nouvelle-Calédonie et les accords applicables, auprès de la direction : l’IA ne les connaît pas. Ne donnez que des prénoms et des disponibilités, jamais le motif d’une absence.',
    formateur: {
      resultat:
        'Un planning valable, par exemple : Sarah tous les midis sauf le samedi (20 h) ; Kevin les deux midis de paquebot ; Aïcha le samedi soir et le dimanche midi ; Lucas en coupé mardi, vendredi et samedi, et le jeudi midi (29 h 30) ; Marie-Ange en coupé mardi, mercredi et jeudi, le vendredi soir et le dimanche midi (34 h) ; Teiva le mardi midi, le mercredi soir, en coupé jeudi et samedi, et le vendredi soir (30 h). D’autres solutions conviennent si toutes les règles sont respectées.',
      criteres: [
        'Chaque service a exactement le nombre de serveurs demandé.',
        'Marie-Ange ne travaille pas le samedi, Sarah seulement le midi, les extras seulement quand ils sont disponibles.',
        'Personne ne dépasse trois services coupés ni 39 heures, recomptés à la main.',
        'Les midis de paquebot comptent au moins deux personnes qui parlent anglais.',
      ],
      pieges: [
        'Un service coupé compté 8 h au lieu de 8 h 30, qui fausse tous les totaux.',
        'Marie-Ange placée le samedi soir pour « boucher un trou ».',
        'Accepter un total d’heures annoncé par l’IA sans le recompter.',
      ],
      competence: 'discernement',
      technique: 'iterer',
    },
    motsCles: ['planning', 'service coupé', 'extras', 'paquebot', 'salle', 'horaires'],
  },
  {
    id: 'resto-analyse-carte-menu-engineering',
    titre: 'Analyser la popularité et la marge de chaque plat pour alléger la carte',
    metier: 'restauration',
    niveau: 'avance',
    famille: 'analyser',
    duree: 45,
    outils: ['chatgpt', 'claude', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Le gérant d’un restaurant de Païta veut alléger sa carte de 14 plats avant la saison chaude : la cuisine est débordée et certains produits partent à la poubelle. Vous avez les ventes des quatre dernières semaines et le coût matière de chaque plat. Il attend une analyse de type « menu engineering » et des propositions argumentées.',
    objectif:
      'Enchaîner calcul, classement, vérification et recommandations sur un tableau de ventes, en contrôlant chaque étape avant de passer à la suivante.',
    etapes: [
      'Envoyez le prompt de départ avec le tableau : l’IA calcule seulement les marges et les seuils, catégorie par catégorie, sans conclure.',
      'Vérifiez à la main la marge unitaire et la marge totale de deux plats, et le seuil de popularité des plats principaux.',
      'Regardez si l’IA a repéré la ligne incohérente du tableau ; sinon, montrez-la-lui et demandez son avis, sans la faire corriger.',
      'Demandez le classement de chaque plat dans sa catégorie : vedette, populaire mais peu rentable, rentable mais peu vendu, poids mort.',
      'Faites proposer une action par plat (garder, revoir le prix ou la recette, mettre en avant, retirer), avec le chiffre qui la justifie.',
      'Demandez ce que ces quatre semaines ne permettent pas de conclure, puis rédigez vos trois recommandations au gérant.',
    ],
    prompt:
      'Tu es consultant en gestion de restaurant. Voici les ventes de la carte sur quatre semaines (séparateur : point-virgule ; prix et coûts hors taxes, en XPF).\n\n<ventes>\n[collez le tableau ici]\n</ventes>\n\nÉtape 1 seulement, catégorie par catégorie (entrées, plats, desserts) :\n1. Pour chaque plat, calcule la marge unitaire (prix de vente moins coût matière) et la marge totale (marge unitaire × portions vendues).\n2. Calcule la marge unitaire moyenne de la catégorie (marge totale de la catégorie / portions vendues dans la catégorie) et le seuil de popularité : 0,7 × portions de la catégorie / nombre de plats de la catégorie.\n3. Signale toute ligne incohérente, sans la corriger.\nMontre tes calculs dans un tableau. Ne classe pas encore les plats.',
    materiau: {
      titre: 'Ventes de la carte sur quatre semaines',
      texte:
        'Plat;Catégorie;Portions vendues;Prix de vente HT (XPF);Coût matière par portion (XPF)\nSalade tahitienne;Entrée;310;1800;520\nAccras de morue;Entrée;95;1400;380\nVelouté de giraumon;Entrée;40;1200;250\nTartare de thon;Plat;260;2600;900\nPoisson du jour grillé;Plat;180;3200;1150\nBougna de poulet (sur commande la veille);Plat;35;3500;1300\nBurger de bœuf calédonien;Plat;410;2400;780\nSteak de cerf, sauce au poivre;Plat;150;3400;1250\nCrevettes à l’ail;Plat;120;2900;1190\nWok de légumes au tofu;Plat;55;2100;600\nCôte de bœuf pour deux;Plat;30;7800;3900\nTarte coco;Dessert;140;1000;250\nFondant au chocolat;Dessert;220;1100;300\nSalade de fruits frais;Dessert;60;900;920',
    },
    variantes: {
      simple: 'Analyser seulement les huit plats principaux.',
      poussee:
        'Refaire l’analyse le mois suivant dans un tableur qui calcule et classe automatiquement, puis comparer les deux mois pour mesurer l’effet des changements.',
    },
    astuces: {
      chatgpt:
        'Avec l’analyse de données, joignez le CSV et demandez le graphique popularité-marge de chaque catégorie ; vérifiez la position de deux plats.',
      claude:
        'Demandez le tableau final en fichier Excel grâce à la création de fichiers, avec les formules visibles pour les vérifier.',
      copilot:
        'Dans Excel, Copilot peut ajouter les colonnes de marge : vérifiez que les seuils sont calculés catégorie par catégorie.',
      gemini:
        'Dans Google Sheets, « Demander à Gemini » propose les formules de marge et de seuil, à tester sur une ligne.',
    },
    vigilance:
      'Les chiffres de vente sont confidentiels : travaillez sur une copie, avec un compte professionnel. Le classement aide à décider, il ne décide pas : retirer un plat se discute avec le chef (identité de la carte, clients végétariens, produits partagés entre plusieurs recettes).',
    formateur: {
      resultat:
        'Entrées (seuil de 103,8 portions, marge moyenne de 1 194,8 XPF) : salade tahitienne vedette, accras et velouté poids morts. Plats (seuil de 108,5 portions, marge moyenne de 1 838,2 XPF) : poisson du jour et cerf vedettes ; burger, tartare et crevettes populaires mais peu rentables ; bougna et côte de bœuf rentables mais peu vendus ; wok poids mort. Desserts : tarte coco et fondant vedettes ; salade de fruits signalée (coût supérieur au prix) et poids mort. Des actions chiffrées et des limites clairement dites.',
      criteres: [
        'Les calculs sont faits catégorie par catégorie, et deux marges ont été vérifiées à la main (par exemple le burger : 1 620 XPF par portion, 664 200 XPF au total).',
        'La salade de fruits (920 XPF de coût pour 900 XPF de prix) est signalée, et pas corrigée par l’IA.',
        'Chaque action proposée s’appuie sur un chiffre du tableau.',
        'Les limites sont dites : quatre semaines seulement, bougna sur commande, seul plat végétarien.',
      ],
      pieges: [
        'Comparer les desserts aux plats : tous les desserts deviennent des poids morts.',
        'Retirer le wok, seul plat végétarien, ou le bougna, qui se commande la veille, sur la seule foi du classement.',
        'Accepter un graphique sans vérifier la position de quelques plats.',
      ],
      competence: 'discernement',
      technique: 'decomposer',
    },
    motsCles: ['menu engineering', 'carte', 'marge', 'popularité', 'ventes', 'CSV'],
  },
  {
    id: 'resto-assistant-equipe-salle',
    titre: 'Créer un assistant qui répond aux questions de l’équipe de salle sur la carte',
    metier: 'restauration',
    niveau: 'avance',
    famille: 'automatiser',
    duree: 60,
    outils: ['claude', 'chatgpt', 'gemini', 'copilot'],
    outilConseille: 'claude',
    situation:
      'Dans un restaurant de Koné, les extras du week-end posent toujours les mêmes questions : ce que contient un plat, les cuissons possibles, quoi proposer à un client végétarien, quoi répondre sur les allergènes. Le chef est au passe et ne peut pas répondre à tout. Vous créez un assistant qui répond à partir des documents du restaurant, avec des limites claires.',
    objectif:
      'Écrire des instructions permanentes avec des interdits précis, joindre les bons documents et tester l’assistant jusqu’à ce qu’il renvoie vers le chef au lieu d’inventer.',
    etapes: [
      'Rassemblez les documents de référence, sans données de clients ni de salariés : carte, fiches techniques, tableau des allergènes validé par le chef. À défaut, faites générer une carte et quatre fiches fictives, à faire valider par le formateur.',
      'Créez un Projet (Claude, ChatGPT), un Gem (Gemini) ou un agent (Copilot) avec ces documents et les instructions du prompt de départ.',
      'Testez l’assistant avec les huit questions du matériau et notez chaque réponse : juste, incomplète ou inventée.',
      'Vérifiez surtout les questions 3, 4, 5 et 8 : l’assistant doit renvoyer vers le chef au lieu de garantir ou de deviner.',
      'Corrigez les instructions ou complétez les documents, puis refaites le test.',
      'Rédigez la règle d’usage pour l’équipe : qui met à jour les documents, et ce que l’assistant ne remplace jamais.',
    ],
    prompt:
      'Tu es l’assistant de l’équipe de salle de [nom du restaurant], à Koné. Tu réponds aux questions des serveurs et des extras sur la carte, pendant le service.\n\nRègles :\n- Réponds uniquement à partir des documents fournis (carte, fiches techniques, tableau des allergènes) et cite le document utilisé.\n- Réponses courtes : trois phrases au maximum, lisibles d’un coup d’œil.\n- Allergies et régimes : donne ce qu’indique le tableau validé, puis termine toujours par « À confirmer avec le chef avant de servir ». Ne garantis jamais qu’un plat est sans allergène ou sans traces.\n- Si l’information n’est pas dans les documents (stock du jour, ingrédient non listé), réponds « Je ne sais pas : demande au chef ». N’invente ni ingrédient, ni cuisson, ni prix.\n- Tu ne donnes aucun conseil médical.',
    materiau: {
      titre: 'Questions de test des extras',
      texte:
        '1. C’est quoi, le bougna ? Il faut le commander à l’avance ?\n2. Le client veut son steak de cerf bien cuit, c’est possible ?\n3. Une cliente est allergique à l’arachide : qu’est-ce que je peux lui proposer ?\n4. Il reste du poisson du jour ce soir ?\n5. Un client est cœliaque : les frites sont sans gluten ?\n6. Qu’est-ce qu’on a de végétarien ?\n7. Un client australien demande ce qu’est le civet de cerf : je lui dis quoi en anglais ?\n8. Une cliente enceinte demande si le tartare de thon est sans risque pour elle.',
    },
    variantes: {
      simple:
        'Écrire un prompt réutilisable dans un document, et le tester sur les questions 1, 3 et 6.',
      poussee:
        'Faire évaluer l’assistant par deux serveurs pendant un vrai service, relever les réponses à corriger, et prévoir une mise à jour des documents à chaque changement de carte.',
    },
    astuces: {
      claude:
        'Dans un Projet, déposez les fiches dans les connaissances du projet et collez les règles dans ses instructions.',
      chatgpt:
        'Un Projet suffit pour vous ; un GPT, dont la création est payante, peut être partagé avec toute l’équipe.',
      gemini: 'Créez un Gem avec les règles en instructions et les fiches en fichiers.',
      copilot:
        'Si votre licence le permet, « Créer un agent » le met à disposition de toute l’équipe de salle.',
    },
    vigilance:
      'L’assistant ne voit ni la cuisine ni les étiquettes du jour : pour une allergie, la réponse finale vient toujours du chef. Les documents chargés ne contiennent aucune donnée de client, et sont mis à jour à chaque changement de recette ou de fournisseur.',
    formateur: {
      resultat:
        'Un assistant qui explique le bougna et son délai de commande d’après la carte, renvoie vers le chef pour le stock du jour (question 4), ne garantit rien pour l’arachide et le gluten (questions 3 et 5, avec « À confirmer avec le chef avant de servir »), ne donne aucun conseil médical (question 8), traduit sans inventer (question 7) et cite ses documents.',
      criteres: [
        'Les instructions disent clairement ce que l’assistant ne doit pas faire.',
        'Aucune réponse ne garantit l’absence d’un allergène.',
        'Les réponses citent le document utilisé.',
        'L’apprenant a corrigé ses instructions ou ses documents après le premier test.',
      ],
      pieges: [
        'Une réponse « oui, les frites sont sans gluten » que rien dans les documents ne permet d’affirmer (friteuse commune, chapelure).',
        'Une réponse plausible sur le stock de poisson, que l’assistant ne peut pas connaître.',
        'Charger un ancien tableau des allergènes, jamais validé par le chef.',
      ],
      competence: 'delegation',
      technique: 'instructions',
    },
    motsCles: ['assistant', 'équipe de salle', 'extras', 'allergènes', 'projet', 'gem'],
  },
  {
    id: 'resto-veille-produits-de-saison',
    titre: 'Construire un calendrier des produits locaux de saison et le tenir à jour',
    metier: 'restauration',
    niveau: 'avance',
    famille: 'veiller',
    duree: 45,
    outils: ['gemini', 'chatgpt', 'claude'],
    outilConseille: 'gemini',
    situation:
      'La cheffe d’un restaurant de Bourail veut une carte qui suit les saisons calédoniennes : fruits, légumes, poissons et viandes du pays, achetés autant que possible à des producteurs locaux. Elle vous demande un calendrier fiable, une liste de fournisseurs à contacter et une veille qui signale chaque mois ce qui arrive sur les marchés.',
    objectif:
      'Enchaîner une recherche approfondie, la vérification des sources et une veille programmée, sans laisser passer de saison copiée sur l’hémisphère Nord ni de fournisseur inventé.',
    etapes: [
      'Lancez une recherche approfondie avec le prompt de départ et les notes de la cheffe.',
      'Ouvrez les sources : chaque période doit venir d’une source calédonienne (chambre d’agriculture, marchés, organismes de la filière, provinces), pas d’un calendrier de métropole.',
      'Traquez les saisons copiées sur la métropole : en Nouvelle-Calédonie, les letchis arrivent autour de décembre, et les mandarines pendant l’hiver austral (la fête de la mandarine de Canala a lieu début juillet).',
      'Vérifiez deux fournisseurs proposés : existent-ils, vendent-ils aux restaurants, livrent-ils Bourail ? Retirez ceux que vous ne pouvez pas confirmer.',
      'Faites rédiger le calendrier mois par mois, avec la source de chaque ligne et une colonne « à confirmer ».',
      'Programmez une veille mensuelle qui signale les produits qui arrivent et les nouvelles des producteurs (action programmée ou tâche planifiée).',
    ],
    prompt:
      'Tu es acheteur pour un restaurant de Bourail, en Nouvelle-Calédonie. Fais une recherche sur les produits locaux de saison en Nouvelle-Calédonie : fruits, légumes, poissons et viandes produits dans le pays, en priorité ceux de la liste ci-dessous.\nPour chaque produit : les mois de pleine saison en Nouvelle-Calédonie (hémisphère Sud), la source consultée avec son lien, et ton niveau de certitude.\nSignale les éventuelles périodes de fermeture de la pêche ou de la chasse fixées par les provinces, avec leur source.\nAjoute une liste de producteurs ou de groupements qui vendent aux restaurants de la province Sud, avec leur source.\nSi tu ne trouves pas de source calédonienne pour une information, écris « à confirmer » : n’utilise pas un calendrier de métropole.\n\n<notes>\n[collez les notes de la cheffe ici]\n</notes>',
    materiau: {
      titre: 'Notes de la cheffe',
      texte:
        'Produits à vérifier en priorité : letchis, mangues, mandarines, avocats, ignames, giraumon, tomates, salades, crabe de palétuvier, cerf, crevettes.\nCe que je veux éviter : mettre à la carte un produit introuvable ou hors de prix ce mois-là.\nFournisseurs actuels, à garder : un maraîcher de La Foa et un éleveur de cerfs de Boulouparis.\nJe change l’ardoise chaque semaine et la carte deux fois par an.',
    },
    variantes: {
      simple: 'Se limiter aux fruits et légumes, avec trois sources vérifiées.',
      poussee:
        'Transformer le calendrier en affiche pour la cuisine, et proposer pour chaque mois trois idées de plats du jour, à faire valider par la cheffe.',
    },
    astuces: {
      gemini:
        'Lancez Deep Research, exportez le rapport dans Google Docs pour y noter vos vérifications, puis utilisez « Programmer des actions » pour la veille mensuelle.',
      chatgpt:
        'La recherche approfondie, limitée en gratuit, rend un rapport sourcé ; une tâche planifiée, payante, relance la veille chaque mois.',
      claude:
        'La Recherche, payante, convient à ce travail en plusieurs étapes ; la recherche web suffit pour vérifier une saison précise.',
    },
    vigilance:
      'Les saisons, les prix et les périodes de fermeture de la pêche ou de la chasse changent selon les années et les provinces : ne gardez que ce qui est confirmé par une source officielle ou par le producteur. Ne donnez à l’IA ni vos prix d’achat ni les coordonnées privées de vos fournisseurs.',
    formateur: {
      resultat:
        'Un calendrier mois par mois des produits locaux, dont chaque ligne est sourcée ou marquée « à confirmer », sans saison copiée sur la métropole (letchis et premières mangues autour de décembre, mandarines en hiver austral), une liste de fournisseurs vérifiés et une veille mensuelle programmée.',
      criteres: [
        'Chaque période retenue a une source calédonienne ouverte par l’apprenant.',
        'Les fournisseurs non confirmés sont retirés ou signalés.',
        'Les périodes de fermeture de la pêche ou de la chasse sont sourcées ou marquées « à confirmer ».',
        'La veille mensuelle est programmée et son prompt précise les sources à surveiller.',
      ],
      pieges: [
        'Reprendre un calendrier de métropole, par exemple des mandarines annoncées en décembre et en janvier.',
        'Garder un producteur ou un groupement inventé par l’IA, au nom plausible.',
        'Une période de fermeture de la pêche citée sans source, ou valable dans une autre province.',
      ],
      competence: 'diligence',
      technique: 'sources',
    },
    motsCles: ['veille', 'produits locaux', 'saison', 'fournisseurs', 'circuit court', 'Bourail'],
  },
  {
    id: 'resto-commandes-jours-paquebot',
    titre: 'Prévoir les couverts de la semaine et préparer les commandes aux fournisseurs',
    metier: 'restauration',
    niveau: 'avance',
    famille: 'organiser',
    duree: 45,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Vous êtes second de cuisine dans une brasserie de Port-Moselle. La semaine prochaine, deux paquebots font escale et un groupe de 40 personnes a réservé le samedi soir. Il faut prévoir les couverts jour par jour, en déduire les quantités des produits principaux et passer les commandes à trois fournisseurs, qui ont chacun leurs jours de livraison.',
    objectif:
      'Enchaîner prévision, calcul des besoins et bons de commande, en vérifiant chaque étape, et garder pour soi les décisions qui engagent la cuisine.',
    etapes: [
      'Envoyez le prompt de départ : l’IA prévoit seulement les couverts.',
      'Vérifiez deux prévisions à la main, dont un jour de paquebot : l’IA a-t-elle exclu les jours de paquebot des moyennes ordinaires ?',
      'Demandez l’étape 2, puis recalculez une livraison, stock compris.',
      'Demandez l’étape 3 : un bon de commande par fournisseur et un message court pour chacun, sans prix ni conditions inventés.',
      'Décidez vous-même des arrondis et d’une marge de sécurité, et notez ce qui reste à confirmer (taille du groupe, horaires des escales).',
      'Faites valider les commandes par le chef avant l’envoi.',
    ],
    prompt:
      'Tu es second de cuisine dans une brasserie de Nouméa. Nous allons préparer les commandes de la semaine en trois étapes ; fais seulement l’étape 1.\n\nÉtape 1 : prévois les couverts de chaque jour, du mardi au dimanche. Méthode : pour un jour ordinaire, moyenne des semaines sans paquebot ce jour-là ; pour un jour de paquebot, moyenne des deux jours de paquebot de l’historique ; ajoute le groupe du samedi. Arrondis à l’unité et montre tes calculs.\nÉtape 2 (plus tard) : les besoins de chaque produit pour chaque livraison, en tenant compte du stock et de la règle de la maison.\nÉtape 3 (plus tard) : un bon de commande par fournisseur et le message d’envoi.\n\n<donnees>\n[collez le matériau ici]\n</donnees>',
    materiau: {
      titre: 'Historique, semaine à prévoir et produits',
      texte:
        'HISTORIQUE DES COUVERTS (midi et soir)\nJour;Semaine 1;Semaine 2;Semaine 3;Remarque\nMardi;92;88;150;paquebot en semaine 3\nMercredi;85;90;87;\nJeudi;95;160;91;paquebot en semaine 2\nVendredi;130;125;135;\nSamedi;140;138;142;\nDimanche (midi seulement);70;75;72;\n\nSEMAINE À PRÉVOIR\n- Fermé le lundi.\n- Paquebots en escale mardi et jeudi.\n- Samedi soir : groupe de 40 personnes en plus de la salle, même carte.\n\nPRODUITS\nProduit;Besoin moyen par couvert;Stock lundi soir;Fournisseur;Livraisons;Conditionnement\nFilets de poisson;0,06 kg;0 kg;Pêcherie;mardi, jeudi, samedi;au kilo\nBœuf haché;0,04 kg;2 kg;Boucherie;mardi, vendredi;au kilo\nPommes de terre;0,15 kg;20 kg;Grossiste en fruits et légumes;mardi, vendredi;sacs de 25 kg\n\nRÈGLE DE LA MAISON : chaque livraison couvre les besoins jusqu’à la livraison suivante ; on ne garde pas de poisson frais d’une livraison à l’autre.',
    },
    variantes: {
      simple: 'Faire seulement la prévision des couverts et la commande de poisson.',
      poussee:
        'Construire un tableur de prévision réutilisable chaque semaine, puis comparer pendant un mois les prévisions et les couverts réels pour ajuster la méthode.',
    },
    astuces: {
      claude:
        'Demandez les bons de commande en fichier Excel grâce à la création de fichiers, un onglet par fournisseur.',
      chatgpt:
        'Avec l’analyse de données, demandez un tableau de prévision où il suffit de changer les jours de paquebot pour tout recalculer.',
      copilot:
        'Dans Excel, Copilot peut ajouter les formules de besoins par livraison ; testez-les sur une ligne calculée à la main.',
      gemini:
        'Dans Google Sheets, « Demander à Gemini » propose les formules de moyenne qui excluent les jours de paquebot.',
    },
    vigilance:
      'Une prévision reste une estimation : la marge de sécurité et la décision finale reviennent au chef. Vérifiez les escales prévues et leurs horaires avant de commander. Ne donnez à l’IA ni vos prix d’achat ni vos conditions commerciales.',
    formateur: {
      resultat:
        'Des prévisions de 155 couverts le mardi et le jeudi, 87 le mercredi, 130 le vendredi, 180 le samedi et 72 le dimanche ; des besoins justes (poisson : environ 14,5 kg le mardi, 17,1 kg le jeudi et 15,1 kg le samedi ; bœuf haché : environ 13,9 kg le mardi, stock déduit, et 15,3 kg le vendredi ; pommes de terre : 2 sacs le mardi et 2 sacs le vendredi) et trois bons de commande sans prix inventé.',
      criteres: [
        'Les jours de paquebot sont exclus des moyennes des jours ordinaires.',
        'Au moins une livraison a été recalculée à la main, stock compris.',
        'Chaque commande couvre les jours jusqu’à la livraison suivante, sans stock de poisson d’une livraison à l’autre.',
        'Les bons de commande ne contiennent ni prix ni conditions inventés.',
      ],
      pieges: [
        'Un mardi prévu à 110 couverts : la moyenne mélange jours ordinaires et jour de paquebot.',
        'Oublier le stock de pommes de terre ou de bœuf, et commander trop.',
        'Commander le poisson du samedi pour toute la semaine.',
      ],
      competence: 'delegation',
      technique: 'decomposer',
    },
    motsCles: ['commandes', 'fournisseurs', 'prévision', 'couverts', 'paquebot', 'stock'],
  },
];
