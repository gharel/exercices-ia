# Atelier d’exercices IA · Skazy Formation

Près de 300 exercices concrets pour **pratiquer l’IA dans son métier**, choisis selon le métier, le niveau et les outils de l’apprenant. Chaque exercice est prêt à faire :

- une mise en situation en Nouvelle-Calédonie ;
- une consigne en étapes ;
- un prompt de départ à copier, et souvent un matériau fictif (e-mail, notes, tableau) ;
- des astuces pour chaque outil, deux variantes (plus simple, plus poussée) et un rappel de vigilance ;
- des notes formateur : résultat attendu, critères de réussite, pièges, compétence et technique travaillées.

**En ligne :** https://gharel.github.io/exercices-ia/ (après la première publication).

## Pour qui, et comment

- **Le formateur** choisit un profil, ouvre les fiches, compose sa **séance** (bouton +), puis l’**imprime** (une fiche par exercice, version apprenant, sans les notes formateur) ou **partage un lien** à ses apprenants.
- **L’apprenant** ouvre le lien reçu (sans les notes formateur), ou choisit lui-même son métier et son niveau. Dans chaque fiche, les **notes formateur** sont repliées : on peut projeter une fiche sans dévoiler le résultat attendu.
- **Outils couverts** : Claude, ChatGPT, Microsoft Copilot, Google Gemini, Gemini Notebook (ex-NotebookLM) et Canva.
- **Métiers** : 18 métiers (dont restauration, bars et cafés ; alimentation et métiers de bouche), plus « Tous métiers » et « Autre métier » (le métier tapé est glissé dans la situation et le prompt).
- **Niveaux** : débutant (je découvre), intermédiaire (je pratique), avancé (j’automatise).

La démarche suit les formations officielles :

- le cadre 4D d’Anthropic (AI Fluency : Délégation, Description, Discernement, Diligence) ;
- les bonnes pratiques de prompt d’Anthropic et d’OpenAI Academy ;
- les guides d’usage responsable au travail.

La fenêtre **Repères** de l’outil les résume, avec les liens vers les sources.

## Hors ligne

L’outil est **un seul fichier HTML** (`dist/index.html`), sans aucune requête réseau : il s’ouvre en double-cliquant, même sans Internet en salle de formation. Pour le récupérer : `npm run build`, ou « Enregistrer la page » (Ctrl+S) depuis le site publié.

## Développer

```bash
npm install
npx playwright install chromium
npm run dev          # sources sur http://localhost:4174
npm run build        # dist/index.html
npm run check        # lint, format, HTML, tests unitaires
npm run test:e2e     # build + tests de bout en bout et accessibilité
```

Les conventions, la structure et la façon d’**ajouter des exercices** sont dans [AGENTS.md](AGENTS.md).

## Publication

Chaque push sur `main` relance les tests puis publie `dist/index.html` sur GitHub Pages ([publier.yml](.github/workflows/publier.yml)). Dans les réglages du dépôt, _Pages › Source_ doit être sur **GitHub Actions**.

## Crédits

Charte graphique Skazy Formation (design system Claude Design), police Georama (SIL Open Font License), icônes Font Awesome Free (CC BY 4.0). Situations, personnes, entreprises et chiffres des exercices sont fictifs.

Chaque outil Skazy Formation a sa couleur de l’arc-en-ciel, dans cet ordre : Quiz rouge, Mini-jeux orange, Vigie jaune, Atelier d’exercices IA vert, Comprendre l'IA bleu, Prompthèque violet. Le favicon de l’atelier (une haltère blanche sur un dégradé vert) sert aussi de pastille dans le bandeau, commun aux outils Skazy Formation : à gauche, la pastille et le nom de l’outil, qui ramènent à son accueil ; au milieu, Repères, thème et Ma séance ; à droite, « Les outils » (la roue des outils, vers [la page de tous les outils](https://gharel.github.io/home/)), un filet, puis le logo Skazy Formation, vers [formation.skazy.nc](https://formation.skazy.nc) dans un nouvel onglet. Sur téléphone, le nom et le texte « Les outils » s’effacent ; la pastille et la roue restent. Un bouton rond « Remonter en haut » apparaît quand on a défilé la page. Titre d’onglet : « Atelier d’exercices IA · Skazy Formation » (« Page · Atelier d’exercices IA · Skazy Formation » pour une sous-page).
