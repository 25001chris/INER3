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
        :style="resizeAnnounceBox"
      />
    </transition>
    <transition name="van-slide-up">
      <AnnounceItem 
        v-show="announceItem" 
        @closeEvent="toggleAnnounceItem" 
        @btnEvent="announceItemEvent"
        :announceItemType="announceItemType"
        :style="resizeAnnounceItem"
      />
    </transition>
    <van-popup v-model="rightListBox" :overlay="false" position="right" :style="{ width:'300px',height: '100vh' }" >
      <RightListBox @closeEvent="listEvent" @rightListEvent="listItemType"/>
    </van-popup>
    <AnnounceBtn @btnEvent="openAnnounce"/>
    <RightFloatBox :isAnnounceBox="announceBox" :isRightListBox="rightListBox" @listEvent="listEvent"/>
    <van-popup v-model="popShow" class="vw-40" :round="true">
      <PopupTool @btnEvent="popupConfirm"/>
    </van-popup>
  </div>
</template>

<script>
  //import axios from 'axios'
  import { mapState,mapGetters } from 'vuex';
  import AnnounceBtn from '~/components/tools/AnnounceButton';
  import AnnounceBox from '~/components/model/AnnounceBox';
  import RightListBox from '~/components/model/RightListBox';
  import AnnounceList from '~/components/model/AnnounceList';
  import AnnounceItem from '~/components/model/AnnounceItem';
  import PopupTool from '~/components/model/PopupTool';
  import RightFloatBox from '~/components/model/RightFloatBox';
  export default {
    layout: 'main',
    components: {
      AnnounceBtn,
      AnnounceBox,
      AnnounceList,
      PopupTool,
      RightFloatBox,
      RightListBox,
      AnnounceItem
    },
    async asyncData() {
      // let aaa = await axios.get(`http://192.168.1.229/ineradms_integration/REST/GetXMLSettings`)
      // let bbb = await axios.get(`http://192.168.1.103/INER3/%E7%A3%9ANew/LineData/metadata.json`)
      //return { a: aaa.data, b: bbb.data }
    },
    data:()=>{
      return{
        announceBox : false,
        announceList : false,
        announceItem : false,
        rightListBox :　false,
        announceEvent : 'default',
        popShow: false,
        announceListData: {},
        show: false,
        announceItemType:''
      }
    },
    methods:{
      showPopup() {
        this.show = true;
      },
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
      announceItemEvent(e){
        if(e){
          this.announceItem = !this.announceItem
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
      toggleAnnounceItem(){
        this.announceItem = false;
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
      listItemType(e){
        if(e){
          this.rightListBox = false;
          this.announceItem = true;
          this.announceItemType = e;
        }
      },
      popupConfirm(e){
        if(e){
          this.popShow = false;
          this.announceItem = true;
          this.announceItemType = e;
        }
      },
      listEvent(e){
        if(e){
          this.rightListBox = !this.rightListBox;
        }
      }
    },
    computed:{
      resizeAnnounceBox(){
        return this.windowWidth === 1366 ? 'height : 33vh' : 'height : 25vh'
      },
      resizeAnnounceItem(){
        return this.windowWidth === 1366 ? 'height : 45vh' : 'height : 40vh'
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
