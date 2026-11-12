/**
 * Automobile et mécanique : concession, garage, carrosserie, pneus, pièces détachées, location de
 * véhicules, mécanique marine et deux-roues.
 * Toutes les personnes, entreprises, adresses, véhicules et sommes sont fictives.
 */

export const vocabulaire = {
  structure: { g: 'm', s: 'garage automobile', p: 'garages automobiles' },
  client: { g: 'm', s: 'client', p: 'clients' },
  partenaire: { g: 'm', s: 'fournisseur de pièces', p: 'fournisseurs de pièces' },
  documentCourant: { g: 'm', s: 'devis de réparation', p: 'devis de réparation' },
  documentLong: { g: 'm', s: 'contrat d’entretien de flotte', p: 'contrats d’entretien de flotte' },
  reunion: {
    g: 'f',
    s: 'réunion mensuelle d’atelier',
    p: 'réunions mensuelles d’atelier',
  },
  offre: {
    g: 'm',
    s: 'forfait pneus et parallélisme pour 4×4',
    p: 'forfaits pneus et parallélisme pour 4×4',
  },
  poste: { g: 'm', s: 'mécanicien automobile', p: 'mécaniciens automobiles' },
  evenement: {
    g: 'f',
    s: 'sortie 4×4 des clients du garage',
    p: 'sorties 4×4 des clients du garage',
  },
  visuel: {
    g: 'f',
    s: 'affiche de promotion de l’atelier',
    p: 'affiches de promotion de l’atelier',
  },
  domaine: 'l’automobile et la mécanique',
  motifReclamation: 'un véhicule revenu à l’atelier pour le même défaut',
  donnees:
    'le relevé des ordres de réparation clôturés sur les six derniers mois, véhicule par véhicule',
  colonnes:
    'Véhicule;Type d’intervention;Heures facturées;Pièces (XPF);Main-d’œuvre (XPF);Retour à l’atelier (oui/non)',
  indicateur: 'le montant moyen d’un ordre de réparation, pièces et main-d’œuvre comprises',
  veille:
    'l’évolution des prix des pièces importées et des délais de fret vers la Nouvelle-Calédonie',
  sourcesVeille:
    'les sites des constructeurs et des importateurs, la presse calédonienne et les publications des organismes officiels',
  jargon: 'la différence entre une pièce d’origine et une pièce adaptable',
  procedure: 'la réception d’un véhicule à l’atelier',
  situationTendue: 'un client mécontent que son véhicule ne soit pas prêt à la date promise',
  donneesSensibles: 'les noms, téléphones, immatriculations et cartes grises des clients',
  corpus:
    'les fiches produits, les conditions de garantie et les tarifs des fournisseurs de pièces',
  publicCible: 'les particuliers qui roulent en 4×4 sur les pistes de brousse',
  etranger: 'un touriste australien qui loue un 4×4 pour traverser la Grande Terre',
  themeFormation: 'les étapes de la réception d’un véhicule à l’atelier',
  tacheRepetitive: 'les rappels de révision aux clients',
  planning: 'les permanences de l’accueil atelier et du magasin pièces sur le mois',
  comparaison: 'deux devis de pneus pour un pick-up',
};

