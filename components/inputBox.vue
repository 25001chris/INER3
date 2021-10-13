<template>
    <van-field
        v-model="value"
        :left-icon="inputIcon"
        :placeholder="placeholder"
        @input="$emit('sendData',{type:type,value:value})"
    />
</template>

<script>
export default {
    props: {
        inputIcon:{
            type: String
        },
        placeholder:{
            type: String
        },
        type:{
            type: String
        },
    },
    data() {
        return{
            value: "",
        }
    }
}
</script>