<template>
  <button v-if="$strapi.user" @click="logout">Logout</button>
</template>
<script>
export default {
  methods: {
    async logout() {
      await this.$strapi.logout()
    },
  },
}
</script>
