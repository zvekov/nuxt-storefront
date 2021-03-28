<template>
  <footer class="py-8 mt-8">
    <div class="grid sm:grid-cols-2 lg:grid-cols-4 inner">
      <widget-footer-nav
        :title="'Categories'"
        :nav="footerCategories"
        class="flex flex-col items-start p-3"
      />
      <widget-footer-nav
        :title="'Collections'"
        :nav="footerCollections"
        class="flex flex-col items-start p-3"
      />
      <widget-footer-nav
        :title="'Information'"
        :nav="footerLinks"
        class="flex flex-col items-start p-3"
      />
      <widget-footer-contacts
        :email="email"
        :phone="phone"
        class="flex flex-col items-start p-3 sm:justify-center lg:justify-start"
      />
    </div>
    <div
      v-if="copyright"
      class="inner mx-auto pt-3 md:pt-0 text-xs flex w-full lg:justify-end md:text-right opacity-100 sm:justify-center"
    >
      <div class="px-3">
        {{ copyright }}
      </div>
    </div>
  </footer>
</template>

<script>
// import VueMarkdown from "vue-markdown";
import data from '@/data/data.json'
export default {
  components: {
    //     VueMarkdown,
  },
  data() {
    return { data: data }
  },
  computed: {
    footerCategories() {
      return this.data.footerCategories
    },
    footerCollections() {
      return this.data.footerCollections
    },
    footerLinks() {
      return this.data.footerLinks
    },
    phone() {
      return `${
        this.data.settings.phone || this.$static.settings.edges[0].node.phone
      }`
    },
    email() {
      return `${
        this.data.settings.email || this.$static.settings.edges[0].node.email
      }`
    },
    copyright() {
      return `${
        'Nuxt Storefront © ' + new Date().getFullYear() ||
        this.$static.settings.edges[0].node.copyright
      }`
    },
  },
}
</script>
<style lang="postcss">
footer {
  background-color: var(--bg-third);
  & a {
    &:hover {
      @apply transition-colors duration-200;
      color: var(--body-color-hover);
      border-color: var(--border-color-hover);
    }
  }
  & li {
    & a {
      @apply border-b border-opacity-10 leading-7 transition-all duration-300 transform;
      border-color: var(--border-color);
    }
  }
}
</style>