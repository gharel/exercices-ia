/**
 * Énergie, eau et déchets : distribution d’électricité et d’eau, assainissement, collecte et tri
 * des déchets, solaire, bureau d’études.
 * Toutes les personnes, entreprises, adresses, tarifs et sommes sont fictives.
 */

export const vocabulaire = {
  structure: {
    g: 'f',
    s: 'société de distribution d’eau et d’électricité',
    p: 'sociétés de distribution d’eau et d’électricité',
  },
  client: { g: 'm', s: 'abonné', p: 'abonnés' },
  partenaire: {
    g: 'm',
    s: 'sous-traitant de travaux sur les réseaux',
    p: 'sous-traitants de travaux sur les réseaux',
  },
  documentCourant: { g: 'm', s: 'rapport d’intervention', p: 'rapports d’intervention' },
  documentLong: {
    g: 'm',
    s: 'règlement du service de l’eau',
    p: 'règlements du service de l’eau',
  },
  reunion: {
    g: 'f',
    s: 'réunion d’exploitation hebdomadaire',
    p: 'réunions d’exploitation hebdomadaires',
  },
  offre: {
    g: 'm',
    s: 'pack chauffe-eau solaire',
    p: 'packs chauffe-eau solaires',
  },
  poste: {
    g: 'm',
    s: 'technicien d’intervention réseau',
    p: 'techniciens d’intervention réseau',
  },
  evenement: {
    g: 'm',
    s: 'forum des économies d’eau et d’énergie',
    p: 'forums des économies d’eau et d’énergie',
  },
  visuel: {
    g: 'f',
    s: 'affiche d’agence',
    p: 'affiches d’agence',
  },
  domaine: 'l’énergie, l’eau et les déchets',
  motifReclamation: 'le montant de sa dernière facture d’eau',
  donnees: 'le relevé mensuel des volumes d’eau produits et facturés, secteur par secteur',
  colonnes: 'Mois;Secteur;Volume produit (m³);Volume facturé (m³);Fuites réparées (nombre)',
  indicateur: 'le taux de pertes du réseau d’eau sur le trimestre',
  veille:
    'la qualité de l’eau potable, les économies d’eau et les techniques de recherche de fuites',
  sourcesVeille:
    'le Journal officiel de la Nouvelle-Calédonie, les sites du gouvernement et des provinces, les publications de l’ISEE et la presse calédonienne',
  jargon: 'le relevé de compteur, l’abonnement et la part variable d’une facture d’eau',
  procedure: 'l’intervention sur une fuite d’eau signalée par un abonné',
  situationTendue:
    'un abonné excédé par une coupure de courant de plusieurs jours après un cyclone',
  donneesSensibles: 'les noms, adresses, numéros d’abonné et consommations des abonnés',
  corpus:
    'les rapports annuels du service de l’eau et les comptes rendus des réunions avec les communes',
  publicCible: 'les familles calédoniennes qui veulent réduire leur facture d’énergie',
  etranger: 'un abonné anglophone installé depuis peu à Nouméa',
  themeFormation: 'les règles de sécurité d’un chantier sur le réseau en bord de route',
  tacheRepetitive: 'les réponses aux demandes de changement d’abonné lors d’un déménagement',
  planning: 'les interventions de la semaine pour trois équipes réseau',
  comparaison: 'deux devis d’installation de chauffe-eau solaire',
};

