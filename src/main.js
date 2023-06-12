import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from "vue-router"
import MainComponent from "./pages/index.vue"
import AbountComponent from "./pages/abount.vue"
import DevelopComponent from "./pages/develop.vue"

const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }
const Develop = { template: '<div>Develop</div>' }

const routes = [
  { path: '/', component: MainComponent },
  { path: '/about', component: AbountComponent },
  { path: '/develop', component: DevelopComponent },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

createApp(App).use(router).mount("#app") 