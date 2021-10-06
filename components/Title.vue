<template>
  <div class="title" :class="titleSize">
    {{titleText}}
  </div>
</template>

<script>
export default {
  props: {
    titleSize:{
      type: String
    },
    titleText:{
      type: String
    }
  },
}
</script>

<style>
.title {
  font-family: Noto Sans;
  font-style: normal;
  font-weight: bold;
  text-align: center;
  letter-spacing: 0.045em;
  color: #344059;
  flex-wrap: wrap
}
.large {
  font-size: 1.5rem;
  line-height: 48px;
}
.mid {
  font-size: 1rem;
  line-height: 36px;
}
.small {
  font-size: 0.75rem;
  line-height: 24px;
}
.mini {
  font-size: 0.5rem;
  line-height: 18px;
}
</style>