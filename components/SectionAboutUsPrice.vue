<template>
  <div class="section-about-us-price">
    <div class="cube cube-price">
      <div class="side cube-front-side">
        <div class="px-5">
          <h2>Price</h2>
          <p>
            How much does it cost to make a website? The cost will be handpicked
            just for you after we get a rough idea of your project. Generally,
            the price is a deal breaker for a lot of people, that’s why we
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
    <div class="cube cube-left-under-price">
      <div class="side cube-front-side"></div>
      <div class="side cube-right-side"></div>
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
$side-bottom-height: 80px;
$perspective: 200px;

.section-about-us-price {
  perspective: $perspective;
  transform-style: preserve-3d;
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

  position: relative;
  height: $height;
  width: 130%;
  background-color: #139494;
  top: -(calc($height / 2));
  transform: rotateX(20deg) translateY(calc($height / 2 * -1));
}
</style>
