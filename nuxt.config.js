export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  mode:'spa',
  router: {
    base: '/INER3_Mobile/'
  },
  head: {
    title: 'INER3',
    htmlAttrs: {
      lang: 'en'
    },
    target: 'static',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        src:
          'http://192.168.1.103/ServerGate/scripts/Framework.js'
      },
      {
        src:
          'http://192.168.1.103/ServerGate/SGSEarth.js',
          async: true
      },
      {
        src:
          'http://192.168.1.103/iner3_mobile/EarthApp.js',
          async: true
      },
      {
        src:
          'http://192.168.1.103/ServerGate/scripts/MVTDocument.js',
      },
      {
        src:
          'http://192.168.1.103/ServerGate/scripts/MVTWorker.js',
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
          'http://192.168.1.103/iner3_mobile/Scripts/jquery-1.12.4.js',
      },
      {
        src:
          'http://192.168.1.103/iner3_mobile/Scripts/jquery-ui.js',
      }, 
      { 
        href: 
          'http://192.168.1.103/iner3_mobile/jquery-ui.css',
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'vant/lib/index.css',
    'assets/main.css',
    { src: '~assets/scss/main.scss', lang: 'scss' }
  ],

  styleResources: {
    scss: ['./assets/scss/*.scss']
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/vant',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  
  server: {
    host: '192.168.1.103'
  }
}
