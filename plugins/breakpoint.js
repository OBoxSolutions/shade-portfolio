import Breakpoints from 'breakpoints-js'

export default (context, inject) => {
  Breakpoints()
  inject('breakpoints', Breakpoints)
}
