<template>
    <van-row class="announceReceivedContent" type="flex" justify="center">
        <van-col span="24" class="announceReceivedList" type="flex" >
            <table class="table w-100">
                <thead>
                    <tr><th  v-for="( item , index ) in tableHeader" :key="index">{{item}}</th></tr>
                </thead>
                <tbody>
                    <tr v-for="(item, key) in receviedList" :key="key">
                        <td class="td-s">{{item.report_id}}</td>
                        <td class="td-m" v-show="tbData==='allList'">{{item.report_user}}</td>
                        <td class="td-m">{{statusSwitch(item.report_status)}}</td>
                        <td class="td-l">{{item.d}}</td>
                        <td class="td-m"><van-tag :class="tagStyle(item.report_process).type" class="tag">{{tagStyle(item.report_process).text}}</van-tag></td>
                        <td class="td-xl" @click="ToastEvent(item.report_note)">{{item.report_note}}</td>
                        <td class="td-xl">{{item.check_response}}</td>
                        <td class="td-s" @click="LocatePosition(item.switch_tpclid)">
                            <van-image
                                :src="require(`@/assets/img/ICON/favicon/position.svg`)"
                                title="定位位置"
                                class="positionIcon"
                                fit="contain"
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </van-col>
    </van-row>
</template>

