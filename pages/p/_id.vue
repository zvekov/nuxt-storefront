<template>
  <div class="relative w-full inner">
    <div class="top-0 w-full h-full px-3 pb-4 lg:w-3/12">
      <base-link-back
        v-if="product.baseCategory"
        :linkTo="'/c/' + baseCategory.id"
        :linkName="baseCategory.name"
      />
    </div>
    <div class="pb-12">
      <h1 v-if="product" class="pb-3 px-3 text-2xl font-bold leading-snug">
        {{ h1 }}
      </h1>
      <!-- Create custom component -->
    </div>
  </div>
</template>
<script>
import seo from '~/mixins/seo/page'
export default {
  name: 'ProductPage',
  mixins: [seo],
  data() {
    return {
      product: {},
    }
  },
  async fetch() {
    this.product = await this.$strapi.$products.findOne(this.$route.params.id)
  },
  fetchOnServer: false,
  computed: {
    h1() {
      return (this.product.seo && this.product.seo.h1) || this.product.name
    },
    metaTitle() {
      return (this.product.seo && this.product.seo.title) || this.product.name
    },
    metaDescription() {
      return (
        (this.product.seo && this.product.seo.description) || this.product.name
      )
    },
    baseCategory() {
      return this.product.baseCategory
    },
  },
}
</script>