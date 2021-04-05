<template>
  <nuxt-link
    :to="productUrl"
    :title="product.name"
    class="product-card rounded-lg shadow-pressDefault hover:shadow-pressHover transform hover:translate-y-1 m-2 lg:m-3 transition-dark duration-300 dark:bg-black dark:shadow-none"
  >
    <!-- <nuxt-image
      :src="'https://nuxt-storeback-strapi.herokuapp.com' + productCover"
      class="rounded-t-lg w-full lg:h-64 object-cover"
    /> -->
    <img
      v-if="productCover"
      :src="'https://nuxt-storeback-strapi.herokuapp.com' + productCover"
      class="rounded-t-lg w-full lg:h-64 object-cover"
    />
    <div class="p-4">
      <content-loader v-if="!product.name"></content-loader>
      <div class="font-bold">{{ product.name }}</div>
      <base-content-loader
        v-if="!productCategoryName"
        :width="100"
        :height="7"
      ></base-content-loader>
      <div v-else class="opacity-50 text-xs">
        {{ productCategoryName }}
      </div>
      <div class="flex flex-col items-start md:flex-row md:items-center pt-2">
        <base-product-price :product="product" />
        <base-product-old-price
          :product="product"
          class="line-through opacity-50 text-xs md:pl-2"
        />
      </div>
      <base-product-econom-percent
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
  data() {
    return {
      productCategory: {},
    }
  },
  async fetch() {
    this.productCategory = await this.$strapi.$categories.findOne(
      this.product.baseCategory
    )
  },
  fetchOnServer: false,
  computed: {
    productCategoryName() {
      return this.productCategory.name || this.product.baseCategory.name
    },
    productUrl() {
      return '/product/' + this.product.id
    },
    productCover() {
      return (
        this.product &&
        this.product.variants[0] &&
        this.product.variants[0].cover.url
      )
    },
  },
}
</script>

<style lang="postcss">
.product-card {
  background-color: var(--bg-second);
  & .price-text {
    @apply text-sm;
  }
  @screen xxs {
    & .price-text {
      @apply text-xs;
    }
  }
}
body[data-theme='dark'] {
  & .shadow-pressDefault {
    @apply shadow-none;
    &:hover {
      @apply shadow-none;
    }
  }
}
</style>
