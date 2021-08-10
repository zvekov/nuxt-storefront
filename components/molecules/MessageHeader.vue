<template>
  <div class="message-header bg-purple-900 fixed w-full">
    <nuxt-link to="/collection/summer/" @click.native="closeMessageHeader">
      <div class="inner flex justify-center text-white">
        <div class="pl-3 pr-6 py-2">
          <strong>New Summer 2021</strong> Collection With Discount Prices 🔥
          <span class="ml-1 inline items-center">
            <strong>Buy Now</strong>
            <arrow-right-icon class="w-6 h-6 inline translate-x-0" />
          </span>
        </div>
      </div>
    </nuxt-link>
    <atoms-btn-close
      class="absolute right-0 top-0 bottom-0 h-10 w-10 text-white m-auto"
      @close="closeMessageHeader"
    />
    <!-- <button class="absolute right-0 top-0" @click="closeMessageHeader">
      <close-icon class="h-10 w-10 text-white" />
    </button> -->
  </div>
</template>

<script>
// import CloseIcon from '~/assets/icons/close.svg?inline'
import ArrowRightIcon from '~/assets/icons/arrow-right.svg?inline'
export default {
  components: {
    // CloseIcon,
    ArrowRightIcon,
  },
  methods: {
    closeMessageHeader() {
      this.$emit('clickToCloseMessageHeader')
    },
  },
}
</script>

<style lang="postcss" scoped>
.btn-close {
  &:after,
  &:before {
    @apply bg-white;
  }
}
/* svg:not(:hover) path {
  animation: 0.1s both notHover;
}
svg:hover path {
  animation: 0.25s linear both onHover;
}
@keyframes onHover {
  0% {
    d: path('M8.464,15.536L15.536,8.464M8.464,8.464L15.536,15.536');
    animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
  }
  100% {
    d: path('M8.464,12L15.536,12M8.464,12L15.536,12');
    animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
  }
}
@keyframes notHover {
  0% {
    d: path('M8.464,12L15.536,12M8.464,12L15.536,12');
    animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
  }
  100% {
    d: path('M8.464,15.536L15.536,9.072M8.464,9.072L15.536,15.536');
  }
} */
.ads-header a {
  & svg {
    @apply transition-all transform duration-300;
  }
  &:hover {
    & svg {
      @apply motion-safe:translate-x-2;
    }
  }
}
</style>
