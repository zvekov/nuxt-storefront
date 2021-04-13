<template>
  <div class="relative w-full inner">
    <div class="w-auto px-3 mb-4 flex items-center justify-between h-6">
      <atoms-link-back :linkTo="'/'" :linkName="'Home'" />
    </div>
    <div class="px-3 pb-4 grid md:grid-cols-2">
      <div class="">
        <h1 class="text-2xl font-bold leading-snug">
          {{ 'Wishlist' }}
        </h1>
      </div>
    </div>
    <div class="px-3">Your wishlist empty!</div>
  </div>
</template>
<script>
export default {
  name: 'WishlistPage',
}
</script>