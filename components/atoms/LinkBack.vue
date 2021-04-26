<template>
  <nuxt-link
    :to="linkTo"
    :title="linkName"
    class="flex items-center motion-safe:hover:-translate-x-2 transition-transform transform duration-300"
  >
    <arrow-back class="w-3 h-3 translate-x-0 group-hover:-translate-x-4 mr-2" />
    <atoms-content-loader v-if="!linkName" :width="70" :height="7.5">
    </atoms-content-loader>
    <span v-else>{{ linkName }}</span>
  </nuxt-link>
</template>

<script>
import ArrowBack from '~/assets/icons/arrow-left.svg?inline'
export default {
  name: 'LinkBack',
  components: {
    ArrowBack,
  },
  props: {
    linkTo: {
      type: String,
      default: null,
    },
    linkName: {
      type: String,
      default: null,
    },
  },
}
</script>
