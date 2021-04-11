<template>
  <ul class="backdrop-filter backdrop-blur-lg">
    <li>
      <nuxt-link to="/">
        <home-icon />
        Home
      </nuxt-link>
    </li>
    <li>
      <nuxt-link to="/catalog/">
        <catalog-icon />
        Catalog
      </nuxt-link>
    </li>
    <li>
      <nuxt-link to="/cart/">
        <cart-icon />
        Cart
      </nuxt-link>
    </li>
    <li>
      <nuxt-link to="/wishlist/">
        <wishlist-icon />
        Wishlist
      </nuxt-link>
    </li>
    <li>
      <nuxt-link to="/my/">
        <account-icon />
        Account
      </nuxt-link>
    </li>
  </ul>
</template>
<script>
import HomeIcon from '~/assets/icons/home.svg?inline'
import CatalogIcon from '~/assets/icons/catalog.svg?inline'
import CartIcon from '~/assets/icons/cart.svg?inline'
import WishlistIcon from '~/assets/icons/wishlist.svg?inline'
import AccountIcon from '~/assets/icons/account.svg?inline'

export default {
  components: {
    HomeIcon,
    CatalogIcon,
    CartIcon,
    WishlistIcon,
    AccountIcon,
  },
}
</script>
<style lang="postcss" scoped>
ul {
  @apply bg-white bg-opacity-90 grid grid-cols-5 justify-items-center border-t fixed bottom-0 w-full dark:bg-black dark:text-gray-100 dark:bg-opacity-90 dark:border-white dark:border-opacity-20;
  @apply landscape:grid-cols-1 landscape:border-t-0 landscape:border-l landscape:right-0 landscape:w-16 landscape:h-screen;
  & li {
    @apply w-full lowercase text-xs;
    & > a {
      @apply flex flex-col items-center w-full pt-2 pb-1;
      @apply landscape:p-0 landscape:h-full landscape:justify-center;
      & svg {
        @apply w-8 h-8;
        @apply landscape:mt-2;
      }
      &.active {
        @apply bg-gray-300 bg-opacity-40;
      }
    }
  }
  @apply md:hidden;
}
</style>