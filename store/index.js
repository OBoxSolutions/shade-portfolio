export const state = () => ({
  userName: '',
})

export const mutations = {
  setUserName: (state, name) => {
    state.userName = name
  }
}
export const getters = {
  getUserName: (state) => {
    return state.userName
  }
}
