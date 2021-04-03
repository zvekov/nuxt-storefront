import Vue from 'vue'
import YmapPlugin from 'vue-yandex-maps'
Vue.use(YmapPlugin, {
  apiKey: process.env.YANDEX_MAP_KEY,
  version: '2.1',
})
