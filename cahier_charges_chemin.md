# Cahier de Charges: Trace ton chemin

## 📌 Informations du Projet

*Nom du projet:* L'aventure de Stickamn 

*Nom de l'équipe:* Paladin

*Membres:* Érick Ouellette, Michaël Un Dupré, Keven Malric

- Érick Ouellette - Chef de projet + Architecture
- Michaël Un Dupré - Données + Systèmes
- Keven Malric - Responsable du Design + Animations


*Date de début:* [8 octobre 2025]  
*Date de livraison finale:* [10 décembre 2025]  
*Version du document:* 1.0


## 🎯 1. Présentation du Projet

### 1.1 Concept général

!!! tip "Phase de création"
    (Ce paragraphe "Conseil" devra être retiré du Cahier de charge final)
    Pour développer votre concept général, vous devez faire une session de remue-méninges (*brainstorm*) en équipe via *Figjam* avec une carte conceptuelle (*mindmap*) ou encore par la création collaborative et spontanée via des *post-it* individuels et groupés. Il est possible d'utiliser d'autres procédés de création. Vous devrez partager votre processus de création (*brainstorm*) avec votre enseignante. Si c'est virtuel, partagez le lien. Si c'est papier ou sur tableau blanc, veuillez partager une ou des photographie(s) de votre processus.


Décrivez en 2-3 paragraphes le concept de votre histoire interactive:

- Quel est le genre narratif? (fantastique, sci-fi, mystère, aventure, etc.)
- Quelle est l'histoire principale?
- Qui est le personnage principal?
- Quel est le mécanisme de choix? (décisions morales, énigmes, actions, etc.)

