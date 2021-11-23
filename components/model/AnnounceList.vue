<template>
    <van-row class="announceList" type="flex" justify="center">
        <van-col span="24" type="flex" class="announceTitle">通報填寫</van-col>
        <van-col span="20">
            <van-form @submit="onSubmit">
                <van-field
                    v-model="username"
                    name="username"
                    label="通報時間"
                    placeholder="預設文字"
                    :readonly="isReadonly"
                    :class="{isReadonly:isReadonly}"
                />
                <van-field
                    v-model="location"
                    name="location"
                    label="通報地點"
                    placeholder="前一步驟選定之坐標"
                    :readonly="isReadonly"
                    :class="{isReadonly:isReadonly}"
                />
                <van-field
                    v-model="report_loopid"
                    name="report_loopid"
                    label="迴路別"
                    :required="true"
                    placeholder="輸入迴路別"
                    :error-message="errorMsg.loop"
                />
                <van-field
                    readonly
                    clickable
                    name="status"
                    :value="status"
                    label="設備狀態"
                    placeholder="點擊選項"
                    :required="true"
                    :error-message="errorMsg.status"
                    @click="setPicker1({data:'columns1',event:'onConfirm1'})"
                />
                <van-popup v-model="showPicker1" position="bottom">
                    <van-picker
                        show-toolbar
                        :columns="this.pickerData"
                        @confirm="this.pickerEvent"
                        @cancel="showPicker1 = false"
                        confirm-button-text = "確認"
                    />
                </van-popup>
                <van-field
                    v-model="report_feederid"
                    name="report_feederid"
                    label="饋線編號"
                    placeholder="輸入文字"
                />
                <van-field
                    readonly
                    clickable
                    name="camera"
                    :value="camera"
                    label="相別"
                    placeholder="預設選項"
                    @click="setPicker2({data:'columns2',event:'onConfirm2'})"
                />
                <van-popup v-model="showPicker2" position="bottom">
                    <van-picker
                        show-toolbar
                        :columns="this.pickerData"
                        @confirm="this.pickerEvent"
                        @cancel="showPicker2 = false"
                        confirm-button-text = "確認"
                    />
                </van-popup>
                <van-field
                    v-model="report_i"
                    name="report_i"
                    label="電流值"
                    placeholder="輸入數值"
                />
                <van-field
                    v-model="report_vsc"
                    name="report_vsc"
                    label="電壓值"
                    placeholder="輸入數值"
                />
                <van-field
                    v-model="report_vb"
                    name="report_vb"
                    label="電池電壓"
                    placeholder="輸入數值"
                />
                <van-field
                    v-model="report_temp"
                    name="report_temp"
                    label="溫度"
                    placeholder="輸入數值"
                />
                <van-field
                    v-model="report_rssi"
                    name="report_rssi"
                    label="信號強度"
                    placeholder="輸入數值"
                />
                <van-field
                    v-model="report_note"
                    name="report_note"
                    label="通報備註"
                    placeholder="輸入文字"
                    type="textarea"
                />
                <van-field name="uploader" label="現場照片">
                    <template type="flex" #input>
                        <van-col span="24" :class="{ishorizontal:ishorizontal}"><van-uploader v-model="uploader" offset="2" max-count="3" capture="camera" :preview-size="photoWidth"/></van-col>
                    </template>
                </van-field>
                <van-row class="announceBtnBox" type="flex" style="margin: 16px;">
                    <van-col span="10" offset="2"><ButtonTool type="btn-primary-light" text="取消" :isSubmitType="false" @btnEvent="sendClose"/></van-col>
                    <van-col span="10" offset="2"><ButtonTool type="btn-primary-dark" text="通報" :isSubmitType="true" /></van-col>
                </van-row>
            </van-form>
        </van-col>
    </van-row>

</template>

<script>
import { mapGetters } from 'vuex';
import ButtonTool from '~/components/tools/ButtonTool';

export default {
    name:'announceList',
    components: {
        ButtonTool
    },
    props:{
        location: {
            type: String,
            default: ''
        },
        errorMsg:{
            type:Object,
            default: () => {
                return {
                    loop: '',
                    status: ''
                };
            }
        },
        sendSubmit: {
            type: Boolean,
            default: false
        },
    },
    data:()=>{
        return{
            username:'',
            status:'',
            camera:'',
            report_loopid:'',
            report_feederid:'',
            report_i:'',
            report_vsc:'',
            report_vb:'',
            report_temp:'',
            report_rssi:'',
            report_note:'',
            columns1: ['正常', '瞬時故障', '永久性故障', '復電', '線路湧流', '切開', '投入'],
            columns2: ['空', 'A', 'B', 'C'],
            showPicker1: false,
            showPicker2: false,
            pickerData:'',
            pickerEvent:'',
            uploader:[],
            isReadonly: true
        }
    },
    methods: {
        setPicker1(e){
            console.log(e);
            this.showPicker1 = true;
            this.pickerData = this[e.data];
            this.pickerEvent = this[e.event];
            console.log(this.pickerEvent);
        },
        setPicker2(e){
            console.log(e);
            this.showPicker2 = true;
            this.pickerData = this[e.data];
            this.pickerEvent = this[e.event];
            console.log(this.pickerEvent);
        },
        onConfirm1(value) {
            this.status = value;
            this.showPicker1 = false;
        },
        onConfirm2(value) {
            this.camera = value;
            this.showPicker2 = false;
        },
        onSubmit(values) {
            this.$store.commit('saveAnnounceList', values);
            this.$emit("submit",values);
            //this.clearData();
        },
        sendClose(e){
            if(e){
                this.$emit("sendEvent",'close');
            }
        },
        sendData(e){
            if(e){
                //this.$emit("sendEvent",'send');
            }
        },
        clearData(){
            this.username=''
            this.status='',
            this.report_loopid = ''
            this.camera='',
            this.report_feederid='',
            this.report_i='',
            this.report_vsc='',
            this.report_vb='',
            this.report_temp='',
            this.report_rssi='',
            this.report_note='',
            this.uploader=[]
        }
    },
    computed:{
        ...mapGetters([
            'ishorizontal'
        ]),
        photoWidth(){
            if(this.ishorizontal){
                return '33vh'
            }else{
                return '13.667vh'
            }
        }
    },
    watch:{
        sendSubmit:function(n){
            console.log(n)
            if(n){
                this.clearData();
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.announceList{
    width: 100%;
    height: calc( 100vh - 60px );
    background-color: #FFF;
    position: absolute;
    top: 0px;
    z-index: 1000;
    @include noto-sans-tc-20-medium;
}
.announceBtnBox{
    padding: 0 100px;
    .buttonTool{
        display: grid;
    }
    .van-field__control{
        @include noto-sans-tc-20-medium;
    }
}
.announceTitle{
    color: $main-Title-color;
    line-height: 60px !important;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    @include noto-sans-tc-30-medium;
}
</style>