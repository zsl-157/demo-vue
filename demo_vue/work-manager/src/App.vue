<template>
  <div id="app">
    <login></login>
  </div>
</template>

<script>
import login from './components/login.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    login
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
}
*{
  margin: 0;
  padding: 0;
  list-style: none;
}

</style>
