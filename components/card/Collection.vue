<template>
  <g-link
    v-if="collection.products.length > 0"
    :to="collection.path"
    class="relative rounded-md shadow-pressDefault hover:shadow-pressHover transform hover:translate-y-1 m-2 lg:m-4 transition-all duration-200"
  >
    <g-image
      :src="collection.cover[0].thumbnails.large.url"
      :alt="'Коллекция ' + collection.name"
      class="rounded-lg w-full lg:h-64 object-cover"
    />
    <div
      @mouseover="hover = true"
      @mouseleave="hover = false"
      class="overlay h-full w-full flex transition-all duration-300 absolute bottom-0 top-auto px-6 rounded-lg flex-wrap items-end"
    >
      <div class="pb-4 duration-200 transition" v-if="hover">
        <transition name="fade" appear>
          <div class="flex flex-col">
            <span class="text-white text-2xl font-bold w-full">
              {{ collection.name }}
            </span>
            <span class="text-white md:w-2/3">
              {{ collection.content }}
            </span>
          </div>
        </transition>
      </div>
    </div>
  </g-link>
</template>

<script>
export default {
  name: "CollectionCard",
  props: ["collection", "currentPage"],
  data() {
    return {
      hover: false,
    };
  },
};
</script>
<style lang="postcss">
.overlay {
  &:hover {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.7), transparent);
  }
}
</style>
