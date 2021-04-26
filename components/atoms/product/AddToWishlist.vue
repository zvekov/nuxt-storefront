<template>
  <button class="w-12 h-10 my-auto flex items-center justify-center">
    <wishlist-icon
      class="w-10 h-10 text-black text-opacity-50 dark:text-white dark:text-opacity-50"
      @click="sendProductIdToWishlist"
    />
  </button>
</template>
<script>
import WishlistIcon from '~/assets/icons/wishlist.svg?inline'
export default {
  name: 'AddToWishlist',
  components: {
    WishlistIcon,
  },
  props: {
    product: {
      type: Object,
      default: null,
    },
  },
  methods: {
    sendProductIdToWishlist() {
      this.$emit('sendProductIdToWishlist', this.product.id)
    },
  },
}
</script>
