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
            <van-col :span="setHeaderSpan.user" type="flex" justify="center" class="pd-t-half userName">
                <span>{{userName}}</span>
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
import axios from 'axios';
export default {
    name:'headerTool',
    components: {
        Button
    },
    data: ()=>{
        return{
            logo : require("/assets/img/logo.png"),
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
                result.title = 16;
                result.logo = 2;
                result.user = 2;
            }else{
                result.title = 13;
                result.logo = 4;
                result.user = 3;
            }
            return result;
        },
        userName(){
            return sessionStorage.getItem('loginUserName');
        },
        ...mapState([
            'windowWidth',
            'apiurl'
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
                axios.post(`${this.apiurl}/REST/Logout`).then(r=>{
                    console.log(r);
                    sessionStorage.setItem('loginStatus', 0);
                    this.$router.push({ path: '/login' });
                }).catch(e=>{
                    console.log(e)
                })
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
.userName{
    span{
        line-height: 50px;
    }
}
</style>