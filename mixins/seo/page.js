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
  head() {
    return {
      //   title: this.metaTitle,
      meta: [
        {
          name: 'description',
          content: this.metaDescription,
        },
        {
          property: 'og:title',
          content: this.metaTitle,
        },
        {
          property: 'og:description',
          content: this.metaDescription,
        },
        {
          property: 'og:image',
          content: this.metaImage,
        },
        {
          property: 'og:type',
          content: 'website',
        },
      ],
      //   script: [
      //     {
      //       innerHTML: JSON.stringify(this.jsonld),
      //       type: 'application/ld+json',
      //     },
      //   ],
    }
  },
}
