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
      path: '/chart',
      name: 'chart',
      component: () => import('../views/ChartsView.vue'),
      component: () => import('../views/BarChartView.vue')
    }
    /*   {
      path: '/ComplaintInfo/:id',
      name: 'ComplaintInfo',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ComplaintInfo.vue')
    } */
  ]
})

export default router
