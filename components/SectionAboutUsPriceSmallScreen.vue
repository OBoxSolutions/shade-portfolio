<template>
  <div class="section-about-us-price">
    <div class="cube cube-price">
      <div class="side cube-front-side">
        <div class="px-5">
          <h2>Price</h2>
          <p>
            How much does it cost to make a website? The cost will be handpicked
            just for you after we get a rough idea of your project. Generally,
            the price is a deal breaker for a lot of people, that's why we
            evaluate it very carefully and personally for the client, to make it
            as accurate, reasonable, and affordable as possible. When choosing
            the price for the client there are a lot of factors involved so we
            can choose a fair price. Broadly speaking we look at the complexity
            of the project, and the communication between the two parties. We
            are also looking at which team of our talent will be making the
            website, you know, a lot of designers need to eat and also, they
            have rent or what not.
          </p>
        </div>
      </div>
      <div class="side cube-down-side"></div>
    </div>

    <div class="cube-under-price-wrapper">
      <div class="cube cube-left-under-price">
        <div class="side cube-front-side"></div>
        <div class="side cube-right-side"></div>
      </div>
      <div class="button-wrapper">
        <base-button only-bottom class="base-button button--red--side-blue">
          <h1>Press Start</h1>
        </base-button>
      </div>
      <div class="cube cube-right-under-price">
        <div class="side cube-front-side"></div>
        <div class="side cube-right-side"></div>
      </div>
    </div>
    <div class="bottom"></div>
  </div>
</template>

<script>
export default {
  name: 'SectionAboutUsPrice',
}
</script>

<style scoped lang="scss">
$side-bottom-height: 60px;
$perspective: 200px;

.section-about-us-price {
  perspective: $perspective;
  transform-style: preserve-3d;
  position: relative;
}

.button-wrapper{
  position: absolute;
  left: 50%;
  bottom: 90%;

  .base-button {
    position: absolute;
    left: calc(50% - 180px);
    top: 100px;
    font-size: 26px;

    padding: 0 !important;

    transform-style: preserve-3d;
    perspective: 100px;
    perspective-origin: bottom;

    h1{
      font-weight: 400;
      padding: 0 50px;
      color: #ffffff;
    }
    &:active {
      transform: translateY(10px);
    }
  }
  @media screen and (max-width: 528px) {
  .base-button {
    left: calc(50% - 110px);
    top: 150px;
    h1{
      font-size: 1.5rem;
    }
  }
}
}

.cube {
  transform-style: preserve-3d;
  position: relative;
}

.side {
  position: absolute;
  height: 100%;
  z-index: 10;
  width: 100%;
}

.cube-price {
  height: 500px;
  width: 100%;
  perspective-origin: bottom;
  text-align: center;

  h2 {
    font-size: 50px;
  }

  .cube-front-side {
    background-color: #ddd6bf;
  }

  .cube-down-side {
    height: $side-bottom-height;
    background-color: #15aaaa;
    bottom: -(calc($side-bottom-height / 2));
    transform: rotateX(-20deg) translateY(calc($side-bottom-height / 2));
  }
}

.cube-under-price-wrapper {
  transform-style: preserve-3d;
  position: relative;
  display: flex;
}

.cube-left-under-price,
.cube-right-under-price {
  width: 0px;
  height: 640px;

  .cube-right-side {
    width: 60px;
  }
}

.cube-left-under-price {
  .cube-right-side {
    right: -30px;
    transform: rotateY(20deg) translateX(30px);
    background-color: #5a55f8;
  }
}

.cube-right-under-price {
  margin-left: auto;

  .cube-right-side {
    left: -30px;
    transform: rotateY(-20deg) translateX(-30px);
    background-color: #5a55f8;
  }
}

.bottom {
  $height: 20px;

  position: absolute;

  height: $height;
  width: 130%;
  background-color: #139494;
  bottom: -(calc($height / 2));
  transform: rotateX(80deg) translateY(calc($height / 2 * -1));
}

.side-hole-left-wrapper {
  position: absolute;
  z-index: 10;
  left: -62px;
  top: 110px;
}

.rotated-text {
  transform: rotateZ(270deg);
  position: absolute;
  height: 800px;
  width: 800px;
  top: 230px;
  left: 0px;
}

.connector-line {
  $connector-line-height: 820px;

  height: $connector-line-height;
  position: absolute;
  top: calc(45% - calc($connector-line-height / 2));
  background-color: #d9d9d9;
  z-index: 10;
}

.connector-line-middle {
  $width: 86px;

  width: $width;
  right: 95px;

  div {
    transform: rotateZ(270deg);
    position: absolute;
    width: 200px;
    left: -50px;
    top: 380px;
  }
}
</style>
