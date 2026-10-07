/**
 * Mine, industrie et maintenance : site minier (nickel), usine, atelier de maintenance, QHSE.
 * Toutes les personnes, entreprises, engins et sommes sont fictifs.
 * Sécurité : l’IA aide à rédiger, jamais à valider une procédure de sécurité.
 */

export const vocabulaire = {
  structure: {
    g: 'm',
    s: 'atelier de maintenance industrielle',
    p: 'ateliers de maintenance industrielle',
  },
  client: { g: 'm', s: 'client industriel', p: 'clients industriels' },
  partenaire: { g: 'm', s: 'sous-traitant', p: 'sous-traitants' },
  documentCourant: { g: 'm', s: 'rapport d’intervention', p: 'rapports d’intervention' },
  documentLong: {
    g: 'm',
    s: 'manuel de maintenance du constructeur',
    p: 'manuels de maintenance des constructeurs',
  },
  reunion: { g: 'f', s: 'réunion sécurité mensuelle', p: 'réunions sécurité mensuelles' },
  offre: {
    g: 'm',
    s: 'service de dépannage hydraulique sur site',
    p: 'services de dépannage hydraulique sur site',
  },
  poste: { g: 'm', s: 'mécanicien d’engins miniers', p: 'mécaniciens d’engins miniers' },
  evenement: { g: 'f', s: 'journée sécurité du site', p: 'journées sécurité du site' },
  visuel: { g: 'f', s: 'plaquette de présentation', p: 'plaquettes de présentation' },
  domaine: 'l’industrie minière et la maintenance',
  motifReclamation: 'le retard de remise en service d’un engin après révision',
  donnees: 'le relevé des pannes du parc d’engins sur six mois, engin par engin',
  colonnes:
    'Engin;Type;Heures de marche;Nombre de pannes;Heures d’immobilisation;Coût des réparations (XPF)',
  indicateur: 'le taux de disponibilité des engins du parc',
  veille: 'les nouveautés en matière de sécurité et de maintenance des engins miniers',
  sourcesVeille:
    'les publications des constructeurs d’engins, la presse calédonienne et les informations de la DIMENC',
  jargon: 'la différence entre maintenance préventive, corrective et conditionnelle',
  procedure: 'la consignation d’une machine avant une intervention',
  situationTendue:
    'un chef de chantier pressé qui exige la remise en route d’un engin avant la fin des contrôles',
  donneesSensibles:
    'les noms des salariés impliqués dans les incidents, leurs données médicales et les chiffres de production confidentiels',
  corpus: 'les procédures de sécurité, les modes opératoires et les fiches réflexes du site',
  publicCible:
    'les responsables maintenance des sites miniers, des carrières et des entreprises de travaux publics',
  etranger: 'un ingénieur australien du fournisseur d’engins, en mission à Koné',
  themeFormation: 'les règles de sécurité à respecter sur le site',
  tacheRepetitive: 'le compte rendu quotidien des interventions de maintenance',
  planning: 'la maintenance préventive des engins pour le mois prochain',
  comparaison: 'deux offres de fournisseurs de pièces détachées pour une chargeuse',
};

