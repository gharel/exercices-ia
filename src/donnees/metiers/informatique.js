/**
 * Informatique et support : assistance aux utilisateurs, postes et imprimantes, comptes et droits,
 * sauvegardes, procédures, sensibilisation à la sécurité. Fonction exercée dans tous les secteurs
 * (PME, mairie, clinique, hôtel, établissement scolaire…). Pas un métier de développeur.
 * Toutes les personnes, entreprises, adresses, prestataires, produits et sommes sont fictifs.
 */

export const vocabulaire = {
  structure: { g: 'm', s: 'service informatique', p: 'services informatiques' },
  client: { g: 'm', s: 'utilisateur', p: 'utilisateurs' },
  partenaire: { g: 'm', s: 'prestataire informatique', p: 'prestataires informatiques' },
  documentCourant: {
    g: 'm',
    s: 'compte rendu d’intervention',
    p: 'comptes rendus d’intervention',
  },
  documentLong: { g: 'f', s: 'charte informatique', p: 'chartes informatiques' },
  reunion: {
    g: 'f',
    s: 'réunion du comité de pilotage informatique',
    p: 'réunions du comité de pilotage informatique',
  },
  offre: {
    g: 'f',
    s: 'permanence d’aide informatique du jeudi midi',
    p: 'permanences d’aide informatique du jeudi midi',
  },
  poste: { g: 'm', s: 'technicien de support', p: 'techniciens de support' },
  evenement: {
    g: 'f',
    s: 'journée de sensibilisation à la cybersécurité',
    p: 'journées de sensibilisation à la cybersécurité',
  },
  visuel: { g: 'f', s: 'affiche d’information interne', p: 'affiches d’information interne' },
  domaine: 'l’informatique et le support aux utilisateurs',
  motifReclamation: 'une imprimante en panne depuis trois jours et un ticket resté sans réponse',
  donnees: 'l’export des tickets de support des trois derniers mois',
  colonnes:
    'Numéro de ticket;Date;Service;Catégorie;Priorité (normale ou haute);Temps de résolution (heures)',
  indicateur: 'la part des tickets résolus en moins de quatre heures',
  veille:
    'les nouveautés et les changements de conditions des logiciels et services en ligne utilisés par l’entreprise',
  sourcesVeille:
    'les annonces officielles des éditeurs, les notes de version des logiciels et la presse informatique spécialisée',
  jargon: 'les notions de sauvegarde, de pare-feu et de double authentification',
  procedure: 'le signalement d’un message suspect reçu par e-mail',
  situationTendue:
    'un utilisateur pressé dont le poste est en panne la veille d’une échéance importante',
  donneesSensibles:
    'les mots de passe, les noms de comptes, les adresses IP et les journaux d’activité des utilisateurs',
  corpus:
    'les procédures internes, les fiches de dépannage et la documentation des logiciels de l’entreprise',
  publicCible: 'l’ensemble du personnel, de l’accueil à la direction',
  etranger: 'un technicien d’un éditeur de logiciels basé à Sydney',
  themeFormation: 'les gestes de base de la sécurité informatique au quotidien',
  tacheRepetitive: 'la réponse aux demandes de réinitialisation de mot de passe',
  planning: 'les interventions de maintenance de la semaine de deux techniciens',
  comparaison: 'deux contrats de maintenance des copieurs multifonctions',
};

