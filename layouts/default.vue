<template>
  <div>
    <app-messages-handler ref="messagesHandler"></app-messages-handler>
    <app-nav-bar></app-nav-bar>
    <nuxt />
    <app-footer></app-footer>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      width: '',
    }
  },
  computed: {
    ...mapState('app', ['messages']),
  },
  watch: {
    messages(messages) {
      const messagesLength = messages.length - 1
      const type = messages[messagesLength].type
      const text = messages[messagesLength].text
      this.showMessage({ type, text })
    },
  },
  methods: {
    showMessage(message) {
      this.$refs?.messagesHandler.addMessage(message)
    },
  },
}
</script>
