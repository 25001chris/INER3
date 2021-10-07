<template>
<div
    class="uploadTool"
>
    <van-uploader v-model="fileList" multiple />
</div>
</template>

<script>

export default {
    name:'uploadTool',
    props: {
        type: {
            type: String,
            default: 'btn-primary-dark'
        },
        text: {
            type: String,
            default: '按鈕'
        }
    },
    data:()=>{
        return{
            fileList:[]
        }
    },
    methods: {
        sendEvent(){
            this.$emit("btnEvent",true);
        },
        afterRead(file) {
            console.log(file);
        },
    }
};
</script>

<style lang="scss">
</style>
