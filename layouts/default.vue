<template>
  <div class="min-h-screen flex flex-col">
    <part-header />
    <Nuxt class="pt-4 flex-1" />
    <part-footer />
  </div>
</template>
<script>
import canonical from '@/mixins/seo/canonical.js'
export default {
  mixins: [canonical],
}
</script>