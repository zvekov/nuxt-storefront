<template>
  <div class="aside-cart flex flex-col">
    <div
      class="
        font-bold
        text-xl
        relative
        bg-gray-300 bg-opacity-30
        dark:bg-white dark:bg-opacity-10
        px-8
        py-4
      "
    >
      <div>
        Cart
        <span
          v-if="cartQty > 0"
          class="
            ml-1
            absolute
            text-sm
            font-normal
            bg-gray-100 bg-opacity-80
            dark:bg-opacity-10
            rounded-full
            w-4
            h-4
            text-center
            leading-4
          "
          >{{ cartQty }}</span
        >
      </div>
      <button
        class="absolute right-0 top-0 bottom-0 mr-4"
        @click="hideAsideCart"
      >
        <close-icon
          class="
            bg-gray-100 bg-opacity-50
            dark:bg-opacity-10
            rounded-full
            h-10
            w-10
            text-black text-opacity-50
            dark:text-white dark:text-opacity-50
          "
        />
      </button>
    </div>
    <div v-if="cartQty < 1" class="px-8 py-4 mt-16 flex flex-col items-center">
      <boredSvg class="h-32" />
      <span class="pt-4 text-lg">Your cart empty!</span>
    </div>
  </div>
</template>
<script>
import CloseIcon from '~/assets/icons/close.svg?inline'
import boredSvg from '~/assets/svg/bored.svg?inline'
export default {
  components: { CloseIcon, boredSvg },
  data() {
    return {
      cartQty: 0,
    }
  },
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
  @apply h-screen fixed right-0 top-0 z-50 w-96 bg-white bg-opacity-90 dark:bg-black dark:bg-opacity-90;
  box-shadow: -0.5rem -1rem 1rem rgba(0, 0, 0, 0.05);
}
</style>
