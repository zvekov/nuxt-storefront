
<template>
  <nuxt-link
    :to="linkTo"
    :title="linkName"
    class="flex items-center motion-safe:hover:-translate-x-2 transition-transform transform duration-300"
  >
    <arrow-back class="w-3 h-3 translate-x-0 group-hover:-translate-x-4" />
    <span class="ml-2">{{ linkName }}</span>
  </nuxt-link>
</template>

<script>
import ArrowBack from "~/assets/svg/ArrowBack.svg?inline";
export default {
  name: "LinkBack",
  props: ["linkTo", "linkName"],
  components: {
    ArrowBack,
  },
};
</script>

<style lang="postcss">
.link-back {
  @apply top-0 w-full h-full px-3 pb-4;
  @screen md {
    @apply -mt-16 pt-16;
  }
  @screeb lg {
    @apply w-3/12 sticky;
  }
}
