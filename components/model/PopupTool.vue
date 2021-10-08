<template>
    <van-row class="popupBox" type="flex" justify="center">
        <van-col span="20">
            <van-image
                :src="require(`@/assets/img/ICON/${popupObj.icon}.svg`)"
                title="彈出圖示"
                class="popupIcon"
                fit="contain"
            />
        </van-col>
        <van-col span="20" class="popupTitle">{{popupObj.title}}</van-col>
        <van-col span="20" class="popupTips" v-show="isTips">
            {{popupObj.tips.text}}
            <nuxt-link :to="popupObj.tips.url">{{popupObj.tips.link}}</nuxt-link>
        </van-col>
        <van-col span="20" class="popupBtn"><ButtonTool :text="popupObj.btn" @btnEvent="sendEvent"/></van-col>
    </van-row>
</template>

<script>
import ButtonTool from '~/components/tools/ButtonTool';
export default {
    name:'popupBox',
    components: {
        ButtonTool
    },
    props:{
        popupObj:{
            type: Object,
            default:()=>{
                return{
                    icon:'success',
                    title:'通報成功',
                    tips:{
                        url:'/',
                        link:'查看',
                        text:'2021/5/6 12:11 發布了通報，請立即'
                    },
                    btn:'確認'    
                };
            }
        }
    },
    data:()=>{
        return{
        }
    },
    methods:{
        sendEvent(e){
            this.$emit("btnEvent",e)
        }
    },
    computed:{
        isTips(){
            const tips = this.popupObj.tips;
            if(tips.text!==""){
                return true;
            }else{
                return false; 
            }
        }
    }
};
</script>

<style lang="scss">
.popupBox{
    width: 100%;
    background-color: #FFF;
    height: 300px;
    align-content: center;
}
.popupBtn{
    padding-top:20px;
    .buttonTool{
        display: grid;
    }
}
.popupTitle{
    color: $main-Title-color;
    line-height: 60px !important;
    @include noto-sans-tc-30-bold;
}
.popupIcon{
    width: 64px;
    height: 64px;
}
</style>