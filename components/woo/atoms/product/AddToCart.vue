<template>
  <button class="add-to-cart" @click="sendProductIdToCart">
    <span v-if="product.variants[0].price">Add to cart</span>
    <span v-else>Request a price</span>
  </button>
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
    sendProductIdToCart() {
      this.$emit('sendProductIdToCart', this.product.id)
    },
  },
}
</script>
<style lang="postcss">
.add-to-cart {
  @apply bg-black bg-opacity-70 border border-transparent flex justify-center text-white transition-all duration-200 rounded-md cursor-pointer hover:bg-opacity-100 focus:outline-none;
  @apply dark:bg-white dark:bg-opacity-70 dark:border-white dark:border-opacity-50 dark:hover:border-opacity-100 dark:text-black dark:text-opacity-70;
}
</style>
