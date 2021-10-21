<template>
    <div>
        <van-row type="flex">
            <van-col :span="setHeaderSpan.logo">
                <nuxt-link to="/">
                    <van-image
                        :src="logo"
                        title="智慧電力圖資演算地理資訊應用系統"
                        class="pd-t-min w-90 mainLogo"
                        fit="contain"
                    />
                </nuxt-link>
            </van-col>
            <van-col :span="setHeaderSpan.title" offset="2">
                <nuxt-link class="mainTitle" to="/">智慧電力圖資演算地理資訊應用系統</nuxt-link>
            </van-col>
            <van-col span="2" type="flex" justify="center" class="pd-t-half">
                <Button type="btn-primary-dark" @btnEvent="logout" text="登出"/>
            </van-col>
        </van-row>
    </div>
</template>

<script>
import Button from '~/components/tools/ButtonTool.vue';
import { mapState,mapGetters } from 'vuex';
export default {
    name:'headerTool',
    components: {
        Button
    },
    data: ()=>{
        return{
            logo : require("@/assets/img/logo.png"),
        }
    },
    mounted() {
        this.setWindowWidth();
    },
    computed:{
        setHeaderSpan(){
            const ishorizontal = this.ishorizontal;
            let result = {}
            if(ishorizontal){
                result.title = 18;
                result.logo = 2
            }else{
                result.title = 15;
                result.logo = 4
            }
            return result;
        },
        ...mapState([
            'windowWidth'
        ]),
        ...mapGetters([
            'ishorizontal'
        ])
    },
    methods: {
        setWindowWidth(){
            this.$store.commit('setWindowWidth', window.innerWidth)
            window.onresize = () => {
                this.$store.commit('setWindowWidth', window.innerWidth)
            }
        },
        setWindowHeight(){
            this.$store.commit('setWindowHeight', window.innerHeight)
            window.onresize = () => {
                this.$store.commit('setWindowHeight', window.innerHeight)
            }
        },
        isLogout(e){
            if(e){
                console.log('gogo')
            }
        },
        logout(e){
            if(e){
                this.$router.push({ path: '/login' });
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
    font-size: 1.6em;
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