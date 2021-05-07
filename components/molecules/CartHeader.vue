<template>
  <div>
    <button @click="toggleAsideCart">
      <cart-icon class="w-8 h-8" />
    </button>
    <transition name="right-left">
      <organisms-aside-cart
        v-if="asideCart"
        v-click-outside="toggleAsideCart"
        @hideAsideCart="toggleAsideCart"
      />
    </transition>
  </div>
</template>
<script>
import CartIcon from '~/assets/icons/cart.svg?inline'

import { mapGetters, mapMutations } from 'vuex'

import ClickOutside from 'vue-click-outside'

export default {
  components: { CartIcon, ClickOutside },
  directives: {
    ClickOutside,
  },
  methods: {
    ...mapMutations({ toggleAsideCart: 'asideCart/toggleAsideCart' }),
  },
  mounted() {
    this.popupItem = this.$el
  },

  directives: {
    ClickOutside,
  },
  computed: {
    ...mapGetters({ asideCart: 'asideCart/getAsideCartState' }),
  },
}
</script>