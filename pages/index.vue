<template>
  <div class="container" id="body" >
    {{windowWidth}}
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
        {
          src:
            'https://code.jquery.com/jquery-1.12.4.js',
        },
        {
          src:
            'https://code.jquery.com/ui/1.12.1/jquery-ui.js',
        },
      ],
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
          PShortcircuit:0
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
        current_visible : false,
        buffer_visible : true,
        topo_down_x, topo_down_y,
        bDown : false,
        bPan : false,
        host_url : "https://demo.supergeotek.com/",
		    data_url : "https://demo.supergeotek.com/INERADMS_Integration/磚New/"
      }
    },
    mounted(){
      //documentLoad();
      this.jqTest();
    },
    methods:{
      jqTest(){
        $('body').append('<p>XXXXXXX</p>')
        //console.log($('body'));
      },
      /*map methods*/
      documentLoad(){
		    SuperGIS.Initialize("/ServerGate/", function () {
		        SuperGIS.ServerEarth.Initialize(InitEarth)
		    })
		  },
      
      InitEarth(){
	      var pBody = new SuperGIS.Windows.HTMLContainer(document.getElementById("body"));
	      var sHost = location.href;
	      var idx = sHost.indexOf("/", 8);
	      if (idx >= 0) sHost = sHost.substring(0, idx);
	      CreateHTML5Earth(pBody, function (pEarth){
          var material = pEarth.CreateModelMaterial(0, pEarth.CreateColor(0, 0, 0, 1));
          // 載入定義圖示的文件
          var xhr = new XMLHttpRequest();
          xhr.open('GET', 'icons/OCTIcons.txt');
          xhr.onreadystatechange = function(){
					var toload = 0;
					if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200){
            var lines = xhr.responseText.split('\r\n');
            for (var ln in lines){
              var val = lines[ln];
              if (val.length == 0)
                continue;
              
              toload++;
              var texture = pEarth.CreateModelTexture("");
              IconTextures[val] = texture;
              var img = new Image;
              img.src = "icons/" + val + ".png";
              img.onload = function() {
                toload--;
                if (toload == 0)
                  EarthLoaded(pEarth); // 等 Icons 載完
                }
                texture.SetupTexture(img, 50, 50, 1);
              }
					  }
				  }
				  xhr.send();
			  });
        function EarthLoaded(pEarth){
          earth_ = pEarth;
          pEarth.Scene.BackgroundColor = pEarth.CreateColor(0.2, 0.2, 0.2, 1);
          pEarth.SetupSystem(false, SR_3857);
          pEarth.HasTerrain = false;
            
          Basemap = new SuperGIS.TileLayer("https://demo.supergeotek.com/INER_NLSCEMAP/Agent.aspx",
          pEarth, { layer: 'mask', sr: SR_3857 }, null);					
          BaseMapLayer["NLSCMAP"] = Basemap;
          
          Photo = new SuperGIS.TileLayer("https://wmts.nlsc.gov.tw/wmts",
          pEarth, { layer: 'PHOTO2' }, null);
          Photo.setVisible(false)				
          BaseMapLayer["PHOTO"] = Photo;
          
          LineData = new MVTDocument(data_url + "LineData", pEarth, {minzoom: 13, maxzoom: 13, loadlayers: ["edge0"]}, function (name, features) {
            LineFinish(name, features);
          });
          
          LineData1 = null;
          TextData = null;
          
          
          IconData = new SuperGIS.VectorTileLayers(data_url + "IconData",
          pEarth, [ 'pole', 'dsbnroom', 'substation', 'edgechange', 'node', 'mxfmr', 'terminal', 'sxfmr', 'distributedenergy', 'jumper', 'switch-3', 'switch-2', 'switch-0', 'youxiu', 'breaker', 'hicustomer', 'faultindicator', 'capacitor' ],
          function (layer) { IconReady(layer); },
          function (array, layer) { IconFinish(array, layer); });

          pEarth.SetViewpoint(120.414247, 23.650445, 70000, 0, 0, false);
              
          pGlobe = pEarth.GetGlobe();
          pCam = pEarth.GetCamera();
          pCam.addEventListener("changed", CameraChanged, false);
          pScene = pEarth.GetScene();
          pEarth.addEventListener("mousedown", MouseDown, false);
          //行動端監聽
          pEarth.addEventListener("touchstart", MouseDown, false);										
          setTimeout(function() { CheckChangeInfo(); }, changeinfo_interval);
        }
      },
      CameraChanged(){
        if(LineData1 == null){
          if(pCam.Position.Z < 7500){
            LineData1 = new MVTDocument(data_url + "LineData", earth_, {minzoom: 13, maxzoom: 13, loadlayers: ['busbar', 'edge1', 'energy', 'connection']}, function (name, features) {
                  LineFinish(name, features);
            });
          }
        }
        if(TextData == null){
          if(pCam.Position.Z < 10000){
            TextData = new MVTDocument(data_url + "TextData", earth_, {maxzoom: 15});
          }
        }
      },
      QueryInfo(obj){
        // Icon 底色須設為透明 (搭配 TextureMixType.Plus), 藉此由線條呈現效果
        Highlight(obj, true, 0.5);

        var feaData = IsPlacemark(obj) ? obj.GetFieldValues() : obj.values;
        var infoStr = '<table width="100%">';
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
        infoStr += '</table>';
        $("#div_infowindow").dialog("open");
        $("#info_context").html(infoStr);
		  },
      IsPlacemark(obj){
			  return (obj.DDDSymbol != null);
		  },
		  GetValue(obj, field){
			  return IsPlacemark(obj) ? obj.GetFieldValue(field) : obj.values[field];
		  },
      Highlight(obj, restore, sec, color){
        if (color == null)
          color = [1, 0, 0];
        
        if (IsPlacemark(obj))
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
          LineData.HighlightFeature(obj, color, restore, sec);
        }
      },
      SameDevice(dv1, dv2){
        return (dv1.clr == dv2.clr && dv1.dir == dv2.dir && dv1.fdr1 == dv2.fdr1 && dv1.fsc == dv2.fsc && dv1.ufid == dv2.ufid);
      },
      CheckChange(arr1, arr2){
        if (arr1.length != arr2.length)
          return true;

        for (var i = 0; i < arr1.length; i++){
          if (!SameDevice(arr1[i], arr2[i]))
            return true;
        }
        return false;
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
