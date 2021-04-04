<template>
  <div class="min-h-screen flex flex-col">
    <part-header />
    <Nuxt keep-alive :keep-alive-props="{ max: 10 }" class="pt-4 flex-1" />
    <part-footer />
  </div>
</template>
<script>
import canonical from '@/mixins/seo/canonical.js'
export default {
  mixins: [canonical],
}
</script>