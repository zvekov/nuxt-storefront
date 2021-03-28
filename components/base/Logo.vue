<template>
  <nuxt-link class="base-logo" to="/" :title="siteName">
    <VueMarkdown v-if="svgLogo" :source="svgLogo" />
    <Logo v-if="!svgLogo" class="h-10" />
  </nuxt-link>
</template>
<script>
import Logo from "~/assets/svg/Logo.svg?inline";
// import VueMarkdown from "vue-markdown";
export default {
  props: ["svgLogo", "siteName"],
  components: {
    Logo,
    // VueMarkdown,
  },
};
</script>
<style>
header .base-logo svg {
  @apply mx-auto;
}
</style>