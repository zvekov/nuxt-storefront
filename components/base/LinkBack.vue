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
import ArrowBack from '~/assets/icons/arrow-left.svg?inline'
export default {
  name: 'LinkBack',
  props: ['linkTo', 'linkName'],
  components: {
    ArrowBack,
  },
}
</script>