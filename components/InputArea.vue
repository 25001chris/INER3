<template>
    <van-cell-group class="inputArea">
        <InputBox 
            v-for="(item,index) in inputObj.data"
            :inputIcon="item.inputIcon"
            :placeholder="item.placeholder"
            v-bind:key="index"
        />
    </van-cell-group>
</template>

<script>
import InputBoxObj from '~/components/inputBox.vue';
export default {
    components: {
        'InputBox': InputBoxObj,
    },
    props: {
        inputObj:{
            type: Object
        }
    },
    data() {
        return{
            value: "",
        }
    }
}
</script>

<style>
.inputArea{
    flex-direction: column;
    width: 90%;
    max-width: 360px;
}
</style>