<template>
  <div class="w-56">
    <atoms-content-loader v-if="!socialLinks" :width="100" :height="10.5" />
    <ul
      v-else
      class="social grid grid-flow-col auto-cols-max items-center gap-3"
    >
      <li v-for="item in socialLinks" :key="item.network">
        <a
          v-if="item.network === 'instagram'"
          :href="'https://instagram.com/' + item.value"
          target="_blank"
          title="Instagram"
          rel="noreferrer noopener"
        >
          <instagram-icon />
        </a>
        <a
          v-if="item.network === 'vk'"
          :href="'https://vk.com/' + item.value"
          target="_blank"
          title="VK"
          rel="noreferrer noopener"
        >
          <vk-icon />
        </a>
        <a
          v-if="item.network === 'pinterest'"
          :href="'https://pinterest.com/' + item.value"
          target="_blank"
          title="Pinterest"
          rel="noreferrer noopener"
        >
          <pinterest-icon />
        </a>
        <a
          v-if="item.network === 'facebook'"
          :href="'https://facebook.com/' + item.value"
          target="_blank"
          title="Facebook"
          rel="noreferrer noopener"
        >
          <facebook-icon />
        </a>
        <a
          v-if="item.network === 'telegram'"
          :href="'https://t.me/' + item.value"
          target="_blank"
          title="Telegram"
          rel="noreferrer noopener"
        >
          <telegram-icon />
        </a>
        <a
          v-if="item.network === 'whatsapp'"
          :href="'https://wa.me/' + item.value.replace(/[^0-9\.]+/g, '')"
          target="_blank"
          title="Whatsapp"
          rel="noreferrer noopener"
        >
          <whatsapp-icon />
        </a>
        <a
          v-if="item.network === 'viber'"
          :href="
            $device.isMobile
              ? 'viber://chat?number=' +
                item.value.replace(
                  /[`~!@#$%^&*()_|\-=?;:'',.<>\{\}\[\]\\\/, ' ']/g,
                  ''
                )
              : 'viber://add?number=' +
                item.value.replace(
                  /[`~!@#$%^&*()_|\-=?;:'',.<>\{\}\[\]\\\/, ' ']/g,
                  ''
                )
          "
          title="Viber"
          rel="noreferrer noopener"
        >
          <viber-icon />
        </a>
        <a
          v-if="item.network === 'twitter'"
          :href="'https://twitter.com/' + item.value"
          target="_blank"
          title="Twitter"
          rel="noreferrer noopener"
        >
          <twitter-icon />
        </a>
        <a
          v-if="item.network === 'youtube'"
          :href="'https://youtube.com/' + item.value"
          target="_blank"
          title="YouTube"
          rel="noreferrer noopener"
        >
          <youtube-icon />
        </a>
        <a
          v-if="item.network === 'wechat'"
          :href="'weixin://dl/chat?' + item.value"
          target="_blank"
          title="Wechat"
          rel="noreferrer noopener"
        >
          <wechat-icon />
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import { gql } from 'nuxt-graphql-request'
import InstagramIcon from '~/assets/icons/instagram.svg?inline'
import TelegramIcon from '~/assets/icons/telegram.svg?inline'
import VkIcon from '~/assets/icons/vk.svg?inline'
import PinterestIcon from '~/assets/icons/pinterest.svg?inline'
import YoutubeIcon from '~/assets/icons/youtube.svg?inline'
import WhatsappIcon from '~/assets/icons/whatsapp.svg?inline'
import ViberIcon from '~/assets/icons/viber.svg?inline'
import FacebookIcon from '~/assets/icons/facebook.svg?inline'
import TwitterIcon from '~/assets/icons/twitter.svg?inline'
import WechatIcon from '~/assets/icons/wechat.svg?inline'

export default {
  components: {
    InstagramIcon,
    TelegramIcon,
    VkIcon,
    YoutubeIcon,
    PinterestIcon,
    WhatsappIcon,
    ViberIcon,
    FacebookIcon,
    TwitterIcon,
    WechatIcon,
  },
  data() {
    return {
      data: {},
    }
  },
  async fetch() {
    const query = gql`
      query SocialLinks {
        setting {
          social {
            network
            value
          }
        }
      }
    `
    this.data = await this.$graphql.default.request(query)
  },
  fetchOnServer: false,
  computed: {
    socialLinks() {
      return this.data?.setting?.social
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
