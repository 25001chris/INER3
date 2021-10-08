<template>
  <div
    class="floatButton" @click="sendEvent"
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
      sendEvent(){
          this.$emit("btnEvent",true);
      }
  }

};
</script>

<style lang="scss">
.floatButton{
  width: 84px;
  height: 82px;
}
</style>
 