<template>
   <div>
        <base-logo class="w-48 mb-4 md:w-56" />
        <!-- <BaseLogo
          class="w-48 mb-4 md:w-56"
          :svgLogo="$static.settings.edges[0].node.svgLogo"
          :siteName="$static.settings.edges[0].node.name"
        /> -->
        <div class="flex items-center mb-1">
          <phone-icon class="w-5 mr-1 font-medium" />
          <a v-on:click="gtag('event', click, {'event_category': phone});" :href="'tel:' + phoneNumber" title="Контактный номер">{{
            phone
          }}</a>
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
import MailIcon from "~/assets/svg/MailIcon.svg?inline";
import PhoneIcon from "~/assets/svg/PhoneIcon.svg?inline";
export default {
  props: ["email", "phone"],
  components: {
    MailIcon,
    PhoneIcon,
  },
  computed: {
      phoneNumber() {
      return `${this.phone.replace(/[`~!@#$%^&*()_|\-=?;:'",.<>\{\}\[\]\\\/, " "]/g, "")}`;
    },
  }
}
</script>