<template>
  <div class="relative w-full inner">
    <div class="w-auto px-3 mb-4 flex items-center justify-between h-6">
      <atoms-link-back :link-to="'/'" :link-name="'Home'" />
    </div>
    <div class="pb-12">
      <h1 class="px-3 mb-4 text-2xl font-bold leading-snug">Brands</h1>
      <div
        class="
          grid grid-cols-2
          md:grid-cols-4
          lg:grid-cols-6
          gap-4
          lg:gap-6
          px-3
        "
      >
        <molecules-card-brand
          v-for="item in allBrands.brands"
          :key="item.id"
          :brand="item"
          class="
            flex
            justify-center
            items-center
            w-auto
            p-4
            h-24
            xxs:h-32
            xs:h-40
            rounded-lg
            shadow-pressDefault
            hover:shadow-pressHover
            transform
            hover:translate-y-1
            transition-dark
            duration-300
            dark:shadow-none
            dark:border
            dark:border-white
            dark:border-opacity-10
            dark:hover:border-opacity-30
          "
        />
      </div>
    </div>
  </div>
</template>
<script>
import { gql } from 'nuxt-graphql-request'
// import seo from '~/mixins/seo/page'

export default {
  // mixins: [seo],
  async asyncData({ $graphql }) {
    const brands = gql`
      query Brands {
        brands {
          id
          slug
          name
          iconSvg
          iconImg {
            hash
          }
        }
      }
    `
    const allBrands = await $graphql.default.request(brands)
    return { allBrands }
  },
}
</script>
