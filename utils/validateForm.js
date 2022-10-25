export function validateForm(form) {
  if(form.name === '' || form.email === '' || form.country === '' || form.birthdate === '' || form.app === '')
    return false
  else {
    return true
  }
}
