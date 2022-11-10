<template>
  <app-card class="app-card" :class="cardColor" v-on="$listeners">
    <div class="app-card-body">
      <span class="icon mr-1" :class="icon"></span>
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
          return 'mdi mdi-check-circle'
        case 'error':
          return 'mdi mdi-alert-circle'
        case 'info':
          return 'mdi mdi-information'
        case 'warning':
          return 'mdi mdi-alert'
        default:
          return 'mdi mdi-check-circle'
      }
    },
    cardColor() {
      switch (this.message.type) {
        case 'success':
          return 'app-card--green'
        case 'error':
          return 'app-card--red'
        case 'info':
          return 'app-card--blue'
        case 'warning':
          return 'app-card--yellow'
        default:
          return 'app-card--green'
      }
    },
  },
}
</script>

<style scoped>
.app-card {
  max-width: 600px;
  z-index: 1000;
}

.app-card-body {
  display: flex;
  align-items: center;
}

.app-card--blue {
  background-color: #15aaaa;
}
.app-card--green {
  background-color: #13943a;
}
.app-card--red {
  background-color: #ce2929;
}
.app-card--yellow {
  background-color: #d6932f;
}

.icon {
  font-size: 3rem;
}
</style>
