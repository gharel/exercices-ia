/**
 * Associations, culture et sport : club sportif, centre culturel, festival, association de
 * quartier, d’entraide ou environnementale.
 * Toutes les personnes, associations, adresses et sommes sont fictives.
 */

export const vocabulaire = {
  structure: { g: 'f', s: 'association', p: 'associations' },
  client: { g: 'm', s: 'adhérent', p: 'adhérents' },
  partenaire: { g: 'm', s: 'partenaire institutionnel', p: 'partenaires institutionnels' },
  documentCourant: { g: 'm', s: 'message aux familles', p: 'messages aux familles' },
  documentLong: { g: 'm', s: 'règlement intérieur', p: 'règlements intérieurs' },
  reunion: { g: 'f', s: 'réunion du bureau', p: 'réunions du bureau' },
  offre: {
    g: 'm',
    s: 'stage de va’a des vacances à Nouville',
    p: 'stages de va’a des vacances à Nouville',
  },
  poste: { g: 'm', s: 'animateur sportif', p: 'animateurs sportifs' },
  evenement: { g: 'f', s: 'fête de fin de saison', p: 'fêtes de fin de saison' },
  visuel: { g: 'f', s: 'affiche d’inscriptions', p: 'affiches d’inscriptions' },
  domaine: 'le milieu associatif',
  motifReclamation: 'le montant de sa cotisation, qu’il juge trop élevé pour la saison',
  donnees: 'le relevé mensuel de fréquentation des séances, activité par activité',
  colonnes:
    'Mois;Activité;Séances prévues;Séances annulées;Participants (total du mois);Places par séance',
  indicateur: 'le taux de remplissage des séances de chaque activité',
  veille: 'les manifestations sportives et culturelles prévues dans le Grand Nouméa',
  sourcesVeille:
    'les sites et les pages des communes et des provinces, la presse calédonienne et les pages des ligues et des fédérations',
  jargon: 'la différence entre l’adhésion à l’association et la licence de la fédération',
  procedure: 'l’inscription d’un nouvel adhérent en début de saison',
  situationTendue:
    'le gestionnaire d’une salle communale qui veut augmenter le tarif de location en cours de saison',
  donneesSensibles:
    'les noms, coordonnées, dates de naissance et certificats médicaux des adhérents, dont ceux des mineurs',
  corpus: 'les statuts, le règlement intérieur et les guides de la fédération',
  publicCible: 'les familles du quartier qui hésitent à inscrire leurs enfants à une activité',
  etranger: 'un bénévole anglophone venu renforcer l’équipe du festival',
  themeFormation: 'les rôles et les gestes d’un bénévole le jour d’un événement',
  tacheRepetitive: 'les rappels de cotisation aux adhérents en retard',
  planning: 'les créneaux d’entraînement de la semaine pour trois équipes et deux animateurs',
  comparaison: 'deux devis de location de salle pour l’assemblée générale',
};

