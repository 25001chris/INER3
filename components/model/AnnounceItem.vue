<template>
    <van-row class="announceItem" type="flex" justify="center">
        <van-col span="24" class="announceTitle" type="flex">
            <van-image
                :src="alert"
                title="標題"
                class="titleIcon"
                fit="contain"
            />
            <h4>通報事項</h4>
            <van-image
                :src="close"
                title="關閉"
                class="closeIcon"
                fit="contain"
                @click="sendClose"
            />
        </van-col>
        <van-col span="22" type="flex" justify="center">
            <component :is="componentInstance" @btnEvent="sendEvent" />
        </van-col>
    </van-row>
</template>

<script>
import ButtonTool from '~/components/tools/ButtonTool';
export default {
    name:'announceItem',
    components: {
        ButtonTool
    },
    props:{
        announceEvent:{
            type: String,
            default:''
        }
    },
    data:()=>{
        return{
            icon : require("@/assets/img/ICON/announce.svg"),
            close : require("@/assets/img/BUTTON/close.svg"),
            alert : require("@/assets/img/ICON/alert_s.svg"),
            text : '通報',
            inputValue : '',
            setAnnounceObj:{
                default:{
                    icon:'announce',
                    text:'通報位置',
                    input:{},
                    btn:[
                        {text:'圖號座標',type:'btn-primary-light',event:'coordinate'},
                        {text:'當下位置',type:'btn-primary-light',event:'location'},
                        {text:'手動點選',type:'btn-primary-dark',event:'select'},
                    ],
                },
                coordinate:{
                    icon:'location',
                    text:'請輸入台電圖號坐標',
                    input:{errorMessage:'無法找到該筆圖號，請重新輸入!',name:"location"},
                    btn:[
                        {text:'取消',type:'btn-primary-light',event:'cancel'},
                        {text:'確認',type:'btn-primary-dark',event:'confirm'},
                    ]
                },
                select:{
                    icon:'location',
                    text:'請點選圖面,點選後請按確認',
                    input:{},
                    btn:[
                        {text:'取消',type:'btn-primary-light',event:'cancel'},
                        {text:'確認',type:'btn-primary-dark',event:'confirm'},
                    ]
                }
            }
        }
    },
    methods: {
        sendEvent(e){
            this.$emit("btnEvent",e);
        },
        sendClose(){
            this.$emit("closeEvent",true);
        }
    },
    computed:{
        btnLength(){
            return 24 / this.announceObj.btn.length
        },
        inputLength(){
            return Object.keys(this.announceObj.input).length > 0 ? true : false;　
        },
        announceObj(){
            const event = this.announceEvent;
            return this.setAnnounceObj[event];
        },
        componentInstance () {
            //const searchType = this.type;
            const searchType = 'AnnounceResult';
            return () => import(`~/components/model/AnnounceItemContent/${searchType}`);
        }
    }
};
</script>

<style lang="scss" scoped>
.announceItem{
    width: 100%;
    height: 20vh;
    background-color: #FFF;
    position: absolute;
    bottom: 0;
    z-index: 1000;
}
.announceBtnBox{
    padding: 0 100px;
    .buttonTool{
        display: grid;
    }
}
.announceTitle{
    padding-left: 1em !important;
    display: flex;
    height: 80px;
    color: $main-Title-color;
    border-bottom: 1px solid #C1D5DC;
    @include noto-sans-tc-30-bold;
    .titleIcon{
        width: 36px;
    }
    h4{
        margin: 0;
        padding-left: 0.5em;
    }
}
.announceIcon{
    width: 123px;
    height: 123px;
}
.closeIcon{
    position: absolute;
    top: 5px;
    right: 5px; 
}
</style>