<template>
  <div>
    <button @click="toggleAsideCart">
      <cart-icon class="w-8 h-8" />
    </button>
    <transition name="right-left">
      <molecules-aside-cart v-if="asideCart" @hideAsideCart="toggleAsideCart" />
    </transition>
    <div
      v-if="asideCart"
      class="absolute top-0 left-0 w-full h-screen bg-black bg-opacity-30 z-0"
      @click="toggleAsideCart"
    ></div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import CartIcon from '~/assets/icons/cart.svg?inline'

export default {
  components: { CartIcon },
  computed: {
    ...mapGetters({ asideCart: 'asideCart/getAsideCartState' }),
  },
  methods: {
    ...mapMutations({ toggleAsideCart: 'asideCart/toggleAsideCart' }),
  },
}
</script>
