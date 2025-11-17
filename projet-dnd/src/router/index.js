import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue';
import ChapitresView from '../views/ChapitresView.vue';
import SauvegardeView from '../views/SauvegardeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
    },
    {
      path: '/sauvegardes',
      name: 'sauvegardes',
      component: SauvegardeView,
    },
  ],
});

export default router

