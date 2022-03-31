import { createRouter, createWebHashHistory } from 'vue-router'
import AdminView from '../views/AdminView.vue'

const routes = [
  {
    path: '/admin',
    name: 'admin',
    component: AdminView
  },
  {
    path: '/',
    name: 'home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/flavors',
    name: 'flavors',
    component: () => import(/* webpackChunkName: "about" */ '../views/Flavors.vue')
  },
  {
    path: '/ournments',
    name: 'ournments',
    component: () => import(/* webpackChunkName: "about" */ '../views/Ournments.vue')
  },
  {
    path: '/shopping',
    name: 'shopping',
    component: () => import(/* webpackChunkName: "about" */ '../views/Shopping.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
