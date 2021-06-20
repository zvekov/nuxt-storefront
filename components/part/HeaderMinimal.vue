<template>
  <header
    class="
      w-full
      border-b border-opacity-10
      md:border-none
      mb-1
      md:mb-6
      md:relative
      z-40
      transition-all
      duration-200
    "
  >
    <transition name="fade">
      <div
        class="
          mt-0
          inner
          py-4
          md:py-6
          flex
          items-center
          w-full
          justify-between
          h-16
        "
      >
        <div class="w-8/12 md:w-6/12 flex flex-col">
          <atoms-logo
            class="
              base-logo
              px-2
              md:px-0
              md:mt-0
              w-full
              mx-auto
              md:w-56
              md:mx-auto
            "
          />
        </div>
        <div class="w-2/12 md:w-3/12 px-3 flex justify-end z-50">
          <!-- <div
          :class="{ 'is-active': searchResults.length }"
          class="search-form flex" 
        >-->
          <!-- <div
            class="w-full absolute right-0 left-0 z-10 inner h-8 px-5"
            :class="{ hidden: !isSearchShow }"
            v-click-outside="hideSearch"
          > -->
          <!-- <button
              v-on:click="hideSearch"
              :class="{ hidden: !isSearchShow }"
              type="button"
              class="search-hidden absolute cursor-pointer left-0 bottom-0 ml-3 mt-1"
            >
              <span class="hidden">Close search</span>
              <span class="close-bar close-bar--1"></span>
              <span class="close-bar close-bar--2"></span>
            </button> -->
          <!-- <form @submit.prevent="searchResults">
              <input
                v-if="isSearchShow"
                id="search"
                v-model="searchTerm"
                aria-label="Поиск продукции"
                type="text"
                class="z-30 py-1 px-10 -mt-2 lowercase"
                placeholder="Поиск продукции"
                ref="searchToggle"
                autocomplete="off"
                v-focus
              />
            </form> -->
          <!-- </div> -->
          <!-- <button
          class="focus:outline-none z-50"
          v-if="!isSearchShow"
          @click="toggleSearch"
        >
          <span class="search-icon">
            <search-icon />
          </span>
        </button>
        <button
          class="focus:outline-none z-50"
          v-if="isSearchShow"
          @click="searchResults"
        >
          <span class="search-icon">
            <search-icon />
          </span>
        </button> -->
          <!-- <transition name="fade">
            <div v-if="searchResults.length > 0" class="search-result">
              <g-link
                v-for="{ node: result, path } in searchResults"
                :key="result.id"
                :to="path"
                class="leading-7 flex flex-wrap md:flex-nowrap flex-row px-3 items-center"
                v-on:click.native="hideSearch"
                :title="result.name"
              >
                <div class="order-1 w-auto pr-3 md:pr-0 md:w-32 xxl:w-48">
                  <span class="search-sku text-sm rounded-lg px-2 py-1"
                    >Код товара: {{ result.sku }}</span
                  >
                </div>

                <div
                  class="md:order-2 order-4 w-full md:w-1/2 xl:w-1/3 flex items-center"
                >
                  <span class="truncate">{{ result.name }}</span>
                  <div
                    v-if="result.oldPrice"
                    class="bg-red-600 text-white rounded-md px-1 text-sm ml-2 h-4 flex items-center font-semibold"
                  >
                    -{{
                      (((result.oldPrice - result.price) / result.oldPrice) *
                        100)
                        | numeral('0')
                    }}%
                  </div>
                </div>
                <span v-if="result.price" class="order-2 font-bold">
                  {{ result.price | numeral('0.00') }}
                  <ProductMeasure :product="result" />
                </span>
                <span
                  v-else
                  class="border order-3 px-2 rounded-lg font-light text-xs h-6 flex items-center"
                >
                  Стоимость уточняйте
                </span>
                <ProductOldPrice
                  :product="result"
                  class="order-3 pl-2 text-xs line-through opacity-50"
                />
              </g-link>
            </div>
          </transition> -->
          <!-- </div> -->
          <!-- <atoms-toggle-theme class="theme-burger z-50" /> -->
          <div class="hidden md:grid gap-6 grid-cols-4">
            <nuxt-link to="/my/">
              <account-icon class="w-8 h-8" />
            </nuxt-link>
            <molecules-search-header />
            <nuxt-link to="/wishlist/">
              <wishlist-icon class="w-8 h-8" />
            </nuxt-link>
            <molecules-cart-header />
          </div>
        </div>
      </div>
    </transition>
    <!-- <headroom
      :offset="100"
      :speed="200"
      :zIndex="40"
      class="hidden md:block"
      style="height: 40px"
    > -->
    <part-nav
      class="
        hidden
        shadow-pressDefault
        py-2
        bg-white
        dark:bg-black
        md:flex
        justify-center
        z-0
        dark:border-t
        border-white border-opacity-10
        dark:shadow-none
      "
    />
    <!-- </headroom> -->
  </header>
</template>

<script>
import WishlistIcon from '~/assets/icons/wishlist.svg?inline'
import CartIcon from '~/assets/icons/cart.svg?inline'
import AccountIcon from '~/assets/icons/account.svg?inline'
// import Burger from "~/components/molecules/header/burger/Burger";
// import { headroom } from "vue-headroom";

// import SearchIcon from '~/assets/icons/search.svg?inline'
// import ProductMeasure from "~/components/atoms/product/ProductMeasure";
// import ProductOldPrice from "~/components/atoms/product/ProductOldPrice";

