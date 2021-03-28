<template>
  <g-link
    :to="product.path"
    :title="
      product.pageTitle ||
      (product.category.singleElement &&
        product.category.singleElement + ' ' + product.name) ||
      product.name
    "
    v-if="product.slug != currentPage"
    class="product-card rounded-lg shadow-pressDefault hover:shadow-pressHover transform hover:translate-y-1 m-2 lg:m-3 transition-dark duration-300"
  >
    <g-image
      :src="product.cover[0].thumbnails.large.url"
      :alt="
        product.pageTitle ||
        (product.category.singleElement &&
          product.category.singleElement + ' ' + product.name) ||
        product.name
      "
      class="rounded-t-lg w-full lg:h-64 object-cover"
    />
    <div class="p-4">
      <div class="font-bold">{{ product.name }}</div>
      <div class="opacity-50 text-xs">
        {{ product.category.singleElement || product.category.name }}
      </div>
      <div class="flex flex-col items-start md:flex-row md:items-center pt-2">
        <ProductPrice :product="product" />
        <ProductOldPrice
          :product="product"
          class="line-through opacity-50 text-xs md:pl-2"
        />
      </div>
      <ProductEconomPercent
        :product="product"
        class="absolute top-0 right-0 my-2 px-3 py-1 text-xs md:text-base text-white rounded-l-md bg-red-600"
      />
    </div>
  </g-link>
</template>

<script>
// import ProductPrice from "~/components/atoms/product/ProductPrice";
// import ProductOldPrice from "~/components/atoms/product/ProductOldPrice";
// import ProductEconomPercent from "~/components/atoms/product/ProductEconomPercent";
export default {
  name: "ProductCard",
  props: ["product", "currentPage"],
  components: {
    // ProductPrice,
    // ProductOldPrice,
    // ProductEconomPercent,
  },
};
</script>

<style lang="postcss">
.product-card {
  background-color: var(--bg-second);
  & .price-text {
    @apply text-sm;
  }
  @screen xxs {
    & .price-text {
      @apply text-xs;
    }
  }
}
body[data-theme="dark"] {
  & .shadow-pressDefault {
    @apply shadow-none;
    &:hover {
      @apply shadow-none;
    }
  }
}
</style>
