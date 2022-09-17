import Breakpoints from 'breakpoints-js'

Breakpoints()

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
