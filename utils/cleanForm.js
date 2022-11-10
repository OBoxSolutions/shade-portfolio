export function cleanForm(form) {
  // Clean form
  Object.keys(form).forEach((key)=>{
    switch(key) {
      case 'applying_for':
        form[key] = 'Full-Stack Web Developer'
        break;
      case 'app':
        form[key] = 'Discord'
        break;
      case 'meeting_link':
        form[key] = 'some zoom or google meets link'
        break;
      case 'social':
        form[key] = 'Email'
        break;
      default:
        form[key] = ''
    }
  })

  // Clean textareas
  const codeEditors = document.getElementsByClassName('codeEditor')
    for (let i = 0; i < codeEditors.length; i++) {
      codeEditors.item(i).value = ''
    }
  const lineCounters = document.getElementsByClassName('lineCounter')
    for (let i = 0; i < lineCounters.length; i++) {
      lineCounters.item(i).value = '1'
    }
  }
