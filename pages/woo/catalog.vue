<template>
  <div class="relative w-full inner">
    <!-- <div class="w-auto px-3 mb-4 flex items-center justify-between h-6">
      <atoms-link-back :link-to="'/'" :link-name="'Home'" />
    </div> -->
    <div class="pb-4 px-3">
      <h1 class="text-2xl font-bold leading-snug">
        {{ 'Catalog' }}
      </h1>
    </div>

    <!-- Create custom component -->
    <div
      v-if="page.products.edges"
      class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pb-6"
    >
      <woo-molecules-card-product
        v-for="product in page.products.edges"
        :key="product.node.id"
        :product="product.node"
      />
    </div>
    <!-- Create custom component -->
  </div>
</template>
<script>
// import PageMeta from "~/mixins/meta/PageMeta";
import { gql } from 'nuxt-graphql-request'
export default {
  async asyncData({ $graphql }) {
    const query = gql`
      query allProducts {
        products {
          edges {
            node {
              id
              featured
              databaseId
              slug
              status
              name
              sku
              onSale
              type
              shortDescription(format: RAW)
              ... on SimpleProduct {
                price(format: FORMATTED)
                id
                regularPrice(format: FORMATTED)
                stockStatus
                stockQuantity
              }
              image {
                sourceUrl(size: SHOP_CATALOG)
              }
              productCategories(last: 1) {
                edges {
                  node {
                    name
                  }
                }
              }
            }
          }
        }
      }
    `
    const page = await $graphql.wooApi.request(query)

    return { page }
  },
  // async fetch() {
  //   this.products = await this.$strapi.$products.find()
  // },
  // fetchOnServer: false,
  // mixins: [PageMeta],
  computed: {
    // pageName() {
    //   return `${this.$page.page.edges[0].node.name || "О нас"}`;
    // },
    // pageTitle() {
    //   return `${this.$page.page.edges[0].node.pageTitle || "О нас"}`;
    // },
    // metaTitle() {
    //   return `${this.$page.page.edges[0].node.metaTitle || "О нас"}`;
    // },
    // metaDescription() {
    //   return `${
    //     this.$page.page.edges[0].node.metaDescription ||
    //     "Описание страницы о нас."
    //   }`;
    // },
    // featuredProducts() {
    //   return this.$page.products.edges[]
    // },
  },
  //   data() {
  //     return {
  //       jsonld: [
  //         {
  //           '@context': 'https://schema.org',
  //           '@type': 'BreadcrumbList',
  //           itemListElement: [
  //             {
  //               '@type': 'ListItem',
  //               position: 1,
  //               item: {
  //                 '@id': process.env.APP_URL,
  //                 name: 'Главная',
  //               },
  //             },
  //             {
  //               '@type': 'ListItem',
  //               position: 2,
  //               item: {
  //                 '@id': this.canonical,
  //                 name: this.pageName,
  //               },
  //             },
  //           ],
  //         },
  //       ],
  //     }
  //   },
}
</script>
