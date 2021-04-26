<template>
  <nuxt-link class="base-logo" to="/">
    <logo class="h-10" />
  </nuxt-link>
</template>
<script>
import Logo from '~/assets/svg/logotype.svg?inline'
export default {
  components: {
    Logo,
  },
}
</script>
<style lang="postcss">
header .base-logo svg {
  @apply mx-auto w-full;
}
</style>
