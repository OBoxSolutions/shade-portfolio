import Breakpoints from 'breakpoints-js'
import { set } from 'vue'

export default (context, inject) => {
  Breakpoints()
  inject('breakpoints', Breakpoints)
  isSmAndDown(Breakpoints)
}

function isSmAndDown(breakpoints) {
  breakpoints.isSmAndDown = undefined
  breakpoints.on('xs sm', {
    enter: () => {
      set(breakpoints, 'isSmAndDown', true)
    },
    leave: () => {
      set(breakpoints, 'isSmAndDown', false)
    },
  })
}
