<template>
  <div>
    SKU: <span v-if="sku">{{ sku }}</span>
    <span else>N/A</span>
  </div>
</template>
<script>
export default {
  name: 'ProductSku',
  props: { sku: { type: String, default: null } },
}
</script>
