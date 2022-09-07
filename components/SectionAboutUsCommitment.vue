<template>
  <div class="section-partnership">
    <div class="image">
      <img
        src="/pixel-art-clock.png"
        alt="Pixelated image describing a handshake"
      />
    </div>
    <div class="connector-line"></div>
    <empty-cube-left class="content"> </empty-cube-left>
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
    left: -400px;
    content: '';
    width: 300%;
    height: 100%;
    background-color: #ffac06;
    z-index: -1;
    transform: translateZ(-134px);
  }
}

.content {
  width: calc(50% - 100px);
}

.connector-line {
  $connector-line-height: 120px;
  $connector-line-width: 34%;

  width: $connector-line-width;
  height: $connector-line-height;
  position: absolute;
  right: 867px;
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
