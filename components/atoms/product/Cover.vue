<template>
  <div class="cover">
    <atoms-content-loader v-if="!productCover"></atoms-content-loader>
    <nuxt-img
      provider="cloudinary"
      :src="productCover"
      :width="width"
      :height="height"
      :fit="fit"
    />
  </div>
</template>
<script>
export default {
  props: ['product', 'width', 'height', 'fit'],
  computed: {
    productCover() {
      return this.product.variants[0]?.cover?.hash
    },
  },
}
</script>