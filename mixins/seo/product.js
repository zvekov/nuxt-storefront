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
  data() {
    return {
      jsonld: [
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              item: {
                '@id': process.env.APP_URL,
                name: 'Главная',
              },
            },
            {
              '@type': 'ListItem',
              position: 2,
              item: {
                '@id': process.env.APP_URL + '/catalog/',
                name: 'Каталог',
              },
            },
            {
              '@type': 'ListItem',
              position: 3,
              item: {
                '@id': process.env.APP_URL + this.catPath,
                name: this.catName,
              },
            },
            {
              '@type': 'ListItem',
              position: 4,
              item: {
                '@id': this.canonical,
                name: this.pageTitle,
              },
            },
          ],
        },
        {
          '@context': 'http://schema.org',
          '@type': 'Product',
          description: this.pageContent,
          name: this.pageTitle,
          url: this.canonical,
          category: this.catName,
          image: this.cover,
          brand: this.brand,
          model: this.sku,
          mpn: this.sku,
          sku: this.sku,
          aggregateRating: [
            {
              '@type': 'AggregateRating',
              ratingValue: '5',
              ratingCount: this.ratingCount,
              bestRating: '5',
              worstRating: '1',
            },
          ],
          offers: [
            {
              '@type': 'Offer',
              availability: this.availability,
              price: this.price || '0',
              priceValidUntil: new Date(),
              url: this.canonical,
              priceCurrency: 'BYN',
              itemCondition: 'http://schema.org/NewCondition',
            },
          ],
        },
        {
          '@context': 'http://schema.org',
          '@type': 'ImageObject',
          author: this.siteName,
          thumbnailUrl: this.cover,
          contentUrl: this.cover,
          datePublished: new Date(),
          description: this.metaDescription,
          name: this.pageTitle,
        },
      ],
    }
  },
  metaInfo() {
    return {
      title: this.metaTitle,
      titleTemplate: '',
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
          content: this.cover,
        },
        {
          property: 'og:type',
          content: 'product',
        },
        {
          property: 'product:price:amount',
          content: this.price,
        },
        {
          property: 'product:price:currency',
          content: 'BYN',
        },
        {
          property: 'og:url',
          content: this.canonical,
        },
      ],
      link: [{ rel: 'canonical', href: this.canonical }],
      script: [
        { innerHTML: JSON.stringify(this.jsonld), type: 'application/ld+json' },
      ],
    }
  },
}
