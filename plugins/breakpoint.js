import Breakpoints from 'breakpoints-js'
import { set } from 'vue'

export default (context, inject) => {
  Breakpoints()
  inject('breakpoints', Breakpoints)
  isSmAndDown(Breakpoints)
  isMdAndDown(Breakpoints)
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

function isMdAndDown(breakpoints) {
  breakpoints.isMdAndDown = undefined
  breakpoints.on('xs sm md', {
    enter: () => {
      set(breakpoints, 'isMdAndDown', true)
    },
    leave: () => {
      set(breakpoints, 'isMdAndDown', false)
    },
  })
}
