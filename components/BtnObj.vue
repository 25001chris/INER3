<template>
    <div class="buttonBox">
        <van-button type="primary" size="large" color="#4C7DA2" class="round-10">{{btnText}}</van-button>
    </div>
</template>

<script>
export default {
    props: {
        btnText:{
            type: String
        }
    },
}
</script>
<style>
.buttonBox{
    width: 90%;
    max-width: 360px;
}
.round-10{
    border-radius: 10px;
}
</style>
