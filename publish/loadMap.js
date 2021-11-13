export function documentLoad (){
    // SuperGIS.Initialize("/ServerGate/", function () {
    //     SuperGIS.ServerEarth.Initialize(InitEarth);
    // });
    // test();
    // function test(){
    //     alert('gogo')
    // }
    documentLoad();
    var earth_ = null;
    var pGlobe = null;
    var pCam = null;
    var pScene = null;
    var IconTextures = {};
    var IconSymbols = {};
    var SR_3828 = EPSG.CreateSpatialReference(3828);		
    var SR_3826 = EPSG.CreateSpatialReference(3826);
    var SR_3857 = EPSG.CreateSpatialReference(3857);
    var SR_4326 = EPSG.CreateSpatialReference(4326);
    
    // 0: 一般單點查詢  1: 多邊形查詢  2: 拓樸演算 (點選) 3: 動畫 (饋線範圍點選)  4: 動畫 (起始節點點選)  5: 動畫 (終止節點點選)  6: 測試電流變向
    var MouseType = 0;
    
    var current_visible = true;
    var dirty_pms = [];
    var changedDevices = [];
    var changeinfo_interval = 2000;
    var g_pms = {}; // 20201201
    var g_surfaces = {}; // 20201201
    var g_surfaces2 = {};
    var eventMarkers = { VisibleFlag:true, fdr_labels:{} , MPoweroff:[], MFault:[], MShortcircuit:[], MTransfer:[], PPoweroff:0, PFault:0, PTransfer:0, PShortcircuit:0};
    
    
    var Layers = {};
    var BaseMapLayer = {};
    var IconLayers = {};
    var TextOfIcon = {};
    TextOfIcon['pole'] = ['pole_t'];
    TextOfIcon['dsbnroom'] = ['dsbnroom_t'];
    TextOfIcon['Connection'] = ['connection_t'];
    TextOfIcon['breaker'] = ['breaker_t'];
    TextOfIcon['hicustomer'] = ['hicustomer_t'];
    TextOfIcon['substation'] = ['substation_t', 'substation_n'];
    TextOfIcon['switch'] = ['switch_t'];

    var LayerHeight = {};
    LayerHeight['dsbnroom'] = 0.05;
    LayerHeight['pole'] = 0.1;
    LayerHeight['substation'] = 0.09;
    LayerHeight['edgechange'] = 0.1;
    LayerHeight['edgecross'] = 0.11;
    LayerHeight['node'] = 0.1;
    LayerHeight['station'] = 0.1;
    LayerHeight['mxfmr'] = 0.12;
    LayerHeight['terminal'] = 0.1;
    LayerHeight['sxfmr'] = 0.1;
    LayerHeight['switch-3'] = 0.15;
    LayerHeight['switch-2'] = 0.13;
    LayerHeight['switch-0'] = 0.12;
    LayerHeight['youxiu'] = 0.1;
    LayerHeight['distributedenergy'] = 0.11;
    LayerHeight['jumper'] = 0.1;
    LayerHeight['breaker'] = 0.11;
    LayerHeight['hicustomer'] = 0.09;
    LayerHeight['faultindicator'] = 0.11;
    LayerHeight['capacitor'] = 0.09;
    
    var LayerAlias = {};
    LayerAlias['busbar'] = "匯流排";
    LayerAlias['edge0'] = "高壓導線";
    LayerAlias['edge1'] = "高壓導線";
    LayerAlias['energy'] = "再生能源";
    LayerAlias['connection'] = "直接連接";
    LayerAlias['dsbnroom'] = "配電室";
    LayerAlias['pole'] = "電桿";
    LayerAlias['substation'] = "變電所";
    LayerAlias['edgechange'] = "導線變更";
    LayerAlias['edgecross'] = "導線交叉";
    LayerAlias['node'] = "高壓節點";
    LayerAlias['station'] = "電驛";
    LayerAlias['mxfmr'] = "主變壓器";
    LayerAlias['terminal'] = "終端";
    LayerAlias['sxfmr'] = "線路變壓器";
    LayerAlias['switch-3'] = "開關";
    LayerAlias['switch-2'] = "開關";
    LayerAlias['switch-0'] = "開關";
    LayerAlias['youxiu'] = "游休";
    LayerAlias['distributedenergy'] = "再生能源";
    LayerAlias['jumper'] = "高壓跳線";
    LayerAlias['breaker'] = "斷路器";
    LayerAlias['hicustomer'] = "高壓用戶";
    LayerAlias['faultindicator'] = "故障指示器";
    LayerAlias['capacitor'] = "電容";
    var arrowCount = 0;
    var current_visible = false;
    var buffer_visible = true;
    
    var topo_down_x, topo_down_y;
    var bDown = false;
    var bPan = false;
    $(document).ready(function () {
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
            topo_down_x = event.offsetX;
            topo_down_y = event.offsetY;
            bDown = true;
            bPan = false;
        });
        $("#div_TopoResult").mousemove(function (event) {
            if (bDown) {
                var x = topo_down_x - event.offsetX + this.scrollLeft;
                var y = topo_down_y - event.offsetY + this.scrollTop;
                this.scrollTo(x, y);
                bPan = true;
            }
        });
        $("#div_TopoResult").mouseup(function (event) {
            bDown = false;
            //if (!bPan)
                ClickElement(topo_down_x, topo_down_y);
        });
        $("#div_TopoResult").mouseleave(function (event) {
            bDown = false;
        });
        $("#div_TopoResult").scroll(function (event) {
            bPan = true;
        });
    });

    
    function documentLoad()
    {
        
        SuperGIS.Initialize("/ServerGate/", function () {
            //alert('fofof');
            SuperGIS.ServerEarth.Initialize(InitEarth);
        });
    }
    
    //var host_url = "http://localhost/";
    var host_url = "https://demo.supergeotek.com/";
    
    //var data_url = "http://localhost/VectorTileGroup/";
    var data_url = "https://demo.supergeotek.com/INERADMS_Integration/磚New/";
    
    // var wsdb = new WebSocket("wss://demo.supergeotek.com/ineradms_integration/GisMap/DBWS");
    // wsdb.onopen = function () { };
    // wsdb.onmessage = function (r) {
    //     if (r.data) {
    //         var rec = JSON.parse(r.data);
    //         alert("收到訊息了，來自" + rec.table + "表單的" + rec.action);
    //     }
    // }
    
    function InitEarth()
    {
        var pBody = new SuperGIS.Windows.HTMLContainer(document.getElementById("body"));

        var sHost = location.href;
        var idx = sHost.indexOf("/", 8);
        if (idx >= 0) sHost = sHost.substring(0, idx);
        CreateHTML5Earth(pBody, function (pEarth)
        {
            var material = pEarth.CreateModelMaterial(0, pEarth.CreateColor(0, 0, 0, 1));
            // 載入定義圖示的文件
            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'assets/icons/OCTIcons.txt');
            xhr.onreadystatechange = function()
            {
                var toload = 0;
                if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200)
                {
                    var lines = xhr.responseText.split('\r\n');
                    for (var ln in lines)
                    {
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

        function EarthLoaded(pEarth)
        {
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
    }
    
    function CameraChanged()
    {
        if(LineData1 == null)
        {
            if(pCam.Position.Z < 7500)
            {
                LineData1 = new MVTDocument(data_url + "LineData", earth_, {minzoom: 13, maxzoom: 13, loadlayers: ['busbar', 'edge1', 'energy', 'connection']}, function (name, features) {
                            LineFinish(name, features);
                        });
            }
        }
        if(TextData == null)
        {
            if(pCam.Position.Z < 10000)
            {
                TextData = new MVTDocument(data_url + "TextData", earth_, {maxzoom: 15});
            }
        }
    }

    
    function QueryInfo(obj)
    {
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
    }
    
    function IsPlacemark(obj)
    {
        return (obj.DDDSymbol != null);
    }
    function GetValue(obj, field)
    {
        return IsPlacemark(obj) ? obj.GetFieldValue(field) : obj.values[field];
    }
    
    function Highlight(obj, restore, sec, color)
    {
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
    }
        
    function SameDevice(dv1, dv2)
    {
        return (dv1.clr == dv2.clr && dv1.dir == dv2.dir && dv1.fdr1 == dv2.fdr1 && dv1.fsc == dv2.fsc && dv1.ufid == dv2.ufid);
    }
    
    function CheckChange(arr1, arr2)
    {
        if (arr1.length != arr2.length)
            return true;

        for (var i = 0; i < arr1.length; i++)
        {
            if (!SameDevice(arr1[i], arr2[i]))
                return true;
        }
        return false;
    }
    
    function SortDevice(d1,d2)
    {
        return (d1.ufid - d2.ufid);
    }
    
    function EventMarkerClear()
    {
        for(var i in eventMarkers.MTransfer)
            earth_.PlacemarkObjects.Remove(eventMarkers.MTransfer[i]);
        for(var i in eventMarkers.MPoweroff)
            earth_.PlacemarkObjects.Remove(eventMarkers.MPoweroff[i]);
        for(var i in eventMarkers.MFault)
            earth_.PlacemarkObjects.Remove(eventMarkers.MFault[i]);
        for(var i in eventMarkers.MShortcircuit)
            earth_.PlacemarkObjects.Remove(eventMarkers.MShortcircuit[i]);
        eventMarkers.fdr_labels = {};
        eventMarkers.MPoweroff = [];
        eventMarkers.MFault = [];
        eventMarkers.MShortcircuit = [];
        eventMarkers.MTransfer = [];
    }
    // 20201201
    function CheckChangeInfo()
    {
        var url = host_url + "FeederAnalysis/GetChangedDeviceList";
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", url, true);
        xmlHttp.send(null);
        xmlHttp.onload = function (e) {
            
            // 取得所有變更的導線及設備
            var tmp_dvs = JSON.parse(e.target.responseText);
            tmp_dvs.sort(SortDevice);
            if (!CheckChange(tmp_dvs, changedDevices))
            {
                setTimeout(function() { CheckChangeInfo(); }, changeinfo_interval);
                return;
            }
            changedDevices = tmp_dvs;
            EventMarkerClear();
            
            var tmp_pms = [];
            for (var i = 0; i < tmp_dvs.length; i++)
            {
                var dv = tmp_dvs[i];
                var id = dv.fsc.toString() + "." + dv.ufid.toString();
                var pms = g_pms[id];
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
                    if ((IsPlacemark(pm) && pm.GetMeshes() == null) || (!IsPlacemark(pm) && pm.parent.VecBuf == null))
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
                        clr = HexToRGB(dv.clr);
                                        
                    Highlight(pm, false, null, clr);
                        
                    if (dv.fsc == 106) // 導線
                    {
                        var oid = GetValue(pm, "oid");
                        pm.dir_changed = true;
                        UpdateSurface(pm, dv.dir, clr);
                        //取得出狀況饋線的編號、最大最小邊界
                        var dirstring = (dv.dir != 99 && dv.dir != -1 && dv.dir != -2) ? "1" : dv.dir.toString();
                        var name = dv.fdr1.toString() + ":" + dirstring;
                        var ext = pm.extent;
                        var fl = eventMarkers.fdr_labels[name];
                        if (!fl)
                            fl = eventMarkers.fdr_labels[name] = ext;
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
            for (var i in eventMarkers.fdr_labels)
            {
                var state = i.split(":")[1];
                var ext = eventMarkers.fdr_labels[i];
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
                var marker = new SuperGIS.Marker(earth_, loc, "", "https://demo.supergeotek.com/INERADMS_Integration/images/" + state + ".png",{FixedSize : true});
                var pmlabel = marker.getPlacemark();
                pmlabel.DDDSymbol.Size = 60;
                pmlabel.DDDSymbol.DynamicSize = false;
                pmlabel.Visible = eventMarkers.VisibleFlag;
                if (state == "Fault")
                    eventMarkers.MFault.push(pmlabel);
                else if (state == "Shortcircuit")
                    eventMarkers.MShortcircuit.push(pmlabel);
                else if (state == "Poweroff")
                    eventMarkers.MPoweroff.push(pmlabel);
                else
                    eventMarkers.MTransfer.push(pmlabel);
            }
            
            // 若這次要變更的還是在上次的 dirty_pms 中, 不用還原
            for (var i = 0; i < dirty_pms.length; i++)
            {
                var pm = dirty_pms[i];
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

                var clr = HexToRGB(GetValue(pm, "symcolor"));
                if (pm.GeoType == 2) // 設備
                {
                    var tid = GetValue(pm, "tid");
                    var ostatus = GetValue(pm, "ostatus");
                    if (tid == 114 && ostatus == 0) // 常用開關為黑
                        clr = [0, 0, 0];
                }
                Highlight(pm, false, null, clr);
                if (pm.dir_changed)
                {
                    var dir = GetValue(pm, "dir");
                    UpdateSurface(pm, dir);
                    pm.dir_changed = null;
                }
            }
            dirty_pms = tmp_pms;
            
            setTimeout(function() { CheckChangeInfo(); }, changeinfo_interval);
        }
    }
    
    function Update()
    {
        changedDevices = [];
        CheckChangeInfo();
    }
    
    // 20201201
    function RestoreDefault()
    {
        for (var i = 0; i < dirty_pms.length; i++)
        {
            var pm = dirty_pms[i];
            var clr = HexToRGB(GetValue(pm, "symcolor"));
            if (pm.GeoType == 2) // 設備
            {
                var tid = GetValue(pm, "tid");
                var ostatus = GetValue(pm, "ostatus");
                if (tid == 114 && ostatus == 0) // 常用開關為黑
                    clr = [0, 0, 0];
            }
            Highlight(pm, false, null, clr);
            if (pm.dir_changed)
            {
                var dir = GetValue(pm, "dir");
                UpdateSurface(pm, dir);
                pm.dir_changed = null;
            }
        }
        changedDevices = [];
    }
    
    
    var down_x, down_y;
    function MouseDown(tEvent)
    {
        down_x = tEvent.x;
        down_y = tEvent.y;
        if(tEvent.type == 'touchstart')
        {
            down_x = tEvent.touches[0].clientX;
            down_y = tEvent.touches[0].clientY;
        }

    }
    
    function MouseUp(tEvent)
    {
        if (query)// 單點查詢
        {
            var pm = PickPlacemark(down_x, down_y);
            if (!pm)
                return;
            QueryInfo(pm); // 單點查詢
        }
        
        if (queryTPCLID)
        {
            var CurPosition = earth_.GetCurrentPosition();
            var CurLocation = pGlobe.RayTest(pCam.EyeAt, pCam.Ray(CurPosition), 1, true);
            var TPC = new TaipowerCoordinateTransform();
            if (CurLocation)
            {
                var pt = pGlobe.GeodeticFromCartesian(CurLocation);
                var pt84 = { X: pt.X, Y: pt.Y, Z: 0 };
                if (!pGlobe.IsGCS())
                    pt84 = SpatialReference.CoordinateTransform(pGlobe.SpatialReference, SR_4326, null, pt84);
                var pt97 = SpatialReference.CoordinateTransform(SR_4326, SR_3826, null, pt84);

                var sTPCPoint = "台電圖號坐標( " + TPC.LngLatToTPCPoint(pt84) + " )";
                alert(sTPCPoint);
            }
        }
    }
    function MouseMove(tEvent)
    {
        if (MouseType == 1)
            earth_.Invalidate();
    }
    
    function PickPlacemark(x, y)
    {
    var feature0 = null;
    var feature1 = null;
    for (var i = x - 2; i < x + 2; i++)
    {
        for (var j = y - 2; j < y + 2; j++)
        {
            if(LineData) feature0 = LineData.HitTestFeature(i, j);
            if(LineData1) feature1 = LineData1.HitTestFeature(i, j);
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
    
        var pm = earth_.PickPlacemark(x, y);
        if (pm == null) {
            for (var i = 1; i <= 3; i++) {
                for (var j = -i; j <= i; j++) {
                    for (var k = -i; k <= i; k++) {
                        pm = earth_.PickPlacemark(x + j, y + k);
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
    }

    function HexToRGB(hex)
    {
        if (hex.charAt(0) == '#')
            hex = hex.substring(1, hex.length);
        var r = parseInt(hex.substring(0, 2), 16) / 255;
        var g = parseInt(hex.substring(2, 4), 16) / 255;
        var b = parseInt(hex.substring(4, 6), 16) / 255;
        return [r, g, b];
    }

    // 20201201
    function AddArrow(feature, oid, clr)
    {
        var pts = feature.geometry[0];
        var dir = feature.values["dir"];
        var rgb = clr;
        if (current_visible)
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
            if(arrowCount % 4 == 0)
            {
                if (dist >= 400 && feature.name == 'edge0')
                {
                    var aps_13 = CreateArrowPoints(first, second, angle, 36);
                    tmps.push(earth_.AddPolygonSurface(oid, aps_13, rgb, "", 8, 11));
                }
                if (dist >= 400)
                {
                    var aps_14 = CreateArrowPoints(first, second, angle, 12);
                    tmps.push(earth_.AddPolygonSurface(oid, aps_14, rgb, "", 12, 13));
                }
            }
            arrowCount++;
            if (dist >= 100)
            {
                var aps_14 = CreateArrowPoints(first, second, angle, 3);
                tmps.push(earth_.AddPolygonSurface(oid, aps_14, rgb, "", 14, 18));
            }
            for (var j = 0; j < tmps.length; j++)
            {
                var surface = tmps[j];
                surface.fp = first;
                surface.sp = second;
                surface.dir = dir;
                if (g_surfaces[oid] == null)
                    g_surfaces[oid] = [surface];
                else
                    g_surfaces[oid].push(surface);
            }
        }
    }
    
    // 20201201
    function ProcessSurfaceGeometry(pGlobe, sWKT)
    {
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
                CoordinateTransform(true, pGlobe.SpatialReference, s_WGS84, pts, pts.length / 3);
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
    }

    function CreateArrowPoints(p1, p2, angle, size)
    {
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
    }
    
    // 20201201
    function CreateArrowGeometry(surface, dir)
    {
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
        var aps = CreateArrowPoints(first, second, angle, size)
        var wkt = "POLYGON((" + aps[0].toString() + " " + aps[1].toString() + "," +
                            aps[2].toString() + " " + aps[3].toString() + "," +
                            aps[4].toString() + " " + aps[5].toString() + "))";
        return ProcessSurfaceGeometry(pGlobe, wkt);
    }

    function CreateBufferWKT(surface)
    {
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
    }
    
    // 20201201
    function UpdateSurface(pm, dir, clr)
    {
        var oid = GetValue(pm, "oid");
        var fdr = pm.values.fdr1;
        var surfaces = g_surfaces[oid];
        var surfaces2 = g_surfaces2[oid];
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
                    surface.Geometry = CreateArrowGeometry(surface, dir);
                }

                var rgb = (clr != null) ? clr.slice(0) : HexToRGB(GetValue(pm, "symcolor"));
                for (var j = 0; j < 3; j++)
                    rgb[j] = rgb[j] * 255;

                var hc = "#";
                for (var j = 0; j < 3; j++)
                    hc += rgb[j].toString(16).padStart(2, '0');
                hc += (current_visible) ? "ff" : "00";
                surface.Style = hc;

                for (var j = 0; j < surface.CoveredTiles.length; j++)
                    surface.CoveredTiles[j].Invalidate();
            }
        }

        if (surfaces2 == null) // buffer 未建
        {
            if (dir == 99 || dir == -1 || dir == -2)
            {
                g_surfaces2[oid] = [];
                for (var i in surfaces)
                {
                    var wkt50 = CreateBufferWKT(surfaces[i], 75);
                    //var wkt100 = CreateBufferWKT(surfaces[i], 100);
                    if(buffer_visible)
                        var rgb = (dir == 99) ? "#bebebeff" : (dir == -1) ? "#ffb4b4ff" : "#ff7f27ff";
                    else
                        var rgb = (dir == 99) ? "#bebebe00" : (dir == -1) ? "#ffb4b400" : "#ff7f2700";
                    var buffer50 = earth_.AddSurface(oid, wkt50, rgb, "", 6, 18);
                    g_surfaces2[oid].push(buffer50);
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
                    if(buffer_visible)
                        var rgb = (dir == 99) ? "#bebebeff" : (dir == -1) ? "#ffb4b4ff" : "#ff7f27ff";
                    else
                        var rgb = (dir == 99) ? "#bebebe00" : (dir == -1) ? "#ffb4b400" : "#ff7f2700";
                    surface.Style = rgb;
                }
                for (var j = 0; j < surface.CoveredTiles.length; j++)
                    surface.CoveredTiles[j].Invalidate();
            }
        }
    }

    function LineFinish(name, features)
    {
        for (var i = 0; i < features.length; i++)
        {
            var feature = features[i];
            feature.name = name;
            var tid = feature.values["tid"];
            var oid = feature.values["oid"];
            var clr = feature.values["symcolor"];

            if (name == "edge0" || name == "edge1") // 導線才加電流方向
                AddArrow(feature, oid, clr);
                
            var id = tid.toString() + "." + oid.toString();
            if (g_pms[id] == null)
                g_pms[id] = [feature];
            else
                g_pms[id].push(feature);
        }
        changedDevices = []; // 使強制 CheckChangeInfo
    }
    
    function IconReady(layer)
    {
        Layers[layer.Name] = IconLayers[layer.Name] = layer;
        layer.TextureMixType = SuperGIS.DDDCore.TextureMixType.Plus;
        layer.MaxVHeight = 600;
    }

    // 20201201
    function IconFinish(array, layer)
    {
        var bbox = layer.BoundingBox;
        var pLayerOrigin = [(bbox.MinX + bbox.MaxX) / 2, (bbox.MinY + bbox.MaxY) / 2, 0];
        pGlobe.CartesiansFromGeodetics(1, pLayerOrigin, pLayerOrigin);
        h = LayerHeight[layer.Name];
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
            var texture = IconTextures[sym];
            if (!texture)
                console.log("no texture: " + sym);
                
            if (tid == 114 && ostatus == 0) // 常用開關為黑
                clr = "#000000";
                
            var symbol = IconSymbols[clr + sym];
            if (!symbol)
            {
                var rgb = HexToRGB(clr);
                // 底色皆設為透明 (需搭配 TextureMixType.Plus), 藉此由線條呈現效果, 包括 Highlight
                var material = earth_.CreateModelMaterial(0, earth_.CreateColor(rgb[0], rgb[1], rgb[2], 0));
                symbol = IconSymbols[clr + sym] = earth_.CreateSimpleDDDFillSymbol(material, null);
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
            if (pGlobe.IsGCS())
            {
                pt = SpatialReference.CoordinateTransform(SR_3857, SR_4326, null, pt);
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

            pGlobe.CartesiansFromGeodetics(xy.length / 3, xy, xy);
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
            if (g_pms[id] == null)
                g_pms[id] = [mark];
            else
                g_pms[id].push(mark);
            }
        changedDevices = []; // 使強制 CheckChangeInfo
    }

    function LayerManager()
    {
        $("#div_layer").dialog("open");
    }

    function LayerVisible(name)
    {
        if (name == "switch") {
            Layers["switch-0"].Visible = !Layers["switch-0"].Visible;
            Layers["switch-2"].Visible = !Layers["switch-2"].Visible;
            Layers["switch-3"].Visible = !Layers["switch-3"].Visible;
        }else if (name == "current_dir")
        {
            var surfaces = earth_.GetSurfaces();
            for (var i in g_surfaces)
            {
                var surfaces = g_surfaces[i];
                for (var j in surfaces)
                {
                    var sf = surfaces[j];
                    if (current_visible)
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
            earth_.Invalidate();
            current_visible = !current_visible;
        }
        else if (name == "edge0")
        {
            LineData.SetLayerVisible(name, !LineData.GetLayerVisible(name));
        }
        else if (name == "edge1" || name == "busbar" || name == "energy" || name == "connection")
        {
            LineData1.SetLayerVisible(name, !LineData1.GetLayerVisible(name));
        }
        else if (name == "annotation" || name == "dsbnroom_t" || name == "pole_t" || name == "substation_t" || name == "substation_n" || name == "connection_t" || name == "switch_t" || name == "breaker_t" || name == "hicustomer_t")
        {
            TextData.SetLayerVisible(name, !TextData.GetLayerVisible(name));
        }
        else if (name == "buffer")
        {
            for (var i in g_surfaces2)
            {
                var surfaces = g_surfaces2[i];
                for (var j in surfaces)
                {
                    var sf = surfaces[j];
                    if (buffer_visible)
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
            earth_.Invalidate();
            buffer_visible = !buffer_visible;
        }
        else if (name == "bufferlabel")
        {
            eventMarkers.VisibleFlag = !eventMarkers.VisibleFlag;
            for(var i in eventMarkers.MTransfer)
                eventMarkers.MTransfer[i].Visible = eventMarkers.VisibleFlag;
            for(var i in eventMarkers.MPoweroff)
                eventMarkers.MPoweroff[i].Visible = eventMarkers.VisibleFlag;
            for(var i in eventMarkers.MFault)
                eventMarkers.MFault[i].Visible = eventMarkers.VisibleFlag;
            for(var i in eventMarkers.MShortcircuit)
                eventMarkers.MShortcircuit[i].Visible = eventMarkers.VisibleFlag;
        }
        else if (name == "NLSCMAP" || name == 'PHOTO')
            BaseMapLayer[name].setVisible(!BaseMapLayer[name].getVisible());
        else
            Layers[name].Visible = !Layers[name].Visible;
        
        var t_names = TextOfIcon[name];
        if (t_names)
        {
            for (var i in t_names)
                LayerVisible(t_names[i]);
        }
        earth_.Invalidate();
    }
    
    var query = false;
    function QueryOpen()
    {
        if(!query)
        {
            earth_.addEventListener("mouseup", MouseUp, false);							
            earth_.addEventListener("touchend", MouseUp, false);
            document.getElementById("querybutton").value = "關閉圖資查詢";
            query = true;
        }
        else
        {
            earth_.removeEventListener("mouseup", MouseUp, false);							
            earth_.removeEventListener("touchend", MouseUp, false);
            document.getElementById("querybutton").value = "開啟圖資查詢";
            query = false;
        }
    }
    var queryTPCLID = false;
    function QueryTPLIDOpen()
    {
        if(!queryTPCLID)
        {
            queryTPCLID = true;
            earth_.addEventListener("mouseup", MouseUp, false);							
            earth_.addEventListener("touchend", MouseUp, false);				
            document.getElementById("querybutton2").value = "關閉坐標查詢";
        }
        else
        {
            queryTPCLID = false;
            earth_.removeEventListener("mouseup", MouseUp, false);							
            earth_.removeEventListener("touchend", MouseUp, false);				
            document.getElementById("querybutton2").value = "開啟坐標查詢";
        }
    }
    
    function locate()
    {
        earth_.SetViewpoint(120.3358,23.6276,1000,0,0); //X Y 高度 方位角 傾角
    }
    
    var markerlist = [];
    function createmarker()
    {
        var tpclidlist = ["K0046FD31", "J9532AE52","J9652FB41","K0349DE63","K0546DB66","K0242BE22"];
        //以圖號坐標取得坐標值，並建立地圖標記
        for (var i = 0; i < tpclidlist.length; i++)
        {
            var lnglat = (new TaipowerCoordinateTransform()).TPCPointToEPSG3857(tpclidlist[i]);
            var loc = { X: lnglat.X, Y:lnglat.Y , Z: 0 };
            var marker = new SuperGIS.Marker(earth_, loc, "這是標題文字", "https://demo.supergeotek.com/INERADMS_Integration/images/map.svg",{FixedSize : true}); //地圖物件 / 位置 / 標題文字 / 圖片路徑 / 樣式參數
            var pmlabel = marker.getPlacemark();
            pmlabel.DDDSymbol.Size = 60; // 標記大小
            pmlabel.DDDSymbol.DynamicSize = false; // 標記是否隨比例尺縮放變換大小
            pmlabel.Visible = true; // 標記是否可見
            markerlist.push(pmlabel);
        }
    }
    var clusterlayer;
    function markercluster()
    {
        clusterlayer = new SuperGIS.ClusterLayer(
                earth_, // 地圖物件
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
                           'text-color': 'black' }}, function() { clusterReady(); });
                           
        for (var i = 0; i < markerlist.length; i++) //擴充標記的屬性，讓他有x,y給cluster的方法吃
        {
            var marker = markerlist[i];
            var pos = marker.GetExtent();
            marker.x = pos[0];
            marker.y = pos[1];
            marker.Visible = false;
        }
        clusterlayer.AddPoints(markerlist); //加資料
    }
    
    function clusterReady() // 每次 clusters 重產後觸發, 此時機控制 cluster 中只有一個 feature 的顯示原 marker 取代 cluster
    {
        for (var i = 0; i < markerlist.length; i++)
        {
            var marker = markerlist[i];
            marker.Visible = false;
        }
        var clusters = clusterlayer.getMarkerCluster().getClusters();
        for (var i = 0; i < clusters.length; i++)
        {
            var features = clusters[i].features;
            if (features.length == 1)
            {
                clusters[i].visible = false;
                features[0].source.Visible=true;
            }
        }
    }
}