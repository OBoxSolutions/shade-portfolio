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
  padding: 3em;
  background-color: #ddd6bf;
  border: 1.5px solid black;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.4);
}
</style>
