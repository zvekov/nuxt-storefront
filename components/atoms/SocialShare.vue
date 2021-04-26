<template>
  <div
    class="ya-share2"
    data-curtain
    data-shape="round"
    :data-size="dataSize"
    :lang="lang"
    data-color-scheme="whiteblack"
    data-limit="0"
    data-more-button-type="short"
    :data-services="dataServices"
    :data-image:pinterest="dataImage"
  ></div>
</template>
<script>
export default {
  props: {
    dataSize: { type: String, default: null },
    dataImage: { type: String, default: null },
  },
  data() {
    return {
      lang: 'en',
      dataServices:
        'telegram,whatsapp,viber,vkontakte,facebook,odnoklassniki,pinterest',
    }
  },
  head() {
    return {
      script: [
        {
          src: 'https://yastatic.net/share2/share.js',
          body: true,
          async: true,
          crossorigin: 'anonymous',
        },
      ],
    }
  },
}
</script>
<style lang="postcss">
.ya-share2 {
  & .ya-share2__container_size_m,
  .ya-share2__container_size_s {
    & .ya-share2__badge {
      & + .ya-share2__title {
        @apply font-body;
      }
    }
    &.ya-share2__container_alone {
      & .ya-share2__popup_direction_bottom {
        @apply pr-2;
      }
    }
    & .ya-share2__item_more.ya-share2__item_has-pretty-view {
      & .ya-share2__popup_direction_bottom {
        @apply pr-2;
      }
      & .ya-share2__link_more.ya-share2__link_more-button-type_short {
        background: transparent !important;
        &:hover {
          background: rgba(0, 0, 0, 0.07);
        }
      }
    }
  }
}
.ya-share2__icon_more {
  @apply dark:filter-invert dark:opacity-90;
}
</style>
