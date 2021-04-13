<template>
  <span>
    <atoms-content-loader v-if="!email" :width="100" :height="10" />
    <a v-else :href="'mailto:' + email">{{ email }}</a>
  </span>
</template>
<script>
export default {
  props: ['email'],
}
</script>