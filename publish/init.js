export function initEarth (){
    var pBody = new SuperGIS.Windows.HTMLContainer(document.getElementById("body"));

    var sHost = location.href;
    var idx = sHost.indexOf("/", 8);
    if (idx >= 0) sHost = sHost.substring(0, idx);
    CreateHTML5Earth(pBody, function (pEarth)
    {
        var material = pEarth.CreateModelMaterial(0, pEarth.CreateColor(0, 0, 0, 1));
        // 載入定義圖示的文件
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'icons/OCTIcons.txt');
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