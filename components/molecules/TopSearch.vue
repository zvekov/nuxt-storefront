<template>
  <div class="top-search flex">
    <button class="absolute right-0 top-0" @click="hideTopSearch">
      <close-icon
        class="
          h-10
          w-10
          text-black text-opacity-80
          dark:text-white dark:text-opacity-80
        "
      />
    </button>
    <div class="search-input flex items-center justify-center relative mx-auto">
      <search-icon class="w-6 h-6 absolute left-0 opacity-50" />
      <input
        v-focus
        type="search"
        placeholder="Search..."
        class="h-16 text-2xl pl-10 pr-4"
      />
    </div>
  </div>
</template>
<script>
import CloseIcon from '~/assets/icons/close.svg?inline'
import SearchIcon from '~/assets/icons/search.svg?inline'
export default {
  components: { CloseIcon, SearchIcon },
  directives: {
    focus: {
      inserted(el) {
        el.focus()
      },
      update(el) {
        el.focus()
      },
    },
  },
  methods: {
    hideTopSearch() {
      this.$emit('hideTopSearch')
    },
  },
}
</script>
<style lang="postcss">
.top-search {
  backdrop-filter: blur(4px);
  @apply h-screen fixed right-0 top-0 z-50 w-full h-72 bg-white bg-opacity-90 p-8 dark:bg-black dark:bg-opacity-90;
  box-shadow: -0.5rem -1rem 1rem rgba(0, 0, 0, 0.05);
  & .search-input {
    width: 40rem;
  }
  & input {
    @apply w-full outline-none border-b-2 bg-transparent dark:bg-transparent transition-all duration-200 transform;
    &:focus {
      @apply border-b-2  outline-none border-gray-600;
    }
  }
}
</style>
