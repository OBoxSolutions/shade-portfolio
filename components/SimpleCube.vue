<template>
  <div class="cube mb-9">
    <div
      v-if="top"
      class="cube-top-side"
      :style="{ 'background-color': otherSidesBackgroundColor }"
    ></div>
    <div
      class="cube-front-side"
      :style="{ 'background-color': frontSideBackgroundColor }"
    >
      <slot name="content">
        <div class="p-5">
          <h2>
            {{ title }}
          </h2>
          <slot> </slot>
        </div>
      </slot>
    </div>
    <div
      v-if="bottom"
      class="cube-down-side"
      :style="{ 'background-color': otherSidesBackgroundColor }"
    ></div>
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
    frontSideBackgroundColor: {
      type: String,
      default: '#ddd6bf',
    },
    otherSidesBackgroundColor: {
      type: String,
      default: '#5a55f8',
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
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .cube-down-side {
    height: $side-bottom-height;
    bottom: -(calc($side-bottom-height / 2));
    transform: rotateX(-20deg) translateY(calc($side-bottom-height / 2));
  }

  .cube-top-side {
    height: $side-bottom-height;
    top: -(calc($side-bottom-height / 2));
    transform: rotateX(190deg) translateY(calc($side-bottom-height / 2));
  }
}
</style>
