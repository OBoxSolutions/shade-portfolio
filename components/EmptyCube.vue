<template>
  <div class="cube" :style="{ perspective: perspective }">
    <slot name="left">
      <img
        v-if="left"
        class="side-hole-left"
        src="/side-hole-left.png"
        alt="Depicts a hole to the side of the cube"
      />
    </slot>
    <slot name="right-hole">
      <img
        v-if="right"
        class="side-hole-right"
        src="/side-hole-right.png"
        alt="Depicts a hole to the side of the cube"
      />
    </slot>

    <div
      class="side side-front"
      :style="{ 'background-color': backgroundColor }"
    >
      <div class="px-3">
        <h1>
          <slot name="title"></slot>
        </h1>
        <p>
          <slot name="text"></slot>
        </p>
      </div>
    </div>
    <div v-if="left" class="side" :style="sideLeftStyles"></div>
    <div v-if="right" class="side" :style="sideRightStyles"></div>
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
    left: {
      type: Boolean,
      default: true,
    },
    right: {
      type: Boolean,
      default: true,
    },
    perspective: {
      type: String,
      default: '',
    },
    sideWidth: {
      type: String,
      default: '130px',
    },
    rotation: {
      type: String,
      default: '42deg',
    },
    backgroundColor: {
      type: String,
      default: '#ddd6bf',
    },
  },
  computed: {
    sideLeftStyles() {
      return {
        width: this.sideWidth,
        left: `calc(${this.sideWidth} / 2 * -1)`,
        transform: `rotateY(-${this.rotation}) translateX(calc(${this.sideWidth} / 2 * -1))`,
      }
    },
    sideRightStyles() {
      return {
        width: this.sideWidth,
        left: `calc(100% - calc(${this.sideWidth} / 2))`,
        transform: `rotateY(${this.rotation}) translateX(calc(${this.sideWidth} / 2))`,
      }
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

h1 {
  text-align: center;
  font-size: 50px;
  line-height: 79px;
}

p {
  font-family: 'Prompt';
  font-size: 18px;
}
</style>
