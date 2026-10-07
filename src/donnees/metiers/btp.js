/**
 * Bâtiment et travaux publics : entreprise de travaux, artisan, bureau d’études, maîtrise
 * d’œuvre. Toutes les personnes, entreprises, chantiers et sommes sont fictifs.
 * Aucune règle technique ou juridique précise n’est affirmée : les exercices la font vérifier.
 */

export const vocabulaire = {
  structure: { g: 'f', s: 'entreprise de bâtiment', p: 'entreprises de bâtiment' },
  client: { g: 'm', s: 'maître d’ouvrage', p: 'maîtres d’ouvrage' },
  partenaire: { g: 'm', s: 'sous-traitant', p: 'sous-traitants' },
  documentCourant: { g: 'm', s: 'compte rendu de chantier', p: 'comptes rendus de chantier' },
  documentLong: {
    g: 'm',
    s: 'cahier des clauses techniques particulières',
    p: 'cahiers des clauses techniques particulières',
  },
  reunion: {
    g: 'f',
    s: 'réunion de lancement de chantier',
    p: 'réunions de lancement de chantier',
  },
  offre: {
    g: 'm',
    s: 'renforcement de toiture avant la saison cyclonique',
    p: 'renforcements de toiture avant la saison cyclonique',
  },
  poste: { g: 'm', s: 'conducteur de travaux', p: 'conducteurs de travaux' },
  evenement: {
    g: 'm',
    s: 'forum de recrutement de l’entreprise',
    p: 'forums de recrutement de l’entreprise',
  },
  visuel: { g: 'm', s: 'flyer publicitaire', p: 'flyers publicitaires' },
  domaine: 'le bâtiment et les travaux publics',
  motifReclamation: 'un retard de chantier et des finitions mal faites',
  donnees:
    'le suivi des chantiers en cours, avec le montant des marchés, les coûts prévus et les dépenses engagées',
  colonnes:
    'Chantier;Commune;Montant du marché (XPF);Coût prévisionnel (XPF);Dépenses engagées (XPF);Avancement (%)',
  indicateur: 'la marge prévisionnelle de chaque chantier',
  veille: 'les appels d’offres publics de travaux en Nouvelle-Calédonie',
  sourcesVeille:
    'les annonces légales de la presse locale, les sites des provinces et des communes, et les plateformes de marchés publics',
  jargon: 'la réception des travaux, les réserves et la garantie décennale',
  procedure: 'l’ouverture d’un nouveau chantier',
  situationTendue:
    'un maître d’ouvrage furieux qui refuse de payer la dernière situation de travaux',
  donneesSensibles:
    'les coordonnées des clients, les prix négociés avec les sous-traitants, les salaires et les accidents du travail des salariés',
  corpus: 'le CCTP, le CCAP et les comptes rendus de chantier d’une opération',
  publicCible: 'les propriétaires de maisons individuelles du Grand Nouméa',
  etranger: 'un fournisseur australien de matériaux',
  themeFormation: 'les règles de sécurité sur un chantier',
  tacheRepetitive: 'la rédaction du compte rendu de chantier hebdomadaire',
  planning: 'l’affectation des équipes sur les chantiers du mois',
  comparaison: 'deux devis de fourniture de béton prêt à l’emploi',
};

