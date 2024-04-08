import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/base',
      name: 'base',
      component: () => import('../views/baseView.vue')
    },
    {
      path: '/grade',
      name: 'grade',
      component: () => import('../views/gradeView.vue')
    },
    {
      path: '/slot',
      name: 'slot',
      meta: { name: "描述" },
      component: () => import('../views/slotView.vue')
    }
  ]
})


router.beforeEach((to, from) => {
  console.log('==>Get to', to);
  console.log('==>Get from', from);
})

export default router