export const exercices = [
  {
    id: 'energie-facture-eau-trop-elevee',
    titre: 'Expliquer à un abonné une facture d’eau qu’il trouve trop élevée',
    metier: 'energie',
    niveau: 'debutant',
    famille: 'rediger',
    duree: 15,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'copilot',
    situation:
      'Vous êtes agent clientèle dans une régie des eaux au Mont-Dore. Un abonné écrit que sa dernière facture a presque doublé et pense à une erreur. Le relevé a bien été fait sur place, mais personne ne lui a encore expliqué sa facture.',
    objectif:
      'Faire rédiger une réponse claire et courtoise à partir de chiffres réels, sans laisser l’IA promettre un geste ou inventer une règle.',
    etapes: [
      'Copiez la facture, le message de l’abonné et vos éléments internes dans votre outil d’IA, avec le prompt de départ.',
      'Vérifiez les chiffres de la réponse un par un : volumes, montants, total. Refaites la différence entre les deux factures à la calculatrice.',
      'Relevez tout ce qui ressemble à une promesse (remboursement, geste commercial, délai) ou à une règle de tarif : ce n’est pas à l’IA de l’affirmer.',
      'Demandez une version plus courte, de 120 mots au maximum, en gardant les pistes pour comprendre la hausse.',
      'Faites relire la réponse par votre responsable avant l’envoi.',
    ],
    prompt:
      'Tu es agent clientèle dans une régie des eaux en Nouvelle-Calédonie. Rédige la réponse à l’abonné ci-dessous : explique sa facture en langage simple (relevé, abonnement, part variable, assainissement), compare-la à la précédente, propose des pistes pour comprendre la hausse (vérifier le compteur la nuit, fuite, arrosage) et indique la suite.\n\nRègles :\n- Vouvoiement, ton aimable, [180] mots au maximum.\n- Utilise uniquement les chiffres de la facture et de la précédente.\n- Ne promets ni remboursement ni geste commercial, et n’affirme aucune règle de tarif ou de contestation : écris [à confirmer par le responsable] à la place.\n\n<facture>\n[collez la facture]\n</facture>\n\n<message_abonne>\n[collez le message de l’abonné]\n</message_abonne>\n\n<elements_internes>\n[collez vos éléments internes]\n</elements_internes>',
    materiau: {
      titre: 'Facture, message de l’abonné et éléments internes (fictifs)',
      texte:
        'FACTURE D’EAU, bimestre septembre-octobre (abonné fictif n° 000-000, Mont-Dore)\nIndex précédent : 1 842 m³ ; index relevé le 3 novembre : 1 903 m³\nConsommation : 61 m³\nAbonnement : 2 400 XPF\nPart variable (eau) : 61 m³ x 190 XPF = 11 590 XPF\nAssainissement : 61 m³ x 95 XPF = 5 795 XPF\nTotal à payer : 19 785 XPF\n\nFACTURE PRÉCÉDENTE, bimestre juillet-août\nConsommation : 28 m³ ; total : 10 380 XPF\n\nMESSAGE DE L’ABONNÉ (M. N.)\nBonjour, ma facture est passée de 10 380 à 19 785 XPF alors que nous sommes les mêmes à la maison. Je pense que votre compteur est faux. Je veux que vous refassiez la facture.\n\nÉLÉMENTS INTERNES (notes de l’agent)\n- Le relevé du 3 novembre est un relevé réel par le releveur, pas une estimation.\n- Consommation habituelle de cet abonné : autour de 28 m³ par bimestre.\n- Septembre et octobre ont été secs : arrosage du jardin possible.\n- Une fuite après compteur n’est pas exclue ; personne n’a vérifié le compteur la nuit.\n- Un geste commercial ou un contrôle du compteur se décide avec le responsable, pas à l’accueil.',
    },
    variantes: {
      simple:
        'Demander seulement un tableau qui compare les deux factures ligne par ligne, sans rédiger la réponse.',
      poussee:
        'Demander ensuite une fiche « conseils pour repérer une fuite » de dix lignes, puis une réponse pour le même abonné s’il conteste encore après le contrôle du compteur.',
    },
    astuces: {
      claude:
        'Demandez deux versions de ton différent (très sobre, plus chaleureuse) avant de choisir et de les combiner.',
      chatgpt:
        'Ouvrez la réponse dans le Canevas : vous pouvez raccourcir ou reformuler un seul paragraphe.',
      copilot:
        'Dans Outlook, lancez « Coaching par Copilot » avant d’envoyer : il commente le ton et la clarté de la réponse.',
    },
    vigilance:
      'Avec une vraie facture, retirez le nom, l’adresse et le numéro d’abonné avant de la coller. Les tarifs et les règles de contestation se lisent dans le règlement du service, pas dans la réponse de l’IA.',
    formateur: {
      resultat:
        'Une réponse courte et aimable qui explique les trois lignes de la facture, montre que la consommation est passée de 28 à 61 m³ (+ 9 405 XPF), propose de vérifier le compteur la nuit et de chercher une fuite, et renvoie toute décision commerciale au responsable.',
      criteres: [
        'Les chiffres (61 m³, 19 785 XPF, 10 380 XPF) sont exacts et cohérents avec la facture.',
        'Aucun remboursement, geste commercial ni règle de contestation n’est promis ou affirmé.',
        'Les pistes pour comprendre la hausse sont concrètes et ne disent pas que le compteur est faux.',
        'La réponse respecte la longueur demandée.',
      ],
      pieges: [
        'Laisser l’IA écrire « nous allons rectifier votre facture » alors que le relevé est réel.',
        'Accepter une règle de tarif ou un délai de contestation inventés.',
        'Coller la facture avec le nom et le numéro d’abonné réels.',
      ],
      competence: 'discernement',
      technique: 'contexte',
    },
    motsCles: ['facture', 'eau', 'abonné', 'réclamation', 'relevé de compteur'],
  },
  {
    id: 'energie-consignes-tri-depliant',
    titre: 'Réécrire les consignes de tri en langage clair pour un dépliant',
    metier: 'energie',
    niveau: 'debutant',
    famille: 'corriger',
    duree: 15,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Vous êtes chargé de sensibilisation dans un syndicat de collecte des déchets. Le centre de tri vous a envoyé ses consignes techniques. Elles sont exactes mais illisibles pour les habitants, et le dépliant part à l’impression la semaine prochaine.',
    objectif:
      'Faire réécrire un texte technique en langage clair, sans que l’IA change la liste de ce qui se trie ou non.',
    etapes: [
      'Copiez les consignes techniques dans votre outil d’IA avec le prompt de départ.',
      'Comparez la liste des matières acceptées et refusées avec l’original : chaque élément doit y être, sans ajout ni oubli.',
      'Demandez une version en trois rubriques (« Oui », « Non », « Où le déposer ») avec des phrases de 15 mots au maximum.',
      'Faites relire le texte à quelqu’un qui ne travaille pas dans le secteur : comprend-il sans explication ?',
      'Gardez la version finale et la liste de ce que l’IA a reformulé, pour la faire valider par le centre de tri.',
    ],
    prompt:
      'Tu es chargé de communication dans un syndicat de collecte des déchets en Nouvelle-Calédonie. Réécris les consignes techniques ci-dessous pour un dépliant destiné à tous les habitants, y compris ceux qui lisent peu.\n\nRègles :\n- Trois rubriques : « Oui, dans le bac jaune », « Non, pas dans le bac jaune », « Où le déposer ».\n- Phrases de [15] mots au maximum, mots du quotidien, pas de sigle sans explication.\n- Garde exactement les mêmes matières que dans le texte : n’en ajoute aucune, n’en retire aucune.\n- Si une consigne te semble ambiguë, signale-la à la fin au lieu de la corriger.\n\n<consignes>\n[collez les consignes techniques]\n</consignes>',
    materiau: {
      titre: 'Consignes techniques du centre de tri (fictives, à adapter à votre commune)',
      texte:
        'CONSIGNES DE TRI DES EMR (emballages ménagers recyclables)\nLes EMR sont déposés en vrac dans le bac jaune, secs, vidés de leur contenu et non imbriqués. Sont acceptés : bouteilles et flacons en plastique avec leur bouchon, boîtes de conserve et canettes en acier ou en aluminium, cartonnettes et briques alimentaires. Sont refusés : sacs et films plastiques, barquettes en polystyrène, pots de peinture, piles, textiles et vêtements, vaisselle et verre plat.\nLes bouteilles et bocaux en verre sont apportés aux bornes vertes des points d’apport volontaire, sans bouchon. Les piles, les ampoules, les huiles de vidange et les déchets d’équipements électriques sont apportés en déchèterie.\nLes erreurs de tri (refus de tri) dégradent la qualité des balles expédiées et augmentent le coût de traitement pour la collectivité. Un bac fortement contaminé peut ne pas être collecté ; l’équipe laisse alors un autocollant explicatif.',
    },
    variantes: {
      simple:
        'Ne réécrire que la rubrique « Oui », en une liste à puces de dix mots maximum par ligne.',
      poussee:
        'Demander ensuite une version pour une affiche A3, une version pour un SMS et une version en anglais pour les gîtes, puis vérifier chaque liste contre l’original.',
    },
    astuces: {
      claude:
        'Demandez la liste des modifications après le texte réécrit, pour vérifier qu’aucune matière n’a changé de rubrique.',
      chatgpt:
        'Dans le Canevas, demandez des suggestions de modification pour voir chaque reformulation proposée.',
      gemini: 'Ouvrez le texte dans Canvas pour retoucher une rubrique sans tout régénérer.',
    },
    vigilance:
      'Les consignes de tri changent d’une commune et d’un centre de tri à l’autre : le texte final se fait valider par le centre de tri avant impression. L’IA ne doit jamais compléter la liste avec ses connaissances générales.',
    formateur: {
      resultat:
        'Un texte en trois rubriques, en phrases courtes, qui reprend exactement les matières du texte technique (bouteilles, boîtes, cartonnettes, briques ; refus des films, barquettes, piles, textiles ; verre à la borne verte ; piles et ampoules en déchèterie).',
      criteres: [
        'Aucune matière n’est ajoutée, retirée ou déplacée de rubrique.',
        'Les phrases font 15 mots au maximum et le vocabulaire est courant.',
        'Le verre est bien orienté vers les bornes vertes, pas vers le bac jaune.',
        'Une consigne ambiguë éventuelle est signalée, pas corrigée en silence.',
      ],
      pieges: [
        'Laisser passer « les barquettes en plastique se trient » ou « le polystyrène aussi » : l’IA y ajoute ses connaissances de métropole.',
        'Simplifier tellement que l’avertissement sur les erreurs de tri disparaît.',
        'Imprimer sans validation du centre de tri.',
      ],
      competence: 'discernement',
      technique: 'format',
    },
    motsCles: ['tri', 'dépliant', 'langage clair', 'consignes', 'emballages'],
  },
  {
    id: 'energie-rapport-fuite-conduite',
    titre: 'Rédiger le rapport d’une intervention sur une conduite à partir de notes de terrain',
    metier: 'energie',
    niveau: 'debutant',
    famille: 'rediger',
    duree: 15,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'copilot',
    situation:
      'Vous êtes chef d’équipe réseau. Lundi matin, votre équipe a réparé une conduite fissurée à Dumbéa-sur-Mer. Vous avez noté l’essentiel sur le carnet de terrain, et le responsable d’exploitation veut le rapport de l’intervention en fin de journée.',
    objectif:
      'Transformer des notes en vrac en rapport structuré, en séparant ce qui est certain de ce qui reste à confirmer.',
    etapes: [
      'Copiez les notes de terrain dans votre outil d’IA avec le prompt de départ.',
      'Vérifiez la chronologie : chaque heure du rapport doit se retrouver dans les notes.',
      'Repérez ce que l’IA a affirmé sans que vos notes le disent (cause de la fuite, âge de la conduite).',
      'Demandez de déplacer ces points dans la rubrique « À confirmer » et de lister les informations qui manquent pour clore le dossier.',
      'Complétez les crochets avec vos informations et envoyez le rapport à votre responsable.',
    ],
    prompt:
      'Tu es chef d’équipe réseau dans une société de distribution d’eau en Nouvelle-Calédonie. À partir de mes notes de terrain ci-dessous, rédige le rapport d’intervention avec ces rubriques : contexte, chronologie (heures), travaux réalisés, matériel utilisé, abonnés concernés, suite à donner, points à confirmer.\n\nRègles :\n- Utilise uniquement les informations des notes. N’invente ni cause, ni date, ni chiffre.\n- Ce qui est incertain ou absent va dans « points à confirmer ».\n- Style factuel, phrases courtes, une page au maximum.\n\n<notes>\n[collez les notes de terrain]\n</notes>',
    materiau: {
      titre: 'Notes prises sur le carnet de terrain',
      texte:
        'fuite conduite rue des Hibiscus, Dumbéa-sur-Mer, lundi\nappel du poste de garde 6h15, équipe Rémi (chef) + Jo + Lucas, départ dépôt 6h50, sur place 7h25\nconduite PVC diam 160, fissure dans le sens de la longueur, env 40 cm, tranchée 1,5 m de profondeur, terre détrempée\nvanne fermée 7h40 (carrefour Hibiscus/Orchidées), env 45 logements sans eau, liste à sortir du système\nSMS aux abonnés envoyé par l’agence vers 7h55\nremplacé 1,2 m de tuyau : 1 manchon, 2 colliers, 1,4 m de tube, 2 sacs de gravier\nremise en eau 11h20, purge au poteau incendie 11h35, eau trouble puis claire vers midi\nriverain mécontent, filmait la tranchée, aucun dégât chez lui\ncause ? camion benne passé hier ? pas sûr. âge de la conduite : à vérifier sur le plan (1998 ?)\nreste : remblai définitif et enrobé, tranchée fermée provisoirement avec plaque, équipe voirie demain\nretour dépôt 13h15',
    },
    variantes: {
      simple: 'Demander seulement la chronologie, sous forme de liste avec les heures.',
      poussee:
        'Demander aussi un message de 300 caractères pour informer les abonnés de la fin de l’intervention, puis une fiche de suite pour l’équipe voirie.',
    },
    astuces: {
      claude:
        'Demandez le rapport dans un artefact : vous pourrez demander des retouches sans perdre la mise en page.',
      copilot:
        'Dans Word, collez vos notes et demandez à Copilot de rédiger le rapport : il reste modifiable dans le document (selon votre licence).',
      gemini:
        'Dans Google Docs, « Aide-moi à écrire » met en forme un premier jet à partir de vos notes (Google Workspace).',
    },
    vigilance:
      'Un rapport d’intervention peut servir en cas de litige : chaque heure et chaque quantité doit venir de vos notes. Ne nommez pas le riverain mécontent et ne décrivez pas son comportement.',
    formateur: {
      resultat:
        'Un rapport d’une page avec la chronologie exacte (appel à 6 h 15, vanne fermée à 7 h 40, remise en eau à 11 h 20), le matériel, environ 45 logements concernés, et une rubrique « points à confirmer » qui contient la cause et l’âge de la conduite.',
      criteres: [
        'Toutes les heures et quantités du rapport figurent dans les notes.',
        'La cause de la fuite et l’âge de la conduite sont placés dans « points à confirmer ».',
        'Le nombre d’abonnés est donné comme approximatif (environ 45).',
        'Le comportement du riverain n’apparaît pas dans le rapport.',
      ],
      pieges: [
        'Laisser l’IA écrire que la fuite est due au passage d’un camion, ou que la conduite date de 1998.',
        'Transformer « environ 45 logements » en chiffre exact.',
        'Oublier ce qui reste à faire (remblai définitif, enrobé).',
      ],
      competence: 'discernement',
      technique: 'structurer',
    },
    motsCles: ['rapport', 'intervention', 'fuite', 'conduite', 'notes de terrain'],
  },
  {
    id: 'energie-visuel-economies-eau-canva',
    titre: 'Créer dans Canva le visuel d’une campagne d’économies d’eau en saison sèche',
    metier: 'energie',
    niveau: 'debutant',
    famille: 'visuels',
    duree: 20,
    outils: ['canva', 'chatgpt', 'claude'],
    outilConseille: 'canva',
    situation:
      'La régie des eaux de Koné prépare sa campagne de saison sèche. Elle veut une affiche A4 pour les mairies annexes et une version carrée pour sa page Facebook, avec quelques gestes simples pour économiser l’eau.',
    objectif:
      'Préparer le texte avec l’IA, puis créer le visuel dans Canva en gardant un message exact et lisible de loin.',
    etapes: [
      'Avec ChatGPT ou Claude, faites rédiger le texte de l’affiche à partir de la fiche de campagne : un titre court, quatre gestes et le contact.',
      'Dans Canva, décrivez l’affiche voulue à l’IA Canva ou au Design magique : format A4 portrait, couleurs de l’eau, texte lisible de loin.',
      'Choisissez une proposition, remplacez le texte d’exemple par le vôtre et vérifiez le contact et les mentions.',
      'Utilisez l’écriture magique pour raccourcir un texte qui déborde.',
      'Déclinez l’affiche en format carré pour Facebook (redimensionnement magique, Pro, ou nouveau design) et relisez les deux versions.',
    ],
    prompt:
      'Tu es chargé de communication d’une régie des eaux en Nouvelle-Calédonie. À partir de la fiche ci-dessous, propose le texte d’une affiche de saison sèche : un titre de six mots au maximum, quatre gestes de cinq mots chacun, puis le contact. N’ajoute aucun chiffre, aucune règle ni aucun horaire qui ne soit pas dans la fiche. Propose trois titres au choix.\n\n<fiche>\n[collez la fiche de campagne]\n</fiche>',
    materiau: {
      titre: 'Fiche de campagne (fictive)',
      texte:
        'Campagne : économiser l’eau pendant la saison sèche, commune de Koné\nPublic : tous les foyers, y compris les tribus et les gîtes\nGestes à promouvoir :\n- arroser tôt le matin ou en soirée\n- réparer un robinet qui goutte, et vérifier le compteur la nuit pour repérer une fuite\n- préférer une douche courte à un bain\n- laver la voiture au seau plutôt qu’au jet\nHoraires et restrictions d’arrosage : ceux de l’arrêté en vigueur, à insérer par le service (ne pas les inventer)\nContact : service clientèle de la régie, 27 00 00 (numéro fictif), du lundi au vendredi\nCouleurs : bleu et vert de la régie ; ton : positif, sans culpabiliser\nFormats : affiche A4 portrait, publication carrée pour Facebook',
    },
    variantes: {
      simple:
        'Partir directement d’un modèle d’affiche Canva et n’utiliser l’IA que pour proposer trois titres.',
      poussee:
        'Créer trois affiches de style différent (sobre, illustrée, très graphique), les faire commenter par le groupe, puis enregistrer la meilleure comme modèle pour les prochaines campagnes.',
    },
    astuces: {
      canva:
        'Si la régie a un kit de marque (Pro), appliquez-le : couleurs, polices et logo se mettent en place en un clic.',
      chatgpt:
        'Demandez trois titres, puis lequel se lit le mieux à trois mètres d’un mur de mairie annexe, et pourquoi.',
      claude:
        'Demandez un artefact : une affiche simple à retoucher ensuite dans Canva, pour comparer les propositions.',
    },
    vigilance:
      'Les horaires et restrictions d’arrosage viennent de l’arrêté en vigueur : un visuel qui affiche un horaire faux peut valoir des plaintes. N’ajoutez aucune économie chiffrée (« 30 % d’eau en moins ») sans source.',
    formateur: {
      resultat:
        'Une affiche A4 lisible, avec un titre court, quatre gestes tirés de la fiche, le contact exact, un emplacement clair pour l’arrêté en vigueur, et sa version carrée.',
      criteres: [
        'Le contact est exact et aucun horaire ni chiffre n’est inventé.',
        'Les quatre gestes sont ceux de la fiche, en cinq mots chacun environ.',
        'L’affiche se lit de loin : peu de mots, bon contraste.',
        'Le ton reste positif, sans culpabiliser les familles.',
      ],
      pieges: [
        'Garder le texte d’exemple du modèle Canva, avec un faux numéro.',
        'Laisser l’IA ajouter « jusqu’à 40 % d’économies » sans source.',
        'Écrire un horaire d’arrosage de métropole ou inventé.',
      ],
      competence: 'diligence',
      technique: 'format',
    },
    motsCles: ['affiche', 'Canva', 'économies d’eau', 'saison sèche', 'sensibilisation'],
  },
  {
    id: 'energie-anomalies-consommation-gymnase',
    titre: 'Analyser douze mois de consommation d’un bâtiment et repérer les anomalies',
    metier: 'energie',
    niveau: 'intermediaire',
    famille: 'analyser',
    duree: 30,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'gemini',
    situation:
      'Vous êtes technicien dans un bureau d’études en énergie. La commune de Poindimié vous confie le relevé de son gymnase pour l’année écoulée. Elle veut savoir si des consommations sont anormales avant de lancer un plan d’économies.',
    objectif:
      'Faire analyser un tableau par l’IA, la laisser signaler les anomalies sans les corriger, et vérifier les calculs à la main.',
    etapes: [
      'Déposez ou collez le tableau avec le prompt de départ.',
      'Vérifiez à la calculatrice les totaux annuels d’électricité et d’eau.',
      'Demandez la liste des valeurs qui sortent du lot, avec pour chacune la raison du doute (écart avec les autres mois, incohérence avec le coût).',
      'Faites distinguer ce qui ressemble à une erreur de saisie de ce qui ressemble à une vraie surconsommation, et formulez une hypothèse à vérifier sur place pour chacune.',
      'Demandez un graphique par mois, puis trois constats pour la commune, avec ce qui reste incertain.',
    ],
    prompt:
      'Tu es analyste énergie dans un bureau d’études en Nouvelle-Calédonie. Voici le relevé mensuel d’un gymnase communal (données fictives).\n\n1. Calcule les totaux annuels (électricité, eau, coût) et les moyennes mensuelles. Montre tes calculs.\n2. Repère les valeurs anormales : écart avec les autres mois et cohérence entre les consommations et le coût.\n3. Pour chaque anomalie, dis si elle ressemble à une erreur de saisie ou à une vraie surconsommation, et propose une vérification à faire sur place.\n4. Signale les anomalies au lieu de les corriger : ne remplace aucune valeur sans me le dire.\n5. Propose un graphique mensuel et trois constats prudents pour la commune.\n\n<releve>\n[collez le tableau]\n</releve>',
    materiau: {
      titre: 'Relevé du gymnase communal sur douze mois (fictif)',
      texte:
        'Mois;Électricité (kWh);Eau (m³);Coût total (XPF)\nJanvier;5820;210;215600\nFévrier;6040;195;220600\nMars;5910;205;217800\nAvril;5200;188;192700\nMai;4380;120;157000\nJuin;3950;96;139800\nJuillet;3820;92;135100\nAoût;3900;98;138500\nSeptembre;4450;310;185800\nOctobre;4960;455;222400\nNovembre;5630;118;196700\nDécembre;58400;112;202600\n\nÀ savoir : le coût total additionne l’électricité et l’eau à des prix unitaires qui n’ont pas changé dans l’année ; le gymnase est climatisé pendant la saison chaude, de novembre à avril, et la saison des compétitions, de janvier à avril, augmente la fréquentation et l’usage des douches.',
    },
    variantes: {
      simple:
        'Ne demander que les totaux annuels et la liste des mois qui s’écartent de la moyenne de plus de 30 %.',
      poussee:
        'Ajouter une colonne de fréquentation fournie par la commune, demander la consommation par visiteur, puis un plan de trois actions d’économies chiffrées avec leurs hypothèses.',
    },
    astuces: {
      chatgpt:
        'Déposez le tableau en CSV : l’analyse de données calcule en code, que vous pouvez afficher pour vérifier.',
      copilot:
        'Mettez le relevé sous forme de tableau Excel avant de le confier à Copilot dans Excel (selon la licence) : il le lit beaucoup mieux.',
      gemini:
        'Collez le tableau dans Google Sheets et utilisez « Demander à Gemini » pour expliquer les mois qui s’écartent (Google Workspace).',
    },
    vigilance:
      'Une anomalie n’est pas une preuve : l’IA propose des hypothèses (erreur de saisie, fuite), la vérification se fait sur place. Avec de vrais relevés, retirez les références de compteurs et d’abonnement.',
    formateur: {
      resultat:
        'Les totaux (59 900 kWh et 2 199 m³ en corrigeant le zéro en trop de décembre, soit 2 224 600 XPF) et deux anomalies signalées : l’électricité de décembre (58 400 kWh, probablement 5 840, cohérente avec le coût), l’eau de septembre et d’octobre (310 et 455 m³ contre environ 100 de mai à août, retour à la normale en novembre : fuite possible, à vérifier). Les niveaux plus élevés de la saison chaude s’expliquent par la climatisation et les compétitions, sans être des anomalies.',
      criteres: [
        'L’apprenant a vérifié au moins un total à la main.',
        'La valeur de décembre est signalée comme erreur de saisie probable, appuyée sur le coût total, et non corrigée en silence.',
        'La hausse d’eau de septembre et d’octobre est présentée comme une hypothèse de fuite à vérifier sur place.',
        'Les niveaux plus élevés de la saison chaude (électricité de novembre à avril, eau de janvier à avril) ne sont pas pris pour des anomalies : la note les explique.',
      ],
      pieges: [
        'Laisser le total annuel d’électricité tiré vers le haut par la valeur de décembre, sans le voir.',
        'Affirmer qu’il y a une fuite alors que seule la consommation le suggère.',
        'Prendre la saison chaude pour une surconsommation à réduire.',
      ],
      competence: 'discernement',
      technique: 'critique',
    },
    motsCles: ['consommation', 'anomalies', 'électricité', 'eau', 'bâtiment', 'tableau'],
  },
  {
    id: 'energie-tournees-collecte-ferie',
    titre:
      'Organiser les tournées de collecte d’une semaine avec un jour férié et un camion en panne',
    metier: 'energie',
    niveau: 'intermediaire',
    famille: 'organiser',
    duree: 30,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Vous êtes responsable d’exploitation d’une entreprise de collecte dans le Nord. La semaine de Noël, le vendredi est férié et l’un des camions est encore au garage. Vous devez proposer un planning de tournées qui respecte les équipes et les secteurs.',
    objectif:
      'Construire un planning sous contraintes avec l’IA, le contrôler contrainte par contrainte et corriger en plusieurs échanges.',
    etapes: [
      'Donnez à l’IA les secteurs, les moyens et les contraintes, et demandez un planning du lundi au samedi sous forme de tableau.',
      'Vérifiez chaque contrainte avec la liste du matériau : jour férié, camion en panne, camion des tribus, durée de travail.',
      'Signalez à l’IA chaque erreur trouvée et demandez une version corrigée, puis comparez les deux versions.',
      'Demandez ce qui n’a pas pu être respecté, et les choix que l’IA a faits à votre place.',
      'Demandez le message d’information aux équipes, avec les changements par rapport à la semaine habituelle.',
    ],
    prompt:
      'Tu es responsable d’exploitation dans une entreprise de collecte des déchets en Nouvelle-Calédonie. Propose le planning des tournées du lundi au samedi pour la semaine décrite ci-dessous, sous forme de tableau : jour, secteur, camion, équipe, durée. Chaque secteur doit être collecté autant de fois que sa fréquence habituelle, sauf impossibilité. Respecte toutes les contraintes. Si deux contraintes sont incompatibles, dis-le au lieu de choisir à ma place, et liste à la fin les choix que tu as faits.\n\n<secteurs_moyens_contraintes>\n[collez les secteurs, les moyens et les contraintes]\n</secteurs_moyens_contraintes>',
    materiau: {
      titre: 'Secteurs, moyens et contraintes de la semaine (fictifs)',
      texte:
        'SECTEURS (ordures ménagères)\nSecteur;Zone;Passages par semaine;Jours habituels;Durée d’une tournée (h, vidage compris)\nA;Centre de Koné;2;lundi et jeudi;6\nB;Koné nord et Pouembout;2;mardi et vendredi;7\nC;Voh;2;mercredi et samedi;7\nD;Commerces et restauration de Koné;3;lundi, mercredi et vendredi;3\nE;Tribus de la côte (pistes);1;mercredi;4\n\nMOYENS\n- Camion 1 : benne de 16 m³, disponible toute la semaine.\n- Camion 2 : benne de 16 m³, au garage, de retour jeudi matin.\n- Camion 3 : petite benne de 8 m³, disponible toute la semaine ; c’est le seul camion qui passe sur les pistes des tribus (secteur E).\n- Personnel : 3 chauffeurs et 6 équipiers, soit 3 équipes au maximum ; une équipe travaille 8 h par jour au maximum, et peut enchaîner deux courtes tournées si le total reste dans cette limite.\n\nCONTRAINTES DE LA SEMAINE (du lundi 21 au samedi 26 décembre)\n- Vendredi 25 décembre : jour férié, aucune tournée, et le quai de déchargement est fermé.\n- Pas de collecte le dimanche.\n- Un camion ne fait qu’une tournée à la fois, et un camion en panne ne peut pas être utilisé.\n- Les commerces (secteur D) ne doivent pas rester plus de deux jours sans collecte, hors dimanche et jour férié.\n- Avec les achats des fêtes, les bacs du centre de Koné se remplissent vite : les deux passages du secteur A doivent avoir lieu avant le vendredi.',
    },
    variantes: {
      simple: 'Ne planifier que du lundi au mercredi, avec les secteurs A, D et E et deux camions.',
      poussee:
        'Demander le planning sous forme de fichier Excel avec une feuille par équipe, puis un second scénario où un deuxième camion tombe en panne le mardi.',
    },
    astuces: {
      claude:
        'Demandez le planning sous forme de fichier Excel avec la fonction Création de fichiers : un onglet par équipe, prêt à partager.',
      chatgpt:
        'Demandez un tableau, puis téléchargez-le au format Excel pour l’afficher dans l’atelier.',
      copilot:
        'Transformez la réponse en Copilot Pages (compte professionnel) : les chefs d’équipe peuvent commenter le planning directement.',
    },
    vigilance:
      'Le jour férié se vérifie sur le calendrier officiel de la Nouvelle-Calédonie : l’IA confond souvent avec ceux de métropole. Une durée de travail se vérifie aussi avec les règles de l’entreprise, pas avec celles de l’IA.',
    formateur: {
      resultat:
        'Un planning de dix tournées sur cinq jours (lundi à jeudi et samedi), sans collecte le vendredi 25 ni le dimanche, qui reporte les passages du vendredi (B et D), n’utilise pas le camion 2 avant jeudi et garde le secteur E pour le camion 3.',
      criteres: [
        'Les dix tournées sont placées, avec la bonne durée.',
        'Aucune tournée le vendredi 25 décembre ni le dimanche.',
        'Le camion 2 n’apparaît pas avant jeudi, et le secteur E est toujours avec le camion 3.',
        'Aucune équipe ne dépasse 8 h par jour, et le secteur D n’attend jamais plus de deux jours.',
      ],
      pieges: [
        'Planifier une tournée avec le camion 2 le lundi ou le mardi.',
        'Garder les passages du vendredi sans voir que le jour est férié.',
        'Accepter un planning où une équipe fait 7 h + 4 h le même jour.',
      ],
      competence: 'discernement',
      technique: 'iterer',
    },
    motsCles: ['collecte', 'tournées', 'planning', 'jour férié', 'camion', 'déchets'],
  },
  {
    id: 'energie-etude-solaire-particulier',
    titre: 'Préparer l’étude simplifiée d’une installation solaire pour un particulier',
    metier: 'energie',
    niveau: 'intermediaire',
    famille: 'analyser',
    duree: 45,
    outils: ['claude', 'chatgpt', 'gemini', 'copilot'],
    outilConseille: 'claude',
    situation:
      'Vous êtes chargé d’affaires dans une entreprise d’installation de panneaux solaires. Un particulier de Païta vous envoie ses factures d’électricité et attend un premier chiffrage. Le technicien validera le dimensionnement ; vous préparez l’étude simplifiée et la liste de ses hypothèses.',
    objectif:
      'Faire calculer une première étude en séparant les données certaines des hypothèses, et préparer ce qu’il faut faire valider par le technicien.',
    etapes: [
      'Collez les factures et les notes avec le prompt de départ, en remplaçant les crochets par les hypothèses de départ du technicien.',
      'Vérifiez le total annuel de consommation et le prix du kWh « évité » : l’abonnement fixe doit en être exclu.',
      'Demandez de séparer clairement trois listes : les données fournies, les hypothèses, ce qui manque.',
      'Faites recalculer l’économie annuelle et la durée de retour simple pour trois taux d’autoconsommation, et comparez.',
      'Demandez les questions à poser au technicien, puis rédigez vous-même la conclusion : l’IA ne valide ni la faisabilité ni le dimensionnement.',
    ],
    prompt:
      'Tu es assistant d’un chargé d’affaires solaire en Nouvelle-Calédonie. Prépare l’étude simplifiée ci-dessous, que le technicien validera.\n\n1. Calcule la consommation annuelle, la moyenne mensuelle, le mois le plus bas et le plus haut.\n2. Calcule le prix du kWh évité, abonnement fixe exclu, et montre le calcul.\n3. Présente trois listes séparées : données fournies, hypothèses (avec leur valeur), informations manquantes.\n4. Avec une production de [1 400] kWh par kWc et par an et une puissance de [3] kWc, calcule l’économie annuelle et la durée de retour simple pour une autoconsommation de [60] %, puis de 40 % et de 80 %.\n5. Liste les questions à poser au technicien.\n\nRègles : montre tous les calculs ; n’affirme aucune aide, aucun tarif de rachat ni aucune règle technique ; n’écris aucune conclusion de faisabilité : écris « à valider par le technicien ».\n\n<donnees>\n[collez les factures et les notes]\n</donnees>',
    materiau: {
      titre: 'Factures du particulier et notes du rendez-vous (fictives)',
      texte:
        'FACTURES D’ÉLECTRICITÉ SUR 12 MOIS (villa à Païta, 4 personnes, abonné fictif)\nMois;Consommation (kWh);Facture (XPF)\nJanvier;640;24840\nFévrier;610;23760\nMars;590;23040\nAvril;520;20520\nMai;430;17280\nJuin;390;15840\nJuillet;380;15480\nAoût;395;16020\nSeptembre;430;17280\nOctobre;480;19080\nNovembre;560;21960\nDécembre;610;23760\n\nSur la facture : un abonnement fixe de 1 800 XPF par mois, le reste est proportionnel à la consommation.\n\nNOTES DU RENDEZ-VOUS\n- Toiture de 40 m², orientation à vérifier, ombrage « faible » selon le client (à vérifier sur place).\n- Installation envisagée : 3 kWc, devis fictif de 1 250 000 XPF, pose comprise.\n- Hypothèses de départ du technicien, à valider : production de 1 400 kWh par kWc et par an ; autoconsommation de 60 %.\n- Revente du surplus et aides : non étudiées ; à vérifier auprès du gouvernement et de la province.\n- Le client a un chauffe-eau électrique et envisage un deuxième climatiseur.',
    },
    variantes: {
      simple:
        'Ne calculer que la consommation annuelle, le prix du kWh évité et l’économie pour un seul taux d’autoconsommation.',
      poussee:
        'Ajouter un second devis à 4 kWc, demander la comparaison des deux scénarios, puis un e-mail au client qui présente l’étude comme une première estimation soumise à validation.',
    },
    astuces: {
      claude:
        'Demandez le tableau des trois scénarios dans un artefact, puis faites-le exporter en fichier Excel pour le technicien.',
      chatgpt:
        'Déposez les factures en CSV : l’analyse de données calcule en code, que vous pouvez afficher pour vérifier.',
      gemini:
        'Collez le tableau dans Google Sheets et demandez à Gemini la formule du prix moyen du kWh hors abonnement (Google Workspace).',
    },
    vigilance:
      'N’utilisez jamais de vraies factures avec le nom et l’adresse du client. Le dimensionnement, la production et les aides se vérifient avec le technicien et les sources officielles : l’IA ne les valide pas.',
    formateur: {
      resultat:
        'Une consommation annuelle de 6 035 kWh (503 kWh par mois en moyenne), un prix du kWh évité de 36 XPF (abonnement exclu), une économie d’environ 90 700 XPF par an avec 60 % d’autoconsommation (retour simple d’environ 13,8 ans), 60 500 XPF et 20,7 ans à 40 %, 121 000 XPF et 10,3 ans à 80 %, et des questions pour le technicien.',
      criteres: [
        'Le prix du kWh évité exclut l’abonnement : environ 36 XPF, pas 39,6 XPF.',
        'Données fournies, hypothèses et informations manquantes sont dans trois listes séparées.',
        'Les trois scénarios d’autoconsommation sont comparés avec leurs calculs.',
        'Aucune aide, aucun tarif de rachat et aucune conclusion de faisabilité ne sont affirmés.',
      ],
      pieges: [
        'Diviser le total des factures par les kWh, abonnement compris : l’économie est alors surestimée.',
        'Présenter un retour sur investissement unique comme une certitude alors qu’il dépend de l’autoconsommation.',
        'Laisser l’IA citer une aide ou un tarif de rachat de métropole.',
        'Oublier que le deuxième climatiseur et le chauffe-eau changent la consommation future.',
      ],
      competence: 'delegation',
      technique: 'structurer',
    },
    motsCles: ['solaire', 'autoconsommation', 'étude', 'retour sur investissement', 'XPF'],
  },
  {
    id: 'energie-messages-coupure-programmee',
    titre: 'Préparer les messages aux abonnés avant, pendant et après une coupure programmée',
    metier: 'energie',
    niveau: 'intermediaire',
    famille: 'rediger',
    duree: 30,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'copilot',
    situation:
      'Vous travaillez au service clientèle d’un distributeur d’électricité. Un transformateur doit être remplacé à Dumbéa : le courant sera coupé dans deux quartiers. Vous devez préparer les messages pour les abonnés, du premier avis au message de remise en service.',
    objectif:
      'Décliner une même information en plusieurs messages adaptés au moment et au canal, en gardant exacts les horaires et les consignes.',
    etapes: [
      'Donnez la fiche de la coupure à l’IA et demandez d’abord la liste des informations indispensables dans chaque message.',
      'Demandez les quatre messages : avis à une semaine, rappel la veille, point pendant la coupure, message de remise en service. Un SMS de 160 caractères au maximum pour le rappel.',
      'Comparez chaque horaire et chaque date avec la fiche, y compris le report en cas de mauvais temps.',
      'Vérifiez que la consigne pour les abonnés qui dépendent d’un équipement médical figure dans le premier message, et qu’aucune consigne de sécurité n’a été inventée.',
      'Comptez les caractères du SMS, puis faites valider les messages par votre responsable.',
    ],
    prompt:
      'Tu es chargé de communication dans un distributeur d’électricité en Nouvelle-Calédonie. À partir de la fiche ci-dessous, rédige quatre messages pour les abonnés concernés par la coupure programmée :\n1. l’avis à sept jours (e-mail et affichage) ;\n2. le rappel de la veille (SMS de 160 caractères au maximum) ;\n3. le point pendant la coupure (publication courte pour les réseaux sociaux) ;\n4. le message de remise en service (e-mail).\n\nRègles : vouvoiement, ton simple et rassurant ; utilise uniquement les informations de la fiche ; n’écris aucune consigne de sécurité autre que celles de la fiche, mets [consigne à valider par le service sécurité] si tu penses qu’il en manque une ; indique clairement l’horaire de coupure et celui du rétablissement.\n\n<fiche>\n[collez la fiche de la coupure]\n</fiche>',
    materiau: {
      titre: 'Fiche de la coupure programmée (fictive)',
      texte:
        'Nature : remplacement d’un transformateur de poste de distribution\nLieu : quartiers Koutio-nord et Auteuil, Dumbéa (environ 1 200 abonnés)\nDate : jeudi 26 novembre\nCoupure prévue : de 8 h à 12 h\nRétablissement : progressif, jusqu’à 13 h 30 environ pour les derniers abonnés\nMauvais temps : en cas de forte pluie ou d’orage, report au jeudi 3 décembre ; l’information sera donnée la veille avant 16 h\nAbonnés dépendant d’un équipement médical : à signaler au service clientèle au plus tard le lundi 23 novembre pour étudier une solution\nConseils de la fiche : débrancher les appareils sensibles avant la coupure, laisser un interrupteur allumé pour repérer le retour du courant, garder le réfrigérateur fermé\nCanaux : e-mail, SMS, affichage à la mairie annexe, publication sur la page de l’entreprise\nContact : ligne service clientèle 27 00 00 (numéro fictif), du lundi au vendredi',
    },
    variantes: {
      simple: 'Ne rédiger que le SMS de rappel de la veille et l’avis à sept jours.',
      poussee:
        'Demander les mêmes messages en tenant compte d’un report pour mauvais temps, puis une version en anglais pour les gîtes et une version courte pour la radio locale.',
    },
    astuces: {
      claude:
        'Demandez les quatre messages dans un tableau (moment, canal, texte, nombre de caractères) pour les comparer d’un coup d’œil.',
      copilot:
        'Dans Outlook, partez d’un « Brouillon avec Copilot » pour l’e-mail, puis réglez le ton et la longueur.',
      gemini:
        'Dans Gmail, « Aide-moi à écrire » prépare l’e-mail de remise en service ; affinez ensuite : plus court, plus rassurant (Google Workspace).',
    },
    vigilance:
      'Une coupure mal annoncée met en difficulté des personnes qui dépendent d’un équipement médical : la consigne de la fiche doit apparaître. Les consignes de sécurité électrique viennent du service sécurité, jamais de l’IA.',
    formateur: {
      resultat:
        'Quatre messages exacts : coupure de 8 h à 12 h, rétablissement progressif jusqu’à 13 h 30, report possible au 3 décembre annoncé la veille avant 16 h, consigne pour les abonnés dépendant d’un équipement médical, et un SMS de 160 caractères au maximum.',
      criteres: [
        'Les horaires, la date et le report sont identiques à la fiche dans les quatre messages.',
        'La consigne pour les équipements médicaux figure dans l’avis à sept jours.',
        'Le SMS fait 160 caractères au maximum, comptés par l’apprenant.',
        'Aucune consigne de sécurité n’est ajoutée en dehors de la fiche.',
      ],
      pieges: [
        'Annoncer un retour du courant à 12 h pour tous les abonnés, alors qu’il est progressif jusqu’à 13 h 30.',
        'Laisser l’IA ajouter une consigne de sécurité électrique inventée.',
        'Oublier le report possible, ou donner une mauvaise date.',
      ],
      competence: 'diligence',
      technique: 'contexte',
    },
    motsCles: ['coupure programmée', 'SMS', 'communication', 'électricité', 'abonnés'],
  },
  {
    id: 'energie-assistant-questions-abonnes',
    titre: 'Créer un assistant de première réponse aux abonnés, avec renvoi vers un conseiller',
    metier: 'energie',
    niveau: 'avance',
    famille: 'automatiser',
    duree: 60,
    outils: ['claude', 'chatgpt', 'gemini', 'copilot'],
    outilConseille: 'claude',
    situation:
      'Le service clientèle d’une régie reçoit chaque jour les mêmes questions : comment relever son compteur, que faire en cas de coupure, comment signaler une fuite. Vous voulez un assistant interne qui prépare les réponses générales, mais qui renvoie vers un conseiller dès qu’il s’agit du compte d’un abonné.',
    objectif:
      'Créer un assistant avec des limites strictes, puis vérifier par des tests qu’il renvoie bien vers un conseiller quand le sujet touche un compte.',
    etapes: [
      'Rassemblez quatre documents publics sans données d’abonnés : questions fréquentes, guide du compteur, procédure de signalement d’une fuite ou d’une coupure, règlement du service.',
      'Créez un Projet (Claude, ChatGPT), un Gem (Gemini) ou un agent (Copilot) et ajoutez-y ces documents.',
      'Rédigez les instructions avec le prompt de départ : rôle, ton, sources, et surtout les cas de renvoi vers un conseiller.',
      'Testez l’assistant avec les six questions du matériau. Notez les réponses qui vont au fond d’un compte, qui inventent une règle ou qui ne renvoient pas vers un conseiller.',
      'Corrigez les instructions et refaites le test jusqu’à obtenir des réponses fiables ; faites tester l’assistant par un collègue sur cinq questions que vous n’avez pas prévues.',
    ],
    prompt:
      'Tu es l’assistant de première réponse du service clientèle de [nom de la régie], en Nouvelle-Calédonie. Tu prépares des projets de réponse aux questions générales des abonnés ; un conseiller les relit avant envoi.\n\nRègles :\n- Réponds uniquement à partir des documents de ce projet et cite le document utilisé. Si la réponse n’y est pas, dis-le et propose de transmettre la question à un conseiller.\n- Dès qu’une question touche le compte, le dossier, la facture, le paiement, le contrat, un raccordement ou une demande personnelle d’un abonné, ne réponds pas sur le fond : écris « Je transmets votre demande à un conseiller » et prépare une fiche de transfert (motif, informations à demander, degré d’urgence). Ne demande jamais de numéro d’abonné ni de coordonnées dans le chat.\n- Pour tout danger (fil tombé, odeur de brûlé, fuite importante), renvoie immédiatement vers le numéro d’urgence indiqué dans les documents, sans conseil technique de ta part.\n- N’invente jamais de tarif, de délai, de règle ou d’obligation.\n- Ton : courtois, simple, en vouvoiement, 120 mots au maximum.',
    materiau: {
      titre: 'Questions de test',
      texte:
        '1. Comment relever moi-même mon compteur d’eau ?\n2. Il n’y a plus de courant dans mon quartier depuis ce matin, que dois-je faire ?\n3. Quel est le montant de ma dernière facture ? Mon numéro d’abonné est le 000-000.\n4. Je n’ai pas pu payer ma facture ce mois-ci : va-t-on me couper l’eau ?\n5. Quelles sont les restrictions d’eau en vigueur cette semaine ?\n6. Je veux un raccordement pour ma maison en tribu : quel est le délai et combien cela coûte-t-il ?',
    },
    variantes: {
      simple:
        'Se contenter d’un prompt réutilisable enregistré dans un document, sans créer d’assistant, et le tester sur les questions 1 à 4.',
      poussee:
        'Ajouter des exemples de bonnes réponses et de bonnes fiches de transfert dans les instructions, puis faire évaluer l’assistant par deux conseillers sur vingt nouvelles questions.',
    },
    astuces: {
      claude:
        'Dans un Projet, déposez les documents dans les connaissances du projet et collez les règles dans ses instructions.',
      chatgpt:
        'Un Projet suffit pour l’équipe ; un GPT (création payante) permet de le partager plus largement.',
      gemini: 'Créez un Gem, collez les règles dans ses instructions et ajoutez les documents.',
      copilot:
        'Avec « Créer un agent » (selon la licence), limitez ses sources aux documents publics et testez-le avant de le partager.',
    },
    vigilance:
      'N’ajoutez aucun document contenant des données d’abonnés. L’assistant ne connaît aucun compte : toute réponse sur une facture, un paiement ou une coupure d’eau personnelle est un défaut à corriger. Les restrictions d’eau se lisent dans l’arrêté en vigueur, pas dans l’IA.',
    formateur: {
      resultat:
        'Un assistant qui répond juste aux questions générales (1, 2, 5 si le document existe), renvoie vers un conseiller avec une fiche de transfert pour les questions 3, 4 et 6, et ne demande jamais de numéro d’abonné.',
      criteres: [
        'Les instructions listent précisément les cas de renvoi vers un conseiller.',
        'Les questions 3, 4 et 6 aboutissent à une fiche de transfert, sans réponse sur le fond.',
        'La question 5 renvoie à l’arrêté en vigueur si le document manque, au lieu d’inventer.',
        'L’apprenant a corrigé les instructions après au moins un test raté.',
      ],
      pieges: [
        'Laisser l’assistant répondre « on ne coupe pas l’eau pour un seul retard », une règle inventée.',
        'Charger des documents avec des factures ou des listes d’abonnés.',
        'Se contenter de cinq tests réussis sans tester une question piège.',
      ],
      competence: 'delegation',
      technique: 'instructions',
    },
    motsCles: ['assistant', 'projet', 'gem', 'agent', 'questions fréquentes', 'service clientèle'],
  },
  {
    id: 'energie-notebook-procedures-securite',
    titre: 'Interroger les procédures d’exploitation et de sécurité avec un carnet Gemini Notebook',
    metier: 'energie',
    niveau: 'avance',
    famille: 'synthetiser',
    duree: 45,
    outils: ['notebook', 'claude', 'gemini'],
    outilConseille: 'notebook',
    situation:
      'Vous êtes responsable d’exploitation et un nouveau technicien arrive lundi. Vos procédures sont dispersées dans plusieurs documents. Vous voulez un carnet où l’on pose une question et où la réponse renvoie au passage exact, ou dit que la procédure n’en parle pas.',
    objectif:
      'Construire un carnet de procédures qui répond avec des citations, repérer ce qui n’est pas dans les sources et rester clair sur la limite de l’outil en matière de sécurité.',
    etapes: [
      'Dans Gemini Notebook, créez un carnet et ajoutez les trois extraits du matériau comme trois sources distinctes, en collant chaque texte.',
      'Posez les six questions du matériau une à une et ouvrez la citation de chaque réponse pour vérifier qu’elle dit bien ce qui est annoncé.',
      'Repérez les questions dont la réponse n’est pas dans les sources : le carnet doit le dire, pas combler le manque.',
      'Générez une FAQ à partir des sources (rubrique Rapports) et relisez-la avec les mêmes questions.',
      'Rédigez en quelques lignes la règle d’usage du carnet : ce qu’on peut y chercher, et ce qui reste à confirmer auprès du responsable sécurité.',
    ],
    prompt:
      'Réponds uniquement à partir des sources de ce carnet, et cite le passage utilisé pour chaque point. Si la réponse n’est pas dans les sources, écris « Absent des procédures » et propose la personne ou le document à consulter. Ne complète jamais une consigne de sécurité avec des connaissances générales. Voici ma question : [collez une question du matériau].',
    materiau: {
      titre: 'Trois extraits de procédures (fictifs) et questions de test',
      texte:
        'SOURCE 1 : PROCÉDURE P-03, INTERVENTION SUR CONDUITE D’EAU (extrait fictif)\nAvant de fermer une vanne, le chef d’équipe prévient le poste de commande et note l’heure d’appel. Les abonnés concernés sont prévenus par SMS avant la fermeture quand l’urgence le permet. Toute tranchée profonde est étayée avant que quelqu’un y descende ; la profondeur à partir de laquelle l’étayage est exigé est fixée par le règlement de sécurité en vigueur, non reproduit ici. À la remise en eau, la conduite est purgée au poteau incendie le plus proche jusqu’à ce que l’eau soit claire, et l’heure de fin est notée au rapport.\n\nSOURCE 2 : PROCÉDURE P-07, RONDE DES POSTES ÉLECTRIQUES (extrait fictif)\nLa ronde est faite chaque semaine par deux agents habilités. Les agents ne pénètrent pas dans un poste en cas d’orage ni de sol détrempé ; ils préviennent alors le chef d’exploitation, qui reporte la ronde. Toute anomalie (bruit, odeur, fuite d’huile) est photographiée de l’extérieur et signalée immédiatement ; l’agent ne tente aucune intervention.\n\nSOURCE 3 : PLAN D’ALERTE CYCLONIQUE (extrait fictif)\nÀ l’alerte de niveau 1, le chef d’exploitation vérifie les stocks de matériel et la charge des groupes électrogènes de secours. À l’alerte de niveau 2, les équipes d’astreinte sont confirmées et les chantiers en tranchée sont sécurisés. À l’alerte de niveau 3, toutes les équipes restent à l’abri ; aucune intervention sur le réseau n’est menée avant le retour à l’alerte de niveau 2.\n\nQUESTIONS DE TEST\n1. Qui doit-on prévenir avant de fermer une vanne ?\n2. À partir de quelle profondeur une tranchée doit-elle être étayée ?\n3. Peut-on faire la ronde d’un poste électrique par temps d’orage ?\n4. Quelle est la tension maximale d’un poste de distribution ?\n5. Que fait-on à l’alerte cyclonique de niveau 3 ?\n6. Combien de temps doit durer la purge d’une conduite après réparation ?',
    },
    variantes: {
      simple:
        'N’utiliser que la source 1 et poser les questions 1, 2 et 6 pour voir comment le carnet signale une absence.',
      poussee:
        'Ajouter vos vraies procédures comme sources, faire générer des fiches et un quiz pour l’accueil du nouveau technicien, puis partager le carnet avec l’équipe.',
    },
    astuces: {
      notebook:
        'Utilisez Discussion pour poser les questions, puis Rapports pour générer une FAQ : chaque réponse renvoie à sa citation numérotée.',
      claude:
        'Pour comparer, déposez les mêmes textes dans un Projet : demandez les mêmes citations et voyez si les réponses sont aussi précises.',
      gemini:
        'Posez une question sans les sources : la réponse n’est plus appuyée sur vos documents, donc non citée. C’est un bon exemple de réponse à ne pas utiliser pour une consigne.',
    },
    vigilance:
      'Le carnet n’est pas une procédure : en cas de doute, la référence reste le document original et le responsable sécurité. Ne chargez que des documents que vous avez le droit de partager avec l’outil, sans données personnelles.',
    formateur: {
      resultat:
        'Un carnet qui répond aux questions 1, 3 et 5 avec une citation exacte, qui indique que les questions 2 (profondeur d’étayage) et 4 (tension du poste) sont absentes des sources, qui précise pour la question 6 qu’aucune durée n’est donnée, seulement « jusqu’à ce que l’eau soit claire », et une règle d’usage de quelques lignes.',
      criteres: [
        'Chaque réponse du carnet est accompagnée d’une citation ouverte et vérifiée.',
        'Les questions 2 (profondeur) et 4 (tension du poste) obtiennent « Absent des procédures » et non un chiffre.',
        'La question 6 est reconnue comme sans durée chiffrée : le critère de la source est l’eau claire.',
        'La règle d’usage rappelle que le document original et le responsable sécurité priment.',
      ],
      pieges: [
        'Accepter un chiffre pour la profondeur d’étayage, la tension d’un poste ou la durée de la purge, donné de mémoire par l’IA.',
        'Se contenter de la FAQ générée sans en ouvrir les citations.',
        'Charger dans le carnet des documents confidentiels sans autorisation.',
      ],
      competence: 'diligence',
      technique: 'sources',
    },
    motsCles: ['Gemini Notebook', 'procédures', 'sécurité', 'sources', 'citations', 'exploitation'],
  },
  {
    id: 'energie-veille-reglementaire-technique',
    titre:
      'Organiser une veille sur l’énergie et les déchets, vérifiée dans les sources officielles',
    metier: 'energie',
    niveau: 'avance',
    famille: 'veiller',
    duree: 45,
    outils: ['gemini', 'chatgpt', 'claude'],
    outilConseille: 'gemini',
    situation:
      'Vous travaillez dans un bureau d’études en énergie. Votre directeur veut être prévenu chaque mois des évolutions de la réglementation et des techniques sur le solaire et sur la gestion des déchets en Nouvelle-Calédonie, sans relayer une information fausse ou venue d’ailleurs.',
    objectif:
      'Concevoir une veille régulière qui distingue un texte officiel d’un commentaire, et vérifier chaque information dans la source originale avant de la diffuser.',
    etapes: [
      'Lancez une recherche approfondie avec le prompt de départ : Deep Research (Gemini), Recherche approfondie (ChatGPT) ou Recherche (Claude, payante).',
      'Ouvrez au moins cinq sources citées : pour chacune, notez si c’est un texte officiel, une annonce institutionnelle ou un commentaire de presse.',
      'Vérifiez qu’aucune information ne vient de métropole ou d’un autre pays sans que ce soit signalé.',
      'Faites présenter le résultat selon la fiche du matériau, avec la source, la date et le niveau de confiance de chaque ligne.',
      'Programmez la relance mensuelle (« Programmer des actions » dans Gemini ou une tâche planifiée) et rédigez la règle : rien n’est diffusé sans ouverture de la source.',
    ],
    prompt:
      'Tu es chargé de veille dans un bureau d’études en énergie, en Nouvelle-Calédonie. Recherche, sur les [30] derniers jours, les évolutions de la réglementation et des techniques sur le solaire (installations de particuliers et de collectivités) et sur la gestion des déchets (tri, collecte, filières).\n\nPour chaque information : sujet, ce que cela change pour un bureau d’études, source avec sa date et son adresse, nature de la source (texte officiel, annonce institutionnelle, presse, commentaire), niveau de confiance. Privilégie le Journal officiel de la Nouvelle-Calédonie, les sites du gouvernement et des provinces, et la presse calédonienne.\n\nRègles : ne cite aucun texte que tu n’as pas trouvé ; signale ce qui vient de métropole ou d’un autre pays ; n’affirme aucun contenu précis d’un texte (seuil, tarif, obligation) sans l’avoir lu dans la source ; si tu trouves peu, dis-le.\n\nPrésente le résultat selon cette fiche :\n<fiche>\n[collez la fiche de veille]\n</fiche>',
    materiau: {
      titre: 'Fiche de veille mensuelle (modèle)',
      texte:
        'VEILLE ÉNERGIE ET DÉCHETS : [mois]\n\n1. Textes officiels nouveaux ou modifiés\nSujet;Ce que cela change pour nous;Source officielle et date;Lien;Lu dans la source (oui/non)\n\n2. Annonces des institutions (gouvernement, provinces, communes)\nSujet;Source et date;Niveau de confiance\n\n3. Évolutions techniques et filières (solaire, stockage, recyclage)\nSujet;Source et date;Vient de Nouvelle-Calédonie (oui/non);Niveau de confiance\n\n4. À vérifier avant diffusion\n\n5. Deux actions pour le bureau d’études ce mois-ci',
    },
    variantes: {
      simple:
        'Faire une seule recherche sur le solaire, sans fiche ni planification, et vérifier trois sources.',
      poussee:
        'Charger les fiches des trois derniers mois dans Gemini Notebook pour suivre l’évolution d’un sujet, et faire contrôler par un collègue cinq lignes tirées au hasard.',
    },
    astuces: {
      gemini:
        'Lancez Deep Research, exportez le rapport dans Google Docs pour l’annoter, puis programmez la relance avec « Programmer des actions » (selon l’offre).',
      chatgpt:
        'La recherche approfondie rend un rapport sourcé ; une tâche planifiée (payante) peut relancer la même demande chaque mois.',
      claude:
        'Activez la recherche web pour un premier essai ; « Recherche » (payante) rend un rapport plus complet, avec ses sources.',
    },
    vigilance:
      'Un résumé de l’IA n’est pas un texte officiel : il peut mélanger des règles de métropole et des règles calédoniennes. Le contenu d’un texte (seuil, tarif, obligation) se lit dans le Journal officiel ou sur le site du gouvernement ou de la province, jamais dans le seul rapport.',
    formateur: {
      resultat:
        'Une fiche de veille au format demandé, où chaque ligne a une source datée, ouverte par l’apprenant, une nature de source et un niveau de confiance, avec une rubrique « à vérifier » honnête, et une relance mensuelle configurée ou décrite précisément.',
      criteres: [
        'Chaque information a une source datée et la colonne « lu dans la source » est renseignée honnêtement.',
        'Les informations qui viennent de métropole ou de l’étranger sont signalées.',
        'Aucun contenu de texte (seuil, tarif, obligation) n’est repris sans lecture de la source officielle.',
        'La relance mensuelle et la règle de diffusion sont décrites.',
      ],
      pieges: [
        'Diffuser un arrêté ou une aide dont la référence n’existe pas, ou qui concerne la métropole.',
        'Prendre un article de presse pour le texte officiel qu’il commente.',
        'Présenter comme actuel un texte déjà modifié ou abrogé.',
      ],
      competence: 'discernement',
      technique: 'sources',
    },
    motsCles: [
      'veille',
      'réglementation',
      'solaire',
      'déchets',
      'sources officielles',
      'Deep Research',
    ],
  },
  {
    id: 'energie-tableau-bord-centre-tri',
    titre: 'Construire le tableau de bord mensuel d’un centre de tri',
    metier: 'energie',
    niveau: 'avance',
    famille: 'analyser',
    duree: 45,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'copilot',
    situation:
      'Vous êtes responsable d’exploitation d’un centre de tri à Païta. Le syndicat de collecte vous demande chaque mois un tableau de bord : tonnages reçus, taux de refus, pannes, heures d’arrêt et réclamations. Vous voulez un modèle réutilisable, et un premier bilan de l’année écoulée.',
    objectif:
      'Enchaîner contrôle des données, calcul d’indicateurs, tableau de bord et messages clés, avec une vérification avant chaque étape.',
    etapes: [
      'Étape 1 : collez le tableau et demandez seulement le contrôle des données : valeurs aberrantes, manques, incohérences. Ne laissez rien corriger sans accord.',
      'Étape 2 : corrigez ou écartez les valeurs douteuses avec l’IA, puis faites calculer le taux de refus mensuel et annuel, le total des pannes, des heures d’arrêt et des réclamations. Vérifiez deux calculs à la main.',
      'Étape 3 : demandez le tableau de bord (un tableau et deux graphiques) : taux de refus par mois, et pannes avec heures d’arrêt.',
      'Étape 4 : demandez trois messages pour le syndicat, dont l’un sur le mois qui s’écarte le plus, avec une hypothèse à vérifier plutôt qu’une explication affirmée.',
      'Étape 5 : demandez le modèle vide à réutiliser chaque mois, avec la règle de calcul de chaque indicateur écrite en clair.',
    ],
    prompt:
      'Tu es analyste d’exploitation pour un centre de tri en Nouvelle-Calédonie. Nous allons travailler en plusieurs étapes ; ne passe à l’étape suivante que lorsque je te le demande.\n\nÉtape 1 : contrôle les données ci-dessous (tonnes de déchets reçus, tonnes de refus, nombre de pannes, heures d’arrêt, réclamations, sur douze mois). Signale toute valeur aberrante, manquante ou incohérente, avec la raison de ton doute. Ne corrige rien et ne calcule rien : pose-moi une question si une valeur est ambiguë.\n\n<donnees>\n[collez le tableau]\n</donnees>',
    materiau: {
      titre: 'Données mensuelles du centre de tri (fictives)',
      texte:
        'Mois;Tonnes reçues;Tonnes de refus;Pannes (nombre);Heures d’arrêt;Réclamations\nJanvier;142;21;2;14;9\nFévrier;128;19;1;6;7\nMars;151;24;3;28;12\nAvril;119;17;2;11;8\nMai;123;18;1;5;6\nJuin;117;16;2;9;5\nJuillet;121;20;1;4;6\nAoût;1310;19;2;10;7\nSeptembre;126;18;1;5;6\nOctobre;138;31;5;54;19\nNovembre;133;22;3;19;11\nDécembre;159;27;2;12;10\n\nNotes : le refus est la part des déchets reçus qui n’est pas recyclable et part en enfouissement ; en octobre, une pièce du convoyeur a cassé et le tri a été ralenti.',
    },
    variantes: {
      simple:
        'S’arrêter à l’étape 2 : obtenir le contrôle des données, puis le taux de refus de chaque mois.',
      poussee:
        'Créer un Projet ou un Gem « Tableau de bord » avec le modèle et les règles de calcul, pour produire le tableau de bord de chaque nouveau mois en quelques minutes.',
    },
    astuces: {
      copilot:
        'Mettez les données sous forme de tableau Excel : Copilot dans Excel (selon la licence) ajoute les colonnes de calcul et les graphiques dans le fichier.',
      chatgpt:
        'Déposez le fichier : l’analyse de données calcule et trace les graphiques ; affichez le code pour vérifier un total.',
      claude:
        'Demandez le tableau de bord dans un artefact, puis faites-le exporter en fichier Excel avec la fonction Création de fichiers.',
    },
    vigilance:
      'Un tableau de bord part à un financeur : chaque chiffre doit être vérifié. N’expliquez pas un mois exceptionnel par une cause que vous n’avez pas confirmée.',
    formateur: {
      resultat:
        'Une valeur aberrante signalée à l’étape 1 (1 310 tonnes en août, probablement 131), puis un taux de refus annuel de 15,9 % (252 t sur 1 588 t), un mois d’octobre qui ressort (22,5 % de refus, 5 pannes, 54 h d’arrêt, 19 réclamations), un tableau de bord et un modèle réutilisable.',
      criteres: [
        'L’anomalie d’août est repérée avant tout calcul et traitée avec l’accord de l’apprenant.',
        'Le taux de refus annuel est de 15,9 %, pas 9,1 % (valeur d’août non corrigée).',
        'Octobre est présenté avec une hypothèse à vérifier (convoyeur cassé), pas comme une cause établie.',
        'Les règles de calcul de chaque indicateur sont écrites en clair dans le modèle.',
      ],
      pieges: [
        'Laisser le total annuel être faussé par la valeur de 1 310 tonnes.',
        'Passer à l’étape suivante sans avoir vérifié le contrôle des données.',
        'Écrire dans le message que la hausse des réclamations est due aux pannes sans preuve.',
      ],
      competence: 'delegation',
      technique: 'decomposer',
    },
    motsCles: ['centre de tri', 'tableau de bord', 'taux de refus', 'indicateurs', 'pannes'],
  },
];
