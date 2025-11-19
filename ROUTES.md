  routes:
    
    path: '/',
    name: 'accueil',
    component: AccueilView,
    description: page d'acceuil avec le bouton pour commencer le jeu qui ammène à la page de sauvegardes

    path: '/chapter/:id',
    name: 'chapter',
    component: ChapitresView,
    description: page pour afficher les chapitres selon le ID du chapitre qu'on est dessus

    path: '/sauvegardes',
    name: 'sauvegardes',
    component: SauvegardeView,
    description: page avec trois section de sauvegarde où on peux choisir la sauvegarde du jeu qui ensuite ammène a la page de chapter

 