export const exercices = [
  {
    id: 'asso-appel-benevoles',
    titre: 'Rédiger l’appel à bénévoles d’une régate de va’a',
    metier: 'associations',
    niveau: 'debutant',
    famille: 'rediger',
    duree: 15,
    outils: ['copilot', 'claude', 'chatgpt', 'gemini'],
    outilConseille: 'copilot',
    situation:
      'Le Va’a Club de Boulari, au Mont-Dore, organise sa régate annuelle dans six semaines. Il manque une vingtaine de bénévoles. Vous êtes secrétaire du club et devez écrire l’appel qui partira par e-mail et sur la page du club.',
    objectif:
      'Rédiger un appel clair et motivant à partir d’une fiche d’événement, sans que l’IA invente d’avantages ni d’engagements.',
    etapes: [
      'Copiez la fiche de l’événement du matériau dans votre outil d’IA avec le prompt de départ.',
      'Complétez les crochets : le ton voulu (chaleureux, sportif…) et la longueur.',
      'Vérifiez que chaque poste, chaque horaire et chaque nombre de bénévoles correspond à la fiche.',
      'Repérez tout avantage ou promesse qui ne figure pas dans la fiche (assurance, repas, tenue, certificat) et faites-le retirer.',
      'Demandez une version courte de 40 mots pour la page du club, puis choisissez la version que vous enverriez.',
    ],
    prompt:
      'Tu es secrétaire d’un club de va’a au Mont-Dore. À partir de la fiche ci-dessous, rédige l’e-mail d’appel à bénévoles pour notre régate, sur un ton [chaleureux et sportif], en [180] mots environ.\n\nRègles :\n- Utilise uniquement les informations de la fiche. N’ajoute aucun avantage, aucune promesse ni aucun engagement qui n’y figure pas.\n- Présente chaque poste avec son horaire et le nombre de bénévoles cherchés.\n- Explique en une phrase pourquoi l’aide des bénévoles est précieuse pour le club.\n- Termine par la façon de s’inscrire et la date limite.\n\n<fiche>\n[collez la fiche de l’événement ici]\n</fiche>',
    materiau: {
      titre: 'Fiche de l’événement (fictive)',
      texte:
        'Régate annuelle du Va’a Club de Boulari\nDate : samedi 21 mars, de 7 h à 17 h, plage de Boulari (Mont-Dore)\nPostes à pourvoir :\n- accueil et inscriptions des équipages : 4 bénévoles, 7 h à 12 h\n- buvette et restauration : 6 bénévoles, 9 h à 17 h (par roulement de 3 h)\n- parking et circulation : 3 bénévoles, 7 h 30 à 11 h\n- balisage du parcours à terre : 4 bénévoles, 7 h à 9 h\n- rangement et nettoyage : 5 bénévoles, 15 h à 17 h\nUn repas et des boissons sont offerts aux bénévoles.\nRéunion de préparation : jeudi 19 mars à 18 h, au local du club.\nInscription : par SMS au 78 00 00 ou par e-mail à benevoles@vaa-boulari.example avant le 10 mars.\nSignature : Mélissa, secrétaire du club',
    },
    variantes: {
      simple: 'Rédiger seulement l’annonce courte de 40 mots pour la page du club.',
      poussee:
        'Demander trois versions pour trois publics (parents des jeunes pagayeurs, anciens du club, lycéens du Mont-Dore), puis un SMS de relance de 160 caractères.',
    },
    astuces: {
      copilot:
        'Dans Outlook, partez d’un « Brouillon avec Copilot » en collant la fiche, puis réglez le ton et la longueur.',
      claude:
        'Demandez deux versions de ton différent, puis combinez la meilleure ouverture et la meilleure conclusion.',
      gemini:
        'Dans Gmail, utilisez « Aide-moi à écrire » avec la fiche, puis affinez : plus court, plus chaleureux.',
    },
    vigilance:
      'L’appel engage le club : un avantage cité par l’IA (assurance, tenue, certificat de bénévolat) doit être confirmé par le bureau avant l’envoi. Ne collez ni listes de membres ni coordonnées personnelles.',
    formateur: {
      resultat:
        'Un e-mail d’appel fidèle à la fiche : cinq postes avec horaires et effectifs (22 bénévoles au total), le repas offert, la réunion du 19 mars, la date limite du 10 mars, et aucun avantage inventé.',
      criteres: [
        'Les postes, horaires et effectifs sont identiques à la fiche.',
        'La date limite d’inscription et le moyen de s’inscrire figurent dans l’e-mail.',
        'Aucune promesse absente de la fiche (assurance, tenue, attestation) n’apparaît.',
        'Le prompt demande explicitement de ne rien ajouter qui ne soit dans la fiche.',
      ],
      pieges: [
        'Laisser passer « tous les bénévoles seront assurés » ou « un tee-shirt offert », ajoutés par l’IA.',
        'Mélanger les horaires de deux postes, par exemple le balisage et le parking.',
        'Envoyer l’e-mail avec le texte d’exemple d’un modèle au lieu des vraies informations.',
      ],
      competence: 'description',
      technique: 'contexte',
    },
    motsCles: ['bénévoles', 'appel', 'va’a', 'régate', 'e-mail'],
  },
  {
    id: 'asso-compte-rendu-ag',
    titre: 'Rédiger le compte rendu d’une assemblée générale à partir de notes manuscrites',
    metier: 'associations',
    niveau: 'debutant',
    famille: 'synthetiser',
    duree: 20,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'L’association Sport pour tous de Poindimié a tenu son assemblée générale hier soir. Le secrétaire a pris des notes à la main, en vrac, et le bureau veut un compte rendu propre à envoyer aux adhérents dans les deux jours.',
    objectif:
      'Transformer des notes désordonnées en compte rendu structuré, en gardant chaque chiffre et chaque décision exacts, et en signalant ce qui manque.',
    etapes: [
      'Recopiez ou collez les notes du matériau dans votre outil d’IA avec le prompt de départ.',
      'Vérifiez le compte rendu point par point : présence, votes, chiffres, décisions.',
      'Contrôlez le résultat des comptes avec une calculatrice : recettes moins dépenses.',
      'Faites lister les informations absentes ou ambiguës des notes, sans qu’elles soient comblées.',
      'Complétez vous-même les trous avec le bureau, puis demandez une version de 10 lignes pour le courrier aux adhérents.',
    ],
    prompt:
      'Tu es secrétaire de l’association Sport pour tous, à Poindimié. À partir de mes notes manuscrites ci-dessous, rédige le compte rendu de l’assemblée générale en suivant l’ordre du jour : présences, rapport moral, comptes, cotisation, élection du bureau, questions diverses.\n\nRègles :\n- Utilise uniquement les informations des notes. Si une information manque ou est douteuse, écris « à confirmer » et liste-la à la fin.\n- Présente les votes sous la forme « pour / contre / abstentions ».\n- Ne reformule pas les chiffres : recopie-les tels quels.\n- Ton neutre, phrases courtes.\n\n<notes>\n[collez les notes ici]\n</notes>',
    materiau: {
      titre: 'Notes prises à la main pendant l’assemblée générale (fictives)',
      texte:
        'AG Sport pour tous Poindimié, vendredi soir, salle des fêtes\n31 présents sur 64 adhérents (+ 5 pouvoirs ??)\nprésidente Mme L. ouvre à 18 h 40\nrapport moral lu par la présidente : 2 sections (gym douce, football loisir), fréquentation en hausse en gym\nvote rapport moral : 29 pour, 0 contre, 2 abst.\ncomptes par le trésorier M. K. : recettes 3 840 000 XPF, dépenses 3 615 000 XPF\nsubvention commune 900 000 incluse dans les recettes\nvote des comptes : 31 pour\nproposition cotisation de 6 000 à 7 000 XPF (pour racheter des ballons + louer la salle)\nvote : 18 pour, 9 contre, 4 abst. -> adoptée\nbureau : président(e) Mme L. réélue, trésorier M. K. réélu, secrétaire : poste vacant, 2 volontaires (prénoms ? à redemander)\nquestions diverses : vestiaires sales (voir mairie), sono en panne, tournoi de fin de saison fin juin ou début juillet ?\ndemande de subvention commune pour l’an prochain à déposer avant fin mars (Aurélie vérifie la date)\nfin 20 h 30',
    },
    variantes: {
      simple: 'Demander seulement la liste des décisions prises, en cinq lignes.',
      poussee:
        'Demander en plus l’e-mail d’envoi aux adhérents, puis une version en langage clair de 8 lignes pour l’affichage dans la salle.',
    },
    astuces: {
      claude:
        'Demandez, pour chaque décision, la ligne de vos notes dont elle vient : la vérification devient rapide.',
      chatgpt:
        'Ouvrez le compte rendu dans le canevas pour retoucher un paragraphe sans tout régénérer.',
      copilot:
        'Avec Copilot dans Word (selon la licence), collez vos notes dans le modèle de l’association et demandez-lui de les mettre en forme ; sinon, joignez-les dans Copilot Chat.',
    },
    vigilance:
      'Les notes contiennent des noms : mettez des initiales avant de coller. Les règles de vote et de quorum se lisent dans les statuts de l’association, pas dans la réponse de l’IA.',
    formateur: {
      resultat:
        'Un compte rendu dans l’ordre du jour, avec les votes (29/0/2, 31 pour, 18/9/4), un résultat de 225 000 XPF (3 840 000 moins 3 615 000), et une liste « à confirmer » : pouvoirs, poste de secrétaire, prénoms des volontaires, date du tournoi, date limite de la demande de subvention.',
      criteres: [
        'Chaque chiffre et chaque vote reprend exactement les notes.',
        'Les points incertains sont marqués « à confirmer » au lieu d’être tranchés.',
        'Le résultat des comptes a été vérifié par l’apprenant.',
        'Le compte rendu suit l’ordre du jour demandé.',
      ],
      pieges: [
        'Laisser l’IA affirmer que le quorum est atteint, ou que 5 pouvoirs sont valables : les notes ne le disent pas.',
        'Inventer une date pour le tournoi ou pour la demande de subvention.',
        'Présenter le secrétaire comme élu alors que le poste est vacant.',
      ],
      competence: 'discernement',
      technique: 'sources',
    },
    motsCles: ['assemblée générale', 'compte rendu', 'notes', 'secrétaire', 'vote'],
  },
  {
    id: 'asso-affiche-tournoi-canva',
    titre: 'Créer dans Canva l’affiche d’un tournoi inter-quartiers',
    metier: 'associations',
    niveau: 'debutant',
    famille: 'visuels',
    duree: 20,
    outils: ['canva', 'chatgpt', 'claude'],
    outilConseille: 'canva',
    situation:
      'L’Association sportive de Koné organise un tournoi de football à 7 entre quartiers. L’affiche doit être collée chez les commerçants et partagée sur la page de l’association, en version carrée.',
    objectif:
      'Préparer le texte d’une affiche avec l’IA, générer et retoucher le visuel dans Canva, et vérifier que toutes les informations pratiques sont exactes.',
    etapes: [
      'Avec ChatGPT ou Claude, faites rédiger le texte de l’affiche à partir de la fiche du tournoi : un titre court, une accroche, les informations pratiques.',
      'Dans Canva, décrivez l’affiche voulue à l’IA Canva ou au Design magique : format A4 portrait, ambiance sportive, texte lisible de loin.',
      'Choisissez une proposition, remplacez le texte d’exemple par le vôtre et vérifiez dates, heures, lieu et tarif.',
      'Utilisez l’écriture magique pour raccourcir un texte qui déborde.',
      'Déclinez l’affiche en format carré pour la page de l’association, avec le redimensionnement magique (Pro) ou dans un nouveau design.',
    ],
    prompt:
      'Tu es chargé de communication d’une association sportive à Koné. À partir de la fiche ci-dessous, propose le texte d’une affiche de tournoi : un titre de six mots au maximum, une accroche de dix mots, puis les informations pratiques (date, horaires, lieu, tarif, inscription, remise des coupes). N’ajoute aucune information absente de la fiche. Propose trois titres au choix.\n\n<fiche>\n[collez la fiche du tournoi ici]\n</fiche>',
    materiau: {
      titre: 'Fiche du tournoi (fictive)',
      texte:
        'Tournoi inter-quartiers de football à 7, organisé par l’Association sportive de Koné\nDate : samedi 28 mars, de 8 h à 17 h\nLieu : terrain synthétique du stade de Koné\nÉquipes : 12 équipes de 8 joueurs maximum, à partir de 16 ans\nInscription des équipes : 10 000 XPF par équipe, jusqu’au 20 mars, auprès d’Antoine au 77 00 00\nBuvette et petite restauration sur place\nRemise des coupes à 16 h\nEntrée libre pour le public\nOrganisation : bénévoles de l’association, avec le soutien de la commune (logo à ajouter)',
    },
    variantes: {
      simple: 'Partir d’un modèle d’affiche Canva et n’utiliser l’IA que pour le texte.',
      poussee:
        'Créer trois affiches de style différent (sobre, énergique, très colorée), les faire commenter par le groupe, puis enregistrer la meilleure comme modèle pour les prochains tournois.',
    },
    astuces: {
      canva:
        'Si l’association a un kit de marque (Pro), appliquez-le : couleurs, polices et logo se mettent en place en un clic.',
      chatgpt:
        'Demandez trois titres, puis demandez lequel se lit le mieux à trois mètres d’une vitrine, et pourquoi.',
    },
    vigilance:
      'Vérifiez date, heures et tarif sur l’affiche finale : une erreur imprimée se corrige mal. Pas de photos de joueurs identifiables, surtout mineurs, sans accord des personnes ou de leurs parents. Le logo de la commune s’ajoute avec l’accord de la commune.',
    formateur: {
      resultat:
        'Une affiche A4 lisible, avec un titre court et toutes les informations exactes (samedi 28 mars, 8 h à 17 h, 10 000 XPF par équipe jusqu’au 20 mars, coupes à 16 h), et sa version carrée.',
      criteres: [
        'Date, horaires, lieu, tarif et contact sont exacts.',
        'Aucune information n’est inventée (prix à gagner, arbitrage officiel, buvette gratuite), et l’âge minimum de 16 ans est repris.',
        'L’affiche se lit de loin : peu de mots, bon contraste.',
        'Le texte d’exemple du modèle Canva a été entièrement remplacé.',
      ],
      pieges: [
        'Garder une date ou un prix du modèle Canva.',
        'Utiliser le logo de la commune sans son accord.',
        'Recopier toute la fiche sur l’affiche, qui devient illisible.',
      ],
      competence: 'diligence',
      technique: 'format',
    },
    motsCles: ['affiche', 'Canva', 'tournoi', 'football', 'Koné'],
  },
  {
    id: 'asso-lettre-information-fautes',
    titre: 'Corriger la lettre d’information aux adhérents avant l’envoi',
    metier: 'associations',
    niveau: 'debutant',
    famille: 'corriger',
    duree: 15,
    outils: ['copilot', 'claude', 'chatgpt', 'gemini'],
    outilConseille: 'copilot',
    situation:
      'Le Club de natation du Mont-Dore envoie sa lettre d’information de rentrée à ses adhérents. Elle a été écrite à plusieurs mains, la veille au soir, et part ce matin.',
    objectif:
      'Faire corriger un texte en précisant ce qu’il faut garder, puis relever les incohérences que l’IA doit signaler sans les trancher.',
    etapes: [
      'Copiez la lettre du matériau dans votre outil d’IA avec le prompt de départ.',
      'Demandez la correction de l’orthographe, de la grammaire et de la ponctuation, sans changer les dates, horaires, tarifs ni noms.',
      'Demandez la liste des corrections faites, pour vérifier qu’aucune information n’a changé.',
      'Demandez de signaler les incohérences du texte (dates, horaires) sans les corriger, et vérifiez-les avec le bureau.',
      'Demandez une version plus chaleureuse de la même lettre, et choisissez celle que vous enverriez.',
    ],
    prompt:
      'Tu es relecteur pour un club de natation du Mont-Dore. Corrige l’orthographe, la grammaire et la ponctuation de la lettre ci-dessous. Ne modifie aucune date, aucun horaire, aucun tarif ni aucun nom. Présente d’abord la lettre corrigée, puis la liste des corrections, puis la liste des incohérences ou des informations douteuses que tu as repérées, sans les corriger.\n\n<lettre>\n[collez la lettre ici]\n</lettre>',
    materiau: {
      titre: 'Lettre d’information de rentrée (avec fautes)',
      texte:
        'Chers adhérents,\n\nLa nouvelle saison de natation reprend le lundi 2 mars à la piscine du Mont-Dore. Les créneaux son inchangé : le mardi et le jeudi de 17 h 30 à 19 h pour les jeunes, le samedi matin de 8 h à 10 h pour les adultes.\n\nLes inscription sont ouverte jusqu’au 28 février auprès de Corinne, à la permanence du club tout les mercredi. Pour les nouveau adhérents, il faut apporter une photo, le bulletin remplis et la cotisation de 22 000 XPF (24 000 XPF pour les adultes). La date limite d’inscription est fixée au 20 février.\n\nNous organisons également une journée découverte le dimanche 15 mars, ouvert a toute la famille, avec un goûter offert par le club. Merci de vous inscrire avant le 10 mars.\n\nNous cherchons aussi des bénévoles pour accompagner les groupes de jeunes lors de la compétition de Nouméa. Si vous ête disponible, contacter nous.\n\nSportivement,\nLe bureau',
    },
    variantes: {
      simple: 'Se limiter à la correction de l’orthographe, sans version plus chaleureuse.',
      poussee:
        'Demander trois versions pour trois publics (parents de jeunes nageurs, adultes, anciens du club), puis une version de 300 caractères pour les réseaux sociaux.',
    },
    astuces: {
      copilot:
        'Dans Outlook, lancez « Coaching par Copilot » avant l’envoi : il commente le ton et la clarté de la lettre.',
      chatgpt:
        'Dans le canevas, demandez des suggestions de modification pour voir chaque correction proposée.',
      gemini: 'Ouvrez le texte dans Canvas pour retoucher un passage précis sans tout régénérer.',
    },
    vigilance:
      'Relisez toujours les dates et les tarifs : une IA peut « corriger » une date sans le dire. Ici, deux dates limites d’inscription se contredisent : seul le bureau sait laquelle est la bonne.',
    formateur: {
      resultat:
        'Une lettre sans faute, aux dates et tarifs inchangés, une liste de corrections exploitable, et le signalement des deux dates limites contradictoires (28 février et 20 février).',
      criteres: [
        'Dates, horaires et tarifs sont identiques à l’original.',
        'L’IA a signalé la contradiction entre le 28 février et le 20 février sans choisir.',
        'L’apprenant a relu la liste des corrections au lieu de la croire sur parole.',
        'Le prompt précise ce qu’il ne faut pas modifier.',
      ],
      pieges: [
        'Laisser l’IA choisir une des deux dates limites et envoyer une lettre fausse.',
        'Accepter une version « plus chaleureuse » qui ajoute une promesse (cadeau, gratuité).',
        'Oublier de demander la liste des corrections et ne plus savoir ce qui a changé.',
      ],
      competence: 'discernement',
      technique: 'format',
    },
    motsCles: ['lettre d’information', 'correction', 'adhérents', 'natation', 'relecture'],
  },
  {
    id: 'asso-budget-festival',
    titre: 'Bâtir le budget prévisionnel d’un festival et repérer ce qui manque',
    metier: 'associations',
    niveau: 'intermediaire',
    famille: 'analyser',
    duree: 30,
    outils: ['chatgpt', 'claude', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'L’association Chants du Nord prépare un festival de musique de deux jours à Poindimié. La trésorière bénévole a posé un premier budget dans un tableau. Avant de le présenter au bureau, elle veut savoir s’il est équilibré et ce qui a été oublié.',
    objectif:
      'Faire calculer et commenter un budget par l’IA, vérifier les totaux, et faire repérer les lignes manquantes et les recettes encore incertaines.',
    etapes: [
      'Déposez ou collez le tableau du budget avec le prompt de départ.',
      'Vérifiez à la calculatrice le total des recettes, le total des dépenses et le solde.',
      'Demandez de recalculer le solde sans les subventions seulement demandées, et de dire quelle part des recettes repose sur elles. Notez qu’aucune recette n’est encore acquise : même la billetterie est estimée.',
      'Demandez la liste des postes de dépenses qu’un festival comparable prévoit en général et qui n’apparaissent pas dans le tableau.',
      'Rédigez vous-même, pour le bureau, trois recommandations : l’IA propose, c’est le bureau qui décide.',
    ],
    prompt:
      'Tu es conseiller financier bénévole auprès d’une association culturelle de Nouvelle-Calédonie. Voici le budget prévisionnel d’un festival de musique de deux jours à Poindimié (données fictives, en XPF).\n\n1. Calcule le total des recettes, le total des dépenses et le solde. Montre tes calculs.\n2. Recalcule le solde en ne gardant que les recettes dont le statut est « Estimé » ou « Promis », puis dis quelle part du total des recettes repose sur des subventions seulement demandées.\n3. Liste les postes de dépenses habituels pour un festival de ce type qui ne figurent pas dans le tableau, sans inventer de montant ni de règle.\n4. Propose trois points de vigilance pour le bureau.\nSi une donnée te semble anormale, signale-la au lieu de la corriger.\n\n<budget>\n[collez le tableau ici]\n</budget>',
    materiau: {
      titre: 'Budget prévisionnel du festival Chants du Nord (fictif)',
      texte:
        'Ligne;Nature;Montant prévu (XPF);Statut\nBilletterie (400 entrées à 1 500 XPF);Recette;600 000;Estimé\nBuvette et restauration;Recette;450 000;Estimé\nSubvention de la commune;Recette;300 000;Demandée\nSubvention de la province;Recette;800 000;Demandée\nPartenaire local (promesse orale);Recette;250 000;Promis\nCachets des artistes;Dépense;900 000;Devis reçu\nSonorisation et lumière;Dépense;380 000;Devis reçu\nLocation du chapiteau;Dépense;260 000;Devis reçu\nRepas des bénévoles;Dépense;120 000;Estimé\nCommunication et impression;Dépense;90 000;Estimé\nDéplacements des artistes depuis Nouméa;Dépense;210 000;Estimé\nRaccordement eau et électricité;Dépense;75 000;Devis reçu',
    },
    variantes: {
      simple: 'Demander seulement les totaux et le solde, sans la liste des postes manquants.',
      poussee:
        'Demander trois scénarios (billetterie à 300, 400 et 500 entrées), puis un graphique recettes et dépenses, relus ligne à ligne.',
    },
    astuces: {
      chatgpt:
        'Déposez le tableau en CSV : l’analyse de données calcule en code, que vous pouvez afficher pour vérifier.',
      claude:
        'Déposez le fichier : Claude calcule, peut tracer un graphique et rendre le budget en fichier Excel.',
      copilot:
        'Mettez le budget sous forme de tableau Excel avant de le confier à Copilot : il le lit beaucoup mieux.',
    },
    vigilance:
      'Le budget présenté au bureau et aux financeurs reste celui de la trésorière. L’IA ne connaît ni les statuts, ni les règles des financeurs, ni les obligations de l’association : ne reprenez aucune obligation ou aucun montant légal sans l’avoir vérifié.',
    formateur: {
      resultat:
        'Recettes 2 400 000 XPF, dépenses 2 035 000 XPF, solde de 365 000 XPF ; sans les deux subventions demandées (1 100 000 XPF, soit environ 46 % des recettes), le budget serait déficitaire de 735 000 XPF. Les postes manquants sont repérés : assurance, droits d’auteur, sécurité et secours, nettoyage, hébergement des artistes, imprévus.',
      criteres: [
        'Les totaux (2 400 000, 2 035 000, 365 000) ont été vérifiés à la main.',
        'Le solde hors subventions demandées est correctement recalculé (moins 735 000 XPF).',
        'Les postes manquants sont listés sans montant inventé.',
        'Les recommandations finales sont rédigées ou validées par l’apprenant.',
      ],
      pieges: [
        'Présenter le solde positif comme acquis alors que près de la moitié des recettes dépend de subventions seulement demandées.',
        'Laisser l’IA ajouter des montants pour les postes manquants, ou citer des obligations précises sans source.',
        'Oublier que la billetterie est une estimation de 400 entrées.',
      ],
      competence: 'discernement',
      technique: 'critique',
    },
    motsCles: ['budget', 'festival', 'prévisionnel', 'subvention', 'tableau'],
  },
  {
    id: 'asso-demande-subvention',
    titre: 'Rédiger une demande de subvention sans inventer les critères du financeur',
    metier: 'associations',
    niveau: 'intermediaire',
    famille: 'rediger',
    duree: 45,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'L’association Les Pagayeurs de Rivière-Salée veut organiser une initiation à la pirogue pour des jeunes du quartier. Le bureau a pris des notes en réunion et vous avez en main l’extrait fictif de la notice du financeur. Vous rédigez le dossier.',
    objectif:
      'Rédiger une demande de subvention en plusieurs échanges, en s’appuyant sur les notes du bureau et sur la notice fournie, sans que l’IA invente de critères, de chiffres ou de résultats.',
    etapes: [
      'Collez la notice du financeur et les notes du bureau, et demandez d’abord un tableau : chaque critère de la notice, ce que les notes permettent de répondre, ce qui manque.',
      'Vérifiez le tableau : tout ce qui est marqué « répondu » figure bien dans les notes. Complétez avec le bureau ce qui manque.',
      'Demandez le plan du dossier : présentation de l’association, projet, public, calendrier, budget, résultats attendus.',
      'Faites rédiger le dossier section par section, en 600 mots au maximum, en gardant [entre crochets] tout ce qui reste à confirmer.',
      'Relisez les chiffres du budget (le total et la part demandée) et les critères cités, puis demandez à l’IA la liste de ses affirmations non présentes dans vos documents.',
    ],
    prompt:
      'Tu es chargé de développement d’une association sportive de Nouméa. Je prépare une demande de subvention. Pour l’instant, ne rédige rien : compare la notice du financeur et les notes du bureau ci-dessous.\n\nPrésente un tableau : critère de la notice, ce que les notes permettent de répondre, ce qui manque. N’invente aucun critère, aucun chiffre et aucun résultat. Si une information des notes est contradictoire, signale-la.\n\n<notice_financeur>\n[collez l’extrait de la notice]\n</notice_financeur>\n\n<notes_bureau>\n[collez les notes du bureau]\n</notes_bureau>',
    materiau: {
      titre: 'Notice du financeur et notes du bureau (fictives)',
      texte:
        'EXTRAIT DE LA NOTICE DU FINANCEUR (fictive, à comparer à la vraie notice)\nLe dossier présente : 1. l’association et son ancrage local ; 2. le projet et son public (jeunes de 8 à 17 ans) ; 3. le calendrier ; 4. un budget équilibré ; 5. les résultats attendus et la façon de les mesurer.\nLe financeur ne finance pas plus de 50 % du budget total. Un bilan est demandé dans les trois mois qui suivent la fin du projet.\n\nNOTES DU BUREAU (réunion de mardi)\nProjet : « Pagayer à Rivière-Salée », initiation à la pirogue sur 10 samedis matin, du 7 mars à mi-mai\nPublic : jeunes du quartier, 8 à 15 ans (on verra pour les 16-17), 40 places prévues, 36 inscrits pour l’instant\nDeux éducateurs bénévoles diplômés + un aide, prêt du matériel par le club voisin\nL’association a 6 ans, 85 adhérents, base au bord de la baie\nBudget total : 1 850 000 XPF\nDemande au financeur : 900 000 XPF\nCommune : 400 000 XPF (demandée, réponse attendue)\nCotisations de l’association : 350 000 XPF\nParticipation des familles : 200 000 XPF\nRésultats attendus : que les jeunes sachent pagayer seuls, et en faire venir au moins 15 à la régate du club (chiffre à confirmer)\nRien décidé sur la façon de mesurer les résultats',
    },
    variantes: {
      simple: 'Se limiter au tableau de correspondance entre la notice et les notes.',
      poussee:
        'Faire rédiger deux versions du résumé du projet, l’une pour la commission, l’autre pour la page de l’association, puis préparer cinq questions que la commission pourrait poser.',
    },
    astuces: {
      claude:
        'Joignez la notice et les notes comme documents et demandez de citer les passages utilisés : vous pourrez vérifier chaque point.',
      chatgpt:
        'Ouvrez le dossier dans le canevas pour retoucher un paragraphe sans tout régénérer.',
      copilot:
        'Avec Copilot dans Word (selon la licence), rédigez le dossier section par section à partir de vos notes, et gardez les crochets visibles.',
    },
    vigilance:
      'La notice ci-dessus est fictive : les critères, plafonds et délais d’un vrai financeur se lisent sur sa notice officielle ou se demandent à son service. Ne collez aucune donnée personnelle de jeunes ou de familles.',
    formateur: {
      resultat:
        'Un tableau notice/notes qui repère les manques (mesure des résultats, 16-17 ans, réponse de la commune) et un dossier de 600 mots où le budget est juste (1 850 000 XPF au total, 900 000 XPF demandés, soit 48,6 %), avec les points à confirmer entre crochets.',
      criteres: [
        'Les cinq rubriques de la notice sont traitées dans le dossier.',
        'Aucun critère, chiffre ou résultat ne vient d’ailleurs que de la notice et des notes.',
        'Les écarts sont signalés : public de 8 à 15 ans dans les notes contre 8 à 17 ans dans la notice, 36 inscrits pour 40 places.',
        'Le budget est vérifié : 900 000 + 400 000 + 350 000 + 200 000 = 1 850 000 XPF.',
      ],
      pieges: [
        'Laisser l’IA inventer un indicateur de résultat ou un critère « développement durable » absent de la notice.',
        'Présenter la subvention de la commune comme acquise alors qu’elle est seulement demandée.',
        'Faire figurer 40 jeunes inscrits au lieu de 36 inscrits sur 40 places.',
      ],
      competence: 'diligence',
      technique: 'decomposer',
    },
    motsCles: ['subvention', 'dossier', 'financeur', 'jeunes', 'pirogue'],
  },
  {
    id: 'asso-planning-benevoles',
    titre: 'Organiser le planning des bénévoles d’une journée avec leurs contraintes',
    metier: 'associations',
    niveau: 'intermediaire',
    famille: 'organiser',
    duree: 30,
    outils: ['chatgpt', 'claude', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Le comité des fêtes de Dumbéa organise sa journée de la fête du quartier. Vous êtes coordinatrice et avez recueilli les disponibilités de huit bénévoles. Il faut cinq personnes à chaque créneau, et chacun a ses contraintes.',
    objectif:
      'Construire un planning avec l’IA à partir de contraintes, repérer les conflits que l’IA ne signale pas d’elle-même, et corriger en plusieurs échanges.',
    etapes: [
      'Donnez à l’IA les postes, les créneaux et les disponibilités du matériau, et demandez un tableau créneau par créneau.',
      'Comptez vous-même les bénévoles par créneau : chaque créneau est-il couvert par cinq personnes ?',
      'Vérifiez chaque contrainte personnelle (poste refusé, horaire, nombre de créneaux) et signalez à l’IA ce qui ne va pas.',
      'Demandez ce qui se passe si une personne tombe malade, et si la règle de la pause est respectée pour tout le monde.',
      'Demandez un message à envoyer à chaque bénévole avec son planning, puis notez les conflits à soumettre au bureau : l’IA ne tranche pas à votre place.',
    ],
    prompt:
      'Tu es coordinatrice bénévole d’un comité des fêtes à Dumbéa. Voici les créneaux, les postes et les disponibilités de huit bénévoles. Construis un planning sous forme de tableau : pour chaque créneau, le nom des bénévoles à chaque poste. Respecte toutes les contraintes. Si deux contraintes sont incompatibles, ou si un créneau ne peut pas être couvert, dis-le clairement au lieu de choisir à ma place, et propose deux solutions.\n\n<donnees>\n[collez les créneaux, les postes et les disponibilités]\n</donnees>',
    materiau: {
      titre: 'Créneaux, postes et disponibilités des bénévoles (fictifs)',
      texte:
        'CRÉNEAUX : A = 7 h à 10 h ; B = 10 h à 13 h ; C = 13 h à 17 h\nPOSTES à chaque créneau : accueil (2 personnes), buvette (2), parking (1)\nRÈGLES : personne ne travaille les trois créneaux sans pause ; chaque créneau doit compter 5 personnes\n\nBénévole;Créneau A;Créneau B;Créneau C;Contrainte\nHina;oui;oui;non;veut rester à l’accueil\nTeva;non;oui;oui;ne peut pas porter de charges\nManu;oui;oui;oui;responsable de la buvette, demande à y rester toute la journée\nAurélie;oui;non;non;doit partir à 10 h\nJoseph;non;non;oui;arrive à 13 h\nLéa;oui;oui;non;refuse la buvette\nKevin;non;oui;oui;aucune\nSophie;oui;oui;oui;au maximum 2 créneaux',
    },
    variantes: {
      simple: 'Planifier un seul créneau, le matin, avec cinq bénévoles.',
      poussee:
        'Demander le planning dans un fichier Excel, puis trois messages types (rappel la veille, confirmation, remerciements), et un plan B en cas d’absence de deux bénévoles.',
    },
    astuces: {
      chatgpt: 'Demandez le tableau final au format Excel pour le partager avec le bureau.',
      claude:
        'Demandez le planning sous forme de fichier Excel, avec un onglet par bénévole prêt à envoyer.',
      gemini:
        'Demandez un tableau, puis exportez-le dans Google Sheets pour que le bureau le complète.',
    },
    vigilance:
      'Ne collez que des prénoms et des disponibilités : pas de numéros de téléphone ni d’informations de santé. Une contrainte médicale reste au bénévole : « ne peut pas porter de charges » suffit.',
    formateur: {
      resultat:
        'Un planning qui montre que chaque créneau n’est couvert qu’avec exactement cinq personnes : A (Hina, Manu, Aurélie, Léa, Sophie), B (Hina, Teva, Manu, Léa, Kevin), C (Teva, Manu, Joseph, Kevin, Sophie) ; et le conflit signalé : Manu travaille les trois créneaux alors que la règle impose une pause, sans qu’aucun autre bénévole ne puisse le remplacer.',
      criteres: [
        'Chaque créneau compte cinq personnes, dont les noms ont été comptés par l’apprenant.',
        'Les contraintes personnelles sont respectées (Léa pas à la buvette, Aurélie partie à 10 h, Sophie limitée à deux créneaux).',
        'Le conflit de la pause de Manu est signalé et deux solutions sont proposées.',
        'L’absence d’une personne est étudiée : il n’y a aucune marge.',
      ],
      pieges: [
        'Accepter un planning qui place quelqu’un sur un créneau où il est indisponible.',
        'Laisser l’IA passer sous silence que la règle de la pause n’est pas respectée pour Manu.',
        'Croire qu’il y a de la marge : huit bénévoles pour cinq places à chaque créneau, c’est très serré.',
      ],
      competence: 'discernement',
      technique: 'iterer',
    },
    motsCles: ['bénévoles', 'planning', 'disponibilités', 'contraintes', 'fête de quartier'],
  },
  {
    id: 'asso-evolution-adhesions',
    titre: 'Analyser l’évolution des adhésions sur trois saisons',
    metier: 'associations',
    niveau: 'intermediaire',
    famille: 'analyser',
    duree: 30,
    outils: ['copilot', 'chatgpt', 'claude', 'gemini'],
    outilConseille: 'copilot',
    situation:
      'Le Club de natation de Dumbéa prépare son assemblée générale. Le trésorier veut présenter l’évolution des adhésions des trois dernières saisons, catégorie par catégorie, et savoir si la hausse de cotisation de cette saison a eu un effet.',
    objectif:
      'Faire calculer et interpréter des chiffres par l’IA, en vérifiant les calculs et en distinguant ce que les données montrent de ce qu’on ne peut pas affirmer.',
    etapes: [
      'Déposez ou collez le tableau des adhésions avec le prompt de départ.',
      'Vérifiez vous-même le total des adhérents d’une saison et le calcul d’une variation.',
      'Demandez l’évolution par catégorie, en nombre et en pourcentage, et la part de nouveaux inscrits dans chaque saison.',
      'Demandez les recettes de cotisations par saison, puis demandez à l’IA de distinguer ce que les chiffres prouvent des hypothèses.',
      'Rédigez vous-même, pour l’assemblée générale, trois messages à retenir : l’IA a fait les calculs, l’interprétation reste celle du bureau.',
    ],
    prompt:
      'Tu es analyste bénévole auprès d’un club de natation en Nouvelle-Calédonie. Voici le relevé des adhésions des trois dernières saisons (données fictives).\n\n1. Calcule le nombre total d’adhérents par saison et les recettes de cotisations (adhérents multipliés par la cotisation, catégorie par catégorie).\n2. Calcule l’évolution de chaque catégorie, en nombre et en pourcentage, d’une saison à la suivante.\n3. Estime la part de réinscrits : adhérents moins nouveaux, rapportés au total de la saison précédente. Précise que c’est une approximation.\n4. Dis ce que les chiffres montrent et ce qu’ils ne permettent pas d’affirmer (par exemple les raisons des départs).\nMontre tes calculs. Si une donnée te semble anormale, signale-la au lieu de la corriger.\n\n<adhesions>\n[collez le tableau ici]\n</adhesions>',
    materiau: {
      titre: 'Relevé des adhésions par saison (fictif)',
      texte:
        'Saison;Catégorie;Adhérents;Dont nouveaux;Cotisation annuelle (XPF)\n2023-2024;Éveil;38;30;18 000\n2023-2024;Jeunes;72;28;22 000\n2023-2024;Adultes loisir;41;15;26 000\n2023-2024;Compétition;24;6;30 000\n2024-2025;Éveil;45;36;18 000\n2024-2025;Jeunes;69;20;22 000\n2024-2025;Adultes loisir;47;21;26 000\n2024-2025;Compétition;22;3;30 000\n2025-2026;Éveil;52;41;20 000\n2025-2026;Jeunes;61;14;24 000\n2025-2026;Adultes loisir;38;9;28 000\n2025-2026;Compétition;21;4;32 000',
    },
    variantes: {
      simple:
        'Demander seulement le total des adhérents par saison et l’évolution de chaque catégorie.',
      poussee:
        'Demander un graphique par catégorie, puis une page de présentation pour l’assemblée générale, relue ligne à ligne.',
    },
    astuces: {
      copilot:
        'Mettez le relevé sous forme de tableau Excel avant de le confier à Copilot : il le lit beaucoup mieux.',
      chatgpt:
        'Déposez le fichier : ChatGPT fait les calculs, puis trace les graphiques demandés. Vérifiez un total à la main.',
      gemini:
        'Collez le tableau dans Google Sheets et utilisez « Demander à Gemini » pour ajouter une colonne de variation.',
    },
    vigilance:
      'Les chiffres montrent une évolution, pas ses causes : l’IA ne sait pas pourquoi les jeunes sont moins nombreux. N’y mettez que des totaux par catégorie, jamais la liste nominative des adhérents.',
    formateur: {
      resultat:
        'Totaux de 175, 183 et 172 adhérents ; recettes de cotisations de 4 054 000, 4 210 000 et 4 240 000 XPF ; catégorie Jeunes en baisse (72, 69, 61, soit environ moins 15 % en deux saisons) et Éveil en hausse (38, 45, 52) ; réinscrits d’environ 59 % puis 57 % ; aucune cause affirmée.',
      criteres: [
        'Les totaux (175, 183, 172) ont été vérifiés par l’apprenant.',
        'La baisse de la catégorie Jeunes est repérée, avec les bons pourcentages.',
        'Le taux de réinscrits est présenté comme une approximation.',
        'L’IA distingue les faits observés des hypothèses : la hausse de cotisation n’est pas présentée comme la cause d’une baisse.',
      ],
      pieges: [
        'Conclure que la hausse de la cotisation a fait fuir les jeunes : les données ne le montrent pas.',
        'Confondre pourcentage et points de pourcentage.',
        'Oublier que les recettes augmentent alors que le nombre d’adhérents baisse en 2025-2026.',
      ],
      competence: 'discernement',
      technique: 'critique',
    },
    motsCles: ['adhésions', 'saison', 'tableau', 'natation', 'cotisation'],
  },
  {
    id: 'asso-rapport-activite-notebook',
    titre: 'Préparer le rapport d’activité annuel avec un carnet Gemini Notebook',
    metier: 'associations',
    niveau: 'avance',
    famille: 'synthetiser',
    duree: 60,
    outils: ['notebook', 'claude', 'chatgpt', 'gemini'],
    outilConseille: 'notebook',
    situation:
      'L’association Mélodies du Nord, à Koné, a tenu cinq réunions de bureau cette année. Le président veut un rapport d’activité pour l’assemblée générale, mais personne n’a le temps de relire tous les comptes rendus. Vous êtes secrétaire et vous construisez le rapport à partir d’eux.',
    objectif:
      'Charger un ensemble de comptes rendus dans un carnet, en tirer une synthèse sourcée, et vérifier chaque chiffre et chaque contradiction avant de la présenter.',
    etapes: [
      'Créez un carnet dans Gemini Notebook et chargez chaque compte rendu comme une source distincte, avec la date dans son titre.',
      'Demandez un plan de rapport d’activité par thème (ateliers, concerts, finances, vie de l’association), puis validez-le ou corrigez-le.',
      'Faites rédiger chaque partie dans la discussion en demandant les citations ; ouvrez au moins cinq citations et vérifiez qu’elles disent bien ce qui est écrit.',
      'Demandez la liste des chiffres qui diffèrent d’un compte rendu à l’autre, sans trancher, et vérifiez-les avec le bureau.',
      'Générez un rapport ou une FAQ des questions que les adhérents pourraient poser à l’assemblée générale.',
      'Assemblez la version finale dans votre traitement de texte : les chiffres tranchés et les conclusions sont les vôtres.',
    ],
    prompt:
      'Tu es secrétaire d’une association culturelle de Koné. À partir des seules sources de ce carnet (les comptes rendus des réunions du bureau de l’année), rédige la partie « Les ateliers et les concerts de l’année » du rapport d’activité pour l’assemblée générale, en [250] mots environ.\n\nRègles :\n- N’utilise que les sources. Cite le compte rendu (date) pour chaque chiffre.\n- Si deux sources donnent des chiffres différents pour la même chose, présente les deux et signale la différence, sans choisir.\n- Si une information manque, écris « non précisé dans les sources ».\n- Ton neutre, phrases courtes, pour des adhérents.',
    materiau: {
      titre: 'Extraits des comptes rendus du bureau (fictifs, à charger comme cinq sources)',
      texte:
        'COMPTE RENDU DU 14 JANVIER\nBilan de l’année passée : 4 ateliers de chant, 12 inscrits en moyenne. Projet de concert de printemps à la salle polyvalente de Koné. Budget demandé à la commune : 250 000 XPF.\n\nCOMPTE RENDU DU 18 MARS\nConcert de printemps fixé au 25 avril. Répétitions les mercredis. Ateliers de chant : 14 inscrits. Commune : 250 000 XPF accordés.\n\nCOMPTE RENDU DU 17 JUIN\nConcert de printemps passé : environ 180 spectateurs, recettes de buvette 95 000 XPF. Atelier de guitare lancé en mai, 8 inscrits. Idée d’un spectacle de fin d’année avec les écoles.\n\nCOMPTE RENDU DU 16 SEPTEMBRE\nRentrée : 3 ateliers de chant (13 inscrits en moyenne) et l’atelier de guitare (9 inscrits). Spectacle de fin d’année fixé au 12 décembre. Départ du trésorier, remplacement à trouver. Le concert de printemps avait réuni 200 spectateurs selon le décompte final de la billetterie.\n\nCOMPTE RENDU DU 11 NOVEMBRE\nSpectacle du 12 décembre : 3 écoles participent. Budget prévisionnel : 480 000 XPF. Remplaçant du trésorier toujours cherché. Rapport d’activité à préparer pour l’assemblée générale de février.',
    },
    variantes: {
      simple:
        'Charger seulement les comptes rendus de janvier à juin et demander un résumé des ateliers.',
      poussee:
        'Ajouter les affiches et les bilans financiers comme sources, générer la carte mentale de l’année, puis préparer la présentation de l’assemblée générale en cinq diapositives.',
    },
    astuces: {
      notebook:
        'Chargez les documents, puis générez un rapport (synthèse ou FAQ) : chaque point renvoie à sa source.',
      claude:
        'Joignez les comptes rendus dans un Projet et demandez de citer le passage de chaque chiffre.',
      chatgpt:
        'Utilisez un Projet : vous gardez les comptes rendus et vos consignes pour les rapports des années suivantes.',
    },
    vigilance:
      'Les sources chargées ne doivent contenir aucune donnée nominative d’adhérents ni de mineurs. Le carnet répond à partir des comptes rendus : s’il n’y a pas de source, il ne sait pas, et le rapport officiel reste de la responsabilité du bureau.',
    formateur: {
      resultat:
        'Une partie de rapport fidèle aux sources, où chaque chiffre est cité avec la date du compte rendu, qui signale que le concert a réuni « environ 180 » puis « 200 » spectateurs selon deux comptes rendus, et qui note le trésorier à remplacer et le budget de 480 000 XPF du spectacle du 12 décembre.',
      criteres: [
        'Chaque chiffre est suivi de la source (date du compte rendu).',
        'La contradiction sur la fréquentation du concert (180 ou 200 spectateurs) est signalée sans être tranchée.',
        'Aucune information absente des sources n’apparaît dans le rapport.',
        'L’apprenant a ouvert plusieurs citations et vérifié qu’elles correspondent aux sources.',
      ],
      pieges: [
        'Retenir 200 spectateurs sans voir qu’un autre compte rendu dit environ 180.',
        'Confondre le nombre d’ateliers de chant de janvier (4) et de la rentrée (3).',
        'Charger des documents contenant des données personnelles d’adhérents dans le carnet.',
      ],
      competence: 'discernement',
      technique: 'sources',
    },
    motsCles: [
      'rapport d’activité',
      'comptes rendus',
      'Gemini Notebook',
      'assemblée générale',
      'synthèse',
    ],
  },
  {
    id: 'asso-assistant-adherents',
    titre: 'Créer un assistant qui répond aux questions des adhérents et renvoie au bureau',
    metier: 'associations',
    niveau: 'avance',
    famille: 'automatiser',
    duree: 60,
    outils: ['claude', 'chatgpt', 'gemini', 'copilot'],
    outilConseille: 'claude',
    situation:
      'Le Judo Club de Païta reçoit chaque semaine les mêmes questions : horaires des cours, tarifs, inscription, remboursements. La secrétaire bénévole y répond le soir. Elle veut un assistant qui prépare les réponses à partir de la fiche d’information du club et passe la main au bureau pour tout le reste.',
    objectif:
      'Créer un assistant avec des instructions permanentes et un document de référence, définir ses limites, et le tester sur des questions pièges.',
    etapes: [
      'Rédigez la fiche d’information du club à partir du matériau (sans données personnelles) : c’est le seul document de référence de l’assistant.',
      'Créez un Projet (Claude, ChatGPT), un Gem (Gemini) ou un agent (Copilot) et ajoutez la fiche.',
      'Rédigez les instructions avec le prompt de départ : rôle, ton, sources, et conduite à tenir quand la réponse n’est pas dans la fiche.',
      'Testez l’assistant avec les six questions du matériau et notez les réponses inventées ou trop sûres d’elles.',
      'Corrigez les instructions et refaites le test jusqu’à obtenir des réponses fiables, qui renvoient au bureau pour les questions sensibles.',
    ],
    prompt:
      'Tu es l’assistant d’accueil du Judo Club de Païta. Tu prépares des projets de réponse aux questions des adhérents et de leurs parents, qu’un membre du bureau relit avant envoi.\n\nRègles :\n- Réponds uniquement à partir de la fiche d’information fournie. Cite la rubrique utilisée.\n- Si la réponse n’est pas dans la fiche, dis-le clairement et écris : « Je transmets votre question au bureau, qui vous répondra. » N’invente jamais de tarif, d’horaire, de règle ni de délai.\n- Pour les questions de santé, de remboursement, de réclamation ou de situation personnelle, ne réponds pas sur le fond : renvoie au bureau.\n- Ne demande jamais de données personnelles.\n- Ton : courtois, clair, en vouvoiement, 120 mots au maximum. Termine par « Le bureau du Judo Club de Païta ».',
    materiau: {
      titre: 'Fiche d’information du club et questions de test (fictives)',
      texte:
        'FICHE D’INFORMATION (à placer dans l’assistant)\nCours : mardi et jeudi 17 h à 18 h (6-10 ans), mardi et jeudi 18 h à 19 h 30 (11 ans et plus), samedi 8 h à 9 h 30 (tous âges, loisir)\nLieu : dojo du complexe sportif de Païta\nCotisation de la saison : 20 000 XPF (jeunes), 26 000 XPF (adultes) ; deuxième enfant de la même famille : 15 000 XPF\nInscription : bulletin à remettre au dojo les soirs de cours avec la cotisation ; la licence de la fédération est gérée par le club\nContact du bureau : permanence le samedi de 9 h 30 à 10 h 30 au dojo\n\nQUESTIONS DE TEST\n1. À quelle heure est le cours des 9 ans le jeudi ?\n2. Combien coûte l’inscription pour deux enfants de 7 et 12 ans ?\n3. Mon fils a de l’asthme, est-ce qu’il peut faire du judo ?\n4. Je me suis blessée au cours de samedi, qui paie les soins ?\n5. Puis-je me faire rembourser si j’arrête en décembre ?\n6. Est-ce qu’il y a un cours le mercredi ?',
    },
    variantes: {
      simple:
        'Se contenter d’un prompt réutilisable enregistré dans un document, sans créer d’assistant.',
      poussee:
        'Ajouter trois exemples de bonnes réponses dans les instructions, puis faire tester l’assistant par un autre membre du bureau sur dix nouvelles questions.',
    },
    astuces: {
      claude:
        'Dans un Projet, déposez la fiche dans les connaissances du projet et collez les règles dans ses instructions.',
      chatgpt:
        'Un Projet suffit pour le bureau ; un GPT permet de le partager plus largement (création payante).',
      gemini: 'Créez un Gem, collez les règles dans ses instructions et ajoutez la fiche.',
      copilot:
        'Créez un agent avec vos instructions et la fiche de référence, à partager avec le bureau (selon la licence).',
    },
    vigilance:
      'N’ajoutez aucun document avec des données d’adhérents ou de mineurs. L’assistant prépare des projets de réponse relus par le bureau : il ne répond jamais seul sur la santé, les blessures ou les remboursements.',
    formateur: {
      resultat:
        'Un assistant qui répond juste aux questions couvertes par la fiche (questions 1 et 2 : cours de 17 h à 18 h pour les 9 ans, 35 000 XPF pour deux enfants) et renvoie au bureau pour les questions 3, 4 et 5, en disant que le mercredi ne figure pas dans la fiche (question 6).',
      criteres: [
        'Les instructions disent quoi faire quand l’information manque et pour les sujets sensibles.',
        'La question 2 est calculée correctement à partir de la fiche : 20 000 + 15 000 = 35 000 XPF.',
        'Les questions de santé, de blessure et de remboursement sont renvoyées au bureau.',
        'L’apprenant a repéré au moins une réponse à corriger et a modifié les instructions en conséquence.',
      ],
      pieges: [
        'Laisser l’assistant donner un avis sur l’asthme ou sur la prise en charge d’une blessure.',
        'Accepter une réponse plausible mais inventée (remboursement partiel, cours le mercredi).',
        'Charger dans le Projet une liste d’adhérents ou des certificats médicaux.',
      ],
      competence: 'delegation',
      technique: 'instructions',
    },
    motsCles: ['assistant', 'projet', 'adhérents', 'questions fréquentes', 'judo'],
  },
  {
    id: 'asso-veille-appels-projets',
    titre:
      'Mettre en place une veille sur les appels à projets et financements ouverts aux associations',
    metier: 'associations',
    niveau: 'avance',
    famille: 'veiller',
    duree: 45,
    outils: ['gemini', 'chatgpt', 'claude', 'notebook'],
    outilConseille: 'gemini',
    situation:
      'Vous êtes chargé de développement d’une association de protection de l’environnement basée à Lifou. Le bureau veut repérer chaque mois les appels à projets et financements auxquels l’association pourrait candidater, sans dépendre de la mémoire d’une seule personne.',
    objectif:
      'Concevoir une veille récurrente et sourcée sur les financements, et vérifier chaque information (dates, critères, montants) à la source avant d’en parler au bureau.',
    etapes: [
      'Complétez le profil de l’association, puis lancez une recherche approfondie avec le prompt de départ : Deep Research (Gemini), Recherche approfondie (ChatGPT) ou Recherche (Claude, payante).',
      'Ouvrez au moins cinq sources citées et vérifiez que date limite, public éligible et montant sont bien ceux du rapport. Notez ce qui n’est pas vérifiable.',
      'Demandez de remettre le résultat au format de la fiche de veille, avec le lien, la date et la date limite de chaque ligne.',
      'Programmez la relance mensuelle : « Programmer des actions » dans Gemini ou une tâche planifiée dans ChatGPT ou Claude (selon votre offre).',
      'Chargez les rapports successifs dans Gemini Notebook pour suivre les nouveautés d’un mois sur l’autre, citations à l’appui.',
    ],
    prompt:
      'Tu es chargé de veille pour une association de protection de l’environnement basée à Lifou (îles Loyauté, Nouvelle-Calédonie). Recherche les appels à projets, concours et financements ouverts ou annoncés pour des associations comme la nôtre, en te limitant aux provinces, aux communes, au gouvernement, aux organismes publics et aux fondations connues.\n\nPour chaque ligne : intitulé, organisme, public éligible, thème, date limite, montant ou fourchette s’ils sont publics, lien et date de la source. Indique si l’information vient d’une seule source.\nN’invente aucun dispositif, aucune date ni aucun montant : si tu ne trouves rien de fiable, dis-le. Ne résume aucune condition de recevabilité : renvoie vers la notice officielle.\n\nProfil de l’association :\n<profil>\n[décrivez l’association : activités, public, année de création, besoins]\n</profil>\n\nPrésente le résultat selon ce modèle :\n<modele>\n[collez le modèle de fiche de veille]\n</modele>',
    materiau: {
      titre: 'Modèle de fiche de veille mensuelle',
      texte:
        'VEILLE FINANCEMENTS : [mois]\n\n1. Appels à projets ouverts\nIntitulé;Organisme;Thème;Public éligible;Date limite;Montant ou fourchette;Lien et date de la source;Source unique (oui/non)\n\n2. Nouveautés depuis le mois dernier (3 lignes au maximum)\n\n3. Échéances dans les 30 prochains jours\n\n4. À vérifier avant d’en parler au bureau\n\n5. Deux candidatures à étudier, avec ce qu’elles demanderaient à l’association',
    },
    variantes: {
      simple:
        'Faire une seule recherche web sur les financements ouverts aux associations de protection de l’environnement, sans planification.',
      poussee:
        'Partager le carnet Gemini Notebook avec le bureau et y générer chaque mois une FAQ « financements en cours » avec les échéances.',
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
      'Une IA peut inventer un appel à projets ou une date limite plausibles, ou confondre un dispositif de métropole avec un dispositif calédonien. Les conditions de recevabilité se lisent uniquement sur la notice officielle de l’organisme.',
    formateur: {
      resultat:
        'Une fiche de veille au format demandé, où chaque appel à projets a une source datée et ouverte avec sa date limite, une rubrique « à vérifier » honnête, et une relance mensuelle programmée ou un carnet prêt à être alimenté.',
      criteres: [
        'Chaque ligne a une source datée, ouverte par l’apprenant.',
        'Les dates limites ont été vérifiées sur la source officielle.',
        'Aucune condition de recevabilité n’est affirmée sans renvoi à la notice officielle.',
        'La relance mensuelle est configurée ou décrite précisément.',
      ],
      pieges: [
        'Présenter un appel à projets clos ou d’une édition passée comme ouvert.',
        'Confondre un dispositif de métropole ou d’un autre pays avec un financement ouvert en Nouvelle-Calédonie.',
        'Faire confiance à un montant ou à une date limite jamais retrouvés sur la source.',
      ],
      competence: 'discernement',
      technique: 'sources',
    },
    motsCles: ['veille', 'appels à projets', 'financements', 'Deep Research', 'environnement'],
  },
  {
    id: 'asso-dossier-partenariat-mecene',
    titre: 'Préparer le dossier de partenariat à présenter à une entreprise mécène',
    metier: 'associations',
    niveau: 'avance',
    famille: 'rediger',
    duree: 60,
    outils: ['claude', 'chatgpt', 'canva', 'copilot'],
    outilConseille: 'claude',
    situation:
      'Le festival Rythmes d’Ouvéa cherche des entreprises partenaires pour sa prochaine édition. Un rendez-vous est prévu dans trois semaines avec la direction d’une entreprise locale de transport maritime. Vous préparez un dossier de partenariat de quatre pages.',
    objectif:
      'Enchaîner analyse du partenaire, plan, rédaction et relecture critique d’un dossier de partenariat, en gardant à la main ce qui engage l’association : montants, contreparties, aspects fiscaux.',
    etapes: [
      'Donnez à l’IA la fiche du festival et le profil de l’entreprise, et demandez d’abord ce que l’entreprise peut chercher dans un partenariat (visibilité, image locale, salariés), sans rédiger.',
      'Demandez un plan de dossier en quatre pages : le festival, son public, la proposition de partenariat par palier, la suite du rendez-vous.',
      'Faites rédiger chaque page séparément. Gardez entre crochets les montants à décider et les mentions fiscales.',
      'Faites relire le dossier par l’IA : affirmations non vérifiables, promesses excessives, chiffres qui diffèrent de la fiche.',
      'Dans Canva, mettez en page la couverture et les paliers de partenariat (Kit de marque si disponible).',
      'Faites valider par le bureau les contreparties et les montants : aucun engagement ne part sans accord.',
    ],
    prompt:
      'Tu es chargé de développement d’une association culturelle de Ouvéa. Nous allons préparer un dossier de partenariat en plusieurs étapes. Pour l’instant, fais uniquement l’étape 1.\n\nÉtape 1 : à partir de la fiche du festival et du profil de l’entreprise ci-dessous, indique ce qu’une entreprise de ce type peut chercher dans un partenariat avec un festival, et les trois arguments les plus pertinents à lui présenter. Précise ce que tu déduis et ce que tu ne sais pas.\n\nPour toute la suite : n’invente aucun chiffre de fréquentation, aucun montant, aucune contrepartie et aucune règle fiscale ; mets entre crochets ce qui reste à décider ou à vérifier auprès d’un professionnel.\n\n<fiche_festival>\n[collez la fiche du festival]\n</fiche_festival>\n\n<profil_entreprise>\n[collez le profil de l’entreprise]\n</profil_entreprise>',
    materiau: {
      titre: 'Fiche du festival et profil de l’entreprise (fictifs)',
      texte:
        'FICHE DU FESTIVAL\nRythmes d’Ouvéa, 5e édition, trois jours en octobre, plage de Mouli\nProgramme : concerts de groupes des îles Loyauté et de Nouméa, ateliers de danse et de chant, marché d’artisans\nFréquentation de la dernière édition : environ 1 200 entrées sur trois jours (comptage des bénévoles)\nPublic : familles de l’île, visiteurs venus de Nouméa et de Lifou\nBudget de la prochaine édition : 3 200 000 XPF, dont 1 000 000 XPF à trouver auprès d’entreprises partenaires\nRéseaux sociaux : 2 400 abonnés sur la page du festival\nLogos visibles : scène, programme imprimé, page du festival\n\nPROFIL DE L’ENTREPRISE\nCompagnie Loyauté Mer, transport maritime de passagers et de fret entre Nouméa et les îles Loyauté\nDirigeant : M. D. (rendez-vous prévu dans trois semaines)\nEngagements connus : a déjà soutenu un club de va’a à Lifou (montant inconnu)\nClientèle : familles et voyageurs des îles',
    },
    variantes: {
      simple: 'Rédiger seulement une page de présentation du festival et de son public.',
      poussee:
        'Demander trois paliers de partenariat (bronze, argent, or) avec leurs contreparties à discuter, puis un e-mail de demande de rendez-vous et un plan de dix minutes pour la présentation orale.',
    },
    astuces: {
      claude:
        'Demandez le dossier dans un artefact : vous pouvez retoucher une page à la fois et exporter ensuite en document.',
      chatgpt:
        'Ouvrez chaque page dans le canevas pour retoucher un paragraphe sans tout régénérer.',
      canva:
        'Avec un kit de marque (Pro), appliquez couleurs, polices et logo de l’association à la couverture en un clic.',
    },
    vigilance:
      'Les montants, les contreparties et les aspects fiscaux d’un mécénat engagent l’association : ils se vérifient auprès de l’administration compétente ou d’un professionnel, jamais dans une réponse d’IA. Ne présentez pas de chiffres de fréquentation différents de ceux de la fiche.',
    formateur: {
      resultat:
        'Un dossier de quatre pages cohérent avec la fiche (1 200 entrées environ, 1 000 000 XPF cherchés sur un budget de 3 200 000 XPF, soit environ 31 %), avec les paliers et les mentions fiscales laissés entre crochets, une page de couverture Canva et une liste de points à faire valider par le bureau.',
      criteres: [
        'Aucun chiffre ni aucune contrepartie ne vient d’ailleurs que de la fiche.',
        'Les montants et la fiscalité sont entre crochets, à valider.',
        'L’étape d’analyse a été faite avant la rédaction.',
        'La relecture critique a relevé au moins une affirmation à vérifier.',
      ],
      pieges: [
        'Laisser l’IA annoncer une déduction fiscale précise pour l’entreprise.',
        'Présenter 1 200 entrées comme 1 200 personnes différentes : c’est un comptage d’entrées sur trois jours.',
        'Présenter comme acquis un montant de l’entreprise partenaire, que personne n’a confirmé.',
      ],
      competence: 'diligence',
      technique: 'decomposer',
    },
    motsCles: ['mécénat', 'partenariat', 'dossier', 'festival', 'entreprise'],
  },
];
