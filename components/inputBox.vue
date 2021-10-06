<template>
    <van-field
        v-model="value"
        :left-icon="inputIcon"
        :placeholder="placeholder"
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
        }
    },
    data() {
        return{
            value: "",
        }
    }
}
</script>