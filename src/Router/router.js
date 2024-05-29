import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
 history: createWebHistory(),
 routes: [{
  name: 'home',
  path: '/',
  component: () =>  import("../components/Home/Home.vue")
  }, {
  name: 'about',
  path: '/About',
  component: () => import("../components/About/About.vue")
  }, {
  name: 'ourServers',
  path: '/OurServers',
  component: () => import("../components/OurServers/OurServers.vue")
 }, {
  name: 'questions',
  path: '/Questions',
  component: () => import("../components/Questions/Questions.vue")
 }, {
  name: 'donate',
  path: '/Donate',
  component: () => import("../components/Donate/Donate.vue")
 }, {
  name: 'accountProfile',
  path: '/AccountProfile',
  component: () => import("../components/AccountProfile/AccountProfile.vue")
 }
  ],
})