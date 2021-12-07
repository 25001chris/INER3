<template>
  <div class="container">
    <div id="body" class="mainBody"/>
    <van-cell center title="點擊查詢" class="switchQueryInfoBtn" >
      <template #right-icon>
        <van-switch v-model="isQueryInfoOpen" active-color="#4C7DA2" @click="QueryInfoOpen"/>
      </template>
    </van-cell>
    
    <!--<div id="lookAtZ" class="lookAtZBox">當前比例尺 1:<span></span></div>-->
    <div id="dpi"></div>
    <div id="scalebar" style="width: 64.4415px;">
		  <div id="secondNumber" style="left: 35px;">5 公里</div>		
	  </div>
    <div v-show="testOpen" id="div_results" class="ui-widget-content" title="查詢結果" style="background-color:rgba(255,255,255,0.8)">
      <div id="list_context">
      </div>
    </div>
    <div v-show="testOpen" id="div_infowindow" class="ui-widget-content" title="屬性查詢" style="background-color:rgba(255,255,255,0.8)">
      <div id="info_context">
      </div>
    </div>
    <div v-show="testOpen" id="div_layer" class="ui-widget-content" title="圖層" style="background-color:rgba(255,255,255,0.3)">
      <div id="tabs">
        <ul>
          <li><a href="#tabs-0">底圖</a></li>
          <li><a href="#tabs-1">饋線</a></li>
          <li><a href="#tabs-2">設備</a></li>
          <li><a href="#tabs-3">應用</a></li>
        </ul>
        <div id="tabs-0">
          <table>
            <tbody>
              <tr>
                <td>
                  <label class="switch">
                    <input class="switch-input" type="checkbox" checked onclick="LayerVisible('NLSCMAP');" />
                    <span class="switch-label" data-on="On" data-off="Off"></span> <span class="switch-handle"></span>
                  </label>
                </td>
                <td>通用版電子地圖</td>
              </tr>
              <tr>
                <td>
                  <label class="switch">
                    <input class="switch-input" type="checkbox" onclick="LayerVisible('PHOTO');" />
                    <span class="switch-label" data-on="On" data-off="Off"></span> <span class="switch-handle"></span>
                  </label>
                </td>
                <td>衛星影像</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div id="tabs-1">
          <table>
            <tbody>
              <tr>
                <td>
                  <label class="switch">
                    <input class="switch-input" type="checkbox" checked onclick="LayerVisible('busbar');" />
                    <span class="switch-label" data-on="On" data-off="Off"></span> <span class="switch-handle"></span>
                  </label>
                </td>
                <td>匯流排</td>
              </tr>
              <tr>
                <td>
                  <label class="switch">
                    <input class="switch-input" type="checkbox" checked onclick="LayerVisible('edge0');" />
                    <span class="switch-label" data-on="On" data-off="Off"></span> <span class="switch-handle"></span>
                  </label>
                </td>
                <td>高壓導線(主幹線)</td>
              </tr>
              <tr>
                <td>
                  <label class="switch">
                    <input class="switch-input" type="checkbox" checked onclick="LayerVisible('edge1');" />
                    <span class="switch-label" data-on="On" data-off="Off"></span> <span class="switch-handle"></span>
                  </label>
                </td>
                <td>高壓導線(分歧線)</td>
              </tr>
              <tr>
                <td>
                  <label class="switch">
                    <input class="switch-input" type="checkbox" checked onclick="LayerVisible('energy');" />
                    <span class="switch-label" data-on="On" data-off="Off"></span> <span class="switch-handle"></span>
                  </label>
                </td>
                <td>再生能源</td>
              </tr>
              <tr>
                <td>
                  <label class="switch">
                    <input class="switch-input" type="checkbox" checked onclick="LayerVisible('connection');" />
                    <span class="switch-label" data-on="On" data-off="Off"></span> <span class="switch-handle"></span>
                  </label>
                </td>
                <td>直接連接</td>
              </tr>
              <tr>
                <td>
                  <label class="switch">
                    <input class="switch-input" type="checkbox" checked onclick="LayerVisible('current_dir');" />
                    <span class="switch-label" data-on="On" data-off="Off"></span> <span class="switch-handle"></span>
                  </label>
                </td>
                <td>電流方向</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div id="tabs-2">
          <table>
            <tbody>
              <tr>
                <td>
                  <label class="switch">
                    <input class="switch-input" type="checkbox" checked onclick="LayerVisible('capacitor');" />
                    <span class="switch-label" data-on="On" data-off="Off"></span> <span class="switch-handle"></span>
                  </label>
                </td>
                <td>電容</td>
              </tr>
              <tr>
                <td>
                  <label class="switch">
                    <input class="switch-input" type="checkbox" checked onclick="LayerVisible('faultindicator');" />
                    <span class="switch-label" data-on="On" data-off="Off"></span> <span class="switch-handle"></span>
                  </label>
                </td>
                <td>故障指示器</td>
              </tr>
              <tr>
                <td>
                  <label class="switch">
                    <input class="switch-input" type="checkbox" checked onclick="LayerVisible('hicustomer');" />
                    <span class="switch-label" data-on="On" data-off="Off"></span> <span class="switch-handle"></span>
                  </label>
                </td>
                <td>高壓用戶</td>
              </tr>
              <tr>
                <td>
                  <label class="switch">
                    <input class="switch-input" type="checkbox" checked onclick="LayerVisible('breaker');" />
                    <span class="switch-label" data-on="On" data-off="Off"></span> <span class="switch-handle"></span>
                  </label>
                </td>
                <td>斷路器</td>
              </tr>
              <tr>
                <td>
                  <label class="switch">
                    <input class="switch-input" type="checkbox" checked onclick="LayerVisible('jumper');" />
                    <span class="switch-label" data-on="On" data-off="Off"></span> <span class="switch-handle"></span>
                  </label>
                </td>
                <td>高壓跳線</td>
              </tr>
              <tr>
                <td>
                  <label class="switch">
                    <input class="switch-input" type="checkbox" checked onclick="LayerVisible('distributedenergy');" />
                    <span class="switch-label" data-on="On" data-off="Off"></span> <span class="switch-handle"></span>
                  </label>
                </td>
                <td>再生能源</td>
              </tr>
              <tr>
                <td>
                  <label class="switch">
                    <input class="switch-input" type="checkbox" checked onclick="LayerVisible('youxiu');" />
                    <span class="switch-label" data-on="On" data-off="Off"></span> <span class="switch-handle"></span>
                  </label>
                </td>
                <td>游休</td>
              </tr>
              <tr>
                <td>
                  <label class="switch">
                    <input class="switch-input" type="checkbox" checked onclick="LayerVisible('switch');" />
                    <span class="switch-label" data-on="On" data-off="Off"></span> <span class="switch-handle"></span>
                  </label>
                </td>
                <td>開關</td>
              </tr>
              <tr>
                <td>
                  <label class="switch">
                    <input class="switch-input" type="checkbox" checked onclick="LayerVisible('sxfmr');" />
                    <span class="switch-label" data-on="On" data-off="Off"></span> <span class="switch-handle"></span>
                  </label>
                </td>
                <td>線路變壓器</td>
              </tr>
              <tr>
                <td>
                  <label class="switch">
                    <input class="switch-input" type="checkbox" checked onclick="LayerVisible('terminal');" />
                    <span class="switch-label" data-on="On" data-off="Off"></span> <span class="switch-handle"></span>
                  </label>
                </td>
                <td>終端</td>
              </tr>
              <tr>
                <td>
                  <label class="switch">
                    <input class="switch-input" type="checkbox" checked onclick="LayerVisible('mxfmr');" />
                    <span class="switch-label" data-on="On" data-off="Off"></span> <span class="switch-handle"></span>
                  </label>
                </td>
                <td>主變壓器</td>
              </tr>
              <tr>
                <td>
                  <label class="switch">
                    <input class="switch-input" type="checkbox" checked onclick="LayerVisible('station');" />
                    <span class="switch-label" data-on="On" data-off="Off"></span> <span class="switch-handle"></span>
                  </label>
                </td>
                <td>電驛</td>
              </tr>
              <tr>
                <td>
                  <label class="switch">
                    <input class="switch-input" type="checkbox" checked onclick="LayerVisible('node');" />
                    <span class="switch-label" data-on="On" data-off="Off"></span> <span class="switch-handle"></span>
                  </label>
                </td>
                <td>高壓節點</td>
              </tr>
              <tr>
                <td>
                  <label class="switch">
                    <input class="switch-input" type="checkbox" checked onclick="LayerVisible('edgecross');" />
                    <span class="switch-label" data-on="On" data-off="Off"></span> <span class="switch-handle"></span>
                  </label>
                </td>
                <td>導線交叉</td>
              </tr>
              <tr>
                <td>
                  <label class="switch">
                    <input class="switch-input" type="checkbox" checked onclick="LayerVisible('edgechange');" />
                    <span class="switch-label" data-on="On" data-off="Off"></span> <span class="switch-handle"></span>
                  </label>
                </td>
                <td>導線變更</td>
              </tr>
              <tr>
                <td>
                  <label class="switch">
                    <input class="switch-input" type="checkbox" checked onclick="LayerVisible('substation');" />
                    <span class="switch-label" data-on="On" data-off="Off"></span> <span class="switch-handle"></span>
                  </label>
                </td>
                <td>變電所</td>
              </tr>
              <tr>
                <td>
                  <label class="switch">
                    <input class="switch-input" type="checkbox" checked onclick="LayerVisible('pole');" />
                    <span class="switch-label" data-on="On" data-off="Off"></span> <span class="switch-handle"></span>
                  </label>
                </td>
                <td>電桿</td>
              </tr>
              <tr>
                <td>
                  <label class="switch">
                    <input class="switch-input" type="checkbox" checked onclick="LayerVisible('dsbnroom');" />
                    <span class="switch-label" data-on="On" data-off="Off"></span> <span class="switch-handle"></span>
                  </label>
                </td>
                <td>配電室</td>
              </tr>
              <tr>
                <td>
                  <label class="switch">
                    <input class="switch-input" type="checkbox" checked onclick="LayerVisible('annotation');" />
                    <span class="switch-label" data-on="On" data-off="Off"></span> <span class="switch-handle"></span>
                  </label>
                </td>
                <td>備註文字</td>
              </tr>	
            </tbody>				
          </table>
        </div>
        <div id="tabs-3">
          <table>
            <tbody>
              <tr>
                <td>
                  <label class="switch">
                    <input class="switch-input" type="checkbox" onclick="LayerVisible('current_dir');" />
                    <span class="switch-label" data-on="On" data-off="Off"></span> <span class="switch-handle"></span>
                  </label>
                </td>
                <td>電流方向</td>
              </tr>
              <tr>
                <td>
                  <label class="switch">
                    <input class="switch-input" type="checkbox" checked onclick="LayerVisible('buffer');" />
                    <span class="switch-label" data-on="On" data-off="Off"></span> <span class="switch-handle"></span>
                  </label>
                </td>
                <td>電力潮流醒目區間</td>
              </tr>
              <tr>
                <td>
                  <label class="switch">
                    <input class="switch-input" type="checkbox" checked onclick="LayerVisible('bufferlabel');" />
                    <span class="switch-label" data-on="On" data-off="Off"></span> <span class="switch-handle"></span>
                  </label>
                </td>
                <td>電力潮流醒目標記</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <table v-show="testOpen" style="position:absolute; top:0px;">
      <tbody>
      <tr>
			<td><input id="querybutton" style="width:100px" type="button" value="開啟圖資查詢" @click="QueryInfoOpen" />
      </tr>
      </tbody>
    </table>
    <transition name="van-slide-up">
      <AnnounceList
        v-if="announceList"
        @sendEvent="toggleAnnounceList"
        @submit="setAnnounceListData"
        :location="getLocation"
        :loopId="getLoopId"
        :errorMsg="announceListError"
        :sendSubmit="sumbitStatus"
        :announceListStatus="announceListStatus"
      />
    </transition>
    <transition name="van-slide-up">
      <AnnounceBox 
        v-show="announceBox" 
        :announceEvent="announceEvent"
        @closeEvent="toggleAnnounceBox" 
        @btnEvent="announceBoxEvent"
        :style="resizeAnnounceBox"
      />
    </transition>
    <transition name="van-slide-up">
      <AnnounceItem 
        v-show="announceItem" 
        :announceEvent="announceEvent"
        @closeEvent="toggleAnnounceItem" 
        @btnEvent="announceItemEvent"
        :announceItemType="announceItemType"
        :announceItemData="announceItemData"
        :announceResultInfo="announceResultInfo"
        :style="resizeAnnounceItem"
      />
    </transition>
    <van-popup v-model="rightListBox" :overlay="false" position="right" :style="{ width:'300px',height: 'calc( 100vh - 60px )',position:'absolute' }" >
      <RightListBox @closeEvent="listEvent" @rightListEvent="listItemType" @markerVisible="getMarkerVisible"/>
    </van-popup>
    <AnnounceBtn @btnEvent="openAnnounce"/>
    <RightFloatBox :isAnnounceBox="announceBox" :isRightListBox="rightListBox" :isAnnounceItem="announceItem" @listEvent="listEvent" @mapToolEvent="mapToolEvent" @plusEvent="plusEvent"/>
    <van-popup v-model="popShow" class="vw-40" :round="true">
      <PopupTool @btnEvent="popupConfirm" :popupEvent="setPopupEvent" :popupInit="popupInit"/>
    </van-popup>
  </div>
