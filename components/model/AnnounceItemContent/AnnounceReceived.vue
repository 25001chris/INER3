<template>
    <van-row class="announceReceivedContent" type="flex" justify="center">
        <van-col span="24" class="announceReceivedList" type="flex" >
            <table class="table w-100">
                <thead>
                    <tr><th  v-for="( item , index ) in tableHeader" :key="index">{{item}}</th></tr>
                </thead>
                <tbody>
                    <tr v-for="(item, key) in receviedList" :key="key">
                        <td class="td-s">{{item.id}}</td>
                        <td class="td-m">{{item.name}}</td>
                        <td class="td-m">{{item.resource}}</td>
                        <td class="td-l">{{item.time}}</td>
                        <td class="td-m">{{item.event}}</td>
                        <td class="td-m"><van-tag :class="tagStyle(item.status)">{{item.status}}</van-tag></td>
                        <td class="td-xl" @click="ToastEvent(item.content)">{{item.content}}</td>
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
export default {
    name:'announceReceivedContent',
    components: {
    },
    props:{
        announceEvent:{
            type: String,
            default:''
        }
    },
    data:()=>{
        return{
            tableHeader:[
                '編號','通報人員','來源','通報時間','通報事項','狀態','回覆','定位'
            ],
            receviedList:[
                {id:'01',name:'王小明',resource:'行動端',time:'2021-5-16 12:11:22',event:'停電',status:'已發布',content:'派員處理中，現場無須處理，請於現場待命，等待支援1'},
                {id:'02',name:'李小明',resource:'行動端',time:'2021-5-16 12:11:22',event:'停電',status:'已發布',content:'派員處理中，現場無須處理，請於現場待命，等待支援2'},
                {id:'03',name:'--',resource:'外部程式',time:'2021-5-16 12:11:22',event:'設備異常',status:'已結案',content:'派員處理中，現場無須處理，請於現場待命，等待支援3'},
                {id:'04',name:'王小明',resource:'行動端',time:'2021-5-16 12:11:22',event:'停電',status:'已發布',content:'派員處理中，現場無須處理，請於現場待命，等待支援1'},
                {id:'05',name:'李小明',resource:'行動端',time:'2021-5-16 12:11:22',event:'停電',status:'已發布',content:'派員處理中，現場無須處理，請於現場待命，等待支援2'},
                {id:'06',name:'--',resource:'外部程式',time:'2021-5-16 12:11:22',event:'設備異常',status:'已結案',content:'派員處理中，現場無須處理，請於現場待命，等待支援3'},
                {id:'07',name:'王小明',resource:'行動端',time:'2021-5-16 12:11:22',event:'停電',status:'審核中',content:'派員處理中，現場無須處理，請於現場待命，等待支援1'},
                {id:'08',name:'李小明',resource:'行動端',time:'2021-5-16 12:11:22',event:'停電',status:'已發布',content:'派員處理中，現場無須處理，請於現場待命，等待支援2'},
                {id:'09',name:'--',resource:'外部程式',time:'2021-5-16 12:11:22',event:'設備異常',status:'已結案',content:'派員處理中，現場無須處理，請於現場待命，等待支援3'}
            ]
        }
    },
    mounted(){
        //Toast('提示内容');
    },
    methods: {
        sendClose(){
            this.$emit("closeEvent",true);
        },
        ToastEvent(e){
            this.$toast(e);
        },
        tagStyle(e){
            let result = '';
            switch(e){
                case "已發布":
                    result = 'tagSuccess';
                    break;
                case "審核中":
                    result = 'tagPanding';
                    break;
                case "已結案":
                    result = 'tagDefault';
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
                        width: 40px;
                    }
                    &.td-m{
                        width: 80px;
                    }
                    &.td-l{
                        width: 180px;
                    }
                    &.td-xl{
                        min-width: 120px;
                        max-width: 180px;
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