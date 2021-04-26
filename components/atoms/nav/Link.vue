<template>
  <span>
    <nuxt-link
      v-if="link.type === 'INTERNAL'"
      :to="linkPath"
      :title="link.title"
    >
      {{ link.title }}
    </nuxt-link>
    <a
      v-else
      :href="link.path"
      :title="link.title"
      target="_blank"
      rel="noopener"
    >
      {{ link.title }}
    </a>
  </span>
</template>

<script>
export default {
  name: 'BaseNavLink',
  props: {
    link: {
      type: Object,
      default: null,
    },
  },
  computed: {
    linkRelated() {
      return this.link?.related?.__contentType
    },
    linkPath() {
      const linkRelated = this.linkRelated
      if (linkRelated === 'Category') {
        return '/c/' + this.link.slug + '/'
      } else if (linkRelated === 'Collection') {
        return '/collection/' + this.link.slug + '/'
      } else if (linkRelated === 'Page') {
        return '/' + this.link.slug + '/'
      } else {
        return '/' + this.link.slug + '/'
      }
    },
  },
}
</script>
