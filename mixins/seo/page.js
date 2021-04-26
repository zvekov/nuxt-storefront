export default {
  computed: {
    h1() {
      return this.page?.seo?.h1 || this.page.name
    },
    metaTitle() {
      return this.page?.seo?.title || this.page.name
    },
    metaDescription() {
      return this.page?.seo?.description || this.page.name
    },
  },
  head() {
    return {
      title: this.metaTitle,
      meta: [
        {
          hid: 'description',
          name: 'description',
          property: 'description',
          content: this.metaDescription,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: this.metaTitle,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content: this.metaDescription,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          property: 'og:image',
          content: '333',
        },
        {
          hid: 'og:type',
          name: 'og:type',
          property: 'og:type',
          content: 'website',
        },
      ],
    }
  },
}
