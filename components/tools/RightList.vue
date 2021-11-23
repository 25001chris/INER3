<template>
    <van-row type="flex" class="rightList">
        <van-col span="16" class="listTitle">{{titleText}}</van-col>
        <van-col span="4">
            <van-image
                :src="require(`@/assets/img/ICON/favicon/list.svg`)"
                class="listIcon"
                fit="contain"
                @click="$emit('rightListEvent',{layout:'AnnounceReceived',tb:setList})"
            />
        </van-col>
        <van-col span="4">
            <van-image
                :src="require(`@/assets/img/ICON/favicon/openEye.svg`)"
                class="listIcon"
                fit="contain"
                v-show="eyeOpen"
                @click="toggleEyeStatus"
            />
            <van-image
                :src="require(`@/assets/img/ICON/favicon/closeEye.svg`)"
                class="listIcon"
                fit="contain"
                v-show="eyeClose"
                @click="toggleEyeStatus"
            />
        </van-col>
    </van-row>
</template>

<script>

export default {
    name:'rightList',
    props:{
        titleText:{
            type:String,
            default:''
        },
        setList:{
            type:String,
            default:''
        },
    },
    data:()=>{
        return{
            eyeOpen:true,
            eyeClose:false
        }
    },
    methods: {
        sendEvent(){
            this.$emit("btnEvent",true);
        },
        toggleEyeStatus(){
            this.eyeOpen = !this.eyeOpen;
            this.eyeClose = !this.eyeClose;
        }
    }
};
</script>

<style lang="scss" scoped>
.rightList{
    height: 40px;
    line-height: 40px;
    padding: 0.25em 0;
    .listTitle{
        text-align: left;
        @include noto-sans-tc-20-medium
    }
}
</style>