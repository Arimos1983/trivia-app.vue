import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import TriviaApp from './components/TriviaApp'
import ChuckApp from './components/ChuckApp'

import store from './store'


Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  {path: '/', redirect: '/trivia'},
  {path: '/trivia', component: TriviaApp},
  {path: '/chuck', component: ChuckApp}
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
