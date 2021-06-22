<template>
  <div class="flex">
    <span class="order-1 pr-1">{{ regularPrice | filterPrice }}</span>
  </div>
</template>
<script>
export default {
  name: 'ProductRegularPrice',
  filters: {
    filterPrice(value) {
      return value.replace(/&nbsp;/g, ' ')
    },
  },
  props: { product: { type: Object, default: null } },
  computed: {
    regularPrice() {
      return this.product.regularPrice
    },
  },
}
</script>
