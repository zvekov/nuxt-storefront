<template>
  <div>
    <div class="pb-1 text-lg font-bold md:pb-2">{{ nav.title }}</div>
    <ul>
      <li v-for="item in nav.items" :key="item.id" class="md:mb-1">
        <nuxt-link :to="item.link" :title="item.name">
          {{ item.name }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ['title', 'nav'],
}
</script>