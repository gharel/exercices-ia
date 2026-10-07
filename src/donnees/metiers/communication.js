/**
 * Communication et marketing : réseaux sociaux, site web, campagnes, relations presse.
 * Toutes les personnes, entreprises, adresses et sommes sont fictives.
 */

export const vocabulaire = {
  structure: { g: 'f', s: 'agence de communication', p: 'agences de communication' },
  client: { g: 'm', s: 'annonceur', p: 'annonceurs' },
  partenaire: { g: 'm', s: 'imprimeur', p: 'imprimeurs' },
  documentCourant: { g: 'f', s: 'proposition de campagne', p: 'propositions de campagne' },
  documentLong: { g: 'm', s: 'plan de communication annuel', p: 'plans de communication annuels' },
  reunion: {
    g: 'f',
    s: 'réunion de lancement de campagne',
    p: 'réunions de lancement de campagne',
  },
  offre: {
    g: 'f',
    s: 'nouvelle gamme de confitures d’un producteur de La Foa',
    p: 'nouvelles gammes de confitures d’un producteur de La Foa',
  },
  poste: { g: 'm', s: 'chargé de communication', p: 'chargés de communication' },
  evenement: {
    g: 'f',
    s: 'soirée de lancement d’une nouvelle marque',
    p: 'soirées de lancement de nouvelles marques',
  },
  visuel: { g: 'f', s: 'affiche publicitaire', p: 'affiches publicitaires' },
  domaine: 'la communication et le marketing',
  motifReclamation: 'une coquille dans une affiche déjà imprimée en 500 exemplaires',
  donnees: 'les statistiques mensuelles de la page Facebook d’un annonceur sur un an',
  colonnes:
    'Mois;Publications;Portée (personnes);Interactions;Nouveaux abonnés;Budget sponsorisé (XPF)',
  indicateur: 'le taux d’engagement mensuel des publications',
  veille: 'les tendances des réseaux sociaux et les campagnes des marques calédoniennes',
  sourcesVeille:
    'les pages des marques locales, la presse calédonienne et les annonces officielles des réseaux sociaux',
  jargon: 'la portée, les impressions et le taux d’engagement',
  procedure: 'la validation d’une publication par l’annonceur avant sa mise en ligne',
  situationTendue: 'un annonceur furieux que sa campagne sponsorisée n’ait apporté aucun client',
  donneesSensibles:
    'les fichiers clients des annonceurs, les adresses e-mail des abonnés et les photos de personnes identifiables',
  corpus:
    'les chartes graphiques, les plans de communication et les bilans de campagne d’un annonceur',
  publicCible: 'les 18-35 ans du Grand Nouméa, actifs sur Instagram et TikTok',
  etranger: 'un annonceur australien qui veut lancer un produit en Nouvelle-Calédonie',
  themeFormation: 'la ligne éditoriale et la charte graphique d’un annonceur',
  tacheRepetitive:
    'le point hebdomadaire sur les statistiques des réseaux sociaux de chaque annonceur',
  planning: 'le calendrier des publications du mois pour trois annonceurs',
  comparaison: 'deux propositions de slogan pour la même campagne',
};

