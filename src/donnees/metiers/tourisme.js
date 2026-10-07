/**
 * Tourisme, hôtellerie et restauration : hôtel, gîte, accueil en tribu, restaurant, agence de
 * voyages, activités (Grande Terre, île des Pins, îles Loyauté).
 * Toutes les personnes, entreprises, adresses et sommes sont fictives.
 */

export const vocabulaire = {
  structure: { g: 'm', s: 'hôtel', p: 'hôtels' },
  client: { g: 'm', s: 'client', p: 'clients' },
  partenaire: { g: 'm', s: 'prestataire d’activités', p: 'prestataires d’activités' },
  documentCourant: { g: 'm', s: 'devis de séjour', p: 'devis de séjour' },
  documentLong: { g: 'm', s: 'livret d’accueil des clients', p: 'livrets d’accueil des clients' },
  reunion: {
    g: 'f',
    s: 'réunion de préparation de la haute saison',
    p: 'réunions de préparation de la haute saison',
  },
  offre: {
    g: 'f',
    s: 'formule week-end à l’île des Pins',
    p: 'formules week-end à l’île des Pins',
  },
  poste: { g: 'm', s: 'réceptionniste', p: 'réceptionnistes' },
  evenement: {
    g: 'f',
    s: 'soirée de réouverture du restaurant',
    p: 'soirées de réouverture du restaurant',
  },
  visuel: { g: 'f', s: 'affiche promotionnelle', p: 'affiches promotionnelles' },
  domaine: 'le tourisme et l’hôtellerie',
  motifReclamation: 'une chambre réservée avec vue sur la mer mais attribuée côté parking',
  donnees: 'le relevé mensuel des nuitées vendues par l’hôtel sur un an',
  colonnes:
    'Mois;Chambres disponibles;Nuitées vendues;Prix moyen (XPF);Chiffre d’affaires hébergement (XPF)',
  indicateur: 'le taux d’occupation mensuel des chambres',
  veille: 'la fréquentation touristique et les avis laissés sur les établissements concurrents',
  sourcesVeille:
    'les publications de l’ISEE et de Nouvelle-Calédonie Tourisme, les sites d’avis en ligne et la presse locale',
  jargon: 'les conditions d’annulation, la demi-pension et le versement d’arrhes',
  procedure: 'l’arrivée d’un client à la réception',
  situationTendue:
    'un client furieux que son transfert depuis l’aéroport de La Tontouta ne soit jamais venu',
  donneesSensibles:
    'les noms, numéros de passeport, coordonnées bancaires et demandes particulières des clients',
  corpus: 'le livret d’accueil, les fiches des activités partenaires et les conditions de vente',
  publicCible: 'les familles calédoniennes qui cherchent un séjour pendant les vacances scolaires',
  etranger: 'un couple de touristes japonais en voyage de noces',
  themeFormation: 'l’accueil des clients et les activités proposées autour de l’hôtel',
  tacheRepetitive: 'les messages de confirmation envoyés avant chaque arrivée',
  planning: 'les équipes de la réception et du ménage pendant la haute saison',
  comparaison: 'deux offres de navette entre l’aéroport et l’hôtel',
};

