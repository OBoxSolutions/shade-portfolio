import { plugin } from '~/plugins/breakpoint'
import adminApi from '~/api/admin'

export const plugins = [plugin]

export const state = () => ({
  // Hiring data
  hiringName: '',

  // Cantact me data
  userName: '',
  message: '',

  // Get started data

  breakpoints: {
    isSmAndDown: false,
  },
  portfolio: [
    {
      name: 'Unborder',
      image: '/portfolio/unborder.png',
      link: '#'
    },
    {
      name: 'Cleaning Services',
      image: '/portfolio/cleaning-services.png',
      link: '#',
    },
    {
      name: 'Caboo',
      image: '/portfolio/cabbo.png',
      link: '#'
    },
    {
      name: 'Flowers',
      image: '/portfolio/flowers.png',
      link: '#'
    },
  ],
  questions: [
    {
      text: 'What is your proudest accomplishment?',
      answer: '',
      file: null },
    {
      text: 'What moral value do you value the most?',
      answer: '',
      file: null },
    {
      text: 'Are you ever justified to kill?',
      answer: '',
      file: null },
    {
      text: 'Is morality subjective or objective?',
      answer: '',
      file: null },
    {
      text: 'If you could live forever, would do you want to?',
      answer: '',
      file: null },
    {
      text: 'If you could change the world, what would you change?',
      answer: '',
      file: null },
    {
      text: 'Some questions?',
      answer: '',
      file: null },
    {
      text: 'Are you satisfied with yourself?',
      answer: '',
      file: null },
    {
      text: 'Maybe have anything to add? Any questions perhaps?',
      answer: '',
      file: null },
  ],
  mobileFiles: []
})

export const mutations = {
  setHiringName: (state, name) => {
    state.hiringName = name
  },
  setUserName: (state, name) => {
    state.userName = name
  },
  setMessage: (state, message) => {
    state.message = message
  },
  setAnswerToQuestion: ( state, { question, answer } ) => {
    const index = state.questions.indexOf(question)
    state.questions[index].answer = answer
  },
  setFileToQuestion: ( state, { question, file } ) => {
    const index = state.questions.indexOf(question)
    state.questions[index].file = file
  },
  setMobileFiles: ( state, files ) => {
    state.mobileFiles = files
  },

  setBreakpoints: (state, breakpoints) =>
    (state.breakpoints = { ...state.breakpoints, ...breakpoints }),
}
export const getters = {
  getHiringName: (state) => {
    return state.hiringName
  },
  getUserName: (state) => {
    return state.userName
  },
  getMessage: (state) => {
    return state.message
  },
  getPortfolio: (state) => {
    return state.portfolio
  }
}
export const actions = {
  storeContactMessage: async (_, message) => {
    await adminApi.post('/messages/', message);
  },

  // storeHiringRequest: async (_, hiringRequest) => {
  //   await adminApi.post('/messages/', hiringRequest);
  // },

  // storeChatMeeting: async (_, chatMeeting) => {
  //   await adminApi.post('/messages/', chatMeeting);
  // },

  // storeVoiceMeeting: async (_, voiceMeeting) => {
  //   await adminApi.post('/messages/', voiceMeeting);
  // },

}