export const exercices = [
  {
    id: 'btp-compte-rendu-notes-vocales',
    titre: 'Rédiger le compte rendu de chantier à partir de notes vocales retranscrites',
    metier: 'btp',
    niveau: 'debutant',
    famille: 'synthetiser',
    duree: 20,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Vous êtes conducteur de travaux sur le chantier d’une résidence de 24 logements à Dumbéa-sur-Mer. Pendant la réunion de chantier, vous avez dicté vos notes sur votre téléphone. La retranscription automatique est brute et contient des erreurs. Le compte rendu doit partir aux entreprises ce soir.',
    objectif:
      'Transformer une retranscription brute en compte rendu structuré, en vérifiant que chaque décision, date et responsable est fidèle.',
    etapes: [
      'Collez la retranscription du matériau avec le prompt de départ.',
      'Vérifiez le tableau des actions : chaque action a un lot responsable et une échéance tirés des notes, sinon « à préciser ».',
      'Lisez la liste des mots interprétés par l’IA (erreurs de reconnaissance vocale) et vérifiez chaque interprétation.',
      'Demandez la liste des points flous à confirmer avant diffusion.',
      'Relisez le compte rendu en entier : c’est vous qui le signez.',
    ],
    prompt:
      'Tu es conducteur de travaux dans une entreprise de bâtiment à Nouméa. Voici la retranscription automatique de mes notes vocales prises pendant la réunion de chantier. Elle contient des erreurs de reconnaissance vocale. Rédige le compte rendu avec : 1. présents et absents ; 2. avancement par lot ; 3. décisions prises ; 4. tableau des actions (action, lot responsable, échéance) ; 5. points de sécurité ; 6. date de la prochaine réunion.\nN’ajoute aucune information. Si une échéance ou un responsable manque, écris « à préciser ». À la fin, liste les mots de la retranscription que tu as dû interpréter, avec ton interprétation.\n\n<retranscription>\n[collez la retranscription]\n</retranscription>',
    materiau: {
      titre: 'Retranscription brute des notes vocales',
      texte:
        'réunion de chantier numéro 14 résidence les Niaoulis mardi 8 heures présents moi le bureau d’études structure le lot gros œuvre Batico le plombier Hydro Sud absent l’électricien excusé\ngros œuvre les dalles du bâtiment B sont coulées sauf le niveau 3 prévu jeudi si la pompe à des tons est dispo sinon lundi\nplomberie retard sur les réseaux du bâtiment A parce que les tuyaux PVC sont bloqués au port depuis 10 jours Hydro Sud doit envoyer le nouveau planning avant vendredi\nle bureau d’études demande les plans d’arma du balcon type 2 à Batico c’est pour la semaine prochaine\nsécurité garde-corps manquant au niveau 2 côté est à remettre aujourd’hui même c’est Batico\nla cuve de récupération d’eau pas encore livrée voir avec le maître d’ouvrage pour la date\nprochaine réunion mardi prochain même heure\nah et penser à nettoyer la zone de stockage avant la visite de la mairie',
    },
    variantes: {
      simple: 'Demander seulement le tableau des actions à partir de la retranscription.',
      poussee:
        'Créer un modèle de compte rendu réutilisable (Projet, Gem ou agent) avec la liste des lots du chantier, puis l’utiliser pour la réunion suivante.',
    },
    astuces: {
      chatgpt:
        'Ouvrez le compte rendu dans le canevas pour corriger une ligne du tableau sans tout régénérer.',
      copilot:
        'Dans Word, collez la retranscription et demandez à Copilot de la mettre au format de votre modèle de compte rendu.',
    },
    vigilance:
      'Le compte rendu engage l’entreprise : une échéance inventée peut lui être opposée plus tard. Ne laissez passer aucune « correction » de l’IA sans la vérifier.',
    formateur: {
      resultat:
        'Un compte rendu en six parties, fidèle aux notes : niveau 3 coulé jeudi ou lundi selon la pompe à béton, planning d’Hydro Sud avant vendredi, plans d’armatures du balcon type 2 la semaine prochaine, garde-corps à reposer le jour même par Batico, livraison de la cuve « à préciser ».',
      criteres: [
        'Chaque action a un responsable et une échéance tirés des notes, ou « à préciser ».',
        'Le point de sécurité (garde-corps) ressort clairement, avec son échéance immédiate.',
        'Les interprétations de l’IA (pompe à béton, plans d’armatures) sont listées et vérifiées.',
        'Aucune information n’est ajoutée.',
      ],
      pieges: [
        'Accepter une date de livraison inventée pour la cuve.',
        'Oublier le nettoyage de la zone de stockage, dicté à la fin.',
        'Diffuser le compte rendu sans le relire parce qu’il « a l’air propre ».',
      ],
      competence: 'discernement',
      technique: 'structurer',
    },
    motsCles: [
      'compte rendu',
      'réunion de chantier',
      'notes vocales',
      'actions',
      'retranscription',
    ],
  },
  {
    id: 'btp-courrier-reserves',
    titre: 'Rédiger le courrier des réserves après une réception de travaux',
    metier: 'btp',
    niveau: 'debutant',
    famille: 'rediger',
    duree: 15,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'copilot',
    situation:
      'Vous travaillez dans un cabinet de maîtrise d’œuvre à Nouméa. Hier a eu lieu la réception, avec réserves, des travaux d’un local commercial à Païta. Vous devez écrire à l’entreprise de menuiseries pour lui transmettre les réserves qui la concernent et lui demander une date d’intervention.',
    objectif:
      'Rédiger un courrier précis et ferme à partir de notes, sans laisser l’IA ajouter de délais ni de références juridiques.',
    etapes: [
      'Collez les notes de réception avec le prompt de départ, en complétant les crochets.',
      'Vérifiez que seules les réserves du lot concerné figurent dans le courrier, et qu’aucune ne manque.',
      'Vérifiez la localisation de chaque réserve.',
      'Repérez toute mention juridique ajoutée par l’IA (délai, garantie, pénalités) et remplacez-la par [à valider] ou supprimez-la.',
      'Faites relire le courrier par le chef de projet avant envoi.',
    ],
    prompt:
      'Tu es assistant dans un cabinet de maîtrise d’œuvre à Nouméa. Rédige un courrier à l’entreprise [nom de l’entreprise] (lot [numéro et intitulé]) pour lui transmettre les réserves émises à la réception du [date] qui concernent son lot uniquement. Pour chaque réserve : numéro, localisation, description. Demande-lui de proposer une date d’intervention avant le [date], en tenant compte des contraintes du client. Ton : courtois et ferme. N’ajoute aucun délai légal, aucune référence juridique et aucune pénalité : si c’est utile, écris [mention à valider par le chef de projet].\n\n<notes_reception>\n[collez les notes de réception]\n</notes_reception>',
    materiau: {
      titre: 'Notes de réception du local commercial (fictives)',
      texte:
        'Réception du 14 octobre, local commercial « Le Comptoir de Païta », avec réserves.\nLot 02 Menuiseries (Alu Concept) : R1 porte d’entrée vitrée qui frotte au sol en fin de course ; R2 vitrage fixe côté parking rayé (environ 15 cm) ; R3 joint silicone manquant à la fenêtre du bureau.\nLot 03 Plâtrerie-peinture (Déco Plus) : R4 reprise de peinture au plafond de la réserve, traces d’eau ; R5 fissure fine sur la cloison des sanitaires.\nLot 05 Électricité (Élec Nord) : R6 prise murale non fixée au comptoir ; R7 deux luminaires de la vitrine ne s’allument pas.\nLot 02 Menuiseries : R8 poignée de la fenêtre de la réserve cassée.\nDemande du client : interventions hors des heures d’ouverture (avant 8 h ou après 17 h 30) ; le magasin ouvre le 2 novembre.',
    },
    variantes: {
      simple: 'Demander seulement la liste des réserves du lot 02, mise en forme.',
      poussee:
        'Demander les trois courriers (lots 02, 03 et 05), puis un tableau de suivi de la levée des réserves.',
    },
    astuces: {
      copilot:
        'Dans Word, partez du modèle de courrier du cabinet et demandez à Copilot d’y insérer les réserves.',
      claude:
        'Après le courrier, demandez à Claude de vérifier que chaque réserve du lot 02 des notes y figure.',
    },
    vigilance:
      'Ce courrier a une portée contractuelle : toute mention juridique (délais, garanties, pénalités) est validée par le chef de projet. Vérifiez les numéros de réserves un par un.',
    formateur: {
      resultat:
        'Un courrier courtois et ferme à Alu Concept, qui reprend les quatre réserves du lot 02 (R1, R2, R3 et R8) avec leur localisation, demande une date d’intervention et rappelle les horaires souhaités par le client, sans mention juridique inventée.',
      criteres: [
        'Les quatre réserves du lot 02 sont présentes, y compris R8, notée plus bas.',
        'Aucune réserve d’un autre lot n’apparaît.',
        'Les horaires d’intervention demandés par le client sont repris.',
        'Aucun délai légal ni aucune pénalité n’est inventé.',
      ],
      pieges: [
        'Oublier R8, notée séparément à la fin des notes.',
        'Laisser l’IA citer une garantie avec un délai précis, sans vérification.',
        'Mélanger les réserves de plusieurs lots dans le même courrier.',
      ],
      competence: 'description',
      technique: 'contexte',
    },
    motsCles: ['réception', 'réserves', 'courrier', 'maîtrise d’œuvre', 'levée des réserves'],
  },
  {
    id: 'btp-quart-heure-securite',
    titre: 'Préparer un quart d’heure sécurité sur le travail en hauteur',
    metier: 'btp',
    niveau: 'debutant',
    famille: 'organiser',
    duree: 15,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Lundi, vous animez le quart d’heure sécurité de l’équipe de charpentiers-couvreurs qui commence la réfection d’une toiture à Bourail. La semaine dernière, un ouvrier a été vu sans harnais sur un toit. Vous voulez une fiche d’animation de 15 minutes et une check-list à afficher dans le camion.',
    objectif:
      'Faire préparer une animation concrète et adaptée à l’équipe, en vérifiant qu’elle reste fidèle aux consignes de l’entreprise.',
    etapes: [
      'Collez le prompt de départ avec les consignes de l’entreprise du matériau.',
      'Vérifiez que la fiche tient en 15 minutes et fait parler l’équipe, au lieu d’être un exposé.',
      'Vérifiez que la check-list reprend les consignes de l’entreprise, sans en inventer de nouvelles présentées comme obligatoires.',
      'Demandez une version de la check-list lisible de loin, pour l’affichage.',
      'Faites valider la fiche par le responsable QHSE avant lundi.',
    ],
    prompt:
      'Tu es responsable sécurité dans une entreprise de bâtiment en Nouvelle-Calédonie. Prépare un quart d’heure sécurité de 15 minutes sur le travail en hauteur, pour une équipe de six charpentiers-couvreurs qui commence une réfection de toiture. Contexte : la semaine dernière, un ouvrier a été vu sans harnais sur un toit. Je veux :\n1. une fiche d’animation minutée (accroche, échanges avec l’équipe, rappel des consignes, engagement) ;\n2. trois questions ouvertes à poser à l’équipe ;\n3. une check-list « avant de monter sur un toit » de dix lignes au maximum.\nAppuie-toi uniquement sur les consignes de l’entreprise ci-dessous. Si tu ajoutes une bonne pratique, présente-la comme une suggestion à valider. Ton : direct, respectueux, sans infantiliser.\n\n<consignes_entreprise>\n[collez les consignes]\n</consignes_entreprise>',
    materiau: {
      titre: 'Consignes de l’entreprise sur le travail en hauteur (fictives)',
      texte:
        '- Harnais obligatoire dès qu’il n’y a pas de protection collective (garde-corps, filet).\n- Vérification visuelle du harnais et de la longe chaque matin ; tout harnais abîmé est retiré et signalé au chef d’équipe.\n- Point d’ancrage validé par le chef d’équipe avant tout accès à la toiture.\n- Jamais seul sur un toit.\n- Échelle attachée, qui dépasse d’au moins un mètre le bord de la toiture.\n- Pas de travail en toiture par vent fort ou sous la pluie : le chef d’équipe décide.\n- Zone balisée au sol sous la zone de travail.\n- Toute situation dangereuse se signale, sans sanction pour celui qui la signale.',
    },
    variantes: {
      simple: 'Demander seulement la check-list de dix lignes.',
      poussee:
        'Ajouter un quiz de cinq questions pour la fin de l’animation, et une version anglaise de la check-list pour les intérimaires, relue par une personne qui parle anglais.',
    },
    astuces: {
      claude: 'Demandez la check-list en fichier Word ou PDF, prête à imprimer et à plastifier.',
      copilot:
        'Avec la licence, Copilot dans PowerPoint transforme la fiche en trois diapositives pour le bungalow de chantier.',
    },
    vigilance:
      'La fiche ne cite aucun texte réglementaire sans vérification par le responsable QHSE : l’IA mélange souvent les règles de métropole et de Nouvelle-Calédonie. Ne nommez pas l’ouvrier concerné : l’objectif est de prévenir, pas de désigner.',
    formateur: {
      resultat:
        'Une fiche minutée sur 15 minutes qui fait parler l’équipe, trois questions ouvertes, une check-list de dix lignes fidèle aux consignes, et les suggestions de l’IA séparées des consignes officielles.',
      criteres: [
        'La fiche tient en 15 minutes et laisse au moins 5 minutes d’échanges.',
        'La check-list reprend les consignes de l’entreprise, sans obligation inventée.',
        'L’ouvrier concerné n’est ni nommé ni montré du doigt.',
      ],
      pieges: [
        'Accepter la citation d’un texte réglementaire de métropole présenté comme applicable.',
        'Obtenir un exposé de 15 minutes sans aucun échange avec l’équipe.',
      ],
      competence: 'description',
      technique: 'contexte',
    },
    motsCles: ['sécurité', 'QHSE', 'travail en hauteur', 'quart d’heure sécurité', 'check-list'],
  },
  {
    id: 'btp-affiche-riverains-canva',
    titre: 'Créer une affiche d’information pour les riverains d’un chantier',
    metier: 'btp',
    niveau: 'debutant',
    famille: 'visuels',
    duree: 20,
    outils: ['canva', 'chatgpt', 'gemini'],
    outilConseille: 'canva',
    situation:
      'Votre entreprise refait la chaussée et les canalisations d’une rue du quartier de Montravel, à Nouméa, pendant six semaines. La commune demande d’informer les riverains : dates, horaires, déviation, contact. Vous préparez une affiche A3 à poser dans la rue et un flyer pour les boîtes aux lettres.',
    objectif:
      'Préparer un message clair avec l’IA, puis le mettre en page dans Canva en vérifiant chaque information pratique.',
    etapes: [
      'Avec ChatGPT ou Gemini, faites rédiger le texte de l’affiche à partir des informations du matériau.',
      'Vérifiez dates, horaires et itinéraire de déviation, un par un.',
      'Dans Canva, demandez à l’IA Canva une affiche A3 « information travaux » lisible, avec un pictogramme de chantier.',
      'Collez votre texte vérifié, puis utilisez l’écriture magique si un bloc déborde.',
      'Imprimez un essai : le titre et les dates se lisent-ils à deux mètres ?',
    ],
    prompt:
      'Tu es chargé de communication dans une entreprise de travaux publics à Nouméa. Rédige le texte d’une affiche A3 qui informe les riverains d’un chantier de voirie. Structure : un titre de six mots au maximum, trois blocs courts (Quoi et quand ; Ce qui change pour vous ; Contact), puis une phrase d’excuse pour la gêne. Phrases courtes, mots simples, pas de jargon. N’utilise que les informations ci-dessous, sans rien ajouter.\n\n<informations>\n[collez les informations du chantier]\n</informations>',
    materiau: {
      titre: 'Informations du chantier (fictives)',
      texte:
        'Chantier : réfection de la chaussée et remplacement des canalisations d’eau, rue des Acacias, Montravel (entre la rue des Lauriers et la rue des Hibiscus)\nDates : du lundi 3 novembre au vendredi 12 décembre\nHoraires de travail : 7 h à 16 h, du lundi au vendredi\nCirculation : rue fermée aux voitures en journée ; accès des riverains le soir et le week-end ; passage piéton maintenu côté pair\nDéviation : par la rue des Lauriers, puis l’avenue des Banians (panneaux sur place)\nEau : deux coupures prévues, dates annoncées 48 h avant par affichage\nBus : arrêt « Acacias » déplacé de 100 m, devant le n° 42\nMaître d’ouvrage : la commune (logo et accord sur le texte à obtenir auprès de ses services)\nEntreprise : Routes et Réseaux du Pacifique, contact chantier 28 00 00, du lundi au vendredi',
    },
    variantes: {
      simple:
        'Partir d’un modèle d’affiche Canva « travaux » et n’utiliser l’IA que pour raccourcir le texte.',
      poussee:
        'Décliner l’affiche en flyer A5 pour les boîtes aux lettres et en publication carrée pour la page Facebook de l’entreprise.',
    },
    astuces: {
      canva:
        'Pour le flyer et la publication, le redimensionnement magique (Pro) adapte le design ; sinon, dupliquez la page et réorganisez les blocs.',
      chatgpt:
        'Demandez trois titres, puis choisissez celui qu’un automobiliste pressé comprend en deux secondes.',
    },
    vigilance:
      'Les dates et la déviation sont validées par le conducteur de travaux et par la commune avant impression. N’utilisez pas le logo d’une collectivité sans son accord.',
    formateur: {
      resultat:
        'Une affiche A3 lisible avec un titre court, les dates (3 novembre au 12 décembre), les horaires, l’accès des riverains, la déviation, l’arrêt de bus déplacé, l’annonce des coupures d’eau 48 h avant et le contact du chantier.',
      criteres: [
        'Toutes les informations pratiques sont exactes et présentes.',
        'L’affiche se lit en moins de 30 secondes.',
        'Aucune information n’est inventée (dates de coupure d’eau, itinéraire).',
        'Le logo de la commune n’est utilisé qu’avec son accord.',
      ],
      pieges: [
        'Laisser l’IA fixer des dates de coupure d’eau.',
        'Garder le texte d’exemple d’un modèle Canva.',
        'Mettre trop de texte : l’affiche devient illisible de loin.',
      ],
      competence: 'diligence',
      technique: 'format',
    },
    motsCles: ['affiche', 'riverains', 'chantier', 'Canva', 'voirie'],
  },
  {
    id: 'btp-comparatif-devis-fournisseurs',
    titre: 'Comparer trois devis de fournisseurs poste par poste',
    metier: 'btp',
    niveau: 'intermediaire',
    famille: 'analyser',
    duree: 30,
    outils: ['chatgpt', 'claude', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Pour une maison individuelle au Mont-Dore, vous avez reçu trois devis de fourniture de menuiseries aluminium. Les totaux sont proches, mais les devis ne détaillent pas les mêmes choses. Le chef d’entreprise veut une comparaison honnête avant de commander.',
    objectif:
      'Faire comparer des devis hétérogènes en plusieurs échanges : remettre à plat, recalculer, repérer les manques, puis préparer les questions aux fournisseurs.',
    etapes: [
      'Donnez les trois devis et demandez un tableau comparatif poste par poste.',
      'Faites recalculer le total de chaque devis à partir de ses lignes, puis vérifiez-en un vous-même dans un tableur.',
      'Demandez ce qui manque ou diffère dans chaque devis : transport, délai, garantie, TGC.',
      'Demandez un total comparable, en faisant écrire les hypothèses retenues pour les postes manquants.',
      'Faites rédiger les questions à envoyer à chaque fournisseur avant toute décision.',
    ],
    prompt:
      'Tu es acheteur dans une entreprise de bâtiment en Nouvelle-Calédonie. Voici trois devis de fourniture de menuiseries aluminium pour le même chantier.\n1. Présente un tableau comparatif poste par poste.\n2. Recalcule le total de chaque devis à partir de ses lignes (quantité × prix unitaire) et signale tout écart avec le total annoncé.\n3. Liste ce qui est inclus ou non dans chaque devis : transport jusqu’au chantier, délai, garantie, TGC.\n4. Ne recommande pas encore de fournisseur : dis seulement quelles informations manquent pour comparer.\n\n<devis>\n[collez les trois devis]\n</devis>',
    materiau: {
      titre: 'Trois devis de menuiseries (fictifs, montants hors taxes)',
      texte:
        'Poste;Quantité;Alu Pacifique PU (XPF);Menuiseries du Sud PU (XPF);Calédo Alu PU (XPF)\nBaie coulissante 2 vantaux 240 × 215;3;186 000;179 500;192 000\nFenêtre 1 vantail 60 × 60 (salle d’eau);2;38 500;41 000;36 000\nFenêtre 2 vantaux 120 × 125;5;72 000;69 800;74 500\nPorte d’entrée aluminium;1;245 000;262 000;229 000\nVolet roulant manuel pour baie;3;64 000;inclus dans la baie;58 500\nMoustiquaire;10;12 500;non proposé;11 000\nTransport jusqu’au chantier;1;inclus;35 000;non précisé\nTotal HT annoncé;;1 557 000;1 266 500;1 499 000\nDélai de livraison;;6 semaines;10 semaines (importation);4 semaines\nGarantie;;10 ans sur les profilés;non précisée;5 ans',
    },
    variantes: {
      simple: 'Demander seulement le tableau comparatif et la vérification des totaux.',
      poussee:
        'Ajouter une grille de notation pondérée (prix, délai, garantie, service après-vente), puis faire jouer un fournisseur par l’IA pour préparer la négociation.',
    },
    astuces: {
      chatgpt:
        'Déposez les devis en PDF ou en CSV : l’analyse de données recalcule les totaux en code, que vous pouvez afficher.',
      copilot:
        'Dans Excel, demandez à Copilot une colonne de total par fournisseur, puis comparez-la aux totaux annoncés.',
      gemini:
        'Dans Google Sheets, « Demander à Gemini » propose la formule du total de chaque devis ; vérifiez-la sur une ligne.',
    },
    vigilance:
      'Les prix des fournisseurs sont confidentiels : ne les collez que dans un outil validé par l’entreprise. Le choix du fournisseur reste celui du chef d’entreprise.',
    formateur: {
      resultat:
        'Un tableau aligné, l’erreur de Calédo Alu repérée (1 535 000 XPF recalculés contre 1 499 000 annoncés : une fenêtre de salle d’eau oubliée), les manques signalés (moustiquaires et garantie chez Menuiseries du Sud, transport chez Calédo Alu, TGC partout) et des questions précises aux fournisseurs.',
      criteres: [
        'Les totaux sont recalculés et l’erreur de Calédo Alu est trouvée.',
        'Le devis le moins cher n’est pas déclaré gagnant sans tenir compte de ce qui lui manque.',
        'Le délai d’importation de 10 semaines est pris en compte.',
        'Les questions aux fournisseurs portent sur les vrais manques.',
      ],
      pieges: [
        'Comparer les totaux annoncés sans les recalculer.',
        'Déclarer Menuiseries du Sud moins cher alors qu’il ne propose pas de moustiquaires.',
        'Laisser l’IA ajouter un taux de TGC de mémoire.',
      ],
      competence: 'discernement',
      technique: 'critique',
    },
    motsCles: ['devis', 'comparatif', 'fournisseurs', 'menuiseries', 'achats'],
  },
  {
    id: 'btp-planning-saison-des-pluies',
    titre: 'Construire un planning de chantier qui tient compte de la saison des pluies',
    metier: 'btp',
    niveau: 'intermediaire',
    famille: 'organiser',
    duree: 30,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Votre entreprise construit une maison individuelle à Païta. Le gros œuvre démarre mi-novembre, en pleine saison des pluies et des cyclones. Le client veut emménager fin janvier. Vous devez proposer un planning réaliste, avec des marges pour les intempéries, et dire franchement si la date est tenable.',
    objectif:
      'Faire construire un planning à partir de durées et de contraintes, le faire critiquer, puis l’ajuster en plusieurs échanges.',
    etapes: [
      'Donnez les tâches, durées et contraintes du matériau, et demandez un planning semaine par semaine.',
      'Vérifiez l’enchaînement : aucune tâche ne commence avant celle dont elle dépend.',
      'Demandez d’ajouter les jours d’intempéries sur les tâches sensibles à la pluie, et de dire si la date du client reste tenable.',
      'Demandez deux scénarios : saison des pluies normale, et saison très pluvieuse avec un épisode cyclonique.',
      'Préparez le message au client, honnête sur les risques, et faites-le valider par le chef d’entreprise.',
    ],
    prompt:
      'Tu es conducteur de travaux dans une entreprise de bâtiment en Nouvelle-Calédonie. Construis le planning d’une maison individuelle à Païta, semaine par semaine, à partir des tâches, durées et contraintes ci-dessous. Présente un tableau : semaine, tâches, corps de métier, dépendances, remarque météo.\nRègles : respecte les dépendances ; indique le chemin critique ; ne réduis aucune durée pour tenir une date. Si la date souhaitée par le client n’est pas tenable, dis-le clairement et explique pourquoi.\n\n<taches_et_contraintes>\n[collez les tâches et les contraintes]\n</taches_et_contraintes>',
    materiau: {
      titre: 'Tâches, durées et contraintes (fictives)',
      texte:
        'Démarrage : lundi 17 novembre. Emménagement souhaité par le client : fin janvier.\nFermeture de l’entreprise : du 22 décembre au 4 janvier.\n\nTâche;Durée (jours ouvrés);Dépend de;Sensible à la pluie\n1 Terrassement et fondations;8;;oui\n2 Dalle sur terre-plein;4;1;oui\n3 Élévation des murs;12;2;oui\n4 Charpente et couverture;8;3;oui\n5 Menuiseries extérieures;3;4;non\n6 Réseaux de plomberie et d’électricité;8;4;non\n7 Plâtrerie et doublages;10;5 et 6;non\n8 Carrelage;7;7;non\n9 Peinture;6;8;non\n10 Raccordements eau et électricité;2;6;oui\n11 Nettoyage et réception;2;9 et 10;non\n\nContraintes :\n- prévoir des jours d’intempéries sur les tâches sensibles à la pluie (le chef d’entreprise compte d’habitude un jour perdu par semaine en saison des pluies) ;\n- le charpentier n’est disponible qu’à partir du 12 janvier ;\n- le raccordement dépend aussi du concessionnaire, sans délai garanti.',
    },
    variantes: {
      simple: 'Planifier seulement le gros œuvre (tâches 1 à 4), avec les jours d’intempéries.',
      poussee:
        'Demander le planning en fichier Excel avec un diagramme de Gantt, puis un tableau des risques (cyclone, charpentier, concessionnaire) avec une parade pour chacun.',
    },
    astuces: {
      claude:
        'Demandez un artefact avec le diagramme de Gantt : une tâche qui commence trop tôt se voit tout de suite.',
      chatgpt:
        'Demandez le planning au format Excel, une ligne par semaine, pour pouvoir le modifier facilement.',
      copilot:
        'Transformez le planning en Copilot Page pour que le chef d’entreprise le commente avant l’envoi au client.',
    },
    vigilance:
      'La durée de la saison des pluies et le nombre de jours perdus sont des hypothèses de l’entreprise, pas des certitudes : l’IA ne doit pas les présenter autrement. Le message au client est validé par le chef d’entreprise.',
    formateur: {
      resultat:
        'Un planning qui respecte les dépendances et la fermeture de fin d’année, place la charpente à partir du 12 janvier et montre qu’une fin de chantier fin janvier est impossible (vers mars sans intempéries, plus tard avec), et un message honnête au client.',
      criteres: [
        'Aucune tâche ne commence avant celle dont elle dépend.',
        'La fermeture de l’entreprise et la disponibilité du charpentier sont respectées.',
        'La conclusion est claire : fin janvier n’est pas tenable.',
        'Les deux scénarios météo sont comparés.',
      ],
      pieges: [
        'Accepter un planning qui « tient » fin janvier parce que l’IA a raccourci des durées sans le dire.',
        'Oublier la fermeture du 22 décembre au 4 janvier.',
        'Promettre une date au client sans marge pour le raccordement.',
      ],
      competence: 'discernement',
      technique: 'iterer',
    },
    motsCles: ['planning', 'saison des pluies', 'intempéries', 'Gantt', 'chemin critique'],
  },
  {
    id: 'btp-metre-descriptif',
    titre: 'Établir un métré à partir d’un descriptif, et le vérifier',
    metier: 'btp',
    niveau: 'intermediaire',
    famille: 'analyser',
    duree: 30,
    outils: ['chatgpt', 'claude', 'gemini', 'copilot'],
    outilConseille: 'chatgpt',
    situation:
      'Un client vous demande un devis pour carreler et peindre sa maison à Dumbéa. Vous avez son descriptif pièce par pièce, avec les dimensions. Avant de chiffrer, vous voulez les surfaces de sol et de murs, ouvertures déduites.',
    objectif:
      'Faire calculer des quantités par l’IA en exigeant le détail des calculs, et repérer ses erreurs de calcul ou d’hypothèse.',
    etapes: [
      'Donnez le descriptif avec le prompt de départ : métré pièce par pièce, calculs détaillés.',
      'Vérifiez à la calculatrice le métré de deux pièces.',
      'Vérifiez les hypothèses : hauteur sous plafond, ouvertures déduites, pièces exclues, dimension manquante.',
      'Demandez d’ajouter une marge de chute sur le carrelage, sur une ligne séparée, avec le pourcentage que vous fixez.',
      'Gardez un tableau final utilisable pour chiffrer, et notez les questions à poser au client.',
    ],
    prompt:
      'Tu es métreur dans une entreprise de bâtiment à Nouméa. À partir du descriptif ci-dessous, établis le métré du carrelage des sols et de la peinture des murs, pièce par pièce, dans un tableau.\nPour chaque pièce, écris le calcul en entier (longueur × largeur ; périmètre × hauteur, moins les ouvertures). Utilise uniquement les dimensions données : si une dimension manque, écris « à mesurer » au lieu de la supposer. Ne compte aucune marge de chute pour l’instant. Termine par les totaux et la liste des hypothèses que tu as faites.\n\n<descriptif>\n[collez le descriptif]\n</descriptif>',
    materiau: {
      titre: 'Descriptif de la maison (fictif)',
      texte:
        'Hauteur sous plafond : 2,50 m partout. Porte intérieure : 0,83 × 2,04 m.\nCarrelage : toutes les pièces sauf le garage. Peinture des murs : toutes les pièces sauf la salle d’eau (faïence) et le garage.\n\nPièce;Longueur (m);Largeur (m);Portes;Fenêtres ou baies\nSéjour-cuisine;7,20;4,80;porte d’entrée 0,90 × 2,15 + 2 portes intérieures;baie 2,40 × 2,15 + fenêtre 1,20 × 1,25\nChambre 1;3,60;3,20;1 porte intérieure;fenêtre 1,20 × 1,25\nChambre 2;3,40;3,00;1 porte intérieure;fenêtre 1,20 × 1,25\nChambre 3;3,40;3,00;1 porte intérieure;fenêtre 1,20 × 1,25\nSalle d’eau;2,40;2,00;1 porte intérieure;fenêtre 0,60 × 0,60\nWC;1,50;0,90;1 porte intérieure;aucune\nCouloir;5,00;1,10;5 portes intérieures donnent sur le couloir;aucune\nGarage;5,50;3,00;porte de garage;aucune\nCellier;2,00;;1 porte intérieure;aucune',
    },
    variantes: {
      simple: 'Faire calculer seulement les surfaces de sol, avec le détail des calculs.',
      poussee:
        'Demander le métré en fichier Excel avec des formules visibles, puis un premier chiffrage à partir de vos prix unitaires.',
    },
    astuces: {
      chatgpt:
        'Demandez le calcul en code avec l’analyse de données : les multiplications sont exactes, il reste à vérifier les hypothèses.',
      claude:
        'Demandez le tableau en fichier Excel avec les formules : chaque calcul se vérifie et une dimension se corrige en un clic.',
      gemini:
        'Collez le descriptif dans Google Sheets et demandez à Gemini les formules de surface ; vérifiez-les sur une pièce.',
    },
    vigilance:
      'Un modèle de langage peut se tromper dans une multiplication ou oublier une ouverture : exigez le détail des calculs et vérifiez-en au moins deux. Le métré fixe le prix du devis.',
    formateur: {
      resultat:
        'Un métré détaillé d’environ 78,1 m² de sol et 169 m² de murs à peindre, hors cellier dont la largeur reste « à mesurer », ouvertures déduites, avec les hypothèses listées (portes déduites des deux côtés du mur, salle d’eau et garage exclus des peintures).',
      criteres: [
        'Les calculs sont détaillés, et les deux pièces vérifiées à la main sont justes.',
        'La largeur manquante du cellier n’est pas inventée.',
        'La salle d’eau est exclue de la peinture et le garage du carrelage.',
        'La marge de chute est sur une ligne séparée, fixée par l’apprenant.',
      ],
      pieges: [
        'Accepter une largeur inventée pour le cellier.',
        'Ne pas voir une erreur de multiplication dans un total.',
        'Compter en peinture les murs de la salle d’eau, pourtant en faïence.',
      ],
      competence: 'discernement',
      technique: 'critique',
    },
    motsCles: ['métré', 'quantités', 'surfaces', 'devis', 'calcul'],
  },
  {
    id: 'btp-photos-rapport-visite',
    titre: 'Rédiger un rapport de visite à partir de photos de chantier',
    metier: 'btp',
    niveau: 'intermediaire',
    famille: 'synthetiser',
    duree: 30,
    outils: ['chatgpt', 'claude', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Vous êtes chargé d’affaires dans un bureau d’études. Vous revenez de la visite de diagnostic d’un immeuble ancien du centre-ville de Nouméa, avant rénovation, avec une dizaine de photos et quelques notes. Le maître d’ouvrage attend un rapport de visite illustré.',
    objectif:
      'Utiliser l’IA pour décrire et organiser des photos, en distinguant ce qu’elle voit vraiment de ce qu’elle suppose.',
    etapes: [
      'Choisissez 4 à 6 photos de bâtiment sans personne identifiable ni adresse lisible (les vôtres, ou des photos libres de droits).',
      'Joignez les photos et les notes du matériau avec le prompt de départ.',
      'Comparez chaque description de l’IA avec ce qui est réellement visible : corrigez ce qui est faux ou supposé.',
      'Demandez le rapport structuré : contexte, constats par zone, photos légendées, points à investiguer.',
      'Supprimez tout diagnostic qui relève d’un expert (structure, amiante) et remplacez-le par « investigation à prévoir ».',
    ],
    prompt:
      'Tu es assistant dans un bureau d’études de Nouméa. Je joins des photos prises lors d’une visite de diagnostic, et mes notes. Pour chaque photo, identifiée par son numéro : décris uniquement ce qui est visible (matériau, désordre apparent, localisation si elle figure dans mes notes), puis propose une légende courte. Sépare clairement « ce que je vois » et « ce qui reste à vérifier ». Ne pose aucun diagnostic de structure, d’humidité ou de matériaux dangereux : écris « investigation à prévoir ».\nEnsuite, propose le plan du rapport de visite : contexte, constats par zone, photos légendées, points à investiguer, documents à demander.\n\n<notes_visite>\n[collez vos notes]\n</notes_visite>',
    materiau: {
      titre: 'Notes de visite (fictives)',
      texte:
        'Immeuble R+3 des années 1960, centre-ville de Nouméa, 8 logements et 2 commerces.\nToiture-terrasse : flaques après la pluie de la veille, relevés d’étanchéité décollés côté nord (photos 1 et 2).\nFaçade est : fissures en escalier sous les fenêtres du 2e étage ; éclats de béton et fers apparents sur deux nez de balcon (photos 3 à 5).\nCage d’escalier : traces d’humidité au pied des murs du rez-de-chaussée, peinture qui cloque (photo 6).\nLocal technique : tableau électrique ancien, câbles non protégés (photo 7).\nSous-sol : flocage au plafond, aspect fibreux, non touché (photo 8).\nÀ demander : plans d’origine, derniers diagnostics, historique des travaux.',
    },
    variantes: {
      simple:
        'Faire légender seulement trois photos, en séparant ce qui est visible de ce qui est supposé.',
      poussee:
        'Monter le rapport complet en fichier Word, puis le faire relire par l’ingénieur structure du bureau d’études avant envoi.',
    },
    astuces: {
      chatgpt:
        'Joignez les photos dans la conversation et faites-les décrire par leur numéro, pour éviter les confusions.',
      gemini:
        'Gemini accepte plusieurs photos à la fois : demandez un tableau photo par photo, puis exportez-le dans Google Docs.',
      claude: 'Demandez le rapport en fichier Word, avec un emplacement réservé pour chaque photo.',
    },
    vigilance:
      'Une IA peut « voir » un désordre qui n’existe pas ou se tromper de matériau. Aucun diagnostic de structure ni de présence d’amiante ne vient de l’IA : il relève d’un professionnel qualifié. Floutez visages, plaques et adresses avant d’envoyer une photo.',
    formateur: {
      resultat:
        'Un rapport structuré, aux légendes fidèles, qui sépare nettement constats visibles et points à vérifier, et liste les investigations à prévoir (balcons, humidité, installation électrique, repérage du flocage) sans diagnostic posé par l’IA.',
      criteres: [
        'Chaque description a été comparée à ce qui est visible sur la photo.',
        'Aucun diagnostic de structure ou d’amiante n’est affirmé.',
        'Les photos ne montrent ni visage ni adresse lisible.',
        'Les documents à demander figurent dans le rapport.',
      ],
      pieges: [
        'Recopier « présence d’amiante » ou « structure saine » écrits par l’IA à partir d’une photo.',
        'Accepter une description qui confond deux photos.',
        'Envoyer des photos où l’on reconnaît des habitants ou des plaques d’immatriculation.',
      ],
      competence: 'discernement',
      technique: 'structurer',
    },
    motsCles: ['photos', 'rapport de visite', 'diagnostic', 'bureau d’études', 'rénovation'],
  },
  {
    id: 'btp-memoire-technique',
    titre: 'Rédiger le mémoire technique d’une réponse à un appel d’offres',
    metier: 'btp',
    niveau: 'avance',
    famille: 'rediger',
    duree: 60,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Votre entreprise répond à l’appel d’offres d’une commune de la province Nord pour un plateau sportif couvert à Koumac. Le mémoire technique compte pour 40 % de la note. Vous avez dix jours et des informations éparses sur l’entreprise.',
    objectif:
      'Enchaîner analyse des critères, plan, rédaction et relecture critique pour produire un mémoire sur mesure, sans aucun engagement invérifiable.',
    etapes: [
      'Créez un Projet (Claude, ChatGPT), un Gem ou un agent, et ajoutez-y l’extrait du règlement de consultation et la fiche de l’entreprise.',
      'Étape 1 : faites extraire les critères et sous-critères avec leur pondération, et vérifiez-les dans le règlement.',
      'Étape 2 : demandez un plan du mémoire qui suit exactement les critères, dans le même ordre.',
      'Étape 3 : faites rédiger une partie à la fois ; tout moyen, délai ou référence doit venir de la fiche, le reste reste entre crochets.',
      'Étape 4 : demandez à l’IA de jouer l’acheteur public qui note le mémoire, critère par critère, et de pointer ses faiblesses.',
      'Étape 5 : corrigez, puis faites relire par le chef d’entreprise : chaque engagement écrit devra être tenu.',
    ],
    prompt:
      'Tu es chargé d’études dans une entreprise de bâtiment de Nouvelle-Calédonie. Nous préparons le mémoire technique d’une réponse à un appel d’offres. Les documents du projet contiennent le règlement de consultation et la fiche de l’entreprise.\n\nÉtape 1 : liste les critères et sous-critères de jugement des offres avec leur pondération, en citant le passage du règlement. Ne rédige rien d’autre pour l’instant.\n\nRègles pour toute la suite :\n- Chaque moyen, effectif, référence ou délai cité doit venir de la fiche de l’entreprise. Sinon, écris [à compléter par l’entreprise].\n- Pas de formules creuses (« entreprise reconnue », « qualité irréprochable ») : des faits vérifiables.\n- Suis l’ordre des critères du règlement.',
    materiau: {
      titre: 'Extrait du règlement de consultation et fiche de l’entreprise (fictifs)',
      texte:
        'RÈGLEMENT DE CONSULTATION (extrait)\nObjet : construction d’un plateau sportif couvert, Koumac. Délai d’exécution maximal : 7 mois.\nJugement des offres : prix 60 % ; valeur technique 40 %, appréciée sur le mémoire technique :\n- méthodologie et organisation du chantier, dont phasage et gestion des intempéries : 15 % ;\n- moyens humains et matériels affectés au chantier : 10 % ;\n- sécurité et protection de l’environnement (déchets, bruit, poussière) : 10 % ;\n- références de chantiers similaires : 5 %.\nLe mémoire ne dépasse pas 15 pages.\n\nFICHE DE L’ENTREPRISE\nBâtir Nord SARL, Koné, 28 salariés dont 2 conducteurs de travaux et 1 animateur sécurité.\nMatériel : 2 mini-pelles, 1 grue mobile de 25 t, banches métalliques, 1 centrale à béton mobile.\nRéférences : préau d’école à Poum (2023, 18 MXPF), halle de marché couverte à Voh (2024, 42 MXPF), vestiaires de stade à Koné (2025, 25 MXPF).\nSécurité : plan de prévention type, quart d’heure sécurité hebdomadaire, aucune certification.\nDéchets : tri sur chantier en 3 bennes, évacuation vers une installation agréée (nom à confirmer).\nCharpente métallique : sous-traitée (entreprise à désigner).',
    },
    variantes: {
      simple: 'S’arrêter à l’étape 2 : l’analyse des critères et le plan du mémoire.',
      poussee:
        'Créer une compétence (Claude) ou un GPT « mémoire technique » avec la fiche de l’entreprise à jour et les mémoires déjà notés, pour les prochains appels d’offres.',
    },
    astuces: {
      claude:
        'Dans un Projet, déposez le règlement et la fiche dans les connaissances : chaque conversation part des mêmes documents.',
      chatgpt:
        'Travaillez dans le canevas pour reprendre une partie à la fois sans perdre le reste du mémoire.',
      copilot:
        'Avec la licence, rédigez directement dans Word avec Copilot, à partir du plan validé.',
    },
    vigilance:
      'Un mémoire technique engage l’entreprise : un moyen ou un délai promis devient une obligation. Ne chargez ni données personnelles des salariés ni prix d’autres marchés.',
    formateur: {
      resultat:
        'Un mémoire qui suit l’ordre et le poids des critères, appuyé sur les faits de la fiche (effectifs, matériel, trois références), avec des crochets là où l’entreprise doit compléter (sous-traitant de charpente, installation de traitement des déchets), et une auto-évaluation critère par critère.',
      criteres: [
        'Les critères et leur pondération sont exacts et vérifiés dans le règlement.',
        'Aucun engagement n’est inventé : les manques sont entre crochets.',
        'La méthodologie traite le phasage et les intempéries, notés à 15 %.',
        'L’auto-évaluation a conduit à au moins une amélioration.',
      ],
      pieges: [
        'Accepter une certification ou un effectif inventés par l’IA pour « muscler » le dossier.',
        'Garder un mémoire générique qui ne suit pas les sous-critères.',
        'Dépasser la limite de 15 pages.',
      ],
      competence: 'delegation',
      technique: 'decomposer',
    },
    motsCles: ['appel d’offres', 'mémoire technique', 'marché public', 'critères', 'rédaction'],
  },
  {
    id: 'btp-veille-appels-offres',
    titre: 'Programmer une veille hebdomadaire des appels d’offres de travaux',
    metier: 'btp',
    niveau: 'avance',
    famille: 'veiller',
    duree: 45,
    outils: ['chatgpt', 'gemini', 'claude'],
    outilConseille: 'chatgpt',
    situation:
      'Votre entreprise de gros œuvre, installée à Païta, rate des appels d’offres faute de temps pour les repérer. Le gérant veut chaque lundi une liste courte des consultations qui correspondent à vos capacités : type de travaux, zone, montant.',
    objectif:
      'Définir des critères de sélection précis, programmer une recherche récurrente et vérifier chaque consultation à la source.',
    etapes: [
      'Rédigez avec l’IA votre profil de veille : types de travaux, communes, montants, exclusions.',
      'Lancez une première recherche avec le prompt de départ et ouvrez chaque avis trouvé à sa source.',
      'Notez les résultats faux (consultation close, hors zone, introuvable) et précisez le prompt en conséquence.',
      'Programmez la recherche chaque lundi : tâche planifiée dans ChatGPT ou Claude, « Programmer des actions » dans Gemini, selon votre offre.',
      'Utilisez la grille du matériau pour décider en dix minutes si l’entreprise répond.',
    ],
    prompt:
      'Tu es chargé de veille pour une entreprise de gros œuvre de Païta (Nouvelle-Calédonie). Recherche les appels d’offres et consultations de travaux publiés ces 7 derniers jours qui correspondent à ce profil :\n- travaux : [types de travaux] ;\n- zone : [communes ou provinces] ;\n- montant estimé : [fourchette] ;\n- exclusions : [ce que vous ne faites pas].\nPour chaque consultation : acheteur, objet, lieu, date limite de remise des offres, montant s’il est publié, lien vers l’avis. Ne garde que les consultations encore ouvertes. N’invente aucune consultation : si tu n’en trouves pas, dis-le. Termine par un tableau trié par date limite.',
    materiau: {
      titre: 'Grille « go ou no go » pour décider de répondre',
      texte:
        'Critère;Question;Oui, non ou à vérifier\nCompétence;Faisons-nous ce type de travaux nous-mêmes, sans sous-traiter l’essentiel ?;\nCapacité;L’équipe et le matériel sont-ils disponibles aux dates prévues ?;\nZone;Le chantier est-il à moins de [nombre] km de Païta, ou peut-on loger l’équipe ?;\nMontant;Le montant est-il dans notre fourchette ?;\nDélai de réponse;Avons-nous le temps de préparer un dossier sérieux avant la date limite ?;\nRéférences;Avons-nous au moins deux références comparables ?;\nRisque météo;Le chantier tombe-t-il en pleine saison des pluies ?;\nAcheteur;Connaissons-nous l’acheteur et ses habitudes de paiement ?;\nDécision;Répondre, ne pas répondre, ou se grouper avec une autre entreprise ?;',
    },
    variantes: {
      simple:
        'Faire une seule recherche web sur les consultations de travaux du mois en province Sud, et vérifier chaque lien.',
      poussee:
        'Faire remplir la grille par l’IA pour chaque consultation, à partir de la fiche de l’entreprise, puis comparer avec votre propre décision.',
    },
    astuces: {
      chatgpt:
        'Une tâche planifiée (payante) relance la recherche chaque lundi ; les résultats arrivent dans une conversation dédiée.',
      gemini:
        'Pour la première recherche, Deep Research rend un rapport sourcé ; « Programmer des actions » relance ensuite la veille.',
      claude:
        'Activez la recherche web et demandez le lien de chaque avis ; les tâches planifiées (payantes) automatisent la relance.',
    },
    vigilance:
      'Une IA peut présenter une consultation close ou inventer une date limite. Seul l’avis officiel fait foi : ouvrez-le avant de mobiliser l’équipe. Les conditions de candidature se lisent dans le dossier de consultation, pas dans le résumé de l’IA.',
    formateur: {
      resultat:
        'Une veille hebdomadaire programmée, avec un profil précis, des résultats vérifiés à la source (consultations closes ou hors zone écartées) et une grille de décision prête à l’emploi.',
      criteres: [
        'Le profil de veille est précis : travaux, zone, montants, exclusions.',
        'Chaque consultation retenue a été ouverte à sa source.',
        'La relance hebdomadaire est configurée ou décrite précisément.',
        'La grille de décision a servi sur au moins une consultation.',
      ],
      pieges: [
        'Préparer une réponse à partir d’une date limite donnée par l’IA, sans vérifier l’avis.',
        'Garder un prompt trop large qui ramène des marchés de métropole.',
        'Conclure qu’il n’y a aucune consultation parce que l’IA n’en trouve pas : toutes les sources ne lui sont pas accessibles.',
      ],
      competence: 'discernement',
      technique: 'sources',
    },
    motsCles: ['veille', 'appels d’offres', 'marchés publics', 'tâche planifiée', 'décision'],
  },
  {
    id: 'btp-assistant-doe',
    titre: 'Créer un assistant pour constituer le DOE de fin de chantier',
    metier: 'btp',
    niveau: 'avance',
    famille: 'automatiser',
    duree: 60,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'À chaque fin de chantier, la constitution du dossier des ouvrages exécutés (DOE) prend des semaines : il manque toujours des fiches techniques, des plans de récolement ou des notices des sous-traitants. Vous voulez un assistant qui fait le point sur les pièces manquantes et prépare les relances.',
    objectif:
      'Concevoir un assistant sur mesure, avec des instructions et un document de référence, qui enchaîne contrôle et rédaction, puis le tester et l’améliorer.',
    etapes: [
      'Créez un Projet (Claude, ChatGPT), un Gem ou un agent Copilot, et ajoutez-y la liste type des pièces du DOE (celle de votre entreprise ou celle du matériau).',
      'Collez le prompt de départ dans les instructions et complétez les crochets.',
      'Testez avec l’état des pièces reçues du matériau : l’assistant doit produire le tableau des manques par lot, puis les relances.',
      'Vérifiez le tableau ligne à ligne et repérez les erreurs (pièce comptée reçue à tort, lot oublié).',
      'Améliorez les instructions, refaites le test, puis écrivez une notice de cinq lignes pour les conducteurs de travaux.',
    ],
    prompt:
      'Tu es l’assistant DOE de [nom de l’entreprise], entreprise de bâtiment à Nouméa. Ton rôle : aider le conducteur de travaux à constituer le dossier des ouvrages exécutés en fin de chantier.\n\nQuand je te donne l’état des pièces reçues d’un chantier :\n1. Compare-le à la liste type des pièces du DOE jointe au projet, lot par lot.\n2. Présente un tableau : lot, entreprise, pièce attendue, statut (reçue, manquante, à vérifier), remarque.\n3. Rédige ensuite un e-mail de relance par entreprise, qui ne liste que ses pièces manquantes ou à vérifier, avec la date limite que je t’indique.\nRègles : ne déclare jamais une pièce « reçue » si l’état ne le dit pas clairement ; une pièce provisoire, incomplète ou non signée est « à vérifier ». N’ajoute aucune exigence réglementaire : si une pièce te semble manquer dans la liste type, propose-la à part.',
    materiau: {
      titre: 'Liste type du DOE et état des pièces reçues (fictifs)',
      texte:
        'LISTE TYPE DES PIÈCES DU DOE (pour chaque lot)\n- plans de récolement à jour\n- fiches techniques des matériaux et équipements posés\n- notices d’utilisation et d’entretien\n- procès-verbaux d’essais, s’il y en a pour le lot\n- certificats de garantie des fabricants\n\nÉTAT DES PIÈCES REÇUES, CHANTIER « RÉSIDENCE LES NIAOULIS », DUMBÉA\nLot;Entreprise;Plans de récolement;Fiches techniques;Notices;PV d’essais;Garanties\nGros œuvre;Batico;reçus;reçues;sans objet;PV béton reçus;sans objet\nÉtanchéité;Toit Sûr NC;manquants;reçues;manquantes;PV d’essai d’eau reçu;garantie reçue mais non signée\nMenuiseries;Alu Concept;reçus;2 fiches sur 5;reçues;sans objet;manquantes\nPlomberie;Hydro Sud;version provisoire;reçues;reçues;PV d’essai de pression manquant;reçues\nÉlectricité;Élec Nord;manquants;manquantes;manquantes;rapport de contrôle annoncé pour la semaine prochaine;manquantes\nPeinture;Déco Plus;sans objet;reçues;reçues;sans objet;sans objet\nAscenseur;Élévation Pacifique;;;;;\n\nDate limite des relances : vendredi 28 novembre.',
    },
    variantes: {
      simple:
        'Sans créer d’assistant, coller la liste type et l’état des pièces dans une conversation, et demander le tableau des manques.',
      poussee:
        'Si l’entreprise l’autorise, relier l’assistant au dossier partagé du chantier (Connecteurs de Claude, par exemple Google Drive) pour qu’il lise lui-même les pièces déposées.',
    },
    astuces: {
      claude:
        'Dans un Projet, la liste type va dans les connaissances ; une compétence peut aussi porter la méthode de contrôle pour tous les chantiers.',
      chatgpt:
        'Un Projet suffit pour vous ; un GPT (création payante) permet de partager l’assistant avec tous les conducteurs de travaux.',
      copilot:
        'Un agent créé avec la liste type comme source reste dans l’environnement Microsoft 365 de l’entreprise.',
      gemini:
        'Créez un Gem avec la liste type en fichier joint et les règles dans ses instructions.',
    },
    vigilance:
      'Les pièces d’un DOE peuvent contenir des données du maître d’ouvrage et des prix : n’ajoutez que le nécessaire, dans un outil validé par l’entreprise. Le DOE remis reste vérifié par le conducteur de travaux.',
    formateur: {
      resultat:
        'Un assistant qui produit un tableau exact des manques (étanchéité, menuiseries, plomberie, électricité), classe « à vérifier » la garantie non signée et les plans provisoires, signale le lot ascenseur sans information, puis rédige une relance par entreprise avec la date du 28 novembre.',
      criteres: [
        'Aucune pièce n’est déclarée reçue à tort.',
        'Le lot ascenseur, vide dans l’état, est signalé.',
        'Chaque relance ne liste que les pièces de l’entreprise concernée.',
        'Les instructions ont été corrigées après le premier test.',
      ],
      pieges: [
        'Accepter « plans reçus » pour la plomberie alors qu’il s’agit d’une version provisoire.',
        'Ne pas voir que le lot ascenseur est oublié.',
        'Laisser l’assistant ajouter des exigences réglementaires non vérifiées.',
      ],
      competence: 'delegation',
      technique: 'instructions',
    },
    motsCles: ['DOE', 'fin de chantier', 'assistant', 'relances', 'sous-traitants'],
  },
  {
    id: 'btp-carnet-dossier-consultation',
    titre: 'Interroger un dossier de consultation avec Gemini Notebook',
    metier: 'btp',
    niveau: 'avance',
    famille: 'synthetiser',
    duree: 45,
    outils: ['notebook', 'claude', 'chatgpt'],
    outilConseille: 'notebook',
    situation:
      'Votre entreprise étudie un appel d’offres pour la réhabilitation d’un collège à Poindimié. Le dossier de consultation compte plus de 300 pages : règlement, CCAP, CCTP par lot, plans, planning. Avant de chiffrer, vous voulez repérer vite les obligations, les pénalités et les points techniques risqués.',
    objectif:
      'Exploiter un corpus volumineux avec un outil qui cite ses sources, et vérifier les réponses importantes dans les documents.',
    etapes: [
      'Créez un carnet dans Gemini Notebook et ajoutez les pièces du dossier comme sources (un dossier public réel, ou un dossier fictif fourni par le formateur).',
      'Posez les questions du matériau une par une avec le prompt de départ, et ouvrez la citation de chaque réponse chiffrée.',
      'Notez les réponses sans citation, ou dont la citation ne dit pas la même chose.',
      'Générez un rapport de synthèse des obligations et des risques, et une carte mentale du dossier pour la réunion de décision.',
      'Préparez les questions à poser à l’acheteur avant la date limite, à partir des contradictions trouvées.',
    ],
    prompt:
      'Réponds uniquement à partir des pièces du dossier de consultation chargées dans ce carnet. Pour chaque réponse, cite la pièce (règlement, CCAP, CCTP…) et l’article. Si l’information n’est pas dans les documents, dis-le. Si deux pièces se contredisent, cite les deux et ne tranche pas.\n\nQuestion : [posez votre question]',
    materiau: {
      titre: 'Questions à poser au dossier de consultation',
      texte:
        '1. Quelles sont la date et l’heure limites de remise des offres, et sous quelle forme ?\n2. Quel est le délai global d’exécution, et y a-t-il des périodes imposées (vacances scolaires, site occupé) ?\n3. Quelles pénalités de retard sont prévues, et sont-elles plafonnées ?\n4. Quelles obligations de sécurité, de gestion des déchets et de limitation des nuisances s’appliquent sur un site occupé par des élèves ?\n5. Quels essais, contrôles ou documents de fin de chantier sont exigés pour notre lot ?\n6. Le CCTP impose-t-il une marque ou un produit précis ? Une équivalence est-elle admise ?\n7. Y a-t-il des contradictions entre le CCTP et les autres pièces ?\n8. Quelles questions faut-il poser à l’acheteur avant la date limite ?',
    },
    variantes: {
      simple:
        'Charger seulement le règlement de consultation et le CCAP, et poser les questions 1 à 3.',
      poussee:
        'Générer un résumé audio du dossier pour l’équipe de chiffrage, puis comparer les réponses du carnet avec une lecture humaine de deux articles clés.',
    },
    astuces: {
      notebook:
        'Cliquez sur chaque citation numérotée pour lire l’article exact : indispensable pour les pénalités et les délais.',
      claude:
        'Sans Gemini Notebook, un Projet Claude avec les pièces du dossier permet le même travail ; exigez l’article cité pour chaque réponse.',
      chatgpt:
        'Dans un Projet ChatGPT, déposez les pièces et ajoutez aux instructions l’obligation de citer la pièce et l’article.',
    },
    vigilance:
      'Le carnet résume, mais le dossier fait foi : la décision de répondre et le chiffrage s’appuient sur une lecture humaine des articles clés. Ne chargez pas de documents internes confidentiels (prix, marges) dans un carnet partagé.',
    formateur: {
      resultat:
        'Des réponses citées, pièce et article à l’appui, pour chaque question ; les chiffres clés (délai, pénalités, date limite) vérifiés dans les documents ; une synthèse des risques et une liste de questions à l’acheteur.',
      criteres: [
        'Chaque réponse chiffrée a été vérifiée en ouvrant sa citation.',
        'Les informations absentes du dossier sont signalées comme telles.',
        'Au moins une contradiction ou une ambiguïté devient une question à l’acheteur.',
        'Aucun document interne confidentiel n’est chargé dans le carnet.',
      ],
      pieges: [
        'Reprendre le montant des pénalités sans lire l’article cité.',
        'Croire que le carnet a lu les plans : il exploite surtout le texte, les plans se vérifient à l’œil.',
        'Confondre les obligations de deux lots différents.',
      ],
      competence: 'discernement',
      technique: 'sources',
    },
    motsCles: [
      'dossier de consultation',
      'Gemini Notebook',
      'CCTP',
      'CCAP',
      'appel d’offres',
      'corpus',
    ],
  },
];
