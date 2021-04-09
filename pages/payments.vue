<template>
  <div class="relative w-full inner">
    <div class="w-auto px-3 mb-4 flex items-center justify-between h-6">
      <atoms-link-back :linkTo="'/'" :linkName="'Home'" />
    </div>
    <div class="px-3 grid md:grid-cols-2">
      <div class="pb-12 md:pb-24">
        <h1 class="pb-3 text-2xl font-bold leading-snug">
          {{ 'Payment Information' }}
        </h1>
      </div>
    </div>
  </div>
</template>
<script>
// import PageMeta from "~/mixins/meta/PageMeta";

// export default {
// mixins: [PageMeta],
// computed: {
//   pageName() {
//     return `${this.$page.page.edges[0].node.name || "О нас"}`;
//   },
//   pageTitle() {
//     return `${this.$page.page.edges[0].node.pageTitle || "О нас"}`;
//   },
//   metaTitle() {
//     return `${this.$page.page.edges[0].node.metaTitle || "О нас"}`;
//   },
//   metaDescription() {
//     return `${
//       this.$page.page.edges[0].node.metaDescription ||
//       "Описание страницы о нас."
//     }`;
//   },
// },
//   data() {
//     return {
//       jsonld: [
//         {
//           '@context': 'https://schema.org',
//           '@type': 'BreadcrumbList',
//           itemListElement: [
//             {
//               '@type': 'ListItem',
//               position: 1,
//               item: {
//                 '@id': process.env.APP_URL,
//                 name: 'Главная',
//               },
//             },
//             {
//               '@type': 'ListItem',
//               position: 2,
//               item: {
//                 '@id': this.canonical,
//                 name: this.pageName,
//               },
//             },
//           ],
//         },
//       ],
//     }
//   },
// }
</script>