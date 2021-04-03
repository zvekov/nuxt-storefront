<template>
  <div>
    <base-logo class="w-48 mb-4 md:w-56" />
    <div class="flex items-center mb-1">
      <phone-icon class="w-5 mr-1 font-medium" />
      <base-phone-number :phone="phone" />
    </div>
    <div class="flex items-center mb-2">
      <mail-icon class="w-5 mr-1 font-medium" />
      <a :href="'mailto:' + email" title="E-Mail">{{ email }}</a>
    </div>
    <div>
      <base-social-links />
    </div>
  </div>
</template>
<script>
import MailIcon from '~/assets/icons/mail.svg?inline'
import PhoneIcon from '~/assets/icons/phone.svg?inline'
export default {
  props: ['email', 'phone'],
  components: {
    MailIcon,
    PhoneIcon,
  },
}
</script>