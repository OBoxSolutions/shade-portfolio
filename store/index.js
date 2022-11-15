import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'
import { plugin } from '~/plugins/breakpoint'
import adminApi from '~/api/admin'

export const plugins = [plugin]

export const state = () => ({
  messages: [],

  breakpoints: {
    isSmAndDown: false,
  },
  mobileFiles: [],
})

export const mutations = {
  addMessage: (state, message) => state.messages.push(message),
  setAnswerToQuestion: (state, { question, answer }) => {
    const index = state.questions.indexOf(question)
    state.questions[index].answer = answer
  },
  setFileToQuestion: (state, { question, file }) => {
    const index = state.questions.indexOf(question)
    state.questions[index].file = file
  },
  setMobileFiles: (state, files) => {
    state.mobileFiles = files
  },

  setBreakpoints: (state, breakpoints) =>
    (state.breakpoints = { ...state.breakpoints, ...breakpoints }),
}
const uploadFileToFirebase = async (user, file) => {
  let downloadUrl = ''
  if (file === '') {
    downloadUrl = ''
  } else {
    const storage = getStorage()
    const fileRef = ref(storage, user + '/' + file.name)
    await uploadBytes(fileRef, file)

    await getDownloadURL(fileRef).then((url) => {
      downloadUrl = url
    })
  }
  return downloadUrl
}
export const actions = {
  storeContactMessage: async (_, message) => {
    await adminApi.post('/messages/', message)
  },

  storeHiringRequest: async ({ commit }, hiringRequest) => {
    try{
      const { data } = await adminApi.post('/hiring-requests', hiringRequest)
      if (data.success) {
        commit('addMessage', { type: 'sucess', text: 'Hiring request stored' })
      }
      else {
        commit('addMessage', {
          type: 'error',
          text: 'There was an error. Try again later',
        })
      }
    }
    catch{
      commit('addMessage', {
        type: 'error',
        text: 'There was an error. Try again later',
      })
    }
  },

  storeChatMeeting: async ({ commit }, chatMeeting) => {
    try {
      chatMeeting.logo_file = await uploadFileToFirebase(
        chatMeeting.name,
        chatMeeting.logo_file
      )
      chatMeeting.more_info_file = await uploadFileToFirebase(
        chatMeeting.name,
        chatMeeting.more_info_file
      )

      const { data } = await adminApi.post('/chat-meetings', chatMeeting)

      if (data.success) {
        commit('addMessage', { type: 'sucess', text: 'Chat meeting stored' })
      } else {
        commit('addMessage', {
          type: 'error',
          text: 'There was an error. Try again later',
        })
      }
    } catch {
      commit('addMessage', {
        type: 'error',
        text: 'There was an error. Try again later',
      })
    }
  },

  storeVoiceMeeting: async ({ commit }, voiceMeeting) => {
    try{
      const { data } = await adminApi.post('/voice-meetings', voiceMeeting)

      if (data.success) {
        commit('addMessage', { type: 'sucess', text: 'Voice meeting stored' })
      } else {
        commit('addMessage', {
          type: 'error',
          text: 'There was an error. Try again later',
        })
      }
    } catch {
      commit('addMessage', {
        type: 'error',
        text: 'There was an error. Try again later',
      })
    }
  },
}
