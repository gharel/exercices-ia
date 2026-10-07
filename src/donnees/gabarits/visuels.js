/**
 * Gabarits « Créer des visuels ». Chaque gabarit est décliné pour chaque métier :
 * {visuel.un}, {offre.le}, {publicCible}… prennent le vocabulaire du métier
 * (voir ../vocabulaire.js). Rappels constants : pas de personne reconnaissable sans accord,
 * pas de logo d'une autre marque, aucun texte inventé par l'IA laissé dans un visuel.
 */

export const gabarits = [
  {
    id: 'g-visuel-ia-canva',
    titre: 'Créer {visuel.un} pour {offre.le} avec l’IA Canva',
    niveau: 'debutant',
    famille: 'visuels',
    duree: 20,
    outils: ['canva'],
    situation:
      'Vous travaillez dans {structure.un} à Nouméa et vous devez créer {visuel.un} pour {offre.le}. Public visé : {publicCible}. Vous n’êtes pas graphiste et vous avez vingt minutes.',
    objectif:
      'Décrire précisément un visuel à l’IA de Canva (format, public, message, textes, style), choisir parmi ses propositions et corriger le résultat.',
    etapes: [
      'Préparez les textes exacts : un titre de six mots au plus, trois informations utiles, un appel à l’action et un contact.',
      'Dans Canva, ouvrez l’IA Canva (ou Design magique) et collez le prompt de départ, complété avec vos textes.',
      'Comparez les propositions et choisissez celle dont le message principal se lit en trois secondes.',
      'Modifiez le design choisi : remplacez les textes inventés par les vôtres, puis vérifiez chaque chiffre, chaque date et l’orthographe.',
      'Passez la grille du matériau, puis montrez le visuel trois secondes à un voisin : qu’a-t-il retenu ?',
    ],
    prompt:
      'Crée {visuel.un} au format [A4 portrait / publication carrée] pour {offre.le}.\nPublic visé : {publicCible}.\nMessage principal : [une phrase].\nTextes à afficher, sans en ajouter d’autres :\n- titre : [six mots au plus]\n- informations : [trois informations, avec les dates et les montants exacts]\n- appel à l’action : [par exemple « Appelez-nous au … »]\nStyle : [sobre / chaleureux / dynamique], couleurs [de la structure], une image qui évoque la Nouvelle-Calédonie, sans personne reconnaissable. Texte lisible de loin, avec de l’espace autour.',
    materiau: {
      titre: 'Grille de relecture du visuel',
      texte:
        'Le message principal se lit en trois secondes.\nToutes les informations sont exactes : date, montant, lieu, contact.\nAucune faute, y compris dans les petits textes.\nAucun texte inventé par l’IA ne reste (faux numéro, fausse adresse, texte de remplissage).\nLe visuel reste lisible sur un écran de téléphone.\nAucune personne reconnaissable sans son accord, aucun logo d’une autre marque.',
    },
    variantes: {
      simple:
        'Partir d’un modèle Canva existant et adapter seulement les textes avec l’écriture magique.',
      poussee:
        'Générer trois styles différents pour le même message, les soumettre au vote de trois collègues et garder le plus efficace.',
    },
    astuces: {
      canva:
        'Si une proposition vous plaît presque, gardez-la et modifiez ses éléments un par un plutôt que de tout régénérer.',
    },
    vigilance:
      'Les designs générés contiennent souvent des textes de remplissage (faux numéro, fausse adresse, faux prix) : remplacez-les tous. Pas de photo de personne réelle sans son accord, pas de logo d’une autre marque.',
    formateur: {
      resultat:
        'Un visuel au bon format, au message lisible en trois secondes, avec des informations exactes, sans faute et sans texte inventé restant.',
      criteres: [
        'Le prompt précise le format, le public, le message et les textes à afficher.',
        'Toutes les informations du visuel sont exactes et viennent de l’apprenant.',
        'La grille de relecture a été passée et les défauts corrigés.',
      ],
      pieges: [
        'Laisser un texte inventé par l’IA : prix, horaires, numéro de téléphone.',
        'Trop de texte : le message principal ne se voit plus.',
        'Faute dans le titre, repérée seulement après l’impression.',
      ],
      competence: 'description',
      technique: 'format',
    },
    motsCles: ['Canva', 'IA Canva', 'Design magique', 'affiche', 'visuel'],
  },
  {
    id: 'g-image-illustration',
    titre: 'Générer une image d’illustration avec un prompt précis',
    niveau: 'debutant',
    famille: 'visuels',
    duree: 20,
    outils: ['chatgpt', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Vous préparez une publication sur {offre.le}. Les photos gratuites que vous trouvez ne ressemblent pas du tout à la Nouvelle-Calédonie, et vous n’avez pas le droit de reprendre celles d’autres sites. Vous décidez de faire générer une image d’illustration.',
    objectif:
      'Écrire un prompt d’image complet (sujet, lieu, style, format, cadrage, interdits), puis améliorer l’image par retouches ciblées.',
    etapes: [
      'Demandez d’abord une image avec une phrase très courte, par exemple « une image pour ma publication », et notez ce qui ne va pas.',
      'Complétez le prompt de départ : sujet, lieu, lumière, style, format, cadrage et ce qui doit être absent.',
      'Comparez les deux images : laquelle pourriez-vous publier, et pourquoi ?',
      'Demandez deux retouches précises, une à la fois, en disant ce qui doit rester identique.',
      'Inspectez les détails qui trahissent une image générée : mains, textes déformés, panneaux, végétation ou bâtiments qui ne ressemblent pas à la Nouvelle-Calédonie.',
    ],
    prompt:
      'Crée une image d’illustration pour une publication sur {offre.le}.\nSujet : [ce que l’on voit, en une phrase].\nLieu et ambiance : Nouvelle-Calédonie, [Nouméa / la brousse / le bord de mer / un bureau], [lumière du matin / fin d’après-midi].\nStyle : [photo réaliste / illustration à plat / aquarelle], couleurs dominantes [deux ou trois couleurs].\nFormat : [carré / paysage 16:9 / portrait 4:5].\nCadrage : [plan large / plan rapproché], avec de l’espace libre [en haut] pour ajouter un titre ensuite.\nÀ éviter : aucun texte dans l’image, aucun logo, aucune personne reconnaissable, pas de paysage tropical de carte postale.',
    variantes: {
      simple: 'Générer une seule image avec le prompt complet et lister trois défauts.',
      poussee:
        'Générer la même image dans ChatGPT et dans Gemini, puis importer la meilleure dans Canva pour y ajouter le titre avec une vraie police.',
    },
    astuces: {
      chatgpt:
        'Pour une retouche, précisez ce qui doit rester identique (« garde le cadrage et les couleurs, change seulement le ciel »).',
      gemini:
        'Demandez deux ou trois variantes du même prompt et comparez-les avant de retoucher la meilleure.',
    },
    vigilance:
      'Ne présentez pas une image générée comme la photo d’un lieu, d’un produit ou d’une personne réels : indiquez « image générée par IA » si le doute est possible. Ne demandez ni le style d’un artiste vivant, ni le logo d’une marque.',
    formateur: {
      resultat:
        'Une image au bon format, sans texte ni logo, qui évoque la Nouvelle-Calédonie, obtenue avec un prompt complet puis deux retouches ciblées.',
      criteres: [
        'Le prompt précise le sujet, le lieu, le style, le format et les interdits.',
        'L’apprenant a comparé l’image du prompt court et celle du prompt complet.',
        'Les défauts typiques ont été cherchés : mains, textes, détails incohérents.',
      ],
      pieges: [
        'Texte illisible ou plein de fautes dans l’image : mieux vaut l’ajouter ensuite dans Canva.',
        'Paysage qui ressemble à un autre pays, ou décor de carte postale.',
        'Image qui fait croire à une vraie photo d’un lieu ou d’un produit existant.',
      ],
      competence: 'description',
      technique: 'iterer',
    },
    motsCles: ['image', 'génération d’image', 'Création d’images', 'prompt', 'illustration'],
  },
  {
    id: 'g-calques-magiques',
    titre: 'Mettre à jour un ancien visuel avec Calques magiques',
    niveau: 'debutant',
    famille: 'visuels',
    duree: 15,
    outils: ['canva'],
    situation:
      'L’an dernier, {structure.votre} a fait réaliser {visuel.un} par un prestataire. Il ne reste que le fichier image (PNG ou JPG), où rien n’est modifiable. Vous voulez réutiliser ce fichier cette année pour {offre.le}, avec de nouveaux textes et de nouvelles dates.',
    objectif:
      'Transformer une image plate en design modifiable avec Calques magiques, puis mettre à jour les textes sans abîmer la mise en page.',
    etapes: [
      'Prenez une ancienne image de visuel de votre structure, sans photo de personne. À défaut, créez un visuel simple dans Canva et téléchargez-le en PNG.',
      'Importez l’image dans un nouveau design Canva, sélectionnez-la et lancez Calques magiques.',
      'Repérez ce qui est devenu modifiable (textes, formes, fond) et ce qui ne l’est pas.',
      'Remplacez les textes et les dates ; si un texte est trop long pour son cadre, raccourcissez-le avec l’écriture magique et le prompt de départ.',
      'Zoomez sur les zones retouchées : contours, police différente, restes de l’ancien texte.',
    ],
    prompt:
      'Raccourcis ce texte pour qu’il tienne en deux lignes sur {visuel.un}, en 12 mots au plus. Garde exactement les dates, le lieu et les chiffres. Ton : [direct / chaleureux].\n\n[collez le texte trop long]',
    variantes: {
      simple: 'Changer seulement le titre et la date.',
      poussee:
        'Remplacer aussi le fond par une image générée, puis décliner le visuel en publication carrée avec Redimensionnement magique (offre Pro).',
    },
    astuces: {
      canva:
        'Calques magiques donne de meilleurs résultats sur une image nette et peu chargée : partez du fichier de meilleure résolution que vous avez.',
    },
    vigilance:
      'Ne retouchez que des visuels dont votre structure détient les droits. Retirez les photos de personnes dont vous n’avez pas l’accord, et ne reprenez pas le logo d’une autre marque.',
    formateur: {
      resultat:
        'Le visuel de l’an dernier, devenu modifiable, mis à jour avec les nouveaux textes, sans trace de l’ancien texte ni décalage de la mise en page.',
      criteres: [
        'L’image a été transformée en éléments modifiables avec Calques magiques.',
        'Toutes les dates et informations ont été mises à jour et vérifiées.',
        'Les zones retouchées ont été contrôlées en zoomant.',
      ],
      pieges: [
        'Oublier une ancienne date dans un petit texte en bas du visuel.',
        'Police reconnue de travers : le nouveau texte ne ressemble plus au reste.',
        'Retoucher un visuel dont on n’a pas les droits, par exemple une photo de banque d’images sous licence limitée.',
      ],
      competence: 'diligence',
      technique: 'iterer',
    },
    motsCles: ['Calques magiques', 'Canva', 'retouche', 'mise à jour', 'Écriture magique'],
  },
  {
    id: 'g-decliner-formats',
    titre: 'Décliner une publication pour {offre.le} en plusieurs formats',
    niveau: 'intermediaire',
    famille: 'visuels',
    duree: 30,
    outils: ['canva'],
    situation:
      'Vous avez réussi une publication carrée pour {offre.le}. On vous demande maintenant la même chose en story, en affiche A4 pour l’accueil et en bannière pour votre page Facebook : même message, mêmes informations, mais des textes adaptés à chaque format.',
    objectif:
      'Décliner un design en gardant une cohérence visuelle, et adapter le texte à chaque format au lieu de le recopier tel quel.',
    etapes: [
      'Partez de votre publication carrée, ou créez-la avec l’IA Canva à partir du premier prompt.',
      'Utilisez Redimensionnement magique (offre Pro) pour créer la story, l’affiche A4 et la bannière. Sans offre Pro, créez chaque format et copiez-y les éléments.',
      'Ouvrez chaque format et corrigez ce qui a mal suivi : texte coupé, élément hors cadre, image recadrée sur la mauvaise zone.',
      'Adaptez les textes avec l’écriture magique et le second prompt : très court pour la story, plus complet pour l’affiche.',
      'Affichez les quatre formats côte à côte et vérifiez avec la fiche du matériau que les informations sont identiques partout.',
    ],
    prompt:
      'Prompt 1, pour l’IA Canva :\nCrée une publication carrée pour les réseaux sociaux qui présente {offre.le}. Public visé : {publicCible}. Message principal : [une phrase]. Textes : [titre], [deux informations exactes], [appel à l’action]. Style [sobre / dynamique], couleurs [de la structure], sans personne reconnaissable.\n\nPrompt 2, pour l’écriture magique (story) :\nRéduis ce texte à 8 mots au plus pour une story, en gardant l’appel à l’action et la date exacte.',
    materiau: {
      titre: 'Fiche des formats',
      texte:
        'Publication carrée : titre, deux informations, appel à l’action.\nStory (format vertical) : 8 mots au plus, loin du haut et du bas de l’écran, que l’application recouvre.\nAffiche A4 : texte plus complet, titre lisible à deux mètres, contact bien visible.\nBannière : format très allongé, texte court et centré, rien d’important sur les bords.\nPartout : même date, même lieu, même montant, même contact, sans faute.',
    },
    variantes: {
      simple: 'Décliner en un seul autre format, la story, et vérifier les textes.',
      poussee:
        'Enregistrer les couleurs et les polices dans le Kit de marque (offre Pro), puis refaire toute la déclinaison pour une autre offre en moins de quinze minutes.',
    },
    astuces: {
      canva:
        'Après Redimensionnement magique, chaque format est un design à part : une correction faite dans l’un ne se reporte pas dans les autres.',
    },
    vigilance:
      'Une information corrigée dans un format doit l’être dans tous. N’utilisez pas de photo de personne sans son accord.',
    formateur: {
      resultat:
        'Quatre formats cohérents (carré, story, A4, bannière), aux textes adaptés à chaque usage, avec des informations identiques partout et aucun élément coupé.',
      criteres: [
        'Chaque format a été ouvert et vérifié : rien n’est coupé ni hors cadre.',
        'Le texte est adapté au format, plus court en story.',
        'Les informations clés sont identiques dans les quatre formats.',
      ],
      pieges: [
        'Texte de la story caché sous les boutons de l’application.',
        'Faute corrigée dans un format et oubliée dans les autres.',
        'Image recadrée automatiquement qui coupe l’élément principal.',
      ],
      competence: 'discernement',
      technique: 'format',
    },
    motsCles: ['Redimensionnement magique', 'formats', 'story', 'réseaux sociaux', 'Canva'],
  },
  {
    id: 'g-presentation-cinq-diapositives',
    titre: 'Créer une présentation de 5 diapositives à partir {documentLong.du}',
    niveau: 'intermediaire',
    famille: 'visuels',
    duree: 30,
    outils: ['claude', 'copilot', 'canva'],
    outilConseille: 'claude',
    situation:
      'Vous devez présenter en dix minutes les points essentiels {documentLong.du} lors {reunion.du}. Le document fait plusieurs pages et vous n’avez pas le temps de construire les diapositives vous-même.',
    objectif:
      'Faire produire une présentation courte et structurée à partir d’un document, en validant d’abord le plan, puis vérifier que chaque diapositive est fidèle au document.',
    etapes: [
      'Préparez le document : retirez-en les données personnelles et les passages confidentiels, ou faites générer une version fictive de deux pages.',
      'Demandez d’abord le plan avec le prompt de départ, et corrigez-le si un point essentiel manque.',
      'Faites produire le fichier : Claude avec la création de fichiers, Copilot dans PowerPoint (selon la licence), ou l’IA Canva à partir du plan validé.',
      'Vérifiez chaque diapositive avec le document sous les yeux : aucune information ajoutée, aucun chiffre modifié.',
      'Appliquez les règles du matériau, puis répétez la présentation à voix haute en chronométrant.',
    ],
    prompt:
      'Tu prépares une présentation pour {reunion.le}. Voici {documentLong.le}.\n\nÉtape 1 : propose un plan de 5 diapositives. Pour chacune : un titre qui dit le message en une phrase, 3 points de 12 mots au plus, et la section du document d’où vient chaque point. N’ajoute aucune information absente du document.\n\nÉtape 2, après ma validation : crée la présentation [en fichier PowerPoint], sobre et lisible, avec des notes pour l’orateur sur chaque diapositive.\n\n<document>\n[collez le document ou joignez le fichier]\n</document>',
    materiau: {
      titre: 'Règles d’une diapositive lisible',
      texte:
        'Un titre qui dit le message, pas seulement le sujet : « Deux points changent cette année » plutôt que « Changements ».\nTrois points au plus, de 12 mots au plus chacun.\nUn seul visuel par diapositive, et seulement s’il sert le message.\nUn texte assez grand pour être lu du fond de la salle.\nLa source indiquée dès qu’il y a un chiffre.',
    },
    variantes: {
      simple: 'Se limiter au plan des 5 diapositives et le mettre en forme soi-même.',
      poussee:
        'Faire produire la présentation dans deux outils, par exemple Claude et Canva, puis comparer la fidélité au document et le temps de retouche nécessaire.',
    },
    astuces: {
      claude:
        'Demandez explicitement un fichier PowerPoint : la création de fichiers le rend téléchargeable, prêt à retoucher.',
      copilot:
        'Avec la licence, Copilot dans PowerPoint crée une présentation à partir d’un fichier Word : vérifiez ensuite chaque diapositive.',
      canva:
        'Collez le plan validé dans l’IA Canva en demandant une présentation de 5 pages, et gardez le même modèle pour toutes.',
    },
    vigilance:
      'Ne chargez pas un document confidentiel ou contenant des données personnelles dans un outil que votre structure n’a pas autorisé. Une présentation peut simplifier jusqu’à déformer : relisez chaque diapositive avec le document sous les yeux.',
    formateur: {
      resultat:
        'Une présentation de 5 diapositives fidèle au document, dont chaque point renvoie à sa section d’origine, avec des titres qui disent le message et des notes pour l’orateur.',
      criteres: [
        'Le plan a été validé avant la production du fichier.',
        'Chaque point de diapositive se retrouve dans le document.',
        'Les titres disent le message, pas seulement le sujet.',
      ],
      pieges: [
        'Diapositive qui ajoute une information plausible mais absente du document.',
        'Trop de texte par diapositive : la présentation redevient un document.',
        'Chiffre arrondi ou modifié au passage.',
      ],
      competence: 'delegation',
      technique: 'sources',
    },
    motsCles: ['présentation', 'PowerPoint', 'diapositives', 'Création de fichiers', 'Canva'],
  },
  {
    id: 'g-infographie-procedure',
    titre: 'Transformer la procédure pour {procedure} en infographie',
    niveau: 'avance',
    famille: 'visuels',
    duree: 45,
    outils: ['claude', 'chatgpt', 'canva'],
    outilConseille: 'canva',
    situation:
      'Dans {structure.votre}, la procédure pour {procedure} tient sur trois pages que personne ne relit. Les erreurs reviennent : étape oubliée, mauvais ordre, mauvais interlocuteur. Vous voulez une infographie d’une page, à afficher, compréhensible en une minute.',
    objectif:
      'Enchaîner deux outils, l’IA conversationnelle pour simplifier et structurer, Canva pour mettre en forme, puis tester l’infographie auprès d’un vrai lecteur.',
    etapes: [
      'Collez la procédure (ou faites-en générer une version fictive réaliste de deux pages) avec le prompt de départ.',
      'Comparez la version en six étapes avec le texte d’origine, à l’aide de la liste des informations retirées : rien d’indispensable ne doit manquer.',
      'Dans Canva, créez l’infographie avec l’IA Canva à partir du brief, puis remplacez chaque texte par la version validée.',
      'Faites lire l’infographie à une personne qui ne connaît pas la procédure et posez les questions du matériau. Notez où elle hésite.',
      'Corrigez l’infographie, puis préparez une version texte de la même procédure, pour l’envoi par e-mail et la lecture d’écran.',
      'Faites valider le tout par le responsable de la procédure avant de l’afficher.',
    ],
    prompt:
      'Tu es spécialiste de la communication interne dans {structure.un} à Nouméa. Voici la procédure pour {procedure}.\n\n1. Réécris-la en 6 étapes au plus. Pour chaque étape : un verbe d’action, 15 mots au plus, et qui fait quoi.\n2. Liste les informations que tu as retirées, pour que je vérifie qu’elles ne sont pas indispensables.\n3. Propose ensuite le brief d’une infographie d’une page A4 : titre, ordre de lecture, une icône simple par étape, deux couleurs, et l’élément qui doit ressortir le plus (l’étape où les erreurs sont fréquentes).\n\n<procedure>\n[collez la procédure]\n</procedure>',
    materiau: {
      titre: 'Test de lecture',
      texte:
        'Montrez l’infographie pendant une minute, puis retournez-la.\n\nQuestion 1 : par quoi commence-t-on ?\nQuestion 2 : qui faut-il prévenir, et à quel moment ?\nQuestion 3 : quelle est l’étape où l’on se trompe le plus souvent ?\nQuestion 4 : que fait-on en cas de doute ?\n\nPassages où le lecteur a hésité : …\nCorrection apportée : …',
    },
    variantes: {
      simple:
        'Se limiter à la version en six étapes, mise en forme avec un modèle d’infographie Canva.',
      poussee:
        'Faire une seconde infographie, destinée cette fois {client.aux}, qui explique {jargon}, et la tester auprès d’une personne extérieure.',
    },
    astuces: {
      claude:
        'Demandez un artefact avec une première maquette de l’infographie : elle sert de croquis avant de passer à Canva.',
      chatgpt:
        'Ouvrez la version en six étapes dans le canevas pour retoucher une étape sans tout régénérer.',
      canva:
        'Gardez une seule police et deux couleurs ; l’écriture magique peut raccourcir une étape trop longue pour son bloc.',
    },
    vigilance:
      'Une procédure simplifiée peut perdre une étape obligatoire (sécurité, validation, conformité) : faites valider l’infographie avant de l’afficher. Aucun nom ni numéro de téléphone personnel sur un affichage.',
    formateur: {
      resultat:
        'Une infographie d’une page en six étapes au plus, fidèle à la procédure, testée auprès d’un lecteur et corrigée, accompagnée d’une version texte.',
      criteres: [
        'Les informations retirées ont été listées et vérifiées une à une.',
        'Un lecteur extérieur a répondu aux questions du test de lecture.',
        'L’infographie a été corrigée après le test.',
        'Une version texte accompagne l’infographie.',
      ],
      pieges: [
        'Étape obligatoire supprimée par souci de simplicité.',
        'Icônes décoratives qui n’aident pas à comprendre, ou trop de couleurs.',
        'Texte trop petit pour être lu sur un mur.',
      ],
      competence: 'discernement',
      technique: 'decomposer',
    },
    motsCles: ['infographie', 'procédure', 'Canva', 'communication interne', 'simplifier'],
  },
  {
    id: 'g-kit-visuels-evenement',
    titre: 'Construire un kit de visuels cohérent pour {evenement.le}',
    niveau: 'avance',
    famille: 'visuels',
    duree: 60,
    outils: ['canva', 'claude', 'chatgpt', 'gemini'],
    outilConseille: 'canva',
    situation:
      'Vous préparez {evenement.le} et la communication part dans tous les sens : chaque collègue fait son visuel, avec ses couleurs et ses polices. Vous voulez un kit complet et cohérent (affiche, publication, story, bannière d’e-mail, invitation) construit sur une même charte.',
    objectif:
      'Définir le message et une charte simple avec l’IA, la fixer dans Canva, puis produire et contrôler une série de visuels cohérents.',
    etapes: [
      'Avec Claude, ChatGPT ou Gemini et le prompt de départ, obtenez le titre, les accroches et trois pistes de style ; choisissez-en une.',
      'Fixez la charte : deux ou trois couleurs, deux polices, le logo de votre structure. Enregistrez-la dans le Kit de marque (offre Pro) ou sur une page de référence du design.',
      'Si besoin, faites générer une image d’illustration commune (ChatGPT ou Gemini), sans texte ni personne reconnaissable.',
      'Créez le visuel principal avec l’IA Canva, en lui donnant la charte et les textes validés.',
      'Déclinez-le en publication, story, bannière d’e-mail et invitation (Redimensionnement magique en offre Pro, sinon à la main), en adaptant les textes.',
      'Contrôlez tout le kit avec la grille du matériau, puis faites-le relire par une seconde personne.',
    ],
    prompt:
      '{Structure.un} de Nouméa organise {evenement.le}. Tu m’aides à préparer sa communication.\nInformations validées : date [jour et heure], lieu [adresse], public [qui], inscription [oui ou non, et comment].\n\n1. Propose un titre court et trois accroches de 10 mots au plus.\n2. Propose trois pistes de style adaptées au public et à la Nouvelle-Calédonie : couleurs avec leur code hexadécimal, polices, type d’image, ton.\n3. Pour la piste que je choisirai, liste les textes de chaque support : affiche A4, publication carrée, story, bannière d’e-mail, invitation. Garde exactement les mêmes informations pratiques partout.\n\nN’invente aucune information pratique : si une information manque, écris [à compléter].',
    materiau: {
      titre: 'Grille de cohérence du kit',
      texte:
        'Pour chaque support (affiche, publication, story, bannière, invitation) :\n- mêmes couleurs et mêmes polices ;\n- même date, même heure, même lieu, même contact ;\n- même titre, accroche adaptée au format ;\n- texte lisible sur un téléphone, contraste suffisant ;\n- aucune faute, aucun texte de remplissage ;\n- aucune personne reconnaissable sans accord, aucun logo d’une autre marque, ni d’un partenaire sans son accord ;\n- image générée signalée comme telle si elle peut passer pour une photo.',
    },
    variantes: {
      simple: 'Se limiter à trois supports (affiche, publication, story), sans Kit de marque.',
      poussee:
        'Ajouter un calendrier de publication sur trois semaines (annonce, rappel, jour J, remerciements) et préparer le visuel de chaque étape avec la même charte.',
    },
    astuces: {
      canva:
        'Avec l’offre Pro, le Kit de marque applique couleurs et polices à chaque design ; sinon, dupliquez toujours le visuel principal au lieu de repartir de zéro.',
      claude:
        'Demandez les trois pistes de style dans un artefact : vous voyez les couleurs côte à côte avant de choisir.',
      chatgpt:
        'Pour l’image commune, demandez le format le plus large dont vous aurez besoin, puis recadrez-la dans Canva pour chaque support.',
      gemini:
        'Demandez deux ou trois variantes d’image avec le même prompt, et gardez la plus sobre : elle se déclinera mieux.',
    },
    vigilance:
      'N’utilisez que le logo de votre structure, et celui d’un partenaire seulement avec son accord. Pas de photo de personne reconnaissable sans autorisation écrite. Vérifiez chaque information pratique sur tous les supports avant diffusion.',
    formateur: {
      resultat:
        'Un kit de cinq supports à la charte commune (couleurs, polices, image), aux informations pratiques identiques, contrôlé avec la grille et relu par une seconde personne.',
      criteres: [
        'La charte a été fixée avant la création des supports.',
        'Les informations pratiques sont identiques sur les cinq supports.',
        'Chaque support est adapté à son format (longueur du texte, cadrage).',
        'La grille de cohérence a été remplie et les défauts corrigés.',
      ],
      pieges: [
        'Une date ou une heure différente sur l’un des supports.',
        'Image générée qui contient un texte déformé ou un faux logo.',
        'Couleurs de la piste choisie qui manquent de contraste (texte clair sur fond clair).',
      ],
      competence: 'diligence',
      technique: 'decomposer',
    },
    motsCles: [
      'kit de communication',
      'charte',
      'Kit de marque',
      'événement',
      'Canva',
      'cohérence',
    ],
  },
];
