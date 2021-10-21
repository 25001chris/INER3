<template>
    <div class="login">
        <nuxt />
    </div>
</template>
<script>
import { mapState,mapGetters } from 'vuex';
export default {
    name:'login',
    mounted() {
        this.setWindowWidth();
    },
    computed:{
        ...mapState([
            'windowWidth'
        ]),
        ...mapGetters([
            'ishorizontal'
        ])
    },
    methods: {
        setWindowWidth(){
            this.$store.commit('setWindowWidth', window.innerWidth)
            window.onresize = () => {
                this.$store.commit('setWindowWidth', window.innerWidth)
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.login{
  background-image: url("~/assets/img/BG.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  // &.horizontal{
  //   background-image: url("~/assets/img/BG_H.png");
  // }
}
</style>