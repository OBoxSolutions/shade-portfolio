<template>
  <div class="cube mb-9">
    <div class="description-front-side">
      <div class="p-5">
        <h2>
          {{ title }}
        </h2>
        <slot> </slot>
      </div>
    </div>
    <div class="description-down-side"></div>
  </div>
</template>

<script>
export default {
  name: 'SectionAboutUseDescription',
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
$side-bottom-height: 40px;
$perspective: 200px;

.cube {
  position: relative;
  height: 600px;
  width: 60%;
  transform-style: preserve-3d;
  perspective: $perspective;
  perspective-origin: bottom;
  position: relative;

  .description-front-side,
  .description-down-side {
    width: 100%;
    height: 100%;
    position: absolute;
  }

  .description-front-side {
    background-color: #ddd6bf;
  }

  .description-down-side {
    height: $side-bottom-height;
    background-color: #5a55f8;
    bottom: -(calc($side-bottom-height / 2));
    transform: rotateX(-20deg) translateY(calc($side-bottom-height / 2));
  }
}
</style>
