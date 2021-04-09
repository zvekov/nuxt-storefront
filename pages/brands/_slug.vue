<template>
  <div class="relative w-full inner">
    <div class="top-0 w-full h-full px-3 pb-4 lg:w-3/12">
      <atoms-link-back :linkTo="'/brands/'" :linkName="'Brands'" />
    </div>
    <div class="pb-12">
      <div class="pb-3 px-3 text-2xl font-bold leading-snug">
        <h1 v-if="h1">{{ h1 }}</h1>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <span v-if="brand.iconSvg" class="w-full" v-html="brand.iconSvg" />
        <nuxt-img
          v-if="!brand.iconSvg && brand.iconImg"
          provider="cloudinary"
          class="w-full"
          :src="brand.iconImg.hash"
          :alt="brand.name"
        />
      </div>
    </div>
    <!-- Create custom component -->
    <div
      v-if="brand.products"
      class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pb-6"
    >
      <card-product
        v-for="product in brand.products"
        :key="product.id"
        :product="product"
      />
    </div>
    <!-- Create custom component -->
  </div>
</template>
<script>
import seo from '~/mixins/seo/page'
import { gql } from 'nuxt-graphql-request'
export default {
  name: 'BrandPage',
  mixins: [seo],
  async asyncData({ $graphql, params }) {
    const { slug } = params
    const query = gql`
      query GetPageBySlug($slug: String!) {
        brands(where: { slug: $slug }) {
          id
          name
          iconSvg
          iconImg {
            hash
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
    brand() {
      return this.page?.brands[0]
    },
    h1() {
      return this.brand.seo?.h1 || this.brand.name
    },
    metaTitle() {
      return this.brand.seo?.title || this.brand.name
    },
    metaDescription() {
      return this.brand.seo?.description || this.brand.name
    },
  },
}
</script>