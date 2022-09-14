export const state = () => ({
  userName: '',
  portfolio: [
    { image: '/portfolio/unborder.png', link: '#' },
    { image: '/portfolio/cleaning-services.png', link: '#' },
    { image: '/portfolio/cabbo.png', link: '#' },
    { image: '/portfolio/flowers.png', link: '#' },
  ],
})

export const mutations = {
  setUserName: (state, name) => {
    state.userName = name
  }
}
export const getters = {
  getUserName: (state) => {
    return state.userName
  },
  getPortfolio: (state) => {
    return state.portfolio
  }
}
