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
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
    'nuxt-font-loader',
  ],

  modules: ['@nuxtjs/axios', '@nuxtjs/pwa', '@nuxtjs/svg'],

  axios: {},
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
      layouts: true,
      pages: true,
      commons: true,
    },
  },
}
