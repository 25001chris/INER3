<template>
    <van-row class="announceItemContent" type="flex" justify="center" :class="{ishorizontal:ishorizontal}">
        <van-col :span="listSpan" type="flex" justify="center">
            <van-col span="24" class="announceItemList" type="flex" >
                <van-col span="4" class="announceItemTitle">通報編號</van-col>
                <van-col span="20" class="test">{{reportList.report_id}}</van-col>
            </van-col>
            <van-col span="24" class="announceItemList" type="flex" >
                <van-col span="4" class="announceItemTitle">通報事項</van-col>
                <van-col span="20">{{reportList.report_status}}</van-col>
            </van-col>
            <van-col span="24" class="announceItemList" type="flex" justify="center">
                <van-col span="4" class="announceItemTitle">通報備註</van-col>
                <van-col span="20" class="announceItemText" @click="ToastEvent(reportList.report_note)">{{reportList.report_note}}</van-col>
            </van-col>
            <van-col span="24" class="announceItemList" type="flex" >
                <van-col span="4" class="announceItemTitle">通報時間</van-col>
                <van-col span="20">{{reportList.d}}</van-col>
            </van-col>
        </van-col>
        <van-col :span="listSpan" class="announcePhotoList" type="flex" justify="left">
            <van-uploader span="24" type="flex" v-model="fileList" :deletable="false" result-type='text' :preview-options="previewOption" max-count="3"/>
            <!-- <van-image
                v-if="fileList[0].url!==''"
                width="30%"
                height="auto"
                :src="fileList[0].url"
            />
            <van-image
                v-if="fileList[1].url!==''"
                width="30%"
                height="auto"
                :src="fileList[1].url"

            />
            <van-image
                v-if="fileList[2].url!==''"
                width="30%"
                height="auto"
                :src="fileList[2].url"
            /> -->
        </van-col>
        <van-col span="24" class="announceBtnBox w-100" type="flex">
            <ButtonTool text="定位至畫面正中間" @btnEvent="sendEvent"/>
        </van-col>
    </van-row>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import ButtonTool from '~/components/tools/ButtonTool';
import axios from 'axios';
export default {
    name:'announceItemContent',
    components: {
        ButtonTool
    },
    props:{
        announceEvent:{
            type: String,
            default:''
        },
        reportList:{
            type:Object,
            default: () => {
                return {};
            }
        }
    },
    data:()=>{
        return{
            show: false,
            index: 0,
            fileList : [
                { 
                    url: '',
                    imageFit: 'contain',
                    previewSize: '100%'
                },
                {
                    url: '',
                    imageFit: 'contain',
                    previewSize: '100%'
                },
                {
                    url: '',
                    imageFit: 'contain',
                    previewSize: '100%'
                }
            ],
            previewOption:{
                closeable: true,
                showIndicators: true
            },
            resultText:'預設文字預設文字預設文字預設文字預設文字預設文字預設文字預設文字預設字預設文字預設文字預設文字預設文字預設文字預設文字預設文字預設文字預設文字預設文字預設文字預設文字預設文字預設文字預設文字預設文字預設文字預設文字預設文字預設文字預設文字預設文字預設文字預設文字預設文字預設文字150字測試'
        }
    },
    mounted(){
        this.fileListPhoto()
    },
    methods: {
        sendEvent(e){
            this.$emit("btnEvent",{status:true,type:'setLocate'});
        },
        sendClose(){
            this.$emit("closeEvent",true);
        },
        onChange(index) {
            this.index = index;
        },
        ToastEvent(e){
            this.$toast(e);
        },
        fileListPhoto(){
            const _id = this.reportList.report_id;
            axios.get(`${this.apiurl}REST/GetFaultReportPhoto?id=${_id}`).then(r=>{
              if(r.data[0].report_photo1){
                  this.fileList[0].url = r.data[0].report_photo1;
              }
              if(r.data[1].report_photo1){
                  this.fileList[1].url = r.data[1].report_photo1;
              }
              if(r.data[2].report_photo1){
                  this.fileList[2].url = r.data[2].report_photo1;
              }
            }).catch(e=>{
                console.log(e);
            })
        }
    },
    computed:{
        ...mapGetters([
            'ishorizontal'
        ]),
        ...mapState([
            'apiurl',
            'windowWidth',
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
    height: 20vh;
    justify-content: center;
    padding-top: 0.5em;
    &.ishorizontal{
        height: 50vh;
    }
    .announceItemList{
        text-align: left;
    }
    .announceItemTitle{
        color:#344059;
        display: inline-block;
        line-height: 27px !important;
        height: 27px !important;
        @include noto-sans-tc-20-medium
    }
    .announceItemText{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        display:-webkit-box;
        -webkit-line-clamp: 6; //行數
        -webkit-box-orient: vertical;
        white-space: normal;
        @include noto-sans-tc-20-medium
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
    padding: 0 100px 0.5em;
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
.test{
    @include noto-sans-tc-20-medium;
}
</style>