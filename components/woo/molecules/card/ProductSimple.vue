<template>
  <div>
    <woo-atoms-product-cover
      :product="product"
      :width="'300'"
      :height="'300'"
      :fit="'fill'"
    />
    <div class="p-4">
      <content-loader v-if="!product.name"></content-loader>
      <div class="font-bold">{{ product.name }}</div>
      <atoms-content-loader
        v-if="!baseCategory"
        :width="100"
        :height="7"
      ></atoms-content-loader>
      <div v-else class="opacity-50 text-xs">
        {{ baseCategory }}
      </div>
      <div class="flex flex-col items-start md:flex-row md:items-center pt-2">
        <woo-atoms-product-price :product="product" />
        <woo-atoms-product-regular-price
          v-if="product.onSale"
          :product="product"
          class="line-through opacity-50 text-xs md:pl-2"
        />
      </div>
      <woo-atoms-product-econom-percent
        v-if="product.onSale"
        :product="product"
        class="
          absolute
          top-0
          right-0
          my-2
          px-3
          py-1
          text-xs
          md:text-base
          text-white
          rounded-l-md
          bg-red-600
        "
      />
    </div>
  </div>
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
    baseCategory() {
      return this.product.productCategories?.edges[0]?.node?.name
    },
  },
}
</script>
