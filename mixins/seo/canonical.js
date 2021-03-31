export default {
  computed: {
    canonical() {
      let canonical

      if (this.$route.path === '/') {
        canonical = this.$config.appUrl
      } else {
        canonical = this.$config.appUrl + this.$route.path
      }
      return canonical
    },
  },
  head() {
    return {
      meta: [
        {
          property: 'og:url',
          content: this.canonical,
        },
      ],
      link: [{ rel: 'canonical', href: this.canonical }],
    }
  },
}
