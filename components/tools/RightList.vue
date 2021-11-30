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
                v-if="eyeOpen && isEye"
                @click="toggleEyeStatus"
            />
            <van-image
                :src="require(`@/assets/img/ICON/favicon/closeEye.svg`)"
                class="listIcon"
                fit="contain"
                v-if="!eyeOpen  && isEye"
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
        isEye:{
            type:Boolean,
            default:false
        },
    },
    data:()=>{
        return{
            eyeOpen:false,
        }
    },
    methods: {
        sendEvent(){
            this.$emit("btnEvent",true);
        },
        toggleEyeStatus(){
            this.eyeOpen = !this.eyeOpen;
            this.$emit("markerVisible",true)
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