<template>
    <van-row class="announceItemContent" type="flex" justify="center">
        <van-col :span="listSpan" type="flex" justify="center">
            <van-col span="24" class="announceItemList" type="flex" >
                <van-col span="4" class="announceItemTitle">通報編號</van-col>
                <van-col span="20">50</van-col>
            </van-col>
            <van-col span="24" class="announceItemList" type="flex" >
                <van-col span="4" class="announceItemTitle">通報事項</van-col>
                <van-col span="20">設備壞掉</van-col>
            </van-col>
            <van-col span="24" class="announceItemList" type="flex" justify="center">
                <van-col span="4" class="announceItemTitle">通報備註</van-col>
                <van-col span="20">預設文字預設文字預設文字預設文字預設文字預設文字預設文字預設文字預設字預設文字預設文字預設文字預設文字預設文字預設文字預設文字預設文字預設文字預設文字預設文字預設文字預設文字預設文字預設文字預設文字預設文字預設文字預設文字預設文字預設文字預設文字預設文字預設文字預設文字預設文字150字測試</van-col>
            </van-col>
            <van-col span="24" class="announceItemList" type="flex" >
                <van-col span="4" class="announceItemTitle">通報時間</van-col>
                <van-col span="20">2021-1-1 12:00:00</van-col>
            </van-col>
        </van-col>
        <van-col :span="listSpan" class="announcePhotoList" type="flex">
            <van-uploader span="24" type="flex" v-model="fileList" :deletable="false" max-count="3"/>
        </van-col>
        <van-col span="24" class="announceBtnBox w-100" type="flex">
            <ButtonTool text="定位至畫面正中間" @btnEvent="sendEvent"/>
        </van-col>
    </van-row>
</template>

<script>
import { mapGetters } from 'vuex';
import ButtonTool from '~/components/tools/ButtonTool';
export default {
    name:'announceItemContent',
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
            show: false,
            index: 0,
            fileList : [
                { 
                    url: require(`@/assets/img/PHOTO/image1.png`),
                    imageFit: 'contain',
                    previewSize: '100%', 
                },
                {
                    url: require(`@/assets/img/PHOTO/image2.png`),
                    imageFit: 'contain',
                    previewSize: '100%', 
                },
                {
                    url: require(`@/assets/img/PHOTO/image3.png`),
                    imageFit: 'contain',
                    previewSize: '100%', 
                }
            ]
        }
    },
    methods: {
        sendEvent(e){
            this.$emit("btnEvent",e);
        },
        sendClose(){
            this.$emit("closeEvent",true);
        },
        onChange(index) {
            this.index = index;
        }
    },
    computed:{
        ...mapGetters([
            'ishorizontal'
        ]),
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
        listSpan(){
            const ishorizontal = this.ishorizontal;
            if(ishorizontal){
                return 10;
            }else{
                return 20;
            }
        }
    }
};
</script>

<style lang="scss">
.announceItemContent{
    width: 100%;
    height: 30vh;
    padding-top: 1em;
    justify-content: center;
    .announceItemList{
        text-align: left;
    }
    .announcePhotoList{
        text-align: center;
        align-items: center;
        align-content: center;
        justify-content: center;
        display: flex;
        .van-uploader__preview{
            width: 30%;
        }
        .van-uploader__wrapper{
            justify-content: center;
        }
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
    @include noto-sans-tc-30-bold;
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