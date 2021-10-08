<template>
    <van-row type="flex" class="rightList">
        <van-col span="16">通報接獲清單</van-col>
        <van-col span="4">2</van-col>
        <van-col span="4">2</van-col>
    </van-row>
</template>

<script>

export default {
    name:'rightList',
    data:()=>{
        return{
        }
    },
    methods: {
        sendEvent(){
            this.$emit("btnEvent",true);
        }
    }
};
</script>

<style lang="scss">
.rightList{
    height: 40px;
    line-height: 40px;
}
</style>