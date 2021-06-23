<template>
  <button
    class="
      relative
      overflow-hidden
      items-center
      rounded-full
      h-10
      outline-none
      text-light-onSurfacePrimary
      dark:text-dark-onSurfacePrimary
      transition-colors
      duration-300
      ease-linear
      flex
    "
    @click="setCurrentTheme"
  >
    <span
      class="relative overflow-hidden w-6 h-6 flex items-center justify-center"
    >
      <moon-icon
        class="w-6 h-6 absolute"
        :class="$colorMode.preference === 'dark' ? 'show' : 'hide'"
      />
      <!-- <system-icon
        class="w-6 h-6 absolute"
        :class="$colorMode.preference === 'system' ? 'show' : 'hide'"
      /> -->
      <sun-icon
        class="w-6 h-6 absolute"
        :class="$colorMode.preference === 'light' ? 'show' : 'hide'"
      />
    </span>
    <!-- <transition name="from-bottom-to-bottom" mode="out-in">
      <span
        v-if="$colorMode.preference === 'dark'"
        key="dark"
        class="inline-block font-medium mr-1"
      >
        Dark
      </span>
      <span
        v-if="$colorMode.preference === 'system'"
        key="system"
        class="inline-block font-medium mr-1"
      >
        System
      </span>
      <span
        v-else-if="$colorMode.preference === 'light'"
        key="light"
        class="inline-block font-medium mr-1"
      >
        Light
      </span>
    </transition> -->
  </button>
</template>

<script>
import SunIcon from '~/assets/icons/sun.svg?inline'
import MoonIcon from '~/assets/icons/moon.svg?inline'
// import SystemIcon from '~/assets/icons/system.svg?inline'
export default {
  components: {
    SunIcon,
    MoonIcon,
    // SystemIcon,
  },
  methods: {
    setCurrentTheme() {
      this.$colorMode.preference =
        this.$colorMode.preference === 'light'
          ? 'dark'
          : this.$colorMode.preference === 'dark'
          ? 'light'
          : 'dark'
    },
    // setCurrentTheme() {
    //   this.$colorMode.preference =
    //     this.$colorMode.preference === 'system'
    //       ? 'light'
    //       : this.$colorMode.preference === 'light'
    //       ? 'dark'
    //       : 'system'
    // },
  },
}
</script>

<style lang="scss" scoped>
button {
  outline: none;
}
.show {
  animation: show-icon 300ms forwards;
}
.hide {
  animation: hide-icon 300ms forwards;
}
@keyframes show-icon {
  from {
    opacity: 0;
    transform: scaleY(0);
    // transform: translate3d(-100%, 10px, 0) rotate(-180deg) scale3d(0.5, 0.5, 0.5);
  }
  to {
    opacity: 1;
    transform: scaleY(1);
    // transform: translate3d(0, 0, 0) rotate(0) scale3d(1, 1, 1);
  }
}
@keyframes hide-icon {
  from {
    opacity: 1;
    transform: scaleY(1);
    // transform: translate3d(0, 0, 0) rotate(0) scale3d(1, 1, 1);
  }
  to {
    opacity: 0;
    transform: scaleY(0);
    // transform:  translate3d(100%, 10px, 0) rotate(180deg) scale3d(0.5, 0.5, 0.5);
  }
}
.from-bottom-to-bottom-enter-active {
  opacity: 1;
  transition: opacity 100ms, transform 100ms cubic-bezier(0.4, 0, 0.2, 1);
}
.from-bottom-to-bottom-leave-active {
  opacity: 1;
  transition: opacity 100ms, transform 100ms cubic-bezier(0.4, 0, 0.2, 1);
}
.from-bottom-to-bottom-enter {
  opacity: 0;
  transform: scaleY(0);
}
.from-bottom-to-bottom-leave-active {
  opacity: 0;
  transform: scaleY(0);
}
</style>
