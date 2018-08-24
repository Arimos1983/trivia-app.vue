import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import TriviaApp from './components/TriviaApp'


Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  {path: '/', redirect: '/trivia'},
  {path: '/trivia', component: TriviaApp}
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
