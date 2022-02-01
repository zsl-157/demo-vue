<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
        <label for="">修改用户</label>
        <input type="text" name="" id="" class="form-control" v-model="username">
      </div>
      <div class="row">
        <div class="col-md-6">
          <button type="button" class="btn btn-primary">确认</button>
        </div>
        <div class="col-md-6">
          
        </div>
      </div>
      </div>
      <div class="col-md-6">
        <p>用户名</p>
        <div>{{username}}</div>
      </div>
    </div>
    
  </div>
</template>

<script>

export default {
  
  data () {
    return {
     username:"",
     
    }
  },
  methods:{
    
  }
 
}
</script>

<style>
.center{
  margin: 0 auto;
}
</style>