<script>
import { mapState } from 'vuex';
import axios from 'axios'
export default {
    name:'announceReceivedContent',
    components: {
    },
    props:{
        announceEvent:{
            type: String,
            default:''
        },
        tbData:{
            type: String,
            default:''
        },
    },
    data:()=>{
        return{
            tableHeader1:[
                '編號','通報人員','設備狀態','通報時間','事件狀態','通報備註','通報回覆','定位'
            ],
            tableHeader2:[
                '編號','設備狀態','通報時間','事件狀態','通報備註','通報回覆','定位'
            ],
            receviedList:[
                // {id:'01',name:'王小明',resource:'行動端',time:'2021-5-16 12:11:22',event:'停電',status:'已發布',content:'派員處理中，現場無須處理，請於現場待命，等待支援1'},
                // {id:'02',name:'李小明',resource:'行動端',time:'2021-5-16 12:11:22',event:'停電',status:'已發布',content:'派員處理中，現場無須處理，請於現場待命，等待支援2'},
                // {id:'03',name:'--',resource:'外部程式',time:'2021-5-16 12:11:22',event:'設備異常',status:'已結案',content:'派員處理中，現場無須處理，請於現場待命，等待支援3'},
                // {id:'04',name:'王小明',resource:'行動端',time:'2021-5-16 12:11:22',event:'停電',status:'已發布',content:'派員處理中，現場無須處理，請於現場待命，等待支援1'},
                // {id:'05',name:'李小明',resource:'行動端',time:'2021-5-16 12:11:22',event:'停電',status:'已發布',content:'派員處理中，現場無須處理，請於現場待命，等待支援2'},
                // {id:'06',name:'--',resource:'外部程式',time:'2021-5-16 12:11:22',event:'設備異常',status:'已結案',content:'派員處理中，現場無須處理，請於現場待命，等待支援3'},
                // {id:'07',name:'王小明',resource:'行動端',time:'2021-5-16 12:11:22',event:'停電',status:'審核中',content:'派員處理中，現場無須處理，請於現場待命，等待支援1'},
                // {id:'08',name:'李小明',resource:'行動端',time:'2021-5-16 12:11:22',event:'停電',status:'已發布',content:'派員處理中，現場無須處理，請於現場待命，等待支援2'},
                // {id:'09',name:'--',resource:'外部程式',time:'2021-5-16 12:11:22',event:'設備異常',status:'已結案',content:'派員處理中，現場無須處理，請於現場待命，等待支援3'}
            ]
        }
    },
    mounted(){
        //Toast('提示内容');
        this.getData();
    },
    methods: {
        getData(){
            const user = sessionStorage.getItem('loginUser');
            this.receviedList = [];
            axios.get(`${this.apiurl}REST/FaultReport`).then(r=>{
                console.log(this.tbData)
                if(this.tbData === "myList"){
                    this.receviedList = r.data.filter(d => d.report_user === user );
                }else{
                    this.receviedList = r.data;
                };
                console.log(this.receviedList);
            }).catch(e=>{
                console.log(e)
            })
        },
        sendClose(){
            this.$emit("closeEvent",true);
        },
        ToastEvent(e){
            this.$toast(e);
        },
        LocatePosition(o){
            //locate1(o);
            const test = setLocate(o);
            locate1(test);
        },
        statusSwitch(e){
            let result = '';
            switch(e){
                case 1:
                    result = '瞬時故障';
                    break;
                case 2:
                    result = '永久性故障';
                    break;
                case 4:
                    result = '復電';
                    break;
                case 5:
                    result = '切開';
                    break;
                case 6:
                    result = '投入';
                    break;
                case 7:
                    result = '線路湧流';
                    break;
            }
            return result;
        },
        tagStyle(e){
            let result = '';
            switch(e){
                case 1:
                    result = {type:'tagWarning',text:'待審核'};
                    break;
                case 2:
                    result = {type:'tagPanding',text:'審核中'};
                    break;
                case 3:
                    result = {type:'tagSuccess',text:'已發布'};
                    break;
                case 4:
                    result = {type:'tagDefault ',text:'已結案'};
                    break;
                case 5:
                    result = {type:'tagFinish',text:'已解除'};
                    break;
            }
            return result;
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
        tableHeader(){
            const tbData = this.tbData;
            if(tbData === "myList"){
                return this.tableHeader2
            }else{
                return this.tableHeader1
            }
        },
        ...mapState([
            'apiurl'
        ]),
    },
    watch:{
        tbData(){
            this.getData();
        }
    }
};
</script>

<style lang="scss" scoped>
.announceReceivedContent{
    width: 100%;
    height: 30vh;
    justify-content: center;
    .announceReceivedList{
        height: 25vh;
        overflow-x: auto;
        .table{
            height: 10vh;
            overflow-y: auto;
            thead{
                position: sticky;
                top: -5px;
                background: #fff;
                z-index: 1000;
                color: #344059;
                line-height: 50px;
                th{
                    text-align: left;
                    border-bottom:3px solid #4C7DA2;
                    border-collapse: separate; 
                    border-spacing: 5px 5px;
                    min-width: 80px;
                    @include noto-sans-tc-20-medium;
                }
                th:first-child,th:last-child{
                    min-width: 40px
                }
            }
            tbody{
                color: #515A6D;
                td{
                    text-align: left;
                    @include noto-sans-tc-20-medium;
                    &.td-s{
                        min-width: 40px;
                    }
                    &.td-m{
                        min-width: 80px;
                    }
                    &.td-l{
                        min-width: 120px;
                        max-width: 160px;
                    }
                    &.td-xl{
                        min-width: 120px;
                        max-width: 260px;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                }
            }
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

.tag{
    border-radius: 3px;
}

.tagWarning{
    background-color: #FFF5E0;
    border: 1px solid #DEA74F;
    color: #DEA74F;
}
.tagSuccess{
    background-color: #E2FAE4;
    border: 1px solid #1DB65A;
    color: #1DB65A;
}
.tagPanding{
    background-color: #D6FCFA;
    border: 1px solid #36979D;
    color:#36979D;
}
.tagDefault{
    background-color: #EEEEEE;
    border: 1px solid #666666;
    color:#666666;
}
.tagFinish{
    background-color: #DAE9EF;
    border: 1px solid #4C7DA2;
    color: #4C7DA2;
}
.tagError{
    background-color: #FCE8E8;
    border: 1px solid #DC6969;
    color: #DC6969;
}
</style>