/**
 * Direction d’entreprise : pilotage, finances, décisions, relations avec la banque, l’expert-comptable et les partenaires.
 * Toutes les personnes, entreprises, adresses et sommes sont fictives.
 */

export const vocabulaire = {
  structure: { g: 'f', s: 'PME', p: 'PME' },
  client: { g: 'm', s: 'client', p: 'clients' },
  partenaire: { g: 'm', s: 'expert-comptable', p: 'experts-comptables' },
  documentCourant: { g: 'f', s: 'note de service', p: 'notes de service' },
  documentLong: { g: 'm', s: 'plan stratégique', p: 'plans stratégiques' },
  reunion: { g: 'm', s: 'comité de direction', p: 'comités de direction' },
  offre: {
    g: 'f',
    s: 'ouverture de la nouvelle agence de l’entreprise à Koné',
    p: 'ouvertures des nouvelles agences de l’entreprise à Koné',
  },
  poste: {
    g: 'm',
    s: 'responsable administratif et financier',
    p: 'responsables administratifs et financiers',
  },
  evenement: {
    g: 'f',
    s: 'soirée annuelle des clients et partenaires',
    p: 'soirées annuelles des clients et partenaires',
  },
  visuel: {
    g: 'f',
    s: 'affiche de présentation',
    p: 'affiches de présentation',
  },
  domaine: 'la direction d’une PME',
  motifReclamation: 'un retard de livraison et une facture jugée trop élevée',
  donnees: 'le compte de résultat mensuel de l’entreprise sur douze mois',
  colonnes:
    'Mois;Chiffre d’affaires (XPF);Achats consommés (XPF);Charges de personnel (XPF);Autres charges (XPF);Résultat (XPF);Trésorerie en fin de mois (XPF)',
  indicateur: 'la marge brute mensuelle',
  veille:
    'la conjoncture économique calédonienne, le financement des entreprises et les aides aux PME',
  sourcesVeille:
    'les sites de l’ISEE, de l’IEOM, des provinces et de la CCI, ainsi que la presse économique locale',
  jargon: 'les conditions générales de vente, l’acompte et les pénalités de retard de paiement',
  procedure: 'la validation des dépenses et des investissements',
  situationTendue: 'un client important qui exige une remise de 10 % pour renouveler son contrat',
  donneesSensibles:
    'les salaires, les résultats financiers, les contrats et les encours bancaires de l’entreprise',
  corpus: 'les contrats, les procédures internes et les notes de service de l’entreprise',
  publicCible: 'les clients et les entreprises de la province Nord',
  etranger: 'un investisseur australien qui visite l’entreprise à Nouméa',
  themeFormation: 'la lecture d’un compte de résultat et d’un plan de trésorerie',
  tacheRepetitive: 'la préparation du point hebdomadaire de trésorerie',
  planning: 'l’agenda de la semaine d’un dirigeant, entre rendez-vous, déplacements et comités',
  comparaison: 'deux offres de financement pour un véhicule utilitaire',
};

