<template>
  <div class="relative w-full inner">
    <div class="top-0 w-full h-full px-3 pb-4 lg:w-3/12">
      <base-link-back :linkTo="'/'" :linkName="'Home'" />
    </div>
    <div class="pb-12">
      <h1 class="pb-3 px-3 text-2xl font-bold leading-snug">
        {{ pageTitle }}
      </h1>
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <div v-if="error">
          {{ error }}
        </div>
        <card-brand
          v-for="brand in brands"
          :key="brand.id"
          :brand="brand"
          :error="error"
          class="flex justify-center items-center w-auto p-4 h-40 rounded-lg shadow-pressDefault hover:shadow-pressHover transform hover:translate-y-1 m-2 lg:m-3 transition-dark duration-300"
        />
      </div>
    </div>
  </div>
</template>
<script>
import pageSeo from '~/mixins/seo/page'

export default {
  mixins: [pageSeo],
  data() {
    return { brands: [], error: null }
  },
  async mounted() {
    try {
      this.brands = await this.$strapi.$brands.find()
    } catch (error) {
      this.error = error
    }
  },
  computed: {
    pageName() {
      return `${(this.$page && this.$page.page.edges[0].node.name) || 'Brands'}`
    },
    pageTitle() {
      return `${
        (this.$page && this.$page.page.edges[0].node.pageTitle) || 'Brands'
      }`
    },
    metaTitle() {
      return `${
        (this.$page && this.$page.page.edges[0].node.metaTitle) || 'Brands'
      }`
    },
    // metaDescription() {
    //   return `${
    //     (this.$page && this.$page.page.edges[0].node.metaDescription) ||
    //     'Описание страницы о нас.'
    //   }`
  },
  // data() {
  //   return {
  //     jsonld: [
  //       {
  //         '@context': 'https://schema.org',
  //         '@type': 'BreadcrumbList',
  //         itemListElement: [
  //           {
  //             '@type': 'ListItem',
  //             position: 1,
  //             item: {
  //               '@id': process.env.APP_URL,
  //               name: 'Главная',
  //             },
  //           },
  //           {
  //             '@type': 'ListItem',
  //             position: 2,
  //             item: {
  //               '@id': this.canonical,
  //               name: this.pageName,
  //             },
  //           },
  //         ],
  //       },
  //     ],
  //   }
  // },
}
</script>