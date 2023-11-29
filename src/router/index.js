import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegistroView from '../views/RegistroView.vue'
import store from '../store/index.js'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter: (to, from, next) => {
      if (store.getters.obtenerValidacion) {
        next();
      } else {
        next('/login');
      }
    }
  },
  {
    path: '/login',
    name: 'login',
    component: RegistroView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
