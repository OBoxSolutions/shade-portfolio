<template>
  <div class="cube">
    <div class="side side-front">
      <slot></slot>
    </div>
    <div class="side side-right"></div>
  </div>
</template>

<script>
export default {
  name: 'EmptyCube',
  props: {
    title: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped lang="scss">
.cube {
  position: relative;
  height: 600px;
  width: 100%;
  transform-style: preserve-3d;
  perspective: 200px;
}

.side {
  width: 100%;
  height: 100%;
  position: absolute;
}
</style>
