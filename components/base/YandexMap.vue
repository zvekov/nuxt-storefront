// yarn add vue-yandex-maps
<template>
  <yandex-map
    id="map"
    class="w-full h-full"
    :coords="coords"
    :zoom="16"
    :behaviors="behaviors"
    :scroll-zoom="false"
    :settings="settings"
  >
    <ymap-marker
      marker-id="123"
      cluster-name="1"
      marker-type="placemark"
      :coords="[52.896917, 30.042062]"
      :icon="markerIcon"
    />
  </yandex-map>
</template>

<script>
import { yandexMap, ymapMarker } from 'vue-yandex-maps'
export default {
  components: {
    yandexMap,
    ymapMarker,
  },
  data: () => ({
    settings: {
      apiKey: process.env.YANDEX_MAP_API_KEY,
      lang: 'en_US',
      version: '2.1',
    },
    coords: [52.896917, 30.042062],
    behaviors: ['multiTouch'], // Отключаем скроллинг карты в мобиле. Работает при нажатии двумя пальцами
    // markerIcon: {
    //   layout: 'default#image',
    //   imageHref: '/marker_map.svg',
    //   imageSize: [18, 18],
    // },
  }),
}
</script>
<style lang="postcss">
#map {
  & > div {
    & > ymaps {
      @apply rounded-lg overflow-hidden relative;
    }
  }
}
</style>