<template>
  <content-loader
    :primary-color="primaryColor"
    :secondary-color="secondaryColor"
    :width="width"
    :height="height"
  ></content-loader>
</template>
<script>
import { ContentLoader } from 'vue-content-loader'
export default {
  components: {
    ContentLoader,
  },
  props: {
    width: {
      type: Number,
      default: null,
    },
    height: {
      type: Number,
      default: null,
    },
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
