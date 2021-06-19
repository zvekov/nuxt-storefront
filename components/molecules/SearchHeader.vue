<template>
  <div>
    <button @click="toggleTopSearch">
      <search-icon class="w-8 h-8" />
    </button>
    <transition name="top-bottom">
      <molecules-top-search v-if="topSearch" @hideTopSearch="toggleTopSearch" />
    </transition>
    <div
      v-if="topSearch"
      class="absolute top-0 left-0 w-full h-screen bg-black bg-opacity-30 z-0"
      @click="toggleTopSearch"
    ></div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import SearchIcon from '~/assets/icons/search.svg?inline'

export default {
  components: { SearchIcon },
  computed: {
    ...mapGetters({ topSearch: 'topSearch/getTopSearchState' }),
  },
  methods: {
    ...mapMutations({ toggleTopSearch: 'topSearch/toggleTopSearch' }),
  },
}
</script>
