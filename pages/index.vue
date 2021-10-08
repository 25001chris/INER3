<template>
  <div class="container">
    <transition name="van-slide-up">
      <AnnounceList
        v-show="announceList"
        @closeEvent="toggleAnnounceList"
        @submit="setAnnounceListData"
      />
    </transition>
    <transition name="van-slide-up">
      <AnnounceBox 
        v-show="announceBox" 
        :announceEvent="announceEvent"
        @closeEvent="toggleAnnounceBox" 
        @btnEvent="announceListEvent"
        :style="resizeAnnpinceBox"
      />
    </transition>
    <AnnounceBtn @btnEvent="openAnnounce"/>
    <van-popup v-model="popShow" class="vw-40" :round="true"><PopupTool @btnEvent="popupConfirm"/></van-popup>
  </div>
</template>

<script>
  import axios from 'axios'
  import { mapState,mapGetters } from 'vuex';
  import AnnounceBtn from '~/components/tools/AnnounceButton';
  import AnnounceBox from '~/components/model/AnnounceBox';
  import AnnounceList from '~/components/model/AnnounceList';
  import PopupTool from '~/components/model/PopupTool';
  export default {
    layout: 'main',
    components: {
      AnnounceBtn,
      AnnounceBox,
      AnnounceList,
      PopupTool
    },
    async asyncData() {
      let aaa = await axios.get(`http://192.168.1.229/ineradms_integration/REST/GetXMLSettings`)
      let bbb = await axios.get(`http://192.168.1.103/INER3/%E7%A3%9ANew/LineData/metadata.json`)
      return { a: aaa.data, b: bbb.data }
    },
    data:()=>{
      return{
        announceBox : false,
        announceList : false,
        announceEvent : 'default',
        popShow: false,
        announceListData: {}
      }
    },
    methods:{
      openAnnounce(e){
        if(e){
          this.announceBox = true;
        }
      },
      announceListEvent(e){
        if(e==="cancel"){
          this.setDefault();
        }else if(e==="confirm"){
          this.openAnnounceList();
        }else{
          this.announceEvent = e;
        }
      },
      toggleAnnounceBox(e){
        if(e){
          this.setDefault();
        }
      },
      toggleAnnounceList(e){
        if(e){
          this.announceList = false;
        }
      },
      setDefault(){
        this.announceBox = false;
        setTimeout(() => {this.announceEvent = 'default'}, 500);
      },
      openAnnounceList(){
        this.announceList = true;
        this.setDefault();
      },
      setAnnounceListData(e){
        this.announceListData = e;
        this.popShow = true;
      },
      popupConfirm(e){
        if(e){
          this.popShow = false;
        }
      },
    },
    computed:{
      resizeAnnpinceBox(){
        return this.windowWidth === 1366 ? 'height : 33vh' : 'height : 25vh'
      },
      ...mapState([
        'windowWidth'
      ]),
      ...mapGetters([
        'ishorizontal'
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
