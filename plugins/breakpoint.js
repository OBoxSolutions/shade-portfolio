import Breakpoints from 'breakpoints-js'

export default (context, inject) => {
  Breakpoints()
  isSmAndDown(Breakpoints)
  inject('breakpoints', Breakpoints)
}

function isSmAndDown(breakpoints) {
  breakpoints.on('xs sm', {
    enter: () => {
      breakpoints.isSmAndDown = true
    },
    leave: () => {
      breakpoints.isSmAndDown = false
    },
  })
}
