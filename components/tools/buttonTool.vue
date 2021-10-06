<template>
  <div
    class="buttonTool"
  >
    <van-button :class="type" v-on:click="sendEvent">{{text}}</van-button>
  </div>
</template>

<script>

export default {
  name:'buttonTool',
  props: {
    type: {
      type: String,
      default: 'btn-primary-dark'
    },
    text: {
      type: String,
      default: '按鈕'
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
</style>
