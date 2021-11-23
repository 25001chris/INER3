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
                        <td class="td-m">{{item.report_user}}</td>
                        <td class="td-l">{{item.d}}</td>
                        <td class="td-m">{{item.report_process}}</td>
                        <td class="td-m"><van-tag :class="tagStyle(item.report_status).type">{{tagStyle(item.report_status).text}}</van-tag></td>
                        <td class="td-xl" @click="ToastEvent(item.report_note)">{{item.report_note}}</td>
                        <td class="td-s">
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
    async asyncData() {
      //const data = 'UserID=ineradmin&Password=inertest';
      //let aaa = await axios.get(`https://demo.supergeotek.com/ineradms_Integration/REST/FaultReport`);
      // let bbb = await axios.get(`http://192.168.1.103/INER3/%E7%A3%9ANew/LineData/metadata.json`)
      //return { receviedList1 : aaa }
    //   axios.get(`https://demo.supergeotek.com/ineradms_Integration/REST/FaultReport`).then(r=>{
    //     console.log(r);
    //     this
    //   }).catch(e=>{
    //     console.log(e)
    //   })
    },
    data:()=>{
        return{
            receviedList1:[],
            tableHeader:[
                '編號','通報人員','通報時間','通報事項','狀態','回覆','定位'
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
            axios.get(`https://demo.supergeotek.com/ineradms_Integration/REST/FaultReport`).then(r=>{
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
        source(e){
            let result = '';
            switch(e){
                case 1:
                    result = {type:'tagSuccess',text:'待審核'};
                    break;
                case 2:
                    result = {type:'tagPanding',text:'審核中'};
                    break;
                case 3:
                    result = {type:'tagSuccess',text:'已發布'};
                    break;
                case 4:
                    result = {type:'tagPanding',text:'已結案'};
                    break;
                case 5:
                    result = {type:'tagPanding',text:'已解除'};
                    break;
            }
            return result;
        },
        tagStyle(e){
            let result = '';
            switch(e){
                case 1:
                    result = {type:'tagSuccess',text:'待審核'};
                    break;
                case 2:
                    result = {type:'tagPanding',text:'審核中'};
                    break;
                case 3:
                    result = {type:'tagSuccess',text:'已發布'};
                    break;
                case 4:
                    result = {type:'tagPanding',text:'已結案'};
                    break;
                case 5:
                    result = {type:'tagPanding',text:'已解除'};
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
</style>