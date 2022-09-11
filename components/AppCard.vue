<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'AppCard',
}
</script>

<style scoped>
.card {
  padding: 10px;
  background-color: #ddd6bf;
  border: 1.5px solid black;
}
</style>