// import ClickOutside from "vue-click-outside";
// import { store, mutations } from "~/store.js";
export default {
  name: 'HeaderPart',
  components: {
    AccountIcon,
    WishlistIcon,
    CartIcon,
    //     Burger,
    //     headroom,
    // SearchIcon,
    //     ProductMeasure,
    //     ClickOutside,
    //     ProductOldPrice,
  },
  data() {
    return {
      isAdsHeader: true,
    }
  },
  //   computed: {
  //     searchResults() {
  //       const searchTerm = this.searchTerm;
  //       if (searchTerm.length < 1) return [];
  //       return this.$search.search({
  //         query: searchTerm,
  //         limit: 15,
  //         suggest: true,
  //       });
  //     },
  //   },
  //   methods: {
  //     toggleSearch: function (e) {
  //       this.searchTerm = "";
  //       this.isSearchShow = true;
  //       // this.focusSearch();
  //       mutations.isSearchShow();
  //       let sitebody = document.body;
  //       store.isSearchShow;
  //       sitebody.classList.remove("is-search");
  //       setTimeout(function () {
  //         e.preventDefault();
  //       }, 100);
  //     },
  //     hideSearch: function () {
  //       this.searchTerm = "";
  //       this.isSearchShow = false;
  //       let sitebody = document.body;
  //       store.isSearchShow;
  //       sitebody.classList.remove("is-search");
  //     },
  //   },
  //   directives: {
  //     ClickOutside,
  //     focus: {
  //       inserted: function (el) {
  //         el.focus();
  //       },
  //       update: function (el) {
  //         el.focus();
  //       },
  //     },
  //   },
  //   watch: {
  //     searchTerm: function () {
  //       const searchTerm = this.searchTerm;
  //       if (searchTerm.length < 1)
  //         return document.body.classList.remove("is-search");
  //       if (searchTerm.length > 0)
  //         return (
  //           document.body.classList.add("is-search") &&
  //           this.$search.search({
  //             query: searchTerm,
  //             limit: 15,
  //             suggest: true,
  //           })
  //         );
  //     },
  //   },
  //   mounted() {
  //     // prevent click outside event with popupItem.
  //     this.popupItem = this.$el;
  //   },
  methods: {
    hideAdsHeader() {
      this.isAdsHeader = false
    },
    // showAsideCart() {
    //   this.$nuxt.$emit('showAsideCart')
    // },
  },
}
</script>
<style lang="postcss">
header .base-logo {
  @apply mx-auto;
}
#__replain_widget {
  z-index: 40 !important;
}
body {
  & .theme-burger {
    @apply hidden;
  }
  & .nav {
    background-color: var(--bg-four);
  }
  &.is-burger {
    @apply overflow-y-hidden;
    & .search-form {
      @apply hidden;
    }
    & .theme-burger {
      @apply block;
    }
  }
}
header {
  @apply bg-opacity-90 bg-white dark:bg-black dark:text-gray-100 dark:bg-opacity-90;
  border-color: var(--border-color-second);
}
body[data-theme='dark'] {
  & .nav {
    @apply shadow-none;
  }
}

.fade-enter-active {
  transition: opacity 0.3s;
}
.fade-leave-active {
  transition: opacity 0.15s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
button.search-hidden {
  @apply cursor-pointer w-10 h-10 block z-50 border-0 rounded-none bg-transparent;
  z-index: 60;
  pointer-events: all;
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  &:focus {
    outline: none;
  }
  & .close-bar--1 {
    transform: rotate(45deg);
  }
  & .close-bar--2 {
    transform: rotate(-45deg);
  }
}

.close-bar {
  @apply bg-opacity-70 absolute w-auto;
  background-color: var(--body-color);
  top: 50%;
  right: 6px;
  left: 6px;
  height: 3px;
  border-radius: 3px;
  margin-top: -1px;
  transition: transform 0.15s cubic-bezier(0.165, 0.84, 0.44, 1),
    opacity 0.15s cubic-bezier(0.165, 0.84, 0.44, 1),
    background-color 0.15s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.search-form {
  @apply border-transparent;
  & .serach-input {
    @apply w-full mx-auto;
    max-width: 68rem;
    z-index: -1;
  }
  & .search-icon svg {
    transform: matrix(-1, 0, 0, 1, 0, 0);
    height: 26px;
    width: 26px;
  }
  & input {
    @apply bg-transparent w-full;
    &:placeholder {
      @apply px-4;
    }
    &:focus {
      @apply outline-none border-gray-400;
    }
  }
}
.search-result {
  @apply w-full mx-auto left-0 bottom-0 right-0 bg-white fixed border-t flex flex-col overflow-y-scroll h-auto md:rounded-md md:overflow-y-auto md:h-auto md:shadow-pressDefault md:border-t-0 md:bottom-auto;
  max-width: 72rem;
  top: 4rem;
  border-color: var(--border-color-second);
  & a {
    @apply border-b border-opacity-10 py-1 cursor-pointer;
    border-color: var(--border-color-second);
    min-height: 4.5rem;
    @screen md {
      min-height: auto;
    }
    &:hover {
      @apply bg-red-100;
    }
    &:first-child {
      @apply rounded-t-md pt-2;
    }
    &:last-child {
      @apply border-none rounded-b-md pb-2;
    }
    & .search-sku {
      @apply bg-red-200;
    }
  }
}
body[data-theme='dark'] {
  & .search-form {
    & input {
      @apply outline-none border-gray-400 border-opacity-20;
    }
  }
  & .search-result {
    @apply shadow-none border-opacity-10;
    background-color: var(--bg-four);
    & a {
      color: var(--body-color);
      &:hover {
        background-color: var(--bg);
      }
      & .search-sku {
        background-color: var(--bg);
        color: var(--body-color);
      }
    }
  }
}
</style>
