<template>
  <div
    class="floatButton" @mousedown="sendEvent1" @mouseup="sendEvent2" @touchstart="test1" @touchend="test2"
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
      type:{
          typeof:String,
          default:''
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
      sendEvent1(e){
          this.$emit("btnEvent",{type:this.type,action:e});
      },
      sendEvent2(e){
          this.$emit("btnEvent",{type:'zoomStop',action:e});
      },
      test1(e){
          this.$emit("testEvent",{type:this.type,action:e});
      },
      test2(e){
          this.$emit("testEvent",{type:'zoomStop',action:e});
      }
  }

};
</script>

<style lang="scss">
.floatButton{
  width: 65px;
  height: 64px;
}
</style>
 