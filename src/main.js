import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import Home from "./components/Home/Home.vue";


const app = createApp(App)

import { router } from './Router/router.js'

app.use(router).mount('#app')