<template>
  <nuxt-link to="/" :title="brand.name">
    <span class="w-full" v-html="brand.icon" />
  </nuxt-link>
</template>
<script>
export default {
  props: ['brand'],
}
</script>