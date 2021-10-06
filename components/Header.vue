<template>
    <van-row type="flex">
        <van-col :span="setHeaderSpan.logo">
            <nuxt-link to="/">
                <van-image
                    :src=logo
                    title="智慧電力圖資演算地理資訊應用系統"
                    class="pd-t-min w-90 mainLogo"
                    fit="contain"
                />
            </nuxt-link>
        </van-col>
        <van-col :span="setHeaderSpan.title" offset="2">
            <nuxt-link class="mainTitle" to="/">智慧電力圖資演算地理資訊應用系統</nuxt-link>
        </van-col>
        <van-col span="2" justify="end" class="pd-t-half">
            <!-- <ButtonTool text="登出1" type="btn-primary-dark" @btnEvent="isLogout"/> -->
            <van-button class="btn-primary-dark">登出</van-button>
        </van-col>
    </van-row>
</template>

<script>
//import ButtonTool from '~/components/tools/ButtonTool.vue';
export default {
    components: {
        //ButtonTool
    },
    data: ()=>{
        return{
            logo : require("@/assets/img/logo.svg"),
            windowWidth: 0
        }
    },
    mounted() {
        const self = this;
        this.setWindowWidth(self);
    },
    computed:{
        setHeaderSpan(){
            const windowWidth = this.windowWidth;
            let result = {}
            if(windowWidth === 1366){
                result.title = 18;
                result.logo = 2
            }else{
                result.title = 17;
                result.logo = 3
            }
            return result;
        }
    },
    methods: {
        setWindowWidth(self){
            self.windowWidth = window.innerWidth;
            window.onresize = () => {
                self.windowWidth = window.innerWidth;
            }
        },
        isLogout(e){
            if(e){
                console.log('gogo')
            }
        }
    },
    watch:{
    }
}
</script>

<style lang="scss" scoped>
.mainTitle{
    font-family: Noto Sans TC;
    font-style: normal;
    font-weight: 700;
    font-size: 2em;
    line-height: 60px;
    height:60px;
    display: flex;
    align-items: center;
    /* HeaderBlack */
    color: $main-Title-color;
}
.mainLogo{
    width: 200px;
}
</style>