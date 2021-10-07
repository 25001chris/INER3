<template>
  <div class="container">
    <transition name="van-slide-up">
      <AuuounceList
        v-show="announceList" 
        @closeEvent="toggleAnnounceList" 
      />
    </transition>
    <transition name="van-slide-up">
      <AuuounceBox 
        v-show="announceBox" 
        @closeEvent="toggleAnnounceBox" 
        :style="resizeAnnpinceBox"
      />
    </transition>
    <AuuounceBtn @btnEvent="openAnnounce"/>
  </div>
</template>

<script>
  import axios from 'axios'
  import { mapState } from 'vuex';
  import AuuounceBtn from '~/components/tools/AnnounceButton';
  import AuuounceBox from '~/components/model/AnnounceBox';
  import AuuounceList from '~/components/model/AnnounceList';
  export default {
    layout: 'main',
    components: {
      AuuounceBtn,
      AuuounceBox,
      AuuounceList
    },
    async asyncData() {
      let aaa = await axios.get(`http://192.168.1.229/ineradms_integration/REST/GetXMLSettings`)
      let bbb = await axios.get(`http://192.168.1.103/INER3/%E7%A3%9ANew/LineData/metadata.json`)
      return { a: aaa.data, b: bbb.data }
    },
    data:()=>{
      return{
        announceBox : false,
        announceList : true
      }
    },
    methods:{
      openAnnounce(e){
        if(e){
          this.announceBox = true;
        }
      },
      toggleAnnounceBox(e){
        if(e){
          this.announceBox = false;
        }
      },
      toggleAnnounceList(e){
        if(e){
          this.announceList = false;
        }
      }
    },
    computed:{
      resizeAnnpinceBox(){
        return this.windowWidth === 1366 ? 'height : 33vh' : 'height : 25vh'
      },
      ...mapState([
        'windowWidth'
      ])
    }
    
    // page component definitions
  }
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  min-height: calc( 100vh - 60px );
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: $main-color;
  background-color: bisque;
  position: relative;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
