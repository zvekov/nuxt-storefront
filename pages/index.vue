<template>
  <div>
    <!-- <h1 class="visually-hidden">{{ pageTitle }}</h1> -->
    <!-- <div class="px-2 md:px-3" v-scroll-reveal.reset>
      <Banner16rem class="rounded-lg mb-8" />
    </div> -->
    <!-- <div v-scroll-reveal.reset> -->
    <div>
      <h2 class="px-3 pb-3 text-2xl flex justify-center font-bold leading-snug">
        Special Products
      </h2>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pb-6">
        <!-- <ProductCard
          v-for="(edge, index) of $page.special.edges"
          :key="edge.node.name"
          :product="edge.node"
          :currentPage="index"
        /> -->
      </div>
      <div class="flex justify-center">
        <nuxt-link
          to="/special/"
          class="btn-red bg-red-600 bg-opacity-70 hover:bg-opacity-100 px-4 py-1 rounded-lg transform transition-all duration-200 scale-100 hover:scale-110 hover:shadow-pressDefault"
          >All special
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
// import page from '@/mixins/seo/page.js'
// export default {
//   mixins: [page],
// }
</script>
