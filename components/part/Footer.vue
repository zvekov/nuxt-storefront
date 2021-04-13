<template>
  <footer>
    <div class="grid sm:grid-cols-2 lg:grid-cols-4 inner">
      <widget-footer-nav
        :nav="footerCategories"
        class="flex flex-col items-start p-3"
      />
      <widget-footer-nav
        :nav="footerCollections"
        class="flex flex-col items-start p-3"
      />
      <widget-footer-nav
        :nav="footerLinks"
        class="flex flex-col items-start p-3"
      />
      <widget-footer-contacts
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
import nav from '@/data/navs.json'
import settings from '@/data/settings.json'
export default {
  name: 'FooterPart',
  components: {
    //     VueMarkdown,
  },
  data() {
    return { nav: nav, settings: settings }
  },
  computed: {
    footerCategories() {
      return this.nav.footerCategories
    },
    footerCollections() {
      return this.nav.footerCollections
    },
    footerLinks() {
      return this.nav.footerLinks
    },
    phone() {
      return `${
        this.settings.phone || this.$static.settings.edges[0].node.phone
      }`
    },
    email() {
      return `${
        this.settings.email || this.$static.settings.edges[0].node.email
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
  @apply py-8 mt-8 bg-gray-100 dark:bg-black dark:bg-opacity-90 dark:text-gray-100;
  & a {
    &:hover {
      @apply transition-colors duration-200;
      color: var(--body-color-hover);
      border-color: var(--border-color-hover);
    }
  }
  & li {
    & a {
      @apply border-b border-opacity-10 border-transparent leading-7 transition-all duration-200 transform dark:text-white dark:opacity-80 dark:hover:opacity-100 dark:hover:border-white dark:hover:border-opacity-50 dark:border-transparent;
    }
  }
}
</style>