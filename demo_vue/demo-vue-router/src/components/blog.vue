<template>
  <div id="a">
    <video class="vd1" controls="controls" autoplay="autoplay" style="display:none">  
    		 <source src="src/assets/yujian.mp4"  type="video/mp4" /> 
		</video>
    <div id="train-container">
      
      <img id="train" src="src/img/FFFFFFFF.png" />
    </div>
    <div class="clear-first">
      <div id="first">2021.11.16结识在茶室</div>
    </div>
    <div class="clear-second">
      <div id="second">2021.11.29表情包互撩</div>
    </div>
    <div class="clear-third">
      <div id="third">2021.12.6在单位住</div>
    </div>
    <div class="clear-third-1">
      <div id="third-1">第一次得到你的关心</div>
    </div>
    <div class="clear-third-2">
      <div id="third-2">第一次叫我哥哥呢</div>
    </div>
    <div class="clear-fourth-1">
      <div id="fourth-1">
      2021.12.15去吃饭
      </div>
    </div>
    <div class="clear-fourth-2">
      <div id="fourth-2">第一次抱你，好幸福</div>
    </div>
    <div class="clear-fourth-3">
      <div id="fourth-3">可一切都会消失</div>
    </div>
  </div>
  
</template>

<script>
  export default {
   mounted(){
    

   } 
  }
</script>


<style>
  div{
    font-size: 2rem;
  }
  #a{
    color: #509e91;
    
  }
  #first{
    position: absolute;
    top: 8rem;
    left:17rem;
    opacity: 0;
    animation-name: first;
    animation-duration: 2s;
    animation-delay: 1.5s;
    animation-fill-mode:forwards;
    
    
  }
  #second{
    position: absolute;
    top: 25rem;
    left:17rem;
    opacity: 0;
    animation-name: first;
    animation-duration: 2s;
    animation-delay: 9s;
    animation-fill-mode:forwards;
    
  
  }
  #third{
    position: absolute;
    top: 44rem;
    left:20rem;
    opacity: 0;
    animation-name: first;
    animation-duration: 2s;
    animation-delay: 12s;
    animation-fill-mode:forwards;
    
  }
   #third-1{
    position: absolute;
    top: 47rem;
    left:20rem;
    opacity: 0;
    animation-name: first;
    animation-duration: 2s;
    animation-delay: 12.6s;
    animation-fill-mode:forwards;
   
  }
   #third-2{
    position: absolute;
    top: 50rem;
    left:20rem;
    opacity: 0;
    animation-name: first;
    animation-duration: 2s;
    animation-delay: 13.2s;
    animation-fill-mode:forwards;

  }

  
  #fourth-1{
    position: absolute;
    top: 65rem;
    left:20rem;
    opacity: 0;
    animation-name: first;
    animation-duration: 2s;
    animation-delay: 15s;
    animation-fill-mode:forwards;
   
  }
  #fourth-2{
    position: absolute;
    top: 68rem;
    left:20rem;
    opacity: 0;
    animation-name: first;
    animation-duration: 2s;
    animation-delay: 15.6s;
    animation-fill-mode:forwards;

  }
  #fourth-3{
    position: absolute;
    top: 71rem;
    left:20rem;
    opacity: 0;
    animation-name: first;
    animation-duration: 2s;
    animation-delay: 17s;
    animation-fill-mode:forwards;

  }
  #train-container{
    font-size:30px;
    position:absolute;
    top:15rem;
    left: 0px; 
    opacity: 1;
    transform: rotate(0deg);
    animation-name: myfrme;
    animation-duration: 30s;
    animation-fill-mode:forwards;
    animation-iteration-count:1;
    animation-timing-function:ease-in-out;
    animation-direction:normal;
    
  }
   .clear-fourth-3{
    opacity: 1;
    animation-name: clear-font;
    animation-duration: 2s;
    animation-delay: 19s;
    animation-fill-mode:forwards;
  }
  .clear-fourth-2{
    opacity: 1;
    animation-name: clear-font;
    animation-duration: 2s;
    animation-delay: 21s;
    animation-fill-mode:forwards;
  }
  .clear-fourth-1{
    opacity: 1;
    animation-name: clear-font;
    animation-duration: 2s;
    animation-delay: 23s;
    animation-fill-mode:forwards;
  }
  
  .clear-third{
    opacity: 1;
    animation-name: clear-font;
    animation-duration: 2s;
    animation-delay: 27s;
    animation-fill-mode:forwards;
  }
  .clear-third-1{
    opacity: 1;
    animation-name: clear-font;
    animation-duration: 2s;
    animation-delay: 25s;
    animation-fill-mode:forwards;
  }
  .clear-third-2{
    opacity: 1;
    animation-name: clear-font;
    animation-duration: 2s;
    animation-delay: 23s;
    animation-fill-mode:forwards;
  }
  .clear-second{
    opacity: 1;
    animation-name: clear-font;
    animation-duration: 2s;
    animation-delay: 29s;
    animation-fill-mode:forwards;
  }
  .clear-first{
    opacity: 1;
    animation-name: clear-font;
    animation-duration: 2s;
    animation-delay: 31s;
    animation-fill-mode:forwards;
  }
  @keyframes myfrme{
    
    5%,15%{
      left:30rem;
      opacity: 1;
    }
    20%,30%{
      transform: rotate(90deg);
      opacity: 1;
    }
    31%,41%{
      top: 30rem;
      left: 32rem;
      opacity: 1;
    }
    41%,51%{
      top: 45rem;
      left: 32rem;
      opacity: 1;
    }
    51%,61%{
      top: 65rem;
      left: 34rem;
      opacity: 1;
      transform: rotate(90deg);
    }
    63%,100%{
      top: 75rem;
      opacity: 0;
      transform: rotate(90deg);
      display: none;
    }
  }

  @-webkit-keyframes myfrme{
      5%,15%{
      left:30rem;
    }
    20%,30%{
      rotate:90deg;
    }
    31%,41%{
      top: 40rem;
    }
  }
  @keyframes first{
    from{
      opacity: 0;
    }
    to{
      opacity:1;
    }

  }
  
  @-webkit-keyframes first{
    from{
      opacity: 0;
    }
    to{
      opacity:1;
    }

  }
  @keyframes clear-font {
    from{
      opacity: 1;
    }
    to{
      opacity:0;
    }
  }
</style>
