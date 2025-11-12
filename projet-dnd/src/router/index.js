import { createRouter, createWebHistory } from 'vue-router'
import AccueiView from '@/views/AccueiView.vue';
import ChapitresView from '@/views/ChapitresView.vue';
import SauvegardeView from '@/views/SauvegardeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/accueil',
      name: 'accueil',
      component: AccueiView,
    },
    {
      path: '/chapitres',
      name: 'chapitres',
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

