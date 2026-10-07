/**
 * Juridique : cabinet d’avocats, étude notariale, service juridique d’entreprise.
 * Toutes les personnes, entreprises, décisions et sommes sont fictives. Aucun exercice
 * n’affirme de règle de droit : il demande de la vérifier dans les sources officielles,
 * et aucune production de l’IA ne part sans la validation d’un professionnel du droit.
 */

export const vocabulaire = {
  structure: { g: 'm', s: 'cabinet d’avocats', p: 'cabinets d’avocats' },
  client: { g: 'm', s: 'client', p: 'clients' },
  partenaire: { g: 'm', s: 'confrère', p: 'confrères' },
  documentCourant: { g: 'm', s: 'protocole d’accord', p: 'protocoles d’accord' },
  documentLong: { g: 'm', s: 'bail commercial', p: 'baux commerciaux' },
  reunion: {
    g: 'f',
    s: 'réunion d’équipe sur les dossiers en cours',
    p: 'réunions d’équipe sur les dossiers en cours',
  },
  offre: {
    g: 'f',
    s: 'permanence juridique mensuelle dédiée aux créateurs d’entreprise',
    p: 'permanences juridiques mensuelles dédiées aux créateurs d’entreprise',
  },
  poste: { g: 'm', s: 'assistant juridique', p: 'assistants juridiques' },
  evenement: {
    g: 'm',
    s: 'petit-déjeuner juridique sur le bail commercial',
    p: 'petits-déjeuners juridiques sur le bail commercial',
  },
  visuel: { g: 'f', s: 'fiche pratique illustrée', p: 'fiches pratiques illustrées' },
  domaine: 'le secteur juridique',
  motifReclamation: 'le montant de la facture d’honoraires du dernier trimestre',
  donnees:
    'le tableau de suivi des dossiers ouverts cette année, avec le temps passé et les honoraires facturés',
  colonnes:
    'Dossier;Matière;Avocat;Heures passées;Honoraires facturés (XPF);Honoraires encaissés (XPF)',
  indicateur: 'le taux de recouvrement des honoraires par matière',
  veille: 'les nouveaux textes et la jurisprudence applicables en Nouvelle-Calédonie',
  sourcesVeille:
    'le Journal officiel de la Nouvelle-Calédonie, le portail Leginova (qui remplace Juridoc) et Légifrance pour les textes nationaux applicables',
  jargon: 'la différence entre une assignation, une ordonnance de référé et un jugement au fond',
  procedure: 'l’ouverture d’un dossier client et la vérification des conflits d’intérêts',
  situationTendue: 'un client inquiet et pressé qui exige de savoir s’il va gagner son procès',
  donneesSensibles:
    'les noms des parties, les pièces des dossiers, les informations couvertes par le secret professionnel et les coordonnées des clients',
  corpus:
    'les lois du pays, les délibérations du Congrès et les décisions publiées sur une même question de droit',
  publicCible: 'les créateurs d’entreprise et les dirigeants de petites entreprises calédoniennes',
  etranger: 'un investisseur australien qui veut acheter des locaux commerciaux à Nouméa',
  themeFormation: 'les règles du cabinet sur les délais de procédure et le secret professionnel',
  tacheRepetitive: 'les courriers de rappel des pièces manquantes aux clients',
  planning: 'le calendrier des audiences et des échéances de procédure du mois pour trois avocats',
  comparaison: 'deux offres de logiciel de gestion de cabinet',
};

