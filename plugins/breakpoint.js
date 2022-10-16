import Breakpoints from 'breakpoints-js'

Breakpoints()

Breakpoints.defaults = {
  xs: {
    min: 0,
    max: 575,
  },
  sm: {
    min: 576,
    max: 767,
  },
  md: {
    min: 768,
    max: 991,
  },
  lg: {
    min: 992,
    max: 1199,
  },
  xl: {
    min: 1200,
    max: 1399,
  },
  xxl: {
    min: 1400,
    max: Infinity,
  },
}

export function plugin(store) {
  Breakpoints.on('xs sm', {
    enter: () => {
      store.commit('setBreakpoints', { isSmAndDown: true })
    },
    leave: () => {
      store.commit('setBreakpoints', { isSmAndDown: false })
    },
  })
}
