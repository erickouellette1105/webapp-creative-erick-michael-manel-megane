| NOM | RESPONSABILITÉ | PROPS ATTENDUES | ÉVÉNEMENTS ÉMIS (ÉMITS)|
|-----------|-----------|-----------| ----------- |
| AppLobby.vue | Affiche les animations de lumière sur l'accueil | |  |
| AppHeaderGame.vue |  Affiche l’inventaire du jeu | items (Array) | quitter-inventaire : émis quand le joueur quitte l’inventaire |
| AppCredit.vue| Affiche les crédits de l’équipe | NomEquipe (String) | rien |
| GameButton.vue | naviguer vers les sauvegardes | Bouton | saveBtn(): push router pour aller aux sauvegardes |
| SaveButton.vue | naviguer vers le chapitre 1 | Bouton |  chapterBtn(): push router vers le chapitre 1 |
| StartButton.vue | retour à l'accueil à partir de l'historique | goBack(): push router vers l'accueil refresh l'inventaire et les stats |
| AccueilView.vue | Affiche le titre, les crédits, et permet le début de l'aventure | bouton et bouton pour crédit |startAdventure():
Navigation vers le premier chapitre (id 1) |
| ChapitresView.vue | Affiche le chapitre selon le ID du json | bouton de choix et bouton inventaire|  currentChapter(): prend le chapitre courant selon le ID, makeChoice(choice): prend le prochain chapitre selon de ID connecter au bouton |
| SauvegardeView.vue | Affiche les 3 bouton contenant une sauvegarde | bouton | rien |
| StatistiquesViews.vue | Affiche les chemin choisis et les objets pris durent le jeux | choix (Array) | rien |