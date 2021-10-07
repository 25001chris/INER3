<template>
  <div
    class="announceButton" @click="sendEvent"
  />
</template>

<script>

export default {
  name:'announceButton',
  data:()=>{
      return{
          text:'通報'
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
.announceButton{
  width: 123px;
  height: 123px;
  position: absolute;
  bottom:10px;
  background-image: url("~/assets/img/BUTTON/announceDefault.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  &:active,&:focus{
      background-image: url("~/assets/img/BUTTON/announceActive.svg");
  }
}
</style>
 