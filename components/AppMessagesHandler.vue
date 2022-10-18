<template>
  <div class="app-messages-handler">
    <app-message
      v-for="(message, index) in messages"
      :key="`message-${index}`"
      class="app-message"
      :message="message"
    ></app-message>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import AppMessage from './AppMessage.vue'

export default Vue.extend({
  name: 'AppMessagesHandler',
  components: {
    AppMessage,
  },
  data() {
    return {
      messages: [],
    }
  },
  methods: {
    deleteMessageAfterDelay(index) {
      setTimeout(() => {
        this.messages.splice(index, 1)
      }, 5000)
    },
    addMessage(message) {
      this.messages.push(message)
      this.deleteMessageAfterDelay(this.messages.length - 1)
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
