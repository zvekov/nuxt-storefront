<template>
  <div class="default min-h-screen flex flex-col">
    <part-header />
    <Nuxt keep-alive :keep-alive-props="{ max: 10 }" class="pt-4 flex-1" />
    <part-footer />
    <organisms-navbar :name="$route.name" />
  </div>
</template>
<script>
import canonical from '@/mixins/seo/canonical.js'
export default {
  mixins: [canonical],
}
</script>
<style lang="postcss" scoped>
.default {
  @apply pb-12 md:pb-0;
}
/* @screen landscape {
  div {
    max-width: calc(100% - 4rem);
  }
} */
</style>