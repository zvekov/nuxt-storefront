<template>
  <div>
    <span v-if="product.price" class="flex">
      <span class="order-1 pr-1" v-html="product.price"></span>
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
        dark:border-white dark:border-opacity-30
        dark:text-white dark:text-opacity-30
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
}
</script>
