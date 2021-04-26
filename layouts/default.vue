<template>
  <div
    class="default-layout min-h-screen flex flex-col"
    :class="$route.name === 'product-slug' ? 'product-page' : ''"
  >
    <part-header />
    <Nuxt keep-alive :keep-alive-props="{ max: 10 }" class="pt-4 flex-1 text" />
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
<style lang="postcss">
.default-layout {
  padding-bottom: 61px;
  @apply md:pb-0;
  &.product-page {
    padding-bottom: 125px;
    @apply md:pb-0;
  }
}
</style>
