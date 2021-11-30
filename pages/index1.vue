<template>
  <div class="container">
    <div id="body" style="width:100%;height:100%;" />
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
      <div @click="jqTest">TESTETSS</div>
      <tbody>
        <tr>
          <td><input type="button" style="width:100px" value="圖層管理" @click="LayerManager"></td>
          <td><input id="querybutton" style="width:100px" type="button" value="開啟圖資查詢" @click="QueryOpen"></td>		
          <td><input id="querybutton2" style="width:100px" type="button" value="開啟坐標查詢" @click="QueryTPLIDOpen"></td>
          <td><input id="querybutton2" style="width:100px" type="button" value="定位方法" @click="locate"></td>
          <td><input id="Createmarker" style="width:100px" type="button" value="建立標記" @click="createmarker"></td>		
          <td><input id="Createmarker" style="width:100px" type="button" value="標記群聚" @click="markercluster"></td>
        </tr>
      </tbody>
    </table>
    <transition name="van-slide-up">
      <AnnounceList
        v-show="announceList"
        @sendEvent="toggleAnnounceList"
        @submit="setAnnounceListData"
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
        // {
        //   src:
        //     'http://192.168.1.103/iner3_mobile/EarthStartApp.js',
        // },
        {
          src:
            'https://code.jquery.com/jquery-1.12.4.js',
        },
        {
          src:
            'https://code.jquery.com/ui/1.12.1/jquery-ui.js',
        },
        { 
          src: '~assets/jquery-ui.css',
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

        /*map data*/
        earth_ : null,
        pGlobe : null,
        pCam : null,
        pScene : null,
        IconTextures : {},
        IconSymbols : {},
        MouseType : 0,
        current_visible : true,
        current_visible : false,
        dirty_pms : [],
        changedDevices : [],
        changeinfo_interval : 2000,
        g_pms : {}, // 20201201
        g_surfaces : {}, // 20201201
        g_surfaces2 : {},
        eventMarkers : { 
          VisibleFlag:true, 
          fdr_labels:{} , 
          MPoweroff:[], 
          MFault:[], 
          MShortcircuit:[], 
          MTransfer:[], 
          PPoweroff:0, 
          PFault:0, 
          PTransfer:0, 
          PShortcircuit:0,
        },
        Layers : {},
		    BaseMapLayer : {},
		    IconLayers : {},
		    TextOfIcon : {
          'pole' : ['pole_t'],
          'dsbnroom' : ['dsbnroom_t'],
          'Connection' : ['connection_t'],
          'breaker' : ['breaker_t'],
          'hicustomer' : ['hicustomer_t'],
          'substation' : ['substation_t', 'substation_n'],
          'switch' : ['switch_t'],
        },
        LayerHeight : {
          'dsbnroom' : 0.05,
          'pole' : 0.1,
          'substation' : 0.09,
          'edgechange' : 0.1,
          'edgecross' : 0.11,
          'node' : 0.1,
          'station' : 0.1,
          'mxfmr' : 0.12,
          'terminal' : 0.1,
          'sxfmr' : 0.1,
          'switch-3' : 0.15,
          'switch-2' : 0.13,
          'switch-0' : 0.12,
          'youxiu' : 0.1,
          'distributedenergy' : 0.11,
          'jumper' : 0.1,
          'breaker' : 0.11,
          'hicustomer' : 0.09,
          'faultindicator' : 0.11,
          'capacitor' : 0.09
        },
        /*no use*/
        LayerAlias : {
          'busbar' : "匯流排",
          'edge0' : "高壓導線",
          'edge1' : "高壓導線",
          'energy' : "再生能源",
          'connection' : "直接連接",
          'dsbnroom' : "配電室",
          'pole' : "電桿",
          'substation' : "變電所",
          'edgechange' : "導線變更",
          'edgecross' : "導線交叉",
          'node' : "高壓節點",
          'station' : "電驛",
          'mxfmr' : "主變壓器",
          'terminal' : "終端",
          'sxfmr' : "線路變壓器",
          'switch-3' : "開關",
          'switch-2' : "開關",
          'switch-0' : "開關",
          'youxiu' : "游休",
          'distributedenergy' : "再生能源",
          'jumper' : "高壓跳線",
          'breaker' : "斷路器",
          'hicustomer' : "高壓用戶",
          'faultindicator' : "故障指示器",
          'capacitor' : "電容",
        },
        arrowCount : 0,
        buffer_visible : true,
        topo_down_x:'',
        topo_down_y:'',
        bDown : false,
        bPan : false,
        host_url : "https://demo.supergeotek.com/",
		    data_url : "../ineradms/磚New/",
        down_x:'',
        down_y:'',
        query: false,
        queryTPCLID : false,
        markerlist : [],
        clusterlayer:{},
        /*test*/
        LineData:null,
        LineData1:null,
        TextData:null,
        IconData:null
      }
    },
    mounted(){
      this.documentLoad();
      this.documentReady();
      this.jqTest();
    },
    middleware:'routerAuth',
    methods:{
      jqTest(){
        console.log($('body'));
      },
      /*map methods*/
      documentLoad(){
        let _this = this
		    SuperGIS.Initialize("/ServerGate/", function () {
		        SuperGIS.ServerEarth.Initialize(_this.InitEarth)
		    })
		  },
      documentReady(){
        const _this = this;
        $("#div_infowindow").dialog({
          autoOpen: false,
          resizable: false,
          position: { my: "right-45 top+5", at: "right-45 top+5" },
        });
        $("#div_layer").dialog({
          autoOpen: false,
          resizable: false,
          position: { my: "right-45 top", at: "right-45 top" },
        });
        $("#div_results").dialog({
          autoOpen: false,
          resizable: false,
          position: { my: "right-45 top+5", at: "right-45 top+5" },
        });
        $("#btn_layer").on("click", function () {
          if ($("#div_layer").dialog("isOpen")) {
            $("#div_layer").dialog("close");
            $("#btn_layer").attr("src", "images/menu/layers.png")
          }
          else {
            $("#div_layer").dialog("open");
            $("#btn_layer").attr("src", "images/menu/layers2.png")
          }
        });
        $("#div_FeederTopo").dialog({
          autoOpen: false,
          resizable: false,
          width: "auto",
          height: "auto",
          position: { my: "right-45 top+5", at: "right-45 top+5" },
          close: function (event, ui) {
          }
        });
        $("#div_FeederAni").dialog({
          autoOpen: false,
          resizable: false,
          width: "auto",
          height: "auto",
          position: { my: "right-45 top+5", at: "right-45 top+5" },
          close: function (event, ui) {
            CloseFeederAni();
          }
        });
			  $("#tabs").tabs();
			  $("#div_TopoResult").dialog({
          open: function(){
            this.scrollLeft = 0;
            this.scrollTop = 0;
          },
          autoOpen: false,
          resizable: true,
          width: "500",
          height: "320",
          position: { my: "right-45 top+5", at: "right-45 top+5" }
        });
			  $("#div_TopoResult").mousedown(function (event) {
          _this.topo_down_x = event.offsetX;
          _this.topo_down_y = event.offsetY;
          _this.bDown = true;
				  _this.bPan = false;
        });
        $("#div_TopoResult").mousemove(function (event) {
          if (this.bDown) {
            var x = _this.topo_down_x - event.offsetX + this.scrollLeft;
            var y = _this.topo_down_y - event.offsetY + this.scrollTop;
            this.scrollTo(x, y);
					  _this.bPan = true;
                }
            });
        $("#div_TopoResult").mouseup(function (event) {
          _this.bDown = false;
          //if (!bPan)
          //source?
          ClickElement(_this.topo_down_x, _this.topo_down_y);
        });
        $("#div_TopoResult").mouseleave(function (event) {
          _this.bDown = false;
        });
        $("#div_TopoResult").scroll(function (event) {
          _this.bPan = true;
        });
      },
      InitEarth(){
	      var pBody = new SuperGIS.Windows.HTMLContainer(document.getElementById("body"));
	      var sHost = location.href;
	      var idx = sHost.indexOf("/", 8);
        var _this = this;
	      if (idx >= 0) sHost = sHost.substring(0, idx);
	      CreateHTML5Earth(pBody, function (pEarth){
          var material = pEarth.CreateModelMaterial(0, pEarth.CreateColor(0, 0, 0, 1));
          // 載入定義圖示的文件
          //Gary 20200923:not originally by Gary但還是換個modern點的寫法(COG ASKED)
          var OCTIcons = $.get("/INER3_Mobile/icons/OCTIcons.txt");
          $.when(OCTIcons).done(function (OCTIcons) {
            var toload = 0;
            var lines = OCTIcons.split('\r\n');
            for (var ln in lines) {
              var val = lines[ln];
                if (val.length == 0)
                  continue;

              toload++;
              var texture = pEarth.CreateModelTexture(null);
              _this.IconTextures[val] = texture;
              var img = new Image;
              img.src = "/INER3_Mobile/icons/" + val + ".png";
              img.onload = function () {
                toload--;
                if (toload == 0)
                  EarthLoaded(pEarth); // 等 Icons 載完
              }
              texture.SetupTexture(img, 50, 50, 1);
            }
          });
			  });
        function EarthLoaded(pEarth){
          _this.earth_ = pEarth;
          pEarth.Scene.BackgroundColor = pEarth.CreateColor(0.2, 0.2, 0.2, 1);
          pEarth.SetupSystem(false, _this.SR_3857);
          pEarth.HasTerrain = false;
            
          var Basemap = new SuperGIS.TileLayer("https://demo.supergeotek.com/INER_NLSCEMAP/Agent.aspx",
          pEarth, { layer: 'mask', sr: _this.SR_3857 }, null);				
          _this.BaseMapLayer["NLSCMAP"] = Basemap;
          
          var Photo = new SuperGIS.TileLayer("https://wmts.nlsc.gov.tw/wmts",
          pEarth, { layer: 'PHOTO2' }, null);
          Photo.setVisible(false)				
          _this.BaseMapLayer["PHOTO"] = Photo;
          
          _this.LineData = new MVTDocument(_this.data_url + "LineData", pEarth, {minzoom: 13, maxzoom: 13, loadlayers: ["edge0"]}, function (name, features) {
            _this.LineFinish(name, features);
          });
          
          _this.LineData1 = null;
          _this.TextData = null;
          
          
          _this.IconData = new SuperGIS.VectorTileLayers(_this.data_url + "IconData",
          pEarth, [ 'pole', 'dsbnroom', 'substation', 'edgechange', 'node', 'mxfmr', 'terminal', 'sxfmr', 'distributedenergy', 'jumper', 'switch-3', 'switch-2', 'switch-0', 'youxiu', 'breaker', 'hicustomer', 'faultindicator', 'capacitor' ],
          function (layer) { _this.IconReady(layer); },
          function (array, layer) { _this.IconFinish(array, layer); });

          pEarth.SetViewpoint(120.414247, 23.650445, 70000, 0, 0, false);
              
          _this.pGlobe = pEarth.GetGlobe();
          _this.pCam = pEarth.GetCamera();
          _this.pCam.addEventListener("changed", _this.CameraChanged, false);
          _this.pScene = pEarth.GetScene();
          pEarth.addEventListener("mousedown", _this.MouseDown, false);
          //行動端監聽
          pEarth.addEventListener("touchstart", _this.MouseDown, false);										
          setTimeout(function() { _this.CheckChangeInfo(); }, _this.changeinfo_interval);
        }
      },
      CameraChanged(){
        if(this.LineData1 == null){
          if(this.pCam.Position.Z < 7500){
            this.LineData1 = new MVTDocument(this.data_url + "LineData", this.earth_, {minzoom: 13, maxzoom: 13, loadlayers: ['busbar', 'edge1', 'energy', 'connection']}, function (name, features) {
              this.LineFinish(name, features);
            });
          }
        }
        if(this.TextData == null){
          if(this.pCam.Position.Z < 10000){
            this.TextData = new MVTDocument(this.data_url + "TextData", this.earth_, {maxzoom: 15});
          }
        }
      },
      QueryInfo(obj){
        // Icon 底色須設為透明 (搭配 TextureMixType.Plus), 藉此由線條呈現效果
        this.Highlight(obj, true, 0.5);

        var feaData = this.IsPlacemark(obj) ? obj.GetFieldValues() : obj.values;
        var infoStr = '<table width="100%"><tbody>';
        for (var f in feaData)
        {
          infoStr += "<tr><td width=\"30%\">";
          infoStr += "<font color=\"#44abc9\">";
          infoStr += f;
          infoStr += "</font>";
          infoStr += "</td><td width=\"70%\" style=\"word-break: break-all;\">";
          infoStr += feaData[f];
          infoStr += "</td></tr>";
        }
        infoStr += '</tbody></table>';
        $("#div_infowindow").dialog("open");
        $("#info_context").html(infoStr);
		  },
      IsPlacemark(obj){
			  return (obj.DDDSymbol != null);
		  },
		  GetValue(obj, field){
			  return this.IsPlacemark(obj) ? obj.GetFieldValue(field) : obj.values[field];
		  },
      Highlight(obj, restore, sec, color){
        if (color == null)
          color = [1, 0, 0];
        
        if (this.IsPlacemark(obj))
        {
          if (obj.GeoType == 2)
            color.push(0);
          else
            color.push(1);
          obj.Highlight(color, restore, sec);
        }
        else
        {
          if (obj.type == 1)
            color.push(0);
          else
            color.push(1);
          this.LineData.HighlightFeature(obj, color, restore, sec);
        }
      },
      SameDevice(dv1, dv2){
        return (dv1.clr == dv2.clr && dv1.dir == dv2.dir && dv1.fdr1 == dv2.fdr1 && dv1.fsc == dv2.fsc && dv1.ufid == dv2.ufid);
      },
      CheckChange(arr1, arr2){
        if (arr1.length != arr2.length)
          return true;

        for (var i = 0; i < arr1.length; i++){
          if (!this.SameDevice(arr1[i], arr2[i]))
            return true;
        }
        return false;
      },
      SortDevice(d1,d2){
        return (d1.ufid - d2.ufid);
      },
      EventMarkerClear(){
        for(var i in this.eventMarkers.MTransfer)
          this.earth_.PlacemarkObjects.Remove(this.eventMarkers.MTransfer[i]);
        for(var i in this.eventMarkers.MPoweroff)
          this.earth_.PlacemarkObjects.Remove(this.eventMarkers.MPoweroff[i]);
        for(var i in this.eventMarkers.MFault)
          this.earth_.PlacemarkObjects.Remove(this.eventMarkers.MFault[i]);
        for(var i in this.eventMarkers.MShortcircuit)
          this.earth_.PlacemarkObjects.Remove(this.eventMarkers.MShortcircuit[i]);
        this.eventMarkers.fdr_labels = {};
        this.eventMarkers.MPoweroff = [];
        this.eventMarkers.MFault = [];
        this.eventMarkers.MShortcircuit = [];
        this.eventMarkers.MTransfer = [];
      },
      CheckChangeInfo(){
        var url = this.host_url + "FeederAnalysis/GetChangedDeviceList";
        var xmlHttp = new XMLHttpRequest();
        var _this = this;
        xmlHttp.open("GET", url, true);
        xmlHttp.send(null);
        xmlHttp.onload = function (e) {
          
          // 取得所有變更的導線及設備
          var tmp_dvs = JSON.parse(e.target.responseText);
          tmp_dvs.sort(this.SortDevice);
          if (!_this.CheckChange(tmp_dvs, _this.changedDevices))
          {
            setTimeout(function() { _this.CheckChangeInfo(); }, _this.changeinfo_interval);
            return;
          }
          _this.changedDevices = tmp_dvs;
          _this.EventMarkerClear();
          
          var tmp_pms = [];
          for (var i = 0; i < tmp_dvs.length; i++)
          {
            var dv = tmp_dvs[i];
            var id = dv.fsc.toString() + "." + dv.ufid.toString();
            var pms = _this.g_pms[id];
            if (pms == null)
            {
              // 此 dv 對應的 pms 未載入, 為確保下次依然 CheckChange 會判為有變更再次進入這裡
              // 刻意將此 dv 的任意屬性調整, 目的是使下次 SameDevice 一定被判為 false
              dv.ufid = -1;
              continue;
            }	
              
            for (var j = 0; j < pms.length; j++)
            {
              var pm = pms[j];
              if ((this.IsPlacemark(pm) && pm.GetMeshes() == null) || (!this.IsPlacemark(pm) && pm.parent.VecBuf == null))
              {
                // 此 pm 未載入, 同上
                dv.ufid = -1;
                continue;
              }
              var clr;
              if (dv.dir == 99) // 不通電
                clr = [0, 0, 0];
              else if (dv.dir == -1) // 視為故障
                clr = [1, 0, 0];
              else if (dv.dir == -2) // 視為異常
                clr = [0, 0, 0];
              else
                clr = this.HexToRGB(dv.clr);
                        
              this.Highlight(pm, false, null, clr);
                
              if (dv.fsc == 106) // 導線
              {
                var oid = this.GetValue(pm, "oid");
                pm.dir_changed = true;
                this.UpdateSurface(pm, dv.dir, clr);
                //取得出狀況饋線的編號、最大最小邊界
                var dirstring = (dv.dir != 99 && dv.dir != -1 && dv.dir != -2) ? "1" : dv.dir.toString();
                var name = dv.fdr1.toString() + ":" + dirstring;
                var ext = pm.extent;
                var fl = this.eventMarkers.fdr_labels[name];
                if (!fl)
                  fl = this.eventMarkers.fdr_labels[name] = ext;
                else
                {
                  fl.xmin = Math.min(fl.xmin, ext.xmin);
                  fl.ymin = Math.min(fl.ymin, ext.ymin);
                  fl.xmax = Math.max(fl.xmax, ext.xmax);
                  fl.ymax = Math.max(fl.ymax, ext.ymax);
                }
              }
              tmp_pms.push(pm);
            }
          }
          // 針對出狀況的饋線，建立醒目label標示			
          for (var i in _this.eventMarkers.fdr_labels)
          {
            var state = i.split(":")[1];
            var ext = _this.eventMarkers.fdr_labels[i];
            if (state == -1)
            {
              state = "Fault";
            }
            else if (state == -2)
            {					
              state = "Shortcircuit";
            }
            else if (state == 99)
            {
              state = "Poweroff";
            }
            else
            {
              state = "Transfer";
            }
            var loc = { X: (ext.xmin + ext.xmax) / 2, Y:(ext.ymin + ext.ymax) / 2, Z: 0 };
            var marker = new SuperGIS.Marker(this.earth_, loc, "", "../ineradms/images/" + state + ".png",{FixedSize : true});
            var pmlabel = marker.getPlacemark();
            pmlabel.DDDSymbol.Size = 60;
            pmlabel.DDDSymbol.DynamicSize = false;
            pmlabel.Visible = this.eventMarkers.VisibleFlag;
            if (state == "Fault")
              this.eventMarkers.MFault.push(pmlabel);
            else if (state == "Shortcircuit")
              this.eventMarkers.MShortcircuit.push(pmlabel);
            else if (state == "Poweroff")
              this.eventMarkers.MPoweroff.push(pmlabel);
            else
              this.eventMarkers.MTransfer.push(pmlabel);
          }
          
          // 若這次要變更的還是在上次的 dirty_pms 中, 不用還原
          for (var i = 0; i < _this.dirty_pms.length; i++)
          {
            var pm = _this.dirty_pms[i];
            var found = false;
            for (var j = 0; j < tmp_pms.length; j++)
            {
              if (pm == tmp_pms[j])
              {
                found = true;
                break;
              }
            }
            if (found)
              continue;

            var clr = _this.HexToRGB(_this.GetValue(pm, "symcolor"));
            if (pm.GeoType == 2) // 設備
            {
              var tid = _this.GetValue(pm, "tid");
              var ostatus = _this.GetValue(pm, "ostatus");
              if (tid == 114 && ostatus == 0) // 常用開關為黑
                clr = [0, 0, 0];
            }
            _this.Highlight(pm, false, null, clr);
            if (pm.dir_changed)
            {
              var dir = _this.GetValue(pm, "dir");
              _this.UpdateSurface(pm, dir);
              pm.dir_changed = null;
            }
          }
          _this.dirty_pms = tmp_pms;
          
          setTimeout(function() { _this.CheckChangeInfo(); }, _this.changeinfo_interval);
        }
      },
      /*no use*/
      Update(){
        this.changedDevices = [];
        this.CheckChangeInfo();
      },
      /*no use*/
      RestoreDefault(){
        for (var i = 0; i < this.dirty_pms.length; i++)
        {
          var pm = this.dirty_pms[i];
          var clr = this.HexToRGB(this.GetValue(pm, "symcolor"));
          if (pm.GeoType == 2) // 設備
          {
            var tid = this.GetValue(pm, "tid");
            var ostatus = this.GetValue(pm, "ostatus");
            if (tid == 114 && ostatus == 0) // 常用開關為黑
              clr = [0, 0, 0];
          }
          this.Highlight(pm, false, null, clr);
          if (pm.dir_changed)
          {
            var dir = this.GetValue(pm, "dir");
            this.UpdateSurface(pm, dir);
            pm.dir_changed = null;
          }
        }
        this.changedDevices = [];
      },
      MouseDown(tEvent){
        this.down_x = tEvent.x;
        this.down_y = tEvent.y;
        if(tEvent.type == 'touchstart')
        {
          this.down_x = tEvent.touches[0].clientX;
          this.down_y = tEvent.touches[0].clientY;
        }
      },
      MouseUp(tEvent){
			  // if (tEvent.x != this.down_x || tEvent.y != this.down_y)
				//return;
				
        if (this.query)// 單點查詢
        {
          var pm = this.PickPlacemark(this.down_x, this.down_y);
          if (!pm)
            return;
          this.QueryInfo(pm); // 單點查詢
        }
			
        if (this.queryTPCLID)
        {
          var CurPosition = this.earth_.GetCurrentPosition();
          var CurLocation = this.pGlobe.RayTest(this.pCam.EyeAt, this.pCam.Ray(CurPosition), 1, true);
          var TPC = new TaipowerCoordinateTransform();
          if (CurLocation)
          {
            var pt = this.pGlobe.GeodeticFromCartesian(CurLocation);
            var pt84 = { X: pt.X, Y: pt.Y, Z: 0 };
            if (!this.pGlobe.IsGCS())
              pt84 = SpatialReference.CoordinateTransform(this.pGlobe.SpatialReference, this.SR_4326, null, pt84);
            var pt97 = SpatialReference.CoordinateTransform(this.SR_4326, this.SR_3826, null, pt84);

            var sTPCPoint = "台電圖號坐標( " + TPC.LngLatToTPCPoint(pt84) + " )";
            alert(sTPCPoint);
          }
        }
      },
      /*no use*/
      MouseMove(tEvent){
        if (MouseType == 1)
          this.earth_.Invalidate();
      },
      PickPlacemark(x, y){
      var feature0 = null;
      var feature1 = null;
      for (var i = x - 2; i < x + 2; i++)
      {
        for (var j = y - 2; j < y + 2; j++)
        {
                  if(this.LineData) feature0 = LineData.HitTestFeature(i, j);
                  if(this.LineData1) feature1 = LineData1.HitTestFeature(i, j);
          if (feature0 || feature1)
            break;
        }
        if (feature0 || feature1)
          break;
        }
        if (feature0)
          return feature0;
        if (feature1)
          return feature1;
      
        var pm = this.earth_.PickPlacemark(x, y);
        if (pm == null) {
          for (var i = 1; i <= 3; i++) {
            for (var j = -i; j <= i; j++) {
              for (var k = -i; k <= i; k++) {
                pm = this.earth_.PickPlacemark(x + j, y + k);
                if (pm != null)
                  return pm;
              }
              if (pm != null)
                return pm;
            }
            if (pm != null)
              return pm;
          }
        }
        return pm;
      },
      HexToRGB(hex){
        if (hex.charAt(0) == '#')
          hex = hex.substring(1, hex.length);
        var r = parseInt(hex.substring(0, 2), 16) / 255;
        var g = parseInt(hex.substring(2, 4), 16) / 255;
        var b = parseInt(hex.substring(4, 6), 16) / 255;
        return [r, g, b];
      },
      AddArrow(feature, oid, clr){
        var pts = feature.geometry[0];
        var dir = feature.values["dir"];
        var rgb = clr;
        if (this.current_visible)
          rgb = rgb + "FF";
        else
          rgb = rgb + "00";
        var size;
        for (var i = 0; i < pts.length - 3; i += 3)
        {
          size = 1;
          var first, second;
          if (dir == 1)
          {
            first = pts.slice(i, i + 3);
            second = pts.slice(i + 3, i + 6);
          }
          else
          {
            first = pts.slice(i + 3, i + 6);
            second = pts.slice(i, i + 3);
          }

          var dist = (first[0] - second[0]) * (first[0] - second[0]) + (first[1] - second[1]) * (first[1] - second[1]);
          var angle = Math.atan((first[1] - second[1]) / (second[0] - first[0]));
          var tmps = [];
          if(this.arrowCount % 4 == 0)
          {
            if (dist >= 400 && feature.name == 'edge0')
            {
              var aps_13 = this.CreateArrowPoints(first, second, angle, 36);
              tmps.push(this.earth_.AddPolygonSurface(oid, aps_13, rgb, "", 8, 11));
            }
            if (dist >= 400)
            {
              var aps_14 = this.CreateArrowPoints(first, second, angle, 12);
              tmps.push(this.earth_.AddPolygonSurface(oid, aps_14, rgb, "", 12, 13));
            }
          }
          this.arrowCount++;
          if (dist >= 100)
          {
            var aps_14 = this.CreateArrowPoints(first, second, angle, 3);
            tmps.push(this.earth_.AddPolygonSurface(oid, aps_14, rgb, "", 14, 18));
          }
          for (var j = 0; j < tmps.length; j++)
          {
            var surface = tmps[j];
            surface.fp = first;
            surface.sp = second;
            surface.dir = dir;
            if (this.g_surfaces[oid] == null)
              this.g_surfaces[oid] = [surface];
            else
              this.g_surfaces[oid].push(surface);
          }
        }
      },
      ProcessSurfaceGeometry(pGlobe, sWKT){
        var pos = sWKT.indexOf('(');
        var type = sWKT.slice(0, pos);
        sWKT = sWKT.trim();

        var minX = null;
        var maxX = null;
        var minY = null;
        var maxY = null;
        if (type == "POLYGON")
        {
          var pGeos = [];
          sWKT = sWKT.slice(pos + 1, sWKT.lastIndexOf(')'));
          var rings = sWKT.trim().split('),');
          for (var i = 0; i < rings.length; i++)
          {
            var ring = rings[i].slice(1, rings[i].length - 1);
            var pairs = ring.trim().split(',');
            var pts = [];
            for (var j = 0; j < pairs.length; j++)
            {
              var pair = pairs[j];
              var xyz = pair.trim().split(' ');
              pts.push(parseFloat(xyz[0]), parseFloat(xyz[1]), 0);
            }
            CoordinateTransform(true, _this.pGlobe.SpatialReference, s_WGS84, pts, pts.length / 3);
            for (var j = 0; j < pts.length; j += 3)
            {
              pGeos.push(pts[j], pts[j + 1]);
              if (minX == null || pts[j] < minX) minX = pts[j];
              if (maxX == null || pts[j] > maxX) maxX = pts[j];
              if (minY == null || pts[j + 1] < minY) minY = pts[j + 1];
              if (maxY == null || pts[j + 1] > maxY) maxY = pts[j + 1];
            }
          }
          return { Points: pGeos, Extent: [ minX, maxY, maxX, minY ], Type: type };
        }
        return null;
      },
      CreateArrowPoints(p1, p2, angle, size){
        var sina = Math.sin(angle);
        var cosa = Math.cos(angle);
        var x = (p1[0] + p2[0]) / 2;
        var y = (p1[1] + p2[1]) / 2;
        var	x1 = x + size * sina;
        var	y1 = y + size * cosa;
        var x2 = x - size * sina;
        var y2 = y - size * cosa;
        var x3, y3;
        size *= 3;
        var tx1 = x - size * cosa;
        var ty1 = y + size * sina;
        var tx2 = x + size * cosa;
        var ty2 = y - size * sina;
        var d1 = (tx1 - p2[0]) * (tx1 - p2[0]) + (ty1 - p2[1]) * (ty1 - p2[1]);
        var d2 = (tx2 - p2[0]) * (tx2 - p2[0]) + (ty2 - p2[1]) * (ty2 - p2[1]);
        if (d1 < d2)
        {
          x3 = tx1;
          y3 = ty1;
        }
        else
        {
          x3 = tx2;
          y3 = ty2;
        }
        return [x1, y1, x2, y2, x3, y3];
      },
      CreateArrowGeometry(surface, dir){
        var first = (surface.dir == dir) ? surface.fp : surface.sp;
        var second = (surface.dir == dir) ? surface.sp : surface.fp;
        var angle = Math.atan((first[1] - second[1]) / (second[0] - first[0]));
        var size;
        if (surface.minLevel == 10)
          size = 12;
        else if (surface.minLevel == 12)
          size = 6;
        else if (surface.minLevel == 14)
          size = 3;
        var aps = this.CreateArrowPoints(first, second, angle, size)
        var wkt = "POLYGON((" + aps[0].toString() + " " + aps[1].toString() + "," +
                  aps[2].toString() + " " + aps[3].toString() + "," +
                  aps[4].toString() + " " + aps[5].toString() + "))";
        return this.ProcessSurfaceGeometry(this.pGlobe, wkt);
      },
      CreateBufferWKT(surface){
        var f = surface.fp;
        var s = surface.sp;
        var angle = Math.atan((f[1] - s[1]) / (s[0] - f[0]));
        
        var sina = Math.sin(angle);
        var cosa = Math.cos(angle);
        var r = 50;
        var pts = [];
        pts.push([f[0] - r * sina, f[1] - r * cosa]);
        for (var i = 30; i <= 180; i += 30)
        {
          var a = (f[0] > s[0]) ? -i : i;
          sina = Math.sin(angle + a * Math.PI / 180);
          cosa = Math.cos(angle + a * Math.PI / 180);
          pts.push([f[0] - r * sina, f[1] - r * cosa]);
        }
        sina = Math.sin(angle);
        cosa = Math.cos(angle);
        pts.push([f[0] + r * sina, f[1] + r * cosa]);
        pts.push([s[0] + r * sina, s[1] + r * cosa]);
        for (var i = 30; i <= 180; i += 30)
        {
          var a = (f[0] > s[0]) ? -i : i;
          sina = Math.sin(angle + a * Math.PI / 180);
          cosa = Math.cos(angle + a * Math.PI / 180);
          pts.push([s[0] + r * sina, s[1] + r * cosa]);
        }

        var wkt = "POLYGON((";
        for (var i = 0; i < pts.length; i++)
        {
          wkt += pts[i][0].toString() + " " + pts[i][1].toString();
          if (i != pts.length - 1)
            wkt += ",";
        }
        wkt += "))";
        return wkt;
      },
      UpdateSurface(pm, dir, clr){
        var oid = this.GetValue(pm, "oid");
        var fdr = pm.values.fdr1;
        var surfaces = this.g_surfaces[oid];
        var surfaces2 = this.g_surfaces2[oid];
        if (dir != -2) // -2 視為異常, 不用變電流方向
        {
          for (var i in surfaces)
          {
            var surface = surfaces[i];
            if (dir == 99 || dir == -1)
              surface.Visible = false;
            else
            {
              surface.Visible = true;
              surface.Geometry = this.CreateArrowGeometry(surface, dir);
            }

            var rgb = (clr != null) ? clr.slice(0) : this.HexToRGB(this.GetValue(pm, "symcolor"));
            for (var j = 0; j < 3; j++)
              rgb[j] = rgb[j] * 255;

            var hc = "#";
            for (var j = 0; j < 3; j++)
              hc += rgb[j].toString(16).padStart(2, '0');
            hc += (this.current_visible) ? "ff" : "00";
            surface.Style = hc;

            for (var j = 0; j < surface.CoveredTiles.length; j++)
              surface.CoveredTiles[j].Invalidate();
          }
        }

        if (surfaces2 == null) // buffer 未建
        {
          if (dir == 99 || dir == -1 || dir == -2)
          {
            this.g_surfaces2[oid] = [];
            for (var i in surfaces)
            {
              var wkt50 = this.CreateBufferWKT(surfaces[i], 75);
              //var wkt100 = this.CreateBufferWKT(surfaces[i], 100);
              if(this.buffer_visible)
                var rgb = (dir == 99) ? "#bebebeff" : (dir == -1) ? "#ffb4b4ff" : "#ff7f27ff";
              else
                var rgb = (dir == 99) ? "#bebebe00" : (dir == -1) ? "#ffb4b400" : "#ff7f2700";
              var buffer50 = this.earth_.AddSurface(oid, wkt50, rgb, "", 6, 18);
              this.g_surfaces2[oid].push(buffer50);
            }
          }
        }
        else
        {
          for (var i in surfaces2)
          {
            var surface = surfaces2[i];
            if (dir != 99 && dir != -1 && dir != -2)
              surface.Visible = false;
            else
            {
              surface.Visible = true;
              if(this.buffer_visible)
                var rgb = (dir == 99) ? "#bebebeff" : (dir == -1) ? "#ffb4b4ff" : "#ff7f27ff";
              else
                var rgb = (dir == 99) ? "#bebebe00" : (dir == -1) ? "#ffb4b400" : "#ff7f2700";
              surface.Style = rgb;
            }
            for (var j = 0; j < surface.CoveredTiles.length; j++)
              surface.CoveredTiles[j].Invalidate();
          }
        }
      },
      LineFinish(name, features){
        var _this = this;
        for (var i = 0; i < features.length; i++)
        {
          var feature = features[i];
          feature.name = name;
          var tid = feature.values["tid"];
          var oid = feature.values["oid"];
          var clr = feature.values["symcolor"];

          // if (name == "edge0" || name == "edge1") // 導線才加電流方向
          //   _this.AddArrow(feature, oid, clr);
            
          var id = tid.toString() + "." + oid.toString();
          if (_this.g_pms[id] == null)
            _this.g_pms[id] = [feature];
          else
            _this.g_pms[id].push(feature);
        }
        _this.changedDevices = []; // 使強制 CheckChangeInfo
      },
      IconReady(layer){
        this.Layers[layer.Name] = this.IconLayers[layer.Name] = layer;
        layer.TextureMixType = SuperGIS.DDDCore.TextureMixType.Plus;
        layer.MaxVHeight = 600;
      },
      IconFinish(array, layer){
        var bbox = layer.BoundingBox;
        var pLayerOrigin = [(bbox.MinX + bbox.MaxX) / 2, (bbox.MinY + bbox.MaxY) / 2, 0];
        this.pGlobe.CartesiansFromGeodetics(1, pLayerOrigin, pLayerOrigin);
        h = this.LayerHeight[layer.Name];
        var _this = this;
        for (var i = 0; i < array.length; i++)
        {
          var mark = array[i];
          mark.Name = layer.Name;
          var tid = mark.GetFieldValueByIndex(1);
          var oid = mark.GetFieldValueByIndex(2);
          var clr = mark.GetFieldValueByIndex(6);
          var ang = mark.GetFieldValueByIndex(12);
          var sym = mark.GetFieldValueByIndex(13);
          var ostatus = mark.GetFieldValueByIndex(15);
          var texture = _this.IconTextures[sym];
          if (!texture)
            console.log("no texture: " + sym);
            
          if (tid == 114 && ostatus == 0) // 常用開關為黑
            clr = "#000000";
            
          var symbol = _this.IconSymbols[clr + sym];
          if (!symbol)
          {
            var rgb = _this.HexToRGB(clr);
            // 底色皆設為透明 (需搭配 TextureMixType.Plus), 藉此由線條呈現效果, 包括 Highlight
            var material = _this.earth_.CreateModelMaterial(0, _this.earth_.CreateColor(rgb[0], rgb[1], rgb[2], 0));
            symbol = _this.IconSymbols[clr + sym] = _this.earth_.CreateSimpleDDDFillSymbol(material, null);
            symbol.Texture = texture;
          }

          var pts = mark.Geometry[0].pGeoArr;
          pts.splice(pts.length - 3, pts.length);
          var sum_x = 0, sum_y = 0;
          for (var j = 0; j < pts.length; j += 3)
          {
            sum_x += pts[j];
            sum_y += pts[j + 1];
          }
          var pt = { X: sum_x / (pts.length / 3), Y: sum_y / (pts.length / 3), Z: 0 };
          var w = Math.sqrt((pts[0] - pts[3]) * (pts[0] - pts[3]) + (pts[1] - pts[4]) * (pts[1] - pts[4])) / 2;
          if (mark.Name == 'sxfmr')
            w = w * 1.3;
          if (_this.pGlobe.IsGCS())
          {
            pt = SpatialReference.CoordinateTransform(_this.SR_3857, SR_4326, null, pt);
            w /= 111000;
          }
          
          mark.Geometry = null;
          mark.Centroid = pt;
          mark.DDDSymbol = symbol;
          var pMesh = new SuperGIS.DDDCore.Mesh;
          mark.SetMeshes([{ PrimitiveType: SuperGIS.DDDCore.PrimitiveType.Triangles, Mesh: pMesh }]);

          var varCoord = [];
          var varNormal = [];
          var varTexture = [];
          var varIndex = [];

          var xy = [];
          var sin = Math.sin(ang * Math.PI / 180);
          var cos = Math.cos(ang * Math.PI / 180);
          var pts = [[-w, w], [-w, -w], [w, w], [w, -w]];
          for (var j = 0; j < pts.length; j++)
          {
            var x = pts[j][0];
            var y = pts[j][1];
            var xp = x * cos - y * sin;
            var yp = y * cos + x * sin;
            xy.push(pt.X + xp, pt.Y + yp, h);
          }
          varIndex.push(0, 1, 2, 1, 2, 3);
          varTexture.push(0, 1, 0, 0, 1, 1, 1, 0);

          _this.pGlobe.CartesiansFromGeodetics(xy.length / 3, xy, xy);
          for (var j = 0; j < xy.length; j += 3)
          {
            varCoord.push(xy[j] - pLayerOrigin[0], xy[j + 1] - pLayerOrigin[1], xy[j + 2] - pLayerOrigin[2]);
            varNormal.push(0, 0, 1);
          }
          
          pMesh.setVertexCoord(varCoord);
          pMesh.setVertexNormal(varNormal);
          pMesh.setTextureCoord(varTexture);
          pMesh.setIndex(varIndex);
          
          var id = tid.toString() + "." + oid.toString();
          if (_this.g_pms[id] == null)
            _this.g_pms[id] = [mark];
          else
            _this.g_pms[id].push(mark);
          }
        this.changedDevices = []; // 使強制 CheckChangeInfo
      },
      /* no used*/
      LayerManager(){
        $("#div_layer").dialog("open");
      },
      LayerVisible(name){
        if (name == "switch") {
                  this.Layers["switch-0"].Visible = !this.Layers["switch-0"].Visible;
                  this.Layers["switch-2"].Visible = !this.Layers["switch-2"].Visible;
                  this.Layers["switch-3"].Visible = !this.Layers["switch-3"].Visible;
              }else if (name == "current_dir")
        {
          var surfaces = this.earth_.GetSurfaces();
          for (var i in this.g_surfaces)
          {
            var surfaces = this.g_surfaces[i];
            for (var j in surfaces)
            {
              var sf = surfaces[j];
              if (this.current_visible)
                sf.Style = sf.Style.slice(0, 7) + "00";
              else
                sf.Style = sf.Style.slice(0, 7) + "FF";
              for (var j in sf.CoveredTiles)
              {
                var tile = sf.CoveredTiles[j];
                tile.Invalidate();
              }
            }
          }
          this.earth_.Invalidate();
          this.current_visible = !this.current_visible;
        }
        else if (name == "edge0")
        {
          this.LineData.SetLayerVisible(name, !LineData.GetLayerVisible(name));
        }
        else if (name == "edge1" || name == "busbar" || name == "energy" || name == "connection")
        {
          this.LineData1.SetLayerVisible(name, !LineData1.GetLayerVisible(name));
        }
        else if (name == "annotation" || name == "dsbnroom_t" || name == "pole_t" || name == "substation_t" || name == "substation_n" || name == "connection_t" || name == "switch_t" || name == "breaker_t" || name == "hicustomer_t")
        {
          this.TextData.SetLayerVisible(name, !this.TextData.GetLayerVisible(name));
        }
        else if (name == "buffer")
        {
          for (var i in this.g_surfaces2)
          {
            var surfaces = this.g_surfaces2[i];
            for (var j in surfaces)
            {
              var sf = surfaces[j];
              if (this.buffer_visible)
                sf.Style = sf.Style.slice(0, 7) + "00";
              else
                sf.Style = sf.Style.slice(0, 7) + "FF";
              for (var j in sf.CoveredTiles)
              {
                var tile = sf.CoveredTiles[j];
                tile.Invalidate();
              }
            }
          }
          this.earth_.Invalidate();
          this.buffer_visible = !this.buffer_visible;
        }
        else if (name == "bufferlabel")
        {
          this.eventMarkers.VisibleFlag = !this.eventMarkers.VisibleFlag;
          for(var i in this.eventMarkers.MTransfer)
            this.eventMarkers.MTransfer[i].Visible = this.eventMarkers.VisibleFlag;
          for(var i in this.eventMarkers.MPoweroff)
            this.eventMarkers.MPoweroff[i].Visible = this.eventMarkers.VisibleFlag;
          for(var i in this.eventMarkers.MFault)
            this.eventMarkers.MFault[i].Visible = this.eventMarkers.VisibleFlag;
          for(var i in this.eventMarkers.MShortcircuit)
            this.eventMarkers.MShortcircuit[i].Visible = this.eventMarkers.VisibleFlag;
        }
        else if (name == "NLSCMAP" || name == 'PHOTO')
          this.BaseMapLayer[name].setVisible(!this.BaseMapLayer[name].getVisible());
        else
          this.Layers[name].Visible = !this.Layers[name].Visible;
        
        var t_names = this.TextOfIcon[name];
        if (t_names)
        {
          for (var i in t_names)
            this.LayerVisible(t_names[i]);
        }
        this.earth_.Invalidate();
      },
      /*no use*/
      QueryOpen(){
        if(!this.query)
        {
          this.earth_.addEventListener("mouseup", this.MouseUp, false);							
          this.earth_.addEventListener("touchend", this.MouseUp, false);
          document.getElementById("querybutton").value = "關閉圖資查詢";
          this.query = true;
        }
        else
        {
          this.earth_.removeEventListener("mouseup", this.MouseUp, false);							
          this.earth_.removeEventListener("touchend", this.MouseUp, false);
          document.getElementById("querybutton").value = "開啟圖資查詢";
          this.query = false;
        }
      },
      /*no use*/
      QueryTPLIDOpen(){
        if(!this.queryTPCLID)
        {
          this.queryTPCLID = true;
          this.earth_.addEventListener("mouseup", this.MouseUp, false);							
          this.earth_.addEventListener("touchend", this.MouseUp, false);				
          document.getElementById("querybutton2").value = "關閉坐標查詢";
        }
        else
        {
          this.queryTPCLID = false;
          this.earth_.removeEventListener("mouseup", this.MouseUp, false);							
          this.earth_.removeEventListener("touchend", this.MouseUp, false);				
          document.getElementById("querybutton2").value = "開啟坐標查詢";
        }
      },
      /*no use*/
      locate(){
			  this.earth_.SetViewpoint(120.3358,23.6276,1000,0,0); //X Y 高度 方位角 傾角
		  },
      /*no use*/
      createmarker(){
        var tpclidlist = ["K0046FD31", "J9532AE52","J9652FB41","K0349DE63","K0546DB66","K0242BE22"];
        //以圖號坐標取得坐標值，並建立地圖標記
        for (var i = 0; i < tpclidlist.length; i++)
        {
          var lnglat = (new TaipowerCoordinateTransform()).TPCPointToEPSG3857(tpclidlist[i]);
          var loc = { X: lnglat.X, Y:lnglat.Y , Z: 0 };
          var marker = new SuperGIS.Marker(this.earth_, loc, "這是標題文字", "../ineradms/images/map.svg",{FixedSize : true}); //地圖物件 / 位置 / 標題文字 / 圖片路徑 / 樣式參數
          var pmlabel = marker.getPlacemark();
          pmlabel.DDDSymbol.Size = 60; // 標記大小
          pmlabel.DDDSymbol.DynamicSize = false; // 標記是否隨比例尺縮放變換大小
          pmlabel.Visible = true; // 標記是否可見
          this.markerlist.push(pmlabel);
        }
      },
      /*no use*/
      markercluster(){
        var _this = this;
        this.clusterlayer = new SuperGIS.ClusterLayer(
            this.earth_, // 地圖物件
            { geojson: '', // 空的即可，這個是給外部資源引入的
              clusterRadius: 50, //搜尋半徑
              paint: { 'circle-color': '#11b4da', //樣式設定
                  'circle-stroke-color': '#ffffff',
                  'circle-radius': 4,
                  'cluster-color': ['#51bbd6', 100, '#f1f075', 750, '#f28cb1'],
                  'cluster-stroke-color': ['#ffffff', 100, '#ffffff', 750, '#ffffff'],
                  'cluster-radius': [20, 100, 30, 750, 40],
                  'text-size': 12,
                  'text-font': 'DIN Offc Pro Medium',
                  'text-color': 'black' }}, function() { _this.clusterReady(); });
                  
        for (var i = 0; i < this.markerlist.length; i++) //擴充標記的屬性，讓他有x,y給cluster的方法吃
        {
          var marker = this.markerlist[i];
          var pos = marker.GetExtent();
          marker.x = pos[0];
          marker.y = pos[1];
          marker.Visible = false;
        }
        this.clusterlayer.AddPoints(this.markerlist); //加資料
      },
      clusterReady(){
         // 每次 clusters 重產後觸發, 此時機控制 cluster 中只有一個 feature 的顯示原 marker 取代 cluster
        for (var i = 0; i < this.markerlist.length; i++)
        {
          var marker = this.markerlist[i];
          marker.Visible = false;
        }
        var clusters = this.clusterlayer.getMarkerCluster().getClusters();
        for (var i = 0; i < clusters.length; i++)
        {
          var features = clusters[i].features;
          if (features.length == 1)
          {
            clusters[i].visible = false;
            features[0].source.Visible=true;
          }
        }
      },
      /*map methods*/
      openAnnounce(e){
        if(e){
          QueryTPLIDOpen();
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
      SR_3828(){
        return EPSG.CreateSpatialReference(3828)
      },
      SR_3826(){
        return EPSG.CreateSpatialReference(3826)
      },
      SR_3857(){
        return EPSG.CreateSpatialReference(3857)
      },
      SR_4326(){
        return EPSG.CreateSpatialReference(4326)
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
