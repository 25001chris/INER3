<template>
  <div
    class="floatButton" @click="sendEvent" @touchstart="test1" @touchend="test2"
  >
    <van-image
        :src="require(`@/assets/img/ICON/${icon}.svg`)"
        title=""
        class="floatIcon"
        fit="contain"
        :style="{top:position+'vh'}"
    />
  </div>
</template>

<script>

export default {
  name:'floatButton',
  props:{
      icon:{
          typeof:String,
          default:'list'
      },
      position:{
          typeof:Number,
          default:0
      }
  },
  data:()=>{
      return{
          
      }
  },
  methods: {
      sendEvent(e){
          console.log(e);
          this.$emit("btnEvent",e);
      },
      test1(e){
          this.$toast(e);
          this.$emit("testEvent",e);
          //this.$emit("testEvent",'zoomIn');
      },
      // test2(e){
      //     console.log('test2')
      //     console.log(e)
      //     this.$emit("testEvent",'zoomStop');
      // }
  }

};
</script>

<style lang="scss">
.floatButton{
  width: 65px;
  height: 64px;
}
</style>
 