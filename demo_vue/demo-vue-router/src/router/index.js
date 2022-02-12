import Vue from "vue";
import VueRouter from "vue-router";
import indexP from "../components/index.vue"
import knowl from "../components/knowl.vue"
import blog from "../components/blog.vue"
import game from "../components/game.vue"
import source from "../components/source.vue"


Vue.use(VueRouter);

const routes = [
  {
      path:"",
      component:indexP
  },
 {
   path:"/index",
   component:indexP
 },
 {
   path:"/knowl",
   component:knowl
 },
 {
  path:"/blog",
  component:blog
  },
  {
  path:"/game",
  component:game
  },
  {
  path:"/source",
  component:source
  },
]
const router = new VueRouter({
  routes
})

export default router;