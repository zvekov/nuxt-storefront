<template>
  <content-loader
    :primaryColor="primaryColor"
    :secondaryColor="secondaryColor"
    :width="width"
    :height="height"
  ></content-loader>
</template>
<script>
import { ContentLoader } from 'vue-content-loader'
export default {
  props: ['width', 'height'],
  components: {
    ContentLoader,
  },
  computed: {
    primaryColor() {
      return this.$colorMode.value === 'light' ? '#f9f9f9' : '#222222'
    },
    secondaryColor() {
      return this.$colorMode.value === 'light' ? '#ecebeb' : '#555555'
    },
  },
}
</script>
