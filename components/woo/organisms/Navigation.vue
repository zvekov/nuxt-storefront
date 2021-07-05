<template>
  <nav v-if="navigationItems">
    <ul v-for="item in navigationItems" :key="item.id">
      <li>
        <woo-atoms-nav-link :id="item.node.id" />
      </li>
    </ul>
  </nav>
</template>
<script>
import { gql } from 'nuxt-graphql-request'
export default {
  components: {},
  data() {
    return {
      data: [],
    }
  },
  async fetch() {
    const query = gql`
      query Navigation($id: ID!) {
        menu(id: $id, idType: NAME) {
          menuItems(where: { parentId: "null" }) {
            edges {
              node {
                id
              }
            }
          }
        }
      }
    `
    const variables = { id: 'HEADER_NAVIGATION' }
    this.data = await this.$graphql.wooApi.request(query, variables)
  },
  fetchOnServer: false,
  computed: {
    navigationItems() {
      return this.data?.menu?.menuItems?.edges
    },
  },
}
</script>
