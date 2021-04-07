// export const state = () => ({
//   brands: [],
// })

// export const mutations = {
//   brands(state, data) {
//     state.brands = data
//   },
// }

// export const actions = {
//   update({ commit }) {
//     return this.$axios.get('/brands').then((response) => {
//       commit('brands', response.data)
//       return response.data
//     })
//   },
// }

// import { gql } from 'nuxt-graphql-request'

// // In store
// export default {
//   actions: {
//     async fetchAllBrands({ commit }) {
//       const query = gql`
//         query brands {
//           brands {
//             id
//             name
//             iconSvg
//             iconImg {
//               hash
//             }
//           }
//         }
//       `

//       const brands = await this.$graphql.default.request(query)
//       commit('SET_BRANDS', brands)
//     },
//   },
// }
