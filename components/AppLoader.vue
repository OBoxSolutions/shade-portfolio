<template>
  <div
    class="spinner"
    v-bind="$attrs"
    :style="{ 'border-width': width }"
    v-on="$listeners"
  ></div>
</template>

<script>
export default {
  name: 'AppLoader',
  props: {
    width: {
      type: String,
      default: '6px',
    },
  },
}
</script>

<style scoped>
.spinner {
  height: 100px;
  width: 100px;
  margin: 0 auto;
  top: 50%;
  left: 50%;
  animation: rotation 1s infinite linear;
  border: 6px solid;
  border-top: 6px solid transparent !important;
  border-radius: 100%;
}
@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
</style>
