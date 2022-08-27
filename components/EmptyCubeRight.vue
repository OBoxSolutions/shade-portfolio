<template>
  <div class="cube">
    <img
      class="side-hole"
      src="/side-hole-right.png"
      alt="Depicts a hole to the side of the cube"
    />
    <div class="side side-front">
      <div class="px-3">
        <h1>Partnership</h1>
        <p>
          WebDo is very grateful for every new quality connection it gets to
          make while on this journey, that's why we take communication with
          clients very seriously. Our colleagues will always be open to your
          ideas and give you the time necessary to build an idea about your
          product that you and we will be both proud of. Our website creators
          will always keep a friendly and suitable environment because that is
          when the best ideas are born. I truly hope you get to experience it
          for yourself.
        </p>
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

  .side-hole {
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

.side-right {
  background-color: #5a55f8;
  width: $right-side-width;
  left: calc(100% - calc($right-side-width / 2));
  transform: rotateY(42deg) translateX(calc($right-side-width / 2));
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
