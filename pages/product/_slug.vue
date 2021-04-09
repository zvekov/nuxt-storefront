<template>
  <div class="product-page relative inner w-full">
    <div class="w-auto px-3 mb-4 flex items-center justify-between h-6">
      <atoms-link-back
        v-if="product.baseCategory"
        :linkTo="linkBackUrl"
        :linkName="linkBackName"
      />
      <atoms-web-share
        v-if="$device.isMobile"
        class="md:hidden"
        :title="metaTitle"
        :text="metaDescription"
        :url="$route.path"
      />
    </div>
    <div class="grid grid-flow-row grid-cols-12 pt-3">
      <div
        class="order-2 col-span-12 row-span-6 px-3 my-4 md:col-span-4 md:order-1 md:my-0"
      >
        <atoms-product-cover
          :product="product"
          :width="'600'"
          :height="'600'"
          :fit="'fill'"
          class="rounded-lg shadow-xl"
        />
      </div>
      <div
        class="order-1 col-span-12 row-span-1 px-3 md:col-span-8 md:order-2 z-10 flex items-center justify-between"
      >
        <h1 class="inline text-2xl font-bold leading-snug">
          {{ h1 }}
        </h1>
        <atoms-social-share
          v-if="!$device.isMobile"
          class="hidden md:block"
          :dataSize="'m'"
          dataImage="cover"
        />
      </div>
      <div class="order-4 col-span-12 px-3 pt-6 md:col-span-5 md:order-3">
        <!-- <template v-if="pageContent">
          <VueMarkdown :source="pageContent" class="product-content" />
        </template> -->
        <!-- <div>
            Размеры: 

          </div> -->

        <!-- Create custom component CollectionList -->
        <div v-if="product.collections.length > 0" class="flex pt-3">
          <div
            class="collection flex mr-2 transition-colors duration-200 rounded-md"
            v-for="collection in product.collections"
            :key="collection.id"
          >
            <nuxt-link
              :to="'/collection/' + collection.slug + '/'"
              class="px-2 lowercase"
              :title="collection.name + ' collection'"
            >
              {{ collection.name }}
            </nuxt-link>
          </div>
        </div>
        <!-- Create custom component CollectionList -->
      </div>
      <div
        class="top-0 order-3 h-full col-span-12 px-3 pt-6 md:pt-16 md:-mt-10 md:col-span-3 md:sticky md:order-4"
      >
        <div
          class="product-scroll relative flex flex-col p-4 rounded-lg shadow-pressDefault border border-transparent dark:border-white dark:border-opacity-10 dark:shadow-none"
        >
          <!-- <span
            v-if="$page.page.oldPrice"
            class="absolute top-0 right-0 flex px-2 py-1 mr-2 -mt-2 text-sm font-bold text-white bg-red-600 rounded-md md:-mr-2"
          >
            Экономия:
            <ProductEconomSum
              :product="$page.page"
              :key="$page.page.id"
              class="pl-1"
            />
          </span> -->
          <atoms-product-sku v-if="sku" :sku="sku" class="text-xs" />
          <div class="flex items-center pt-2">
            <atoms-product-price
              :product="product"
              class="text-lg font-extrabold"
            />
            <atoms-product-old-price
              :product="product"
              class="pl-2 text-xs line-through opacity-50"
            />
          </div>
          <button
            class="bg-black dark:bg-transparent border border-transparent dark:border-white dark:border-opacity-50 dark:hover:border-opacity-100 flex justify-center w-auto py-1 mt-4 text-white transition-all duration-200 rounded-md cursor-pointer bg-opacity-70 hover:bg-opacity-100 focus:outline-none"
          >
            <span v-if="product.variants[0].price">Add to cart</span>
            <span v-else>Request a price</span>
          </button>
        </div>
      </div>
      <div class="order-4 col-span-12 md:col-span-9">
        <!-- <div v-if="$page.page.media.length > 0" class="py-8">
            <h2 class="px-3 pb-3 text-2xl font-bold leading-snug">
              {{ $page.page.name }} в интерьере
            </h2>
            <ProductMedia
              :product="$page.page"
              :key="$page.page.media.id"
              class=""
            />
          </div> -->
        <!-- <div v-if="$page.page.works.length > 0" class="py-8">
          <h2 class="px-3 pb-3 text-2xl font-bold leading-snug">
            В нашем портфолио
          </h2>
          <div
            class="flex px-3"
            v-for="work in $page.page.works"
            v-bind:key="work.id"
          >
            <g-link :to="work.path">{{ work.name }}</g-link>
          </div>
        </div> -->
      </div>
    </div>
    <!-- <div v-if="$page.page.category.products.length > 1" class="pt-6 md:pt-10">
      <h2 class="px-3 pb-3 text-2xl font-bold leading-snug">
        Посмотрите также
      </h2>
      <div class="grid grid-cols-2 lg:grid-cols-4">
        <ProductCard
          v-for="(product, index) in $page.page.category.products"
          :key="product.id"
          :product="product"
          :currentPage="$page.page.slug"
        />
      </div>
    </div> -->
  </div>
</template>
<script>
import seo from '~/mixins/seo/page'
import { gql } from 'nuxt-graphql-request'
export default {
  name: 'ProductPage',
  mixins: [seo],
  async asyncData({ $graphql, params }) {
    const { slug } = params
    const query = gql`
      query GetPageBySlug($slug: String!) {
        products(where: { slug: $slug }) {
          id
          slug
          name
          baseCategory {
            id
            slug
            name
          }
          variants {
            price
            oldPrice
            data {
              sku
            }
            cover {
              hash
            }
          }
          collections {
            id
            name
            slug
          }
          seo {
            h1
            title
            description
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
    product() {
      return this.page?.products[0]
    },
    sku() {
      return this.product.variants[0]?.data?.sku
    },
    h1() {
      return this.product.seo?.h1 || this.product.name
    },
    metaTitle() {
      return this.product.seo?.title || this.product.name
    },
    metaDescription() {
      return this.product.seo?.description || this.product.name
    },
    linkBackName() {
      return this.product.baseCategory?.name
    },
    linkBackUrl() {
      return (
        this.product.baseCategory &&
        '/category/' + this.product.baseCategory.slug + '/'
      )
    },
  },
}
</script>
<style lang="postcss">
.product-page {
  & .cover {
    & img {
      @apply rounded-lg object-cover;
    }
  }
}
</style>