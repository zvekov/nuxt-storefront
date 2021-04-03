<template>
  <content-loader :width="width" :height="height"></content-loader>
</template>
<script>
import { ContentLoader } from 'vue-content-loader'
export default {
  props: ['width', 'height'],
  components: {
    ContentLoader,
  },
}
</script>
