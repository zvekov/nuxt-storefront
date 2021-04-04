<template>
  <nuxt-link
    v-if="brand.iconSvg || brand.iconImg"
    :to="brandUrl"
    :title="brand.name"
  >
    <span v-if="brand.iconSvg" class="w-full" v-html="brand.iconSvg" />
    <nuxt-picture
      v-if="!brand.iconSvg && brand.iconImg"
      class="w-full"
      :src="brand.iconImg.url"
      :alt="brand.name"
    />
  </nuxt-link>
</template>
<script>
export default {
  name: 'BrandCard',
  props: ['brand'],
  computed: {
    brandUrl() {
      return '/brands/' + this.brand.id
    },
  },
}
</script>