<template>
  <div class="cube">
    <div class="side side-front">
      <div class="px-3">
        <slot></slot>
      </div>
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
$right-side-width: 100px;

.cube {
  position: relative;
  height: 560px;
  width: 100%;
  transform-style: preserve-3d;
  perspective: 800px;
}

.side {
  width: 100%;
  height: 100%;
  position: absolute;
}

.side-front {
  background-color: #ddd6bf;
}

.side-right {
  background-color: #5a55f8;
  width: $right-side-width;
  left: calc(100% - calc($right-side-width / 2));
  transform: rotateY(42deg) translateX(calc($right-side-width / 2));
}
</style>
