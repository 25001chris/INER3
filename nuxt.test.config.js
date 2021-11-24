export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  mode:'spa',
  router: {
    base: '/INERADMS_Mobile/'
  },
  head: {
    title: 'INERADMS_Mobile',
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
          '../ServerGate/scripts/Framework.js'
      },
      {
        src:
          '../ServerGate/SGSEarth.js',
          async: true
      },
      {
        src:
          './EarthApp.js',
          async: true
      },
      {
        src:
          '../ServerGate/scripts/MVTDocument.js',
      },
      {
        src:
          '../ServerGate/scripts/MVTWorker.js',
      },
      {
        src:
          '../ServerGate/scripts/vector_tile.js',
      },
      {
        src:
          '../ServerGate/scripts/pbf.js',
      },
      {
        src:
          '../ServerGate/scripts/TileLayer.js',
      },
      {
        src:
          '../ServerGate/scripts/VectorTube.js',
      },
      {
        src:
          '../ServerGate/scripts/EPSG.js',
      },
      {
        src:
          '../ServerGate/scripts/CoordSys.js',
      },
      {
        src:
          '../ServerGate/scripts/Projection.js',
      },
      {
        src:
          '../ServerGate/scripts/I3SDocument.js',
      },
      {
        src:
          './Scripts/TaipowerCoords_LngLat.js',
      },
      {
        src:
          '../ServerGate/scripts/ClusterLayer.js',
      },
      {
        src:
          '../ServerGate/scripts/AjaxAgent.js',
      },
      {
        src:
          '../ServerGate/scripts/Base64.js',
      },
      {
        src:
          '../ServerGate/scripts/Geometry.js',
      },
      {
        src:
          '../ServerGate/scripts/Graphic.js',
      },
      {
        src:
          '../ServerGate/scripts/Render.js',
      },
      {
        src:
          '../ServerGate/scripts/Tracker.js',
      },
      {
        src:
          '../ServerGate/scripts/Window.js',
      },
      {
        src:
          '../ServerGate/scripts/Interpolation.js',
      },
      {
        src:
          '../ServerGate/scripts/earcut.js',
      },
      {
        src:
          '../ServerGate/scripts/suncalc.js',
      },
      {
        src:
          '../ServerGate/SGServer.js',
      },
      {
        src:
          '../ServerGate/scripts/glMatrix.js',
      },
      {
        src:
          '../ServerGate/scripts/DDDCore.js',
      },
      {
        src:
          '../ServerGate/scripts/OGC.js',
      },
      {
        src:
          '../ServerGate/DDDEarth.js',
      },
      {
        src:
          '../ServerGate/scripts/WMS.js',
      },
      {
        src:
          '../ServerGate/scripts/WMTS.js',
      },
      {
        src:
          '../ServerGate/scripts/KML.js',
      },
      {
        src:
          '../ServerGate/scripts/Collada.js',
      },
      {
        src:
          '../ServerGate/OGCGlobe.js',
      },
      {
        src:
          '../ServerGate/scripts/Marker.js',
      },
      {
        src:
          './EarthStartApp.js',
      },
      {
        src:
          './Scripts/jquery-1.12.4.js',
      },
      {
        src:
          './Scripts/jquery-ui.js',
      }, 
      { 
        href: 
          './css/jquery-ui.css',
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
    host: 'localhost'
  }
}
