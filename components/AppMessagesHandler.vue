<template>
  <div class="app-messages-handler">
    <app-message
      v-for="(message, index) in messages"
      :key="`message-${index}`"
      class="app-message"
      :message="message"
      @click="deleteMessage(key)"
    ></app-message>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import AppMessage from './AppMessage.vue'

import { getRandomString } from '@/utils/randomnessGenerator'

export default Vue.extend({
  name: 'AppMessagesHandler',
  components: {
    AppMessage,
  },
  data() {
    return {
      messagesDirectory: {},
    }
  },
  methods: {
    deleteMessageAfterDelay(id) {
      setTimeout(() => {
        this.deleteMessage(id)
      }, 5000)
    },

    deleteMessage(id) {
      delete this.messagesDirectory[id]
      this.messagesDirectory = { ...this.messagesDirectory }
    },

    addMessage(message) {
      const id = getRandomString()

      this.$set(this.messagesDirectory, id, message)

      this.deleteMessageAfterDelay(id)
    },
  },
})
</script>

<style scoped>
.app-messages-handler {
  z-index: 500;
  position: fixed;
  width: 100%;
}

.app-message {
  position: absolute;
  right: 1em;
  margin: 3em auto;
}
</style>
