<template>
  <div class="cover">
    <atoms-content-loader v-if="!productCover"></atoms-content-loader>
    <nuxt-img
      v-if="productCover"
      provider="static"
      :src="productCover"
      :width="width"
      :height="height"
      :fit="fit"
    />
  </div>
</template>
<script>
export default {
  props: {
    product: {
      type: Object,
      default: null,
    },
    width: {
      type: String,
      default: null,
    },
    height: {
      type: String,
      default: null,
    },
    fit: {
      type: String,
      default: null,
    },
  },
  computed: {
    productCover() {
      return this.product?.image?.mediaItemUrl
    },
  },
}
</script>
