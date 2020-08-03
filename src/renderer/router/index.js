import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'login',
      component: require('@/view/login/index.vue').default
    },
    {
      path: '/register',
      name: 'register',
      component: require('@/view/register/index.vue').default
    },
    {
      path: '/index',
      name: 'index',
      component: require('@/view/index/index.vue').default
    },
  ]
})
