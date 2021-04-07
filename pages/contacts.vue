<template>
  <div class="relative w-full inner">
    <div class="w-full h-full px-3 pb-4 lg:w-3/12">
      <atoms-link-back :linkTo="'/'" :linkName="'Home'" />
    </div>
    <div class="px-3 grid md:grid-cols-2">
      <div class="pb-12 md:pb-24">
        <h1 class="pb-3 text-2xl font-bold leading-snug">
          {{ 'Contacts' }}
        </h1>
        <div class="flex flex-col">
          <span class="flex items-center mb-1">
            <location-icon class="w-5 mr-1 font-medium" />
            {{ address }}
          </span>
          <span class="flex items-center mb-1">
            <phone-icon class="w-5 mr-1 font-medium" />
            <!-- <base-phone-number :phone="phone" /> -->
          </span>
          <span class="flex items-center mb-2">
            <mail-icon class="w-5 mr-1 font-medium" />
            <a :href="'mailto:' + email" title="E-Mail">{{ email }}</a>
          </span>
          <span class="pr-16 md:pr-0"
            >You can also write to
            <a
              :href="'https://wa.me/'"
              class="link"
              target="_blank"
              title="Whatsapp"
              >Whatsapp</a
            >,
            <a
              class="link lg:hidden"
              :href="'viber://chat?number='"
              title="Viber"
              >Viber</a
            >
            <a
              :href="'viber://add?number='"
              class="link hidden lg:inline"
              title="Viber"
              >Viber</a
            >
            or
            <a
              onclick="ReplainAPI('open')"
              class="link cursor-pointer"
              title="Чат на сайте"
            >
              chat</a
            >
            on the site.
          </span>
          <h2 class="pt-6 pb-2 font-bold leading-snug">Our social networks</h2>
          <base-social-links />
        </div>
      </div>
      <ClientOnly>
        <base-yandex-map
          class="w-full shadow-pressDefault rounded-lg h-64 md:h-full dark:shadow-none"
        />
      </ClientOnly>
    </div>
  </div>
</template>
<script>
import MailIcon from '~/assets/icons/mail.svg?inline'
import PhoneIcon from '~/assets/icons/phone.svg?inline'
import LocationIcon from '~/assets/icons/location.svg?inline'

import seo from '~/mixins/seo/page'

export default {
  mixins: [seo],
  components: {
    MailIcon,
    PhoneIcon,
    LocationIcon,
  },
}
</script>
<style lang="postcss" scoped>
a {
  &.link {
    @apply border-b border-gray-700 border-opacity-10 leading-7 transition-all;
    &:hover {
      @apply transition-colors duration-200 border-opacity-40;
    }
  }
}
</style>       