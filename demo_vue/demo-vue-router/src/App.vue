<template>
  <div id="app">
    <div class="router-container">
      <router-link v-for="(item,index) in navitem" :key="index" tag="li" :to="{path:item.to}" @click.native="hideCanvasShowSub(index)">{{item.page}}</router-link>
    </div>
    
    <router-view></router-view>
  </div>
</template>

<script>
import indexPage from '../src/components/index.vue';
import getter from '../src/httphandler/getH';
export default {
  name: 'app',
  data () {
    return {
      navitem:[{"page":"我来过","to":"/index"},
      {"page":"知识","to":"/knowl"},
      {"page":"time axis","to":"/blog"},
      {"page":"游戏","to":"/game"},
      {"page":"memorize","to":"/source"}],
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    hideCanvasShowSub(index){
      let c = document.getElementsByClassName("canvas-container")
      console.log("c is",c)
     
    },
    
  },
  mounted() {
      getter();
     
    },
  
  components:{
    indexPage
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}

a {
    background: blue;
}
body{
background: #ecd9c8;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
.canvas-container{
height: 1500px;
  
}
.router-container{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
}
.router-container li{
  display: block;
  background: #7daea8;
  list-style-type: none;
  width:20%;
  color:white;
  height: 3rem;
  line-height: 3rem;
  text-align: center;
  cursor: pointer;
}

.router-container li:hover{
  background:#509e91;

}


</style>
