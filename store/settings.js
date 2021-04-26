// import axios from '@nuxtjs/axios'
// export const state = () => ({
//   settings: {},
// })

// export const mutations = {
//   SET_SETTINGS_TO_STATE: (state, settings) => {
//     state.settings = settings
//   },
// }

// export const actions = {
//   GET_SETTINGS({ commit }) {
//     return axios('https://nuxt-storeback-strapi.herokuapp.com/settings', {
//       method: 'GET',
//     })
//       .then((settings) => {
//         commit('SET_SETTINGS_TO_STATE', settings.data)
//         return settings
//       })
//       .catch((error) => {
//         console.log(error)
//         return error
//       })
//   },
// }

// export const getters = {
//   SETTINGS(state) {
//     return state.SETTINGS
//   },
// }

import { gql } from 'nuxt-graphql-request'
export default {
  actions: {
    async fetchSettings({ commit }) {
      const query = gql`
        query Settings {
          setting {
            contacts {
              phone
              email
            }
          }
        }
      `
      const settings = await this.$graphql.default.request(query)
      commit('SET_SETTINGS', settings)
    },
  },
}
