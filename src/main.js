import Vue from 'vue'
import VueRouter from 'vue-router'
import CustomComponent from './components/CustomComponent.vue'

import App from './App.vue'

Vue.use(VueRouter)

const routes = [
  {
    name: 'home',
    path: '/',
    component: CustomComponent,
    props: true
  }
]

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
