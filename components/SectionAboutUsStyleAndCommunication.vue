<template>
  <div class="section-partnership">
    <div class="cube-wrapper left">
      <empty-cube class="cube" perspective-origin="500px"></empty-cube>
    </div>
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
  left: calc(100% - 40px);
}
</style>
