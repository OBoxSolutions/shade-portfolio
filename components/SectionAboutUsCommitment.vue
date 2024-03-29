<template>
  <div class="section-partnership">
    <div v-if="!breakpoints.isSmAndDown" class="image">
      <img
        src="/pixel-art-clock.png"
        alt="Pixelated image describing a handshake"
      />
    </div>
    <div class="cube-wrapper">
      <div class="connector-line"></div>
      <empty-cube
        class="content"
        :perspective="breakpoints.isSmAndDown ? '400px' : '600px'"
        :side-width="width"
        :right="false"
      >
        <template #title> Time Commitment </template>
        <template #text>
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
        </template>
      </empty-cube>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'SectionAboutUsCommitment',
  computed: {
    ...mapState(['breakpoints']),
    width() {
      if (this.breakpoints.isXsAndDown) return '120px'

      if (this.breakpoints.isSmAndDown) return '380px'

      if (this.breakpoints.isMdAndDown) return '100px'

      if (this.breakpoints.isLgAndDown) return '100px'

      if (this.breakpoints.isXlAndDown) return '120px'

      return '160px'
    },
  },
}
</script>

<style scoped lang="scss">
.section-partnership {
  display: flex;
  flex-direction: row-reverse;
  transform-style: preserve-3d;
  position: relative;
  perspective: 800px;

  &::after {
    position: absolute;
    left: 0px;
    content: '';
    width: 100%;
    top: 8.5%;
    height: 81.5%;
    background-color: #ffac06;
    z-index: -1;
  }
}

@media screen and (min-width: 991px) {
  .section-partnership {
    flex-direction: row;
  }
}

.cube-wrapper {
  width: calc(100% - 100px);
  position: relative;
}

@media screen and (min-width: 991px) {
  .cube-wrapper {
    width: calc(50% - 100px);
  }
}

.connector-line {
  $connector-line-height: 120px;
  $connector-line-width: 40%;

  width: $connector-line-width;
  height: $connector-line-height;
  position: absolute;
  right: calc(100% + 7px);
  top: calc(50% - calc($connector-line-height / 2));
  background-color: #d9d9d9;
  z-index: 10;
}

.image {
  width: calc(50% + 100px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
}
</style>
