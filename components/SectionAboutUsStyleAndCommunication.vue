<template>
  <div class="section-partnership">
    <div class="connector-line"></div>
    <empty-cube-both-sides class="content" title="lol"> </empty-cube-both-sides>
    <div class="connector-line"></div>
    <empty-cube-both-sides class="content" title="lol"> </empty-cube-both-sides>
    <div class="connector-line"></div>
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
    left: -400px;
    content: '';
    width: 300%;
    height: 100%;
    background-color: #ffac06;
    z-index: -1;
    transform: translateZ(-134px);
  }
}
</style>
