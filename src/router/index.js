import LayoutPrincipal from '@/layout/LayoutPrincipal.vue'
import Dashboard from '@/views/Dashboard.vue'
import Login from '@/views/Login.vue'
import { createRouter, createWebHistory } from 'vue-router'
// não colocar login ainda pois está sendo feito no momento
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
    path: '/',
    component: LayoutPrincipal,
    children: [
      {
      path: '',
      redirect: '/dashboard',
    },
    {
      path: 'dashboard',
      component: Dashboard,
      meta:{
        titulo: "Dashboard"
      }
    },
  
  ]
  }],
})

export default router
