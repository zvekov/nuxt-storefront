<template>
  <div class="ads-header bg-purple-900 fixed w-full">
    <nuxt-link to="/collection/summer/" @click.native="closeAdsHeader">
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
    <button class="absolute right-0 top-0">
      <close-icon class="h-10 w-10 text-white" @click="closeAdsHeader" />
    </button>
  </div>
</template>

<script>
import CloseIcon from '~/assets/icons/close.svg?inline'
import ArrowRightIcon from '~/assets/icons/arrow-right.svg?inline'
export default {
  components: {
    CloseIcon,
    ArrowRightIcon,
  },
  methods: {
    closeAdsHeader() {
      this.$emit('clickToCloseAdsHeader')
    },
  },
}
</script>

<style lang="postcss">
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
