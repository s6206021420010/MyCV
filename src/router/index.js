import { createRouter, createWebHistory } from 'vue-router'
import NavBar from '../views/NavBar.vue'

const router = createRouter({
  history: createWebHistory("/"),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { title: 'My Portfolio' },
      component: NavBar,
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../views/homePage.vue')
        }
      ]
    },
  ]
})
export default router
