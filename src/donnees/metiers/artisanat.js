/**
 * Artisanat et services de proximité : coiffure, esthétique, barbier, couture, bijouterie,
 * réparation, fleuriste, photographie, toilettage…, souvent seul ou à deux ou trois.
 * Toutes les personnes, entreprises, adresses et sommes sont fictives.
 */

export const vocabulaire = {
  structure: {
    g: 'f',
    s: 'petite entreprise artisanale',
    p: 'petites entreprises artisanales',
  },
  client: { g: 'm', s: 'client', p: 'clients' },
  partenaire: { g: 'm', s: 'fournisseur', p: 'fournisseurs' },
  documentCourant: { g: 'm', s: 'devis', p: 'devis' },
  documentLong: {
    g: 'm',
    s: 'guide des bonnes pratiques du métier',
    p: 'guides des bonnes pratiques du métier',
  },
  reunion: { g: 'm', s: 'point mensuel de l’équipe', p: 'points mensuels de l’équipe' },
  offre: {
    g: 'm',
    s: 'forfait de rentrée à tarif réduit',
    p: 'forfaits de rentrée à tarif réduit',
  },
  poste: { g: 'm', s: 'employé polyvalent', p: 'employés polyvalents' },
  evenement: {
    g: 'f',
    s: 'soirée de présentation des nouvelles créations',
    p: 'soirées de présentation des nouvelles créations',
  },
  visuel: { g: 'f', s: 'affiche de vitrine', p: 'affiches de vitrine' },
  domaine: 'l’artisanat et les services de proximité',
  motifReclamation: 'le résultat d’une prestation qui ne lui convient pas',
  donnees: 'le relevé des prestations des trois derniers mois, avec leur durée et leur tarif',
  colonnes: 'Date;Prestation;Durée (min);Tarif (XPF);Mode de réservation',
  indicateur: 'le chiffre d’affaires moyen par heure de travail, prestation par prestation',
  veille: 'les aides et les concours ouverts aux artisans en Nouvelle-Calédonie',
  sourcesVeille:
    'le site de la chambre de métiers et de l’artisanat, les pages des provinces et la presse calédonienne',
  jargon: 'les étapes d’une prestation sur mesure, du devis à la livraison',
  procedure: 'l’accueil d’un nouveau client',
  situationTendue: 'un client mécontent du résultat de sa prestation, qui réclame un remboursement',
  donneesSensibles:
    'les noms, numéros de téléphone, photos et historiques de prestations des clients',
  corpus:
    'les fiches techniques, les notices et les conditions de vente des fournisseurs de l’atelier',
  publicCible:
    'les habitants du quartier et les jeunes actifs qui cherchent un artisan de proximité',
  etranger: 'un touriste anglophone de passage à Nouméa qui cherche une réparation rapide',
  themeFormation: 'l’accueil et l’encaissement d’un client, de la prise de rendez-vous au paiement',
  tacheRepetitive: 'les rappels de rendez-vous envoyés la veille aux clients',
  planning: 'les rendez-vous de la semaine pour deux employés et une apprentie',
  comparaison: 'deux devis de fournisseurs pour le même matériel',
};

