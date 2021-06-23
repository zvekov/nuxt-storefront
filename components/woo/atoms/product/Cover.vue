<template>
  <div class="cover">
    <atoms-content-loader v-if="!productCover"></atoms-content-loader>
    <nuxt-img provider="static" :src="productCover" />
  </div>
</template>
<script>
export default {
  props: {
    product: {
      type: Object,
      default: null,
    },
  },
  computed: {
    productCover() {
      return this.product?.image?.sourceUrl
    },
  },
}
</script>
