export const state = () => ({
  userName: '',
  portfolio: [
    { name: 'Unborder', image: '/portfolio/unborder.png', link: '#' },
    { name: 'Cleaning Services', image: '/portfolio/cleaning-services.png', link: '#' },
    { name: 'Caboo', image: '/portfolio/cabbo.png', link: '#' },
    { name: 'Flowers', image: '/portfolio/flowers.png', link: '#' },
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
