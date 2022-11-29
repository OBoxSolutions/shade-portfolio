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

    <empty-cube
      class="cube cube-right-of-price"
      :side-width="width"
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
      <template #content>
        <h2 class="rotated-text">Technical talk</h2>
        <div class="connector-line">
          <h3>Coming soon...</h3>
        </div>
      </template>
    </empty-cube>
    <div class="cube cube-left-under-price">
      <div class="side cube-front-side"></div>
      <div class="side cube-right-side"></div>
      <button class="bottom-button button--red" @click="$router.push('/select')">Press Start</button>
    </div>
    <div class="bottom"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'SectionAboutUsPriceBigScreen',
  computed: {
    ...mapState(['breakpoints']),

    width() {
      if (this.breakpoints.isXsAndDown) return '120px'

      if (this.breakpoints.isSmAndDown) return '380px'

      if (this.breakpoints.isMdAndDown) return '80px'

      if (this.breakpoints.isLgAndDown) return '40px'

      if (this.breakpoints.isXlAndDown) return '60px'

      return '60px'
    },
  },
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
    text-align: center;
    font-size: 50px;
    font-weight: 400;
    color: #000000;
  }
  p {
    font-family: 'Consolas' !important;
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 25px;
    color: #000000;
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

  .bottom-button {
    position: absolute;
    width: 35rem;
    height: 20rem;
    bottom: 65px;
    left: 205px;
    border: 0;
    padding: 2rem;
    text-transform: uppercase;
    font-size: 4rem;
    cursor: pointer;
    transform-style: preserve-3d;
    transition: all 0.15s;

    &::after {
      content: '';
      position: absolute;
      clip-path: polygon(0 0, 20% 12%, 21% 90%, 0 100%);
      min-width: 200px;
      min-height: 318px;
      right: -200px;
      bottom: 0;
      background: #5a55f8;
      transition: all 0.15s;
    }
    &:active {
      background: #d43737;
      transform: translate3d(10px, 0, -0.1em);
    }
    &:active::after {
      transform: translate3d(-50px, 1.5em, -1em);
    }
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
  position: absolute;
  background-color: #d9d9d9;
  top: 18%;
  right: calc(100% + 18.5px);
  z-index: 100;
  height: 60%;
  width: 55px;

  h3 {
    margin: 0;
    rotate: -90deg;
    width: 280px;
    position: absolute;
    font-size: 1.4rem;
    top: 40%;
    right: -110px;
    z-index: 500;

    font-family: 'Consolas' !important;
    font-weight: 400;
    line-height: 35px;
    color: #000000;
  }
}
</style>
