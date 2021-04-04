<template>
  <div>
    <!-- <h1 class="visually-hidden">{{ pageTitle }}</h1> -->
    <!-- <div class="px-2 md:px-3" v-scroll-reveal.reset>
      <Banner16rem class="rounded-lg mb-8" />
    </div> -->
    <!-- <div v-scroll-reveal.reset> -->
    <div>
      <h2 class="px-3 pb-3 text-2xl flex justify-center font-bold leading-snug">
        Special Products
      </h2>
      <!-- Create custom component -->
      <div
        v-if="products"
        class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pb-6 inner"
      >
        <card-product
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
      <!-- Create custom component -->
      <div class="flex justify-center">
        <nuxt-link
          to="/special/"
          class="btn-red bg-red-600 bg-opacity-70 hover:bg-opacity-100 px-4 py-1 rounded-lg transform transition-all duration-200 scale-100 hover:scale-110 hover:shadow-pressDefault"
          >All special
        </nuxt-link>
      </div>
    </div>
    <div class="py-16 inner">
      <h2 class="px-3 pb-6 text-2xl flex justify-center font-bold leading-snug">
        Brands
      </h2>
      <div
        class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-6 px-3"
      >
        <card-brand
          v-for="(brand, key) in brands"
          :key="key"
          :brand="brand"
          class="flex justify-center items-center w-auto p-4 h-24 xxs:h-32 xs:h-40 rounded-lg shadow-pressDefault hover:shadow-pressHover transform hover:translate-y-1 transition-dark duration-300 dark:shadow-none dark:border dark:border-white dark:border-opacity-10 dark:hover:border-opacity-30"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      products: [],
    }
  },
  async fetch() {
    this.products = await this.$strapi.$products.find({ _limit: 4 })
  },
  fetchOnServer: false,
  computed: {
    brands() {
      return this.$store.state.brands.brands
    },
  },
  mounted() {
    this.$store.dispatch('brands/update')
  },
}
</script>
<style lang="postcss">
.visually-hidden {
  @apply absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
}
</style>