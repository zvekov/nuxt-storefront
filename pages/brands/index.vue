<template>
  <div class="relative w-full inner">
    <div class="w-full h-full px-3 pb-4 lg:w-3/12">
      <base-link-back :linkTo="'/'" :linkName="'Home'" />
    </div>
    <div class="pb-12">
      <h1 class="pb-3 px-3 mb-4 text-2xl font-bold leading-snug">Brands</h1>
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
// import pageSeo from '~/mixins/seo/page'

export default {
  // mixins: [pageSeo],
  // data() {
  //   return { brands: [], error: null }
  // },
  // async mounted() {
  //   try {
  //     this.brands = await this.$strapi.$brands.find()
  //   } catch (error) {
  //     this.error = error
  //   }
  // },
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