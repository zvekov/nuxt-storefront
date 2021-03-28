<template>
  <div class="min-h-screen">
    <part-header />
    <Nuxt class="pt-4" />
    <part-footer />
  </div>
</template>
<script>
import canonical from '@/mixins/seo/canonical.js'
export default {
  mixins: [canonical],
}
</script>