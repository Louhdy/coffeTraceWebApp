export const state = () => ({
  user: null,
})

export const mutations = {
  setUser(_state, user){
    _state.user = user;
  },
}
