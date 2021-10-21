<template>
    <van-row class="announceBox" :class="announceEvent" type="flex" justify="center">
        <van-image
            :src="close"
            title="關閉"
            class="closeIcon"
            fit="contain"
            @click="sendClose"
        />
        <van-image
            :src="require(`@/assets/img/ICON/${announceObj.icon}.svg`)"
            title="ICON"
            class="announceIcon"
            fit="contain"
        />
        <van-col span="24" class="announceTitle">{{announceObj.text}}</van-col>
        <van-col span="20" type="flex" justify="center" v-show="inputLength">
            <van-cell-group>
                <van-field :border="false" required v-model="inputValue" placeholder="请输入用户名" :error-message="errorMessage"/>
            </van-cell-group>
        </van-col>
        <van-row span="24" class="announceBtnBox w-100" type="flex" gutter="10">
            <van-col v-for="(item, index) in announceObj.btn" :span="btnLength" :key="index">
                <ButtonTool :type="item.type" :text="item.text" :eventType="item.event" @btnEvent="sendEvent"/>
            </van-col>
        </van-row>
    </van-row>
</template>

<script>
import ButtonTool from '~/components/tools/ButtonTool';
export default {
    name:'announceBox',
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
            text : '通報',
            inputValue : '',
            errorMessage : "",
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
                    icon:'select',
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
            if(this.announceEvent === "coordinate" && e === "confirm"){
                if(this.inputValue === ""){
                    this.errorMessage = this.announceObj.input.errorMessage;
                }else{
                    this.$emit("btnEvent",e);
                }
            }else{
                this.$emit("btnEvent",e);
            }
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
        }
    }
};
</script>

<style lang="scss">
.announceBox{
    width: 100%;
    background-color: #FFF;
    position: absolute;
    bottom: 0;
    z-index: 1000;
    align-content: center;
    &.coordinate{
        min-height: 320px;
    }
}
.announceBtnBox{
    padding: 0 100px;
    .buttonTool{
        display: grid;
    }
}
.announceTitle{
    color: $main-Title-color;
    line-height: 60px !important;
    @include noto-sans-tc-30-medium;
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