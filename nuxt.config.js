// const isDev = process.env.NODE_ENV !== 'production'

export default {
  target: 'server',
  head: {
    title: 'storefront-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    bodyAttrs: {
      class: [
        'font-sans font-medium bg-light-surface dark:bg-dark-surface text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary transition-colors duration-300 ease-linear',
      ],
    },
  },

  css: ['@/assets/scss/app'],

  plugins: [],

  components: true,

  buildModules: [
    '@nuxtjs/color-mode',
    '@nuxt/image',
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
    'nuxt-font-loader',
  ],

  modules: ['@nuxtjs/strapi', '@nuxtjs/axios', '@nuxtjs/pwa', '@nuxtjs/svg'],

  axios: {},
  strapi: {
    entities: ['products', 'brands', 'categories'],
    key: 'userJwt',
  },
  tailwindcss: {
    jit: true,
    exposeConfig: true,
  },
  colorMode: {
    classSuffix: '',
  },
  image: {},
  fontLoader: {
    url:
      'https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800&display=swap',
    prefetch: true,
    preconnect: true,
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
    analyze: false, // Анализ размеров пакетов в бандлах
    splitChunks: {
      pages: false,
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
  // Global settings for app
  // https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-global-name
  // globalName: 'app',
  // globals: {
  //   id: (globalName) => `__${globalName}`,
  //   nuxt: (globalName) => `$${globalName}`,
  //   context: (globalName) => `__${globalName.toUpperCase()}__`,
  //   pluginPrefix: (globalName) => globalName,
  //   readyCallback: (globalName) => `on${_.capitalize(globalName)}Ready`,
  //   loadedCallback: (globalName) => `_on${_.capitalize(globalName)}Loaded`,
  // },
}
