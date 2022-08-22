<template>
  <div class="container mb-6">
    <div class="cube cube-top">
      <div class="cube-side cube-front-side">
        <h2>{{ title }}</h2>
      </div>
      <div class="cube-side cube-right-side"></div>
      <div class="cube-side cube-bottom-side"></div>
    </div>
    <div class="cube cube-front">
      <div class="cube-side cube-front-side">
        <div class="p-1 font-family-consolas description">
          <slot> </slot>
        </div>
      </div>
      <div class="cube-side cube-right-side"></div>
    </div>
    <div class="cube cube-bottom">
      <div class="cube-side cube-front-side"></div>
      <div class="cube-side cube-right-side"></div>
    </div>
    <div class="cube cube-left"></div>
    <div class="cube cube-right"></div>
    <div class="cube cube-back">
      <div class="cube-side cube-front-side"></div>
      <div class="cube-side cube-right-side"></div>
    </div>
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
$side-bottom-width: 40px;
$perspective: 2200px;

$side-bottom-height: 100%;

$side-bottom-width-top-and-bottom-cubes: 200px;

$border-size: 1.5px;
$border-style: $border-size solid black;

$cube-front-height: 280px;

.container {
  position: relative;
  perspective: $perspective;
  transform-style: preserve-3d;
  perspective-origin: center center;

  .content-square {
    position: absolute;
    top: 0;
    width: 60%;
    height: 100%;
    background-color: #ddd6bf;
  }
}

.description {
  font-weight: 400;
  line-height: 29.27px;
  color: black;
  font-size: 20px;
}

.cube {
  position: relative;
  transform-style: preserve-3d;

  .cube-front-side {
    background-color: #ddd6bf;
  }

  .cube-side {
    width: 100%;
    height: 100%;
    position: absolute;
  }
}

.cube-top {
  .cube-front-side {
    display: flex;
    justify-content: center;

    h2 {
      font-size: 3rem;
      margin: 0;
      margin-top: 0.4em;
    }
  }
}

.cube-front {
  height: $cube-front-height;
  align-items: center;
  width: 60%;

  .cube-front-side {
    display: flex;
    padding: 0;
    overflow-y: hidden;
  }

  .cube-right-side {
    width: $side-bottom-width;
    background-color: #5a55f8;
    right: -(calc($side-bottom-width / 2));
    transform: rotateY(78deg) translateX(calc($side-bottom-width / 2));
  }
}

.cube-top,
.cube-bottom {
  height: 90px;
  width: 60%;

  .cube-right-side {
    width: $side-bottom-width-top-and-bottom-cubes;
    background-color: #5a55f8;
    right: -(calc($side-bottom-width-top-and-bottom-cubes / 2));
    transform: rotateY(78deg)
      translateX(calc($side-bottom-width-top-and-bottom-cubes / 2));
  }
}

.cube-back {
  position: absolute;
  top: calc(90px);
  height: calc($cube-front-height - $border-size);
  width: 60%;
  transform: translateZ(
      -($side-bottom-width-top-and-bottom-cubes) + $side-bottom-width
    )
    translateX(32px + $border-size);

  .cube-front-side {
    background-color: #4945c2;
    border: $border-style;
  }

  .cube-right-side {
    height: calc(100% + 40px);
    width: $side-bottom-width;
    background-color: #5a55f8;
    top: -10px;
    right: -(calc($side-bottom-width / 2));
    transform: rotateY(78deg) translateX(calc($side-bottom-width / 2));
  }
}
</style>
