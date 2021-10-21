<template>
    <van-row class="popupBox" type="flex" justify="center">
        <van-col span="20">
            <van-image
                :src="require(`@/assets/img/ICON/${popupInit[popupEvent].icon}.svg`)"
                title="彈出圖示"
                class="popupIcon"
                fit="contain"
            />
        </van-col>
        <van-col span="20" class="popupTitle">{{popupInit[popupEvent].title}}</van-col>
        <van-col span="20" class="popupTips" v-show="isTips">
            {{popupInit[popupEvent].tips.text}}
            <nuxt-link :to="popupInit[popupEvent].tips.url">{{popupInit[popupEvent].tips.link}}</nuxt-link>
        </van-col>
        <van-col span="20" class="popupBtn"><ButtonTool :text="popupInit[popupEvent].btn" @btnEvent="sendEvent(popupInit[popupEvent].confirm)"/></van-col>
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
        popupEvent:{
            type: String,
            default:'success'
        }
    },
    data:()=>{
        return{
            popupInit:{
                success:{
                    icon:'success',
                    title:'通報成功',
                    confirm: 'AnnounceResult',
                    tips:{
                        url:'/',
                        link:'查看',
                        text:'2021/5/6 12:11 發布了通報，請立即'
                    },
                    btn:'確認'
                },
                error:{
                    icon:'error',
                    title:'通報失敗',
                    confirm: 'cancel',
                    tips:{
                        url:'/',
                        link:'',
                        text:'可以暫存文字請等網路連線狀況良好時，再重新通報一次'
                    },
                    btn:'確認'
                }
            }
        }
    },
    methods:{
        sendEvent(e){
            this.$emit("btnEvent",e)
        }
    },
    computed:{
        isTips(){
            const popupEvent = this.popupEvent;
            const tips = this.popupInit[popupEvent].tips;
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
    @include noto-sans-tc-30-medium;
}
.popupIcon{
    width: 64px;
    height: 64px;
}
</style>