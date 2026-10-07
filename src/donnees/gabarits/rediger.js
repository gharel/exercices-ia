/**
 * Gabarits « Rédiger et répondre ». Chaque gabarit est décliné pour chaque métier :
 * {client.un}, {structure.le}… prennent le vocabulaire du métier (voir ../vocabulaire.js).
 */

export const gabarits = [
  {
    id: 'g-repondre-reclamation',
    titre: 'Répondre par écrit à la réclamation {client.du}',
    niveau: 'debutant',
    famille: 'rediger',
    duree: 15,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Vous travaillez dans {structure.un} à Nouméa. {Client.un} vous écrit concernant {motifReclamation}, pour la deuxième fois et sur un ton très mécontent. Votre responsable vous demande de préparer la réponse aujourd’hui, à partir de la fiche de suivi.',
    objectif:
      'Rédiger une réponse qui apaise sans promettre plus que ce qui est décidé, en donnant à l’IA les faits, le ton et les limites à respecter.',
    etapes: [
      'Lisez la fiche de suivi du matériau : repérez ce qui est sûr, ce qui est promis et ce qui ne l’est pas.',
      'Complétez le prompt de départ (votre fonction, votre contact), collez la fiche entre les balises et envoyez-le.',
      'Relisez la réponse proposée : vérifiez la date annoncée et cherchez toute promesse absente de la fiche (remboursement, geste, délai plus court).',
      'Demandez une version de 100 mots au plus, puis comparez : laquelle reconnaît le mieux le problème dès la première phrase ?',
      'Choisissez votre version et corrigez vous-même ce qui ne vous convient pas avant de la présenter à votre responsable.',
    ],
    prompt:
      'Tu es [ta fonction] dans {structure.un} à Nouméa. Rédige la réponse écrite à la réclamation résumée dans la fiche ci-dessous.\n\nObjectif : apaiser {client.le} et rétablir la confiance, sans rien promettre de plus que ce qui figure dans la fiche.\n\nContenu attendu :\n- reconnaître le problème dès la première phrase, sans se justifier longuement ;\n- présenter des excuses pour l’absence de rappel ;\n- annoncer une réponse définitive au plus tard le vendredi 23 octobre ;\n- donner un contact direct : [ton prénom, ta fonction, ton numéro].\n\nTon : courtois, empathique, en vouvoiement, avec des phrases simples et personnelles. Longueur : 150 mots au plus.\n\n<fiche>\n[colle la fiche de suivi ici]\n</fiche>',
    materiau: {
      titre: 'Fiche de suivi de la réclamation (données fictives)',
      texte:
        'Expéditeur : M. Jean-Marc Poiwi\nObjet : réclamation concernant {motifReclamation}\n\nHistorique :\n- lundi 5 octobre : premier appel à l’accueil, demande transmise au service concerné le jour même ;\n- lundi 12 octobre : e-mail très mécontent. Il n’a pas été rappelé, parle d’« amateurisme », menace de laisser un avis négatif en ligne et d’écrire à la direction.\n\nCe que l’on sait :\n- le dossier est bien en cours de traitement, mais personne ne l’a rappelé : c’est une erreur de notre part ;\n- une réponse définitive est possible au plus tard le vendredi 23 octobre ;\n- la responsable accepte de présenter des excuses pour l’absence de rappel ;\n- aucun autre engagement n’est validé : ni remboursement, ni geste, ni délai plus court.',
    },
    variantes: {
      simple:
        'Rédiger seulement les deux premières phrases de la réponse : reconnaître le problème et présenter des excuses.',
      poussee:
        'Rédiger aussi la réponse publique à l’avis négatif qu’il menaçait de publier : courte, sans aucune donnée personnelle ni détail du dossier.',
    },
    astuces: {
      chatgpt:
        'Ouvrez la réponse dans le canevas pour raccourcir ou adoucir un seul paragraphe sans tout régénérer.',
      copilot:
        'Dans Outlook, lancez « Coaching par Copilot » sur votre réponse avant l’envoi : il commente le ton et le ressenti du lecteur.',
    },
    vigilance:
      'Dans une vraie situation, ne collez ni le nom, ni les coordonnées, ni le numéro de dossier : résumez les faits, l’IA n’a besoin que de cela. Relisez chaque date et chaque engagement avant l’envoi.',
    formateur: {
      resultat:
        'Une réponse de 150 mots au plus qui reconnaît le problème dès la première phrase, s’excuse pour l’absence de rappel, annonce le vendredi 23 octobre et donne un contact direct, sans aucune promesse supplémentaire.',
      criteres: [
        'Le prompt donne les faits, le ton, la longueur et les limites à ne pas dépasser.',
        'La date du vendredi 23 octobre est reprise telle quelle.',
        'La réponse ne contient aucun engagement absent de la fiche.',
        'L’apprenant a comparé deux versions et justifié son choix.',
      ],
      pieges: [
        'Accepter une réponse qui promet un remboursement, un geste ou un délai que personne n’a validé.',
        'Garder une réponse défensive qui explique longuement les raisons du retard au lieu de reconnaître l’erreur.',
        'Coller un vrai e-mail de réclamation avec le nom et les coordonnées de son auteur.',
      ],
      competence: 'description',
      technique: 'contexte',
    },
    motsCles: ['réclamation', 'réponse', 'e-mail', 'excuses', 'ton'],
  },
  {
    id: 'g-relance-partenaire',
    titre: 'Rédiger un e-mail de relance {partenaire.au}',
    niveau: 'debutant',
    famille: 'rediger',
    duree: 10,
    outils: ['copilot', 'gemini', 'claude', 'chatgpt'],
    outilConseille: 'copilot',
    situation:
      'Vous travaillez dans {structure.un} à Nouméa. Depuis plus d’un mois, vous attendez des informations {partenaire.du} pour finaliser {documentCourant.un}. Une première relance est restée sans réponse et le retard commence à gêner {client.le}.',
    objectif:
      'Obtenir une relance courtoise et ferme, avec une demande précise et une échéance, en comparant plusieurs tons.',
    etapes: [
      'Lisez l’historique du matériau : qu’attendez-vous exactement, et pour quand ?',
      'Envoyez le prompt de départ en complétant les crochets, avec l’historique entre les balises.',
      'Comparez les trois versions proposées : laquelle est la plus claire sur ce que vous attendez et sur l’échéance ?',
      'Vérifiez qu’aucune version n’invente une conséquence que vous n’avez pas décidée (pénalité, rupture, mise en demeure).',
      'Choisissez la version que vous enverriez, avec son objet, et retouchez-la si besoin.',
    ],
    prompt:
      'Tu es [ta fonction] dans {structure.un} à Nouméa. Rédige la deuxième relance de l’échange ci-dessous, adressée {partenaire.au}.\n\nCe que j’attends : [les informations manquantes], au plus tard le vendredi 16 octobre.\nPourquoi c’est urgent : sans ces informations, je ne peux pas finaliser {documentCourant.le}, et {client.le} attend.\nTon : courtois et ferme, sans reproche, en vouvoiement. 120 mots au plus.\n\nPropose trois versions : une neutre, une chaleureuse, une plus ferme. Pour chacune, ajoute un objet d’e-mail explicite.\n\n<historique>\n[colle l’historique ici]\n</historique>',
    materiau: {
      titre: 'Historique de l’échange (données fictives)',
      texte:
        'Mardi 1er septembre, votre premier e-mail :\n« Bonjour, pour finaliser {documentCourant.le} que nous préparons, pourriez-vous nous transmettre les éléments qui nous manquent (liste jointe) ? Merci d’avance. »\n\nMardi 15 septembre, première relance :\n« Bonjour, je me permets de revenir vers vous concernant ma demande du 1er septembre. Bien cordialement. »\n\nDepuis : aucune réponse. Un appel le lundi 5 octobre est tombé sur la messagerie. {Client.le} a demandé hier où en était son dossier.',
    },
    variantes: {
      simple:
        'Demander une seule version, courtoise, et vérifier qu’elle contient bien la date du 16 octobre.',
      poussee:
        'Préparer aussi la troisième relance, à envoyer si rien n’arrive le 16 octobre, et le message de 30 secondes à laisser sur la messagerie téléphonique.',
    },
    astuces: {
      copilot:
        'Dans Outlook, répondez au dernier message du fil avec « Brouillon avec Copilot » : il tient compte de l’historique de l’échange.',
      gemini:
        'Dans Gmail, « Aide-moi à écrire » propose un brouillon, que vous pouvez ensuite rendre plus formel ou plus court.',
    },
    vigilance:
      'Une relance engage votre structure : relisez-la et n’y laissez aucune menace ni aucune conséquence que votre responsable n’a pas validée.',
    formateur: {
      resultat:
        'Une relance de 120 mots au plus, qui rappelle la demande du 1er septembre, précise ce qui est attendu, fixe le vendredi 16 octobre et reste courtoise.',
      criteres: [
        'La relance dit précisément ce qui est attendu et pour quand.',
        'Elle rappelle la première demande sans reproche.',
        'Aucune conséquence inventée (pénalité, rupture) n’apparaît.',
        'L’objet de l’e-mail suffit à comprendre la demande.',
      ],
      pieges: [
        'Choisir la version la plus ferme, qui menace sans que personne ne l’ait décidé.',
        'Garder une relance vague (« je reviens vers vous ») sans échéance.',
      ],
      competence: 'description',
      technique: 'options',
    },
    motsCles: ['relance', 'e-mail', 'partenaire', 'échéance', 'ton'],
  },
  {
    id: 'g-annoncer-report',
    titre: 'Annoncer avec tact le report {evenement.du}',
    niveau: 'debutant',
    famille: 'rediger',
    duree: 15,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Vous travaillez dans {structure.un} à Nouméa. La date {evenement.du} approche et 120 personnes sont inscrites, mais le lieu prévu n’est plus disponible à cause d’un dégât des eaux. Vous devez annoncer le report sans décourager les inscrits.',
    objectif:
      'Annoncer une mauvaise nouvelle clairement dès le début, sans promettre ce qui n’est pas confirmé, et adapter le message à deux canaux.',
    etapes: [
      'Lisez les informations du matériau et distinguez ce qui est confirmé de ce qui ne l’est pas.',
      'Envoyez le prompt de départ, avec les informations entre les balises.',
      'Vérifiez que la mauvaise nouvelle arrive dans les deux premières phrases et que la nouvelle date est présentée comme « sous réserve ».',
      'Demandez une version SMS de 160 caractères au plus, puis recomptez vous-même les caractères.',
      'Comparez votre e-mail avec celui d’un voisin : lequel donnerait encore envie de venir ?',
    ],
    prompt:
      'Tu es [ta fonction] dans {structure.un} à Nouméa. Rédige l’e-mail qui annonce aux inscrits le report {evenement.du}, à partir des informations ci-dessous.\n\nConsignes :\n- annonce le report dès la première phrase, avec la raison en quelques mots ;\n- présente la nouvelle date comme « sous réserve de confirmation » ;\n- explique ce que les inscrits doivent faire ;\n- termine sur une note positive et sincère ;\n- 150 mots au plus, en vouvoiement.\n\nN’ajoute aucune information absente des notes : si un point n’est pas tranché, dis qu’il sera précisé plus tard.\n\n<informations>\n[colle les informations ici]\n</informations>',
    materiau: {
      titre: 'Informations internes sur le report (données fictives)',
      texte:
        'Événement : {evenement.s}\nDate prévue : samedi 17 octobre, de 9 h à 13 h\nInscrits : 120 personnes, inscrites par e-mail\nRaison du report : le lieu prévu n’est plus disponible (dégât des eaux)\nNouvelle date : samedi 14 novembre, mêmes horaires, sous réserve de confirmation du lieu d’ici le vendredi 23 octobre\nInscriptions : conservées automatiquement ; pour se désinscrire, il suffit de répondre à l’e-mail\nNon tranché : le maintien du buffet de fin de matinée\nContact : [prénom, fonction, téléphone]',
    },
    variantes: {
      simple: 'Rédiger seulement l’e-mail, sans la version SMS.',
      poussee:
        'Rédiger aussi la publication pour la page Facebook de la structure et le message d’accueil téléphonique, en gardant exactement les mêmes informations.',
    },
    astuces: {
      claude:
        'Demandez à Claude de relire son propre e-mail en se mettant à la place d’un inscrit déçu : qu’est-ce qui lui manque pour s’organiser ?',
      gemini:
        'Dans Gmail, « Aide-moi à écrire » rédige un premier jet à partir de vos notes ; demandez ensuite une version plus courte.',
    },
    vigilance:
      'Ne collez jamais la liste des inscrits (noms, e-mails) dans l’IA : elle n’en a pas besoin pour rédiger le message. Envoyez ensuite l’e-mail en copie cachée.',
    formateur: {
      resultat:
        'Un e-mail qui annonce le report dès la première phrase, donne le samedi 14 novembre « sous réserve », précise que l’inscription est conservée, ne promet pas le buffet, et un SMS de 160 caractères au plus.',
      criteres: [
        'Le report et sa raison figurent dans les deux premières phrases.',
        'La nouvelle date est présentée comme non confirmée.',
        'Le buffet n’est ni promis ni annulé : il sera précisé plus tard.',
        'Le SMS fait 160 caractères au plus, recompté par l’apprenant.',
      ],
      pieges: [
        'Accepter un e-mail qui présente le 14 novembre comme une date ferme.',
        'Croire l’IA quand elle annonce le nombre de caractères du SMS, sans le recompter.',
        'Une ouverture trop longue (« Nous avons le regret… ») qui repousse la nouvelle au troisième paragraphe.',
      ],
      competence: 'discernement',
      technique: 'format',
    },
    motsCles: ['mauvaise nouvelle', 'report', 'événement', 'e-mail', 'SMS'],
  },
  {
    id: 'g-offre-emploi-notes',
    titre: 'Rédiger l’offre d’emploi pour {poste.un} à partir de notes en vrac',
    niveau: 'intermediaire',
    famille: 'rediger',
    duree: 30,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Vous travaillez dans {structure.un} à Nouméa. Votre responsable veut recruter {poste.un} et vous laisse ses notes, prises à la volée. L’offre doit paraître la semaine prochaine sur les sites d’emploi locaux.',
    objectif:
      'Faire rédiger une offre d’emploi en plusieurs échanges : laisser l’IA poser ses questions, combler les manques avec de vraies informations et écarter tout critère discriminatoire.',
    etapes: [
      'Envoyez le prompt de départ avec les notes du matériau : l’IA doit d’abord vous poser ses questions, sans rédiger.',
      'Répondez avec des informations plausibles, tirées de votre connaissance du métier. Pour ce que vous ne savez pas (le salaire, par exemple), demandez-lui de laisser un crochet.',
      'Demandez l’offre complète : intitulé, présentation de la structure, missions, profil, conditions, modalités de candidature.',
      'Relisez-la en cherchant toute information inventée et tout critère sans lien avec le poste (âge, sexe, origine, situation familiale).',
      'Demandez une version de 80 mots pour les réseaux sociaux, et vérifiez qu’elle reprend exactement les mêmes conditions.',
    ],
    prompt:
      'Je suis [ta fonction] dans {structure.un} à Nouméa et nous recrutons {poste.un} (H/F). Aide-moi à rédiger l’offre d’emploi à partir de mes notes ci-dessous.\n\nAvant de rédiger, pose-moi au maximum cinq questions sur ce qui manque pour faire une offre complète et attractive. Attends mes réponses.\n\nEnsuite, l’offre devra :\n- tenir en 300 mots au plus ;\n- présenter les missions avec des verbes d’action ;\n- distinguer les compétences exigées et les atouts appréciés ;\n- ne retenir que des critères en lien direct avec le poste ;\n- laisser entre crochets toute information que je ne t’ai pas donnée, sans l’inventer.\n\n<notes>\n[colle les notes ici]\n</notes>',
    materiau: {
      titre: 'Notes du responsable (données fictives)',
      texte:
        '{Poste.s} H/F, CDI, temps plein\nRemplace Laurent (départ en métropole fin novembre) → mêmes missions, voir sa fiche de poste\nLieu : Nouméa, quelques déplacements dans le Grand Nouméa\nDémarrage : début décembre si possible\nProfil : 2 ans d’expérience mini dans {domaine}, à l’aise avec les outils bureautiques, permis B\nidéalement pas trop âgé, l’équipe est jeune\nbon relationnel avec {client.les}, indispensable\nSalaire : selon profil, fourchette à voir avec la direction\nAvantages : mutuelle, 13e mois ? (à confirmer)\nCandidature : CV + lettre avant le 31/10 → recrutement@[nom-de-la-structure].nc',
    },
    variantes: {
      simple:
        'Rédiger directement l’offre à partir des notes, sans l’étape des questions, puis la relire avec la liste des pièges.',
      poussee:
        'Préparer aussi cinq questions d’entretien liées aux missions, et une grille pour évaluer les réponses de la même façon pour tous les candidats.',
    },
    astuces: {
      chatgpt:
        'Ouvrez l’offre dans le canevas pour retravailler une seule rubrique (le profil, par exemple) sans toucher au reste.',
      copilot:
        'Avec la licence adaptée, Copilot dans Word rédige l’offre directement dans le document, à partir des notes collées en dessous.',
    },
    vigilance:
      'Une offre d’emploi ne doit contenir aucun critère discriminatoire (âge, sexe, origine, situation familiale…). En cas de doute sur une mention, renseignez-vous auprès des services compétents avant de publier.',
    formateur: {
      resultat:
        'Une offre de 300 mots au plus, sans critère d’âge, avec des missions fournies par l’apprenant et non inventées, un salaire et des avantages laissés « à confirmer », la date limite du 31 octobre, et une version courte cohérente.',
      criteres: [
        'L’apprenant a laissé l’IA poser ses questions avant de rédiger.',
        'La mention « pas trop âgé » a disparu, et l’apprenant sait expliquer pourquoi.',
        'Le salaire et le 13e mois ne sont pas inventés.',
        'La version courte reprend les mêmes conditions que l’offre complète.',
      ],
      pieges: [
        'Laisser l’IA inventer les missions, faute de fiche de poste, sans s’en apercevoir.',
        'Garder une formule déguisée (« équipe jeune et dynamique ») qui reprend le critère d’âge.',
        'Accepter un salaire ou des avantages chiffrés par l’IA.',
      ],
      competence: 'diligence',
      technique: 'iterer',
    },
    motsCles: ['recrutement', 'offre d’emploi', 'annonce', 'discrimination', 'questions'],
  },
  {
    id: 'g-modele-reponse-variables',
    titre: 'Créer un modèle de réponse réutilisable avec des variables',
    niveau: 'intermediaire',
    famille: 'rediger',
    duree: 30,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Vous travaillez dans {structure.un} à Nouméa. Chaque semaine, {client.un} vous écrit concernant {motifReclamation}, ou pour une réclamation proche. Chacun dans l’équipe répond à sa façon, avec des oublis. Vous voulez un modèle commun, avec des cases à remplir.',
    objectif:
      'Faire construire un modèle à partir de réponses existantes, avec des variables bien nommées, puis le tester sur un nouveau cas.',
    etapes: [
      'Collez les trois réponses du matériau avec le prompt de départ : l’IA doit en tirer un modèle commun, pas en écrire un de zéro.',
      'Vérifiez les variables proposées : chacune a-t-elle un nom clair, entre crochets et en majuscules ([DATE DE LA DEMANDE], [DÉLAI]…) ?',
      'Demandez des corrections si une formule vague ou un nom tiré des exemples est resté dans le modèle.',
      'Testez le modèle : décrivez un nouveau cas fictif, demandez à l’IA de remplir le modèle, et vérifiez qu’aucune variable n’est restée vide ou n’a été inventée.',
      'Enregistrez le modèle dans un document partagé, avec une ligne de mode d’emploi au début.',
    ],
    prompt:
      'Tu es [ta fonction] dans {structure.un} à Nouméa. Voici trois réponses à des réclamations, écrites par trois collègues. À partir de ces exemples, construis un modèle de réponse commun et réutilisable.\n\nConsignes :\n- garde ce qui marche dans chaque exemple et harmonise le ton : courtois, clair, en vouvoiement ;\n- remplace tout ce qui change d’un cas à l’autre par une variable entre crochets, en majuscules : [NOM], [DATE DE LA DEMANDE]… ;\n- prévois trois versions du paragraphe central : erreur reconnue, dossier en cours, demande qui ne relève pas de nous ;\n- termine par la liste des variables, avec pour chacune un exemple de valeur.\n\n<exemples>\n[colle les trois réponses ici]\n</exemples>',
    materiau: {
      titre: 'Trois réponses envoyées le mois dernier (données fictives)',
      texte:
        'Réponse 1 (Karine) :\n« Bonjour Madame Kaloi, suite à votre mail du 3 septembre, effectivement on a fait une erreur sur votre dossier, c’est corrigé depuis ce matin. Désolée pour le désagrément. Bonne journée, Karine »\n\nRéponse 2 (Marc) :\n« Madame, Monsieur, nous accusons réception de votre courrier en date du 10 septembre. Votre dossier n° 2026-0412 est actuellement en cours de traitement par nos services. Une réponse vous sera apportée dans les meilleurs délais. Veuillez agréer, Madame, Monsieur, l’expression de nos salutations distinguées. Le service accueil »\n\nRéponse 3 (Léa) :\n« Bonjour Monsieur Tehei, merci pour votre message du 17 septembre. Je comprends votre agacement. Après vérification, cette demande ne relève pas de notre structure : je vous invite à contacter directement l’organisme concerné, dont voici les coordonnées : [coordonnées]. Je reste disponible si besoin. Bien cordialement, Léa, accueil »',
    },
    variantes: {
      simple:
        'Construire le modèle pour un seul cas (dossier en cours), sans les trois versions du paragraphe central.',
      poussee:
        'Transformer le modèle en prompt réutilisable : on y colle la réclamation reçue, l’IA choisit le cas, remplit les variables et liste ce qu’elle ne sait pas.',
    },
    astuces: {
      claude:
        'Demandez le modèle dans un artefact : vous le retouchez à côté de la conversation, puis vous le copiez dans votre document.',
      gemini:
        'Ouvrez le modèle dans Canvas pour retoucher un seul paragraphe sans régénérer le reste.',
    },
    vigilance:
      'Les exemples que vous donnez à l’IA doivent être anonymisés : remplacez les noms et les numéros de dossier avant de les coller.',
    formateur: {
      resultat:
        'Un modèle au ton harmonisé, avec des variables en majuscules entre crochets, trois versions du paragraphe central, la liste des variables, et un test sur un nouveau cas sans variable oubliée.',
      criteres: [
        'Le modèle s’appuie sur les exemples fournis (ton de la réponse 3, rappel de la date de la demande).',
        'Aucun nom ni numéro de dossier des exemples ne reste dans le modèle.',
        '« Dans les meilleurs délais » est remplacé par une variable [DÉLAI] ou une échéance précise.',
        'Le test sur un nouveau cas a été vérifié variable par variable.',
      ],
      pieges: [
        'Garder une formule vague (« dans les meilleurs délais ») qui ne répond pas à la question {client.du}.',
        'Laisser dans le modèle un nom ou un numéro de dossier tiré des exemples.',
        'Un modèle si général qu’il ne sert plus à rien : il faut des cas précis.',
      ],
      competence: 'description',
      technique: 'exemples',
    },
    motsCles: ['modèle', 'variables', 'réponse type', 'réclamation', 'exemples'],
  },
  {
    id: 'g-simulation-negociation',
    titre: 'Simuler une négociation tendue, puis rédiger l’e-mail de confirmation',
    niveau: 'avance',
    famille: 'rediger',
    duree: 45,
    outils: ['chatgpt', 'claude', 'gemini', 'copilot'],
    outilConseille: 'chatgpt',
    situation:
      'Vous travaillez dans {structure.un} à Nouméa et vous préparez un rendez-vous délicat. Pour vous entraîner, l’IA joue {situationTendue} ; vous jouez votre propre rôle. Ensuite, vous rédigez l’e-mail qui confirme par écrit ce qui a été convenu.',
    objectif:
      'Préparer une négociation par un jeu de rôle bien cadré, obtenir un retour critique, puis rédiger un écrit fidèle à l’accord obtenu.',
    etapes: [
      'Remplissez la fiche de préparation du matériau : les faits, votre objectif, ce que vous pouvez proposer, ce que vous ne pouvez pas céder.',
      'Envoyez le prompt de départ avec votre fiche, et menez la discussion sur 6 à 10 échanges, une réplique à la fois.',
      'Écrivez « FIN » : l’IA sort de son rôle et vous fait un retour selon la grille. Demandez-lui vos trois répliques les plus faibles et une meilleure formulation pour chacune.',
      'Rejouez la scène en demandant à l’IA d’être plus difficile, et comparez les deux résultats.',
      'Demandez enfin l’e-mail de confirmation de l’accord obtenu, et vérifiez qu’il ne contient aucune concession que vous n’avez pas faite.',
    ],
    prompt:
      'Nous allons faire un jeu de rôle pour m’entraîner à une négociation. Je suis [ta fonction] dans {structure.un} à Nouméa.\n\nTu joues {situationTendue}. Reste dans ton rôle jusqu’à ce que j’écrive « FIN ».\n\nRègles du jeu :\n- réponds en trois phrases au plus, une réplique à la fois, puis attends ma réponse ;\n- sois réaliste : tu restes sur tes positions au début, et tu ne lâches du terrain que si je t’écoute et que je fais des propositions concrètes ;\n- choisis un objectif caché, sans me le dire : à moi de le découvrir en posant des questions ;\n- n’accepte pas une proposition floue.\n\nMa fiche de préparation :\n<fiche>\n[colle ta fiche ici]\n</fiche>\n\nQuand j’écris « FIN », sors du rôle et fais-moi un retour franc selon cette grille : écoute, reformulation, propositions, fermeté sur mes limites, ton. Pour chaque point, cite un passage de nos échanges.',
    materiau: {
      titre: 'Fiche de préparation et grille de retour',
      texte:
        'Fiche de préparation (à remplir avant de commencer)\n- Les faits : [ce qui s’est passé, en trois lignes]\n- Mon objectif : [ce que je veux obtenir à la fin du rendez-vous]\n- Ce que je peux proposer : [deux concessions au plus, par ordre de préférence]\n- Ce que je ne peux pas céder : [mes limites]\n- Si nous ne trouvons pas d’accord : [la suite prévue]\n\nGrille de retour (à faire appliquer après « FIN »)\n1. Écoute : ai-je laissé parler mon interlocuteur et posé des questions ?\n2. Reformulation : ai-je reformulé sa demande avant de répondre ?\n3. Propositions : ai-je proposé des solutions concrètes et datées ?\n4. Fermeté : ai-je tenu mes limites sans m’énerver ?\n5. Ton : ai-je gardé un ton courtois du début à la fin ?',
    },
    variantes: {
      simple: 'Faire une seule simulation de cinq échanges, puis rédiger l’e-mail de confirmation.',
      poussee:
        'Installer ces règles du jeu dans un Projet, un GPT ou un Gem, pour que vos collègues s’entraînent sur la même situation, puis comparer vos retours.',
    },
    astuces: {
      chatgpt:
        'Créez un Projet qui contient la fiche et les règles du jeu : vous rejouez la scène autant de fois que nécessaire, toujours sur la même base.',
      claude:
        'Après « FIN », demandez à Claude de réécrire vos trois répliques les plus faibles, puis rejouez la scène en les utilisant.',
      gemini:
        'Un Gem qui contient les règles du jeu permet à toute l’équipe de s’entraîner sur la même situation.',
    },
    vigilance:
      'Inventez les faits : ne racontez pas un vrai dossier avec des noms. Gardez aussi un œil critique sur le retour de l’IA, souvent trop indulgent : demandez-lui explicitement vos points faibles.',
    formateur: {
      resultat:
        'Deux simulations de 6 à 10 échanges, un retour structuré selon la grille avec des passages cités, et un e-mail de confirmation qui reprend exactement l’accord obtenu.',
      criteres: [
        'La fiche de préparation fixe des limites claires avant de jouer.',
        'Le retour de l’IA cite des répliques précises, pas des généralités.',
        'La deuxième simulation montre un progrès sur au moins un point de la grille.',
        'L’e-mail de confirmation ne contient aucune concession absente de la discussion.',
      ],
      pieges: [
        'Laisser l’IA jouer les deux rôles ou écrire plusieurs répliques d’un coup : la simulation perd son intérêt.',
        'Se contenter d’un retour flatteur et général.',
        'Garder dans l’e-mail final un engagement que l’IA a ajouté pour « apaiser ».',
      ],
      competence: 'discernement',
      technique: 'simulation',
    },
    motsCles: ['négociation', 'jeu de rôle', 'simulation', 'situation tendue', 'confirmation'],
  },
  {
    id: 'g-courrier-long-etapes',
    titre: 'Rédiger un courrier long en trois temps : plan, rédaction, relecture critique',
    niveau: 'avance',
    famille: 'rediger',
    duree: 45,
    outils: ['claude', 'chatgpt', 'gemini', 'copilot'],
    outilConseille: 'claude',
    situation:
      'Vous travaillez dans {structure.un} à Nouméa. Au 1er décembre, l’organisation de l’accueil change : nouveaux horaires, rendez-vous en ligne, adresse e-mail unique. Vous devez rédiger le courrier d’information d’une page envoyé {client.aux}.',
    objectif:
      'Découper une rédaction longue en étapes contrôlées, faire critiquer le texte dans une conversation séparée, puis le vérifier soi-même.',
    etapes: [
      'Envoyez le prompt de départ avec les notes du matériau : l’IA propose seulement un plan et vous pose ses questions.',
      'Validez ou corrigez le plan, répondez aux questions, puis demandez la rédaction partie par partie.',
      'Ouvrez une nouvelle conversation, ou un autre outil, collez le courrier et demandez : « Tu es {client.un} qui reçoit ce courrier et le lit en deux minutes. Dis-moi ce que tu n’as pas compris, ce qui t’inquiète et ce que tu dois faire après lecture. »',
      'Corrigez le courrier à partir de cette critique, puis vérifiez vous-même chaque date, horaire et adresse par rapport aux notes.',
      'Demandez enfin une version de cinq lignes pour l’e-mail d’accompagnement ou la page d’accueil du site.',
    ],
    prompt:
      'Tu es [ta fonction] dans {structure.un} à Nouméa. Je dois écrire un courrier d’information d’une page, envoyé {client.aux}, pour annoncer les changements décrits dans les notes ci-dessous.\n\nNous allons travailler en trois temps. Pour l’instant, ne rédige pas le courrier :\n1. propose un plan en quatre ou cinq parties, avec l’idée principale de chacune ;\n2. pose-moi les questions dont tu as besoin, cinq au maximum ;\n3. signale les informations des notes qui te semblent floues ou contradictoires.\n\n<notes>\n[colle les notes ici]\n</notes>',
    materiau: {
      titre: 'Notes sur les changements au 1er décembre (données fictives)',
      texte:
        'Changements au mardi 1er décembre :\n- accueil du public : du lundi au vendredi, de 7 h 30 à 11 h 30 et de 13 h à 16 h (avant : de 7 h 30 à 16 h 30 sans interruption) ; fermé le mercredi après-midi\n- rendez-vous : à prendre en ligne sur le site ou par téléphone ; sans rendez-vous, seulement le matin\n- nouvelle adresse e-mail unique : contact@[nom-de-la-structure].nc ; les anciennes adresses individuelles fonctionnent jusqu’au 31 janvier\n- téléphone inchangé\n- paiement : plus de chèques à partir du 1er janvier (virement ou carte bancaire)\n- pourquoi : mieux préparer chaque rendez-vous et réduire l’attente (plaintes {client.dep} sur les délais)\n- à vérifier : le site sera-t-il prêt le 1er décembre ? Le prestataire dit « normalement ».',
    },
    variantes: {
      simple:
        'Faire seulement le plan et la rédaction, sans la relecture critique dans une autre conversation.',
      poussee:
        'Ajouter une étape : faire produire le courrier en fichier Word mis en page, puis une affiche en langage clair pour l’accueil, avec les mêmes informations.',
    },
    astuces: {
      claude:
        'Une fois le texte validé, demandez à Claude de créer directement le fichier Word du courrier, prêt à imprimer.',
      chatgpt:
        'Rédigez dans le canevas : vous pouvez faire retravailler une seule partie sans toucher au reste.',
      gemini: 'Ouvrez le courrier dans Canvas pour retoucher une partie à la fois.',
      copilot:
        'Avec la licence adaptée, Copilot dans Word rédige partie par partie directement dans le document.',
    },
    vigilance:
      'Chaque date et chaque adresse du courrier engagent votre structure : vérifiez-les une à une avec les notes. N’annoncez pas un service en ligne qui n’est pas encore prêt.',
    formateur: {
      resultat:
        'Un plan validé avant la rédaction, un courrier d’une page fidèle aux notes (horaires, 31 janvier pour les anciennes adresses, 1er janvier pour les chèques), une critique obtenue dans une conversation séparée et une version courte.',
      criteres: [
        'L’apprenant a validé le plan avant de demander la rédaction.',
        'L’incertitude sur le site est signalée, et le courrier ne promet pas sans réserve la prise de rendez-vous en ligne.',
        'Les deux dates (1er décembre, 1er janvier) ne sont pas confondues.',
        'La relecture critique a eu lieu dans une conversation séparée et a conduit à au moins une correction.',
      ],
      pieges: [
        'Demander tout le courrier d’un coup et perdre le contrôle de sa structure.',
        'Faire relire le texte par la même conversation, qui valide ce qu’elle vient d’écrire.',
        'Laisser passer « plus de chèques à partir du 1er décembre » au lieu du 1er janvier.',
      ],
      competence: 'delegation',
      technique: 'decomposer',
    },
    motsCles: ['courrier', 'plan', 'relecture', 'changement d’organisation', 'étapes'],
  },
];
