<template>
  <div>
    <button @click="toggleAsideCart">
      <cart-icon class="w-8 h-8" />
    </button>
    <transition name="right-left">
      <organisms-aside-cart v-if="asideCart" @hideAsideCart="toggleAsideCart" />
    </transition>
    <div
      v-if="asideCart"
      @click="toggleAsideCart"
      class="absolute top-0 left-0 w-full h-screen bg-black bg-opacity-30 z-0"
    ></div>
  </div>
</template>
<script>
import CartIcon from '~/assets/icons/cart.svg?inline'

import { mapGetters, mapMutations } from 'vuex'

export default {
  components: { CartIcon },
  methods: {
    ...mapMutations({ toggleAsideCart: 'asideCart/toggleAsideCart' }),
  },
  computed: {
    ...mapGetters({ asideCart: 'asideCart/getAsideCartState' }),
  },
}
</script>