import Vue from 'vue'
import App from './App.vue'
import Vuex from "vuex"
import states from "../src/state.js"


Vue.use(Vuex);

const store = new Vuex.Store({
  state:states
})

const app = new Vue({
  el: '#app',
  store:store,
  render: h => h(App)
})
