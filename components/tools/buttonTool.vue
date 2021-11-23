<template>
  <div
    class="buttonTool"
  >
    <van-button :class="type" v-on:click="sendEvent" :native-type="submitType">{{text}}</van-button>
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
    },
    isSubmitType:{
      type: Boolean,
      default: false
    }
  },
  methods: {
    sendEvent(){
      const event = this.eventType !== "" ? this.eventType : true;
      this.$emit("btnEvent",event);
    }
  },
  computed:{
    submitType(){
      const result = this.isSubmitType ? "submit" : "button";
      return result;
    }
  }

};
</script>

<style lang="scss">
</style>
