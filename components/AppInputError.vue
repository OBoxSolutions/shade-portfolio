<template>
  <span v-show="error" class="text-xs text-red-500">
    {{ error }}
  </span>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'AppInputError',
  props: {
    error: {
      type: String,
      default: '',
    },
  },
})
</script>

<style></style>
