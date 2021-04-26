<template>
  <span>
    $<span v-if="product.measure != null && product.measure == 'штука'"
      >шт.</span
    >
    <span v-if="product.measure != null && product.measure == 'метр квадратный'"
      >м²</span
    >
    <span v-if="product.measure != null && product.measure == 'метр кубический'"
      >м³</span
    >
    <span v-if="product.measure != null && product.measure == 'упаковка'"
      >уп.</span
    >
    <span v-if="product.measure != null && product.measure == 'метр погонный'"
      >пог. м</span
    >
  </span>
</template>
<script>
export default {
  name: 'ProductMeasure',
  props: { product: { type: Object, default: null } },
}
</script>
