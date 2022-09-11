import Breakpoints from 'breakpoints-js'

export default (context, inject) => {
  Breakpoints()
  idSmAndDown(Breakpoints)
  inject('breakpoints', Breakpoints)
}

function idSmAndDown(breakpoints) {
  breakpoints.on('xs sm', {
    enter: () => {
      breakpoints.idSmAndDown = true
    },
    leave: () => {
      breakpoints.idSmAndDown = false
    },
  })
}
