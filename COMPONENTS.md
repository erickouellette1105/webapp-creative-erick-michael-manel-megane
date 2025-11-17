| NOM | RESPONSABILITÉ | PROPS ATTENDUES | ÉVÉNEMENTS ÉMIS (ÉMITS)|
|-----------|-----------|-----------| ----------- |
| AppHeaderHome.vue | Affiche l’en-tête du site : logo, titre et menu principal. | title (String) logo (String) | navigation : émis quand l’utilisateur clique sur commencer |
| AppheaderJeux.vue | Affiche l’acceuil du jeux | title (String) logo (String) | navigation : émis quand l’utilisateur clique sur leur choix |
| AppCredit.vue| Affiche les crédits de l’équipe | NomEquipe (String) | rien |
| ProgressBar.vue| Barre de progression de l’histoire | progress (Number)
animation(Boolean) | complet : émis quand la progression atteint 100%. |
| BaseButton.vue | Bouton réutilisable pour actions | choix | click : émis lorsque l’utilisateur clique sur le bouton. |
| LoadingSpinner.vue | Affiche une animation de chargement | size (String) color (String) | rien |
| AudioControl.vue | bouton pour controller l’audio | boolean | click: mute et unmute le son du jeux |
| Inventaire.vue | Affiche l’inventaire du jeu | items (Array) | quitter-inventaire : émis quand le joueur quitte l’inventaire |