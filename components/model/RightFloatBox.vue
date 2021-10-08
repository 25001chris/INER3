<template>
    <van-row class="rightFloatBox" type="flex" justify="center">
        <van-col class="floatTopBox">
            <FloatButton icon="compass"/>
            <FloatButton icon="list"/>
        </van-col>
        <van-col class="floatMidBox">
            <FloatButton icon="position"/>
        </van-col>
        <van-col class="floatBottomBox">
            <FloatButton icon="plus"/>
            <FloatButton icon="reduce"/>
            <FloatButton icon="home"/>
        </van-col>
    </van-row>
</template>

<script>
import FloatButton from '~/components/tools/FloatButton';
export default {
    name:'rightFloatBox',
    components: {
        FloatButton
    },
    props:{
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
    .floatTopBox{
        position: absolute;
        top: 5vh;
        .floatButton{
            margin-bottom: 1vh;
        }
    }
    .floatMidBox{
        position: absolute;
        top: 50vh;
    }
    .floatBottomBox{
        position: absolute;
        top: 60vh;
    }
}
</style>