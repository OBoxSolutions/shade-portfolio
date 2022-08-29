<template>
  <div class="section-partnership">
    <div class="connector-line connector-line-left"></div>
    <div class="cube-wrapper left">
      <empty-cube class="cube" perspective-origin="500px"></empty-cube>
    </div>
    <div class="connector-line connector-line-middle"></div>
    <div class="cube-wrapper right">
      <empty-cube class="cube" perspective-origin="500px"></empty-cube>
    </div>
    <div class="connector-line connector-line-right"></div>
  </div>
</template>

<script>
export default {}
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
    top: 7.5%;
    height: 85%;
    background-color: #ffac06;
    z-index: -1;
  }
}

.cube-wrapper {
  width: 30% !important;
  position: relative;
}

.cube-wrapper.left {
  left: 40px;
}

.cube-wrapper.right {
  position: absolute;
  right: 40px;
}

.connector-line {
  $connector-line-height: 120px;

  height: $connector-line-height;
  position: absolute;
  top: calc(50% - calc($connector-line-height / 2));
  background-color: #d9d9d9;
  z-index: 10;
}

.connector-line-left {
  width: 33px;
  left: 0;
}

.connector-line-middle {
  $width: 674px;

  width: $width;
  left: calc(50% - $width / 2);
}

.connector-line-right {
  width: 33px;
  right: 0;
}
</style>
