# AGENTS.md : Atelier d'exercices IA (Skazy Formation)

Consignes pour les agents de code (Claude Code, Codex, Copilot…) et pour les humains qui travaillent sur ce dépôt.

## Le projet

Un outil pour **proposer des exercices concrets de pratique de l'IA** en formation, selon le **métier** et le **niveau** de l'apprenant.

- Le formateur prépare une séance (sélection d'exercices, impression en version apprenant, lien de partage) ; l'apprenant pratique en autonomie. Les notes formateur sont repliées dans chaque fiche ; un lien de séance partagé ouvre la vue apprenant, qui ne les affiche pas du tout.
- Outils couverts : Claude, ChatGPT, Microsoft Copilot, Google Gemini, Gemini Notebook (ex-NotebookLM) et Canva.
- Contexte : la Nouvelle-Calédonie (XPF, CAFAT, RUAMM, TGC, provinces, communes, nickel, tourisme). Toutes les données d'exercice sont **fictives**.
- **Aucune IA dans l'outil** : il ne fait aucun appel réseau. Il est livré en **un seul fichier HTML autonome** (`dist/index.html`), ouvrable hors ligne en double-cliquant, et publié sur GitHub Pages.
- La charte est celle du design system **Skazy Formation** de Claude Design : vert `#50967c`, texte `#4a4a4a`, police Georama, boutons en pilule, cartes avec une barre de couleur de 6 px en haut, badges en majuscules, pas d'emoji.

## Commandes

| Commande                                     | Rôle                                                                                  |
| -------------------------------------------- | ------------------------------------------------------------------------------------- |
| `npm install`                                | Installe les outils de développement **et les hooks git** (script `prepare`)          |
| `npx playwright install chromium`            | Installe le navigateur des tests e2e (une seule fois)                                 |
| `npm run dev`                                | Serveur local sur http://localhost:4174 (sources, sans build) + navigateur            |
| `npm run dev -- --sans-navigateur`           | Même chose sans ouvrir le navigateur (agents, tests manuels)                          |
| `npm run build`                              | Construit `dist/index.html`, le fichier unique autonome                               |
| `npm run icones`                             | Régénère `src/js/icones-donnees.js` après un ajout dans `src/js/icones.js`            |
| `npm run check`                              | Lint + format + validation HTML + tests unitaires (**avant chaque commit**)           |
| `npm run test:e2e`                           | Build, puis tests Playwright de bout en bout + accessibilité (**avant chaque push**)  |
| `node outils/apercu.js <gabarit> [métiers…]` | Affiche un gabarit décliné, pour relire l'accord du français                          |
| `node outils/captures.js`                    | Photographie `dist/index.html` (1280, 1920, 390 px, clair et sombre) dans `captures/` |

Les tests e2e portent sur le fichier construit, servi sur le port 4175 (`PORT_E2E` pour en changer).

Sous Windows, n'utilisez pas `|` dans un argument de `npx` (`-t "a|b"`) : `cmd` le prend pour un tube. Lancez plutôt un test par motif (`npx vitest run tests/unit/donnees.test.js -t "métier btp"`).

**Agents : arrêtez toujours le serveur que vous lancez en arrière-plan.**

## Structure

```
src/index.html                  La page (gabarit) ; en dev, charge styles/*.css et js/main.js en modules
src/styles/charte.css           Jetons du design system (clair et sombre) : seul fichier où une couleur est écrite
src/styles/base.css             Mise en page, bandeau, boutons, champs, dialogues
src/styles/composants.css       Profil, filtres, cartes, fiche, séance, repères
src/styles/impression.css       Fiches imprimées (version apprenant), toujours en clair : seule autre feuille avec des couleurs
src/js/main.js                  Montage de la page
src/js/etat.js                  État : profil, filtres, séance, vue ; synchronisé avec l'URL et le stockage
src/js/filtres.js               Pur : filtrer, trier, compter, tirer au hasard
src/js/gabarits.js              Pur : décliner un gabarit avec le vocabulaire d'un métier
src/js/seance.js                Pur : durée, résumé d’un exercice, lien de partage, paramètres d’adresse
src/js/schema.js                Pur : schéma d'un exercice, contrôle de typographie
src/js/ui.js · stockage.js      el(), remplir(), typographier() ; seul accès à localStorage (préfixe skazy-exos:)
src/js/icones.js                Liste des icônes Font Awesome utilisées ; icone('nom')
src/js/vues/                    profil, resultats, carte, fiche, seance, reperes
src/donnees/referentiels.js     Niveaux, familles de tâches, durées, compétences 4D, techniques de prompt
src/donnees/outils.js           Les 6 outils, leurs fonctions (noms vérifiés) et leurs astuces par famille
src/donnees/vocabulaire.js      Les clés du vocabulaire que chaque métier fournit aux gabarits
src/donnees/metiers.js          Liste des métiers ; chacun a son fichier dans metiers/
src/donnees/metiers/<slug>.js   Vocabulaire du métier + ses exercices écrits à la main
src/donnees/gabarits/<famille>.js  Gabarits : exercices transversaux déclinés pour chaque métier
src/donnees/catalogue.js        Le catalogue complet (exercices écrits + gabarits déclinés)
src/donnees/reperes.js          Méthode et sources officielles (page Repères)
outils/                         dev.js, construire.js (build), generer-icones.js, apercu.js, captures.js
tests/unit/                     Vitest : logique pure et contrôle de toutes les données
tests/e2e/                      Playwright : parcours, accessibilité (axe), fichier ouvert en file://
```

## Écrire des exercices

### Où

- **Un exercice propre à un métier** va dans `src/donnees/metiers/<slug>.js`, tableau `exercices`. Exemple de référence : `metiers/immobilier.js`.
- **Un exercice valable pour tous les métiers, qui change seulement de vocabulaire**, est un **gabarit** dans `src/donnees/gabarits/<famille>.js`. Exemple de référence : `gabarits/corriger.js`. Il est décliné automatiquement pour chaque métier et en version neutre (« tous »).
- **Un exercice transversal qui ne dépend pas du métier** (comparer deux outils, sa bibliothèque de prompts…) va dans `metiers/tous.js`.

### Schéma

Le schéma complet est en tête de `src/js/schema.js`. Les slugs valides sont dans `referentiels.js` (niveaux, familles, durées, compétences, techniques), `outils.js` (outils) et `metiers.js` (métiers). Un gabarit a le même schéma, sans `metier`, avec en plus `metiers` (liste blanche) ou `exclure` (liste noire) s'il ne convient pas à tous les métiers.

### Gabarits et vocabulaire

- `{cle}` insère une expression du vocabulaire, `{cle.forme}` un nom accordé : `un`, `le`, `des`, `les`, `du`, `au`, `aux`, `ce`, `ces`, `de`, `dep` (de + pluriel), `son`, `votre`, `vos`, `s` (singulier nu), `p` (pluriel nu). Une majuscule à la clé met une majuscule au résultat : `{Client.le}`.
- Les clés et la phrase type où chacune s'emploie sont dans `src/donnees/vocabulaire.js`. **Respectez ces phrases types** : une expression prévue après « concernant » ne doit pas être mise après « de » (« de le… »).
- Un nom du vocabulaire : `{ g: 'm' | 'f', s: 'singulier', p: 'pluriel' }`, plus `elision: false` devant un h aspiré.
- **Relisez les déclinaisons** avec `node outils/apercu.js <id-du-gabarit>` : chaque phrase doit être correcte pour **tous** les métiers. Si une phrase ne fonctionne pas partout, reformulez-la ou restreignez le gabarit (`metiers`, `exclure`).

### Règles de contenu

- **Concret et réaliste** : une vraie situation de travail en Nouvelle-Calédonie (Nouméa, Dumbéa, Païta, Koné, Lifou…), des montants en XPF, des noms d'organismes locaux quand c'est utile (CAFAT, DSF, ISEE, provinces, CCI). **Toutes les personnes, entreprises, adresses et sommes sont fictives.** N'affirmez pas de règle juridique, fiscale ou médicale précise (taux, délais légaux) : l'exercice demande justement de les vérifier.
- **Le matériau fait l'exercice** : quand c'est possible, fournissez le texte à travailler (e-mail avec fautes, notes de réunion en vrac, tableau CSV de 8 à 15 lignes, réclamation…). Sinon, une étape demande à l'IA de générer des données fictives.
- **Les niveaux** :
  - débutant : une demande en une fois, avec contexte, tâche et format ; on relit le résultat ;
  - intermédiaire : plusieurs échanges, des exemples, des documents joints, la comparaison de versions ;
  - avancé : enchaîner les étapes, assistant sur mesure (Projet, GPT, Gem, agent, compétence), tâche planifiée, corpus Gemini Notebook, données volumineuses.
- **Les outils** : ne citez que les fonctions listées dans `src/donnees/outils.js`, avec leur nom exact. Une fonction payante est signalée comme telle dans l'astuce. `outils` ne liste que les outils avec lesquels l'exercice se fait vraiment (Canva pour les visuels, Gemini Notebook pour un corpus de documents…).
- **La pédagogie** suit les sources officielles :
  - cadre 4D d'Anthropic (Délégation, Description, Discernement, Diligence) ;
  - bonnes pratiques de prompt d'Anthropic et d'OpenAI : contexte et « pourquoi », rôle, format attendu, exemples, découpage, itération, sources citées, autoriser « je ne sais pas ».
  - Chaque exercice a des critères de réussite vérifiables et des pièges réels (chiffres modifiés, informations inventées, données personnelles collées).
- **La vigilance** : rappeler de ne pas coller de données personnelles réelles, et de vérifier chiffres, dates et sources.
- **Ton** :
  - consignes au **vouvoiement** ;
  - prompts écrits comme l'apprenant les taperait, en **tutoyant l'IA** (« Tu es… », « Rédige… »), avec des `[crochets]` pour ce qu'il doit compléter, et des balises (`<email>…</email>`) pour séparer les données des consignes ;
  - titres qui commencent par un verbe à l'infinitif.
- **Typographie** : apostrophe ’ (jamais '), guillemets « » (jamais "), points de suspension …, aucun emoji, aucune accolade restante. Une espace ordinaire avant ? ! ; : suffit (l'affichage la rend insécable). `\n` pour les retours à la ligne dans le matériau et les prompts.
- **Contrôle** : `npx vitest run tests/unit/donnees.test.js -t "métier <slug>"` ou `-t "gabarits <famille>"` doit passer.

## Conventions de code

Elles sont reprises du projet voisin `jeu-formation`, même auteur et même charte :

- **En français** : noms de fonctions et de variables, commentaires, textes affichés, messages de commit.
- **Aucune dépendance à l'exécution, aucun CDN, aucune requête réseau.** La police est intégrée, les icônes Font Awesome Free sont un sprite SVG généré (`npm run icones`). esbuild ne sert qu'à construire le fichier unique.
- **La logique est séparée de l'affichage.** Les fonctions pures (`filtres.js`, `gabarits.js`, `seance.js`, `schema.js`) sont testées unitairement ; les vues ne font que construire la page et réagir aux clics.
- **Sécurité** : tout texte passe par `el()` ou `textContent`, jamais par `innerHTML` (sauf le sprite d'icônes, généré au build).
- **Stockage** : toujours par `stockage.js` (clés préfixées `skazy-exos:`) ; une erreur de stockage ne fait jamais planter la page.
- **Accessibilité** :
  - contraste WCAG AA dans les deux thèmes : pas de texte blanc sur `#50967c` (3,5:1), on utilise `--primaire-fonce` ;
  - tout se fait au clavier, les annonces passent par `annoncer()` ;
  - `prefers-reduced-motion` est respecté ;
  - aucun défilement horizontal à 390 px de large.
- **Pas d'emoji** dans l'interface : icônes Font Awesome via `icone('nom')`, décoratives (`aria-hidden`).
- **Format** : Prettier (guillemets simples, 100 colonnes). Lint : ESLint `recommended` + `eqeqeq`, `prefer-const`.

## Procédure avant commit et push

1. `npm run check` passe sans erreur (en cas d'échec de format : `npm run format`).
2. `npm run test:e2e` passe entièrement. Vérifiez le code de sortie de la commande elle-même.
3. Si l'interface a changé : `npm run dev`, vérification à l'œil en 1280×720, 1920×1080 et 390 px, en clair et en sombre, puis ouverture de `dist/index.html` en double-cliquant.
4. Commit au format Conventional Commits, en français : `feat(fiche): ajoute la copie du matériau`, `fix(filtres): …`, `docs:`, `test:`, `chore:`.
5. Push sur `main` : [.github/workflows/publier.yml](.github/workflows/publier.yml) relance les tests, construit `dist/index.html` et le publie sur GitHub Pages. Un push sur `main` est une mise en ligne.

Interdits : `--no-verify`, supprimer ou assouplir un test pour le faire passer.
