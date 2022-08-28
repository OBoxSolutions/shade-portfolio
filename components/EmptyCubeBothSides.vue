<template>
  <div class="cube">
    <img
      class="side-hole-left"
      src="/side-hole-left.png"
      alt="Depicts a hole to the side of the cube"
    />
    <img
      class="side-hole-right"
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
$side-width: 130px;

.cube {
  position: relative;
  height: 560px;
  width: 100%;
  transform-style: preserve-3d;
  perspective: 500px;

  .side-hole-left,
  .side-hole-right {
    position: absolute;
    z-index: 10;
  }

  .side-hole-left {
    left: -36px;
    top: 100px;
  }
  .side-hole-right {
    right: -36px;
    top: 100px;
  }
}

.side {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #5a55f8;
  width: $side-width;
}

.side-front {
  background-color: #ddd6bf;
  width: 100%;
}

.side-left {
  left: calc($side-width / 2 * -1);
  transform: rotateY(-42deg) translateX(calc($side-width / 2 * -1));
}

.side-right {
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
