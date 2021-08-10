<template>
  <span>
    <atoms-content-loader v-if="!navItem" :width="100" :height="50" />
    <nuxt-link v-else :to="navItem.path" :title="navItem.label" class="px-5">
      {{ navItem.label }}
    </nuxt-link>
    <!-- {{ navItem }} -->
    <!-- <a
      v-else
      :href="link.path"
      :title="link.title"
      target="_blank"
      rel="noopener"
    >
      {{ link.title }}
    </a> -->
  </span>
</template>

<script>
import { gql } from 'nuxt-graphql-request'
export default {
  name: 'WooBaseNavLink',
  props: {
    id: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      data: {},
    }
  },
  async fetch() {
    const query = gql`
      query getNavItem($id: ID!) {
        menuItem(id: $id, idType: ID) {
          id
          label
          path
        }
      }
    `
    const variables = { id: this.id }
    this.data = await this.$graphql.wooApi.request(query, variables)
  },
  fetchOnServer: false,
  computed: {
    navItem() {
      return this.data?.menuItem
    },
  },
  // computed: {
  // linkRelated() {
  //   return this.link?.related?.__contentType
  // },
  // linkPath() {
  //   const linkRelated = this.linkRelated
  //   if (linkRelated === 'Category') {
  //     return '/c/' + this.link.slug + '/'
  //   } else if (linkRelated === 'Collection') {
  //     return '/collection/' + this.link.slug + '/'
  //   } else if (linkRelated === 'Page') {
  //     return '/' + this.link.slug + '/'
  //   } else {
  //     return '/' + this.link.slug + '/'
  //   }
  // },
  // },
}
</script>
