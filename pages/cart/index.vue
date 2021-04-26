<template>
  <div class="relative w-full inner">
    <div class="w-auto px-3 mb-4 flex items-center justify-between h-6">
      <atoms-link-back :link-to="'/'" :link-name="'Home'" />
    </div>
    <div class="px-3 pb-4 grid md:grid-cols-2">
      <div class="md:pb-24">
        <h1 class="text-2xl font-bold leading-snug">
          {{ 'Cart' }}
        </h1>
      </div>
    </div>
    <div class="px-3">Your cart empty!</div>
  </div>
</template>
<script>
export default {
  name: 'CartPage',
}
</script>
