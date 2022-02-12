<template>
  <div>
      <video class="vd1" controls="controls" autoplay="autoplay" style="display:none">  
    		 <source src="src/assets/Bye.mp4"  type="video/mp4" /> 
		</video>
    
    <div class="canvas-container">
      <canvas id="canvas" width="760" height="1500"></canvas>
    </div>
  
  </div>
</template>

<script>
  export default {
     methods:{
    hideCanvasShowSub(index){
      let c = document.getElementsByClassName("canvas-container")
      console.log("c is",c)
      

    }
  },
  mounted(){
   this.$nextTick(function(){
      /** @type {HTMLCanvasElement} */
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext('2d');
    ctx.fillStyle = '#ecd9c8'
    ctx.fillRect(0,0,1500,1500)
     ctx.fillStyle = '#509e91'
    ctx.moveTo(30,10);
    ctx.lineTo(730,10);
    ctx.strokeStyle = '#7daea8';
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.moveTo(730,10);
    ctx.lineTo(730,25)
    ctx.stroke();
    console.log
    ctx.lineTo(755,25)
    ctx.stroke()
    ctx.lineTo(755,10);
    ctx.stroke()
    ctx.lineTo(742,10)
    ctx.stroke()
    ctx.lineTo(742,36)
    ctx.stroke()
    ctx.lineTo(755,36)
    ctx.stroke()
    ctx.lineTo(755,1470)
    ctx.stroke()
    console.log(canvas);
    ctx.lineTo(742,1470);
    ctx.stroke()
    ctx.lineTo(742,1496)
    ctx.stroke()
    ctx.lineTo(755,1496)
    ctx.stroke();
    ctx.lineTo(755,1481)
    ctx.stroke()
    ctx.lineTo(730,1481)
    ctx.stroke()
    ctx.lineTo(730,1496)
    ctx.stroke()
    console.log(canvas);
    ctx.lineTo(30,1496)
    ctx.stroke();
    ctx.lineTo(30,1481)
    ctx.stroke()
    ctx.lineTo(4,1481)
    ctx.stroke()
    ctx.lineTo(4,1496)
    ctx.stroke()
    ctx.lineTo(18,1496)
    ctx.stroke()
    ctx.lineTo(18,1471)
    ctx.stroke()
    ctx.lineTo(4,1471)
    ctx.stroke()
    console.log(canvas)
    ctx.lineTo(4,36)
    ctx.stroke()
    ctx.lineTo(17,36)
    ctx.stroke();
    ctx.lineTo(17,10)
    ctx.stroke()
    ctx.lineTo(4,10)
    ctx.stroke();
    ctx.lineTo(4,25)
    ctx.stroke()
    ctx.lineTo(30,25)
    ctx.stroke()
    ctx.lineTo(30,10)
    ctx.stroke()
    let lintheight = '25px';
    let indient = 70;
    ctx.font="30px Georgia";
    ctx.fillText("你好的说法解决看到的是房价开始打发了会宏观环",indient,50)
    ctx.fillText("你好的说法解决看到的是房价开始打发了会宏观环的是",5,90)
    ctx.fillText("你好的说法解决看到的是房价开始打发了会宏观环方法",5,130)
    ctx.fillText("你好的说法解决看到的是房价开始打发了会宏观环试试",5,170)
    ctx.fillText("你好的说法解决看到的是房价开始打发了会宏观价格环",5,210)
    ctx.fillText("你好的说法解决看到的是房价开始打发了会宏观辅导环",5,250)

   });
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
  transition: all 1s;
  transition:display 3s;
  -webkit-transition: height 1s;
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
