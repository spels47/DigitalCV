import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import("@/views/Contact.vue")
  },
  {
    path: '/education',
    name: 'education',
    component: () => import("@/views/Education.vue")
  },
  {
    path: '/references',
    name: 'references',
    component: () => import("@/views/References.vue")
  },
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
