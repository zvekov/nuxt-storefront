<template>
  <div>
    <span v-if="firstPrice > 0" class="flex">
      <span class="order-1 pr-1">{{ firstPrice.toFixed(2) }}</span>
      <atoms-product-measure :product="product" class="order-2 pr-1" />
    </span>
    <span
      v-else
      class="
        price-text
        border
        px-1
        xxs:px-2
        py-1
        rounded-lg
        font-light
        text-xs
        dark:border-white
        dark:border-opacity-30
        dark:text-white
        dark:text-opacity-30
      "
    >
      Specify the cost
    </span>
  </div>
</template>
<script>
export default {
  name: 'ProductPrice',
  props: { product: { type: Object, default: null } },
  computed: {
    firstPrice() {
      return this.product.variants[0]?.price
    },
  },
}
</script>
