export default {
  head() {
    return {
      htmlAttrs: {
        prefix:
          'og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# product: http://ogp.me/ns/product#',
      },
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
          content: 'product',
        },
      ],
    }
  },
}
