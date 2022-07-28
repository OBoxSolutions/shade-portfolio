<template>
  <div class="about-us-section">
    <div class="section-head">
      <h2 class="first-header m-0">About us</h2>
      <h2 class="second-header m-0">Why we're here</h2>
    </div>
    <div class="cube mb-9">
      <div class="front-size"></div>
      <div class="down-size"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SectionAboutUs',
}
</script>

<style scoped lang="scss">
$angle-of-inclination: 2deg;
$side-bottom-height: 40px;

.about-us-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section-head {
  display: flex;
  width: 100%;
  perspective: 200px;
}

.first-header,
.second-header {
  width: 100%;
  padding: 20px 0px;
  text-align: center;
  border: 3px solid black;
  z-index: 100;
}

.first-header {
  background-color: #ef4242;
  text-transform: uppercase;
  font-size: 4.4rem;
  border-left: 0;
  transform: skewY(-$angle-of-inclination);
  perspective-origin: right;
}

.second-header {
  background-color: #d43737;
  border-right: 0;
  font-size: 2.4rem;
  transform: skewY($angle-of-inclination);
  perspective-origin: left;
}

.cube {
  position: relative;
  height: 600px;
  width: 60%;
  transform-style: preserve-3d;
  perspective: 200px;
  perspective-origin: bottom;

  .front-size,
  .down-size {
    width: 100%;
    height: 100%;
  }

  .front-size {
    background-color: #ddd6bf;
    position: absolute;
  }

  .down-size {
    height: $side-bottom-height;
    position: absolute;
    background-color: #5a55f8;
    bottom: -($side-bottom-height / 2);
    transform: rotateX(-20deg) translateY($side-bottom-height / 2);
  }
}
</style>
