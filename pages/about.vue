<template>
  <div class="relative w-full inner">
    <div class="w-auto px-3 mb-4 flex items-center justify-between h-6">
      <atoms-link-back :link-to="'/'" :link-name="'Home'" />
    </div>
    <div class="px-3 grid md:grid-cols-2">
      <div class="pb-12 md:pb-24">
        <h1 class="pb-3 text-2xl font-bold leading-snug rounded-lg">
          {{ h1 }}
        </h1>
      </div>
    </div>
  </div>
</template>
<script>
import { gql } from 'nuxt-graphql-request'
import seo from '~/mixins/seo/page'
export default {
  mixins: [seo],
  async asyncData({ $graphql }) {
    const query = gql`
      query ContactPage {
        pages(where: { slug: "about" }) {
          id
          slug
          name
          seo {
            h1
            title
            description
            image {
              previewUrl
            }
          }
        }
      }
    `
    const pageData = await $graphql.default.request(query)
    return { pageData }
  },
  computed: {
    page() {
      return this.pageData.pages[0]
    },
  },
}
</script>
<style lang="postcss" scoped></style>
