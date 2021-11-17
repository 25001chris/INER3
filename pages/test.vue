<template>
  <div class="container">
    <div id="body" class="mainBody"  @click="listenMapEvent"/>
    <div id="div_results" class="ui-widget-content" title="查詢結果" style="background-color:rgba(255,255,255,0.8)">
      <div id="list_context">
      </div>
    </div>
    <div id="div_infowindow" class="ui-widget-content" title="屬性查詢" style="background-color:rgba(255,255,255,0.8)">
      <div id="info_context">
      </div>
    </div>
    <div id="div_layer" class="ui-widget-content" title="圖層" style="background-color:rgba(255,255,255,0.3)">
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
    <table style="position:absolute; top:0px;">
      <tbody>
      <tr>
			<td><input type="button" style="width:100px" value="圖層管理" onclick="LayerManager();" />
			<td><input id="querybutton" style="width:100px" type="button" value="開啟圖資查詢" onclick="QueryOpen();" />			
			<td><input id="querybutton2" style="width:100px" type="button" value="開啟坐標查詢" onclick="QueryTPLIDOpen();" />
			<td><input id="querybutton2" style="width:100px" type="button" value="定位方法" onclick="locate();" />
			<td><input id="Createmarker" style="width:100px" type="button" value="建立標記" onclick="createmarker();" />			
			<td><input id="Createmarker" style="width:100px" type="button" value="標記群聚" onclick="markercluster();" />
      </tr>
      </tbody>
    </table>
    <transition name="van-slide-up">
      <AnnounceList
        v-show="announceList"
        @sendEvent="toggleAnnounceList"
        @submit="setAnnounceListData"
        :location="getLocation"
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
        :style="resizeAnnounceItem"
      />
    </transition>
    <van-popup v-model="rightListBox" :overlay="false" position="right" :style="{ width:'300px',height: 'calc( 100vh - 60px )',position:'absolute' }" >
      <RightListBox @closeEvent="listEvent" @rightListEvent="listItemType"/>
    </van-popup>
    <AnnounceBtn @btnEvent="openAnnounce"/>
    <RightFloatBox :isAnnounceBox="announceBox" :isRightListBox="rightListBox" :isAnnounceItem="announceItem" @listEvent="listEvent"/>
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
    head:{      
      script: [
        {
          src:
            'http://192.168.1.103/ServerGate/scripts/Framework.js',
        },
        {
          src:
            'http://192.168.1.103/ServerGate/SGSEarth.js',
        },
        {
          src:
            'http://192.168.1.103/iner3_mobile/EarthApp.js',
        },
        {
          src:
            'http://192.168.1.103/ServerGate/scripts/MVTDocument.js',
        },
        {
          src:
            'http://192.168.1.103/ServerGate/scripts/vector_tile.js',
        },
        {
          src:
            'http://192.168.1.103/ServerGate/scripts/pbf.js',
        },
        {
          src:
            'http://192.168.1.103/ServerGate/scripts/TileLayer.js',
        },
        {
          src:
            'http://192.168.1.103/ServerGate/scripts/VectorTube.js',
        },
        {
          src:
            'http://192.168.1.103/ServerGate/scripts/EPSG.js',
        },
        {
          src:
            'http://192.168.1.103/ServerGate/scripts/CoordSys.js',
        },
        {
          src:
            'http://192.168.1.103/ServerGate/scripts/Projection.js',
        },
        {
          src:
            'http://192.168.1.103/ServerGate/scripts/I3SDocument.js',
        },
        {
          src:
            'http://192.168.1.103/iner3_mobile/Scripts/TaipowerCoords_LngLat.js',
        },
        {
          src:
            'http://192.168.1.103/ServerGate/scripts/ClusterLayer.js',
        },
        {
          src:
            'http://192.168.1.103/ServerGate/scripts/AjaxAgent.js',
        },
        {
          src:
            'http://192.168.1.103/ServerGate/scripts/Base64.js',
        },
        {
          src:
            'http://192.168.1.103/ServerGate/scripts/Geometry.js',
        },
        {
          src:
            'http://192.168.1.103/ServerGate/scripts/Graphic.js',
        },
        {
          src:
            'http://192.168.1.103/ServerGate/scripts/Render.js',
        },
        {
          src:
            'http://192.168.1.103/ServerGate/scripts/Tracker.js',
        },
        {
          src:
            'http://192.168.1.103/ServerGate/scripts/Window.js',
        },
        {
          src:
            'http://192.168.1.103/ServerGate/scripts/Interpolation.js',
        },
        {
          src:
            'http://192.168.1.103/ServerGate/scripts/earcut.js',
        },
        {
          src:
            'http://192.168.1.103/ServerGate/scripts/suncalc.js',
        },
        {
          src:
            'http://192.168.1.103/ServerGate/SGServer.js',
        },
        {
          src:
            'http://192.168.1.103/ServerGate/scripts/glMatrix.js',
        },
        {
          src:
            'http://192.168.1.103/ServerGate/scripts/DDDCore.js',
        },
        {
          src:
            'http://192.168.1.103/ServerGate/scripts/OGC.js',
        },
        {
          src:
            'http://192.168.1.103/ServerGate/DDDEarth.js',
        },
        {
          src:
            'http://192.168.1.103/ServerGate/scripts/WMS.js',
        },
        {
          src:
            'http://192.168.1.103/ServerGate/scripts/WMTS.js',
        },
        {
          src:
            'http://192.168.1.103/ServerGate/scripts/KML.js',
        },
        {
          src:
            'http://192.168.1.103/ServerGate/scripts/Collada.js',
        },
        {
          src:
            'http://192.168.1.103/ServerGate/OGCGlobe.js',
        },
        {
          src:
            'http://192.168.1.103/ServerGate/scripts/Marker.js',
        },
        {
          src:
            'http://192.168.1.103/iner3_mobile/EarthStartApp.js',
        },
        {
          src:
            'https://code.jquery.com/jquery-1.12.4.js',
        },
        {
          src:
            'https://code.jquery.com/ui/1.12.1/jquery-ui.js',
        }, 
        { 
          href: 
            'http://192.168.1.103/iner3_mobile/jquery-ui.css',
        }    
      ],
    },
    async asyncData() {
      // let aaa = await axios.get(`http://192.168.1.103/ineradms_integration/REST/GetXMLSettings`)
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
        announceItemType:'',
        listData:{},
        isMapEvent:false,
        getLocation:''
      }
    },
    mounted(){
      this.documentLoad();
      //this.documentReady();
      //this.jqTest();
      console.log(selectLocation)
    },
    methods:{
      jqTest(){
        console.log($('body'));
      },
      /*map methods*/
      documentLoad(){
        //let _this = this
		    SuperGIS.Initialize("/ServerGate/", function () {
		      SuperGIS.ServerEarth.Initialize(InitEarth)
		    })
		  },
      documentReady(){
        // const _this = this;
        // $("#div_infowindow").dialog({
        //   autoOpen: false,
        //   resizable: false,
        //   position: { my: "right-45 top+5", at: "right-45 top+5" },
        // });
        // $("#div_layer").dialog({
        //   autoOpen: false,
        //   resizable: false,
        //   position: { my: "right-45 top", at: "right-45 top" },
        // });
        // $("#div_results").dialog({
        //   autoOpen: false,
        //   resizable: false,
        //   position: { my: "right-45 top+5", at: "right-45 top+5" },
        // });
        // $("#btn_layer").on("click", function () {
        //   if ($("#div_layer").dialog("isOpen")) {
        //     $("#div_layer").dialog("close");
        //     $("#btn_layer").attr("src", "images/menu/layers.png")
        //   }
        //   else {
        //     $("#div_layer").dialog("open");
        //     $("#btn_layer").attr("src", "images/menu/layers2.png")
        //   }
        // });
        // $("#div_FeederTopo").dialog({
        //   autoOpen: false,
        //   resizable: false,
        //   width: "auto",
        //   height: "auto",
        //   position: { my: "right-45 top+5", at: "right-45 top+5" },
        //   close: function (event, ui) {
        //   }
        // });
        // $("#div_FeederAni").dialog({
        //   autoOpen: false,
        //   resizable: false,
        //   width: "auto",
        //   height: "auto",
        //   position: { my: "right-45 top+5", at: "right-45 top+5" },
        //   close: function (event, ui) {
        //     CloseFeederAni();
        //   }
        // });
			  // $("#tabs").tabs();
			  // $("#div_TopoResult").dialog({
        //   open: function(){
        //     this.scrollLeft = 0;
        //     this.scrollTop = 0;
        //   },
        //   autoOpen: false,
        //   resizable: true,
        //   width: "500",
        //   height: "320",
        //   position: { my: "right-45 top+5", at: "right-45 top+5" }
        // });
			  // $("#div_TopoResult").mousedown(function (event) {
        //   _this.topo_down_x = event.offsetX;
        //   _this.topo_down_y = event.offsetY;
        //   _this.bDown = true;
				//   _this.bPan = false;
        // });
        // $("#div_TopoResult").mousemove(function (event) {
        //   if (this.bDown) {
        //     var x = _this.topo_down_x - event.offsetX + this.scrollLeft;
        //     var y = _this.topo_down_y - event.offsetY + this.scrollTop;
        //     this.scrollTo(x, y);
				// 	  _this.bPan = true;
        //         }
        //     });
        // $("#div_TopoResult").mouseup(function (event) {
        //   _this.bDown = false;
        //   //if (!bPan)
        //   //source?
        //   ClickElement(_this.topo_down_x, _this.topo_down_y);
        // });
        // $("#div_TopoResult").mouseleave(function (event) {
        //   _this.bDown = false;
        // });
        // $("#div_TopoResult").scroll(function (event) {
        //   _this.bPan = true;
        // });
      },
      /*map methods*/
      openAnnounce(e){
        if(e){
          this.announceBox = true;
          this.rightListBox = false;
        }
      },
      announceBoxEvent(e){
        if(e==="cancel"){
          this.setDefault();
        }else if(e==="confirm"){
          this.openAnnounceList();
        }else if(e==="location"){
          this.openAnnounceList();
        }else if(e==="select"){
          this.openMapEvent();
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
      openAnnounceList(){
        this.announceList = true;
        this.setDefault();
      },
      setAnnounceListData(e){
        console.log(e)
        this.announceListData = e;
      },
      toggleAnnounceList(e){
        if(e === "send"){
          this.announceList = false;
          this.popShow = true;
        }else{
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
      listItemType(e){
        if(e){
          this.rightListBox = false;
          this.announceItem = true;
          this.announceItemType = e;
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
        this.isMapEvent = true;
        QueryTPLIDOpen();
      },
      listenMapEvent(e){
        if(selectLocation && queryTPCLID && this.isMapEvent){
          QueryTPLIDOpen();
          this.getLocation = selectLocation;
          this.isMapEvent = false;
          this.openAnnounceList();
        }
      }
    },
    computed:{
      resizeAnnounceBox(){
        let verticalHeight = this.announceEvent === "coordinate" ? 'height : 28vh' : 'height : 24vh';
        return this.windowWidth === 1318 ? 'height : 33vh' : verticalHeight;
      },
      resizeAnnounceItem(){
        return this.windowWidth === 1318 ? 'height : 38vh' : 'height : 40vh'
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

.mainBody{
  width: 100vw;
  height: calc(100vh-60px);
}

.links {
  padding-top: 15px;
}

ul { height: 100px; overflow: auto; width: 200px; border: 1px solid #000; }
ul { list-style-type: none; margin: 0; padding: 0; overflow-x: hidden; }
li { margin: 0; padding: 0; }
</style>