export const exercices = [
  {
    id: 'auto-devis-sans-jargon',
    titre: 'Expliquer un devis de réparation à un client, sans jargon',
    metier: 'automobile',
    niveau: 'debutant',
    famille: 'corriger',
    duree: 15,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'copilot',
    situation:
      'Un client a déposé son pick-up double cabine à l’atelier de Ducos. Le chef d’atelier a rédigé le devis avec ses termes techniques. Le client, qui part chaque semaine travailler à Koné avec son pick-up, vous appelle : il ne comprend ni ce qu’il paie, ni ce qui est urgent. Vous lui renvoyez une explication claire par e-mail.',
    objectif:
      'Faire reformuler un texte technique en langage clair pour un client, sans perdre un seul chiffre ni changer le sens.',
    etapes: [
      'Copiez le devis du matériau dans votre outil d’IA avec le prompt de départ.',
      'Complétez les crochets : le prénom du client (fictif) et votre fonction.',
      'Vérifiez que les cinq postes et le total sont identiques au devis, au franc près.',
      'Relisez chaque explication : un client qui n’y connaît rien la comprendrait-il ? Demandez de reformuler les termes qui restent obscurs.',
      'Vérifiez que l’IA n’a pas jugé elle-même ce qui est urgent ou non : c’est au chef d’atelier de le préciser. Ajoutez cette mention à l’e-mail.',
    ],
    prompt:
      'Tu es réceptionnaire après-vente dans un garage de Nouméa. Je dois expliquer le devis ci-dessous à un client qui n’y connaît rien en mécanique. Rédige un e-mail de 200 mots au maximum, en vouvoiement, avec :\n- une phrase d’introduction ;\n- pour chaque poste, une explication en une phrase simple (à quoi sert la pièce ou l’opération, sans jargon) suivie du montant ;\n- le total ;\n- une phrase qui dit que le chef d’atelier précisera au téléphone ce qui est prioritaire.\nNe modifie aucun montant, n’ajoute aucune opération, et ne dis jamais qu’un poste est « urgent » ou « pas urgent » : tu n’as pas vu le véhicule. Signe : [prénom], réceptionnaire après-vente.\n\n<devis>\n[collez le devis ici]\n</devis>',
    materiau: {
      titre: 'Devis rédigé par le chef d’atelier (fictif)',
      texte:
        'DEVIS D-0412 : pick-up double cabine 4×4, 148 000 km\nTaux horaire de main-d’œuvre : 9 500 XPF\n\nPoste 1 : remplacement du kit de distribution + pompe à eau ; pièces 62 000 XPF ; MO 3,5 h = 33 250 XPF ; total 95 250 XPF\nPoste 2 : remplacement des plaquettes AV + rectification des disques ; pièces 24 500 XPF ; MO 1,5 h = 14 250 XPF ; total 38 750 XPF\nPoste 3 : remplacement des soufflets de cardan côté droit (déchirés, graisse projetée) ; pièces 9 800 XPF ; MO 1 h = 9 500 XPF ; total 19 300 XPF\nPoste 4 : vidange moteur + filtres à huile et à air ; pièces 11 400 XPF ; MO 0,5 h = 4 750 XPF ; total 16 150 XPF\nPoste 5 : lecture des défauts OBD (voyant moteur) ; forfait 6 000 XPF\n\nTOTAL : 175 450 XPF\n\nRemarque atelier : jeu constaté dans une rotule de direction, à surveiller, non chiffré. Pièces d’origine, délai 3 jours si la commande est confirmée avant mercredi.',
    },
    variantes: {
      simple: 'Demander seulement l’explication des postes 1 et 2, sans l’e-mail complet.',
      poussee:
        'Demander ensuite une version orale de 30 secondes, pour l’appel téléphonique, puis trois questions que le client risque de poser (et les réponses à faire donner par le chef d’atelier, pas par l’IA).',
    },
    astuces: {
      copilot:
        'Dans Outlook, partez d’un « Brouillon avec Copilot », puis lancez « Coaching par Copilot » avant l’envoi pour vérifier le ton et la clarté.',
      claude:
        'Demandez le tableau « terme technique, explication simple » dans un artefact : vous pourrez le réutiliser pour d’autres devis.',
    },
    vigilance:
      'N’envoyez pas le nom, le numéro de téléphone ou l’immatriculation d’un vrai client à l’IA. L’IA explique les termes, elle ne juge pas la gravité d’un défaut sur un véhicule qu’elle n’a pas vu.',
    formateur: {
      resultat:
        'Un e-mail de moins de 200 mots qui explique chacun des cinq postes en langage simple, reprend les montants exacts et le total de 175 450 XPF, et renvoie au chef d’atelier pour les priorités.',
      criteres: [
        'Les montants et le total (175 450 XPF) sont identiques au devis.',
        'Les termes (distribution, soufflets de cardan, OBD) sont expliqués sans jargon.',
        'Aucun poste n’est déclaré urgent ou sans importance par l’IA.',
        'La remarque sur la rotule de direction figure comme point à surveiller, sans minimisation ni dramatisation.',
      ],
      pieges: [
        'Accepter une explication qui rassure à tort (« rien de grave ») ou qui fait peur sans raison.',
        'Laisser l’IA arrondir un montant ou oublier le poste 5.',
        'Perdre la remarque sur la rotule de direction, qui n’est pas chiffrée.',
      ],
      competence: 'description',
      technique: 'contexte',
    },
    motsCles: ['devis', 'langage clair', 'client', 'réparation', 'e-mail'],
  },
  {
    id: 'auto-annonce-occasion',
    titre: 'Rédiger l’annonce d’un véhicule d’occasion à partir de la fiche d’expertise',
    metier: 'automobile',
    niveau: 'debutant',
    famille: 'rediger',
    duree: 15,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Vous êtes vendeur dans une concession de Païta. Un SUV compact d’occasion vient d’être expertisé par l’atelier. Le responsable veut l’annonce en ligne demain matin. Vous n’avez que la fiche de l’expert, écrite en vrac pendant l’inspection.',
    objectif:
      'Transformer des notes techniques en annonce attractive et honnête, sans laisser l’IA gommer les défauts ni inventer des atouts.',
    etapes: [
      'Copiez la fiche d’expertise du matériau dans votre outil d’IA avec le prompt de départ.',
      'Complétez les crochets : le public visé et la longueur souhaitée.',
      'Relisez l’annonce et soulignez chaque information qui ne figure pas dans la fiche.',
      'Vérifiez que le petit choc, la rayure et la rouille superficielle sont bien mentionnés, de façon claire et non alarmante.',
      'Demandez la liste des informations manquantes qu’un acheteur demandera sûrement, et gardez-la pour le responsable.',
    ],
    prompt:
      'Tu es vendeur dans une concession de véhicules d’occasion à Païta, en Nouvelle-Calédonie. À partir de la fiche d’expertise ci-dessous, rédige l’annonce de ce véhicule pour [public visé], en [nombre] mots environ.\n\nRègles :\n- Utilise uniquement les informations de la fiche. N’ajoute aucun équipement, aucune garantie, aucun avantage qui n’y figure pas.\n- Mentionne honnêtement les défauts et l’historique (choc, rayure, traitement de la rouille), en termes factuels.\n- Commence par une accroche d’une phrase, puis l’essentiel (année, kilométrage, motorisation, boîte), l’entretien, l’état, le prix et où le voir.\n- Après l’annonce, liste les informations manquantes qu’un acheteur demandera sûrement.\n\n<fiche_expertise>\n[collez la fiche ici]\n</fiche_expertise>',
    materiau: {
      titre: 'Fiche d’expertise prise à l’atelier (fictive)',
      texte:
        'SUV compact diesel, 2019, boîte automatique\n87 400 km (compteur vérifié sur le carnet)\n2e main, carnet d’entretien à jour, dernière révision à 84 000 km\ncourroie de distribution changée à 80 000 km (facture disponible)\npneus : 2 AV neufs, 2 AR usés environ à moitié\nclim OK, 5 places, écran avec Bluetooth\nrayure sur la portière AR gauche (non reprise)\npare-chocs AV repeint après un petit choc déclaré en 2021, pas de dégât de structure constaté par l’atelier\ntraces de rouille superficielle sous le bas de caisse (air salin), traitées à l’atelier le mois dernier\n2 clés\nprix demandé : 2 450 000 XPF, reprise de l’ancien véhicule possible\ncontrôle technique : à confirmer\nvisible à la concession de Païta, du lundi au samedi matin',
    },
    variantes: {
      simple:
        'Demander seulement une annonce de 80 mots, sans la liste des informations manquantes.',
      poussee:
        'Demander deux versions (particulier qui cherche un véhicule familial, petite entreprise), puis un texte de 300 caractères pour une publication sur les réseaux sociaux.',
    },
    astuces: {
      claude:
        'Demandez l’annonce dans un artefact, puis des retouches précises (« plus court », « plus factuel ») sans perdre la mise en forme.',
      copilot:
        'Avec Copilot dans Word (selon la licence), collez la fiche et demandez l’annonce : elle reste modifiable dans le document. Sinon, passez par Copilot Chat.',
    },
    vigilance:
      'Une annonce engage la concession : chaque atout doit être vérifiable. Ne laissez jamais passer « première main », « garantie » ou « jamais accidenté » si la fiche ne le dit pas. Le contrôle technique non confirmé se précise ou s’omet, il ne se devine pas.',
    formateur: {
      resultat:
        'Une annonce fidèle à la fiche, qui cite le petit choc de 2021, la rayure et le traitement de la rouille, sans « première main » ni « garantie », suivie de questions à traiter (contrôle technique, état des pneus arrière, conditions de reprise).',
      criteres: [
        'Toutes les informations de l’annonce figurent dans la fiche.',
        'Le choc réparé, la rayure et la rouille traitée sont mentionnés.',
        'Le kilométrage, l’année et le prix (2 450 000 XPF) sont exacts.',
        'La liste des informations manquantes mentionne le contrôle technique.',
      ],
      pieges: [
        'Laisser passer « véhicule sans accident » ou « état irréprochable », ajoutés par l’IA.',
        'Transformer « 2e main » en « première main ».',
        'Promettre une garantie ou un contrôle technique à jour que la fiche ne mentionne pas.',
      ],
      competence: 'discernement',
      technique: 'structurer',
    },
    motsCles: ['annonce', 'occasion', 'expertise', 'vente', 'véhicule'],
  },
  {
    id: 'auto-messages-rappel-pret',
    titre: 'Rédiger les messages de rappel de révision et de véhicule prêt',
    metier: 'automobile',
    niveau: 'debutant',
    famille: 'rediger',
    duree: 15,
    outils: ['copilot', 'claude', 'chatgpt', 'gemini'],
    outilConseille: 'copilot',
    situation:
      'Vous êtes secrétaire dans un garage de Ducos. Chaque jour, vous envoyez à la main les mêmes messages : le rappel de révision et l’annonce « votre véhicule est prêt ». Le chef d’atelier vous demande des modèles chaleureux et corrects, que toute l’équipe pourra réutiliser.',
    objectif:
      'Obtenir des modèles de messages courts, avec des champs à compléter, qui respectent les règles de la maison.',
    etapes: [
      'Copiez les informations du garage du matériau dans votre outil d’IA avec le prompt de départ.',
      'Demandez les trois modèles et vérifiez que chaque champ à compléter est entre crochets.',
      'Comptez les caractères des SMS : ils doivent tenir en 160 caractères.',
      'Vérifiez qu’aucun message ne promet un prix, une garantie ou un délai de réparation.',
      'Enregistrez les trois modèles dans un document partagé, pour toute l’équipe.',
    ],
    prompt:
      'Tu es secrétaire d’un garage automobile à Nouméa. À partir des informations du garage ci-dessous, rédige trois modèles de messages en vouvoiement, avec les champs à compléter entre crochets ([prénom], [véhicule], [date]) :\n1. un SMS de rappel de révision, 160 caractères au maximum, qui invite à prendre rendez-vous ;\n2. un SMS « votre véhicule est prêt », 160 caractères au maximum, avec les horaires de retrait ;\n3. un e-mail de rappel de révision, 80 mots au maximum, plus chaleureux.\nN’invente aucun prix, aucune promotion et aucun délai. Respecte les règles du garage.\n\n<infos_garage>\n[collez les informations du garage ici]\n</infos_garage>',
    materiau: {
      titre: 'Informations du garage (fictives)',
      texte:
        'GARAGE DU RIVAGE, zone industrielle de Ducos\nHoraires : du lundi au vendredi, de 7 h 30 à 16 h 30 ; fermé le week-end\nTéléphone : 25 00 00 ; rendez-vous par téléphone ou en ligne\nVéhicule de courtoisie : sur demande, selon disponibilité, à réserver à la prise de rendez-vous\nÀ apporter au dépôt : carte grise et carnet d’entretien\nRetrait du véhicule : paiement sur place (carte, chèque ou espèces), pas de virement sans accord préalable\nTon voulu par le chef d’atelier : chaleureux, direct, vouvoiement ; jamais de promesse de prix ni de délai de réparation\nSignature : « L’équipe du Garage du Rivage »',
    },
    variantes: {
      simple: 'Demander uniquement le SMS « votre véhicule est prêt ».',
      poussee:
        'Ajouter un quatrième modèle pour relancer un client dont le véhicule est prêt depuis une semaine, puis une version pour un client qui préfère le tutoiement, en demandant à l’IA de signaler ce qui change.',
    },
    astuces: {
      copilot:
        'Dans Outlook, enregistrez l’e-mail comme modèle après un « Brouillon avec Copilot » : l’équipe n’aura plus qu’à compléter les champs.',
      claude:
        'Demandez les trois modèles dans un tableau (message, nombre de caractères, champs à compléter), pour contrôler d’un coup d’œil la longueur des SMS.',
    },
    vigilance:
      'Ne collez jamais de vrais noms, numéros de téléphone ni immatriculations : les modèles ont des champs à compléter, justement pour cela. Vérifiez les horaires avant de les diffuser.',
    formateur: {
      resultat:
        'Trois modèles prêts à l’emploi : deux SMS de 160 caractères au maximum et un e-mail court, avec des champs entre crochets, des horaires exacts et aucune promesse de prix ni de délai.',
      criteres: [
        'Les SMS tiennent en 160 caractères au maximum (comptés par l’apprenant).',
        'Les horaires et le téléphone sont ceux des informations fournies.',
        'Aucun prix, aucune promotion ni aucun délai n’est inventé.',
        'Le ton est chaleureux et en vouvoiement.',
      ],
      pieges: [
        'Faire confiance à l’IA pour compter les caractères, souvent inexacts.',
        'Laisser passer « votre véhicule sera prêt en 48 h » ou une remise de fidélité inventée.',
        'Remplir les modèles avec les données d’un vrai client avant de les enregistrer.',
      ],
      competence: 'description',
      technique: 'format',
    },
    motsCles: ['SMS', 'rappel', 'révision', 'modèle', 'secrétaire'],
  },
  {
    id: 'auto-affiche-controle-saison-pluies',
    titre: 'Créer dans Canva l’affiche d’un contrôle avant la saison des pluies',
    metier: 'automobile',
    niveau: 'debutant',
    famille: 'visuels',
    duree: 20,
    outils: ['canva', 'chatgpt', 'claude'],
    outilConseille: 'canva',
    situation:
      'Le Garage du Rivage, à Ducos, lance en octobre une opération « Prêt pour la saison des pluies » : un contrôle de 45 minutes sur rendez-vous. Le chef d’atelier veut une affiche pour l’accueil et une version carrée pour la page Facebook du garage.',
    objectif:
      'Préparer le texte d’une affiche avec l’IA, puis créer et retoucher le visuel dans Canva en gardant les informations exactes.',
    etapes: [
      'Avec ChatGPT ou Claude, faites rédiger le texte de l’affiche à partir de la fiche de l’opération : un titre court, quatre points contrôlés, le prix et le contact.',
      'Dans Canva, décrivez l’affiche à l’IA Canva ou au Design magique : format A4 portrait, couleurs du garage, texte lisible de loin.',
      'Choisissez une proposition, remplacez le texte d’exemple par le vôtre et vérifiez dates, prix et téléphone.',
      'Utilisez l’écriture magique pour raccourcir un texte qui déborde.',
      'Vérifiez que la mention « Ce contrôle ne remplace pas le contrôle technique » figure sur l’affiche, puis déclinez-la en format carré (redimensionnement magique, Pro, ou nouveau design).',
    ],
    prompt:
      'Tu es chargé de communication d’un garage automobile en Nouvelle-Calédonie. À partir de la fiche ci-dessous, propose le texte d’une affiche pour l’accueil : un titre de six mots au maximum, quatre points contrôlés (trois mots chacun), puis les dates, le prix, la mention voulue par le chef d’atelier et le contact. N’ajoute aucune information absente de la fiche et ne promets aucune sécurité. Propose trois titres au choix.\n\n<fiche_operation>\n[collez la fiche de l’opération ici]\n</fiche_operation>',
    materiau: {
      titre: 'Fiche de l’opération (fictive)',
      texte:
        'OPÉRATION « PRÊT POUR LA SAISON DES PLUIES »\nLieu : Garage du Rivage, zone industrielle de Ducos\nDates : du 5 au 30 octobre, du lundi au vendredi, sur rendez-vous\nDurée du contrôle : 45 minutes\nPoints regardés : essuie-glaces, éclairage, pneus (état et pression), niveaux, batterie, freins (contrôle visuel), joints de portes\nPrix : contrôle offert pour toute révision réservée pendant l’opération ; sinon forfait de 5 900 XPF\nContact : 25 00 00\nPublic : particuliers et petites entreprises\nCouleurs du garage : bleu nuit et jaune\nMention voulue par le chef d’atelier : « Ce contrôle ne remplace pas le contrôle technique. »',
    },
    variantes: {
      simple:
        'Partir directement d’un modèle d’affiche Canva et n’utiliser l’IA que pour raccourcir le texte.',
      poussee:
        'Créer trois affiches de style différent (sobre, dynamique, très visuelle), les faire commenter par l’équipe, puis enregistrer la meilleure comme modèle pour les prochaines opérations saisonnières.',
    },
    astuces: {
      canva:
        'Si le garage a un kit de marque (Pro), appliquez-le : couleurs, polices et logo se mettent en place en un clic.',
      chatgpt:
        'Demandez trois titres, puis lequel se lit le mieux à trois mètres de l’accueil, et pourquoi.',
    },
    vigilance:
      'Ne laissez pas l’affiche promettre « une voiture sûre » ou « garantie sans panne » : le contrôle est un contrôle visuel, qui ne garantit rien. Les dates et le prix doivent être ceux de la fiche, pas ceux du modèle Canva.',
    formateur: {
      resultat:
        'Une affiche A4 lisible, avec un titre court, quatre points contrôlés, les dates du 5 au 30 octobre, le contrôle offert avec une révision ou le forfait de 5 900 XPF, la mention sur le contrôle technique et le téléphone, plus sa version carrée.',
      criteres: [
        'Dates, prix et téléphone sont exacts.',
        'La mention « Ce contrôle ne remplace pas le contrôle technique » apparaît.',
        'Aucune promesse de sécurité ou de garantie n’est ajoutée.',
        'L’affiche se lit de loin : peu de mots, bon contraste.',
      ],
      pieges: [
        'Garder le texte d’exemple du modèle Canva, avec des dates ou un prix inventés.',
        'Écrire « véhicule 100 % sûr », promesse que le garage ne peut pas tenir.',
        'Recopier toute la fiche sur l’affiche, au point de la rendre illisible.',
      ],
      competence: 'diligence',
      technique: 'format',
    },
    motsCles: ['affiche', 'Canva', 'contrôle', 'saison des pluies', 'garage'],
  },
  {
    id: 'auto-planning-atelier-semaine',
    titre:
      'Organiser le planning de l’atelier sur une semaine, avec les ponts et les pièces en attente',
    metier: 'automobile',
    niveau: 'intermediaire',
    famille: 'organiser',
    duree: 30,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Vous êtes chef d’atelier dans un garage de Dumbéa. Lundi matin, dix ordres de réparation sont à planifier avec trois mécaniciens et deux ponts. Plusieurs pièces arrivent par le fret en cours de semaine et les clients ont des dates de restitution promises.',
    objectif:
      'Construire un planning sous contraintes en plusieurs échanges, repérer ce qui ne tient pas et garder la décision finale.',
    etapes: [
      'Collez les ordres de réparation et les contraintes du matériau dans votre outil d’IA, et demandez un planning jour par jour sous forme de tableau.',
      'Vérifiez chaque contrainte : arrivée des pièces, compétences, ponts, absences. Signalez à l’IA tout ce qui ne va pas.',
      'Demandez la liste des ordres de réparation qui ne peuvent pas être tenus à la date promise, avec la raison.',
      'Demandez une deuxième version avec une marge d’une heure par jour pour les imprévus, et comparez les deux.',
      'Rédigez vous-même la liste des clients à prévenir : l’IA ne prend pas la décision de reporter une date promise.',
    ],
    prompt:
      'Tu es le chef d’atelier d’un garage de Dumbéa. Planifie la semaine (lundi à vendredi) pour les ordres de réparation et les contraintes ci-dessous. Présente un tableau : jour, créneau, ordre de réparation, mécanicien, pont. Respecte toutes les contraintes. Si un ordre ne peut pas être tenu à la date promise, ne le déplace pas en silence : liste-le à part avec la raison. Si deux contraintes sont incompatibles, dis-le au lieu de choisir à ma place. Montre le total d’heures par mécanicien.\n\n<ordres_et_contraintes>\n[collez les ordres de réparation et les contraintes]\n</ordres_et_contraintes>',
    materiau: {
      titre: 'Ordres de réparation et contraintes (fictifs)',
      texte:
        'ORDRES DE RÉPARATION DE LA SEMAINE\nRéf;Véhicule;Intervention;Heures;Pont;Pièces;Restitution promise\nOR-301;Pick-up double cabine;Kit de distribution;7;Pont 1;En stock;Mercredi soir\nOR-302;Citadine;Révision et plaquettes AV;3;Pont 2;Plaquettes attendues mardi 8 h;Mardi soir\nOR-303;SUV diesel;Remplacement de l’embrayage;9;Pont 2;Kit attendu jeudi 9 h (fret);Vendredi soir\nOR-304;Pick-up simple cabine;Vidange et filtres;1;Pont 1;En stock;Lundi midi (client sur place)\nOR-305;4×4 de location;4 pneus et équilibrage;2;Aucun;En stock;Mardi midi\nOR-306;Utilitaire;Remplacement de l’alternateur;3;Pont 2;Alternateur attendu mercredi 8 h;Mercredi soir\nOR-307;Berline;Recherche de fuite de climatisation et recharge;4;Pont 2;En stock;Jeudi soir\nOR-308;SUV hybride;Diagnostic du voyant puis réparation;6;Pont 2;À définir après le diagnostic;Vendredi midi\nOR-309;Citadine;Amortisseurs arrière;4;Pont 2;En stock;Jeudi midi\nOR-310;Pick-up double cabine;Remplacement du radiateur;5;Pont 1;Radiateur attendu jeudi 14 h;Lundi suivant\n\nCONTRAINTES\n- Atelier ouvert du lundi au vendredi, de 7 h 30 à 16 h 30, avec une pause d’une heure à midi. Comptez 6 heures de travail productif par mécanicien et par jour (réception, essais routiers et rangement prennent le reste).\n- Teva : tous les travaux, seul formé aux véhicules hybrides.\n- Michel : mécanique générale ; en congé le vendredi.\n- Loïc, apprenti : travaux simples seulement (vidange, pneus, freins, révision), toujours sur le pont 2 ou sans pont ; absent le mercredi (école).\n- Le pont 1 est réservé aux pick-up et aux 4×4 ; le pont 2 aux véhicules légers.\n- Un pont ne peut accueillir qu’un véhicule à la fois.\n- Une réparation ne peut pas commencer avant l’arrivée des pièces.',
    },
    variantes: {
      simple: 'Planifier seulement les trois premiers jours, avec les ordres OR-301 à OR-305.',
      poussee:
        'Demander le planning en fichier Excel avec une couleur par mécanicien, puis simuler une panne du pont 2 le mercredi et demander les conséquences sur chaque date promise.',
    },
    astuces: {
      chatgpt:
        'Demandez le planning sous forme de tableau, puis téléchargez-le au format Excel pour l’afficher à l’atelier.',
      claude:
        'Demandez le planning dans un fichier Excel (création de fichiers) avec un onglet par jour : il est prêt à imprimer.',
      copilot:
        'Transformez la réponse en Copilot Page : l’équipe peut commenter le planning et signaler une pièce qui arrive en retard.',
    },
    vigilance:
      'Les dates d’arrivée des pièces par le fret sont des estimations du fournisseur : demandez à l’IA de ne jamais les considérer comme certaines. Elle ne décide pas du report d’une date promise à un client.',
    formateur: {
      resultat:
        'Un planning où l’ordre OR-308 (hybride) est confié à Teva, l’embrayage OR-303 démarre au plus tôt jeudi à 9 h et se termine vendredi avec Teva (Michel est en congé), la vidange OR-304 est faite lundi matin sur le pont 1 par Teva ou Michel, Loïc ne traite que les ordres OR-302 et OR-305, et où les dates difficiles à tenir sont listées. Le planning tient : environ 44 heures de travail pour 78 heures disponibles, mais le pont 2 et Teva sont chargés en fin de semaine.',
      criteres: [
        'Aucune réparation ne démarre avant l’arrivée de ses pièces.',
        'Les contraintes de compétence (hybride, apprenti) et d’absence (Michel le vendredi, Loïc le mercredi) sont respectées.',
        'Les ordres sur pont respectent la règle du pont 1 et du pont 2, sans chevauchement.',
        'Les dates promises impossibles à tenir sont signalées, pas déplacées en silence.',
      ],
      pieges: [
        'Planifier l’embrayage OR-303 avant jeudi 9 h, heure d’arrivée du kit.',
        'Confier l’hybride OR-308 à Michel ou à Loïc.',
        'Confier la vidange OR-304 à Loïc : c’est un pick-up, donc le pont 1, qui lui est interdit ; et oublier qu’elle doit être rendue lundi midi.',
        'Accepter 9 heures d’embrayage dans une seule journée de 6 heures productives.',
      ],
      competence: 'discernement',
      technique: 'iterer',
    },
    motsCles: ['planning', 'atelier', 'ponts', 'mécaniciens', 'ordres de réparation', 'pièces'],
  },
  {
    id: 'auto-analyse-retours-atelier',
    titre: 'Analyser les véhicules revenus pour le même défaut sur six mois',
    metier: 'automobile',
    niveau: 'intermediaire',
    famille: 'analyser',
    duree: 30,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Le directeur de la concession de Nouméa se demande pourquoi certains véhicules reviennent à l’atelier pour le même défaut. Vous avez extrait douze retours des six derniers mois, sans nom de client. Il veut des pistes de travail pour la prochaine réunion d’atelier, pas des coupables.',
    objectif:
      'Faire analyser un tableau de retours par l’IA, vérifier les calculs et distinguer ce que le tableau montre de ce qu’il ne prouve pas.',
    etapes: [
      'Collez le tableau du matériau dans votre outil d’IA avec le prompt de départ.',
      'Vérifiez à la main le nombre de retours par défaut et le coût total des reprises.',
      'Demandez l’analyse par défaut, par type de véhicule et par mécanicien, avec une conclusion prudente pour chaque.',
      'Demandez à l’IA ce que ce petit échantillon ne permet pas de conclure.',
      'Rédigez trois pistes de travail pour la réunion, sans nommer ni blâmer un mécanicien.',
    ],
    prompt:
      'Tu es analyste qualité dans une concession automobile de Nouméa. Voici douze retours à l’atelier des six derniers mois (données fictives, sans nom de client). Un retour est un véhicule revenu pour le même défaut.\n\n1. Calcule le nombre de retours et le coût total des reprises, par défaut puis par type de véhicule.\n2. Donne le délai moyen avant le retour, et le nombre de retours en 7 jours ou moins.\n3. Regarde aussi la répartition par mécanicien, mais n’en tire aucune conclusion sur les personnes : dis seulement si l’échantillon est trop petit.\n4. Propose trois pistes de travail pour la réunion d’atelier, sans nommer de mécanicien.\nMontre tes calculs. Si une donnée te semble anormale, signale-la au lieu de la corriger.\n\n<retours>\n[collez le tableau]\n</retours>',
    materiau: {
      titre: 'Retours à l’atelier, d’avril à septembre (données fictives)',
      texte:
        'Réf;Type de véhicule;Défaut signalé;Mécanicien;Intervention initiale;Jours avant le retour;Coût de la reprise (XPF)\nR01;Pick-up double cabine;Voyant moteur;T;Nettoyage de la vanne de recirculation;12;18 500\nR02;Citadine;Bruit au freinage;M;Remplacement des plaquettes AV;5;9 500\nR03;Pick-up double cabine;Voyant moteur;T;Nettoyage de la vanne de recirculation;20;32 000\nR04;SUV diesel;Climatisation peu efficace;L;Recharge de gaz;21;45 000\nR05;Citadine;Bruit au freinage;M;Remplacement des plaquettes AV;3;4 750\nR06;Utilitaire;Batterie qui se décharge;L;Remplacement de la batterie;30;38 000\nR07;4×4 de location;Vibrations au volant;M;Équilibrage des roues;4;9 500\nR08;Pick-up simple cabine;Surchauffe;T;Remplacement du thermostat;9;27 000\nR09;Berline;Climatisation peu efficace;L;Recharge de gaz;40;52 000\nR10;SUV hybride;Voyant moteur;T;Effacement du défaut;2;12 000\nR11;Citadine;Bruit au freinage;M;Remplacement des plaquettes AV;6;9 500\nR12;Pick-up double cabine;Vibrations au volant;L;Équilibrage des roues;8;14 250',
    },
    variantes: {
      simple: 'Demander seulement le nombre de retours et le coût par défaut.',
      poussee:
        'Demander un graphique du coût des reprises par défaut, puis une fiche d’une page pour la réunion d’atelier, avec les questions à poser aux mécaniciens plutôt que des conclusions.',
    },
    astuces: {
      chatgpt:
        'Déposez le tableau au format CSV : l’analyse de données calcule en code, que vous pouvez afficher pour vérifier.',
      claude:
        'Déposez le fichier : Claude calcule, trace le graphique et peut rendre un fichier Excel à garder pour la réunion.',
      gemini:
        'Collez le tableau dans Google Sheets et utilisez « Demander à Gemini » pour expliquer la tendance ou proposer une formule.',
    },
    vigilance:
      'Les données ne contiennent aucun nom de client ni immatriculation : gardez-les ainsi. Douze lignes ne prouvent rien sur des personnes ; l’analyse sert à poser des questions, pas à désigner un mécanicien.',
    formateur: {
      resultat:
        'Douze retours pour 276 750 XPF de reprises, un délai moyen d’environ 13 jours et 5 retours en 7 jours ou moins ; trois retours « voyant moteur » (62 500 XPF), trois « bruit au freinage », la climatisation la plus coûteuse (97 000 XPF pour deux retours) ; et une réserve nette sur l’échantillon.',
      criteres: [
        'Le coût total (276 750 XPF) et le décompte par défaut sont exacts.',
        'L’apprenant a vérifié au moins un calcul à la main.',
        'La répartition par mécanicien est accompagnée d’une réserve sur la taille de l’échantillon.',
        'Les pistes de travail ne nomment ni ne blâment aucun mécanicien.',
      ],
      pieges: [
        'Conclure que le mécanicien L est « le moins fiable » parce que ses reprises coûtent le plus cher, alors que les interventions diffèrent.',
        'Ne pas voir que trois retours sur « bruit au freinage » concernent la même intervention : piste sur la pièce ou la procédure, pas sur une personne.',
        'Accepter un chiffre arrondi ou un total faux sans refaire le calcul.',
      ],
      competence: 'discernement',
      technique: 'critique',
    },
    motsCles: ['retours atelier', 'qualité', 'analyse', 'CSV', 'même défaut'],
  },
  {
    id: 'auto-retard-piece-client',
    titre: 'Annoncer à un client le retard d’une pièce commandée et proposer des solutions',
    metier: 'automobile',
    niveau: 'intermediaire',
    famille: 'rediger',
    duree: 20,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Un client de Bourail attend son pick-up double cabine, immobilisé à l’atelier depuis six jours dans l’attente d’une pièce importée. Le conteneur a raté son départ et le fournisseur n’a plus de date ferme. Le client vient d’écrire, agacé, et menace d’aller ailleurs. Vous répondez au nom de l’atelier.',
    objectif:
      'Rédiger une réponse délicate en plusieurs échanges : analyser, comparer deux versions, puis ajuster le ton, sans promettre ce que l’atelier ne peut pas tenir.',
    etapes: [
      'Donnez à l’IA le message du client et la note du magasinier, et demandez d’abord une analyse, sans rédiger.',
      'Demandez deux versions de réponse : une très factuelle, une plus chaleureuse.',
      'Comparez-les : laquelle respecte exactement la note interne ? Laquelle promet une date ou une remise que personne n’a donnée ?',
      'Demandez une version finale qui combine le meilleur des deux, en 180 mots au maximum, avec les trois solutions présentées de façon équilibrée.',
      'Vérifiez qu’aucun prix, aucune date ni aucun engagement n’a été ajouté, puis faites valider la réponse par le chef d’atelier.',
    ],
    prompt:
      'Tu es réceptionnaire après-vente d’un garage de Nouméa. Je dois répondre à un client dont le véhicule est immobilisé faute de pièce. Commence par analyser la situation, sans rédiger : résume la demande du client, ce que l’atelier sait et ne sait pas, et les solutions possibles avec leurs limites. Je te demanderai ensuite des propositions de réponse.\n\n<message_client>\n[collez le message du client]\n</message_client>\n\n<note_interne>\n[collez la note du magasinier pièces]\n</note_interne>',
    materiau: {
      titre: 'Message du client et note interne (fictifs)',
      texte:
        'MESSAGE DU CLIENT (M. R., pick-up double cabine, immobilisé depuis 6 jours)\nBonjour, vous m’aviez dit 10 jours pour la pièce et là on me dit que ça traîne. Je travaille sur un chantier à Bourail, j’ai besoin de mon pick-up. Qu’est-ce que vous allez faire ? Si c’est comme ça, je viens le chercher et je vais ailleurs.\n\nNOTE INTERNE DU MAGASINIER PIÈCES\n- Pièce commandée : turbocompresseur d’origine, 186 000 XPF. Le conteneur a raté son départ ; le fournisseur annonce « semaine du 24 », sans date ferme.\n- Une pièce adaptable est disponible chez un grossiste de Nouméa : 148 000 XPF. Réparation possible dès jeudi si le client accepte ; sa garantie est celle du fabricant (conditions à demander au grossiste).\n- Véhicule de courtoisie : un seul disponible, un petit utilitaire, 3 jours au maximum, à valider par le chef d’atelier.\n- Aucune remise n’est autorisée. Le chef d’atelier doit valider toute proposition avant envoi.\n- Rien ne doit être promis sur la date de la pièce d’origine.',
    },
    variantes: {
      simple: 'Demander directement une seule réponse, puis la corriger en un échange.',
      poussee:
        'Faire jouer le client par l’IA pour préparer l’appel téléphonique qui suivra l’e-mail, puis lui demander un retour sur votre façon de présenter les solutions.',
    },
    astuces: {
      claude:
        'Demandez les deux versions côte à côte dans un tableau, pour les comparer phrase par phrase.',
      copilot:
        'Dans Outlook, lancez « Coaching par Copilot » sur la version finale pour vérifier le ressenti du lecteur avant l’envoi.',
    },
    vigilance:
      'Remplacez le nom du client par une initiale avant de coller son message. La réponse ne contient aucun engagement que l’atelier n’a pas donné : surtout pas de date d’arrivée du fret ni de remise. La garantie de la pièce adaptable se vérifie auprès du grossiste, pas dans la réponse de l’IA.',
    formateur: {
      resultat:
        'Une réponse courtoise qui reconnaît le retard, explique sans détour qu’aucune date ferme n’existe, présente trois solutions (pièce adaptable à 148 000 XPF, soit 38 000 XPF de moins que la pièce d’origine ; véhicule de courtoisie de 3 jours ; attente de la pièce d’origine) et ne promet ni remise ni date.',
      criteres: [
        'L’analyse a été demandée avant la rédaction.',
        'Aucune date d’arrivée, aucune remise ni aucune garantie n’est promise.',
        'Les montants (186 000 et 148 000 XPF) sont exacts.',
        'Le véhicule de courtoisie est présenté comme soumis à validation et à disponibilité.',
      ],
      pieges: [
        'Accepter une version qui annonce « la pièce arrivera dans deux semaines », date que personne n’a donnée.',
        'Laisser l’IA promettre une garantie identique pour la pièce adaptable.',
        'Proposer une remise « pour nous excuser », alors que la note interne la refuse.',
      ],
      competence: 'description',
      technique: 'options',
    },
    motsCles: ['retard', 'pièce', 'fret', 'client', 'réclamation', 'e-mail'],
  },
  {
    id: 'auto-stock-pieces-dormantes',
    titre: 'Repérer dans le stock les pièces qui dorment et celles en rupture',
    metier: 'automobile',
    niveau: 'intermediaire',
    famille: 'analyser',
    duree: 30,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'gemini',
    situation:
      'Vous êtes magasinier pièces dans une concession de Nouméa. Le stock est valorisé à l’inventaire, et la direction s’inquiète : de l’argent dort sur les étagères alors que des pièces courantes manquent, avec des délais de fret de plusieurs semaines. Vous préparez une synthèse sur un extrait de treize références.',
    objectif:
      'Faire calculer la valeur d’un stock, repérer les anomalies de données et séparer ce que l’IA calcule de ce que la direction décide.',
    etapes: [
      'Collez l’extrait de stock dans votre outil d’IA avec le prompt de départ, qui précise vos deux définitions.',
      'Vérifiez à la main la valeur de trois lignes et la valeur du stock total.',
      'Demandez les pièces dormantes, leur valeur cumulée et la part du stock qu’elles représentent.',
      'Demandez les pièces sous leur stock minimum, classées de la plus urgente à la moins urgente.',
      'Repérez avec l’IA les valeurs qui vous semblent anormales, corrigez-les, puis faites refaire les totaux.',
    ],
    prompt:
      'Tu es assistant logistique dans une concession automobile de Nouméa. Voici un extrait du stock de pièces (données fictives, montants en XPF).\n\nDéfinitions :\n- pièce dormante : aucune sortie depuis plus de 12 mois ;\n- pièce à risque : quantité en stock inférieure au stock minimum.\n\n1. Calcule la valeur de chaque ligne (quantité × prix d’achat) et la valeur totale du stock.\n2. Liste les pièces dormantes, leur valeur cumulée et leur part du stock en pourcentage.\n3. Liste les pièces à risque, de la plus urgente à la moins urgente, avec la raison.\n4. Signale toute valeur qui te semble anormale (prix, quantité), sans la corriger.\nMontre tes calculs. Ne propose pas de brader ni de renvoyer des pièces : c’est la direction qui décide.\n\n<stock>\n[collez le tableau]\n</stock>',
    materiau: {
      titre: 'Extrait du stock de pièces (données fictives)',
      texte:
        'Réf;Désignation;Quantité en stock;Prix d’achat unitaire (XPF);Mois depuis la dernière sortie;Sorties sur 12 mois;Stock minimum\nP01;Filtre à huile pick-up diesel;24;2 800;1;96;20\nP02;Plaquettes de frein AV citadine;6;7 400;2;48;10\nP03;Balai d’essuie-glace 600 mm;35;1 500;0;110;20\nP04;Courroie d’accessoires SUV diesel;9;9 800;14;0;0\nP05;Kit d’embrayage utilitaire;2;86 000;18;0;0\nP06;Ampoule H7;40;12 000;1;75;25\nP07;Batterie 70 Ah;0;24 500;0;31;6\nP08;Amortisseur AR pick-up double cabine;4;31 500;16;0;0\nP09;Filtre à air citadine;15;2 200;3;40;10\nP10;Rotule de direction 4×4;1;18 900;2;9;3\nP11;Disque de frein AV SUV hybride;4;22 800;26;0;0\nP12;Joint de culasse pick-up;3;15 600;13;0;0\nP13;Pneu 265/65 R17;2;41 000;4;28;8',
    },
    variantes: {
      simple: 'Demander seulement la valeur du stock et la liste des pièces dormantes.',
      poussee:
        'Demander ensuite un tableau de bord d’une page (valeur dormante, ruptures, quatre actions possibles à soumettre à la direction), puis une règle de réapprovisionnement qui tient compte d’un délai de fret de quatre semaines.',
    },
    astuces: {
      gemini:
        'Collez le tableau dans Google Sheets et utilisez « Demander à Gemini » pour ajouter la colonne « valeur » et les filtres sur les pièces dormantes.',
      chatgpt:
        'Déposez le tableau en CSV : l’analyse de données calcule en code, que vous pouvez afficher pour vérifier.',
      copilot:
        'Mettez les données sous forme de tableau Excel avant de les confier à Copilot dans Excel (selon la licence) : il les lit beaucoup mieux.',
    },
    vigilance:
      'Une pièce dormante n’est pas forcément inutile (pièce rare pour un modèle ancien). Le choix de brader, de renvoyer au fournisseur ou de garder reste celui de la direction, après vérification des conditions de retour auprès du fournisseur.',
    formateur: {
      resultat:
        'Cinq pièces dormantes (P04, P05, P08, P11, P12) pour 524 200 XPF ; quatre pièces sous le stock minimum (P07 en rupture, P13, P02, P10) ; et une anomalie repérée : l’ampoule H7 à 12 000 XPF (valeur de ligne 480 000 XPF). Le stock vaut 1 302 200 XPF tel quel, 870 200 XPF avec un prix corrigé à 1 200 XPF.',
      criteres: [
        'La valeur des pièces dormantes (524 200 XPF) est exacte.',
        'L’apprenant a repéré le prix anormal de l’ampoule H7 et refait le total.',
        'Les quatre pièces à risque sont listées, avec la batterie P07 en tête (rupture alors qu’elle se vend).',
        'L’IA ne décide pas du bradage ni du renvoi des pièces dormantes.',
      ],
      pieges: [
        'Laisser le prix de l’ampoule H7 gonfler le stock sans le voir.',
        'Calculer un pourcentage de pièces dormantes avec le mauvais total (40,3 % avec l’anomalie, 60,2 % une fois corrigée).',
        'Mettre les pièces dormantes au rebut sans avoir demandé les conditions de retour au fournisseur.',
      ],
      competence: 'discernement',
      technique: 'structurer',
    },
    motsCles: ['stock', 'pièces détachées', 'rupture', 'inventaire', 'CSV', 'XPF'],
  },
  {
    id: 'auto-assistant-accueil-atelier',
    titre:
      'Créer un assistant d’accueil atelier qui prépare le rendez-vous, sans poser de diagnostic',
    metier: 'automobile',
    niveau: 'avance',
    famille: 'automatiser',
    duree: 60,
    outils: ['claude', 'chatgpt', 'gemini', 'copilot'],
    outilConseille: 'claude',
    situation:
      'À l’atelier, le téléphone sonne toute la journée : les clients décrivent un bruit, un voyant, une vibration, et demandent s’ils peuvent rouler. Vous voulez un assistant interne qui aide le réceptionnaire à rédiger la réponse et à préparer la fiche de rendez-vous, avec les bonnes questions. Il ne doit jamais poser de diagnostic ni dire qu’un véhicule peut rouler.',
    objectif:
      'Créer un assistant avec des instructions permanentes qui posent des limites nettes, puis le tester sur des messages difficiles.',
    etapes: [
      'Rassemblez 2 ou 3 documents de référence sans données personnelles : horaires et jours de rendez-vous, liste des prestations, règles d’accueil du garage.',
      'Créez un Projet (Claude, ChatGPT), un Gem (Gemini) ou un agent (Copilot) et ajoutez-y ces documents.',
      'Rédigez les instructions avec le prompt de départ : rôle, questions à poser, limites (aucun diagnostic, aucun prix inventé), conduite quand l’information manque.',
      'Testez l’assistant avec les cinq messages du matériau et notez les réponses qui dépassent ses limites.',
      'Corrigez les instructions et refaites le test jusqu’à obtenir des réponses fiables, qui renvoient vers un mécanicien pour tout ce qui touche à la sécurité.',
    ],
    prompt:
      'Tu es l’assistant d’accueil de l’atelier de [nom du garage], à Nouméa. Tu aides le réceptionnaire à préparer la réponse à un client et la fiche de rendez-vous ; il relit tout avant envoi.\n\nPour chaque message client, produis :\n1. un projet de réponse de 120 mots au maximum, en vouvoiement ;\n2. une fiche de rendez-vous avec les champs : type de véhicule, kilométrage approximatif, symptôme décrit avec les mots du client, depuis quand, voyant allumé (oui/non), véhicule qui roule (oui/non), disponibilités du client ;\n3. la liste des questions encore à poser au client.\n\nRègles :\n- Tu ne poses jamais de diagnostic et tu n’indiques jamais si un véhicule peut rouler ou non : seul un mécanicien l’évalue. Pour un bruit, un voyant, un frein ou une direction, propose un rendez-vous rapide et dis que l’atelier fera le point.\n- Tu n’inventes aucun prix, délai, garantie ni disponibilité : utilise uniquement les documents du projet. Si l’information manque, dis-le et propose de transmettre à un conseiller.\n- Tu ne demandes ni nom, ni immatriculation, ni numéro de carte grise dans la fiche de test.',
    materiau: {
      titre: 'Cinq messages de test (clients fictifs)',
      texte:
        '1. « Bonjour, mon pick-up fait un bruit métallique quand je freine, c’est quoi ? Je peux rouler jusqu’à vendredi ? »\n2. « Je voudrais faire la révision de ma citadine, c’est combien et ça prend combien de temps ? »\n3. « Le voyant moteur de mon SUV s’est allumé sur la piste de Koné. Vous pouvez me dire si c’est grave ? »\n4. « Je veux un rendez-vous la semaine prochaine pour changer mes pneus ; je travaille à Païta et je ne peux venir que le mardi. »\n5. « Mon véhicule est encore sous garantie, donc vous me faites la réparation gratuitement ? »',
    },
    variantes: {
      simple:
        'Se contenter d’un prompt réutilisable enregistré dans un document, sans créer d’assistant.',
      poussee:
        'Ajouter des exemples de bonnes réponses dans les instructions, puis faire évaluer l’assistant par un collègue sur dix nouveaux messages, dont trois tentant de lui faire poser un diagnostic.',
    },
    astuces: {
      claude:
        'Dans un Projet, déposez les documents dans les connaissances du projet et collez les règles dans ses instructions.',
      chatgpt:
        'Un Projet suffit pour l’équipe ; un GPT personnalisé (création payante) permet de le partager plus largement.',
      gemini: 'Créez un Gem, collez les règles dans ses instructions et ajoutez les documents.',
      copilot:
        'Avec la licence adaptée, « Créer un agent » permet de lui donner ses instructions et ses documents, puis de le partager avec l’équipe.',
    },
    vigilance:
      'L’assistant ne connaît ni le véhicule ni l’état de la panne. Tout ce qui touche à la sécurité (freins, direction, voyants) se traite avec un mécanicien. N’ajoutez aucun document contenant des données de clients.',
    formateur: {
      resultat:
        'Un assistant qui prépare une fiche de rendez-vous utile, pose les bonnes questions, renvoie vers un mécanicien pour les messages 1 et 3, ne donne aucun prix pour le message 2 s’il ne figure pas dans ses documents et ne tranche pas la garantie du message 5.',
      criteres: [
        'Les instructions interdisent clairement tout diagnostic et toute validation du type « vous pouvez rouler ».',
        'Pour les messages 1 et 3, l’assistant propose un rendez-vous rapide au lieu de poser un diagnostic.',
        'Le message 2 ne reçoit aucun prix inventé, et le message 5 est renvoyé à un conseiller.',
        'L’apprenant a repéré au moins une réponse à corriger et a modifié les instructions.',
      ],
      pieges: [
        'Se satisfaire d’une réponse plausible du type « c’est sûrement les plaquettes, vous pouvez rouler prudemment ».',
        'Laisser l’assistant donner un prix de révision tiré d’une moyenne inventée.',
        'Charger des documents contenant des noms de clients ou des immatriculations.',
      ],
      competence: 'delegation',
      technique: 'instructions',
    },
    motsCles: ['assistant', 'accueil', 'rendez-vous', 'projet', 'gem', 'atelier'],
  },
  {
    id: 'auto-carnet-documentation-technique',
    titre:
      'Interroger la documentation technique et les notes de service avec un carnet Gemini Notebook',
    metier: 'automobile',
    niveau: 'avance',
    famille: 'synthetiser',
    duree: 45,
    outils: ['notebook', 'gemini'],
    outilConseille: 'notebook',
    situation:
      'Votre atelier reçoit des manuels du constructeur et des notes de service techniques de l’importateur, qui se corrigent parfois. Les mécaniciens cherchent dans des classeurs ou des PDF et se trompent de référence. Le chef d’atelier veut un carnet qui répond avec le passage exact de la source, et qui avoue quand l’information n’y est pas.',
    objectif:
      'Charger des documents dans un carnet, l’interroger, vérifier chaque citation et repérer les conflits entre sources et les informations absentes.',
    etapes: [
      'Créez un carnet Gemini Notebook et ajoutez comme sources trois documents (ici, les trois extraits du matériau, copiés dans trois documents distincts).',
      'Posez chacune des cinq questions de test et ouvrez chaque citation numérotée : le passage dit-il bien ce que la réponse affirme ?',
      'Vérifiez le cas où deux sources se contredisent (question 2) : le carnet le signale-t-il, et retient-il la note de service, plus récente que le manuel ?',
      'Posez la question 4, dont la réponse n’est dans aucune source : le carnet doit dire qu’il ne sait pas.',
      'Générez un rapport « fiche pratique » de l’atelier à partir des sources, puis relisez-le avec les citations.',
    ],
    prompt:
      'Tu es l’assistant documentation d’un atelier automobile en Nouvelle-Calédonie. Réponds uniquement à partir des sources du carnet. Pour chaque réponse, cite le passage utilisé. Si deux sources se contredisent, signale-le, et indique laquelle est la plus récente ou la plus précise. Si l’information ne figure pas dans les sources, réponds : « Cette information ne figure pas dans les sources. » Ne complète jamais une valeur technique de mémoire.\n\nQuestion : [posez votre question ici]',
    materiau: {
      titre: 'Trois extraits à charger comme sources (fictifs)',
      texte:
        'SOURCE 1 : Manuel d’atelier, extrait (ancienne édition)\nÉchange du filtre à carburant, modèle X : utiliser le filtre de référence FH-2040. Après l’intervention, purger le circuit selon la procédure du chapitre 4, puis contrôler l’absence de fuite moteur tournant.\n\nSOURCE 2 : Note de service technique NS-2026-07 de l’importateur\nObjet : filtre à carburant, modèle X. Le filtre FH-2040 est remplacé par le filtre FH-2041 pour les véhicules produits à partir d’avril 2026. Pour les véhicules plus anciens, les deux références sont acceptées. En cas de doute sur la date de production, consulter l’importateur avant de commander.\n\nSOURCE 3 : Note interne du chef d’atelier\nToute intervention sur le circuit de carburant est faite par un mécanicien qualifié, avec un extincteur à proximité. Les filtres sont commandés au magasin pièces, jamais en direct. Le fret demande plusieurs semaines : anticiper la commande dès la prise de rendez-vous.\n\nQUESTIONS DE TEST\n1. Quel filtre pour un modèle X produit en janvier 2026 ?\n2. Quel filtre pour un modèle X produit en juin 2026 ?\n3. Que faut-il faire après le remplacement du filtre ?\n4. Quel est le couple de serrage du raccord du filtre ?\n5. Qui peut intervenir sur le circuit de carburant, et par qui commander la pièce ?',
    },
    variantes: {
      simple:
        'Charger seulement la source 1 et la source 2 et poser uniquement les questions 1 et 2.',
      poussee:
        'Ajouter à chaque réponse un niveau de confiance justifié, puis partager le carnet avec les mécaniciens et générer chaque semaine une FAQ à jour à partir des nouvelles notes de service.',
    },
    astuces: {
      notebook:
        'Ajoutez chaque nouvelle note de service comme source, puis demandez ce qui a changé par rapport au manuel : chaque réponse cite son passage.',
      gemini:
        'Pour un premier essai hors carnet, collez les extraits dans la conversation et demandez de citer les passages ; vous retrouverez la même exigence de vérification.',
    },
    vigilance:
      'Les valeurs de sécurité (couples de serrage, références, procédures) se lisent dans la documentation officielle du constructeur, jamais dans la seule réponse d’une IA. Ne chargez que des documents dont vous avez le droit de vous servir, sans données de clients.',
    formateur: {
      resultat:
        'Un carnet qui répond aux questions 3 et 5 avec leurs citations, indique pour la question 1 que les deux références sont acceptées pour un véhicule produit avant avril 2026, signale pour la question 2 que la note de service (FH-2041) corrige le manuel (FH-2040), et répond « cette information ne figure pas dans les sources » à la question 4.',
      criteres: [
        'Chaque réponse est accompagnée d’une citation que l’apprenant a ouverte et vérifiée.',
        'La différence entre FH-2040 et FH-2041 est expliquée à partir de la note de service.',
        'La question 4 reçoit une réponse « information absente », sans valeur inventée.',
        'L’apprenant sait qu’une procédure de sécurité se vérifie dans la documentation officielle.',
      ],
      pieges: [
        'Accepter une réponse sans ouvrir la citation, qui parle parfois d’autre chose.',
        'Prendre pour une réponse un couple de serrage plausible, tiré des connaissances générales de l’IA.',
        'Ne pas voir que la note de service corrige le manuel, et commander l’ancienne référence.',
      ],
      competence: 'discernement',
      technique: 'sources',
    },
    motsCles: [
      'Gemini Notebook',
      'documentation technique',
      'notes de service',
      'sources',
      'citations',
    ],
  },
  {
    id: 'auto-rentabilite-flotte-location',
    titre:
      'Analyser la rentabilité d’une flotte de location sur un an et proposer un plan de renouvellement',
    metier: 'automobile',
    niveau: 'avance',
    famille: 'analyser',
    duree: 45,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Vous êtes agent de location dans une agence de Nouméa qui loue des citadines, des 4×4 et un minibus aux résidents et aux touristes. La gérante prépare le budget de l’an prochain : quels véhicules garder, lesquels renouveler ? Elle vous confie le relevé de dix véhicules sur douze mois.',
    objectif:
      'Enchaîner calculs, classement et recommandation sur un jeu de données chiffré, en vérifiant chaque étape et en gardant la décision.',
    etapes: [
      'Étape 1 : faites calculer, pour chaque véhicule, le taux d’occupation (jours loués sur 365), la marge (recettes moins entretien et frais fixes) et la marge par jour loué. Vérifiez deux lignes à la main.',
      'Étape 2 : demandez le calcul de la marge après amortissement, avec l’hypothèse indiquée dans le prompt, puis le classement des véhicules.',
      'Étape 3 : demandez les véhicules à surveiller (marge faible, entretien lourd, immobilisation longue), avec la raison de chacun.',
      'Étape 4 : demandez un plan de renouvellement sur deux ans, sans inventer de prix de véhicule neuf : les prix et délais de livraison se demandent aux importateurs.',
      'Étape 5 : demandez à l’IA de lister les limites de l’analyse et ce qu’il faut vérifier avant de décider.',
    ],
    prompt:
      'Tu es analyste pour une agence de location de véhicules à Nouméa. Voici le relevé de dix véhicules sur douze mois (données fictives, montants en XPF). Nous travaillons en plusieurs étapes ; ne passe à l’étape suivante que lorsque je te le demande.\n\nÉtape 1 : pour chaque véhicule, calcule le taux d’occupation (jours loués ÷ 365), la marge (recettes − entretien et réparations − assurance et frais fixes) et la marge par jour loué. Présente un tableau et donne les totaux de la flotte. Montre tes calculs. Signale toute donnée incohérente au lieu de la corriger.\nPour les étapes suivantes, l’amortissement se calcule simplement : prix d’achat ÷ 6. C’est une hypothèse de travail, à valider avec le comptable.\n\n<flotte>\n[collez le tableau]\n</flotte>',
    materiau: {
      titre: 'Flotte de location sur douze mois (données fictives)',
      texte:
        'Véhicule;Catégorie;Âge (ans);Prix d’achat (XPF);Jours loués;Jours immobilisés;Recettes (XPF);Entretien et réparations (XPF);Assurance et frais fixes (XPF)\nV01;Citadine;3;1 650 000;262;18;3 150 000;310 000;420 000\nV02;Citadine;5;1 450 000;228;31;2 400 000;540 000;380 000\nV03;Citadine;2;1 800 000;290;6;3 520 000;150 000;430 000\nV04;4×4 double cabine;4;5 200 000;215;48;5 900 000;1 180 000;720 000\nV05;4×4 double cabine;6;4 800 000;176;72;4 400 000;1 650 000;690 000\nV06;4×4 double cabine;2;6 100 000;270;12;7 650 000;420 000;780 000\nV07;Pick-up simple cabine;5;3 400 000;198;40;3 550 000;980 000;520 000\nV08;SUV compact;3;3 900 000;241;22;4 650 000;620 000;590 000\nV09;SUV compact;6;3 500 000;170;64;3 100 000;1 320 000;560 000\nV10;Minibus 9 places;4;6 200 000;150;35;5 300 000;1 050 000;830 000',
    },
    variantes: {
      simple:
        'S’arrêter à l’étape 1 : taux d’occupation, marge et marge par jour loué de chaque véhicule.',
      poussee:
        'Ajouter une saisonnalité fictive (haute saison touristique) et demander un scénario avec deux véhicules en moins, puis un Projet avec le tableau et la méthode, à rejouer chaque année.',
    },
    astuces: {
      chatgpt:
        'Déposez le tableau en CSV : l’analyse de données applique les calculs en code, que vous pouvez afficher pour vérifier les formules.',
      claude:
        'Demandez le tableau final et le plan dans un fichier Excel (création de fichiers), avec les formules visibles pour la gérante.',
      gemini:
        'Collez le tableau dans Google Sheets et utilisez « Demander à Gemini » pour ajouter les colonnes de calcul, puis vérifiez les formules proposées.',
    },
    vigilance:
      'L’amortissement sur six ans n’est qu’une hypothèse de travail : la règle comptable ou fiscale applicable se vérifie auprès du comptable. Les prix de véhicules neufs et leurs délais de livraison se demandent aux importateurs ; l’IA n’en connaît pas les valeurs actuelles en Nouvelle-Calédonie.',
    formateur: {
      resultat:
        'Une flotte de 43 620 000 XPF de recettes, 8 220 000 XPF d’entretien, 5 920 000 XPF de frais fixes et 29 480 000 XPF de marge ; V09 (636 667 XPF après amortissement), V02 et V05 à surveiller ; un minibus à l’occupation faible (41 %) mais à la marge par jour élevée ; et un plan de renouvellement prudent qui n’invente aucun prix.',
      criteres: [
        'Les totaux de la flotte (recettes, entretien, frais fixes, marge) sont exacts et vérifiés.',
        'L’apprenant a refait le calcul d’au moins deux véhicules.',
        'Le minibus V10 n’est pas écarté sur son seul taux d’occupation : sa marge par jour est élevée.',
        'Le plan de renouvellement ne contient aucun prix de véhicule neuf inventé.',
      ],
      pieges: [
        'Classer les véhicules sur le seul taux d’occupation : V10 serait écarté à tort.',
        'Laisser l’IA proposer des prix de véhicules neufs « moyens » sans source.',
        'Présenter l’amortissement sur six ans comme une règle fiscale établie.',
        'Calculer le taux d’occupation avec jours loués plus jours immobilisés au lieu des jours loués seuls.',
      ],
      competence: 'delegation',
      technique: 'decomposer',
    },
    motsCles: ['location', 'flotte', 'rentabilité', 'renouvellement', 'taux d’occupation', 'XPF'],
  },
  {
    id: 'auto-veille-vehicules-electriques',
    titre:
      'Mettre en place une veille sur les véhicules électriques et hybrides adaptés au territoire',
    metier: 'automobile',
    niveau: 'avance',
    famille: 'veiller',
    duree: 45,
    outils: ['gemini', 'chatgpt', 'claude'],
    outilConseille: 'gemini',
    situation:
      'La concession où vous travaillez reçoit de plus en plus de questions sur les véhicules électriques et hybrides. Le directeur veut savoir ce qui est réellement adapté à la Nouvelle-Calédonie : distances, chaleur, pistes, recharge, formation des mécaniciens. Il vous demande une veille trimestrielle, sourcée, et un premier rapport.',
    objectif:
      'Concevoir une veille sourcée et vérifier chaque information avant de la présenter à la direction, en séparant les faits des opinions.',
    etapes: [
      'Lancez une recherche approfondie avec le prompt de départ : Deep Research (Gemini), Recherche approfondie (ChatGPT) ou Recherche (Claude, payante).',
      'Ouvrez au moins cinq sources citées et vérifiez qu’elles disent bien ce que le rapport leur attribue. Notez ce qui n’est pas vérifiable.',
      'Repérez les affirmations sur la fiscalité, les aides, la réglementation et les tarifs d’électricité : aucune ne doit rester sans source officielle ouverte.',
      'Demandez de remettre le rapport au format de la fiche fournie, avec la source et la date de chaque ligne.',
      'Programmez la relance trimestrielle : « Programmer des actions » dans Gemini ou une tâche planifiée dans ChatGPT ou Claude (selon votre offre).',
    ],
    prompt:
      'Tu es chargé de veille pour une concession automobile de Nouméa. Recherche ce qui est publié sur les véhicules électriques et hybrides adaptés à un territoire insulaire chaud, avec des pistes, des distances limitées et un fret maritime : retours d’usage, disponibilité de la recharge, entretien et formation des mécaniciens, sécurité des interventions sur véhicules à haute tension.\n\nRègles :\n- Cite pour chaque information sa source et sa date ; indique si elle vient d’une seule source ou de plusieurs.\n- Ne donne aucun taux de taxe, aucune aide, aucune règle d’importation ni aucun tarif d’électricité sans lien vers la source officielle : renvoie vers l’organisme compétent.\n- Sépare les faits des opinions et des arguments commerciaux.\n- Si tu ne trouves pas d’information fiable, dis « je ne sais pas » plutôt que d’inventer.\n\nPrésente le résultat selon ce modèle :\n<modele>\n[collez la fiche de veille]\n</modele>',
    materiau: {
      titre: 'Fiche de veille trimestrielle (modèle)',
      texte:
        'VEILLE VÉHICULES ÉLECTRIQUES ET HYBRIDES : [trimestre]\n\n1. Ce qui est annoncé ou disponible\nÉlément;Type (hybride, électrique);Source et date;Une seule source (oui/non)\n\n2. Adaptation au territoire\nCritère (chaleur, pistes, distances, recharge, fret);Ce que disent les sources;Source et date\n\n3. Entretien et formation\nPoint;Ce que disent les sources;À vérifier auprès du constructeur ou de l’importateur\n\n4. Fiscalité, aides, réglementation (liens vers les sources officielles uniquement)\n\n5. À vérifier avant diffusion\n\n6. Trois questions à poser aux importateurs',
    },
    variantes: {
      simple:
        'Faire une seule recherche web sur la recharge des véhicules électriques en Nouvelle-Calédonie, sans planification.',
      poussee:
        'Comparer deux trimestres de rapports successifs pour suivre les évolutions, puis préparer une note d’une page pour la direction avec les trois décisions possibles et leurs risques.',
    },
    astuces: {
      gemini:
        'Exportez le rapport Deep Research dans Google Docs pour l’annoter, puis programmez la relance avec « Programmer des actions ».',
      chatgpt:
        'Une tâche planifiée (payante) relance la même demande chaque trimestre : gardez la fiche de veille dans le prompt.',
      claude:
        'Sans abonnement, la recherche web suffit pour un premier essai ; la Recherche, payante, rend un rapport plus complet.',
    },
    vigilance:
      'Une IA peut inventer une étude ou confondre un marché de métropole avec la Nouvelle-Calédonie. Taxes, aides, règles d’importation et tarifs se lisent sur les sites officiels. Les consignes de sécurité sur la haute tension relèvent du constructeur et de la formation, jamais d’un résumé d’IA.',
    formateur: {
      resultat:
        'Une fiche de veille au format demandé, où chaque information a une source datée et ouverte, où fiscalité, aides et réglementation ne sont données que par lien vers la source officielle, avec une rubrique « à vérifier » honnête et une relance trimestrielle programmée ou décrite.',
      criteres: [
        'Chaque information a une source datée, ouverte par l’apprenant.',
        'Les informations à source unique sont signalées.',
        'Aucune taxe, aide ni règle n’est affirmée sans lien vers la source officielle.',
        'Les faits sont séparés des arguments commerciaux des constructeurs.',
      ],
      pieges: [
        'Présenter comme un fait local une règle ou une aide qui ne vaut qu’en métropole.',
        'Diffuser une étude citée mais introuvable ou qui dit autre chose.',
        'Reprendre une consigne de sécurité sur la haute tension tirée du rapport de l’IA.',
      ],
      competence: 'discernement',
      technique: 'sources',
    },
    motsCles: [
      'veille',
      'véhicule électrique',
      'hybride',
      'Deep Research',
      'sources',
      'territoire',
    ],
  },
];
