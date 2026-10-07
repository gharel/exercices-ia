/**
 * Comptabilité et gestion : cabinet d’expertise comptable, service comptable d’entreprise,
 * contrôle de gestion. Toutes les personnes, entreprises et sommes sont fictives.
 * Aucun taux, seuil ou délai fiscal n’est affirmé : les exercices demandent de les vérifier.
 */

export const vocabulaire = {
  structure: { g: 'm', s: 'cabinet d’expertise comptable', p: 'cabinets d’expertise comptable' },
  client: { g: 'm', s: 'client du cabinet', p: 'clients du cabinet' },
  partenaire: { g: 'm', s: 'conseiller bancaire', p: 'conseillers bancaires' },
  documentCourant: {
    g: 'f',
    s: 'note de situation financière',
    p: 'notes de situation financière',
  },
  documentLong: {
    g: 'f',
    s: 'plaquette des comptes annuels',
    p: 'plaquettes des comptes annuels',
  },
  reunion: {
    g: 'm',
    s: 'rendez-vous de présentation du bilan',
    p: 'rendez-vous de présentation du bilan',
  },
  offre: {
    g: 'm',
    s: 'forfait comptable des petits commerces',
    p: 'forfaits comptables des petits commerces',
  },
  poste: { g: 'm', s: 'collaborateur comptable', p: 'collaborateurs comptables' },
  evenement: {
    g: 'm',
    s: 'petit-déjeuner d’information des créateurs d’entreprise',
    p: 'petits-déjeuners d’information des créateurs d’entreprise',
  },
  visuel: { g: 'f', s: 'plaquette commerciale', p: 'plaquettes commerciales' },
  domaine: 'la comptabilité et la gestion',
  motifReclamation: 'une facture d’honoraires plus élevée que prévu',
  donnees: 'le suivi budgétaire des charges de l’année, poste par poste et mois par mois',
  colonnes: 'Mois;Poste de charges;Budget (XPF);Réalisé (XPF);Écart (XPF)',
  indicateur: 'le taux de consommation du budget par poste',
  veille: 'l’actualité fiscale et sociale de la Nouvelle-Calédonie',
  sourcesVeille:
    'les publications de la DSF, de la CAFAT et du gouvernement, le Journal officiel de la Nouvelle-Calédonie et la presse économique locale',
  jargon: 'la différence entre le résultat, la trésorerie et la capacité d’autofinancement',
  procedure: 'la clôture mensuelle des comptes',
  situationTendue:
    'un client furieux de payer une majoration pour une déclaration déposée en retard',
  donneesSensibles:
    'les noms, coordonnées bancaires, salaires, chiffres d’affaires et situations fiscales des clients',
  corpus: 'les notes d’information de la DSF et de la CAFAT, et les procédures internes du cabinet',
  publicCible: 'les créateurs d’entreprise et les patentés du Grand Nouméa',
  etranger: 'un investisseur australien qui veut créer une société à Nouméa',
  themeFormation: 'le circuit des pièces comptables, de la réception à l’archivage',
  tacheRepetitive: 'les relances des clients qui n’ont pas transmis leurs pièces',
  planning: 'la période des bilans, client par client',
  comparaison: 'deux offres de logiciel de comptabilité',
};

