<template>
  <span>
    <a
      class="lg:hidden"
      :href="'viber://chat?number=' + viberNumber"
      target="_blank"
      rel="noreferrer noopener"
      title="Viber"
    >
      <viber-icon />
    </a>
    <a
      class="hidden lg:block"
      :href="'viber://add?number=' + viberNumber"
      target="_blank"
      rel="noreferrer noopener"
      title="Viber"
    >
      <viber-icon />
    </a>
  </span>
</template>
<script>
import ViberIcon from "~/assets/svg/ViberIcon.svg?inline";
export default {
  props: ["viberNumber"],
  components: {
    ViberIcon,
  },
};
</script>