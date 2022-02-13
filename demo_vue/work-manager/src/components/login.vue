<template>
  <div class="container">
    <div class="head">登录</div>
    <div class="input-container">
        <form class="user-con" style="">
            <input placeholder="账号" name="username" type="text" v-model="username" />
        </form>
        <form class="user-con">
            <input placeholder="密码" type="text" v-model="password" />
        </form>
        <button class='login-btn' @click="loginclk">登录</button>
       
    </div>
    <error :msg="s"></error>
  </div>  
</template>

<script>
import error from '../components/error.vue'
 export default{
   data(){
     return{
      username:'',
      password:'',
      s:'打卡机阿第三方可令肌肤'
     }     
   },
   components:{
     error,
   }

 }
</script>

<style lang="scss" scoped>
  @import '../style/common.scss';
  .container{
    background: #efefef;
   
  }
  .head{
    @include bg;
    @include fontsize;
    height: 2rem;
    line-height: 2rem;
    color: white;
    font-size: 1.2rem;
  }
  input{
    position: relative;
    height: 3rem;
    width:100%;
    border: none;
    
  }
  .user-con{
    top: 1.5rem;
    width: 100%;
    height: 3rem;
    border: none;
    border-bottom: 1px solid #efefef;
    background: white;
  }
  .input-container{
    
    margin-top: .8rem;
    @include fc;
    flex-direction: column;
    
    
  }
  form{
    color: #747474;
    font-size: 1.2rem;
  }
  ::placeholder{
    font-size: 1rem;
    color: #747474;
  }
  ::-moz-placeholder{
    font-size: 1rem;
    color: #747474;
  }
  ::-webkit-input-placeholder{
    font-size: 1rem;
    color: #747474;
    line-height: .95rem;
  }
  ::-moz-placeholder{
    font-size: 1.5rem;
    color: #747474;
  }
  .login-btn{
    @include bg;
    font-size: 1.4rem;
    height: 3rem;
    line-height: 3rem;
    color:white;
    position: relative;
    top: 2rem;
  }

</style>