export const exercices = [
  {
    id: 'compta-expliquer-tgc',
    titre: 'Expliquer la TGC à une cliente qui crée son activité',
    metier: 'comptabilite',
    niveau: 'debutant',
    famille: 'rediger',
    duree: 15,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Une cliente du cabinet ouvre un salon de coiffure à Koné. Elle vous écrit qu’elle ne comprend rien à la TGC : faut-il l’ajouter à ses prix, qui la paie, comment la déclarer ? Vous préparez une explication simple, que l’expert-comptable relira.',
    objectif:
      'Obtenir une explication vulgarisée et juste, sans laisser l’IA affirmer de taux, de seuil ou de date qu’il faut vérifier.',
    etapes: [
      'Copiez l’e-mail de la cliente et le prompt de départ dans votre outil d’IA.',
      'Vérifiez que la réponse explique le principe (TGC facturée, TGC payée sur les achats, différence reversée) avec un exemple simple.',
      'Repérez chaque taux, seuil ou date : il doit apparaître entre crochets « à vérifier ». Sinon, demandez de le retirer.',
      'Demandez une version plus courte (150 mots) et plus chaleureuse.',
      'Complétez les crochets à partir des sources officielles, puis soumettez le texte à l’expert-comptable.',
    ],
    prompt:
      'Tu es collaborateur dans un cabinet d’expertise comptable à Nouméa. Une cliente qui crée son entreprise ne comprend pas la TGC (taxe générale sur la consommation). Rédige une réponse en vouvoiement, en langage simple, de 250 mots au maximum, qui explique :\n- le principe : la TGC facturée aux clients, la TGC payée sur les achats, la différence reversée ;\n- un exemple chiffré en XPF, en précisant que le taux utilisé est un exemple à confirmer ;\n- ce que le cabinet va faire pour elle.\nN’affirme aucun taux, aucun seuil et aucune date limite : écris [taux à vérifier] ou [date à vérifier] à leur place. Termine en proposant un rendez-vous.\n\n<email_cliente>\n[collez l’e-mail de la cliente]\n</email_cliente>',
    materiau: {
      titre: 'E-mail de la cliente',
      texte:
        'Bonjour,\nJ’ouvre mon salon de coiffure à Koné le mois prochain et la banque m’a parlé de la TGC. Je ne comprends pas : est-ce que je dois la mettre sur mes prix ? Est-ce que c’est moi qui paie ou mes clientes ? Et comment je la déclare ? J’ai acheté pour 1 200 000 XPF de matériel, est-ce que ça compte ?\nMerci de m’expliquer simplement, je n’y connais rien.\nLéa',
    },
    variantes: {
      simple: 'Demander seulement le principe de la TGC en cinq phrases, sans exemple.',
      poussee:
        'Demander aussi une fiche d’une page avec un schéma simple (ventes, achats, TGC à reverser), à remettre à tous les créateurs d’entreprise du cabinet.',
    },
    astuces: {
      chatgpt:
        'Demandez à ChatGPT de relire sa réponse et de lister chaque affirmation fiscale qu’il faudrait vérifier.',
      copilot:
        'Dans Outlook, lancez « Coaching par Copilot » sur la réponse finale pour vérifier qu’elle reste simple et chaleureuse.',
    },
    vigilance:
      'Les taux, seuils et échéances de la TGC se vérifient sur les sources officielles (DSF) au moment de répondre : l’IA peut citer des chiffres anciens, inventés ou ceux de la TVA de métropole. L’expert-comptable relit avant envoi.',
    formateur: {
      resultat:
        'Une explication de 250 mots au maximum, claire pour une non-spécialiste, avec un exemple chiffré cohérent et signalé comme tel, aucun taux affirmé, et une proposition de rendez-vous.',
      criteres: [
        'Le principe (collecter, déduire, reverser) est juste et compréhensible.',
        'Aucun taux, seuil ni date n’est affirmé sans vérification.',
        'La question sur l’achat de matériel reçoit une réponse prudente, renvoyée au rendez-vous si besoin.',
        'Le ton reste simple et rassurant.',
      ],
      pieges: [
        'Laisser un taux « cité de mémoire » par l’IA, ou un taux de TVA de métropole.',
        'Accepter un exemple dont le calcul est faux.',
        'Envoyer la réponse sans relecture de l’expert-comptable.',
      ],
      competence: 'diligence',
      technique: 'contexte',
    },
    motsCles: ['TGC', 'fiscalité', 'création d’entreprise', 'vulgarisation', 'e-mail'],
  },
  {
    id: 'compta-memo-dirigeant',
    titre: 'Reformuler une note technique en mémo clair pour un dirigeant',
    metier: 'comptabilite',
    niveau: 'debutant',
    famille: 'corriger',
    duree: 15,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Un collègue a rédigé une note sur les comptes de la SARL Pacifique Froid, une entreprise de climatisation de Dumbéa. Le gérant, technicien de formation, a demandé « un résumé sans jargon ». La note est juste, mais illisible pour lui.',
    objectif:
      'Faire reformuler un texte technique pour un public non spécialiste, sans perdre ni déformer les chiffres.',
    etapes: [
      'Copiez la note du matériau dans votre outil d’IA avec le prompt de départ.',
      'Comparez chaque chiffre du mémo à la note d’origine.',
      'Vérifiez que les notions utiles (amortissement, provision, délai de paiement des clients) sont expliquées par une image simple, pas seulement supprimées.',
      'Lisez la liste des termes simplifiés : une simplification a-t-elle changé le sens ?',
      'Relisez le mémo à voix haute : un non-comptable le comprend-il du premier coup ?',
    ],
    prompt:
      'Tu es collaborateur dans un cabinet comptable à Nouméa. Reformule la note ci-dessous en mémo d’une demi-page pour le gérant, un technicien qui n’est pas comptable. Garde tous les chiffres exacts. Remplace le jargon par des mots simples ; si une notion est indispensable, explique-la en une phrase avec une image concrète. Structure : ce qui va bien, ce qui inquiète, ce que nous conseillons. Après le mémo, liste les termes techniques que tu as simplifiés et comment.\n\n<note>\n[collez la note]\n</note>',
    materiau: {
      titre: 'Note technique du collègue (entreprise fictive)',
      texte:
        'Objet : SARL Pacifique Froid, arrêté au 30 juin\n\nLe CA progresse de 12 % (68,4 MXPF contre 61,1 MXPF) mais l’EBE se dégrade à 6,2 MXPF (8,1 MXPF en N-1) du fait de la hausse des achats consommés et des charges de personnel (embauche de deux techniciens). Les dotations aux amortissements augmentent avec l’acquisition de deux véhicules utilitaires (9,8 MXPF). Le résultat net ressort à 1,4 MXPF. La CAF reste positive mais le BFR se dégrade : le poste clients représente 74 jours de CA (52 jours en N-1), principalement du fait de deux marchés publics réglés tardivement. La trésorerie nette passe de 7,9 MXPF à 2,3 MXPF. Une provision pour créance douteuse de 0,9 MXPF est constituée sur un client en difficulté. Il conviendrait d’envisager une ligne de financement court terme ou un affacturage et de renforcer le suivi du recouvrement.',
    },
    variantes: {
      simple: 'Demander seulement cinq points clés en mots simples.',
      poussee:
        'Demander deux formats (e-mail de dix lignes, mémo d’une page), puis faire jouer le gérant par l’IA pour anticiper ses questions.',
    },
    astuces: {
      claude:
        'Demandez de mettre en gras chaque chiffre repris de la note : la vérification prend une minute.',
      gemini: 'Ouvrez le mémo dans Canvas pour retoucher un paragraphe sans tout régénérer.',
    },
    vigilance:
      'Les comptes d’un client sont confidentiels : avant de coller une vraie note, remplacez le nom de l’entreprise et ceux de ses clients.',
    formateur: {
      resultat:
        'Un mémo d’une demi-page en trois parties, qui garde tous les chiffres (68,4 contre 61,1 millions XPF, 74 jours contre 52, trésorerie de 7,9 à 2,3 millions XPF) et explique simplement pourquoi l’entreprise gagne de l’argent mais en manque en banque.',
      criteres: [
        'Tous les chiffres sont exacts et rattachés à la bonne année.',
        'Les notions indispensables sont expliquées, pas effacées.',
        'Le mémo suit la structure demandée et tient en une demi-page.',
      ],
      pieges: [
        'Accepter un mémo qui présente le résultat de 1,4 million XPF comme de l’argent disponible en banque.',
        'Laisser l’IA durcir le conseil (« contractez un prêt ») alors que la note dit « envisager ».',
        'Perdre l’explication des deux marchés publics payés en retard.',
      ],
      competence: 'description',
      technique: 'format',
    },
    motsCles: ['mémo', 'dirigeant', 'vulgarisation', 'trésorerie', 'comptes'],
  },
  {
    id: 'compta-checklist-cloture',
    titre: 'Transformer des notes en vrac en check-list de clôture mensuelle',
    metier: 'comptabilite',
    niveau: 'debutant',
    famille: 'organiser',
    duree: 15,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Dans le service comptable d’une entreprise de distribution de Ducos, la clôture mensuelle repose sur la mémoire de la cheffe comptable, qui part en congé. Elle vous a dicté ses étapes en vrac. Vous devez en faire une check-list que la personne intérimaire pourra suivre.',
    objectif:
      'Faire structurer une procédure à partir de notes brutes, dans un format précis, et vérifier qu’aucune étape n’a disparu.',
    etapes: [
      'Collez les notes de la cheffe comptable avec le prompt de départ.',
      'Vérifiez que chaque étape des notes se retrouve dans la check-list, en les cochant une à une.',
      'Lisez à part les étapes que l’IA propose d’ajouter : gardez seulement celles qui ont du sens pour l’entreprise.',
      'Relisez la liste des points flous : ce sont les questions à poser à la cheffe comptable avant son départ.',
      'Exportez la check-list en tableau Excel ou Word.',
    ],
    prompt:
      'Tu es assistant dans le service comptable d’une entreprise de Nouméa. À partir des notes ci-dessous, rédige une check-list de clôture mensuelle sous forme de tableau : jour (J+1 à J+5), tâche, responsable, document ou outil utilisé, case à cocher. Garde toutes les étapes des notes, dans un ordre logique. N’ajoute aucune étape absente des notes dans le tableau : propose-les à part, dans une liste « à valider ». Termine par les points flous à faire préciser.\n\n<notes>\n[collez les notes]\n</notes>',
    materiau: {
      titre: 'Notes dictées par la cheffe comptable',
      texte:
        'alors en début de mois : d’abord les relevés des 3 banques, rapprochement des deux principales le 1er jour si possible, la troisième envoie tard\nfactures fournisseurs : vérifier que tout est saisi, relancer les acheteurs pour les bons de réception manquants\ncaisses des 4 magasins : Sylvie envoie les tickets Z, contrôler avec les remises en banque\nles notes de frais avant le 3\nla paie c’est le cabinet extérieur qui l’envoie vers J+2, passer l’écriture et vérifier les charges CAFAT\nprovisions : congés payés, factures non parvenues (demander aux acheteurs)\nstocks : inventaire tournant de l’entrepôt, la valeur est donnée par la logistique\nTGC : préparer le montant pour la déclaration, le DAF signe\ntableau de bord pour le DAF avant J+5 : CA par magasin, marge, trésorerie\nnoter tout ce qui cloche dans le cahier de clôture',
    },
    variantes: {
      simple: 'Demander une simple liste numérotée, sans tableau ni responsables.',
      poussee:
        'Demander une version « intérimaire » qui explique en une phrase le but de chaque tâche, et un tableau de suivi sur douze mois.',
    },
    astuces: {
      chatgpt:
        'Demandez le tableau final en fichier Excel : la colonne « fait » devient une vraie case à cocher.',
      copilot:
        'Transformez la check-list en Copilot Page pour que la cheffe comptable la corrige avant de partir.',
    },
    vigilance:
      'De vraies notes de clôture contiennent des noms et des montants : remplacez-les avant de les coller. La check-list est validée par la cheffe comptable avant son départ.',
    formateur: {
      resultat:
        'Un tableau J+1 à J+5 qui reprend les dix points des notes (banques, fournisseurs, caisses, notes de frais, paie, provisions, stocks, TGC, tableau de bord, cahier de clôture), avec une liste séparée des ajouts proposés et des points flous.',
      criteres: [
        'Les dix points des notes sont présents.',
        'Les ajouts de l’IA sont séparés dans une liste « à valider ».',
        'Les points flous sont listés (qui envoie quoi, à quelle date).',
      ],
      pieges: [
        'Ne pas voir qu’une étape des notes a disparu, souvent le cahier de clôture ou les tickets Z.',
        'Accepter des étapes génériques ajoutées par l’IA qui ne correspondent pas à l’entreprise.',
      ],
      competence: 'description',
      technique: 'structurer',
    },
    motsCles: ['clôture', 'check-list', 'procédure', 'service comptable'],
  },
  {
    id: 'compta-commentaire-comptes-artisan',
    titre: 'Commenter les chiffres clés d’un client artisan',
    metier: 'comptabilite',
    niveau: 'debutant',
    famille: 'analyser',
    duree: 20,
    outils: ['chatgpt', 'claude', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Un client du cabinet, menuisier installé à La Foa, vient chercher ses comptes de l’année. Il veut savoir en quelques phrases si son activité va mieux ou moins bien que l’an dernier. Vous avez ses chiffres clés sur deux exercices.',
    objectif:
      'Faire calculer des évolutions et rédiger un commentaire simple, en vérifiant les pourcentages et en écartant les causes inventées.',
    etapes: [
      'Collez le tableau des chiffres clés avec le prompt de départ.',
      'Vérifiez à la calculatrice deux évolutions en pourcentage.',
      'Repérez si l’IA explique une évolution par une cause qui n’est pas dans les données.',
      'Demandez de reformuler le commentaire en cinq phrases simples pour le client.',
      'Ajoutez vous-même ce que vous savez du dossier et retirez les suppositions.',
    ],
    prompt:
      'Tu es collaborateur dans un cabinet comptable en Nouvelle-Calédonie. Voici les chiffres clés d’un client menuisier sur deux exercices.\n1. Calcule l’évolution de chaque ligne en XPF et en pourcentage, dans un tableau.\n2. Rédige un commentaire de 8 lignes au maximum, en langage simple, pour le client : ce qui progresse, ce qui recule, ce qu’il faut surveiller.\nN’invente aucune cause : si une évolution demande une explication, écris « à expliquer avec le client ».\n\n<chiffres>\n[collez le tableau]\n</chiffres>',
    materiau: {
      titre: 'Chiffres clés du menuisier (fictifs)',
      texte:
        'Poste;Année N-1 (XPF);Année N (XPF)\nChiffre d’affaires;18 600 000;21 300 000\nAchats de bois et fournitures;7 400 000;9 900 000\nSous-traitance;600 000;1 800 000\nSalaires;4 200 000;4 350 000\nCharges sociales;1 470 000;1 520 000\nLoyer de l’atelier;1 080 000;1 080 000\nCarburant et entretien du véhicule;720 000;860 000\nAssurances;380 000;410 000\nRésultat de l’exercice;2 300 000;1 450 000\nTrésorerie au 31 décembre;3 100 000;1 200 000\nCréances clients au 31 décembre;1 900 000;3 800 000',
    },
    variantes: {
      simple: 'Demander seulement le tableau des évolutions, sans commentaire.',
      poussee:
        'Demander un graphique en barres N-1 et N, puis une version plus formelle du commentaire, destinée au banquier du client.',
    },
    astuces: {
      chatgpt:
        'Déposez le tableau en CSV : l’analyse de données calcule les pourcentages en code, que vous pouvez afficher.',
      claude:
        'Demandez le détail de chaque calcul de pourcentage : une erreur se repère tout de suite.',
    },
    vigilance:
      'Avec de vrais comptes, retirez le nom du client et ceux de ses propres clients. Le commentaire est un livrable du cabinet : l’expert-comptable le relit.',
    formateur: {
      resultat:
        'Un tableau juste (chiffre d’affaires en hausse de 14,5 %, achats de 33,8 %, résultat en baisse de 37 %, créances clients doublées) et un commentaire simple : plus de travail, moins de marge, et une trésorerie en baisse parce que les clients paient plus tard.',
      criteres: [
        'Les pourcentages vérifiés à la main sont justes.',
        'Le commentaire relie la baisse de trésorerie à la hausse des créances clients.',
        'Les hypothèses sont signalées « à expliquer avec le client » au lieu d’être affirmées.',
      ],
      pieges: [
        'Laisser l’IA recalculer le résultat en soustrayant les lignes : le tableau ne liste pas toutes les charges.',
        'Accepter une cause inventée (« hausse du prix du bois importé ») présentée comme un fait.',
        'Confondre une baisse du résultat avec une perte.',
      ],
      competence: 'discernement',
      technique: 'format',
    },
    motsCles: ['comptes annuels', 'artisan', 'commentaire', 'évolution', 'pourcentage'],
  },
  {
    id: 'compta-relances-graduees',
    titre: 'Rédiger des relances d’impayés graduées à partir de la balance âgée',
    metier: 'comptabilite',
    niveau: 'intermediaire',
    famille: 'rediger',
    duree: 30,
    outils: ['chatgpt', 'claude', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Le service comptable d’une entreprise de location de matériel à Païta a laissé filer les encaissements. Votre responsable vous donne la balance âgée des clients, ses règles de relance et un exemple de relance qu’il aime. Vous préparez, pour chaque client, la relance adaptée à son retard.',
    objectif:
      'Faire classer des données selon des règles, puis rédiger des relances graduées en s’appuyant sur un exemple, en plusieurs échanges.',
    etapes: [
      'Donnez les règles et la balance âgée, et demandez de classer chaque client dans un niveau de relance.',
      'Vérifiez vous-même le classement de trois clients, en particulier les cas particuliers (litige, échéancier).',
      'Donnez l’exemple du responsable et demandez trois modèles de relance (niveaux 1, 2 et 3) dans le même style.',
      'Faites rédiger la relance de deux clients précis, avec leurs montants et leurs numéros de facture.',
      'Comparez les montants et les numéros de chaque relance à la balance âgée avant tout envoi.',
    ],
    prompt:
      'Tu es comptable clients dans une entreprise de location de matériel à Païta. Voici nos règles de relance et la balance âgée de nos clients.\n\nÉtape 1 : classe chaque client dans un niveau de relance (1, 2 ou 3) selon les règles, dans un tableau : client, factures concernées, montant dû, retard le plus ancien, niveau, remarque. Les clients en litige ou sous échéancier ne reçoivent pas de relance standard : signale-les à part.\n\n<regles>\n[collez les règles de relance]\n</regles>\n\n<balance_agee>\n[collez la balance âgée]\n</balance_agee>',
    materiau: {
      titre: 'Règles, exemple de relance et balance âgée (fictifs)',
      texte:
        'RÈGLES DE RELANCE\nNiveau 1 : retard de 1 à 30 jours, rappel courtois par e-mail.\nNiveau 2 : retard de 31 à 60 jours, relance ferme, appel téléphonique proposé.\nNiveau 3 : retard de plus de 60 jours, dernier rappel avant transmission au responsable, qui décide de la suite.\n\nEXEMPLE DE RELANCE QUI PLAÎT AU RESPONSABLE\nBonjour Madame Lefèvre, sauf erreur de notre part, la facture F-2291 du 3 août (145 000 XPF) reste à régler. Un simple oubli arrive à tout le monde : pourriez-vous nous indiquer la date de règlement prévue ? Nous restons à votre disposition. Bien cordialement.\n\nBALANCE ÂGÉE AU 30 SEPTEMBRE\nClient;Facture;Date de facture;Échéance;Montant dû (XPF);Jours de retard;Commentaire\nBâti Nord;F-2210;15/06;15/07;380 000;77;\nBâti Nord;F-2265;20/07;19/08;215 000;42;\nEspaces Verts du Sud;F-2240;05/07;04/08;96 000;57;\nPacific Events;F-2288;02/08;01/09;450 000;29;\nPacific Events;F-2301;10/08;09/09;125 000;21;\nTontouta Transport;F-2195;30/05;29/06;610 000;93;litige : matériel rendu endommagé, facture contestée\nKoné Terrassement;F-2270;25/07;24/08;780 000;37;échéancier accordé : 3 versements de 260 000\nMme Lefèvre (particulier);F-2291;03/08;02/09;145 000;28;\nAgri Boulouparis;F-2233;01/07;31/07;58 000;61;\nCafé du Port;F-2305;12/08;11/09;34 500;19;',
    },
    variantes: {
      simple: 'Rédiger seulement la relance de niveau 1 de Pacific Events, à partir de l’exemple.',
      poussee:
        'Créer un assistant (Projet, GPT ou Gem) qui reçoit la balance âgée chaque mois et prépare les relances, que vous validez avant envoi.',
    },
    astuces: {
      chatgpt:
        'Déposez la balance âgée en CSV : l’analyse de données fait le classement, et vous pouvez vérifier le filtre appliqué.',
      copilot:
        'Dans Outlook, partez d’un « Brouillon avec Copilot » en collant le modèle validé, puis ajustez la facture et le montant.',
    },
    vigilance:
      'Une relance envoyée à tort (litige, échéancier en cours) abîme la relation client. Vérifiez chaque montant et chaque numéro de facture. Avec de vraies données, ne collez que les colonnes nécessaires.',
    formateur: {
      resultat:
        'Un classement juste (niveau 1 : Pacific Events, Mme Lefèvre, Café du Port ; niveau 2 : Espaces Verts du Sud ; niveau 3 : Bâti Nord, pour ses deux factures, et Agri Boulouparis), Tontouta Transport et Koné Terrassement signalés à part, et trois modèles au ton de l’exemple.',
      criteres: [
        'Les deux cas particuliers (litige, échéancier) sont exclus des relances standard.',
        'Bâti Nord reçoit une seule relance qui reprend ses deux factures (595 000 XPF).',
        'Les modèles reprennent le ton de l’exemple, de plus en plus ferme.',
        'Montants et numéros de facture sont exacts.',
      ],
      pieges: [
        'Relancer Tontouta Transport malgré le litige en cours.',
        'Classer Agri Boulouparis (61 jours) au niveau 2 en arrondissant.',
        'Laisser l’IA ajouter des pénalités de retard ou un texte de loi dans la relance.',
      ],
      competence: 'discernement',
      technique: 'exemples',
    },
    motsCles: ['relance', 'impayés', 'balance âgée', 'recouvrement', 'modèle'],
  },
  {
    id: 'compta-ecart-budgetaire',
    titre: 'Expliquer les écarts entre le budget et le réalisé',
    metier: 'comptabilite',
    niveau: 'intermediaire',
    famille: 'analyser',
    duree: 30,
    outils: ['chatgpt', 'claude', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Vous êtes au contrôle de gestion d’une chaîne de trois boulangeries (Nouméa, Dumbéa, Mont-Dore). Le gérant veut comprendre pourquoi le résultat du semestre est en dessous du budget. Vous avez le budget et le réalisé par poste, et quelques informations des responsables de magasin.',
    objectif:
      'Faire calculer des écarts, puis les relier à des causes connues en distinguant les faits des hypothèses.',
    etapes: [
      'Donnez le tableau et demandez les écarts en XPF et en pourcentage du budget, classés du plus défavorable au plus favorable.',
      'Vérifiez deux écarts et les totaux à la main.',
      'Donnez ensuite les informations des responsables et demandez de rattacher chaque écart important à une information, ou de le marquer « non expliqué ».',
      'Demandez une note de 10 lignes au gérant : les trois écarts principaux, leurs causes, les questions ouvertes.',
      'Comparez la note à vos propres conclusions et retirez ce qui est surinterprété.',
    ],
    prompt:
      'Tu es contrôleur de gestion pour une petite chaîne de boulangeries en Nouvelle-Calédonie. Voici le budget et le réalisé du premier semestre, par poste.\n1. Calcule l’écart de chaque poste en XPF et en pourcentage du budget ; indique s’il est favorable ou défavorable au résultat.\n2. Classe les écarts du plus défavorable au plus favorable.\n3. Vérifie que les totaux sont cohérents et signale toute anomalie.\nN’explique pas encore les écarts : je te donnerai ensuite les informations des responsables.\n\n<budget_realise>\n[collez le tableau]\n</budget_realise>',
    materiau: {
      titre: 'Budget, réalisé et informations des responsables (fictifs)',
      texte:
        'Poste;Budget semestre (XPF);Réalisé semestre (XPF)\nVentes de pain et viennoiseries;42 000 000;40 300 000\nVentes de pâtisseries;18 000 000;19 900 000\nVentes de snacking;9 000 000;12 600 000\nFarine et matières premières;15 600 000;17 900 000\nEmballages;1 800 000;2 450 000\nÉlectricité;3 000 000;3 650 000\nSalaires et charges;24 000 000;24 900 000\nLoyers;5 400 000;5 400 000\nEntretien du matériel;1 200 000;2 950 000\nPublicité;900 000;400 000\nTotal ventes;69 000 000;72 800 000\nTotal charges;51 900 000;57 650 000\nRésultat avant impôt;17 100 000;15 150 000\n\nINFORMATIONS DES RESPONSABLES\n- Dumbéa : le four principal est tombé en panne en mars ; réparation et location d’un four pendant trois semaines.\n- Le fournisseur de farine a annoncé une hausse de prix en février.\n- Mont-Dore : le rayon snacking a été agrandi en avril, avec un très bon succès à midi.\n- La campagne radio prévue en mai a été annulée.\n- Nouméa : moins de clients le matin depuis l’ouverture d’une boulangerie concurrente dans le quartier.',
    },
    variantes: {
      simple: 'Demander seulement le tableau des écarts, sans explication.',
      poussee:
        'Demander un graphique en cascade du résultat budgété au résultat réalisé, puis trois diapositives pour le gérant.',
    },
    astuces: {
      chatgpt:
        'Demandez un graphique des cinq plus gros écarts : il montre plus vite que le tableau où regarder.',
      gemini:
        'Dans Google Sheets, « Demander à Gemini » peut ajouter les colonnes d’écart et proposer un graphique.',
    },
    vigilance:
      'Une IA relie volontiers un écart à la cause la plus plausible. Seules les causes confirmées par les responsables sont présentées comme des faits au gérant ; les autres restent des hypothèses.',
    formateur: {
      resultat:
        'Un tableau juste (résultat en retrait de 1 950 000 XPF), les principaux écarts reliés aux informations des responsables (farine, panne du four, snacking, campagne annulée, concurrence le matin), et l’électricité et les emballages marqués « non expliqué » ou présentés comme des hypothèses.',
      criteres: [
        'Les écarts et leur sens (favorable, défavorable) sont justes.',
        'Chaque explication renvoie à une information des responsables.',
        'Les écarts sans information (électricité, emballages) sont signalés comme tels.',
        'La note au gérant tient en 10 lignes.',
      ],
      pieges: [
        'Inverser le sens d’un écart : une hausse des ventes est favorable, une hausse des charges défavorable.',
        'Accepter une explication inventée pour la hausse de l’électricité.',
        'Calculer le pourcentage sur le réalisé au lieu du budget.',
      ],
      competence: 'discernement',
      technique: 'decomposer',
    },
    motsCles: ['budget', 'écart', 'contrôle de gestion', 'analyse', 'résultat'],
  },
  {
    id: 'compta-diapositives-bilan',
    titre: 'Créer trois diapositives pour présenter ses comptes à un client',
    metier: 'comptabilite',
    niveau: 'intermediaire',
    famille: 'visuels',
    duree: 30,
    outils: ['canva', 'copilot', 'claude', 'chatgpt'],
    outilConseille: 'canva',
    situation:
      'Vous préparez le rendez-vous de présentation du bilan d’une agence de voyages de Nouméa. Le gérant n’aime pas les tableaux. L’expert-comptable veut trois diapositives claires : l’activité, la rentabilité, la trésorerie.',
    objectif:
      'Transformer des chiffres en messages et en graphiques simples, puis mettre en forme une courte présentation sans déformer les données.',
    etapes: [
      'Avec Claude ou ChatGPT, donnez les chiffres et demandez, pour chaque diapositive, un titre-message, un graphique adapté et deux commentaires.',
      'Vérifiez que chaque titre-message est vrai au regard des chiffres.',
      'Créez la présentation dans Canva (IA Canva ou Design magique) ou dans PowerPoint avec Copilot, selon votre licence.',
      'Saisissez vous-même les données des graphiques, puis vérifiez les axes : un axe qui ne part pas de zéro exagère une évolution.',
      'Faites relire la présentation par l’expert-comptable.',
    ],
    prompt:
      'Tu es collaborateur dans un cabinet comptable à Nouméa. Je prépare trois diapositives pour présenter ses comptes au gérant d’une agence de voyages, qui préfère les graphiques aux tableaux. À partir des chiffres ci-dessous, propose pour chaque diapositive (activité, rentabilité, trésorerie) :\n- un titre-message d’une phrase qui dit la conclusion ;\n- le type de graphique le plus lisible et les données à y mettre ;\n- deux commentaires courts à dire à l’oral.\nN’utilise que ces chiffres. Si une conclusion n’est pas certaine, formule-la comme une question à poser au gérant.\n\n<chiffres>\n[collez les chiffres]\n</chiffres>',
    materiau: {
      titre: 'Chiffres de l’agence de voyages (fictifs)',
      texte:
        'Indicateur;N-2 (XPF);N-1 (XPF);N (XPF)\nChiffre d’affaires (commissions);31 500 000;38 200 000;41 900 000\nDont billetterie;19 800 000;21 400 000;20 600 000\nDont séjours et forfaits;11 700 000;16 800 000;21 300 000\nCharges de personnel;16 900 000;19 700 000;22 800 000\nRésultat net;2 100 000;3 900 000;3 300 000\nTrésorerie au 31 décembre;6 400 000;8 900 000;5 100 000\nAcomptes reçus des clients pour des voyages futurs;3 200 000;4 100 000;6 800 000',
    },
    variantes: {
      simple: 'Faire une seule diapositive sur l’activité, avec un graphique.',
      poussee:
        'Créer un modèle de présentation aux couleurs du cabinet, réutilisable à chaque rendez-vous de bilan, avec des zones à remplir.',
    },
    astuces: {
      canva:
        'Insérez un graphique Canva et collez-y vos chiffres : vous gardez la main sur les données, contrairement à une image générée.',
      copilot:
        'Avec la licence, Copilot dans PowerPoint peut créer une première version à partir d’un document Word qui contient vos titres et commentaires.',
      claude:
        'Demandez un artefact qui affiche les trois graphiques : vous vérifiez les données avant de passer à la mise en forme.',
    },
    vigilance:
      'N’utilisez jamais un graphique généré comme image : ses valeurs peuvent être fausses. Les comptes d’un client sont confidentiels : n’utilisez que des outils validés par le cabinet.',
    formateur: {
      resultat:
        'Trois diapositives lisibles aux titres-messages justes : une activité en hausse portée par les séjours, un résultat en baisse malgré la hausse du chiffre d’affaires, une trésorerie fragile puisqu’elle est inférieure aux 6,8 millions XPF d’acomptes clients.',
      criteres: [
        'Chaque titre-message est vrai au regard des chiffres.',
        'Les graphiques reprennent exactement les données, avec des axes honnêtes.',
        'La trésorerie est commentée en tenant compte des acomptes reçus.',
        'La présentation tient en trois diapositives lisibles.',
      ],
      pieges: [
        'Accepter « une trésorerie confortable » alors qu’elle est inférieure aux acomptes reçus.',
        'Garder un graphique décoratif dont les valeurs sont inventées.',
        'Recopier les tableaux complets sur les diapositives.',
      ],
      competence: 'discernement',
      technique: 'format',
    },
    motsCles: ['présentation', 'bilan', 'graphique', 'Canva', 'PowerPoint'],
  },
  {
    id: 'compta-lettre-mission',
    titre: 'Préparer une lettre de mission à partir d’un entretien client',
    metier: 'comptabilite',
    niveau: 'intermediaire',
    famille: 'rediger',
    duree: 30,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'L’expert-comptable a reçu de nouveaux clients : un couple qui reprend un snack à Bourail. Il vous laisse ses notes d’entretien et le modèle de lettre de mission du cabinet. Vous préparez un projet de lettre, qu’il relira et signera.',
    objectif:
      'Faire compléter un modèle à partir de notes, en plusieurs échanges, en faisant repérer les informations manquantes au lieu de les laisser inventer.',
    etapes: [
      'Donnez le modèle et les notes, et demandez d’abord la liste des informations trouvées et manquantes.',
      'Demandez ensuite le projet de lettre, avec les informations manquantes entre crochets.',
      'Vérifiez que les missions listées correspondent exactement aux notes, ni plus ni moins.',
      'Vérifiez les honoraires : montant, rythme de facturation, ce qui est inclus ou non.',
      'Faites rédiger l’e-mail à l’expert-comptable qui accompagne le projet et liste les points à trancher.',
    ],
    prompt:
      'Tu es assistant dans un cabinet d’expertise comptable à Nouméa. Je prépare un projet de lettre de mission à partir du modèle du cabinet et des notes d’entretien de l’expert-comptable.\n\nÉtape 1 : sans rédiger la lettre, liste les rubriques du modèle et indique, pour chacune, l’information trouvée dans les notes ou « manquant ».\n\nRègles pour la suite : ne remplis une rubrique qu’avec les notes ; laisse entre crochets tout ce qui manque ; ne modifie pas les clauses générales du modèle.\n\n<modele>\n[collez le modèle]\n</modele>\n\n<notes>\n[collez les notes d’entretien]\n</notes>',
    materiau: {
      titre: 'Modèle simplifié et notes d’entretien (fictifs)',
      texte:
        'MODÈLE DE LETTRE DE MISSION (extrait)\n1. Identification du client (forme juridique, RIDET, adresse, représentant)\n2. Nature de la mission (tenue, révision, comptes annuels, déclarations fiscales, social)\n3. Durée et date de début\n4. Répartition des tâches entre le client et le cabinet\n5. Honoraires et modalités de facturation\n6. Clauses générales (texte fixe du cabinet, non modifiable)\n\nNOTES D’ENTRETIEN DE L’EXPERT-COMPTABLE\nreprise snack « Le Banian » à Bourail, M. et Mme R., SARL en cours de création (statuts chez le notaire)\ndébut d’activité prévu le 1er du mois prochain\nils veulent : tenue compta (ils scannent les pièces chaque semaine), comptes annuels, déclarations TGC, liasse fiscale\nsocial : 2 salariés à temps partiel, la paie reste chez leur ancien prestataire pour l’instant\ncaisse : ticket Z quotidien, envoyé en photo\nhonoraires discutés : forfait mensuel 38 000 XPF, bilan en plus, montant à préciser\nils demandent si on peut les aider pour le prêt bancaire : je les rappelle',
    },
    variantes: {
      simple: 'S’arrêter à l’étape 1 : la liste des informations trouvées et manquantes.',
      poussee:
        'Créer une compétence (Claude) ou un Projet qui applique toujours le modèle du cabinet et la règle des crochets, puis le tester sur un deuxième entretien.',
    },
    astuces: {
      claude:
        'Demandez le projet de lettre en fichier Word : l’expert-comptable le relit avec le suivi des modifications.',
      copilot:
        'Dans Word, ouvrez le modèle du cabinet et demandez à Copilot de le compléter à partir des notes.',
    },
    vigilance:
      'Une lettre de mission est un contrat : l’IA prépare un projet, l’expert-comptable décide et signe. L’IA ne réécrit jamais les clauses générales du cabinet.',
    formateur: {
      resultat:
        'Un projet fidèle aux notes : tenue, comptes annuels, TGC et liasse fiscale, sans la paie ; le RIDET, l’adresse et le prix du bilan entre crochets ; les clauses générales intactes ; un e-mail qui liste les points à trancher (paie, aide au prêt).',
      criteres: [
        'Les informations manquantes sont listées avant la rédaction.',
        'Les missions correspondent aux notes : la paie n’est pas incluse.',
        'Le forfait de 38 000 XPF est repris ; le prix du bilan reste entre crochets.',
        'Les clauses générales ne sont pas modifiées.',
      ],
      pieges: [
        'Laisser l’IA inventer un numéro RIDET ou le prix du bilan.',
        'Ajouter la paie ou l’aide au prêt à la mission alors que rien n’est décidé.',
        'Accepter des clauses générales « améliorées » par l’IA.',
      ],
      competence: 'delegation',
      technique: 'decomposer',
    },
    motsCles: ['lettre de mission', 'nouveau client', 'honoraires', 'modèle', 'contrat'],
  },
  {
    id: 'compta-rapprochement-bancaire',
    titre: 'Rapprocher un relevé bancaire et le grand livre, et expliquer chaque écart',
    metier: 'comptabilite',
    niveau: 'avance',
    famille: 'analyser',
    duree: 45,
    outils: ['chatgpt', 'claude', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Dans le service comptable d’un négoce de matériaux à Ducos, le rapprochement bancaire de septembre ne tombe pas juste. Vous avez l’export du relevé de la banque et l’extrait du compte banque du grand livre. Vous devez trouver chaque écart, le justifier et proposer les corrections à votre responsable.',
    objectif:
      'Faire rapprocher deux listes par l’IA, contrôler son travail par un calcul indépendant et garder la décision comptable.',
    etapes: [
      'Étape 1 : donnez les deux listes et demandez un rapprochement ligne à ligne, avec un statut pour chaque ligne.',
      'Étape 2 : demandez le tableau de rapprochement (solde banque, solde comptable, écarts) et vérifiez que l’écart total est entièrement expliqué.',
      'Étape 3 : contrôlez vous-même : recalculez l’écart dans un tableur et pointez trois lignes au hasard.',
      'Étape 4 : demandez la nature probable de chaque écart et les écritures à proposer, en distinguant les erreurs à corriger des simples décalages.',
      'Étape 5 : demandez à l’IA de relire son travail et de lister ses doutes, puis transmettez le tout à votre responsable.',
    ],
    prompt:
      'Tu es comptable dans une entreprise de Nouméa. Je fais le rapprochement bancaire de septembre. Voici l’export du relevé bancaire et l’extrait du compte banque (512) du grand livre.\n\nÉtape 1 : rapproche les deux listes ligne à ligne, sur le montant d’abord, puis sur la date (quelques jours d’écart sont normaux) et le libellé. Présente un tableau avec un statut pour chaque ligne : « rapprochée », « seulement en banque », « seulement en comptabilité ». Ne force aucun rapprochement : si deux lignes se ressemblent sans correspondre exactement, signale-le.\n\nNe passe à l’étape 2 (tableau de rapprochement) que lorsque je te le demande.\n\n<releve_banque>\n[collez le relevé]\n</releve_banque>\n\n<grand_livre_512>\n[collez l’extrait du grand livre]\n</grand_livre_512>',
    materiau: {
      titre: 'Relevé bancaire et compte banque de septembre (fictifs)',
      texte:
        'Soldes au 31 août : 4 250 000 XPF en banque et en comptabilité (concordants).\nSolde du relevé au 30 septembre : 3 168 730 XPF. Solde comptable au 30 septembre : 4 230 900 XPF.\n\nRELEVÉ BANCAIRE\nDate;Libellé;Débit (XPF);Crédit (XPF)\n02/09;VIR CLIENT BATIMAX;;1 250 000\n03/09;PRLV CAFAT;612 400;\n05/09;CHQ 0004512;185 000;\n08/09;VIR CIMENTS DU PACIFIQUE;1 480 000;\n10/09;REMISE CB MAGASIN;;862 300\n12/09;VIR CLIENT KONE TERRASSEMENT;;540 000\n15/09;PRLV ELECTRICITE;238 900;\n18/09;CHQ 0004514;96 500;\n22/09;REMISE CB MAGASIN;;915 700\n25/09;VIR SALAIRES;2 340 000;\n28/09;FRAIS TENUE DE COMPTE;4 850;\n29/09;COMMISSIONS CB;18 620;\n30/09;VIR CLIENT DUMBEA PEINTURE;;327 000\n\nGRAND LIVRE, COMPTE 512\nDate;Libellé;Débit (XPF);Crédit (XPF)\n01/09;Règlement Batimax fact. 3381;1 250 000;\n02/09;CAFAT août;;612 400\n03/09;Chèque 4512 Transports du Nord;;185 000\n06/09;Ciments du Pacifique fact. 7782;;1 480 000\n10/09;Remise CB;862 300;\n12/09;Règlement Koné Terrassement;540 000;\n15/09;Électricité septembre;;238 900\n16/09;Chèque 4513 Quincaillerie de Rivière-Salée;;72 000\n18/09;Chèque 4514 Garage du Port;;96 500\n22/09;Remise CB;915 700;\n23/09;Remise CB;915 700;\n25/09;Salaires septembre;;2 340 000\n29/09;Règlement Dumbéa Peinture;372 000;\n30/09;Remise d’espèces;150 000;',
    },
    variantes: {
      simple:
        'Rapprocher seulement les encaissements et lister ceux qui ne figurent que d’un côté.',
      poussee:
        'Écrire une compétence (Claude) ou un Gem « rapprochement bancaire » avec votre méthode (ordre des critères, tolérance sur les dates, format du tableau), puis le tester sur le mois suivant.',
    },
    astuces: {
      chatgpt:
        'Déposez les deux listes en CSV : l’analyse de données rapproche en code, et vous pouvez télécharger les lignes non rapprochées.',
      claude:
        'Demandez le tableau de rapprochement en fichier Excel, avec les formules : vous vérifiez le calcul de l’écart.',
      copilot:
        'Dans Excel, mettez chaque liste sous forme de tableau, puis demandez à Copilot de repérer les montants sans correspondance.',
    },
    vigilance:
      'De vrais relevés contiennent des noms de clients, de salariés et des numéros de compte : anonymisez-les ou utilisez un outil validé par l’entreprise. Les écritures de correction sont décidées par le responsable, pas par l’IA.',
    formateur: {
      resultat:
        'Un rapprochement qui explique tout l’écart de 1 062 170 XPF : remise CB saisie deux fois (915 700), règlement Dumbéa Peinture saisi 372 000 au lieu de 327 000 (45 000), frais bancaires non comptabilisés (23 470), remise d’espèces en transit (150 000), et chèque 4513 non encaissé (72 000, en sens inverse).',
      criteres: [
        'L’écart total est entièrement expliqué, au franc près.',
        'Les erreurs à corriger (doublon, chiffres inversés, frais) sont distinguées des décalages normaux (chèque non encaissé, remise en transit).',
        'L’apprenant a recalculé l’écart avec un outil indépendant.',
        'Les écritures sont présentées comme des propositions à valider.',
      ],
      pieges: [
        'Accepter un rapprochement forcé entre 372 000 et 327 000 sans voir l’inversion de chiffres.',
        'Ne pas repérer le doublon de la remise CB, parce que chaque ligne paraît normale.',
        'Croire l’IA quand elle annonce que « tout est expliqué », sans refaire le total.',
      ],
      competence: 'discernement',
      technique: 'critique',
    },
    motsCles: ['rapprochement bancaire', 'grand livre', 'écart', 'clôture', 'contrôle'],
  },
  {
    id: 'compta-assistant-notes-de-frais',
    titre: 'Créer un assistant qui fait le premier contrôle des notes de frais',
    metier: 'comptabilite',
    niveau: 'avance',
    famille: 'automatiser',
    duree: 60,
    outils: ['claude', 'chatgpt', 'gemini', 'copilot'],
    outilConseille: 'claude',
    situation:
      'Une entreprise de services de Nouméa (40 salariés) vous confie le contrôle mensuel des notes de frais avant remboursement. La politique de frais tient en une page, mais les mêmes erreurs reviennent : doublons, dépassements, justificatifs manquants. Vous voulez un assistant qui fait le premier contrôle et prépare les questions.',
    objectif:
      'Écrire les instructions permanentes d’un assistant de contrôle, le tester sur un jeu de données et l’améliorer jusqu’à ce qu’il repère les anomalies sans en inventer.',
    etapes: [
      'Créez un Projet (Claude, ChatGPT), un Gem (Gemini) ou un agent (Copilot) et ajoutez-y la politique de frais du matériau.',
      'Collez le prompt de départ dans les instructions et complétez les crochets.',
      'Testez l’assistant avec le relevé d’octobre et comparez ses alertes à votre propre contrôle.',
      'Notez les anomalies oubliées et les fausses alertes, puis corrigez les instructions.',
      'Refaites le test jusqu’à obtenir un contrôle fiable, puis écrivez pour vos collègues ce que l’assistant fait et ne fait pas.',
    ],
    prompt:
      'Tu es l’assistant de contrôle des notes de frais du service comptable de [nom de l’entreprise], à Nouméa. Chaque mois, je te donne le relevé des notes de frais. Tu fais un premier contrôle, qu’un comptable vérifie ensuite.\n\nRègles :\n- Applique uniquement la politique de frais jointe. Pour chaque alerte, cite la règle concernée.\n- Cherche : dépassements de plafond, doublons (même salarié, même date, même montant), justificatifs manquants, dépenses hors politique, dates hors du mois contrôlé.\n- Ne conclus jamais à une fraude : décris le fait et propose une question à poser au salarié.\n- Si la politique ne permet pas de trancher, écris « à arbitrer par le responsable ».\n\nFormat : un tableau (ligne, salarié, anomalie, règle, question à poser), puis le total à rembourser sans les lignes en anomalie.',
    materiau: {
      titre: 'Politique de frais et relevé d’octobre (fictifs)',
      texte:
        'POLITIQUE DE FRAIS (extrait)\n1. Repas d’affaires : 4 500 XPF par personne au maximum, noms des invités obligatoires.\n2. Repas seul en déplacement hors du Grand Nouméa : 3 000 XPF au maximum.\n3. Hôtel en Brousse ou dans les îles : 15 000 XPF par nuit au maximum.\n4. Carburant : uniquement pour un véhicule personnel, avec le kilométrage du trajet.\n5. Justificatif obligatoire, sauf parking et péage de moins de 1 000 XPF.\n6. Pas d’alcool remboursé hors repas d’affaires.\n7. Les frais sont déclarés dans le mois où ils sont engagés.\n\nRELEVÉ DES NOTES DE FRAIS D’OCTOBRE\nLigne;Salarié;Date;Nature;Lieu;Montant (XPF);Justificatif;Commentaire\n1;S01;03/10;Repas d’affaires (3 personnes);Nouméa;12 900;Oui;client Batimax, invités nommés\n2;S01;03/10;Repas d’affaires (3 personnes);Nouméa;12 900;Oui;\n3;S02;07/10;Hôtel 2 nuits;Koné;34 000;Oui;mission chantier\n4;S02;07/10;Repas seul;Koné;2 850;Oui;\n5;S02;08/10;Repas seul;Koné;3 600;Oui;\n6;S03;10/10;Carburant;Païta;8 200;Oui;véhicule de société\n7;S03;10/10;Parking;Nouméa;600;Non;\n8;S04;14/10;Repas d’affaires (2 personnes);Nouméa;11 500;Oui;invités non précisés\n9;S04;15/10;Taxi;Nouméa;2 400;Non;\n10;S05;21/09;Repas seul;Bourail;2 700;Oui;\n11;S05;22/10;Hôtel 1 nuit;Lifou;14 500;Oui;\n12;S05;22/10;Bar de l’hôtel;Lifou;3 200;Oui;boissons\n13;S06;28/10;Fournitures de bureau;Nouméa;5 900;Oui;\n14;S06;29/10;Péage;Païta;360;Non;',
    },
    variantes: {
      simple:
        'Sans créer d’assistant, coller la politique et le relevé dans une conversation, puis comparer le contrôle de l’IA au vôtre.',
      poussee:
        'Ajouter deux exemples d’alertes bien rédigées dans les instructions, puis faire tester l’assistant par un collègue sur un relevé où il a caché des erreurs.',
    },
    astuces: {
      claude:
        'Dans un Projet, déposez la politique de frais dans les connaissances et collez les règles dans les instructions.',
      chatgpt:
        'Un Projet suffit pour vous ; un GPT (création payante) permet de partager l’assistant avec le service.',
      gemini:
        'Créez un Gem, collez les règles dans ses instructions et ajoutez la politique de frais comme fichier.',
      copilot:
        'Créez un agent avec la politique de frais comme source : il reste dans l’environnement Microsoft 365 de l’entreprise.',
    },
    vigilance:
      'Les notes de frais sont des données personnelles : codez les salariés (S01, S02…) et utilisez un outil validé par l’entreprise. L’assistant signale, il ne sanctionne pas : chaque alerte est vérifiée puis discutée avec le salarié.',
    formateur: {
      resultat:
        'Un assistant qui repère le doublon probable (ligne 2), les dépassements (lignes 3, 5 et 8), le carburant d’un véhicule de société (ligne 6), le taxi sans justificatif (ligne 9) et la date hors du mois (ligne 10), qui renvoie les lignes 12 et 13 à l’arbitrage, sans accuser personne.',
      criteres: [
        'Les instructions citent la politique et disent quoi faire quand une règle ne tranche pas.',
        'L’assistant trouve au moins six des sept anomalies nettes du relevé.',
        'Aucune fausse alerte sur les lignes 7 et 14 (parking et péage de moins de 1 000 XPF).',
        'L’apprenant a modifié les instructions après le premier test.',
      ],
      pieges: [
        'Accepter une alerte « alcool » sur la ligne 12, alors que la nature des boissons n’est pas connue.',
        'Laisser l’assistant qualifier le doublon de fraude.',
        'Charger de vraies notes de frais nominatives dans un outil non validé.',
      ],
      competence: 'delegation',
      technique: 'instructions',
    },
    motsCles: ['notes de frais', 'contrôle', 'assistant', 'politique de frais', 'anomalies'],
  },
  {
    id: 'compta-veille-fiscale-sociale',
    titre: 'Programmer une veille fiscale et sociale calédonienne, sourcée et vérifiée',
    metier: 'comptabilite',
    niveau: 'avance',
    famille: 'veiller',
    duree: 45,
    outils: ['chatgpt', 'gemini', 'claude', 'notebook'],
    outilConseille: 'chatgpt',
    situation:
      'Le cabinet veut envoyer chaque mois à ses clients une courte lettre d’information sur l’actualité fiscale et sociale en Nouvelle-Calédonie. Personne n’a le temps de surveiller les sources. Vous mettez en place une veille automatique, dont chaque information sera vérifiée avant diffusion.',
    objectif:
      'Concevoir une veille récurrente centrée sur les sources officielles, et organiser la vérification humaine avant toute diffusion.',
    etapes: [
      'Faites lister par l’IA les sources officielles à surveiller (DSF, CAFAT, gouvernement, Journal officiel, Congrès), et vérifiez vous-même chaque adresse.',
      'Lancez une première recherche approfondie avec le prompt de départ et ouvrez chaque source citée.',
      'Remplissez la grille de tri du matériau : confirmée, à vérifier ou non retrouvée. Supprimez les informations non retrouvées.',
      'Programmez la relance mensuelle : « Programmer des actions » dans Gemini, ou une tâche planifiée dans ChatGPT ou Claude, selon votre offre.',
      'Chargez les textes officiels retrouvés dans un carnet Gemini Notebook, que le cabinet pourra interroger, citations à l’appui.',
      'Écrivez la procédure de validation : qui vérifie, qui signe la lettre aux clients.',
    ],
    prompt:
      'Tu es chargé de veille dans un cabinet d’expertise comptable à Nouméa. Recherche les nouveautés fiscales et sociales de Nouvelle-Calédonie publiées au cours du dernier mois : impôts et taxes (dont la TGC), cotisations CAFAT, obligations déclaratives, aides aux entreprises.\n\nRègles :\n- Appuie-toi en priorité sur les sources officielles (DSF, CAFAT, gouvernement de la Nouvelle-Calédonie, Journal officiel de la Nouvelle-Calédonie, Congrès). La presse peut signaler un sujet, mais ne suffit pas comme seule source.\n- Pour chaque information : de quoi il s’agit, qui est concerné, date d’entrée en vigueur si elle est indiquée, lien vers la source, date de publication.\n- Ne déduis aucun taux, seuil ou délai qui n’est pas écrit dans la source. Si tu n’es pas sûr qu’un texte concerne la Nouvelle-Calédonie, dis-le.\n- Si tu ne trouves rien de nouveau, dis-le simplement.',
    materiau: {
      titre: 'Grille de tri des informations de veille',
      texte:
        'Information;Source officielle (lien);Date de publication;Concerne la Nouvelle-Calédonie (oui, non, doute);Statut (confirmée, à vérifier, non retrouvée);Clients concernés;Vérifié par\n\nPièges à guetter :\n- une mesure de métropole présentée comme locale ;\n- un projet de texte présenté comme adopté ;\n- un taux cité sans source ;\n- un article ancien remonté par la recherche.',
    },
    variantes: {
      simple:
        'Faire une seule recherche web sur les nouveautés de la CAFAT du mois et vérifier chaque source.',
      poussee:
        'Partager le carnet Gemini Notebook avec les collaborateurs et y générer chaque mois la FAQ de la lettre aux clients, relue avant envoi.',
    },
    astuces: {
      chatgpt:
        'La recherche approfondie rend un rapport sourcé ; une tâche planifiée (payante) peut la relancer chaque mois.',
      gemini:
        'Lancez Deep Research, exportez le rapport dans Google Docs pour l’annoter, puis programmez la relance avec « Programmer des actions ».',
      claude:
        'Activez la recherche web et demandez le lien de chaque information ; la Recherche, payante, va plus loin.',
      notebook:
        'Ne chargez que des textes officiels vérifiés : les réponses du carnet s’appuient uniquement sur eux, avec la citation du passage.',
    },
    vigilance:
      'Une information fiscale fausse envoyée aux clients engage le cabinet. Rien ne part sans vérification sur la source officielle par un collaborateur, puis validation par l’expert-comptable. Les règles de métropole sont omniprésentes sur le web : méfiez-vous-en.',
    formateur: {
      resultat:
        'Une veille centrée sur les sources officielles, une grille de tri remplie honnêtement (les informations non retrouvées supprimées), une relance mensuelle programmée et une procédure de validation écrite.',
      criteres: [
        'Chaque information retenue renvoie à une source officielle ouverte par l’apprenant.',
        'Les mesures de métropole et les projets non adoptés sont écartés ou signalés.',
        'La relance mensuelle est configurée ou décrite précisément.',
        'La procédure de validation dit qui vérifie et qui signe.',
      ],
      pieges: [
        'Reprendre un taux ou une date cités par l’IA sans les retrouver dans le texte officiel.',
        'Confondre la CAFAT et l’URSSAF, ou la TGC et la TVA, dans des contenus de métropole.',
        'Diffuser les résultats de la veille programmée sans relecture.',
      ],
      competence: 'diligence',
      technique: 'sources',
    },
    motsCles: ['veille', 'fiscalité', 'social', 'CAFAT', 'DSF', 'tâche planifiée'],
  },
  {
    id: 'compta-carnet-procedures',
    titre: 'Interroger les procédures du cabinet avec Gemini Notebook',
    metier: 'comptabilite',
    niveau: 'avance',
    famille: 'synthetiser',
    duree: 45,
    outils: ['notebook', 'claude', 'chatgpt'],
    outilConseille: 'notebook',
    situation:
      'Le cabinet accueille deux nouveaux collaborateurs juste avant la période des bilans. Les procédures internes, les modèles et les notes techniques sont éparpillés dans une dizaine de documents. Vous voulez un carnet de questions-réponses fiable, où chaque réponse renvoie au document d’origine.',
    objectif:
      'Exploiter un corpus avec un outil qui cite ses sources, et en tester les limites : questions hors corpus, documents contradictoires.',
    etapes: [
      'Rassemblez 5 à 10 documents internes sans données de clients : procédures, check-lists, modèles, notes techniques. À défaut, faites rédiger par l’IA trois procédures fictives.',
      'Créez un carnet dans Gemini Notebook et ajoutez ces documents comme sources.',
      'Posez les questions de test du matériau avec le prompt de départ, et ouvrez chaque citation pour vérifier le passage.',
      'Notez les réponses fausses, incomplètes, ou qui sortent des documents.',
      'Générez une FAQ ou un guide d’étude pour les nouveaux collaborateurs, et relisez-le.',
      'Signalez au responsable les contradictions et les manques trouvés dans les procédures.',
    ],
    prompt:
      'Réponds uniquement à partir des sources de ce carnet. Pour chaque réponse, cite le document et le passage utilisés. Si la réponse n’est pas dans les sources, écris « Pas dans les documents du cabinet : demander à [nom du référent] ». Si deux documents se contredisent, montre les deux passages et ne choisis pas.\n\nQuestion : [posez votre question]',
    materiau: {
      titre: 'Questions de test pour le carnet',
      texte:
        '1. Quelles pièces demander à un client pour préparer son bilan ?\n2. Qui valide une écriture de correction de plus de 500 000 XPF ?\n3. Dans quel ordre fait-on la révision des comptes clients et fournisseurs ?\n4. Comment nomme-t-on les fichiers dans le dossier permanent d’un client ?\n5. Quel taux de TGC s’applique à la restauration ? (question hors corpus : le carnet doit le dire)\n6. Au bout de combien de jours relance-t-on un client qui n’a pas envoyé ses pièces ? (comparez les documents : les délais diffèrent-ils ?)\n7. Peut-on envoyer un bilan par e-mail sans protection ?',
    },
    variantes: {
      simple:
        'Charger seulement deux documents et poser trois questions, en vérifiant chaque citation.',
      poussee:
        'Générer un résumé audio du carnet pour les nouveaux collaborateurs, puis un quiz (Fiches et quiz) pour vérifier ce qu’ils ont retenu.',
    },
    astuces: {
      notebook:
        'Cliquez sur chaque citation numérotée : elle ouvre le passage exact du document, la vérification prend quelques secondes.',
      claude:
        'Sans Gemini Notebook, un Projet Claude avec les mêmes documents permet le même test ; demandez de citer le passage utilisé.',
      chatgpt:
        'Un Projet ChatGPT avec les documents permet le même test ; mettez la consigne de citer les sources dans ses instructions.',
    },
    vigilance:
      'Aucun dossier client dans le carnet : uniquement des documents internes sans données personnelles. Le carnet répond à partir de documents qui peuvent être anciens ; il ne remplace pas un collaborateur expérimenté.',
    formateur: {
      resultat:
        'Un carnet qui répond aux questions couvertes en citant le bon passage, qui répond « pas dans les documents » à la question sur la TGC, et une liste de contradictions ou de manques à corriger dans les procédures.',
      criteres: [
        'Chaque réponse retenue a été vérifiée en ouvrant sa citation.',
        'La question hors corpus reçoit une réponse « pas dans les documents ».',
        'Au moins une contradiction ou un manque dans les procédures est relevé.',
        'Le corpus ne contient aucune donnée client.',
      ],
      pieges: [
        'Se fier à une réponse bien tournée sans ouvrir la citation.',
        'Charger un vrai dossier client « pour que ce soit plus réaliste ».',
        'Croire que le carnet sait si un document est à jour : il ne le sait pas.',
      ],
      competence: 'discernement',
      technique: 'sources',
    },
    motsCles: ['Gemini Notebook', 'procédures', 'corpus', 'intégration', 'FAQ', 'sources'],
  },
];
