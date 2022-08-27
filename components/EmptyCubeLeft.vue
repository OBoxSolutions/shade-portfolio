<template>
  <div class="cube">
    <img
      class="side-hole"
      src="/side-hole-left.png"
      alt="Depicts a hole to the side of the cube"
    />
    <div class="side side-front">
      <div class="px-3">
        <h1>Time Commitment</h1>
        <p>
          It is a promise that our design agency will always complete your
          project by or before the deadline that you've set. Although it's
          probably healthy to mention, that people are people, so the project
          where we have a minute to make the new web for NASA probably won't
          happen. Coming out of that the time itself may have to be discussed
          and tweaked accordingly to form an appropriate timeline of events. A
          very important fact you should know is, that we will never sacrifice
          the quality of our work to save ourselves a couple of hours of work,
          that is not what defines us. If there would be a choice of what to
          sacrifice, quality or time, we would sacrifice none.
        </p>
      </div>
    </div>
    <div class="side side-left"></div>
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
$left-side-width: 100px;

.cube {
  position: relative;
  height: 560px;
  width: 100%;
  transform-style: preserve-3d;
  perspective: 800px;

  .side-hole {
    position: absolute;
    z-index: 10;
    left: -36px;
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
  width: $left-side-width;
  left: -50px;
  transform: rotateY(-42deg) translateX(-50px);
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
