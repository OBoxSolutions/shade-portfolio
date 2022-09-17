import { plugin } from '~/plugins/breakpoint'

export const plugins = [plugin]

export const state = () => ({
  userName: '',
  breakpoints: {
    isSmAndDown: false,
  },
  portfolio: [
    { name: 'Unborder', image: '/portfolio/unborder.png', link: '#' },
    {
      name: 'Cleaning Services',
      image: '/portfolio/cleaning-services.png',
      link: '#',
    },
    { name: 'Caboo', image: '/portfolio/cabbo.png', link: '#' },
    { name: 'Flowers', image: '/portfolio/flowers.png', link: '#' },
  ],
})

export const mutations = {
  setUserName: (state, name) => {
    state.userName = name
  },

  setBreakpoints: (state, breakpoints) =>
    (state.breakpoints = { ...state.breakpoints, ...breakpoints }),
}
export const getters = {
  getUserName: (state) => {
    return state.userName
  },
  getPortfolio: (state) => {
    return state.portfolio
  },
}
