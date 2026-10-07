/**
 * La fiche d'exercice, dans un <dialog> : situation, mission, prompt de départ, matériau,
 * astuces par outil, variantes, vigilance, et les notes formateur (masquées en vue apprenant).
 * Flèches gauche/droite : exercice précédent/suivant de la liste affichée.
 */
import { el, remplir, copier, estChampDeSaisie, focaliser } from '../ui.js';
import { icone } from '../icones.js';
import {
  badgeFamille,
  bouton,
  boutonIcone,
  competence,
  famille,
  metier,
  nomNiveau,
  outil,
  technique,
  texteAvecCrochets,
  toast,
} from './commun.js';
import { formaterDuree } from '../seance.js';

function section(nomIcone, titre, ...contenu) {
  return el(
    'section',
    { class: 'fiche__section' },
    el('h3', { class: 'fiche__soustitre' }, icone(nomIcone), titre),
    ...contenu,
  );
}

function boutonCopier(libelle, texte, message) {
  return bouton(libelle, {
    icone: 'copy',
    variante: 'discret',
    onclick: async () =>
      toast((await copier(texte)) ? message : 'Copie impossible : sélectionnez le texte'),
  });
}

/** Onglets d'outils (motif « tabs » de l'ARIA APG : flèches pour changer d'onglet). */
function ongletsOutils(e, outilsDuProfil) {
  const communs = e.outils.filter((o) => outilsDuProfil.includes(o));
  const liste = communs.length ? communs : e.outils;
  const parDefaut = liste.includes(e.outilConseille) ? e.outilConseille : liste[0];
  const onglets = el('div', { class: 'onglets', role: 'tablist', 'aria-label': 'Outils' });
  const panneaux = [];
  const boutons = liste.map((slug) => {
    const o = outil(slug);
    const actif = slug === parDefaut;
    const idOnglet = `onglet-${slug}`;
    const idPanneau = `panneau-${slug}`;
    const astuce = e.astuces?.[slug] ?? o.astuces[e.famille];
    panneaux.push(
      el(
        'div',
        {
          class: 'onglets__panneau',
          role: 'tabpanel',
          id: idPanneau,
          'aria-labelledby': idOnglet,
          hidden: !actif,
          tabindex: '0',
        },
        el('p', { class: 'astuce' }, icone('lightbulb'), astuce),
        o.note ? el('p', { class: 'fiche__note' }, o.note) : null,
        el(
          'a',
          { class: 'lien-externe', href: o.lien, target: '_blank', rel: 'noopener' },
          `Ouvrir ${o.nom}`,
          icone('arrow-up-right-from-square'),
          el('span', { class: 'hors-ecran' }, ' (nouvel onglet)'),
        ),
      ),
    );
    return el(
      'button',
      {
        type: 'button',
        role: 'tab',
        id: idOnglet,
        class: 'onglets__onglet',
        'aria-selected': String(actif),
        'aria-controls': idPanneau,
        tabindex: actif ? '0' : '-1',
      },
      o.nom,
      slug === e.outilConseille ? el('span', { class: 'onglets__conseil' }, 'conseillé') : null,
    );
  });

  function choisir(index) {
    boutons.forEach((b, i) => {
      b.setAttribute('aria-selected', String(i === index));
      b.tabIndex = i === index ? 0 : -1;
      panneaux[i].hidden = i !== index;
    });
    boutons[index].focus();
  }
  boutons.forEach((b, i) => {
    b.addEventListener('click', () => choisir(i));
    b.addEventListener('keydown', (evenement) => {
      const pas = { ArrowRight: 1, ArrowLeft: -1, Home: -i, End: boutons.length - 1 - i }[
        evenement.key
      ];
      if (pas === undefined) return;
      evenement.preventDefault();
      evenement.stopPropagation();
      choisir((i + pas + boutons.length) % boutons.length);
    });
  });
  onglets.append(...boutons);
  return el('div', { class: 'onglets-outils' }, onglets, ...panneaux);
}

