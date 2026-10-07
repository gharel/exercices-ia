/**
 * Immobilier : agence, gestion locative, syndic, promotion.
 * Toutes les personnes, adresses et sommes sont fictives.
 */

export const vocabulaire = {
  structure: { g: 'f', s: 'agence immobilière', p: 'agences immobilières' },
  client: { g: 'm', s: 'locataire', p: 'locataires' },
  partenaire: { g: 'm', s: 'propriétaire bailleur', p: 'propriétaires bailleurs' },
  documentCourant: { g: 'm', s: 'état des lieux', p: 'états des lieux' },
  documentLong: { g: 'm', s: 'règlement de copropriété', p: 'règlements de copropriété' },
  reunion: {
    g: 'f',
    s: 'assemblée générale de copropriété',
    p: 'assemblées générales de copropriété',
  },
  offre: { g: 'm', s: 'F3 à louer à la Vallée-des-Colons', p: 'F3 à louer à la Vallée-des-Colons' },
  poste: { g: 'm', s: 'négociateur immobilier', p: 'négociateurs immobiliers' },
  evenement: {
    g: 'f',
    s: 'soirée de présentation d’un programme neuf',
    p: 'soirées de présentation de programmes neufs',
  },
  visuel: { g: 'f', s: 'affiche de mise en location', p: 'affiches de mise en location' },
  domaine: 'l’immobilier',
  motifReclamation: 'le délai de restitution de son dépôt de garantie',
  donnees: 'le relevé des loyers encaissés sur les douze derniers mois, logement par logement',
  colonnes: 'Logement;Quartier;Loyer mensuel (XPF);Mois loués sur 12;Impayés (XPF)',
  indicateur: 'le taux de vacance locative du parc géré',
  veille: 'l’évolution des loyers et des prix de vente dans le Grand Nouméa',
  sourcesVeille:
    'les sites d’annonces locaux, la presse calédonienne et les publications de l’ISEE',
  jargon: 'les charges récupérables et leur régularisation annuelle',
  procedure: 'l’entrée d’un nouveau locataire',
  situationTendue: 'un propriétaire mécontent que son appartement soit vide depuis trois mois',
  donneesSensibles:
    'les noms, coordonnées, revenus, avis d’imposition et pièces d’identité des locataires',
  corpus:
    'les règlements de copropriété et les procès-verbaux d’assemblée générale d’une résidence',
  publicCible: 'les jeunes actifs qui cherchent une première location dans le Grand Nouméa',
  etranger: 'un expatrié australien muté à Nouméa qui cherche une location meublée',
  themeFormation: 'les étapes d’une mise en location, de la visite à la remise des clés',
  tacheRepetitive: 'les relances des locataires en retard de paiement',
  planning: 'les visites de la semaine pour trois négociateurs',
  comparaison: 'deux devis de réfection d’une salle de bains',
};

