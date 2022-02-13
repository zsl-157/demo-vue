<template>
  <div class="error-container">
    <div style="height:3rem;width:10rem;overflow:hidden">
        {{msg}}
    </div>
  </div>
</template>

<script>
export default {
  props:['msg'],
}
</script>

<style lang="scss" scoped>
  .error-container{
    position: absolute;
    left: 30%;
    top: 10%;
    width:10rem;
    border: 1px solid black;

  }
</style>