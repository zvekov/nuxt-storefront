<template>
  <footer>
    <div class="grid sm:grid-cols-2 lg:grid-cols-4 inner">
      <div class="flex items-start px-3 sm:justify-center">
        <base-social-links />
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterPart',
}
</script>
<style lang="postcss">
footer {
  @apply py-8 mt-8 bg-gray-100 dark:bg-black dark:bg-opacity-90 dark:text-gray-100;
  & a {
    &:hover {
      @apply transition-colors duration-200;
      color: var(--body-color-hover);
      border-color: var(--border-color-hover);
    }
  }
  & li {
    & a {
      @apply border-b border-opacity-10 border-transparent leading-7 transition-all duration-200 transform dark:text-white dark:opacity-80 dark:hover:opacity-100 dark:hover:border-white dark:hover:border-opacity-50 dark:border-transparent;
    }
  }
}
</style>
