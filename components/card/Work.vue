<template>
  <g-link :to="work.path">
    <div>
      <div>{{ work.name }}</div>
    </div>
  </g-link>
</template>

<script>
export default {
  name: "workCard",
  props: ["work", "currentPage"],
};
</script>
