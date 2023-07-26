import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from "vue-router"
import MainComponent from "./pages/index.vue"
import AbountComponent from "./pages/abount.vue"
import DevelopComponent from "./pages/develop.vue"

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

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
const vuetify = createVuetify({
  components,
  directives,
})

createApp(App).use(router).use(vuetify).mount("#app") 