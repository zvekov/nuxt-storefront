<template>
  <nuxt-link
    v-if="brand.iconSvg || brand.iconImg"
    :to="brandUrl"
    :title="brand.name"
  >
    <span v-if="brand.iconSvg" class="w-full" v-html="brand.iconSvg" />
    <nuxt-img
      v-if="!brand.iconSvg && brand.iconImg"
      width="200"
      height="200"
      fit="thumb"
      provider="cloudinary"
      :src="brand.iconImg.hash"
      :alt="brand.name"
    />
  </nuxt-link>
</template>
<script>
export default {
  name: 'BrandCard',
  props: { brand: { type: Object, default: null } },
  computed: {
    brandUrl() {
      return '/b/' + this.brand.slug + '/'
    },
  },
}
</script>
