import LayoutPrincipal from '@/layout/LayoutPrincipal.vue'
import Agenda from '@/views/Agenda.vue'
import CadastroInstitucional from '@/views/CadastroInstitucional.vue'
import CadastroInstitucional02 from '@/views/CadastroInstitucional02.vue'
import CadastroInstitucional03 from '@/views/CadastroInstitucional03.vue'

import Campanha from '@/views/Campanha.vue'
import CredenciaisFinalizadas from '@/views/CredenciaisFinalizadas.vue'
import Dashboard from '@/views/Dashboard.vue'
import Doadora from '@/views/Doadora.vue'
import PerfilDoadora from '@/views/PerfilDoadora.vue'
import Instituicao from '@/views/Instituicao.vue'

import Jornada from '@/views/Jornada.vue'


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
      redirect: '/cadastro/instituicao',
    },
    {
      path: 'dashboard',
      component: Dashboard,
      meta:{
        titulo: "Dashboard"
      }
    },
    {
      path: 'campanha',
      component: Campanha,
      meta:{
        titulo: "Campanha"
      }
    },
    {
      path: 'agenda',
      component: Agenda,
      meta:{
        titulo: "Agenda"
      }
    },
    {
      path: 'doadora',
      component: Doadora,
      meta:{
        titulo: "Doadoras",
        exibeBusca: true
      }
    },
    {
      path: 'doadora/:id',
      component: PerfilDoadora,
      meta:{
        exibeBusca: true,
        exibeVoltarDoadoras: true
      }
    },
    {
      path: 'jornada',
      component: Jornada,
      meta:{
        titulo: "Jornada"
      }
    },
    {
      path: 'instituicao',
      component: Instituicao,
      meta:{
        titulo: "Instituição"
      }
    },
  ]
  },
      {
      path: '/cadastro/instituicao',
      component: CadastroInstitucional
    },
    {
      path: '/cadastro/responsavel',
      component: CadastroInstitucional02
    },
    {
       path: '/cadastro/endereco',
      component: CadastroInstitucional03
    },
    {
       path: '/cadastro/finalizado',
      component: CredenciaisFinalizadas
    },
    {
       path: '/login',
      component: Login
    }

  ],
})

export default router
