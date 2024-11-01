import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('pages/AboutMePage.vue'),
    // children: [
    //   { path: '', component: () => import('components/BusinessCard.vue') },
    // ],
  },
];

export default routes;