</template>

<script>
  import axios from 'axios'
  import { mapState,mapGetters } from 'vuex';
  import AnnounceBtn from '~/components/tools/AnnounceButton';
  import AnnounceBox from '~/components/model/AnnounceBox';
  import RightListBox from '~/components/model/RightListBox';
  import AnnounceList from '~/components/model/AnnounceList';
  import AnnounceItem from '~/components/model/AnnounceItem';
  import PopupTool from '~/components/model/PopupTool';
  import RightFloatBox from '~/components/model/RightFloatBox';
  //import { documentLoad } from '~/publish/loadMap';
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
      //const data = 'UserID=ineradmin&Password=inertest';
      //let aaa = await axios.post(`https://demo.supergeotek.com/ineradms_Integration/REST/Login`,data)
      // let bbb = await axios.get(`http://192.168.1.103/INER3/%E7%A3%9ANew/LineData/metadata.json`)
      //return { a: aaa.data }
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
        announceItemType:'',
        listData:{},
        testOpen:false,
        isMapEvent:false,
        isFaultInfo:false,
        isQueryInfoOpen:false,
        getLocation:'',
        getLoopId:'',
        getLocate:null,
        sumbitStatus:false,
        announceItemData:'',
        faultReport:{},
        faultReportClick:true,
        announceListStatus:false,
        setPopupEvent:'',
        announceResultInfo:{},
        popupInit:{},
        announceListError:{
          status:'',
          loop:''
        }
      }
    },
    middleware:'routerAuth',
    mounted(){
      this.documentLoad();
      this.getAllFaultReport();
    },
    methods:{
      /*map methods*/
      documentLoad(){
		    SuperGIS.Initialize("/ServerGate/", function () {
		      SuperGIS.ServerEarth.Initialize(InitEarth)
		    })
        const _this = this;
        const wsdb = new WebSocket(this.$store.state.wsurl);
        wsdb.onopen = function () { };
        wsdb.onmessage = function (r) {
          if (r.data) {
            const rec = JSON.parse(r.data);
            const type = rec.action;
            const process = rec.data["report_process"];
            if(rec.table === "faultreport"){
              _this.getAllFaultReport();
              _this.popShow = true;
              _this.announceResultInfo = rec.data;
              if(rec.data.report_user === sessionStorage.getItem('loginUserName') && type === "INSERT"){
                _this.setpopupEvent = 'success';
                _this.popupInit = {
                  icon:'success',
                  title:'通報成功',
                  confirm: 'AnnounceResult',
                  tips:{
                    url:'/',
                    link:'查看',
                    text:''
                  },
                  btn:'確認'
                }
              }else if(type == "UPDATE" && process == 3){
                _this.setpopupEvent = 'warning';
                _this.popupInit = {
                    icon:'warning',
                    title:'',
                    confirm: 'AnnounceResult',
                    tips:{
                      url:'/',
                      link:'查看',
                      text:rec.data.report_time+' 於 ' + rec.data.switch_tpclid + '發佈了通報，請立即'
                    },
                    btn:'確認'
                }
              }
            };
            const zippi = new Audio('./alarm.wav');
            zippi.play();
            //alert("收到訊息了，來自" + rec.table + "表單的" + rec.action);

            /*if(rec.data.report_user === sessionStorage.getItem('loginUserName')){
              _this.popupInit = {
                icon:'success',
                title:'通報成功',
                confirm: 'AnnounceResult',
                tips:{
                  url:'/',
                  link:'查看',
                  text:''
                },
                btn:'確認'
              }
            }else{
              _this.popupInit = {
                icon:'warning',
                title:'',
                confirm: 'AnnounceResult',
                tips:{
                  url:'/',
                  link:'查看',
                  text:rec.data.report_time+' 於某處發佈了通報，請立即'
                },
                btn:'確認'
              }
            }*/
          }
        }
		  },
      /*map methods*/
      openAnnounce(e){
        if(e){
          this.announceBox = true;
          this.rightListBox = false;
        }
      },
      announceBoxEvent(e){
        const event = e.type;
        if(event==="cancel"){
          this.setDefault();
        }else if(event==="confirm"){
          this.openAnnounceList(e.val);
        }else if(event==="location"){
          this.getLocationObj();
        }else if(event==="select"){
          this.openMapEvent();
        }else{
          this.announceEvent = event;
        }
      },
      announceItemEvent(e){
        if(e){
          this.announceItem = !this.announceItem;
          if(e.type="setLocate"){
            const setItemLocate = setLocate(this.announceResultInfo.switch_tpclid);
            locate1(setItemLocate);
          }
        }
      },
      toggleAnnounceBox(e){
        if(e){
          this.setDefault();
        }
      },
      openAnnounceList(data,loopId){
        this.getLocation = data;
        if(loopId){
          this.getLoopId = loopId;
        }
        this.announceList = true;
        this.setDefault();
      },
      getAllFaultReport(){
        axios.get(`${this.apiurl}REST/FaultReport`).then(r=>{
          this.faultReport = r.data;
        }).catch(e=>{
          console.log(e)
        })
      },
      setAnnounceListData(e){
        const uploaderLength = e.uploader.length;
        const photo1 = uploaderLength >= 1 ? e.uploader[0].content.replace("data:image/jpeg;base64,","") : "";
        const photo2 = uploaderLength >= 2 ? e.uploader[1].content.replace("data:image/jpeg;base64,","") : "";
        const photo3 = uploaderLength >= 3 ? e.uploader[2].content.replace("data:image/jpeg;base64,","") : "";
        this.sumbitStatus = false;
        const data = {
          "report_user": sessionStorage.getItem('loginUserName'),
          "report_tpclid": e.location,
          "switch_tpclid": e.location,
          "report_status": this.switchSelect(e.status),
          "report_feederid": e.report_feederid,
          "report_loopid": e.report_loopid,
          "report_phase": this.switchSelect(e.camera),
          "report_i": e.report_i,
          "report_vsc": e.report_vsc,
          "report_vb": e.report_vb,
          "report_temp": e.report_temp,
          "report_rssi": e.report_rssi,
          "report_photo1":photo1,
          "report_photo2":photo2,
          "report_photo3":photo3,
          "report_note": e.report_note
        }

        if(e.status === "" || e.report_loopid === ""){
          this.announceListError.status = e.status === "" ? "狀態不得為空" : "";
          this.announceListError.loop = e.report_loopid === "" ? "迴路別不得為空" : "";
        }else{
          axios.post(`${this.apiurl}REST/FaultReport`,data).then(r=>{
            this.announceListData = e;
            this.announceList = false;
            this.popShow = true;
            this.sumbitStatus = true;
            this.announceListStatus = true;
            axios.get(`${this.apiurl}REST/FaultReport`).then(r=>{
              this.faultReport = r.data;
            }).catch(e=>{
              console.log(e)
            })
          }).catch(e=>{
            this.announceListStatus = false;
            this.announceList = false;
            this.popShow = true;
            this.setpopupEvent = 'error';
            this.popupInit = {
              icon:'error',
              title:'通報失敗',
              confirm: 'cancel',
              tips:{
                url:'/',
                link:'',
                text:'可以暫存文字請等網路連線狀況良好時，再重新通報一次'
              },
              btn:'確認'
            },
            console.log(e)
          })
        }
      },
      getMarkerVisible(e){
        toggleAllVisibleStatus();
      },
      toggleAnnounceList(e){
        if(e === "close"){
          this.announceList = false;
        }else{
          this.announceList = false;
          this.popShow = true;
        }
      },
      toggleAnnounceItem(){
        this.announceItem = false;
      },
      setDefault(){
        this.announceBox = false;
        setTimeout(() => {this.announceEvent = 'default'}, 500);
      },
      listItemType(e){
        if(e){
          this.rightListBox = false;
          this.announceItem = true;
          this.announceItemType = e.layout;
          this.announceItemData = e.tb;
        }
      },
      popupConfirm(e){
        switch(e){
          case "AnnounceResult":
            this.popShow = false;
            this.announceItem = true;
            this.announceItemType = e;
          case "cancel":
            this.popShow = false;
        }
      },
      listEvent(e){
        if(e){
          this.rightListBox = !this.rightListBox;
          this.announceBox = false;
          this.announceItem = false;
        }
      },
      openMapEvent(){
        this.$toast('請點擊地圖選取坐標');
        this.isMapEvent = true;
        const _this = this;
        if(query){
          this.QueryInfoOpen();
        }
        if(!queryTPCLID){
          QueryTPLIDOpen();
        };
        document.querySelector(".mainBody").removeEventListener("touchstart", _this.test2);
        document.querySelector(".mainBody").addEventListener("touchstart", _this.test1);
      },
      test1(e){
        e.preventDefault(e);
        if(queryTPCLID && !query && this.isMapEvent){
          this.listenMapEvent(selectLocation,selectLoopId);
          if(!selectLocation || !selectLoopId){
            this.$toast('未取得坐標,請重新點擊');
          }
        }
      },
      listenMapEvent(res,loopId){
        const _this = this;
        setTimeout(function(){
          if(res && loopId && _this.isMapEvent){
            QueryTPLIDOpen();
            _this.isMapEvent = !_this.isMapEvent;
            _this.openAnnounceList(res,loopId);
            _this.getLocate = setLocate(_this.getLocation);
            _this.$toast('已選取坐標:'+ _this.getLocation);
          }
        },2000)
      },
      getNowLocation(){
        console.log('getLocation');
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.showNowPosition);//有拿到位置就呼叫 showPosition 函式
        } else {
          alert("您的瀏覽器不支援 顯示地理位置 API ，請使用其它瀏覽器開啟 這個網址");
        }
      },
      getLocationObj() {//取得 經緯度
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.showPosition);//有拿到位置就呼叫 showPosition 函式
        } else {
          alert("您的瀏覽器不支援 顯示地理位置 API ，請使用其它瀏覽器開啟 這個網址");
        }
      },
      showPosition(position) {
        this.openAnnounceList(getLngLatToTPCPoint({X:position.coords.longitude,Y:position.coords.latitude}));
        this.getLocate = setLocate(getLngLatToTPCPoint({X:position.coords.longitude,Y:position.coords.latitude}));
      },
      showNowPosition(position) {
        locate1({X:position.coords.longitude,Y:position.coords.latitude});
      },
      switchSelect(data){
        let result;
            switch(data){
                case "正常":
                    result = 0;
                    break;
                case "瞬時故障":
                    result = 1;
                    break;
                case "永久性故障":
                    result = 2;
                    break;
                case "復電":
                    result = 4;
                    break;
                case "切開":
                    result = 5;
                    break;
                case "投入":
                    result = 6;
                    break;
                case "線路湧流":
                    result = 7;
                    break;
                case "空":
                    result = '';
                    break;
                default:
                    result = data;
                    break;
        }
        return result;
      },
      mapToolEvent(e){
        switch(e.type){
          case 'zoomIn':
            zoomIn(e.action);
            break;
          case 'zoomOut':
            zoomOut(e.action);
            break;
          case 'home':
            locate();
            break;
          case 'position':
            this.getNowLocation();
            break;
          default:
            zoomStop(e.action);
            break;
        }
      },
      plusEvent(e){
        switch(e.type){
          case 'zoomIn':
            zoomIn(e.action);
            break;
          case 'zoomOut':
            zoomOut(e.action);
            break;
          case 'home':
            locate();
            break;
          case 'position':
            this.getNowLocation();
            break;
          default:
            zoomStop(e.action);
            break;
        }
      },
      QueryInfoOpen(){
        this.isQueryInfoOpen=!this.isQueryInfoOpen;
        if(queryTPCLID){
          QueryTPLIDOpen();
        };
        QueryOpen();
        document.querySelector(".mainBody").removeEventListener("touchstart", this.test1);
        document.querySelector(".mainBody").addEventListener("touchstart", this.test2);
      },
      test2(e){
        e.preventDefault();
        const report = this.faultReport;
        const _this = this;
        if(query){
          if(alertId !== "" && _this.faultReportClick){
            _this.faultReportClick = false;
            setTimeout(function(){
              report.forEach(element => {
                if(parseInt(element.report_ufid) === alertId){
                  _this.announceItem = true;
                  _this.rightListBox = false;
                  _this.announceItemType = 'AnnounceResult';
                  _this.announceResultInfo = element;
                }
              });
              _this.faultReportClick = true;
            },2000)
          }else{
            _this.$toast('無故障通報事項');
          }
        }
      }
    },
    computed:{
      resizeAnnounceBox(){
        let verticalHeight = this.announceEvent === "coordinate" ? 'height : 36vh' : 'height : 36vh';
        return this.ishorizontal ? 'height : 36vh' : verticalHeight;
      },
      resizeAnnounceItem(){
        const a = this.ishorizontal ? 'height : 42vh' : 'height : 36vh';
        //const b = this.announceItemType = 'AnnounceResult' ? 'height : 48vh' : a;
        return a
      },
      ...mapState([
        'windowWidth',
        'apiurl'
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

.mainBody{
  width: 100vw;
  height: calc(100vh-60px);
  touch-action: none;
}

.switchQueryInfoBtn{
  position: absolute;
  left: 0.5em;
  top:0.5em;
  width:160px;
  border-radius: 5px;
  color: #4C7DA2;
}

.lookAtZBox{
  position: absolute;
  left: 0.5em;
  bottom:0.5em;
  background: #F0F0F0;
  font-family: Noto Sans TC;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  padding: 3px;
  border-radius: 5px;
}

.links {
  padding-top: 15px;
}

ul { height: 100px; overflow: auto; width: 200px; border: 1px solid #000; }
ul { list-style-type: none; margin: 0; padding: 0; overflow-x: hidden; }
li { margin: 0; padding: 0; }

#scalebar{
	position: absolute;
	width: 5.2cm;
	bottom: 20px;
	left: 20px;
	background: rgba(0,0,0,.3);
	border-radius: 4px;
	padding: 2px;
}
#scalebar #secondNumber{
	border: 1px solid #eee;
	border-top: none;
	color: #eee;
	font-size: 10px;
	text-align: center;
	margin: 1px;
	will-change: contents,width;
}
</style>
