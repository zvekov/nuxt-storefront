<template>
  <span>SKU: {{ sku }}</span>
</template>
<script>
export default {
  name: 'ProductSku',
  props: { sku: { type: String, default: null } },
}
</script>
