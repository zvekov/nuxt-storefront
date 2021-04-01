<template>
  <div class="relative w-full inner">
    <div class="top-0 w-full h-full px-3 pb-4 lg:w-3/12">
      <base-link-back :linkTo="'/brands/'" :linkName="'Brands'" />
    </div>
    <div class="pb-12">
      <h1 v-if="brand" class="pb-3 px-3 text-2xl font-bold leading-snug">
        {{ brand.name }}
      </h1>
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
    <div v-if="brand.products" class="brand__products">
      <div v-for="product in brand.products" :key="product.id">
        {{ product.name }}
      </div>
    </div>
    <!-- Create custom component -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      brand: {},
    }
  },
  async fetch() {
    this.brand = await this.$strapi.findOne('brands', this.$route.params.id)
  },
}
</script>