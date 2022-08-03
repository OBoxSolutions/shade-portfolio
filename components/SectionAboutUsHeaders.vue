<template>
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
</template>

<script>
export default {
  name: 'SectionAboutUsHeaders',
}
</script>

<style scoped lang="scss">
$angle-of-inclination: 2deg;
$side-bottom-height: 40px;
$perspective: 200px;
$headers-rotation-x-degrees: 2deg;

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

    .first-header__top-side,
    .second-header__top-side {
      position: absolute;
      width: 100%;
      height: 400px;
      background: linear-gradient(90deg, #f8981d 7.29%, #fec111 48.61%);
      top: -200px;
      transform: rotateX(-165deg) translateY(200px);
    }
  }

  .first-header-cube {
    background-color: #ef4242;
    text-transform: uppercase;
    border-left: 0;
    transform: rotateY($headers-rotation-x-degrees) translateX(1.5px);
    perspective-origin: -400%;

    .first-header__top-side {
      border-right: 26px solid black;
    }

    h2 {
      font-size: 6.2rem;
    }
  }

  .second-header-cube {
    background-color: #d43737;
    border-right: 0;
    text-align: left;
    transform: rotateY(-($headers-rotation-x-degrees)) translateX(-1.5px);
    perspective-origin: 400%;

    .second-header__top-side {
      border-left: 26px solid black;
    }

    h2 {
      font-size: 3rem;
    }
  }
}
</style>
