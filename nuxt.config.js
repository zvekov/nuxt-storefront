const apiUrl = process.env.API_URL || 'http://localhost:1337'
const appUrl = process.env.APP_URL || 'http://localhost:3000'

export default {
  target: 'server',
  telemetry: false,
  publicRuntimeConfig: {
    appUrl: appUrl || 'http://localhost:3000',
    graphql: {
      clients: {
        default: {
          endpoint: apiUrl + '/graphql',
        },
      },
    },
  },
  privateRuntimeConfig: {
    apiUrl: apiUrl || 'http://localhost:1337',
  },
  head: {
    title: 'Nuxt Storefront',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    bodyAttrs: {
      class: [
        'font-sans font-medium dark:bg-black dark:bg-opacity-90 dark:text-gray-100 transition-colors duration-300 ease-linear',
      ],
    },
  },

  css: ['@/assets/scss/app'],

  plugins: ['@/plugins/yandex-map.client.js'],

  components: true,

  buildModules: [
    '@nuxtjs/color-mode',
    '@nuxtjs/device',
    '@nuxt/image',
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
    'nuxt-font-loader',
    'nuxt-graphql-request',
  ],

  modules: ['@nuxtjs/strapi', '@nuxtjs/axios', '@nuxtjs/pwa', '@nuxtjs/svg'],

  axios: {},

  graphql: {
    clients: {
      default: {
        endpoint: apiUrl + '/graphql',
        options: {},
      },
    },
    options: {},
    useFetchPolyfill: true,
    includeNodeModules: true,
  },
  strapi: {
    url: apiUrl,
    entities: [
      { name: 'products', type: 'collection' },
      { name: 'brands', type: 'collection' },
      { name: 'categories', type: 'collection' },
      { name: 'settings', type: 'single' },
    ],
    key: 'userJwt',
  },
  tailwindcss: {
    jit: true,
    exposeConfig: true,
  },
  colorMode: {
    classSuffix: '',
  },
  image: {
    provider: 'cloudinary',
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/nuxtstorefront/image/upload/',
    },
  },
  fontLoader: {
    url:
      'https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800&display=swap',
    prefetch: true,
    preconnect: true,
    preload: {
      google:
        'https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800&display=swap',
    },
  },
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  build: {
    publicPath: '/assets/',
    extractCSS: true,
    // parallel: true,
    quiet: false,
    analyze: false,
    splitChunks: {
      pages: true,
      vendor: true,
      commons: true,
      runtime: true,
      layouts: true,
      // cacheGroups: {
      //   styles: {
      //     name: 'styles',
      //     test: /\.(css|vue)$/,
      //     chunks: 'all',
      //     enforce: true,
      //   },
      // },
    },
    filenames: {
      chunk: ({ isDev }) => (isDev ? '[name].js' : 'bundle.[contenthash].js'),
      app: ({ isDev }) => (isDev ? '[name].js' : 'bundle.[contenthash].js'),
      css: ({ isDev }) => (isDev ? '[name].css' : 'bundle.[contenthash].css'),
    },
    // Add render rules
    // render: {
    //   bundleRenderer: {
    //     shouldPrefetch: (file, type) =>
    //       ['script', 'style', 'font'].includes(type) && !file.includes('admin'),
    //   },
    //   http2: {
    //     push: true,
    //     pushAssets: (req, res, publicPath, preloadFiles) =>
    //       preloadFiles.map(
    //         (f) => `<${publicPath}${f.file}>; rel=preload; as=${f.asType}`
    //       ),
    //   },
    //   compressor: false,
    //   resourceHints: false,
    //   etag: true,
    //   static: {
    //     etag: true,
    //   },
    // },
    // crawler: false,
  },
  hooks: {
    'vue-renderer:ssr:context'(context) {
      const routePath = JSON.stringify(context.nuxt.routePath)
      context.nuxt = { serverRendered: true, routePath }
    },
  },
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'Wishlist',
        path: '/wishlist/',
        component: resolve(__dirname, 'pages/my/wishlist.vue'),
      })
        // routes.push({
        //   name: 'Product',
        //   path: '/:slug',
        //   component: resolve(__dirname, 'pages/product/_slug.vue'),
        // })
        // routes.push({
        //   name: 'Category',
        //   path: '/:slug',
        //   component: resolve(__dirname, 'pages/category/_slug.vue'),
        // })
        // routes.push({
        //   name: 'Collection',
        //   path: '/:slug',
        //   component: resolve(__dirname, 'pages/collection/_slug.vue'),
        // })
        // routes.push({
        //   name: 'Brand',
        //   path: '/:slug',
        //   component: resolve(__dirname, 'pages/brands/_slug.vue'),
        // })
    },
  },
}
