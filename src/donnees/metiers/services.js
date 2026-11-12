/**
 * Services aux entreprises : nettoyage et propreté, sécurité et gardiennage, travail
 * temporaire, espaces verts, maintenance de bâtiments, conseil.
 * Toutes les personnes, entreprises, adresses et sommes sont fictives.
 */

export const vocabulaire = {
  structure: { g: 'f', s: 'société de services', p: 'sociétés de services' },
  client: { g: 'm', s: 'client', p: 'clients' },
  partenaire: { g: 'm', s: 'sous-traitant', p: 'sous-traitants' },
  documentCourant: { g: 'm', s: 'rapport d’intervention', p: 'rapports d’intervention' },
  documentLong: { g: 'm', s: 'cahier des charges', p: 'cahiers des charges' },
  reunion: {
    g: 'f',
    s: 'réunion de suivi de contrat',
    p: 'réunions de suivi de contrat',
  },
  offre: {
    g: 'f',
    s: 'prestation de nettoyage de bureaux à Ducos',
    p: 'prestations de nettoyage de bureaux à Ducos',
  },
  poste: { g: 'm', s: 'chef d’équipe propreté', p: 'chefs d’équipe propreté' },
  evenement: {
    g: 'f',
    s: 'matinée d’information pour les entreprises clientes',
    p: 'matinées d’information pour les entreprises clientes',
  },
  visuel: { g: 'f', s: 'affiche promotionnelle', p: 'affiches promotionnelles' },
  domaine: 'les services aux entreprises',
  motifReclamation: 'un passage de l’équipe de nettoyage annulé sans prévenir',
  donnees: 'le relevé des heures prévues et réalisées du mois, site par site',
  colonnes: 'Site;Prestation;Heures prévues;Heures réalisées;Montant facturé (XPF)',
  indicateur: 'le taux de réalisation des heures prévues sur le mois',
  veille:
    'les techniques et les produits de nettoyage plus respectueux de l’environnement et de la santé des agents',
  sourcesVeille:
    'la presse professionnelle de la propreté, les fiches techniques des fabricants, la presse économique calédonienne et les sites des chambres consulaires',
  jargon: 'la différence entre une prestation au forfait et une prestation en régie',
  procedure: 'la remise des clés et des badges d’un site client',
  situationTendue: 'un client mécontent qu’un agent ne soit pas arrivé à l’heure sur son site',
  donneesSensibles:
    'les noms, coordonnées et plannings des agents, les codes d’accès et les plans des sites des clients',
  corpus: 'les cahiers des charges, les contrats et les rapports de contrôle d’un client',
  publicCible:
    'les entreprises et les copropriétés du Grand Nouméa qui externalisent leur entretien',
  etranger: 'un responsable de site australien d’une entreprise cliente',
  themeFormation: 'les consignes de sécurité et de propreté d’un site client',
  tacheRepetitive: 'les confirmations de passage envoyées aux clients après chaque intervention',
  planning: 'les vacations de la semaine des six agents de sécurité d’un entrepôt',
  comparaison: 'deux devis de sous-traitance de l’entretien des espaces verts',
};

