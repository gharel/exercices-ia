/**
 * « Ma séance » : la liste ordonnée des exercices choisis par le formateur, sa durée, son
 * impression (version apprenant) et le lien à partager aux apprenants.
 */
import { el, remplir, copier, pluriel, annoncer } from '../ui.js';
import { icone } from '../icones.js';
import { badgeFamille, bouton, boutonIcone, toast } from './commun.js';
import { dureeTotale, formaterDuree, lienDePartage } from '../seance.js';

export function monterSeance(dialogue, magasin, { exercice, ouvrirFiche, imprimer }) {
  let confirmerVider = false;

  function exercicesDeLaSeance() {
    return magasin.get().seance.ids.map(exercice).filter(Boolean);
  }

  function changerSeance(changement) {
    magasin.modifier({ seance: { ...magasin.get().seance, ...changement } }, ['seance']);
  }

  function deplacer(id, pas) {
    const ids = [...magasin.get().seance.ids];
    const i = ids.indexOf(id);
    const j = i + pas;
    if (i < 0 || j < 0 || j >= ids.length) return;
    [ids[i], ids[j]] = [ids[j], ids[i]];
    changerSeance({ ids });
    annoncer(`Exercice déplacé en position ${j + 1}`);
    dialogue.querySelector(`[data-id="${CSS.escape(id)}"] [data-pas="${pas}"]`)?.focus();
  }

  function ligne(e, i, total) {
    return el(
      'li',
      { class: 'seance__ligne', 'data-id': e.id },
      el('span', { class: 'seance__numero', 'aria-hidden': 'true' }, String(i + 1)),
      el(
        'div',
        { class: 'seance__info' },
        el(
          'button',
          {
            type: 'button',
            class: 'seance__titre',
            onclick: () => ouvrirFiche(e.id, exercicesDeLaSeance()),
          },
          e.titre,
        ),
        el(
          'span',
          { class: 'seance__meta' },
          badgeFamille(e.famille, { taille: 'sm' }),
          formaterDuree(e.duree),
        ),
      ),
      el(
        'div',
        { class: 'seance__boutons' },
        boutonIcone('arrow-up', `Monter : ${e.titre}`, {
          disabled: i === 0,
          'data-pas': '-1',
          onclick: () => deplacer(e.id, -1),
        }),
        boutonIcone('arrow-down', `Descendre : ${e.titre}`, {
          disabled: i === total - 1,
          'data-pas': '1',
          onclick: () => deplacer(e.id, 1),
        }),
        boutonIcone('trash-can', `Retirer : ${e.titre}`, {
          onclick: () => {
            changerSeance({ ids: magasin.get().seance.ids.filter((x) => x !== e.id) });
            toast('Retiré de votre séance');
            dialogue.querySelector('.seance__liste button, #titre-seance-champ')?.focus();
          },
        }),
      ),
    );
  }

  const champTitre = el('input', {
    id: 'titre-seance-champ',
    class: 'champ',
    type: 'text',
    maxlength: '120',
    autocomplete: 'off',
  });
  champTitre.addEventListener('change', () =>
    changerSeance({ titre: champTitre.value.trim() || magasin.get().seance.titre }),
  );

  function afficher() {
    const { seance } = magasin.get();
    const exercices = exercicesDeLaSeance();
    if (document.activeElement !== champTitre) champTitre.value = seance.titre;

    // Une seule sortie papier, toujours en version apprenant (sans les notes formateur).
    const sorties = el(
      'div',
      { class: 'seance__exports' },
      el(
        'div',
        { class: 'seance__sortie' },
        el(
          'p',
          {},
          el('strong', {}, 'Imprimer la séance. '),
          'Une fiche par exercice, sans les notes formateur.',
        ),
        bouton('Imprimer', { icone: 'print', onclick: () => imprimer(exercices) }),
      ),
      el(
        'div',
        { class: 'seance__sortie seance__partage' },
        el(
          'p',
          {},
          el('strong', {}, 'Lien pour vos apprenants. '),
          'Il ouvre ces exercices, sans les notes formateur.',
        ),
        bouton('Copier le lien de partage', {
          icone: 'link',
          variante: 'primaire',
          onclick: async () => {
            const lien = lienDePartage(globalThis.location.href, {
              ids: seance.ids,
              titre: seance.titre,
            });
            toast((await copier(lien)) ? 'Lien de partage copié' : 'Copie impossible');
          },
        }),
      ),
    );

    const vider = bouton(confirmerVider ? 'Confirmer : vider la séance' : 'Vider la séance', {
      icone: 'trash-can',
      variante: 'discret',
      classe: confirmerVider ? 'bouton--danger' : '',
      onclick: () => {
        if (!confirmerVider) {
          confirmerVider = true;
          afficher();
          dialogue.querySelector('.seance__vider .bouton')?.focus();
          return;
        }
        confirmerVider = false;
        changerSeance({ ids: [] });
        toast('Séance vidée');
        champTitre.focus();
      },
    });

    remplir(
      dialogue,
      el(
        'div',
        { class: 'seance' },
        el(
          'header',
          { class: 'panneau__entete' },
          el(
            'div',
            {},
            el('h2', { id: 'titre-seance' }, 'Ma séance'),
            el(
              'p',
              { class: 'seance__total' },
              exercices.length
                ? `${pluriel(exercices.length, 'exercice')} · ${formaterDuree(dureeTotale(exercices))}`
                : 'Aucun exercice pour l’instant',
            ),
          ),
          boutonIcone('xmark', 'Fermer ma séance', { onclick: () => dialogue.close() }),
        ),
        el(
          'div',
          { class: 'panneau__corps' },
          el('label', { for: 'titre-seance-champ', class: 'etiquette' }, 'Titre de la séance'),
          champTitre,
          exercices.length
            ? el(
                'ol',
                { class: 'seance__liste' },
                exercices.map((e, i) => ligne(e, i, exercices.length)),
              )
            : el(
                'div',
                { class: 'vide vide--compact' },
                icone('bookmark', { classe: 'vide__icone' }),
                el('h3', {}, 'Votre séance est vide'),
                el(
                  'p',
                  {},
                  'Ajoutez des exercices avec le bouton + des cartes, ou « Ajouter à ma séance » dans une fiche.',
                ),
              ),
          exercices.length ? sorties : null,
          exercices.length ? el('div', { class: 'seance__vider' }, vider) : null,
        ),
      ),
    );
  }

  dialogue.addEventListener('click', (evenement) => {
    if (evenement.target === dialogue) dialogue.close();
  });
  dialogue.addEventListener('close', () => {
    confirmerVider = false;
    document.getElementById('bouton-seance')?.focus();
  });

  magasin.ecouter((_etat, quoi) => {
    if (dialogue.open && quoi.has('seance')) afficher();
  });

  return {
    ouvrir() {
      confirmerVider = false;
      afficher();
      dialogue.showModal();
      dialogue.querySelector('#titre-seance')?.setAttribute('tabindex', '-1');
      dialogue.querySelector('#titre-seance')?.focus();
    },
  };
}
