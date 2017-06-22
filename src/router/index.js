import Vue from 'vue'
import Router from 'vue-router'
import Starter from '@/components/Starter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Starter',
      component: Starter
    }
  ]
})
