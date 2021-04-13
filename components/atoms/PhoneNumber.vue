<template>
  <span>
    <atoms-content-loader v-if="!phone" :width="100" :height="10" />
    <a v-else :href="'tel:' + phoneNumber" title="Contact Phone">{{ phone }}</a>
  </span>
</template>
<script>
export default {
  props: ['phone'],
  computed: {
    phoneNumber() {
      return `${this.phone.replace(
        /[`~!@#$%^&*()_|\-=?;:'",.<>\{\}\[\]\\\/, " "]/g,
        ''
      )}`
    },
  },
}
</script>