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
                    readonly
                    clickable
                    name="status"
                    :value="status"
                    label="設備狀態"
                    placeholder="點擊選項"
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
                    v-model="number"
                    name="number"
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
                    v-model="value1"
                    name="value1"
                    label="電流值"
                    placeholder="輸入數值"
                />
                <van-field
                    v-model="value2"
                    name="value2"
                    label="電壓值"
                    placeholder="輸入數值"
                />
                <van-field
                    v-model="value3"
                    name="value3"
                    label="電池電壓"
                    placeholder="輸入數值"
                />
                <van-field
                    v-model="value4"
                    name="value4"
                    label="溫度"
                    placeholder="輸入數值"
                />
                <van-field
                    v-model="value5"
                    name="value5"
                    label="信號強度"
                    placeholder="輸入數值"
                />
                <van-field
                    v-model="value6"
                    name="value6"
                    label="通報備註"
                    placeholder="輸入文字"
                    type="textarea"
                />
                <van-field name="uploader" label="文件上传">
                    <template type="flex" #input>
                        <van-col span="24" :class="{ishorizontal:ishorizontal}"><van-uploader v-model="uploader" offset="2" max-count="3" capture="camera" :preview-size="photoWidth"/></van-col>
                    </template>
                </van-field>
                <van-row class="announceBtnBox" type="flex" style="margin: 16px;">
                    <van-col span="10" offset="2"><ButtonTool type="btn-primary-light" text="取消" @btnEvent="sendClose"/></van-col>
                    <van-col span="10" offset="2"><ButtonTool type="btn-primary-dark" text="通報" @btnEvent="sendData"/></van-col>
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
    data:()=>{
        return{
            username:'',
            location:'',
            status:'',
            camera:'',
            number:'',
            value1:'',
            value2:'',
            value3:'',
            value4:'',
            value5:'',
            value6:'',
            columns1: ['選項一', '選項二', '選項三', '選項四', '選項五', '選項六'],
            columns2: ['相別一', '相別二', '相別三', '相別四', '相別五', '相別六'],
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
            this.showPicker1 = true;
            this.pickerData = this[e.data];
            this.pickerEvent = this[e.event];
        },
        setPicker2(e){
            this.showPicker2 = true;
            this.pickerData = this[e.data];
            this.pickerEvent = this[e.event];
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
            this.$emit("submit",values);
        },
        sendClose(e){
            if(e){
                this.$emit("sendEvent",'close');
            }
        },
        sendData(e){
            if(e){
                this.$emit("sendEvent",'send');
            }
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