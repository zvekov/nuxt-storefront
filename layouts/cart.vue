<template>
  <div
    class="default-layout min-h-screen flex flex-col"
    :class="$route.name === 'product-slug' ? 'product-page' : ''"
  >
    <part-header-minimal />
    <Nuxt keep-alive :keep-alive-props="{ max: 10 }" class="pt-4 flex-1 text" />
    <part-footer-minimal />
    <organisms-navbar v-if="$device.isMobileOrTablet" :name="$route.name" />
  </div>
</template>
<script>
import canonical from '@/mixins/seo/canonical.js'
export default {
  mixins: [canonical],
  // computed: {
  //   isAsideCart() {
  //     return this.$store.getters['cart/toggleAsideCart']
  //   },
  // },
  // watch: {
  //   $route: function () {
  //     if (process.client && this.isAsideCart) {
  //       this.$store.dispatch('cart/toggleAsideCart')
  //     }
  //   },
  // },
  // data() {
  //   return {
  //     isAsideCart: false,
  //   }
  // },
  // computed: {
  //   isAsideCart() {
  //     return this.$store.state.isAsideCart
  //   },
  // },
  // created() {
  //   this.$nuxt.$on('showAsideCart', () => {
  //     this.isAsideCart = true
  //   })
  //   this.$nuxt.$on('hideAsideCart', () => {
  //     this.isAsideCart = false
  //   })
  // },
}
</script>
<style lang="postcss">
.default-layout {
  padding-bottom: 61px;
  @apply md:pb-0;
  &.product-page {
    padding-bottom: 125px;
    @apply md:pb-0;
  }
}
</style>