export const exercices = [
  {
    id: 'info-expliquer-panne',
    titre: 'Expliquer une panne à un utilisateur sans jargon',
    metier: 'informatique',
    niveau: 'debutant',
    famille: 'corriger',
    duree: 15,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'copilot',
    situation:
      'Vous êtes référent informatique de la mairie de Bourail. Le poste de Mme Waneissi, comptable, est resté en réparation toute la matinée. Vous avez noté la cause et ce qui a été fait dans le ticket, mais en langage de technicien. Elle attend un e-mail qu’elle comprenne, avant de reprendre son travail.',
    objectif:
      'Transformer une note technique en message clair pour une personne qui n’est pas informaticienne, sans cacher ce qui a été perdu.',
    etapes: [
      'Lisez la note technique du matériau et soulignez ce qui concerne vraiment Mme Waneissi : ce qu’elle doit refaire, ce qu’elle risque d’avoir perdu, le moment où elle récupère son poste.',
      'Collez la note dans votre outil d’IA avec le prompt de départ, en complétant le prénom et le nom.',
      'Relisez l’e-mail obtenu en cherchant chaque terme technique (profil, cache, synchronisation) : il doit être absent ou expliqué en une phrase.',
      'Vérifiez que la cause est la bonne (une mise à jour, pas un virus ni un piratage) et que la perte éventuelle est annoncée honnêtement.',
      'Faites lire l’e-mail à un collègue qui n’est pas informaticien : comprend-il ce qu’il doit faire ?',
    ],
    prompt:
      'Tu es technicien de support dans une mairie de Nouvelle-Calédonie. Réécris la note technique ci-dessous en e-mail pour [prénom et nom], comptable, qui n’est pas informaticienne et attend de reprendre son travail. L’e-mail dit : ce qui s’est passé, ce qui a été fait, ce qu’elle doit refaire, ce qu’elle risque d’avoir perdu et quand le poste lui est rendu. Pas de jargon : si un terme technique est indispensable, explique-le en une phrase. Ton rassurant, 150 mots au maximum, sans minimiser la perte éventuelle.\n\nN’ajoute aucune information absente de la note. Si un point te semble manquer, signale-le après l’e-mail.\n\n<note>\n[collez la note technique ici]\n</note>',
    materiau: {
      titre: 'Note technique du ticket 3417',
      texte:
        'TICKET 3417 – poste COMPTA-04 (mairie de Bourail)\nSymptôme : Outlook se ferme au lancement depuis lundi, erreur « profil introuvable ».\nCause : profil Outlook corrompu après la mise à jour de samedi ; le fichier OST (cache local) est illisible. Le compte sur le serveur n’est pas touché. Pas de virus, pas de piratage.\nAction : suppression du profil, recréation, resynchronisation de la boîte (environ 2 h pour 6 Go). Ne pas éteindre le poste pendant la synchro.\nReste à faire côté utilisateur : règles de tri et signature perdues, à refaire. Le dossier « Brouillons » local est vide.\nRisque : les brouillons enregistrés uniquement en local sont perdus.\nRetour du poste : mercredi 14 h, sur son bureau.',
    },
    variantes: {
      simple: 'Demander seulement trois phrases : ce qui s’est passé, ce qu’elle fait, quand.',
      poussee:
        'Faire écrire aussi la version pour le directeur général des services (cinq lignes, impact sur le travail) et une fiche de trois conseils pour éviter que cela se reproduise.',
    },
    astuces: {
      copilot:
        'Dans Outlook, partez d’un « Brouillon avec Copilot », puis lancez « Coaching par Copilot » : il commente le ton et la clarté avant l’envoi.',
      gemini:
        'Dans Gmail, « Aide-moi à écrire » reformule votre note ; précisez le lecteur (comptable, non informaticienne).',
    },
    vigilance:
      'N’envoyez à l’IA ni le nom réel du poste, ni les identifiants, ni les adresses réseau : remplacez-les par des [crochets]. Relisez toujours : une IA a tendance à rassurer en promettant que « rien n’est perdu ».',
    formateur: {
      resultat:
        'Un e-mail d’environ 150 mots qui dit sans jargon que le programme de messagerie a été réparé après une mise à jour, que la signature et les règles de tri sont à refaire, que les brouillons enregistrés seulement sur le poste sont perdus et que le poste revient mercredi à 14 h.',
      criteres: [
        'Aucun terme technique non expliqué (profil, OST, synchronisation).',
        'La perte des brouillons locaux et des règles de tri est annoncée clairement.',
        'La cause n’est ni un virus ni un piratage, comme dans la note.',
        'L’heure de retour du poste est exacte.',
      ],
      pieges: [
        'Un e-mail qui promet que rien n’est perdu, alors que la note dit le contraire.',
        'Laisser l’IA ajouter une cause (piratage, usure du poste) ou un conseil technique absent de la note.',
      ],
      competence: 'description',
      technique: 'contexte',
    },
    motsCles: ['panne', 'utilisateur', 'langage clair', 'ticket', 'Outlook'],
  },
  {
    id: 'info-imprimante-reseau',
    titre: 'Rédiger le pas-à-pas d’installation d’une imprimante réseau',
    metier: 'informatique',
    niveau: 'debutant',
    famille: 'rediger',
    duree: 20,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Dans une PME de Païta, chaque nouveau salarié vous appelle pour installer l’imprimante du couloir. Vous la connaissez par cœur mais rien n’est écrit. Vous voulez un pas-à-pas affichable à côté de l’imprimante et envoyable par e-mail.',
    objectif:
      'Faire rédiger une procédure courte et exacte à partir de notes en vrac, puis la tester sur un poste avant de la diffuser.',
    etapes: [
      'Lisez vos notes du matériau et repérez ce qui manque pour un débutant (par exemple, quoi faire si l’imprimante n’apparaît pas).',
      'Collez les notes dans votre outil d’IA avec le prompt de départ.',
      'Comparez chaque étape avec vos notes : les menus, le nom de l’imprimante et le poste à appeler doivent être identiques.',
      'Faites tester la procédure sur un poste par un collègue, sans votre aide, et notez où il hésite.',
      'Demandez à l’IA de corriger les étapes qui ont fait hésiter, puis imprimez la version finale.',
    ],
    prompt:
      'Tu es technicien de support dans une PME de Païta. À partir de mes notes ci-dessous, rédige un pas-à-pas d’installation de l’imprimante réseau pour des collègues qui ne sont pas informaticiens. Il sera affiché à côté de l’imprimante et envoyé par e-mail.\n\nFormat : un titre, la durée estimée, six étapes numérotées d’une phrase chacune (le nom exact des menus entre guillemets), puis « Si ça ne marche pas » en trois lignes.\n\nN’ajoute aucune étape absente de mes notes. Si une information manque, écris [à compléter]. N’invente ni adresse réseau ni numéro de poste.\n\n<notes>\n[collez les notes ici]\n</notes>',
    materiau: {
      titre: 'Notes en vrac sur l’imprimante du couloir',
      texte:
        'imprimante couloir RDC (copieur couleur A3/A4), nom réseau : IMP-RDC-01\nWindows 11 : Paramètres > Bluetooth et appareils > Imprimantes et scanners > Ajouter un appareil ; si elle n’apparaît pas : « Ajouter manuellement » puis choisir le nom IMP-RDC-01\nle pilote s’installe seul depuis le serveur, ne pas en télécharger un autre !!\npremière impression : imprimer une page de test ; réglages par défaut = recto verso et noir et blanc\ncouleur : code personnel à demander à Karine (compta), ne jamais le noter sur le copieur\nA3 : bac 3, remettre du A4 après usage\nbourrage ou panne : ne pas forcer, appeler le poste 214\nles 2 Mac du pôle communication : autre procédure, voir Teva',
    },
    variantes: {
      simple: 'Ne rédiger que les quatre premières étapes, sans le bloc « Si ça ne marche pas ».',
      poussee:
        'Faire produire aussi une version pour les Mac, à valider avec Teva, et une version en gros caractères, prête à imprimer, pour l’affichage.',
    },
    astuces: {
      chatgpt:
        'Ouvrez la procédure dans le canevas : vous retouchez une étape sans tout régénérer.',
      copilot:
        'Dans Word, Copilot (selon la licence) met la procédure en page dans votre modèle de document interne ; vérifiez chaque nom de menu.',
      claude:
        'La création de fichiers produit un PDF prêt à imprimer ; testez-le d’abord sur un poste.',
    },
    vigilance:
      'N’écrivez pas dans le prompt l’adresse réseau réelle de l’imprimante ni le code de la couleur. Les noms de menus changent selon la version de Windows : seul un test sur un poste confirme la procédure.',
    formateur: {
      resultat:
        'Une fiche d’une page avec six étapes fidèles aux notes (menu, nom IMP-RDC-01, page de test, couleur sur demande, poste 214), sans adresse inventée et avec [à compléter] là où une information manque.',
      criteres: [
        'Le nom de l’imprimante et le poste 214 sont identiques aux notes.',
        'Aucune étape ni adresse n’a été inventée ; les manques sont entre crochets.',
        'La procédure a été testée par un collègue sur un poste et corrigée.',
      ],
      pieges: [
        'Une étape qui demande de télécharger un pilote, contraire à la note.',
        'Un menu d’une autre version de Windows, plausible mais faux.',
        'Écrire le code d’impression couleur dans la fiche affichée.',
      ],
      competence: 'discernement',
      technique: 'critique',
    },
    motsCles: ['imprimante', 'procédure', 'pas-à-pas', 'installation', 'support'],
  },
  {
    id: 'info-passation-tickets',
    titre: 'Résumer un long fil de tickets pour passer la main à un collègue',
    metier: 'informatique',
    niveau: 'debutant',
    famille: 'synthetiser',
    duree: 20,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Technicien de support pour un hôtel de Bourail, vous partez en congés demain. Marie reprend votre ticket sur le Wi-Fi de l’accueil, dont le fil compte déjà neuf messages. Elle n’a pas le temps de tout relire : elle a besoin d’un point clair ce soir.',
    objectif:
      'Obtenir un résumé de passation fiable, qui distingue ce qui est établi, ce qui a été écarté et ce qui reste à faire.',
    etapes: [
      'Lisez le fil du matériau et notez, de tête, l’état du dossier en trois lignes.',
      'Collez le fil dans votre outil d’IA avec le prompt de départ.',
      'Comparez le résumé avec vos trois lignes : la cause écartée, le coût du devis et le blocage sont-ils bien là ?',
      'Vérifiez que chaque « à faire » a un responsable et que l’IA n’a inventé aucune date.',
      'Faites ajouter les deux questions que Marie devra poser à la direction, puis envoyez le résumé.',
    ],
    prompt:
      'Tu es technicien de support dans un hôtel de Bourail. Je pars en congés et Marie reprend le ticket ci-dessous. Résume le fil pour elle, en 12 lignes au maximum :\n1. l’état actuel du problème ;\n2. ce qui a été essayé, avec le résultat de chaque essai (indique clairement les pistes écartées) ;\n3. ce qui reste à faire, avec qui et pour quand ;\n4. les points de vigilance.\nDistingue les faits des hypothèses. N’invente aucune date ni aucun montant : si une information manque, écris « non précisé ».\n\n<fil>\n[collez le fil de tickets ici]\n</fil>',
    materiau: {
      titre: 'Fil du ticket 2891 – Wi-Fi instable à l’accueil (hôtel Le Banian, Bourail)',
      texte:
        '[Lun. 5/10, 8 h 40 – Réception] La borne Wi-Fi de l’accueil coupe toutes les 10 minutes environ. Les clients se plaignent.\n[Lun. 5/10, 9 h 15 – Teva] Redémarrage de la borne : OK pendant 1 h, puis la coupure revient. Je pense au câble.\n[Mar. 6/10, 10 h – Teva] Câble réseau remplacé par un neuf. Les coupures continuent l’après-midi. Le câble n’était donc pas la cause.\n[Mer. 7/10, 14 h – Teva] Plus de coupures le matin ; elles reviennent quand l’hôtel est plein (soirée). Je soupçonne trop d’appareils connectés. J’interroge le prestataire Netaxis NC sur la capacité de la borne.\n[Jeu. 8/10, 9 h – Netaxis NC] La borne est un modèle d’entrée de gamme, prévue pour 25 appareils. Ils proposent d’en installer deux. Devis à suivre.\n[Jeu. 8/10, 16 h – Direction, M. Pouyé] Le devis doit être validé par moi ; je ne veux pas dépasser 150 000 XPF.\n[Ven. 9/10, 11 h – Teva] Devis reçu : 2 bornes + pose = 172 000 XPF. À envoyer à la direction. En attendant, j’ai limité le débit par appareil, ça aide un peu.\n[Lun. 12/10, 8 h – Réception] Toujours des plaintes ce week-end, 2 clients mécontents.\n[Lun. 12/10, 9 h – Teva] Je pars en congés demain, retour le lundi 2/11. Passation à Marie. Je n’ai pas encore transmis le devis à la direction.',
    },
    variantes: {
      simple: 'Demander seulement trois lignes : état, prochaine action, blocage.',
      poussee:
        'Faire produire en plus l’e-mail à la direction qui présente le devis, le dépassement de budget et deux options (valider, ou ne remplacer qu’une borne).',
    },
    astuces: {
      claude:
        'Joignez le fil en fichier et demandez de citer le message d’où vient chaque information : vous vérifiez en un coup d’œil.',
      copilot:
        'Dans Outlook, « Résumer » condense un fil de messages ; comparez-le avec votre propre résumé avant de transmettre.',
      chatgpt:
        'Précisez la longueur et le lecteur (collègue qui reprend le dossier) : le résumé gagne en précision.',
    },
    vigilance:
      'Un fil de tickets contient souvent des noms de personnes, des adresses réseau et des mots de passe de borne : retirez-les avant de coller. Vérifiez toujours le résumé, surtout les pistes écartées.',
    formateur: {
      resultat:
        'Un résumé de moins de 12 lignes : câble écarté, cause probable (capacité de la borne, 25 appareils), devis de 172 000 XPF au-dessus des 150 000 XPF fixés, devis à transmettre à la direction, plaintes du week-end, aucune date inventée.',
      criteres: [
        'Le câble figure comme piste écartée, pas comme cause.',
        'Le dépassement de budget (172 000 contre 150 000 XPF) est signalé.',
        'Le devis non transmis à la direction est la première action à faire.',
        'Les faits sont distingués des hypothèses.',
      ],
      pieges: [
        'Un résumé qui retient la première hypothèse (le câble) sans voir qu’elle a été écartée.',
        'Inventer une date de remplacement des bornes ou un accord de la direction.',
      ],
      competence: 'description',
      technique: 'format',
    },
    motsCles: ['ticket', 'passation', 'résumé', 'Wi-Fi', 'support'],
  },
  {
    id: 'info-affiche-mots-de-passe',
    titre: 'Créer dans Canva l’affiche des bons réflexes pour les mots de passe',
    metier: 'informatique',
    niveau: 'debutant',
    famille: 'visuels',
    duree: 20,
    outils: ['canva', 'claude', 'chatgpt'],
    outilConseille: 'canva',
    situation:
      'Responsable informatique d’une clinique de Dumbéa, vous constatez que des mots de passe sont encore collés sous les claviers. La direction accepte une affiche à poser dans les salles de soins et à l’accueil, qui rappelle les bons réflexes en un coup d’œil.',
    objectif:
      'Créer une affiche lisible à partir de règles de la charte, en limitant le texte et en vérifiant ce que l’IA a écrit dessus.',
    etapes: [
      'Lisez les six règles du matériau, choisissez les cinq plus utiles au personnel et raccourcissez chacune à une phrase de 12 mots au maximum.',
      'Ouvrez Canva et collez le prompt de départ dans l’IA Canva, avec vos cinq règles raccourcies.',
      'Choisissez une proposition de design et retouchez-la : titre lisible de loin, une icône par règle, contact en bas.',
      'Relisez chaque mot de l’affiche : orthographe, poste de contact, absence de tout exemple de mot de passe.',
      'Imprimez-la en A3 et regardez-la à deux mètres (en A4, placez-vous à un mètre) : tout se lit-il ?',
    ],
    prompt:
      'Crée une affiche A3 en portrait, destinée au personnel d’une clinique de Dumbéa (soignants, accueil, administration), qui rappelle les bons réflexes pour les mots de passe. Style sobre et rassurant, couleurs bleu et vert, beaucoup d’espace.\n\nContenu :\n- un titre court : « Mon mot de passe, mes bons réflexes » ;\n- cinq règles, chacune avec une icône simple ;\n- en bas : « Un doute ? Appelez le poste 200 ».\n\nTexte exact des cinq règles, à reprendre sans le modifier :\n[collez vos cinq règles raccourcies]\n\nPas de photo de personnes, aucun exemple de mot de passe, aucune marque d’éditeur.',
    materiau: {
      titre: 'Extrait de la charte informatique de la clinique (fictive, à adapter)',
      texte:
        '- Un mot de passe long vaut mieux qu’un mot de passe compliqué : une phrase de plusieurs mots, facile à retenir.\n- Un mot de passe différent pour chaque service important (messagerie, banque, logiciel de gestion).\n- On ne communique jamais son mot de passe, pas même au service informatique : il ne le demande jamais.\n- On active la double authentification dès qu’elle existe.\n- Un message qui demande vos identifiants vous semble louche : on ne clique pas, on appelle le poste 200.\n- Un gestionnaire de mots de passe validé par la clinique range ceux qu’on ne retient pas.',
    },
    variantes: {
      simple: 'Ne garder que trois règles et un titre sur un format A4.',
      poussee:
        'Décliner l’affiche en publication pour l’intranet et en écran d’accueil des postes, avec le redimensionnement magique (Pro), et ajouter une version avec les couleurs de la clinique via le Kit de marque (Pro).',
    },
    astuces: {
      canva:
        'Décrivez le format, le public et le message dans l’IA Canva, puis retouchez le texte avec l’écriture magique si une règle déborde.',
      claude:
        'Demandez d’abord les cinq règles raccourcies sous forme d’artefact, puis reprenez-les dans Canva.',
      chatgpt:
        'Si vous passez par la création d’images, le texte écrit dans l’image est souvent faux : composez plutôt l’affiche dans Canva avec votre texte exact.',
    },
    vigilance:
      'Aucun vrai mot de passe, même « donné pour l’exemple », ne doit figurer sur l’affiche ou dans le prompt. Les règles de la charte sont à vérifier avec votre direction avant affichage.',
    formateur: {
      resultat:
        'Une affiche A3 lisible à deux mètres, avec un titre, cinq règles courtes accompagnées d’une icône et le poste de contact, sans faute et sans exemple de mot de passe.',
      criteres: [
        'Les cinq règles reprennent celles de la charte, raccourcies sans en changer le sens.',
        'Le texte est exact : aucune faute, poste 200 correct.',
        'Aucun exemple de mot de passe ne figure sur l’affiche.',
        'L’affiche se lit à deux mètres : peu de texte, grands caractères.',
      ],
      pieges: [
        'Garder un texte généré en anglais ou une règle reformulée avec un sens différent.',
        'Afficher un « exemple » de mot de passe qui deviendra le mot de passe de tout le monde.',
        'Surcharger l’affiche avec les six règles de la charte en petits caractères.',
      ],
      competence: 'delegation',
      technique: 'options',
    },
    motsCles: ['affiche', 'Canva', 'mots de passe', 'sensibilisation', 'sécurité'],
  },
  {
    id: 'info-tickets-du-mois',
    titre: 'Classer les tickets du mois par cause et proposer trois actions',
    metier: 'informatique',
    niveau: 'intermediaire',
    famille: 'analyser',
    duree: 30,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Vous gérez le support informatique de la mairie de Dumbéa. Le maire adjoint vous demande un point sur le mois d’octobre : pourquoi le service est-il submergé, et que faire pour réduire la charge ? Vous disposez de l’export des tickets du mois.',
    objectif:
      'Faire analyser un export de tickets, nettoyer les catégories, vérifier les calculs et obtenir trois actions reliées à des chiffres.',
    etapes: [
      'Copiez le tableau du matériau, ou enregistrez-le en CSV et joignez-le.',
      'Envoyez le prompt de départ et lisez d’abord ce que l’IA a modifié dans les catégories.',
      'Vérifiez à la main le nombre de tickets et le temps total de deux catégories, puis la part du total.',
      'Contrôlez le traitement du ticket sans temps de résolution : compté à zéro, ignoré ou signalé ?',
      'Évaluez les trois actions : chacune s’appuie-t-elle sur un chiffre du tableau, et est-elle faisable chez vous ?',
      'Demandez une note de dix lignes pour le maire adjoint, sans jargon.',
    ],
    prompt:
      'Tu es responsable informatique d’une mairie. Voici l’export des tickets d’octobre 2026 (séparateur : point-virgule, une ligne par ticket).\n\n<tickets>\n[collez le tableau ici]\n</tickets>\n\n1. Normalise les catégories : une même cause écrite de deux façons ne compte qu’une fois. Dis-moi ce que tu as modifié.\n2. Fais un tableau par catégorie : nombre de tickets, part du total, temps de résolution total et moyen en heures.\n3. Signale les lignes inexploitables et dis comment tu les as traitées.\n4. Propose trois actions pour réduire la charge du support, chacune reliée à un chiffre du tableau, avec l’effort estimé (faible, moyen, élevé).\nMontre tes calculs. N’invente aucune donnée absente du tableau.',
    materiau: {
      titre: 'Export des tickets d’octobre 2026 (mairie de Dumbéa, données fictives)',
      texte:
        'Ticket;Date;Service;Catégorie;Priorité;Temps de résolution (h)\nT-501;02/10/2026;Accueil;Imprimante;Normale;2\nT-502;02/10/2026;Comptabilité;Mot de passe;Normale;0,5\nT-503;05/10/2026;Direction;Messagerie;Haute;3\nT-504;06/10/2026;Urbanisme;Imprimante;Normale;4\nT-505;08/10/2026;Comptabilité;Mot de passe;Normale;0,5\nT-506;09/10/2026;État civil;Poste lent;Normale;6\nT-507;12/10/2026;Accueil;Imprimante;Haute;1,5\nT-508;14/10/2026;Urbanisme;Wi-Fi;Normale;8\nT-509;15/10/2026;Direction;Mot de passe;Haute;0,5\nT-510;19/10/2026;Comptabilité;imprimante;Normale;3\nT-511;21/10/2026;État civil;Wi-Fi;Haute;12\nT-512;23/10/2026;Accueil;Mot de passe;Normale;0,5\nT-513;27/10/2026;Urbanisme;Imprimante;Normale;2,5\nT-514;30/10/2026;Direction;Messagerie;Normale;',
    },
    variantes: {
      simple:
        'Demander seulement le nombre de tickets par catégorie et la catégorie la plus fréquente.',
      poussee:
        'Faire produire un graphique (nombre de tickets et temps total par catégorie) et un tableau de suivi mensuel réutilisable, avec une formule de comptage par catégorie expliquée.',
    },
    astuces: {
      chatgpt:
        'Avec l’analyse de données, joignez le fichier CSV : ChatGPT montre ses calculs, contrôlez un total à la main.',
      claude:
        'Déposez le fichier : Claude calcule, trace un graphique et peut rendre un fichier Excel avec la création de fichiers.',
      copilot:
        'Dans Excel, mettez les tickets sous forme de tableau avant de demander l’analyse à Copilot (selon la licence) : il les lit beaucoup mieux.',
    },
    vigilance:
      'Un vrai export de tickets contient des noms d’agents, des noms de postes et parfois des extraits de journaux : travaillez sur une copie anonymisée, limitée aux colonnes utiles.',
    formateur: {
      resultat:
        'Un tableau juste : imprimante 5 tickets, 13 h (2,6 h en moyenne) ; mot de passe 4 tickets, 2 h ; messagerie 2 tickets, 3 h connues ; poste lent 1 ticket, 6 h ; Wi-Fi 2 tickets, 20 h. Total 14 tickets, 44 h sur 13 tickets renseignés (3,4 h en moyenne). Trois actions reliées à ces chiffres.',
      criteres: [
        '« Imprimante » et « imprimante » sont fusionnées, et l’IA l’a dit.',
        'Les nombres de tickets (14) et le temps total (44 h) sont exacts ; les parts se calculent sur ces totaux.',
        'Le ticket T-514 sans temps est signalé, pas compté à zéro.',
        'Chaque action s’appuie sur un chiffre : Wi-Fi (2 tickets mais 20 h, 45 % du temps connu), imprimantes (5 tickets, 36 % des tickets, 13 h), mots de passe (4 tickets, 29 % des tickets mais 2 h, réinitialisation libre-service à étudier).',
      ],
      pieges: [
        'Compter T-514 pour 0 heure et fausser la moyenne de la messagerie.',
        'Traiter « Imprimante » et « imprimante » comme deux causes.',
        'Retenir la catégorie la plus fréquente (imprimante) comme la plus coûteuse en temps : c’est le Wi-Fi.',
      ],
      competence: 'discernement',
      technique: 'decomposer',
    },
    motsCles: ['tickets', 'analyse', 'CSV', 'catégories', 'support', 'indicateurs'],
  },
  {
    id: 'info-arrivee-depart-salarie',
    titre: 'Rédiger la procédure d’arrivée et de départ d’un salarié',
    metier: 'informatique',
    niveau: 'intermediaire',
    famille: 'organiser',
    duree: 30,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'copilot',
    situation:
      'Vous êtes le référent informatique d’une entreprise de BTP de Païta, 45 salariés. Les arrivées sont signalées la veille, et certains comptes de salariés partis sont restés actifs des mois. La direction vous demande une procédure écrite, claire et partageable avec les ressources humaines.',
    objectif:
      'Transformer des habitudes orales en procédure en deux volets (arrivée, départ), avec un responsable et un délai pour chaque étape, puis la faire critiquer par l’IA.',
    etapes: [
      'Relisez les notes du matériau et soulignez les oublis que vous connaissez déjà.',
      'Envoyez le prompt de départ pour obtenir une première procédure en deux tableaux.',
      'Faites vérifier la procédure : demandez à l’IA les trois étapes qu’un oubli rendrait le plus risquées, et ce qu’elle suppose sans l’avoir lu dans vos notes.',
      'Ajustez les délais et les responsables à votre entreprise, puis retirez toute affirmation juridique que vous ne pouvez pas justifier.',
      'Demandez une version courte de chaque volet sous forme de check-list d’une page, à imprimer.',
    ],
    prompt:
      'Tu es responsable informatique d’une entreprise de BTP de 45 salariés à Païta. À partir de mes notes ci-dessous, rédige la procédure d’arrivée et la procédure de départ d’un salarié, sous forme de deux tableaux : étape, qui s’en charge (informatique, ressources humaines, responsable du salarié), délai (par exemple J-5, J0, dernier jour), vérification à faire.\n\nL’ordre compte : au départ, précise ce qu’on désactive, ce qu’on sauvegarde et ce qu’on récupère, et dans quel ordre. Ne mets aucun mot de passe dans la procédure ; dis comment il est transmis. N’affirme aucune obligation légale (durée de conservation, protection des données) : liste-les à part comme « à vérifier ».\n\n<notes>\n[collez les notes ici]\n</notes>',
    materiau: {
      titre: 'Comment on fait aujourd’hui (notes du référent)',
      texte:
        'ARRIVÉE\n- les RH préviennent souvent la veille, parfois le matin même\n- je crée le compte Windows et la messagerie, mot de passe donné de vive voix\n- accès au dossier partagé selon le service (compta, chantiers, bureau d’études), demandé par le chef de service par message\n- PC : celui d’un ancien salarié, formaté si j’ai le temps\n- téléphone mobile : seulement pour les conducteurs de travaux\n- logiciel de paie et logiciel de plans : accès demandés à la fin de la première semaine\n\nDÉPART\n- je désactive le compte le dernier jour… quand on me prévient\n- l’ordinateur revient rarement, les clés USB jamais\n- la messagerie du salarié parti est redirigée vers son chef pendant 3 mois\n- j’oublie souvent de retirer les accès au logiciel de paie et à la liste de diffusion du personnel\n- les fichiers du poste ne sont pas sauvegardés avant le formatage',
    },
    variantes: {
      simple: 'Ne rédiger que la procédure d’arrivée, en une check-list.',
      poussee:
        'Ajouter un troisième cas, le changement de service, et faire produire un tableau croisé des accès par service pour contrôler les droits une fois par an.',
    },
    astuces: {
      copilot:
        'Transformez la procédure en Copilot Page (compte professionnel) : les RH et les chefs de service la commentent avant de l’adopter.',
      claude:
        'Demandez les check-lists sous forme de fichier Excel avec la création de fichiers : l’équipe coche les étapes.',
      chatgpt:
        'Demandez un tableau, puis téléchargez-le au format Excel pour le partager avec les RH.',
    },
    vigilance:
      'Ne collez ni noms de salariés réels, ni noms de comptes, ni mots de passe. La conservation des données d’un salarié parti relève de règles à vérifier auprès de la direction : ne reprenez aucune durée annoncée par l’IA.',
    formateur: {
      resultat:
        'Deux tableaux (arrivée et départ) avec responsable, délai et vérification : comptes et matériel préparés avant le jour J, mot de passe transmis séparément, départ avec sauvegarde, désactivation, récupération du matériel et retrait des accès à la paie et aux listes de diffusion, et une liste d’éléments « à vérifier » pour la partie légale.',
      criteres: [
        'Chaque étape a un responsable et un délai.',
        'L’ordre du départ est logique : sauvegarder, puis désactiver, puis récupérer et formater.',
        'Aucun mot de passe n’apparaît dans la procédure ; sa transmission est décrite.',
        'Les aspects légaux sont renvoyés à une vérification, sans durée inventée.',
      ],
      pieges: [
        'Accepter une durée de conservation des données présentée comme obligatoire.',
        'Formater le poste avant d’avoir sauvegardé les fichiers de l’ancien salarié.',
        'Une procédure idéale qui ne tient pas compte de l’arrivée annoncée la veille.',
      ],
      competence: 'delegation',
      technique: 'structurer',
    },
    motsCles: ['arrivée', 'départ', 'comptes', 'droits', 'procédure', 'matériel'],
  },
  {
    id: 'info-comparer-sauvegardes',
    titre: 'Comparer trois offres de sauvegarde avec une grille de critères',
    metier: 'informatique',
    niveau: 'intermediaire',
    famille: 'analyser',
    duree: 30,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'gemini',
    situation:
      'La PME de Dumbéa où vous travaillez (12 postes, environ 1,5 To de données dont de gros fichiers de plans) sauvegarde sur un disque externe, rangé dans le bureau. La direction veut une sauvegarde en ligne et a réuni trois plaquettes de prestataires. Vous devez recommander une offre.',
    objectif:
      'Construire une grille de critères pondérés, faire calculer les coûts, et repérer ce que les plaquettes affirment sans le prouver.',
    etapes: [
      'Lisez les trois offres du matériau et soulignez les promesses qui ne sont pas chiffrées ou pas précises.',
      'Envoyez le prompt de départ en donnant vos propres pondérations (vous connaissez les priorités de la direction).',
      'Refaites à la main le coût sur trois ans de chaque offre, installation comprise, à partir des tarifs du matériau.',
      'Listez les questions à poser à chaque prestataire pour confirmer les points « à vérifier » : lieu d’hébergement, restauration, clauses d’usage.',
      'Faites rédiger un tableau de décision d’une page pour la direction, en indiquant ce qui reste à confirmer avant de signer.',
    ],
    prompt:
      'Tu es conseiller informatique pour une PME de Dumbéa : 12 postes, environ 1,5 To à sauvegarder, des gros fichiers de plans. Compare les trois offres ci-dessous dans un tableau noté.\n\nCritères et pondérations (sur 100) : coût sur trois ans [__], lieu d’hébergement des données [__], délai de restauration [__], durée de conservation des versions [__], support local [__], conditions d’engagement [__]. Note chaque offre de 0 à 5 par critère et justifie chaque note en citant la phrase de la plaquette.\n\nSi une information n’est pas dans la plaquette ou n’est pas précise, écris « à vérifier » au lieu de la supposer, et liste les questions à poser au prestataire. Calcule le coût sur trois ans en montrant le calcul. Termine par une recommandation prudente.\n\n<offres>\n[collez les trois offres ici]\n</offres>',
    materiau: {
      titre: 'Extraits des plaquettes (prestataires et prix fictifs)',
      texte:
        'OFFRE A – Récif Sauvegarde (Nouméa)\n28 000 XPF par mois, 2 To inclus. Données hébergées localement « pour votre tranquillité ». Restauration « sous 4 heures ouvrées ». Conservation des versions : 30 jours. Support par téléphone du lundi au vendredi, 7 h 30 à 17 h. Engagement 12 mois. Frais d’installation : 60 000 XPF.\n\nOFFRE B – Pacific Safe NC\n19 500 XPF par mois et par To entamé. Serveurs situés en Australie. Restauration « rapide, selon le volume ». Conservation des versions : 90 jours. Support par e-mail, réponse sous 48 h. Sans engagement. Installation offerte.\n\nOFFRE C – Alizé Backup\nForfait « illimité » à 24 000 XPF par mois. Usage raisonnable : au-delà de 3 To, débit réduit. Hébergement : « infrastructure sécurisée ». Restauration sous 24 h. Conservation des versions : 14 jours. Support téléphonique de 7 h 30 à 17 h. Engagement 24 mois. Frais d’installation : 45 000 XPF.',
    },
    variantes: {
      simple: 'Comparer seulement le coût sur trois ans et la durée de conservation.',
      poussee:
        'Ajouter une quatrième offre, la sauvegarde sur un second disque tenu hors du site, et faire évaluer le scénario d’une panne du serveur pendant la période de pointe, offre par offre.',
    },
    astuces: {
      gemini:
        'Dans Google Sheets, « Demander à Gemini » crée la grille et propose les formules de pondération : vérifiez la somme des poids.',
      chatgpt:
        'Avec l’analyse de données, collez les tarifs : ChatGPT montre le calcul du coût sur trois ans, à contrôler à la main.',
      claude:
        'Demandez la grille sous forme d’artefact : vous modifiez les poids et voyez le classement bouger.',
    },
    vigilance:
      'Les plaquettes sont des documents commerciaux : une promesse non chiffrée n’est pas un engagement. Ne collez que des extraits publics, pas votre contrat actuel ni la description de votre infrastructure.',
    formateur: {
      resultat:
        'Une grille notée où le coût sur trois ans est exact (A : 1 068 000 XPF ; B : 1 404 000 XPF pour 2 To, soit deux tranches de 19 500 XPF ; C : 909 000 XPF mais engagement de 24 mois) et où les points flous sont « à vérifier » : hébergement local de A, restauration de B, hébergement de C, usage raisonnable.',
      criteres: [
        'Les trois coûts sur trois ans sont recalculés à la main et concordent.',
        'Le tarif par To de l’offre B est appliqué à 1,5 To entamé, donc 2 tranches.',
        'Chaque note renvoie à une phrase de la plaquette ; les manques sont marqués « à vérifier ».',
        'Une liste de questions à poser aux prestataires est fournie.',
      ],
      pieges: [
        'Calculer l’offre B sur 1,5 To au lieu de 2 tranches entamées.',
        'Noter « bonne » une promesse vague comme « infrastructure sécurisée ».',
        'Oublier les frais d’installation et la durée d’engagement dans le coût.',
      ],
      competence: 'discernement',
      technique: 'sources',
    },
    motsCles: ['sauvegarde', 'comparaison', 'grille', 'prestataires', 'coût', 'cloud'],
  },
  {
    id: 'info-annonce-coupure',
    titre: 'Annoncer une coupure de maintenance à trois publics',
    metier: 'informatique',
    niveau: 'intermediaire',
    famille: 'rediger',
    duree: 30,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'copilot',
    situation:
      'La PME de Païta où vous travaillez change son serveur de fichiers le samedi 21 novembre. Il faut prévenir trois publics : la direction (qui doit décider), les utilisateurs (qui doivent agir avant) et le prestataire (qui intervient sur place). Un même message ne conviendrait à aucun.',
    objectif:
      'Écrire trois messages à partir des mêmes informations, en adaptant le contenu et le ton à chaque lecteur, sans rien changer aux dates ni aux horaires.',
    etapes: [
      'Lisez les informations du matériau et notez, pour chaque public, ce qu’il doit savoir, faire ou décider.',
      'Envoyez le prompt de départ pour obtenir les trois messages d’un coup.',
      'Comparez les dates, les heures et les services touchés entre les trois messages et le matériau.',
      'Vérifiez que le message aux utilisateurs dit quoi faire avant, pendant et après, en trois lignes.',
      'Demandez de raccourcir le message à la direction à une décision claire, puis relisez l’ensemble.',
    ],
    prompt:
      'Tu es responsable informatique d’une PME de Païta. Rédige trois e-mails à partir des informations ci-dessous :\n1. à la direction : l’enjeu, l’impact sur l’activité, la décision que je lui demande, 120 mots au maximum ;\n2. aux utilisateurs : ce qui sera indisponible, quand, ce qu’ils doivent faire avant, pendant et après, avec le contact en cas de problème ;\n3. au prestataire : le planning de l’intervention, ce que nous fournissons, ce que nous attendons de lui, et la condition de retour arrière.\nVouvoiement, ton professionnel. Reprends les dates et les heures exactement, sans en ajouter. Si une information manque, écris [à compléter].\n\n<infos>\n[collez les informations ici]\n</infos>',
    materiau: {
      titre: 'Informations sur la coupure (société et prestataire fictifs)',
      texte:
        'quoi : remplacement du serveur de fichiers (le lecteur P: et le logiciel de facturation seront indisponibles)\nquand : samedi 21 novembre 2026, de 6 h à 14 h ; retour au plus tard lundi 23 novembre à 7 h si problème\nrestent disponibles : la messagerie, le Wi-Fi et la téléphonie\navant : les salariés enregistrent leurs fichiers et ferment leurs sessions vendredi 20 novembre à 17 h au plus tard ; rien ne doit rester dans les dossiers locaux « Bureau »\npendant : pas d’accès à P: ni à la facturation ; l’atelier, ouvert le samedi matin, fait ses bons à la main\naprès : test de connexion lundi matin, contact informatique au poste 210 en cas de souci\nprestataire : Netaxis NC, technicien sur place de 6 h à 14 h ; nous fournissons l’accès à la salle technique et un badge ; point de décision à 10 h : si la migration n’est pas terminée, retour à l’ancien serveur\nà décider par la direction : maintenir le samedi (impact : la facturation du samedi est reportée) ou décaler d’une semaine',
    },
    variantes: {
      simple: 'Ne rédiger que le message aux utilisateurs.',
      poussee:
        'Ajouter un quatrième message de rappel pour le vendredi 20 novembre, un SMS court aux responsables de l’atelier et un texte pour la page d’accueil de la messagerie.',
    },
    astuces: {
      copilot:
        'Dans Outlook, « Brouillon avec Copilot » prépare chaque e-mail ; « Coaching par Copilot » relit le ton avant l’envoi à tout le personnel.',
      gemini:
        'Dans Gmail, « Aide-moi à écrire » adapte le message selon le lecteur : précisez à chaque fois qui lit.',
      chatgpt:
        'Ouvrez chaque message dans le canevas pour retoucher un seul paragraphe sans tout régénérer.',
    },
    vigilance:
      'Ne donnez ni nom de serveur, ni adresse réseau, ni nom de compte dans le prompt. Vérifiez les dates : le 21 novembre 2026 doit bien être un samedi, ce que l’IA ne contrôle pas toujours.',
    formateur: {
      resultat:
        'Trois e-mails distincts : la direction reçoit une décision à prendre (maintenir le samedi 21 novembre ou décaler d’une semaine), les utilisateurs une marche à suivre avant, pendant et après avec le poste 210, le prestataire un planning de 6 h à 14 h avec un point de décision à 10 h.',
      criteres: [
        'Les dates et les heures sont identiques dans les trois messages et conformes au matériau.',
        'Le message aux utilisateurs dit ce qui est indisponible et ce qui reste disponible.',
        'La direction a une décision claire à prendre, pas un long exposé technique.',
        'Le prestataire reçoit la condition de retour arrière et le point à 10 h.',
      ],
      pieges: [
        'Un message aux utilisateurs trop technique (serveur, migration) qui n’indique pas quoi faire.',
        'Décaler une date ou une heure d’un message à l’autre.',
        'Laisser l’IA promettre « aucune interruption » alors que le serveur sera coupé 8 heures.',
      ],
      competence: 'description',
      technique: 'contexte',
    },
    motsCles: ['coupure', 'maintenance', 'annonce', 'e-mail', 'publics', 'serveur'],
  },
  {
    id: 'info-assistant-premier-niveau',
    titre: 'Créer un assistant de premier niveau à partir de la documentation interne',
    metier: 'informatique',
    niveau: 'avance',
    famille: 'automatiser',
    duree: 60,
    outils: ['notebook', 'copilot', 'claude'],
    outilConseille: 'notebook',
    situation:
      'Au collège de Koné, le service informatique (deux personnes) reçoit chaque jour les mêmes questions : Wi-Fi, impression, mot de passe oublié, accès aux dossiers. Vous avez des fiches de dépannage dispersées. Vous voulez un assistant que les enseignants interrogent avant de vous appeler.',
    objectif:
      'Construire un assistant qui répond uniquement à partir de la documentation interne, sait dire « ce n’est pas documenté » et renvoie vers un humain quand il le faut.',
    etapes: [
      'Rassemblez 6 à 10 fiches de dépannage et procédures, sans mot de passe, adresse réseau, nom de compte ni configuration. En formation, faites rédiger par l’IA six fiches fictives et courtes (Wi-Fi, imprimante, mot de passe oublié, accès aux dossiers, message suspect, prêt de matériel), sans parler de l’installation de logiciels.',
      'Créez un carnet dans Gemini Notebook et ajoutez-les comme sources ; ou créez un agent Copilot avec les mêmes documents.',
      'Envoyez le prompt de départ dans la discussion, puis posez les six questions du matériau.',
      'Ouvrez chaque citation : la réponse est-elle bien dans la source ? Notez les réponses inventées ou trop confiantes.',
      'Complétez la documentation pour chaque question restée sans réponse, puis rejouez les six questions.',
      'Faites tester l’assistant par deux enseignants avec leurs propres questions, et notez ce qui les bloque.',
    ],
    prompt:
      'À partir uniquement des sources de ce carnet, réponds aux questions des enseignants d’un collège comme le ferait un premier niveau de support informatique.\n\nRègles :\n- Réponds en cinq lignes au maximum, avec des étapes numérotées si c’est une manipulation, et cite la source de chaque étape.\n- Si la réponse n’est pas dans les sources, écris : « Ce point n’est pas documenté : contactez le service informatique au [poste à compléter]. » N’invente rien.\n- Ne donne jamais de mot de passe ni de code d’accès, même s’ils figurent dans une source : renvoie vers le service informatique.\n- Si la demande concerne un incident grave (poste infecté, données perdues), indique de prévenir immédiatement le service informatique.',
    materiau: {
      titre: 'Questions de test à poser à l’assistant',
      texte:
        '1. Comment connecter mon ordinateur portable au Wi-Fi de la salle des professeurs ?\n2. L’imprimante de la salle 12 affiche « bourrage papier » : que dois-je faire ?\n3. J’ai oublié mon mot de passe de session, que faire ?\n4. Puis-je installer moi-même un logiciel de visioconférence sur mon poste ?\n5. Mon ordinateur affiche un message qui me demande de payer pour récupérer mes fichiers.\n6. Quel est le mot de passe du Wi-Fi réservé à l’administration ?',
    },
    variantes: {
      simple: 'Charger trois fiches et ne tester que les questions 1 à 3.',
      poussee:
        'Ajouter une liste « À documenter » alimentée par les questions sans réponse, et mesurer chaque mois le nombre d’appels évités ; comparer avec un agent Copilot ou un Projet Claude.',
    },
    astuces: {
      notebook:
        'Chaque réponse de la discussion est citée : cliquez sur les numéros pour relire le passage. Un rapport « FAQ » donne une première base de questions à partager.',
      copilot:
        'Selon la licence, « Créer un agent » permet de limiter l’assistant à vos documents et de le proposer à tout le personnel.',
      claude:
        'Pour comparer, déposez les mêmes fiches dans un Projet et posez les six questions : notez les écarts avec le carnet.',
    },
    vigilance:
      'Aucun mot de passe, adresse IP, nom de compte, plan réseau ni configuration dans les sources : le carnet ou l’agent est partagé. Un assistant n’est jamais autorisé à réinitialiser un mot de passe.',
    formateur: {
      resultat:
        'Un assistant qui répond aux questions 1 et 2 avec des citations, renvoie vers le service informatique pour les questions 3 et 6, dit que le point 4 n’est pas documenté s’il ne l’est pas et conseille de prévenir immédiatement le service pour la question 5.',
      criteres: [
        'Chaque réponse cite une source que l’apprenant a ouverte.',
        'La question 6 reçoit un refus et un renvoi, jamais un mot de passe.',
        'Les questions sans réponse dans les sources déclenchent « ce point n’est pas documenté ».',
        'L’apprenant a complété la documentation puis rejoué les questions.',
      ],
      pieges: [
        'Ajouter une fiche qui contient le mot de passe du Wi-Fi « pour que ce soit complet ».',
        'Un assistant qui conseille de payer ou d’éteindre le poste sans prévenir le service (question 5).',
        'Croire une réponse sans ouvrir la citation, qui peut mélanger deux procédures.',
      ],
      competence: 'delegation',
      technique: 'instructions',
    },
    motsCles: [
      'assistant',
      'support',
      'documentation',
      'Gemini Notebook',
      'agent',
      'premier niveau',
    ],
  },
  {
    id: 'info-plan-reprise-activite',
    titre: 'Préparer le plan de reprise après une coupure de courant ou une alerte cyclonique',
    metier: 'informatique',
    niveau: 'avance',
    famille: 'organiser',
    duree: 45,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Vous êtes responsable informatique d’une clinique de Koné. La saison cyclonique approche et la clinique a connu l’an dernier une coupure de courant de plusieurs heures, avec des services redémarrés dans le désordre. La direction demande un plan de reprise écrit, utilisable par un technicien d’astreinte qui ne connaît pas toute l’installation.',
    objectif:
      'Construire en plusieurs étapes un plan avant, pendant et après, avec un ordre de redémarrage justifié, puis le faire critiquer par l’IA.',
    etapes: [
      'Lisez l’inventaire du matériau et classez les services du plus critique au moins critique, sans l’IA.',
      'Envoyez le prompt de départ : l’IA ne fait d’abord que proposer un classement et un ordre de redémarrage, à valider.',
      'Corrigez le classement et l’ordre avec vos connaissances de la clinique, puis demandez le plan en trois phases : avant l’alerte, pendant la coupure, après le retour du courant.',
      'Demandez à l’IA de jouer l’astreinte : quelles questions poserait-elle en lisant ce plan ? Complétez les manques.',
      'Listez ce que vous devez vérifier auprès de la direction et des consignes officielles : niveaux d’alerte, durée d’autonomie réelle, contacts.',
      'Demandez une version d’une page, à plastifier, pour la salle technique.',
    ],
    prompt:
      'Tu es responsable informatique d’une clinique à Koné. Je prépare un plan de reprise d’activité pour une coupure de courant prolongée ou une alerte cyclonique. Nous travaillons par étapes : ne passe à l’étape suivante que lorsque je te le demande.\n\nÉtape 1 : à partir de l’inventaire ci-dessous, classe les services par criticité (de 1, vital pour les soins, à 3, confort) en justifiant chaque rang, puis propose un ordre d’arrêt avant coupure et un ordre de redémarrage après retour du courant. Indique les dépendances (un service qui en attend un autre) et ce que tu supposes sans l’avoir lu dans l’inventaire.\n\nN’invente aucun numéro de téléphone, aucune durée d’autonomie ni aucune consigne officielle : écris [à compléter].\n\n<inventaire>\n[collez l’inventaire ici]\n</inventaire>',
    materiau: {
      titre: 'Inventaire des services (clinique fictive, Koné)',
      texte:
        '1. Dossiers de soins : logiciel hébergé en ligne, accessible par Internet, dépend de la fibre ou du secours 4G\n2. Téléphonie : serveur dans la salle technique, dépend du réseau local\n3. Serveur de fichiers (administration, comptabilité) : salle technique, démarrage long, doit démarrer après le réseau\n4. Réseau local et Wi-Fi : commutateurs dans la salle technique, deux armoires sur le bâtiment annexe\n5. Accès Internet : fibre ; box 4G de secours dans la salle technique\n6. Badges et contrôle d’accès : serveur local, indépendant des autres\n7. Sauvegarde : un NAS dans la salle technique, copie chaque nuit vers un service en ligne\n8. Alimentation : onduleur dans la salle technique (autonomie notée par le fournisseur : à vérifier) ; groupe électrogène qui alimente l’éclairage, la salle de soins et la salle technique, pas les bureaux\n9. Postes : 14 postes de bureau, 6 postes de soins',
    },
    variantes: {
      simple: 'Ne faire que le classement des services et l’ordre de redémarrage.',
      poussee:
        'Ajouter un exercice de simulation : l’IA joue l’astreinte un samedi soir avec un incident qui n’est pas prévu au plan (le groupe ne démarre pas), puis faire écrire un retour d’expérience.',
    },
    astuces: {
      claude:
        'Demandez le plan sous forme de check-list dans un fichier Excel avec la création de fichiers : l’astreinte coche chaque étape.',
      chatgpt:
        'Travaillez dans un Projet : l’inventaire et les étapes validées restent disponibles pour la simulation.',
      copilot:
        'Transformez la version finale en Copilot Page (compte professionnel) : l’équipe d’astreinte la commente et la tient à jour.',
      gemini:
        'Exportez le plan dans Google Docs pour que la direction le relise et y inscrive les contacts réels.',
    },
    vigilance:
      'N’écrivez dans le prompt ni plan d’adressage, ni mot de passe, ni emplacement d’une clé. Les consignes officielles d’alerte et l’autonomie réelle de l’onduleur se vérifient auprès des sources officielles et du fournisseur, jamais auprès de l’IA.',
    formateur: {
      resultat:
        'Un plan en trois phases avec un classement (dossiers de soins, réseau, Internet et alimentation en rang 1), un ordre de redémarrage cohérent (alimentation, réseau, Internet, puis téléphonie, serveur de fichiers et sauvegarde) et une liste claire de ce qui reste à vérifier.',
      criteres: [
        'L’ordre de redémarrage respecte les dépendances (le réseau avant le serveur de fichiers et la téléphonie).',
        'Aucun contact, aucune autonomie ni consigne officielle n’est inventé : tout est « à compléter ».',
        'L’apprenant a corrigé le classement de l’IA avec ce qu’il sait de la clinique.',
        'Le plan est utilisable par un technicien d’astreinte : étapes courtes, ordre numéroté.',
      ],
      pieges: [
        'Un ordre de redémarrage qui lance le serveur de fichiers avant le réseau.',
        'Une autonomie d’onduleur annoncée par l’IA alors que l’inventaire dit « à vérifier ».',
        'Reprendre telles quelles des consignes d’alerte cyclonique non vérifiées.',
      ],
      competence: 'diligence',
      technique: 'decomposer',
    },
    motsCles: [
      'reprise d’activité',
      'coupure de courant',
      'cyclone',
      'plan',
      'astreinte',
      'sauvegarde',
    ],
  },
  {
    id: 'info-veille-alertes-securite',
    titre: 'Programmer une veille hebdomadaire sur les alertes de sécurité',
    metier: 'informatique',
    niveau: 'avance',
    famille: 'veiller',
    duree: 30,
    outils: ['gemini', 'chatgpt', 'claude'],
    outilConseille: 'gemini',
    situation:
      'Vous êtes seul pour l’informatique d’une PME de Nouméa. Vous n’avez pas le temps de suivre chaque jour les bulletins de sécurité des éditeurs, alors que les logiciels du parc doivent être mis à jour à temps. Vous voulez qu’un point soit prêt chaque lundi matin, avec ses sources.',
    objectif:
      'Écrire une demande de veille précise, la tester à la main, puis la programmer pour qu’elle se relance chaque semaine, avec des sources citées que vous vérifiez.',
    etapes: [
      'Dressez la liste des logiciels et services de votre parc, sans versions précises ni adresses, en vous aidant du matériau.',
      'Envoyez le prompt de départ une première fois, à la main, et ouvrez chaque source citée.',
      'Contrôlez que chaque alerte annoncée existe bien dans la source et concerne un produit de votre liste.',
      'Réglez le format (cinq lignes au plus, trois rubriques) jusqu’à ce que le point se lise en deux minutes.',
      'Programmez la demande chaque lundi à 7 h 30 avec la fonction de votre outil, puis vérifiez le premier résultat reçu.',
    ],
    prompt:
      'Tu es un veilleur en cybersécurité pour une PME de Nouméa. Chaque lundi, prépare-moi un point de veille sur les alertes de sécurité et les mises à jour des produits de la liste ci-dessous, publiées au cours des sept derniers jours.\n\nSources autorisées : les bulletins de sécurité des éditeurs et un centre officiel d’alerte de cybersécurité (par exemple le CERT-FR). Pour chaque point, donne le titre, l’éditeur, la date, le lien et la source. N’invente aucune alerte, aucun numéro de vulnérabilité ni aucun lien : si tu ne trouves rien, écris « rien à signaler cette semaine ».\n\nFormat, cinq lignes au maximum : « À traiter cette semaine » (alerte grave sur un produit de la liste), « À surveiller », « Rien à signaler » pour les produits sans nouveauté. Termine par une phrase qui dit quoi faire en premier.\n\n<produits>\n[collez la liste des produits ici]\n</produits>',
    materiau: {
      titre: 'Liste des produits du parc (sans versions, adresses ni noms de comptes)',
      texte:
        '- Windows 11 (14 postes) et Windows 10 (3 postes à remplacer)\n- Microsoft 365 (messagerie, Teams, OneDrive)\n- Google Chrome\n- logiciel de comptabilité hébergé en ligne\n- un pare-feu : [marque et modèle à compléter]\n- un NAS de sauvegarde : [marque et modèle à compléter]\n- une box Internet fournie par l’opérateur\n- un lecteur de PDF installé sur tous les postes',
    },
    variantes: {
      simple:
        'Se limiter à deux produits (Windows et Microsoft 365) et lancer la demande à la main.',
      poussee:
        'Ajouter une consigne qui classe chaque alerte (à traiter, à surveiller) selon le nombre de postes concernés, et un second point mensuel sur les fins de support des logiciels du parc.',
    },
    astuces: {
      gemini:
        'Lancez Deep Research pour le premier point, puis « Programmer des actions » (selon l’offre) relance la demande chaque lundi ; exportez le rapport dans Google Docs pour l’annoter.',
      chatgpt:
        'La recherche approfondie, limitée en gratuit, rend un rapport sourcé ; les tâches planifiées (payantes) relancent la veille chaque semaine.',
      claude:
        'Activez la recherche web pour le test à la main ; la fonction Tâches planifiées (payante) relance ensuite la demande chaque lundi.',
    },
    vigilance:
      'Ne donnez à l’outil que des noms de produits, pas les versions exactes, les adresses réseau ni la configuration du pare-feu : cela constituerait un plan d’attaque si le compte était compromis. Une alerte reste à vérifier dans la source de l’éditeur avant toute action.',
    formateur: {
      resultat:
        'Un point hebdomadaire en cinq lignes, avec titre, date, éditeur et lien pour chaque alerte, une rubrique « rien à signaler » quand il n’y a rien, et une tâche programmée le lundi à 7 h 30 dont le premier résultat a été vérifié.',
      criteres: [
        'Chaque alerte renvoie à un lien que l’apprenant a ouvert et qui confirme l’information.',
        'Les produits de la liste sont les seuls concernés : aucune alerte hors périmètre.',
        'La consigne autorise « rien à signaler » et interdit d’inventer un numéro ou un lien.',
        'La tâche programmée a été testée et son premier résultat contrôlé.',
      ],
      pieges: [
        'Un numéro de vulnérabilité ou un lien inventé, présenté avec assurance.',
        'Agir sur une alerte sans l’avoir lue chez l’éditeur.',
        'Envoyer à l’IA la liste détaillée des versions et des adresses du parc.',
      ],
      competence: 'diligence',
      technique: 'sources',
    },
    motsCles: ['veille', 'sécurité', 'alertes', 'mises à jour', 'tâche planifiée', 'sources'],
  },
  {
    id: 'info-inventaire-parc',
    titre: 'Construire l’inventaire du parc avec des formules de tableur expliquées',
    metier: 'informatique',
    niveau: 'avance',
    famille: 'analyser',
    duree: 45,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'copilot',
    situation:
      'Vous reprenez le support informatique d’un hôtel-restaurant de Lifou. L’inventaire du parc tient dans un tableau sans formule. La direction prépare le budget et veut savoir quels postes sont hors garantie, combien tournent encore sous Windows 10 (dont la fin de support est à vérifier chez l’éditeur), et ce qu’il faudrait renouveler.',
    objectif:
      'Obtenir des formules de tableur adaptées à un inventaire réel, les faire expliquer ligne à ligne, puis vérifier leurs résultats sur un échantillon calculé à la main.',
    etapes: [
      'Copiez le tableau du matériau dans un tableur, avec la date de référence du 1er novembre 2026 dans la cellule H1 et les trois libellés de statut dans les cellules J1 à J3.',
      'Envoyez le prompt de départ et lisez les formules proposées avec leur explication.',
      'Appliquez-les dans le tableur : colonne « fin de garantie », statut de garantie, nombre de postes sous Windows 10.',
      'Vérifiez à la main trois postes (un sous garantie, un hors garantie, celui dont la date manque) et le total des prix d’achat.',
      'Faites proposer une règle de renouvellement, puis chiffrez-la avec le tableur et comparez à votre calcul.',
    ],
    prompt:
      'Tu es spécialiste de tableur pour un support informatique. Voici l’inventaire du parc (séparateur : point-virgule, dates au format jj/mm/aaaa). La date de référence est dans la cellule [H1] (1er novembre 2026). Propose des formules pour :\n1. la date de fin de garantie de chaque poste ;\n2. le statut (sous garantie, hors garantie, à vérifier si la date manque) ;\n3. le nombre de postes par système d’exploitation ;\n4. le nombre de postes hors garantie sous Windows 10 et la somme de leurs prix d’achat.\nPour chaque formule : la formule dans la syntaxe française, une explication ligne à ligne, le résultat attendu sur les premières lignes. Les libellés de statut (sous garantie, hors garantie, à vérifier) sont dans les cellules [J1], [J2] et [J3] : fais-y référence plutôt que de les écrire dans les formules. Signale toute anomalie des données sans la corriger.\n\n<inventaire>\n[collez le tableau ici]\n</inventaire>',
    materiau: {
      titre: 'Inventaire du parc, hôtel-restaurant de Lifou (données fictives)',
      texte:
        'Poste;Service;Date d’achat;Garantie (ans);Système;RAM (Go);Prix d’achat (XPF)\nPC-01;Accueil;15/03/2021;3;Windows 10;8;85000\nPC-02;Accueil;15/03/2021;3;Windows 10;8;85000\nPC-03;Comptabilité;10/09/2022;3;Windows 11;16;120000\nPC-04;Comptabilité;10/09/2022;3;Windows 11;16;120000\nPC-05;Direction;02/05/2024;3;Windows 11;16;145000\nPC-06;Direction;02/05/2024;3;Windows 11;16;145000\nPC-07;Cuisine;20/01/2020;2;Windows 10;4;60000\nPC-08;Cuisine;18/11/2025;3;Windows 11;8;98000\nPC-09;Restaurant;07/07/2023;3;Windows 11;8;92000\nPC-10;Restaurant;07/07/2023;3;Windows 11;8;92000\nPC-11;Direction;;3;Windows 11;16;145000\nPC-12;Accueil;21/09/2021;3;Windows 10;4;70000\nPC-13;Comptabilité;05/02/2025;3;Windows 11;16;130000\nPC-14;Restaurant;30/12/2025;3;Windows 11;8;98000',
    },
    variantes: {
      simple: 'Ne demander que la formule de fin de garantie et le statut.',
      poussee:
        'Ajouter un tableau croisé par service, une mise en forme qui colore les postes hors garantie et un graphique du coût de renouvellement par année, avec la formule expliquée pour chacun.',
    },
    astuces: {
      copilot:
        'Mettez les données sous forme de tableau dans Excel, puis demandez à Copilot (selon la licence) d’ajouter la colonne de fin de garantie : vérifiez la formule proposée.',
      gemini:
        'Dans Google Sheets, « Demander à Gemini » propose les formules et les explique ; contrôlez-les sur trois lignes.',
      chatgpt:
        'Avec l’analyse de données, joignez le fichier CSV : ChatGPT montre ses calculs, contrôlez un total à la main.',
      claude:
        'Déposez le fichier : Claude propose les formules et peut rendre un fichier Excel avec la création de fichiers.',
    },
    vigilance:
      'Un vrai inventaire contient des numéros de série, des noms d’utilisateurs et des adresses réseau : travaillez sur une version réduite sans ces colonnes. Vérifiez auprès de l’éditeur la date de fin de support de chaque système : l’IA peut se tromper.',
    formateur: {
      resultat:
        'Des formules correctes (fin de garantie par la date d’achat et la durée, statut, comptage par système) et des résultats exacts au 1er novembre 2026 : 5 postes sous garantie, 8 hors garantie, 1 à vérifier (PC-11) ; 4 postes sous Windows 10, tous hors garantie, pour 300 000 XPF de prix d’achat ; 1 485 000 XPF au total pour le parc.',
      criteres: [
        'La date de fin de garantie utilise la date d’achat et la durée en années, par exemple avec DATE.MOIS et la durée multipliée par 12.',
        'Le poste PC-11, sans date d’achat, est signalé « à vérifier », pas calculé.',
        'Les résultats vérifiés à la main concordent : 5, 8 et 1 postes ; 4 postes sous Windows 10 ; 1 485 000 XPF au total.',
        'Chaque formule est expliquée ligne à ligne et comprise par l’apprenant.',
      ],
      pieges: [
        'Une formule qui gère la date manquante en la traitant comme 1900, et classe PC-11 hors garantie.',
        'Confondre le prix d’achat d’un ancien poste avec le coût de son remplacement.',
        'Appliquer une formule à l’anglaise (EDATE, virgules) dans un tableur en français.',
      ],
      competence: 'discernement',
      technique: 'critique',
    },
    motsCles: ['inventaire', 'parc', 'tableur', 'formules', 'garantie', 'CSV'],
  },
];
