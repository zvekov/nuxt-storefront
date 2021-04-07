<template>
  <div>
    <atoms-content-loader v-if="!productCover"></atoms-content-loader>
    <nuxt-img
      provider="cloudinary"
      :src="productCover"
      width="500"
      height="500"
      fit="thumb"
      class="rounded-t-lg w-full lg:h-64 object-cover"
    />
    <!-- {{ oneProduct }} -->
  </div>
</template>
<script>
export default {
  props: ['product'],
  data() {
    return {
      oneProduct: {},
    }
  },
  async fetch() {
    this.oneProduct = await this.$strapi.$products.findOne(this.product)
  },
  fetchOnServer: false,
  computed: {
    productCover() {
      return (
        this.oneProduct &&
        this.oneProduct.variants &&
        this.oneProduct.variants[0] &&
        this.oneProduct.variants[0].cover &&
        this.oneProduct.variants[0].cover.hash
      )
    },
  },
}
</script>