<template>
  <nuxt-link to="/" :title="brand.name">
    <span v-if="brand.iconSvg" class="w-full" v-html="brand.iconSvg" />
  </nuxt-link>
</template>
<script>
export default {
  props: ['brand'],
}
</script>