<template>
  <div class="relative w-full inner">
    <div class="w-auto px-3 mb-4 flex items-center justify-between h-6">
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