/**
 * Les clés du vocabulaire que chaque métier fournit aux gabarits, avec la phrase où elles
 * sont employées. Un gabarit n'utilise que ces clés ; tests/unit/donnees.test.js vérifie que
 * chaque métier les fournit toutes.
 *
 * NOMS : { g: 'm' | 'f', s: 'singulier', p: 'pluriel' } (+ elision: false pour un h aspiré).
 * Les formes (un, le, du, au, ce, son…) sont calculées par js/gabarits.js.
 * EXPRESSIONS : une chaîne déjà accordée, insérée telle quelle.
 */

export const CLES_NOMS = {
  structure: 'Où l’on travaille. « Vous travaillez dans {structure.un} à Nouméa. »',
  client: 'Le public servi au quotidien. « {Client.un} vous écrit… », « répondre {client.au}… »',
  partenaire:
    'Un interlocuteur professionnel extérieur (fournisseur, prestataire, confrère). « un e-mail {partenaire.au} »',
  documentCourant:
    'Un document produit très souvent. « Vous devez rédiger {documentCourant.un} », « un modèle {documentCourant.de} »',
  documentLong:
    'Un document long de référence, de plusieurs pages. « Résumez {documentLong.le} en une page. »',
  reunion: 'Une réunion typique du métier. « Préparez l’ordre du jour {reunion.du}. »',
  offre:
    'Un produit ou service à promouvoir, précis et local. « Créez une publication pour {offre.le}. »',
  poste: 'Un poste à recruter. « Rédigez l’offre d’emploi pour {poste.un} (H/F). »',
  evenement: 'Un événement à organiser ou annoncer. « Préparez {evenement.le}. »',
  visuel: 'Un support visuel courant. « Créez {visuel.un} dans Canva. »',
};

export const CLES_EXPRESSIONS = {
  domaine:
    'Le secteur, après « dans ». « Vous travaillez dans {domaine}. » → « dans l’immobilier »',
  motifReclamation:
    'Le motif d’une réclamation fréquente, après « concernant ». « Un client vous écrit concernant {motifReclamation}. »',
  donnees:
    'Un jeu de données typique, avec son article. « Voici {donnees}. » → « le relevé des loyers encaissés sur 12 mois »',
  colonnes:
    'Les colonnes de ce tableau, séparées par des points-virgules, avec les unités. « Logement;Quartier;Loyer (XPF)… »',
  indicateur: 'Un indicateur suivi, avec son article. « Calculez {indicateur}. »',
  veille:
    'Le sujet d’une veille utile, avec son article. « Mettez en place une veille sur {veille}. »',
  sourcesVeille:
    'Les sources à surveiller, avec leur article, sans adresse web inventée. « Surveillez {sourcesVeille}. »',
  jargon: 'Des notions techniques à expliquer simplement. « Expliquez {jargon} à un client. »',
  procedure:
    'Une procédure interne, après « pour ». « Rédigez la procédure pour {procedure}. » → « l’accueil d’un nouveau locataire »',
  situationTendue:
    'Une situation difficile à jouer, avec son article. « L’IA joue {situationTendue}. » → « un propriétaire mécontent… »',
  donneesSensibles:
    'Les données personnelles ou confidentielles manipulées, avec leur article. « Repérez {donneesSensibles}. »',
  corpus:
    'Un ensemble de documents à exploiter, avec son article. « Chargez {corpus} dans NotebookLM. »',
  publicCible:
    'Le public d’une communication, avec son article, après deux-points. « Public visé : {publicCible}. »',
  etranger:
    'Un interlocuteur non francophone, avec son article. « Traduisez pour {etranger}. » → « un expatrié australien »',
  themeFormation:
    'Un sujet à transmettre à un nouveau collègue, avec son article. « un quiz sur {themeFormation} »',
  tacheRepetitive:
    'Une tâche répétitive à automatiser, avec son article. « Automatisez {tacheRepetitive}. »',
  planning: 'Ce qu’il faut planifier, avec son article. « Organisez {planning}. »',
  comparaison:
    'Deux éléments à comparer, avec leur article. « Comparez {comparaison}. » → « deux devis de travaux »',
};

export const CLES = [...Object.keys(CLES_NOMS), ...Object.keys(CLES_EXPRESSIONS)];
