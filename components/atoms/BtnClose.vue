<template>
  <button
    class="btn-close"
    :class="bg ? 'bg-gray-100 dark:bg-opacity-10' : null"
    @click="close"
  ></button>
</template>
<script>
export default {
  props: {
    bg: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    close() {
      this.$emit('close')
    },
  },
}
</script>
<style lang="postcss">
.btn-close {
  @apply rounded-full text-black text-opacity-50 dark:text-white dark:text-opacity-50 w-9 h-9;
  border: 9px solid transparent;
  &:before,
  &:after {
    @apply absolute w-full rounded-full bg-gray-600 opacity-100;
    content: '';
    height: 2px;
    top: 50%;
    left: 0;
    margin-top: -1px;
    transform-origin: 50% 50%;
    transition: transform ease 0.25s;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
  &:hover {
    &:before,
    &:after {
      @apply rounded-full;
      transform: rotate(0deg);
    }
  }
}
</style>
