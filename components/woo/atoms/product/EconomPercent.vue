<template>
  <span> -{{ economPercent.toFixed(0) }}% </span>
</template>
<script>
export default {
  name: 'ProductEconomPercent',
  props: { product: { type: Object, default: null } },
  computed: {
    regularPrice() {
      return this.product.regularPrice
        .replace(/[^0-9.]/g, '')
        .replace('.', 'x')
        .replace(/\./g, '')
        .replace('x', '.')
    },
    price() {
      return this.product.price
        .replace(/[^0-9.]/g, '')
        .replace('.', 'x')
        .replace(/\./g, '')
        .replace('x', '.')
    },
    economPercent() {
      return ((this.regularPrice - this.price) / this.regularPrice) * 100
    },
  },
}
</script>
