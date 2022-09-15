<template>
  <div class="section-about-us-price">
    <section-about-us-price-small-screen
      v-if="$breakpoints.isSmAndDown"
    ></section-about-us-price-small-screen>
    <div v-else>
      <div class="cube cube-price">
        <div class="side cube-front-side">
          <div class="px-5">
            <h2>Price</h2>
            <p>
              How much does it cost to make a website? The cost will be
              handpicked just for you after we get a rough idea of your project.
              Generally, the price is a deal breaker for a lot of people, that's
              why we evaluate it very carefully and personally for the client,
              to make it as accurate, reasonable, and affordable as possible.
              When choosing the price for the client there are a lot of factors
              involved so we can choose a fair price. Broadly speaking we look
              at the complexity of the project, and the communication between
              the two parties. We are also looking at which team of our talent
              will be making the website, you know, a lot of designers need to
              eat and also, they have rent or what not.
            </p>
          </div>
        </div>
        <div class="side cube-down-side"></div>
      </div>
      <div class="connector-line connector-line-middle">
        <div>Some text</div>
      </div>

      <empty-cube
        class="cube cube-right-of-price"
        side-width="30px"
        perspective="initial"
        rotation="130deg"
        background-color="#ffac06"
        :right="false"
      >
        <template #left>
          <div class="side-hole-left-wrapper">
            <img
              src="/side-hole-big-size.svg"
              alt="Depicts a hole to the side of the cube"
            />
          </div>
        </template>
        <template #title>
          <div class="rotated-text">Technical talk</div>
        </template>
      </empty-cube>
      <div class="cube cube-left-under-price">
        <div class="side cube-front-side"></div>
        <div class="side cube-right-side"></div>
      </div>
      <div class="bottom"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SectionAboutUsPrice',
}
</script>

<style scoped lang="scss">
$side-bottom-height: 80px;
$perspective: 200px;

.section-about-us-price {
  perspective: $perspective;
  transform-style: preserve-3d;
  position: relative;
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
  height: 600px;
  width: 60%;
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

.cube-right-of-price {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 4%;
  height: 1300px;
}

.cube-left-under-price {
  width: 140px;
  height: 640px;

  .cube-front-side {
    background-color: #ffac06;
  }

  .cube-right-side {
    width: 80px;
    right: -40px;
    transform: rotateY(20deg) translateX(40px);
    background-color: #5a55f8;
  }
}

.bottom {
  $height: 80px;

  position: absolute;

  height: $height;
  width: 130%;
  background-color: #139494;
  bottom: -(calc($height / 2));
  transform: rotateX(20deg) translateY(calc($height / 2 * -1));
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
