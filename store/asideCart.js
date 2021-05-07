export const state = () => ({
  asideCart: false,
})
export const mutations = {
  toggleAsideCart(state) {
    state.asideCart = !state.asideCart
  },
}

export const actions = {}

export const getters = {
  getAsideCartState(state) {
    return state.asideCart
  },
}
