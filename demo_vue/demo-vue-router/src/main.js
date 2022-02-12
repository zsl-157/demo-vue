import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import Video from 'video.js'
import VuelazyLoad from 'vue-lazyload'

Vue.use(VuelazyLoad,{
  preLoad: 30 ,
  attempt:2
});
Vue.prototype.$video = Video
const app = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
