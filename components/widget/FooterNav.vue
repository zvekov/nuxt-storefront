<template>
  <div>
    <div class="pb-1 text-lg font-bold md:pb-2">{{ title }}</div>
    <ul>
      <template v-for="link in nav">
        <li v-if="link.menuAttached" :key="link.id" class="md:mb-1">
          <atoms-nav-link :link="link" />
        </li>
      </template>
    </ul>
  </div>
</template>
<script>
export default {
  props: ['title', 'nav'],
}
</script>
