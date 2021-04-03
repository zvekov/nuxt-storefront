<template>
  <div class="relative w-full inner">
    <div class="top-0 w-full h-full px-3 pb-4 lg:w-3/12">
      <base-link-back :linkTo="'/brands/'" :linkName="'Brands'" />
    </div>
    <div class="pb-12">
      <div class="pb-3 px-3 text-2xl font-bold leading-snug">
        <h1>{{ h1 }}</h1>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <span v-if="brand.iconSvg" class="w-full" v-html="brand.iconSvg" />
        <nuxt-picture
          v-if="!brand.iconSvg && brand.iconImg"
          class="w-full"
          :src="brand.iconImg.url"
          :alt="brand.name"
        />
      </div>
    </div>
    <!-- Create custom component -->
    <div
      v-if="brand.products"
      class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pb-6"
    >
      <card-product
        v-for="product in brand.products"
        :key="product.id"
        :product="product"
      />
    </div>
    <!-- Create custom component -->
  </div>
</template>
<script>
import seo from '~/mixins/seo/page'
export default {
  name: 'BrandPage',
  mixins: [seo],
  data() {
    return {
      brand: {},
    }
  },
  async fetch() {
    this.brand = await this.$strapi.$brands.findOne(this.$route.params.id)
  },
  fetchOnServer: false,
  computed: {
    h1() {
      return (this.brand.seo && this.brand.seo.h1) || this.brand.name
    },
    metaTitle() {
      return (this.brand.seo && this.brand.seo.title) || this.brand.name
    },
    metaDescription() {
      return (this.brand.seo && this.brand.seo.description) || this.brand.name
    },
  },
}
</script>