<template>
    <van-row class="rightFloatBox" type="flex" justify="center" :class="{isRightListBox:isRightListBox,isAnnounceBox:isAnnounceBox,ishorizontal:ishorizontal,isAnnounceItem:isAnnounceItem}">
        <van-col class="floatTopBox">
            <FloatButton icon="compass" @btnEvent="compassEvent"/>
            <FloatButton icon="list" @btnEvent="listEvent"/>
        </van-col>
        <van-col class="floatMidBox" :class="setPosition">
            <FloatButton icon="position" @btnEvent="positionEvent"/>
        </van-col>
        <van-col class="floatBottomBox" :class="setPosition">
            <FloatButton icon="plus" type="zoomIn" @btnEvent="plusEvent" @testEvent="testEvent"/>
            <FloatButton icon="reduce" type="zoomOut" @btnEvent="reduceEvent" @testEvent="testEvent"/>
            <FloatButton icon="home" type="home" @btnEvent="homeEvent"/>
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
        isAnnounceItem:{
            type:Boolean,
            default:false
        }
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
        },
        testEvent(e){
            this.$emit("testEvent",e);
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
    top:0;
    &.isRightListBox{
        right:315px;
    }
    &.isAnnounceBox{
        height: calc( 75vh - 60px );
        &.ishorizontal{
            height: calc( 66vh - 60px );
            .floatMidBox{
                top: calc( 100vh - 620px );
            }
            .floatBottomBox{
                top: calc( 100vh - 600px );
            }
        }
        .floatMidBox{
            top: calc( 100vh - 610px );
        }
        .floatBottomBox{
            top: calc( 100vh - 540px );
        }
    }
    &.isAnnounceItem{
        height: calc( 66vh - 60px );
        &.ishorizontal{
            .floatMidBox{
                top: calc( 100vh - 610px );
            }
            .floatBottomBox{
                top: calc( 100vh - 550px );
            }
        }
        .floatMidBox{
            top: calc( 100vh - 610px );
        }
        .floatBottomBox{
            top: calc( 100vh - 540px );
        }
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
        top: calc( 100vh - 450px );
        &.horizontal{
            top: calc( 100vh - 450px );
        }
    }
    .floatBottomBox{
        position: absolute;
        top: calc( 100vh - 360px );
        &.horizontal{
            top: calc( 100vh - 360px );
        }
    }
}
</style>