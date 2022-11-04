import Vue from 'vue'

import {
  ValidationProvider,
  ValidationObserver,
  extend,
  setInteractionMode,
} from 'vee-validate'
import { required, email, confirmed, numeric } from 'vee-validate/dist/rules'

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

setInteractionMode('eager')

extend('required', {
  ...required,
  message: 'This field is required',
})

extend('email', {
  ...email,
  message: 'Please enter e valid email',
})

extend('confirmed', {
  ...confirmed,
  message: 'Password confirmation does not match',
})

extend('numeric', {
  ...numeric,
  message: 'This value needs to be a number',
})
