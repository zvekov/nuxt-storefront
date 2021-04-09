<template>
  <nuxt-link class="base-logo" to="/">
    <logotype class="h-10" />
  </nuxt-link>
</template>
<script>
import Logotype from '~/assets/svg/logo.svg?inline'
export default {
  components: {
    Logotype,
  },
}
</script>
<style lang="postcss">
header .base-logo svg {
  @apply mx-auto w-full;
}
</style>