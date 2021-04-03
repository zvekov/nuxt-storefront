<template>
  <a :href="'tel:' + phoneNumber" title="Contact Phone">{{ phone }}</a>
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