export const exercices = [
  {
    id: 'tour-avis-en-ligne',
    titre: 'Répondre à deux avis en ligne, en français et en anglais',
    metier: 'tourisme',
    niveau: 'debutant',
    famille: 'rediger',
    duree: 15,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Vous travaillez à la réception d’un hôtel de l’Anse-Vata. Ce matin, deux avis sont arrivés : un avis mitigé en anglais sur TripAdvisor et un avis très négatif en français sur Google. Votre responsable veut une réponse publique à chacun avant midi.',
    objectif:
      'Rédiger des réponses publiques personnalisées, dans la langue de l’avis, qui reconnaissent les problèmes sans rien promettre de non validé.',
    etapes: [
      'Lisez les deux avis et les informations de votre responsable.',
      'Envoyez le prompt de départ pour l’avis en anglais, puis pour l’avis en français.',
      'Vérifiez que chaque réponse cite un point précis de l’avis : une réponse passe-partout se repère tout de suite.',
      'Faites traduire la réponse anglaise en français pour vérifier qu’elle dit bien ce que vous voulez.',
      'Contrôlez qu’aucune réponse ne mentionne le numéro de chambre, les dates du séjour ou un geste non validé.',
    ],
    prompt:
      'Tu es responsable de la relation client d’un hôtel de l’Anse-Vata, à Nouméa. Rédige une réponse publique à l’avis ci-dessous, dans la langue de l’avis.\n- Remercie et cite un point positif précis.\n- Reconnais chaque problème signalé, sans te justifier longuement.\n- Indique ce qui a été fait, uniquement à partir des informations ci-dessous.\n- Invite à revenir, sans promettre de réduction.\n- 100 mots au maximum, ton chaleureux et professionnel, sans emoji.\nNe mentionne ni numéro de chambre, ni dates de séjour, ni nom de salarié.\n\n<avis>\n[collez l’avis ici]\n</avis>\n\n<informations>\n[collez les informations du responsable ici]\n</informations>',
    materiau: {
      titre: 'Deux avis et les informations du responsable',
      texte:
        'AVIS 1 – TripAdvisor, 3 sur 5, en anglais\nGreat location right on the beach and the breakfast was lovely, especially the local fruit. But our room 214 smelled of damp and the air conditioning was very noisy. We asked to change rooms twice and nothing happened. Staff were friendly though.\n\nAVIS 2 – Google, 1 sur 5, en français\nNavette de l’aéroport jamais venue, on a attendu 1 h à La Tontouta avec deux enfants fatigués et payé un taxi 15 000 XPF. À l’accueil, on nous a répondu « ce n’est pas notre faute ». Très déçus pour un hôtel de ce prix.\n\nINFORMATIONS DU RESPONSABLE\n- Chambres du 2e étage : déshumidificateurs installés et climatiseurs révisés la semaine dernière.\n- Le changement de chambre était impossible ce soir-là (hôtel complet) : il aurait fallu l’expliquer.\n- Navette : erreur de planning ; nouvelle procédure de confirmation la veille par SMS.\n- Le remboursement du taxi a été proposé par e-mail au client : ne pas en parler publiquement.',
    },
    variantes: {
      simple: 'Répondre seulement à l’avis en français.',
      poussee:
        'Construire une grille de réponse aux avis pour toute l’équipe (structure, formules, interdits), puis la tester sur trois nouveaux avis.',
    },
    astuces: {
      claude:
        'Demandez deux versions de ton différent pour l’avis négatif, puis combinez la meilleure ouverture et la meilleure conclusion.',
      chatgpt:
        'Dans le canevas, demandez de rendre la réponse « moins défensive » sans réécrire tout le texte.',
    },
    vigilance:
      'Une réponse publique reste en ligne des années : ni numéro de chambre, ni nom de salarié, ni geste commercial. Ne collez pas le nom du client dans l’IA.',
    formateur: {
      resultat:
        'En anglais, une réponse qui cite le petit-déjeuner, reconnaît l’humidité, le bruit et l’absence d’explication, et annonce les travaux. En français, une réponse qui s’excuse sans « ce n’est pas notre faute », annonce la nouvelle procédure de navette et ne parle pas du remboursement.',
      criteres: [
        'Chaque réponse est dans la langue de l’avis et cite un point précis.',
        'Aucune mention du numéro de chambre, des dates ou du remboursement.',
        'L’apprenant a vérifié la réponse anglaise par une traduction en français.',
      ],
      pieges: [
        'Une réponse qui rejette la faute sur le prestataire de navette.',
        'Promettre publiquement une réduction pour le prochain séjour.',
      ],
      competence: 'discernement',
      technique: 'contexte',
    },
    motsCles: ['avis en ligne', 'TripAdvisor', 'Google', 'e-réputation', 'anglais'],
  },
  {
    id: 'tour-descriptif-activite',
    titre: 'Réécrire le descriptif d’une sortie en pirogue',
    metier: 'tourisme',
    niveau: 'debutant',
    famille: 'corriger',
    duree: 15,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Un prestataire de l’île des Pins propose une sortie en pirogue à voile dans la baie d’Upi. Son descriptif, publié sur le site de l’hôtel partenaire, est plein de fautes et ne donne pas envie de réserver. Vous devez le réécrire avant la haute saison.',
    objectif:
      'Faire corriger et rendre attractif un texte sans ajouter d’informations, d’atouts ou de promesses que le prestataire n’a pas donnés.',
    etapes: [
      'Copiez le descriptif du matériau avec le prompt de départ.',
      'Lisez la version proposée et la liste des informations pratiques reprises.',
      'Vérifiez chaque information : horaire, durée, marche, tarifs, ce qui est inclus, conditions.',
      'Surlignez toute phrase qui ajoute un atout non mentionné (tortues, déjeuner…) et demandez de la retirer.',
      'Faites valider la version finale par le prestataire.',
    ],
    prompt:
      'Tu es rédacteur pour un hôtel de l’île des Pins. Réécris le descriptif d’activité ci-dessous pour donner envie de réserver.\n- Corrige toutes les fautes.\n- 120 mots au maximum : une accroche, une description de la sortie, puis les informations pratiques en liste.\n- Ton chaleureux et précis, sans superlatifs.\nN’ajoute aucune information : ni animal à observer, ni repas, ni horaire absent du texte. Termine par la liste des informations pratiques reprises, pour vérification.\n\n<descriptif>\n[collez le descriptif ici]\n</descriptif>',
    materiau: {
      titre: 'Descriptif actuel',
      texte:
        'Sortie en pirogue a voile dans la baie d’Upi avec Jean-Baptiste, piroguier de la tribu. Départ de la plage de Saint-Joseph a 8h, durée environ 1h30 selon le vent. On navigue entre les rochers sculpter par la mer jusqu’au sentier qui méne a la piscine naturelle (marche 45 min a peu prés, prévoir chaussure fermé). Retour en navette à l’hôtel compris. Tarif 4 500 XPF par adulte, 2 000 pour les enfant de 4 a 12 ans. Pas de sortie si mauvais temps, dans ce cas on rembourse ou on décale. Réservation la veille avant 17h a la réception.',
    },
    variantes: {
      simple: 'Corriger seulement les fautes.',
      poussee:
        'Ajouter une version anglaise et une version japonaise, vérifiées chacune par une traduction inverse.',
    },
    astuces: {
      chatgpt:
        'Dans le canevas, demandez des suggestions de modification pour accepter chaque changement un par un.',
      copilot:
        'Dans Word, comparez l’original et la version de Copilot côte à côte avant de valider.',
    },
    vigilance:
      'Une IA « embellit » volontiers : tortues, coucher de soleil, déjeuner offert… Tout atout ajouté devient une promesse faite au client.',
    formateur: {
      resultat:
        'Un descriptif de 120 mots au plus, sans faute, qui garde le départ à 8 h, la durée, la marche de 45 minutes, les chaussures fermées, les tarifs, la navette et la règle en cas de mauvais temps.',
      criteres: [
        'Toutes les informations pratiques sont reprises à l’identique.',
        'Aucun atout n’est ajouté.',
        'Le texte est plus engageant que l’original, sans superlatifs.',
      ],
      pieges: [
        'Une version qui promet des tortues ou un déjeuner.',
        'Perdre la règle de remboursement ou de report en cas de mauvais temps.',
      ],
      competence: 'discernement',
      technique: 'format',
    },
    motsCles: ['descriptif', 'activité', 'île des Pins', 'pirogue', 'relecture'],
  },
  {
    id: 'tour-annulation-meteo',
    titre: 'Annoncer l’annulation d’une excursion pour cause de météo',
    metier: 'tourisme',
    niveau: 'debutant',
    famille: 'rediger',
    duree: 15,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'gemini',
    situation:
      'Vous travaillez dans une agence de voyages de Nouméa. Une dépression tropicale approche : la sortie à l’îlot Amédée de samedi est annulée par le prestataire, et les vols de dimanche vers Ouvéa risquent d’être perturbés. Vous devez prévenir 23 clients par e-mail et par SMS.',
    objectif:
      'Rédiger un message d’annulation clair et rassurant, qui dit ce qui est sûr, ce qui ne l’est pas encore et ce que le client doit faire.',
    etapes: [
      'Lisez les informations du matériau et séparez ce qui est certain de ce qui ne l’est pas.',
      'Envoyez le prompt de départ.',
      'Vérifiez que l’e-mail distingue la sortie annulée (certain) et les vols (incertain).',
      'Contrôlez les options proposées : ce sont exactement celles de l’agence, avec la date limite.',
      'Vérifiez que la version SMS reste exacte malgré sa longueur réduite.',
    ],
    prompt:
      'Tu es conseiller dans une agence de voyages à Nouméa. Rédige un e-mail aux clients concernés par les informations ci-dessous.\n- Un objet clair, puis l’essentiel dans les deux premières lignes.\n- Sépare ce qui est confirmé et ce qui ne l’est pas encore.\n- Donne les options proposées et la façon de répondre.\n- Ton calme et rassurant, vouvoiement, 150 mots au maximum.\nN’ajoute aucune consigne de sécurité ni prévision météo : renvoie vers les sources officielles. N’invente aucune option.\n\n<informations>\n[collez les informations ici]\n</informations>\n\nRédige ensuite une version SMS de 300 caractères au maximum.',
    materiau: {
      titre: 'Informations de la direction (vendredi, 10 h)',
      texte:
        '- Sortie à l’îlot Amédée du samedi : ANNULÉE par le prestataire (mer forte annoncée).\n- Options pour cette sortie : report au samedi suivant ou remboursement intégral, au choix du client, réponse avant mercredi.\n- Vols du dimanche vers Ouvéa : pas annulés à ce stade. La compagnie fera un point samedi à 17 h ; nous rappellerons chaque client concerné samedi soir.\n- Clients concernés : 15 pour l’îlot Amédée, 8 pour Ouvéa.\n- Agence joignable au 26 00 00, ouverte samedi de 8 h à 12 h ; réponse possible par retour d’e-mail.',
    },
    variantes: {
      simple: 'Rédiger seulement le SMS.',
      poussee:
        'Préparer aussi la version anglaise et les deux messages du samedi soir (vols maintenus ou vols annulés).',
    },
    astuces: {
      gemini:
        'Dans Gmail, « Aide-moi à écrire » adapte le message validé à un client particulier, par exemple pour un groupe.',
      copilot:
        'Dans Outlook, partez d’un « Brouillon avec Copilot », puis lancez « Coaching par Copilot » pour vérifier le ton.',
      claude:
        'Demandez à Claude de relire le message comme un client inquiet : que comprend-il, que doit-il faire ?',
    },
    vigilance:
      'Ne laissez pas l’IA donner des prévisions ou des consignes de sécurité : renvoyez vers Météo-France Nouvelle-Calédonie et les autorités. Ne collez pas la liste des clients dans l’IA.',
    formateur: {
      resultat:
        'Un e-mail de 150 mots au plus et un SMS qui annoncent l’annulation confirmée de la sortie avec ses deux options et la date limite, l’incertitude sur les vols avec le rappel prévu samedi soir, et les coordonnées de l’agence.',
      criteres: [
        'Le confirmé et l’incertain sont clairement séparés.',
        'Les options sont exactement celles de la direction, avec la réponse attendue avant mercredi.',
        'Aucune prévision météo ni consigne de sécurité n’est inventée.',
      ],
      pieges: [
        'Annoncer l’annulation des vols d’Ouvéa, qui n’est pas décidée.',
        'Un SMS qui perd l’information essentielle pour tenir dans la longueur.',
      ],
      competence: 'description',
      technique: 'contexte',
    },
    motsCles: ['annulation', 'météo', 'dépression', 'cyclone', 'SMS', 'e-mail'],
  },
  {
    id: 'tour-fiche-accueil-tribu',
    titre: 'Mettre en forme la fiche d’accueil d’un accueil en tribu',
    metier: 'tourisme',
    niveau: 'debutant',
    famille: 'organiser',
    duree: 20,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Une famille de Maré accueille des visiteurs en tribu depuis deux ans. Elle vous a dicté ses informations pratiques pour que vous en fassiez une fiche claire, envoyée avant le séjour et remise aux visiteurs à leur arrivée.',
    objectif:
      'Mettre en forme des informations pratiques sans rien ajouter, et repérer ce que l’IA ne doit pas écrire à la place de la famille.',
    etapes: [
      'Envoyez le prompt de départ avec les notes du matériau.',
      'Vérifiez que chaque information de la fiche vient des notes : horaires, repas, eau, électricité, déplacements.',
      'Supprimez toute explication sur la coutume ou la vie en tribu ajoutée par l’IA : c’est à la famille de la formuler.',
      'Relisez la liste des questions à poser à la famille et complétez-la.',
      'Faites relire la fiche par la famille avant de l’utiliser.',
    ],
    prompt:
      'Tu aides une famille qui accueille des visiteurs en tribu, à Maré, à rédiger sa fiche d’accueil. Mets en forme les notes ci-dessous en une fiche d’une page, avec des rubriques claires : arrivée, hébergement, repas, eau et électricité, déplacements, respect des lieux, contact.\nReprends les mots de la famille autant que possible. N’ajoute aucune information, et en particulier aucune explication sur la coutume ou les usages : si une rubrique est vide, écris « à compléter par la famille ». Termine par la liste des questions à poser à la famille.\n\n<notes>\n[collez les notes ici]\n</notes>',
    materiau: {
      titre: 'Notes dictées par la famille',
      texte:
        'on vient vous chercher à l’aérodrome si vous nous donnez l’heure du vol\ncases et un faré avec lits, moustiquaires et draps fournis, pas les serviettes\ndouches et toilettes dans le bloc sanitaire à côté ; c’est l’eau de pluie, on demande de faire attention, surtout en saison sèche\nélectricité solaire, pas de climatisation, on recharge les téléphones à la case commune\nrepas du soir avec la famille vers 18 h 30, petit-déjeuner à 7 h ; dites-nous à l’avance si allergies ou régime\nle bougna du samedi soir : réserver avant jeudi\nà l’arrivée on présente la coutume à la famille, on vous expliquera comment faire\nne pas aller sur les plages ou dans les grottes sans demander, certains endroits sont tabous\npas de carte bancaire, prévoir des espèces\ntéléphone de Wanessa : 45 00 00',
    },
    variantes: {
      simple: 'Faire seulement la rubrique « Votre arrivée ».',
      poussee:
        'Faire une version anglaise relue par un anglophone, et une mise en page dans Canva avec des photos choisies par la famille.',
    },
    astuces: {
      claude:
        'Demandez la fiche en artefact : la famille peut la relire à l’écran avant l’impression.',
      copilot:
        'Dans Word, Copilot peut mettre la fiche en page dans un modèle simple, prêt à imprimer.',
    },
    vigilance:
      'Les usages coutumiers se transmettent par les personnes qui les vivent : l’IA ne doit ni les expliquer ni les résumer. Ne diffusez pas le numéro de la famille sans son accord.',
    formateur: {
      resultat:
        'Une fiche d’une page fidèle aux notes, qui garde « on vous expliquera comment faire » pour la coutume, avec des rubriques claires et des questions pour la famille (prix, serviettes, réseau téléphonique, horaires d’accueil à l’aérodrome).',
      criteres: [
        'Aucune explication sur la coutume n’a été ajoutée.',
        'Toutes les informations pratiques des notes sont présentes : espèces, eau de pluie, bougna à réserver avant jeudi.',
        'Les informations manquantes donnent lieu à des questions pour la famille.',
      ],
      pieges: [
        'Garder un paragraphe inventé sur « le geste coutumier » ou les usages de Maré.',
        'Transformer « faire attention à l’eau » en règle chiffrée inventée.',
      ],
      competence: 'diligence',
      technique: 'contexte',
    },
    motsCles: ['accueil en tribu', 'Maré', 'fiche d’accueil', 'îles Loyauté', 'respect'],
  },
  {
    id: 'tour-menu-traduit',
    titre: 'Traduire le menu d’un restaurant en anglais et en japonais',
    metier: 'tourisme',
    niveau: 'intermediaire',
    famille: 'corriger',
    duree: 30,
    outils: ['claude', 'chatgpt', 'gemini', 'copilot'],
    outilConseille: 'claude',
    situation:
      'Un restaurant de bord de mer à l’Anse-Vata reçoit de plus en plus de touristes australiens et japonais. Le chef veut son menu en anglais et en japonais pour la haute saison. Personne dans l’équipe ne lit le japonais.',
    objectif:
      'Faire traduire un texte en contrôlant ce qu’on ne peut pas relire soi-même : glossaire, traduction inverse, relecture par une personne qui parle la langue.',
    etapes: [
      'Envoyez le prompt de départ avec le menu du matériau.',
      'Vérifiez le glossaire : les plats locaux (bougna, salade tahitienne, cerf) sont-ils expliqués plutôt que traduits mot à mot ?',
      'Dans une nouvelle conversation, demandez de retraduire la version japonaise en français, sans montrer l’original, puis comparez.',
      'Vérifiez les allergènes et les prix dans chaque langue.',
      'Faites relire la version japonaise par une personne qui lit le japonais avant l’impression.',
    ],
    prompt:
      'Tu es traducteur spécialisé en restauration. Traduis le menu ci-dessous en anglais, puis en japonais, pour des touristes en Nouvelle-Calédonie.\n- Pour les plats locaux, garde le nom d’origine et ajoute une courte explication (par exemple « Bougna : plat traditionnel kanak cuit dans des feuilles de bananier ») plutôt qu’une traduction mot à mot.\n- Garde les prix en XPF et les allergènes, à l’identique.\n- Présente d’abord un glossaire des termes délicats, avec tes choix de traduction.\n- Signale les termes dont tu n’es pas sûr.\n\n<menu>\n[collez le menu ici]\n</menu>',
    materiau: {
      titre: 'Menu du midi',
      texte:
        'ENTRÉES\nSalade tahitienne au thon frais, lait de coco – 1 900 XPF (poisson)\nAccras de crevettes, sauce piquante maison – 1 600 XPF (crustacés, gluten)\n\nPLATS\nBougna de poulet, à commander la veille (igname, patate douce, banane, lait de coco) – 3 200 XPF\nCivet de cerf, riz et légumes du jour – 2 900 XPF\nPoisson du lagon grillé selon arrivage, beurre au citron vert – 3 400 XPF (poisson, lait)\n\nDESSERTS\nTarte coco-letchi – 1 100 XPF (gluten, œufs, lait)\nSalade de fruits de saison – 900 XPF',
    },
    variantes: {
      simple: 'Traduire seulement en anglais.',
      poussee:
        'Préparer aussi les phrases utiles aux serveurs (allergies, cuisson, addition) en anglais et en japonais, avec une aide à la prononciation.',
    },
    astuces: {
      claude:
        'Demandez le menu trilingue en fichier Word grâce à la création de fichiers, prêt à mettre en page.',
      chatgpt:
        'Faites la traduction inverse dans une nouvelle conversation, sans l’original : la comparaison est plus honnête.',
      gemini: 'Ouvrez le menu dans Canvas pour corriger un plat sans tout régénérer.',
    },
    vigilance:
      'Une erreur d’allergène dans une traduction peut avoir des conséquences graves : faites relire par une personne qui lit la langue, et ajoutez « Demandez conseil à notre équipe ».',
    formateur: {
      resultat:
        'Un menu en anglais et en japonais, avec un glossaire, des plats locaux expliqués, des prix et des allergènes identiques, une traduction inverse comparée et une relecture humaine prévue.',
      criteres: [
        'Les prix et les allergènes sont identiques dans les trois langues.',
        'Les plats locaux sont expliqués, pas traduits mot à mot.',
        'La traduction inverse a été faite et les écarts discutés.',
        'Une relecture humaine de la version japonaise est prévue avant l’impression.',
      ],
      pieges: [
        'Un « civet de cerf » devenu un autre gibier, ou un « bougna » traduit par un mot sans rapport.',
        'Imprimer la version japonaise sans relecture humaine.',
      ],
      competence: 'diligence',
      technique: 'critique',
    },
    motsCles: ['traduction', 'menu', 'anglais', 'japonais', 'allergènes', 'restaurant'],
  },
  {
    id: 'tour-planning-haute-saison',
    titre: 'Établir le planning de la réception en haute saison',
    metier: 'tourisme',
    niveau: 'intermediaire',
    famille: 'organiser',
    duree: 30,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'copilot',
    situation:
      'Vous êtes adjoint ou adjointe de direction d’un hôtel de 40 chambres à Bourail. Pour la semaine du 21 au 27 décembre, la réception doit être tenue de 6 h à 22 h, avec un renfort les jours de grosses arrivées. Cinq réceptionnistes ont chacun leurs contraintes.',
    objectif:
      'Faire construire un planning qui respecte des règles précises, vérifier chaque contrainte et le corriger en plusieurs échanges.',
    etapes: [
      'Envoyez le prompt de départ avec les règles et les contraintes du matériau.',
      'Vérifiez le planning jour par jour : chaque créneau est-il couvert, chaque contrainte respectée ?',
      'Recomptez les heures de chaque personne sur la semaine.',
      'Signalez à l’IA chaque erreur trouvée et demandez une version corrigée.',
      'Exportez le planning en tableau et faites-le valider par la direction.',
    ],
    prompt:
      'Tu es adjoint de direction d’un hôtel à Bourail. Construis le planning de la réception du lundi 21 au dimanche 27 décembre 2026, à partir des règles et des contraintes ci-dessous.\nRends un tableau : jour, créneau (matin 6 h - 14 h, soir 14 h - 22 h, renfort 14 h - 19 h), personne. Ajoute le total d’heures de chaque personne sur la semaine.\nSi une contrainte ne peut pas être respectée, dis-le clairement au lieu de l’ignorer.\n\n<regles_et_contraintes>\n[collez le matériau ici]\n</regles_et_contraintes>',
    materiau: {
      titre: 'Règles et contraintes',
      texte:
        'RÈGLES\n- Chaque jour : une personne le matin (6 h - 14 h) et une le soir (14 h - 22 h) ; un renfort (14 h - 19 h) du mardi 22 au jeudi 24, jours de grosses arrivées.\n- 40 heures au maximum par personne sur la semaine.\n- Pas de matin le lendemain d’un soir (repos de nuit trop court).\n- Au moins deux jours de repos par personne sur la semaine.\n\nCONTRAINTES\n- Léa : ne peut pas travailler le soir.\n- Sione : en congés le 24 et le 25.\n- Mathieu : ne parle pas anglais, ne doit pas être seul à la réception le mardi 22 (arrivée d’un groupe australien).\n- Anaïs : temps partiel, 24 heures au maximum.\n- Kenji : préfère le soir, disponible toute la semaine.',
    },
    variantes: {
      simple: 'Planifier seulement trois jours.',
      poussee:
        'Ajouter l’équipe du ménage (quatre personnes, horaires différents) et produire un fichier Excel avec un contrôle automatique des heures et des repos.',
    },
    astuces: {
      copilot:
        'Dans Excel, demandez à Copilot une colonne qui totalise les heures par personne, puis vérifiez la formule.',
      claude:
        'Demandez le planning en fichier Excel grâce à la création de fichiers, avec un onglet de contrôle des contraintes.',
      gemini:
        'Exportez le tableau dans Google Sheets, puis « Demander à Gemini » pour contrôler les totaux d’heures.',
    },
    vigilance:
      'Ne donnez à l’IA que la contrainte utile, pas son motif personnel (santé, situation familiale). Les règles de durée du travail se vérifient auprès de la direction et des textes applicables, pas auprès de l’IA.',
    formateur: {
      resultat:
        'Un planning valable, par exemple : Léa le matin du lundi au vendredi, Kenji le soir du lundi au vendredi, Sione le matin et Mathieu le soir le week-end, Anaïs en renfort du mardi au jeudi (15 h). D’autres solutions conviennent si toutes les règles sont respectées.',
      criteres: [
        'Chaque créneau est couvert et aucune contrainte individuelle n’est violée.',
        'Les totaux d’heures ont été recomptés à la main (Anaïs 24 h au plus).',
        'Personne ne travaille le matin au lendemain d’un soir.',
        'Les erreurs repérées ont été corrigées en au moins un nouvel échange.',
      ],
      pieges: [
        'Mathieu placé seul le matin ou le soir du mardi 22.',
        'Un total d’heures faux, accepté sans recompter.',
        'Sione planifié le 24 ou le 25.',
      ],
      competence: 'discernement',
      technique: 'iterer',
    },
    motsCles: ['planning', 'réception', 'haute saison', 'équipes', 'contraintes'],
  },
  {
    id: 'tour-visuels-formule-sejour',
    titre: 'Créer les visuels d’une formule de séjour dans Canva',
    metier: 'tourisme',
    niveau: 'intermediaire',
    famille: 'visuels',
    duree: 30,
    outils: ['canva', 'chatgpt', 'claude'],
    outilConseille: 'canva',
    situation:
      'Un gîte de Hienghène lance une formule « trois nuits, une randonnée guidée et un repas à la table d’hôtes » pour les vacances de décembre. La gérante veut une publication Facebook, une story Instagram et une affiche A4 pour l’office de tourisme, aux couleurs du gîte.',
    objectif:
      'Préparer les textes avec une IA conversationnelle, puis créer et décliner les visuels dans Canva en plusieurs allers-retours.',
    etapes: [
      'Demandez trois accroches et un texte court avec le prompt de départ, puis choisissez.',
      'Dans Canva, générez trois propositions avec l’IA Canva ou le Design magique, en donnant le texte exact et le style voulu.',
      'Remplacez les images génériques par les photos du gîte fournies par la gérante ; retouchez-en une avec les Calques magiques si besoin.',
      'Déclinez le design en story et en affiche A4 (Redimensionnement magique, Pro, ou à la main).',
      'Vérifiez chaque format : prix, dates, exclusions, numéro, lisibilité sur téléphone.',
    ],
    prompt:
      'Tu es chargé de communication pour un gîte de Hienghène. Propose trois accroches de 8 mots au maximum et un texte de 40 mots au maximum pour annoncer la formule ci-dessous, à destination des familles du Grand Nouméa. Ton chaleureux, sans superlatifs ni clichés exotiques. Reprends exactement le prix et les dates.\n\n<formule>\n[collez la fiche de la formule ici]\n</formule>',
    materiau: {
      titre: 'Fiche de la formule',
      texte:
        'Gîte Les Roches Noires, Hienghène\nFormule « Escapade en famille » : 3 nuits en bungalow, une randonnée guidée d’une demi-journée avec un guide de la commune, un repas du soir à la table d’hôtes.\nDu 19 décembre au 10 janvier, sauf les nuits du 24 et du 31 décembre.\n2 adultes et 2 enfants de moins de 12 ans : 68 000 XPF.\nRéservation : 42 00 00.\nCouleurs du gîte : vert forêt et ocre ; logo fourni.',
    },
    variantes: {
      simple: 'Créer seulement la publication Facebook.',
      poussee:
        'Créer un modèle Canva réutilisable avec le Kit de marque (Pro), et une version anglaise pour les visiteurs australiens.',
    },
    astuces: {
      canva:
        'Avec le Kit de marque (Pro), le logo et les couleurs du gîte sont repris automatiquement dans chaque nouveau visuel.',
      chatgpt:
        'Demandez plusieurs accroches dans la même conversation, puis faites-les classer selon le public visé.',
      claude:
        'Demandez à Claude de critiquer vos trois accroches du point de vue d’une famille de Nouméa.',
    },
    vigilance:
      'N’utilisez aucune photo de personnes (guide, clients, enfants) sans leur accord. Une image générée ne doit pas montrer un paysage que les clients ne trouveront pas sur place.',
    formateur: {
      resultat:
        'Trois visuels cohérents aux couleurs du gîte, avec des photos réelles, le prix exact (68 000 XPF pour 2 adultes et 2 enfants), les dates et les exclusions, lisibles sur téléphone.',
      criteres: [
        'Le prix, les dates, les exclusions et le numéro sont exacts sur les trois formats.',
        'Les images montrent le gîte réel ou sont clairement décoratives.',
        'L’apprenant a fait au moins deux allers-retours pour améliorer le design.',
      ],
      pieges: [
        'Oublier les exclusions du 24 et du 31 décembre sur un des formats.',
        'Garder une image générée de plage de sable blanc qui ne ressemble en rien au lieu.',
      ],
      competence: 'discernement',
      technique: 'iterer',
    },
    motsCles: ['Canva', 'visuels', 'gîte', 'Hienghène', 'formule', 'affiche'],
  },
  {
    id: 'tour-taux-remplissage',
    titre: 'Analyser le taux de remplissage d’un hôtel sur un an',
    metier: 'tourisme',
    niveau: 'intermediaire',
    famille: 'analyser',
    duree: 30,
    outils: ['chatgpt', 'claude', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Vous êtes assistant ou assistante de direction d’un hôtel de 32 chambres sur la côte Ouest. Le propriétaire veut comprendre ses mois creux pour décider d’une politique de prix et de promotions. Vous avez le relevé mensuel de l’année.',
    objectif:
      'Faire calculer des indicateurs hôteliers par l’IA, vérifier les calculs et proposer des pistes appuyées sur les chiffres.',
    etapes: [
      'Copiez le tableau du matériau, ou joignez-le en CSV, avec le prompt de départ.',
      'Vérifiez à la main le taux d’occupation d’un mois et le revenu par chambre disponible d’un autre.',
      'Regardez si l’IA a repéré la donnée impossible du tableau ; sinon, cherchez-la et demandez-lui ce qu’elle en pense, sans la laisser la corriger.',
      'Demandez un graphique du taux d’occupation et du prix moyen par mois.',
      'Faites proposer trois pistes pour les mois creux, en séparant les faits des hypothèses.',
    ],
    prompt:
      'Tu es analyste pour un hôtel de 32 chambres en Nouvelle-Calédonie. Voici le relevé mensuel d’octobre 2025 à septembre 2026 (séparateur : point-virgule).\n\n<tableau>\n[collez le tableau ici]\n</tableau>\n\n1. Calcule pour chaque mois le taux d’occupation (nuitées vendues / chambres disponibles × 100) et le revenu par chambre disponible (chiffre d’affaires hébergement / chambres disponibles).\n2. Classe les mois du plus faible au plus fort taux d’occupation.\n3. Signale toute donnée incohérente, sans la corriger.\n4. Propose trois pistes pour les mois creux, en indiquant les chiffres sur lesquels chacune s’appuie.\nMontre tes calculs.',
    materiau: {
      titre: 'Relevé mensuel de l’hôtel',
      texte:
        'Mois;Chambres disponibles;Nuitées vendues;Prix moyen (XPF);Chiffre d’affaires hébergement (XPF)\nOctobre 2025;992;640;14500;9280000\nNovembre 2025;960;610;14500;8845000\nDécembre 2025;992;860;17000;14620000\nJanvier 2026;992;790;17000;13430000\nFévrier 2026;896;310;13000;4030000\nMars 2026;992;380;13000;4940000\nAvril 2026;960;560;14000;7840000\nMai 2026;992;470;13500;6345000\nJuin 2026;960;430;13500;5805000\nJuillet 2026;992;720;15000;10800000\nAoût 2026;992;690;15000;10350000\nSeptembre 2026;960;1060;14000;14840000',
    },
    variantes: {
      simple: 'Calculer seulement le taux d’occupation et repérer les trois mois les plus faibles.',
      poussee:
        'Simuler l’effet d’une baisse de prix de 15 % en février et en mars selon deux hypothèses de hausse des nuitées, et présenter le résultat au propriétaire.',
    },
    astuces: {
      chatgpt:
        'Avec l’analyse de données, joignez le CSV et demandez le graphique, puis vérifiez un taux à la main.',
      copilot:
        'Dans Excel, Copilot peut ajouter les colonnes de taux et de revenu par chambre : vérifiez les formules.',
      gemini:
        'Dans Google Sheets, « Demander à Gemini » peut expliquer une tendance ou proposer une formule.',
    },
    vigilance:
      'Les chiffres d’un hôtel sont confidentiels : travaillez sur une copie ou des données arrondies, avec un compte professionnel.',
    formateur: {
      resultat:
        'Un tableau juste, de 34,6 % (février) à 86,7 % (décembre) d’occupation, un revenu par chambre disponible de 4 498 à 14 738 XPF, septembre signalé comme impossible et trois pistes appuyées sur les chiffres.',
      criteres: [
        'Deux calculs ont été vérifiés à la main.',
        'Septembre est signalé (1 060 nuitées pour 960 chambres disponibles) et n’est pas « corrigé » par l’IA.',
        'Les pistes portent sur les mois creux identifiés : février, mars, juin, mai.',
      ],
      pieges: [
        'Accepter un taux d’occupation de 110 % sans réagir.',
        'Des pistes toutes faites, sans lien avec les chiffres.',
      ],
      competence: 'discernement',
      technique: 'critique',
    },
    motsCles: ['taux d’occupation', 'remplissage', 'hôtel', 'CSV', 'revenu par chambre'],
  },
  {
    id: 'tour-itineraire-grande-terre',
    titre: 'Construire un itinéraire de cinq jours sur la Grande Terre',
    metier: 'tourisme',
    niveau: 'avance',
    famille: 'veiller',
    duree: 45,
    outils: ['gemini', 'chatgpt', 'claude'],
    outilConseille: 'gemini',
    situation:
      'Une agence de voyages de Nouméa prépare un circuit de cinq jours en voiture de location pour un couple de retraités qui découvre la Nouvelle-Calédonie en mars. Ils veulent voir la côte Ouest et la côte Est, sans rouler plus de trois heures par jour. Vous devez proposer un itinéraire réaliste et vérifié.',
    objectif:
      'Enchaîner recherche, construction et vérification : un itinéraire sourcé, des temps de route contrôlés, des réservations à confirmer et des risques saisonniers anticipés.',
    etapes: [
      'Lancez une recherche approfondie avec le prompt de départ.',
      'Vérifiez chaque temps de trajet avec un outil de cartographie : l’IA sous-estime souvent les routes de montagne, comme la transversale Koné-Tiwaka ou le col des Roussettes.',
      'Ouvrez les sources des hébergements et des activités : sont-ils ouverts en mars, à quelles conditions, sur réservation ?',
      'Demandez les risques liés à la saison (fortes pluies, routes coupées, épisodes cycloniques) et un plan B pour chaque journée.',
      'Faites rédiger le carnet de voyage : programme jour par jour, temps de route, réservations à confirmer, contacts.',
      'Listez tout ce qui doit être confirmé par téléphone avant la vente.',
    ],
    prompt:
      'Tu es conseiller voyage dans une agence de Nouméa. Propose un itinéraire de cinq jours en voiture de location, au départ et au retour de Nouméa, pour un couple de retraités, en mars, sur la Grande Terre : côte Ouest et côte Est.\nContraintes : trois heures de route par jour au maximum, des hébergements calmes (gîte, hôtel, accueil en tribu), une activité douce par jour, 15 000 XPF par nuit au maximum pour l’hébergement.\nPour chaque jour : trajet et temps de route estimé, hébergement possible, activité, et la source de chaque information avec son lien. Indique ce qui doit être réservé à l’avance et ce que tu n’as pas pu vérifier. Signale les risques liés à la saison.',
    variantes: {
      simple: 'Construire seulement les deux premiers jours, sur la côte Ouest.',
      poussee:
        'Préparer une version anglaise pour des clients australiens et comparer deux circuits (Grand Sud ou côte Est) avec leurs avantages et inconvénients.',
    },
    astuces: {
      gemini:
        'Lancez Deep Research, puis exportez le rapport dans Google Docs pour y noter vos vérifications jour par jour.',
      chatgpt:
        'La recherche approfondie, limitée en gratuit, rend un rapport sourcé ; ouvrez chaque lien avant de le reprendre.',
      claude:
        'La Recherche, payante, convient à ce travail en plusieurs étapes ; la recherche web suffit pour vérifier un point précis.',
    },
    vigilance:
      'Mars est une période chaude et pluvieuse, avec des risques de routes coupées : l’itinéraire doit prévoir des solutions de repli. Ne donnez pas à l’IA les noms ni les dates de naissance des clients.',
    formateur: {
      resultat:
        'Un carnet de voyage de cinq jours, avec des temps de route vérifiés (trois heures par jour au plus), des hébergements ouverts en mars et sourcés, un plan B par jour et une liste de réservations à confirmer.',
      criteres: [
        'Chaque temps de trajet a été vérifié avec un outil de cartographie.',
        'Chaque hébergement et chaque activité ont une source ouverte par l’apprenant.',
        'Les risques de la saison et les solutions de repli sont prévus.',
        'Ce qui n’a pas pu être vérifié est clairement signalé.',
      ],
      pieges: [
        'Un trajet Nouméa-Hienghène d’une traite présenté comme faisant « 3 heures ».',
        'Un hébergement fermé ou disparu, trouvé sur une page ancienne.',
        'Une visite en tribu proposée sans contact ni accord préalable.',
      ],
      competence: 'discernement',
      technique: 'sources',
    },
    motsCles: ['itinéraire', 'circuit', 'Grande Terre', 'recherche', 'carnet de voyage'],
  },
  {
    id: 'tour-assistant-reservations',
    titre: 'Créer un assistant qui prépare les réponses aux demandes de réservation',
    metier: 'tourisme',
    niveau: 'avance',
    famille: 'automatiser',
    duree: 60,
    outils: ['chatgpt', 'claude', 'gemini', 'copilot'],
    outilConseille: 'chatgpt',
    situation:
      'La réception d’un hôtel de l’île des Pins reçoit chaque jour une vingtaine de demandes par e-mail, en français, en anglais et parfois en japonais : disponibilités, transferts, activités, régimes alimentaires. Vous créez un assistant qui prépare des brouillons de réponse à partir des tarifs et des conditions de l’hôtel.',
    objectif:
      'Rédiger des instructions permanentes avec des limites claires, joindre les documents de référence et tester l’assistant sur des demandes variées.',
    etapes: [
      'Rassemblez les documents de référence, sans données de clients : grille tarifaire, conditions de réservation et d’annulation, fiche des activités et des transferts.',
      'Créez un Projet (ChatGPT, Claude), un Gem (Gemini) ou un agent (Copilot), et ajoutez-y les documents et les instructions du prompt de départ.',
      'Testez l’assistant avec les quatre demandes du matériau.',
      'Vérifiez chaque brouillon : tarifs exacts, langue du client, aucune disponibilité affirmée, questions posées quand une information manque.',
      'Corrigez les instructions et refaites les tests jusqu’à obtenir des brouillons fiables.',
    ],
    prompt:
      'Tu es l’assistant de la réception de [nom de l’hôtel], à l’île des Pins. Tu prépares des brouillons de réponse aux demandes de réservation ; une réceptionniste les vérifie et les envoie.\n\nRègles :\n- Réponds dans la langue de la demande (français, anglais ou japonais).\n- Utilise uniquement les tarifs et les conditions des documents fournis, et indique à la fin du brouillon, pour la réceptionniste, le document utilisé.\n- Tu ne connais pas les disponibilités : écris toujours « [disponibilité à vérifier dans le logiciel] ». Ne confirme jamais une réservation.\n- S’il manque une information (dates, nombre de personnes, âge des enfants), demande-la poliment.\n- Pour un régime ou une allergie, renvoie vers la cuisine sans rien promettre.\n- 120 mots au maximum, ton chaleureux et précis.',
    materiau: {
      titre: 'Demandes de test',
      texte:
        '1. Bonjour, nous sommes 2 adultes et 2 enfants, nous aimerions venir à Noël, avez-vous un bungalow familial ? Combien pour 4 nuits ?\n2. Hello, we arrive on the ferry on 14 November. Can you pick us up at Kuto wharf? Is the natural pool trip available that day?\n3. 11月20日から3泊、2名で予約したいです。空港送迎はありますか？\n4. Bonjour, ma femme est allergique aux fruits de mer, est-ce que le restaurant peut adapter tous les repas de la demi-pension ?',
    },
    variantes: {
      simple: 'Créer un prompt réutilisable pour un seul type de demande : les transferts.',
      poussee:
        'Ajouter des exemples de bonnes réponses dans chaque langue et faire évaluer l’assistant par la réception sur vingt demandes réelles anonymisées.',
    },
    astuces: {
      chatgpt:
        'Un Projet suffit pour la réception ; un GPT, dont la création est payante, peut être partagé plus largement.',
      claude:
        'Dans un Projet, déposez la grille tarifaire et les conditions dans les fichiers, et les règles dans les instructions.',
      gemini: 'Créez un Gem avec ces règles et joignez la grille tarifaire et les conditions.',
      copilot:
        'Selon la licence, « Créer un agent » permet de proposer l’assistant à toute l’équipe de réception.',
    },
    vigilance:
      'Aucune donnée de client dans les documents de l’assistant. Les brouillons en japonais sont vérifiés par une traduction inverse, et chaque brouillon est relu avant envoi : l’assistant ne voit ni le planning ni les dossiers.',
    formateur: {
      resultat:
        'Des brouillons dans la langue du client, aux tarifs exacts, qui ne confirment aucune disponibilité, demandent l’âge des enfants (demande 1), renvoient l’allergie vers la cuisine (demande 4) et indiquent le document utilisé.',
      criteres: [
        'Les instructions disent clairement ce que l’assistant ne doit pas faire.',
        'Aucun brouillon n’affirme une disponibilité ou une réservation.',
        'L’apprenant a corrigé les instructions après le premier test.',
        'La réponse en japonais a été vérifiée par une traduction inverse.',
      ],
      pieges: [
        'Un brouillon qui affirme « le bungalow est disponible pour Noël ».',
        'Une promesse sur l’allergie (« tous les repas seront adaptés ») que seule la cuisine peut faire.',
      ],
      competence: 'delegation',
      technique: 'instructions',
    },
    motsCles: ['assistant', 'réservations', 'multilingue', 'projet', 'gem', 'réception'],
  },
  {
    id: 'tour-carnet-reception',
    titre: 'Préparer les saisonniers de la réception avec un carnet Gemini Notebook',
    metier: 'tourisme',
    niveau: 'avance',
    famille: 'synthetiser',
    duree: 45,
    outils: ['notebook'],
    outilConseille: 'notebook',
    situation:
      'Un hôtel de Poé, près de Bourail, recrute trois saisonniers pour la haute saison. Les réponses aux questions des clients sont dispersées : livret d’accueil, fiches des activités partenaires, conditions de vente, consignes en cas d’alerte météo. Vous voulez un carnet où les nouveaux trouvent la bonne réponse, et un support pour les former.',
    objectif:
      'Exploiter un corpus de documents : FAQ sourcée, vérification des citations, repérage des manques, quiz et résumé audio pour la formation.',
    etapes: [
      'Rassemblez 5 à 10 documents de l’hôtel, sans données de clients ni de salariés.',
      'Créez un carnet dans Gemini Notebook et ajoutez-les comme sources.',
      'Envoyez le prompt de départ pour générer la FAQ de la réception, puis ouvrez cinq citations au hasard pour vérifier.',
      'Posez les cinq questions du matériau ; notez celles qui restent sans réponse et complétez les documents.',
      'Générez des fiches et un quiz pour former les saisonniers, et un résumé audio à écouter avant leur premier jour.',
      'Partagez le carnet avec l’équipe de la réception.',
    ],
    prompt:
      'À partir uniquement des sources de ce carnet, rédige la FAQ de la réception : les vingt questions que les clients posent le plus souvent, avec une réponse de deux phrases au maximum et la citation de la source. Regroupe-les par thème : arrivée et départ, activités, repas, transports, météo et sécurité. Si une question fréquente n’a pas de réponse dans les sources, place-la dans une liste « Réponse à demander au responsable ».',
    materiau: {
      titre: 'Questions de test à poser au carnet',
      texte:
        '1. Un client demande si la sortie en kayak est maintenue avec un vent de 25 nœuds.\n2. Jusqu’à quelle heure peut-on libérer la chambre le jour du départ ?\n3. Que répond-on à un client qui veut annuler deux jours avant son arrivée ?\n4. Où se trouve le point de rassemblement en cas d’alerte cyclonique ?\n5. Le restaurant propose-t-il un menu végétarien le soir ?',
    },
    variantes: {
      simple: 'Charger trois documents et générer seulement la FAQ.',
      poussee:
        'Générer une carte mentale des activités et des partenaires, puis prévoir une mise à jour mensuelle des sources et vérifier que la FAQ suit.',
    },
    astuces: {
      notebook:
        'Relisez les fiches et le quiz avant de les donner aux saisonniers : une question mal posée apprend une erreur.',
    },
    vigilance:
      'Les consignes de sécurité (alerte météo, évacuation) doivent venir des documents officiels de l’hôtel et être validées par le responsable : vérifiez chaque citation. Aucune donnée de client dans les sources.',
    formateur: {
      resultat:
        'Une FAQ de vingt questions sourcées, une liste de questions sans réponse qui fait compléter les documents, un quiz relu et un carnet partagé avec l’équipe.',
      criteres: [
        'Au moins cinq citations ont été ouvertes et vérifiées.',
        'Les questions sans réponse dans les sources sont signalées, pas comblées.',
        'Les consignes de sécurité reprises sont exactement celles des documents.',
      ],
      pieges: [
        'Croire une réponse sur la météo qui mélange deux documents, par exemple le seuil de vent d’une autre activité.',
        'Charger une liste de réservations « pour que le carnet soit complet ».',
      ],
      competence: 'diligence',
      technique: 'sources',
    },
    motsCles: ['Gemini Notebook', 'FAQ', 'saisonniers', 'formation', 'réception'],
  },
  {
    id: 'tour-avis-plan-action',
    titre: 'Tirer un plan d’action de douze avis sur un restaurant',
    metier: 'tourisme',
    niveau: 'avance',
    famille: 'analyser',
    duree: 45,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Le restaurant d’un hôtel de Koné a reçu des avis inégaux cette année. Le directeur veut savoir quoi améliorer en priorité avant la haute saison. Vous partez d’un échantillon de douze avis récents, en français et en anglais, avec leur note.',
    objectif:
      'Enchaîner classement, comptage, priorisation et plan d’action, en vérifiant que chaque conclusion repose sur les avis.',
    etapes: [
      'Collez les douze avis du matériau avec le prompt de départ : l’IA relève d’abord les sujets, sans conclure.',
      'Vérifiez le tableau : chaque sujet doit être réellement présent dans l’avis.',
      'Demandez le décompte par sujet et la note moyenne des avis qui citent chaque sujet ; vérifiez une moyenne à la main.',
      'Faites proposer un plan d’action de trois priorités, chacune reliée aux avis qui la justifient, avec un indicateur de suivi.',
      'Demandez à l’IA ce que cet échantillon ne permet pas de conclure.',
    ],
    prompt:
      'Tu es consultant en hôtellerie-restauration. Voici douze avis récents sur le restaurant d’un hôtel de Koné, avec leur note sur 5.\n\n<avis>\n[collez les avis ici]\n</avis>\n\nÉtape 1 seulement : pour chaque avis, relève les sujets abordés (accueil, attente, qualité des plats, prix, cadre, propreté, autre) et indique s’ils sont positifs ou négatifs. Rends un tableau : numéro de l’avis, note, sujets positifs, sujets négatifs. Ne tire encore aucune conclusion.',
    materiau: {
      titre: 'Douze avis anonymisés',
      texte:
        '1. (4/5) Très bon poisson, service souriant. Un peu d’attente au dessert.\n2. (2/5) 50 minutes pour avoir nos plats un mardi soir, salle à moitié vide. Dommage, c’était bon.\n3. (5/5) Cadre superbe au bord de la piscine, cerf excellent.\n4. (3/5) Good food but very slow service, we waited an hour.\n5. (2/5) Prix élevés pour des portions petites. Le personnel ne savait pas dire ce qu’il y avait dans les plats.\n6. (4/5) Accueil chaleureux, plats généreux, mais la terrasse manque d’éclairage le soir.\n7. (1/5) Commande oubliée, aucune excuse.\n8. (5/5) Lovely staff, best tuna tartare in the North!\n9. (3/5) Bon rapport qualité-prix le midi, le soir c’est plus cher pour la même chose.\n10. (2/5) Attente interminable, serveuse débordée et seule pour toute la terrasse.\n11. (4/5) Le bougna du dimanche, à réserver absolument.\n12. (3/5) Table pas débarrassée en arrivant, sinon bon.',
    },
    variantes: {
      simple: 'Classer seulement les avis en positifs, mitigés et négatifs.',
      poussee:
        'Appliquer la méthode à cent avis exportés en CSV, puis préparer un message à l’équipe de salle qui présente les priorités sans viser personne.',
    },
    astuces: {
      claude:
        'Demandez le tableau en artefact, puis un graphique des sujets : vous vérifiez chaque ligne.',
      chatgpt:
        'Avec l’analyse de données, un export CSV de nombreux avis se traite de la même façon, une fois la grille validée.',
      copilot:
        'Dans Excel, faites remplir une colonne « sujet » par Copilot, puis vérifiez-la avant tout comptage.',
    },
    vigilance:
      'Des avis peuvent viser un salarié précis (« la serveuse ») : le plan d’action porte sur l’organisation, pas sur des personnes. Ne collez pas les pseudonymes des auteurs.',
    formateur: {
      resultat:
        'Un tableau vérifié, un décompte qui fait ressortir le service et l’attente (cinq avis sur douze, dont trois des quatre plus mauvaises notes), puis les prix du soir et l’information sur les plats, et trois priorités avec leurs indicateurs (temps d’attente, note moyenne, avis qui citent l’attente).',
      criteres: [
        'Chaque sujet du tableau est réellement présent dans l’avis.',
        'Une moyenne a été vérifiée à la main (note moyenne générale : 38 / 12, soit environ 3,2).',
        'Chaque priorité est reliée aux avis qui la justifient.',
        'Les limites de l’échantillon sont dites.',
      ],
      pieges: [
        'Un plan d’action qui vise « la serveuse » au lieu de l’organisation (une seule personne pour la terrasse).',
        'Des sujets inventés par l’IA (« musique trop forte ») absents des avis.',
      ],
      competence: 'discernement',
      technique: 'decomposer',
    },
    motsCles: ['avis clients', 'restaurant', 'plan d’action', 'analyse', 'qualité de service'],
  },
];
