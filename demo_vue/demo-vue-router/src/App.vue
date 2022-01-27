<template>
  <div id="app">
    <div class="router-container">
      <router-link v-for="(item,index) in navitem" :key="index" tag="li" :to="{path:item.to}">{{item.page}}</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      navitem:[{"page":"首页","to":"/index"},
      {"page":"知识","to":"/knowl"},
      {"page":"博客","to":"/blog"},
      {"page":"游戏","to":"/game"},
      {"page":"资源","to":"/source"}],
      msg: 'Welcome to Your Vue.js App'
    }
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

.router-container{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
}
.router-container li{
  display: block;
  background: #4e6ef2;
  list-style-type: none;
  width:20%;
  color:white;
  height: 3rem;
  line-height: 3rem;
  text-align: center;
  cursor: pointer;
}

.router-container li:hover{
  background:#1b35dd;

}


</style>