export const exercices = [
  {
    id: 'serv-main-courante-rapport',
    titre: 'Transformer la main courante d’une nuit de gardiennage en rapport pour le client',
    metier: 'services',
    niveau: 'debutant',
    famille: 'rediger',
    duree: 20,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'copilot',
    situation:
      'Vous êtes chef de poste sur l’entrepôt frigorifique de Ducos. Ce matin, le responsable d’exploitation du client veut un compte rendu lisible de la nuit. Votre main courante est écrite à la volée, avec des abréviations, et elle contient plusieurs incidents.',
    objectif:
      'Transformer des notes brutes en rapport clair et fidèle, en séparant les faits constatés de ce qu’il reste à traiter.',
    etapes: [
      'Avant tout collage, retirez de la main courante ce qui identifie quelqu’un : noms, plaques d’immatriculation, nom du client et des transporteurs (celle du matériau est fictive et déjà épurée).',
      'Copiez la main courante épurée dans votre outil d’IA avec le prompt de départ.',
      'Complétez les crochets : le destinataire du rapport et sa longueur maximale.',
      'Relisez le rapport en suivant la main courante ligne à ligne : chaque heure, chaque durée et chaque fait doivent être identiques.',
      'Repérez les mots qui interprètent (intrusion, malveillance, négligence) alors que la main courante ne décrit que des faits, et faites-les retirer.',
      'Demandez la liste des points à traiter par le client, puis une version de cinq lignes pour un message d’alerte.',
    ],
    prompt:
      'Tu es chef de poste dans une société de gardiennage à Nouméa. À partir de ma main courante ci-dessous, rédige un rapport de nuit pour [destinataire : le responsable d’exploitation du client], en [nombre] lignes au maximum.\n\nStructure : 1. résumé en trois phrases ; 2. chronologie des événements, avec l’heure de chacun ; 3. points à traiter par le client.\nRègles :\n- Décris uniquement les faits notés. Ne qualifie pas les événements (pas de « tentative d’intrusion » ni de « négligence ») et ne propose aucune cause.\n- Garde les heures et les durées telles quelles.\n- Si une information manque, écris « non précisé » au lieu de la deviner.\n\n<main_courante>\n[collez la main courante ici]\n</main_courante>',
    materiau: {
      titre: 'Main courante de la nuit du jeudi au vendredi (fictive)',
      texte:
        'Site : entrepôt frigorifique de Ducos (client : [nom du client]). Chef de poste : A. Équipe de jour : C.\n\n21h58 prise de poste, consignes passées avec C., RAS\n22h30 ronde 1 ok. portail nord mal fermé, refermé et vérifié\n23h15 alarme incendie zone C. vérif sur place : odeur de cigarette dans le local des chauffeurs, pas de feu. alarme remise à zéro à 23h40. appelé M. R. (resp. exploitation client) à 23h45, pas de réponse, message laissé\n00h20 pick-up blanc devant le portail sud, 2 personnes à bord, moteur tournant. leur ai demandé de partir, partis à 00h35. plaque notée sur le registre papier (non recopiée ici)\n01h10 ronde 2. ampoule grillée quai 3, pas d’éclairage\n02h45 camion d’un transporteur arrivé en avance (prévu 5h), pas sur la liste de la nuit. appelé l’astreinte du client, pas de réponse. relancé à 03h00, accord reçu par SMS à 03h05, camion entré. déchargement fini à 04h20\n04h30 ronde 3 RAS. chien errant dans la cour, reparti tout seul\n05h50 consignes passées à l’équipe de jour, rien d’autre à signaler',
    },
    variantes: {
      simple:
        'Demander seulement le résumé en trois phrases et la chronologie, sans les points à traiter.',
      poussee:
        'Demander ensuite deux versions du rapport, l’une pour le responsable d’exploitation du client, l’autre pour votre propre direction, et expliquer en quoi elles diffèrent.',
    },
    astuces: {
      copilot:
        'Si la main courante est dans un document Word, utilisez Copilot dans Word (selon la licence) pour reformuler le texte sans quitter le fichier.',
      claude:
        'Demandez le rapport dans un artefact : vous pourrez demander de retoucher une section sans réécrire tout le reste.',
    },
    vigilance:
      'Ne collez ni plaque d’immatriculation réelle, ni nom de personne ou d’entreprise : remplacez-les par des initiales ou une mention neutre, avant de coller. Une main courante peut servir de preuve en cas de litige : le rapport ne doit rien ajouter à ce que vous avez constaté.',
    formateur: {
      resultat:
        'Un rapport avec résumé, chronologie exacte (21h58 à 05h50) et liste des points à traiter : alarme incendie sans réponse du client, véhicule inconnu, ampoule du quai 3, camion arrivé hors liste avec accord tardif par SMS.',
      criteres: [
        'Toutes les heures et les durées sont identiques à la main courante.',
        'Aucune qualification ni cause n’est ajoutée (pas de « tentative d’intrusion », pas de coupable désigné pour la cigarette).',
        'Les points à traiter par le client sont listés, dont l’accord reçu seulement par SMS pour le camion.',
        'Le prompt précise le destinataire et le format.',
      ],
      pieges: [
        'Laisser l’IA écrire « tentative d’intrusion » pour le pick-up blanc, ce que l’agent n’a pas constaté.',
        'Voir l’heure de la remise à zéro de l’alarme (23h40) ou de l’accord du camion (03h05) changée ou arrondie.',
        'Envoyer un rapport qui laisse entendre que l’astreinte du client a failli, alors que le texte ne dit que « pas de réponse ».',
      ],
      competence: 'discernement',
      technique: 'structurer',
    },
    motsCles: ['main courante', 'gardiennage', 'rapport', 'sécurité', 'ronde'],
  },
  {
    id: 'serv-fiche-poste-remplacant',
    titre: 'Rédiger la fiche de poste d’un site pour un agent remplaçant',
    metier: 'services',
    niveau: 'debutant',
    famille: 'organiser',
    duree: 20,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Mardi soir, un agent est absent à Ducos et un remplaçant qui ne connaît pas le site viendra le remplacer. Vous n’avez que vos notes de chef de site, écrites en vrac, et pas le temps de lui faire visiter les lieux.',
    objectif:
      'Transformer des notes en vrac en fiche de poste d’une page : où, quand, quoi faire dans quel ordre, et que faire en cas de problème.',
    etapes: [
      'Copiez les notes du chef de site dans votre outil d’IA avec le prompt de départ.',
      'Vérifiez que la fiche est utilisable par quelqu’un qui découvre le site : un ordre de passage clair, des zones nommées, les horaires et la personne à appeler.',
      'Relisez les notes : l’IA a-t-elle respecté l’exception du mardi (pas d’entrepôt) et la règle du bidon bleu ?',
      'Vérifiez qu’aucun code ni information sensible n’apparaît dans la fiche.',
      'Demandez la liste des informations qui manquent pour que le remplaçant soit autonome, et complétez-la.',
    ],
    prompt:
      'Tu es chef de site dans une société de nettoyage de bureaux à Nouméa. À partir de mes notes ci-dessous, rédige la fiche de poste d’une page pour un agent remplaçant qui ne connaît pas le site, pour le [jour] soir.\n\nStructure : 1. où et quand (arrivée, horaires, accès) ; 2. ordre de passage, zone par zone, avec les tâches ; 3. produits et matériel ; 4. à ne pas faire ; 5. fermeture du site ; 6. qui appeler en cas de problème.\nRègles : utilise uniquement mes notes, n’invente aucune consigne ni aucun produit ; n’écris aucun code d’accès ; liste à part, sous le titre « À confirmer », ce qui manque ou ce qui est ambigu. Tutoie le remplaçant dans la fiche.\n\n<notes>\n[collez les notes du chef de site ici]\n</notes>',
    materiau: {
      titre: 'Notes du chef de site, écrites en vrac (fictives)',
      texte:
        'Notes de R., chef de site, pour le remplaçant de mardi\n\nSite : Pacific Négoce, ZI de Ducos, bureaux + petit entrepôt\nhoraires 17h30 à 20h30, lun à ven. normalement 3 agents mais mardi on sera 2\nse présenter à l’accueil en arrivant, badge visiteur, le gardien ouvre\nlocal produits au sous-sol, clé au tableau de l’accueil (la remettre en partant). le code de l’alarme sera donné par moi à la prise de poste, ne le noter nulle part\nzone 1 rdc : accueil, 2 salles de réunion, couloir, aspirateur puis sols humides\nzone 2 étage : 10 bureaux, ne pas déplacer les dossiers sur les bureaux, vider les corbeilles seulement\nsanitaires rdc + étage : tous les jours, avec le désinfectant du bidon bleu, le jaune c’est pour le sol de l’entrepôt\nentrepôt : seulement le mercredi (donc pas mardi)\nfenêtres : pas ce soir\ncafétéria : micro-ondes et plan de travail tous les jours, frigo le vendredi\nsi un bureau est fermé à clé on passe, on le note sur la feuille\ndernier agent éteint les lumières, ferme, remet l’alarme, sort par l’arrière\nproblème : m’appeler au 78 00 00, pas la direction du client\nattention : le sol du hall est glissant après la serpillière, mettre le panneau',
    },
    variantes: {
      simple: 'Demander seulement l’ordre de passage zone par zone, sans la partie fermeture.',
      poussee:
        'Demander aussi la version en 8 lignes à envoyer par message la veille au remplaçant, puis une check-list de fin de poste à cocher.',
    },
    astuces: {
      claude:
        'Demandez la fiche dans un artefact, puis la création de fichiers pour obtenir un document prêt à imprimer en une page.',
      copilot:
        'Transformez la réponse en Copilot Page : le chef de site peut la compléter, et les remplaçants suivants la reprennent.',
    },
    vigilance:
      'N’écrivez jamais un code d’alarme, un code de portail ni un numéro de téléphone personnel dans un outil d’IA ni sur une fiche. Une consigne inventée par l’IA (un produit, un ordre de passage) devient une consigne de travail : vérifiez-la.',
    formateur: {
      resultat:
        'Une fiche d’une page, par zone, qui exclut l’entrepôt et les fenêtres ce mardi, précise le bidon bleu pour les sanitaires, ne contient aucun code et liste en « À confirmer » ce qui manque (rôle de chacun des deux agents, heure du gardien, emplacement du panneau).',
      criteres: [
        'La fiche respecte les exceptions du jour : pas d’entrepôt ni de fenêtres.',
        'Le code de l’alarme est absent de la fiche.',
        'Aucune consigne ni aucun produit n’est ajouté au-delà des notes.',
        'Les informations manquantes sont listées au lieu d’être devinées.',
      ],
      pieges: [
        'Laisser l’IA ajouter des produits ou des gestes de sécurité qui ne figurent pas dans les notes.',
        'Inscrire l’entrepôt dans la fiche du mardi parce que « c’est prévu au site ».',
        'Recopier le numéro de téléphone du chef de site dans l’outil sans nécessité.',
      ],
      competence: 'description',
      technique: 'format',
    },
    motsCles: ['fiche de poste', 'remplacement', 'nettoyage', 'consignes', 'site'],
  },
  {
    id: 'serv-message-changement-horaires',
    titre: 'Corriger le message qui annonce à un client un changement d’horaires d’intervention',
    metier: 'services',
    niveau: 'debutant',
    famille: 'corriger',
    duree: 15,
    outils: ['copilot', 'claude', 'chatgpt', 'gemini'],
    outilConseille: 'copilot',
    situation:
      'Votre équipe de nettoyage passera désormais en soirée chez un cabinet de kinésithérapie de Nouméa, pour ne plus gêner l’accueil du matin. Un collègue a rédigé en vitesse le message d’annonce : il contient des fautes, un ton maladroit et une promesse que personne n’a autorisée.',
    objectif:
      'Faire corriger et reformuler un message professionnel en précisant le ton, et repérer ce que l’IA ne doit pas ajouter.',
    etapes: [
      'Copiez le message et les informations de contexte dans votre outil d’IA avec le prompt de départ.',
      'Demandez la version corrigée, puis la liste de ce qui a changé et pourquoi.',
      'Relisez la version : la date, l’heure et le contact sont-ils exacts ? Le message promet-il quelque chose que le contexte ne prévoit pas ?',
      'Demandez une version plus courte, en trois paragraphes, et comparez les deux tons.',
      'Choisissez la version à envoyer et faites une dernière relecture à voix haute.',
    ],
    prompt:
      'Tu es responsable d’exploitation d’une société de nettoyage à Nouméa. Corrige et améliore le message ci-dessous, destiné à une cliente. Ton attendu : courtois, clair, rassurant, au vouvoiement. Place d’abord ce qui change pour elle, puis la raison, puis ce que nous restons disposés à faire.\nRègles : n’ajoute aucune information qui ne figure ni dans le message ni dans le contexte, en particulier aucun geste commercial. Présente d’abord le message corrigé, puis la liste des modifications.\n\n<message>\n[collez le message ici]\n</message>\n\n<contexte>\n[collez le contexte ici]\n</contexte>',
    materiau: {
      titre: 'Message à corriger et contexte (fictifs)',
      texte:
        'MESSAGE À CORRIGER\nObjet : changement horaire\n\nBonjour Mme Lucas,\n\nJuste pour vous dire que a partir du lundi 7 décembre nos agents passeront plus a 6h mais a 17h30, sa nous arrange mieux et c’est comme ça maintenant. Si sa vous pose problème dite le nous mais on pourra pas changer grand chose. Les agent aurons la clé comme d’habitude. On est vraiment désolé de la gène occasionné, on vous fera un geste c’est sur. Les poubelles seront vidé en même temps.\n\nCordialement\nR.\n\nCONTEXTE\nLe cabinet ouvre à 7h30 et reçoit des patients dès l’ouverture : les agents gênaient l’accueil. Premier passage du soir : lundi 7 décembre à 17h30, du lundi au vendredi, durée inchangée (1 h 30). Le cabinet ferme à 18h, il faudra donc que le dernier patient soit parti : l’équipe commence par les couloirs et finit par les salles de soins. Contact pour en discuter : R., 78 00 00. Aucun geste commercial n’est prévu, la direction n’en a pas autorisé.',
    },
    variantes: {
      simple:
        'Se limiter à la correction de l’orthographe et de la grammaire, sans changer le ton.',
      poussee:
        'Préparer aussi une version pour les cas où la cliente refuse l’horaire, avec deux options que vous aurez fixées vous-même, puis un court message de relance pour le 1er décembre.',
    },
    astuces: {
      copilot:
        'Dans Outlook, lancez « Coaching par Copilot » sur le message avant l’envoi : il commente le ton et la clarté du point de vue de la lectrice.',
      claude:
        'Demandez la liste des modifications après le texte corrigé : vous vérifiez d’un coup d’œil qu’aucune date ni promesse n’a bougé.',
    },
    vigilance:
      'Dans un vrai message, ne collez pas le nom du client dans l’outil si vous pouvez le remplacer par des initiales. Une promesse écrite par l’IA (« un geste », « une remise ») engage la société : retirez-la.',
    formateur: {
      resultat:
        'Un message sans faute, courtois, qui annonce d’abord le changement (lundi 7 décembre à 17h30), explique la raison (ne plus gêner l’accueil), garde le contact et ne promet aucun geste commercial.',
      criteres: [
        'Aucune faute ne subsiste et la date, l’heure et le contact sont exacts.',
        'La promesse de « geste » a disparu.',
        'Le ton est courtois et n’impose pas la décision (« c’est comme ça maintenant » est retiré).',
        'La raison donnée est celle du contexte, sans invention.',
      ],
      pieges: [
        'Garder une version qui propose une remise ou un geste, ajoutée par l’IA pour « adoucir » le message.',
        'Laisser passer « 6h » au lieu de « 7h30 » dans la raison, ou une durée de passage modifiée.',
        'Envoyer un message plus long que nécessaire, que la cliente ne lira pas.',
      ],
      competence: 'discernement',
      technique: 'contexte',
    },
    motsCles: ['message', 'horaires', 'client', 'ton', 'e-mail'],
  },
  {
    id: 'serv-affiche-recrutement-canva',
    titre: 'Créer dans Canva l’affiche de recrutement d’agents pour la haute saison',
    metier: 'services',
    niveau: 'debutant',
    famille: 'visuels',
    duree: 20,
    outils: ['canva', 'chatgpt', 'claude'],
    outilConseille: 'canva',
    situation:
      'Pour la haute saison, les hôtels et résidences de l’Anse-Vata demandent plus d’agents d’entretien. Votre agence veut recruter huit personnes et afficher une annonce dans ses locaux et sur sa page Facebook.',
    objectif:
      'Préparer le texte d’une affiche avec l’IA, puis la créer et la retoucher dans Canva sans ajouter d’informations fausses.',
    etapes: [
      'Avec ChatGPT ou Claude, faites rédiger le texte de l’affiche à partir de la fiche : un titre court, trois atouts du poste et les informations pratiques.',
      'Dans Canva, décrivez l’affiche à l’IA Canva ou au Design magique : format A4 portrait, couleurs de l’agence, texte lisible de loin.',
      'Choisissez une proposition, remplacez le texte d’exemple par le vôtre et vérifiez le lieu, la durée des contrats et le contact.',
      'Utilisez l’écriture magique pour raccourcir un texte qui déborde, en gardant les informations utiles.',
      'Déclinez l’affiche en format carré pour Facebook, avec le redimensionnement magique (Pro) ou dans un nouveau design.',
    ],
    prompt:
      'Tu es chargé de communication d’une société de services en Nouvelle-Calédonie. À partir de la fiche ci-dessous, propose le texte d’une affiche de recrutement : un titre de six mots au maximum, trois atouts du poste de quatre mots chacun, puis les informations pratiques (lieu, type de contrat, horaires, comment candidater). N’ajoute aucune information absente de la fiche, en particulier aucun salaire ni aucune promesse d’embauche. Propose trois titres au choix.\n\n<fiche>\n[collez la fiche de recrutement ici]\n</fiche>',
    materiau: {
      titre: 'Fiche de recrutement (fictive)',
      texte:
        'Entreprise : Éclat Services, agence de Nouméa\nPoste : agent d’entretien (H/F), 8 postes à pourvoir pour la haute saison\nLieux : hôtels et résidences de l’Anse-Vata et de la Baie des Citrons\nContrat : missions de 3 à 6 mois, temps plein ou temps partiel selon le poste\nHoraires : en journée (7h-14h) ou en soirée (16h-21h)\nProfil : débutants acceptés, formation sur place, sens du travail soigné ; permis B apprécié\nÀ savoir : tenue fournie, passage de consignes le premier jour avec un chef d’équipe\nCandidature : CV par e-mail à recrutement@eclat-services.example ou dépôt à l’agence, du lundi au vendredi\nDate limite : le 15 janvier\nRémunération : à discuter lors de l’entretien (ne pas l’indiquer sur l’affiche)',
    },
    variantes: {
      simple:
        'Partir directement d’un modèle d’affiche Canva et n’utiliser l’IA que pour le texte.',
      poussee:
        'Créer trois affiches de style différent (sobre, chaleureuse, très visuelle), les faire commenter par le groupe, puis enregistrer la meilleure comme modèle pour les prochains recrutements.',
    },
    astuces: {
      canva:
        'Si l’entreprise a un kit de marque (Pro), appliquez-le : couleurs, polices et logo se mettent en place en un clic.',
      chatgpt:
        'Demandez trois titres, puis demandez lequel se lit le mieux à trois mètres, et pourquoi.',
    },
    vigilance:
      'Une affiche de recrutement engage l’entreprise : rien sur le salaire ni sur les conditions de travail qui ne soit validé. N’illustrez pas avec des personnes réelles sans leur accord ; les images générées doivent rester génériques.',
    formateur: {
      resultat:
        'Une affiche A4 lisible, avec un titre court, trois atouts tirés de la fiche, les informations pratiques exactes (huit postes, missions de 3 à 6 mois, date limite du 15 janvier) et sans salaire, avec sa version carrée.',
      criteres: [
        'Le lieu, le type de contrat, les horaires, le contact et la date limite sont exacts.',
        'Aucune rémunération ni promesse d’embauche n’apparaît.',
        'L’affiche se lit de loin : peu de mots, bon contraste.',
        'L’apprenant a retiré le texte d’exemple du modèle Canva.',
      ],
      pieges: [
        'Laisser l’IA inventer un salaire « attractif » ou des avantages (primes, logement).',
        'Garder le texte d’exemple du modèle Canva, avec un faux numéro de téléphone.',
        'Recopier toute la fiche sur l’affiche au lieu de n’en garder que l’essentiel.',
      ],
      competence: 'diligence',
      technique: 'format',
    },
    motsCles: ['affiche', 'recrutement', 'Canva', 'haute saison', 'agent d’entretien'],
  },
  {
    id: 'serv-planning-douze-agents',
    titre: 'Établir le planning d’une semaine pour douze agents sur cinq sites, avec deux absences',
    metier: 'services',
    niveau: 'intermediaire',
    famille: 'organiser',
    duree: 45,
    outils: ['chatgpt', 'claude', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Vous êtes planificateur dans une société de propreté du Grand Nouméa. Lundi matin, deux agents sont absents plusieurs jours et les cinq sites du client doivent tous être couverts, avec des horaires différents et des agents qui ne peuvent pas tout faire.',
    objectif:
      'Construire un planning sous contraintes avec l’IA, vérifier chaque règle soi-même, puis corriger la proposition en plusieurs échanges.',
    etapes: [
      'Collez les agents, les absences, les besoins et les règles dans votre outil d’IA, et demandez un planning du lundi au samedi sous forme de tableau (un agent par ligne, un jour par colonne).',
      'Vérifiez le planning contrainte par contrainte : absences, formation exigée à la clinique, véhicule pour Païta, horaires des deux agentes, repos entre deux postes, cinq postes maximum.',
      'Comptez les postes par site et par jour : chaque case du tableau des besoins est-elle couverte ?',
      'Signalez à l’IA chaque erreur trouvée, et demandez une version corrigée, avec la liste de ce qu’elle a changé.',
      'Demandez enfin le message d’une ligne à envoyer à chaque agent pour lui communiquer son planning, et relisez-le.',
    ],
    prompt:
      'Tu es planificateur dans une société de propreté à Nouméa. Établis le planning de la semaine, du lundi au samedi, pour les douze agents et les cinq sites décrits ci-dessous. Présente un tableau : une ligne par agent, une colonne par jour, avec le code du site ou « repos ».\nRespecte toutes les règles. Si deux contraintes sont incompatibles, dis-le clairement au lieu de choisir à ma place. À la fin, vérifie toi-même le planning : pour chaque site et chaque jour, indique le nombre d’agents prévus et le nombre demandé.\n\n<donnees>\n[collez les agents, les absences, les besoins et les règles ici]\n</donnees>',
    materiau: {
      titre: 'Agents, absences, besoins et règles (fictifs)',
      texte:
        'AGENTS (12)\nMaéva, Jean, Sonia : formés à l’hygiène hospitalière (seuls autorisés à la clinique)\nKévin, Luc, Teiva, Paul, Marc : ont un véhicule, seuls à pouvoir aller à Païta\nTiare, Naïs : indisponibles avant 9h (enfants à déposer à l’école)\nMoana, Hina : aucune contrainte particulière\n\nABSENCES\nMaéva : absente du lundi au mercredi (arrêt maladie)\nPaul : absent du jeudi au samedi (formation)\n\nSITES ET BESOINS (nombre d’agents par jour)\nSite;Code;Horaires;Lun;Mar;Mer;Jeu;Ven;Sam\nTour Océane (bureaux, Nouméa);B;17h30-20h30;2;2;2;2;2;0\nClinique de Magenta (agents formés);C;6h-10h;2;2;2;2;2;1\nCentre commercial de Dumbéa;D;5h30-9h30;1;1;1;1;2;2\nÉcole de Païta (véhicule);E;15h30-18h30;2;2;0;2;2;0\nHôtel Anse-Vata;H;10h-15h;1;1;1;1;2;2\n\nRÈGLES INTERNES (fictives)\n- un agent fait au plus un poste par jour et cinq postes par semaine\n- au moins 11 h entre deux postes : concrètement, pas de poste du soir (Tour Océane) suivi d’un poste du matin (clinique ou centre commercial) le lendemain\n- chaque site doit avoir son nombre d’agents chaque jour concerné',
    },
    variantes: {
      simple:
        'Ne planifier que les trois premiers jours (lundi à mercredi), pour vérifier plus facilement chaque règle.',
      poussee:
        'Ajouter un troisième imprévu en cours de semaine (Naïs absente jeudi et vendredi) et demander une version qui change le moins possible de postes déjà annoncés aux agents.',
    },
    astuces: {
      chatgpt:
        'Demandez le planning au format Excel, avec une ligne de contrôle qui compte les agents par site et par jour.',
      claude:
        'Demandez le planning dans un fichier Excel (création de fichiers), puis comparez-le avec le tableau des besoins avant toute diffusion.',
      copilot:
        'Transformez la réponse en Copilot Page : les chefs de site peuvent la lire et signaler un problème directement dans la page.',
    },
    vigilance:
      'Un planning de 45 postes se vérifie case par case : l’IA affirme volontiers que « toutes les contraintes sont respectées ». Ne collez que des prénoms ou des initiales, pas de coordonnées. Les règles sur la durée du travail et les repos sont à vérifier auprès du service RH et de la réglementation : celles de l’exercice sont fictives.',
    formateur: {
      resultat:
        'Un planning de 45 postes qui couvre tous les sites chaque jour. Jean et Sonia tiennent seuls la clinique du lundi au mercredi, Maéva reprend au moins un poste de clinique entre jeudi et samedi, et aucun agent du soir ne commence tôt le lendemain. Une solution existe : à vous de la vérifier.',
      criteres: [
        'Les 45 postes demandés sont couverts : l’apprenant a compté les agents par site et par jour.',
        'Maéva n’apparaît pas avant jeudi, Paul pas à partir de jeudi.',
        'Seuls Maéva, Jean et Sonia sont à la clinique, seuls les agents avec véhicule à Païta, et Tiare et Naïs jamais avant 9h.',
        'Aucun agent n’a plus de cinq postes, ni un poste du soir suivi d’un poste du matin.',
      ],
      pieges: [
        'Accepter un planning où Maéva travaille dès lundi ou où la clinique est couverte par un agent non formé.',
        'Croire l’IA quand elle écrit que le tableau est correct sans recompter.',
        'Oublier le repos entre un poste de soir à la Tour Océane et le poste du matin à la clinique.',
        'Corriger une erreur en cassant une autre case du planning sans s’en apercevoir.',
      ],
      competence: 'discernement',
      technique: 'iterer',
    },
    motsCles: ['planning', 'agents', 'absences', 'contraintes', 'remplacement'],
  },
  {
    id: 'serv-devis-nettoyage-bureaux',
    titre: 'Chiffrer un devis de nettoyage de bureaux à partir du relevé des surfaces',
    metier: 'services',
    niveau: 'intermediaire',
    famille: 'analyser',
    duree: 30,
    outils: ['gemini', 'chatgpt', 'claude', 'copilot'],
    outilConseille: 'gemini',
    situation:
      'Une entreprise de Nouméa vous demande un devis mensuel pour le nettoyage de ses bureaux. Vous avez relevé les surfaces et fixé le nombre de passages. Il faut transformer ce relevé en heures, puis en prix, avec les cadences et les coûts de la société.',
    objectif:
      'Faire calculer un devis à l’IA en lui donnant la méthode, repérer ce qui manque, puis refaire le calcul pour vérifier.',
    etapes: [
      'Collez le relevé et les paramètres de calcul dans votre outil d’IA, avec le prompt de départ, et demandez la méthode avant tout chiffre.',
      'Demandez le tableau des heures par zone (surface divisée par la cadence, multipliée par le nombre de passages) et la somme des heures annuelles.',
      'Repérez la zone sans cadence : l’IA a-t-elle inventé une valeur, ou vous a-t-elle posé la question ?',
      'Demandez le prix mensuel, puis refaites le calcul à la calculatrice : coût, encadrement, marge de 12 % du prix de vente.',
      'Demandez le prix avec une hypothèse pour la cadence manquante, présentée comme telle, puis préparez la phrase qui l’explique au client.',
    ],
    prompt:
      'Tu es chargé d’affaires dans une société de nettoyage à Nouméa. Je dois chiffrer un devis mensuel de nettoyage de bureaux à partir du relevé ci-dessous.\nMéthode : heures annuelles d’une zone = surface ÷ cadence × passages par an. Coût direct = heures totales × coût horaire + consommables ; on ajoute l’encadrement ; le prix de vente est tel que la marge représente le pourcentage demandé du prix de vente.\nMontre les calculs zone par zone. Si une donnée manque, n’en invente pas : dis-moi laquelle et propose une hypothèse clairement signalée. Termine par le prix mensuel hors taxes.\n\n<releve>\n[collez le relevé et les paramètres ici]\n</releve>',
    materiau: {
      titre: 'Relevé des surfaces et paramètres (fictifs)',
      texte:
        'CLIENT : cabinet d’architectes, 3 étages à Nouméa-centre (hors taxes)\n\nZone;Surface (m²);Passages par an;Cadence (m²/h)\nOpen space plateau 1;420;250;350\nOpen space plateau 2;380;250;350\nBureaux fermés (14);210;250;300\nCirculations et escaliers;160;250;250\nSanitaires (6 blocs);64;250;45\nSalle de pause et cuisine;38;250;\nSalles de réunion (4);96;150;300\nHall d’accueil;55;250;200\nVitrerie intérieure;210;12;60\nShampouinage de la moquette;590;2;120\n\nPARAMÈTRES\n- coût horaire chargé d’un agent : 3 100 XPF\n- consommables et petit matériel : 38 000 XPF par mois\n- encadrement et gestion : 10 % du coût direct\n- marge visée : 12 % du prix de vente (et non 12 % de plus que le coût)\n- le client paie une facture mensuelle égale au douzième du total annuel',
    },
    variantes: {
      simple:
        'Ne chiffrer que les quatre premières zones et le coût de main-d’œuvre, sans encadrement ni marge.',
      poussee:
        'Faire chiffrer deux scénarios (passage quotidien ou trois passages par semaine pour les bureaux fermés), puis rédiger un court mail qui explique la différence de prix au client.',
    },
    astuces: {
      gemini:
        'Collez le relevé dans Google Sheets et utilisez « Demander à Gemini » (Sheets) pour ajouter la colonne des heures annuelles, puis vérifiez une ligne à la main.',
      chatgpt:
        'Déposez le relevé : l’analyse de données calcule en code, que vous pouvez afficher pour contrôler la formule.',
      copilot:
        'Mettez le relevé dans un tableau Excel avant de le confier à Copilot dans Excel (selon la licence) : il le lit beaucoup mieux.',
    },
    vigilance:
      'Un devis engage la société : prix, cadences et marge sont ceux que vous validez, pas ceux de l’IA. Une cadence inventée pour combler un vide fausse tout le prix.',
    formateur: {
      resultat:
        'Environ 1 431 heures par an hors salle de pause, soit un prix d’environ 509 000 XPF par mois ; avec une hypothèse de 80 m²/h pour la salle de pause (environ 119 heures de plus), environ 1 549 heures et 548 000 XPF par mois. La cadence manquante est signalée, pas inventée.',
      criteres: [
        'La cadence manquante de la salle de pause est signalée et son hypothèse est présentée comme telle.',
        'Les heures par zone sont justes, par exemple environ 356 heures pour les sanitaires et 300 pour le plateau 1.',
        'La marge est calculée sur le prix de vente (prix = coût ÷ 0,88), pas par un coefficient de 1,12.',
        'L’apprenant a refait au moins un calcul à la main.',
      ],
      pieges: [
        'Laisser l’IA inventer une cadence pour la salle de pause sans le dire.',
        'Calculer la marge en multipliant le coût par 1,12 : le prix mensuel tombe alors autour de 502 000 XPF, trop bas.',
        'Oublier les passages de vitrerie et de shampouinage, ou les compter une fois par mois.',
        'Facturer l’année entière en un seul mois par confusion entre « passages par an » et « par mois ».',
      ],
      competence: 'discernement',
      technique: 'decomposer',
    },
    motsCles: ['devis', 'nettoyage', 'cadence', 'heures', 'marge', 'XPF'],
  },
  {
    id: 'serv-controles-qualite-trimestre',
    titre: 'Analyser les contrôles qualité d’un trimestre et préparer le point avec le client',
    metier: 'services',
    niveau: 'intermediaire',
    famille: 'analyser',
    duree: 30,
    outils: ['chatgpt', 'claude', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Vous êtes responsable d’exploitation. Demain, vous présentez le bilan du trimestre au directeur de la clinique de Magenta, et votre direction souhaite aussi une vue d’ensemble des quatre sites. Les contrôles qualité sont dans un tableau, avec les notes de vos chefs de site.',
    objectif:
      'Faire analyser un tableau de résultats, repérer une anomalie et une tendance, et préparer un point client sans transformer une hypothèse en certitude.',
    etapes: [
      'Collez le tableau et les notes des chefs de site dans votre outil d’IA, et demandez d’abord le taux de conformité de chaque site, mois par mois.',
      'Vérifiez deux taux à la calculatrice et repérez toute valeur qui vous semble impossible.',
      'Demandez les tendances : quel site se dégrade, quel site est stable, et quelles pénalités ont été facturées.',
      'Demandez de séparer ce qui est établi (chiffres), ce qui est probable (lien avec les notes) et ce qui reste à vérifier.',
      'Demandez le plan du point avec le client de la clinique : trois messages, un plan d’action et les questions à lui poser.',
    ],
    prompt:
      'Tu es responsable d’exploitation dans une société de propreté à Nouméa. Voici les résultats des contrôles qualité du trimestre pour quatre sites, avec les notes des chefs de site.\n\n1. Calcule le taux de conformité (points conformes ÷ points contrôlés) de chaque site pour chaque mois, et le total du trimestre par site.\n2. Signale toute valeur incohérente au lieu de la corriger.\n3. Décris les tendances et les pénalités facturées.\n4. Sépare ce qui est établi par les chiffres, ce qui est une hypothèse issue des notes, et ce qu’il faut vérifier.\n5. Prépare le plan d’un point de 20 minutes avec le directeur de la clinique : trois messages, un plan d’action, deux questions à lui poser.\nMontre tes calculs.\n\n<controles>\n[collez le tableau et les notes ici]\n</controles>',
    materiau: {
      titre: 'Contrôles qualité du trimestre et notes des chefs de site (fictifs)',
      texte:
        'Site;Mois;Points contrôlés;Points conformes;Pénalités facturées (XPF)\nTour Océane (bureaux);Juillet;120;112;0\nTour Océane (bureaux);Août;120;115;0\nTour Océane (bureaux);Septembre;120;118;0\nClinique de Magenta;Juillet;200;190;0\nClinique de Magenta;Août;200;181;60 000\nClinique de Magenta;Septembre;200;164;150 000\nCentre commercial de Dumbéa;Juillet;150;141;0\nCentre commercial de Dumbéa;Août;150;139;0\nCentre commercial de Dumbéa;Septembre;150;142;0\nHôtel Anse-Vata;Juillet;180;171;0\nHôtel Anse-Vata;Août;180;186;0\nHôtel Anse-Vata;Septembre;180;162;40 000\n\nNOTES DES CHEFS DE SITE\nClinique : deux agents formés ont quitté l’équipe en août, remplacés en partie par des intérimaires pas encore formés ; plusieurs remarques de l’infirmière référente sur les poignées de porte.\nHôtel : saisie d’août faite à la main par un remplaçant, à vérifier ; en septembre, nombreuses chambres rendues en retard à cause d’une forte occupation.\nCentre commercial : vitres de l’entrée régulièrement signalées, mais sans pénalité.\nTour Océane : même équipe stable depuis un an.',
    },
    variantes: {
      simple:
        'Calculer seulement les taux de conformité par site et par mois, sans plan du point client.',
      poussee:
        'Demander un graphique de l’évolution des taux par site, puis un compte rendu d’une page pour la direction, relu ligne à ligne avec les chiffres du tableau.',
    },
    astuces: {
      chatgpt:
        'Déposez le tableau : l’analyse de données calcule et trace le graphique demandé ; vérifiez un total à la main.',
      claude:
        'Demandez un tableau de synthèse et un graphique dans un artefact, puis les deux questions à poser au client.',
      gemini:
        'Collez le tableau dans Google Sheets et utilisez « Demander à Gemini » (Sheets) pour ajouter la colonne du taux, puis demandez d’expliquer la tendance.',
    },
    vigilance:
      'Un lien entre le départ des agents formés et la baisse de qualité est une hypothèse, pas un fait : ne l’annoncez pas comme une certitude au client. Ne citez pas de noms d’agents ni d’intérimaires dans les documents.',
    formateur: {
      resultat:
        'Des taux exacts (clinique : 95,0 % en juillet, 90,5 % en août, 82,0 % en septembre ; Tour Océane : de 93,3 % à 98,3 %), l’anomalie de l’hôtel en août (186 points conformes pour 180 contrôlés, soit 103,3 %), 250 000 XPF de pénalités au trimestre (210 000 XPF clinique, 40 000 XPF hôtel) et un plan de point client prudent.',
      criteres: [
        'L’apprenant a vérifié au moins deux taux à la main.',
        'La valeur impossible de l’hôtel en août est repérée et non corrigée silencieusement.',
        'La dégradation de la clinique est mise en évidence, avec les pénalités correspondantes.',
        'Le lien avec le départ des agents formés est présenté comme une hypothèse à vérifier.',
      ],
      pieges: [
        'Laisser un taux supérieur à 100 % dans le bilan, ou le moyenner sans le dire.',
        'Annoncer au directeur de la clinique que « les intérimaires sont la cause du problème ».',
        'Comparer des sites au volume de contrôles très différent sans parler de taux.',
      ],
      competence: 'discernement',
      technique: 'critique',
    },
    motsCles: ['contrôle qualité', 'taux de conformité', 'pénalités', 'bilan', 'client'],
  },
  {
    id: 'serv-preselection-interimaires',
    titre:
      'Présélectionner des profils d’intérimaires pour une mission, avec des critères explicites',
    metier: 'services',
    niveau: 'intermediaire',
    famille: 'analyser',
    duree: 30,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Vous êtes chargé de recrutement dans une agence d’intérim de Koné. Un client minier cherche quatre agents de propreté industrielle pour une mission de trois mois sur un site industriel de la zone de Koné. Vous avez six fiches de candidats anonymisées et un délai court.',
    objectif:
      'Fixer des critères liés au poste avant de regarder les profils, faire présélectionner par l’IA, puis contrôler qu’aucun critère interdit n’intervient.',
    etapes: [
      'Collez la mission et vos critères dans votre outil d’IA, sans les fiches, et demandez de séparer les critères éliminatoires des critères pondérés.',
      'Corrigez la grille : seuls des critères liés au poste doivent y figurer.',
      'Ajoutez les six fiches et demandez un tableau profil par profil : chaque critère est-il rempli, avec quelle information de la fiche ?',
      'Vérifiez que l’IA n’a utilisé ni l’âge, ni la situation familiale, ni l’état de santé, ni une remarque subjective du recruteur.',
      'Demandez la présélection de quatre profils au maximum, avec la raison de chaque retenue et de chaque exclusion, puis décidez vous-même.',
    ],
    prompt:
      'Tu es assistant d’un chargé de recrutement dans une agence d’intérim en Nouvelle-Calédonie. Je veux présélectionner des profils pour la mission ci-dessous.\n\nÉtape 1 : à partir de la mission, propose la liste des critères éliminatoires (indispensables) et des critères pondérés (souhaitables), tous liés au poste. N’utilise jamais l’âge, la situation familiale, l’état de santé, l’origine ou une remarque subjective sur la personne. Pour l’instant, ne regarde aucune fiche.\n\n<mission>\n[collez la mission et vos critères ici]\n</mission>',
    materiau: {
      titre: 'Mission et six fiches de candidats anonymisées (fictives)',
      texte:
        'MISSION\nQuatre agents de propreté industrielle, site industriel de la zone de Koné, 3 mois, temps plein, début le 1er décembre. Horaires 5h-13h du lundi au vendredi. Navette départ de Koné à 4h15 pour les personnes sans véhicule. Accueil sécurité du site obligatoire (valable un an), sinon une demi-journée de formation avant la prise de poste. Expérience de la propreté en milieu industriel appréciée.\n\nFICHES\nRéf;Expérience propreté;Dernière mission;Disponible;Accueil sécurité site;Permis B;Domicile;Âge;Situation familiale;Remarque du recruteur\nC1;3 ans en propreté industrielle;mine, 2025;1er décembre;valide jusqu’en mars;oui;Koné;29;célibataire;bon contact\nC2;6 mois en nettoyage de bureaux;bureaux, 2026;immédiatement;non;oui;Nouméa;52;marié;ponctuel\nC3;5 ans en bureaux et 1 an en industrie;usine, 2026;1er décembre;valide jusqu’en mars;oui;Voh;41;trois enfants;a trois enfants, risque d’absences ?\nC4;2 ans en propreté industrielle;mine, 2025;15 décembre;valide jusqu’en juin;non;Koné;24;célibataire;motivé\nC5;1 an en nettoyage industriel;conserverie, 2026;1er décembre;valide jusqu’en mai;oui;Païta;35;en couple;souhaite plutôt du temps partiel\nC6;8 ans en propreté dont 4 en industrie;mine, 2024;1er décembre;expiré en octobre;oui;Koné;58;marié;arrêt maladie il y a deux ans',
    },
    variantes: {
      simple: 'Se limiter à la grille de critères (étape 1), sans analyser les fiches.',
      poussee:
        'Faire jouer à l’IA un recruteur qui conteste votre présélection, puis rédiger les deux messages : un pour les candidats retenus, un pour ceux qui ne le sont pas.',
    },
    astuces: {
      claude:
        'Demandez le tableau dans un artefact : une colonne par critère, avec l’information de la fiche citée dans chaque case.',
      chatgpt:
        'Dans le canevas, retirez à la main les colonnes âge et situation familiale avant de lancer l’analyse, pour ne pas laisser l’IA les utiliser.',
      copilot:
        'Mettez les fiches dans un tableau Excel avant de les confier à Copilot dans Excel (selon la licence), sans les colonnes qui ne servent pas à la sélection.',
    },
    vigilance:
      'Un outil d’IA reproduit facilement des préjugés : l’âge, les enfants ou la santé ne doivent jamais intervenir dans une sélection. Les règles sur la non-discrimination se vérifient auprès de votre direction. Gardez la décision humaine : l’IA aide à trier, elle ne choisit pas. Ne collez que des fiches anonymisées.',
    formateur: {
      resultat:
        'Une grille de critères liés à la mission, un tableau profil par profil avec les informations citées, et une présélection justifiée : C1 et C3 retenus, C6 retenu avec la demi-journée d’accueil sécurité prévue par la mission, C5 retenu sous réserve qu’il accepte un temps plein et le trajet depuis Païta (à lui demander, pas à supposer), C4 exclu faute de disponibilité au 1er décembre, C2 classé derrière faute d’expérience industrielle.',
      criteres: [
        'Les critères sont définis avant l’examen des fiches, et tous liés à la mission.',
        'Ni l’âge, ni la situation familiale, ni l’arrêt maladie n’interviennent dans la décision.',
        'Chaque exclusion s’appuie sur un critère écrit de la grille, avec l’information de la fiche.',
        'La décision finale est formulée par l’apprenant, qui a relu le tableau.',
      ],
      pieges: [
        'Laisser l’IA écarter C3 à cause de la remarque « trois enfants, risque d’absences ».',
        'Écarter C6 à cause de son âge ou de son arrêt maladie, au lieu de simplement noter l’accueil sécurité expiré.',
        'Rejeter C4 pour l’absence de permis alors que la navette de Koné est prévue.',
        'Accepter un classement sans trace des critères qui l’ont produit.',
      ],
      competence: 'diligence',
      technique: 'structurer',
    },
    motsCles: ['intérim', 'recrutement', 'présélection', 'critères', 'biais', 'candidats'],
  },
  {
    id: 'serv-appel-offres-proprete-notebook',
    titre: 'Préparer la réponse à un appel d’offres de propreté avec un carnet Gemini Notebook',
    metier: 'services',
    niveau: 'avance',
    famille: 'synthetiser',
    duree: 60,
    outils: ['notebook', 'gemini', 'claude', 'chatgpt'],
    outilConseille: 'notebook',
    situation:
      'La mairie de Koné lance un appel d’offres pour le nettoyage de trois bâtiments communaux. Vous êtes responsable du dossier de réponse de votre société. Le règlement et le cahier des charges comptent des dizaines de pages, et la date limite approche.',
    objectif:
      'Exploiter un corpus de documents avec Gemini Notebook, repérer ce qui est exigé, contradictoire ou manquant, puis bâtir le plan d’une offre qui répond aux critères de jugement.',
    etapes: [
      'Créez un carnet Gemini Notebook et chargez les deux documents du matériau comme sources (en pratique, vous y mettrez les PDF complets).',
      'Interrogez le carnet avec le prompt de départ : fiche du marché, exigences, contradictions, questions à poser.',
      'Ouvrez les citations : vérifiez chaque exigence et chaque contradiction dans le passage cité, et notez ce que le carnet dit ne pas trouver.',
      'Demandez le plan du mémoire technique (15 pages maximum) construit sur les critères de jugement, avec le nombre de pages par partie.',
      'Générez un rapport de synthèse (briefing) et une liste de questions à envoyer à la collectivité, puis décidez de répondre ou non, avec vos critères.',
    ],
    prompt:
      'À partir uniquement des sources de ce carnet, prépare mon dossier de réponse à l’appel d’offres :\n1. Fiche d’identité du marché : objet, durée, bâtiments et surfaces, jours et horaires, date limite de remise.\n2. Exigences, classées en obligatoires (pièces, visite, conditions) et notées (critères de jugement avec leur pondération).\n3. Contradictions ou manques entre les documents.\n4. Questions à poser à la collectivité.\n5. Plan détaillé du mémoire technique de 15 pages maximum, avec le nombre de pages par partie, en fonction des pondérations.\nCite la source de chaque point. Si une information n’est pas dans les sources, écris « non trouvé » : n’invente rien.',
    materiau: {
      titre: 'Deux extraits à charger comme sources (fictifs)',
      texte:
        'DOCUMENT 1 : RÈGLEMENT DE CONSULTATION (extrait)\nObjet : nettoyage des locaux de la mairie de Koné, de la médiathèque et du gymnase municipal. Marché de 3 ans, reconductible une fois un an.\nArt. 2 : visite des sites obligatoire, sur rendez-vous, avant le 8 janvier.\nArt. 3 : remise des offres au plus tard le 15 janvier à 11h, en deux enveloppes (candidature, offre).\nArt. 5 : jugement des offres : prix 40 %, valeur technique 40 % (moyens humains, organisation, formation, contrôle qualité), engagements environnementaux 20 % (produits écolabellisés, gestion des déchets).\nArt. 6 : pièces à fournir : attestations de régularité sociale et fiscale à jour, références de trois contrats similaires de moins de cinq ans, liste de l’encadrement, mémoire technique de 15 pages au maximum.\nArt. 7 : le candidat indique s’il envisage de reprendre le personnel du prestataire sortant ; les conditions sont à confirmer avec la collectivité.\n\nDOCUMENT 2 : CAHIER DES CLAUSES TECHNIQUES (extrait)\nMairie : 1 450 m², nettoyage 5 jours sur 7, du lundi au vendredi, entre 17h et 20h. Sanitaires 2 fois par jour.\nMédiathèque : 820 m², du mardi au samedi, de 6h à 9h (ouverture au public à 9h30). Rayonnages et vitrerie 1 fois par mois.\nGymnase : 1 100 m² dont 600 m² de parquet sportif ; passage tous les jours, y compris le dimanche en période de compétition (calendrier communiqué chaque trimestre). Sur le parquet : uniquement les produits validés par le service des sports.\nPénalités : retard de passage ou prestation non conforme : [montant forfaitaire] par constat (annexe 4, non jointe à cet extrait).\nContrôle qualité : visites mensuelles de la commune, notation sur 20 ; moins de 12 pendant deux mois de suite : mise en demeure.\nAnnexe 2 (planning de référence) : mairie, 6 jours sur 7.\nRemise des offres : 22 janvier, 11h (rectificatif n° 1).',
    },
    variantes: {
      simple:
        'Se limiter à la fiche d’identité du marché et aux exigences obligatoires (questions 1 et 2).',
      poussee:
        'Ajouter comme sources vos trois références de contrats similaires et votre mémoire technique de l’an dernier, puis demander ce que vous pouvez réutiliser et ce que le cahier des charges vous oblige à réécrire.',
    },
    astuces: {
      notebook:
        'Ajoutez les documents comme sources, puis générez un rapport (synthèse ou FAQ) : chaque point renvoie à sa source. La carte mentale aide à voir les liens entre exigences et critères.',
      gemini:
        'Gemini sert à rédiger le texte du mémoire une fois le plan validé ; collez-y seulement les passages vérifiés, pas les documents du marché complets.',
      claude:
        'Un Projet peut garder vos modèles de mémoire technique et vos références, pour les reprendre à chaque appel d’offres.',
    },
    vigilance:
      'Aucune date, aucun montant ni aucune pondération ne se retient sans ouvrir la citation. Les règles de passation d’un marché public se vérifient auprès de la collectivité et de votre service juridique : le carnet ne fait que lire les documents. Ne chargez pas de documents confidentiels de votre société sans autorisation.',
    formateur: {
      resultat:
        'Une fiche du marché exacte (3 bâtiments, environ 3 370 m², 3 ans plus un an), les critères pondérés (40 / 40 / 20), les contradictions repérées (mairie 5 jours ou 6 jours, date limite du 15 ou du 22 janvier, montant des pénalités absent), une liste de questions pour la collectivité et un plan de mémoire de 15 pages réparti entre la valeur technique (40) et l’environnement (20), soit environ 10 et 5 pages, le prix (40) étant jugé sur l’offre de prix et non dans le mémoire.',
      criteres: [
        'Les contradictions sur les jours de la mairie et la date limite sont repérées, avec leurs citations.',
        'Les montants de pénalités sont signalés « non trouvé », pas inventés.',
        'Le plan du mémoire respecte les 15 pages et donne plus de place à la valeur technique qu’à l’environnement.',
        'L’apprenant a ouvert au moins cinq citations pour les vérifier.',
      ],
      pieges: [
        'Retenir la date du 15 janvier sans voir le rectificatif qui la repousse au 22.',
        'Présenter le planning de la mairie comme certain, alors que le texte et l’annexe se contredisent.',
        'Laisser le carnet affirmer une règle de reprise du personnel sans la citation de l’article.',
      ],
      competence: 'discernement',
      technique: 'sources',
    },
    motsCles: [
      'appel d’offres',
      'Gemini Notebook',
      'cahier des charges',
      'mémoire technique',
      'propreté',
    ],
  },
  {
    id: 'serv-assistant-consignes-remplacement',
    titre: 'Créer un assistant qui prépare les consignes de site et les messages de remplacement',
    metier: 'services',
    niveau: 'avance',
    famille: 'automatiser',
    duree: 60,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Chaque semaine, vous réécrivez à la main les consignes pour un remplaçant et les SMS qui cherchent un agent disponible. Vous avez des fiches de poste par site : vous voulez un assistant qui prépare ces textes, que vous relisez avant envoi.',
    objectif:
      'Créer un assistant avec des instructions permanentes et des fiches de poste comme documents de référence, puis le tester sur des cas réels, dont un où l’information manque.',
    etapes: [
      'Rassemblez vos fiches de poste, sans code d’accès ni coordonnées personnelles : vous en avez deux dans le matériau pour les tests.',
      'Créez un Projet (Claude, ChatGPT), un Gem (Gemini) ou un agent (Copilot) et ajoutez-y les fiches.',
      'Rédigez les instructions avec le prompt de départ : rôle, sources à utiliser, format des consignes et des SMS, conduite à tenir quand l’information manque.',
      'Testez l’assistant avec les trois demandes du matériau et notez ce qui est faux, inventé ou trop long.',
      'Corrigez les instructions, refaites le test, puis faites essayer l’assistant à un collègue sur un cas réel.',
    ],
    prompt:
      'Tu es l’assistant du planificateur d’une société de propreté en Nouvelle-Calédonie. Tu prépares deux types de textes, qu’un responsable relit avant envoi : des consignes de site pour un agent remplaçant et des SMS de recherche de remplaçant.\n\nRègles :\n- Utilise uniquement les fiches de poste de ce projet. Cite la fiche utilisée.\n- Si le site n’a pas de fiche ou si une information manque, dis-le clairement et liste ce qu’il faut me demander. N’invente jamais un produit, un horaire ou un contact.\n- N’écris jamais de code d’accès ni de numéro de téléphone personnel.\n- Consignes : une page au maximum, au tutoiement, structurées par zone, avec la rubrique « À ne pas faire ».\n- SMS : 300 caractères au maximum, avec le site, les horaires, la condition de formation si la fiche en demande une, et la façon de répondre.',
    materiau: {
      titre: 'Deux fiches de poste et trois demandes de test (fictives)',
      texte:
        'FICHE A : CLINIQUE DE MAGENTA (matin, 6h-10h)\nAccès : entrée du personnel côté parking, badge à retirer à la sécurité, à rendre à 10h.\nZones : couloirs du 1er étage, 12 chambres, 2 blocs sanitaires, salle de soins.\nPrincipe : du plus propre au plus sale, chambres vides d’abord. Ne pas passer de matériel d’une zone à l’autre.\nProduits : désinfectant de surface du chariot gris uniquement ; ne jamais mélanger deux produits.\nÀ ne pas faire : entrer dans une chambre dont la porte porte l’affichage jaune sans l’accord de l’infirmière référente.\nFormation exigée : hygiène hospitalière.\nContact : référente Mme B., poste 214 ; chef de site R., 78 00 00.\n\nFICHE B : ÉCOLE DE PAÏTA (après-midi, 15h30-18h30)\nAccès : portail du personnel, clé de la salle de ménage chez la gardienne.\nZones : 8 classes, couloir, cantine (le mardi et le jeudi seulement), sanitaires des élèves.\nPrincipe : classes d’abord, sanitaires ensuite, cantine en dernier ; chaises remontées sur les tables.\nÀ ne pas faire : toucher aux affichages des murs et aux ordinateurs de la classe 5.\nContact : gardienne Mme T., 78 00 01 ; chef de site L., 78 00 02.\n\nDEMANDES DE TEST\n1. Teiva est malade demain mardi, Marc le remplace à l’école de Païta. Prépare les consignes pour Marc, qui ne connaît pas le site.\n2. Il manque un agent formé demain matin à la clinique de Magenta. Écris le SMS à envoyer au groupe des remplaçants.\n3. Prépare les consignes pour un nouveau remplaçant sur le centre commercial de Dumbéa.',
    },
    variantes: {
      simple:
        'Se contenter d’un prompt réutilisable enregistré dans un document, qui prépare seulement les SMS de remplacement.',
      poussee:
        'Ajouter dix fiches de poste et des exemples de bons SMS dans les instructions, puis faire évaluer l’assistant par deux chefs de site sur dix cas réels.',
    },
    astuces: {
      claude:
        'Dans un Projet, déposez les fiches dans les connaissances du projet et collez les règles dans ses instructions.',
      chatgpt:
        'Un Projet suffit pour votre équipe ; un GPT (la création est payante) permet de le partager plus largement.',
      copilot:
        'Avec « Créer un agent » (selon la licence), ajoutez les fiches comme sources et collez les règles dans les instructions.',
      gemini:
        'Créez un Gem, collez les règles dans ses instructions et ajoutez les fiches de poste.',
    },
    vigilance:
      'Les fiches ne contiennent ni code d’accès, ni coordonnées personnelles d’agents, ni plans détaillés des sites clients. Chaque texte préparé par l’assistant est relu avant d’être envoyé : il ne connaît ni le planning réel ni la disponibilité des agents.',
    formateur: {
      resultat:
        'Un assistant qui rédige des consignes fidèles aux fiches A et B (par exemple la cantine seulement le mardi et le jeudi, donc incluse pour Marc), un SMS de moins de 300 caractères qui mentionne l’hygiène hospitalière, et qui répond « pas de fiche » à la demande 3 au lieu d’inventer des consignes.',
      criteres: [
        'Les instructions disent quoi faire quand une fiche manque.',
        'Les consignes citent la fiche utilisée et reprennent la rubrique « À ne pas faire ».',
        'Le SMS fait 300 caractères au maximum et mentionne la formation exigée.',
        'L’apprenant a repéré au moins un défaut de l’assistant et modifié les instructions en conséquence.',
      ],
      pieges: [
        'Accepter des consignes complètes pour le centre commercial de Dumbéa, inventées parce qu’aucune fiche n’existe.',
        'Laisser l’assistant écrire un téléphone ou un code qu’il a deviné ou recopié sans besoin.',
        'Oublier la contrainte « formation exigée » dans le SMS de remplacement pour la clinique.',
      ],
      competence: 'delegation',
      technique: 'instructions',
    },
    motsCles: ['assistant', 'projet', 'gem', 'remplacement', 'consignes', 'SMS'],
  },
  {
    id: 'serv-rentabilite-contrats',
    titre: 'Analyser la rentabilité des contrats sur un an et décider lesquels renégocier',
    metier: 'services',
    niveau: 'avance',
    famille: 'analyser',
    duree: 45,
    outils: ['copilot', 'chatgpt', 'claude', 'gemini'],
    outilConseille: 'copilot',
    situation:
      'Nous sommes en décembre. La direction vous demande un bilan de rentabilité des douze contrats de l’année et une proposition : quels contrats renégocier, dans quel ordre, et avec quels arguments. Certains contrats arrivent à échéance dans les prochains mois.',
    objectif:
      'Enchaîner calcul, classement et recommandation sur un tableau de données, en vérifiant chaque étape avant de passer à la suivante, et en gardant la décision.',
    etapes: [
      'Étape 1 : collez le tableau et demandez la marge (chiffre d’affaires moins les quatre coûts) et le taux de marge de chaque contrat, puis les totaux. Vérifiez deux lignes à la main.',
      'Étape 2 : demandez l’écart entre heures réalisées et heures prévues, en pourcentage, et la marge par heure réalisée.',
      'Étape 3 : classez les contrats : sous le plancher de 6 %, entre 6 % et la cible de 12 %, au-dessus de la cible. Relevez les contrats à dérive horaire supérieure à 5 %.',
      'Étape 4 : demandez une priorité de renégociation qui tient compte de l’échéance, avec un argument chiffré par contrat.',
      'Étape 5 : demandez à l’IA de relire son travail et de lister ses incertitudes, puis rédigez vous-même la recommandation finale.',
    ],
    prompt:
      'Tu es contrôleur de gestion dans une société de services (propreté, gardiennage, espaces verts, maintenance) à Nouméa. Nous allons travailler en plusieurs étapes ; ne passe à l’étape suivante que lorsque je te le demande.\n\nÉtape 1 : à partir du tableau ci-dessous, calcule pour chaque contrat la marge (chiffre d’affaires moins coût de main-d’œuvre, consommables, déplacements et pénalités) et le taux de marge (marge ÷ chiffre d’affaires), puis les totaux de l’ensemble. Présente un tableau et montre tes calculs. Signale toute incohérence au lieu de la corriger.\n\n<contrats>\n[collez le tableau ici]\n</contrats>',
    materiau: {
      titre: 'Les douze contrats de l’année (fictifs)',
      texte:
        'Contrat;Activité;Échéance;CA annuel (XPF);Main-d’œuvre (XPF);Consommables (XPF);Déplacements (XPF);Pénalités (XPF);Heures prévues;Heures réalisées\nTour Océane;Nettoyage de bureaux;30/06/2027;9 600 000;7 200 000;600 000;0;0;2 400;2 450\nClinique de Magenta;Nettoyage hospitalier;31/03/2027;14 400 000;11 900 000;1 300 000;0;210 000;3 600;3 950\nCentre commercial de Dumbéa;Propreté;31/12/2027;11 800 000;8 600 000;900 000;150 000;30 000;2 900;2 920\nHôtel Anse-Vata;Entretien des chambres;30/09/2027;18 500 000;14 600 000;1 700 000;0;40 000;5 000;5 150\nEntrepôt de Ducos;Gardiennage de nuit;31/01/2027;16 800 000;14 300 000;400 000;100 000;0;4 380;4 700\nSite industriel du Nord;Propreté industrielle;30/11/2027;38 000 000;27 500 000;3 600 000;2 900 000;0;9 000;9 100\nCommune de Bourail;Espaces verts;31/12/2027;7 200 000;5 800 000;700 000;450 000;0;2 100;2 300\nLycée de Païta;Propreté;15/07/2027;6 400 000;4 100 000;350 000;280 000;0;1 450;1 440\nRésidence Les Cocotiers;Parties communes;28/02/2027;4 200 000;3 650 000;300 000;0;0;1 100;1 200\nSite minier de la côte Est;Maintenance multitechnique;30/06/2027;21 600 000;16 100 000;3 400 000;1 600 000;0;5 400;5 700\nMairie de Lifou;Espaces verts;31/12/2027;5 500 000;3 300 000;500 000;1 250 000;0;1 300;1 330\nRésidence seniors;Propreté;30/04/2027;8 800 000;6 000 000;500 000;0;0;1 800;1 810\n\nRepères de la direction : plancher de marge 6 %, cible 12 %. La marge est ici une marge directe : les frais de structure ne sont pas déduits.',
    },
    variantes: {
      simple:
        'Se limiter aux étapes 1 et 3 : marge et taux de chaque contrat, puis classement selon le plancher et la cible.',
      poussee:
        'Ajouter un scénario : que devient la marge totale si les trois contrats les moins rentables passent à 8 % ? Faire expliquer le calcul, puis rédiger les trois propositions à présenter aux clients.',
    },
    astuces: {
      copilot:
        'Mettez le tableau en tableau Excel, puis demandez à Copilot dans Excel (selon la licence) de calculer les taux ; contrôlez ses formules cellule par cellule.',
      chatgpt:
        'Déposez le tableau : l’analyse de données calcule en code, et vous pouvez afficher le code pour contrôler une formule.',
      claude:
        'Demandez le tableau classé dans un artefact, puis un fichier Excel (création de fichiers) pour le dossier de la direction.',
    },
    vigilance:
      'Ce sont des données de gestion confidentielles : en vrai, anonymisez les clients avant de les confier à l’IA. Une recommandation de renégociation ne s’appuie jamais sur un seul chiffre : l’IA calcule, vous décidez en tenant compte de la relation avec chaque client.',
    formateur: {
      resultat:
        'Une marge directe totale d’environ 18,49 millions XPF sur 162,8 millions (11,4 %). Sous le plancher de 6 % : Site minier de la côte Est (2,3 %), Commune de Bourail (3,5 %) et Résidence Les Cocotiers (5,95 %, échéance 28/02/2027). Dérive horaire supérieure à 5 % : Clinique (9,7 %), Bourail (9,5 %), Cocotiers (9,1 %), Entrepôt de Ducos (7,3 %), site minier de la côte Est (5,6 %).',
      criteres: [
        'L’apprenant a vérifié au moins deux marges à la main.',
        'Les trois contrats sous le plancher sont identifiés, y compris Cocotiers à 5,95 %, juste sous 6 %.',
        'La priorité tient compte des échéances : Cocotiers (28/02/2027) et Ducos (31/01/2027) arrivent bientôt.',
        'La recommandation est rédigée par l’apprenant, avec un argument chiffré pour chaque contrat.',
      ],
      pieges: [
        'Arrondir Cocotiers à 6 % et le laisser passer au-dessus du plancher.',
        'Proposer de renégocier d’abord le plus gros contrat (Site industriel du Nord), alors que ce n’est pas le moins rentable.',
        'Ne regarder que la marge en pourcentage et ignorer les heures réalisées au-delà du forfait.',
        'Présenter la marge directe comme un résultat net.',
      ],
      competence: 'discernement',
      technique: 'decomposer',
    },
    motsCles: ['rentabilité', 'contrats', 'marge', 'renégociation', 'tableau', 'XPF'],
  },
  {
    id: 'serv-veille-appels-offres-reglementation',
    titre:
      'Organiser une veille sur les appels d’offres de services et sur la réglementation du secteur',
    metier: 'services',
    niveau: 'avance',
    famille: 'veiller',
    duree: 45,
    outils: ['gemini', 'chatgpt', 'claude', 'notebook'],
    outilConseille: 'gemini',
    situation:
      'Votre société veut gagner de nouveaux contrats de propreté, de gardiennage et d’entretien auprès des collectivités et des sites industriels. La direction demande une veille mensuelle à deux volets : les appels d’offres à ne pas rater, et les évolutions de la réglementation qui touchent le secteur.',
    objectif:
      'Concevoir une veille récurrente à deux volets, avec des critères de tri et des sources citées, et vérifier chaque information avant de la diffuser.',
    etapes: [
      'Lancez une recherche approfondie avec le prompt de départ : Deep Research (Gemini), Recherche approfondie (ChatGPT) ou Recherche (Claude, payante).',
      'Ouvrez au moins cinq sources citées et vérifiez qu’elles disent ce que le rapport leur attribue, que les dates limites ne sont pas dépassées et que les appels d’offres concernent bien la Nouvelle-Calédonie.',
      'Demandez de classer chaque appel d’offres selon vos critères (à répondre, à surveiller, à ignorer) et de signaler les sources que l’IA n’a pas pu consulter.',
      'Pour le volet réglementaire, demandez seulement les sujets évoqués et la source officielle à consulter, jamais une règle résumée.',
      'Programmez la relance mensuelle (« Programmer des actions » dans Gemini, tâche planifiée dans ChatGPT ou Claude selon l’offre), puis rédigez la note d’une demi-page pour la direction.',
    ],
    prompt:
      'Tu es chargé de veille dans une société de services aux entreprises à Nouméa (propreté, gardiennage, espaces verts, maintenance de bâtiments). Recherche, pour les [nombre] derniers jours, les appels d’offres et consultations de services lancés en Nouvelle-Calédonie par les collectivités, les établissements publics et les grands sites industriels.\n\nVolet 1 : pour chaque appel d’offres : acheteur, objet, lieu, date limite de remise, montant s’il est public, source avec sa date, et un classement « à répondre », « à surveiller » ou « à ignorer » selon mes critères.\nVolet 2 : les évolutions de réglementation évoquées dans l’actualité qui concernent notre secteur. N’affirme aucune règle : donne le sujet, la source et l’organisme officiel où vérifier.\nN’invente aucune consultation. Si tu n’as pas pu ouvrir une source, dis-le. Indique si l’information vient d’une seule source ou de plusieurs.\n\n<criteres_et_modele>\n[collez vos critères et le modèle de fiche ici]\n</criteres_et_modele>',
    materiau: {
      titre: 'Critères de tri et modèle de fiche de veille (fictifs)',
      texte:
        'CRITÈRES DE TRI DE LA SOCIÉTÉ\nÀ répondre : lieu dans le Grand Nouméa, à Koné ou à Bourail ; objet propreté, gardiennage ou entretien de bâtiments ; montant estimé de plus de 3 millions XPF par an ; date limite à plus de trois semaines.\nÀ surveiller : lieu plus éloigné (nord ou îles), ou montant non précisé, ou date limite à moins de trois semaines.\nÀ ignorer : objet hors de nos métiers, ou date limite dépassée.\n\nMODÈLE DE FICHE\nVEILLE SERVICES : [mois]\n1. Appels d’offres\nAcheteur;Objet;Lieu;Date limite;Montant;Classement;Source et date;Plusieurs sources (oui/non)\n2. Réglementation et sujets à suivre (sujet, organisme officiel, lien)\n3. À vérifier avant diffusion\n4. Deux actions pour les commerciaux',
    },
    variantes: {
      simple:
        'Faire une seule recherche sur les consultations de propreté des communes du Nord, sans planification.',
      poussee:
        'Chargez chaque rapport mensuel dans Gemini Notebook, partagez le carnet avec les commerciaux et demandez-lui ce qui a changé d’un mois sur l’autre, citations à l’appui.',
    },
    astuces: {
      gemini:
        'Exportez le rapport Deep Research dans Google Docs pour l’annoter, puis programmez la relance avec « Programmer des actions ».',
      chatgpt:
        'Une tâche planifiée (payante) relance la même demande chaque mois : gardez les critères et le modèle de fiche dans le prompt.',
      claude:
        'Sans abonnement, la recherche web suffit pour un premier essai ; la Recherche, payante, rend un rapport plus complet.',
      notebook:
        'Ajoutez chaque rapport mensuel comme source (Sources), puis posez la question « qu’est-ce qui a changé ? » : chaque réponse cite son passage.',
    },
    vigilance:
      'Une IA peut inventer un appel d’offres plausible ou confondre la Nouvelle-Calédonie avec la métropole. Rien ne part à la direction ni aux commerciaux sans vérification des dates limites sur la source d’origine. Les règles du secteur se lisent sur les sites officiels, jamais dans le seul résumé de l’IA.',
    formateur: {
      resultat:
        'Une fiche de veille au format demandé, où chaque appel d’offres a une source datée et ouverte, un classement conforme aux critères, une rubrique « à vérifier » honnête et une relance mensuelle programmée ou décrite précisément.',
      criteres: [
        'Chaque appel d’offres a une source datée, ouverte par l’apprenant, et une date limite vérifiée.',
        'Le classement respecte les critères de tri fournis.',
        'Le volet réglementaire donne des sujets et des organismes officiels, pas de règles résumées.',
        'Les sources non consultées par l’IA sont signalées.',
      ],
      pieges: [
        'Diffuser un appel d’offres dont la date limite est déjà passée ou dont la source n’existe pas.',
        'Reprendre une règle de métropole comme si elle s’appliquait en Nouvelle-Calédonie.',
        'Classer « à répondre » une consultation hors Grand Nouméa, Koné et Bourail parce que l’IA la juge intéressante.',
      ],
      competence: 'diligence',
      technique: 'sources',
    },
    motsCles: ['veille', 'appels d’offres', 'réglementation', 'marchés publics', 'tâche planifiée'],
  },
];