export const exercices = [
  {
    id: 'immo-annonce-fautes',
    titre: 'Corriger une annonce de location avant publication',
    metier: 'immobilier',
    niveau: 'debutant',
    famille: 'corriger',
    duree: 15,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Un stagiaire de l’agence a rédigé l’annonce d’un F3 à Magenta. Elle doit partir sur les sites d’annonces cet après-midi, mais elle contient des fautes et des informations mal présentées.',
    objectif:
      'Faire corriger un texte par l’IA en précisant ce qu’elle doit changer et ce qu’elle doit garder.',
    etapes: [
      'Copiez l’annonce du matériau dans votre outil d’IA.',
      'Demandez une correction de l’orthographe et de la grammaire, sans changer les informations (prix, surface, adresse).',
      'Demandez ensuite la liste des corrections faites, pour vérifier qu’aucune donnée n’a été modifiée.',
      'Comparez le prix, la surface et les charges avec l’original.',
      'Demandez une version plus attractive de 80 mots au maximum, et choisissez celle que vous publieriez.',
    ],
    prompt:
      'Tu es assistant dans une agence immobilière à Nouméa. Corrige l’orthographe, la grammaire et la ponctuation de l’annonce ci-dessous. Ne modifie aucune information chiffrée (loyer, charges, surface, étage). Présente d’abord l’annonce corrigée, puis la liste des corrections faites.\n\n<annonce>\n[collez l’annonce ici]\n</annonce>',
    materiau: {
      titre: 'Annonce rédigée par le stagiaire',
      texte:
        'A louer F3 a Magenta, proche des commerce et de l’écoles. Appartement de 68m2 au 2eme étage avec ascenseur, deux chambre climatisé, une salle d’eau refaite a neuf. Grand balcon avec vu dégagé. Place de parking couverte. Loyer 165 000 XPF + 12 000 XPF de charge. Libre au 1er novembre, dépôt de garanti un mois. Visite sur rendez vous uniquement, contacter l’agence au heure d’ouverture.',
    },
    variantes: {
      simple: 'Se limiter à la correction de l’orthographe, sans version plus attractive.',
      poussee:
        'Demander trois versions pour trois publics (jeune couple, famille, expatrié), puis une version anglaise.',
    },
    astuces: {
      chatgpt:
        'Ouvrez la réponse dans Canvas pour voir les modifications et retoucher l’annonce directement.',
      copilot:
        'Dans Word, sélectionnez le texte et demandez à Copilot de le réécrire, puis comparez les deux versions.',
    },
    vigilance:
      'Relisez toujours les chiffres : une IA peut « corriger » un loyer ou une surface sans le signaler.',
    formateur: {
      resultat:
        'Une annonce sans faute, avec les mêmes informations, et une liste des corrections qui permet de vérifier le travail de l’IA.',
      criteres: [
        'Les chiffres (loyer, charges, surface, étage, date) sont identiques à l’original.',
        'Le prompt précise ce qu’il ne faut pas modifier.',
        'L’apprenant a vérifié la liste des corrections au lieu de la croire sur parole.',
      ],
      pieges: [
        'Copier la version « attractive » sans voir qu’elle invente des atouts (piscine, vue mer).',
        'Oublier de demander la liste des corrections, et ne plus savoir ce qui a changé.',
      ],
      competence: 'discernement',
      technique: 'format',
    },
    motsCles: ['annonce', 'location', 'orthographe', 'relecture'],
  },
  {
    id: 'immo-assistant-questions-locataires',
    titre: 'Créer un assistant qui répond aux questions des locataires',
    metier: 'immobilier',
    niveau: 'avance',
    famille: 'automatiser',
    duree: 60,
    outils: ['claude', 'chatgpt', 'gemini', 'copilot'],
    outilConseille: 'claude',
    situation:
      'Le service gestion locative reçoit chaque semaine les mêmes questions : qui paie la réparation du chauffe-eau, comment résilier le bail, quand le dépôt de garantie est rendu. Vous voulez un assistant interne qui prépare les réponses à partir des documents de l’agence.',
    objectif:
      'Créer un assistant réutilisable avec des instructions permanentes et des documents de référence, puis le tester sur des cas réels.',
    etapes: [
      'Rassemblez 3 ou 4 documents de référence sans données personnelles : bail type, guide du locataire, grille des réparations locatives, procédure de sortie.',
      'Créez un Projet (Claude, ChatGPT), un Gem (Gemini) ou un agent (Copilot) et ajoutez-y ces documents.',
      'Rédigez les instructions avec le prompt de départ : rôle, ton, sources à utiliser, conduite à tenir quand la réponse n’est pas dans les documents.',
      'Testez l’assistant avec les cinq questions du matériau et notez les réponses fausses ou inventées.',
      'Corrigez les instructions et refaites le test jusqu’à obtenir des réponses fiables, qui citent le document utilisé.',
    ],
    prompt:
      'Tu es l’assistant du service gestion locative de [nom de l’agence], à Nouméa. Tu prépares des projets de réponse aux questions des locataires, qu’un gestionnaire relit avant envoi.\n\nRègles :\n- Réponds uniquement à partir des documents fournis dans ce projet. Cite le document et le passage utilisés.\n- Si la réponse n’est pas dans les documents, dis-le clairement et propose de transmettre la question au gestionnaire. N’invente jamais de règle, de délai ou de montant.\n- Ton : courtois, clair, en vouvoiement, 150 mots au maximum.\n- Termine par la signature : « Le service gestion locative ».',
    materiau: {
      titre: 'Questions de test',
      texte:
        '1. Mon chauffe-eau ne marche plus depuis hier, qui doit payer la réparation ?\n2. Je veux partir dans deux mois, quel préavis dois-je respecter ?\n3. Quand vais-je récupérer mon dépôt de garantie après mon départ ?\n4. Est-ce que je peux repeindre le salon en bleu ?\n5. Mon voisin fait du bruit tous les soirs, que pouvez-vous faire ?',
    },
    variantes: {
      simple:
        'Se contenter d’un prompt réutilisable enregistré dans un document, sans créer d’assistant.',
      poussee:
        'Ajouter des exemples de bonnes réponses dans les instructions, puis faire évaluer l’assistant par un collègue sur dix nouvelles questions.',
    },
    astuces: {
      claude:
        'Dans un Projet, déposez les documents dans les connaissances du projet et collez les règles dans ses instructions.',
      chatgpt:
        'Un Projet suffit pour l’équipe ; un GPT personnalisé permet de le partager plus largement.',
      gemini: 'Créez un Gem, collez les règles dans ses instructions et ajoutez les documents.',
    },
    vigilance:
      'N’ajoutez aucun document contenant des données de locataires. Les réponses restent des projets relus par un gestionnaire : l’assistant ne connaît pas le dossier de chaque locataire.',
    formateur: {
      resultat:
        'Un assistant qui répond juste aux questions couvertes par les documents, cite ses sources et renvoie vers le gestionnaire pour le reste (questions 4 et 5).',
      criteres: [
        'Les instructions disent quoi faire quand l’information manque.',
        'Les réponses citent le document utilisé.',
        'L’apprenant a repéré au moins une réponse à corriger et a modifié les instructions en conséquence.',
      ],
      pieges: [
        'Charger des documents avec des données personnelles de locataires.',
        'Se satisfaire d’une réponse plausible mais absente des documents, souvent sur les délais.',
      ],
      competence: 'delegation',
      technique: 'instructions',
    },
    motsCles: ['assistant', 'projet', 'gem', 'locataires', 'questions fréquentes'],
  },
  {
    id: 'immo-description-notes-visite',
    titre: 'Rédiger la description d’un bien à partir de notes de visite',
    metier: 'immobilier',
    niveau: 'debutant',
    famille: 'rediger',
    duree: 15,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Vous rentrez de la visite d’une villa à Dumbéa, sur les hauteurs de Koutio. Vous avez pris des notes en vrac sur votre téléphone, et le propriétaire attend l’annonce de mise en vente pour demain.',
    objectif:
      'Transformer des notes brutes en description fidèle et attractive, sans laisser l’IA ajouter des atouts inventés.',
    etapes: [
      'Copiez les notes de visite du matériau dans votre outil d’IA avec le prompt de départ.',
      'Complétez les crochets : le public visé (famille, investisseur…) et la longueur souhaitée.',
      'Relisez la description ligne à ligne et surlignez chaque information qui ne figure pas dans les notes.',
      'Demandez à l’IA de retirer tout ce qui n’est pas dans les notes et de lister les informations manquantes utiles à un acheteur.',
      'Gardez la version finale et la liste des questions à poser au propriétaire.',
    ],
    prompt:
      'Tu es négociateur dans une agence immobilière de Nouméa. À partir de mes notes de visite ci-dessous, rédige la description d’annonce de cette villa pour [public visé], en [nombre] mots environ.\n\nRègles :\n- Utilise uniquement les informations des notes. N’ajoute aucun équipement, aucune vue ni aucun atout qui n’y figure pas.\n- Commence par une accroche d’une phrase, décris les pièces dans l’ordre de la visite, puis l’extérieur et les points pratiques.\n- Termine par le prix et les conditions de visite.\n- Après l’annonce, liste les informations manquantes qu’un acheteur demandera sûrement.\n\n<notes>\n[collez les notes de visite ici]\n</notes>',
    materiau: {
      titre: 'Notes de visite prises sur le téléphone',
      texte:
        'Villa F4 Koutio hauteurs, impasse calme\nterrain 620 m2 clôturé, portail motorisé\nséjour traversant 38 m2 carrelage neuf, clim\ncuisine US équipée (plaque induction, four, hotte), cellier\n3 ch dont 1 suite parentale avec sdb + dressing\nsdb 2 avec baignoire, wc séparé\nterrasse couverte 25 m2 côté jardin, vue sur la baie (de la terrasse seulement)\ngarage 1 voiture + 2 places ext\nchauffe-eau solaire 2019\ntoiture refaite en 2023, factures dispo\nécole primaire à 5 min à pied, Médipôle à 10 min en voiture\nprix demandé 48 500 000 XPF, proprio pressé (mutation en métropole)\nà voir : fissure mur du garage, proprio dit « rien de grave »\nvisites à partir du 15, prévenir 48 h avant',
    },
    variantes: {
      simple:
        'Demander seulement une description de 100 mots, sans la liste des informations manquantes.',
      poussee:
        'Demander deux versions (famille avec enfants, investisseur), puis une version de 300 caractères pour les réseaux sociaux.',
    },
    astuces: {
      claude:
        'Demandez la description dans un artefact : vous pourrez demander des retouches sans perdre la mise en page.',
      copilot:
        'Dans Word, collez vos notes et demandez à Copilot de rédiger la description : elle reste modifiable dans le document.',
    },
    vigilance:
      'L’annonce engage l’agence : chaque atout cité doit être vérifiable. Ne mentionnez jamais la situation personnelle du vendeur (mutation, urgence) : c’est une information de négociation.',
    formateur: {
      resultat:
        'Une description fidèle aux notes, sans piscine ni « vue lagon » inventées, qui tait la mutation du propriétaire, suivie de questions à poser (fissure du garage, taxe foncière, diagnostics).',
      criteres: [
        'Toutes les informations de l’annonce figurent dans les notes.',
        'La vue reste limitée à la terrasse, comme dans les notes.',
        'La raison de la vente et l’urgence du propriétaire n’apparaissent pas.',
        'La liste des informations manquantes mentionne la fissure du garage.',
      ],
      pieges: [
        'Laisser passer « vue panoramique sur le lagon » ou « piscine possible », ajoutés par l’IA.',
        'Publier la mention de la mutation du propriétaire, qui affaiblit la négociation.',
        'Transformer les 620 m² de terrain en surface habitable.',
      ],
      competence: 'discernement',
      technique: 'structurer',
    },
    motsCles: ['annonce', 'vente', 'visite', 'description', 'villa'],
  },
  {
    id: 'immo-affiche-a-louer-canva',
    titre: 'Créer une affiche « À louer » dans Canva',
    metier: 'immobilier',
    niveau: 'debutant',
    famille: 'visuels',
    duree: 20,
    outils: ['canva', 'chatgpt', 'claude'],
    outilConseille: 'canva',
    situation:
      'L’agence met en location un F2 rénové au centre de Païta. Le propriétaire veut une affiche pour la vitrine et une version carrée pour la page Facebook de l’agence.',
    objectif:
      'Préparer le texte d’une affiche avec l’IA, puis générer et retoucher le visuel dans Canva en gardant des informations exactes.',
    etapes: [
      'Avec ChatGPT ou Claude, faites rédiger le texte de l’affiche à partir de la fiche du bien : un titre court, trois atouts et les informations pratiques.',
      'Dans Canva, décrivez l’affiche voulue à l’IA Canva ou au Design magique : format A4 portrait, couleurs de l’agence, texte lisible de loin.',
      'Choisissez une proposition, remplacez le texte d’exemple par le vôtre et vérifiez le loyer, les charges et le téléphone.',
      'Utilisez l’écriture magique pour raccourcir un texte qui déborde.',
      'Déclinez l’affiche en format carré pour Facebook, avec le redimensionnement magique (Pro) ou dans un nouveau design.',
    ],
    prompt:
      'Tu es chargé de communication d’une agence immobilière en Nouvelle-Calédonie. À partir de la fiche ci-dessous, propose le texte d’une affiche « À louer » pour la vitrine : un titre de cinq mots au maximum, trois atouts de quatre mots chacun, puis le loyer, les charges, la date de disponibilité et le contact. N’ajoute aucune information absente de la fiche. Propose trois titres au choix.\n\n<fiche>\n[collez la fiche du bien ici]\n</fiche>',
    materiau: {
      titre: 'Fiche du bien (fictive)',
      texte:
        'Type : F2 de 48 m², rez-de-chaussée, entièrement rénové cette année\nSituation : centre de Païta, à 200 m de la mairie (adresse exacte donnée à la visite)\nPièces : séjour avec cuisine ouverte équipée, une chambre climatisée, salle d’eau avec douche à l’italienne\nExtérieur : jardin privatif de 30 m², une place de parking\nLoyer : 98 000 XPF par mois, charges 6 000 XPF (eau froide et entretien des communs)\nDisponible : 1er décembre\nAnimaux : non\nContact : Agence Horizon Sud, 25 00 00, visites du lundi au samedi',
    },
    variantes: {
      simple:
        'Partir directement d’un modèle d’affiche Canva et n’utiliser l’IA que pour le texte.',
      poussee:
        'Créer trois affiches de style différent (sobre, chaleureuse, très visuelle), les faire commenter par le groupe, puis enregistrer la meilleure comme modèle pour les prochains biens.',
    },
    astuces: {
      canva:
        'Si l’agence a un kit de marque (Pro), appliquez-le : couleurs, polices et logo se mettent en place en un clic.',
      chatgpt:
        'Demandez trois titres, puis demandez lequel se lit le mieux à trois mètres de la vitrine, et pourquoi.',
    },
    vigilance:
      'Pas d’adresse exacte ni de nom du propriétaire sur une affiche publique. Une image générée par l’IA ne montre pas le vrai logement : utilisez uniquement les vraies photos du bien.',
    formateur: {
      resultat:
        'Une affiche A4 lisible, avec un titre court, trois atouts tirés de la fiche, les bons montants (98 000 XPF et 6 000 XPF de charges), sans adresse exacte, et sa version carrée.',
      criteres: [
        'Loyer, charges, date de disponibilité et contact sont exacts.',
        'Aucun atout n’est inventé (piscine, vue mer, meublé).',
        'L’affiche se lit de loin : peu de mots, bon contraste.',
        'Aucune image générée n’est présentée comme une photo du logement.',
      ],
      pieges: [
        'Garder le texte d’exemple du modèle Canva, avec un faux loyer.',
        'Illustrer avec un intérieur généré par l’IA, plus beau que le vrai logement.',
        'Recopier toute la fiche du bien sur l’affiche.',
      ],
      competence: 'diligence',
      technique: 'format',
    },
    motsCles: ['affiche', 'Canva', 'location', 'vitrine', 'Facebook'],
  },
  {
    id: 'immo-checklist-etat-des-lieux',
    titre: 'Préparer une check-list d’état des lieux d’entrée',
    metier: 'immobilier',
    niveau: 'debutant',
    famille: 'organiser',
    duree: 15,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Vous faites demain votre premier état des lieux d’entrée seul, pour un F3 meublé à l’Anse-Vata. Votre responsable vous a laissé quelques conseils en vrac. Vous voulez une check-list pièce par pièce, à imprimer.',
    objectif:
      'Obtenir une check-list structurée et adaptée au logement, en donnant le contexte et le format attendu.',
    etapes: [
      'Copiez la description du logement et les conseils du responsable dans votre outil d’IA, avec le prompt de départ.',
      'Vérifiez que chaque pièce a sa rubrique et que l’inventaire du mobilier est séparé.',
      'Ajoutez ce qui manque selon vous (compteurs, bips du parking, moustiquaires…) en le demandant à l’IA.',
      'Faites exporter la check-list en tableau Word ou Excel, puis imprimez-la.',
    ],
    prompt:
      'Tu es gestionnaire locatif expérimenté dans une agence de Nouméa. Je fais demain l’état des lieux d’entrée du logement décrit ci-dessous. Prépare une check-list pièce par pièce, sous forme de tableau à trois colonnes : élément à vérifier, état (neuf, bon, usé, à réparer), observations. Ajoute une partie pour les compteurs et les clés, et une partie séparée pour l’inventaire du mobilier. Tiens compte des conseils de mon responsable.\n\n<logement>\n[collez la description du logement]\n</logement>\n\n<conseils>\n[collez les conseils du responsable]\n</conseils>',
    materiau: {
      titre: 'Le logement et les conseils du responsable',
      texte:
        'LOGEMENT\nF3 meublé de 72 m², 3e étage avec ascenseur, résidence à l’Anse-Vata\nSéjour : canapé d’angle, table et 4 chaises, meuble TV\nCuisine équipée : réfrigérateur, plaque vitrocéramique, four micro-ondes, lave-linge\n2 chambres avec lit double et placard\nUn climatiseur dans chaque chambre et un dans le séjour\nSalle d’eau avec douche, WC séparé\nBalcon de 8 m² avec deux transats\nCave et place de parking en sous-sol\n\nCONSEILS DU RESPONSABLE\ntoujours photographier chaque pièce + les compteurs\ntester toutes les clim avec la télécommande, noter si filtre sale\nouvrir et fermer chaque fenêtre et volet, regarder les moustiquaires\nnoter le nombre de clés et de bips du parking\nfaire relire et signer chaque page par le locataire',
    },
    variantes: {
      simple: 'Demander une simple liste à puces des points à vérifier, sans tableau.',
      poussee:
        'Demander aussi la version pour l’état des lieux de sortie, avec une colonne qui rappelle l’état constaté à l’entrée.',
    },
    astuces: {
      copilot:
        'Dans Word, demandez à Copilot de transformer la liste en tableau : vous gardez la mise en page de l’agence.',
    },
    vigilance:
      'La check-list aide à ne rien oublier, mais elle ne remplace pas le modèle d’état des lieux de l’agence. N’y laissez aucune mention juridique (délai, pénalité) ajoutée par l’IA sans vérification.',
    formateur: {
      resultat:
        'Une check-list imprimable, pièce par pièce, qui reprend tous les équipements du logement (trois climatiseurs, moustiquaires, bips du parking) et sépare l’inventaire du mobilier.',
      criteres: [
        'Chaque pièce a sa rubrique, y compris le balcon, la cave et le parking.',
        'Les conseils du responsable sont intégrés (photos, climatiseurs, clés).',
        'Le format demandé, un tableau à trois colonnes, est respecté.',
      ],
      pieges: [
        'Se contenter d’une check-list générique qui oublie les équipements propres au logement.',
        'Laisser l’IA ajouter des délais ou des obligations juridiques que personne n’a vérifiés.',
      ],
      competence: 'description',
      technique: 'format',
    },
    motsCles: ['état des lieux', 'check-list', 'gestion locative', 'meublé'],
  },
  {
    id: 'immo-reponse-baisse-loyer',
    titre: 'Répondre à une demande de baisse de loyer',
    metier: 'immobilier',
    niveau: 'intermediaire',
    famille: 'rediger',
    duree: 20,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Un locataire d’un F4 à Ouémo demande une baisse de loyer : son activité a ralenti et il trouve le loyer trop élevé pour le quartier. Le propriétaire refuse une baisse, mais accepte un aménagement temporaire. Vous répondez au nom de l’agence.',
    objectif:
      'Construire une réponse délicate en plusieurs échanges : analyser la demande, comparer deux versions, puis ajuster le ton.',
    etapes: [
      'Donnez à l’IA l’e-mail du locataire et la consigne du propriétaire, et demandez d’abord une analyse, sans rédiger.',
      'Demandez deux versions de réponse : une très factuelle, une plus chaleureuse.',
      'Comparez-les : laquelle respecte exactement la consigne du propriétaire ? Laquelle promet trop ?',
      'Demandez une version finale qui combine le meilleur des deux, en 180 mots au maximum.',
      'Vérifiez qu’aucun montant, aucune date ni aucun engagement n’a été ajouté, puis faites valider la réponse par votre responsable.',
    ],
    prompt:
      'Tu es gestionnaire locatif dans une agence immobilière à Nouméa. Je dois répondre à un locataire qui demande une baisse de loyer. Commence par analyser la situation, sans rédiger : résume la demande et les arguments du locataire, puis ce que le propriétaire accepte et refuse. Je te demanderai ensuite des propositions de réponse.\n\n<email_locataire>\n[collez l’e-mail du locataire]\n</email_locataire>\n\n<consigne_proprietaire>\n[collez la consigne du propriétaire]\n</consigne_proprietaire>',
    materiau: {
      titre: 'E-mail du locataire et consigne du propriétaire',
      texte:
        'E-MAIL DU LOCATAIRE (M. T., F4 rue des Frangipaniers, Ouémo)\nBonjour,\nJe suis locataire depuis trois ans et j’ai toujours payé à l’heure. Mon activité de transport a beaucoup baissé depuis le début de l’année et j’ai du mal à suivre. J’ai vu des F4 à 170 000 XPF dans le quartier alors que je paie 195 000 XPF. Je vous demande de baisser le loyer à 170 000 XPF dès le mois prochain, sinon je devrai partir.\nCordialement,\nM. T.\n\nCONSIGNE DU PROPRIÉTAIRE (appel téléphonique noté par la gestionnaire)\n- pas de baisse du loyer, il le juge dans le prix du marché\n- d’accord pour décaler la date de paiement au 15 du mois pendant 3 mois\n- bon locataire, il ne veut pas le perdre\n- ne rien promettre sur la révision annuelle',
    },
    variantes: {
      simple: 'Demander directement une seule réponse, puis la corriger en un échange.',
      poussee:
        'Faire jouer le locataire par l’IA pour préparer l’appel téléphonique qui suivra l’e-mail, puis lui demander un retour sur votre argumentation.',
    },
    astuces: {
      claude:
        'Demandez les deux versions côte à côte dans un tableau, pour les comparer phrase par phrase.',
      copilot:
        'Dans Outlook, lancez « Coaching par Copilot » sur la version finale pour vérifier le ressenti du lecteur.',
    },
    vigilance:
      'Remplacez le nom réel du locataire par des initiales avant de coller l’e-mail. La réponse ne contient aucun engagement que le propriétaire n’a pas donné.',
    formateur: {
      resultat:
        'Une réponse courtoise qui refuse la baisse sans brusquer, propose le paiement au 15 du mois pendant trois mois, reconnaît la régularité du locataire et ne dit rien de la révision annuelle.',
      criteres: [
        'L’analyse a été demandée avant la rédaction.',
        'La réponse respecte toute la consigne : pas de baisse, décalage sur trois mois, rien sur la révision.',
        'Les deux versions ont été comparées avant le choix final.',
        'La réponse fait 180 mots au maximum et ne cite aucun prix du marché inventé.',
      ],
      pieges: [
        'Accepter une version qui propose une baisse « exceptionnelle » non autorisée.',
        'Laisser l’IA affirmer que 195 000 XPF est conforme aux prix du quartier, sans source.',
        'Coller l’e-mail avec le nom complet et l’adresse du locataire.',
      ],
      competence: 'description',
      technique: 'decomposer',
    },
    motsCles: ['loyer', 'négociation', 'locataire', 'propriétaire', 'e-mail'],
  },
  {
    id: 'immo-synthese-pv-ag',
    titre: 'Synthétiser un procès-verbal d’assemblée générale pour les copropriétaires',
    metier: 'immobilier',
    niveau: 'intermediaire',
    famille: 'synthetiser',
    duree: 30,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Le service syndic a tenu l’assemblée générale de la résidence Les Cocotiers, à la Baie-des-Citrons. Beaucoup de copropriétaires étaient absents. Vous devez leur envoyer une synthèse claire des décisions, en plus du procès-verbal officiel.',
    objectif:
      'Faire résumer un document dense pour un public précis, puis vérifier chaque décision et chaque montant contre l’original.',
    etapes: [
      'Collez l’extrait du procès-verbal dans votre outil d’IA avec le prompt de départ.',
      'Vérifiez le tableau des résolutions ligne par ligne : objet, décision, vote, montant.',
      'Demandez une version de 10 lignes pour l’e-mail aux copropriétaires, centrée sur ce qui change pour eux (appels de fonds, travaux, dates).',
      'Demandez à l’IA de lister les passages qu’elle a jugés ambigus, et vérifiez qu’elle n’a comblé aucun manque par une invention.',
      'Ajoutez une phrase qui rappelle que seul le procès-verbal fait foi.',
    ],
    prompt:
      'Tu es assistant du service syndic d’une agence immobilière à Nouméa. Voici un extrait du procès-verbal de l’assemblée générale d’une copropriété. Prépare une synthèse pour les copropriétaires absents :\n1. un tableau des résolutions (numéro, objet, décision, résultat du vote, montant voté) ;\n2. les conséquences concrètes pour chaque copropriétaire (appels de fonds, travaux, dates) ;\n3. les points ambigus ou incomplets du procès-verbal.\nN’ajoute aucune information absente du texte. Si un montant ou une date manque, écris « non précisé ».\n\n<proces_verbal>\n[collez l’extrait du procès-verbal]\n</proces_verbal>',
    materiau: {
      titre: 'Extrait du procès-verbal (fictif)',
      texte:
        'Résidence Les Cocotiers, Baie-des-Citrons, Nouméa. Assemblée générale ordinaire du 12 septembre. 42 lots, 27 présents ou représentés.\n\nRésolution 1 : approbation des comptes de l’exercice écoulé (charges totales : 14 860 000 XPF). Adoptée à l’unanimité des présents et représentés.\n\nRésolution 2 : quitus au syndic. Adoptée, 2 abstentions.\n\nRésolution 3 : budget prévisionnel de l’exercice suivant fixé à 15 400 000 XPF. Adoptée, 3 votes contre (lots 4, 17 et 31).\n\nRésolution 4 : réfection de l’étanchéité de la toiture-terrasse, devis de l’entreprise Toit Sûr NC pour 6 950 000 XPF TTC. Adoptée. Travaux prévus avant la saison cyclonique si l’entreprise confirme ses disponibilités. Appel de fonds en deux fois, dates à fixer par le syndic.\n\nRésolution 5 : remplacement de l’interphone par un système à badges, devis de 1 280 000 XPF. Rejetée ; à revoir l’an prochain avec deux devis comparatifs.\n\nRésolution 6 : interdiction de faire sécher le linge sur les balcons. Après un long débat, le vote est reporté faute d’une rédaction précise.\n\nQuestions diverses : nuisances du chantier voisin signalées par plusieurs résidents, le syndic écrira à la mairie. Stationnement de visiteurs sur les places privatives.',
    },
    variantes: {
      simple: 'Demander seulement le tableau des résolutions.',
      poussee:
        'Joindre aussi le règlement de copropriété et demander quels articles concernent les résolutions 4 et 6, en citant les passages.',
    },
    astuces: {
      claude:
        'Demandez, pour chaque ligne du tableau, la phrase du procès-verbal dont elle vient : la vérification devient rapide.',
      copilot:
        'Si le procès-verbal est un fichier Word, Copilot dans Word peut le résumer directement ; demandez ensuite le tableau.',
    },
    vigilance:
      'Le procès-verbal original est le seul document qui fait foi. Ne diffusez pas les numéros des lots qui ont voté contre : l’information n’apporte rien aux autres copropriétaires.',
    formateur: {
      resultat:
        'Un tableau exact des six résolutions (la 5 rejetée, la 6 reportée), des conséquences concrètes (6 950 000 XPF appelés en deux fois, dates non précisées) et la liste des points ambigus.',
      criteres: [
        'Les montants sont identiques à ceux du procès-verbal.',
        'La résolution 6 apparaît comme reportée, ni adoptée ni rejetée.',
        'Les dates absentes sont signalées « non précisé » au lieu d’être inventées.',
        'La synthèse rappelle que le procès-verbal fait foi.',
      ],
      pieges: [
        'Laisser l’IA fixer une date d’appel de fonds ou de travaux qui n’existe pas.',
        'Présenter les travaux de toiture comme certains alors qu’ils dépendent des disponibilités de l’entreprise.',
        'Citer les lots qui ont voté contre dans l’e-mail à tous.',
      ],
      competence: 'discernement',
      technique: 'sources',
    },
    motsCles: ['copropriété', 'assemblée générale', 'procès-verbal', 'syndic', 'synthèse'],
  },
  {
    id: 'immo-estimation-references',
    titre: 'Argumenter une estimation à partir de ventes de référence',
    metier: 'immobilier',
    niveau: 'intermediaire',
    famille: 'analyser',
    duree: 30,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Une propriétaire veut vendre son F4 de 86 m² à Magenta et attend une estimation argumentée. Vous avez extrait de votre fichier dix ventes récentes. Vous voulez une fourchette de prix justifiée à présenter au rendez-vous.',
    objectif:
      'Faire calculer et commenter des données chiffrées par l’IA, en vérifiant les calculs et en gardant la main sur l’avis de valeur.',
    etapes: [
      'Déposez ou collez le tableau des ventes de référence avec le prompt de départ.',
      'Vérifiez vous-même deux prix au mètre carré à la calculatrice.',
      'Demandez quelles ventes sont les plus comparables au bien (quartier, type, étage, état) et lesquelles écarter.',
      'Demandez une fourchette de prix argumentée en cinq points.',
      'Rédigez vous-même la conclusion : l’avis de valeur reste celui du négociateur.',
    ],
    prompt:
      'Tu es analyste dans une agence immobilière à Nouméa. Voici des ventes récentes de biens comparables (données internes fictives) et le bien à estimer.\n\n1. Calcule le prix au mètre carré de chaque vente et présente-le dans un tableau.\n2. Donne la moyenne et la médiane, pour l’ensemble puis pour le quartier du bien.\n3. Indique les ventes les plus comparables et celles à écarter, en expliquant pourquoi.\n4. Propose une fourchette de prix, avec cinq arguments.\nMontre tes calculs. Si une donnée te semble anormale, signale-la au lieu de la corriger.\n\n<ventes>\n[collez le bien à estimer et le tableau]\n</ventes>',
    materiau: {
      titre: 'Bien à estimer et ventes de référence (fictives)',
      texte:
        'Bien à estimer : F4 de 86 m², Magenta, 3e étage avec ascenseur, bon état, balcon.\n\nRéf;Quartier;Type;Surface (m²);Étage;État;Prix de vente (XPF);Mois de vente\nV01;Magenta;F4;82;2;Bon;39 500 000;Janvier\nV02;Magenta;F4;90;4;Rénové;46 800 000;Février\nV03;Magenta;F3;68;1;À rafraîchir;29 900 000;Mars\nV04;Vallée-des-Colons;F4;88;3;Bon;38 200 000;Mars\nV05;Magenta;F4;85;RDC;Bon;37 000 000;Avril\nV06;Faubourg-Blanchot;F4;95;5;Rénové;52 000 000;Avril\nV07;Magenta;F4;84;3;Bon;4 150 000;Mai\nV08;Rivière-Salée;F4;87;2;Bon;27 500 000;Mai\nV09;Magenta;F5;110;2;Bon;50 600 000;Juin\nV10;Ouémo;F4;86;1;Rénové;41 300 000;Juin',
    },
    variantes: {
      simple: 'Demander seulement le prix au mètre carré de chaque vente et la moyenne de Magenta.',
      poussee:
        'Demander un graphique du prix au mètre carré par quartier, puis un avis de valeur de deux pages pour la propriétaire, relu ligne à ligne.',
    },
    astuces: {
      chatgpt:
        'Déposez le tableau en CSV : l’analyse de données calcule en code, que vous pouvez afficher pour vérifier.',
      gemini:
        'Collez le tableau dans Google Sheets et utilisez « Demander à Gemini » pour ajouter la colonne du prix au mètre carré.',
    },
    vigilance:
      'Avec vos vraies données, retirez les noms des vendeurs et des acquéreurs. Une estimation engage l’agence : la fourchette finale est décidée par le négociateur, pas par l’IA.',
    formateur: {
      resultat:
        'Un tableau des prix au mètre carré, la vente V07 signalée comme anormale (4 150 000 XPF, un zéro manquant), les F4 de Magenta retenus (environ 480 000 XPF/m²) et une fourchette d’environ 40 à 43 millions XPF, argumentée.',
      criteres: [
        'L’apprenant a vérifié au moins deux calculs à la main.',
        'La vente V07 est repérée, puis écartée ou corrigée de façon explicite.',
        'Les ventes peu comparables (Rivière-Salée, F3, F5, Faubourg-Blanchot) sont écartées ou pondérées, avec une raison.',
        'La conclusion est rédigée ou validée par l’apprenant.',
      ],
      pieges: [
        'Laisser la vente V07 tirer la moyenne vers le bas sans le voir.',
        'Faire une seule moyenne avec tous les quartiers.',
        'Présenter la fourchette de l’IA à la propriétaire sans la relire.',
      ],
      competence: 'discernement',
      technique: 'critique',
    },
    motsCles: ['estimation', 'prix au m²', 'vente', 'avis de valeur', 'tableau'],
  },
  {
    id: 'immo-calendrier-travaux-copro',
    titre: 'Planifier les travaux votés en copropriété et prévenir les résidents',
    metier: 'immobilier',
    niveau: 'intermediaire',
    famille: 'organiser',
    duree: 30,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Nous sommes en octobre. L’assemblée générale de la résidence Les Flamboyants, à Dumbéa-sur-Mer, a voté trois chantiers : ravalement de façade, remplacement des pompes de relevage, peinture des cages d’escalier. Vous devez proposer un calendrier réaliste et préparer l’affichage pour les résidents.',
    objectif:
      'Construire un planning avec l’IA à partir de contraintes, le corriger en plusieurs échanges, puis en tirer une communication claire.',
    etapes: [
      'Donnez à l’IA les travaux et les contraintes du matériau, et demandez un calendrier mois par mois sous forme de tableau.',
      'Vérifiez chaque contrainte (saison cyclonique, vacances scolaires, appels de fonds, disponibilités) et signalez à l’IA ce qui ne va pas.',
      'Demandez une deuxième version avec une marge de deux semaines par chantier, et comparez les deux.',
      'Demandez l’affiche d’information pour le hall : dates, gênes prévues, contact du syndic, en moins de 120 mots.',
      'Notez les incompatibilités à soumettre au conseil syndical : l’IA ne tranche pas à sa place.',
    ],
    prompt:
      'Tu es gestionnaire de copropriété dans une agence de Nouméa. Nous sommes en [mois]. Propose un calendrier des travaux votés pour la résidence ci-dessous, mois par mois, sur les douze prochains mois. Présente un tableau : chantier, période, entreprise, gêne pour les résidents, appel de fonds lié. Respecte toutes les contraintes. Si deux contraintes sont incompatibles, dis-le clairement au lieu de choisir à ma place.\n\n<travaux_et_contraintes>\n[collez la liste des travaux et des contraintes]\n</travaux_et_contraintes>',
    materiau: {
      titre: 'Travaux votés et contraintes (fictifs)',
      texte:
        'TRAVAUX VOTÉS\n1. Ravalement de façade (Façades du Sud) : 8 semaines, échafaudage, bruit en journée. 9 400 000 XPF.\n2. Remplacement des deux pompes de relevage du sous-sol (HydroCal) : 1 semaine, coupure d’eau de 2 jours. 2 100 000 XPF.\n3. Peinture des cages d’escalier (Couleurs Pacifique) : 3 semaines. 1 650 000 XPF.\n\nCONTRAINTES\n- Pas de ravalement pendant la saison cyclonique et des fortes pluies (de mi-novembre à fin avril selon le conseil syndical).\n- Façades du Sud n’est disponible qu’à partir de juin.\n- Une des deux pompes est en panne : le conseil syndical veut le remplacement avant la saison des pluies.\n- Appels de fonds : un en mars (pompes et peinture), un en juillet (façade). Aucun chantier ne commence avant l’appel de fonds qui le finance.\n- Pas de coupure d’eau pendant les vacances scolaires de milieu d’année (dates à vérifier sur le calendrier scolaire de la Nouvelle-Calédonie).\n- Pas de peinture des cages d’escalier pendant le ravalement (poussière, passage des ouvriers).',
    },
    variantes: {
      simple:
        'Planifier un seul chantier, la peinture des cages d’escalier, et rédiger l’affiche correspondante.',
      poussee:
        'Demander le calendrier en fichier Excel avec un diagramme de Gantt simple, puis un e-mail au conseil syndical qui expose les incompatibilités et deux solutions possibles.',
    },
    astuces: {
      chatgpt: 'Demandez le tableau final au format Excel pour le transmettre au conseil syndical.',
      copilot:
        'Transformez la réponse en Copilot Page : le conseil syndical peut commenter le calendrier directement.',
    },
    vigilance:
      'Les dates des vacances scolaires et de la saison cyclonique se vérifient sur des sources officielles : l’IA confond souvent avec le calendrier de métropole.',
    formateur: {
      resultat:
        'Un calendrier qui place la peinture entre mars et mai, la façade entre juillet et septembre, et qui signale l’incompatibilité entre la pompe en panne (à remplacer avant mi-novembre) et l’appel de fonds de mars ; plus une affiche courte pour le hall.',
      criteres: [
        'Chaque contrainte est respectée ou explicitement signalée comme impossible à tenir.',
        'L’incompatibilité des pompes est repérée, par l’IA ou par l’apprenant.',
        'Le calendrier scolaire utilisé est celui de la Nouvelle-Calédonie, vérifié.',
        'L’affiche donne dates, gênes et contact en moins de 120 mots.',
      ],
      pieges: [
        'Accepter des pompes programmées en mars sans voir que l’une est déjà en panne.',
        'Laisser l’IA appliquer les vacances scolaires de métropole.',
        'Recopier dans l’affiche une date fausse du premier tableau.',
      ],
      competence: 'discernement',
      technique: 'iterer',
    },
    motsCles: ['copropriété', 'travaux', 'planning', 'saison cyclonique', 'affichage'],
  },
  {
    id: 'immo-comparatif-biens-acquereur',
    titre: 'Sélectionner et comparer des biens pour un acquéreur',
    metier: 'immobilier',
    niveau: 'avance',
    famille: 'analyser',
    duree: 45,
    outils: ['claude', 'chatgpt', 'gemini', 'copilot'],
    outilConseille: 'claude',
    situation:
      'Un couple muté à Nouméa avec deux enfants et un chien vous a confié son cahier des charges. Votre portefeuille compte quinze biens en vente. Vous voulez une présélection argumentée de trois biens, un tableau comparatif et un e-mail de présentation.',
    objectif:
      'Enchaîner filtrage, notation, comparaison et rédaction, en vérifiant chaque étape avant de passer à la suivante.',
    etapes: [
      'Étape 1 : faites traduire le cahier des charges en critères éliminatoires et en critères de confort pondérés. Corrigez la pondération si besoin.',
      'Étape 2 : donnez le portefeuille et faites appliquer les critères éliminatoires, avec la raison de chaque exclusion. Vérifiez trois exclusions vous-même.',
      'Étape 3 : demandez une note sur 20 pour chaque bien restant, avec le détail du calcul.',
      'Étape 4 : demandez un tableau comparatif des trois meilleurs biens : points forts, points faibles, questions à poser au vendeur.',
      'Étape 5 : faites rédiger l’e-mail aux acquéreurs, puis demandez à l’IA de relire son travail et de lister ses incertitudes.',
      'Relisez l’ensemble : le choix final et le ton de l’e-mail restent les vôtres.',
    ],
    prompt:
      'Tu es négociateur dans une agence immobilière à Nouméa. Nous allons travailler en plusieurs étapes ; ne passe à l’étape suivante que lorsque je te le demande.\n\nÉtape 1 : à partir du cahier des charges ci-dessous, établis la liste des critères éliminatoires et des critères de confort, avec une pondération sur 20 que tu justifies. Si un critère est flou, pose-moi la question au lieu de supposer.\n\n<cahier_des_charges>\n[collez le cahier des charges]\n</cahier_des_charges>',
    materiau: {
      titre: 'Cahier des charges et portefeuille de biens (fictifs)',
      texte:
        'CAHIER DES CHARGES\nCouple avec deux enfants (8 et 12 ans) et un chien. Budget : 52 millions XPF au maximum pour le prix du bien. Au moins 3 chambres. 25 minutes de trajet au maximum jusqu’au centre-ville de Nouméa aux heures de pointe. Pas de gros travaux. Extérieur souhaité : jardin de préférence, sinon grande terrasse. Quartier calme si possible. Une piscine serait un plus.\n\nPORTEFEUILLE\nRéf;Commune;Quartier;Type;Chambres;Surface (m²);Extérieur;Prix (XPF);Travaux;Trajet heure de pointe (min);Remarques\nB01;Nouméa;Val-Plaisance;Villa;3;120;Jardin 400 m²;54 500 000;Aucun;10;Rue passante\nB02;Nouméa;Tina;Villa;4;140;Jardin 600 m², piscine;68 000 000;Aucun;15;\nB03;Dumbéa;Koutio;Villa;3;105;Jardin 550 m²;42 000 000;Toiture à reprendre;30;Calme\nB04;Mont-Dore;Plum;Villa;4;150;Jardin 1 200 m², piscine;49 000 000;Aucun;45;Bord de mer\nB05;Nouméa;Ouémo;Appartement F4;3;95;Terrasse 30 m²;46 500 000;Aucun;15;Copropriété : animaux acceptés\nB06;Nouméa;Magenta;Appartement F4;3;88;Balcon 6 m²;41 000 000;Rafraîchissement;12;\nB07;Nouméa;Motor Pool;Villa;3;110;Jardin 350 m²;51 800 000;Aucun;8;Calme, impasse\nB08;Dumbéa;Dumbéa-sur-Mer;Villa;4;130;Jardin 500 m²;47 500 000;Aucun;25;Lotissement récent\nB09;Païta;Tontouta;Villa;4;160;Jardin 2 000 m²;38 000 000;Aucun;55;\nB10;Nouméa;Anse-Vata;Appartement F5;4;120;Terrasse 45 m²;72 000 000;Aucun;10;Copropriété : animaux interdits\nB11;Nouméa;Rivière-Salée;Villa;3;100;Jardin 300 m²;36 500 000;Gros œuvre fissuré;15;\nB12;Nouméa;Faubourg-Blanchot;Villa;3;115;Jardin 250 m²;58 000 000;Aucun;5;\nB13;Dumbéa;Auteuil;Villa;3;108;Jardin 700 m², piscine;45 900 000;Aucun;25;Calme\nB14;Nouméa;N’Géa;Appartement F4;3;92;Terrasse 25 m²;49 900 000;Aucun;10;Copropriété : animaux interdits\nB15;Mont-Dore;Boulari;Villa;3;112;Jardin 600 m²;44 000 000;Peinture extérieure;35;Calme',
    },
    variantes: {
      simple:
        'S’arrêter à l’étape 2 : obtenir la liste des biens qui passent les critères éliminatoires, avec la raison de chaque exclusion.',
      poussee:
        'Créer un Projet avec le portefeuille et la méthode de notation, pour refaire la sélection en quelques minutes à chaque nouvel acquéreur.',
    },
    astuces: {
      claude:
        'Demandez le tableau comparatif dans un artefact, puis faites-le exporter en fichier Excel pour le dossier.',
      chatgpt:
        'Déposez le portefeuille en CSV : l’analyse de données applique les filtres, et vous pouvez vérifier le code.',
      gemini:
        'Collez le portefeuille dans Google Sheets et demandez à Gemini les filtres qui correspondent aux critères éliminatoires.',
    },
    vigilance:
      'Le cahier des charges d’un client contient des informations personnelles (enfants, mutation, budget) : ne gardez que ce qui sert à la sélection. Vérifiez les temps de trajet et l’acceptation des animaux avant d’envoyer l’e-mail.',
    formateur: {
      resultat:
        'Une présélection qui écarte B01 (54 500 000 XPF, au-dessus du budget), B10 et B14 (animaux interdits), B11 (gros œuvre), et retient par exemple B07, B13 et B08, avec un tableau comparatif et un e-mail prudent.',
      criteres: [
        'Les critères éliminatoires sont appliqués strictement, avec une raison pour chaque exclusion.',
        'Le chien est pris en compte (copropriétés qui interdisent les animaux).',
        'La note de chaque bien est calculée de façon traçable.',
        'Chaque étape a été vérifiée avant la suivante.',
      ],
      pieges: [
        'Garder B01 parce qu’il est « proche du budget » : c’est aux acquéreurs d’en décider, pas à l’IA.',
        'Oublier le chien, mentionné une seule fois dans le cahier des charges.',
        'Laisser l’e-mail promettre des qualités non vérifiées (calme, écoles proches).',
      ],
      competence: 'delegation',
      technique: 'decomposer',
    },
    motsCles: ['acquéreur', 'sélection', 'comparatif', 'notation', 'portefeuille'],
  },
  {
    id: 'immo-veille-programmes-neufs',
    titre: 'Mettre en place une veille sur les programmes immobiliers neufs',
    metier: 'immobilier',
    niveau: 'avance',
    famille: 'veiller',
    duree: 45,
    outils: ['gemini', 'chatgpt', 'claude', 'notebook'],
    outilConseille: 'gemini',
    situation:
      'Votre agence veut développer la vente de logements neufs dans le Grand Nouméa. Le directeur vous demande une veille mensuelle : nouveaux programmes, promoteurs actifs, prix annoncés et dispositifs d’aide à l’accession évoqués dans l’actualité.',
    objectif:
      'Concevoir une veille récurrente et sourcée, et vérifier chaque information avant de la diffuser.',
    etapes: [
      'Lancez une recherche approfondie avec le prompt de départ : Deep Research (Gemini), Recherche approfondie (ChatGPT) ou Recherche (Claude, payante).',
      'Ouvrez au moins cinq sources citées et vérifiez qu’elles disent bien ce que le rapport leur attribue. Notez ce qui n’est pas vérifiable.',
      'Demandez de remettre le rapport au format du modèle fourni, avec la source et la date de chaque ligne.',
      'Programmez la relance mensuelle : « Programmer des actions » dans Gemini ou une tâche planifiée dans ChatGPT ou Claude (selon votre offre).',
      'Chargez les rapports successifs dans Gemini Notebook pour suivre les évolutions d’un mois sur l’autre, citations à l’appui.',
    ],
    prompt:
      'Tu es chargé de veille pour une agence immobilière du Grand Nouméa (Nouméa, Dumbéa, Païta, Mont-Dore). Recherche les programmes de logements neufs annoncés ou commercialisés au cours des [nombre] derniers mois.\n\nPour chaque programme : nom, commune et quartier, promoteur, nombre et types de logements, prix annoncés s’ils sont publics, livraison prévue, source avec sa date.\nAjoute une partie sur les dispositifs d’aide à l’accession évoqués dans l’actualité, sans affirmer de conditions précises : renvoie vers la source officielle.\nN’invente aucun programme : si tu trouves peu d’informations, dis-le. Indique pour chaque ligne si l’information vient d’une seule source ou de plusieurs.\n\nPrésente le résultat selon ce modèle :\n<modele>\n[collez le modèle de fiche de veille]\n</modele>',
    materiau: {
      titre: 'Modèle de fiche de veille mensuelle',
      texte:
        'VEILLE PROGRAMMES NEUFS : [mois]\n\n1. Nouveaux programmes\nProgramme;Commune;Promoteur;Logements;Prix annoncés;Livraison;Source et date;Plusieurs sources (oui/non)\n\n2. Ce qui a changé depuis le mois dernier (3 lignes au maximum)\n\n3. Dispositifs et aides évoqués dans l’actualité (lien vers la source officielle)\n\n4. À vérifier avant diffusion\n\n5. Deux opportunités pour l’agence',
    },
    variantes: {
      simple:
        'Faire une seule recherche web sur les programmes neufs de Dumbéa, sans planification.',
      poussee:
        'Partager le carnet Gemini Notebook avec les négociateurs et y générer chaque mois une FAQ « programmes neufs » à jour.',
    },
    astuces: {
      gemini:
        'Exportez le rapport Deep Research dans Google Docs pour l’annoter, puis programmez la relance avec « Programmer des actions ».',
      chatgpt:
        'Une tâche planifiée (payante) relance la même demande chaque mois : gardez le modèle de fiche dans le prompt.',
      claude:
        'Sans abonnement, la recherche web suffit pour un premier essai ; la Recherche, payante, rend un rapport plus complet.',
      notebook:
        'Ajoutez chaque rapport mensuel comme source, puis demandez ce qui a changé : chaque réponse cite son passage.',
    },
    vigilance:
      'Une IA peut inventer un programme ou un prix plausible. Rien ne part au directeur ni aux clients sans vérification de la source. Les conditions d’une aide se lisent sur le site officiel (province, gouvernement), jamais dans le seul rapport.',
    formateur: {
      resultat:
        'Une fiche de veille au format demandé, où chaque programme a une source datée et ouverte, une rubrique « à vérifier » honnête, et une relance mensuelle programmée ou un carnet prêt à être alimenté.',
      criteres: [
        'Chaque information a une source datée, ouverte par l’apprenant.',
        'Les informations à source unique sont signalées.',
        'Aucune condition d’aide n’est affirmée sans lien vers la source officielle.',
        'La relance mensuelle est configurée ou décrite précisément.',
      ],
      pieges: [
        'Diffuser un programme dont la source n’existe pas ou parle d’autre chose.',
        'Présenter des prix de lancement anciens comme des prix actuels.',
        'Confondre des dispositifs de métropole avec ceux de la Nouvelle-Calédonie.',
      ],
      competence: 'discernement',
      technique: 'sources',
    },
    motsCles: ['veille', 'programmes neufs', 'promoteurs', 'Deep Research', 'tâche planifiée'],
  },
  {
    id: 'immo-dossier-impaye-gradue',
    titre: 'Préparer les courriers gradués d’un impayé de loyer, jusqu’à la mise en demeure',
    metier: 'immobilier',
    niveau: 'avance',
    famille: 'rediger',
    duree: 45,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Un locataire d’un F2 à Rivière-Salée accumule les retards depuis plusieurs mois. Votre responsable veut un dossier complet : la chronologie des paiements, une relance amiable, un dernier rappel et un projet de mise en demeure, validé par le service juridique avant tout envoi.',
    objectif:
      'Enchaîner analyse, chronologie, rédaction graduée et relecture critique, en sachant ce qui reste sous validation humaine.',
    etapes: [
      'Donnez l’historique des paiements et demandez la chronologie avec le solde dû mois par mois. Vérifiez le solde final à la main.',
      'Demandez la relance amiable : ton cordial, montant dû, proposition de rendez-vous ou d’échéancier.',
      'Demandez le dernier rappel : ton ferme, délai de réponse laissé entre crochets pour le responsable.',
      'Demandez le projet de mise en demeure en laissant entre crochets toutes les mentions juridiques (textes, délais, clause du bail).',
      'Demandez à l’IA de relire les trois courriers et de lister les affirmations juridiques ou chiffrées à vérifier.',
      'Transmettez le dossier à votre responsable : aucun courrier ne part sans sa validation.',
    ],
    prompt:
      'Tu es gestionnaire locatif dans une agence immobilière à Nouméa. Nous allons préparer un dossier d’impayé en plusieurs étapes. Pour l’instant, fais uniquement l’étape 1.\n\nÉtape 1 : à partir de l’historique ci-dessous, établis la chronologie des sommes appelées et des paiements reçus, avec le solde dû à la fin de chaque mois, dans un tableau. Montre tes calculs. Signale toute incohérence au lieu de la corriger.\n\nPour tous les courriers que je te demanderai ensuite : n’écris aucune référence de loi, aucun délai légal et aucun taux ; laisse-les entre crochets pour le service juridique.\n\n<historique>\n[collez l’historique des paiements]\n</historique>',
    materiau: {
      titre: 'Historique des paiements (locataire fictif)',
      texte:
        'Logement : F2, Rivière-Salée. Loyer 92 000 XPF + charges 5 000 XPF, soit 97 000 XPF par mois, payable le 5.\nLocataire : M. X., bail depuis deux ans, aucun incident avant cette année.\n\nMois;Montant appelé (XPF);Paiement reçu (XPF);Date du paiement;Commentaire\nJuin;97 000;97 000;5 juin;\nJuillet;97 000;60 000;18 juillet;appel du locataire : « problème de travail »\nAoût;97 000;97 000;12 août;\nSeptembre;97 000;50 000;28 septembre;\nOctobre;97 000;0;;pas de réponse aux SMS\nNovembre;97 000;40 000;20 novembre;virement sans message\n\nNote de la gestionnaire : dépôt de garantie de 92 000 XPF. En juillet, le locataire a dit au téléphone qu’il cherchait un nouvel emploi.',
    },
    variantes: {
      simple: 'Se limiter à la chronologie et à la relance amiable.',
      poussee:
        'Créer un Projet ou un Gem « Impayés » avec les modèles validés par le service juridique, pour que chaque nouveau dossier suive la même méthode.',
    },
    astuces: {
      claude:
        'Demandez les trois courriers dans un même artefact, en trois parties : la gradation du ton se compare d’un coup d’œil.',
      copilot:
        'Dans Word, partez du modèle de courrier de l’agence et demandez à Copilot d’y reprendre le texte validé.',
    },
    vigilance:
      'Une mise en demeure a des effets juridiques : l’IA prépare un brouillon, le service juridique le valide. Remplacez le nom du locataire par une initiale et ne citez pas sa situation personnelle (recherche d’emploi) dans les courriers.',
    formateur: {
      resultat:
        'Une chronologie exacte (582 000 XPF appelés, 344 000 XPF reçus, solde dû de 238 000 XPF fin novembre), trois courriers de ton gradué, des mentions juridiques laissées entre crochets et une liste de points à vérifier.',
      criteres: [
        'Le solde dû est juste et l’apprenant l’a vérifié.',
        'La gradation du ton est nette d’un courrier à l’autre.',
        'Aucun texte de loi, délai ou taux n’est inventé : tout est entre crochets.',
        'La situation personnelle du locataire n’apparaît dans aucun courrier.',
      ],
      pieges: [
        'Accepter une référence à une loi de métropole, inventée ou inadaptée à la Nouvelle-Calédonie.',
        'Laisser l’IA déduire le dépôt de garantie du solde dû.',
        'Rédiger les trois courriers d’un coup, sans avoir vérifié la chronologie.',
      ],
      competence: 'diligence',
      technique: 'decomposer',
    },
    motsCles: ['impayé', 'loyer', 'relance', 'mise en demeure', 'chronologie'],
  },
];
