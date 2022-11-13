<template>
  <div class="section-partnership">
    <div class="cube-wrapper">
      <empty-cube
        class="content"
        :perspective="breakpoints.isSmAndDown ? '400px' : '600px'"
        :side-width="width"
        :left="false"
      >
        <template #title> Partnership </template>
        <template #text>
          WebDo is very grateful for every new quality connection it gets to
          make while on this journey, that's why we take communication with
          clients very seriously. Our colleagues will always be open to your
          ideas and give you the time necessary to build an idea about your
          product that you and we will be both proud of. Our website creators
          will al ways keep a friendly and suitable environment because that is
          when the best ideas are born. I truly hope you get to experience it
          for yourself.
        </template>
      </empty-cube>
      <div class="connector-line"></div>
    </div>
    <div v-if="!breakpoints.isSmAndDown" class="image">
      <img
        src="/pixelated-handshake.png"
        alt="Pixelated image describing a handshake"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'SectionAboutUsPartnership',
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
  transform-style: preserve-3d;
  position: relative;
  perspective: 800px;

  &::after {
    position: absolute;
    left: 0px;
    content: '';
    width: 100%;
    top: 8.5%;
    height: 82.8%;
    background-color: #ffac06;
    z-index: -1;
  }
}

.content {
  position: relative;
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
  left: calc(100% + 7px);
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
