import { createRouter, createWebHistory, createMemoryHistory  } from 'vue-router'


const router = createRouter({
  history: createMemoryHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/home.vue')
    },
    {
      path: '/corporation',
      name: 'corporation',
      component: () => import('../pages/corporation.vue')
    },
    {
      path: '/real-estate',
      name: 'realEstate',
      component: () => import('../pages/realEstate.vue')
    },
    {
      path: '/zavod',
      name: 'zavod',
      component: () => import('../pages/zavod.vue')
    },
  ]
})

export default router
