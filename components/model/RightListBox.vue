<template>
    <van-row class="rightListBox" type="flex" justify="center" :class="{horizontal:ishorizontal}">
        <van-col type="flex" class="ListTop" span="24">
            <van-col span="4">
                <van-image
                    :src="require(`@/assets/img/ICON/listBlank.svg`)"
                    class="listMainIcon"
                    fit="contain"
                />
            </van-col>
            <van-col span="20">
                <h2 class="listMainTitle">圖層列表</h2>
            </van-col>
            <van-col span="4">
                <van-image
                    :src="close"
                    title="關閉"
                    class="closeIcon"
                    fit="contain"
                    @click="sendClose"
                />
            </van-col>
        </van-col>
        <van-col class="ListContent" span="20">
            <RightList @rightListEvent="rightListEvent" titleText="通報接獲清單" setList="allList"/>
            <RightList @rightListEvent="rightListEvent" titleText="我的通報清單" setList="myList"/>
        </van-col>
    </van-row>
</template>

<script>
import { mapState,mapGetters } from 'vuex';
import RightList from '~/components/tools/RightList';
export default {
    name:'rightListBox',
    components: {
        RightList
    },
    props:{
        isAnnounceBox:{
            type:Boolean,
            default:false
        }
    },
    data:()=>{
        return{
            close : require("@/assets/img/BUTTON/close.svg"),
        }
    },
    methods:{
        sendClose(){
            this.$emit("closeEvent",true);
        },
        rightListEvent(e){
            this.$emit("rightListEvent",e)
        }
    },
    computed:{
        ...mapState([
            'windowWidth'
        ]),
        ...mapGetters([
            'ishorizontal'
        ])
    }
};
</script>

<style lang="scss">
.rightListBox{
    width: 300px;
    height: calc( 100vh - 60px);
    position: absolute;
    top:0px;
    right:0px;
    background-color: white;
    align-content: flex-start;
    z-index: 999;
    .ListTop{
        border-bottom: 1px solid #C1D5DC;
        .listMainIcon{
            height: 4em;
            padding-left: 0.75em;
        }
        .listMainTitle{
            text-align: left;
            padding-left: 0.75em;
            margin: 0.75em 0;
        }
    }
}
</style>