*Exemple (interdit de prendre l'exemple comme histoire pour votre projet):*
> "Les Échos du Temps" est une histoire interactive de science-fiction où le joueur incarne un scientifique qui découvre une machine à voyager dans le temps. Chaque décision modifie le cours de l'histoire et peut créer des paradoxes temporels. L'utilisateur doit faire des choix difficiles qui influencent non seulement sa propre destinée, mais aussi celle de l'humanité. Le système de branches permet 6 fins différentes selon les décisions prises.

> L'aventure de Stickman est une histoire interactive fantastique où le joueur incarne John Stickman, un homme pitoyable qui doit sauver son frère des griffes du méchant nécromancien pour stopper son plan machiavélique. Stickman va devoir prendre son courage à deux mains et pénétrer le manoir de Velkar l'impitoyable. 

Le joueur doit faire des choix de tactiques durant des combats et résoudre des énigmes qui vont influencer le progrès de Stickman que ce soit vers sa montée à la gloire où sa descente au purgatoire.  

### 1.2 Public cible

- *Âge: 8-18 ans
- *Profil:* fans de fantaisie/comédie/drame
- *Niveau technique:* Utilisateurs grand public
- *Temps de lecture estimé:* 5-12 minutes

### 1.3 Objectifs du projet

- [ ] Créer une expérience narrative immersive et émotionnelle
- [ ] Développer un système de choix avec conséquences réelles
- [ ] Implémenter un système de sauvegarde de progression
- [ ] Démontrer la maîtrise de Vue.js, GSAP et Pinia
- [ ] Créer une interface accessible et responsive



## 📖 2. Architecture Narrative

### 2.1 Synopsis détaillé

Racontez votre histoire en 1-2 paragraphes (sans spoiler les fins):

Jean-pierre Stickman se fait kidnapper par des bandits du maléfique Velkar. John Stickman doit arrêter le sacrifice de son frère pour stopper l'invoquation d'un démon primordial qui menace l'univers dans son entièreté. Il entre dans le manoir de Velkar et fait face à des multitudes de monstres qu'il doit battre pour progresser et devenir assez puissant pour sauver son frère.

### 2.2 Arbre narratif

Dessinez ou décrivez l'arbre de décisions de votre histoire:

<img width="3704" height="4456" alt="image" src="https://github.com/user-attachments/assets/c9beefa8-4e6a-45a5-81e5-a09c3a4ec972" />



*Structure globale:*

- *Acte 1:* Introduction (1-2 chapitres linéaires)
- *Acte 2:* Développement avec choix (4-6 chapitres avec branches)
- *Acte 3:* Climax et résolution (2-3 fins différentes)

*Exemple de structure:*

```
Chapitre 1 (Intro) → Linéaire
    ↓
Chapitre 2 (Premier choix)
    ↓                    ↓
Branche A            Branche B
    ↓                    ↓
Chapitre 3A          Chapitre 3B
    ↓                    ↓
Choix majeur         Choix majeur
    ↓       ↓           ↓       ↓
Fin 1    Fin 2        Fin 3    Fin 4
```

### 2.3 Liste des chapitres/scènes

Minimum 8 niveaux (chapitres/scènes). Listez-les avec leurs informations:

<small>(les noms des chapitres énoncés ici ne sont que des exemples)</small>

| # | Nom du chapitre | Type | Description courte | Choix proposés | Conséquences |
|---|----------------|------|-------------------|----------------|--------------|
| 1 | [L'arrivée] | Linéaire | Introduction du personnage et du contexte | Aucun (intro) | N/A |
| 2 | [le premier pas] | Choix | arriver devant un intersection dans le dongeon | 2 choix: "aller à droite" ou "aller à gauche" | Branche A ou B |
| 3A | [rarw goblin] | Choix | des goblin dort dans la pièce| choix 1: passer les goblin choix 2: voler des goblins choix 3: chargé! | Branche A ou B ou C |
| 3B | [Le coffre] | Choix | un coffre se retrouve dans cette pièce | choix 1: passer a l'autre pièce choix 2: ouvrir le coffre | Branche C ou D |
| 4A | [La surprise]| Linéaire | tu te fait téléporter dans une autre chambre| Aucun | t'arrive dans le chapitre 5A|
| 4B | [Chasse au Goblin]| Linéaire | tu combat les goblin après avoir voler leur butin | auncun | t'arrive en retard pour sauvé jean-Pierre acces à une fin spécial|
| 4C | [L'apprentis mage]| Linéaire | tu te retrouve dans une pièce avec des sort magique| choix du sort | tu peut apprendre une sort pour aider à combattre le necromance|
| 4D | [aveugler par l'or]| | | | |
| 5A | [L'apprentis combatant]| choix |tu te retrouvent dans une pièce avec des armes  | choix d'arme/armure| tu prend des arme pour aider dans le combat contre le nécromance|
| 5B | [le combat]| linéaire |tu combat le nécromance  | si Jean-pierre n'est pas sauvé il y aurra un autre méchant a combattre| fin Héroique/ fin anti Héroique si Jean-Pierre est pas sauvé|
| 5D | [le zéro]| linéaire| ta perdu | aucun | perdu|
| 7 | | | | | |
| 8 | | | | | |

### 2.4 Fins possibles

Listez toutes les fins de votre histoire (minimum 3, idéal 4-6):

<small>(les noms des fins énoncées ici ne sont que des exemples)</small>

| # | Nom de la fin | Condition pour l'atteindre | Type (bonne/mauvaise/neutre) |
|---|--------------|---------------------------|------------------------------|
| 1 | [Fin Héroïque] | éliminer le necromancer et sauvé Jean-Pierre | Bonne |
| 2 | [Fin Héro a Zéro] | perdu contre une mimic | Mauvaise |
| 3 | [Fin anti Héroïque] | éliminer le necromancer et le Demon sans réussir de savé Jean-Pierre | Neutre|
| 4 | | | |
| 5 | | | |
| 6 | | | |

### 2.5 Personnages principaux

| Nom | Rôle | Description | Apparaît dans |
|-----|------|-------------|---------------|
| [John Stickman] | Protagoniste | Guerrier pathétique | Tous les chapitres |
| [Saour Do] | Allié | Marchand d'armes nucléaire | Menu du marchand|
| [Velkram] | Antagoniste | Sorcier maléfique | Certaines fins |
| | | | |
| | | | |

### 2.6 Système de conséquences

Comment les choix influencent l'histoire?

*Mécanisme choisi:*

- [ ] *Système de karma/moralité* (points bons/mauvais)
- [ ] *Stats du personnage* (courage, intelligence, empathie)
- [x] *Inventaire d'objets* (collecte d'items)
- [ ] *Relations avec personnages* (affinités)
- [ ] *Flags de choix* (choix X débloque scène Y)
- [ ] *Combinaison de plusieurs systèmes*

*Exemple de tracking:*
```javascript
playerState: {
  karma: 0,  // -10 à +10
  inventory: ['clé', 'journal'],
  relationships: {
    marcus: 5,  // 0 à 10
    chronos: -3
  },
  flags: {
    hasActivatedMachine: true,
    knowsTheSecret: false
  }
}
```


## 🎨 3. Design et Identité Visuelle

### 3.1 Moodboard

Insérez ici 3-5 images d'inspiration (ou liens):

- Image 1: Ambiance générale: <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhTLct-PHjAMMgXYBItTS_MOY9eGHmyDikaqVDkvD-vzXKRWhODn0BhE-uO7Fcr4I0rV_PFO091zmtZh-SjVfJuL2wgU3e_lSODNcx280lHx-Y5CdOWa4Bi5fUD3rcpv5DotnMvCSK53jM/s1600/Delver-Wallpaper1440x900.jpg" width="100%">
- Image 2: Style visuel des personnages: <img src="https://images.launchbox-app.com/7f3af12a-fa7b-42e7-aec1-846cd7145910.png">
- [Image 3: Palette de couleurs](https://coolors.co/768948-ff3800-cdcacc-333138-6e0d25)
- [Image 4: Typographie inspirante](https://fonts.google.com/specimen/MedievalSharp)

### 3.2 Palette de couleurs

*Couleurs par ambiance/chapitre:*

- *Chapitres introduction:* [#CDCACC] - Tons neutres
- *Chapitres tension:* [#333138] - Tons sombres/dramatiques
- *Chapitres espoir:* [#768948] - Tons clairs/lumineux
- *Chapitres danger:* [#FF3800] - Rouge/orange

*Couleurs système:*

- Primaire (actions principales): [#XXXXXX]
- Secondaire (choix): [#XXXXXX]
- Succès: [#10B981]
- Danger: [#6E0D25]
- Neutre: [#CDCACC]

### 3.3 Typographie

- *Titres narratifs:* [MedievalSharp](https://fonts.google.com/specimen/MedievalSharp)
- *Texte de narration:* [Baldur](https://www.1001freefonts.com/fr/baldur.font)
- *Dialogues:* [Golden Swing](https://www.1001freefonts.com/fr/golden-swing.font)
- *Boutons de choix:* [Darker](https://www.1001freefonts.com/fr/darker-font.font)

### 3.4 Style visuel

Choisissez un ou plusieurs styles:

- [ ] Cinématique (film noir, thriller)
- [x] Illustratif (dessins, concept art)
- [x] Minimaliste (focus sur le texte)
- [ ] Immersif (photos, ambiances réalistes)
- [ ] Stylisé (flat design, géométrique)

### 3.5 Éléments visuels par chapitre

| Chapitre | Image de fond | Effets visuels | Sons/musique |
|----------|---------------|----------------|--------------|
| 1 | [Description ou lien] | Fade in progressif | Musique douce, intro |
| 2 | | | |
| 3 | | | |
| ... | | | |


## 💻 4. Spécifications Techniques

### 4.1 Stack technologique

*Frontend obligatoire:*

- ✅ Vue.js 3 (Composition API ☐ / Options API ☐)
- ✅ Vite
- ✅ Vue Router
- ✅ Pinia (state management)
- ✅ CSS
- ✅ GSAP + ScrollTrigger (optionnel selon style)

*Librairies additionnelles envisagées:*

- [ ] VueUse (composables utilitaires)

### 4.2 Architecture des composants

Listez vos composants Vue principaux:

*Composants de layout:*

- `AppHeader.vue` - Navigation et menu
- `SaveSlotManager.vue` - Gestion des sauvegardes
- `ProgressBar.vue` - Barre de progression dans l'histoire

*Composants de contenu:*

- `ChapterView.vue` - Vue d'un chapitre/scène
- `NarrativeText.vue` - Affichage du texte narratif
- `DialogueBox.vue` - Boîte de dialogue pour personnages
- `ChoiceButton.vue` - Bouton de choix interactif
- `ChoicePanel.vue` - Panel contenant tous les choix

*Composants système:*

- `InventoryDisplay.vue` - Affichage de l'inventaire
- `HealthPanel.vue` - Affichage de la vie du joueur
- `EndingScreen.vue` - Écran de fin avec récapitulatif
- `Modal.vue` - Fenêtre modale (sauvegarde, options)

*Composants UI:*

- `ButtonPrimary.vue` - Bouton principal
- `LoadingSpinner.vue` - Indicateur de chargement
- `AudioController.vue` - Contrôle de la musique/sons

### 4.3 Routes (Vue Router)

| Route | Composant | Description | Params |
|-------|-----------|-------------|--------|
| `/` | `HomeView.vue` | Menu principal | - |
| `/nouvelle-partie` | `CharacterSetupView.vue` | Config initiale (nom, etc.) | - |
| `/chapitre/:id` | `ChapterView.vue` | Vue d'un chapitre | id du chapitre |
| `/fin/:endingId` | `EndingView.vue` | Écran de fin | id de la fin |
| `/sauvegardes` | `SavesView.vue` | Gestion des sauvegardes | - |
| `/credits` | `CreditsView.vue` | Crédits | - |

### 4.4 Gestion de l'état (Pinia)

*Stores prévus:*

1. *`useStoryStore`*
   - State: `currentChapterId`, `visitedChapters`, `storyData`, `availableChoices`
   - Actions: `loadChapter()`, `makeChoice()`, `goToChapter()`
   - Getters: `currentChapter`, `isChapterUnlocked()`

2. *`usePlayerStore`*
   - State: `playerName`, `karma`, `stats`, `inventory`, `flags`, `relationships`
   - Actions: `addToInventory()`, `updateStat()`, `setFlag()`, `updateRelationship()`
   - Getters: `hasItem()`, `getRelationship()`, `canAccessEnding()`

3. *`useSaveStore`*
   - State: `saveSlots` (array de 3 slots)
   - Actions: `saveGame()`, `loadGame()`, `deleteSave()`, `getSaveInfo()`
   - Getters: `hasSaves`, `latestSave`

4. *`useAudioStore`* (optionnel)
   - State: `currentMusic`, `soundEffects`, `volume`, `isMuted`
   - Actions: `playMusic()`, `playSound()`, `toggleMute()`, `setVolume()`

### 4.5 Persistance des données

*Méthode choisie:*

- [x] LocalStorage (obligatoire pour sauvegardes)
- [ ] Firebase Firestore (bonus optionnel pour galerie publique)

*Structure de données LocalStorage:*

```json
{
  "saveSlot1": {
    "savedAt": "2025-01-15T14:30:00Z",
    "playerName": "Alex",
    "currentChapterId": "chapter-5",
    "playerState": {
      "karma": 5,
      "stats": {
        "courage": 7,
        "intelligence": 8,
        "empathy": 6
      },
      "inventory": ["clé", "journal", "photo"],
      "flags": {
        "hasActivatedMachine": true,
        "knowsTheSecret": true,
        "savedMarcus": false
      },
      "relationships": {
        "marcus": 8,
        "chronos": -5
      }
    },
    "visitedChapters": ["ch-1", "ch-2", "ch-3a", "ch-4", "ch-5"],
    "choiceHistory": [
      { "chapterId": "ch-2", "choiceId": "activate", "timestamp": "..." },
      { "chapterId": "ch-3a", "choiceId": "go-past", "timestamp": "..." }
    ]
  },
  "saveSlot2": null,
  "saveSlot3": null,
  "settings": {
    "volume": 0.7,
    "textSpeed": "normal",
    "autoSave": true
  }
}
```

### 4.6 Structure de données de l'histoire

Comment stockez-vous les chapitres et choix?

*Option A: JSON statique* (recommandé)
```javascript
// data/chapters.json
{
  "ch-1": {
    "id": "ch-1",
    "title": "L'arrivé",
    "text": "Vous êtes arrivée devant l'entrer du dongeon...",
    "backgroundImage": "/",
    "music": "intro-theme.mp3",
    "choices": null,  // Chapitre linéaire
    "nextChapter": "ch-2"
  },
  "ch-2": {
    "id": "ch-2",
    "title": "le premier pas",
    "text": "Face à un eintersection le choix est le votre",
    "backgroundImage": "/",
    "music": "tension-theme.mp3",
    "choices": [
      {
        "id": "doite",
        "text": "aller a droite",
        "consequence": "vous partez vers la droite",
        "nextChapter": "ch-3a",
        "effects": {
          "vie": 10,
          "monnaie": 100 ,
        }
      },
      {
        "id": "gauche",
        "text": "aller a gauche",
        "consequence": "vous partez vers la gauche",
        "nextChapter": "ch-3b",
        "effects": {
          "vie": 10,
          "monnaie": 100 ,
        }
      }
    ]
  }
}
```


## 🎬 5. Fonctionnalités et User Stories

### 5.1 Fonctionnalités MVP (Minimum Viable Product)

*Obligatoires pour la livraison:*

- [ ] *F1 - Lecture de l'histoire*
  - Affichage du texte narratif chapitre par chapitre
  - Navigation linéaire dans l'intro
  - Transitions fluides entre chapitres

- [ ] *F2 - Système de choix*
  - Affichage de 2-4 choix par chapitre décisionnel
  - Sélection d'un choix
  - Redirection vers le chapitre suivant approprié
  - Minimum 8 chapitres avec au moins 3 fins

- [ ] *F3 - Tracking des conséquences*
  - État du joueur (karma/stats/flags)
  - Mise à jour après chaque choix
  - Conditions pour débloquer fins

- [ ] *F4 - Système de sauvegarde*
  - 3 slots de sauvegarde
  - Sauvegarde manuelle
  - Chargement d'une sauvegarde
  - Affichage des infos de sauvegarde (date, progression)

- [ ] *F5 - Historique des choix*
  - Garder trace des décisions prises
  - Affichage dans un menu (optionnel mais recommandé)

- [ ] *F6 - Écrans de fin*
  - Affichage de la fin atteinte
  - Récapitulatif des choix faits
  - Option de recommencer ou charger

- [ ] *F7 - Interface responsive*
  - Mobile (320px+)
  - Tablette (768px+)
  - Desktop (1024px+)

- [ ] *F8 - Animations de texte*
  - Apparition progressive du texte (optionnel: effet typewriter)
  - Transitions entre chapitres avec GSAP

- [ ] *F9 - Accessibilité*
  - Navigation au clavier
  - ARIA labels
  - Contraste WCAG AA
  - Option skip animations

- [ ] *F10 - Médias intégrés*
  - Images de fond par chapitre
  - Musique d'ambiance (avec contrôle volume)

### 5.2 Fonctionnalités bonus (optionnelles)

- [ ] *B1 - Auto-save*
  - Sauvegarde automatique à chaque chapitre
  - Indication visuelle de la sauvegarde

- [ ] *B2 - Inventaire visuel*
  - Affichage graphique des items
  - Description des objets au survol

- [ ] *B3 - Stats visuelles*
  - Barres de progression pour stats
  - Graphique radar des caractéristiques

- [ ] *B4 - Arbre de choix visualisé*
  - Carte interactive des chemins possibles
  - Indication des chapitres visités/non-visités

- [ ] *B5 - Galerie des fins*
  - Collection de toutes les fins débloquées
  - Pourcentage de complétion

- [ ] *B6 - Mode rejouabilité*
  - Fast-forward pour texte déjà lu
  - Skip to choice (sauter au prochain choix)

- [ ] *B7 - Effets sonores contextuels*
  - Sons lors de choix importants
  - Ambiances sonores par scène

- [ ] *B8 - Animations avancées GSAP*
  - Parallax sur les backgrounds
  - Animations de transition complexes

- [ ] *B9 - Firebase (équipes avancées)*
  - Partage de fins débloquées
  - Galerie publique d'histoires

### 5.3 User Stories

*Format:* En tant que [rôle], je veux [action] afin de [bénéfice]

1. *US-01:* En tant que lecteur, je veux lire une histoire interactive afin de vivre une expérience narrative immersive.

2. *US-02:* En tant que joueur, je veux faire des choix qui ont des conséquences afin de sentir que mes décisions comptent.

3. *US-03:* En tant qu'utilisateur, je veux sauvegarder ma progression afin de reprendre plus tard sans perdre mon avancement.

4. *US-04:* En tant que lecteur, je veux voir l'impact de mes choix afin de comprendre comment ils influencent l'histoire.

5. *US-05:* En tant que joueur, je veux atteindre différentes fins afin de découvrir toutes les possibilités de l'histoire.

6. *US-06:* En tant qu'utilisateur mobile, je veux lire l'histoire sur mon téléphone afin d'en profiter partout.

7. *US-07:* En tant que lecteur, je veux consulter l'historique de mes choix afin de me rappeler mes décisions passées.

8. *US-08:* En tant que joueur, je veux collecter des objets/débloquer des stats afin de me sentir progresser dans l'aventure.

9. *US-09:* En tant qu'utilisateur, je veux contrôler le volume sonore afin d'adapter l'expérience à mon environnement.

10. [Ajoutez vos user stories]


## 📊 6. Maquettes et Wireframes

### 6.1 Lien vers les maquettes Figma

*Lien:* [Maquette](https://www.figma.com/design/LR4IXllpioUzEXahY2muVH/Untitled?node-id=0-1&t=HMYAG9Dytk87QrCf-1)

### 6.2 Écrans principaux à maquetter

- [x] Menu principal (nouvelle partie, charger, options)
- [x] Écran de chapitre avec texte narratif
- [ ] Panel de choix (2-4 options)
- [x] Inventaire/Stats (si applicable)
- [x] Écran de fin avec récapitulatif
- [x] Gestion des sauvegardes (3 slots)
- [ ] Version mobile d'au moins 2-3 écrans

### 6.3 Interactions clés à maquetter

- Apparition progressive du texte
- Animations des boutons de choix
- Transition entre chapitres
- Ouverture de l'inventaire/stats
- États des boutons (hover, actif, disabled)


## 📊 7. Plan de Réalisation

### 7.1 Répartition des rôles

| Membre | Rôle principal | Responsabilités |
|--------|----------------|-----------------|
| [Érick Ouellette] | Chef de projet + Architecture Vue | Coordination, Vue Router, stores Pinia, structure de l'histoire |
| [Keven Malric] | Design + Animations | CSS, design visuel, animations GSAP, transitions |
| [Toute l'équipe] | Contenu + Narration | Écriture des chapitres, création de l'arbre narratif, dialogues |
| [Michaël Un Dupré] | Données + Système | Gestion des sauvegardes, LocalStorage, logique de choix, stats |

*Note:* Tous participent au développement, mais chacun a sa spécialité.

### 7.2 Tâches transversales

*À répartir entre tous:*

- Tests de l'histoire (lecture complète)
- Correction de fautes et relecture
- Tests et debugging
- Documentation du code
- Présentation finale

### 7.3 Outils de collaboration

- *Git/GitHub:* [Lien du repo]
- *Gestion de projet:* [Trello / Word / GitHub Projects]
- *Communication:* [Teams]
- *Design:* [Figma]
- *Documentation:* [Word / Google Docs / README.md]
- *Écriture collaborative:* [Google Docs / Word]


## 🚀 8. Critères de Succès

### 8.1 Critères techniques

- [ ] Application Vue.js fonctionnelle sans erreurs console
- [ ] Minimum 8 composants Vue bien structurés
- [ ] Vue Router avec 5+ routes
- [ ] Pinia implémenté avec state management cohérent
- [ ] CSS organisé avec variables
- [ ] Animations GSAP fluides
- [ ] Système de sauvegarde fonctionnel
- [ ] Code validé (ESLint)
- [ ] Responsive sur 3 breakpoints
- [ ] Accessibilité WCAG AA

### 8.2 Critères narratifs

- [ ] Histoire cohérente du début à la fin
- [ ] Minimum 8 chapitres/scènes
- [ ] Au moins 3 fins différentes
- [ ] Choix ayant un impact réel sur l'histoire
- [ ] Aucune faute d'orthographe majeure
- [ ] Dialogues naturels et crédibles
- [ ] Rythme narratif bien dosé

### 8.3 Critères de qualité

- [ ] Interface intuitive et facile à utiliser
- [ ] Design cohérent et esthétique
- [ ] Lisibilité du texte (taille, contraste, police)
- [ ] Animations pertinentes (pas excessives)
- [ ] Temps de chargement < 2 secondes
- [ ] Aucun bug bloquant
- [ ] Musique/sons appropriés
- [ ] Documentation complète (README)

### 8.4 Critères créatifs

- [ ] Histoire originale et engageante
- [ ] Personnages mémorables
- [ ] Twist ou surprise dans l'intrigue
- [ ] Expérience émotionnelle impactante
- [ ] Rejouabilité (envie de tester d'autres chemins)


## 📅 9. Calendrier du projet: Planning prévisionnel

### 9.1 *PHASE 1: PLANIFICATION ET DESIGN*
<!--Semaine 1-2 (la 2 étant la semaine de rattrapage)-->

**Du 8 au 22 octobre**

*Remise 22 octobre | 15%*

- Rédaction du cahier de charges
- Écriture de l'arbre narratif complet
- Design: Création des maquettes Figma
- Définition de l'architecture technique
- Setup du projet (Vite + Vue + dépendances)

### 9.2 *PHASE 2: FONDATION*
<!--Semaine 3-4-->

**Du 22 octobre au 2 novembre environ**

*Remise Phases 2 FONDATION et 3 INTERACTIVITÉ : vendredi 14 novembre | 15%*

!!! tip "Le projet portfolio en parallèle"
    Notez que mercredi le 29 octobre c'est la remise et présentation de votre portfolio donc nous laissons un peu plus qu'une semaine pour cette phase car vous allez probablement finaliser votre portfolio en même temps.

- Structure des composants de base
- Vue Router configuré
- Pinia stores créés
- Premiers chapitres (texte + affichage)

### 9.3 *PHASE 3: INTERACTIVITÉ - Système de Choix*
<!-- Semaine 4-5-->

**Environ du 2 novembre au 12 novembre**

*Remise Phases 2 FONDATION et 3 INTERACTIVITÉ : vendredi 14 novembre | 15%*

- Logique de branches narratives
- Système de tracking des conséquences
- Composants de choix interactifs
- Plus de chapitres écrits et intégrés


### 9.4 *PHASE 4: ANIMATIONS ET MÉDIAS*
<!-- Semaine 6 -->

**Du 12 au 19 novembre**

*Remise Phases 4 ANIMATIONS+MÉDIAS et 5 PERSISTANCE : 26 novembre | Formatif*

- Intégration GSAP (transitions)
- Images de fond par chapitre
- Musiques/sons d'ambiance
- Animations de texte


### 9.x *ÉVALUATION PAR LES PAIRS ET AUTO-ÉVALUATION DE MI PARCOURS*

**Sera fait en classe le 19 novembre**

*Remise de l'évaluation par les pairs et auto-évaluation de mi parcours: 19 novembre | 5%*


### 9.5 *PHASE 5: PERSISTANCE ET SAUVEGARDE DES DONNÉES + Fin de l'histoire*
<!-- Semaine 7 -->

**Du 19 au 26 novembre**

*Remise Phases 4 ANIMATIONS+MÉDIAS et 5 PERSISTANCE : 26 novembre | Formatif*

- Système de sauvegarde (3 slots)
- LocalStorage complet
- Toutes les fins écrites et intégrées
- Écrans de fin avec récapitulatif

### 9.6 *PHASE 6: AFFINAGE ET ACCESSIBLITÉ* pour la version *BETA*

**Du 26 novembre au 3 décembre**

*Remise version *BETA* le 3 décembre | Formatif*

- Responsive final
- Accessibilité (ARIA, keyboard)

### 9.7 *PHASE 7:  CONTRÔLE QUALITÉ ET CORRECTIONS*
<!-- Semaine 8 -->
**Du 3 au 8 décembre**

*Remise Phase 7 RAPPORT DU CONTRÔLE DE LA QUALITÉ : 8 décembre | 10%*

- Tests de toutes les branches de l'histoire
- Tests fonctionnels
- Tests multi-plateformes (navigateurs et appareils)
- Relecture et corrections
- Optimisation de la performance
- Gestion des bogues

### 9.8 *PHASE 8:  FINALISATION*
<!-- Semaine 8 + 2 jours-->

**Du 3 au 10 décembre** (peut-être fait en parallèle avec la phase 7)

*Remise et présentation finale : 10 décembre | 50%*

- Documentation (README complet)
- Déploiement - Mise en ligne (GitHub/Netlify/Vercel)
- Vidéo de présentation
- Préparation de la démo en classe

### 9.9 *PHASE 9: POST-MORTEM*

**Du 10 au 12 décembre**

*Remise de l'analyse réflexive et suivi de l'évaluation de mi-parcours: 12 décembre | 5%*


## 🎯 10. Risques et Solutions

| Risque | Probabilité | Impact | Solution préventive |
|--------|-------------|--------|---------------------|
| Scope creep narratif (trop d'histoire) | Élevée | Élevé | Limiter à 8-10 chapitres max, garder histoires simples |
| Manque de temps pour écrire | Élevée | Élevé | Écrire les chapitres AVANT de coder, paralléliser |
| Bugs dans la logique de branches | Moyenne | Élevé | Tester chaque branche manuellement, diagramme clair |
| Incohérences narratives | Moyenne | Moyen | Relecture croisée, document de tracking des flags |
| Fautes d'orthographe | Élevée | Faible | Utiliser correcteur, relecture collective |
| Sauvegardes corrompues | Faible | Élevé | Validation JSON, gestion d'erreurs, tests intensifs |


## 📝 11. Annexes

### 11.1 Ressources et références

*Documentation officielle:*

- Contenu du cours Web 5 https://tim-montmorency.com/compendium/582-511-web5/
- Guide étudiant du projet appli web créative: https://tim-montmorency.com/compendium/582-511-web5/projets/appweb-creative/syllabus_guide_etudiant.html
- Vue.js: https://vuejs.org
- Pinia: https://pinia.vuejs.org
- GSAP: https://greensock.com/docs/

*Inspiration narrative:*

- Dongeon et dragon
- Henry stickman

*Tutoriels utiles:*

- [code pour monnie](https://youtu.be/BTQgFlbq5HU)
- [code pour system de vie](https://youtu.be/Wh2kVSPi_sE)

### 11.2 Glossaire

- *Branche:* Chemin narratif distinct selon les choix
- *Flag:* Variable booléenne qui track un événement
- *Ending:* Fin possible de l'histoire
- *Karma:* Système de moralité basé sur les choix
- *Node:* Point de décision dans l'arbre narratif
- *Save slot:* Emplacement de sauvegarde



## ✅ Validation du Cahier de Charges

*Date de validation:* [Date]

*Signatures:*

- Chef de projet: _______________
- Membre 2: _______________
- Membre 3: _______________
- Membre 4: _______________ (si applicable)

*Validation enseignant:* _______________  
*Date:* _______________  
*Commentaires:*

---

*Version du document cahier de charge:* 1.0  
*Dernière mise à jour:* [Écrire ici la date]
