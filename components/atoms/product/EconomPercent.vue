<template>
  <span v-if="firstOldPrice > 0"> -{{ economPercent.toFixed(0) }}% </span>
</template>
<script>
export default {
  name: 'ProductEconomPercent',
  props: { product: { type: Object, default: null } },
  computed: {
    firstPrice() {
      return this.product.variants[0]?.price
    },
    firstOldPrice() {
      return this.product.variants[0]?.oldPrice
    },
    economPercent() {
      return ((this.firstOldPrice - this.firstPrice) / this.firstOldPrice) * 100
    },
  },
}
</script>