export const exercices = [
  {
    id: 'juri-resume-contrat-client',
    titre: 'Résumer un contrat de maintenance pour un client non juriste',
    metier: 'juridique',
    niveau: 'debutant',
    famille: 'synthetiser',
    duree: 15,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Le gérant d’un restaurant de la baie des Citrons, client du cabinet, va signer un contrat de maintenance de ses équipements de cuisine. Il demande « en deux mots, à quoi je m’engage ». L’avocate vous demande un projet de résumé, qu’elle relira avant de l’envoyer.',
    objectif:
      'Obtenir un résumé fidèle et compréhensible, qui renvoie à chaque article et respecte le niveau d’engagement de chaque clause.',
    etapes: [
      'Copiez les extraits du contrat avec le prompt de départ.',
      'Vérifiez chaque puce avec l’article cité : durée, montants, délais.',
      'Comparez la formulation de chaque engagement (délai d’intervention, responsabilité) avec les mots exacts du contrat.',
      'Demandez à l’IA de signaler, sans les juger, les trois clauses qui méritent l’attention du client.',
      'Transmettez le résumé à l’avocate avec vos remarques, pour validation.',
    ],
    prompt:
      'Tu aides une avocate d’un cabinet de Nouméa. Résume le contrat ci-dessous pour son client, gérant de restaurant, qui n’est pas juriste. Format : 8 puces au maximum, phrases courtes, sans jargon, chaque puce suivie du numéro de l’article entre parenthèses. Rubriques : durée et sortie du contrat, ce que ça coûte, ce qui est inclus et ce qui ne l’est pas, ce qui se passe en cas de panne ou de problème. Reprends fidèlement le niveau d’engagement de chaque clause, et ne donne aucun avis sur leur validité. Termine par 3 questions que le client pourrait poser à son avocate.\n\n<contrat>\n[collez le contrat ici]\n</contrat>',
    materiau: {
      titre: 'Contrat de maintenance (extraits, fictif)',
      texte:
        'Article 2 – Durée. Le contrat est conclu pour une durée de trente-six (36) mois à compter de sa signature. Il se renouvelle par tacite reconduction pour des périodes successives de douze (12) mois, sauf dénonciation par lettre recommandée avec accusé de réception au moins trois (3) mois avant l’échéance.\n\nArticle 4 – Prix. Le Client verse une redevance mensuelle de 48 000 XPF hors TGC, payable d’avance le 5 de chaque mois. La redevance est révisée chaque 1er janvier selon l’évolution de l’indice des prix publié par l’ISEE, sans pouvoir baisser.\n\nArticle 5 – Interventions. Le Prestataire assure deux visites préventives par an. Les interventions curatives sont facturées en sus au tarif horaire en vigueur ; le déplacement est inclus dans le Grand Nouméa et facturé 15 000 XPF au-delà.\n\nArticle 7 – Délai d’intervention. Le Prestataire s’efforce d’intervenir dans un délai de 48 heures ouvrées après l’appel du Client.\n\nArticle 9 – Responsabilité. La responsabilité du Prestataire est limitée, toutes causes confondues, au montant des redevances versées au cours des six (6) derniers mois. Elle ne couvre en aucun cas les pertes d’exploitation ni les denrées perdues.\n\nArticle 11 – Résiliation anticipée. En cas de résiliation anticipée par le Client, l’intégralité des redevances restant dues jusqu’au terme de la période en cours devient immédiatement exigible.\n\nArticle 13 – Litiges. Tout litige relève de la compétence du tribunal de première instance de Nouméa.',
    },
    variantes: {
      simple: 'Résumer seulement les articles 2, 4 et 11 (durée, prix, sortie).',
      poussee:
        'Préparer aussi une version orale de 45 secondes que l’avocate pourra utiliser au téléphone, et la liste des clauses qu’elle voudra peut-être renégocier.',
    },
    astuces: {
      claude:
        'Joignez le contrat en PDF et demandez de citer l’article pour chaque puce : la vérification sera rapide.',
      copilot:
        'Avec la licence, Copilot dans Word résume le document ouvert : précisez le public et demandez les numéros d’articles.',
    },
    vigilance:
      'Le résumé est un projet relu par l’avocate : ce n’est pas un conseil juridique. Avec un vrai contrat, utilisez uniquement l’outil autorisé par le cabinet et retirez le nom des parties.',
    formateur: {
      resultat:
        'Un résumé de 8 puces au plus, fidèle et sourcé : 36 mois puis reconduction annuelle sauf préavis de 3 mois, 48 000 XPF hors TGC par mois révisables à la hausse, interventions curatives en plus, délai de 48 heures présenté comme un objectif, exclusion des pertes d’exploitation et des denrées, coût d’une sortie anticipée.',
      criteres: [
        'Chaque puce renvoie au bon article et les chiffres sont exacts.',
        'Le délai d’intervention n’est pas présenté comme garanti.',
        'L’exclusion des denrées perdues est mentionnée : c’est le risque principal pour un restaurant.',
        'Le résumé ne contient aucun avis sur la validité des clauses.',
      ],
      pieges: [
        'Écrire « le prestataire intervient sous 48 h » : le texte dit seulement qu’il s’efforce de le faire.',
        'Oublier la tacite reconduction et le préavis de trois mois.',
        'Laisser l’IA qualifier une clause d’« abusive » ou de « nulle » sans validation de l’avocate.',
      ],
      competence: 'discernement',
      technique: 'format',
    },
    motsCles: ['contrat', 'résumé', 'client', 'vulgarisation', 'clauses'],
  },
  {
    id: 'juri-anonymiser-avant-ia',
    titre: 'Anonymiser un extrait de dossier avant de demander de l’aide à l’IA',
    metier: 'juridique',
    niveau: 'debutant',
    famille: 'corriger',
    duree: 15,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'copilot',
    situation:
      'Vous voulez demander à l’IA de transformer l’e-mail d’un client du cabinet en note claire pour l’avocat. L’e-mail contient des noms, des coordonnées, des données de santé et des informations couvertes par le secret professionnel. Avant tout, vous devez le rendre anonyme.',
    objectif:
      'Repérer les données personnelles et confidentielles d’un texte, les remplacer par des marqueurs, et vérifier que le résultat reste utilisable.',
    etapes: [
      'Lisez l’e-mail du matériau et repérez, sans l’IA, tout ce qui permet d’identifier une personne ou une affaire.',
      'Remplacez ces éléments par des marqueurs neutres (« Personne A », « Société B », « Date 1 », « Montant 1 »…) et gardez la table de correspondance hors de l’IA.',
      'Vérifiez qu’on ne peut plus reconnaître l’affaire par recoupement : commune, métier, ancienneté, date d’un accident.',
      'Confiez uniquement le texte anonymisé à l’IA avec le prompt de départ.',
      'Lisez ce que l’IA signale encore comme identifiant, et corrigez votre version si besoin.',
    ],
    prompt:
      'Tu es assistant juridique dans un cabinet d’avocats à Nouméa. Le texte ci-dessous est un e-mail de client déjà anonymisé : les marqueurs (Personne A, Société B, Date 1, Montant 1…) remplacent les noms, dates et montants. Garde ces marqueurs tels quels, sans chercher à les deviner. Transforme l’e-mail en note pour l’avocat : faits dans l’ordre chronologique, demande du client, pièces mentionnées, questions à lui poser. Ensuite, signale tout élément qui permettrait encore d’identifier une personne ou l’affaire.\n\n<email>\n[collez l’e-mail anonymisé ici]\n</email>',
    materiau: {
      titre: 'E-mail reçu par le cabinet (fictif)',
      texte:
        'Bonjour Maître,\n\nJe suis Marc Tehei, chef de chantier chez Bati-Sud Construction à Païta depuis 2014. Le 2 septembre, mon directeur, M. Laurent Picard, m’a remis une convocation à un entretien préalable. On me reproche un accident survenu le 28 août sur le chantier du lotissement Les Flamboyants, où un ouvrier, Jimmy W., s’est blessé à la main. Je n’étais pas présent ce jour-là : j’étais en arrêt maladie pour mon dos (j’ai le certificat du docteur Martin). Mon salaire est de 412 000 XPF brut. Mon numéro CAFAT est le 123 456. Pour vos honoraires, voici mon IBAN : NC12 3456 7890 1234 5678 9012 345. Vous pouvez me joindre au 75 12 34 ou à marc.tehei@exemple.nc.\n\nCordialement,\nMarc Tehei\n12 rue des Goélands, Dumbéa',
    },
    variantes: {
      simple: 'Se limiter à repérer et lister les éléments identifiants, sans recourir à l’IA.',
      poussee:
        'Rédiger une fiche réflexe d’anonymisation pour le cabinet : les catégories à masquer, les marqueurs à utiliser, les cas où on n’utilise pas l’IA du tout.',
    },
    astuces: {
      copilot:
        'Si le cabinet dispose de Copilot avec un compte professionnel, demandez au service informatique ce que l’outil conserve, avant d’y travailler sur des dossiers.',
      claude:
        'Demandez à Claude de lister les catégories de données à masquer à partir d’un texte fictif : vous obtiendrez une check-list réutilisable.',
    },
    vigilance:
      'Le secret professionnel couvre tout ce que le client confie. Même anonymisé, un extrait de dossier ne va que dans un outil validé par le cabinet, selon ses règles. Dans le doute, demandez à l’avocat responsable avant de coller quoi que ce soit.',
    formateur: {
      resultat:
        'Un e-mail où noms, entreprise, chantier, dates, données de santé, salaire, numéros (CAFAT, compte, téléphone), adresse et e-mail sont remplacés, une table de correspondance conservée hors de l’IA, et une note structurée obtenue à partir du seul texte anonymisé.',
      criteres: [
        'Les données de santé (arrêt maladie, certificat, nom du médecin) et l’identité de l’ouvrier blessé sont masquées.',
        'Le numéro de compte, le numéro CAFAT et les coordonnées ont disparu.',
        'L’apprenant a traité le risque de recoupement (entreprise de Païta, chef de chantier depuis 2014, date de l’accident).',
        'La note de l’IA garde les marqueurs sans les remplacer par des noms inventés.',
      ],
      pieges: [
        'Oublier les éléments indirects : nom du lotissement, nom du médecin, ancienneté exacte.',
        'Coller d’abord le texte original « pour voir », puis l’anonymiser : il est trop tard.',
      ],
      competence: 'diligence',
      technique: 'structurer',
    },
    motsCles: ['anonymisation', 'secret professionnel', 'données personnelles', 'confidentialité'],
  },
  {
    id: 'juri-references-inventees',
    titre: 'Repérer les références juridiques inventées par l’IA',
    metier: 'juridique',
    niveau: 'debutant',
    famille: 'veiller',
    duree: 20,
    outils: ['claude', 'chatgpt', 'gemini', 'copilot'],
    outilConseille: 'gemini',
    situation:
      'Un collaborateur a demandé à une IA les règles du bail commercial en Nouvelle-Calédonie et a collé la réponse dans une note. Elle cite des articles, une délibération, une loi du pays et un arrêt de la cour d’appel de Nouméa. L’avocate vous demande de vérifier chaque référence avant toute utilisation.',
    objectif:
      'Savoir que l’IA peut inventer des articles, des textes et des décisions, et vérifier chaque référence dans les sources officielles.',
    etapes: [
      'Listez toutes les références citées dans le matériau : articles, délibération, loi du pays, arrêt.',
      'Cherchez chacune dans les sources officielles : Journal officiel de la Nouvelle-Calédonie, portail Leginova (anciennement Juridoc), Légifrance pour les textes nationaux.',
      'Classez chaque référence : existe et dit bien cela, existe mais dit autre chose, introuvable.',
      'Demandez ensuite à l’IA, avec le prompt de départ, de vérifier sa propre réponse, et notez si elle reconnaît ses erreurs.',
      'Rédigez trois lignes de conclusion pour l’avocate : ce qui peut être utilisé, ce qui doit être écarté.',
    ],
    prompt:
      'Voici une réponse produite par une IA sur le bail commercial en Nouvelle-Calédonie. Pour chaque référence citée (article, délibération, loi du pays, décision), indique dans un tableau : la référence, ce qui est affirmé, ton niveau de certitude que la référence existe et dit cela, et où la vérifier. Si tu n’es pas sûr, écris « à vérifier » : ne complète pas une référence de mémoire.\n\n<reponse>\n[collez la réponse ici]\n</reponse>',
    materiau: {
      titre: 'Réponse de l’IA collée dans la note (texte écrit pour l’exercice)',
      texte:
        'En Nouvelle-Calédonie, le bail commercial est régi par les articles L. 145-1 et suivants du Code de commerce applicable localement. Selon l’article L. 145-4, la durée du bail ne peut être inférieure à neuf ans. La délibération n° 2019-127 du Congrès du 14 mars 2019 a plafonné la révision des loyers commerciaux à 3 % par an. Dans un arrêt du 12 juin 2021 (CA Nouméa, n° 21/00458), la cour d’appel de Nouméa a jugé que le locataire pouvait résilier le bail sans préavis après un cyclone. Enfin, la loi du pays n° 2020-15 limite le dépôt de garantie à deux mois de loyer.',
    },
    variantes: {
      simple: 'Vérifier seulement la délibération et l’arrêt.',
      poussee:
        'Poser la même question à deux outils différents, comparer leurs références, puis présenter au groupe une méthode de vérification en cinq étapes.',
    },
    astuces: {
      gemini:
        'Même avec Deep Research, ouvrez chaque lien : un rapport sourcé peut citer une page qui ne dit pas ce qui est affirmé.',
      claude:
        'Avec la recherche web activée, demandez le lien de la source officielle pour chaque référence, puis ouvrez-le vous-même.',
      copilot:
        'Copilot Chat cite les pages web consultées : une page de blog n’est pas une source officielle.',
    },
    vigilance:
      'Ne citez jamais une référence fournie par l’IA sans l’avoir lue dans sa source officielle. Une référence inventée dans un courrier ou des conclusions engage la crédibilité du cabinet.',
    formateur: {
      resultat:
        'Un tableau des cinq références classées après vérification. Le matériau a été écrit pour l’exercice : les numéros de la délibération, de l’arrêt et de la loi du pays ont été forgés, et l’application en Nouvelle-Calédonie des articles du Code de commerce cités est à établir dans les sources officielles.',
      criteres: [
        'Chaque référence a été cherchée dans une source officielle, pas seulement auprès de l’IA.',
        'L’apprenant distingue « introuvable » de « existe mais dit autre chose ».',
        'La conclusion à l’avocate écarte toute référence non vérifiée.',
      ],
      pieges: [
        'Croire une référence parce qu’elle a un numéro et une date précis.',
        'Se contenter de demander à l’IA « es-tu sûre ? » : elle peut confirmer une invention.',
        'Supposer qu’un article du Code de commerce métropolitain s’applique tel quel en Nouvelle-Calédonie.',
      ],
      competence: 'discernement',
      technique: 'critique',
    },
    motsCles: ['hallucination', 'références', 'jurisprudence', 'Leginova', 'vérification'],
  },
  {
    id: 'juri-pieces-vente-notaire',
    titre: 'Préparer la liste des pièces à demander pour une vente immobilière',
    metier: 'juridique',
    niveau: 'debutant',
    famille: 'organiser',
    duree: 15,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'copilot',
    situation:
      'Vous êtes assistant dans une étude notariale de Nouméa. Un couple vend un appartement au Faubourg-Blanchot. Le clerc vous a dicté la liste des pièces à réclamer aux vendeurs : vous devez en faire une check-list claire et un e-mail aux clients.',
    objectif:
      'Transformer une liste dictée en check-list et en e-mail clairs, sans que l’IA ajoute de pièces ni d’obligations.',
    etapes: [
      'Copiez les notes du clerc avec le prompt de départ.',
      'Comparez la check-list avec les notes : toutes les pièces y sont-elles ? L’IA en a-t-elle ajouté ?',
      'Vérifiez que les ajouts suggérés par l’IA sont bien isolés dans « À confirmer par le clerc ».',
      'Relisez l’e-mail : est-il clair pour des vendeurs qui ne connaissent pas le vocabulaire notarial ?',
      'Faites valider la check-list par le clerc avant l’envoi.',
    ],
    prompt:
      'Tu es assistant dans une étude notariale à Nouméa. À partir des notes du clerc ci-dessous, fais une check-list des pièces à demander aux vendeurs, regroupée par thème (identité, propriété, copropriété, financement, questions), avec une case à cocher par pièce. Reprends uniquement les pièces des notes : si une pièce te semble manquer, signale-la à part sous le titre « À confirmer par le clerc », sans l’ajouter à la liste. Puis rédige un e-mail aux vendeurs (vouvoiement, ton chaleureux, 150 mots au maximum) qui accompagne cette liste.\n\n<notes>\n[collez les notes ici]\n</notes>',
    materiau: {
      titre: 'Notes dictées par le clerc',
      texte:
        'vente F4 Faubourg-Blanchot, en copropriété, vendeurs mariés, acquéreur avec prêt bancaire\npièces vendeurs : titre de propriété (acte d’achat), pièces d’identité des deux, livret de famille et contrat de mariage s’il existe, coordonnées du syndic, 3 derniers procès-verbaux d’assemblée générale, règlement de copropriété, carnet d’entretien de l’immeuble, dernier appel de charges de copropriété\ndiagnostics : on s’en occupe, demande envoyée par l’étude au cabinet de diagnostic habituel\nsi prêt en cours sur l’appartement : coordonnées de la banque\nRIB pour le versement du prix\nquestions à poser : locataire en place ? travaux faits depuis l’achat ?',
    },
    variantes: {
      simple: 'Se limiter à la check-list, sans e-mail.',
      poussee:
        'Préparer aussi la check-list de l’acquéreur et un tableau de suivi des pièces reçues, partagé avec le clerc.',
    },
    astuces: {
      copilot:
        'Dans Outlook, « Brouillon avec Copilot » rédige l’e-mail à partir de quelques mots ; collez ensuite la check-list validée.',
      gemini:
        'Dans Gmail, « Aide-moi à écrire » propose l’e-mail ; vérifiez qu’il ne promet aucun délai de signature.',
    },
    vigilance:
      'L’IA connaît surtout les pratiques de métropole : une pièce ou un diagnostic qu’elle ajoute n’est pas forcément exigé en Nouvelle-Calédonie. Seul le clerc ou le notaire fixe la liste. N’indiquez pas le nom des clients dans votre demande.',
    formateur: {
      resultat:
        'Une check-list complète et fidèle aux notes, avec les diagnostics présentés comme pris en charge par l’étude, les ajouts éventuels de l’IA isolés « à confirmer », et un e-mail clair et chaleureux.',
      criteres: [
        'Toutes les pièces des notes figurent dans la check-list, et aucune n’a été ajoutée.',
        'Les diagnostics sont présentés comme demandés par l’étude, conformément aux notes.',
        'Les deux questions du clerc (locataire en place, travaux) figurent dans l’e-mail ou la liste.',
        'L’e-mail ne contient aucun nom réel.',
      ],
      pieges: [
        'Laisser l’IA ajouter des diagnostics (performance énergétique, plomb…) que le clerc n’a pas demandés.',
        'Accepter un e-mail qui annonce une date de signature que personne n’a fixée.',
      ],
      competence: 'discernement',
      technique: 'format',
    },
    motsCles: ['notaire', 'vente immobilière', 'check-list', 'pièces', 'e-mail'],
  },
  {
    id: 'juri-mise-en-demeure',
    titre: 'Rédiger un projet de mise en demeure et le faire relire',
    metier: 'juridique',
    niveau: 'intermediaire',
    famille: 'rediger',
    duree: 30,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Une entreprise d’électricité de Koné, cliente du cabinet, n’est pas payée par un promoteur depuis quatre mois. L’avocat vous demande un projet de lettre de mise en demeure, qu’il relira et signera. Vous disposez des faits qu’il a résumés.',
    objectif:
      'Obtenir un premier jet structuré, puis le contrôler : chiffres, dates, références inventées et ton.',
    etapes: [
      'Donnez les faits à l’IA avec le prompt de départ et obtenez un premier projet.',
      'Vérifiez chaque chiffre et chaque date avec les faits : factures, acompte, reste dû, relances.',
      'Surlignez toute référence juridique, tout taux ou toute indemnité que vous n’avez pas fournis, et demandez de les remplacer par [à compléter par l’avocat].',
      'Demandez à l’IA une relecture critique de son projet : ton, fermeté, menace excessive, informations manquantes.',
      'Préparez pour l’avocat une note de trois lignes : ce que vous avez vérifié, ce qui reste à compléter.',
    ],
    prompt:
      'Tu es assistant juridique dans un cabinet d’avocats de Nouméa. Rédige un projet de lettre de mise en demeure, au nom de l’avocat, à partir des faits ci-dessous. Structure : rappel des travaux et des factures, paiements reçus, relances restées sans suite, montant restant dû, demande de paiement sous 15 jours, conséquences à défaut. Ton ferme et courtois. N’invente aucune référence juridique, aucun taux, aucune indemnité : là où il en faudrait une, écris [à compléter par l’avocat]. Termine par la liste des points à faire vérifier.\n\n<faits>\n[collez les faits ici]\n</faits>',
    materiau: {
      titre: 'Faits transmis par l’avocat (fictifs)',
      texte:
        'Client du cabinet : société Électricité du Nord, Koné, électricité générale.\nDébiteur : SARL Résidences du Lagon, promoteur immobilier, Nouméa.\nTravaux : installation électrique de 12 logements d’une résidence à Pouembout, achevée le 15 mai.\nFactures : n° F-041 du 31 mai, 2 350 000 XPF TTC ; n° F-052 du 30 juin, 1 180 000 XPF TTC. Total : 3 530 000 XPF.\nPaiement reçu : acompte de 500 000 XPF le 20 juillet.\nRelances : e-mail le 15 juillet, appel le 2 août, e-mail le 10 septembre, sans suite.\nContrat : paiement à 30 jours fin de mois ; pénalités de retard prévues à l’article 8 du contrat (taux à reprendre dans le contrat).\nObjectif : paiement sous 15 jours, à défaut saisine du tribunal.',
    },
    variantes: {
      simple: 'Se limiter au paragraphe qui récapitule les factures, le paiement et le reste dû.',
      poussee:
        'Demander deux versions (très ferme, plus conciliante avec proposition d’échéancier), et préparer pour l’avocat un tableau des avantages de chacune.',
    },
    astuces: {
      chatgpt:
        'Ouvrez le projet dans le canevas pour retravailler un paragraphe à la fois, sans tout régénérer.',
      copilot:
        'Avec la licence, Copilot dans Word rédige le projet directement dans le modèle de lettre du cabinet.',
    },
    vigilance:
      'Le projet ne part jamais sans relecture et signature de l’avocat. Sur un vrai dossier, utilisez uniquement l’outil autorisé par le cabinet, et ne collez pas les noms réels des parties si ce n’est pas permis.',
    formateur: {
      resultat:
        'Un projet de lettre structuré, aux montants exacts (3 530 000 XPF facturés, 500 000 XPF reçus, 3 030 000 XPF restant dus), sans référence ni taux inventé, avec des marqueurs [à compléter par l’avocat] et une liste de points à vérifier.',
      criteres: [
        'Les montants, les dates et les numéros de factures sont exacts.',
        'Aucun article, taux ou indemnité n’apparaît sans avoir été fourni.',
        'Le ton est ferme sans menace disproportionnée ni accusation.',
        'La note à l’avocat liste ce qui reste à compléter (taux de l’article 8, mode d’envoi).',
      ],
      pieges: [
        'Accepter une indemnité forfaitaire de recouvrement exprimée en euros, reprise d’une règle de métropole.',
        'Laisser passer un reste dû de 3 530 000 XPF : l’acompte a été oublié.',
        'Laisser l’IA citer des articles du Code civil sans vérifier leur numérotation et leur application en Nouvelle-Calédonie.',
      ],
      competence: 'discernement',
      technique: 'contexte',
    },
    motsCles: ['mise en demeure', 'impayé', 'courrier', 'recouvrement'],
  },
  {
    id: 'juri-comparer-versions-contrat',
    titre: 'Comparer deux versions d’un contrat et repérer chaque modification',
    metier: 'juridique',
    niveau: 'intermediaire',
    famille: 'analyser',
    duree: 30,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Le cabinet, qui conseille un distributeur, a envoyé un projet de contrat de distribution à l’avocat du fournisseur. La version revenue « avec quelques ajustements mineurs » n’a pas de suivi des modifications. Vous devez repérer tous les changements avant la réunion de demain.',
    objectif:
      'Faire comparer deux textes par l’IA dans un tableau, puis contrôler mot à mot ce qu’elle a pu laisser passer.',
    etapes: [
      'Copiez les deux versions avec le prompt de départ.',
      'Lisez le tableau article par article : texte d’origine, texte modifié, nature du changement, effet pour le distributeur.',
      'Contrôlez vous-même chaque article, mot à mot : l’IA a-t-elle vu les mots supprimés, même courts ?',
      'Demandez à l’IA de classer les modifications de la plus à la moins sensible pour le distributeur, en justifiant.',
      'Préparez la liste des points à discuter avec l’avocat, sans trancher à sa place.',
    ],
    prompt:
      'Tu es assistant juridique. Notre client est le Distributeur. Compare les deux versions du contrat ci-dessous, article par article. Présente un tableau : article, texte de la version 1, texte de la version 2, modification (ajout, suppression, changement de chiffre), effet possible pour le Distributeur. Signale aussi les mots supprimés, même courts. Écris « aucune modification » quand c’est le cas. Ne donne pas d’avis sur ce qu’il faut accepter.\n\n<version1>\n[collez la version 1 ici]\n</version1>\n\n<version2>\n[collez la version 2 ici]\n</version2>',
    materiau: {
      titre: 'Les deux versions du contrat de distribution (extraits, fictifs)',
      texte:
        'VERSION 1 (envoyée par le cabinet)\nArt. 1 – Le Fournisseur concède au Distributeur l’exclusivité de la distribution des produits sur la Grande Terre et les îles Loyauté.\nArt. 3 – Le Distributeur s’engage à commander un minimum de 12 000 000 XPF HT par année civile.\nArt. 4 – Les factures sont payables à 60 jours fin de mois.\nArt. 6 – Le contrat est conclu pour 3 ans, renouvelable par accord écrit des parties.\nArt. 8 – Chaque partie peut résilier le contrat en cas de manquement grave de l’autre, après mise en demeure restée sans effet pendant 30 jours.\nArt. 10 – Tout litige relève du tribunal de première instance de Nouméa.\n\nVERSION 2 (retour de l’avocat du fournisseur)\nArt. 1 – Le Fournisseur concède au Distributeur l’exclusivité de la distribution des produits sur la Grande Terre.\nArt. 3 – Le Distributeur s’engage à commander un minimum de 15 000 000 XPF HT par année civile. À défaut, l’exclusivité pourra être retirée de plein droit.\nArt. 4 – Les factures sont payables à 30 jours fin de mois.\nArt. 6 – Le contrat est conclu pour 3 ans, renouvelable par tacite reconduction pour des périodes d’un an.\nArt. 8 – Chaque partie peut résilier le contrat en cas de manquement de l’autre, après mise en demeure restée sans effet pendant 15 jours.\nArt. 10 – Tout litige relève du tribunal de première instance de Nouméa.',
    },
    variantes: {
      simple: 'Comparer seulement les articles 3 et 8.',
      poussee:
        'Faire préparer un projet de contre-proposition sur les trois points les plus sensibles, à soumettre à l’avocat.',
    },
    astuces: {
      claude:
        'Joignez les deux versions en fichiers et demandez le tableau dans un artefact, facile à copier dans votre note.',
      copilot:
        'Pour contrôler l’IA, utilisez aussi la fonction Comparer de Word (onglet Révision), qui marque chaque mot changé.',
    },
    vigilance:
      'Une comparaison par l’IA peut oublier un mot supprimé : la vérification mot à mot reste la vôtre. L’appréciation des risques et la stratégie de négociation reviennent à l’avocat.',
    formateur: {
      resultat:
        'Un tableau qui relève six modifications sur cinq articles : îles Loyauté retirées de l’exclusivité (art. 1), minimum porté de 12 à 15 millions XPF avec retrait possible de l’exclusivité (art. 3), paiement à 30 jours au lieu de 60 (art. 4), tacite reconduction (art. 6), mot « grave » supprimé et délai réduit de 30 à 15 jours (art. 8) ; l’article 10 est inchangé.',
      criteres: [
        'Les six modifications sont repérées, y compris la suppression du mot « grave ».',
        'L’article 10 est noté sans modification.',
        'Les effets pour le Distributeur sont décrits sans recommandation tranchée.',
      ],
      pieges: [
        'Croire la mention « ajustements mineurs » : toutes les modifications sont défavorables au Distributeur.',
        'Ne pas voir le retrait des îles Loyauté, une suppression de quelques mots.',
      ],
      competence: 'discernement',
      technique: 'structurer',
    },
    motsCles: ['contrat', 'comparaison', 'versions', 'négociation', 'clauses'],
  },
  {
    id: 'juri-expliquer-jugement',
    titre: 'Expliquer un jugement à une cliente en langage simple',
    metier: 'juridique',
    niveau: 'intermediaire',
    famille: 'corriger',
    duree: 20,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Le tribunal a rendu sa décision dans le litige qui oppose une cliente du cabinet, gérante d’un snack à Bourail, à son bailleur. Elle a reçu le jugement et appelle, inquiète : elle ne comprend pas si elle a gagné. L’avocat vous demande un projet d’explication simple, qu’il relira.',
    objectif:
      'Faire reformuler un texte juridique pour une personne non juriste, sans rien perdre ni rien ajouter au dispositif.',
    etapes: [
      'Copiez l’extrait du jugement avec le prompt de départ.',
      'Vérifiez que l’explication reprend chaque ligne du dispositif (« PAR CES MOTIFS ») : montants, délais, obligations des deux parties.',
      'Demandez une version encore plus simple, lisible au téléphone en une minute.',
      'Repérez toute phrase qui va au-delà du jugement : conseil de faire appel, pronostic, date inventée.',
      'Soumettez votre version à l’avocat, avec les points qu’il devra préciser (date de signification, voies de recours).',
    ],
    prompt:
      'Tu aides un avocat à expliquer un jugement à sa cliente, gérante d’un snack, qui n’est pas juriste. Explique-lui en langage simple, en 200 mots au maximum, en vouvoiement : ce qu’elle a obtenu, ce qu’elle doit faire et dans quel délai, ce que doit faire le bailleur, et ce qui se passe si une échéance n’est pas payée. Appuie-toi uniquement sur le texte ci-dessous, explique les mots techniques, et ne donne aucun conseil sur un éventuel appel. Termine par les questions qu’elle devrait poser à son avocat.\n\n<jugement>\n[collez l’extrait ici]\n</jugement>',
    materiau: {
      titre: 'Extrait du jugement (décision fictive)',
      texte:
        'TRIBUNAL DE PREMIÈRE INSTANCE DE NOUMÉA\n\nMOTIFS\nLa société bailleresse demande la résiliation du bail pour défaut de paiement des loyers d’avril à juillet. La locataire justifie avoir conservé les sommes dans l’attente de la réfection de la toiture, dont la nécessité est établie par le rapport d’expertise. Toutefois, elle ne pouvait suspendre seule le paiement des loyers. Compte tenu de sa bonne foi, il y a lieu de lui accorder des délais de paiement.\n\nPAR CES MOTIFS\nDÉBOUTE la société bailleresse de sa demande de résiliation du bail ;\nCONDAMNE la locataire à payer la somme de 640 000 XPF au titre des loyers d’avril à juillet, en quatre mensualités de 160 000 XPF, la première avant le 15 du mois suivant la signification du présent jugement ;\nDIT qu’à défaut de paiement d’une seule mensualité à son échéance, la totalité deviendra immédiatement exigible ;\nCONDAMNE la société bailleresse à réaliser les travaux de réfection de la toiture dans un délai de trois mois à compter de la signification ;\nDIT que chaque partie conservera la charge de ses propres dépens.',
    },
    variantes: {
      simple: 'Expliquer seulement ce que la cliente doit payer, et quand.',
      poussee:
        'Préparer aussi un tableau de suivi des quatre mensualités et des travaux du bailleur, à remplir une fois la date de signification connue.',
    },
    astuces: {
      claude:
        'Demandez à Claude de relire sa propre explication en listant chaque ligne du dispositif et la phrase qui y correspond.',
      chatgpt:
        'Dans le canevas, demandez « niveau de lecture plus simple » pour voir le texte se simplifier sans changer le fond.',
    },
    vigilance:
      'L’explication reste un projet validé par l’avocat : elle ne remplace ni son conseil ni l’information sur les voies de recours et leurs délais. Ne donnez aucune date limite que l’avocat n’a pas vérifiée.',
    formateur: {
      resultat:
        'Une explication claire : le bail n’est pas résilié ; la cliente doit 640 000 XPF en quatre mensualités de 160 000 XPF à partir de la signification, et tout devient exigible au premier impayé ; le bailleur doit refaire la toiture dans les trois mois ; chacun garde ses frais de procédure.',
      criteres: [
        'Le maintien du bail est dit clairement.',
        'Le paiement échelonné et la conséquence d’un impayé sont expliqués.',
        'L’obligation du bailleur (toiture sous trois mois) est mentionnée.',
        'Aucun conseil sur l’appel ni date limite inventée.',
      ],
      pieges: [
        'Résumer par « vous avez gagné » ou « vous avez perdu » : la décision est partagée.',
        'Inventer la date de la première mensualité, qui dépend de la signification.',
        'Garder « dépens » ou « signification » sans les expliquer.',
      ],
      competence: 'description',
      technique: 'format',
    },
    motsCles: ['jugement', 'vulgarisation', 'client', 'langage clair', 'bail'],
  },
  {
    id: 'juri-chronologie-dossier',
    titre: 'Établir la chronologie d’un dossier à partir des pièces',
    metier: 'juridique',
    niveau: 'intermediaire',
    famille: 'organiser',
    duree: 30,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Un client du cabinet, artisan menuisier au Mont-Dore, est en litige avec un particulier sur la pose d’une cuisine. Il a envoyé une série de messages et de documents en désordre. L’avocate veut une chronologie claire et la liste de ce qui manque avant le rendez-vous de jeudi.',
    objectif:
      'Faire mettre en ordre des pièces par l’IA, en lui interdisant de combler les trous, et préparer les questions au client.',
    etapes: [
      'Copiez les pièces avec le prompt de départ.',
      'Vérifiez l’ordre chronologique et les montants (devis, acompte, solde) avec les pièces.',
      'Vérifiez que la pièce non datée est rangée à part, sans date inventée.',
      'Relisez la liste des trous et des contradictions : manque-t-il quelque chose d’important pour l’avocate ?',
      'Faites préparer la liste des questions et des pièces à demander au client avant le rendez-vous.',
    ],
    prompt:
      'Tu es assistant juridique dans un cabinet d’avocats. À partir des pièces ci-dessous, établis la chronologie du dossier dans un tableau : date, événement, pièce, remarque. Range les pièces non datées à part. Vérifie la cohérence des montants. Ne déduis rien qui ne soit pas écrit : signale les trous et les contradictions dans une liste séparée, et ne donne aucun avis sur qui a raison. Termine par les pièces ou informations à demander au client.\n\n<pieces>\n[collez les pièces ici]\n</pieces>',
    materiau: {
      titre: 'Pièces transmises par le client (fictives)',
      texte:
        'Pièce A – SMS du client, 3 mars : « Les portes du haut ne ferment pas, je ne paie pas le solde tant que ce n’est pas réglé. »\nPièce B – Devis signé n° D-118, 12 novembre : cuisine sur mesure, 1 450 000 XPF TTC, acompte de 40 %, pose prévue « courant janvier ».\nPièce C – Facture de solde, 28 février : 870 000 XPF TTC.\nPièce D – Relevé bancaire : virement de l’acompte reçu le 20 novembre, 580 000 XPF.\nPièce E – E-mail du menuisier, 8 janvier : les façades venant de métropole sont retardées par le transport maritime, pose décalée à mi-février.\nPièce F – Procès-verbal de réception, 26 février : signé par le client « avec réserves : réglage des portes hautes ».\nPièce G – E-mail du menuisier, 10 mars : propose de passer le 14 mars pour les réglages.\nPièce H – SMS du client, 12 mars : « Inutile de venir, j’ai fait appel à quelqu’un d’autre, je vous enverrai sa facture. »\nPièce I – Note manuscrite du menuisier, non datée : « appelé le client 2 fois, pas de réponse ».',
    },
    variantes: {
      simple: 'Se limiter au tableau chronologique, sans liste de questions.',
      poussee:
        'Faire préparer un échéancier des prochaines étapes possibles (relance amiable, mise en demeure, saisine), à compléter par l’avocate avec les délais vérifiés.',
    },
    astuces: {
      claude:
        'Demandez la chronologie en fichier Excel grâce à la création de fichiers : l’avocate pourra la compléter au fil du dossier.',
      gemini:
        'Exportez le tableau dans Google Sheets pour y ajouter les pièces suivantes au fil du dossier.',
    },
    vigilance:
      'Les pièces d’un vrai dossier sont couvertes par le secret professionnel : utilisez uniquement l’outil autorisé par le cabinet, et retirez les noms et coordonnées des particuliers.',
    formateur: {
      resultat:
        'Une chronologie des huit pièces datées dans l’ordre (B, D, E, F, C, A, G, H), la note I à part, des montants cohérents (580 000 + 870 000 = 1 450 000 XPF) et une liste de demandes : années exactes, paiement ou non du solde, photos des défauts, levée des réserves, facture de l’autre artisan, dates des appels.',
      criteres: [
        'L’ordre chronologique est juste et chaque ligne renvoie à sa pièce.',
        'La note non datée n’est pas placée à une date inventée.',
        'Les montants sont vérifiés et cohérents.',
        'La liste des pièces manquantes est utile pour le rendez-vous.',
      ],
      pieges: [
        'Accepter une date inventée pour la pièce I ou pour la pose.',
        'Laisser l’IA conclure qui a raison : ce n’est pas sa tâche.',
      ],
      competence: 'description',
      technique: 'structurer',
    },
    motsCles: ['chronologie', 'pièces', 'dossier', 'litige', 'préparation de rendez-vous'],
  },
  {
    id: 'juri-veille-reglementaire',
    titre: 'Organiser une veille réglementaire vérifiée dans les sources officielles',
    metier: 'juridique',
    niveau: 'avance',
    famille: 'veiller',
    duree: 45,
    outils: ['claude', 'chatgpt', 'gemini'],
    outilConseille: 'gemini',
    situation:
      'Le service juridique d’un groupe de distribution de Nouméa doit suivre les nouveaux textes sur la protection des consommateurs et la réglementation des prix en Nouvelle-Calédonie. Aujourd’hui, la veille dépend de la lecture irrégulière de la presse. Vous mettez en place une veille assistée par l’IA, dont chaque information est vérifiée.',
    objectif:
      'Concevoir une veille récurrente avec l’IA, et une méthode de vérification qui ne laisse passer aucune information non sourcée.',
    etapes: [
      'Définissez le périmètre : thèmes, types de textes (lois du pays, délibérations du Congrès, arrêtés du gouvernement), période, et complétez le prompt.',
      'Lancez une recherche approfondie avec le prompt de départ et obtenez un premier rapport sourcé.',
      'Vérifiez chaque texte cité dans sa source officielle : Journal officiel de la Nouvelle-Calédonie et portail Leginova (anciennement Juridoc).',
      'Classez les résultats : vérifié, introuvable, source secondaire seulement (presse, blog).',
      'Programmez la veille (tâche planifiée ou action programmée) et rédigez la fiche de vérification que suivra le collègue qui la reçoit.',
    ],
    prompt:
      'Tu es juriste chargé de la veille dans un groupe de distribution en Nouvelle-Calédonie. Recherche les textes publiés au cours des [trois derniers mois] sur [la protection des consommateurs et la réglementation des prix] en Nouvelle-Calédonie : lois du pays, délibérations du Congrès, arrêtés du gouvernement. Pour chaque texte, donne : intitulé exact, numéro, date, source consultée avec son lien, résumé en deux lignes, impact possible pour un distributeur. Distingue les sources officielles des articles de presse. Si tu ne trouves pas de source officielle, écris « non vérifié ». N’invente aucun numéro de texte.',
    variantes: {
      simple: 'Faire une recherche ponctuelle sur un seul thème, sans programmer la veille.',
      poussee:
        'Comparer les rapports de deux outils sur la même période, puis bâtir un tableau de veille partagé avec une colonne « vérifié par ».',
    },
    astuces: {
      claude:
        'La Recherche (payante) produit un rapport sourcé ; les tâches planifiées (payantes) peuvent relancer la veille chaque mois.',
      chatgpt:
        'La recherche approfondie (limitée en gratuit) rend un rapport sourcé ; une tâche planifiée (payante) la relance chaque semaine.',
      gemini:
        'Lancez Deep Research, exportez le rapport dans Google Docs, puis utilisez « Programmer des actions » pour une relance mensuelle.',
    },
    vigilance:
      'Une veille automatisée ne remplace pas la consultation du Journal officiel : un texte peut manquer, un autre être mal résumé ou mal daté. Toute analyse d’impact est validée par un juriste avant diffusion. Le portail officiel a changé récemment : les liens anciens peuvent ne plus fonctionner.',
    formateur: {
      resultat:
        'Un rapport de veille où chaque texte est classé (vérifié au Journal officiel ou sur Leginova, introuvable, presse seulement), une veille programmée et une fiche de vérification en quelques étapes.',
      criteres: [
        'Chaque texte retenu a été retrouvé dans une source officielle.',
        'Les textes introuvables sont écartés ou signalés, pas reformulés.',
        'La fiche de vérification est utilisable par un collègue.',
        'Le périmètre (thèmes, période, types de textes) est explicite dans le prompt.',
      ],
      pieges: [
        'Retenir un texte métropolitain (Code de la consommation, décret national) qui ne s’applique pas forcément en Nouvelle-Calédonie.',
        'Se fier au lien donné par l’IA sans l’ouvrir : il peut mener à une autre page ou à rien.',
        'Confondre la date d’adoption d’un texte avec sa date de publication ou d’entrée en vigueur.',
      ],
      competence: 'diligence',
      technique: 'sources',
    },
    motsCles: [
      'veille juridique',
      'Journal officiel',
      'Leginova',
      'Deep Research',
      'tâche planifiée',
    ],
  },
  {
    id: 'juri-assistant-revue-contrats',
    titre: 'Créer un assistant de première lecture des contrats selon la grille du service',
    metier: 'juridique',
    niveau: 'avance',
    famille: 'automatiser',
    duree: 60,
    outils: ['claude', 'chatgpt', 'gemini', 'copilot'],
    outilConseille: 'claude',
    situation:
      'Le service juridique d’une entreprise de travaux publics de Nouméa relit une quinzaine de contrats fournisseurs par mois, et chaque juriste a sa méthode. La responsable veut une grille commune et un assistant qui fasse une première lecture : il repère les écarts à la grille et cite la clause, le juriste décide.',
    objectif:
      'Écrire une grille de revue réutilisable, en faire un assistant aux instructions permanentes, et mesurer ses limites sur des contrats fictifs aux écarts connus.',
    etapes: [
      'Complétez la grille du matériau avec la responsable juridique : position de l’entreprise et seuil d’alerte pour chaque point.',
      'Créez l’assistant : Projet ou compétence (Claude), Projet ou GPT (ChatGPT), Gem (Gemini) ou agent (Copilot), avec le prompt de départ et la grille en instructions.',
      'Dans une autre conversation, faites générer un contrat fictif de prestation de deux pages contenant trois écarts à la grille, et notez lesquels.',
      'Soumettez ce contrat à l’assistant : a-t-il repéré les trois écarts ? A-t-il inventé des problèmes ?',
      'Ajustez les instructions et refaites le test avec un second contrat fictif.',
      'Rédigez la règle d’usage : quels contrats peuvent être soumis, qui valide, ce qui ne sort jamais de l’entreprise.',
    ],
    prompt:
      'Tu es l’assistant de première lecture des contrats fournisseurs du service juridique de [nom de l’entreprise]. Tu ne valides jamais un contrat : tu prépares une fiche pour le juriste.\n\nPour chaque contrat soumis :\n1. Passe en revue chaque point de la grille ci-dessous, dans l’ordre.\n2. Pour chaque point, cite la clause exacte (numéro et texte), compare-la à notre position, et classe-la : conforme, écart à discuter, écart bloquant, absent du contrat.\n3. Ne qualifie jamais une clause de nulle ou d’illégale, et ne cite aucun texte de loi.\n4. Si une clause est ambiguë, dis-le et cite-la.\n5. Termine par les trois points prioritaires pour le juriste.\n\n<grille>\n[collez la grille ici]\n</grille>',
    materiau: {
      titre: 'Grille de revue des contrats fournisseurs (exemple à compléter)',
      texte:
        '1. Durée et renouvellement : durée ferme de 2 ans au plus ; pas de tacite reconduction de plus d’un an.\n2. Prix et révision : prix ferme la première année ; révision plafonnée et liée à un indice publié.\n3. Paiement : 30 jours fin de mois au minimum ; pénalités de retard au plus égales à [taux validé par la direction].\n4. Responsabilité : plafond de responsabilité du fournisseur au moins égal au montant annuel du contrat ; pas d’exclusion des dommages corporels.\n5. Assurances : attestation d’assurance de responsabilité civile à fournir avant le début des travaux.\n6. Résiliation : possible pour manquement après mise en demeure de 30 jours ; pas d’indemnité de sortie anticipée.\n7. Confidentialité : obligation réciproque.\n8. Litiges : tribunaux de Nouméa ; pas d’arbitrage à l’étranger.',
    },
    variantes: {
      simple:
        'Se contenter d’un prompt réutilisable avec la grille, testé sur un contrat fictif, sans créer d’assistant.',
      poussee:
        'Ajouter à l’assistant deux fiches de revue exemplaires, puis comparer ses fiches à celles de deux juristes sur trois contrats fictifs.',
    },
    astuces: {
      claude:
        'Une compétence applique la grille dès qu’un contrat est déposé ; un Projet garde la grille et des exemples de fiches réussies.',
      chatgpt:
        'Dans un Projet, mettez la grille dans les instructions ; un GPT (création payante) peut être partagé avec les autres juristes.',
      gemini:
        'Créez un Gem avec la grille en instructions, et ajoutez une fiche exemplaire en fichier.',
      copilot:
        'Créer un agent dépend de votre licence ; mettez la grille dans ses instructions et testez-le dans Copilot Chat.',
    },
    vigilance:
      'Ne soumettez de vrais contrats que dans l’outil validé par l’entreprise, après accord de la responsable juridique. L’assistant prépare une lecture : la décision de signer, de négocier ou de refuser reste celle du juriste.',
    formateur: {
      resultat:
        'Un assistant aux instructions écrites, testé sur deux contrats fictifs, qui retrouve les écarts semés, cite les clauses exactes et n’invente pas de problème, accompagné d’une règle d’usage écrite.',
      criteres: [
        'La grille est complète : position et seuil d’alerte pour chaque point.',
        'L’assistant a retrouvé les écarts semés dans le contrat de test, avec la citation de la clause.',
        'L’apprenant a corrigé ses instructions après le premier test.',
        'La règle d’usage précise qui valide et quels contrats sont exclus.',
      ],
      pieges: [
        'Tester l’assistant sur un contrat dont on ne connaît pas les écarts : impossible de mesurer ce qu’il oublie.',
        'Prendre « aucun écart repéré » pour une validation du contrat.',
        'Laisser l’assistant citer des articles de loi « pour appuyer » sa lecture.',
      ],
      competence: 'delegation',
      technique: 'instructions',
    },
    motsCles: ['revue de contrats', 'grille', 'assistant', 'compétence', 'clauses à risque'],
  },
  {
    id: 'juri-carnet-textes-officiels',
    titre: 'Interroger un corpus de textes officiels dans un carnet Gemini Notebook',
    metier: 'juridique',
    niveau: 'avance',
    famille: 'synthetiser',
    duree: 45,
    outils: ['notebook'],
    outilConseille: 'notebook',
    situation:
      'Une cliente du cabinet veut transformer sa maison de Païta en gîte pour touristes. L’avocate doit répondre à ses questions sur les démarches et les obligations. Vous rassemblez les textes officiels pertinents dans un carnet Gemini Notebook pour préparer la note de recherche.',
    objectif:
      'Construire un corpus de sources officielles datées, obtenir des réponses citées, et repérer ce que les sources ne disent pas.',
    etapes: [
      'Rassemblez 5 à 10 textes officiels en PDF ou en pages web : textes de la province Sud sur l’hébergement touristique, délibérations, guides officiels (pas d’articles de blog).',
      'Créez un carnet, chargez ces textes comme sources, et notez pour chacun sa date et sa version.',
      'Posez les questions de la cliente avec le prompt de départ, et ouvrez chaque citation pour la vérifier.',
      'Générez une carte mentale pour voir les notions couvertes et celles qui manquent.',
      'Faites générer un rapport de synthèse, puis transformez-le en plan de note de recherche avec une colonne « à vérifier ».',
      'Listez les questions auxquelles le corpus ne répond pas, pour l’avocate.',
    ],
    prompt:
      'Réponds aux questions ci-dessous uniquement à partir des sources du carnet. Pour chaque réponse, cite le texte et le passage, et précise la date du texte. Si les sources ne répondent pas, ou si deux sources se contredisent, dis-le. Ne complète jamais avec des connaissances générales.\n\n<questions>\n[collez les questions ici]\n</questions>',
    materiau: {
      titre: 'Questions de la cliente',
      texte:
        '1. Dois-je déclarer ou faire classer mon gîte avant d’accueillir des touristes ?\n2. Y a-t-il des normes minimales (chambres, sanitaires, sécurité incendie) ?\n3. Puis-je louer par les plateformes en ligne sans autre démarche ?\n4. Dois-je collecter une taxe de séjour ou une autre taxe ?\n5. Mon voisin peut-il s’opposer à mon activité ?',
    },
    variantes: {
      simple: 'Charger trois textes et traiter les questions 1 et 2.',
      poussee:
        'Partager le carnet avec l’avocate, puis générer un guide d’étude pour former un nouveau collaborateur sur ce thème.',
    },
    astuces: {
      notebook:
        'La carte mentale montre d’un coup d’œil les notions couvertes : un thème absent de la carte est souvent absent des sources.',
    },
    vigilance:
      'Le carnet ne connaît que les sources chargées : un texte abrogé ou modifié peut y figurer. Vérifiez la version en vigueur au Journal officiel ou sur Leginova. Ne chargez aucune pièce du dossier de la cliente.',
    formateur: {
      resultat:
        'Un corpus daté de sources officielles, des réponses citées et vérifiées, une carte des notions, et une liste claire des questions sans réponse dans le corpus (souvent la question 5, qui relève d’autres règles).',
      criteres: [
        'Toutes les sources sont officielles et datées.',
        'Chaque réponse retenue renvoie à une citation vérifiée.',
        'Les questions sans réponse dans le corpus sont identifiées, pas comblées.',
        'Le plan de note distingue ce qui est établi de ce qui reste à vérifier.',
      ],
      pieges: [
        'Charger des articles de blog ou des forums : le carnet les cite comme n’importe quelle source.',
        'Garder une version ancienne d’un texte sans vérifier qu’elle est en vigueur.',
        'Reprendre une réponse sans ouvrir la citation qui l’appuie.',
      ],
      competence: 'discernement',
      technique: 'sources',
    },
    motsCles: ['Gemini Notebook', 'corpus', 'recherche juridique', 'province Sud', 'sources'],
  },
  {
    id: 'juri-regles-usage-ia',
    titre: 'Rédiger les règles d’usage de l’IA au cabinet',
    metier: 'juridique',
    niveau: 'avance',
    famille: 'organiser',
    duree: 45,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Au cabinet, chacun utilise déjà l’IA à sa façon : l’un y colle des conclusions, l’autre des e-mails de clients, une troisième s’en sert pour sa veille. L’associée veut des règles claires, compatibles avec le secret professionnel, avant la fin du mois. Vous préparez le projet.',
    objectif:
      'Inventorier les usages, les classer selon le risque, en tirer des règles concrètes et les tester sur des cas.',
    etapes: [
      'Faites classer par l’IA les usages du matériau (autorisé, autorisé avec précautions, interdit), avec une raison pour chacun, et discutez chaque classement.',
      'Demandez un projet de règles d’une page : données qu’on ne colle jamais, outils autorisés, vérification obligatoire, information du client, traçabilité.',
      'Faites critiquer ce projet par l’IA, qui joue d’abord un associé très prudent, puis un collaborateur pressé.',
      'Testez les règles sur les cinq cas pratiques du matériau : chaque cas a-t-il une réponse claire ?',
      'Listez les points à faire trancher par l’associée et à vérifier auprès du barreau de Nouméa ou de l’assureur du cabinet.',
    ],
    prompt:
      'Tu aides un cabinet d’avocats de Nouméa à rédiger ses règles d’usage de l’IA. Contraintes : le secret professionnel couvre tout ce que confie le client ; aucun document de dossier ne sort des outils validés par le cabinet ; toute production de l’IA est relue par un avocat.\nÉtape 1 : classe les usages ci-dessous (autorisé, autorisé avec précautions, interdit) en justifiant en une ligne.\nÉtape 2 : propose des règles tenant sur une page, en phrases courtes et concrètes.\nNe cite aucun texte de loi ni aucune règle déontologique précise : signale plutôt ce qui est à vérifier.\n\n<usages>\n[collez les usages ici]\n</usages>',
    materiau: {
      titre: 'Usages relevés au cabinet et cas pratiques',
      texte:
        'Usages actuels :\n- Coller des conclusions adverses pour en faire un résumé\n- Faire corriger l’orthographe des courriers aux clients\n- Demander de la jurisprudence à l’IA et la citer directement\n- Traduire un contrat en anglais pour un client australien\n- Préparer un article de blog sur le bail commercial\n- Faire transcrire un rendez-vous client enregistré sur téléphone\n\nCas pratiques à tester :\n1. Une stagiaire veut faire résumer un rapport d’expertise médicale.\n2. Un collaborateur veut utiliser son compte gratuit personnel le week-end.\n3. Un client demande si l’IA a été utilisée pour ses conclusions.\n4. L’IA propose une jurisprudence idéale pour le dossier, sans lien vers la décision.\n5. Le secrétariat veut un assistant pour trier les e-mails entrants.',
    },
    variantes: {
      simple: 'Se limiter au classement des six usages, avec une raison pour chacun.',
      poussee:
        'Transformer les règles en assistant (Projet, Gem) qui répond aux questions des collaborateurs, puis préparer une formation de 20 minutes pour l’équipe.',
    },
    astuces: {
      claude:
        'Demandez le projet de règles en fichier Word grâce à la création de fichiers, pour le faire circuler.',
      copilot: 'Transformez le projet en Copilot Page : les associés le commentent directement.',
    },
    vigilance:
      'Les règles déontologiques et les obligations de protection des données qui s’appliquent au cabinet sont à vérifier auprès du barreau et d’un spécialiste : l’IA ne doit pas les inventer. Les cas de l’exercice sont fictifs.',
    formateur: {
      resultat:
        'Un tableau des usages classés et justifiés, une page de règles concrètes (données interdites, outils autorisés, relecture, information du client, traçabilité) testée sur les cinq cas, et une liste de points à faire trancher par l’associée.',
      criteres: [
        'Les usages qui exposent des pièces de dossier (conclusions, expertise médicale, enregistrement) sont encadrés ou interdits, avec une raison.',
        'Chaque cas pratique trouve une réponse claire dans les règles.',
        'Le projet ne cite aucune règle déontologique inventée.',
        'Les points à trancher sont listés pour l’associée.',
      ],
      pieges: [
        'Accepter une règle vague (« utiliser l’IA avec prudence ») qui ne répond à aucun cas.',
        'Laisser l’IA citer un article de règlement professionnel sans source.',
      ],
      competence: 'diligence',
      technique: 'critique',
    },
    motsCles: ['charte', 'usage de l’IA', 'secret professionnel', 'déontologie', 'cabinet'],
  },
];
