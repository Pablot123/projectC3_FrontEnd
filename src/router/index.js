import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import consultar from '@/components/consultar'
import reservar from '@/components/reservar'
Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/reservar',
      name: 'reservar',
      component: reservar
    },
    {
      path: '/consultar',
      name: 'consultar',
      component: consultar
    }
  ]
})