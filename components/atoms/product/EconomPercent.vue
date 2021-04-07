<template>
  <span v-if="firstOldPrice > 0"> -{{ economPercent.toFixed(0) }}% </span>
</template>
<script>
export default {
  name: 'ProductImage',
  props: ['product', 'currentPage'],
  computed: {
    firstVariant() {
      return this.product && this.product.variants && this.product.variants[0]
    },
    firstPrice() {
      return this.firstVariant && this.firstVariant.price
    },
    firstOldPrice() {
      return this.firstVariant && this.firstVariant.oldPrice
    },
    economPercent() {
      return ((this.firstOldPrice - this.firstPrice) / this.firstOldPrice) * 100
    },
  },
}
</script>