<template>
  <g-link :to="category.path" :title="category.name">
    <span v-if="category.svgIcon" v-html="category.svgIcon"></span>
    {{ category.name }}
  </g-link>
</template>
<script>
export default {
  props: ["category", "currentPage"],
};
</script>