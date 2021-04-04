<template>
  <div class="relative w-full inner">
    <div class="top-0 w-full h-full px-3 pb-4 lg:w-3/12">
      <base-link-back :linkTo="linkBackUrl" :linkName="linkBackName" />
    </div>
    <div class="pb-12">
      <h1 v-if="category" class="pb-3 px-3 text-2xl font-bold leading-snug">
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
import seo from '~/mixins/seo/page'
export default {
  name: 'CategoryPage',
  mixins: [seo],
  data() {
    return {
      category: {},
    }
  },
  async fetch() {
    this.category = await this.$strapi.$categories.findOne(
      this.$route.params.id
    )
  },
  fetchOnServer: false,
  computed: {
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
        ? '/category/' + this.category.topCategory.id
        : '/catalog/'
    },
  },
}
</script>