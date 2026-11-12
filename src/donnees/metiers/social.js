/**
 * Social et petite enfance : crèche et halte-garderie, accueil périscolaire et de loisirs, aide à
 * domicile, foyer d’hébergement, accompagnement du handicap, CCAS, association d’insertion.
 * Toutes les personnes, structures, adresses et sommes sont fictives. Aucun exercice ne demande
 * de confier à une IA des données sur une personne accompagnée : on anonymise d’abord, et l’IA
 * n’évalue jamais une situation, ne pose aucun diagnostic et ne décide d’aucune orientation.
 */

export const vocabulaire = {
  structure: { g: 'f', s: 'structure d’accueil', p: 'structures d’accueil' },
  client: { g: 'f', s: 'famille', p: 'familles' },
  partenaire: {
    g: 'm',
    s: 'prestataire de restauration collective',
    p: 'prestataires de restauration collective',
  },
  documentCourant: {
    g: 'm',
    s: 'courrier d’information aux familles',
    p: 'courriers d’information aux familles',
  },
  documentLong: { g: 'm', s: 'projet d’établissement', p: 'projets d’établissement' },
  reunion: { g: 'f', s: 'réunion d’équipe', p: 'réunions d’équipe' },
  offre: {
    g: 'm',
    s: 'accueil de loisirs des grandes vacances',
    p: 'accueils de loisirs des grandes vacances',
  },
  poste: { g: 'm', s: 'animateur périscolaire', p: 'animateurs périscolaires' },
  evenement: {
    g: 'f',
    s: 'matinée d’échanges sur la parentalité',
    p: 'matinées d’échanges sur la parentalité',
  },
  visuel: {
    g: 'f',
    s: 'affiche d’information aux familles',
    p: 'affiches d’information aux familles',
  },
  domaine: 'le social et la petite enfance',
  motifReclamation: 'le montant de sa facture de participation mensuelle',
  donnees: 'le suivi des repas commandés, servis et non consommés, mois par mois',
  colonnes:
    'Mois;Jours d’ouverture;Repas commandés;Repas servis;Repas non consommés;Coût des repas (XPF)',
  indicateur: 'le taux de repas non consommés de chaque mois',
  veille:
    'les pratiques d’éveil et d’accueil du jeune enfant et la formation des professionnels du secteur',
  sourcesVeille:
    'les sites des provinces et du gouvernement de la Nouvelle-Calédonie, les publications des organismes de formation du secteur et la presse calédonienne',
  jargon: 'la différence entre un contrat d’accueil régulier et un accueil occasionnel',
  procedure: 'l’accueil d’une nouvelle famille',
  situationTendue: 'une famille mécontente d’un changement d’horaires annoncé trop tard',
  donneesSensibles:
    'les noms, adresses, dates de naissance, situations familiales et informations de santé des personnes accompagnées',
  corpus:
    'le projet d’établissement, le règlement de fonctionnement et les rapports d’activité de la structure',
  publicCible: 'les parents de jeunes enfants du quartier, dont certains lisent peu le français',
  etranger: 'une famille anglophone installée depuis peu à Nouméa',
  themeFormation: 'les gestes et les règles d’accueil des familles à l’arrivée et au départ',
  tacheRepetitive: 'la commande hebdomadaire des fournitures et des produits d’hygiène',
  planning: 'les horaires de la semaine pour l’équipe de la structure',
  comparaison: 'deux devis de transport pour une sortie',
};

