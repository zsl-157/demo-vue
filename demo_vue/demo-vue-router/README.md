# demo-vue-router

> Vue router demo

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
<video class="vd1" controls="controls" autoplay="autoplay">  
    		 <source src="src/assets/Bye.mp4"  type="video/mp4" /> 
		</video>


<video class="vd1" controls="controls" autoplay="autoplay" style="display:none">  
    		 <source src="src/assets/Bye.mp4"  type="video/mp4" /> 
		</video>
    
    <div class="canvas-container">
      <canvas id="canvas" width="760" height="1500"></canvas>
    </div>

  mounted(){
    this.$nextTick(function(){
      let train = document.getElementById("train-container");
      console.log('train is',train)
      //let r = document.getElementById("red");
      //r.style.width = 600 + 'px';
      train.style.left = 600 + 'px'
      
    });
  },