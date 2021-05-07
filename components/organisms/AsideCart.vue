<template>
  <div class="aside-cart flex flex-col">
    <button class="absolute right-0 top-0" @click="hideAsideCart">
      <close-icon
        class="h-10 w-10 text-black text-opacity-80 dark:text-white dark:text-opacity-80"
      />
    </button>
    <div class="font-bold text-xl">My cart</div>
    <div v-if="cartQty < 1" class="mt-16 flex flex-col items-center">
      <boredSvg class="h-32" />
      <span class="pt-4 text-lg">Your cart empty!</span>
    </div>
  </div>
</template>
<script>
import CloseIcon from '~/assets/icons/close.svg?inline'
import boredSvg from '~/assets/svg/bored.svg?inline'
export default {
  data() {
    return {
      cartQty: 0,
    }
  },
  components: { CloseIcon, boredSvg },
  methods: {
    hideAsideCart() {
      this.$emit('hideAsideCart')
    },
  },
}
</script>
<style lang="postcss">
.aside-cart {
  backdrop-filter: blur(4px);
  @apply h-screen fixed right-0 top-0 z-50 w-96 bg-white bg-opacity-90 p-8 dark:bg-black dark:bg-opacity-90;
  box-shadow: -0.5rem -1rem 1rem rgba(0, 0, 0, 0.05);
}
</style>