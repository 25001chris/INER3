<template>
    <van-row class="rightFloatBox" type="flex" justify="center" :class="{test:isRightListBox}">
        <van-col class="floatTopBox">
            <FloatButton icon="compass" @btnEvent="compassEvent"/>
            <FloatButton icon="list" @btnEvent="listEvent"/>
        </van-col>
        <van-col class="floatMidBox" :class="setPosition">
            <FloatButton icon="position" @btnEvent="positionEvent"/>
        </van-col>
        <van-col class="floatBottomBox" :class="setPosition">
            <FloatButton icon="plus" @btnEvent="plusEvent"/>
            <FloatButton icon="reduce" @btnEvent="reduceEvent"/>
            <FloatButton icon="home" @btnEvent="homeEvent"/>
        </van-col>
    </van-row>
</template>

<script>
import { mapState,mapGetters } from 'vuex';
import FloatButton from '~/components/tools/FloatButton';
export default {
    name:'rightFloatBox',
    components: {
        FloatButton
    },
    props:{
        isAnnounceBox:{
            type:Boolean,
            default:false
        },
        isRightListBox:{
            type:Boolean,
            default:false
        },
    },
    data:()=>{
        return{
        }
    },
    methods:{
        compassEvent(e){
            this.$emit("compassEvent",e);
        },
        listEvent(e){
            this.$emit("listEvent",e);
        },
        positionEvent(e){
            this.$emit("positionEvent",e);
        },
        plusEvent(e){
            this.$emit("plusEvent",e);
        },
        reduceEvent(e){
            this.$emit("reduceEvent",e);
        },
        homeEvent(e){
            this.$emit("homeEvent",e);
        }
    },
    computed:{
        ...mapState([
            'windowWidth'
        ]),
        ...mapGetters([
            'ishorizontal'
        ]),
        setPosition(){
            const ishorizontal = this.ishorizontal;
            let result = "";
            if(ishorizontal){
                result = 'horizontal'
            }else{
                result = ''
            }
            return result;
        }
    }
};
</script>

<style lang="scss">
.rightFloatBox{
    width: 84px;
    height: calc( 100vh - 60px );
    align-content: center;
    position: absolute;
    right: 15px;
    &.test{
        right:315px;
    }
    .floatTopBox{
        position: absolute;
        top: 1vh;
        .floatButton{
            margin-bottom: 1vh;
        }
    }
    .floatMidBox{
        position: absolute;
        bottom: 22vh;
        &.horizontal{
            bottom: 28vh;
        }
        &.onAnnounce{
            top: 42vh;
        }
        &.onAnnounceHorizontal{
            top: 25vh;
        }
    }
    .floatBottomBox{
        position: absolute;
        bottom: 2vh;
        &.horizontal{
            //top: 68vh;
            bottom: 2vh;
        }
        &.onAnnounce{
            top: 50vh;
        }
        &.onAnnounceHorizontal{
            top: 35vh;
        }
    }
}
</style>