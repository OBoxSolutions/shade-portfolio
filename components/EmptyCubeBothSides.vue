<template>
  <div class="cube">
    <img
      class="side-hole-left"
      src="/side-hole-left.png"
      alt="Depicts a hole to the side of the cube"
    />
    <img
      class="side-hole"
      src="/side-hole-right.png"
      alt="Depicts a hole to the side of the cube"
    />

    <div class="side side-front">
      <div class="px-3">
        <h1>{{ title }}</h1>
        <p>
          {{ text }}
        </p>
      </div>
    </div>
    <div class="side side-left"></div>
    <div class="side side-right"></div>
  </div>
</template>

<script>
export default {
  name: 'EmptyCubeLeft',
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
$side-width: 100px;

.cube {
  position: relative;
  height: 560px;
  width: 100%;
  transform-style: preserve-3d;
  perspective: 800px;

  .side-hole-left {
    position: absolute;
    z-index: 10;
    left: -36px;
    top: 110px;
  }
  .side-hole-right {
    position: absolute;
    z-index: 10;
    right: -36px;
    top: 110px;
  }
}

.side {
  width: 100%;
  height: 100%;
  position: absolute;
}

.side-front {
  background-color: #ddd6bf;
}

.side-left {
  background-color: #5a55f8;
  width: $side-width;
  left: -50px;
  transform: rotateY(-42deg) translateX(-50px);
}

.side-right {
  background-color: #5a55f8;
  width: $side-width;
  left: calc(100% - calc($side-width / 2));
  transform: rotateY(42deg) translateX(calc($side-width / 2));
}

h1 {
  text-align: center;
  font-size: 50px;
  line-height: 79px;
}

p {
  font-family: 'Consolas';
  font-size: 18px;
}
</style>
