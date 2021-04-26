<template>
  <div class="md:hidden action-mobile justify-between">
    <atoms-product-add-to-cart
      class="w-full mr-3 h-10 items-center flex my-auto"
      :product="product"
      @sendProductIdToCart="getProductIdToCart"
    />
    <atoms-product-add-to-wishlist
      :product="product"
      @sendProductIdToWishlist="getProductIdToWishlist"
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
  },
  methods: {
    getProductIdToCart(idToCart) {
      console.log(idToCart)
    },
    getProductIdToWishlist(idToWishlist) {
      console.log(idToWishlist)
    },
  },
}
</script>
<style lang="postcss">
.action-mobile {
  @apply top-auto px-4 fixed w-full left-0 h-16 right-0 z-50 flex;
  @apply border-t border-opacity-20 dark:border-white dark:border-opacity-20 bg-white dark:bg-black dark:bg-opacity-80 bg-opacity-80;
  backdrop-filter: blur(4px);
  bottom: 61px;
}
</style>