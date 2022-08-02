<template>
  <div class="about-us-section">
    <div class="section-head-cube">
      <div class="first-header-cube">
        <div class="first-header__top-side"></div>
        <h2 class="m-0">About us</h2>
      </div>
      <div class="second-header-cube">
        <div class="second-header__top-side"></div>
        <h2 class="px-5 m-0">Why we're here</h2>
      </div>
    </div>
    <section-about-use-description></section-about-use-description>
  </div>
</template>

<script>
import SectionAboutUseDescription from './SectionAboutUseDescription.vue'

export default {
  name: 'SectionAboutUs',
  components: {
    SectionAboutUseDescription,
  },
}
</script>

<style scoped lang="scss">
$angle-of-inclination: 2deg;
$side-bottom-height: 40px;
$perspective: 200px;
$headers-rotation-x-degrees: 2deg;

.about-us-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section-head-cube {
  display: flex;
  width: 100%;
  position: relative;
  z-index: 100;
  transform-style: preserve-3d;
  perspective: $perspective;
  transform: rotateX(-24deg);
  perspective-origin: top;

  .first-header-cube,
  .second-header-cube {
    width: 100%;
    padding: 20px 0px;
    text-align: center;
    border: 3px solid black;
    z-index: 100;
    transform-style: preserve-3d;
    perspective: $perspective;
  }

  .first-header-cube {
    background-color: #ef4242;
    text-transform: uppercase;
    border-left: 0;
    transform: rotateY($headers-rotation-x-degrees) translateX(1.5px);

    h2 {
      font-size: 6.2rem;
    }
  }

  .second-header-cube {
    background-color: #d43737;
    border-right: 0;
    text-align: left;
    transform: rotateY(-($headers-rotation-x-degrees)) translateX(-1.5px);

    h2 {
      font-size: 3rem;
    }
  }
}
</style>