export function monterFiche(dialogue, magasin, { exercice, ouvrirReperes, imprimer }) {
  let liste = [];
  let index = -1;
  let courant = null;
  // Les notes formateur restent ouvertes d'une fiche à l'autre si on les a ouvertes.
  let notesOuvertes = false;

  /**
   * Notes formateur, repliées par défaut : on peut projeter une fiche devant le groupe sans
   * dévoiler le résultat attendu. Absentes d'une séance partagée aux apprenants.
   */
  function notesFormateur(e) {
    const f = e.formateur;
    const c = competence(f.competence);
    const t = technique(f.technique);
    const details = el(
      'details',
      { class: 'fiche__formateur', open: notesOuvertes },
      el(
        'summary',
        { class: 'fiche__formateur-titre' },
        icone('chalkboard-user'),
        el('span', { class: 'fiche__formateur-nom' }, 'Notes formateur'),
        el('span', { class: 'fiche__formateur-aide' }, 'Résultat attendu, critères, pièges'),
        icone('chevron-down', { classe: 'fiche__formateur-chevron' }),
      ),
      el(
        'div',
        { class: 'fiche__formateur-corps' },
        el('p', {}, el('strong', {}, 'Résultat attendu. '), f.resultat),
        el('h4', {}, 'Critères de réussite'),
        el(
          'ul',
          { class: 'liste-criteres' },
          f.criteres.map((x) => el('li', {}, icone('check'), x)),
        ),
        el('h4', {}, 'Pièges fréquents'),
        el(
          'ul',
          { class: 'liste-pieges' },
          f.pieges.map((x) => el('li', {}, icone('triangle-exclamation'), x)),
        ),
        el(
          'div',
          { class: 'fiche__reperes' },
          el(
            'button',
            {
              type: 'button',
              class: 'repere',
              onclick: () => ouvrirReperes(`competence-${c.slug}`),
            },
            el('span', { class: 'repere__etiquette' }, 'Compétence 4D'),
            el('span', { class: 'repere__nom' }, c.nom),
            el('span', { class: 'repere__texte' }, c.question),
          ),
          el(
            'button',
            {
              type: 'button',
              class: 'repere',
              onclick: () => ouvrirReperes(`technique-${t.slug}`),
            },
            el('span', { class: 'repere__etiquette' }, 'Technique de prompt'),
            el('span', { class: 'repere__nom' }, t.nom),
            el('span', { class: 'repere__texte' }, t.description),
          ),
        ),
      ),
    );
    details.addEventListener('toggle', () => {
      notesOuvertes = details.open;
    });
    return details;
  }

  function construire(e) {
    const etat = magasin.get();
    const f = famille(e.famille);
    const dansSeance = etat.seance.ids.includes(e.id);
    const boutonSeance = bouton(dansSeance ? 'Dans ma séance' : 'Ajouter à ma séance', {
      icone: dansSeance ? 'check' : 'plus',
      variante: dansSeance ? 'secondaire' : 'primaire',
      'aria-pressed': String(dansSeance),
      onclick: () => {
        const dedans = magasin.basculerDansSeance(e.id);
        toast(dedans ? 'Ajouté à votre séance' : 'Retiré de votre séance');
      },
    });

    const precedent = boutonIcone('arrow-left', 'Exercice précédent', { disabled: index <= 0 });
    const suivant = boutonIcone('arrow-right', 'Exercice suivant', {
      disabled: index < 0 || index >= liste.length - 1,
    });
    precedent.addEventListener('click', () => aller(-1));
    suivant.addEventListener('click', () => aller(1));

    const badges = el(
      'div',
      { class: 'fiche__badges' },
      badgeFamille(e.famille),
      el('span', { class: 'puce' }, icone('stairs'), nomNiveau(e.niveau)),
      el('span', { class: 'puce' }, icone('clock'), formaterDuree(e.duree)),
      e.metier !== 'tous'
        ? el('span', { class: 'puce' }, icone(metier(e.metier).icone), metier(e.metier).nom)
        : null,
    );

    return el(
      'article',
      { class: 'fiche', 'data-couleur': f.couleur },
      el(
        'header',
        { class: 'fiche__entete' },
        el('div', { class: 'fiche__barre', 'aria-hidden': 'true' }),
        el(
          'div',
          { class: 'fiche__haut' },
          badges,
          el(
            'div',
            { class: 'fiche__nav' },
            precedent,
            liste.length && index >= 0
              ? el('span', { class: 'fiche__position' }, `${index + 1} / ${liste.length}`)
              : null,
            suivant,
            boutonIcone('xmark', 'Fermer la fiche', {
              class: 'bouton-icone fiche__fermer',
              onclick: () => dialogue.close(),
            }),
          ),
        ),
        el('h2', { id: 'titre-fiche', class: 'fiche__titre' }, e.titre),
        el(
          'div',
          { class: 'fiche__actions' },
          boutonSeance,
          bouton('Imprimer', {
            icone: 'print',
            variante: 'discret',
            onclick: () => imprimer([e]),
          }),
          bouton('Copier le lien', {
            icone: 'link',
            variante: 'discret',
            onclick: async () => {
              const url = new URL(globalThis.location.href);
              url.hash = e.id;
              toast(
                (await copier(url.toString())) ? 'Lien de l’exercice copié' : 'Copie impossible',
              );
            },
          }),
        ),
      ),
      el(
        'div',
        { class: 'fiche__contenu' },
        section(
          'comments',
          'Mise en situation',
          el('p', { class: 'fiche__situation' }, e.situation),
          el(
            'p',
            { class: 'fiche__objectif' },
            icone('bullseye'),
            el('span', {}, el('strong', {}, 'Objectif : '), e.objectif),
          ),
        ),
        section(
          'list-check',
          'Votre mission',
          el(
            'ol',
            { class: 'etapes' },
            e.etapes.map((etape) => el('li', {}, etape)),
          ),
        ),
        el(
          'section',
          { class: 'fiche__section bloc-prompt' },
          el(
            'div',
            { class: 'bloc-prompt__entete' },
            el('h3', { class: 'fiche__soustitre' }, icone('keyboard'), 'Prompt de départ'),
            boutonCopier('Copier le prompt', e.prompt, 'Prompt copié'),
          ),
          el('pre', { class: 'bloc-prompt__texte' }, texteAvecCrochets(e.prompt)),
          /\[[^\]]+\]/.test(e.prompt)
            ? el(
                'p',
                { class: 'fiche__note' },
                'Complétez les passages surlignés entre crochets avant d’envoyer.',
              )
            : null,
        ),
        e.materiau
          ? el(
              'section',
              { class: 'fiche__section bloc-materiau' },
              el(
                'div',
                { class: 'bloc-prompt__entete' },
                el('h3', { class: 'fiche__soustitre' }, icone('file-lines'), e.materiau.titre),
                boutonCopier('Copier', e.materiau.texte, 'Matériau copié'),
              ),
              el(
                'pre',
                { class: 'bloc-materiau__texte', tabindex: '0', 'aria-label': e.materiau.titre },
                e.materiau.texte,
              ),
              el('p', { class: 'fiche__note' }, 'Données fictives, créées pour l’exercice.'),
            )
          : null,
        section('toolbox', 'Avec votre outil', ongletsOutils(e, etat.profil.outils)),
        section(
          'stairs',
          'Adapter l’exercice',
          el(
            'div',
            { class: 'variantes' },
            el(
              'div',
              { class: 'variante' },
              el('h4', {}, 'Plus simple'),
              el('p', {}, e.variantes.simple),
            ),
            el(
              'div',
              { class: 'variante' },
              el('h4', {}, 'Pour aller plus loin'),
              el('p', {}, e.variantes.poussee),
            ),
          ),
        ),
        e.vigilance
          ? el(
              'aside',
              { class: 'vigilance', 'aria-label': 'Vigilance' },
              icone('shield-halved'),
              el('p', {}, el('strong', {}, 'Vigilance. '), e.vigilance),
            )
          : null,
        etat.vue === 'formateur' ? notesFormateur(e) : null,
      ),
    );
  }

  function afficher() {
    remplir(dialogue, construire(courant));
  }

  function aller(pas) {
    const cible = index + pas;
    if (cible < 0 || cible >= liste.length) return;
    ouvrir(liste[cible].id, liste);
    const bouton = dialogue.querySelector(
      pas < 0 ? '[aria-label="Exercice précédent"]' : '[aria-label="Exercice suivant"]',
    );
    if (bouton && !bouton.disabled) bouton.focus();
    else focaliser(dialogue.querySelector('.fiche__titre'));
  }

  function ouvrir(id, nouvelleListe = liste) {
    const e = exercice(id);
    if (!e) return false;
    liste = nouvelleListe;
    index = liste.findIndex((x) => x.id === id);
    courant = e;
    afficher();
    dialogue.scrollTop = 0;
    if (!dialogue.open) dialogue.showModal();
    focaliser(dialogue.querySelector('.fiche__titre'));
    try {
      globalThis.history.replaceState(
        null,
        '',
        `${globalThis.location.pathname}${globalThis.location.search}#${id}`,
      );
    } catch {
      // adresse non modifiable
    }
    return true;
  }

  dialogue.addEventListener('close', () => {
    courant = null;
    try {
      globalThis.history.replaceState(
        null,
        '',
        `${globalThis.location.pathname}${globalThis.location.search}`,
      );
    } catch {
      // adresse non modifiable
    }
    // Rend le focus à la carte de l'exercice, si elle est affichée.
    const id = liste[index]?.id;
    document.querySelector(`.carte[data-id="${CSS.escape(id ?? '')}"] .carte__lien`)?.focus();
  });

  // Clic sur le fond (hors du panneau) : fermeture.
  dialogue.addEventListener('click', (evenement) => {
    if (evenement.target === dialogue) dialogue.close();
  });

  dialogue.addEventListener('keydown', (evenement) => {
    if (
      estChampDeSaisie(evenement.target) ||
      evenement.altKey ||
      evenement.ctrlKey ||
      evenement.metaKey
    )
      return;
    if (evenement.target.closest?.('[role="tablist"]')) return;
    if (evenement.key === 'ArrowLeft') aller(-1);
    else if (evenement.key === 'ArrowRight') aller(1);
  });

  magasin.ecouter((_etat, quoi) => {
    if (courant && dialogue.open && (quoi.has('vue') || quoi.has('seance'))) {
      const focus = document.activeElement;
      const garderFocus = dialogue.contains(focus) && focus.closest('.fiche__actions');
      afficher();
      if (garderFocus) dialogue.querySelector('.fiche__actions .bouton')?.focus();
    }
  });

  return { ouvrir };
}
