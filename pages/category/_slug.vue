<template>
  <div class="relative w-full inner">
    <div class="w-full h-full px-3 pb-4 lg:w-3/12">
      <atoms-link-back :linkTo="linkBackUrl" :linkName="linkBackName" />
    </div>
    <div class="pb-4">
      <h1 v-if="category" class="px-3 text-2xl font-bold leading-snug">
        {{ h1 }}
      </h1>
    </div>
    <!-- Create custom component -->
    <div
      v-if="category.products"
      class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pb-6"
    >
      <card-product
        v-for="product in category.products"
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
  name: 'CategoryPage',
  mixins: [seo],
  async asyncData({ $graphql, params }) {
    const { slug } = params
    const query = gql`
      query GetPageBySlug($slug: String!) {
        categories(where: { slug: $slug }) {
          id
          slug
          name
          mainCategory
          topCategory {
            id
            slug
            name
          }
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
    category() {
      return this.page && this.page.categories[0]
    },
    h1() {
      return (this.category.seo && this.category.seo.h1) || this.category.name
    },
    metaTitle() {
      return (
        (this.category.seo && this.category.seo.title) || this.category.name
      )
    },
    metaDescription() {
      return (
        (this.category.seo && this.category.seo.description) ||
        this.category.name
      )
    },
    linkBackName() {
      return this.category.mainCategory
        ? 'Catalog'
        : this.category.topCategory && this.category.topCategory.name
    },
    linkBackUrl() {
      return this.category.topCategory
        ? '/category/' + this.category.topCategory.slug + '/'
        : '/catalog/'
    },
  },
}
</script>