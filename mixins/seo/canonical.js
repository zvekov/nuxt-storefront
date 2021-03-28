export default {
  computed: {
    canonical() {
      let canonical

      if (this.$route.path === '/') {
        canonical = process.env.APP_URL
      } else {
        canonical = process.env.APP_URL + this.$route.path
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