export const exercices = [
  {
    id: 'artis-presentation-activite',
    titre: 'Rédiger la présentation de son activité pour sa page et sa fiche en ligne',
    metier: 'artisanat',
    niveau: 'debutant',
    famille: 'rediger',
    duree: 15,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Vous êtes bijoutier créateur à Nouméa : vous recevez à l’atelier sur rendez-vous et vous tenez un stand au marché de Port-Moselle le samedi. Votre page Facebook et la fiche de votre atelier sur les cartes en ligne n’ont presque rien comme texte, et vous ne savez pas comment parler de vous sans en faire trop.',
    objectif:
      'Transformer des notes en vrac en présentation claire et sincère, en donnant à l’IA le contexte, le public et les limites à respecter.',
    etapes: [
      'Copiez les notes du matériau dans votre outil d’IA avec le prompt de départ, puis complétez les crochets.',
      'Relisez la présentation longue et soulignez chaque affirmation : est-elle dans vos notes ?',
      'Demandez la version courte de 350 caractères pour la fiche en ligne, sans rien ajouter.',
      'Demandez trois idées d’accroche, et gardez celle qui sonne comme vous.',
      'Faites relire le texte final par un proche ou un client habitué, puis publiez-le.',
    ],
    prompt:
      'Tu es rédacteur pour les petits artisans de Nouvelle-Calédonie. Écris la présentation de mon activité à partir de mes notes ci-dessous. Elle sera lue par [le public visé : habitants du Grand Nouméa, touristes, futurs mariés…] sur ma page Facebook, puis sur la fiche de mon atelier en ligne.\n\nRègles :\n- Utilise uniquement les informations des notes. N’invente aucun label, aucune distinction, aucun chiffre ni aucun superlatif (« meilleur », « unique », « exclusif »).\n- Ton chaleureux et simple, à la première personne, 120 mots environ.\n- Termine par une phrase qui dit comment me contacter et quand me trouver.\nPuis écris une version de 350 caractères maximum pour la fiche en ligne.\n\n<notes>\n[collez vos notes ici]\n</notes>',
    materiau: {
      titre: 'Notes en vrac du bijoutier (fictives)',
      texte:
        'atelier ouvert en 2019, Ducos, sur rendez-vous du mardi au vendredi de 9 h à 15 h\nstand au marché de Port-Moselle le samedi de 7 h à 11 h\nbijoux en argent, nacre et bois local, tout est fait main dans l’atelier\ncréation sur mesure (délai 2 à 3 semaines), réparation, gravure, mise à taille des bagues\nformé 4 ans chez un bijoutier de Nouméa puis 2 ans en métropole\nbeaucoup de commandes pour les mariages et les cadeaux de naissance\nenvoi par la poste possible pour les îles et la brousse, frais en plus\npaiement espèces, carte ou virement\npas d’adresse exacte en ligne : on prend rendez-vous par message sur la page\nne veut pas de mots comme « luxe » ou « exclusif », ça ne lui ressemble pas',
    },
    variantes: {
      simple: 'Demander seulement la version de 350 caractères pour la fiche en ligne.',
      poussee:
        'Demander la présentation pour trois publics (touristes, futurs mariés, habitants du quartier), puis une version en anglais à faire vérifier par une personne qui le parle.',
    },
    astuces: {
      claude:
        'Demandez trois versions de ton différent (sobre, chaleureux, créatif), puis combinez la meilleure ouverture et la meilleure conclusion.',
      chatgpt:
        'Ouvrez le texte dans le canevas : vous pourrez demander de raccourcir ou de changer le ton d’un seul paragraphe.',
      gemini: 'Ouvrez le texte dans Canvas pour retoucher un passage précis sans tout régénérer.',
    },
    vigilance:
      'La présentation vous engage : chaque affirmation doit être vraie le jour où un client la lit. Pas d’adresse exacte ni de numéro personnel si vous ne voulez pas les rendre publics.',
    formateur: {
      resultat:
        'Une présentation de 120 mots environ, fidèle aux notes, sans superlatif ni label inventé, et une version courte de 350 caractères au plus pour la fiche en ligne.',
      criteres: [
        'Toutes les informations (horaires, matières, services, délai) figurent dans les notes.',
        'Aucun mot interdit par l’artisan (« luxe », « exclusif ») n’apparaît.',
        'La version courte respecte les 350 caractères.',
        'L’adresse exacte n’est pas publiée.',
      ],
      pieges: [
        'Laisser passer « meilleur bijoutier de Nouméa » ou « pièces uniques certifiées », ajoutés par l’IA.',
        'Mettre l’adresse de l’atelier alors que l’artisan reçoit sur rendez-vous.',
        'Publier un texte générique qui pourrait être celui de n’importe quel bijoutier.',
      ],
      competence: 'description',
      technique: 'contexte',
    },
    motsCles: ['présentation', 'page Facebook', 'fiche en ligne', 'bijoutier', 'artisan'],
  },
  {
    id: 'artis-grille-tarifs-canva',
    titre: 'Créer dans Canva la grille des tarifs à afficher en boutique',
    metier: 'artisanat',
    niveau: 'debutant',
    famille: 'visuels',
    duree: 20,
    outils: ['canva', 'chatgpt', 'claude'],
    outilConseille: 'canva',
    situation:
      'Vous tenez un salon de barbier à Bourail. Vos tarifs sont écrits au feutre sur une feuille scotchée au miroir, et les clients vous les redemandent chaque jour. Vous voulez une grille propre à afficher à l’entrée, et une version pour votre page.',
    objectif:
      'Organiser une liste de prestations avec l’IA, générer un design dans Canva, puis contrôler chaque prix avant d’imprimer.',
    etapes: [
      'Avec ChatGPT ou Claude, faites regrouper vos prestations en trois rubriques et rédiger une courte phrase d’intro, sans changer aucun prix.',
      'Dans Canva, décrivez à l’IA Canva le design voulu : format A4 portrait, style sobre de barbier, texte lisible à deux mètres.',
      'Choisissez une proposition, remplacez le texte d’exemple par le vôtre et vérifiez les prix ligne par ligne.',
      'Utilisez l’écriture magique pour raccourcir un intitulé qui déborde, puis ajoutez vos couleurs et votre logo.',
      'Déclinez la grille en format carré pour votre page, avec le redimensionnement magique (Pro) ou en recopiant le design.',
    ],
    prompt:
      'Tu es graphiste pour un petit salon de barbier en Nouvelle-Calédonie. À partir de la liste de prestations ci-dessous, organise le contenu d’une grille de tarifs à afficher en vitrine : trois rubriques, un intitulé court pour chaque prestation, le prix en XPF aligné à droite, et une phrase d’accueil de dix mots au maximum. Ne change aucun prix, n’ajoute ni ne retire aucune prestation.\n\n<prestations>\n[collez la liste des prestations ici]\n</prestations>',
    materiau: {
      titre: 'Liste des prestations du salon (fictive)',
      texte:
        'Coupe homme : 3 000 XPF\nCoupe enfant (moins de 12 ans) : 2 000 XPF\nCoupe dégradé + finitions au rasoir : 3 500 XPF\nTaille de barbe : 2 000 XPF\nCoupe + barbe : 4 800 XPF\nRasage à l’ancienne, serviette chaude : 3 500 XPF\nSoin du visage express : 2 500 XPF\nColoration de barbe : 2 500 XPF\nShampooing seul : 800 XPF\nForfait marié (coupe, barbe, rasage, sur rendez-vous) : 9 000 XPF\nPaiement : espèces ou carte. Ouvert du mardi au samedi, de 8 h à 17 h.',
    },
    variantes: {
      simple:
        'Partir directement d’un modèle de menu ou de tarifs de Canva et n’utiliser l’IA que pour organiser le texte.',
      poussee:
        'Créer trois styles de grille (sobre, rétro, très coloré), les faire commenter par des clients, puis enregistrer la meilleure comme modèle à mettre à jour à chaque changement de prix.',
    },
    astuces: {
      canva:
        'Si vous avez un kit de marque (Pro), appliquez-le : couleurs, polices et logo se mettent en place en un clic.',
      chatgpt:
        'Demandez ensuite quelle rubrique est la plus facile à lire de loin, et pourquoi, avant de choisir l’ordre.',
    },
    vigilance:
      'Un prix faux sur une affiche vous engage envers le client. L’affichage des prix suit des règles à vérifier auprès de la chambre de métiers et de l’artisanat : ne les laissez pas à l’IA.',
    formateur: {
      resultat:
        'Une grille A4 lisible, avec les dix prestations et les prix exacts du matériau, regroupés en trois rubriques, et sa version carrée pour la page.',
      criteres: [
        'Les dix prix correspondent exactement à la liste fournie.',
        'Aucune prestation n’est ajoutée ni supprimée.',
        'La grille se lit à deux mètres : peu de texte, bon contraste.',
        'Le texte d’exemple du modèle Canva a disparu.',
      ],
      pieges: [
        'Garder un prix d’exemple du modèle Canva, ou un prix arrondi par l’IA.',
        'Oublier une prestation (le forfait marié, le shampooing) en recopiant.',
        'Surcharger la grille avec trop de polices et de couleurs.',
      ],
      competence: 'diligence',
      technique: 'format',
    },
    motsCles: ['tarifs', 'Canva', 'affichage', 'barbier', 'vitrine'],
  },
  {
    id: 'artis-messages-rendez-vous',
    titre: 'Corriger et harmoniser les messages de confirmation et de rappel de rendez-vous',
    metier: 'artisanat',
    niveau: 'debutant',
    famille: 'corriger',
    duree: 15,
    outils: ['copilot', 'claude', 'chatgpt', 'gemini'],
    outilConseille: 'copilot',
    situation:
      'Vous tenez un salon de coiffure au Mont-Dore avec une employée. Trop de clientes oublient leur rendez-vous ou préviennent à la dernière minute. Vous avez écrit quatre messages vite fait, mais ils sont secs, pleins de fautes et sans aucune règle claire.',
    objectif:
      'Faire corriger et harmoniser des messages courts, en précisant le ton et ce qui ne doit pas changer (jour, heure, règle d’annulation).',
    etapes: [
      'Copiez les quatre messages et la règle de la maison dans votre outil d’IA avec le prompt de départ.',
      'Vérifiez que les messages corrigés gardent les mêmes informations : variables entre crochets, délai de prévenance, adresse.',
      'Demandez une version SMS de 160 caractères au plus pour la confirmation et pour le rappel.',
      'Relisez le ton du message de retard et du message d’annulation tardive : est-il courtois mais ferme ?',
      'Enregistrez les messages dans les notes de votre téléphone, prêts à copier-coller.',
    ],
    prompt:
      'Tu es assistant d’un salon de coiffure au Mont-Dore. Corrige l’orthographe et la ponctuation des quatre messages ci-dessous, rends leur ton chaleureux et poli, et harmonise-les. Garde tous les champs entre crochets tels quels et ne change aucune règle de la maison. Présente chaque message corrigé, puis une version SMS de 160 caractères au maximum pour la confirmation et pour le rappel.\n\n<regle_de_la_maison>\n[collez la règle de la maison ici]\n</regle_de_la_maison>\n\n<messages>\n[collez les quatre messages ici]\n</messages>',
    materiau: {
      titre: 'Règle de la maison et quatre messages à corriger',
      texte:
        'RÈGLE DE LA MAISON\n- on prévient au moins 24 h avant pour annuler ou déplacer\n- au-delà de 15 minutes de retard, la prestation peut être raccourcie ou reportée\n- adresse : 12 rue des Hibiscus, Mont-Dore (adresse fictive)\n\nMESSAGE 1 : CONFIRMATION\nBonjour [prénom], votre rendez vous est confirmer le [jour] a [heure] pour [prestation]. Merci de pas oublier. A bientôt\n\nMESSAGE 2 : RAPPEL LA VEILLE\nRappel : demain [heure] chez nous. Si vous pouvez pas venir prévenez moi vite sinon la place est perdu.\n\nMESSAGE 3 : RETARD\nVous avez 20 min de retard, on peu plus vous prendre. Rappelez pour un autre rdv.\n\nMESSAGE 4 : ANNULATION TARDIVE\nVous avez annuler ce matin alors que le rdv est à 14h, c’est pas correct, la prochaine fois on vous prendra pas.',
    },
    variantes: {
      simple: 'Corriger seulement les messages 1 et 2, sans version SMS.',
      poussee:
        'Ajouter un message de remerciement après la prestation avec une invitation à prendre le prochain rendez-vous, puis une version en anglais pour les touristes.',
    },
    astuces: {
      copilot:
        'Dans Outlook, partez d’un « Brouillon avec Copilot » pour les messages envoyés par e-mail, puis lancez « Coaching par Copilot » avant l’envoi.',
      claude:
        'Demandez la liste des modifications après les messages corrigés, pour vérifier que la règle de la maison n’a pas changé.',
      gemini:
        'Dans Gmail, utilisez « Aide-moi à écrire » (Google Workspace) pour reformuler un message à la fois.',
    },
    vigilance:
      'N’ajoutez jamais de nom, de numéro ni de détail de prestation réels d’une cliente dans le prompt : gardez les champs entre crochets. Ne laissez pas l’IA inventer une pénalité ou un acompte que vous n’appliquez pas.',
    formateur: {
      resultat:
        'Quatre messages corrects, courtois et cohérents, qui reprennent la règle des 24 h et des 15 minutes, plus deux versions SMS de 160 caractères au plus.',
      criteres: [
        'La règle de la maison (24 h, 15 minutes) est reprise sans modification.',
        'Les champs entre crochets sont conservés.',
        'Les versions SMS ne dépassent pas 160 caractères, vérifiés par l’apprenant.',
        'Le message d’annulation tardive est ferme sans être agressif.',
      ],
      pieges: [
        'Laisser l’IA ajouter une pénalité financière ou un acompte inexistants.',
        'Perdre un champ [heure] ou [prénom] dans la correction.',
        'Envoyer les messages sans les relire une fois les champs remplis.',
      ],
      competence: 'discernement',
      technique: 'format',
    },
    motsCles: ['rendez-vous', 'SMS', 'rappel', 'annulation', 'salon de coiffure'],
  },
  {
    id: 'artis-checklist-ouverture-hygiene',
    titre: 'Transformer ses habitudes d’ouverture et d’hygiène en check-list pour une apprentie',
    metier: 'artisanat',
    niveau: 'debutant',
    famille: 'organiser',
    duree: 15,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Vous dirigez un salon de coiffure à Nouméa. Une apprentie arrive lundi. Vous faites l’ouverture, la mise en place du poste et la désinfection du matériel par habitude, sans rien avoir écrit. Vous avez dicté vos gestes sur votre téléphone.',
    objectif:
      'Transformer une dictée en check-list claire, dans le bon ordre, que l’on peut imprimer, tout en gardant la main sur les règles d’hygiène.',
    etapes: [
      'Copiez la dictée dans votre outil d’IA avec le prompt de départ.',
      'Vérifiez que chaque geste est présent, dans l’ordre où vous les faites réellement.',
      'Demandez trois rubriques : ouverture, entre deux clientes, fermeture, avec une case à cocher par ligne.',
      'Repérez les lignes qui touchent à l’hygiène et à la sécurité, et soulignez celles à confirmer.',
      'Faites relire la check-list par une collègue ou un professionnel, puis imprimez-la.',
    ],
    prompt:
      'Tu es formateur dans un salon de coiffure à Nouméa. Voici, dictés en vrac, les gestes que j’exécute à l’ouverture, entre deux clientes et à la fermeture. Transforme-les en check-list pour une apprentie : trois rubriques, une action par ligne, une phrase courte à l’impératif, avec une case à cocher. Garde l’ordre de mes gestes. N’ajoute aucun produit, aucune durée ni aucune règle d’hygiène qui ne figure pas dans ma dictée. Si tu penses qu’un point important manque, place-le dans une liste « À confirmer » à part.\n\n<dictee>\n[collez la dictée ici]\n</dictee>',
    materiau: {
      titre: 'Dictée de la patronne (fictive)',
      texte:
        'alors j’arrive vers 7 h 45, j’ouvre le rideau, j’allume les clims et les lumières, je vérifie qu’il y a assez de serviettes propres\nje passe un coup de balai et je regarde les bacs à shampooing\nje vide la poubelle de la veille si Maéva ne l’a pas fait\nje prépare les 3 postes : peignes et ciseaux propres, capes, un flacon de désinfectant\nje regarde le carnet de rendez-vous du jour et je prépare les couleurs de la matinée\nentre deux clientes : je jette les cheveux, je désinfecte le poste, je change la cape, je lave les peignes\nje n’oublie pas de me laver les mains avant les colorations, gants obligatoires\nfermeture : lessive des serviettes, vider les bacs, ranger les produits au meuble fermé, fermer les clims, vérifier la caisse et la fermer au coffre, fermer le rideau',
    },
    variantes: {
      simple: 'Demander seulement la check-list d’ouverture.',
      poussee:
        'Demander ensuite un quiz de dix questions pour vérifier que l’apprentie a retenu les gestes, puis une version courte à afficher dans l’arrière-boutique.',
    },
    astuces: {
      chatgpt:
        'Demandez un tableau avec une colonne case à cocher, puis téléchargez-le au format Excel.',
      copilot:
        'Transformez la réponse en Copilot Page (compte professionnel) : votre apprentie peut cocher et commenter la check-list.',
      claude:
        'Avec « Création de fichiers », demandez directement un fichier Word prêt à imprimer.',
    },
    vigilance:
      'La check-list reprend vos gestes : elle ne remplace pas les règles d’hygiène et de sécurité de votre métier, à vérifier auprès de la chambre de métiers et de l’artisanat. Ne laissez pas l’IA y ajouter des normes sans les contrôler.',
    formateur: {
      resultat:
        'Une check-list imprimable, en trois rubriques, qui reprend tous les gestes de la dictée dans l’ordre, avec une liste « À confirmer » honnête.',
      criteres: [
        'Tous les gestes de la dictée sont présents (clims, serviettes, caisse, rideau…).',
        'Aucune règle d’hygiène ni durée n’a été inventée.',
        'Le format respecte une action par ligne, avec case à cocher.',
        'Les points à confirmer sont signalés et non glissés dans la liste.',
      ],
      pieges: [
        'Accepter une règle de désinfection (durée, produit) inventée et présentée comme obligatoire.',
        'Perdre un geste de la dictée, comme la fermeture de la caisse au coffre.',
        'Imprimer sans faire relire par une personne du métier.',
      ],
      competence: 'description',
      technique: 'structurer',
    },
    motsCles: ['check-list', 'ouverture', 'hygiène', 'apprentie', 'procédure'],
  },
  {
    id: 'artis-prix-de-revient',
    titre: 'Calculer le prix de revient d’une prestation et vérifier son tarif',
    metier: 'artisanat',
    niveau: 'intermediaire',
    famille: 'analyser',
    duree: 30,
    outils: ['chatgpt', 'claude', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Vous êtes coiffeuse dans un salon de Païta. Depuis deux ans, la coloration avec coupe est affichée 14 500 XPF. Vous avez l’impression de travailler beaucoup pour peu. Vous avez noté tous les coûts d’une prestation et vous voulez savoir si votre tarif la couvre.',
    objectif:
      'Faire calculer un prix de revient par l’IA, vérifier les calculs, puis comparer deux façons de calculer une marge.',
    etapes: [
      'Collez le tableau des coûts avec le prompt de départ et demandez le total en montrant le calcul de chaque ligne.',
      'Refaites à la calculatrice la ligne du temps de travail et celle du loyer : 2 h 15 n’est pas 2,15 heures.',
      'Demandez la marge actuelle en XPF et en pourcentage, puis le prix à afficher pour obtenir 20 % de marge, en précisant la formule utilisée.',
      'Demandez comment la réponse change si 100 heures facturables seulement sont vendues par mois au lieu de 120.',
      'Décidez vous-même du tarif : l’IA calcule, vous choisissez ce que vos clientes accepteront.',
    ],
    prompt:
      'Tu es conseiller en gestion pour une petite entreprise de coiffure en Nouvelle-Calédonie. Voici les coûts d’une prestation (coloration avec coupe) et son tarif actuel.\n\n1. Calcule le prix de revient total en montrant le calcul de chaque ligne.\n2. Donne la marge actuelle en XPF et en pourcentage du prix de vente.\n3. Calcule le prix à afficher pour obtenir [20] % de marge sur le prix de vente, puis sur le prix de revient, et explique la différence entre les deux.\n4. Refais les calculs avec [100] heures facturables par mois au lieu de 120.\nSi une donnée te semble incohérente, signale-la au lieu de la corriger. Ne dis rien des taxes ni des cotisations : je les vérifierai moi-même.\n\n<couts>\n[collez le tableau des coûts ici]\n</couts>',
    materiau: {
      titre: 'Coûts d’une coloration avec coupe (fictifs) ; tarif affiché : 14 500 XPF',
      texte:
        'Poste;Détail;Montant (XPF)\nProduit de coloration;2 tubes à 1 450 XPF;2 900\nOxydant;1 dose;350\nShampooing et soin;1 dose;400\nConsommables jetables;gants, cape, charlotte;250\nEau, électricité et séchoir;estimation par prestation;300\nMain-d’œuvre;2 h 15 à 2 800 XPF de l’heure, salaire chargé;6 300\nLoyer et charges du salon;180 000 XPF par mois pour 120 h facturables, soit 2 h 15;3 375\nAssurance et logiciel de rendez-vous;48 000 XPF par mois pour 120 h facturables, soit 2 h 15;900',
    },
    variantes: {
      simple:
        'Demander seulement le prix de revient total et la marge actuelle, sans les scénarios.',
      poussee:
        'Ajouter trois autres prestations (coupe femme, brushing, soin) et demander un tableau comparatif des marges, puis une proposition de nouvelle grille de tarifs à discuter.',
    },
    astuces: {
      chatgpt:
        'Déposez le tableau en CSV : l’analyse de données calcule en code, que vous pouvez afficher pour vérifier.',
      gemini:
        'Collez le tableau dans Google Sheets et utilisez « Demander à Gemini » pour ajouter une colonne et les formules de la marge.',
      copilot:
        'Mettez le tableau dans Excel avant de le confier à Copilot dans Excel (selon la licence) : il le lit beaucoup mieux.',
    },
    vigilance:
      'Les coûts sont fictifs ; avec vos vrais chiffres, gardez-les pour vous. Taxes, cotisations et salaire de la gérante ne sont pas dans ce tableau : l’IA ne doit pas les ajouter sur sa seule estimation.',
    formateur: {
      resultat:
        'Un prix de revient de 14 775 XPF contre un tarif de 14 500 XPF, soit une marge négative de 275 XPF (environ −1,9 %) ; un prix d’environ 17 730 XPF pour 20 % de marge sur le coût, et 18 469 XPF pour 20 % du prix de vente.',
      criteres: [
        'Le total de 14 775 XPF est exact et l’apprenant a vérifié au moins deux lignes.',
        'La durée de 2 h 15 est bien convertie en 2,25 heures.',
        'La différence entre marge sur le coût et marge sur le prix de vente est expliquée.',
        'La décision de tarif est celle de l’apprenant, pas de l’IA.',
      ],
      pieges: [
        'Calculer 2,15 heures au lieu de 2,25 pour la main-d’œuvre.',
        'Confondre taux de marge sur le coût et sur le prix de vente.',
        'Laisser l’IA ajouter des cotisations ou une taxe qui ne figurent pas dans le tableau.',
      ],
      competence: 'discernement',
      technique: 'critique',
    },
    motsCles: ['prix de revient', 'tarif', 'marge', 'coiffure', 'XPF'],
  },
  {
    id: 'artis-devis-sur-mesure',
    titre: 'Rédiger un devis clair pour une commande sur mesure à partir du message d’une cliente',
    metier: 'artisanat',
    niveau: 'intermediaire',
    famille: 'rediger',
    duree: 30,
    outils: ['copilot', 'claude', 'chatgpt'],
    outilConseille: 'copilot',
    situation:
      'Vous êtes couturière à Bourail. Une cliente vous écrit pour une robe de cérémonie, à porter pour un mariage en décembre. Elle ne connaît pas les prix et pense à un budget de 40 000 XPF. Vous avez noté vos estimations en vrac, et vous voulez un devis lisible et une réponse courtoise.',
    objectif:
      'Convertir une demande vague et des notes d’atelier en devis détaillé, puis en message d’accompagnement, sans promettre plus que ce que vous pouvez tenir.',
    etapes: [
      'Collez le message de la cliente et vos notes d’atelier dans votre outil d’IA, et demandez d’abord la liste des informations manquantes ou floues, sans rédiger.',
      'Répondez aux questions, puis demandez le devis : lignes détaillées, total, validité, délai, conditions.',
      'Refaites le total à la calculatrice et comparez avec le budget de la cliente.',
      'Demandez un message d’accompagnement de 120 mots, qui explique l’écart avec le budget sans la brusquer et propose une option moins chère.',
      'Vérifiez le délai, l’acompte et les mentions du devis ; faites valider les mentions obligatoires auprès de la chambre de métiers et de l’artisanat avant d’envoyer.',
    ],
    prompt:
      'Tu es assistante d’une couturière à Bourail. Je dois répondre à une cliente qui demande une robe sur mesure. Commence par lister les informations manquantes ou ambiguës dans son message au regard de mes notes, sans rédiger. Je te répondrai, puis tu rédigeras le devis : un tableau (désignation, quantité, prix unitaire en XPF, montant), le total, un délai, une durée de validité à laisser entre crochets, et les conditions de ma maison. N’invente aucun prix ni aucune règle : ne reprends que mes notes.\n\n<message_cliente>\n[collez le message de la cliente]\n</message_cliente>\n\n<notes_atelier>\n[collez vos notes d’atelier]\n</notes_atelier>',
    materiau: {
      titre: 'Message de la cliente et notes de la couturière (fictifs)',
      texte:
        'MESSAGE DE LA CLIENTE (Mme L.)\nBonjour, je vais à un mariage le 12 décembre et je cherche une robe longue, élégante, pas trop chaude. Je ne sais pas trop quel tissu choisir. Je pensais à un budget de 40 000 XPF. Je suis à Pouembout, je peux venir à Bourail pour les essayages. J’aimerais l’avoir au plus tard le 5 décembre. Merci de me dire ce qui est possible.\n\nNOTES DE LA COUTURIÈRE\n- robe longue sur mesure : environ 14 h de travail, 2 500 XPF de l’heure\n- tissu léger (viscose ou crêpe) : 4 m à 2 200 XPF le mètre, à acheter chez le grossiste de Nouméa (livraison en deux jours)\n- doublure : 2 m à 900 XPF le mètre\n- fermeture éclair, fil, bretelles : 1 200 XPF\n- 3 essayages prévus, à la boutique\n- commandes de décembre en retard si pas confirmées avant le 20 novembre\n- acompte à la commande : 30 % du total\n- retouches après livraison : une seule offerte',
    },
    variantes: {
      simple: 'Demander seulement le tableau du devis, sans message d’accompagnement.',
      poussee:
        'Demander deux options (robe complète ou robe simplifiée sans doublure) avec leur écart de prix, puis un message qui laisse la cliente choisir sans pression.',
    },
    astuces: {
      copilot:
        'Avec Copilot dans Word (selon la licence), demandez le devis directement dans votre modèle de devis ; sinon, préparez-le dans Copilot Chat.',
      claude:
        'Avec « Création de fichiers », demandez le devis en fichier Word ou PDF prêt à envoyer.',
      chatgpt:
        'Ouvrez le message d’accompagnement dans le canevas pour retoucher chaque paragraphe.',
    },
    vigilance:
      'Le devis engage celle qui le signe : relisez tout, surtout le délai et les conditions. Les mentions obligatoires d’un devis et la façon de présenter les prix (avec ou sans taxe) se vérifient auprès de l’organisme compétent.',
    formateur: {
      resultat:
        'Un devis de 46 800 XPF (35 000 de main-d’œuvre, 8 800 de tissu, 1 800 de doublure, 1 200 de fournitures), avec un acompte de 14 040 XPF, et un message qui explique l’écart avec les 40 000 XPF et propose une option.',
      criteres: [
        'Le total de 46 800 XPF est juste et vérifié par l’apprenant.',
        'Le devis cite le délai tenable (confirmation avant le 20 novembre) et les trois essayages.',
        'L’écart avec le budget est expliqué avec une option.',
        'Aucune règle ni mention n’est inventée par l’IA.',
      ],
      pieges: [
        'Annoncer 40 000 XPF pour faire plaisir à la cliente alors que le calcul dit 46 800.',
        'Promettre une livraison le 5 décembre sans la confirmation avant le 20 novembre.',
        'Calculer l’acompte sur le seul prix du tissu au lieu du total.',
      ],
      competence: 'description',
      technique: 'decomposer',
    },
    motsCles: ['devis', 'sur mesure', 'couture', 'cliente', 'acompte'],
  },
  {
    id: 'artis-publications-mois',
    titre: 'Préparer un mois de publications pour les réseaux sociaux',
    metier: 'artisanat',
    niveau: 'intermediaire',
    famille: 'organiser',
    duree: 30,
    outils: ['gemini', 'chatgpt', 'claude', 'copilot'],
    outilConseille: 'gemini',
    situation:
      'Vous êtes fleuriste à Koné et vous gérez seule votre page Facebook. Décembre approche : commandes de fêtes, centres de table, bouquets de fin d’année. Vous publiez de temps en temps, quand vous avez cinq minutes. Vous voulez un calendrier de publications réaliste pour tout le mois.',
    objectif:
      'Construire un calendrier éditorial avec l’IA à partir de contraintes réelles, le corriger en plusieurs échanges, puis préparer les textes.',
    etapes: [
      'Donnez à l’IA votre activité et vos contraintes, et demandez un calendrier de quatre semaines sous forme de tableau : date, thème, texte, idée de photo.',
      'Vérifiez chaque ligne : les jours de fermeture, les dates de commande et les stocks sont-ils respectés ?',
      'Demandez de réduire à trois publications par semaine maximum et de varier les types (coulisses, produit, conseil, commande).',
      'Faites rédiger trois textes complets, et reformulez-les pour qu’ils sonnent comme vous.',
      'Exportez le tableau, puis planifiez les publications dans Facebook ou notez-les dans votre agenda.',
    ],
    prompt:
      'Tu es community manager pour une petite fleuriste à Koné, en Nouvelle-Calédonie. Propose un calendrier de publications Facebook pour le mois de [décembre, avec l’année], sous forme de tableau : date, type de publication, thème, texte de 40 mots maximum, idée de photo à prendre avec mon téléphone. Respecte toutes mes contraintes. Maximum trois publications par semaine, des textes simples et chaleureux, et aucune promesse que je ne puisse tenir. Si deux contraintes sont incompatibles, dis-le au lieu de choisir à ma place.\n\n<contraintes>\n[collez vos contraintes ici]\n</contraintes>',
    materiau: {
      titre: 'Notes de la fleuriste (fictives)',
      texte:
        'FLEURISTE À KONÉ : boutique ouverte du mardi au samedi, 8 h à 17 h, fermée dimanche et lundi\nclientèle : habitants de Koné et du Nord, entreprises et mairie pour les compositions\nproduits de décembre : bouquets de fête, centres de table, couronnes de porte, plantes en pot\ncommandes pour le 24 décembre à confirmer avant le 18 décembre\nfermeture exceptionnelle du 26 décembre au 4 janvier\narrivage de fleurs fraîches chaque jeudi, rupture possible en fin de semaine\nje n’aime pas faire des vidéos, mais je peux filmer 10 secondes de coulisses\nje ne fais pas de réductions\nje veux garder un ton simple, « on se connaît tous à Koné »\nje veux aussi parler des cartes cadeaux, sans prix inventé\nautre à voir : photos de mes bouquets sur un fond clair, devant la boutique',
    },
    variantes: {
      simple: 'Demander seulement le calendrier de la première semaine et trois textes.',
      poussee:
        'Demander ensuite un plan de réponse aux commentaires et messages de la page, puis un bilan à remplir chaque fin de semaine avec trois indicateurs simples.',
    },
    astuces: {
      gemini:
        'Demandez un tableau, puis exportez-le dans Google Sheets pour y cocher chaque publication faite.',
      chatgpt:
        'Demandez le tableau en format Excel, puis les textes un par un dans le canevas pour les retoucher.',
      copilot:
        'Transformez la réponse en Copilot Page (compte professionnel) pour partager le calendrier avec une associée.',
    },
    vigilance:
      'Ne publiez jamais une photo de client ou de mariage sans son accord. Vérifiez les jours de fermeture et les dates limites avant chaque publication : l’IA se trompe souvent de jour de la semaine.',
    formateur: {
      resultat:
        'Un calendrier de décembre à trois publications par semaine au plus, qui respecte les fermetures (lundis, dimanches, 26 décembre au 4 janvier), mentionne la date limite du 18 décembre et propose des textes dans un ton simple.',
      criteres: [
        'Aucune publication n’annonce une ouverture un lundi ou un dimanche.',
        'La date limite du 18 décembre et la fermeture finale sont rappelées.',
        'Le rythme de trois publications par semaine est respecté.',
        'Aucune réduction ni prix n’est inventé.',
      ],
      pieges: [
        'Programmer une publication d’appel à commander après le 18 décembre.',
        'Laisser l’IA inventer une promotion de Noël que la fleuriste refuse.',
        'Se tromper de jour de la semaine pour une date du mois.',
      ],
      competence: 'discernement',
      technique: 'iterer',
    },
    motsCles: ['réseaux sociaux', 'calendrier', 'fleuriste', 'Facebook', 'décembre'],
  },
  {
    id: 'artis-carnet-creneaux-creux',
    titre: 'Analyser le carnet de rendez-vous de trois mois pour repérer les créneaux creux',
    metier: 'artisanat',
    niveau: 'intermediaire',
    famille: 'analyser',
    duree: 30,
    outils: ['copilot', 'chatgpt', 'gemini', 'claude'],
    outilConseille: 'copilot',
    situation:
      'Vous tenez un salon de barbier à Dumbéa, avec un associé. Le samedi matin est toujours plein, le mardi après-midi reste souvent vide. Vous avez extrait de votre logiciel de rendez-vous un tableau par créneau, sans aucun nom de client, et vous cherchez comment remplir les creux.',
    objectif:
      'Faire calculer des taux de remplissage, repérer une donnée suspecte, puis demander des pistes d’action à confirmer.',
    etapes: [
      'Collez le tableau avec le prompt de départ et demandez le taux de remplissage de chaque jour et tranche, sur les trois mois.',
      'Vérifiez à la main un jour de la semaine : total des rendez-vous divisé par le total des créneaux.',
      'Demandez les lignes qui semblent anormales, sans les corriger.',
      'Demandez trois pistes pour remplir les creux et deux risques de chaque piste.',
      'Choisissez une action à tester pendant un mois et notez comment vous mesurerez le résultat.',
    ],
    prompt:
      'Tu es analyste pour un petit salon de barbier à Dumbéa. Voici le carnet de rendez-vous des trois derniers mois, regroupé par jour et tranche horaire (données fictives, sans nom de client).\n\n1. Calcule le taux de remplissage (rendez-vous pris divisés par créneaux ouverts) par jour et tranche, puis le total par jour de la semaine.\n2. Calcule le taux d’absences sans prévenir.\n3. Signale toute donnée qui te semble anormale, sans la corriger.\n4. Propose trois actions pour remplir les créneaux creux, avec un risque pour chacune.\nMontre tes calculs.\n\n<carnet>\n[collez le tableau ici]\n</carnet>',
    materiau: {
      titre: 'Carnet de rendez-vous de septembre à novembre (fictif)',
      texte:
        'Mois;Jour;Tranche;Créneaux ouverts;Rendez-vous pris;Absences sans prévenir;Recette (XPF)\nSeptembre;Mardi;Après-midi;16;6;1;35 000\nSeptembre;Jeudi;Matin;16;7;0;50 400\nSeptembre;Vendredi;Après-midi;16;12;1;77 000\nSeptembre;Samedi;Matin;16;16;2;98 000\nOctobre;Mardi;Après-midi;16;5;0;36 500\nOctobre;Jeudi;Matin;16;6;1;34 000\nOctobre;Vendredi;Après-midi;16;13;1;84 000\nOctobre;Samedi;Matin;16;16;1;108 500\nNovembre;Mardi;Après-midi;16;4;1;21 000\nNovembre;Jeudi;Matin;16;8;0;56 000\nNovembre;Vendredi;Après-midi;16;14;2;82 000\nNovembre;Samedi;Matin;16;21;1;112 000',
    },
    variantes: {
      simple: 'Demander seulement le taux de remplissage du mardi et du samedi.',
      poussee:
        'Demander un graphique du remplissage par jour, puis un plan d’action d’un mois avec un indicateur de réussite et un point d’étape.',
    },
    astuces: {
      copilot:
        'Mettez le tableau dans Excel avant de le confier à Copilot dans Excel (selon la licence) : il le lit beaucoup mieux.',
      chatgpt:
        'Déposez le tableau en CSV : l’analyse de données calcule en code, que vous pouvez afficher pour vérifier.',
      gemini:
        'Collez le tableau dans Google Sheets et utilisez « Demander à Gemini » pour expliquer une tendance.',
    },
    vigilance:
      'Même sans nom, un carnet réel peut révéler des clients : retirez toute note libre avant de coller. Les pistes de l’IA sont des hypothèses : testez-les petit avant de changer vos horaires.',
    formateur: {
      resultat:
        'Des taux de remplissage d’environ 31 % le mardi après-midi, 44 % le jeudi matin, 81 % le vendredi après-midi, une ligne anormale (21 rendez-vous pour 16 créneaux en novembre, samedi) et trois pistes à tester.',
      criteres: [
        'La ligne de novembre (samedi, 21 rendez-vous pour 16 créneaux) est repérée comme anormale.',
        'Au moins un taux a été recalculé à la main par l’apprenant.',
        'Les pistes sont présentées comme des hypothèses, avec un risque.',
        'Aucun nom de client n’est collé dans le prompt.',
      ],
      pieges: [
        'Calculer un samedi à plus de 100 % sans se poser de question.',
        'Conclure que le mardi est « inutile » sans regarder la recette par rendez-vous.',
        'Laisser l’IA proposer une promotion permanente qui baisse les prix de la semaine.',
      ],
      competence: 'discernement',
      technique: 'critique',
    },
    motsCles: ['carnet de rendez-vous', 'taux de remplissage', 'créneaux', 'barbier', 'analyse'],
  },
  {
    id: 'artis-assistant-messages-clients',
    titre: 'Créer un assistant qui prépare les réponses aux messages des clients',
    metier: 'artisanat',
    niveau: 'avance',
    famille: 'automatiser',
    duree: 60,
    outils: ['claude', 'chatgpt', 'copilot', 'gemini'],
    outilConseille: 'claude',
    situation:
      'Vous réparez des téléphones et des tablettes dans un petit atelier au Mont-Dore. Vous recevez chaque jour les mêmes messages : prix d’un écran, horaires, délai de réparation, si l’atelier est ouvert samedi. Vous répondez entre deux réparations, et vous en oubliez. Vous voulez un assistant qui prépare les réponses.',
    objectif:
      'Créer un assistant avec des instructions permanentes et une fiche de référence, le tester sur des cas réels et corriger ses réponses fausses.',
    etapes: [
      'Préparez une fiche de référence d’une page, sans donnée personnelle : tarifs, horaires, délais, ce que vous ne faites pas.',
      'Créez un Projet (Claude, ChatGPT), un Gem (Gemini) ou un agent (Copilot) et ajoutez la fiche.',
      'Rédigez les instructions avec le prompt de départ : rôle, ton, sources, conduite à tenir quand la réponse n’est pas dans la fiche.',
      'Testez l’assistant avec les cinq messages du matériau et notez les réponses fausses ou inventées.',
      'Corrigez les instructions, refaites le test et gardez la version qui ne promet rien de faux.',
    ],
    prompt:
      'Tu es l’assistant d’un petit atelier de réparation de téléphones au Mont-Dore. Tu prépares des projets de réponse aux messages des clients, que je relis avant envoi.\n\nRègles :\n- Réponds uniquement à partir de la fiche de référence de ce projet, et cite la ligne utilisée.\n- Si l’information n’est pas dans la fiche, dis-le clairement et propose une phrase du type « je reviens vers vous après avoir regardé votre appareil ». N’invente jamais un prix, un délai, une garantie ou une disponibilité.\n- Ne promets jamais qu’une réparation est possible avant diagnostic.\n- Ton : courtois, chaleureux, en vouvoiement, 80 mots au maximum.\n- Termine par « [Prénom de l’artisan], atelier [nom de l’atelier] ».',
    materiau: {
      titre: 'Fiche de référence et cinq messages de test (fictifs)',
      texte:
        'FICHE DE RÉFÉRENCE\nHoraires : lundi au vendredi 8 h-16 h 30, samedi 8 h-12 h, fermé dimanche\nÉcran Samsung gamme A : à partir de 14 500 XPF, pose en 1 h si la pièce est en stock\nÉcran iPhone : à partir de 22 000 XPF, pièce commandée si absente, délai 4 à 7 jours\nBatterie : à partir de 8 500 XPF, pose en 45 minutes\nDiagnostic : gratuit si la réparation est faite à l’atelier, 2 000 XPF sinon\nPas de réparation des cartes mères ni des appareils tombés à l’eau\nPaiement à la livraison : espèces ou carte\n\nMESSAGES DE TEST\n1. Bonjour, combien pour changer l’écran d’un Samsung A14 ? Je peux passer samedi ?\n2. Mon iPhone est tombé dans l’eau hier, vous pouvez le sauver à coup sûr ?\n3. Vous êtes ouverts le samedi après-midi ?\n4. Est-ce que la réparation est garantie, et combien de temps ?\n5. C’est trop cher, un autre atelier me propose 10 000 XPF. Vous pouvez faire le même prix ?',
    },
    variantes: {
      simple:
        'Se contenter d’un prompt réutilisable enregistré dans un document, sans créer d’assistant.',
      poussee:
        'Ajouter trois exemples de bonnes réponses dans les instructions, puis faire évaluer l’assistant par un proche sur dix nouveaux messages.',
    },
    astuces: {
      claude:
        'Dans un Projet, déposez la fiche dans les connaissances du projet et collez les règles dans ses instructions.',
      chatgpt:
        'Un Projet suffit pour vous seul ; un GPT (création payante) permet de le partager avec un associé.',
      gemini: 'Créez un Gem, collez les règles dans ses instructions et ajoutez la fiche.',
      copilot:
        'Avec « Créer un agent » (selon la licence), ajoutez la fiche comme source et collez les règles.',
    },
    vigilance:
      'N’ajoutez à l’assistant aucun message de client réel, avec nom ou numéro. Les réponses restent des projets relus : l’assistant ne voit pas l’appareil et ne doit jamais garantir une réparation.',
    formateur: {
      resultat:
        'Un assistant qui répond juste aux questions couvertes par la fiche (1 et 3), refuse de promettre pour l’appareil tombé à l’eau (2), renvoie la garantie (4) et le prix concurrent (5) à l’artisan.',
      criteres: [
        'Les instructions disent quoi faire quand l’information manque.',
        'La réponse 1 cite « à partir de 14 500 XPF » et précise que l’atelier ouvre le samedi jusqu’à midi.',
        'Les réponses 2, 4 et 5 ne contiennent aucune promesse, garantie ou prix inventé.',
        'L’apprenant a corrigé au moins une instruction après les tests.',
      ],
      pieges: [
        'Laisser l’assistant inventer une durée de garantie.',
        'Accepter une réponse qui propose le samedi après-midi alors que l’atelier ferme à midi.',
        'Aligner le prix sur la concurrence sans l’accord de l’artisan.',
      ],
      competence: 'delegation',
      technique: 'instructions',
    },
    motsCles: ['assistant', 'projet', 'gem', 'réparation', 'messages clients'],
  },
  {
    id: 'artis-relance-clients-consentement',
    titre: 'Relancer les clients qui ne sont pas revenus, en respectant leur consentement',
    metier: 'artisanat',
    niveau: 'avance',
    famille: 'rediger',
    duree: 45,
    outils: ['chatgpt', 'claude', 'copilot', 'gemini'],
    outilConseille: 'chatgpt',
    situation:
      'Vous êtes toiletteuse à Païta. En octobre, plusieurs clients n’ont pas pris de rendez-vous alors que leur animal est en retard de toilettage. Vous voulez leur envoyer des messages personnalisés, mais certains ont refusé d’être contactés, et vous n’avez pas toujours noté leur accord.',
    objectif:
      'Enchaîner tri des contacts, rédaction personnalisée et contrôle, en sachant qui ne doit pas être relancé.',
    etapes: [
      'Étape 1 : demandez à l’IA de trier le tableau : clients en retard (intervalle dépassé) et clients à ne pas contacter. Vérifiez trois lignes à la main.',
      'Étape 2 : demandez un message type de 40 mots maximum par canal (SMS ou e-mail), avec les champs entre crochets.',
      'Étape 3 : demandez un message personnalisé pour chaque client à relancer, en tenant compte de sa remarque.',
      'Étape 4 : demandez un message à part pour la cliente mécontente, qui s’excuse sans rien promettre.',
      'Étape 5 : demandez à l’IA de relire et de lister ce qu’elle a supposé, puis vérifiez le consentement de chaque personne avant tout envoi.',
    ],
    prompt:
      'Tu es assistante d’une toiletteuse à Païta. Nous préparons une campagne de relance en plusieurs étapes ; ne passe à l’étape suivante que lorsque je te le demande.\n\nÉtape 1 : à partir du tableau ci-dessous, aujourd’hui nous sommes le 12 novembre. Indique, pour chaque client, le nombre de semaines depuis le dernier toilettage, s’il est en retard par rapport à son intervalle habituel et s’il a donné son accord pour être contacté. Classe-les en trois groupes : « à relancer », « à ne pas contacter » et « pas encore en retard ». Montre tes calculs. En cas de doute sur le consentement, classe la personne dans « à ne pas contacter ».\n\n<clients>\n[collez le tableau ici]\n</clients>',
    materiau: {
      titre: 'Tableau de suivi des clients (fictif, sans nom ni numéro)',
      texte:
        'Réf;Animal;Dernier toilettage;Intervalle habituel (semaines);Consentement aux rappels;Canal;Remarque\nC01;Chien, poil long;12 juin;8;Oui;SMS;\nC02;Chat;3 mai;12;Oui;E-mail;préfère les rendez-vous le matin\nC03;Chien, poil court;15 septembre;10;Oui;SMS;\nC04;Chien, poil long;20 juillet;8;Non;;a demandé à ne plus être contactée\nC05;Chien, poil dur;15 avril;8;Oui;SMS;\nC06;Chien, poil long;10 octobre;8;Oui;SMS;\nC07;Chat;1er mars;12;Non enregistré;;\nC08;Chien, poil court;30 juin;10;Oui;E-mail;mécontente du dernier toilettage (coupe trop courte)\nC09;Chien, poil long;5 août;8;Oui;SMS;\nC10;Chien, poil bouclé;18 mai;6;Oui;SMS;vient avant les fêtes chaque année',
    },
    variantes: {
      simple:
        'S’arrêter à l’étape 2 : trier les clients et rédiger un seul message type par canal.',
      poussee:
        'Créer un Projet avec le message validé et la règle de consentement, pour refaire la campagne chaque trimestre, puis proposer un petit bilan à remplir après chaque envoi.',
    },
    astuces: {
      chatgpt:
        'Déposez le tableau en CSV : l’analyse de données applique le tri en code, que vous pouvez afficher pour vérifier.',
      claude:
        'Avec « Artefacts », demandez le tableau de tri et les messages côte à côte pour les relire plus vite.',
      copilot:
        'Mettez le tableau dans Excel avant de le confier à Copilot dans Excel (selon la licence).',
    },
    vigilance:
      'N’envoyez rien à une personne qui n’a pas donné son accord ou l’a retiré. Les règles sur le démarchage et les données personnelles en Nouvelle-Calédonie se vérifient auprès de la chambre de métiers et de l’artisanat ou d’un conseil juridique. Aucun nom ni numéro réel dans le prompt.',
    formateur: {
      resultat:
        'Un tri exact : à relancer C01, C02, C05, C08 (avec message d’excuse), C09, C10 ; à ne pas contacter C04 et C07 ; pas encore en retard C03 et C06. Puis des messages courts, personnalisés et sans promesse.',
      criteres: [
        'C04 (refus) et C07 (consentement non enregistré) ne sont pas relancés.',
        'C03 et C06 ne sont pas relancés, car leur intervalle n’est pas dépassé.',
        'Le message de C08 s’excuse et ne promet rien d’autre qu’une reprise à voir ensemble.',
        'L’apprenant a vérifié au moins trois lignes du tri.',
      ],
      pieges: [
        'Relancer C07 en supposant que « pas de refus » veut dire « accord ».',
        'Calculer les semaines à partir d’un mauvais mois.',
        'Offrir une remise ou un toilettage gratuit que la toiletteuse n’a pas décidé.',
      ],
      competence: 'diligence',
      technique: 'decomposer',
    },
    motsCles: ['relance', 'consentement', 'clients', 'toiletteuse', 'personnalisation'],
  },
  {
    id: 'artis-dossier-concours-artisans',
    titre: 'Préparer avec un carnet Gemini Notebook le dossier d’un concours d’artisans',
    metier: 'artisanat',
    niveau: 'avance',
    famille: 'synthetiser',
    duree: 45,
    outils: ['notebook', 'claude', 'chatgpt'],
    outilConseille: 'notebook',
    situation:
      'Vous êtes photographe à Lifou et vous voulez candidater aux Trophées de l’artisanat calédonien, un concours fictif doté de 500 000 XPF. Le règlement fait plusieurs pages et vous avez peu de temps. Vous voulez comprendre ce qui est demandé, constituer votre dossier et ne rien rater.',
    objectif:
      'Utiliser un carnet pour extraire les conditions, les pièces et les dates d’un règlement, vérifier chaque point par sa citation, puis préparer le dossier.',
    etapes: [
      'Créez un carnet et ajoutez comme sources le règlement et vos notes de présentation (aucune donnée de client).',
      'Demandez, dans la discussion, la liste des conditions pour candidater, des pièces à fournir et des dates ; ouvrez la citation de chaque ligne.',
      'Demandez si votre entreprise remplit les conditions et dans quelle catégorie elle concourt, en citant le passage.',
      'Demandez de signaler tout ce qui est contradictoire ou absent dans le règlement.',
      'Faites rédiger un plan du dossier et une check-list des pièces, puis rédigez vous-même la présentation de votre travail avec l’aide de Claude ou ChatGPT.',
    ],
    prompt:
      'À partir uniquement des sources de ce carnet, établis pour le concours :\n1. les conditions pour candidater, avec le passage cité ;\n2. la liste des pièces à fournir et des dates à respecter ;\n3. les critères de notation avec leur barème ;\n4. les contradictions ou informations manquantes dans le règlement.\nPuis, à partir de mes notes de présentation, indique si mon entreprise remplit les conditions, dans quelle catégorie elle devrait concourir et ce qui me manque pour le dossier. Si une information n’est pas dans les sources, écris « non précisé » au lieu de la supposer.',
    materiau: {
      titre: 'Règlement du concours et notes du photographe (fictifs)',
      texte:
        'TROPHÉES DE L’ARTISANAT CALÉDONIEN, ÉDITION 2027 (règlement fictif)\nArt. 1. Le concours récompense des entreprises artisanales de Nouvelle-Calédonie pour la qualité de leur savoir-faire. Dotation totale : 500 000 XPF.\nArt. 2. Catégories : A, entreprise de plus de trois ans ; B, entreprise de moins de trois ans.\nArt. 3. Les dossiers doivent être déposés au plus tard le 15 février.\nArt. 4. Pièces : formulaire de candidature, justificatif d’inscription de l’entreprise, présentation de 6 pages maximum, cinq photos d’œuvres ou de réalisations, une attestation sur l’honneur.\nArt. 5. Critères notés sur 20 : qualité du savoir-faire, 8 points ; originalité, 4 points ; ancrage local, 4 points ; viabilité économique, 4 points.\nArt. 6. Les photos doivent être des réalisations de l’artisan, avec l’accord des personnes visibles.\nArt. 7. Les résultats seront annoncés en avril. Les dossiers reçus après le 28 février ne sont pas examinés.\nArt. 8. Le jury est composé de professionnels et d’élus. Sa décision est sans appel.\n\nNOTES DU PHOTOGRAPHE\nentreprise créée il y a 18 mois à Lifou, photographe de mariages, de portraits et d’événements\nclientèle surtout locale, quelques commandes de l’étranger\ndeux salariés occasionnels\nj’ai fait un reportage sur la fête de l’igname, avec l’accord de la chefferie et des familles photographiées',
    },
    variantes: {
      simple: 'Demander seulement la liste des pièces et des dates avec leurs citations.',
      poussee:
        'Générer un rapport FAQ et un résumé audio pour un associé, puis préparer la présentation de 6 pages dans Claude ou ChatGPT, relue point par point avec les critères.',
    },
    astuces: {
      notebook:
        'Ajoutez le règlement comme source dans Sources, posez vos questions dans Discussion et ouvrez chaque citation numérotée ; générez ensuite un rapport FAQ.',
      claude:
        'Dans un Projet, collez le plan du dossier et vos notes : Claude rédige la présentation en s’appuyant sur eux.',
      chatgpt:
        'Rédigez la présentation dans le canevas, section par section, en suivant les critères notés.',
    },
    vigilance:
      'Le règlement fait foi : l’IA peut se tromper de date ou de catégorie. Le justificatif et l’attestation se demandent à l’organisme du concours. N’ajoutez au carnet aucune donnée de client, et aucune photo de personne sans leur accord.',
    formateur: {
      resultat:
        'Une liste exacte des conditions, des cinq pièces et des critères (8, 4, 4 et 4 points = 20), une catégorie B justifiée par 18 mois d’existence, et surtout le signalement de la contradiction entre le 15 février (art. 3) et le 28 février (art. 7).',
      criteres: [
        'La contradiction entre les articles 3 et 7 est signalée.',
        'La catégorie B est justifiée par la citation de l’article 2 et les notes (18 mois).',
        'Les cinq pièces et le barème (total 20) sont exacts.',
        'L’apprenant a ouvert au moins trois citations avant de les utiliser.',
      ],
      pieges: [
        'Retenir la date du 28 février sans voir qu’elle contredit l’article 3.',
        'Inscrire l’entreprise en catégorie A par défaut.',
        'Se fier à une réponse sans citation ou qui sort des sources.',
      ],
      competence: 'discernement',
      technique: 'sources',
    },
    motsCles: ['concours', 'dossier', 'règlement', 'Gemini Notebook', 'photographe'],
  },
  {
    id: 'artis-second-point-de-vente',
    titre: 'Étudier l’ouverture d’un second point de vente ou d’un service à domicile',
    metier: 'artisanat',
    niveau: 'avance',
    famille: 'veiller',
    duree: 60,
    outils: ['gemini', 'chatgpt', 'claude'],
    outilConseille: 'gemini',
    situation:
      'Vous êtes esthéticienne et vous travaillez seule dans votre institut à Nouméa. Vos rendez-vous sont pleins. Vous hésitez entre ouvrir un second local à Païta avec une employée et proposer un service à domicile en camionnette. Vous voulez comparer les deux avec des sources vérifiées et un petit prévisionnel.',
    objectif:
      'Mener une recherche sourcée, comparer deux options chiffrées, puis nommer les hypothèses et les décisions qui restent les vôtres.',
    etapes: [
      'Lancez une recherche approfondie sur les aides, formalités et contraintes des deux options en Nouvelle-Calédonie, avec le prompt de départ.',
      'Ouvrez au moins cinq sources citées : disent-elles bien ce que le rapport affirme ? Notez ce qui n’est pas vérifiable.',
      'Collez le prévisionnel du matériau et demandez de calculer le résultat mensuel et le délai de retour de chaque option, en montrant les calculs.',
      'Demandez la liste des hypothèses fragiles (nombre de clientes, prix, temps de trajet) et un test simple pour chacune.',
      'Rédigez vous-même la recommandation en une page, avec ce qu’il reste à vérifier auprès de la chambre de métiers et de l’artisanat.',
    ],
    prompt:
      'Tu es chargé de veille pour une esthéticienne indépendante à Nouméa, en Nouvelle-Calédonie. Je compare l’ouverture d’un second local à Païta avec une employée et la création d’un service à domicile en camionnette. Recherche les informations publiques utiles en Nouvelle-Calédonie : aides aux entreprises artisanales, formalités à vérifier, contraintes d’un service à domicile et d’une seconde adresse. N’affirme aucune règle précise : cite la source officielle et renvoie-moi vers elle. Pour chaque information, donne la source et sa date. Si tu ne trouves rien de fiable, dis-le.\n\nEnsuite, avec mon prévisionnel ci-dessous, calcule le résultat mensuel et le délai de retour de chaque option, en montrant les calculs, puis liste les hypothèses fragiles.\n\n<previsionnel>\n[collez le prévisionnel ici]\n</previsionnel>',
    materiau: {
      titre: 'Petit prévisionnel (fictif, en XPF)',
      texte:
        'Ligne;Local à Païta (par mois);Service à domicile (par mois)\nNombre de prestations;80;60\nPrix moyen d’une prestation;8 000;7 000\nLoyer et charges du local;150 000;0\nSalaire chargé d’une employée;260 000;0\nVéhicule (carburant, entretien, assurance);0;70 000\nProduits et consommables;80 000;55 000\nPublicité et réseaux sociaux;20 000;20 000\nInvestissement de départ (une fois);2 400 000;650 000\nRemarque : à domicile, la gérante réalise toutes les prestations elle-même ; 60 prestations représentent environ 90 heures de trajets et de soins par mois.',
    },
    variantes: {
      simple: 'Ne comparer que le prévisionnel des deux options, sans recherche web ni aides.',
      poussee:
        'Charger les rapports et le prévisionnel dans Gemini Notebook, générer une FAQ « questions à poser à la chambre de métiers », puis programmer une veille mensuelle sur les aides.',
    },
    astuces: {
      gemini:
        'Lancez Deep Research (limité en gratuit), puis exportez le rapport dans Google Docs pour l’annoter.',
      chatgpt:
        'Utilisez la Recherche approfondie (limitée en gratuit) puis l’Analyse de données pour refaire les calculs du prévisionnel.',
      claude:
        'La Recherche (payante) rend un rapport plus complet ; sans abonnement, la Recherche web suffit pour un premier essai.',
    },
    vigilance:
      'Aides, formalités, assurances et règles d’un service à domicile se vérifient auprès de la chambre de métiers et de l’artisanat et des services compétents : aucune règle ne se prend dans le rapport seul. Le prévisionnel est fictif et optimiste : ne décidez jamais sur ces seuls chiffres.',
    formateur: {
      resultat:
        'Un résultat mensuel de 130 000 XPF pour le local (retour en environ 18 mois) et de 275 000 XPF pour le domicile (retour en environ 2,4 mois), assorti d’hypothèses fragiles : le temps de la gérante n’est pas payé à domicile, et 80 prestations par mois restent à prouver.',
      criteres: [
        'Les résultats de 130 000 et 275 000 XPF sont exacts et vérifiés.',
        'L’apprenant a remarqué que le temps de la gérante n’est pas rémunéré à domicile.',
        'Chaque aide ou règle citée a une source officielle ouverte.',
        'La recommandation est rédigée par l’apprenant, avec ce qui reste à vérifier.',
      ],
      pieges: [
        'Conclure que le domicile est « bien meilleur » en oubliant les 90 heures de la gérante.',
        'Citer une aide de métropole comme si elle existait en Nouvelle-Calédonie.',
        'Reprendre les 80 prestations par mois du local comme un fait établi.',
      ],
      competence: 'discernement',
      technique: 'sources',
    },
    motsCles: [
      'second point de vente',
      'service à domicile',
      'prévisionnel',
      'esthéticienne',
      'veille',
    ],
  },
];
