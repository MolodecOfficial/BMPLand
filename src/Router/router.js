import { createRouter, createWebHistory } from 'vue-router'
import Home from "../components/Home/Home.vue";
import About from "../components/About/About.vue";
import OurServers from "../components/OurServers/OurServers.vue";
import Questions from "../components/Questions/Questions.vue";
import Donate from "../components/Donate/Donate.vue";


const routes = [
 { path: '/', component: Home },
 { path: '/About', component: About },
 { path: '/OurServers', component: OurServers },
 { path: '/Questions', component: Questions },
 { path: '/Donate', component: Donate },
]

export const router = createRouter({
 history: createWebHistory(),
 routes,
})