<template>
  <div class="relative w-full inner">
    <div class="w-auto px-3 mb-4 flex items-center justify-between h-6">
      <atoms-link-back :link-to="'/'" :link-name="'Home'" />
    </div>
    <div class="px-3 grid md:grid-cols-2">
      <div class="pb-12 md:pb-24">
        <h1 class="pb-3 text-2xl font-bold leading-snug">
          {{ 'Account' }}
        </h1>
      </div>
    </div>
    {{ user }}

    <button @click="logoutUser">Logout</button>
  </div>
</template>
<script>
export default {
  name: 'Account',
  computed: {
    user() {
      return this.$strapi.user
    },
  },
  methods: {
    // logoutUser() {
    //   this.$strapi.logout()
    //   this.$strapi.clearToken()
    //   this.$router.push('/')
    // },
    async logoutUser() {
      try {
        await this.$strapi.logout()
      } catch (e) {
        alert(e)
      }
      this.$router.push('/')
    },
  },
  middleware({ $strapi, redirect }) {
    if (!$strapi.user) {
      return redirect('/signin/')
    }
  },
}
</script>
