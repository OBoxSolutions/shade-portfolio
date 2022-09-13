<template>
  <div class="section-partnership">
    <div class="cube-wrapper">
      <empty-cube
        class="content"
        :perspective="$breakpoints.isSmAndDown ? '400px' : '600px'"
        :side-width="$breakpoints.isSmAndDown ? '120px' : '190px'"
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
    </div>
    <div class="connector-line"></div>
    <div v-if="!$breakpoints.isSmAndDown" class="image">
      <img
        src="/pixelated-handshake.png"
        alt="Pixelated image describing a handshake"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SectionAboutUsPartnership',
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
  $connector-line-width: 34%;

  width: $connector-line-width;
  height: $connector-line-height;
  position: absolute;
  left: 540px;
  top: calc(50% - calc($connector-line-height / 2));
  background-color: #d9d9d9;
  z-index: 10;
}

@media screen and (min-width: 991px) {
  .connector-line {
    left: 867px;
  }
}

.image {
  width: calc(50% + 100px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
}
</style>
