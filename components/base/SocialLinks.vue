<template>
  <ul class="social grid grid-flow-col auto-cols-max items-center gap-3">
    <li v-if="instagramLink != null">
      <a
        :href="instagramLink"
        target="_blank"
        title="Instagram"
        rel="noreferrer noopener"
      >
        <instagram-icon />
      </a>
    </li>
    <li v-if="pinterestLink != null">
      <a
        :href="pinterestLink"
        target="_blank"
        rel="noreferrer noopener"
        title="Pinterest"
      >
        <pinterest-icon />
      </a>
    </li>
    <li v-if="vkLink != null">
      <a
        :href="vkLink"
        target="_blank"
        title="Вконтакте"
        rel="noreferrer noopener"
      >
        <vk-icon />
      </a>
    </li>
    <li v-if="youtubeLink != null">
      <a
        :href="youtubeLink"
        target="_blank"
        title="Youtube"
        rel="noreferrer noopener"
      >
        <youtube-icon />
      </a>
    </li>
    <li v-if="telegramLink != null">
      <a
        :href="telegramLink"
        target="_blank"
        rel="noreferrer noopener"
        title="Telegram"
      >
        <telegram-icon />
      </a>
    </li>
    <li v-if="whatsappNumber != null">
      <a
        :href="'https://wa.me/' + whatsappNumber"
        target="_blank"
        rel="noreferrer noopener"
        title="Whatsapp"
      >
        <whatsapp-icon />
      </a>
    </li>
    <li v-if="viberNumber != null">
      <base-viber-link :viberNumber="viberNumber" />
    </li>
  </ul>
</template>
<script>
import InstagramIcon from '~/assets/svg/InstagramIcon.svg?inline'
import TelegramIcon from '~/assets/svg/TelegramIcon.svg?inline'
import VkIcon from '~/assets/svg/VkIcon.svg?inline'
import PinterestIcon from '~/assets/svg/PinterestIcon.svg?inline'
import YoutubeIcon from '~/assets/svg/YoutubeIcon.svg?inline'
import WhatsappIcon from '~/assets/svg/WhatsappIcon.svg?inline'

import social from '~/data/socials.json'
export default {
  data() {
    return {
      social: social,
    }
  },
  components: {
    InstagramIcon,
    TelegramIcon,
    VkIcon,
    YoutubeIcon,
    PinterestIcon,
    WhatsappIcon,
  },
  computed: {
    instagramLink() {
      return this.social ? this.social.instagram : null
    },
    vkLink() {
      return this.social ? this.social.vk : null
    },
    pinterestLink() {
      return this.social ? this.social.pinterest : null
    },
    youtubeLink() {
      return this.social ? this.social.youtube : null
    },
    telegramLink() {
      return this.social ? this.social.telegram : null
    },
    facebookLink() {
      return this.social ? this.social.facebook : null
    },
    whatsappNumber() {
      return this.social ? this.social.whatsapp.replace(/[^0-9\.]+/g, '') : null
    },
    viberNumber() {
      return this.social
        ? this.social.viber.replace(
            /[`~!@#$%^&*()_|\-=?;:'",.<>\{\}\[\]\\\/, " "]/g,
            ''
          )
        : null
    },
  },
}
</script>
<style lang="postcss">
ul.social {
  & li {
    & a {
      @apply border-0;
      & svg {
        @apply w-5 transform duration-200;
        &:hover {
          @apply scale-125;
        }
      }
    }
  }
}
</style>