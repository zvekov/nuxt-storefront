<template>
  <nav class="nav">
    <nuxt-link
      v-for="item in headerNav"
      :key="item.id"
      class="px-5"
      :to="item.link"
      :title="item.name"
    >
      {{ item.name }}
    </nuxt-link>
  </nav>
</template>
<script>
import nav from '@/data/navs.json'
export default {
  data() {
    return {
      nav: nav,
    }
  },
  computed: {
    headerNav() {
      return this.nav.headerNav.items
    },
  },
}
</script>