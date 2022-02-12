<template>
  <div class="wrap">
  <video class="vd1" controls="controls" loop="loop" autoplay="autoplay" style="display:none">  
    		 <source src="src/assets/xihai.mp4"  type="video/mp4" /> 
		</video>
		<div class="box">
			<div class="left"><img src="src/img/20220203211638.jpg" alt=""></div>
			<div class="right"><img src="src/img/20220203211646.jpg" alt=""></div>
			<div class="top"><img src="src/img/20220203211517.jpg" alt=""></div>
			<div class="bottom"><img src="src/img/20220203211434.jpg" alt=""></div>
			<div class="after"><img src="src/img/20220203211746.jpg" alt=""></div>
			<div class="before"><img src="src/img/20220203211614.jpg" alt=""></div>
		</div>
    <div>
        <div class="text-box">
          <div class="showtext-1">
            你是我遇见过的最有契合度的女孩子
          </div>
          <div class="showtext-2">
            起初
          </div>
          <div class="showtext-3">
            以为遇见了爱情
          </div>
          <div class="showtext-4">
            后来才发现
          </div>
          <div class="showtext-5">
            这只是错觉
          </div>
          <div class="showtext-6">
            可是
          </div>
          <div class="showtext-7">
            总会有遗憾
          </div>
          <div class="showtext-8">
            有些人
          </div>
          <div class="showtext-9">
            错过了就是错过了
          </div>
        </div>
    </div>
	</div>
</template>

<script>

</script>

<style>
  *{margin: 0;padding: 0;}
		
		.wrap{width: 800px;height: 500px;margin: 180px auto;}
		.box{width: 400px;height: 400px;margin: 100px auto;position: relative;transition: all 3s;transform-style: preserve-3d;animation: move 3s infinite linear alternate;}
		.box>div{width: 400px;height: 400px;font-size: 60px;opacity: .5;position: absolute;top: 0;left: 0;transition: all 1s;}
		
		.box img{width: 400px;height: 400px;}
		.left{transform: rotateY(90deg) translateZ(-240px);}
		.right{transform: rotateY(90deg) translateZ(240px);}
		.top{transform: rotateX(90deg) translateZ(200px);}
		.bottom{transform: rotateX(90deg) translateZ(-200px);}
		.after{transform: translateZ(-240px);}
		.before{transform: translateZ(240px);}
		
		.wrap .box:hover .left{transform: rotateY(90deg) translateZ(-300px);}
		.wrap .box:hover .right{transform: rotateY(90deg) translateZ(300px);}
		.wrap .box:hover .top{transform: rotateX(90deg) translateZ(300px);}
		.wrap .box:hover .bottom{transform: rotateX(90deg) translateZ(-300px);}
		.wrap .box:hover .after{transform: translateZ(-300px);}
		.wrap .box:hover .before{transform: translateZ(300px);}
		
    .text-box{
      margin-top: 10rem;
      color:#509e91;
      font-size: 3rem;
      
    }
    .showtext-1{
      opacity: 0;
      animation-name: showtext;
      animation-delay: 1s;
      animation-duration: 3s;
      animation-fill-mode: forwards;
      animation-iteration-count: 1;
    }
    .showtext-2{
      opacity: 0;
      animation-name: showtext;
      animation-delay: 3s;
      animation-duration: 2s;
      animation-fill-mode: forwards;
      animation-iteration-count: 1;
    }
    .showtext-3{
      opacity: 0;
      animation-name: showtext;
      animation-delay: 5s;
      animation-duration: 2s;
      animation-fill-mode: forwards;
      animation-iteration-count: 1;
    }
    .showtext-4{
      opacity: 0;
      animation-name: showtext;
      animation-delay: 7s;
      animation-duration: 2s;
      animation-fill-mode: forwards;
      animation-iteration-count: 1;
    }
    .showtext-5{
      opacity: 0;
      animation-name: showtext;
      animation-delay: 9s;
      animation-duration: 2s;
      animation-fill-mode: forwards;
      animation-iteration-count: 1;
    }
    .showtext-6{
      opacity: 0;
      animation-name: showtext;
      animation-delay: 11s;
      animation-duration: 2s;
      animation-fill-mode: forwards;
      animation-iteration-count: 1;
    }
    .showtext-7{
      opacity: 0;
      animation-name: showtext;
      animation-delay: 13s;
      animation-duration: 2s;
      animation-fill-mode: forwards;
      animation-iteration-count: 1;
    }
    .showtext-8{
      opacity: 0;
      animation-name: showtext;
      animation-delay: 15s;
      animation-duration: 2s;
      animation-fill-mode: forwards;
      animation-iteration-count: 1;
    }
    .showtext-9{
      opacity: 0;
      animation-name: showtext;
      animation-delay: 17s;
      animation-duration: 2s;
      animation-fill-mode: forwards;
      animation-iteration-count: 1;
    }
		@keyframes move{
			from{transform: rotateX(0deg) rotateY(0deg);}
			to{transform: rotateX(13deg) rotateY(720deg);}
		}
    @keyframes showtext {
      from{
        opacity: 0;
      }
      to{
        opacity:1;
      }
      
    }
    
</style>
