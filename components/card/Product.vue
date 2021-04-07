<template>
  <nuxt-link :to="productUrl" :title="product.name" class="product-card">
    <atoms-product-cover
      :product="product"
      :width="'500'"
      :height="'500'"
      :fit="'thumb'"
    />
    <div class="p-4">
      <content-loader v-if="!product.name"></content-loader>
      <div class="font-bold">{{ product.name }}</div>
      <atoms-content-loader
        v-if="!product.baseCategory.name"
        :width="100"
        :height="7"
      ></atoms-content-loader>
      <div v-else class="opacity-50 text-xs">
        {{ product.baseCategory.name }}
      </div>
      <div class="flex flex-col items-start md:flex-row md:items-center pt-2">
        <atoms-product-price :product="product" />
        <atoms-product-old-price
          :product="product"
          class="line-through opacity-50 text-xs md:pl-2"
        />
      </div>
      <atoms-product-econom-percent
        :product="product"
        class="absolute top-0 right-0 my-2 px-3 py-1 text-xs md:text-base text-white rounded-l-md bg-red-600"
      />
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['product'],
  computed: {
    productUrl() {
      return '/product/' + this.product.slug + '/'
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
