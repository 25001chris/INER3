<template>
  <van-row class="container" type="flex">
    <MainTitle
      :titleText="title.text"
      :titleSize="title.size"
    />
    <van-form @submit="onSubmit">
      <van-col span="24" type="flex" justify="center">
        <van-cell-group class="inputArea">
          <van-icon :name="require(`@/assets/img/ICON/favicon/user.svg`)" size="20" />
          <van-field
              v-model="user"
              name="user"
              type="text"
              placeholder="輸入帳號"
              class="inputBox"
              :rules="[{ required: true, message: '請輸入帳號' }]"
          />
        </van-cell-group>
        <van-cell-group class="inputArea">
          <van-icon :name="require(`@/assets/img/ICON/favicon/lock.svg`)" size="20" />
          <van-field
              v-model="password"
              name="password"
              type="password"
              placeholder="輸入密碼"
              class="inputBox"
              :rules="[{ required: true, message: '請輸入密碼' }]"
          />
          <!-- <van-password-input
            :value="password"
            :focused="showKeyboard"
            @focus="showKeyboard = true"
            class="inputBox"
            error-info=""
          />
          <van-number-keyboard
            v-model="password"
            :show="showKeyboard"
            @blur="showKeyboard = false"
          /> -->
        </van-cell-group>
      </van-col>
      <van-col span="24" type="flex">
        <ButtonTool text="登入" class="gridBox"/>
        <van-checkbox v-model="checked" shape="square" type="flex" class="rememberMe">記住我</van-checkbox>
      </van-col>
    </van-form>
  </van-row>

</template>

<script>
  import Title from '~/components/Title.vue';
  import InputArea from '~/components/InputArea.vue';
  import ButtonTool from '~/components/tools/ButtonTool.vue';
  export default {
    layout: 'login',
    // page component definitions
    components: {
      'MainTitle': Title,
      'InputArea': InputArea,
      ButtonTool
    },
    data() {
      return {
        title: {
          size:'large',
          text: '智慧故障通報地理資訊應用系統'
        },
        inputObj: {
          account:{type:"user",inputIcon:"user",placeholder:"輸入帳號"},
          password:{type:"password",inputIcon:"lock",placeholder:"輸入密碼"}
        },
        checked: true,
        user:'',
        password:'',
        showKeyboard: true,
      };
    },
    middleware:'routerAuth',
    mounted(){},
    methods:{
      onSubmit(values) {
        sessionStorage.setItem('loginStatus', 1);
        this.$router.push({ path: '/test/' });
        // const data = `account=${this.account}&password=${this.password}&captcha=${this.captcha}`;
        // loginReq(data).then((r) => {
        //   if (r.data[0].status) {
        //     sessionStorage.setItem('loginStatus', r.data[0].status);
        //     this.$router.push('/');
        //   } else {
        //     console.log('驗證碼錯誤');
        //   }
        // }).catch((e) => {
        //   console.log(e);
        //   this.loginErrorTitle = '登入錯誤';
        //   this.loginErrorText = '請確認帳號密碼是否正確';
        //   this.loginError = true;
        // });
      },
    }
  }
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  max-width: 450px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
}
.rememberMe{
  justify-content: end;
  padding: 1em 0;
}
.inputArea{
    flex-direction: column;
    width: 100%;
    position: relative;
    .van-icon{
        position: absolute;
        top: 23px;
        left: 0.75em;
        z-index: 100;
    }
    .van-field__body{
        padding-left: 3em;
    }
    .van-cell{
      padding: 10px 0;
    }
}
</style>
