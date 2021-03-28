export default {
  //   computed: {
  //     metaImage() {
  //       return `${
  //         (this.$page.page.edges[0].node.metaImage[0] &&
  //           this.$page.page.edges[0].node.metaImage[0].thumbnails.large.url) ||
  //         process.env.APP_URL + '/smo.png'
  //       }`
  //     },
  //   },
  head: {
    // htmlAttrs: {
    //   prefix:
    //     'og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# product: http://ogp.me/ns/product#',
    // },
    title: 'Home page',
    meta: [
      {
        hid: 'description',
        name: 'description',
        name: 'description',
        content: 'this',
      },
      {
        hid: 'og:title',
        name: 'og:title',
        property: 'og:title',
        content: 'titlte',
      },
      {
        hid: 'og:description',
        name: 'og:description',
        property: 'og:description',
        content: 'desc',
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
  },
}
