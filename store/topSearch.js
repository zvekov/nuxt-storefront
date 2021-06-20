export const state = () => ({
  topSearch: false,
})
export const mutations = {
  toggleTopSearch(state) {
    state.topSearch = !state.topSearch
  },
}

export const actions = {}

export const getters = {
  getTopSearchState(state) {
    return state.topSearch
  },
}
