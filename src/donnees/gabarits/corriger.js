/**
 * Gabarits « Corriger et reformuler ». Chaque gabarit est décliné pour chaque métier :
 * {client.un}, {structure.le}… prennent le vocabulaire du métier (voir ../vocabulaire.js).
 */

export const gabarits = [
  {
    id: 'g-email-avant-envoi',
    titre: 'Corriger un e-mail avant de l’envoyer {client.au}',
    niveau: 'debutant',
    famille: 'corriger',
    duree: 10,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'copilot',
    situation:
      'Vous travaillez dans {structure.un} à Nouméa. Un collègue a écrit à la hâte un e-mail destiné {client.au}. Il vous demande de le relire avant l’envoi : il contient des fautes et un ton trop sec.',
    objectif:
      'Obtenir une correction fiable en précisant le destinataire, le ton voulu et ce qui ne doit pas changer.',
    etapes: [
      'Copiez l’e-mail du matériau dans votre outil d’IA.',
      'Demandez une correction de l’orthographe et un ton courtois, en précisant le destinataire.',
      'Demandez la liste des corrections faites, puis vérifiez que les dates et les montants n’ont pas changé.',
      'Demandez une version plus courte, de cinq lignes au maximum, et choisissez celle que vous enverriez.',
    ],
    prompt:
      'Tu es assistant dans {structure.un} à Nouméa. Corrige l’orthographe et la grammaire de l’e-mail ci-dessous, destiné {client.au}. Rends le ton courtois et professionnel, en vouvoiement. Ne change ni les dates, ni les montants, ni les engagements pris. Donne l’e-mail corrigé, puis la liste des corrections.\n\n<email>\n[collez l’e-mail ici]\n</email>',
    materiau: {
      titre: 'E-mail à corriger',
      texte:
        'Bonjour,\n\nSuite a votre appel de ce matin, je vous confirme qu’on a bien reçu votre réclamation et qu’elle est en cours de traitement. On vous recontacte d’ici jeudi 14 au plus tard, pas la peine de rappeler avant. Pour info les délais sont normal pour cette période.\n\nCdlt\nPierre',
    },
    variantes: {
      simple: 'Se limiter à la correction de l’orthographe, sans changer le ton.',
      poussee:
        'Demander trois versions (très formelle, chaleureuse, très courte) et justifier son choix auprès du groupe.',
    },
    vigilance:
      'Avant de coller un vrai e-mail, retirez les noms, adresses et numéros de dossier : l’IA n’en a pas besoin pour corriger.',
    formateur: {
      resultat:
        'Un e-mail sans faute, au ton courtois, qui garde la date du jeudi 14 et l’engagement de recontacter.',
      criteres: [
        'Le prompt précise le destinataire et le ton voulu.',
        'La date et l’engagement sont conservés.',
        'L’apprenant a relu la liste des corrections.',
      ],
      pieges: [
        'Accepter une version qui promet un nouveau délai ou un geste commercial que personne n’a validé.',
        'Coller l’e-mail réel avec les données personnelles du destinataire.',
      ],
      competence: 'description',
      technique: 'contexte',
    },
    motsCles: ['e-mail', 'orthographe', 'ton', 'relecture'],
  },
  {
    id: 'g-langage-clair',
    titre: 'Simplifier en langage clair un texte qui explique {jargon}',
    niveau: 'debutant',
    famille: 'corriger',
    duree: 15,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Vous travaillez dans {structure.un} à Nouméa. Les explications écrites que vous remettez {client.aux} sont pleines de jargon : beaucoup reviennent poser les mêmes questions. Vous voulez une version que tout le monde comprend du premier coup, sans erreur.',
    objectif:
      'Faire réécrire un texte technique en langage clair, en précisant le public, et vérifier que la simplification ne trahit pas le sens.',
    etapes: [
      'Prenez un texte de votre structure qui explique {jargon}, sans données personnelles. À défaut, demandez à l’IA un paragraphe fictif de 120 mots sur ce sujet, écrit dans le jargon du métier, avec des sigles et des phrases longues.',
      'Envoyez le prompt de départ avec ce texte entre les balises.',
      'Contrôlez la version claire avec la grille du matériau, point par point.',
      'Comparez phrase par phrase avec l’original : aucune information ne doit avoir été perdue, faussée ou ajoutée.',
      'Faites lire la version claire à un voisin qui ne travaille pas dans {domaine} : peut-il la réexpliquer avec ses mots ?',
    ],
    prompt:
      'Réécris le texte ci-dessous en langage clair, pour {client.un} qui ne travaille pas dans {domaine} et qui le lira rapidement.\n\nRègles :\n- des phrases de 20 mots au plus, une idée par phrase ;\n- des mots de tous les jours ; si un terme technique est indispensable, explique-le entre parenthèses la première fois ;\n- les sigles écrits en toutes lettres ;\n- un exemple concret, avec des montants fictifs en XPF si c’est utile ;\n- ne change pas le sens et n’ajoute aucune règle absente du texte.\n\nDonne d’abord la version claire, puis la liste des termes que tu as remplacés ou expliqués.\n\n<texte>\n[colle le texte ici]\n</texte>',
    materiau: {
      titre: 'Grille du langage clair',
      texte:
        '1. Le message principal est dans la première phrase.\n2. Chaque phrase fait 20 mots au plus et ne contient qu’une idée.\n3. Les mots sont ceux de tous les jours ; les termes techniques restants sont expliqués.\n4. Aucun sigle n’est laissé sans explication.\n5. Les verbes sont actifs : « vous recevez » plutôt que « il vous sera adressé ».\n6. Un exemple concret aide à comprendre.\n7. Le lecteur sait ce qu’il doit faire, et pour quand.',
    },
    variantes: {
      simple:
        'Se limiter aux points 2 à 4 de la grille : phrases courtes, mots simples, sigles expliqués.',
      poussee:
        'Produire aussi une version FALC (facile à lire et à comprendre) pour un public en difficulté de lecture, puis comparer : qu’est-ce qui change par rapport au langage clair ?',
    },
    astuces: {
      copilot:
        'Avec la licence adaptée, sélectionnez le paragraphe dans Word et demandez à Copilot de le réécrire plus simplement, puis comparez avec l’original.',
      gemini:
        'Ouvrez le texte dans Canvas : vous pouvez faire simplifier un seul paragraphe à la fois.',
    },
    vigilance:
      'Simplifier, c’est risquer de fausser : faites valider la version claire par la personne qui maîtrise le sujet avant de la distribuer.',
    formateur: {
      resultat:
        'Une version claire qui respecte la grille (phrases courtes, sigles expliqués, exemple concret) sans perdre ni ajouter d’information, et qu’un lecteur extérieur au métier sait réexpliquer.',
      criteres: [
        'Le prompt précise le public et les règles d’écriture.',
        'La version claire respecte au moins cinq critères de la grille.',
        'Le sens est identique à l’original, vérifié phrase par phrase.',
        'Un lecteur extérieur au métier peut réexpliquer le texte.',
      ],
      pieges: [
        'Accepter une simplification devenue fausse : une exception oubliée, un « toujours » ajouté.',
        'Garder un sigle ou un terme technique parce qu’il semble évident à l’apprenant.',
        'Laisser l’IA présenter son exemple chiffré comme une règle générale.',
      ],
      competence: 'description',
      technique: 'format',
    },
    motsCles: ['langage clair', 'FALC', 'simplifier', 'jargon', 'reformuler'],
  },
  {
    id: 'g-anonymiser-avant-ia',
    titre: 'Anonymiser un texte avant de le confier à l’IA',
    niveau: 'debutant',
    famille: 'corriger',
    duree: 15,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    situation:
      'Vous travaillez dans {structure.un} à Nouméa. Une collègue vous demande de corriger un e-mail interne écrit à la hâte, avant qu’elle l’envoie à sa responsable. Il contient des fautes, mais aussi des informations personnelles sur {client.un}.',
    objectif:
      'Repérer et remplacer les données personnelles avant d’utiliser l’IA, puis réintégrer les vraies informations en dehors de l’outil.',
    etapes: [
      'Faites comme si les données du matériau étaient réelles : ne le collez pas tel quel.',
      'Repérez {donneesSensibles}, ainsi que tout ce qui permet de reconnaître une personne : adresse, date de naissance, santé, situation familiale.',
      'Dans un traitement de texte, remplacez chaque donnée utile par un repère entre crochets ([CLIENT], [MONTANT]…) et supprimez ce qui ne sert pas à la correction.',
      'Envoyez le prompt de départ avec la version anonymisée, puis relisez la correction.',
      'Remettez les vraies informations dans votre traitement de texte, pas dans l’IA. Comparez votre version anonymisée avec celle d’un voisin : qu’a-t-il laissé passer ?',
    ],
    prompt:
      'Corrige l’orthographe, la grammaire et la ponctuation de l’e-mail interne ci-dessous. Rends le ton professionnel, mais garde le tutoiement entre collègues.\n\nLes repères entre crochets ([CLIENT], [MONTANT]…) remplacent des informations confidentielles : laisse-les exactement tels quels, sans les compléter.\n\nDonne l’e-mail corrigé, puis la liste des corrections.\n\n<email>\n[colle ici la version anonymisée]\n</email>',
    materiau: {
      titre: 'E-mail interne à faire corriger (données fictives)',
      texte:
        'Salut Sandrine,\n\nje te fait un point sur le dossier de M. Paul Tein-Wahio (né le 12/03/1981, tél. 77 12 34, 14 rue des Flamboyants à Dumbéa). Il nous a apellé hier tres inquiet : il est en arret maladie depuis un mois et sa femme vient de perdre son emploi, il pourra pas régler les 85 000 XPF avant la fin du mois. Il propose de payer en trois fois, il a déja envoyé son RIB : 12345 67890 00012345678 90.\n\nEst ce que tu peux voir avec la direction si on accepte un échéancier ? Il faudrait lui répondre avant vendredi.\n\nMerci, Karine',
    },
    variantes: {
      simple:
        'Remplacer seulement le nom, le téléphone et l’adresse, puis faire corriger, et discuter ensuite de ce qui restait.',
      poussee:
        'Rédiger une règle d’équipe en cinq lignes : quelles données ne jamais coller dans une IA, et par quoi les remplacer.',
    },
    astuces: {
      chatgpt:
        'Si la mémoire est activée, ChatGPT peut retenir des informations d’une conversation à l’autre : vérifiez ce qu’elle contient, ou désactivez-la pour les sujets sensibles.',
    },
    vigilance:
      'Quel que soit l’outil, la règle reste la même : l’IA n’a pas besoin de savoir qui est concerné pour corriger un texte. La santé et la situation familiale sont des informations particulièrement sensibles.',
    formateur: {
      resultat:
        'Une version anonymisée sans nom, date de naissance, téléphone, adresse ni RIB, où la santé et la situation familiale sont résumées (« des difficultés personnelles »), puis un e-mail corrigé dans lequel l’apprenant a remis les informations utiles hors de l’IA.',
      criteres: [
        'Aucune donnée permettant de reconnaître la personne n’est envoyée à l’IA.',
        'Les informations inutiles à la correction (RIB, date de naissance) sont supprimées, pas seulement masquées.',
        'Les repères entre crochets sont intacts dans la version corrigée.',
        'Le montant et l’échéance (avant vendredi) sont conservés.',
      ],
      pieges: [
        'Oublier les données indirectes : adresse, date de naissance, arrêt maladie, situation du conjoint.',
        'Laisser l’IA « compléter » les repères avec des noms inventés.',
        'Recoller les vraies données dans la conversation pour obtenir la version finale.',
      ],
      competence: 'diligence',
      technique: 'structurer',
    },
    motsCles: ['anonymiser', 'données personnelles', 'confidentialité', 'correction'],
  },
  {
    id: 'g-adapter-ton',
    titre: 'Adapter le ton de deux messages, l’un trop familier, l’autre trop sec',
    niveau: 'intermediaire',
    famille: 'corriger',
    duree: 20,
    outils: ['copilot', 'claude', 'chatgpt', 'gemini'],
    outilConseille: 'copilot',
    situation:
      'Vous travaillez dans {structure.un} à Nouméa. Deux messages vont partir : un e-mail trop familier destiné {partenaire.au}, et une note de service si sèche qu’elle risque de braquer l’équipe. Vous les reprenez avant l’envoi.',
    objectif:
      'Faire diagnostiquer puis ajuster le ton d’un texte, en montrant à l’IA un exemple du ton attendu, sans perdre le fond du message.',
    etapes: [
      'Collez les deux messages et demandez d’abord un diagnostic, sans réécriture : quel effet chacun produit-il sur son lecteur, et pourquoi ?',
      'Envoyez ensuite le prompt de départ, avec l’exemple de ton du matériau et une date limite de votre choix pour le message A.',
      'Vérifiez que le fond est intact : la note doit toujours fixer l’échéance du vendredi 16 h et la règle sur les retards.',
      'Pour chaque message, demandez une version « un cran plus ferme » et une version « un cran plus chaleureuse », puis choisissez.',
      'Expliquez à votre voisin, en deux phrases, ce qui a changé dans le ton.',
    ],
    prompt:
      'Je vais te donner deux messages à réécrire. Garde exactement le fond (demandes, dates, règles) et change seulement le ton.\n\nMessage A : un e-mail {partenaire.au}. Ton attendu : professionnel et cordial, en vouvoiement, avec une demande claire de réponse avant le [date].\nMessage B : une note de service à l’équipe. Ton attendu : respectueux et clair, qui explique le pourquoi de la règle, sans menace ni majuscules.\n\nVoici un exemple du ton que nous utilisons habituellement :\n<exemple>\n[colle l’exemple de ton ici]\n</exemple>\n\n<message_A>\n[colle le message A ici]\n</message_A>\n\n<message_B>\n[colle le message B ici]\n</message_B>\n\nPour chaque message, donne la version réécrite, puis les trois principaux changements de ton que tu as faits.',
    materiau: {
      titre: 'Deux messages à reprendre et un exemple de ton (données fictives)',
      texte:
        'Message A (e-mail {partenaire.au}) :\nSalut, bon on attend toujours vos papiers depuis 15 jours, c’est un peu galère de notre côté là… Faudrait vraiment que ça bouge sinon on va avoir des soucis avec {client.le}. Merci d’avance hein ! Karine\n\nMessage B (note de service) :\nÀ COMPTER DE CE JOUR, TOUT RETARD NON JUSTIFIÉ SERA SIGNALÉ À LA DIRECTION. Les feuilles d’heures doivent être déposées le vendredi 16 h DERNIER DÉLAI. Aucune exception ne sera tolérée. Je ne le répéterai pas.\nLa direction\n\nExemple du ton habituel :\nBonjour à toutes et à tous, à partir du lundi 2 novembre, les réunions d’équipe commenceront à 7 h 45 au lieu de 8 h. Ce changement nous permettra d’ouvrir l’accueil plus tôt. Merci à chacun de s’organiser ; si cela vous pose une difficulté, venez m’en parler cette semaine. Bonne journée, Sandrine',
    },
    variantes: {
      simple: 'Ne traiter que le message B, la note de service.',
      poussee:
        'Tirer de ce travail une petite charte de ton de l’équipe (cinq règles, avec un exemple chacune), à réutiliser dans vos prompts.',
    },
    astuces: {
      copilot:
        'Dans Outlook, lancez « Coaching par Copilot » sur votre version finale : il commente le ton et la clarté avant l’envoi.',
      gemini: 'Ouvrez chaque message dans Canvas pour ajuster le ton d’un seul passage.',
    },
    vigilance:
      'Une note de service engage la direction : faites valider la nouvelle version par son auteur avant de la diffuser.',
    formateur: {
      resultat:
        'Un e-mail cordial et ferme qui demande les documents avec une date limite, et une note de service respectueuse qui garde la règle et l’échéance du vendredi 16 h, en expliquant pourquoi.',
      criteres: [
        'Le diagnostic a été demandé avant la réécriture.',
        'Le fond de chaque message est intact (échéance, règle sur les retards).',
        'L’exemple de ton a été fourni et se retrouve dans le résultat.',
        'L’apprenant sait nommer au moins trois changements de ton.',
      ],
      pieges: [
        'Une note tellement adoucie que la règle et l’échéance disparaissent.',
        'Un e-mail où l’IA invente une date limite ou une conséquence parce que l’apprenant n’a pas complété le crochet.',
        'Garder le « on » et les tournures orales dans l’e-mail A.',
      ],
      competence: 'description',
      technique: 'exemples',
    },
    motsCles: ['ton', 'reformuler', 'note de service', 'e-mail', 'exemple'],
  },
  {
    id: 'g-traduire-retraduire',
    titre: 'Traduire un message pratique et le vérifier par retraduction',
    niveau: 'intermediaire',
    famille: 'corriger',
    duree: 20,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'gemini',
    situation:
      'Vous travaillez dans {structure.un} à Nouméa. Vous devez envoyer des informations pratiques à une personne qui ne lit pas le français : vous écrivez pour {etranger}. Le message contient des réalités locales que votre lecteur ne connaît pas : des prix en XPF, des sigles, des noms de lieux.',
    objectif:
      'Obtenir une traduction adaptée à son lecteur, puis la contrôler par une retraduction faite dans une autre conversation.',
    etapes: [
      'Envoyez le prompt de départ avec le message du matériau, en précisant la langue (l’anglais par défaut).',
      'Lisez la liste des adaptations : sigles expliqués, montants, formules de politesse.',
      'Ouvrez une nouvelle conversation, ou un autre outil, et demandez de retraduire le texte en français, sans montrer l’original.',
      'Comparez la retraduction avec l’original : dates, horaires, montants, documents à apporter, interdictions. Notez chaque écart.',
      'Corrigez la traduction là où un écart change le sens, puis faites-la relire par un collègue qui parle la langue, si possible.',
    ],
    prompt:
      'Tu es [ta fonction] dans {structure.un} à Nouméa. Traduis le message ci-dessous en [anglais], pour {etranger}.\n\nConsignes :\n- un ton naturel et courtois, comme l’écrirait un professionnel dont c’est la langue ;\n- explique en quelques mots les sigles et les réalités locales (XPF, TGC, CAFAT), sans les supprimer ;\n- garde exactement les dates, horaires et montants ;\n- ne traduis pas mot à mot les formules de politesse : utilise celles d’usage dans cette langue.\n\nDonne la traduction, puis la liste des adaptations que tu as faites.\n\n<message>\n[colle le message ici]\n</message>',
    materiau: {
      titre: 'Message à traduire (données fictives)',
      texte:
        'Bonjour,\n\nNous vous confirmons votre rendez-vous le mardi 13 octobre à 14 h, dans nos locaux du centre-ville de Nouméa. Le stationnement est payant en centre-ville : le parking de la place des Cocotiers est à cinq minutes à pied.\n\nMerci d’apporter une pièce d’identité en cours de validité et, si vous en avez un, votre numéro d’assuré CAFAT.\n\nLe montant de 18 500 XPF (TGC comprise) est à régler sur place, par carte bancaire ou par virement. Les chèques étrangers ne sont pas acceptés.\n\nEn cas d’empêchement, merci de nous prévenir au moins 48 h à l’avance au 25 12 34.\n\nCordialement,\n[signature]',
    },
    variantes: {
      simple: 'Traduire seulement les deux premiers paragraphes, puis les retraduire.',
      poussee:
        'Traduire aussi dans une autre langue parlée en Nouvelle-Calédonie ou dans la région (bichelamar, japonais, chinois…) : sur quelle langue l’IA est-elle la moins fiable, et comment s’en apercevoir ?',
    },
    astuces: {
      gemini:
        'Dans Gmail, « Aide-moi à écrire » peut reformuler la traduction de façon plus formelle ou plus courte ; la retraduction de contrôle reste nécessaire.',
      chatgpt:
        'Dans le canevas, sélectionnez une phrase de la traduction et demandez une formulation plus naturelle, sans toucher au reste.',
    },
    vigilance:
      'Une traduction peut être fluide et fausse : un « 48 h » devenu « 24 h », une interdiction devenue un conseil. Ne collez ni le nom ni les coordonnées du vrai destinataire.',
    formateur: {
      resultat:
        'Une traduction naturelle qui explique XPF, TGC et CAFAT et garde le 13 octobre à 14 h, les 18 500 XPF, les 48 h et le refus des chèques étrangers, contrôlée par une retraduction faite ailleurs.',
      criteres: [
        'La retraduction a été faite dans une conversation ou un outil séparé, sans l’original.',
        'Chaque date, horaire et montant a été comparé.',
        'Les réalités locales sont expliquées, pas supprimées.',
        'L’apprenant a relevé au moins un écart de nuance et décidé s’il fallait corriger.',
      ],
      pieges: [
        'Retraduire dans la même conversation : l’IA se souvient de l’original et masque les écarts.',
        'Laisser « CAFAT » ou « TGC » sans explication, incompréhensibles pour le lecteur.',
        'Croire qu’une traduction fluide est forcément exacte.',
      ],
      competence: 'discernement',
      technique: 'critique',
    },
    motsCles: ['traduction', 'anglais', 'retraduction', 'international', 'vérification'],
  },
  {
    id: 'g-harmoniser-procedure',
    titre: 'Harmoniser la procédure pour {procedure}, écrite à plusieurs mains',
    niveau: 'avance',
    famille: 'corriger',
    duree: 45,
    outils: ['chatgpt', 'claude', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Vous travaillez dans {structure.un} à Nouméa. Trois collègues ont rédigé chacun une partie de la procédure pour {procedure}. Le résultat mélange les styles : tutoiement et vouvoiement, sigles non expliqués, dates écrites de trois façons. Vous devez livrer une version unique qui respecte le guide de style maison.',
    objectif:
      'Enchaîner diagnostic, harmonisation et contrôle final en s’appuyant sur un guide de style fourni comme référence, sans perdre aucune étape de la procédure.',
    etapes: [
      'Si vous n’avez pas de vrai document sans données personnelles, demandez à l’IA un brouillon fictif de cette procédure, en trois parties écrites par trois personnes aux styles différents, avec cinq incohérences cachées qu’elle ne vous dévoile pas. Copiez le brouillon.',
      'Dans une nouvelle conversation, envoyez le prompt de départ avec le guide de style du matériau et le document : l’IA établit d’abord un tableau des écarts, sans rien réécrire.',
      'Vérifiez le tableau, tranchez vous-même les incohérences de fond, puis faites harmoniser le document partie par partie, en validant chaque partie avant la suivante.',
      'Demandez un contrôle final : pour chaque règle du guide, respectée ou non, avec un passage cité à l’appui.',
      'Comptez vous-même les étapes avant et après : aucune ne doit avoir disparu ni être apparue. Si vous avez fait générer le brouillon, demandez dans la première conversation la liste des incohérences cachées et vérifiez qu’elles sont toutes corrigées.',
    ],
    prompt:
      'Tu es relecteur dans {structure.un} à Nouméa. Je te donne notre guide de style et une procédure écrite par trois personnes. Nous allons l’harmoniser en trois temps : diagnostic, réécriture partie par partie, contrôle final. Pour l’instant, fais seulement le diagnostic.\n\nÉtablis un tableau à quatre colonnes : règle du guide concernée, passage qui ne la respecte pas (cité mot pour mot), partie du document, correction proposée.\n\nAjoute ensuite les incohérences de fond que tu repères (une étape en double, deux noms pour le même outil, un délai différent d’une partie à l’autre), sans les corriger : je déciderai.\n\n<guide_de_style>\n[colle le guide ici]\n</guide_de_style>\n\n<procedure>\n[colle la procédure ici]\n</procedure>',
    materiau: {
      titre: 'Guide de style maison (extrait)',
      texte:
        '1. On s’adresse au lecteur en le vouvoyant, à l’impératif : « Vérifiez le dossier. »\n2. Une étape = une action, numérotée, de 20 mots au plus.\n3. Les dates s’écrivent en lettres : « 14 octobre 2026 », jamais « 14/10 ».\n4. Les heures s’écrivent « 7 h 30 », les montants « 12 500 XPF ».\n5. Tout sigle est développé à sa première apparition : « TGC (taxe générale sur la consommation) ».\n6. Un outil ou un document garde le même nom d’un bout à l’autre.\n7. Chaque partie commence par une phrase qui dit à quoi elle sert.\n\nExemple d’étape conforme :\n« 3. Enregistrez le dossier dans le logiciel de gestion avant 16 h. »',
    },
    variantes: {
      simple: 'Harmoniser une seule partie de la procédure, avec les règles 1 à 4 du guide.',
      poussee:
        'Ajouter le guide de style comme source dans Gemini Notebook et demander si la version finale le respecte, citations à l’appui ; puis faire du guide les instructions d’un Projet pour toutes les procédures à venir.',
    },
    astuces: {
      chatgpt:
        'Ouvrez le document dans le canevas : vous faites harmoniser une partie à la fois et vous voyez les modifications.',
      claude:
        'Une fois la version finale validée, demandez à Claude de créer le fichier Word de la procédure, prêt à diffuser.',
      copilot:
        'Avec la licence adaptée, Copilot dans Word réécrit la partie sélectionnée en suivant le guide collé dans votre demande.',
    },
    vigilance:
      'Une procédure harmonisée doit rester juste : faites valider le fond par les trois auteurs. N’y laissez aucune donnée personnelle.',
    formateur: {
      resultat:
        'Une procédure au style unique, conforme aux sept règles du guide, avec le même nombre d’étapes qu’au départ, un contrôle final règle par règle, et des incohérences de fond tranchées par l’apprenant.',
      criteres: [
        'Le diagnostic a été fait avant toute réécriture.',
        'Les parties ont été harmonisées et validées une par une.',
        'Le contrôle final cite un passage pour chaque règle.',
        'L’apprenant a vérifié qu’aucune étape n’a disparu ni n’a été ajoutée.',
      ],
      pieges: [
        'Tout faire réécrire d’un coup : l’IA fusionne ou supprime des étapes sans le dire.',
        'Laisser l’IA trancher seule une incohérence de fond (deux délais différents) au lieu de vérifier lequel est juste.',
        'Harmoniser dans la conversation qui a créé le brouillon : l’IA connaît déjà les pièges.',
      ],
      competence: 'discernement',
      technique: 'decomposer',
    },
    motsCles: ['harmoniser', 'guide de style', 'procédure', 'cohérence', 'relecture'],
  },
  {
    id: 'g-relecteur-sur-mesure',
    titre: 'Créer un relecteur sur mesure pour les écrits de {structure.votre}',
    niveau: 'avance',
    famille: 'corriger',
    duree: 60,
    outils: ['claude', 'chatgpt', 'gemini', 'copilot'],
    outilConseille: 'claude',
    situation:
      'Vous travaillez dans {structure.un} à Nouméa. Chacun relit ses écrits à sa façon, et les mêmes erreurs reviennent : chiffres incohérents, tutoiement qui s’égare, abréviations. Vous voulez un assistant de relecture que toute l’équipe utilise avec les mêmes règles.',
    objectif:
      'Créer un assistant réutilisable avec des instructions permanentes, le tester sur un texte piégé et l’améliorer jusqu’à ce qu’il signale les problèmes au lieu de réécrire au hasard.',
    etapes: [
      'Créez un Projet (Claude, ChatGPT), un Gem (Gemini) ou un agent (Copilot) nommé « Relecteur ».',
      'Collez le prompt de départ dans ses instructions, avec vos règles maison (celles du matériau par défaut).',
      'Testez-le avec le texte piégé du matériau : notez ce qu’il corrige, ce qu’il signale et ce qu’il laisse passer.',
      'Améliorez les instructions là où il a échoué (un chiffre corrigé au lieu d’être signalé, une incohérence ignorée), puis refaites le test.',
      'Testez-le sur deux autres textes générés par l’IA avec des erreurs volontaires : un message {client.au} et une publication pour {offre.le}.',
      'Faites-le essayer par un collègue et notez ses remarques.',
    ],
    prompt:
      'Tu es le relecteur des écrits de [nom de la structure], {structure.un} à Nouméa. Pour chaque texte que je colle :\n\n1. Corrige l’orthographe, la grammaire et la ponctuation.\n2. Applique les règles maison ci-dessous.\n3. Ne modifie jamais un chiffre, une date, un nom propre ou un engagement : s’ils te semblent faux ou incohérents, signale-les sans les corriger.\n4. Ne change pas le style quand il respecte les règles.\n\nRends toujours, dans cet ordre :\n- le texte corrigé ;\n- un tableau des modifications (avant, après, raison) ;\n- les points à vérifier par un humain.\n\nSi une règle ou une information te semble ambiguë, pose-moi la question au lieu de deviner.\n\nRègles maison :\n[colle tes règles ici]',
    materiau: {
      titre: 'Règles maison et texte piégé (données fictives)',
      texte:
        'Règles maison :\n- vouvoiement dans tous les écrits externes ;\n- « e-mail », jamais « mail » ; « rendez-vous » en toutes lettres ;\n- dates complètes : « jeudi 22 octobre » ;\n- montants : « 12 500 XPF » ;\n- signature : prénom, nom, fonction.\n\nTexte piégé, destiné {client.au} :\nBonjour,\n\nComme convenu, voici le récapitulatif de votre dossier. Le RDV est fixé au mardi 15 octobre a 9h. Le montant total s’élève à 45 000 XPF (soit 30 000 XPF de prestation et 12 500 XPF de frais de dossier). Merci de nous faire parvenir les pièces manquantes avant le rendez-vous, tu peux les déposer à l’accueil ou les envoyer par mail.\n\nN’hésitez pas a nous contacter pour toute question.\n\nCordialement',
    },
    variantes: {
      simple:
        'Se contenter d’un prompt de relecture enregistré dans un document, à coller au début de chaque conversation.',
      poussee:
        'Ajouter aux instructions deux exemples de textes bien relus (avant, après), puis mesurer sur dix textes combien d’erreurs l’assistant trouve et combien il en invente.',
    },
    astuces: {
      claude:
        'Dans un Projet, collez les règles dans les instructions ; pour une méthode que Claude applique dans toutes vos conversations, transformez-les en compétence.',
      chatgpt:
        'Un Projet suffit pour vous ; pour le partager avec l’équipe, un GPT est plus pratique, mais sa création est payante.',
      gemini:
        'Créez un Gem « Relecteur », collez les instructions et ajoutez votre guide de style comme fichier.',
      copilot:
        'Selon votre licence, créez un agent avec ces instructions et votre guide de style comme source.',
    },
    vigilance:
      'L’assistant ne remplace pas la relecture finale : c’est vous qui signez. Ne lui confiez aucun texte contenant des données personnelles sans l’avoir anonymisé.',
    formateur: {
      resultat:
        'Un assistant dont les instructions séparent ce qu’il faut corriger et ce qu’il faut seulement signaler (le total de 45 000 XPF qui ne correspond pas au détail, la date à vérifier, la signature absente), testé sur trois textes et amélioré au moins une fois.',
      criteres: [
        'Les instructions séparent ce qu’il faut corriger et ce qu’il faut seulement signaler.',
        'Sur le texte piégé, le total incohérent et la date sont signalés, pas modifiés.',
        'L’apprenant a modifié les instructions après un premier test raté, puis refait le test.',
        'La réponse suit toujours le même format : texte, tableau, points à vérifier.',
      ],
      pieges: [
        'Un relecteur qui « corrige » le total en 42 500 XPF sans le dire : on ne sait plus quel chiffre est juste.',
        'Des instructions trop vagues (« relis bien ») qui donnent des résultats différents à chaque fois.',
        'Tester sur un seul texte et en tirer des conclusions.',
      ],
      competence: 'delegation',
      technique: 'instructions',
    },
    motsCles: ['assistant', 'relecture', 'projet', 'gem', 'agent', 'instructions'],
  },
];
