# LN-IA Challenge 100 jours Formation

Dossier source pour construire l'offre de formation Challenge 100 jours de l'Atelier LN-IA.

## Objectif

Structurer une offre claire, professionnelle et publiable pour accompagner un groupe limité de candidats dans la pratique des Skills IA, de l'orchestration et de la production de livrables utiles.

## Positionnement de départ

- Nom : Challenge 100 jours - Formation à l'Atelier LN-IA
- Démarrage : lundi 1er juin 2026
- Capacité : maximum 20 candidats
- Priorité : Tiriens
- Canal d'intérêt : groupe WhatsApp
- Lien WhatsApp : https://chat.whatsapp.com/LVnXAMyFOqt94f77e1VHjK

## Structure

- `01-offre/` : promesse, cible, positionnement, prix, objections.
- `02-programme/` : calendrier, modules, progression, livrables.
- `03-page-publique/` : page publique de l'offre, dont `page-0-offre.md` pour une première version partageable.
- `04-assets/` : images, logos, QR codes, visuels.
- `05-prompts/` : prompts utiles pour produire et améliorer l'offre.
- `06-inscriptions/` : suivi des candidats, messages, scripts de contact.

## Suite logique

1. Clarifier la promesse principale.
2. Définir les 20 profils prioritaires.
3. Structurer le programme en phases.
4. Rédiger la page publique.
5. Préparer le formulaire ou le canal d'inscription.
6. Publier une version simple, puis améliorer.

## Page web publique GitHub Pages

La page d'annonce prête à partager se trouve à la racine du dépôt :

- `index.html`
- `assets/css/style.css`
- `assets/js/app.js`
- `assets/img/hero-placeholder.jpg`
- `data/avantages.json`

Ce choix permet d'utiliser directement la racine du dépôt comme dossier d'atterrissage GitHub Pages.

### Objectif de la page

Présenter le Challenge Formation 100 jours — Atelier LN-IA, dont le début officiel est fixé au 1 juin 2026. La page sert aussi de base de présentation pour le webinaire 4 du mardi 26 mai 2026.

Formule courte intégrée :

> 100 jours pour apprendre à produire avec l’IA, organiser vos projets et construire votre autonomie numérique.

Lien WhatsApp intégré au QR code :

`https://chat.whatsapp.com/LVnXAMyFOqt94f77e1VHjK`

### Utilisation locale

Ouvrir simplement `index.html` dans un navigateur.

Option de prévisualisation avec un serveur local :

```powershell
python -m http.server 8000
```

Puis ouvrir `http://localhost:8000`.

### Déploiement GitHub Pages

1. Pousser le dépôt sur GitHub.
2. Aller dans `Settings` puis `Pages`.
3. Dans `Build and deployment`, choisir `Deploy from a branch`.
4. Sélectionner la branche principale.
5. Choisir le dossier `/ (root)`.
6. Enregistrer.

### Éléments à personnaliser avant publication

- Le lien du bouton principal si un formulaire ou un groupe d'inscription doit être ajouté.
- L'image `assets/img/hero-placeholder.jpg` si une version finale de l'affiche est validée.
- Les textes de positionnement si le webinaire précise une offre ou une modalité d'inscription.
