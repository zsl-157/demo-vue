<template>
  <div id="lazyload">
        <!-- img中使用图片懒加载。 v-lazy代替v-bind:src -->
        <ul class="img">
            <li v-for="(item,index) in imgList" :key="index"> 
                <img v-lazy="item" alt="" style="width: 100%;"> 
            </li>
        </ul>
 
        
    </div>
</template>

<script>
  export default {
    data(){
      return{
        imgList:[
         
           
        ]
      }
    },
    mounted(){
      for(let i=1;i<=86;i++){
        this.imgList.push(require('../img/'+i.toString()+'.jpg'))
      }
    }

  }
</script>

<style>
    #lazyload{
      width: 100%;
      margin: 0 auto;
    }
    .img{
      margin: 0 auto;
    }
    .img li{
      width: 100%;
      margin-bottom: 10px;
      background-repeat: no-repeat; 
      background-size: cover;
      list-style: none;
      list-style-type: none;
    }
</style>