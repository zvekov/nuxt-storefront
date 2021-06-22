<template>
  <nuxt-link :to="productUrl" class="product-card">
    <woo-molecules-card-product-simple
      v-if="product.type == 'SIMPLE'"
      :product="product"
    />
  </nuxt-link>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      default: null,
    },
  },
  computed: {
    productUrl() {
      return '/p/' + this.product.slug + '/'
    },
  },
}
</script>

<style lang="postcss">
.product-card {
  @apply rounded-lg shadow-pressDefault hover:shadow-pressHover transform hover:translate-y-1 m-2 lg:m-3 duration-300 dark:bg-black dark:shadow-none;
  & .cover {
    & img {
      @apply rounded-t-lg w-full lg:h-64 object-cover;
    }
  }
  & .price-text {
    @apply text-sm;
  }
  @screen xxs {
    & .price-text {
      @apply text-xs;
    }
  }
}
</style>