export const exercices = [
  {
    id: 'indus-rapport-incident',
    titre: 'Rédiger un rapport d’incident à partir de notes de terrain',
    metier: 'industrie',
    niveau: 'debutant',
    famille: 'rediger',
    duree: 15,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'copilot',
    situation:
      'Vous êtes technicien de maintenance sur un site minier près de Thio. Hier, un flexible hydraulique a éclaté sur une pelle pendant le chargement d’un camion. Personne n’a été blessé, mais votre chef d’équipe attend le rapport d’incident avant la réunion de 10 h, et vous n’avez que vos notes prises sur le carnet.',
    objectif:
      'Transformer des notes de terrain en un rapport d’incident clair et factuel, sans laisser l’IA inventer de détails.',
    etapes: [
      'Copiez les notes du matériau dans votre outil d’IA avec le prompt de départ.',
      'Demandez un rapport structuré : description, chronologie, conséquences, mesures immédiates, informations manquantes.',
      'Vérifiez ligne par ligne que chaque heure, chaque numéro d’engin et chaque action figure bien dans vos notes.',
      'Vérifiez que l’IA a listé les informations manquantes au lieu de les compléter elle-même.',
      'Complétez ces manques à la main, puis relisez le ton : factuel, sans désigner de coupable.',
    ],
    prompt:
      'Tu es technicien de maintenance sur un site minier en Nouvelle-Calédonie. À partir de mes notes ci-dessous, rédige un rapport d’incident factuel, en phrases complètes, avec ces rubriques : 1. Description de l’événement, 2. Chronologie, 3. Conséquences (personnes, matériel, environnement, production), 4. Mesures immédiates prises, 5. Informations à compléter ou à confirmer. N’ajoute aucun fait absent de mes notes : si une information manque ou reste incertaine, signale-la dans la rubrique 5. Ton neutre, sans chercher de responsable.\n\n<notes>\n[collez vos notes ici]\n</notes>',
    materiau: {
      titre: 'Notes prises sur le carnet de terrain',
      texte:
        'Mardi 14/10 - fosse 3 - pelle PE-07\n9h40 env. flexible HP vérin godet éclaté pendant chargement camion TB-12\nhuile projetée sur chenille + sol, env. 60 L ? (à confirmer avec le compteur de la cuve)\nconducteur pelle (M. T.) arrêt immédiat, moteur coupé, pas blessé\nconducteur camion resté en cabine\n9h50 appel chef d’équipe, zone balisée\nkit antipollution sorti, absorbant posé, terre souillée raclée -> big bag\n11h15 flexible remplacé (réf. en stock), essai ok 11h40\nflexible posé il y a 8 mois ? vérifier dans la GMAO\npas de témoin du début, caméra du camion ?\nreprise production 12h',
    },
    variantes: {
      simple:
        'Demander uniquement la chronologie, sous forme de tableau à trois colonnes : heure, événement, action.',
      poussee:
        'Demander en plus un résumé de trois lignes pour le directeur du site et une version orale de deux minutes pour la causerie du lendemain.',
    },
    astuces: {
      copilot:
        'Dans Word, ouvrez le modèle de rapport de l’entreprise et demandez à Copilot de le remplir à partir des notes collées.',
      claude:
        'Demandez le rapport en fichier Word avec la création de fichiers, prêt à joindre au dossier de l’incident.',
    },
    vigilance:
      'Remplacez les noms des salariés par leur fonction ou leurs initiales. Le rapport reste le vôtre : l’IA met en forme, elle ne connaît pas les faits. Aucune estimation (volume d’huile, âge du flexible) ne doit être présentée comme certaine.',
    formateur: {
      resultat:
        'Un rapport en cinq rubriques, fidèle aux notes, qui signale comme « à confirmer » le volume d’huile, l’âge du flexible et l’existence d’images de la caméra.',
      criteres: [
        'Toutes les heures (9 h 40, 9 h 50, 11 h 15, 11 h 40, 12 h) correspondent aux notes.',
        'Le volume de 60 litres et l’âge du flexible restent présentés comme à confirmer.',
        'Le rapport ne désigne pas de responsable et ne propose pas de cause non vérifiée.',
        'Les noms ont été remplacés par une fonction ou des initiales.',
      ],
      pieges: [
        'Laisser l’IA ajouter une cause (usure, mauvais serrage) absente des notes.',
        'Garder une formulation certaine (« 60 litres d’huile se sont répandus ») alors que le chiffre est à confirmer.',
      ],
      competence: 'discernement',
      technique: 'structurer',
    },
    motsCles: ['incident', 'rapport', 'sécurité', 'notes de terrain', 'engin'],
  },
  {
    id: 'indus-consigne-operateur',
    titre: 'Simplifier une consigne de maintenance pour les opérateurs',
    metier: 'industrie',
    niveau: 'debutant',
    famille: 'corriger',
    duree: 15,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Dans une usine de la zone industrielle de Ducos, le service maintenance a rédigé la consigne de nettoyage d’un convoyeur à bande. Les opérateurs ne la lisent pas : trop longue, trop technique. Le responsable vous demande une version courte, affichable au poste, sans perdre aucune règle de sécurité.',
    objectif:
      'Faire reformuler un texte technique pour un public précis, en vérifiant que les règles de sécurité restent intactes et dans le bon ordre.',
    etapes: [
      'Lisez la consigne du matériau et soulignez vous-même les règles de sécurité (il y en a au moins six).',
      'Collez la consigne dans votre outil d’IA avec le prompt de départ.',
      'Comparez la version simplifiée avec votre liste : chaque règle doit y figurer, dans le même ordre.',
      'Demandez une correction si une règle a disparu, si deux actions ont été fusionnées ou si l’ordre a changé.',
      'Prévoyez la relecture de la version finale par le responsable maintenance avant tout affichage.',
    ],
    prompt:
      'Tu es formateur sécurité dans une usine en Nouvelle-Calédonie. Réécris la consigne ci-dessous pour des opérateurs de production : phrases courtes, verbes à l’impératif, une action par ligne, 12 lignes au maximum, vocabulaire simple. Garde toutes les règles de sécurité, les repères des équipements et l’ordre exact des étapes. Mets les interdictions en tête, en majuscules. Après la consigne, liste les règles de sécurité que tu as conservées, pour que je vérifie.\n\n<consigne>\n[collez la consigne ici]\n</consigne>',
    materiau: {
      titre: 'Consigne actuelle du service maintenance',
      texte:
        'CONSIGNE MT-CV-04 – Nettoyage du convoyeur à bande C2\nPréalablement à toute opération de nettoyage du convoyeur C2, l’opérateur devra s’assurer que l’équipement a fait l’objet d’un arrêt complet par action sur le bouton d’arrêt situé au pupitre P2, puis procéder au verrouillage du sectionneur S-C2 au moyen de son cadenas personnel, conformément à la procédure de consignation en vigueur sur le site. Il est rigoureusement interdit d’intervenir sur un convoyeur en mouvement, y compris pour retirer un objet coincé entre la bande et un rouleau. Le port des gants anti-coupure, des lunettes de protection et du casque est obligatoire. Le nettoyage s’effectue au moyen de la raclette et de la soufflette basse pression, l’usage du jet d’eau haute pression étant prohibé à proximité du moteur et du coffret électrique. Une fois le nettoyage achevé, l’opérateur vérifiera qu’aucun outil ni aucune personne ne se trouve dans la zone, retirera son cadenas et signalera la remise en service au chef de quart. Toute anomalie constatée (bande déchirée, rouleau bruyant, carter manquant) sera consignée dans le cahier de poste.',
    },
    variantes: {
      simple: 'Demander seulement la liste des étapes numérotées, sans mise en page.',
      poussee:
        'Demander en plus la description d’un pictogramme pour chaque étape, à mettre en page dans Canva, puis faire valider l’ensemble par le responsable sécurité.',
    },
    astuces: {
      chatgpt:
        'Ouvrez la réponse dans le canevas : vous pouvez raccourcir une seule ligne sans régénérer toute la consigne.',
      gemini: 'Ouvrez la consigne dans Canvas pour retoucher un passage précis sans tout réécrire.',
    },
    vigilance:
      'L’IA aide à rédiger, jamais à valider une consigne de sécurité : la version finale doit être approuvée par le responsable maintenance ou QHSE avant affichage. Une étape oubliée ou inversée peut blesser quelqu’un.',
    formateur: {
      resultat:
        'Une consigne de 12 lignes au maximum, à l’impératif, qui garde : arrêt au pupitre P2, cadenas personnel sur S-C2, interdiction d’intervenir en mouvement, EPI, pas de haute pression près du moteur et du coffret, vérification de la zone avant de retirer le cadenas, signalement au chef de quart, anomalies notées dans le cahier de poste.',
      criteres: [
        'Toutes les règles de sécurité sont présentes, dans l’ordre de l’original.',
        'Les interdictions sont mises en évidence en tête.',
        'Les repères (C2, P2, S-C2) sont identiques à l’original.',
        'L’apprenant prévoit la validation par un responsable avant affichage.',
      ],
      pieges: [
        'Une version « simplifiée » qui fusionne l’arrêt et la pose du cadenas en une seule action.',
        'Ne pas voir que le signalement des anomalies dans le cahier de poste a disparu.',
      ],
      competence: 'discernement',
      technique: 'format',
    },
    motsCles: ['consigne', 'maintenance', 'sécurité', 'opérateur', 'reformulation'],
  },
  {
    id: 'indus-causerie-securite',
    titre: 'Préparer une causerie sécurité de 10 minutes',
    metier: 'industrie',
    niveau: 'debutant',
    famille: 'organiser',
    duree: 15,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Chaque lundi à 6 h, sur un site minier près de Népoui, le chef d’équipe anime une causerie sécurité de 10 minutes avant la prise de poste. Cette semaine, le thème est la circulation des piétons près des engins, après deux presque-accidents signalés. Vous avez un quart d’heure pour la préparer.',
    objectif:
      'Obtenir en une demande un déroulé court et concret, adapté à des équipes de terrain, à partir de faits réels.',
    etapes: [
      'Complétez le prompt de départ avec les deux presque-accidents et les règles du site donnés dans le matériau.',
      'Demandez un déroulé minuté de 10 minutes : accroche, faits, règles clés, questions à poser à l’équipe, engagement final.',
      'Vérifiez que les règles annoncées sont exactement celles du site, et supprimez celles que l’IA aurait ajoutées.',
      'Demandez une version à dire à voix haute, en phrases courtes, sans jargon, puis lisez-la en la chronométrant.',
    ],
    prompt:
      'Tu es animateur sécurité sur un site minier en Nouvelle-Calédonie. Prépare une causerie sécurité de 10 minutes, debout, en début de poste, pour 15 conducteurs d’engins et mécaniciens. Thème : la circulation des piétons près des engins. Pars des deux presque-accidents ci-dessous, sans nommer personne, et n’utilise que les règles du site fournies. Donne un déroulé minuté (accroche, faits, trois règles clés, deux questions à poser à l’équipe, engagement de fin), puis le texte à dire, en phrases courtes.\n\n<faits>\n[collez les deux presque-accidents ici]\n</faits>\n\n<regles>\n[collez les règles du site ici]\n</regles>',
    materiau: {
      titre: 'Les deux presque-accidents de la semaine et les règles du site',
      texte:
        '1. Mercredi, 14 h 20, zone de chargement : un géologue est sorti de son pick-up à 15 m d’une chargeuse en manœuvre, sans contact radio. Le conducteur l’a vu au dernier moment dans son rétroviseur.\n2. Vendredi, 6 h 10, parc engins : un mécanicien a traversé derrière un camion qui reculait, alors que l’avertisseur de recul était en panne. Il portait son gilet, mais il faisait encore nuit.\n\nRègles du site (extrait) : contact radio obligatoire avant d’approcher un engin ; ne jamais se placer dans l’angle mort ; attendre le signal du conducteur avant de s’approcher ; gilet haute visibilité en permanence ; tout défaut d’avertisseur est signalé et l’engin est arrêté.',
    },
    variantes: {
      simple: 'Demander uniquement trois messages clés et deux questions à poser à l’équipe.',
      poussee:
        'Demander aussi un quiz de cinq questions pour ouvrir la causerie suivante, et le texte d’une affiche d’une page à créer dans Canva.',
    },
    astuces: {
      claude:
        'Demandez le déroulé et le texte dans un artefact : vous pourrez l’imprimer tel quel pour l’animateur.',
      copilot:
        'Transformez la réponse en Copilot Page pour que les autres chefs d’équipe reprennent la causerie.',
    },
    vigilance:
      'Ne citez pas le nom des personnes impliquées. Vérifiez que les règles annoncées sont bien celles du site : l’IA en invente volontiers de plausibles (distances, codes de klaxon) qui ne s’appliquent pas chez vous.',
    formateur: {
      resultat:
        'Un déroulé de 10 minutes, minuté, qui part des deux faits, rappelle les règles du site sans en ajouter et se termine par un engagement concret de l’équipe.',
      criteres: [
        'Le total des durées fait bien 10 minutes.',
        'Les règles annoncées sont celles fournies, sans distance ni signal inventés.',
        'Aucun nom de salarié n’apparaît.',
        'Le texte à dire tient en phrases courtes, compréhensibles à l’oral.',
      ],
      pieges: [
        'Garder une règle ajoutée par l’IA (« 30 mètres de distance minimale ») qui n’existe pas sur le site.',
        'Un déroulé de cours magistral, sans question posée à l’équipe.',
      ],
      competence: 'description',
      technique: 'contexte',
    },
    motsCles: ['causerie', 'sécurité', 'quart d’heure sécurité', 'engins', 'piétons'],
  },
  {
    id: 'indus-affiche-epi',
    titre: 'Créer une affiche sur le port des EPI à l’atelier',
    metier: 'industrie',
    niveau: 'debutant',
    famille: 'visuels',
    duree: 20,
    outils: ['canva', 'chatgpt', 'claude'],
    outilConseille: 'canva',
    situation:
      'À l’atelier de maintenance d’une entreprise de Koné, les audits montrent que les lunettes et les protections auditives sont souvent oubliées près des meuleuses. Le responsable QHSE veut une affiche A3 simple, lisible de loin, à placer à l’entrée de la zone de meulage.',
    objectif:
      'Préparer le texte d’un visuel avec une IA, puis le mettre en page dans Canva en gardant un message court et exact.',
    etapes: [
      'Demandez à votre outil d’IA trois titres de 6 mots au maximum et la liste des EPI obligatoires, à partir des règles du matériau uniquement.',
      'Choisissez un titre et vérifiez que la liste des EPI correspond exactement au livret d’accueil.',
      'Dans Canva, décrivez l’affiche à l’IA Canva : format A3 portrait, couleurs de sécurité, pictogrammes d’obligation, texte choisi.',
      'Remplacez toute illustration approximative par des pictogrammes clairs, et vérifiez la lisibilité de loin en affichant le design à 25 %.',
      'Faites valider l’affiche par le responsable QHSE avant de l’imprimer.',
    ],
    prompt:
      'Tu es chargé de communication sécurité dans un atelier de maintenance industrielle à Koné. Propose trois titres d’affiche de 6 mots au maximum pour rappeler le port des EPI près des meuleuses, de ton différent (ferme, bienveillant, collectif). Puis reformule la liste des EPI obligatoires en lignes très courtes, à partir des règles ci-dessous uniquement, sans en ajouter. Public : mécaniciens et chaudronniers, dont certains lisent peu le français.\n\n<regles>\n[collez les règles ici]\n</regles>',
    materiau: {
      titre: 'Règles de l’atelier (extrait du livret d’accueil)',
      texte:
        'Zone meulage et découpe : port obligatoire des lunettes de protection ou de l’écran facial, des protections auditives (bouchons ou casque antibruit), des gants anti-coupure et des chaussures de sécurité. Manches baissées. Écran de protection mobile en place avant tout meulage. Toute meule fissurée ou ébréchée est retirée et signalée au magasin.',
    },
    variantes: {
      simple: 'Partir d’un modèle d’affiche de sécurité dans Canva et ne changer que le texte.',
      poussee:
        'Décliner l’affiche pour l’écran de la salle de pause, puis créer une version en pictogrammes seuls pour les intérimaires, et la faire valider.',
    },
    astuces: {
      canva:
        'Le Redimensionnement magique (offre Pro, payante) décline l’affiche A3 en format écran ; en gratuit, dupliquez le design et ajustez à la main.',
      chatgpt:
        'Si vous générez une illustration avec la création d’images, vérifiez chaque détail : les EPI y sont souvent mal portés.',
    },
    vigilance:
      'Une image générée peut montrer un EPI mal porté ou un pictogramme fantaisiste : vérifiez chaque détail. L’affiche doit être validée par le responsable QHSE avant d’être posée.',
    formateur: {
      resultat:
        'Une affiche A3 lisible de loin, avec un titre court, les quatre EPI exacts du livret et des pictogrammes d’obligation, validée avant impression.',
      criteres: [
        'Les EPI listés correspondent exactement au livret d’accueil.',
        'Le titre fait 6 mots au maximum et se lit à distance.',
        'Aucune image ne montre un geste dangereux ou un EPI mal porté.',
      ],
      pieges: [
        'Garder une illustration générée où l’ouvrier meule sans lunettes.',
        'Ajouter des EPI non prévus (masque, harnais) qui brouillent le message.',
      ],
      competence: 'discernement',
      technique: 'options',
    },
    motsCles: ['affiche', 'EPI', 'Canva', 'sécurité', 'atelier'],
  },
  {
    id: 'indus-analyse-risques-poste',
    titre: 'Construire l’analyse des risques d’un poste en tableau',
    metier: 'industrie',
    niveau: 'intermediaire',
    famille: 'organiser',
    duree: 30,
    outils: ['claude', 'chatgpt', 'copilot'],
    outilConseille: 'claude',
    situation:
      'Un poste de soudeur-chaudronnier est créé dans l’atelier de maintenance d’une usine de Ducos. Le responsable QHSE vous demande un premier projet d’analyse des risques du poste, en tableau, qu’il complétera et validera ensuite avec l’équipe.',
    objectif:
      'Construire un tableau d’analyse en plusieurs échanges, en apportant ses observations de terrain et en faisant critiquer la première version.',
    etapes: [
      'Donnez à l’IA la description du poste du matériau avec le prompt de départ.',
      'Relisez le tableau : barrez les risques qui ne concernent pas ce poste, ajoutez ceux que vous connaissez du terrain.',
      'Demandez à l’IA de critiquer son propre tableau : risques oubliés, mesures vagues (« faire attention »), cotations incohérentes.',
      'Faites reformuler chaque mesure à ajouter en action vérifiable : qui, quoi, pour quand.',
      'Exportez le tableau et préparez trois questions à poser au responsable QHSE et aux soudeurs lors de la validation.',
    ],
    prompt:
      'Tu es préventeur QHSE dans l’industrie en Nouvelle-Calédonie. À partir de la description du poste ci-dessous, propose un premier projet d’analyse des risques en tableau, avec les colonnes : Tâche, Danger, Risque (ce qui peut arriver), Gravité (1 à 4), Probabilité (1 à 4), Mesures existantes, Mesures à ajouter. Une ligne par couple tâche et danger. N’invente aucune mesure existante : écris « à vérifier » si la description ne dit rien. Ce tableau sera relu et validé par le responsable QHSE et l’équipe.\n\n<poste>\n[collez la description du poste ici]\n</poste>',
    materiau: {
      titre: 'Description du poste de soudeur-chaudronnier',
      texte:
        'Poste : soudeur-chaudronnier, atelier maintenance, équipe de jour (6 h – 14 h).\nTâches : réparation de godets et de bennes (soudage à l’arc, découpe plasma, meulage) ; fabrication de petites pièces en tôle ; travail ponctuel sur passerelle à 2,5 m de hauteur ; manutention de tôles jusqu’à 40 kg avec le pont roulant de 2 t.\nEnvironnement : atelier semi-ouvert, chaleur (35 °C l’après-midi en saison chaude), bruit des compresseurs, fumées de soudage, bouteilles d’oxygène et d’acétylène stockées à 5 m du poste.\nÉquipements fournis : masque de soudeur, gants, tablier en cuir, chaussures de sécurité, bouchons d’oreilles. Aspiration des fumées : une seule torche aspirante pour deux postes.\nÀ savoir : deux brûlures légères aux avant-bras déclarées l’an dernier.',
    },
    variantes: {
      simple: 'Limiter l’analyse aux trois tâches principales, avec un tableau sans cotation.',
      poussee:
        'Demander une criticité (gravité × probabilité), un classement des priorités et un plan d’action daté, puis comparer avec la méthode de cotation de votre entreprise.',
    },
    astuces: {
      claude:
        'Demandez le tableau en fichier Excel avec la création de fichiers : le responsable QHSE pourra le compléter directement.',
      copilot:
        'Collez le tableau dans Excel, mettez-le sous forme de tableau, puis demandez à Copilot de trier les lignes par criticité.',
    },
    vigilance:
      'L’IA aide à rédiger, jamais à valider une analyse des risques : c’est au responsable QHSE et à l’équipe de la valider. Faites vérifier par le service QHSE les obligations applicables en Nouvelle-Calédonie, que l’IA ne connaît pas avec certitude.',
    formateur: {
      resultat:
        'Un tableau qui couvre les principaux risques (brûlure, fumées, bruit, chaleur, chute de hauteur, manutention et charge suspendue, incendie ou explosion lié aux bouteilles, projections au meulage), avec des mesures concrètes et « à vérifier » quand l’information manque.',
      criteres: [
        'Le stockage des bouteilles à 5 m et la torche aspirante partagée sont repérés comme des points faibles.',
        'Les mesures à ajouter sont des actions vérifiables, pas des conseils vagues.',
        'Les cases sans information portent « à vérifier » au lieu d’une mesure inventée.',
        'L’apprenant a ajouté ou retiré au moins une ligne à partir de sa connaissance du terrain.',
      ],
      pieges: [
        'Présenter le tableau de l’IA comme une analyse validée.',
        'Laisser des mesures existantes inventées (« ventilation générale conforme »).',
        'Une cotation incohérente : un risque de brûlure coté 1 en probabilité alors que deux brûlures ont eu lieu.',
      ],
      competence: 'delegation',
      technique: 'critique',
    },
    motsCles: ['analyse des risques', 'document unique', 'QHSE', 'soudage', 'tableau'],
  },
  {
    id: 'indus-pannes-engins',
    titre: 'Analyser les pannes d’un parc d’engins sur six mois',
    metier: 'industrie',
    niveau: 'intermediaire',
    famille: 'analyser',
    duree: 30,
    outils: ['chatgpt', 'claude', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Vous êtes responsable maintenance chez un sous-traitant minier à Thio. La direction trouve que le budget de réparation dérape et veut savoir, avant la réunion budgétaire, quels engins posent problème. Vous disposez du relevé des pannes sur six mois.',
    objectif:
      'Faire calculer des indicateurs sur un tableau, vérifier les calculs et en tirer des priorités argumentées, en sachant ce que les données ne disent pas.',
    etapes: [
      'Copiez le tableau CSV du matériau dans un fichier, ou collez-le directement dans votre outil d’IA.',
      'Demandez, pour chaque engin, le nombre de pannes pour 1 000 heures de marche et le coût de réparation par heure de marche, puis un classement.',
      'Vérifiez à la main deux calculs, dont celui de l’engin classé premier.',
      'Demandez un graphique des coûts par heure et trois engins à examiner en priorité, avec la raison.',
      'Demandez ce que le tableau ne permet pas de conclure (âge des engins, conditions d’usage, pannes répétées sur la même pièce).',
    ],
    prompt:
      'Tu es analyste en maintenance industrielle. Voici le relevé des pannes de notre parc d’engins sur six mois (CSV, séparateur point-virgule). 1. Calcule pour chaque engin le nombre de pannes pour 1 000 heures de marche et le coût de réparation par heure de marche, en XPF. 2. Classe les engins du plus coûteux au moins coûteux par heure de marche. 3. Propose trois engins à examiner en priorité et explique pourquoi. 4. Liste ce que ces données ne permettent pas de conclure. Montre tes calculs.\n\n<donnees>\n[collez le tableau ici]\n</donnees>',
    materiau: {
      titre: 'Relevé des pannes, d’avril à septembre (données fictives)',
      texte:
        'Engin;Type;Heures de marche;Nombre de pannes;Heures d’immobilisation;Coût des réparations (XPF)\nPE-03;Pelle hydraulique;1420;6;58;4850000\nPE-07;Pelle hydraulique;1510;4;31;2120000\nCH-01;Chargeuse;1380;3;22;1450000\nCH-02;Chargeuse;960;7;96;5310000\nTB-10;Tombereau 60 t;1650;5;40;3200000\nTB-11;Tombereau 60 t;1590;4;35;2750000\nTB-12;Tombereau 60 t;1620;9;120;7980000\nTB-14;Tombereau 60 t;1700;3;18;1300000\nBL-02;Bouteur;1100;5;64;3650000\nNV-01;Niveleuse;870;2;12;680000\nFO-01;Foreuse;1240;8;88;6420000\nAR-02;Arroseuse;1050;1;6;240000',
    },
    variantes: {
      simple: 'Demander seulement le coût total par type d’engin et le graphique correspondant.',
      poussee:
        'Faire ajouter par l’IA une colonne fictive « Âge (années) », puis demander si l’âge explique les écarts, en distinguant corrélation et cause.',
    },
    astuces: {
      chatgpt:
        'Déposez le CSV : l’analyse de données fait les calculs et vous pouvez demander à voir le tableau intermédiaire.',
      copilot:
        'Collez les données dans Excel, mettez-les sous forme de tableau, puis interrogez Copilot dans Excel.',
      gemini:
        'Importez le CSV dans Google Sheets et ouvrez « Demander à Gemini » pour créer les colonnes calculées.',
    },
    vigilance:
      'Avec de vraies données, retirez les noms des conducteurs et les informations commerciales du donneur d’ordre. Recalculez au moins un chiffre clé avant de le présenter à la direction.',
    formateur: {
      resultat:
        'Un classement par coût horaire où arrivent en tête CH-02 (environ 5 530 XPF par heure), FO-01 (environ 5 180) et TB-12 (environ 4 930), qui pèsent à eux trois près de la moitié des 39 950 000 XPF de réparations.',
      criteres: [
        'Les calculs vérifiés à la main sont justes (CH-02 : 5 310 000 / 960 ≈ 5 531 XPF par heure).',
        'Le classement est fait par heure de marche, pas seulement en coût total.',
        'Les limites des données sont citées (âge, nature des pannes, conditions de travail).',
        'Les priorités proposées sont justifiées par les chiffres.',
      ],
      pieges: [
        'Retenir TB-12 comme seul engin à problème parce que son coût total est le plus élevé, sans voir CH-02, qui tourne beaucoup moins.',
        'Croire un total ou une moyenne sans en recalculer un seul.',
        'Conclure qu’il faut remplacer un engin alors que les données ne disent rien de son âge.',
      ],
      competence: 'discernement',
      technique: 'decomposer',
    },
    motsCles: ['pannes', 'engins', 'maintenance', 'CSV', 'coûts', 'disponibilité'],
  },
  {
    id: 'indus-traduction-manuel',
    titre: 'Traduire un extrait de manuel fournisseur et le faire relire',
    metier: 'industrie',
    niveau: 'intermediaire',
    famille: 'corriger',
    duree: 30,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'L’atelier d’une entreprise de Koné reçoit un nouveau compresseur avec un manuel uniquement en anglais. Le chef d’atelier vous demande de traduire la section sur l’entretien des 500 heures pour les mécaniciens, en attendant la version française du fournisseur.',
    objectif:
      'Obtenir une traduction technique fiable en imposant des règles, puis faire vérifier les valeurs chiffrées, les avertissements et les termes ambigus.',
    etapes: [
      'Collez l’extrait du matériau avec le prompt de départ.',
      'Comparez chaque valeur (pression, durée, référence de pièce, tension, quantité, couple de serrage) entre l’anglais et le français.',
      'Demandez à l’IA de relire sa traduction et de signaler les termes ambigus, avec le terme anglais d’origine.',
      'Faites traduire le passage le plus délicat par un deuxième outil et comparez les deux versions.',
      'Faites relire le résultat par un mécanicien qui connaît la machine, et notez ses corrections dans le glossaire.',
    ],
    prompt:
      'Tu es traducteur technique spécialisé en maintenance industrielle. Traduis en français l’extrait de manuel ci-dessous, pour des mécaniciens d’atelier en Nouvelle-Calédonie. Règles : garde toutes les valeurs, unités et références de pièces exactement comme dans l’original (avec la virgule décimale française) ; traduis WARNING par AVERTISSEMENT et CAUTION par ATTENTION ; phrases courtes à l’impératif. Après la traduction, donne un tableau des termes techniques (anglais, français) et signale les passages dont tu n’es pas sûr.\n\n<manuel>\n[collez l’extrait ici]\n</manuel>',
    materiau: {
      titre: 'Extrait du manuel du compresseur (en anglais, fictif)',
      texte:
        'SECTION 7.3 – 500-HOUR SERVICE\nWARNING: Shut down the compressor, isolate the main power supply and lock out before any service. Release all air pressure from the system. Wait until the separator tank gauge reads 0 bar.\nCAUTION: Hot surfaces. Allow the unit to cool down for at least 30 minutes.\n1. Drain the condensate from the receiver tank.\n2. Replace the air filter element (part no. AF-2290). Do not clean and reuse the element.\n3. Check the drive belt tension: deflection should be 8 to 10 mm under a 50 N load.\n4. Take an oil sample for analysis. Top up with 1.5 L of synthetic oil if the level is below the MIN mark.\n5. Tighten the motor mounting bolts to 45 N·m.\n6. Reset the service counter and record the service in the maintenance log.',
    },
    variantes: {
      simple: 'Traduire uniquement les avertissements et les six étapes, sans glossaire.',
      poussee:
        'Faire traduire tout l’extrait par deux outils, comparer les écarts dans un tableau, puis produire une version de synthèse validée par un mécanicien.',
    },
    astuces: {
      claude:
        'Demandez la traduction en fichier Word, avec l’anglais et le français côte à côte dans un tableau à deux colonnes.',
      gemini:
        'Ouvrez la traduction dans Canvas pour remplacer un terme partout en une seule demande.',
    },
    vigilance:
      'Une valeur mal recopiée (couple de serrage, pression) peut provoquer une casse ou un accident : vérifiez chaque chiffre. La traduction ne remplace pas le manuel officiel : présentez-la comme provisoire et faites-la valider.',
    formateur: {
      resultat:
        'Une traduction à l’impératif, avec les mêmes valeurs (0 bar, 30 minutes, AF-2290, 8 à 10 mm sous 50 N, 1,5 L, 45 N·m), les avertissements en tête et un glossaire relu par un mécanicien.',
      criteres: [
        'Toutes les valeurs et références sont identiques à l’original.',
        'Les avertissements restent en tête et sont mis en évidence.',
        'Le glossaire contient au moins six termes (receiver tank, deflection, lock out…).',
        'La traduction est présentée comme provisoire et relue par un mécanicien.',
      ],
      pieges: [
        'Traduire « lock out » par « fermer » au lieu de « consigner ».',
        'Transformer « 1.5 L » en « 15 L » ou perdre une unité.',
        'Une traduction élégante mais trop longue pour être suivie à l’atelier.',
      ],
      competence: 'diligence',
      technique: 'critique',
    },
    motsCles: ['traduction', 'anglais', 'manuel', 'maintenance', 'glossaire'],
  },
  {
    id: 'indus-synthese-environnement',
    titre: 'Résumer un rapport environnemental pour les habitants',
    metier: 'industrie',
    niveau: 'intermediaire',
    famille: 'synthetiser',
    duree: 30,
    outils: ['claude', 'chatgpt', 'gemini', 'notebook'],
    outilConseille: 'claude',
    situation:
      'Une société minière fictive exploite un site sur la côte Est. Elle publie chaque année un rapport de surveillance environnementale de 40 pages. Avant une réunion d’information avec les habitants de la commune et les représentants coutumiers, la direction veut une synthèse d’une page, compréhensible par tous.',
    objectif:
      'Faire résumer un document technique pour un public non spécialiste, sans déformer les chiffres ni minimiser les écarts.',
    etapes: [
      'Copiez l’extrait de rapport du matériau, ou un vrai rapport public de votre site sans données confidentielles.',
      'Demandez une synthèse en langage courant, avec les chiffres clés et ce qu’ils signifient.',
      'Vérifiez que chaque dépassement de seuil apparaît dans la synthèse, avec la même valeur.',
      'Demandez une deuxième version, deux fois plus courte, et comparez : quelle information a disparu ?',
      'Demandez les cinq questions que les habitants poseront probablement, et préparez les réponses avec le service environnement.',
    ],
    prompt:
      'Tu es chargé de communication dans une entreprise minière en Nouvelle-Calédonie. Résume l’extrait de rapport ci-dessous pour des habitants qui ne sont pas spécialistes : une page au maximum, phrases simples, chaque terme technique expliqué entre parenthèses. Garde tous les chiffres exacts et signale clairement chaque résultat au-dessus du seuil ou de la valeur guide, sans le minimiser. N’ajoute aucune conclusion absente du rapport. Termine par les engagements de l’entreprise, tels qu’ils sont écrits.\n\n<rapport>\n[collez l’extrait ici]\n</rapport>',
    materiau: {
      titre: 'Extrait du rapport annuel de surveillance (fictif)',
      texte:
        '3. Qualité des eaux de surface\nLes prélèvements mensuels ont été réalisés sur 4 stations (S1 en amont, S2 et S3 au droit du site, S4 en aval à 2 km). Les concentrations en matières en suspension (MES) restent inférieures au seuil de référence de 35 mg/L sur S1, S2 et S4. Sur S3, deux dépassements ont été relevés : 62 mg/L en février et 48 mg/L en mars, à la suite d’épisodes de fortes pluies et de la saturation du bassin de décantation BD-2. Les teneurs en chrome hexavalent restent sous la limite de quantification sur l’ensemble des stations.\n4. Poussières\nLes retombées de poussières mesurées au village (station P2) ont une moyenne annuelle de 180 mg/m²/jour, pour une valeur guide interne de 200. Le mois de novembre, sec et venté, atteint 260 mg/m²/jour.\n5. Engagements\nCurage du bassin BD-2 avant la prochaine saison des pluies ; création d’un second bassin d’ici la fin de l’année prochaine ; renforcement de l’arrosage des pistes en saison sèche ; présentation des résultats au comité local d’information.',
    },
    variantes: {
      simple: 'Demander uniquement cinq points clés en langage courant.',
      poussee:
        'Charger le rapport complet dans Gemini Notebook, générer une FAQ et un résumé audio, puis vérifier chaque réponse avec sa citation.',
    },
    astuces: {
      notebook:
        'Chargez le rapport comme source, puis générez une FAQ dans les Rapports : chaque réponse renvoie au passage exact.',
      claude: 'Demandez, pour chaque chiffre de la synthèse, la phrase du rapport d’où il vient.',
    },
    vigilance:
      'Une synthèse publique engage l’entreprise : faites-la valider par le service environnement et la direction. Vérifiez qu’aucun dépassement n’a été adouci (« légère hausse ») ni oublié.',
    formateur: {
      resultat:
        'Une page claire qui mentionne les deux dépassements sur S3 (62 et 48 mg/L pour un seuil de 35), le pic de poussières de novembre (260 pour une valeur guide de 200) et les quatre engagements, sans conclusion ajoutée.',
      criteres: [
        'Les deux dépassements de MES et le pic de poussières sont présents, avec les bonnes valeurs.',
        'Les termes techniques (MES, bassin de décantation, limite de quantification) sont expliqués.',
        'Les engagements sont repris tels qu’écrits, sans nouvelle promesse.',
        'L’apprenant a comparé les deux versions et repéré ce qui disparaissait.',
      ],
      pieges: [
        'Une synthèse rassurante qui parle de « résultats globalement conformes » et oublie les dépassements.',
        'Une phrase ajoutée par l’IA sur l’absence de risque pour la santé, que le rapport ne contient pas.',
      ],
      competence: 'diligence',
      technique: 'format',
    },
    motsCles: ['environnement', 'rapport', 'synthèse', 'communication', 'mine'],
  },
  {
    id: 'indus-planning-preventif',
    titre: 'Bâtir le planning de maintenance préventive du mois',
    metier: 'industrie',
    niveau: 'avance',
    famille: 'organiser',
    duree: 45,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Vous préparez le planning de maintenance préventive du mois pour dix engins d’un site minier de la côte Ouest. Il faut tenir compte des heures de marche, des échéances d’entretien, des deux équipes de mécaniciens et de la production, qui refuse d’avoir plus de deux engins arrêtés en même temps.',
    objectif:
      'Enchaîner calcul, planification et contrôle des contraintes en plusieurs étapes, en vérifiant chaque étape avant la suivante.',
    etapes: [
      'Donnez à l’IA le tableau et les contraintes du matériau, et demandez d’abord uniquement le jour d’échéance de chaque engin, calculs à l’appui.',
      'Vérifiez deux calculs à la main (par exemple TB-11 et CH-02) avant de continuer.',
      'Demandez ensuite un planning jour par jour, sous forme de tableau, qui respecte toutes les contraintes.',
      'Demandez à l’IA de contrôler son planning contrainte par contrainte et de signaler chaque conflit, puis contrôlez vous-même les jours chargés.',
      'Ajoutez un imprévu (la chargeuse CH-01 tombe en panne le jour 5 pour trois jours) et demandez un planning révisé.',
      'Exportez le planning final dans un tableur et soumettez-le au chef de service et à la production.',
    ],
    prompt:
      'Tu es planificateur de maintenance sur un site minier en Nouvelle-Calédonie. Nous allons travailler en plusieurs étapes ; ne passe pas à l’étape suivante sans mon accord.\nÉtape 1 : à partir du tableau ci-dessous, calcule pour chaque engin le nombre d’heures restantes avant son prochain entretien, puis le jour du mois (du jour 1 au jour 30) où l’échéance tombe, selon ses heures de marche par jour. Montre le calcul pour chaque engin et signale ceux dont l’échéance tombe après le jour 30.\n\n<parc>\n[collez le tableau ici]\n</parc>\n\n<contraintes>\n[collez les contraintes ici]\n</contraintes>',
    materiau: {
      titre: 'Parc d’engins et contraintes (données fictives)',
      texte:
        'Engin;Compteur au jour 1 (h);Prochain entretien (h);Type d’entretien;Immobilisation (h);Heures de marche par jour\nPE-03;12380;12500;Entretien 500 h;8;18\nPE-07;9870;10000;Entretien 1 000 h;16;18\nCH-01;6420;6500;Entretien 500 h;6;16\nCH-02;4190;4500;Entretien 2 000 h;24;14\nTB-10;15620;15750;Entretien 250 h;4;20\nTB-11;14980;15000;Entretien 250 h;4;20\nTB-12;16140;16500;Entretien 1 000 h;16;20\nTB-14;13260;13500;Entretien 500 h;8;20\nBL-02;8730;9000;Entretien 500 h;8;15\nFO-01;5550;6000;Entretien 2 000 h;24;12\n\nContraintes :\n- Deux équipes de mécaniciens, 8 heures de travail chacune par jour, 7 jours sur 7.\n- Jamais plus de deux engins arrêtés le même jour (demande de la production).\n- Un entretien peut être avancé, mais jamais fait plus de 50 heures de marche après l’échéance (règle interne).\n- Les tombereaux TB-10 et TB-11 ne doivent pas être arrêtés le même jour.',
    },
    variantes: {
      simple:
        'S’arrêter à l’étape 1 : le calcul des échéances et la liste des engins à entretenir dans le mois.',
      poussee:
        'Faire produire le planning en fichier Excel avec une mise en évidence des conflits, puis créer un Projet ou une compétence qui refait ce travail chaque mois à partir du nouveau relevé.',
    },
    astuces: {
      claude:
        'Demandez le planning final en fichier Excel avec la création de fichiers : une ligne par jour, une colonne par équipe.',
      chatgpt:
        'L’analyse de données peut calculer les échéances : demandez à voir le tableau intermédiaire avant le planning.',
      gemini:
        'Exportez le planning dans Google Sheets, puis utilisez « Demander à Gemini » pour repérer les jours en conflit.',
    },
    vigilance:
      'Le planning de l’IA est un brouillon : il ignore les pièces disponibles, les compétences de chaque mécanicien et les imprévus du terrain. Vérifiez les calculs et faites valider par le chef de service.',
    formateur: {
      resultat:
        'Un planning sur 30 jours qui traite TB-11 dès le début du mois, étale TB-10, PE-03 et PE-07 entre les jours 5 et 9 sans jamais arrêter plus de deux engins, place CH-01 vers le jour 5, TB-14 vers le jour 12, TB-12 et BL-02 vers le jour 18, CH-02 vers le jour 22, et reporte FO-01 au mois suivant.',
      criteres: [
        'Les échéances calculées sont justes à un jour près (TB-11 : 20 heures restantes, soit dès le jour 1 ou 2).',
        'Aucun jour ne compte plus de deux engins arrêtés ni plus de 16 heures de travail de mécanicien.',
        'FO-01 est signalé comme hors du mois au lieu d’être planifié pour rien.',
        'Le planning révisé après la panne de CH-01 respecte encore les contraintes.',
      ],
      pieges: [
        'Croire l’IA quand elle annonce que « toutes les contraintes sont respectées », sans recontrôler.',
        'Ne pas voir que PE-07 demande 16 heures, soit la journée complète des deux équipes.',
        'Tout demander en une fois et ne plus pouvoir vérifier les calculs intermédiaires.',
      ],
      competence: 'discernement',
      technique: 'decomposer',
    },
    motsCles: ['planning', 'maintenance préventive', 'engins', 'contraintes', 'GMAO'],
  },
  {
    id: 'indus-consignation-checklist',
    titre: 'Transformer une procédure de consignation en check-list de terrain',
    metier: 'industrie',
    niveau: 'avance',
    famille: 'organiser',
    duree: 45,
    outils: ['claude', 'chatgpt', 'copilot'],
    outilConseille: 'claude',
    situation:
      'Dans une usine de Ducos, la procédure de consignation d’un broyeur fait huit pages. Les intervenants, dont des sous-traitants, la suivent mal. Le responsable QHSE vous charge de préparer un projet de check-list d’une page, qu’il validera avec l’équipe et testera sur le terrain avant tout usage.',
    objectif:
      'Enchaîner plusieurs étapes avec l’IA (extraction, mise en forme, contrôle croisé) sur un sujet critique, en gardant la validation humaine au centre.',
    etapes: [
      'Donnez à l’IA l’extrait de procédure du matériau et demandez d’abord la liste numérotée de toutes les actions, dans l’ordre, avec la phrase source de chacune.',
      'Vérifiez que la liste suit exactement l’ordre de la procédure et qu’aucune action n’a été fusionnée ou ajoutée.',
      'Demandez ensuite la check-list d’une page : case à cocher, action, qui la fait, comment le contrôler.',
      'Demandez à l’IA de comparer la check-list avec la procédure, phrase par phrase, et de lister les écarts.',
      'Demandez quelles cases un intervenant pressé risque de cocher sans les faire, et comment les rendre vérifiables.',
      'Rédigez la note d’envoi au responsable QHSE : la check-list est un projet à valider, avec la liste des points incertains.',
    ],
    prompt:
      'Tu es préventeur QHSE dans l’industrie. Je veux transformer une procédure de consignation en check-list de terrain. Ce document sera validé par le responsable QHSE avant tout usage : ne le présente jamais comme définitif.\nÉtape 1 seulement : extrais de la procédure ci-dessous la liste numérotée de toutes les actions, dans l’ordre exact, sans en fusionner ni en ajouter. Pour chaque action, indique qui la réalise et cite la phrase de la procédure d’où elle vient. Signale toute phrase ambiguë.\n\n<procedure>\n[collez la procédure ici]\n</procedure>',
    materiau: {
      titre: 'Extrait de la procédure de consignation du broyeur B1 (fictive)',
      texte:
        '4. Consignation\n4.1 Le chargé de consignation prévient le chef de quart et l’opérateur de salle de contrôle de l’arrêt du broyeur B1. Il remplit le bon de consignation BC-B1.\n4.2 L’opérateur arrête le broyeur depuis la salle de contrôle. Le chargé de consignation vérifie sur place l’arrêt complet du rotor (environ 4 minutes de ralentissement).\n4.3 Séparation : le chargé de consignation ouvre le sectionneur Q-B1 dans le local électrique LE-2.\n4.4 Condamnation : il pose son cadenas et l’étiquette « Ne pas manœuvrer » sur Q-B1. Chaque intervenant pose ensuite son propre cadenas sur la pince multicadenas.\n4.5 Vérification d’absence d’énergie : le chargé de consignation tente un démarrage au bouton local du broyeur ; aucun mouvement ne doit se produire. Il remet ensuite le bouton sur arrêt.\n4.6 Énergies résiduelles : il ferme la vanne d’air comprimé V-12, purge le circuit et bloque mécaniquement le rotor avec la goupille de calage.\n4.7 Il signe le bon de consignation et le remet au chef de l’intervention, qui le signe à son tour. Les travaux peuvent commencer.\n5. Déconsignation\n5.1 Le chef de l’intervention vérifie que le personnel et l’outillage sont sortis et que les carters sont remontés.\n5.2 Chaque intervenant retire son cadenas. Le chargé de consignation retire la goupille, ouvre V-12, retire son cadenas et referme Q-B1.\n5.3 Il prévient le chef de quart, qui autorise le redémarrage.',
    },
    variantes: {
      simple: 'S’arrêter à l’étape 1 et comparer la liste d’actions avec celle d’un collègue.',
      poussee:
        'Créer un Projet ou une compétence « check-list sécurité » qui applique la même méthode (extraction, check-list, contrôle croisé, points incertains) à d’autres procédures, toujours avec validation humaine.',
    },
    astuces: {
      claude:
        'Pour réutiliser la méthode, créez une compétence qui impose les étapes et la mention « projet à valider ».',
      chatgpt:
        'Ouvrez la check-list dans le canevas et demandez des modifications ligne par ligne, sans régénérer le reste.',
      copilot:
        'Transformez la check-list en Copilot Page pour que le responsable QHSE y ajoute ses corrections.',
    },
    vigilance:
      'L’IA aide à rédiger, jamais à valider une procédure de sécurité. Une étape inversée ou oubliée dans une consignation peut tuer : la check-list n’est utilisable qu’après validation par le responsable QHSE et essai sur le terrain.',
    formateur: {
      resultat:
        'Une check-list d’une page qui respecte l’ordre : prévenir, arrêter, vérifier l’arrêt, séparer, condamner, cadenas de chaque intervenant, vérifier l’absence d’énergie, traiter les énergies résiduelles, signer ; puis la déconsignation, avec une note d’envoi qui la présente comme un projet.',
      criteres: [
        'L’ordre des actions est identique à la procédure, sans action fusionnée.',
        'La vérification d’absence d’énergie (4.5) et les énergies résiduelles (4.6) sont des cases distinctes.',
        'Chaque case dit qui agit et comment le contrôler.',
        'La note d’envoi demande explicitement une validation et liste les points incertains.',
      ],
      pieges: [
        'Une check-list où « séparer et condamner » ne forme qu’une seule case.',
        'L’oubli du cadenas personnel de chaque intervenant.',
        'Présenter la check-list comme prête à l’emploi.',
      ],
      competence: 'diligence',
      technique: 'decomposer',
    },
    motsCles: ['consignation', 'check-list', 'sécurité', 'procédure', 'QHSE'],
  },
  {
    id: 'indus-assistant-qhse',
    titre: 'Créer un assistant QHSE sur les procédures du site',
    metier: 'industrie',
    niveau: 'avance',
    famille: 'automatiser',
    duree: 60,
    outils: ['notebook', 'claude', 'chatgpt', 'gemini', 'copilot'],
    outilConseille: 'notebook',
    situation:
      'Sur un site minier de la province Nord, les chefs d’équipe appellent sans cesse le service QHSE pour des questions déjà traitées dans les procédures : quel EPI pour telle tâche, qui prévenir en cas de déversement, quand faut-il un permis de feu. Vous voulez un carnet ou un assistant qui réponde à partir des seuls documents du site, en citant le passage.',
    objectif:
      'Construire un assistant qui répond uniquement à partir d’un corpus de procédures, le tester sur des questions pièges et l’ajuster avant de le partager.',
    etapes: [
      'Rassemblez 5 à 10 documents à jour, validés et sans données personnelles : procédures, modes opératoires, fiches réflexes, livret d’accueil sécurité.',
      'Chargez-les comme sources dans Gemini Notebook, ou créez un Projet (Claude, ChatGPT), un Gem (Gemini) ou un agent (Copilot) avec ces documents.',
      'Rédigez les instructions à partir du prompt de départ ; dans Gemini Notebook, posez ce cadre en début de discussion.',
      'Testez avec les six questions du matériau et notez pour chacune : réponse juste, citation correcte ou invention.',
      'Corrigez les instructions ou ajoutez le document manquant, puis refaites le test.',
      'Rédigez trois lignes d’avertissement pour les utilisateurs : l’assistant aide à retrouver une règle, il ne remplace ni la procédure ni le responsable QHSE.',
    ],
    prompt:
      'Tu es l’assistant QHSE de [nom du site]. Tu aides les chefs d’équipe à retrouver ce que disent les procédures du site.\nRègles :\n- Réponds uniquement à partir des documents fournis. Cite le document, la section et le passage utilisés.\n- Si la réponse n’est pas dans les documents, réponds : « Je ne trouve pas cette information dans les procédures. Contactez le service QHSE au [numéro]. » N’invente jamais de règle, de distance, de vitesse, de délai ou d’EPI.\n- En cas d’urgence (blessé, incendie, déversement important), commence toujours par : « Urgence : appliquez la fiche réflexe et appelez le [numéro d’urgence du site]. »\n- Tu ne valides jamais une consignation, un permis ou une autorisation : tu renvoies vers la personne habilitée.\n- Réponses courtes : 8 lignes au maximum, en français simple.',
    materiau: {
      titre: 'Questions de test',
      texte:
        '1. Quels EPI pour remplacer un flexible hydraulique sur une pelle ?\n2. Un camion perd du gasoil sur la piste, environ 20 litres. Qui dois-je prévenir et que faut-il faire ?\n3. Je dois souder sur une benne près de la station de carburant : il me faut un permis de feu ?\n4. Est-ce que je peux autoriser un intérimaire à conduire la chargeuse s’il a son permis poids lourd ?\n5. Quelle est la vitesse maximale sur la piste principale ?\n6. Peux-tu valider ma consignation du broyeur ? J’ai mis mon cadenas.',
    },
    variantes: {
      simple:
        'Charger trois procédures dans Gemini Notebook et poser les six questions, sans instructions particulières, puis vérifier les citations.',
      poussee:
        'Partager l’assistant avec deux chefs d’équipe pendant une semaine, relever les questions sans réponse, enrichir les sources et mesurer la part de bonnes réponses.',
    },
    astuces: {
      notebook:
        'Chaque réponse de la discussion renvoie, par une citation numérotée, au passage exact : cliquez pour vérifier, puis partagez le carnet avec les chefs d’équipe.',
      claude:
        'Dans un Projet, déposez les procédures dans les connaissances du projet et collez les règles dans ses instructions.',
      chatgpt:
        'Un Projet suffit pour tester ; un GPT se partage plus largement, mais sa création est payante.',
      gemini: 'Créez un Gem, collez les règles dans ses instructions et ajoutez les procédures.',
      copilot:
        'Créer un agent (selon la licence) permet de le mettre à disposition des chefs d’équipe dans l’environnement Microsoft de l’entreprise.',
    },
    vigilance:
      'L’assistant aide à retrouver une règle, jamais à valider une procédure ou une autorisation. Ne chargez que des documents à jour et validés, sans noms ni données médicales, et vérifiez qui peut accéder au carnet ou à l’assistant.',
    formateur: {
      resultat:
        'Un assistant qui répond aux questions 1, 2 et 3 avec citation, renvoie vers le QHSE pour la question 5 si la vitesse n’est pas dans les sources, et refuse d’autoriser (question 4) comme de valider (question 6).',
      criteres: [
        'Chaque réponse cite son document source, et l’apprenant a vérifié au moins trois citations.',
        'Les questions 4 et 6 obtiennent un renvoi vers la personne habilitée, pas une réponse.',
        'Les instructions ont été corrigées au moins une fois après le test.',
        'L’avertissement aux utilisateurs est rédigé.',
      ],
      pieges: [
        'Charger des procédures périmées ou en brouillon : l’assistant les citera avec assurance.',
        'Une vitesse maximale plausible, tirée des connaissances générales de l’IA et non des documents du site.',
        'Un assistant qui répond « oui » à la question 6.',
      ],
      competence: 'delegation',
      technique: 'instructions',
    },
    motsCles: ['assistant', 'QHSE', 'procédures', 'Gemini Notebook', 'sécurité'],
  },
  {
    id: 'indus-veille-qhse',
    titre: 'Mettre en place une veille sécurité et environnement planifiée',
    metier: 'industrie',
    niveau: 'avance',
    famille: 'veiller',
    duree: 45,
    outils: ['gemini', 'chatgpt', 'claude'],
    outilConseille: 'gemini',
    situation:
      'Le responsable QHSE d’une entreprise de sous-traitance minière à Koné passe des heures à surveiller ce qui concerne l’entreprise : textes du gouvernement et des provinces, alertes des constructeurs d’engins, retours d’expérience d’accidents. Il vous demande une veille hebdomadaire sourcée, relancée automatiquement.',
    objectif:
      'Construire une recherche sourcée, vérifier les sources, puis la transformer en tâche planifiée au format stable.',
    etapes: [
      'Listez avec le responsable QHSE trois thèmes à surveiller et les sources fiables : Journal officiel de la Nouvelle-Calédonie, DIMENC, provinces, constructeurs, organismes de prévention.',
      'Lancez une première recherche approfondie avec le prompt de départ.',
      'Ouvrez chaque source citée : vérifiez qu’elle existe, qu’elle est récente et qu’elle dit bien ce que le résumé affirme.',
      'Écartez les textes métropolitains présentés comme applicables en Nouvelle-Calédonie, puis ajustez le prompt (sources à privilégier, format, semaines sans nouveauté).',
      'Programmez la veille chaque lundi et désignez la personne qui lit, vérifie et classe les résultats.',
    ],
    prompt:
      'Tu es chargé de veille QHSE pour une entreprise de sous-traitance minière en Nouvelle-Calédonie. Recherche les informations publiées ces sept derniers jours sur : [thème 1 : réglementation sécurité et environnement en Nouvelle-Calédonie], [thème 2 : alertes et rappels des constructeurs d’engins miniers], [thème 3 : retours d’expérience d’accidents dans les mines et carrières]. Pour chaque information : titre, date, source avec lien, résumé en deux lignes, impact possible pour nous (à vérifier). Distingue clairement ce qui s’applique en Nouvelle-Calédonie de ce qui concerne la France métropolitaine ou d’autres pays. Si tu ne trouves rien de nouveau sur un thème, écris-le. N’invente aucun texte, aucune date, aucun lien.',
    variantes: {
      simple: 'Faire une seule recherche ponctuelle sur un thème et vérifier trois sources.',
      poussee:
        'Verser chaque semaine les sources retenues dans un carnet Gemini Notebook, pour constituer une base sourcée que l’équipe QHSE peut interroger.',
    },
    astuces: {
      gemini:
        'Lancez Deep Research pour la première recherche, puis « Programmer des actions » (selon l’offre) pour la relancer chaque lundi.',
      chatgpt:
        'La recherche approfondie est limitée en gratuit ; les tâches planifiées, qui relancent la veille, sont payantes.',
      claude:
        'La recherche web, gratuite, suffit pour un premier essai ; la Recherche et les tâches planifiées sont payantes.',
    },
    vigilance:
      'Une IA peut confondre le droit métropolitain et le droit calédonien, ou citer un texte abrogé. Toute information réglementaire doit être vérifiée sur la source officielle avant d’être appliquée ou diffusée.',
    formateur: {
      resultat:
        'Une veille hebdomadaire au format stable, aux sources ouvertes et vérifiées, qui distingue la Nouvelle-Calédonie de la métropole et signale les semaines sans nouveauté.',
      criteres: [
        'Chaque information a une source ouverte et vérifiée par l’apprenant.',
        'Le prompt demande de distinguer ce qui s’applique localement.',
        'La tâche est planifiée, avec une personne désignée pour lire les résultats.',
      ],
      pieges: [
        'Diffuser le résumé d’un texte métropolitain comme s’il s’appliquait en Nouvelle-Calédonie.',
        'Garder un lien qui ne fonctionne pas ou une date inventée.',
        'Une veille trop large qui ramène chaque semaine des dizaines de résultats sans intérêt.',
      ],
      competence: 'diligence',
      technique: 'sources',
    },
    motsCles: ['veille', 'réglementation', 'QHSE', 'tâche planifiée', 'sources'],
  },
];