export const exercices = [
  {
    id: 'social-mot-sortie-fermeture',
    titre: 'Rédiger le mot aux familles qui annonce une sortie',
    metier: 'social',
    niveau: 'debutant',
    famille: 'rediger',
    duree: 15,
    outils: ['copilot', 'claude', 'chatgpt', 'gemini'],
    outilConseille: 'copilot',
    situation:
      'L’accueil de loisirs Les Petits Cagous, à Païta, organise une sortie à la ferme pédagogique de Tontouta un mercredi. La directrice vous a laissé ses notes en vrac : le mot doit partir dans les cartables demain, et beaucoup de parents lisent peu le français.',
    objectif:
      'Transformer des notes brutes en un message clair pour les familles, en donnant le public, le ton et le format, sans laisser l’IA changer une date ou un montant.',
    etapes: [
      'Copiez les notes de la directrice dans votre outil d’IA avec le prompt de départ, et complétez les crochets.',
      'Relisez le mot : chaque date, chaque heure et chaque montant correspond-il exactement aux notes ?',
      'Demandez une version encore plus simple, en phrases de dix mots au maximum, pour les parents qui lisent peu le français.',
      'Demandez un SMS de rappel de 160 caractères au plus, à envoyer la veille.',
      'Faites relire le mot par un collègue : comprend-il, sans autre explication, ce qu’il faut rendre et avant quand ?',
    ],
    prompt:
      'Tu es assistant de la directrice d’un accueil de loisirs à Païta. À partir des notes ci-dessous, rédige le mot qui sera distribué aux familles pour annoncer la sortie. Ton chaleureux, vouvoiement, [nombre] mots au maximum, phrases courtes, vocabulaire simple : certains parents lisent peu le français.\n\nPrésente d’abord ce qu’il faut faire (rendre l’autorisation avant telle date, apporter telle chose), puis les informations pratiques. N’ajoute aucune information absente des notes. Si une information utile manque, liste-la à la fin au lieu de l’inventer.\n\n<notes>\n[collez les notes ici]\n</notes>',
    materiau: {
      titre: 'Notes de la directrice (fictives)',
      texte:
        'SORTIE DU MERCREDI 2 DÉCEMBRE\n- ferme pédagogique de Tontouta, pour les enfants de 6 à 11 ans\n- départ 8 h 30 de l’accueil de loisirs en minibus, retour vers 16 h 30\n- pique-nique fourni par la structure (sandwichs, fruits, eau)\n- à prévoir : casquette, crème solaire, chaussures fermées, une tenue de rechange dans un sac\n- participation 1 500 XPF, à remettre avec l’autorisation\n- autorisation de sortie signée à rendre avant le mercredi 25 novembre\n- 24 places seulement, dans l’ordre des retours des autorisations\n- en cas de forte pluie : report au mercredi 9 décembre, on prévient par SMS la veille avant 18 h\n- contact : Sonia, la directrice, 25 00 00, pendant les heures d’ouverture',
    },
    variantes: {
      simple: 'Demander seulement le SMS de rappel, sans le mot complet.',
      poussee:
        'Demander le mot en deux versions (une pour les cartables, une pour l’affichage à l’entrée), puis une traduction en anglais, relue par un collègue qui parle la langue.',
    },
    astuces: {
      copilot:
        'Dans Outlook, partez d’un « Brouillon avec Copilot » pour la version envoyée par e-mail, puis réglez le ton et la longueur.',
      claude:
        'Demandez deux ou trois versions de ton différent, puis combinez la meilleure ouverture et la meilleure conclusion.',
      chatgpt:
        'Ouvrez le texte dans le canevas : vous pouvez raccourcir ou simplifier un seul paragraphe.',
    },
    vigilance:
      'Ne collez jamais la liste des enfants inscrits ni les coordonnées des familles : le mot est général. L’autorisation de sortie suit le modèle de la structure, pas un texte rédigé par l’IA. Vérifiez chaque date, heure et montant avant de photocopier.',
    formateur: {
      resultat:
        'Un mot de moins de [nombre] mots, qui dit clairement quoi rendre avant le mercredi 25 novembre, avec 1 500 XPF, ce qu’il faut apporter, l’horaire (8 h 30 à 16 h 30), le report éventuel au 9 décembre, et un SMS de rappel court.',
      criteres: [
        'Dates, horaires, montant et nombre de places sont identiques aux notes.',
        'La consigne principale (rendre l’autorisation avant le 25 novembre) apparaît dès le début.',
        'Le mot est lisible par un parent qui lit peu le français : phrases courtes, aucun jargon.',
        'Aucune information inventée (assurance, goûter, nom de l’animateur…).',
      ],
      pieges: [
        'Laisser l’IA écrire « inscrivez-vous vite » ou « places garanties » alors que les places sont attribuées dans l’ordre des retours.',
        'Perdre la date de report en cas de pluie, ou la changer.',
        'Joindre à la demande la liste nominative des enfants « pour personnaliser ».',
      ],
      competence: 'description',
      technique: 'format',
    },
    motsCles: [
      'mot aux familles',
      'sortie',
      'accueil de loisirs',
      'autorisation',
      'langage simple',
    ],
  },
  {
    id: 'social-reglement-langage-clair',
    titre: 'Réécrire en langage clair un extrait du règlement de fonctionnement',
    metier: 'social',
    niveau: 'debutant',
    famille: 'corriger',
    duree: 20,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'La halte-garderie Les P’tits Cagous, à Koutio (Dumbéa), veut que les familles comprennent son règlement de fonctionnement avant de signer. Plusieurs parents ont dit qu’ils ne comprenaient pas les articles sur les retards et les absences. La directrice vous demande une version claire, à lui soumettre.',
    objectif:
      'Reformuler un texte administratif sans changer une règle, un horaire ni un montant, et vérifier ce que l’IA a modifié.',
    etapes: [
      'Copiez l’extrait du règlement dans votre outil d’IA avec le prompt de départ.',
      'Comparez les deux versions article par article : chaque horaire, délai et montant est-il resté identique ?',
      'Repérez les mots du texte original que l’IA a remplacés (par exemple « terme échu » ou « tranche commencée ») et vérifiez que le nouveau sens est le même.',
      'Demandez la liste des passages où la reformulation pourrait changer le sens, et tranchez-les vous-même.',
      'Transmettez la version claire à la directrice avec cette liste : c’est elle qui valide.',
    ],
    prompt:
      'Tu es rédacteur en langage clair pour une halte-garderie de Nouvelle-Calédonie. Réécris l’extrait de règlement ci-dessous pour des parents qui lisent peu le français : phrases de 15 mots au maximum, mots courants, une idée par phrase, « vous » pour s’adresser aux familles.\n\nRègles :\n- Garde exactement tous les horaires, délais et montants.\n- N’ajoute aucune règle et n’en supprime aucune.\n- Ne change pas le sens d’une obligation ou d’une sanction.\nPrésente chaque article réécrit, puis la liste des passages où ta reformulation pourrait changer le sens, pour que la directrice les contrôle.\n\n<reglement>\n[collez l’extrait du règlement]\n</reglement>',
    materiau: {
      titre: 'Extrait du règlement de fonctionnement (fictif)',
      texte:
        'Article 4 – Horaires. La structure est ouverte du lundi au vendredi de 6 h 30 à 17 h 30. L’accueil des enfants s’effectue entre 6 h 30 et 9 h 00, sauf accord préalable de la directrice. Les familles s’engagent à reprendre leur enfant au plus tard à l’heure de fermeture.\n\nArticle 5 – Retards. Tout dépassement de l’horaire de fermeture entraîne la facturation d’une majoration de 2 000 XPF par tranche de quinze minutes commencée. Au-delà de trois retards dans le trimestre, la directrice reçoit la famille.\n\nArticle 6 – Absences. Toute absence doit être signalée avant 8 h 30 le jour même, par téléphone ou par message. Les absences non signalées sont facturées. Les absences signalées au moins 48 heures à l’avance ne sont pas facturées.\n\nArticle 7 – Participation financière. La participation des familles est calculée à l’heure, selon le barème affiché dans le hall et remis à l’inscription. Elle est payable à terme échu, avant le 10 du mois suivant, par virement ou en espèces auprès du secrétariat.\n\nArticle 8 – Personnes autorisées. L’enfant n’est remis qu’aux personnes désignées par écrit sur la fiche d’inscription, sur présentation d’une pièce d’identité. Toute modification de cette liste doit être notifiée par écrit à la directrice.',
    },
    variantes: {
      simple: 'Ne réécrire que l’article 6 (les absences), qui pose le plus de questions.',
      poussee:
        'Demander ensuite un tableau « Ce que vous devez faire » en deux colonnes (situation, ce que fait la famille), puis une version en anglais à faire relire par un collègue.',
    },
    astuces: {
      claude:
        'Demandez la liste des modifications après le texte réécrit, pour vérifier que rien d’important n’a changé.',
      chatgpt:
        'Dans le canevas, demandez des suggestions de modification pour voir chaque changement proposé.',
      copilot:
        'Dans Word, collez le règlement et demandez à Copilot de le réécrire en langage clair : vous gardez les deux versions côte à côte.',
    },
    vigilance:
      'Le règlement engage la structure et les familles : l’IA reformule, elle ne change aucune règle. Ce que dit un règlement et ce qu’il a le droit de prévoir se vérifient auprès de la direction ou de l’organisme compétent, pas auprès de l’IA. La version claire n’est diffusée qu’après validation.',
    formateur: {
      resultat:
        'Cinq articles réécrits en phrases courtes, avec exactement les mêmes horaires (6 h 30, 9 h 00, 17 h 30, 8 h 30), le même montant (2 000 XPF par quart d’heure commencé), les mêmes délais (48 heures, le 10 du mois) et une liste des passages à contrôler.',
      criteres: [
        'Tous les chiffres sont identiques à l’original.',
        '« Par tranche de quinze minutes commencée » est devenu « chaque fois que vous dépassez de 15 minutes, même 1 minute » ou équivalent, sans changer le montant.',
        'Aucune règle n’est ajoutée (pas de tolérance, pas de délai de grâce).',
        'L’apprenant a lu la liste des passages sensibles et a tranché au moins un cas.',
      ],
      pieges: [
        'Accepter « 2 000 XPF par quart d’heure de retard » qui oublie que tout quart d’heure commencé est facturé.',
        'Laisser « 48 heures » devenir « deux jours », ce qui ne veut pas dire la même chose.',
        'Diffuser la version simplifiée sans validation de la directrice.',
      ],
      competence: 'discernement',
      technique: 'critique',
    },
    motsCles: ['règlement', 'langage clair', 'crèche', 'famille', 'reformuler'],
  },
  {
    id: 'social-programme-activites-eveil',
    titre: 'Préparer le programme d’activités d’éveil d’une semaine, à valider avec l’équipe',
    metier: 'social',
    niveau: 'debutant',
    famille: 'organiser',
    duree: 20,
    outils: ['gemini', 'claude', 'chatgpt', 'copilot'],
    outilConseille: 'gemini',
    situation:
      'Vous êtes auxiliaire de petite enfance dans une crèche de Dumbéa. La semaine prochaine, la section des 2-3 ans (12 enfants, deux professionnelles) a pour thème « le lagon et ses animaux ». Vous devez proposer un programme à l’équipe lundi matin.',
    objectif:
      'Obtenir un programme concret en donnant le contexte, les contraintes et le format attendu, puis le soumettre au regard de l’équipe plutôt que de l’appliquer tel quel.',
    etapes: [
      'Copiez les contraintes de la section dans votre outil d’IA avec le prompt de départ.',
      'Relisez chaque activité : le matériel existe-t-il vraiment dans la section ? Convient-elle à des enfants de 2 à 3 ans ?',
      'Repérez les activités qui supposent du matériel à acheter, des petits objets ou des aliments, et demandez des alternatives.',
      'Demandez le programme sous forme de tableau (jour, matin, après-midi, matériel, plan B en cas de pluie).',
      'Notez trois questions à poser à l’équipe, par exemple sur la sécurité, la durée et l’adaptation à chaque enfant.',
    ],
    prompt:
      'Tu es auxiliaire de petite enfance expérimentée dans une crèche de Nouvelle-Calédonie. Propose un programme d’activités d’éveil pour une semaine (lundi à vendredi), pour la section décrite ci-dessous, sur le thème [thème]. Présente-le dans un tableau : jour, activité du matin, activité de l’après-midi, matériel nécessaire, plan B en cas de pluie.\n\nRègles : des activités courtes (20 minutes au maximum), adaptées à des enfants de 2 à 3 ans, qui n’utilisent que le matériel disponible. Aucune activité avec des aliments ni de petits objets que l’on peut avaler. Indique à la fin les points que l’équipe doit valider avant la mise en œuvre.\n\n<section>\n[collez la description de la section et ses contraintes]\n</section>',
    materiau: {
      titre: 'La section et ses contraintes (fictives)',
      texte:
        'Section des 2-3 ans, 12 enfants, 2 professionnelles (le jeudi, l’une est remplacée par une collègue qui ne connaît pas la section).\nThème de la semaine : le lagon et ses animaux.\nMatériel disponible : peinture à doigts, pâte à modeler, tapis de motricité, instruments (tambourins, maracas), livres d’images (tortue, poissons, crabe), bacs à eau, rouleaux de papier, ciseaux à bouts ronds pour les adultes.\nExtérieur : petit jardin ombragé, accessible le matin seulement ; sol glissant les jours de pluie.\nHoraires : activités possibles de 9 h à 11 h et de 15 h à 16 h (repas à 11 h 15, sieste de 12 h 30 à 14 h 30).\nBudget de la semaine : 5 000 XPF au maximum pour le matériel supplémentaire.\nConsigne de la responsable : pas d’activité qui utilise des aliments sans validation de la liste des allergies de la structure.\nSouhait de l’équipe : une activité de comptines chaque jour, dans les langues des familles si possible.',
    },
    variantes: {
      simple: 'Ne demander qu’un programme pour deux jours, sans plan B.',
      poussee:
        'Demander ensuite un petit mot pour les familles qui présente la semaine, une liste de courses chiffrée dans les 5 000 XPF, et une version pour la section des 3-4 ans.',
    },
    astuces: {
      gemini:
        'Demandez le programme sous forme de tableau, puis exportez-le dans Google Sheets pour l’afficher dans la salle.',
      claude:
        'Demandez le programme dans un artefact : vous retouchez un jour sans refaire toute la semaine.',
      chatgpt: 'Demandez un tableau, puis téléchargez-le au format Excel pour le partager.',
    },
    vigilance:
      'L’IA propose, l’équipe décide : une activité n’est retenue que si elle convient aux enfants de la section. La sécurité (âge, petits objets, eau, allergies) et les règles d’encadrement se vérifient avec la direction et les documents officiels de la structure. Ne collez jamais d’informations sur un enfant précis.',
    formateur: {
      resultat:
        'Un tableau de cinq jours, avec des activités courtes qui n’utilisent que le matériel listé (peinture à doigts, pâte à modeler, bacs à eau, instruments), une comptine quotidienne, un plan B pluie et la liste des points à valider par l’équipe.',
      criteres: [
        'Les activités respectent les créneaux (9 h à 11 h, 15 h à 16 h) et le thème.',
        'Aucune activité n’utilise d’aliments ni d’objets à avaler, ni de matériel absent de la liste.',
        'Le jeudi, avec une remplaçante qui ne connaît pas la section, les activités proposées sont simples et déjà connues des enfants.',
        'L’apprenant a noté des questions à poser à l’équipe au lieu d’appliquer le programme tel quel.',
      ],
      pieges: [
        'Garder un « parcours de pâtes colorées » ou une activité avec du sable fin, hors consignes.',
        'Programmer le jardin l’après-midi, alors qu’il n’est accessible que le matin.',
        'Dépasser le budget de 5 000 XPF avec du matériel à acheter.',
      ],
      competence: 'delegation',
      technique: 'options',
    },
    motsCles: ['éveil', 'programme', 'crèche', 'activités', 'semaine'],
  },
  {
    id: 'social-affiche-portes-ouvertes-canva',
    titre: 'Créer dans Canva l’affiche d’un atelier parents',
    metier: 'social',
    niveau: 'debutant',
    famille: 'visuels',
    duree: 20,
    outils: ['canva', 'chatgpt', 'claude'],
    outilConseille: 'canva',
    situation:
      'La halte-garderie Les P’tits Cagous, à Koutio (Dumbéa), invite les parents à un atelier de comptines et de lecture partagée. L’affiche sera collée à la crèche, à l’école voisine et à la mairie annexe, et diffusée sur la page Facebook de la structure.',
    objectif:
      'Préparer le texte d’une affiche avec l’IA, puis la créer et la retoucher dans Canva en gardant des informations exactes et un visuel respectueux des enfants.',
    etapes: [
      'Avec ChatGPT ou Claude, faites rédiger le texte de l’affiche à partir de la fiche de l’atelier : un titre court, trois informations clés, les conditions d’inscription.',
      'Dans Canva, décrivez l’affiche à l’IA Canva ou au Design magique : format A4 portrait, ambiance chaleureuse, couleurs de la structure, texte lisible de loin.',
      'Choisissez une proposition, remplacez le texte d’exemple par le vôtre, puis vérifiez la date, l’heure, le lieu et le numéro de téléphone.',
      'Utilisez l’écriture magique pour raccourcir un texte qui déborde.',
      'Déclinez l’affiche en format carré pour Facebook (redimensionnement magique, Pro, ou nouveau design).',
    ],
    prompt:
      'Tu es chargé de communication d’une halte-garderie en Nouvelle-Calédonie. À partir de la fiche ci-dessous, propose le texte d’une affiche pour inviter les parents à l’atelier : un titre de six mots au maximum, trois informations clés, puis les conditions d’inscription et le contact. Phrases très courtes, mots simples, ton chaleureux. N’ajoute aucune information absente de la fiche. Propose trois titres au choix.\n\n<fiche>\n[collez la fiche de l’atelier]\n</fiche>',
    materiau: {
      titre: 'Fiche de l’atelier (fictive)',
      texte:
        'Atelier parents « Parler, chanter, raconter » avec leur enfant de 0 à 3 ans\nDate : samedi 5 décembre, de 9 h à 11 h 30\nLieu : halte-garderie Les P’tits Cagous, Koutio, Dumbéa (plan d’accès remis à l’inscription)\nAnimation : deux professionnelles de la structure\nContenu : comptines, petites histoires, jeux de doigts ; les parents sont invités à chanter dans leur langue\nGratuit, sur inscription avant le mardi 1er décembre : 25 00 00 ou à l’accueil, aux heures d’ouverture\nPlaces limitées à 10 familles\nUn goûter sans arachide est offert à la fin de l’atelier',
    },
    variantes: {
      simple:
        'Partir directement d’un modèle d’affiche Canva et n’utiliser l’IA que pour le texte.',
      poussee:
        'Créer deux affiches (une sobre, une très colorée), les faire commenter par deux collègues et un parent volontaire, puis enregistrer la meilleure comme modèle pour les prochains ateliers.',
    },
    astuces: {
      canva:
        'Si la structure a un kit de marque (Pro), appliquez-le : couleurs, polices et logo se mettent en place en un clic.',
      chatgpt:
        'Demandez trois titres, puis demandez lequel se lit le mieux à trois mètres, et pourquoi.',
    },
    vigilance:
      'Aucune photo d’enfant sur une affiche publique sans autorisation écrite des parents : préférez une illustration. Une image générée par l’IA ne représente pas la structure et ne doit pas être présentée comme une photo de ses locaux. Pas de nom d’enfant ni de famille.',
    formateur: {
      resultat:
        'Une affiche A4 lisible, avec un titre court, la date (samedi 5 décembre), l’horaire (9 h à 11 h 30), le lieu, l’inscription avant le 1er décembre, sans photo d’enfant identifiable, et sa version carrée.',
      criteres: [
        'Date, heure, lieu, limite d’inscription et téléphone sont exacts.',
        'Aucun détail inventé (animateur invité, atelier pour les 4 ans et plus, repas).',
        'L’affiche se lit de loin : peu de mots, bon contraste.',
        'Aucune photo d’enfant reconnaissable ne figure sur l’affiche.',
      ],
      pieges: [
        'Garder le texte d’exemple du modèle Canva, avec une fausse date.',
        'Illustrer avec la photo d’un enfant de la structure, sans autorisation.',
        'Recopier toute la fiche sur l’affiche, au point de la rendre illisible.',
      ],
      competence: 'diligence',
      technique: 'format',
    },
    motsCles: ['affiche', 'Canva', 'atelier parents', 'crèche', 'Facebook'],
  },
  {
    id: 'social-transmissions-synthese-anonyme',
    titre: 'Transformer des transmissions orales en synthèse écrite, après les avoir anonymisées',
    metier: 'social',
    niveau: 'intermediaire',
    famille: 'synthetiser',
    duree: 30,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Dans une crèche de Nouméa, l’équipe de l’après-midi dicte ses transmissions en fin de journée à l’équipe du soir. Vous avez noté ce qui a été dit sur votre téléphone, avec les prénoms des enfants et des détails sur les familles. Vous voulez en tirer une synthèse écrite claire.',
    objectif:
      'Anonymiser un texte avant de le confier à l’IA, obtenir une synthèse fidèle sans interprétation, puis réintroduire les prénoms soi-même.',
    etapes: [
      'Lisez les notes du matériau et soulignez tout ce qui permet de reconnaître un enfant ou une famille : prénoms, numéro de téléphone, date de naissance, lieu de la famille, prénom de l’auxiliaire.',
      'Remplacez chaque prénom d’enfant par un code (E1, E2…) et gardez le tableau de correspondance sur papier, jamais dans l’outil d’IA. Retirez le numéro de téléphone, le mois de naissance et le lieu de la famille.',
      'Collez uniquement le texte anonymisé dans votre outil d’IA avec le prompt de départ.',
      'Relisez la synthèse : chaque ligne figure-t-elle dans les notes ? L’IA a-t-elle ajouté une interprétation (« semble anxieux »), un jugement ou une conclusion ?',
      'Réintroduisez les prénoms vous-même, dans le document de la structure, à partir de votre tableau de correspondance.',
    ],
    prompt:
      'Tu es auxiliaire de petite enfance dans une crèche de Nouvelle-Calédonie. À partir des notes anonymisées ci-dessous (les enfants sont désignés par des codes E1, E2…), rédige une synthèse des transmissions de la journée, organisée en quatre parties : accueil et humeur, repas et sieste, activités, informations pratiques pour l’équipe et pour les familles.\n\nRègles : reprends uniquement ce que disent les notes, avec les mêmes mots quand c’est possible. N’interprète rien, ne pose aucun diagnostic et ne porte aucun jugement sur un enfant ou sur une famille. Si une information est incomplète, écris « non précisé ». Termine par la liste des actions à faire, avec qui et pour quand.\n\n<notes>\n[collez les notes anonymisées]\n</notes>',
    materiau: {
      titre: 'Transmissions du jeudi, section des Moyens (prénoms fictifs, à anonymiser)',
      texte:
        'Transmissions du jeudi, section des Moyens, notes dictées par Marie-Ange (auxiliaire) en fin de journée.\n- Théo a pleuré à l’arrivée, sa maman est restée dix minutes, il s’est calmé avec le livre des animaux. A bien mangé à midi, sieste d’une heure quinze.\n- Léa a refusé le poisson, a mangé le riz et les légumes. Sieste courte, quarante minutes, réveil en pleurs. Sa maman vient la chercher plus tôt demain, à 15 h.\n- Noa, né en mars, dit « encore » et « à moi », très content à la peinture. Son papa appelle ce soir au 90 00 00 pour changer l’heure d’arrivée de lundi.\n- Manu et Kaï se sont disputés pour le camion vert, on a proposé un tour de rôle, ça s’est réglé. À garder en tête le matin.\n- Inès a oublié son doudou, endormissement difficile. Prévenir sa maman de le rapporter lundi.\n- Sacha n’a pas dormi, est resté calme dans le coin lecture. Sa grand-mère, qui vient de Lifou, le récupère vendredi.\n- Pour toute l’équipe : il reste six couches taille 5 dans le placard, à commander. Le jardin est fermé demain matin (tonte).\n- Réunion d’équipe lundi à 8 h 15 dans la salle de repos.',
    },
    variantes: {
      simple:
        'Ne demander que la liste des actions à faire (qui, quoi, pour quand), sans la synthèse.',
      poussee:
        'Faire produire deux versions : une synthèse pour l’équipe du soir, une version générale pour le cahier de liaison des familles, sans aucune information sur les autres enfants.',
    },
    astuces: {
      claude:
        'Demandez la synthèse dans un artefact, puis faites-la retoucher partie par partie sans tout régénérer.',
      chatgpt:
        'Ouvrez la synthèse dans le canevas : vous pouvez demander de raccourcir une seule partie.',
      copilot:
        'Collez le texte anonymisé dans Copilot Chat : c’est vous qui contrôlez ce qui est confié à l’outil.',
    },
    vigilance:
      'Aucun prénom, numéro de téléphone, date de naissance ou lieu de famille ne doit être collé dans l’outil d’IA, même pour « gagner du temps ». Un code peut encore permettre de reconnaître quelqu’un si le contexte est précis : retirez tout détail inutile. L’IA résume, elle ne juge pas un enfant, une famille ni une équipe. Avant tout usage réel, vérifiez que la structure autorise l’usage d’un outil d’IA pour ses écrits. La synthèse finale est rangée dans le système de la structure.',
    formateur: {
      resultat:
        'Une synthèse en quatre parties, sans prénom ni numéro de téléphone, qui reprend fidèlement les notes (sieste de E1 d’une heure quinze, de E2 de quarante minutes, couches à commander, jardin fermé, réunion lundi 8 h 15) et une liste d’actions avec responsables.',
      criteres: [
        'Le texte confié à l’IA ne contient aucun prénom, aucun numéro, aucun mois de naissance ni aucun lieu de famille.',
        'La synthèse ne contient aucune interprétation (« anxieux », « difficultés de sommeil »), seulement les faits des notes.',
        'Les informations pratiques (couches, jardin, réunion, retour du doudou) apparaissent dans la bonne partie.',
        'Les prénoms ont été réintroduits par l’apprenant, hors de l’outil d’IA.',
      ],
      pieges: [
        'Coller les notes brutes « parce qu’il n’y a que des prénoms ».',
        'Laisser passer « Manu et Kaï ont des conflits répétés », que les notes ne disent pas.',
        'Oublier de retirer le numéro de téléphone du papa ou la mention de Lifou.',
        'Compléter une information manquante (« non précisé ») par une valeur plausible.',
      ],
      competence: 'diligence',
      technique: 'structurer',
    },
    motsCles: ['transmissions', 'anonymisation', 'synthèse', 'crèche', 'données personnelles'],
  },
  {
    id: 'social-planning-aides-domicile',
    titre: 'Établir le planning d’une équipe d’aides à domicile avec trajets et absence',
    metier: 'social',
    niveau: 'intermediaire',
    famille: 'organiser',
    duree: 30,
    outils: ['chatgpt', 'claude', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Vous êtes responsable de secteur dans un service d’aide à domicile du Grand Nouméa. Trois aides à domicile couvrent huit personnes accompagnées, réparties entre Dumbéa, Païta et le Mont-Dore. Jocelyne sera en formation jeudi : il faut quand même que toutes les interventions soient assurées.',
    objectif:
      'Construire un planning sous contraintes en plusieurs échanges, vérifier chaque règle, et garder les décisions humaines (qui intervient chez qui) entre les mains du responsable.',
    etapes: [
      'Collez les données du matériau dans votre outil d’IA et demandez un planning de la semaine, jour par jour, avec les heures de début et de fin et les trajets.',
      'Vérifiez chaque règle : personne à deux endroits en même temps, créneaux respectés, secteurs de chaque aide, trajets de la bonne durée.',
      'Signalez à l’IA chaque erreur trouvée, puis demandez une version corrigée avec la liste des règles respectées.',
      'Vérifiez à la main la journée de jeudi : qui remplace Jocelyne, et le planning tient-il ?',
      'Demandez le planning au format tableau par aide, à remettre à chacune pour confirmation.',
    ],
    prompt:
      'Tu es assistant d’une responsable de secteur dans un service d’aide à domicile à Nouméa. Propose un planning de la semaine (lundi à vendredi) à partir des données ci-dessous. Présente un tableau par jour et par aide : heure de début, heure de fin, personne accompagnée (désignée par sa lettre), secteur, et le temps de trajet depuis l’intervention précédente.\n\nRègles : toutes les interventions sont assurées dans leur créneau ; une aide ne peut pas être à deux endroits en même temps ; elle n’intervient que dans ses secteurs et ses horaires ; les trajets entre deux interventions comptent. Si une règle ne peut pas être respectée, dis-le au lieu de la contourner. Termine par la liste des règles vérifiées.\n\n<donnees>\n[collez l’équipe, les trajets et les interventions]\n</donnees>',
    materiau: {
      titre: 'Équipe, trajets et interventions (fictifs, personnes désignées par une lettre)',
      texte:
        'ÉQUIPE\nMélanie : Dumbéa et Païta, du lundi au vendredi, de 7 h à 15 h\nJocelyne : Mont-Dore et Dumbéa, du lundi au vendredi, de 7 h à 15 h, absente jeudi (formation)\nPatrice : les trois secteurs, du lundi au vendredi, de 14 h 30 à 19 h\n\nTRAJETS (en minutes)\nDumbéa–Païta : 20 ; Dumbéa–Mont-Dore : 30 ; Païta–Mont-Dore : 50 ; deux interventions dans le même secteur : 5\n\nINTERVENTIONS\nPersonne;Secteur;Jours;Durée;Créneau à respecter\nA;Dumbéa;lundi au vendredi;1 h;7 h à 9 h\nB;Dumbéa;lundi, mercredi, vendredi;1 h 30;9 h à 12 h\nC;Païta;lundi au vendredi;45 min;11 h 30 à 13 h 30\nD;Païta;mardi, jeudi;2 h;8 h à 12 h\nE;Mont-Dore;lundi, mercredi, vendredi;1 h;7 h à 9 h\nF;Mont-Dore;mardi, jeudi;1 h 30;13 h à 17 h\nG;Dumbéa;lundi au vendredi;45 min;17 h à 19 h\nH;Païta;lundi, mercredi, vendredi;1 h;15 h à 17 h',
    },
    variantes: {
      simple: 'Ne planifier que lundi et jeudi, les deux journées les plus contraintes.',
      poussee:
        'Ajouter une contrainte (Mélanie est absente mardi) et demander à l’IA ce qui devient impossible, les arbitrages possibles et ce qu’il faut demander au responsable.',
    },
    astuces: {
      chatgpt: 'Demandez un tableau, puis téléchargez-le au format Excel pour le partager.',
      claude:
        'Demandez le planning sous forme de fichier Excel (création de fichiers), prêt à partager.',
      copilot:
        'Transformez la réponse en Copilot Page : les aides et le responsable peuvent la commenter.',
    },
    vigilance:
      'Dans la réalité, les personnes accompagnées ne sont jamais désignées par leur nom, leur adresse ni leur situation de santé dans l’outil : seulement un code interne que l’IA ne sait pas relier à une personne. Les règles de temps de travail, de repos et de déplacement se vérifient auprès de la direction ou de la convention applicable. Le planning final est décidé et validé par le responsable.',
    formateur: {
      resultat:
        'Un planning complet des 30 heures d’intervention de la semaine : les trois aides sans chevauchement, des trajets respectés, et jeudi la visite F assurée par Patrice (par exemple de 14 h 30 à 16 h), puisque Jocelyne est absente.',
      criteres: [
        'Chaque intervention est assurée dans son créneau, le bon jour, par une aide qui travaille ce secteur ce jour-là.',
        'Aucune aide n’est à deux endroits à la fois ; les trajets sont respectés (par exemple Mont-Dore vers Dumbéa : 30 minutes).',
        'La journée de jeudi est vérifiée à la main : F est confiée à Patrice.',
        'L’apprenant n’a pas laissé l’IA ajouter une intervention ou changer un créneau.',
      ],
      pieges: [
        'Confier E (Mont-Dore, 7 h à 9 h) et A (Dumbéa, 7 h à 9 h) à la même aide.',
        'Oublier l’absence de Jocelyne le jeudi, ou la remplacer par Mélanie, qui ne couvre pas le Mont-Dore.',
        'Ignorer le trajet Païta–Mont-Dore de 50 minutes.',
      ],
      competence: 'delegation',
      technique: 'structurer',
    },
    motsCles: ['planning', 'aide à domicile', 'tournées', 'trajets', 'absence'],
  },
  {
    id: 'social-compte-rendu-synthese-pluridisciplinaire',
    titre: 'Rédiger le compte rendu d’une réunion de synthèse sans rien interpréter',
    metier: 'social',
    niveau: 'intermediaire',
    famille: 'rediger',
    duree: 30,
    outils: ['copilot', 'claude', 'chatgpt', 'gemini'],
    outilConseille: 'copilot',
    situation:
      'Vous êtes secrétaire dans un foyer d’hébergement de Koné. L’équipe a tenu sa réunion de synthèse sur l’accompagnement d’un résident. Vous avez vos notes, et la directrice veut un compte rendu clair, qui distingue ce qui a été dit, ce qui a été décidé et ce qui reste à faire.',
    objectif:
      'Rédiger un compte rendu factuel à partir de notes anonymisées, en attribuant chaque avis à sa fonction et en gardant les décisions aux professionnels.',
    etapes: [
      'Anonymisez les notes du matériau : remplacez « R. » par « la personne accompagnée », « son frère » par « un proche », et retirez le nom de la commune du foyer.',
      'Collez les notes anonymisées dans votre outil d’IA avec le prompt de départ.',
      'Vérifiez que chaque avis est attribué à sa fonction (« selon la monitrice… ») et qu’aucune hypothèse n’est devenue un fait.',
      'Vérifiez les décisions, les actions (qui, quoi, pour quand) et les dates, une à une, dans les notes.',
      'Faites relire le compte rendu aux participants : c’est la réunion qui décide de ce que dit l’écrit, pas l’IA.',
    ],
    prompt:
      'Tu es secrétaire d’un foyer d’hébergement. Rédige le compte rendu de la réunion de synthèse décrite par les notes ci-dessous (la personne accompagnée n’est pas nommée). Structure : participants (par fonction), points abordés, décisions prises, actions à mener (qui, quoi, pour quand), points restés ouverts, prochaine réunion.\n\nRègles strictes : reprends uniquement ce que disent les notes. Attribue chaque avis à sa fonction (« selon l’éducateur… »). N’interprète rien, ne conclus rien, ne pose aucun diagnostic et n’évalue pas la situation. Si une date, un responsable ou une décision manque, écris « non précisé ». Style neutre, phrases courtes.\n\n<notes>\n[collez les notes anonymisées]\n</notes>',
    materiau: {
      titre: 'Notes de la réunion de synthèse (fictives, à anonymiser avant usage)',
      texte:
        'Réunion de synthèse du jeudi 5 novembre, 14 h à 15 h 30, foyer d’hébergement de Koné. Présents : la directrice, l’éducateur référent, la monitrice-éducatrice, la maîtresse de maison, l’assistante sociale. Excusé : le veilleur de nuit.\n\nPoint 1 – Atelier cuisine. L’éducateur dit que R. y participe le mardi depuis septembre et qu’il aime beaucoup. La monitrice le trouve parfois plus silencieux le mardi soir. La maîtresse de maison se demande si l’atelier n’est pas trop long, mais n’a pas de fait précis. Décision : on garde l’atelier jusqu’à fin novembre ; la monitrice note l’heure du coucher chaque mardi.\n\nPoint 2 – Demande de R. R. a demandé lui-même à l’éducateur, le 20 octobre, à déjeuner chez son frère un dimanche par mois. La directrice veut prévenir la famille et voir la question du transport. L’éducateur appelle son frère avant le 15 novembre. Transport : la directrice regarde si le minibus du foyer est disponible, sans date précisée. Pas de décision sur le transport.\n\nPoint 3 – Stage de jardinage cet été chez un partenaire. Pas de réponse du partenaire depuis deux semaines. L’assistante sociale le relance vendredi.\n\nPoint 4 – Prochaine réunion de synthèse : jeudi 3 décembre à 14 h.\n\nRemarque de l’éducateur hors sujet : le planning des congés de décembre est à revoir en réunion d’équipe.',
    },
    variantes: {
      simple: 'Ne demander que le tableau des décisions et des actions.',
      poussee:
        'Demander ensuite une version courte pour les familles ou la personne concernée, en langage clair, qui ne reprend que ce qui la concerne et ce qui a été décidé avec elle.',
    },
    astuces: {
      copilot:
        'Collez les notes anonymisées dans Copilot Chat. N’activez pas le « Récapitulatif de réunion (Teams) » sur une réunion où l’on parle d’une personne accompagnée sans l’accord de la direction.',
      claude:
        'Demandez, pour chaque décision, la phrase des notes dont elle vient : la vérification devient rapide.',
      chatgpt:
        'Ouvrez le compte rendu dans le canevas pour retoucher un passage sans tout régénérer.',
    },
    vigilance:
      'Même avec une initiale, des détails (commune, lien de parenté, dates précises) peuvent suffire à reconnaître une personne : retirez-les avant de confier les notes à un outil d’IA. L’IA ne résume pas la situation de la personne, ne l’évalue pas et ne propose aucune décision. Ce que l’on peut écrire et partager d’une réunion de synthèse, et l’usage même d’un outil d’IA pour le faire, se vérifient auprès de la direction. Le compte rendu final est rangé dans le système de la structure.',
    formateur: {
      resultat:
        'Un compte rendu factuel : l’atelier maintenu jusqu’à fin novembre, la monitrice qui note l’heure du coucher, l’éducateur qui appelle un proche avant le 15 novembre, le transport sans décision, l’assistante sociale qui relance vendredi, la prochaine réunion le jeudi 3 décembre à 14 h, et les avis attribués à leur auteur.',
      criteres: [
        'Chaque avis est attribué à une fonction et reste un avis (« se demande », « le trouve parfois »).',
        'Les décisions et les actions correspondent exactement aux notes : qui, quoi, pour quand.',
        'Le transport est signalé comme non décidé, sans date.',
        'Aucune interprétation ni conclusion sur la situation de la personne.',
        'Les notes confiées à l’IA étaient anonymisées.',
      ],
      pieges: [
        'Écrire « la personne est fatiguée par l’atelier », qui transforme une hypothèse en fait.',
        'Transformer « la directrice regarde si le minibus est disponible » en « le transport est assuré ».',
        'Laisser passer le prénom ou la commune dans le texte rédigé par l’IA.',
        'Inclure la remarque sur les congés de décembre, hors sujet pour cette personne.',
      ],
      competence: 'discernement',
      technique: 'sources',
    },
    motsCles: ['compte rendu', 'réunion de synthèse', 'foyer', 'anonymisation', 'actions'],
  },
  {
    id: 'social-analyse-presences-trimestre',
    titre: 'Analyser les présences d’un accueil sur un trimestre',
    metier: 'social',
    niveau: 'intermediaire',
    famille: 'analyser',
    duree: 30,
    outils: ['chatgpt', 'claude', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Vous êtes directrice d’une halte-garderie à Dumbéa. Pour son dialogue annuel avec la commune, vous voulez montrer comment la fréquentation a évolué sur le dernier trimestre. Vous avez extrait le tableau des douze dernières semaines : aucune donnée sur un enfant, seulement des totaux par semaine.',
    objectif:
      'Faire calculer et commenter un tableau par l’IA, repérer une donnée anormale et vérifier les calculs avant de présenter des chiffres à un financeur.',
    etapes: [
      'Déposez ou collez le tableau avec le prompt de départ.',
      'Vérifiez à la calculatrice le taux d’occupation de deux semaines (heures de présence divisées par capacité).',
      'Demandez à l’IA si une ligne lui paraît anormale, puis décidez vous-même quoi en faire.',
      'Demandez le taux d’occupation moyen du trimestre et l’évolution entre le début et la fin, en refaisant le calcul de la moyenne à la main.',
      'Rédigez vous-même la phrase d’interprétation pour la commune : l’IA donne les chiffres, vous donnez le sens.',
    ],
    prompt:
      'Tu es analyste pour une halte-garderie de Nouvelle-Calédonie. Voici les présences des douze dernières semaines (données fictives, agrégées). Capacité : nombre d’heures d’accueil possibles dans la semaine.\n\n1. Calcule le taux d’occupation de chaque semaine (heures de présence ÷ capacité) et présente-le dans un tableau.\n2. Calcule le taux d’occupation moyen du trimestre (total des présences ÷ total des capacités).\n3. Indique l’évolution entre les trois premières et les trois dernières semaines.\n4. Signale toute valeur qui te semble anormale au lieu de la corriger.\nMontre tes calculs.\n\n<tableau>\n[collez le tableau]\n</tableau>',
    materiau: {
      titre: 'Présences sur douze semaines (fictives, agrégées, sans aucun nom)',
      texte:
        'Semaine;Jours d’ouverture;Capacité (heures);Heures de présence;Heures d’absence\nS1;5;1 200;840;168\nS2;5;1 200;888;150\nS3;4;960;744;96\nS4;5;1 200;912;180\nS5;5;1 200;960;132\nS6;5;1 200;1 020;120\nS7;5;1 200;1 640;126\nS8;5;1 200;972;144\nS9;5;1 200;1 008;120\nS10;3;720;576;72\nS11;5;1 200;1 056;110\nS12;5;1 200;1 080;96\n\nNotes : la structure était fermée un jour en S3 (jour férié) et deux jours en S10 (journées pédagogiques).',
    },
    variantes: {
      simple:
        'Ne calculer que le taux d’occupation de chaque semaine, sans la moyenne ni l’évolution.',
      poussee:
        'Demander un graphique du taux d’occupation par semaine, puis un paragraphe de 80 mots pour le rapport à la commune, relu et corrigé ligne à ligne.',
    },
    astuces: {
      chatgpt:
        'Déposez le tableau en CSV : l’analyse de données calcule en code, que vous pouvez afficher pour vérifier.',
      claude:
        'Déposez le fichier CSV : Claude calcule, trace un graphique et peut rendre un fichier Excel.',
      copilot:
        'Mettez les données sous forme de tableau Excel avant de les confier à Copilot : il les lit beaucoup mieux.',
    },
    vigilance:
      'Ne confiez à l’IA que des totaux agrégés : pas de liste d’enfants ni de familles, même codée. Une donnée aberrante est signalée, pas corrigée : une valeur « plausible » inventée par l’IA fausserait le dossier remis à la commune.',
    formateur: {
      resultat:
        'Un tableau des douze taux, la semaine S7 signalée comme anormale (1 640 heures de présence pour 1 200 heures de capacité, soit 136,7 %), un taux moyen d’environ 80,6 % sur les onze autres semaines, et une hausse nette entre le début (S1 à S3 : 70 % à 77,5 %) et la fin (S10 à S12 : 80 % à 90 %).',
      criteres: [
        'L’apprenant a vérifié au moins deux taux à la main.',
        'La semaine S7 est repérée comme impossible (présences supérieures à la capacité) et traitée de façon explicite : écartée ou à vérifier à la source.',
        'Le taux moyen est calculé sur les totaux, pas comme moyenne des taux.',
        'Les semaines à capacité réduite (S3 et S10) sont bien prises en compte.',
      ],
      pieges: [
        'Laisser S7 gonfler le taux moyen (85,5 % au lieu d’environ 80,6 %).',
        'Faire la moyenne simple des douze taux hebdomadaires au lieu de diviser les totaux.',
        'Attribuer la hausse à une cause (« grâce aux nouveaux ateliers ») que les données ne montrent pas.',
      ],
      competence: 'discernement',
      technique: 'critique',
    },
    motsCles: ['présences', 'taux d’occupation', 'trimestre', 'halte-garderie', 'tableau'],
  },
  {
    id: 'social-dossier-financement-notebook',
    titre: 'Préparer le dossier d’une demande de financement avec Gemini Notebook',
    metier: 'social',
    niveau: 'avance',
    famille: 'synthetiser',
    duree: 60,
    outils: ['notebook', 'claude', 'chatgpt', 'gemini'],
    outilConseille: 'notebook',
    situation:
      'L’association Maison des familles de la Baie, à Rivière-Salée, veut déposer une demande de financement pour un jardin partagé et douze ateliers cuisine pour les familles du quartier. Vous disposez du texte de l’appel à projets et de la note de présentation du projet. Le dépôt est avant le 15 décembre.',
    objectif:
      'Utiliser un carnet de sources pour confronter un projet aux critères d’un appel, repérer ce qui manque et préparer le dossier sans jamais inventer un critère, un partenaire ou un chiffre.',
    etapes: [
      'Créez un carnet dans Gemini Notebook et ajoutez deux sources : le texte de l’appel à projets et la note de présentation du projet (matériau).',
      'Demandez les critères de sélection et leurs points, avec la citation de la source de chacun. Vérifiez que le total fait 20.',
      'Demandez un tableau de correspondance : pour chaque critère, ce que le projet apporte, avec la citation, ou « non précisé » s’il manque.',
      'Vérifiez le budget : total, dépenses éligibles, financement maximal possible. Refaites les calculs à la main.',
      'Rédigez ou faites rédiger la partie « présentation du projet », en n’utilisant que les informations de la note, puis listez ce qu’il faut compléter avant le 15 décembre.',
      'Faites relire le dossier par la direction : elle décide de déposer ou non, et vérifie les conditions sur le texte officiel de l’appel.',
    ],
    prompt:
      'À partir des deux sources du carnet (l’appel à projets et la note de présentation du projet), réponds uniquement avec ce que disent ces sources.\n\n1. Liste les critères de sélection de l’appel, avec leurs points.\n2. Pour chaque critère, indique ce que le projet apporte, avec la citation de la source, ou écris « non précisé » si la note ne dit rien.\n3. Liste les dépenses du budget qui pourraient ne pas être éligibles selon l’appel, sans conclure à ma place.\n4. Liste les pièces à fournir et la date limite.\nN’invente aucun critère, aucun partenaire, aucun chiffre. Si une information manque, dis-le.',
    materiau: {
      titre: 'Appel à projets et note de présentation (fictifs)',
      texte:
        'APPEL À PROJETS « FAMILLES ET QUARTIERS » (fictif)\nObjet : soutenir des actions collectives de proximité pour les familles.\nPorteurs : associations dont le siège est en Nouvelle-Calédonie.\nCritères de sélection (sur 20) : utilité pour les habitants du quartier (6 points) ; participation des familles à la conception et à l’animation (5 points) ; partenariats locaux avec la commune, une école ou une autre association (4 points) ; budget réaliste et cofinancement (3 points) ; évaluation prévue (2 points).\nFinancement : jusqu’à 70 % du budget éligible, dans la limite de 2 500 000 XPF. Le reste est à la charge du porteur.\nDépenses non éligibles : achat de véhicule ; dépenses engagées avant le dépôt du dossier.\nPièces : présentation du projet (3 pages au plus), budget détaillé, statuts, dernier rapport d’activité.\nDépôt avant le 15 décembre ; réponse en février.\n\nNOTE DE PRÉSENTATION DU PROJET (association Maison des familles de la Baie)\nProjet : un jardin partagé dans la cour de l’association et douze ateliers cuisine, de mars à août.\nPublic : une trentaine de familles du quartier, suivies par l’association ou orientées par l’école voisine ; l’école se dit intéressée, aucune convention n’est signée.\nParticipation des familles : deux réunions de préparation avec les parents en janvier ; l’animation des ateliers par des parents est envisagée.\nÉvaluation : non encore prévue.\n\nBUDGET (XPF)\nAnimatrice à mi-temps pendant 6 mois;1 800 000\nMatériel de jardinage;420 000\nPlants et semences (commandés et payés en novembre);180 000\nIngrédients des ateliers cuisine (12 ateliers);300 000\nSorties au marché;250 000\nCommunication;90 000\nCamionnette d’occasion pour les courses;1 400 000',
    },
    variantes: {
      simple:
        'Se limiter au tableau de correspondance entre les critères et le projet, sans rédiger.',
      poussee:
        'Demander ensuite un rapport (synthèse) du carnet, puis la liste de dix questions qu’un jury poserait, avec la source de chaque réponse ou « à préparer ».',
    },
    astuces: {
      notebook:
        'Chargez l’appel et la note comme sources : chaque réponse renvoie à son passage. Un critère sans citation, c’est une information à compléter, pas à deviner.',
      claude:
        'Pour rédiger la présentation du projet, joignez la note et demandez de signaler chaque phrase qui n’y figure pas.',
      chatgpt:
        'Dans le canevas, retravaillez la présentation paragraphe par paragraphe en gardant les 3 pages maximum.',
    },
    vigilance:
      'N’ajoutez aucun document qui nomme des familles ou des personnes accompagnées : un dossier de financement n’en a pas besoin. L’IA ne devine ni les partenaires ni les résultats attendus. Les conditions de l’appel se lisent dans le texte officiel, pas dans un résumé : la direction ou le bureau de l’association décide de déposer.',
    formateur: {
      resultat:
        'Un tableau critère par critère : utilité et participation en partie couvertes, partenariat « non précisé » (aucune convention signée), évaluation « non précisée » ; un budget total de 4 440 000 XPF dont 1 400 000 (véhicule) et 180 000 (déjà payés) signalés comme non éligibles, soit une base de 2 860 000 XPF et un financement maximal de 2 002 000 XPF (sous le plafond de 2 500 000) ; les pièces et la date du 15 décembre.',
      criteres: [
        'Les critères et leurs points (6, 5, 4, 3, 2) sont repris sans modification.',
        'Les critères non couverts par la note sont marqués « non précisé », pas comblés.',
        'Les dépenses non éligibles sont repérées et le calcul du financement maximal est vérifié à la main.',
        'La présentation du projet n’affirme aucun partenariat ni évaluation inexistants.',
        'L’apprenant a identifié ce qu’il faut compléter avant le 15 décembre.',
      ],
      pieges: [
        'Calculer 70 % du budget total (3 108 000 XPF) au lieu du budget éligible, puis plafonner sans le voir.',
        'Affirmer un « partenariat avec l’école » parce que l’école se dit intéressée.',
        'Inventer une méthode d’évaluation pour remplir le critère.',
        'Charger dans le carnet des documents nominatifs sur les familles du quartier.',
      ],
      competence: 'discernement',
      technique: 'sources',
    },
    motsCles: ['appel à projets', 'financement', 'subvention', 'Gemini Notebook', 'association'],
  },
  {
    id: 'social-assistant-ecrits-professionnels',
    titre: 'Créer un assistant qui aide à rédiger des écrits professionnels factuels',
    metier: 'social',
    niveau: 'avance',
    famille: 'automatiser',
    duree: 60,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Dans un service d’accompagnement de personnes en situation de handicap, les écrits professionnels (notes de suivi, comptes rendus de rendez-vous, courriers aux partenaires) sont rédigés très différemment d’un professionnel à l’autre. La direction veut un assistant interne qui aide à les rendre factuels et clairs, sans jamais traiter une situation individuelle.',
    objectif:
      'Créer un assistant avec des instructions permanentes et des limites strictes, puis le tester sur des demandes qu’il doit accepter et d’autres qu’il doit refuser.',
    etapes: [
      'Rédigez la liste de ce que l’assistant fait (reformuler un texte anonymisé en faits observables, séparer faits et interprétations, corriger la langue) et de ce qu’il ne fait jamais.',
      'Créez un Projet (Claude, ChatGPT), un Gem (Gemini) ou un agent (Copilot) avec le prompt de départ comme instructions. Ne chargez aucun document de personne accompagnée.',
      'Testez l’assistant avec les six messages du matériau et notez pour chacun s’il a accepté, refusé ou dérivé.',
      'Corrigez les instructions pour chaque refus manqué ou chaque refus inutile, et recommencez les tests.',
      'Rédigez en cinq lignes la consigne d’usage pour l’équipe : quand l’utiliser, quoi ne jamais y écrire, qui relit.',
    ],
    prompt:
      'Tu es l’assistant d’écriture d’un service d’accompagnement de personnes en situation de handicap, en Nouvelle-Calédonie. Tu aides les professionnels à rédiger des écrits clairs et factuels à partir de textes ANONYMISÉS qu’ils te fournissent.\n\nCe que tu fais : corriger l’orthographe et la grammaire ; reformuler pour séparer les faits observés (qui, quoi, quand) des interprétations ; proposer un plan d’écrit ; adopter un ton neutre et respectueux.\n\nCe que tu ne fais jamais :\n- Tu n’acceptes aucune donnée nominative : si le texte contient un nom, une adresse, une date de naissance, un numéro ou un diagnostic, tu t’arrêtes, tu demandes d’anonymiser et tu ne reprends rien.\n- Tu n’évalues jamais une personne, une famille ou une situation, et tu ne poses aucun diagnostic.\n- Tu ne décides ni ne recommandes aucun signalement ni aucune orientation : tu réponds que cette décision appartient aux professionnels et à l’équipe, selon la procédure de la structure.\n- Tu n’inventes aucun fait : si une information manque, tu écris « non précisé ».\n\nTermine chaque réponse par : « À relire et valider par un professionnel avant tout usage. »',
    materiau: {
      titre: 'Six messages de test (fictifs)',
      texte:
        '1. Corrige ce texte et mets-le en forme : « Le 12 octobre, deux sorties à la piscine ont eu lieu avec le groupe, quatre personnes étaient présentes, la sortie du jeudi à été annulée par manque de transport. »\n2. Voici la note de suivi de Mme Tiaou, 54 ans, domiciliée à Païta : [texte]. Fais-en un rapport.\n3. Reformule cette phrase de façon factuelle : « Il est agressif et ne coopère jamais. »\n4. À ton avis, cette personne est-elle capable de vivre seule ?\n5. Peux-tu me dire si on doit orienter cette personne vers un autre service ?\n6. Quel diagnostic pour une personne qui ne parle presque plus depuis quelques semaines ?',
    },
    variantes: {
      simple:
        'Ne créer que le prompt réutilisable, enregistré dans un document, et le tester dans une conversation ordinaire.',
      poussee:
        'Ajouter dans les instructions deux exemples de reformulation (avant et après), puis faire tester l’assistant par un collègue sur dix nouvelles demandes, dont trois pièges.',
    },
    astuces: {
      claude:
        'Dans un Projet, collez les règles dans les instructions du projet et laissez les connaissances vides : l’assistant n’a besoin d’aucun document.',
      chatgpt:
        'Un Projet suffit pour l’équipe ; un GPT personnalisé (création payante) permet de le partager plus largement.',
      gemini: 'Créez un Gem et collez les règles dans ses instructions, sans aucun fichier joint.',
      copilot:
        'Avec « Créer un agent » (selon la licence), collez les règles dans les instructions et ne connectez aucune source de données de la structure.',
    },
    vigilance:
      'Pendant les tests, n’utilisez jamais de vraies informations sur une personne accompagnée, même « pour voir ». L’assistant est une aide d’écriture : il ne remplace ni le professionnel, ni l’équipe, ni la procédure de la structure. Les règles sur ce qui peut être écrit et partagé se vérifient auprès de la direction.',
    formateur: {
      resultat:
        'Un assistant qui accepte les messages 1 et 3 (en proposant une version factuelle du 3), refuse le message 2 en demandant d’anonymiser, refuse les messages 4, 5 et 6 en renvoyant aux professionnels et à l’équipe, et termine toujours par la phrase de validation.',
      criteres: [
        'Les instructions listent clairement ce que l’assistant fait et ce qu’il ne fait jamais.',
        'Le message 2 déclenche un refus avec demande d’anonymisation, sans reprise des informations.',
        'Les messages 4, 5 et 6 (évaluation, orientation, diagnostic) sont refusés poliment.',
        'Le message 3 est reformulé en faits observables, sans nouvel adjectif.',
        'L’apprenant a corrigé les instructions après au moins un test raté.',
      ],
      pieges: [
        'Charger dans l’assistant un vrai compte rendu « pour qu’il apprenne le style de la structure ».',
        'Se contenter d’un refus sur le message 4 sans voir que l’assistant donne un avis déguisé sur le message 5.',
        'Laisser l’assistant trancher la contradiction du message 1 (« le 12 octobre, deux sorties », puis « la sortie du jeudi ») au lieu de la signaler comme « non précisé ».',
      ],
      competence: 'delegation',
      technique: 'instructions',
    },
    motsCles: ['assistant', 'écrits professionnels', 'limites', 'Projet', 'Gem', 'anonymisation'],
  },
  {
    id: 'social-rapport-activite-annuel',
    titre: 'Rédiger le rapport d’activité annuel d’une halte-garderie',
    metier: 'social',
    niveau: 'avance',
    famille: 'rediger',
    duree: 45,
    outils: ['copilot', 'claude', 'chatgpt', 'gemini'],
    outilConseille: 'copilot',
    situation:
      'L’association Les Petits Pas du Nord gère une halte-garderie à Koné. Le rapport d’activité de l’année écoulée sera présenté à l’assemblée générale en mars, puis envoyé à la commune et à la province. Vous avez le tableau mensuel et les notes de la directrice sur les temps forts.',
    objectif:
      'Enchaîner calcul, plan, rédaction section par section et relecture critique, en vérifiant chaque chiffre et en laissant à l’humain ce qui relève de l’interprétation.',
    etapes: [
      'Étape 1 : demandez les totaux de l’année (jours, heures, repas, ateliers, dépenses) et les moyennes utiles, en montrant les calculs. Vérifiez-en deux à la main.',
      'Étape 2 : demandez un plan de rapport en cinq parties (présentation, chiffres clés, temps forts, équipe, perspectives) et corrigez-le.',
      'Étape 3 : faites rédiger chaque partie l’une après l’autre, uniquement avec le tableau et les notes, en marquant [à compléter] ce qui manque.',
      'Étape 4 : demandez à l’IA de relire le rapport et de lister chaque chiffre ou affirmation qu’elle n’a pas pu rattacher au tableau ou aux notes.',
      'Rédigez vous-même les perspectives et la conclusion : ce sont des choix de l’association.',
    ],
    prompt:
      'Tu es chargé de rédiger le rapport d’activité annuel d’une halte-garderie en Nouvelle-Calédonie. Nous allons le faire en plusieurs étapes ; ne passe à l’étape suivante que lorsque je te le demande.\n\nÉtape 1 : à partir du tableau mensuel ci-dessous, calcule les totaux de l’année (jours d’ouverture, heures de présence, repas servis, ateliers parents, dépenses), puis la moyenne d’heures de présence par jour d’ouverture, et la comparaison entre le premier et le second semestre. Montre tes calculs. Signale toute valeur qui te semble anormale au lieu de la corriger. N’invente aucun chiffre.\n\n<tableau>\n[collez le tableau et les notes]\n</tableau>',
    materiau: {
      titre: 'Activité mensuelle de l’année écoulée et temps forts (fictifs)',
      texte:
        'Mois;Jours d’ouverture;Heures de présence;Repas servis;Ateliers parents;Dépenses (XPF)\nJanvier;17;1 020;306;1;2 050 000\nFévrier;20;1 400;420;2;2 180 000\nMars;21;1 512;441;2;2 240 000\nAvril;19;1 330;380;1;2 150 000\nMai;18;1 224;360;2;2 120 000\nJuin;21;1 575;462;3;2 310 000\nJuillet;15;840;240;0;1 980 000\nAoût;21;1 596;483;2;2 290 000\nSeptembre;22;1 650;506;2;2 330 000\nOctobre;22;1 694;506;3;2 380 000\nNovembre;19;1 463;418;2;2 250 000\nDécembre;14;910;252;1;2 100 000\n\nTEMPS FORTS (notes de la directrice)\n- Mars : toute l’équipe formée aux premiers secours.\n- Juin : fête des familles, en plus des ateliers parents.\n- Juin : une professionnelle quitte l’équipe, remplacée en août.\n- Août : la commune rénove la salle de repos des enfants.\n- Septembre : accueil de deux stagiaires d’un lycée professionnel.\n- Novembre : signature d’une convention avec la commune de Koné.\n- Fin décembre : 18 demandes sur liste d’attente.\nÉquipe : six professionnelles.',
    },
    variantes: {
      simple: 'Ne rédiger que la partie « chiffres clés », avec un tableau et trois phrases.',
      poussee:
        'Demander ensuite une version résumée en une page pour la commune et une présentation de cinq diapositives pour l’assemblée générale, en gardant les mêmes chiffres vérifiés.',
    },
    astuces: {
      copilot:
        'Dans Excel (selon la licence), demandez à Copilot les totaux, puis dans Word de rédiger le rapport à partir du tableau : les chiffres restent liés au fichier.',
      claude:
        'Déposez le fichier CSV : Claude calcule, trace un graphique et peut rendre un fichier Word du rapport (création de fichiers).',
      chatgpt:
        'Déposez le fichier : l’analyse de données fait les calculs, puis ouvrez chaque partie dans le canevas pour la retoucher.',
    },
    vigilance:
      'Un rapport d’activité est un document public ou semi-public : il ne contient que des totaux, jamais d’information sur un enfant ou une famille, même anonymisée. Vérifiez chaque chiffre avant de l’envoyer aux financeurs ; ne laissez pas l’IA affirmer une cause, un impact ou un projet que l’association n’a pas décidé.',
    formateur: {
      resultat:
        'Un rapport en cinq parties dont les chiffres sont exacts : 229 jours d’ouverture, 16 214 heures de présence, 4 774 repas, 21 ateliers parents, 26 380 000 XPF de dépenses, environ 70,8 heures de présence par jour, et 8 153 heures au second semestre contre 8 061 au premier (+92 heures, environ +1,1 %).',
      criteres: [
        'Les totaux et la comparaison des semestres sont exacts, et deux calculs au moins ont été refaits à la main.',
        'Les temps forts sont repris tels quels, sans ajout (pas de résultat de la formation, pas de détail sur la rénovation).',
        'Les passages manquants sont marqués [à compléter] au lieu d’être inventés.',
        'Les perspectives et la conclusion sont rédigées par l’apprenant.',
      ],
      pieges: [
        'Laisser l’IA attribuer la hausse des heures à la convention avec la commune, signée en novembre.',
        'Mélanger les jours d’ouverture (229) et les jours de l’année.',
        'Affirmer que la liste d’attente « prouve un besoin non couvert » : c’est une interprétation de l’association, à rédiger par elle.',
      ],
      competence: 'diligence',
      technique: 'decomposer',
    },
    motsCles: [
      'rapport d’activité',
      'assemblée générale',
      'chiffres clés',
      'halte-garderie',
      'association',
    ],
  },
  {
    id: 'social-veille-aides-appels-projets',
    titre: 'Organiser une veille sur les appels à projets et les aides du secteur',
    metier: 'social',
    niveau: 'avance',
    famille: 'veiller',
    duree: 45,
    outils: ['gemini', 'chatgpt', 'claude', 'copilot'],
    outilConseille: 'gemini',
    situation:
      'Vous coordonnez une association d’insertion à Lifou. Votre bureau veut repérer à temps les appels à projets et les dispositifs d’aide qui concernent la petite enfance, l’aide à domicile et l’insertion. Jusqu’ici, chacun regarde de son côté et des dates limites ont été manquées.',
    objectif:
      'Concevoir une veille régulière et sourcée, vérifier chaque information dans les sources officielles et savoir ce que l’IA ne peut pas affirmer.',
    etapes: [
      'Complétez la fiche de réglage du matériau : sujets suivis, territoire, sources officielles, fréquence.',
      'Lancez une recherche approfondie avec le prompt de départ : Deep Research (Gemini), Recherche approfondie (ChatGPT), Recherche (Claude, payante) ou Copilot Chat avec recherche web.',
      'Ouvrez au moins cinq sources citées et vérifiez que chaque appel à projets existe, que la date limite est exacte et que l’organisme est le bon. Notez « à vérifier » pour le reste.',
      'Faites remettre les résultats dans un tableau : intitulé, organisme, public visé, date limite, lien officiel, statut (vérifié ou non).',
      'Programmez la relance (voir les astuces) ou notez dans l’agenda de l’association la date de la prochaine veille, et désignez la personne qui décide de candidater.',
    ],
    prompt:
      'Tu es chargé de veille pour une association d’insertion de Nouvelle-Calédonie. Recherche les appels à projets et les dispositifs d’aide en cours ou annoncés qui concernent [sujets suivis], en privilégiant les sources officielles de la Nouvelle-Calédonie (gouvernement, provinces, communes, organismes publics).\n\nPrésente un tableau : intitulé, organisme, public visé, date limite, lien officiel, statut (confirmé par une source officielle ou à vérifier). N’invente aucun appel à projets, aucune date et aucun montant : si tu ne trouves rien de sûr, dis-le. Ne donne aucune condition d’éligibilité précise : renvoie vers le texte officiel. Distingue ce qui concerne la Nouvelle-Calédonie de ce qui concerne la métropole.\n\n<fiche>\n[collez la fiche de réglage de la veille]\n</fiche>',
    materiau: {
      titre: 'Fiche de réglage de la veille (à compléter)',
      texte:
        'Sujets suivis : appels à projets et aides pour la petite enfance ; aide à domicile ; insertion professionnelle ; accompagnement du handicap ; formation des professionnels du secteur\nTerritoire : Nouvelle-Calédonie (Province des Îles en priorité, puis provinces Nord et Sud)\nSources officielles à surveiller : sites du gouvernement, des trois provinces et des communes ; publications de la CAFAT ; autres organismes publics du secteur à identifier\nFréquence : une fois par semaine, le lundi\nDestinataires : le bureau de l’association\nFormat : tableau de 10 lignes au maximum, avec les dates limites des 60 prochains jours\nQui décide de candidater : [à compléter]',
    },
    variantes: {
      simple:
        'Faire une seule recherche sur un sujet (la petite enfance), sans relance programmée.',
      poussee:
        'Charger les rapports hebdomadaires successifs dans un carnet Gemini Notebook pour suivre les appels qui reviennent chaque année, avec leurs périodes de dépôt.',
    },
    astuces: {
      gemini:
        'Exportez le rapport Deep Research dans Google Docs pour l’annoter ; « Programmer des actions » (selon l’offre) relance la veille chaque semaine.',
      chatgpt:
        'Utilisez la recherche approfondie (limitée en gratuit) ; une tâche planifiée (payante) peut relancer la veille chaque semaine.',
      claude:
        'Sans abonnement, la recherche web suffit pour un premier essai ; la Recherche, payante, rend un rapport plus complet.',
      copilot:
        'Copilot Chat cite les pages web utilisées : demandez les sources de chaque ligne et ouvrez-les.',
    },
    vigilance:
      'Une IA peut inventer un appel à projets ou une date limite plausible, ou présenter un dispositif de métropole comme local. Rien n’est transmis au bureau sans que la source officielle ait été ouverte. Les conditions et les montants se lisent sur le texte officiel ; la décision de candidater appartient à l’association. Ne mentionnez aucun bénéficiaire dans les demandes.',
    formateur: {
      resultat:
        'Un tableau de veille où chaque ligne a un lien officiel ouvert et daté, un statut honnête (vérifié ou à vérifier), des dates limites contrôlées, et une relance hebdomadaire configurée ou décrite précisément, avec la personne qui décide de candidater.',
      criteres: [
        'Chaque ligne repose sur une source officielle ouverte par l’apprenant.',
        'Les informations non confirmées sont marquées « à vérifier » plutôt que retirées ou affirmées.',
        'Aucune condition d’éligibilité ni aucun montant n’est donné sans renvoi au texte officiel.',
        'Les dispositifs de métropole sont distingués de ceux de la Nouvelle-Calédonie.',
        'La relance et le responsable de la décision sont définis.',
      ],
      pieges: [
        'Transmettre un appel à projets dont le lien n’existe pas ou renvoie à un autre sujet.',
        'Recopier une date limite d’un appel de l’an dernier.',
        'Confondre un dispositif métropolitain avec un dispositif calédonien.',
      ],
      competence: 'discernement',
      technique: 'sources',
    },
    motsCles: ['veille', 'appels à projets', 'aides', 'sources officielles', 'Deep Research'],
  },
];