export const exercices = [
  {
    id: 'dir-compte-resultat-expert-comptable',
    titre:
      'Lire un compte de résultat sur deux exercices et préparer ses questions à l’expert-comptable',
    metier: 'direction',
    niveau: 'debutant',
    famille: 'analyser',
    duree: 20,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'copilot',
    situation:
      'Vous dirigez une quincaillerie de Bourail. L’expert-comptable vient de vous remettre le compte de résultat simplifié de 2026, à comparer à celui de 2025. Le chiffre d’affaires monte, mais vous avez l’impression qu’il reste moins d’argent en fin d’année. Rendez-vous demain à 14 h.',
    objectif:
      'Faire expliquer un compte de résultat sans jargon, repérer les écarts qui comptent et préparer des questions précises, en vérifiant soi-même les calculs.',
    etapes: [
      'Lisez le tableau du matériau et notez, sans l’IA, les deux lignes qui vous surprennent le plus.',
      'Collez le tableau dans votre outil d’IA avec le prompt de départ.',
      'Vérifiez à la calculatrice deux variations en pourcentage et le calcul du résultat net de 2026.',
      'Comparez les lignes repérées par l’IA avec les deux vôtres, et demandez-lui pourquoi elle en retient d’autres.',
      'Gardez cinq questions que vous poserez demain, en les reformulant avec vos mots.',
    ],
    prompt:
      'Tu es un conseiller de gestion qui explique les chiffres à un dirigeant de PME qui n’est pas comptable. Voici le compte de résultat simplifié de ma quincaillerie de Bourail pour 2025 et 2026 (séparateur : point-virgule, montants en XPF).\n\n<compte_resultat>\n[collez le tableau ici]\n</compte_resultat>\n\n1. Calcule pour chaque ligne la variation en XPF et en pourcentage, et montre ton calcul.\n2. Calcule la marge brute (chiffre d’affaires moins achats) et son taux pour chaque année.\n3. Vérifie le résultat net indiqué : refais l’addition des charges et signale tout écart, sans le corriger.\n4. Explique en cinq lignes ce que racontent ces chiffres, en langage simple.\n5. Propose cinq questions à poser à mon expert-comptable, de la plus importante à la moins importante. Si une question dépend d’une information que tu n’as pas, dis-le au lieu de supposer.',
    materiau: {
      titre: 'Compte de résultat simplifié, Quincaillerie du Centre (Bourail)',
      texte:
        'Ligne;2025 (XPF);2026 (XPF)\nChiffre d’affaires;182400000;196800000\nAchats de marchandises consommés;104300000;116900000\nCharges de personnel;38600000;44200000\nLoyers et charges locatives;9600000;9600000\nAssurances;2100000;3400000\nHonoraires (comptable, juridique);2800000;2900000\nTransport et déplacements;3900000;5100000\nEntretien et réparations;1800000;4700000\nDotations aux amortissements;4200000;4900000\nCharges financières (intérêts);1300000;2100000\nImpôts et taxes;3000000;3200000\nRésultat net;10800000;-200000',
    },
    variantes: {
      simple: 'Demander seulement l’explication en cinq lignes, sans les questions.',
      poussee:
        'Faire ajouter un graphique des écarts par ligne, puis une version de l’explication pour le conseil d’administration d’une entreprise familiale.',
    },
    astuces: {
      copilot:
        'Mettez le tableau en forme de tableau Excel avant de demander à Copilot dans Excel (selon la licence) de calculer les variations : il lit beaucoup mieux les données structurées.',
      chatgpt:
        'Avec l’analyse de données, joignez le fichier : ChatGPT montre ses calculs, contrôlez-en un à la main.',
      claude:
        'Déposez le fichier CSV : Claude calcule les variations, peut tracer un graphique et rendre un fichier Excel.',
    },
    vigilance:
      'Les comptes de votre entreprise sont confidentiels : pour vous entraîner, utilisez un compte professionnel ou des chiffres arrondis et anonymisés. Une IA n’est pas votre expert-comptable : elle prépare vos questions, elle ne les remplace pas.',
    formateur: {
      resultat:
        'Une lecture claire qui relève un chiffre d’affaires en hausse mais une marge qui s’érode et un résultat net passé de +10,8 millions à -0,2 million de XPF, puis cinq questions utiles à poser.',
      criteres: [
        'Variations vérifiées : chiffre d’affaires +7,9 %, achats +12,1 %, charges de personnel +14,5 %, entretien et réparations +161 %.',
        'Marge brute calculée : 78,1 millions (42,8 %) en 2025 contre 79,9 millions (40,6 %) en 2026.',
        'L’apprenant a refait l’addition des charges et constaté que le résultat de 2026 est bien de -0,2 million.',
        'Les questions portent sur les causes (entretien, assurances, intérêts, personnel), pas sur des définitions.',
      ],
      pieges: [
        'Croire que l’entreprise va bien parce que le chiffre d’affaires monte.',
        'Accepter un pourcentage sans voir le calcul, ou calculé sur la mauvaise année de référence.',
        'Laisser l’IA expliquer la cause d’une hausse alors qu’elle n’a aucune information sur l’entreprise : c’est une question à poser.',
      ],
      competence: 'discernement',
      technique: 'decomposer',
    },
    motsCles: ['compte de résultat', 'expert-comptable', 'marge', 'variations', 'XPF'],
  },
  {
    id: 'dir-rapport-mensuel-decisions',
    titre: 'Résumer le rapport mensuel d’activité en une page de décisions à prendre',
    metier: 'direction',
    niveau: 'debutant',
    famille: 'synthetiser',
    duree: 20,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Vous dirigez une entreprise de transport de Païta. Votre responsable d’exploitation vous envoie son rapport mensuel : quatre pages de notes dans le désordre. Vous voulez savoir en cinq minutes ce que vous devez trancher cette semaine.',
    objectif:
      'Transformer un rapport brut en une page qui sépare les faits, les risques et les décisions, sans que l’IA en prenne une à votre place.',
    etapes: [
      'Parcourez le rapport du matériau et notez, de tête, ce qui vous semble le plus urgent.',
      'Collez-le dans votre outil d’IA avec le prompt de départ.',
      'Vérifiez chaque chiffre de la page obtenue en le retrouvant dans le rapport.',
      'Contrôlez que les décisions proposées ont bien des options et une échéance, et qu’aucune n’est déjà tranchée par l’IA.',
      'Demandez les trois questions à poser à votre responsable avant de décider.',
    ],
    prompt:
      'Tu es l’assistant d’un dirigeant de PME de transport à Païta. Voici le rapport mensuel de mon responsable d’exploitation, écrit en vrac. Prépare-moi une page en quatre parties :\n1. les cinq faits qui comptent (avec le chiffre exact) ;\n2. les risques, classés du plus au moins grave ;\n3. les décisions que je dois prendre : pour chacune, la question posée, les options mentionnées dans le rapport et la date limite si elle apparaît ;\n4. les informations qui manquent pour décider.\nN’utilise que le rapport. Ne recommande pas d’option : je décide. Ignore ce qui n’a pas d’impact sur l’activité.\n\n<rapport>\n[collez le rapport ici]\n</rapport>',
    materiau: {
      titre: 'Rapport d’activité de septembre, Transports Païta Express (notes brutes)',
      texte:
        'CA septembre : 41,2 M XPF pour 38 M prévus. Bonne rotation sur le trajet Païta-Nouméa, 3 chauffeurs en heures supp.\nCamion n° 4 en panne depuis le 8, immobilisé 9 jours. Garage propose réparation pour 1 850 000 XPF ; ou location d’un camion de remplacement 420 000 XPF par mois en attendant. Le camion a 11 ans. À trancher vite.\nClient Sud Métal : facture de 6,4 M XPF impayée, 75 jours de retard. Je les ai relancés deux fois, pas de réponse du service compta. C’est notre plus gros client (environ un quart du CA).\n2 chauffeurs ont donné leur préavis (Paul et Tevita), départs fin octobre. Une candidature reçue pour l’instant.\nGazole : +6 % sur le mois, impact estimé 900 000 XPF.\nAppel d’offres transport scolaire commune de Dumbéa : dossier à rendre le 30/10, je pense qu’on peut le faire mais il faut quelqu’un pour monter le dossier.\nPot de l’équipe réussi, merci à tous.\nAssurance flotte : renouvellement en décembre, pas encore de devis.\nUn accrochage sans gravité sur le parking de Ducos, constat fait.',
    },
    variantes: {
      simple: 'Demander seulement la liste des décisions, avec leur date limite.',
      poussee:
        'Faire produire en plus un tableau de suivi des décisions (qui, quoi, quand), à reprendre chaque mois, et un message de trois lignes pour répondre au responsable d’exploitation.',
    },
    astuces: {
      claude:
        'Joignez le rapport et demandez de citer pour chaque fait la phrase du rapport utilisée : vous vérifiez en un coup d’œil.',
      copilot:
        'Dans Copilot Chat, joignez le fichier du rapport, puis transformez la page en Copilot Page pour la partager avec votre responsable.',
      chatgpt:
        'Précisez la longueur et le public du résumé (« une page, pour le dirigeant ») avant de lancer la demande.',
    },
    vigilance:
      'Un rapport d’activité contient des noms de clients et de salariés, des montants et des difficultés de trésorerie : retirez les noms des personnes avant de coller.',
    formateur: {
      resultat:
        'Une page claire avec quatre décisions (camion n° 4, créance de Sud Métal, remplacement des chauffeurs, réponse à l’appel d’offres), des options reprises du rapport et des informations manquantes listées.',
      criteres: [
        'Les chiffres sont ceux du rapport (41,2 millions, 1 850 000 XPF, 420 000 XPF, 6,4 millions, 75 jours).',
        'Chaque décision a sa question, ses options et son échéance quand elle existe.',
        'Aucune décision n’est tranchée par l’IA, et le pot de l’équipe est écarté.',
        'Les informations manquantes sont listées (par exemple la valeur du camion, le délai de paiement habituel de Sud Métal).',
      ],
      pieges: [
        'Accepter une recommandation d’achat ou de réparation fondée sur rien d’autre que le rapport.',
        'Oublier que Sud Métal pèse environ un quart du chiffre d’affaires, ce qui change la gravité de l’impayé.',
        'Une date limite inventée pour l’assurance ou le recrutement.',
      ],
      competence: 'delegation',
      technique: 'structurer',
    },
    motsCles: ['rapport mensuel', 'décisions', 'synthèse', 'pilotage', 'transport'],
  },
  {
    id: 'dir-rendez-vous-banque',
    titre: 'Préparer un rendez-vous avec sa banque à partir de ses notes',
    metier: 'direction',
    niveau: 'debutant',
    famille: 'organiser',
    duree: 20,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'copilot',
    situation:
      'Vous dirigez un hôtel-restaurant de Koné. Votre ligne de trésorerie arrive à échéance fin janvier et vous voulez financer une terrasse couverte. Votre conseillère bancaire vous reçoit jeudi. Vous avez vos notes, mais pas de plan pour mener l’entretien.',
    objectif:
      'Préparer un entretien bancaire : un ordre du jour, des arguments chiffrés, les questions que la banque posera et les documents à apporter.',
    etapes: [
      'Relisez vos notes du matériau et ajoutez ce que vous savez et que l’IA ignore (relation avec la banque, historique).',
      'Collez-les dans votre outil d’IA avec le prompt de départ.',
      'Vérifiez que les chiffres du plan sont exactement ceux de vos notes.',
      'Faites-vous poser les questions de la banque à tour de rôle et répondez à voix haute à deux d’entre elles.',
      'Gardez une fiche d’une page à emporter : objectifs, chiffres clés, documents, questions.',
    ],
    prompt:
      'Tu es un conseiller qui aide un dirigeant de PME à préparer un rendez-vous avec sa banque. Voici mes notes en vrac. Prépare :\n1. un déroulé du rendez-vous de 45 minutes avec ce que je dois dire à chaque moment ;\n2. mes trois arguments les plus solides, avec les chiffres de mes notes ;\n3. les huit questions que la banque me posera probablement, avec un point d’appui dans mes notes pour répondre ;\n4. la liste des documents à apporter ;\n5. ce que je dois demander ou négocier, et ce que je dois me garder d’accepter sans réfléchir.\nN’invente aucun chiffre ni aucune condition de prêt : écris [à vérifier avec la banque] quand une information manque.\n\n<notes>\n[collez vos notes ici]\n</notes>',
    materiau: {
      titre: 'Notes en vrac, rendez-vous banque de jeudi (Hôtel Les Cocotiers, Koné)',
      texte:
        'ligne de trésorerie 15 M XPF, échéance 31/01, renouveler ; utilisée surtout en saison basse, jusqu’à 11 M\nprojet : terrasse couverte pour le restaurant, devis 8,5 M XPF (entreprise de Pouembout), travaux 6 semaines hors saison\napport perso possible : 2 M XPF\nemprunt rénovation chambres : reste 28 M à rembourser, mensualité 410 000 XPF\nCA 2025 : 96 M XPF ; 2026 : 104 M environ ; taux d’occupation 61 % puis 66 %\nrestaurant : 38 couverts, ouvert midi et soir sauf le lundi ; la terrasse ajouterait environ 24 couverts les soirs de beau temps\nconseillère : Mme Pidjo, rendez-vous jeudi 10 h, agence de Koné\nont changé nos conditions de frais de tenue de compte l’an dernier, je trouve ça cher\nje n’ai pas encore le prévisionnel de l’année prochaine, voir avec le cabinet comptable\nrisque : cyclone, assurance à revoir ?',
    },
    variantes: {
      simple: 'Demander seulement la liste des questions de la banque et les documents à apporter.',
      poussee:
        'Faire jouer à l’IA le rôle de la conseillère pour un entretien d’entraînement en cinq questions, puis demander un retour sur vos réponses.',
    },
    astuces: {
      copilot:
        'Transformez le plan en Copilot Page : votre responsable administratif ou votre comptable peut y ajouter les chiffres manquants.',
      claude:
        'Demandez la fiche à emporter sous forme de fichier Word grâce à la création de fichiers : elle est prête à imprimer.',
      gemini: 'Collez le plan dans Canvas pour retoucher la fiche d’une page sans tout régénérer.',
    },
    vigilance:
      'Ne collez pas de numéro de compte ni d’informations personnelles sur votre patrimoine. L’IA ne connaît ni les conditions de votre banque ni les règles de financement : seule votre conseillère peut les confirmer.',
    formateur: {
      resultat:
        'Une fiche avec un déroulé en 45 minutes, trois arguments chiffrés tirés des notes, huit questions probables et une liste de documents, où les conditions de prêt restent « à vérifier avec la banque ».',
      criteres: [
        'Les chiffres sont ceux des notes (15 M, 8,5 M, 2 M, 28 M, 104 M, 66 %).',
        'Aucun taux, durée de prêt ou frais n’est inventé.',
        'Le prévisionnel manquant figure dans les documents à obtenir avant jeudi.',
        'L’apprenant s’est exercé à répondre à deux questions de la banque.',
      ],
      pieges: [
        'Accepter une durée d’emprunt ou un taux annoncé comme « courant » par l’IA.',
        'Présenter l’apport personnel de 2 millions comme acquis alors qu’il est « possible ».',
        'Oublier de parler du cyclone et de l’assurance alors que la banque y sera sensible.',
      ],
      competence: 'description',
      technique: 'contexte',
    },
    motsCles: ['banque', 'financement', 'trésorerie', 'rendez-vous', 'hôtellerie'],
  },
  {
    id: 'dir-message-annuel-equipes',
    titre: 'Rédiger le message annuel de la direction aux équipes',
    metier: 'direction',
    niveau: 'debutant',
    famille: 'rediger',
    duree: 15,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Vous dirigez une entreprise de travaux publics de Dumbéa, 34 salariés. Comme chaque fin d’année, vous écrivez un message à toute l’équipe : bilan, remerciements, perspectives. L’an dernier, il sonnait comme un communiqué. Cette année, vous voulez qu’il sonne juste.',
    objectif:
      'Obtenir un message sincère et concret à partir de faits réels, en évitant les formules creuses et les promesses que vous ne pourriez pas tenir.',
    etapes: [
      'Relisez vos notes du matériau et soulignez les trois faits dont vous êtes le plus fier.',
      'Collez-les dans votre outil d’IA avec le prompt de départ, en précisant le ton que vous voulez.',
      'Supprimez toute formule creuse (« dans un contexte exigeant », « plus que jamais »).',
      'Vérifiez qu’aucun chiffre, aucune promesse et aucun prénom ne figure sans venir de vos notes.',
      'Lisez le message à voix haute : réécrivez ce que vous ne diriez pas en face de vos équipes.',
    ],
    prompt:
      'Tu es un dirigeant de PME de travaux publics en Nouvelle-Calédonie qui écrit à ses 34 salariés pour la fin de l’année. Rédige un message de 250 mots au maximum, à la première personne, chaleureux et direct, sans formules creuses ni jargon. Structure : un bilan honnête (ce qui a marché, ce qui a été difficile), un remerciement précis à l’équipe, trois priorités pour l’année prochaine, une phrase de clôture simple.\nN’utilise que les éléments de mes notes. N’ajoute aucun chiffre, aucune prime, aucune promesse d’emploi ou d’investissement : si une information manque, laisse un [crochet].\n\n<notes>\n[collez vos notes ici]\n</notes>',
    materiau: {
      titre: 'Notes de la direction pour le message de fin d’année',
      texte:
        'ce qui a marché : école de Dumbéa livrée à la date prévue ; 2 apprentis embauchés en CDI ; nouveau hangar de stockage terminé en septembre\ndifficile : chantier du lotissement de Koutio en retard de 5 semaines à cause des pluies de mars ; 2 accidents légers sur chantier, aucun arrêt long\nremerciements : les équipes de chantier qui ont rattrapé le retard le samedi (volontaires), le bureau d’études pour le dossier de la mairie, Marie-Jo à la comptabilité pour son aide au déménagement\npriorités 2027 : renouveler deux engins vieillissants, mieux préparer les chantiers en saison des pluies, plus de formation sécurité\npas de promesse sur les primes : on verra après le bilan\nfermeture de l’entreprise du 24 décembre au 4 janvier',
    },
    variantes: {
      simple: 'Demander seulement trois versions de la première phrase, dans des tons différents.',
      poussee:
        'Faire adapter le message en version courte pour un affichage au dépôt et en version écrite pour un e-mail, puis lire les trois versions à voix haute pour garder la même voix.',
    },
    astuces: {
      chatgpt:
        'Ouvrez le message dans le canevas : vous pouvez demander de changer le ton ou de raccourcir un seul paragraphe.',
      copilot:
        'Dans Outlook, partez d’un « Brouillon avec Copilot » avec vos notes, puis lancez « Coaching par Copilot » avant l’envoi.',
      gemini:
        'Dans Gmail, « Aide-moi à écrire » reformule votre texte : demandez « plus direct » si le ton reste administratif.',
    },
    vigilance:
      'Pas de nom de salarié sans son accord, pas de promesse de prime ni d’emploi dans un message que l’IA a aidé à écrire : vous êtes seul responsable de ce que la direction annonce.',
    formateur: {
      resultat:
        'Un message de 250 mots au plus, personnel, qui nomme les réussites et les difficultés (retard de Koutio), remercie précisément et annonce les trois priorités, sans prime ni chiffre inventé.',
      criteres: [
        'Chaque fait du message se retrouve dans les notes.',
        'Aucune promesse sur les primes, l’emploi ou les investissements.',
        'Le retard du chantier est reconnu, pas masqué.',
        'Les dates de fermeture sont exactes et le message ne contient pas de formule creuse.',
      ],
      pieges: [
        'Laisser l’IA ajouter « une prime exceptionnelle en perspective » pour faire chaleureux.',
        'Un bilan uniquement positif qui ne dit rien des accidents ni du retard.',
        'Un ton de communiqué que personne n’attribuerait au dirigeant.',
      ],
      competence: 'description',
      technique: 'contexte',
    },
    motsCles: ['message', 'vœux', 'équipes', 'bilan', 'communication interne'],
  },
  {
    id: 'dir-previsionnel-tresorerie-scenarios',
    titre: 'Bâtir un prévisionnel de trésorerie sur six mois et tester trois scénarios',
    metier: 'direction',
    niveau: 'intermediaire',
    famille: 'analyser',
    duree: 45,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'copilot',
    situation:
      'Vous dirigez une société d’excursions en bateau dans le lagon, à Nouméa. L’activité baisse de janvier à mars et une révision moteur importante tombe en février. Avant de vous engager sur une nouvelle sortie, vous voulez savoir si la trésorerie tiendra, et dans quels cas elle casserait.',
    objectif:
      'Construire en plusieurs échanges un plan de trésorerie sur six mois, le vérifier ligne par ligne, puis tester des scénarios pour décider en connaissance de cause.',
    etapes: [
      'Collez le tableau du matériau et envoyez le prompt de départ : l’IA ne calcule d’abord que le scénario de référence.',
      'Vérifiez à la main le solde de fin de novembre et celui de fin février.',
      'Demandez ensuite le scénario où les encaissements de janvier à mars baissent de 15 %, puis celui où l’investissement de février est reporté à avril.',
      'Faites comparer les trois scénarios dans un tableau : solde le plus bas, mois concerné, nombre de mois avec un solde négatif.',
      'Demandez ce que vous pourriez décider si le solde devenait négatif, sans retenir l’une des pistes avant de l’avoir discutée avec votre expert-comptable.',
    ],
    prompt:
      'Tu es un contrôleur de gestion qui aide un dirigeant de PME à anticiper sa trésorerie. Voici l’historique des six derniers mois et la prévision des six prochains mois (séparateur : point-virgule, montants en XPF). Le solde de trésorerie au 31 octobre 2026 est de 14 200 000 XPF.\n\n<tableau>\n[collez le tableau ici]\n</tableau>\n\nÉtape 1 : calcule, pour chaque mois prévu (novembre 2026 à avril 2027), le solde de fin de mois à partir du solde d’ouverture, des encaissements et de tous les décaissements. Montre le calcul sous forme de tableau.\nÉtape 2 : indique le solde le plus bas et le mois où il survient.\nN’invente aucune donnée. Ne passe pas aux scénarios tant que je ne t’ai pas confirmé que la base est exacte.',
    materiau: {
      titre: 'Trésorerie : réel de mai à octobre 2026 et prévisions de novembre 2026 à avril 2027',
      texte:
        'Mois;Type;Encaissements (XPF);Décaissements courants (XPF);Remboursement d’emprunt (XPF);Investissements (XPF)\nmai 2026;réel;21400000;17800000;1200000;0\njuin 2026;réel;24800000;18600000;1200000;0\njuillet 2026;réel;31500000;20400000;1200000;0\naoût 2026;réel;29700000;20100000;1200000;3500000\nseptembre 2026;réel;26900000;19200000;1200000;0\noctobre 2026;réel;23600000;18400000;1200000;0\nnovembre 2026;prévu;22800000;18500000;1200000;0\ndécembre 2026;prévu;27500000;19800000;1200000;2400000\njanvier 2027;prévu;18200000;18600000;1200000;0\nfévrier 2027;prévu;15900000;18200000;1200000;6800000\nmars 2027;prévu;17100000;18300000;1200000;0\navril 2027;prévu;21000000;18700000;1200000;0',
    },
    variantes: {
      simple: 'Ne calculer que le scénario de référence et le solde le plus bas.',
      poussee:
        'Ajouter un quatrième scénario où un gros client paie avec deux mois de retard, et demander un graphique des quatre courbes de solde à présenter à la banque.',
    },
    astuces: {
      copilot:
        'Mettez les données dans un tableau Excel, puis demandez à Copilot dans Excel (selon la licence) d’ajouter une colonne « solde de fin de mois » : vérifiez la formule proposée.',
      chatgpt:
        'Avec l’analyse de données, joignez le fichier : ChatGPT montre ses calculs et trace les courbes demandées. Contrôlez un solde à la main.',
      gemini:
        'Dans Google Sheets, « Demander à Gemini » propose la formule du solde cumulé et peut expliquer une tendance.',
      claude:
        'Déposez le fichier : Claude peut rendre un fichier Excel avec une feuille par scénario, à relire avant de l’utiliser.',
    },
    vigilance:
      'Un plan de trésorerie réel révèle les difficultés de l’entreprise : travaillez sur des chiffres arrondis et sans nom de client. Les scénarios sont des hypothèses, pas des prévisions : c’est vous qui choisissez celles qui sont vraisemblables.',
    formateur: {
      resultat:
        'Un plan de six mois exact, puis trois scénarios comparés, avec un solde négatif de 0,58 million en mars dans le scénario à -15 % et l’identification des décisions qui évitent ce creux.',
      criteres: [
        'Soldes de référence exacts : 17,3 ; 21,4 ; 19,8 ; 9,5 ; 7,1 et 8,2 millions de XPF (fin novembre à fin avril).',
        'Le solde le plus bas du scénario de référence est de 7,1 millions, en mars.',
        'Dans le scénario à -15 % de janvier à mars, le solde de mars devient négatif (environ -0,58 million).',
        'L’apprenant a validé la base avant de lancer les scénarios, comme le prompt le demande.',
      ],
      pieges: [
        'Oublier le remboursement d’emprunt de 1,2 million dans le calcul du solde.',
        'Appliquer la baisse de 15 % à tous les mois et non seulement à janvier, février et mars.',
        'Confondre solde du mois et solde cumulé.',
        'Prendre le scénario le plus pessimiste pour une prévision.',
      ],
      competence: 'discernement',
      technique: 'decomposer',
    },
    motsCles: ['trésorerie', 'prévisionnel', 'scénarios', 'saisonnalité', 'tourisme'],
  },
  {
    id: 'dir-dossier-financement-notes',
    titre: 'Monter le dossier d’une demande de financement à partir de notes en vrac',
    metier: 'direction',
    niveau: 'intermediaire',
    famille: 'rediger',
    duree: 45,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Vous dirigez une menuiserie de Bourail et voulez acheter une machine à commande numérique pour fabriquer plus vite meubles et agencements. Votre banque et un organisme local de soutien aux entreprises demandent un dossier. Vous n’avez que vos notes et le devis du fournisseur.',
    objectif:
      'Faire construire un dossier cohérent en plusieurs échanges : plan, rédaction section par section, repérage de ce qui manque. Vérifier que tout reste fidèle aux notes.',
    etapes: [
      'Envoyez le prompt de départ avec vos notes : l’IA ne propose d’abord que le plan du dossier et la liste des informations manquantes.',
      'Répondez aux questions posées ou complétez vos notes, puis validez le plan.',
      'Faites rédiger une section à la fois : présentation, besoin, plan de financement, capacité de remboursement, risques.',
      'Relisez chaque section : tout chiffre doit se retrouver dans vos notes.',
      'Demandez la liste des pièces à joindre et notez, de votre côté, les conditions de l’aide à vérifier auprès de l’organisme.',
    ],
    prompt:
      'Tu es un conseiller qui aide un dirigeant de PME à monter un dossier de demande de financement pour une banque et un organisme de soutien aux entreprises. Voici mes notes. Nous allons travailler par étapes.\n\nÉtape 1 : propose un plan de dossier en cinq parties (présentation de l’entreprise, besoin et projet, plan de financement, capacité de remboursement, risques et réponses). Pour chaque partie, liste les informations qui me manquent. Ne rédige encore rien.\nPour la suite : n’utilise que mes notes. N’invente aucun chiffre, aucun taux, aucune condition d’aide ni aucun délai de réponse. Mets [à compléter] pour ce qui manque.\n\n<notes>\n[collez vos notes ici]\n</notes>',
    materiau: {
      titre: 'Notes en vrac, projet machine à commande numérique (Menuiserie Bourail Bois)',
      texte:
        'entreprise : menuiserie fondée en 2014, 9 salariés dont 2 apprentis, atelier de 420 m² à Bourail, clients : particuliers, quelques hôtels, un promoteur de Nouméa (30 % du CA)\nCA 2024 : 118 M XPF ; 2025 : 131 M ; 2026 : environ 140 M\nprojet : machine à commande numérique, devis 12 M XPF HT, livraison en 3 mois depuis l’Australie, installation + formation incluses (2 jours)\npourquoi : réduire le temps de découpe (2 jours par agencement aujourd’hui, 4 heures avec la machine d’après le fournisseur), accepter plus de commandes, moins de déchets\napport : 2,5 M XPF sur la trésorerie\nbesoin : 9,5 M XPF, durée de remboursement souhaitée : à voir avec la banque\nrisques : dépendance au promoteur, machine importée donc délai et change, formation des salariés\nrecrutement : un poste supplémentaire possible à terme, pas décidé\naide : un organisme de soutien aux entreprises existe peut-être pour ce type de projet, à vérifier\nbilan 2025 et prévisionnel 2027 : chez le cabinet comptable',
    },
    variantes: {
      simple: 'Faire rédiger seulement la partie « besoin et projet » en une page.',
      poussee:
        'Faire ensuite jouer à l’IA le rôle d’un analyste de la banque qui lit le dossier et liste ses objections, puis réviser le dossier en conséquence.',
    },
    astuces: {
      claude:
        'Mettez le dossier dans un Projet avec vos notes : chaque section se rédige dans le même contexte, et vous retrouvez l’historique.',
      chatgpt:
        'Ouvrez chaque section dans le canevas pour demander de raccourcir ou de durcir un seul passage sans toucher au reste.',
      copilot:
        'Dans Word, Copilot (selon la licence) rédige une section à partir de votre document de notes : indiquez-lui de ne rien ajouter.',
      gemini:
        'Avec Canvas, vous retouchez le dossier passage par passage et l’exportez ensuite dans Google Docs.',
    },
    vigilance:
      'Un dossier de financement engage votre entreprise : chaque chiffre est vérifié et signé par vous. L’IA ne connaît ni les conditions des aides ni les critères de votre banque : demandez-les à ces organismes.',
    formateur: {
      resultat:
        'Un dossier de cinq parties fidèle aux notes, avec un plan de financement cohérent (12 millions de XPF, apport de 2,5 millions, besoin de 9,5 millions), une liste claire de ce qui manque et aucune condition d’aide inventée.',
      criteres: [
        'Les chiffres du dossier sont ceux des notes, sans arrondi caché.',
        'Les informations manquantes (durée du prêt, bilan, prévisionnel, aide) restent en [à compléter].',
        'Les gains annoncés (4 heures au lieu de 2 jours) sont attribués au fournisseur et à vérifier.',
        'La dépendance au promoteur figure dans les risques, avec une réponse.',
      ],
      pieges: [
        'Faire dire au dossier que l’aide est acquise ou que le projet créera un poste.',
        'Oublier que le devis de 12 millions est hors taxes et ne dit rien du transport ni du dédouanement : ces coûts sont à faire chiffrer, pas à estimer.',
        'Reprendre les gains du fournisseur comme des certitudes.',
        'Laisser l’IA inventer une durée de remboursement ou un taux.',
      ],
      competence: 'diligence',
      technique: 'decomposer',
    },
    motsCles: ['financement', 'dossier', 'banque', 'investissement', 'artisanat'],
  },
  {
    id: 'dir-embaucher-ou-sous-traiter',
    titre: 'Arbitrer entre embaucher et sous-traiter avec une grille de critères',
    metier: 'direction',
    niveau: 'intermediaire',
    famille: 'organiser',
    duree: 30,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Vous dirigez une agence de location de véhicules à Lifou. L’entretien de la flotte est confié à un garage de Wé, de plus en plus occupé. Vous hésitez entre embaucher un mécanicien à mi-temps ou garder la sous-traitance en renégociant. La décision sera prise après-demain avec votre associé.',
    objectif:
      'Utiliser l’IA pour structurer une décision : poser les critères et leurs poids, comparer les options, tester la sensibilité des résultats, puis décider soi-même.',
    etapes: [
      'Relisez les données du matériau et ajoutez ce que vous savez du garage et de votre équipe.',
      'Demandez d’abord à l’IA de vous poser les questions qui lui manquent pour comparer les deux options, sans comparer encore.',
      'Fixez vous-même les critères et leurs poids, puis demandez le tableau noté.',
      'Faites varier un poids important : la décision change-t-elle ? Demandez à l’IA de le montrer.',
      'Rédigez en trois phrases votre décision et la condition qui la ferait changer.',
    ],
    prompt:
      'Tu es un conseiller de gestion qui aide le dirigeant d’une PME de location de véhicules à Lifou à décider entre embaucher un mécanicien à mi-temps et continuer à sous-traiter l’entretien. Voici les données.\n\n<donnees>\n[collez les données ici]\n</donnees>\n\nÉtape 1 : avant toute comparaison, pose-moi les cinq questions qui te manquent pour décider.\nÉtape 2 (quand j’aurai répondu) : propose un tableau de critères avec une pondération de 1 à 5 que je valide, note chaque option de 1 à 5 par critère, et justifie chaque note en une phrase.\nÉtape 3 : dis quel poids, s’il changeait, ferait basculer le résultat.\nTu ne décides pas à ma place. Pour tout coût salarial complet, écris [à faire chiffrer par l’expert-comptable] : n’estime ni charges sociales ni règles du droit du travail.',
    materiau: {
      titre: 'Données de l’agence (Lifou Location, fictives)',
      texte:
        'flotte : 22 véhicules (16 voitures, 4 camionnettes, 2 minibus)\nsous-traitance actuelle : garage de Wé, environ 1 150 000 XPF par mois en moyenne sur 12 mois ; délai moyen d’immobilisation d’un véhicule 6 jours, parfois 10 en haute saison\nbesoin estimé : 70 heures de mécanique par mois\nembauche envisagée : mécanicien à mi-temps, salaire brut proposé 190 000 XPF par mois (hors charges, à faire chiffrer)\noutillage à acheter : environ 1 800 000 XPF une fois\ngarage : propose de renégocier le prix, mais pas les délais\nrisques : difficulté à recruter un mécanicien sur l’île ; absence ou départ du salarié = retour à la sous-traitance ; formation à prévoir sur les minibus\ncritères souhaités : coût, disponibilité des véhicules, souplesse, risque, qualité de l’entretien',
    },
    variantes: {
      simple: 'Se limiter à trois critères et à une comparaison de coûts sur un an.',
      poussee:
        'Ajouter une troisième option (un contrat avec un second garage de l’île) et faire produire un tableau de sensibilité avec deux jeux de pondérations différents, un par associé.',
    },
    astuces: {
      chatgpt:
        'Demandez le tableau noté, puis téléchargez-le au format Excel pour faire varier les poids vous-même.',
      claude:
        'Demandez un artefact interactif : une petite page où vous changez les poids et voyez le total bouger.',
      copilot:
        'Transformez la grille en Copilot Page pour que votre associé commente les notes avant la réunion.',
    },
    vigilance:
      'N’indiquez ni nom ni situation personnelle de salariés ou de candidats. Le coût complet d’un salarié et les règles de l’embauche se demandent à votre expert-comptable, pas à l’IA.',
    formateur: {
      resultat:
        'Une grille pondérée validée par l’apprenant, les deux options notées avec justification, un test de sensibilité et une décision écrite par lui avec sa condition de révision.',
      criteres: [
        'Les poids sont fixés par l’apprenant, pas par l’IA.',
        'Le coût du mécanicien est marqué « à faire chiffrer », sans estimation de charges.',
        'Le test de sensibilité montre quel poids ferait basculer la décision.',
        'La décision finale et sa condition de révision sont écrites par l’apprenant.',
      ],
      pieges: [
        'Laisser l’IA inventer un coût de charges sociales pour que le tableau soit complet.',
        'Comparer 1 150 000 XPF mensuels de sous-traitance à un salaire brut sans charges.',
        'Oublier le risque de ne pas trouver de candidat, central sur une île.',
      ],
      competence: 'delegation',
      technique: 'decomposer',
    },
    motsCles: ['embauche', 'sous-traitance', 'décision', 'critères', 'Lifou'],
  },
  {
    id: 'dir-annonce-reorganisation',
    titre: 'Reformuler l’annonce d’une réorganisation avant de l’envoyer à l’équipe',
    metier: 'direction',
    niveau: 'intermediaire',
    famille: 'corriger',
    duree: 20,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Vous dirigez une entreprise de distribution de matériel électrique de Nouméa. Vous avez tapé en dix minutes l’annonce de la réorganisation du service après-vente. Un associé vous prévient : « C’est sec, les équipes vont mal le prendre. » Le message doit partir ce soir.',
    objectif:
      'Reformuler une annonce difficile pour l’expliquer et la rendre humaine, tout en gardant les faits intacts et sans promesse que vous ne pourriez pas tenir.',
    etapes: [
      'Lisez l’annonce du matériau en vous mettant à la place de Marc, dont le rôle change.',
      'Demandez à l’IA de repérer d’abord ce qui est sec, flou ou anxiogène, sans réécrire.',
      'Faites reformuler en précisant ce que vous voulez dire sur le pourquoi, ce qui change et ce qui ne change pas.',
      'Comparez les faits de la nouvelle version avec l’original : dates, horaires, noms, rattachements.',
      'Supprimez toute promesse ajoutée (emploi, rémunération, durée) et relisez le message à voix haute avant l’envoi.',
    ],
    prompt:
      'Tu es un conseiller en communication interne qui aide un dirigeant à annoncer une réorganisation à son équipe. Étape 1 : lis l’annonce ci-dessous et liste, sans la réécrire, ce qui peut mal passer (sécheresse, flou, absence d’explication, ce qui est dit trop vite).\nÉtape 2 : réécris-la en cinq parties : pourquoi cette décision, ce qui change (dates, horaires, rattachements), ce qui ne change pas, ce qui est encore à décider, comment poser ses questions. Ton respectueux, direct, sans langue de bois.\nGarde exactement les faits, les dates et les noms de l’original. N’ajoute aucune promesse, aucune justification chiffrée ni aucun engagement sur l’emploi ou la rémunération. Pour l’information qui manque, laisse un [crochet].\n\n<annonce>\n[collez l’annonce ici]\n</annonce>',
    materiau: {
      titre: 'Annonce rédigée par le dirigeant (version à reformuler)',
      texte:
        'Objet : Réorganisation\n\nÀ compter du 1er décembre, le service après-vente est rattaché au service commercial. Marc Wanabo n’est plus responsable du SAV à cette date. Les horaires du SAV passent de 7 h - 16 h à 8 h - 17 h. Les congés de décembre du SAV sont à reposer avant le 20 novembre. Aucune question avant la réunion du 20.\n\nLa direction',
    },
    variantes: {
      simple: 'Demander seulement la liste de ce qui peut mal passer.',
      poussee:
        'Ajouter une foire aux questions de huit questions que l’équipe posera probablement, avec les réponses à valider par vous, puis un message distinct pour Marc Wanabo.',
    },
    astuces: {
      claude:
        'Demandez trois versions de ton différent, puis combinez la meilleure ouverture et la meilleure conclusion.',
      copilot:
        'Dans Outlook, lancez « Coaching par Copilot » avant l’envoi : il commente le ton, la clarté et la façon dont le lecteur va le ressentir.',
      chatgpt:
        'Dans le canevas, demandez de rendre plus chaleureux un seul paragraphe, sans toucher aux faits.',
    },
    vigilance:
      'Une annonce de réorganisation touche des personnes : l’IA ne connaît ni leur histoire ni leurs droits. Ne lui demandez ni conseil juridique ni formulation sur un poste ou un contrat : voyez cela avec la personne concernée et votre conseil.',
    formateur: {
      resultat:
        'Une annonce en cinq parties qui garde tous les faits (1er décembre, rattachement, nouveaux horaires, congés avant le 20 novembre, réunion du 20), explique le pourquoi sans l’inventer et laisse en [crochet] ce que la direction doit décider.',
      criteres: [
        'Les dates et les horaires sont identiques à l’original.',
        'Le pourquoi de la décision vient de l’apprenant, pas de l’IA.',
        'Aucune promesse sur l’emploi, la rémunération ou la durée de la mesure.',
        'La situation de Marc Wanabo est traitée avec respect, sans détails inventés.',
      ],
      pieges: [
        'Laisser l’IA écrire « aucun poste n’est menacé » ou « cette réorganisation est définitive ».',
        'Inventer une raison économique que le dirigeant n’a pas donnée.',
        'Modifier un horaire ou une date en reformulant.',
      ],
      competence: 'diligence',
      technique: 'critique',
    },
    motsCles: ['réorganisation', 'annonce', 'communication interne', 'ton', 'équipe'],
  },
  {
    id: 'dir-diagnostic-forces-faiblesses',
    titre: 'Construire un diagnostic forces-faiblesses à partir de sources vérifiées',
    metier: 'direction',
    niveau: 'avance',
    famille: 'veiller',
    duree: 60,
    outils: ['gemini', 'claude', 'chatgpt', 'copilot'],
    outilConseille: 'gemini',
    situation:
      'Vous dirigez une agence de voyages réceptive de Nouméa, qui accueille des visiteurs venus d’Australie, de Nouvelle-Zélande et de métropole. Pour votre plan de l’an prochain, vous voulez un diagnostic qui croise vos constats internes avec des données extérieures que vous avez vérifiées, pas avec des impressions.',
    objectif:
      'Mener une recherche approfondie, ouvrir et vérifier les sources, puis croiser constats internes et externes dans un diagnostic où chaque point renvoie à une source.',
    etapes: [
      'Lancez la recherche approfondie avec le prompt de départ en précisant votre secteur et la période étudiée.',
      'Ouvrez chaque source citée : conservez seulement celles qui sont officielles ou clairement identifiées, avec leur date.',
      'Classez les informations en faits (chiffre daté et sourcé), tendances et hypothèses, puis jetez ce qui n’est pas sourcé.',
      'Croisez avec vos constats internes du matériau dans un tableau forces, faiblesses, opportunités, menaces, avec la source de chaque ligne externe.',
      'Demandez les cinq vérifications à faire avant de s’appuyer sur ce diagnostic dans le plan de l’année, puis faites-les.',
    ],
    prompt:
      'Tu es un analyste qui prépare le diagnostic stratégique d’une agence de voyages réceptive de Nouméa. Cherche sur le web des informations récentes sur le tourisme en Nouvelle-Calédonie : fréquentation, origine des visiteurs, capacités de transport, tendances de la demande, financement des entreprises du secteur. Privilégie les sites de l’ISEE, de l’IEOM, des provinces, de la CCI et de la presse locale.\nPour chaque information, donne : le fait ou la tendance, la source (nom du site et lien), la date de publication, et un niveau de confiance (officiel, presse, avis). Sépare les faits, les tendances et les hypothèses. Si tu ne trouves pas une donnée, écris « non trouvé » au lieu de l’estimer.\nEnsuite, croise avec mes constats internes ci-dessous dans un tableau forces, faiblesses, opportunités, menaces : chaque ligne indique sa source (interne ou lien).\n\n<constats_internes>\n[collez les constats internes ici]\n</constats_internes>',
    materiau: {
      titre: 'Constats internes de l’agence (fictifs)',
      texte:
        '- 62 % du chiffre d’affaires vient de visiteurs australiens et néo-zélandais, 25 % de métropole, 13 % d’autres\n- 3 guides à l’année, 5 saisonniers ; difficulté à recruter des guides parlant anglais\n- 2 minibus de 12 places, anciens : 3 pannes cette année\n- excursions les plus demandées : îlots du lagon et visite de la côte Ouest\n- 40 % des réservations arrivent moins de 15 jours avant la date\n- site internet refait en 2024 ; peu de réservations directes, la plupart par des revendeurs qui prennent une commission\n- trésorerie tendue de janvier à mars\n- avis en ligne : 4,5 sur 5, remarques régulières sur l’attente au départ',
    },
    variantes: {
      simple:
        'Limiter la recherche à deux sujets : l’évolution de la fréquentation et l’origine des visiteurs.',
      poussee:
        'Programmer une veille trimestrielle sur les mêmes sources, avec chaque fois un message listant uniquement ce qui a changé, et le comparer au diagnostic initial.',
    },
    astuces: {
      gemini:
        'Lancez Deep Research (limité en gratuit), puis exportez le rapport dans Google Docs pour y noter vos vérifications source par source.',
      claude:
        'La fonction Recherche, payante, produit un rapport sourcé en plusieurs étapes ; sinon, la recherche web cite les pages utilisées : ouvrez-les toutes.',
      chatgpt:
        'La recherche approfondie, limitée en gratuit, rend un rapport sourcé ; demandez le lien de chaque chiffre et ouvrez-le.',
      copilot:
        'Copilot Chat cite les pages web utilisées : ouvrez chaque lien avant de recopier un chiffre.',
    },
    vigilance:
      'Seul le chiffre lu sur la source fait foi : une IA peut mélanger deux années ou deux territoires. Ne collez ni coordonnées de clients ni chiffres d’affaires par client : vos constats internes doivent être agrégés.',
    formateur: {
      resultat:
        'Un diagnostic où chaque ligne externe renvoie à une source officielle ouverte et datée, croisé avec des constats internes, accompagné de cinq vérifications à faire.',
      criteres: [
        'Chaque donnée externe a un lien ouvert par l’apprenant et une date de publication.',
        'Les informations « non trouvées » sont signalées, pas estimées.',
        'Faits, tendances et hypothèses sont séparés dans la réponse.',
        'Le tableau croise les constats internes (dépendance aux revendeurs, minibus, trésorerie) avec le contexte externe.',
      ],
      pieges: [
        'Recopier un chiffre de fréquentation sans l’avoir lu sur la page de l’ISEE ou de l’IEOM.',
        'Prendre un article de blog ou un avis pour une donnée officielle.',
        'Laisser l’IA conclure à une opportunité sans lien avec les moyens réels de l’agence.',
        'Mélanger des chiffres de périodes différentes dans un même constat.',
      ],
      competence: 'discernement',
      technique: 'sources',
    },
    motsCles: ['diagnostic', 'forces faiblesses', 'veille', 'tourisme', 'sources'],
  },
  {
    id: 'dir-assistant-comite-direction',
    titre: 'Créer un assistant qui prépare les comités de direction',
    metier: 'direction',
    niveau: 'avance',
    famille: 'automatiser',
    duree: 60,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Vous dirigez un bureau d’études de Nouméa. Chaque lundi à 8 h, le comité de direction réunit cinq responsables. Vous passez une heure chaque vendredi à collecter les points, rédiger l’ordre du jour et rappeler les décisions en suspens. Vous voulez un assistant qui prépare ce travail et vous laisse le jugement.',
    objectif:
      'Rédiger les instructions permanentes d’un assistant, l’alimenter avec un exemple de comité, le tester sur des cas réalistes et corriger ses écarts jusqu’à ce qu’il soit fiable.',
    etapes: [
      'Rassemblez un ordre du jour type, un compte rendu type et la liste des décisions en suspens du dernier comité.',
      'Créez un Projet (Claude, ChatGPT), un Gem (Gemini) ou un agent (Copilot) et collez les instructions du prompt de départ.',
      'Testez l’assistant avec les trois demandes du matériau.',
      'Notez chaque écart (chiffre inventé, décision déjà prise par l’assistant, point oublié) et ajoutez une règle ou un exemple pour le corriger.',
      'Refaites les trois tests, puis faites utiliser l’assistant par un responsable sur un vrai comité.',
    ],
    prompt:
      'Tu es l’assistant de préparation du comité de direction du bureau d’études [nom de l’entreprise], à Nouméa. Le comité se réunit chaque lundi à 8 h avec cinq responsables ; je suis le dirigeant.\n\nQuand je te donne les points du comité, tu produis :\n1. un ordre du jour chronologique (durée de chaque point, 1 h 30 au total), avec en tête les points qui demandent une décision ;\n2. pour chaque point, une fiche de trois lignes : enjeu, information disponible, décision attendue ;\n3. la liste des décisions en suspens du dernier comité, avec leur responsable et leur date.\nRègles : suis les modèles joints. N’invente jamais un chiffre, une date ou un responsable : pose-moi la question. Ne tranche aucune décision à ma place. Si un point n’a pas d’enjeu clair, signale-le. Termine par les trois points à vérifier avant d’envoyer l’ordre du jour.',
    materiau: {
      titre: 'Demandes de test pour l’assistant',
      texte:
        '1. Points du lundi : situation du chantier de la zone industrielle de Ducos (retard de deux semaines), recrutement d’un ingénieur, renouvellement du logiciel de calcul de structures, retour du client de Païta sur la dernière livraison. Décisions en suspens : choix du fournisseur du logiciel (Hélène), budget formation (Rémi).\n2. Prépare le comité du lundi 23 novembre. Points : facture impayée d’un client, congés de fin d’année, nouvel appel d’offres de la mairie de Mont-Dore. Je n’ai pas les chiffres de l’appel d’offres.\n3. Points : bilan trimestriel, relation avec le sous-traitant de dessin, projet de déménagement. Aucune décision en suspens, mais je crois qu’on en avait une sur le déménagement.',
    },
    variantes: {
      simple:
        'Créer l’assistant pour la seule génération de l’ordre du jour, sans les fiches par point.',
      poussee:
        'Ajouter la rédaction du compte rendu à partir de vos notes de réunion, avec un tableau des actions (responsable, échéance), et tenir une liste des tests à rejouer à chaque modification des instructions.',
    },
    astuces: {
      claude:
        'Déposez les modèles dans un Projet ; pour une méthode de préparation utilisable dans toutes vos conversations, créez plutôt une compétence.',
      chatgpt:
        'Un Projet suffit pour vous ; un GPT, dont la création est payante, se partage avec vos cinq responsables.',
      copilot:
        'Selon votre licence, « Créer un agent » permet de proposer l’assistant à tout le comité.',
      gemini: 'Créez un Gem et joignez les modèles : il s’y référera à chaque demande.',
    },
    vigilance:
      'Les comités traitent de sujets confidentiels (clients, finances, personnes) : anonymisez les modèles déposés et utilisez un compte professionnel pour l’assistant. Il prépare, il ne décide pas.',
    formateur: {
      resultat:
        'Un assistant qui pose des questions quand il manque un chiffre ou un responsable, produit un ordre du jour chronométré et des fiches de trois lignes, et ne tranche jamais une décision.',
      criteres: [
        'Les instructions disent quoi faire quand une information manque.',
        'Le test 2 produit une question sur les chiffres de l’appel d’offres, pas une estimation.',
        'Le test 3 incite l’assistant à demander ce qu’était la décision sur le déménagement, sans l’inventer.',
        'L’apprenant a modifié les instructions après le premier test et constaté l’effet.',
      ],
      pieges: [
        'Un assistant qui « complète » une décision en suspens ou un responsable qu’il ne connaît pas.',
        'Des instructions si longues qu’elles se contredisent.',
        'Déposer dans le Projet des comptes rendus avec des noms et des salaires sans les anonymiser.',
      ],
      competence: 'delegation',
      technique: 'instructions',
    },
    motsCles: ['comité de direction', 'assistant', 'ordre du jour', 'Projet', 'agent', 'gem'],
  },
  {
    id: 'dir-rapport-activite-carnet',
    titre: 'Préparer le rapport d’activité annuel avec un carnet Gemini Notebook',
    metier: 'direction',
    niveau: 'avance',
    famille: 'synthetiser',
    duree: 45,
    outils: ['notebook', 'claude'],
    outilConseille: 'notebook',
    situation:
      'Vous dirigez une coopérative de services agricoles de Koné. L’assemblée générale approche : il faut un rapport d’activité annuel. Les éléments sont éparpillés dans douze documents : rapports trimestriels, comptes rendus de conseil, bilan, enquête auprès des adhérents. Vous voulez un rapport où chaque chiffre renvoie à un document.',
    objectif:
      'Exploiter un corpus de documents avec Gemini Notebook : synthèse, questions avec citations, repérage de ce qui manque, avant de rédiger vous-même le rapport.',
    etapes: [
      'Rassemblez les documents de l’année sans données personnelles : rapports trimestriels, comptes rendus, bilan, enquête.',
      'Créez un carnet dans Gemini Notebook et ajoutez-les comme sources.',
      'Envoyez le prompt de départ pour obtenir le plan et la synthèse du rapport, puis générez une FAQ.',
      'Posez les cinq questions du matériau et ouvrez chaque citation pour vérifier la réponse.',
      'Pour chaque question restée sans réponse, complétez vos documents ou notez l’information à demander, au lieu de laisser l’outil deviner.',
      'Rédigez vous-même le texte final à partir de la synthèse vérifiée.',
    ],
    prompt:
      'À partir uniquement des sources de ce carnet, rédige un projet de rapport d’activité annuel pour l’assemblée générale de la coopérative, en cinq parties : faits marquants de l’année, résultats chiffrés, projets réalisés, difficultés rencontrées, perspectives. Cite la source de chaque chiffre et de chaque fait. Quand deux sources donnent des chiffres différents, signale l’écart au lieu de choisir. Si une information attendue dans un rapport d’activité n’est présente dans aucune source, ajoute-la à une liste « À compléter ».',
    materiau: {
      titre: 'Questions de test à poser au carnet',
      texte:
        '1. Quel a été le chiffre d’affaires de l’année et comment a-t-il évolué par rapport à l’année précédente ?\n2. Quels ont été les trois principaux projets menés cette année ?\n3. Quelles difficultés ont été signalées dans les comptes rendus du conseil ?\n4. Que disent les adhérents dans l’enquête de satisfaction sur les délais de livraison ?\n5. Combien d’adhérents ont rejoint la coopérative cette année ?',
    },
    variantes: {
      simple: 'Charger quatre documents (les rapports trimestriels) et ne générer que la synthèse.',
      poussee:
        'Ajouter un résumé audio à écouter pendant un trajet, puis une carte mentale des sources pour construire le plan de la présentation en assemblée.',
    },
    astuces: {
      notebook:
        'Les rapports (synthèse, FAQ) citent leurs sources : cliquez sur chaque numéro pour relire le passage, surtout pour les chiffres.',
      claude:
        'Pour comparer, déposez les mêmes documents dans un Projet et posez les cinq questions : notez les écarts entre les deux outils.',
    },
    vigilance:
      'Pas de nom d’adhérent, de coordonnées ni de montants par personne dans les sources : le carnet peut être partagé. Un rapport présenté à une assemblée engage la coopérative : chaque chiffre est relu par vous.',
    formateur: {
      resultat:
        'Un carnet avec ses sources, un projet de rapport où chaque chiffre est cité, les écarts entre documents signalés et une liste « À compléter » qui montre les informations manquantes (la question 5 par exemple).',
      criteres: [
        'Chaque chiffre du rapport renvoie à une source ouverte par l’apprenant.',
        'Les écarts entre deux documents sont signalés, pas arbitrés par l’outil.',
        'La question sans réponse dans les sources est repérée et l’information est cherchée ailleurs.',
        'Aucune donnée personnelle ne figure dans les sources.',
      ],
      pieges: [
        'Croire un chiffre du résumé sans ouvrir la citation, alors qu’il mélange deux exercices.',
        'Laisser l’outil compléter ce qui manque avec une estimation plausible.',
        'Ajouter au carnet un fichier contenant les noms et les montants par adhérent.',
      ],
      competence: 'diligence',
      technique: 'sources',
    },
    motsCles: [
      'rapport d’activité',
      'Gemini Notebook',
      'assemblée générale',
      'corpus',
      'citations',
    ],
  },
  {
    id: 'dir-feuille-route-cinq-diapositives',
    titre: 'Présenter la feuille de route de l’année en cinq diapositives',
    metier: 'direction',
    niveau: 'avance',
    famille: 'visuels',
    duree: 45,
    outils: ['canva', 'claude', 'copilot', 'chatgpt'],
    outilConseille: 'canva',
    situation:
      'Vous dirigez une société de nettoyage industriel de Dumbéa, 60 salariés. En janvier, vous présentez la feuille de route de l’année à l’encadrement, 15 minutes, projetée. Vous avez des notes, trois grands chantiers, un budget et des échéances. Il faut que chacun retienne l’essentiel et sache ce qu’on attend de lui.',
    objectif:
      'Transformer des notes de pilotage en présentation de cinq diapositives, claires, fidèles aux chiffres, avec un seul message par diapositive.',
    etapes: [
      'Collez les notes du matériau avec le prompt de départ et lisez le plan proposé, sans passer encore à la mise en forme.',
      'Corrigez le plan : un seul message par diapositive, titres qui énoncent ce que vous voulez faire retenir.',
      'Faites générer la présentation avec l’IA Canva (ou un PowerPoint créé par Claude, ou Copilot dans PowerPoint selon la licence).',
      'Vérifiez chaque chiffre, chaque date et chaque nom contre vos notes, et corrigez à la main.',
      'Appliquez les couleurs de l’entreprise, grossissez les textes, puis répétez en chronométrant vos 15 minutes.',
    ],
    prompt:
      'Tu es un conseiller en présentation qui aide un dirigeant de société de nettoyage industriel à présenter sa feuille de route 2027 à l’encadrement, en 15 minutes, projetée en salle. Propose le plan de cinq diapositives exactement : 1. le message d’ouverture ; 2. les trois chantiers de l’année ; 3. le calendrier et les jalons ; 4. le budget ; 5. ce que j’attends de chacun. Pour chaque diapositive : un titre qui énonce le message, trois points au maximum, le visuel conseillé et la phrase que je dirai à voix haute.\nReprends les chiffres et les dates exactement, sans en ajouter. Si une information manque, écris [à compléter] sur la diapositive.\n\n<notes>\n[collez vos notes ici]\n</notes>',
    materiau: {
      titre: 'Notes de pilotage pour la feuille de route 2027',
      texte:
        'chantier 1 : renouveler le parc de machines de lavage, 4 autolaveuses, 14 400 000 XPF ; commande avant fin mars, livraison mai\nchantier 2 : former tous les chefs d’équipe à la sécurité et aux produits, 12 personnes, 2 sessions (février et juin), budget 1 800 000 XPF\nchantier 3 : lancer un nouveau service de nettoyage après chantier pour les entreprises du BTP, objectif 4 clients d’ici septembre\nbudget total de l’année : 21 500 000 XPF d’investissements et de formation, dont une partie financée par emprunt (montant à confirmer avec la banque)\nobjectif de chiffre d’affaires : +8 % sur l’an dernier (284 M XPF)\njalons : 15 février fin de la 1re session de formation ; fin mars commande des machines ; 30 juin fin de la 2e session ; 30 septembre bilan des 4 clients\nattentes : chefs d’équipe = présence aux formations ; responsables de site = remonter les besoins en machines avant le 15 février ; commerciaux = 10 rendez-vous avec des entreprises du BTP par mois',
    },
    variantes: {
      simple: 'Faire seulement le plan et les diapositives 2 et 5 dans Canva.',
      poussee:
        'Créer un modèle de présentation de pilotage trimestriel avec le Kit de marque (Pro) et un prompt type à réutiliser pour chaque point de suivi.',
    },
    astuces: {
      canva:
        'Collez le plan validé dans l’IA Canva pour obtenir des propositions de présentation, puis vérifiez chaque chiffre : les textes et les nombres se retouchent à la main.',
      claude:
        'La création de fichiers produit un PowerPoint à partir du plan : une solution si vous n’avez ni Canva ni Copilot.',
      copilot:
        'Selon la licence, Copilot dans PowerPoint crée une présentation à partir d’un document Word qui contient votre plan validé.',
      chatgpt:
        'Demandez la phrase à dire à voix haute pour chaque diapositive : vous répétez avec un chronomètre.',
    },
    vigilance:
      'Des chiffres de pilotage et de budget sont confidentiels : utilisez un compte professionnel, et ne diffusez la présentation qu’à l’encadrement concerné. Le montant de l’emprunt n’est pas confirmé : il reste « à compléter ».',
    formateur: {
      resultat:
        'Cinq diapositives aux titres-messages, avec les chiffres exacts (14 400 000 XPF, 1 800 000 XPF, 21 500 000 XPF, +8 % sur 284 millions) et le montant de l’emprunt laissé « à compléter ».',
      criteres: [
        'Le plan a été validé avant la mise en forme.',
        'Tous les chiffres et dates affichés sont ceux des notes.',
        'Chaque diapositive porte un seul message lisible de loin, et la présentation tient en 15 minutes.',
        'La diapositive « ce que j’attends de chacun » reprend les trois attentes (chefs d’équipe, responsables de site, commerciaux), avec l’échéance du 15 février pour les responsables de site.',
        'L’écart de 5,3 millions entre le budget total (21,5 millions) et les deux chantiers chiffrés (14,4 + 1,8 millions) est signalé comme à expliquer, pas comblé.',
      ],
      pieges: [
        'Une diapositive qui annonce un montant d’emprunt inventé.',
        'Un graphique généré avec des valeurs arrondies ou inventées.',
        'Trop de texte par diapositive pour une salle de projection.',
        'Confondre l’objectif de +8 % avec le chiffre d’affaires de l’an dernier.',
      ],
      competence: 'discernement',
      technique: 'decomposer',
    },
    motsCles: ['feuille de route', 'présentation', 'diapositives', 'Canva', 'pilotage'],
  },
];
