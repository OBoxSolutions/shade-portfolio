<template>
  <div class="about-us-section">
    <div class="section-head">
      <h2 class="first-header m-0">About us</h2>
      <div class="second-header m-0">
        <h2 class="px-5">Why we're here</h2>
      </div>
    </div>
    <div class="cube mb-9">
      <div class="front-size">
        <div class="p-5">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
            doloribus eaque laudantium commodi nisi quibusdam itaque asperiores
            recusandae repellat corrupti id neque eveniet vitae voluptate earum
            nostrum, atque sed quas.
          </p>
        </div>
      </div>
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
  position: relative;
  z-index: 100;

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
    font-size: 6.2rem;
    border-left: 0;
    transform: skewY(-$angle-of-inclination);
  }

  .second-header {
    background-color: #d43737;
    border-right: 0;
    transform: skewY($angle-of-inclination);
    text-align: left;

    h2 {
      font-size: 3rem;
    }
  }
}

.cube {
  position: relative;
  height: 600px;
  width: 60%;
  transform-style: preserve-3d;
  perspective: 200px;
  perspective-origin: bottom;
  position: relative;
  top: -20px;
  z-index: 10;

  .front-size,
  .down-size {
    width: 100%;
    height: 100%;
    position: absolute;
  }

  .front-size {
    background-color: #ddd6bf;
  }

  .down-size {
    height: $side-bottom-height;
    background-color: #5a55f8;
    bottom: -($side-bottom-height / 2);
    transform: rotateX(-20deg) translateY($side-bottom-height / 2);
  }
}
</style>
