<template>
  <div class="relative w-full inner">
    <div class="w-auto px-3 mb-4 flex items-center justify-between h-6">
      <atoms-link-back :linkTo="linkBackUrl" :linkName="linkBackName" />
    </div>
    <div class="pb-4">
      <h1 v-if="collection" class="px-3 text-2xl font-bold leading-snug">
        {{ h1 }}
      </h1>
    </div>
    <!-- Create custom component -->
    <div
      v-if="collection.products"
      class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pb-6"
    >
      <card-product
        v-for="product in collection.products"
        :key="product.id"
        :product="product"
      />
    </div>
    <!-- Create custom component -->
  </div>
</template>
<script>
import { gql } from 'nuxt-graphql-request'
import seo from '~/mixins/seo/page'
export default {
  name: 'CollectionPage',
  mixins: [seo],
  async asyncData({ $graphql, params }) {
    const { slug } = params
    const query = gql`
      query GetPageBySlug($slug: String!) {
        collections(where: { slug: $slug }) {
          id
          slug
          name
          seo {
            h1
            title
            description
          }
          products {
            id
            slug
            name
            baseCategory {
              name
            }
            variants {
              price
              oldPrice
              cover {
                hash
              }
            }
          }
        }
      }
    `
    const page = await $graphql.default.request(query, {
      slug,
    })
    return { page }
  },
  computed: {
    collection() {
      return this.page?.collections[0]
    },
    h1() {
      return this.collection.seo?.h1 || this.collection.name
    },
    metaTitle() {
      return this.collection.seo?.title || this.collection.name
    },
    metaDescription() {
      return this.collection.seo?.description || this.collection.name
    },
    linkBackName() {
      return 'Collections'
    },
    linkBackUrl() {
      return '/collections/'
    },
  },
}
</script>