export const exercices = [
  {
    id: 'comm-trois-reseaux',
    titre: 'Décliner un même message pour Facebook, Instagram et LinkedIn',
    metier: 'communication',
    niveau: 'debutant',
    famille: 'rediger',
    duree: 15,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Vous êtes chargé ou chargée de communication dans une agence de Nouméa. Votre client, l’épicerie bio Fare Bio de Koné, ouvre une deuxième boutique à Magenta. Il vous a envoyé ses informations en vrac et attend trois publications pour demain.',
    objectif:
      'Adapter un même message à trois réseaux en précisant, pour chacun, le public, le ton et le format.',
    etapes: [
      'Lisez le message du client et soulignez ce qui doit figurer partout : date, heure, adresse, offre d’ouverture.',
      'Envoyez le prompt de départ avec le message du matériau.',
      'Comparez les trois versions : longueur, ton, appel à l’action, hashtags.',
      'Vérifiez que la date, l’adresse et l’offre sont identiques dans les trois textes.',
      'Demandez une retouche ciblée sur la version qui vous convainc le moins.',
    ],
    prompt:
      'Tu es chargé de communication dans une agence de Nouméa. Rédige trois publications pour annoncer l’ouverture d’une boutique, à partir des informations ci-dessous :\n- Facebook : public local et familial, ton chaleureux, 80 mots au maximum, un appel à l’action ;\n- Instagram : public de 20 à 35 ans, ton dynamique, 50 mots au maximum, 5 hashtags pertinents ;\n- LinkedIn : public professionnel (fournisseurs, partenaires, futurs salariés), ton sobre, 100 mots au maximum, en mettant en avant les emplois créés.\nN’ajoute aucune information absente du message : ni promotion, ni produit inventés.\n\n<informations>\n[collez le message du client ici]\n</informations>',
    materiau: {
      titre: 'Message du client',
      texte:
        'Bonjour, on ouvre enfin la boutique de Nouméa !! Samedi 7 novembre à 8h, 14 rue des Frangipaniers à Magenta. Fruits et légumes de producteurs de la côte Ouest, vrac, produits locaux (miel de Sarraméa, café de Farino, savons artisanaux). 4 personnes embauchées dont 2 jeunes du quartier. Le jour de l’ouverture : dégustation et -10 % sur tout le vrac. Ouvert du mardi au samedi 7h30-18h. Merci de bien dire que la boutique de Koné reste ouverte !',
    },
    variantes: {
      simple: 'Rédiger seulement la publication Facebook.',
      poussee:
        'Ajouter une story Instagram en trois écrans et un texte de 20 secondes à dire face caméra pour une vidéo courte.',
    },
    astuces: {
      chatgpt:
        'Dans le canevas, demandez de raccourcir une seule des trois publications sans toucher aux autres.',
      claude:
        'Demandez deux accroches différentes pour Instagram et gardez la plus forte : la première ligne fait tout.',
    },
    vigilance:
      'Vérifiez les hashtags proposés : certains sont détournés ou sans rapport avec la Nouvelle-Calédonie. Ne publiez pas de photo des salariés sans leur accord.',
    formateur: {
      resultat:
        'Trois textes de longueur et de ton différents, avec les mêmes informations clés (samedi 7 novembre, 8 h, Magenta, -10 % sur le vrac) et la mention que la boutique de Koné reste ouverte.',
      criteres: [
        'Les informations clés sont identiques dans les trois versions.',
        'Chaque version respecte la longueur et le ton demandés pour son réseau.',
        'La publication LinkedIn met en avant les emplois créés, pas seulement l’offre.',
      ],
      pieges: [
        'Une version qui étend la remise à « tout le magasin » ou invente une offre.',
        'Oublier que la boutique de Koné reste ouverte, demande expresse du client.',
      ],
      competence: 'description',
      technique: 'format',
    },
    motsCles: ['réseaux sociaux', 'Facebook', 'Instagram', 'LinkedIn', 'publication'],
  },
  {
    id: 'comm-commentaire-negatif',
    titre: 'Répondre à un commentaire négatif publié sur une page',
    metier: 'communication',
    niveau: 'debutant',
    famille: 'rediger',
    duree: 15,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Vous gérez la page Facebook d’une salle de sport de Dumbéa, cliente de votre agence. Ce matin, un abonné a publié un commentaire virulent, déjà « aimé » par une vingtaine de personnes. Le gérant vous a donné les faits ; vous devez répondre publiquement dans l’heure.',
    objectif:
      'Obtenir une réponse publique apaisante et factuelle, qui propose une suite en privé, sans promesse non validée ni information personnelle.',
    etapes: [
      'Lisez le commentaire et les faits donnés par le gérant.',
      'Envoyez le prompt de départ en complétant le nom de la salle.',
      'Demandez trois versions (très courte, standard, détaillée) et comparez-les.',
      'Vérifiez qu’aucune version ne promet plus que ce que le gérant a validé, ni ne parle du compte de l’abonné.',
      'Choisissez une version, puis préparez le message privé qui l’accompagnera.',
    ],
    prompt:
      'Tu es community manager pour [nom de la salle], une salle de sport à Dumbéa. Un abonné a publié le commentaire ci-dessous sur notre page Facebook. Rédige une réponse publique :\n- qui remercie et reconnaît la gêne, sans se justifier longuement ;\n- qui donne les faits fournis par le gérant ;\n- qui propose de poursuivre en message privé ;\n- en 60 mots au maximum, en vouvoiement, sans emoji.\nNe promets rien d’autre que ce que le gérant a validé. Ne mentionne aucune information personnelle sur l’abonné.\n\n<commentaire>\n[collez le commentaire ici]\n</commentaire>\n\n<faits>\n[collez les faits ici]\n</faits>',
    materiau: {
      titre: 'Commentaire publié et faits donnés par le gérant',
      texte:
        'COMMENTAIRE (publié à 6 h 42)\nScandaleux. Ça fait TROIS semaines que la clim de la salle de cardio est en panne, on crève de chaud, et vous continuez à prélever 7 500 XPF par mois comme si de rien n’était. Personne ne répond au téléphone. Je résilie et je conseille à tout le monde d’aller voir ailleurs.\n\nFAITS DONNÉS PAR LE GÉRANT\n- Climatisation de la salle de cardio en panne depuis le 21 septembre ; la pièce arrive par bateau, réparation prévue la semaine du 19 octobre.\n- Des ventilateurs ont été installés le 25 septembre.\n- Geste validé : un mois d’abonnement offert à tous les abonnés, annoncé par e-mail vendredi.\n- Le numéro de l’accueil a changé : 27 00 00.\n- Pas de frais de résiliation ce mois-ci, validé par le gérant ; la résiliation se fait à l’accueil.',
    },
    variantes: {
      simple: 'Rédiger une seule réponse de 40 mots.',
      poussee:
        'Préparer aussi trois réponses types pour les commentaires qui suivront (soutien, nouvelle plainte, moquerie) et une publication d’information sur la réparation.',
    },
    astuces: {
      claude:
        'Demandez à Claude de relire sa réponse en se mettant à la place des autres abonnés qui la liront : que retiennent-ils ?',
      copilot:
        'Collez votre version finale dans Copilot Chat et demandez comment elle sera perçue par un abonné mécontent.',
    },
    vigilance:
      'Ne collez ni le nom ni la photo de l’auteur du commentaire. Une réponse publique engage l’image du client : faites-la valider par le gérant avant de publier.',
    formateur: {
      resultat:
        'Une réponse publique courte et empathique, qui donne la date de réparation et le geste validé, propose un échange en privé et ne parle pas de la résiliation de l’abonné.',
      criteres: [
        'La réponse reprend les faits exacts : ventilateurs, réparation la semaine du 19 octobre, mois offert.',
        'Elle invite à poursuivre en privé et donne le bon numéro.',
        'Elle ne contient ni promesse supplémentaire, ni information sur le compte de l’abonné.',
      ],
      pieges: [
        'Accepter une version qui promet un remboursement intégral ou une réparation « immédiate ».',
        'Répondre sur le ton de la justification, ce qui relance la polémique.',
        'Évoquer publiquement la résiliation de l’abonné.',
      ],
      competence: 'discernement',
      technique: 'options',
    },
    motsCles: ['commentaire négatif', 'e-réputation', 'Facebook', 'modération', 'réponse publique'],
  },
  {
    id: 'comm-texte-site-lisible',
    titre: 'Rendre lisible le texte d’accueil d’un site web',
    metier: 'communication',
    niveau: 'debutant',
    famille: 'corriger',
    duree: 20,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Une entreprise d’électricité de Païta, cliente de l’agence, veut refaire la page d’accueil de son site. Le gérant a écrit le texte lui-même : une seule phrase interminable, du jargon, des fautes. Les visiteurs, souvent sur téléphone, quittent la page sans appeler.',
    objectif:
      'Faire réécrire un texte pour le web (phrases courtes, intertitres, appel à l’action) sans perdre ni déformer les informations.',
    etapes: [
      'Copiez le texte du matériau dans votre outil d’IA avec le prompt de départ.',
      'Comparez la nouvelle version à l’originale : chaque service, chaque commune, les horaires et le numéro doivent y être.',
      'Lisez la nouvelle version sur l’écran de votre téléphone : est-elle lisible sans zoomer ?',
      'Demandez la liste des termes techniques conservés, avec une explication simple pour chacun.',
      'Demandez un titre de page et une description de 150 caractères pour les moteurs de recherche.',
    ],
    prompt:
      'Tu es rédacteur web. Réécris le texte de page d’accueil ci-dessous pour des particuliers qui le liront sur leur téléphone.\n- Corrige toutes les fautes.\n- Phrases de 15 mots au maximum, paragraphes de trois lignes, deux ou trois intertitres.\n- Remplace le jargon par des mots simples, ou explique-le en quelques mots.\n- Termine par un appel à l’action clair.\nGarde toutes les informations (services, communes, horaires, numéro) et n’en ajoute aucune.\n\n<texte>\n[collez le texte ici]\n</texte>',
    materiau: {
      titre: 'Texte actuel de la page d’accueil',
      texte:
        'Bienvenu sur le site de Païta Élec Services, entreprise spécialisé depuis 2009 dans tout les travaux d’électricité courant fort et courant faible pour les particuliers et professionnels, nous intervenons sur la mise en conformité de vos installations électrique, le remplacement des TGBT vétustes, l’installation de bornes IRVE pour les véhicules électriques ainsi que le dépannage dans les meilleurs délais sur les communes de Païta, Dumbéa, Nouméa et Mont-Dore, nos techniciens sont habilités et formés aux dernières normes. Devis gratuit. Joignable du lundi au vendredi de 7h a 17h au 41 00 00 et le samedi matin pour les urgences.',
    },
    variantes: {
      simple: 'Demander seulement la correction des fautes et le découpage en phrases courtes.',
      poussee:
        'Faire rédiger aussi les pages « Dépannage » et « Bornes de recharge », puis comparer deux structures de page d’accueil.',
    },
    astuces: {
      chatgpt:
        'Dans le canevas, comparez l’ancien et le nouveau texte paragraphe par paragraphe, et retouchez-en un seul si besoin.',
      gemini: 'Ouvrez le texte dans Canvas pour retoucher un intertitre sans tout régénérer.',
    },
    vigilance:
      'L’IA peut ajouter des promesses que l’entreprise n’a pas faites (« intervention en une heure », « 7 jours sur 7 ») : chaque engagement du texte doit venir du client.',
    formateur: {
      resultat:
        'Une page courte, avec intertitres, qui explique TGBT (le tableau électrique principal) et IRVE (les bornes de recharge), garde les quatre communes, les horaires et le numéro, et finit par un appel à l’action.',
      criteres: [
        'Toutes les informations de l’original sont présentes, aucune n’est ajoutée.',
        'Les phrases sont courtes et le jargon est expliqué.',
        'Le samedi matin reste réservé aux urgences.',
      ],
      pieges: [
        'Une version qui annonce un dépannage « 7 jours sur 7 » ou « en moins d’une heure ».',
        'Supprimer une commune ou les horaires pour gagner de la place.',
      ],
      competence: 'discernement',
      technique: 'format',
    },
    motsCles: ['site web', 'lisibilité', 'rédaction web', 'jargon', 'page d’accueil'],
  },
  {
    id: 'comm-visuel-canva-decliner',
    titre: 'Créer une publication Canva et la décliner en plusieurs formats',
    metier: 'communication',
    niveau: 'debutant',
    famille: 'visuels',
    duree: 20,
    outils: ['canva', 'chatgpt'],
    outilConseille: 'canva',
    situation:
      'Le comité des fêtes de La Foa, client de votre agence, organise un marché de producteurs le dimanche 15 novembre. Il veut une publication carrée pour Facebook et Instagram, une story, et une affiche A4 à poser chez les commerçants.',
    objectif:
      'Créer un visuel avec l’IA de Canva à partir d’une description précise, puis le décliner et vérifier chaque format.',
    etapes: [
      'Ouvrez Canva et décrivez le visuel à l’IA Canva ou au Design magique avec le prompt de départ.',
      'Choisissez une proposition et vérifiez les textes : date, horaires, lieu.',
      'Raccourcissez avec l’Écriture magique si le visuel est trop chargé.',
      'Déclinez le design en story et en affiche A4 avec le Redimensionnement magique (Pro), ou refaites ces formats à la main en version gratuite.',
      'Vérifiez chaque format : texte lisible, informations complètes, rien de coupé.',
    ],
    prompt:
      'Crée une publication carrée pour Facebook et Instagram qui annonce un marché de producteurs.\nTexte à afficher, mot pour mot :\n« Marché des producteurs de La Foa »\n« Dimanche 15 novembre, de 6 h à 12 h »\n« Fruits, légumes, miel, plats à emporter, artisanat »\n« Place du marché – entrée libre »\nStyle : lumineux, couleurs chaudes, fruits et légumes cultivés en Nouvelle-Calédonie, typographie lisible sur téléphone. Aucune personne reconnaissable sur les images.',
    variantes: {
      simple: 'Faire uniquement la publication carrée.',
      poussee:
        'Créer aussi une version anglaise pour les touristes et un modèle réutilisable pour les prochains marchés, aux couleurs du comité.',
    },
    astuces: {
      canva:
        'Si une image générée contient du texte déformé, supprimez-le et retapez-le dans un bloc de texte Canva.',
      chatgpt:
        'La création d’images peut produire une illustration de fond ; ajoutez ensuite les textes dans Canva, plus fiable pour l’écriture.',
    },
    vigilance:
      'Les images générées peuvent contenir des fautes, des fruits qui n’existent pas ou des personnes inventées : regardez chaque détail. N’utilisez pas la photo d’un producteur sans son accord.',
    formateur: {
      resultat:
        'Trois formats cohérents (carré, story, A4) avec des textes exacts et lisibles, sans élément d’image incohérent.',
      criteres: [
        'La date, les horaires et le lieu sont exacts sur les trois formats.',
        'Le texte se lit sur un téléphone sans zoomer.',
        'L’apprenant a regardé les images générées et remplacé celles qui posaient problème.',
      ],
      pieges: [
        'Garder un texte généré dans l’image, aux lettres déformées.',
        'Ne pas voir qu’un format redimensionné coupe la date ou le lieu.',
      ],
      competence: 'discernement',
      technique: 'iterer',
    },
    motsCles: ['Canva', 'visuel', 'publication', 'story', 'affiche', 'redimensionnement'],
  },
  {
    id: 'comm-communique-presse',
    titre: 'Rédiger un communiqué de presse à partir de notes en vrac',
    metier: 'communication',
    niveau: 'intermediaire',
    famille: 'rediger',
    duree: 30,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Une entreprise de recyclage de Ducos, cliente de l’agence, lance une collecte de canettes dans des écoles de Nouméa et du Mont-Dore. La responsable vous a dicté ses notes au téléphone. Le communiqué doit partir demain à la presse locale.',
    objectif:
      'Construire un communiqué en plusieurs échanges : structure en pyramide inversée, chiffres vérifiés, citation validée.',
    etapes: [
      'Envoyez le prompt de départ avec les notes du matériau.',
      'Si l’IA ne signale pas d’incohérence dans les notes, cherchez-la vous-même et posez-lui la question.',
      'Vérifiez que le chapeau répond à qui, quoi, où, quand et pourquoi.',
      'Contrôlez chaque chiffre avec les notes, puis demandez deux autres titres et choisissez le plus informatif.',
      'Faites valider la citation par la responsable : on ne publie pas des mots qu’elle n’a pas approuvés.',
    ],
    prompt:
      'Tu es attaché de presse dans une agence de communication à Nouméa. Rédige un communiqué de presse à partir des notes ci-dessous, pour la presse écrite, les radios et les télévisions locales.\nStructure : titre informatif ; chapeau de deux phrases qui répond à qui, quoi, où, quand et pourquoi ; trois paragraphes courts, du plus important au moins important ; une citation de la responsable ; un encadré « Contact presse ». 300 mots au maximum.\nN’utilise que les informations des notes. Si deux informations se contredisent, ne choisis pas : signale-le-moi avant de rédiger.\n\n<notes>\n[collez les notes ici]\n</notes>',
    materiau: {
      titre: 'Notes de la responsable, dictées au téléphone',
      texte:
        'Recycl’Îles, Ducos. Opération « Canettes pour l’école » du 2 au 27 novembre. 12 écoles : 8 à Nouméa, 3 au Mont-Dore. Les élèves apportent les canettes vides, on passe les collecter chaque vendredi. Chaque kilo = 100 XPF reversés à la coopérative de l’école. L’an dernier, test dans 3 écoles : 1,2 tonne collectée, soit 120 000 XPF reversés. Objectif cette année : 5 tonnes. Remise des chèques le 11 décembre. Citation possible : « Les enfants sont les meilleurs ambassadeurs du tri, ils emmènent leurs parents avec eux. » Contact presse : Nadia Kecine, 28 00 00. Partenaire : la province Sud ? à confirmer, ne pas citer si pas confirmé.',
    },
    variantes: {
      simple: 'Rédiger seulement le titre et le chapeau.',
      poussee:
        'Préparer aussi une version de 30 secondes à lire à la radio et un e-mail d’envoi personnalisé pour une rédaction.',
    },
    astuces: {
      claude:
        'Demandez à Claude la liste des questions qu’un journaliste poserait après lecture : elles révèlent les informations manquantes.',
      copilot:
        'Dans Word, Copilot peut reprendre le communiqué dans le modèle de l’agence ; relisez les chiffres après coup.',
    },
    vigilance:
      'Une citation ne s’invente pas et ne s’embellit pas : faites valider mot pour mot les propos attribués. Ne citez pas un partenaire non confirmé.',
    formateur: {
      resultat:
        'Un communiqué de 300 mots au plus, au chapeau complet, aux chiffres exacts, avec une citation validée, et l’incohérence « 12 écoles » contre « 8 + 3 » signalée avant rédaction.',
      criteres: [
        'L’incohérence sur le nombre d’écoles est signalée, pas tranchée.',
        'La province Sud n’est pas citée comme partenaire.',
        'Les chiffres (100 XPF le kilo, 1,2 tonne, 5 tonnes, dates) sont exacts.',
        'Le chapeau répond à qui, quoi, où, quand et pourquoi.',
      ],
      pieges: [
        'Annoncer « 12 écoles » sans voir qu’il en manque une dans le détail.',
        'Une citation rallongée ou embellie par l’IA.',
      ],
      competence: 'discernement',
      technique: 'structurer',
    },
    motsCles: ['communiqué de presse', 'relations presse', 'citation', 'pyramide inversée'],
  },
  {
    id: 'comm-calendrier-editorial',
    titre: 'Construire le calendrier éditorial d’un mois',
    metier: 'communication',
    niveau: 'intermediaire',
    famille: 'organiser',
    duree: 30,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Votre agence gère les réseaux sociaux d’une boulangerie-pâtisserie du Faubourg-Blanchot, Le Fournil du Faubourg. Le gérant veut trois publications par semaine en décembre, avec les fêtes de fin d’année, sans répéter toujours le même message.',
    objectif:
      'Faire construire un calendrier éditorial équilibré à partir de contraintes précises, puis l’ajuster en plusieurs échanges.',
    etapes: [
      'Envoyez le prompt de départ avec le brief du matériau.',
      'Vérifiez le calendrier : trois publications par semaine, temps forts aux bonnes dates, aucun jour de fermeture.',
      'Demandez de rééquilibrer si un type de contenu domine, par exemple trop de promotions.',
      'Faites rédiger le texte complet de deux publications et la liste des photos à prévoir.',
      'Exportez le calendrier en tableau (Excel ou Google Sheets) pour le faire valider par le client.',
    ],
    prompt:
      'Tu es community manager dans une agence de Nouméa. Prépare le calendrier éditorial de décembre 2026 pour les pages Facebook et Instagram d’une boulangerie-pâtisserie, à partir du brief ci-dessous.\nRends un tableau : date, jour de la semaine, réseau, type de contenu (coulisses, produit, information pratique, promotion, communauté), idée de publication en une phrase, photo ou visuel à prévoir.\nContraintes : trois publications par semaine, une promotion au plus par semaine, aucune publication un jour de fermeture. Vérifie le jour de la semaine de chaque date.\n\n<brief>\n[collez le brief ici]\n</brief>',
    materiau: {
      titre: 'Brief du gérant',
      texte:
        '- Fermé le lundi, et fermé le 25 décembre et le 1er janvier.\n- Commandes de bûches du 1er au 20 décembre ; retrait les 23 et 24.\n- Nouveauté : bûche letchi-passion, à mettre en avant.\n- Horaires spéciaux les 24 et 31 décembre : 5 h 30 - 15 h.\n- On aimerait montrer l’équipe qui travaille la nuit (tout le monde a donné son accord pour les photos).\n- Téléthon le samedi 5 décembre : 50 XPF reversés par baguette vendue.\n- Aucune promotion sur les bûches.',
    },
    variantes: {
      simple: 'Planifier une seule semaine.',
      poussee:
        'Ajouter TikTok avec deux vidéos courtes par semaine, et un tableau de suivi des résultats à remplir après chaque publication.',
    },
    astuces: {
      claude:
        'Demandez le calendrier en fichier Excel grâce à la création de fichiers : le client le valide ligne par ligne.',
      gemini:
        'Demandez le tableau, puis exportez-le dans Google Sheets pour le partager avec le client.',
      copilot:
        'Transformez le calendrier en Copilot Page : le client peut commenter chaque publication.',
    },
    vigilance:
      'Vérifiez chaque date et chaque jour de la semaine : un calendrier faux fait perdre la confiance du client.',
    formateur: {
      resultat:
        'Un tableau d’environ treize publications réparties sur le mois, sans lundi ni 25 décembre, qui valorise la nouvelle bûche, le Téléthon du samedi 5, les horaires spéciaux, avec une promotion au plus par semaine et aucune sur les bûches.',
      criteres: [
        'Les jours de la semaine sont justes (les lundis de décembre 2026 sont les 7, 14, 21 et 28).',
        'Aucune promotion sur les bûches, une promotion au plus par semaine.',
        'Les types de contenu sont variés.',
        'Le calendrier a été corrigé en au moins un échange.',
      ],
      pieges: [
        'Une publication prévue un lundi ou le 25 décembre.',
        'Une remise sur les bûches, que le client a exclue.',
      ],
      competence: 'description',
      technique: 'iterer',
    },
    motsCles: ['calendrier éditorial', 'planning', 'réseaux sociaux', 'fêtes', 'contenus'],
  },
  {
    id: 'comm-statistiques-page',
    titre: 'Analyser les statistiques annuelles d’une page Facebook',
    metier: 'communication',
    niveau: 'intermediaire',
    famille: 'analyser',
    duree: 30,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Un club de plongée de l’île des Pins, client de l’agence, vous demande si sa page Facebook « sert à quelque chose ». Vous avez exporté les statistiques des douze derniers mois. Il attend un bilan clair et trois recommandations.',
    objectif:
      'Faire calculer des indicateurs par l’IA, vérifier ses calculs et en tirer des recommandations fondées sur les chiffres.',
    etapes: [
      'Copiez le tableau du matériau ou joignez-le en fichier CSV, avec le prompt de départ.',
      'Vérifiez deux taux d’engagement et un coût par abonné à la main.',
      'Demandez d’expliquer les trois meilleurs et les trois moins bons mois, en séparant ce que les chiffres montrent de ce qui reste une hypothèse.',
      'Faites tracer un graphique simple : portée et taux d’engagement par mois.',
      'Faites rédiger un bilan d’une demi-page avec trois recommandations, puis relisez-le.',
    ],
    prompt:
      'Tu es chargé d’études dans une agence de communication. Voici les statistiques mensuelles de la page Facebook d’un club de plongée (séparateur : point-virgule).\n\n<tableau>\n[collez le tableau ici]\n</tableau>\n\n1. Calcule pour chaque mois le taux d’engagement (interactions / portée × 100), arrondi à une décimale.\n2. Pour les mois avec un budget sponsorisé, calcule le coût par nouvel abonné.\n3. Repère les tendances et les mois atypiques.\n4. Distingue clairement ce que les chiffres prouvent et ce qui n’est qu’une hypothèse.\nMontre tes calculs dans un tableau.',
    materiau: {
      titre: 'Statistiques de la page (octobre 2025 à septembre 2026)',
      texte:
        'Mois;Publications;Portée (personnes);Interactions;Nouveaux abonnés;Budget sponsorisé (XPF)\nOctobre 2025;8;4200;310;45;0\nNovembre 2025;10;5100;402;60;0\nDécembre 2025;12;9800;615;140;15000\nJanvier 2026;9;6900;530;85;0\nFévrier 2026;6;3100;198;20;0\nMars 2026;7;3600;260;31;0\nAvril 2026;9;7400;612;96;10000\nMai 2026;8;4500;360;40;0\nJuin 2026;5;2900;175;18;0\nJuillet 2026;11;12600;1180;210;20000\nAoût 2026;10;8700;705;102;0\nSeptembre 2026;4;2400;120;9;0',
    },
    variantes: {
      simple: 'Calculer seulement le taux d’engagement et repérer le meilleur mois.',
      poussee:
        'Proposer un budget sponsorisé annuel réparti par mois, justifié par les chiffres, et la liste des données à demander au client (réservations, provenance des clients) pour mesurer l’effet réel.',
    },
    astuces: {
      chatgpt:
        'Avec l’analyse de données, joignez le fichier CSV : ChatGPT calcule et trace la courbe ; vérifiez un taux à la main.',
      claude: 'Demandez le graphique en artefact, portée et taux d’engagement sur la même période.',
      copilot:
        'Dans Excel, mettez les données sous forme de tableau avant de demander à Copilot d’ajouter la colonne du taux.',
    },
    vigilance:
      'Une corrélation n’est pas une cause : plus de publications et plus de portée le même mois ne prouvent pas que les publications expliquent tout (saison, vacances, météo).',
    formateur: {
      resultat:
        'Un tableau des taux (de 5,0 % en septembre 2026 à 9,4 % en juillet 2026), un coût par nouvel abonné de 95 à 107 XPF les mois sponsorisés, 856 nouveaux abonnés sur l’année, et trois recommandations prudentes.',
      criteres: [
        'Les taux sont justes, vérifiés à la main sur au moins deux mois.',
        'Les mois sponsorisés (décembre, avril, juillet) sont identifiés comme ceux qui recrutent le plus.',
        'Les hypothèses (saison, nombre de publications) sont présentées comme telles.',
      ],
      pieges: [
        'Conclure que « publier plus fait venir plus de clients » sans aucune donnée de réservation.',
        'Laisser passer un taux mal calculé, portée et interactions inversées.',
      ],
      competence: 'discernement',
      technique: 'critique',
    },
    motsCles: ['statistiques', 'Facebook', 'taux d’engagement', 'CSV', 'bilan', 'sponsorisé'],
  },
  {
    id: 'comm-brief-creatif',
    titre: 'Transformer l’e-mail d’un client en brief créatif',
    metier: 'communication',
    niveau: 'intermediaire',
    famille: 'synthetiser',
    duree: 30,
    outils: ['claude', 'chatgpt', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Le directeur d’une compagnie de navettes maritimes qui dessert le Grand Sud vous a envoyé un long e-mail pour sa future campagne. Tout y est mélangé : objectifs, souvenirs, idées de slogan, budget. Le graphiste attend un brief d’une page.',
    objectif:
      'Faire extraire d’un texte confus les éléments d’un brief créatif, repérer ce qui manque ou se contredit, et préparer les questions au client.',
    etapes: [
      'Envoyez le prompt de départ avec l’e-mail du matériau.',
      'Vérifiez chaque rubrique du brief : tout doit venir de l’e-mail, sans ajout.',
      'Lisez la liste des informations manquantes ou contradictoires et complétez-la si besoin.',
      'Demandez de reformuler les questions au client de façon courte et polie, en un seul e-mail.',
      'Comparez avec un collègue : votre brief permettrait-il au graphiste de commencer sans vous appeler ?',
    ],
    prompt:
      'Tu es chef de projet dans une agence de communication à Nouméa. À partir de l’e-mail du client ci-dessous, rédige un brief créatif d’une page avec ces rubriques : contexte, objectif de la campagne, cible, message principal, ton, supports, contraintes (budget, dates, mentions obligatoires), éléments fournis par le client.\nN’ajoute rien qui ne soit dans l’e-mail. Ensuite, liste les informations manquantes ou contradictoires et rédige les questions à poser au client.\n\n<email>\n[collez l’e-mail ici]\n</email>',
    materiau: {
      titre: 'E-mail du client',
      texte:
        'Bonjour,\nComme je vous disais l’autre jour, on voudrait vraiment que les Calédoniens redécouvrent le Sud. Quand j’ai lancé la compagnie il y a 15 ans, on transportait surtout des familles le week-end ; aujourd’hui ce sont plutôt des croisiéristes, et ça nous inquiète un peu car ils ne reviennent pas. Donc la campagne, c’est pour les familles du Grand Nouméa, mais aussi un peu les jeunes, et les comités d’entreprise. On a un nouveau bateau de 80 places depuis septembre, plus rapide (35 min au lieu de 50). On pensait à un slogan genre « Le Sud, c’est à côté » mais ma fille trouve ça nul. Budget : autour de 1,5 million, peut-être 2 si ça vaut le coup. Il faudrait que ce soit prêt pour les vacances de décembre, ou au plus tard mi-janvier. Le logo doit être bien visible, on a changé de couleurs l’an dernier (je vous envoie la charte). Ah, et il faut mentionner les tarifs famille. Pas de radio, on a eu une mauvaise expérience.\nCordialement,\nMarc',
    },
    variantes: {
      simple: 'Ne remplir que l’objectif, la cible et le message principal.',
      poussee:
        'Proposer ensuite trois pistes créatives distinctes à partir du brief validé, chacune avec un slogan et une idée de visuel.',
    },
    astuces: {
      claude: 'Demandez le brief en artefact : vous le complétez au fil des réponses du client.',
      chatgpt: 'Dans le canevas, ajoutez les réponses du client rubrique par rubrique.',
      gemini: 'Ouvrez le brief dans Canvas pour compléter chaque rubrique après l’appel au client.',
    },
    vigilance:
      'Un brief transmis à un graphiste ou à un prestataire ne doit pas contenir les confidences du client (inquiétudes, chiffres internes) qui ne servent pas la création.',
    formateur: {
      resultat:
        'Un brief d’une page fidèle à l’e-mail et un e-mail de questions : cible prioritaire, budget (1,5 ou 2 millions de XPF), date de lancement, montant des tarifs famille, supports souhaités, charte graphique à recevoir.',
      criteres: [
        'Aucune information du brief n’est inventée : ni supports, ni tarifs ajoutés.',
        'Les contradictions sur la cible, le budget et la date sont relevées.',
        'Les questions au client sont courtes et précises.',
      ],
      pieges: [
        'Un brief qui tranche seul la cible ou le budget.',
        'Reprendre le slogan du client comme message principal sans le signaler comme une simple idée.',
      ],
      competence: 'discernement',
      technique: 'structurer',
    },
    motsCles: ['brief créatif', 'campagne', 'synthèse', 'questions au client'],
  },
  {
    id: 'comm-plan-crise-cyclone',
    titre: 'Préparer le plan de communication de crise pour la saison cyclonique',
    metier: 'communication',
    niveau: 'avance',
    famille: 'organiser',
    duree: 45,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Une enseigne de trois supermarchés (Nouméa, Dumbéa, Païta), cliente de l’agence, veut être prête pour la saison cyclonique. L’an dernier, ses messages contradictoires sur les horaires d’ouverture ont créé la cohue. Vous préparez un plan de communication de crise, avec des messages rédigés à l’avance.',
    objectif:
      'Enchaîner les étapes d’un plan de crise avec l’IA (phases, rôles, messages, relecture) et vérifier les informations officielles à la source.',
    etapes: [
      'Envoyez le prompt de départ avec le retour d’expérience du matériau : l’IA propose d’abord les phases et la chaîne de validation, sans rédiger de messages.',
      'Vérifiez sur les sites officiels (haut-commissariat, sécurité civile, Météo-France Nouvelle-Calédonie) le nom et le sens des niveaux d’alerte, et corrigez l’IA si besoin.',
      'Demandez ensuite, pour chaque phase, les messages prêts à l’emploi : publication sur les réseaux, SMS aux salariés, affiche en magasin, message du standard téléphonique.',
      'Ajoutez un scénario de coupure d’électricité prolongée après le passage du cyclone.',
      'Demandez à l’IA de relire l’ensemble pour trouver les contradictions entre messages et les cas oubliés.',
      'Rassemblez le tout dans un document de deux pages avec les personnes à prévenir et leurs suppléants.',
    ],
    prompt:
      'Tu es consultant en communication de crise en Nouvelle-Calédonie. Mon client exploite trois supermarchés (Nouméa, Dumbéa, Païta). Nous préparons son plan de communication pour la saison cyclonique, à partir du retour d’expérience ci-dessous.\n\n<retour_experience>\n[collez le retour d’expérience ici]\n</retour_experience>\n\nÉtape 1 seulement, pour l’instant :\n- liste les phases d’un épisode cyclonique telles que les autorités les annoncent en Nouvelle-Calédonie, et indique les sources officielles où je dois les vérifier ;\n- pour chaque phase, ce que les clients et les salariés ont besoin de savoir ;\n- la chaîne de validation d’un message (qui rédige, qui valide, qui publie, qui remplace qui) pour une équipe de [nombre] personnes.\nN’écris aucun message tant que je n’ai pas validé cette étape. Si tu n’es pas sûr d’un niveau d’alerte ou d’une consigne officielle, dis-le.',
    materiau: {
      titre: 'Retour d’expérience de la saison dernière (notes du client)',
      texte:
        '- La page Facebook annonçait « ouvert jusqu’à 17 h » alors que le magasin de Païta avait fermé à 14 h.\n- Les salariés ont appris la fermeture par la radio.\n- 300 commentaires en deux heures, dont beaucoup de rumeurs sur une pénurie d’eau en bouteille.\n- Grâce à son groupe électrogène, le magasin de Dumbéa a rouvert avant les autres : personne ne l’a su.\n- La directrice était injoignable, et personne d’autre ne pouvait valider un message.',
    },
    variantes: {
      simple:
        'Rédiger seulement les messages de la phase la plus critique, pour les réseaux sociaux et les salariés.',
      poussee:
        'Organiser un exercice : l’IA joue le fil des commentaires pendant l’alerte, vous répondez en temps réel, puis elle fait un retour sur vos réponses.',
    },
    astuces: {
      claude:
        'Demandez le plan final en document Word grâce à la création de fichiers, à imprimer et ranger avec le matériel de crise.',
      chatgpt:
        'Travaillez dans un Projet : le plan validé et les messages seront à portée de main le jour de la crise.',
      copilot:
        'Transformez le plan en Copilot Page partagée avec la direction et les responsables de magasin.',
      gemini:
        'Deep Research peut rassembler les sources officielles ; ouvrez-les vous-même avant de reprendre une consigne.',
    },
    vigilance:
      'Les consignes des autorités priment toujours sur les messages de l’enseigne : ne laissez pas l’IA inventer une consigne de sécurité ou un niveau d’alerte. Vérifiez chaque information sur les sites officiels.',
    formateur: {
      resultat:
        'Un plan de deux pages : phases vérifiées sur les sources officielles, chaîne de validation avec un suppléant à la directrice, messages par phase et par canal, scénario de coupure d’électricité, réponse type aux rumeurs.',
      criteres: [
        'Les niveaux d’alerte ont été vérifiés sur une source officielle, pas recopiés de l’IA.',
        'Chaque problème de la saison dernière trouve une réponse dans le plan (suppléant, salariés informés en premier, réouverture annoncée).',
        'Les messages d’une même phase sont cohérents d’un canal à l’autre.',
        'L’IA a été sollicitée par étapes, avec une validation entre chacune.',
      ],
      pieges: [
        'Reprendre des consignes de sécurité inventées ou venues d’un autre pays.',
        'Des messages qui donnent des horaires précis impossibles à garantir pendant l’alerte.',
      ],
      competence: 'diligence',
      technique: 'decomposer',
    },
    motsCles: ['communication de crise', 'cyclone', 'alerte', 'messages', 'plan', 'coupure'],
  },
  {
    id: 'comm-assistant-ligne-editoriale',
    titre: 'Créer un assistant qui respecte la ligne éditoriale d’un client',
    metier: 'communication',
    niveau: 'avance',
    famille: 'automatiser',
    duree: 60,
    outils: ['gemini', 'chatgpt', 'claude', 'copilot'],
    outilConseille: 'gemini',
    situation:
      'Votre agence rédige chaque semaine une dizaine de publications pour un office de tourisme de la côte Est (Hienghène, Touho, Poindimié). Trois rédacteurs se relaient et le ton varie d’une semaine à l’autre. Vous créez un assistant qui connaît la ligne éditoriale du client et propose des publications conformes.',
    objectif:
      'Traduire une ligne éditoriale en instructions permanentes, l’illustrer d’exemples et tester l’assistant sur des demandes réelles.',
    etapes: [
      'À partir du guide du matériau, complétez les crochets du prompt de départ : ton, ce qu’on fait toujours, ce qu’on ne fait jamais.',
      'Créez un Gem (Gemini), un Projet ou un GPT (ChatGPT), un Projet (Claude) ou un agent (Copilot), et collez-y les instructions.',
      'Ajoutez trois publications passées que le client a aimées, comme exemples.',
      'Testez l’assistant avec les trois demandes du matériau et notez chaque écart à la ligne éditoriale.',
      'Corrigez les instructions, refaites les tests, puis faites essayer l’assistant par un collègue.',
    ],
    prompt:
      'Tu es le rédacteur des réseaux sociaux de [nom de l’office de tourisme], sur la côte Est de la Grande Terre. Tu proposes des publications qu’un chargé de communication relit avant de les publier.\n\nLigne éditoriale :\n- Ton : [à compléter à partir du guide].\n- Toujours : [à compléter].\n- Jamais : [à compléter].\n- Longueur : Facebook 80 mots au maximum ; Instagram 50 mots et 5 hashtags au maximum.\n\nRègles :\n- N’invente aucun horaire, tarif, prestataire ni condition d’accès : si l’information manque, demande-la.\n- Ne décris jamais d’usage coutumier : renvoie vers le prestataire ou les habitants.\n- Propose deux versions et dis laquelle respecte le mieux la ligne éditoriale, et pourquoi.',
    materiau: {
      titre: 'Extrait du guide de communication du client et demandes de test',
      texte:
        'NOTRE TON : chaleureux, simple, au présent. On tutoie sur Instagram, on vouvoie sur Facebook.\nNOS SUJETS : les paysages, les prestataires du territoire (gîtes, accueil en tribu, guides), les produits locaux, la météo utile, l’agenda culturel.\nNOS RÈGLES : on nomme toujours le prestataire et sa commune ; on rappelle de demander l’autorisation avant d’entrer sur un terrain ou d’accéder à un site, en suivant les indications des prestataires ; on ne publie des photos de personnes qu’avec leur accord.\nCE QU’ON ÉVITE : les superlatifs (« paradis », « le plus beau »), les clichés exotiques, les promesses de beau temps, les séries d’emojis.\n\nDEMANDES DE TEST\n1. Une publication Facebook sur la randonnée guidée vers la cascade de Tao avec Hienghène Rando.\n2. Une publication Instagram sur le marché de Poindimié du samedi matin.\n3. Une publication qui annonce la fermeture de la route après de fortes pluies.',
    },
    variantes: {
      simple:
        'Écrire seulement le prompt réutilisable dans un document partagé, sans créer d’assistant.',
      poussee:
        'Ajouter une étape de contrôle : l’assistant relit chaque publication avec une grille tirée du guide et signale les écarts avant de la proposer.',
    },
    astuces: {
      gemini:
        'Créez un Gem, collez la ligne éditoriale dans ses instructions et joignez les publications exemples en fichiers.',
      chatgpt:
        'Un Projet suffit pour vous ; un GPT, dont la création est payante, se partage avec les trois rédacteurs.',
      claude:
        'Dans un Projet, déposez le guide du client dans les fichiers et la ligne éditoriale dans les instructions.',
      copilot:
        'Selon la licence, « Créer un agent » permet de proposer l’assistant à toute l’équipe.',
    },
    vigilance:
      'Ne déposez dans l’assistant ni photos ni coordonnées de personnes. Les informations sur l’accès aux sites et sur la coutume viennent des prestataires et des habitants, jamais de l’IA.',
    formateur: {
      resultat:
        'Un assistant qui vouvoie sur Facebook, tutoie sur Instagram, nomme le prestataire, évite les superlatifs et demande les informations manquantes (horaires du marché, route concernée, conditions d’accès).',
      criteres: [
        'Les instructions reprennent toutes les règles du guide.',
        'Pour la demande 3, l’assistant demande quelle route et quelle source officielle au lieu d’inventer.',
        'L’apprenant a corrigé les instructions après le premier test et vérifié l’effet.',
      ],
      pieges: [
        'Accepter une publication qui qualifie la côte Est de « paradis » ou accumule les clichés.',
        'Laisser l’assistant décrire des usages coutumiers ou des conditions d’accès inventés.',
      ],
      competence: 'delegation',
      technique: 'instructions',
    },
    motsCles: ['ligne éditoriale', 'assistant', 'gem', 'GPT', 'projet', 'réseaux sociaux'],
  },
  {
    id: 'comm-veille-hebdomadaire',
    titre: 'Mettre en place une veille hebdomadaire sur les campagnes et les réseaux',
    metier: 'communication',
    niveau: 'avance',
    famille: 'veiller',
    duree: 45,
    outils: ['chatgpt', 'gemini', 'claude'],
    outilConseille: 'chatgpt',
    situation:
      'Votre agence veut suivre ce que publient les marques calédoniennes et les nouveautés des réseaux sociaux, pour nourrir ses propositions aux clients. Personne n’a le temps de tout lire. Vous mettez en place une note de veille hebdomadaire, courte et sourcée.',
    objectif:
      'Concevoir une veille avec une recherche approfondie, trier les sources, puis automatiser la relance chaque semaine.',
    etapes: [
      'Définissez le périmètre : trois secteurs suivis, cinq marques locales, les nouveautés de formats (vidéos courtes, carrousels, directs).',
      'Lancez une recherche approfondie avec le prompt de départ.',
      'Ouvrez chaque source citée et écartez celles qui sont anciennes, invérifiables ou sans rapport avec la Nouvelle-Calédonie.',
      'Ajustez le prompt pour obtenir le format voulu : cinq faits au plus, une idée exploitable, les sources.',
      'Programmez la relance chaque lundi (tâche planifiée, payante, dans ChatGPT ou Claude ; « Programmer des actions » dans Gemini), puis relisez la première note reçue.',
    ],
    prompt:
      'Tu es chargé de veille dans une agence de communication à Nouméa. Fais une recherche sur les sept derniers jours :\n1. les campagnes ou publications marquantes de marques calédoniennes dans ces secteurs : [secteurs] ;\n2. les nouveautés des réseaux sociaux utiles à de petites entreprises (formats, fonctions, règles de publicité) ;\n3. une idée concrète qu’un de nos clients pourrait reprendre.\nPour chaque information : une phrase, la date, la source avec son lien. N’inclus rien de plus ancien que sept jours. Si tu ne trouves rien de fiable sur un point, écris « rien de notable cette semaine ». 250 mots au maximum.',
    variantes: {
      simple: 'Faire une seule recherche ponctuelle, sans planification.',
      poussee:
        'Rassembler quatre notes hebdomadaires dans Gemini Notebook et en tirer un bilan mensuel des tendances, citations à l’appui.',
    },
    astuces: {
      chatgpt:
        'La recherche approfondie rend un rapport sourcé ; une tâche planifiée, payante, peut la relancer chaque lundi.',
      gemini:
        'Deep Research pour la première recherche, puis « Programmer des actions » pour la relance de chaque semaine.',
      claude:
        'La Recherche, payante, mène une enquête en plusieurs étapes ; la recherche web suffit pour une note courte.',
    },
    vigilance:
      'Les informations sur des marques concurrentes doivent venir de sources publiques et datées. Vérifiez qu’une « tendance » n’est pas une rumeur ou une publicité déguisée avant de la proposer à un client.',
    formateur: {
      resultat:
        'Une note hebdomadaire de 250 mots au plus, aux sources datées de moins de sept jours, avec une idée exploitable, et une relance programmée.',
      criteres: [
        'Chaque information a une date et une source ouverte par l’apprenant.',
        'Les sources anciennes ou hors sujet ont été écartées.',
        'La relance est programmée et la première note a été relue.',
      ],
      pieges: [
        'Garder une « tendance » vieille de deux ans présentée comme nouvelle.',
        'Une source inventée, ou un lien qui ne mène nulle part.',
      ],
      competence: 'discernement',
      technique: 'sources',
    },
    motsCles: ['veille', 'tendances', 'réseaux sociaux', 'tâche planifiée', 'Deep Research'],
  },
  {
    id: 'comm-analyse-commentaires',
    titre: 'Analyser les commentaires d’une campagne pour orienter la suivante',
    metier: 'communication',
    niveau: 'avance',
    famille: 'analyser',
    duree: 45,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'La campagne d’une association de prévention santé sur les boissons sucrées, diffusée en septembre, a reçu des centaines de commentaires. Avant la deuxième vague, l’association veut savoir ce que le public en a retenu. Vous mettez au point la méthode sur un échantillon de quinze commentaires.',
    objectif:
      'Enchaîner grille de lecture, classement, comptage et recommandations sur des données textuelles, en contrôlant la méthode de l’IA à chaque étape.',
    etapes: [
      'Collez les quinze commentaires anonymisés du matériau avec le prompt de départ : l’IA propose d’abord une grille de thèmes.',
      'Validez ou corrigez la grille, puis faites classer chaque commentaire : thème, tonalité (positive, négative, neutre), question posée ou non.',
      'Vérifiez cinq classements au hasard et ajustez la grille si besoin.',
      'Demandez le décompte par thème et par tonalité, puis trois recommandations, chacune reliée aux commentaires qui la justifient.',
      'Rédigez la méthode pour l’appliquer à l’export complet des commentaires (fichier CSV).',
    ],
    prompt:
      'Tu es chargé d’études dans une agence de communication à Nouméa. Voici quinze commentaires publiés sous une campagne de prévention sur les boissons sucrées.\n\n<commentaires>\n[collez les commentaires ici]\n</commentaires>\n\nÉtape 1 seulement : propose une grille de cinq thèmes au maximum pour classer ces commentaires, avec pour chacun une définition d’une ligne et un exemple tiré des commentaires. Ne classe encore rien. Si un commentaire ne rentre dans aucun thème, dis-le.',
    materiau: {
      titre: 'Quinze commentaires anonymisés',
      texte:
        '1. Enfin une campagne qui parle de nos réalités, merci !\n2. Et le prix de l’eau en bouteille dans les îles, vous en parlez quand ?\n3. Mon fils a vu la vidéo à l’école, il ne veut plus de soda au goûter.\n4. Encore des leçons de morale…\n5. Où peut-on trouver les fiches recettes en drehu ?\n6. Super, la vidéo avec les jeunes de Rivière-Salée.\n7. Le sucre est partout, même dans les jus « sans sucres ajoutés », il faudrait expliquer les étiquettes.\n8. C’est aux magasins de baisser le prix de l’eau, pas aux familles de culpabiliser.\n9. Est-ce qu’il y a des ateliers à Koné ?\n10. Trop long, j’ai décroché au bout de 10 secondes.\n11. Merci pour les sous-titres en wallisien.\n12. Les fontaines à eau dans les écoles, c’est pour quand ?\n13. J’ai partagé avec toute ma famille.\n14. Pub inutile, tout le monde sait que le soda c’est mauvais.\n15. Possible d’avoir une version audio pour ma grand-mère qui lit mal ?',
    },
    variantes: {
      simple: 'Classer seulement par tonalité : positive, négative, neutre.',
      poussee:
        'Appliquer la méthode à un export de 300 commentaires en CSV (analyse de données de ChatGPT ou Copilot dans Excel) et comparer les proportions avec l’échantillon.',
    },
    astuces: {
      claude:
        'Demandez le tableau de classement en artefact, puis un graphique des thèmes : vous vérifiez chaque ligne.',
      chatgpt:
        'Avec l’analyse de données, joignez l’export complet en CSV : ChatGPT applique la grille validée et compte.',
      copilot:
        'Dans Excel, une colonne « thème » remplie par Copilot se vérifie ligne par ligne avant tout comptage.',
    },
    vigilance:
      'Des commentaires peuvent révéler l’état de santé ou la situation familiale de leurs auteurs : retirez noms et photos, ne gardez que le texte utile à l’analyse.',
    formateur: {
      resultat:
        'Une grille validée (prix et accès à l’eau, langues et accessibilité, adhésion au message, critique du ton ou du format, demandes d’actions locales), quinze commentaires classés et vérifiés, trois recommandations reliées aux commentaires.',
      criteres: [
        'La grille a été validée avant le classement.',
        'L’apprenant a vérifié au moins cinq classements.',
        'Chaque recommandation cite les commentaires qui la justifient.',
        'La conclusion reste prudente : quinze commentaires ne représentent pas tout le public.',
      ],
      pieges: [
        'Accepter des pourcentages présentés comme représentatifs de toute la population.',
        'Une recommandation sans lien avec les commentaires, ajoutée par l’IA.',
      ],
      competence: 'discernement',
      technique: 'decomposer',
    },
    motsCles: ['commentaires', 'analyse qualitative', 'campagne', 'thèmes', 'prévention'],
  },
];
