import Vue from 'vue'
import Router from 'vue-router'
import Notebook from './views/notebook.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Notebook
    }
  ]
})
