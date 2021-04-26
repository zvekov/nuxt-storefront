<template>
  <div>
    <atoms-logo class="w-48 mb-4 md:w-56" />
    <div class="flex items-center mb-1">
      <phone-icon class="w-5 mr-1 font-medium" />
      <atoms-phone-number :phone="phone" />
    </div>
    <div class="flex items-center mb-2">
      <mail-icon class="w-5 mr-1 font-medium" />
      <atoms-email :email="email" />
    </div>
    <div>
      <base-social-links />
    </div>
  </div>
</template>
<script>
import { gql } from 'nuxt-graphql-request'
import MailIcon from '~/assets/icons/mail.svg?inline'
import PhoneIcon from '~/assets/icons/phone.svg?inline'
export default {
  components: {
    MailIcon,
    PhoneIcon,
  },
  data() {
    return { data: {} }
  },
  async fetch() {
    const query = gql`
      query ContactEmail {
        setting {
          contacts {
            phone
            email
          }
        }
      }
    `
    this.data = await this.$graphql.default.request(query)
  },
  fetchOnServer: false,
  computed: {
    email() {
      return this.data?.setting?.contacts?.email
    },
    phone() {
      return this.data?.setting?.contacts?.phone
    },
  },
}
</script>
