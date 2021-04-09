<template>
  <div class="relative w-full inner">
    <div
      class="top-0 w-full h-full px-3 pb-4 lg:w-3/12 lg:sticky md:pt-16 md:-mt-16"
    >
      <atoms-link-back :linkTo="'/'" :linkName="'Home'" />
    </div>
    <div class="px-3 grid md:grid-cols-2">
      <div class="pb-12 md:pb-24">
        <h1 class="pb-3 text-2xl font-bold leading-snug">
          {{ 'About us' }}
        </h1>
      </div>
    </div>
  </div>
</template>