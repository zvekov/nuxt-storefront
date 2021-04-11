<template>
  <ul class="backdrop-filter backdrop-blur-lg">
    <li>
      <nuxt-link to="/">
        <home-icon v-show="!isHome" />
        <home-solid-icon v-show="isHome" />
        Home
      </nuxt-link>
    </li>
    <li>
      <nuxt-link to="/catalog/">
        <catalog-icon v-show="!isCatalog" />
        <catalog-solid-icon v-show="isCatalog" />
        Catalog
      </nuxt-link>
    </li>
    <li>
      <nuxt-link to="/cart/">
        <cart-icon v-show="!isCart" />
        <cart-solid-icon v-show="isCart" />
        Cart
      </nuxt-link>
    </li>
    <li>
      <nuxt-link to="/wishlist/">
        <wishlist-icon v-show="!isWishlist" />
        <wishlist-solid-icon v-show="isWishlist" />
        Wishlist
      </nuxt-link>
    </li>
    <li>
      <nuxt-link to="/my/">
        <account-icon v-show="!isAccount" />
        <account-solid-icon v-show="isAccount" />
        Account
      </nuxt-link>
    </li>
  </ul>
</template>
<script>
import HomeIcon from '~/assets/icons/home.svg?inline'
import HomeSolidIcon from '~/assets/icons/home-solid.svg?inline'
import CatalogIcon from '~/assets/icons/catalog.svg?inline'
import CatalogSolidIcon from '~/assets/icons/catalog-solid.svg?inline'
import CartIcon from '~/assets/icons/cart.svg?inline'
import CartSolidIcon from '~/assets/icons/cart-solid.svg?inline'
import WishlistIcon from '~/assets/icons/wishlist.svg?inline'
import WishlistSolidIcon from '~/assets/icons/wishlist-solid.svg?inline'
import AccountIcon from '~/assets/icons/account.svg?inline'
import AccountSolidIcon from '~/assets/icons/account-solid.svg?inline'

export default {
  props: ['name'],
  components: {
    HomeIcon,
    HomeSolidIcon,
    CatalogIcon,
    CatalogSolidIcon,
    CartIcon,
    CartSolidIcon,
    WishlistIcon,
    WishlistSolidIcon,
    AccountIcon,
    AccountSolidIcon,
  },
  computed: {
    isHome() {
      return this.name == 'index'
    },
    isCatalog() {
      return (
        this.name == 'catalog' ||
        this.name == 'category-slug' ||
        this.name == 'product-slug'
      )
    },
    isCart() {
      return this.name == 'cart'
    },
    isWishlist() {
      return this.name == 'Wishlist'
    },
    isAccount() {
      return this.name == 'my'
    },
  },
}
</script>
<style lang="postcss" scoped>
ul {
  backdrop-filter: blur(4px);
  @apply z-50 bg-white bg-opacity-90 grid grid-cols-5 justify-items-center border-t fixed bottom-0 w-full dark:bg-black dark:text-gray-100 dark:bg-opacity-90 dark:border-white dark:border-opacity-20;
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
      &.nuxt-link-exact-active {
        & svg {
          @apply fill-current;
        }
      }
    }
  }
  @apply md:hidden;
}
</style>