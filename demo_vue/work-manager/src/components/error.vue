<template>
  <div class="error-container">
    <div>
        <section style="position:absolute;left:0rem;display:flex;flex-direction:row;">
            <div>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="2rem">
                    <circle cx="12" cy="12" r="10" stroke="#fed14b"
                    stroke-width="1.5" fill="#fed14b" />
                    <line  /><line x1="12" y1="3.4" x2="12" y2="14"
                    style="stroke:white;stroke-width:2.2"/>
                    <circle cx="12" cy="18" r="2.2" stroke="#fed14b"
                    fill="white" />
                  </svg>
            </div>
            <div style="margin-left:-0.4rem">提示</div>
        </section>
        <section class="error-item">
            {{msg}}
        </section>
        <section class="vertify-btn-section">
            <button class="vertify-btn">确定</button>
        </section>
    </div>
  </div>
</template>

<script>
export default {
  props:['msg'],
  data(){
    return {
      errorSvg:'',

    }
  }
}
</script>

<style lang="scss" scoped>  
   @import '../style/common.scss';

  .error-container{
    color:#747490;
    position: absolute;
    left: 17%;
    top: 10%;
    width:15rem;
    min-height: 8rem;
    max-height: 8rem;
    border-radius: 5px;
    box-shadow: 2px 2px 2px 0 red;
    -webkit-box-shadow: #4e6ef2 0px 0px 3px;
    -moz-box-shadow: black 0px 0px 5px;
    background: white;
    overflow:hidden;

  }
  .error-item{
    @include center;
    overflow:hidden;
    position: relative;
    top: 1.8rem;
    width: 75%;
    max-height: 4rem;

  }
  .vertify-btn-section{
    position: relative;
    top: 2.6rem;
    width: 2.6rem;
    @include center;
  }
  .vertify-btn{
    height: 1.8rem;
    width: 2.8rem;
    text-align: center;
    @include bg;
    border-radius: .2rem;
    opacity: .8;
    outline: none;
    color:white;
  }
</style>