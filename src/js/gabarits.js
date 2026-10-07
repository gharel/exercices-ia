/**
 * Gabarits d'exercices : un exercice transversal écrit une fois, décliné pour chaque métier
 * avec son vocabulaire. Fonctions pures, sans accès à la page.
 *
 * Dans un gabarit, {cle} insère une expression du vocabulaire (« {veille} »), et {cle.forme}
 * insère un nom accordé avec son article (« {client.un} » → « un locataire », « {client.le} »
 * → « le locataire », « {client.du} » → « du locataire »). Une clé qui commence par une
 * majuscule met le résultat en majuscule initiale (« {Client.le} » → « Le locataire »).
 */

const VOYELLE = /^[aeiouyàâäéèêëîïôöùûüœh]/i;

/** Un nom du vocabulaire : { g: 'm' | 'f', s: 'singulier', p: 'pluriel', elision?: bool }. */
export function estNom(entree) {
  return (
    entree !== null &&
    typeof entree === 'object' &&
    (entree.g === 'm' || entree.g === 'f') &&
    typeof entree.s === 'string' &&
    typeof entree.p === 'string'
  );
}

/** Toutes les formes d'un nom : article indéfini, défini, contracté, démonstratif… */
export function formes(nom) {
  const { g, s, p } = nom;
  const elide = nom.elision ?? VOYELLE.test(s);
  const elideP = VOYELLE.test(p);
  const f = g === 'f';
  return {
    s,
    p,
    un: `${f ? 'une' : 'un'} ${s}`,
    le: elide ? `l’${s}` : `${f ? 'la' : 'le'} ${s}`,
    des: `des ${p}`,
    les: `les ${p}`,
    du: elide ? `de l’${s}` : f ? `de la ${s}` : `du ${s}`,
    au: elide ? `à l’${s}` : f ? `à la ${s}` : `au ${s}`,
    aux: `aux ${p}`,
    ce: f ? `cette ${s}` : elide ? `cet ${s}` : `ce ${s}`,
    ces: `ces ${p}`,
    de: elide ? `d’${s}` : `de ${s}`,
    dep: elideP ? `d’${p}` : `de ${p}`,
    son: f && !elide ? `sa ${s}` : `son ${s}`,
    votre: `votre ${s}`,
    vos: `vos ${p}`,
  };
}

export const FORMES = Object.keys(formes({ g: 'm', s: 'x', p: 'x' }));

const MOTIF = /\{([A-Za-zÀ-ÿ]+)(?:\.([a-z]+))?\}/g;

function majuscule(texte) {
  return texte.charAt(0).toLocaleUpperCase('fr') + texte.slice(1);
}

/**
 * Remplace les {cle} et {cle.forme} d'un texte. Une clé inconnue ou une forme impossible
 * lève une erreur : un gabarit ne doit jamais laisser d'accolade dans la page.
 */
export function remplacer(texte, vocabulaire) {
  return texte.replace(MOTIF, (_tout, cleBrute, forme) => {
    const cle = cleBrute.charAt(0).toLowerCase() + cleBrute.slice(1);
    const enMajuscule = cleBrute !== cle;
    const entree = vocabulaire[cle];
    if (entree === undefined) throw new Error(`Clé de vocabulaire inconnue : {${cleBrute}}`);
    let resultat;
    if (forme) {
      if (!estNom(entree)) throw new Error(`{${cleBrute}.${forme}} : « ${cle} » n’est pas un nom`);
      resultat = formes(entree)[forme];
      if (resultat === undefined) throw new Error(`Forme inconnue : {${cleBrute}.${forme}}`);
    } else {
      if (typeof entree !== 'string') {
        throw new Error(`{${cleBrute}} : « ${cle} » est un nom, il faut une forme ({${cle}.un}…)`);
      }
      resultat = entree;
    }
    return enMajuscule ? majuscule(resultat) : resultat;
  });
}

/** Applique remplacer() à toutes les chaînes d'une valeur (objet, tableau, texte). */
export function remplacerPartout(valeur, vocabulaire) {
  if (typeof valeur === 'string') return remplacer(valeur, vocabulaire);
  if (Array.isArray(valeur)) return valeur.map((v) => remplacerPartout(v, vocabulaire));
  if (valeur && typeof valeur === 'object') {
    return Object.fromEntries(
      Object.entries(valeur).map(([cle, v]) => [cle, remplacerPartout(v, vocabulaire)]),
    );
  }
  return valeur;
}

/** Le gabarit s'applique-t-il à ce métier ? (`metiers` : liste blanche, `exclure` : liste noire) */
export function concerne(gabarit, slugMetier) {
  if (slugMetier === 'tous') return true;
  if (gabarit.metiers && !gabarit.metiers.includes(slugMetier)) return false;
  return !gabarit.exclure?.includes(slugMetier);
}

const CHAMPS_GABARIT = new Set(['metiers', 'exclure']);

/**
 * Décline un gabarit pour un métier : id « <gabarit>--<métier> », textes accordés,
 * `gabarit` garde l'id d'origine (pour regrouper les déclinaisons).
 */
export function declinerGabarit(gabarit, metier) {
  const base = Object.fromEntries(
    Object.entries(gabarit).filter(([cle]) => !CHAMPS_GABARIT.has(cle)),
  );
  const { id, ...textes } = base;
  return {
    ...remplacerPartout(textes, metier.vocabulaire),
    id: `${id}--${metier.slug}`,
    gabarit: id,
    metier: metier.slug,
  };
}

/** Toutes les déclinaisons : chaque gabarit pour chaque métier concerné (dont « tous »). */
export function declinerTout(gabarits, metiers) {
  const exercices = [];
  for (const gabarit of gabarits) {
    for (const metier of metiers) {
      if (concerne(gabarit, metier.slug)) exercices.push(declinerGabarit(gabarit, metier));
    }
  }
  return exercices;
}
