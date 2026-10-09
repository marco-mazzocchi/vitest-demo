import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '../components/HelloWorld.vue'
import ConfiguratorView from '../components/Configurator/Configurator.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/configurator', component: ConfiguratorView },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
