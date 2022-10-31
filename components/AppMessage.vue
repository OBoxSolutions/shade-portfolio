<template>
  <app-card class="app-card" v-on="$listeners">
    <div class="app-card-body">
      <span class="text-3xl mr-3" :class="icon"></span>
      <span>
        {{ message.text }}
      </span>
    </div>
  </app-card>
</template>

<script lang="ts">
import AppCard from './AppCard.vue'

export default {
  name: 'AppMessage',
  components: {
    AppCard,
  },
  props: {
    message: {
      type: Object,
      required: true,
    },
  },
  computed: {
    icon() {
      switch (this.message.type) {
        case 'success':
          return 'mdi mdi-check-circle text-green-600'
        case 'error':
          return 'mdi mdi-alert-circle text-red-500'
        case 'info':
          return 'mdi mdi-information text-blue-600'
        case 'warning':
          return 'mdi mdi-alert text-yellow-500'
        default:
          return 'mdi mdi-check-circle text-green-600'
      }
    },
  },
}
</script>

<style scoped>
.app-card {
  max-width: 600px;
}

.app-card-body {
  display: flex;
  align-items: center;
  background-color: white;
}
</style>
