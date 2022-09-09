<template>
  <div class="cube mb-9">
    <div v-if="top" class="cube-top-side"></div>
    <div class="cube-front-side">
      <div class="p-5">
        <h2>
          {{ title }}
        </h2>
        <slot> </slot>
      </div>
    </div>
    <div v-if="bottom" class="cube-down-side"></div>
  </div>
</template>

<script>
export default {
  name: 'SimpleCube',
  props: {
    title: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
    top: {
      type: Boolean,
      default: false,
    },
    bottom: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped lang="scss">
$side-bottom-height: 40px;
$perspective: 200px;

.cube {
  position: relative;
  height: 600px;
  width: 100%;
  transform-style: preserve-3d;
  perspective: $perspective;
  perspective-origin: bottom;

  .cube-front-side,
  .cube-top-side,
  .cube-down-side {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 10;
  }

  .cube-front-side {
    background-color: #ddd6bf;
  }

  .cube-down-side {
    height: $side-bottom-height;
    background-color: #5a55f8;
    bottom: -(calc($side-bottom-height / 2));
    transform: rotateX(-20deg) translateY(calc($side-bottom-height / 2));
  }

  .cube-top-side {
    height: $side-bottom-height;
    background-color: #5a55f8;
    top: -(calc($side-bottom-height / 2));
    transform: rotateX(100deg) translateY(calc($side-bottom-height / 2));
  }
}
</style>
