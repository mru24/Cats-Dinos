import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Cats from '@/components/Cats'
import Dinos from '@/components/Dinos'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/cats',
      name: 'cats',
      component: Cats
    },
    {
      path: '/dinos',
      name: 'dinos',
      component: Dinos
    }
  ]
})
