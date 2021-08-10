const apiUrl = process.env.API_URL || 'http://localhost:1337'
const appUrl = process.env.APP_URL || 'http://localhost:3000'
const wooUrl = process.env.WOO_URL

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
        wooApi: {
          endpoint: wooUrl + '/graphql',
        },
      },
    },
  },
  privateRuntimeConfig: {
    apiUrl: apiUrl || 'http://localhost:1337',
    wooUrl,
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
        'font-sans font-medium dark:bg-black dark:bg-opacity-90 dark:text-gray-100',
      ],
    },
  },

  css: ['@/assets/scss/app'],

  plugins: ['@/plugins/yandex-map.client.js'],

  components: true,
  buildModules: [
    '@nuxtjs/color-mode',
    '@nuxtjs/device',
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
    'nuxt-font-loader',
    'nuxt-graphql-request',
  ],

  modules: [
    '@nuxt/image',
    '@nuxtjs/strapi',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/svg',
  ],

  axios: {},
  gsap: {
    clubPlugins: {
      morphSVG: true,
      motionPathHelper: true,
    },
  },
  graphql: {
    clients: {
      default: {
        endpoint: apiUrl + '/graphql',
        options: {},
      },
      wooApi: {
        endpoint: wooUrl + '/graphql',
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
      { name: 'pages', type: 'collection' },
      { name: 'settings', type: 'single' },
    ],
    key: 'userJwt',
  },
  tailwindcss: {
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
    url: 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800&display=swap',
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
    meta: {
      nativeUI: 'true',
      theme_color: '#000000',
    },
  },
  build: {
    babel: {
      plugins: [
        ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
      ],
    },
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
      const routesToAdd = [
        {
          name: 'woo-product-slug',
          path: '/woo/p/:slug',
          component: resolve(__dirname, 'pages/woo/product/_slug.vue'),
          chunkName: 'pages/woo/product/_slug',
        },
        {
          name: 'product-slug',
          path: '/p/:slug',
          component: resolve(__dirname, 'pages/product/_slug.vue'),
          chunkName: 'pages/product/_slug',
        },
        {
          name: 'category-slug',
          path: '/c/:slug',
          component: resolve(__dirname, 'pages/category/_slug.vue'),
          chunkName: 'pages/category/_slug',
        },
        {
          name: 'brand-slug',
          path: '/b/:slug',
          component: resolve(__dirname, 'pages/brands/_slug.vue'),
          chunkName: 'pages/brands/_slug',
        },
        {
          name: 'signin',
          path: '/signin/',
          component: resolve(__dirname, 'pages/my/signin.vue'),
          chunkName: 'pages/my/signin',
        },
        {
          name: 'signup',
          path: '/signup/',
          component: resolve(__dirname, 'pages/my/signup.vue'),
          chunkName: 'pages/my/signup',
        },
        {
          name: 'wishlist',
          path: '/wishlist/',
          component: resolve(__dirname, 'pages/my/wishlist.vue'),
          chunkName: 'pages/my/wishlist',
        },
      ]

      const existingRoutesToRemove = routesToAdd.map((route) => route.name)

      const generateRoutes = routes.filter((route) => {
        return !existingRoutesToRemove.includes(route.name)
      })

      routesToAdd.forEach(({ name, path, component, chunkName }) => {
        generateRoutes.push({
          name,
          path,
          component,
          chunkName,
        })
      })

      routes.splice(0, routes.length, ...generateRoutes)
    },
  },
}
