<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
        <label for="">用户注册</label>
        <input type="text" name="" id="" class="form-control" @click="showname=false" v-model="username">
      </div>
      <div class="row">
        <div class="col-md-6">
          <button type="button" class="btn btn-primary" @click="vertify">确认</button>
        </div>
        <div class="col-md-6">
          
        </div>
      </div>
      </div>
      <div class="col-md-6">
        <p>store中的用户名</p>
        <div v-show="showname">{{this.$store.state.username}}</div>
      </div>
    </div>
    
  </div>
</template>

<script>

export default {
  
  data () {
    return {
     username:"",
     showname:false,
    }
  },
  methods:{
    change(){

    }
    ,
    vertify(){
        this.showname = true;
        this.$store.state.username = this.username;
        console.log(this.$store.state.username)
    }
    
  }
 
}
</script>

<style>
.center{
  margin: 0 auto;
}
</style>