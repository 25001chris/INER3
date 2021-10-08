<template>
    <van-row class="rightListBox" type="flex" justify="center">
        <van-col class="ListTop" span="20">
        </van-col>
        <van-col class="ListContent" span="20">
            <RightList/>
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
        }
    },
    methods:{
        sendEvent(e){
            this.$emit("btnEvent",e)
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
    height: calc( 100vh - 60px );
    position: absolute;
    top:0px;
    right:0px;
    background-color: white;
}
</style>