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
    },
    eventType: {
      type: String,
      default: ''
    }
  },
  methods: {
      sendEvent(){
          const event = this.eventType !== "" ? this.eventType : true;
          this.$emit("btnEvent",event);
      }
  }

};
</script>

<style lang="scss">
</style>
