<template>
    <van-cell-group class="inputArea">
        <van-icon :name="require(`@/assets/img/ICON/favicon/${inputObj.inputIcon}.svg`)" size="20" />
        <van-field
            v-model="value"
            :name=inputObj.type
            :placeholder="inputObj.placeholder"
            @input="$emit('sendData',value)"
            class="inputBox"
            :rules="[{ required: true, message: inputObj.placeholder }]"
        />
    </van-cell-group>
</template>

<script>
export default {
    props: {
        inputObj:{
            type: Object
        }
    },
    data() {
        return{
            value: "",
        }
    },
    methods: {
        sendInputData(e){
            this.$emit("sendInputData",e);
        }
    }
}
</script>

<style lang="scss">
.inputArea{
    flex-direction: column;
    width: 100%;
    position: relative;
    .van-icon{
        position: absolute;
        top: 23px;
        left: 1.5em;
        z-index: 100;
    }
    .van-field__body{
        padding-left: 3em;
    }
}
</style>