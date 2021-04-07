<template>
  <div>
    <span class="flex" v-if="firstPrice > 0">
      <span class="order-1 pr-1">{{ firstPrice.toFixed(2) }}</span>
      <base-product-measure :product="product" class="order-2 pr-1" />
    </span>
    <span
      v-else
      class="price-text border px-1 xxs:px-2 py-1 rounded-lg font-light text-xs"
    >
      Specify the cost
    </span>
  </div>
</template>
<script>
export default {
  name: 'ProductPrice',
  props: ['product'],
  computed: {
    firstVariant() {
      return this.product && this.product.variants && this.product.variants[0]
    },
    firstPrice() {
      return this.firstVariant && this.firstVariant.price
    },
  },
}
</script>