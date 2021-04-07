<template>
  <div class="flex" v-if="firstOldPrice > 0">
    <span class="order-1 pr-1">{{ firstOldPrice.toFixed(2) }}</span>
    <span class="order-2 pr-1">$</span>
  </div>
</template>
<script>
export default {
  name: 'ProductOldPrice',
  props: ['product'],
  computed: {
    firstVariant() {
      return this.product && this.product.variants && this.product.variants[0]
    },
    firstOldPrice() {
      return this.firstVariant && this.firstVariant.oldPrice
    },
  },
}
</script>