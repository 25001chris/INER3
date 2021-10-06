<template>
  <div class="container">
    <MainTitle
      :titleText="title.text"
      :titleSize="title.size"
    />
    <InputArea
      :inputObj="inputObj"
    />
    <BtnObj
      btnText="主要按钮"
    />
    <!-- <van-button type="primary" size="large">主要按钮</van-button> -->
  </div>
</template>

<script>
  import Title from '~/components/Title.vue';
  import InputArea from '~/components/InputArea.vue';
  import BtnObj from '~/components/BtnObj.vue';
  export default {
    layout: 'login',
    // page component definitions
    components: {
      'MainTitle': Title,
      'InputArea': InputArea,
      'btnObj': BtnObj
    },
    data() {
      return {
        value1: '',
        value2: '123',
        title: {
          size:'large',
          text: '智慧故障通報地理資訊應用系統'
        },
        inputObj: {
          data:[
            {"inputIcon":"friends","placeholder":"輸入帳號"},
            {"inputIcon":"lock","placeholder":"輸入密碼"}
          ]
        }
      };
    },
  }
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  background-image: url("~/assets/img/Bg.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
</style>
