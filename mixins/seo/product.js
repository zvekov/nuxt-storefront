export default {
  // data() {
  //   return {
  //     jsonld: [
  //       {
  //         '@context': 'https://schema.org',
  //         '@type': 'BreadcrumbList',
  //         itemListElement: [
  //           {
  //             '@type': 'ListItem',
  //             position: 1,
  //             item: {
  //               '@id': process.env.APP_URL,
  //               name: 'Главная',
  //             },
  //           },
  //           {
  //             '@type': 'ListItem',
  //             position: 2,
  //             item: {
  //               '@id': process.env.APP_URL + '/catalog/',
  //               name: 'Каталог',
  //             },
  //           },
  //           {
  //             '@type': 'ListItem',
  //             position: 3,
  //             item: {
  //               '@id': process.env.APP_URL + this.catPath,
  //               name: this.catName,
  //             },
  //           },
  //           {
  //             '@type': 'ListItem',
  //             position: 4,
  //             item: {
  //               '@id': this.canonical,
  //               name: this.pageTitle,
  //             },
  //           },
  //         ],
  //       },
  //       {
  //         '@context': 'http://schema.org',
  //         '@type': 'Product',
  //         description: this.pageContent,
  //         name: this.pageTitle,
  //         url: this.canonical,
  //         category: this.catName,
  //         image: this.cover,
  //         brand: this.brand,
  //         model: this.sku,
  //         mpn: this.sku,
  //         sku: this.sku,
  //         aggregateRating: [
  //           {
  //             '@type': 'AggregateRating',
  //             ratingValue: '5',
  //             ratingCount: this.ratingCount,
  //             bestRating: '5',
  //             worstRating: '1',
  //           },
  //         ],
  //         offers: [
  //           {
  //             '@type': 'Offer',
  //             availability: this.availability,
  //             price: this.price || '0',
  //             priceValidUntil: new Date(),
  //             url: this.canonical,
  //             priceCurrency: 'BYN',
  //             itemCondition: 'http://schema.org/NewCondition',
  //           },
  //         ],
  //       },
  //       {
  //         '@context': 'http://schema.org',
  //         '@type': 'ImageObject',
  //         author: this.siteName,
  //         thumbnailUrl: this.cover,
  //         contentUrl: this.cover,
  //         datePublished: new Date(),
  //         description: this.metaDescription,
  //         name: this.pageTitle,
  //       },
  //     ],
  //   }
  // },
  head: {
    htmlAttrs: {
      prefix:
        'og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# product: http://ogp.me/ns/product#',
    },
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
