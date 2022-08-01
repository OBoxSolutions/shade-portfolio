<template>
  <div class="about-us-section">
    <div class="section-head">
      <div class="first-header-cube">
        <div class="first-header__top-side"></div>
        <h2 class="m-0">About us</h2>
      </div>
      <div class="second-header-cube">
        <div class="second-header__top-side"></div>
        <h2 class="px-5 m-0">Why we're here</h2>
      </div>
    </div>
    <div class="description-cube mb-9">
      <div class="description-front-side">
        <div class="p-5">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
            doloribus eaque laudantium commodi nisi quibusdam itaque asperiores
            recusandae repellat corrupti id neque eveniet vitae voluptate earum
            nostrum, atque sed quas.
          </p>
        </div>
      </div>
      <div class="description-down-side"></div>
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
$perspective: 200px;

.about-us-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section-head {
  display: flex;
  width: 100%;
  position: relative;
  z-index: 100;
  transform-style: preserve-3d;
  perspective: $perspective;
  transform: rotateX(-20deg);

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
    transform: skewY(-$angle-of-inclination);

    .first-header__top-side {
    }

    h2 {
      font-size: 6.2rem;
    }
  }

  .second-header-cube {
    background-color: #d43737;
    border-right: 0;
    transform: skewY($angle-of-inclination);
    text-align: left;

    h2 {
      font-size: 3rem;
    }
  }
}

.description-cube {
  position: relative;
  height: 600px;
  width: 60%;
  transform-style: preserve-3d;
  perspective: $perspective;
  perspective-origin: bottom;
  position: relative;
  top: -20px;
  z-index: 10;

  .description-front-side,
  .description-down-side {
    width: 100%;
    height: 100%;
    position: absolute;
  }

  .description-front-side {
    background-color: #ddd6bf;
  }

  .description-down-side {
    height: $side-bottom-height;
    background-color: #5a55f8;
    bottom: -(calc($side-bottom-height / 2));
    transform: rotateX(-20deg) translateY(calc($side-bottom-height / 2));
  }
}
</style>
