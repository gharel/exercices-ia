/**
 * Gabarits « Synthétiser ». Chaque gabarit est décliné pour chaque métier :
 * {client.un}, {structure.le}… prennent le vocabulaire du métier (voir ../vocabulaire.js).
 */

export const gabarits = [
  {
    id: 'g-notes-compte-rendu',
    titre: 'Transformer les notes {reunion.du} en compte rendu',
    niveau: 'debutant',
    famille: 'synthetiser',
    duree: 15,
    outils: ['chatgpt', 'claude', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Vous travaillez dans {structure.un} à Nouméa. Vous avez pris des notes pendant {reunion.le}, à toute vitesse et pleines d’abréviations. Le compte rendu doit partir aux participants ce soir.',
    objectif:
      'Obtenir un compte rendu structuré, avec les décisions et un tableau des actions, sans que l’IA invente ce qui n’a pas été décidé.',
    etapes: [
      'Collez les notes du matériau dans le prompt de départ et envoyez-le.',
      'Lisez le compte rendu : chaque décision correspond-elle bien à une ligne des notes ?',
      'Vérifiez le tableau des actions : les responsables et échéances absents des notes doivent apparaître comme « à préciser ».',
      'Demandez une version de cinq lignes pour la personne excusée, puis comparez-la avec le compte rendu complet.',
    ],
    prompt:
      'Tu es [ta fonction] dans {structure.un} à Nouméa. Transforme mes notes de réunion ci-dessous en compte rendu clair, à envoyer aux participants.\n\nFormat :\n1. En-tête : date, horaires, présents, excusés.\n2. Pour chaque point : ce qui a été dit, en deux phrases au plus, puis la décision prise.\n3. Un tableau des actions : action, responsable, échéance.\n4. Les points restés sans décision.\n\nDéveloppe les abréviations. N’invente rien : si un responsable, une échéance ou un montant manque, écris « à préciser ». Si tu ne comprends pas une abréviation, signale-la au lieu de deviner.\n\n<notes>\n[colle les notes ici]\n</notes>',
    materiau: {
      titre: 'Notes prises pendant la réunion (données fictives)',
      texte:
        '{Reunion.s} – mar. 6/10 – 14h-15h45\nPrés. : S. Wamytan (anim.), K. Lebrun, M. Tuiasoa, J-P. Durand / exc. : L. Hnawia\n\n1) suivi actions : tableau de suivi pas à jour → KL le met à jour av. vend. ; relance {partenaire.du} tjs pas faite (qui ??)\n2) {evenement.s} : date validée sam. 14/11, budget max 150 000 XPF (à confirmer par la dir°). MT s’occupe du lieu + buffet. Besoin de 2 volontaires → pas tranché\n3) retours {client.dep} : 3 plaintes ce mois-ci (délais de réponse). JPD propose une réponse type → ok pour tous, JPD la rédige pr le 20/10\n4) achats : devis clim, 2 options (480 000 / 620 000 XPF HT) → attendre un 3e devis avt de décider. Qui le demande ?\n5) divers : salle habituelle en travaux en nov. → trouver un autre lieu pour la prochaine réunion (qui ?)\nProchaine réunion : mar. 3/11, même heure, lieu à confirmer',
    },
    variantes: {
      simple: 'Ne demander que le tableau des actions, puis le vérifier ligne par ligne.',
      poussee:
        'Rédiger aussi l’e-mail d’envoi du compte rendu, qui demande aux personnes concernées de se positionner avant une date sur les points sans décision.',
    },
    astuces: {
      copilot:
        'Si la réunion a lieu dans Teams, le « Récapitulatif de réunion » propose un résumé et des actions (licence Copilot) : comparez-le avec vos propres notes.',
      gemini:
        'Dans Google Meet, « Prendre des notes pour moi » range les notes dans Google Docs (Google Workspace) : relisez-les avant d’en faire un compte rendu.',
    },
    vigilance:
      'Les notes de réunion contiennent souvent des noms et des sujets sensibles (congés, recrutements, conflits) : retirez ce qui n’est pas nécessaire avant de les coller, et relisez le compte rendu avant de l’envoyer.',
    formateur: {
      resultat:
        'Un compte rendu avec en-tête, une décision par point, un tableau des actions (KL avant vendredi, JPD pour le 20 octobre, MT pour le lieu et le buffet) et quatre points « à préciser » : la relance, les volontaires, la demande du troisième devis, le lieu de la prochaine réunion.',
      criteres: [
        'Les abréviations sont développées ou signalées comme incomprises.',
        'Aucun responsable n’est inventé pour la relance, le troisième devis ou la recherche d’un lieu.',
        'Le budget de 150 000 XPF reste « à confirmer ».',
        'Les dates sont identiques à celles des notes.',
      ],
      pieges: [
        'Accepter un tableau où l’IA a attribué la relance ou le troisième devis à quelqu’un.',
        'Laisser l’IA deviner des noms complets ou le sens de « dir° » sans le signaler.',
        'Transformer un budget « à confirmer » en décision ferme.',
      ],
      competence: 'description',
      technique: 'format',
    },
    motsCles: ['compte rendu', 'réunion', 'notes', 'actions', 'décisions'],
  },
  {
    id: 'g-resumer-fil-emails',
    titre: 'Résumer un long fil d’e-mails pour votre responsable',
    niveau: 'debutant',
    famille: 'synthetiser',
    duree: 15,
    outils: ['copilot', 'claude', 'chatgpt', 'gemini'],
    outilConseille: 'copilot',
    situation:
      'Vous travaillez dans {structure.un} à Nouméa. La climatisation de l’accueil est en panne depuis dix jours, et un long fil d’e-mails s’est accumulé. Votre responsable, de retour de congés, veut savoir où on en est en une minute de lecture.',
    objectif:
      'Faire résumer un échange en distinguant ce qui est décidé de ce qui est en attente, et repérer les informations qui ont changé en cours de route.',
    etapes: [
      'Collez le fil du matériau dans le prompt de départ et envoyez-le.',
      'Vérifiez dans le résumé la date d’arrivée de la pièce : elle a changé en cours de fil.',
      'Contrôlez chaque montant et chaque date avec les e-mails d’origine.',
      'Demandez qui doit agir maintenant, et sur quoi ; vérifiez que la réponse correspond au dernier e-mail.',
    ],
    prompt:
      'Résume le fil d’e-mails ci-dessous pour [mon responsable], qui n’a pas suivi l’échange.\n\nFormat :\n1. La situation en deux phrases.\n2. Ce qui est décidé.\n3. Ce qui est en attente, et qui doit agir.\n4. Les dates et montants clés.\n\nSi deux messages se contredisent, retiens le plus récent et signale le changement. 120 mots au plus. N’ajoute rien qui ne soit pas dans les e-mails.\n\n<fil>\n[colle le fil ici]\n</fil>',
    materiau: {
      titre: 'Fil d’e-mails sur la panne de climatisation (données fictives)',
      texte:
        '1. Lundi 28 septembre – Marc (services généraux) à l’équipe :\nLa clim de l’accueil est en panne. J’ai appelé Lagon Froid Services, notre prestataire : ils passent mercredi.\n\n2. Mercredi 30 septembre – Lagon Froid Services à Marc :\nDiagnostic : compresseur hors service. Réparation : 385 000 XPF HT, pièce à commander en métropole, livraison sous trois semaines environ. Remplacement complet : 690 000 XPF HT.\n\n3. Jeudi 1er octobre – Sandrine (direction) à Marc :\nOk pour la réparation. Peut-on avoir une clim mobile en attendant ?\n\n4. Vendredi 2 octobre – Marc à Sandrine :\nLagon Froid Services loue des clims mobiles : 25 000 XPF par semaine. La pièce arriverait le 23 octobre. Je commande la location ?\n\n5. Lundi 5 octobre – Karine (accueil) à Marc et Sandrine :\nPlusieurs plaintes {client.dep} à cause de la chaleur. Peut-on installer l’accueil en salle 2 en attendant ?\n\n6. Mardi 6 octobre – Marc à tous :\nMauvaise nouvelle : avec le retard du bateau, la pièce arrivera finalement le 30 octobre. Pour la clim mobile, j’attends toujours l’accord de Sandrine. Karine : la salle 2 est libre tous les jours sauf le jeudi (formations).',
    },
    variantes: {
      simple:
        'Ne demander que la liste de ce qui reste en attente, avec la personne qui doit agir.',
      poussee:
        'Rédiger aussi l’e-mail que votre responsable pourrait envoyer pour débloquer la situation, en s’appuyant uniquement sur le résumé vérifié.',
    },
    astuces: {
      copilot:
        'Dans Outlook, ouvrez le dernier message du fil et utilisez « Résumer » : comparez ce résumé avec celui obtenu par le prompt.',
      claude:
        'Demandez à Claude d’indiquer, pour chaque date et chaque montant, le numéro de l’e-mail d’où il vient.',
    },
    vigilance:
      'Un vrai fil contient des noms, des signatures et parfois des coordonnées : retirez-les avant de le coller dans un outil que votre structure n’a pas validé.',
    formateur: {
      resultat:
        'Un résumé de 120 mots au plus : réparation décidée (385 000 XPF HT), pièce attendue le 30 octobre et non le 23, location d’une clim mobile (25 000 XPF par semaine) en attente de l’accord de Sandrine, accueil possible en salle 2 sauf le jeudi.',
      criteres: [
        'La date retenue est le 30 octobre, et le changement est signalé.',
        'La décision en attente (location de la clim mobile) et la personne qui doit agir (Sandrine) sont identifiées.',
        'Les montants sont exacts et restent hors taxes.',
        'Le résumé tient en 120 mots.',
      ],
      pieges: [
        'Garder la date du 23 octobre, citée en premier dans le fil.',
        'Présenter la location de la clim mobile comme déjà commandée.',
        'Laisser l’IA additionner ou convertir les montants sans qu’on le lui ait demandé.',
      ],
      competence: 'discernement',
      technique: 'structurer',
    },
    motsCles: ['e-mails', 'fil de discussion', 'résumé', 'Outlook', 'suivi'],
  },
  {
    id: 'g-synthese-avis',
    titre: 'Synthétiser une quinzaine d’avis {client.dep}',
    niveau: 'debutant',
    famille: 'synthetiser',
    duree: 20,
    outils: ['chatgpt', 'claude', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Vous travaillez dans {structure.un} à Nouméa. Le mois dernier, vous avez recueilli quinze avis {client.dep}, par un questionnaire de satisfaction et par écrit (e-mails, formulaire en ligne). Votre responsable veut savoir ce qui revient le plus souvent, et ce qu’on peut améliorer.',
    objectif:
      'Faire regrouper des avis par thème avec un décompte vérifiable, et en tirer des pistes d’amélioration appuyées sur plusieurs avis.',
    etapes: [
      'Collez les avis du matériau dans le prompt de départ et envoyez-le.',
      'Vérifiez le tableau : pour deux thèmes, recomptez vous-même les avis à partir de leurs numéros.',
      'Demandez quels avis n’ont été classés dans aucun thème, ou dans plusieurs, et pourquoi.',
      'Relisez les pistes d’amélioration : chacune s’appuie-t-elle vraiment sur au moins deux avis ?',
      'Rédigez en trois lignes le message que vous enverriez à l’équipe.',
    ],
    prompt:
      'Voici quinze avis {client.dep} recueillis le mois dernier par {structure.un} à Nouméa. Analyse-les.\n\n1. Regroupe-les par thème dans un tableau : thème, nombre d’avis, numéros des avis, une citation courte et représentative.\n2. Sépare les points positifs et les points à améliorer.\n3. Propose trois pistes d’amélioration concrètes, chacune appuyée sur au moins deux avis dont tu donnes les numéros.\n\nNe donne pas de pourcentage. Si un avis est ambigu, dis-le au lieu de l’interpréter.\n\n<avis>\n[colle les avis ici]\n</avis>',
    materiau: {
      titre: 'Quinze avis recueillis (données fictives)',
      texte:
        '1. Accueil très aimable, mais 25 minutes d’attente alors que j’avais rendez-vous.\n2. Impossible de vous joindre par téléphone entre 12 h et 13 h 30.\n3. Personne très professionnelle, explications claires. Merci à Karine !\n4. J’ai envoyé trois e-mails avant d’avoir une réponse.\n5. Les horaires ne sont pas adaptés quand on travaille : ouvrez le samedi matin !\n6. Le parking est toujours plein, j’ai dû me garer loin.\n7. Réponse rapide et efficace, rien à redire.\n8. Les documents qu’on m’a remis sont incompréhensibles, trop de jargon.\n9. Très déçu : on m’avait promis un rappel qui n’est jamais venu.\n10. Bon service, mais les tarifs ont beaucoup augmenté cette année.\n11. Tout se passe en français, c’est difficile pour mon mari qui parle surtout anglais.\n12. Délais corrects, personnel souriant.\n13. Le site internet n’est pas à jour : les horaires affichés sont faux.\n14. Deuxième fois qu’on me demande les mêmes pièces justificatives.\n15. Merci pour votre patience. Par contre, toujours autant d’attente au guichet.',
    },
    variantes: {
      simple: 'Ne demander que le tableau des thèmes, puis le vérifier.',
      poussee:
        'Faire produire la synthèse sous forme de tableau Excel, avec deux colonnes à remplir en équipe : action proposée et responsable.',
    },
    astuces: {
      chatgpt:
        'Avec l’analyse de données, déposez les avis dans un fichier Excel ou CSV : ChatGPT peut les compter par thème et rendre un tableau à télécharger.',
      claude:
        'Demandez le tableau dans un artefact : vous le relisez à côté de la conversation et le copiez facilement.',
    },
    vigilance:
      'Les avis contiennent parfois des prénoms de salariés ou des détails sur la vie des personnes : retirez-les avant de les coller, et ne les reprenez pas dans la synthèse.',
    formateur: {
      resultat:
        'Un tableau de six à huit thèmes avec des numéros d’avis vérifiables (attente et délais, joignabilité, horaires, accueil, documents, tarifs, langue, parking), des points positifs séparés, et trois pistes appuyées sur plusieurs avis.',
      criteres: [
        'Chaque thème cite les numéros des avis, et l’apprenant en a recompté au moins deux.',
        'Les avis mixtes (1, 10, 15) sont comptés à la fois en positif et en négatif, ou signalés.',
        'Aucun pourcentage n’est inventé.',
        'Chaque piste s’appuie sur au moins deux avis.',
      ],
      pieges: [
        'Croire le décompte de l’IA sans recompter : les erreurs de comptage sont fréquentes.',
        'Tirer une piste d’un seul avis (le parking, par exemple) et la présenter comme prioritaire.',
        'Laisser le prénom de la salariée dans la synthèse envoyée à l’équipe.',
      ],
      competence: 'description',
      technique: 'structurer',
    },
    motsCles: ['avis', 'satisfaction', 'synthèse', 'thèmes', 'amélioration'],
  },
  {
    id: 'g-points-cles-citations',
    titre: 'Extraire les points clés d’une note et vérifier chacun par une citation',
    niveau: 'intermediaire',
    famille: 'synthetiser',
    duree: 20,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini', 'notebook'],
    outilConseille: 'claude',
    situation:
      'Vous travaillez dans {structure.un} à Nouméa. La direction vient de diffuser une note sur le déménagement des bureaux. Vous devez en faire un résumé fiable pour vos collègues absents, sans rien ajouter ni oublier.',
    objectif:
      'Obtenir des points clés appuyés sur des citations exactes, vérifier chaque citation, et tester si l’IA reconnaît ce que la note ne dit pas.',
    etapes: [
      'Envoyez le prompt de départ avec la note du matériau.',
      'Pour chaque point clé, cherchez la citation dans la note (Ctrl + F) : elle doit s’y trouver mot pour mot.',
      'Posez ensuite deux questions dont la réponse n’est pas dans la note : « Quel est le budget du déménagement ? » et « Qui est le référent de notre service ? ». L’IA doit répondre que la note ne le précise pas.',
      'Demandez à l’IA les deux points dont elle est le moins sûre, et vérifiez-les en priorité.',
      'Rédigez le message à vos collègues à partir des seuls points vérifiés.',
    ],
    prompt:
      'Voici une note interne. Extrais-en les points clés pour des collègues qui ne l’ont pas lue.\n\nRègles :\n- six à huit points, un par ligne, classés par ordre d’importance pour un salarié ;\n- pour chaque point, ajoute entre guillemets la citation exacte de la note qui le justifie ;\n- n’ajoute aucune information absente de la note ;\n- si une information utile manque (un nom, une date, un montant), indique-le dans une rubrique « Non précisé dans la note ».\n\n<note>\n[colle la note ici]\n</note>',
    materiau: {
      titre: 'Note de la direction (données fictives)',
      texte:
        'Objet : déménagement de nos bureaux à Ducos\n\nComme annoncé en réunion, nos bureaux du centre-ville déménagent dans nos nouveaux locaux de la zone industrielle de Ducos. L’accueil {client.des} sera fermé le vendredi 30 octobre et le lundi 2 novembre. Il rouvrira le mardi 3 novembre à 7 h 30, à la nouvelle adresse. Le numéro de téléphone ne change pas.\n\nChacun prépare ses cartons avant le jeudi 29 octobre à 16 h. Les cartons, fournis par le déménageur, seront déposés dans chaque bureau le lundi 26 octobre. Chaque carton porte votre nom et le numéro de votre futur bureau, indiqué sur le plan joint.\n\nLes dossiers papier {client.des} ne doivent jamais être transportés par le personnel : ils voyagent dans des caisses fermées, sous la responsabilité du déménageur. Le matériel informatique est débranché et transporté par notre prestataire informatique : ne le démontez pas vous-même.\n\nLe nouveau site compte 20 places de parking pour le personnel. Elles seront attribuées en priorité aux personnes qui pratiquent le covoiturage ; les demandes sont à adresser au référent de votre service avant le 23 octobre. Un référent sera désigné dans chaque service la semaine prochaine.\n\nUn pot d’accueil aura lieu dans les nouveaux locaux, à une date qui vous sera communiquée.\n\nLa direction',
    },
    variantes: {
      simple: 'Se limiter aux points clés avec citations, sans les questions pièges.',
      poussee:
        'Ajouter la note comme source dans Gemini Notebook, poser les mêmes questions, et comparer : quelles réponses sont les mieux justifiées ?',
    },
    astuces: {
      notebook:
        'Ajoutez la note comme source : chaque réponse de la discussion renvoie au passage exact par une citation numérotée, sur laquelle vous pouvez cliquer.',
      claude:
        'Joignez la note en fichier plutôt que de la coller, et demandez de citer les passages utilisés : vous vérifierez chaque point.',
      copilot:
        'Dans Copilot Chat, joignez la note et demandez les citations, puis vérifiez-les dans le document ouvert à côté.',
    },
    vigilance:
      'Une note interne n’est pas forcément publique : vérifiez que votre structure autorise son utilisation dans l’outil d’IA choisi.',
    formateur: {
      resultat:
        'Six à huit points clés avec des citations exactes (fermeture les 30 octobre et 2 novembre, réouverture le 3 novembre à 7 h 30, cartons avant le 29 octobre à 16 h, dossiers papier transportés seulement par le déménageur, informatique à ne pas démonter, parking), une rubrique « Non précisé » (référent, budget, date du pot) et une IA qui reconnaît ne pas savoir.',
      criteres: [
        'Chaque citation a été retrouvée mot pour mot dans la note.',
        'Aux deux questions pièges, la réponse est que la note ne le précise pas.',
        'La difficulté sur le référent est relevée : il n’est pas encore désigné, mais il doit recevoir les demandes avant le 23 octobre.',
        'Le message final ne contient que des points vérifiés.',
      ],
      pieges: [
        'Une citation reformulée par l’IA, introuvable telle quelle dans la note.',
        'Une IA qui invente un budget ou un nom de référent plausible.',
        'Oublier la réouverture à la nouvelle adresse, ou confondre le 29 et le 30 octobre.',
      ],
      competence: 'discernement',
      technique: 'sources',
    },
    motsCles: ['points clés', 'citations', 'vérification', 'note interne', 'résumé'],
  },
  {
    id: 'g-resumer-trois-publics',
    titre: 'Résumer {documentLong.le} pour trois publics différents',
    niveau: 'intermediaire',
    famille: 'synthetiser',
    duree: 30,
    outils: ['gemini', 'claude', 'chatgpt', 'copilot'],
    outilConseille: 'gemini',
    situation:
      'Vous travaillez dans {structure.un} à Nouméa. {DocumentLong.le} fait plusieurs pages et presque personne ne va jusqu’au bout. On vous demande trois résumés : pour la direction, pour {client.un} et pour un nouveau collègue.',
    objectif:
      'Adapter un même résumé à trois publics en plusieurs échanges, en gardant les informations essentielles identiques d’une version à l’autre.',
    etapes: [
      'Prenez {documentLong.un} dont vous disposez, sans données personnelles. À défaut, demandez à l’IA d’en rédiger une version fictive de deux pages, située en Nouvelle-Calédonie.',
      'Joignez-le au prompt de départ : premier résumé, pour la direction.',
      'Dans la même conversation, demandez le résumé pour {client.un}, puis pour le nouveau collègue, en suivant la fiche des publics.',
      'Comparez les trois versions : les chiffres, délais et obligations doivent être identiques ; seuls le niveau de détail et le ton changent.',
      'Demandez, pour chaque obligation citée, la phrase exacte du document, et vérifiez-en au moins trois.',
    ],
    prompt:
      'Tu es [ta fonction] dans {structure.un} à Nouméa. Je joins {documentLong.un}. Nous allons en faire trois résumés pour trois publics ; commence par le premier.\n\nPublic 1 : la direction. Elle veut, en cinq lignes, les enjeux, les risques et les décisions à prendre. Ton factuel.\n\nRègles pour les trois résumés :\n- n’ajoute aucune information absente du document ;\n- garde exactement les chiffres, délais et obligations ;\n- si un point important est ambigu dans le document, signale-le.\n\n<document>\n[colle le document ici, ou joins le fichier]\n</document>',
    materiau: {
      titre: 'Fiche des trois publics',
      texte:
        'La direction\n- veut : les enjeux, les risques, les décisions à prendre\n- format : cinq lignes, ton factuel\n\n{Client.un}\n- veut : les points qui touchent sa situation, les démarches à faire et les dates\n- format : 150 mots, langage clair, vouvoiement\n\nUn nouveau collègue\n- veut : les points pratiques à connaître dès sa première semaine, les pièges courants\n- format : dix points au plus, ton simple',
    },
    variantes: {
      simple: 'Faire seulement les résumés pour la direction et pour {client.un}.',
      poussee:
        'Ajouter un quatrième format : le texte d’une infographie en cinq blocs pour l’affichage, puis la comparer aux trois résumés pour vérifier qu’elle dit la même chose.',
    },
    astuces: {
      gemini: 'Ouvrez chaque résumé dans Canvas pour l’ajuster sans régénérer les deux autres.',
      claude:
        'Demandez les trois résumés côte à côte dans un artefact, sous forme de tableau, pour les comparer d’un coup d’œil.',
      copilot:
        'Avec la licence adaptée, ouvrez le document dans Word et demandez un résumé à Copilot : comparez-le avec les vôtres.',
    },
    vigilance:
      'Un résumé pour {client.un} ne remplace pas le document officiel : indiquez qu’il s’agit d’une présentation simplifiée, et vérifiez chaque obligation dans le texte.',
    formateur: {
      resultat:
        'Trois résumés de forme différente (cinq lignes, 150 mots, dix points) qui gardent les mêmes chiffres et obligations, chacune vérifiable par une citation du document.',
      criteres: [
        'Chaque résumé respecte le format et le ton de la fiche des publics.',
        'Les chiffres et délais sont identiques dans les trois versions.',
        'L’apprenant a vérifié au moins trois obligations par leur citation.',
        'Les points ambigus du document sont signalés plutôt que tranchés.',
      ],
      pieges: [
        'Un résumé en langage clair qui simplifie au point de devenir faux : un délai arrondi, une exception oubliée.',
        'Coller un document réel qui contient des noms ou des données personnelles.',
        'Une version pour la direction qui ajoute des recommandations absentes du document.',
      ],
      competence: 'description',
      technique: 'contexte',
    },
    motsCles: ['résumé', 'public', 'document long', 'adapter', 'synthèse'],
  },
  {
    id: 'g-faq-corpus-notebook',
    titre: 'Construire une FAQ sourcée avec Gemini Notebook',
    niveau: 'avance',
    famille: 'synthetiser',
    duree: 45,
    outils: ['notebook', 'claude', 'chatgpt'],
    outilConseille: 'notebook',
    situation:
      'Vous travaillez dans {structure.un} à Nouméa. Les mêmes questions reviennent sans cesse, et les réponses sont éparpillées dans plusieurs documents. Vous voulez charger {corpus} dans un carnet Gemini Notebook et en tirer une FAQ fiable, que l’équipe pourra consulter.',
    objectif:
      'Exploiter un corpus de documents avec un outil qui cite ses sources, vérifier chaque réponse et repérer ce que les documents ne disent pas.',
    etapes: [
      'Rassemblez cinq à dix documents parmi {corpus}, sans données personnelles : retirez-les ou choisissez des versions anonymisées.',
      'Créez un carnet dans Gemini Notebook et ajoutez-y ces documents comme sources.',
      'Générez un premier rapport de type FAQ, puis envoyez le prompt de départ dans la discussion pour obtenir la FAQ au format voulu.',
      'Vérifiez chaque réponse en cliquant sur sa citation numérotée, à l’aide de la grille du matériau. Notez les réponses à corriger.',
      'Posez trois questions dont vous savez que la réponse n’est pas dans les documents : le carnet doit le dire.',
      'Rédigez la FAQ finale (questions validées, source et date de chaque document), puis partagez le carnet avec l’équipe.',
    ],
    prompt:
      'À partir uniquement des sources de ce carnet, rédige une FAQ de douze questions que se posent le plus souvent [les nouveaux collègues ou {client.les}].\n\nPour chaque question :\n- une réponse de trois phrases au plus, en langage clair ;\n- la source utilisée, avec sa date si elle figure dans le document.\n\nSi deux sources se contredisent, signale-le et indique la plus récente. Si une question fréquente n’a pas de réponse dans les sources, liste-la à part, sous le titre « Questions sans réponse dans les documents ».',
    materiau: {
      titre: 'Grille de vérification de la FAQ',
      texte:
        'Pour chaque question de la FAQ :\n1. La citation renvoie-t-elle à un passage qui dit vraiment ce qu’affirme la réponse ?\n2. Le document source est-il la version en vigueur (date, mention « annule et remplace ») ?\n3. La réponse ajoute-t-elle une précision absente du passage (délai, montant, exception) ?\n4. Une autre source dit-elle le contraire ?\n5. La réponse se comprend-elle sans avoir lu le document ?\n\nÀ la fin :\n- nombre de réponses validées sans changement : …\n- nombre de réponses corrigées : …\n- questions sans réponse, à faire trancher par un responsable : …',
    },
    variantes: {
      simple: 'Travailler avec trois documents et dix questions seulement.',
      poussee:
        'Générer aussi un résumé audio et des fiches de révision pour les nouveaux arrivants, puis faire relire la FAQ par un responsable avant de la diffuser.',
    },
    astuces: {
      notebook:
        'Dans les rapports, partez de la FAQ générée, puis affinez-la dans la discussion : chaque réponse renvoie à sa source par une citation numérotée.',
      claude:
        'Sans Gemini Notebook, déposez les documents dans un Projet et demandez, pour chaque réponse, le document et le passage utilisés.',
      chatgpt:
        'Un Projet regroupe les documents et les instructions : demandez une citation pour chaque réponse, puis vérifiez-la.',
    },
    vigilance:
      'Ne chargez aucun document qui contient des données personnelles. Une FAQ partagée engage la structure : datez-la, citez les sources et faites-la valider avant de la diffuser.',
    formateur: {
      resultat:
        'Une FAQ de dix à douze questions, chacune reliée à un passage vérifié et daté, une liste de questions sans réponse à faire trancher, et un carnet partagé avec l’équipe.',
      criteres: [
        'Chaque réponse a été vérifiée en ouvrant sa citation.',
        'Les questions sans réponse dans les documents sont listées, pas inventées.',
        'Les contradictions entre documents sont signalées, avec la version la plus récente.',
        'Aucun document chargé ne contient de données personnelles.',
      ],
      pieges: [
        'Croire qu’une réponse est juste parce qu’elle a une citation, sans lire le passage.',
        'Charger une version périmée d’un document à côté de la nouvelle, sans le signaler.',
        'Charger des documents qui contiennent des noms ou des données personnelles.',
      ],
      competence: 'diligence',
      technique: 'sources',
    },
    motsCles: ['FAQ', 'Gemini Notebook', 'NotebookLM', 'corpus', 'sources', 'citations'],
  },
  {
    id: 'g-comparer-versions-document',
    titre: 'Comparer deux versions d’un règlement intérieur et lister les différences',
    niveau: 'avance',
    famille: 'synthetiser',
    duree: 30,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Vous travaillez dans {structure.un} à Nouméa. La direction a mis à jour le règlement intérieur et vous demande la liste des changements par rapport à l’an dernier, pour l’équipe. Personne n’a suivi les modifications : il faut tout retrouver.',
    objectif:
      'Faire comparer deux versions d’un texte, contrôler la liste par une seconde analyse indépendante, puis vérifier soi-même chaque différence.',
    etapes: [
      'Envoyez le prompt de départ avec les deux versions du matériau, chacune dans sa balise.',
      'Vérifiez chaque ligne du tableau en relisant les deux articles concernés.',
      'Ouvrez une nouvelle conversation, ou un autre outil, et refaites la même demande. Comparez les deux listes et vérifiez chaque point sur lequel elles divergent.',
      'Relisez les articles que les deux analyses disent identiques : ont-elles raté un changement discret ?',
      'Demandez enfin une note de six lignes pour l’équipe, et vérifiez qu’elle ne présente aucun changement de façon plus favorable ou plus sévère que le texte.',
    ],
    prompt:
      'Compare les deux versions du règlement intérieur ci-dessous, article par article.\n\nDonne un tableau : article, version 2025 (citation exacte), version 2026 (citation exacte), type de changement (ajout, suppression, modification), conséquence concrète pour un salarié.\n\nNe présente pas comme un changement une simple reformulation qui garde le même sens : liste ces reformulations à part. Si tu n’es pas sûr qu’un changement modifie le sens, dis-le.\n\n<version_2025>\n[colle la version 2025 ici]\n</version_2025>\n\n<version_2026>\n[colle la version 2026 ici]\n</version_2026>',
    materiau: {
      titre: 'Règlement intérieur, versions 2025 et 2026 (extrait fictif)',
      texte:
        'VERSION 2025\nArt. 1 – Horaires. Les horaires de travail sont de 7 h 30 à 16 h 30, du lundi au vendredi, avec une pause déjeuner d’une heure.\nArt. 2 – Congés. Toute demande de congé est faite par écrit au moins quinze jours avant la date de départ.\nArt. 3 – Retards. Tout retard doit être signalé au responsable dès que possible, par téléphone ou par message.\nArt. 4 – Télétravail. Le télétravail est possible jusqu’à deux jours par semaine pour les postes compatibles.\nArt. 5 – Frais. Les frais de déplacement sont remboursés sur justificatif, dans un délai de trente jours.\nArt. 6 – Véhicules. Le véhicule de service peut être utilisé pour le trajet domicile-travail, avec l’accord du responsable.\nArt. 7 – Sécurité. Les consignes de sécurité affichées dans les locaux doivent être respectées par tous.\n\nVERSION 2026\nArt. 1 – Horaires. Les horaires de travail sont de 7 h 30 à 16 h, du lundi au vendredi, avec une pause déjeuner d’une heure.\nArt. 2 – Congés. Toute demande de congé est faite par écrit au moins un mois avant la date de départ.\nArt. 3 – Retards. Chaque retard est signalé au responsable le plus tôt possible, par téléphone ou par message.\nArt. 4 – Télétravail. Le télétravail est possible jusqu’à un jour par semaine pour les postes compatibles, après accord écrit du responsable.\nArt. 5 – Frais. Les frais de déplacement sont remboursés sur justificatif.\nArt. 6 – Véhicules. Le véhicule de service ne peut pas être utilisé pour le trajet domicile-travail.\nArt. 7 – Sécurité. Les consignes de sécurité affichées dans les locaux doivent être respectées par tous. Le port de chaussures fermées est obligatoire dans les locaux techniques.',
    },
    variantes: {
      simple: 'Comparer seulement les articles 1 à 4.',
      poussee:
        'Refaire l’exercice sur deux versions d’un document plus long, sans données personnelles, et comparer le résultat de l’IA avec la fonction de comparaison de votre traitement de texte.',
    },
    astuces: {
      claude:
        'Demandez le tableau dans un artefact, puis un fichier Excel du tableau, à transmettre à la direction après vérification.',
      gemini:
        'Ouvrez la note pour l’équipe dans Canvas pour retoucher une phrase sans régénérer le reste.',
    },
    vigilance:
      'L’IA peut manquer une suppression discrète ou inventer un changement : seule votre vérification ligne par ligne compte. Pour un vrai document à portée juridique, faites valider l’analyse par la personne compétente.',
    formateur: {
      resultat:
        'Un tableau qui couvre les six articles modifiés (fin de journée à 16 h, congés demandés un mois avant, télétravail réduit à un jour et soumis à accord écrit, délai de trente jours supprimé, véhicule interdit pour le trajet domicile-travail, chaussures fermées obligatoires), l’article 3 classé en simple reformulation, et une note fidèle pour l’équipe.',
      criteres: [
        'Les six articles modifiés sont repérés, y compris la suppression discrète de l’article 5.',
        'Les deux changements de l’article 4 apparaissent : un jour au lieu de deux, accord écrit.',
        'L’article 3 n’est pas présenté comme un changement de fond.',
        'Une seconde analyse indépendante a été faite, et les écarts entre les deux ont été vérifiés.',
      ],
      pieges: [
        'Rater la suppression du délai de trente jours : ce qui disparaît se voit moins que ce qui change.',
        'Ne relever qu’un des deux changements de l’article 4.',
        'Une note à l’équipe qui adoucit ou dramatise un changement (« le télétravail est supprimé »).',
      ],
      competence: 'discernement',
      technique: 'critique',
    },
    motsCles: ['comparer', 'versions', 'différences', 'règlement intérieur', 'vérification'],
  },
];
