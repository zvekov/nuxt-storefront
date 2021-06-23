<template>
  <div class="relative w-full inner">
    <div class="w-auto px-3 mb-4 flex items-center justify-between h-6">
      <atoms-link-back :link-to="linkBackUrl" :link-name="linkBackName" />
    </div>
    <div :class="leftSidebar ? 'grid grid-cols-12' : ''" class="w-full">
      <part-sidebar v-if="leftSidebar" class="px-3 col-span-3" />
      <div :class="leftSidebar ? 'col-span-9' : ''">
        <h1 v-if="page" class="pb-4 px-3 text-2xl font-bold leading-snug">
          {{ h1 }}
        </h1>
        <!-- Create custom component -->
        <div
          v-if="page.products"
          :class="leftSidebar ? '' : 'lg:grid-cols-4'"
          class="grid grid-cols-2 md:grid-cols-3 pb-6"
        >
          <molecules-card-product
            v-for="product in page.products"
            :key="product.id"
            :product="product"
          />
        </div>
        <!-- Create custom component -->
      </div>
    </div>
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
    const pageData = await $graphql.default.request(query, {
      slug,
    })
    return { pageData }
  },
  data() {
    return {
      leftSidebar: false,
    }
  },
  computed: {
    page() {
      return this.pageData?.categories[0]
    },
    linkBackName() {
      return this.page.mainCategory ? 'Catalog' : this.page.topCategory?.name
    },
    linkBackUrl() {
      return this.page.topCategory
        ? '/c/' + this.page.topCategory.slug + '/'
        : '/catalog/'
    },
  },
}
</script>
