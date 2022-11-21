<template>
  <div class="error">
    <div class="content">
      <div v-if="error.statusCode === 404" class="not-found">
        <h1 class="not-found__header">404</h1>
        <h2>Page not found</h2>
      </div>
      <base-button class="button--red" @click="$router.push({ name: 'index' })">
        Return home
      </base-button>
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue'

export default {
  components: {
    BaseButton,
  },
  layout: 'blog',
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style scoped>
.error {
  height: 100vh !important;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d6932f;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.not-found__header {
  font-size: 8rem;
}
</style>
