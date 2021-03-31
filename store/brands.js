export const state = () => ({
  brands: [],
})

export const mutations = {
  brands(state, data) {
    state.brands = data
  },
}

export const actions = {
  update({ commit }) {
    return this.$axios.get('/brands').then((response) => {
      commit('brands', response.data)
      return response.data
    })
  },
}
