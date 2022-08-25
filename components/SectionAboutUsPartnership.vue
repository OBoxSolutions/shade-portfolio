<template>
  <div class="section-partnership">
    <empty-cube-right class="content"> </empty-cube-right>
    <div class="image">
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

.image {
  width: calc(50% + 100px);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
