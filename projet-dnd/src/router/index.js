import { createWebHashHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue';
import ChapitresView from '../views/ChapitresView.vue';
import SauvegardeView from '../views/SauvegardeView.vue';
import StatistiquesView from '../views/StatistiquesView.vue';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'accueil',
      component: AccueilView,
    },
    {
      path: '/chapter/:id',
      name: 'chapter',
      component: ChapitresView,
      meta: { bodyColor: '#6b0f1a' } 
    },
    {
      path: '/sauvegardes',
      name: 'sauvegardes',
      component: SauvegardeView,
    },
    {
      path: '/statistiques',
      name: 'statistiques',
      component: StatistiquesView,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.bodyColor) {
    document.body.style.backgroundColor = to.meta.bodyColor;
  } else {
    document.body.style.backgroundColor = ''; // Default or reset
  }
  next();
});

export default router

