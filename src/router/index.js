import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

const app = createApp();

const routes = [
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
];

const vueRouter = createRouter({
  history: createWebHashHistory(),
  routes: routes
});

// Vue.use(VueRouter)

// const router = new VueRouter({
//   // mode: "history",
//   routes
// })

export default vueRouter;
