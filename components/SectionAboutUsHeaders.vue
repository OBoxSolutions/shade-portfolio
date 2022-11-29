<template>
  <div class="section-head-cube">
    <div class="first-header-cube">
      <div class="first-header__top-side"></div>
      <h2 class="m-0">About us</h2>
    </div>
    <div class="second-header-cube">
      <div class="second-header__top-side"></div>
      <h2 class=" m-0 __top-side__text">Why <span>we're</span><div>here</div></h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SectionAboutUsHeaders',
}
</script>

<style scoped lang="scss">
$top-side-height: 400px;
$perspective: 200px;
$headers-rotation-x-degrees: 2deg;

.section-head-cube {
  display: flex;
  width: 100%;
  position: relative;
  transform-style: preserve-3d;
  perspective: $perspective;
  transform: rotateX(-24deg);
  perspective-origin: top;
}
h2{
  font-weight: 400;
  color: #000000;
}

.first-header-cube,
.second-header-cube {
  width: 100%;
  padding: 20px 0px;
  text-align: left;
  border: 3px solid black;
  z-index: 100;
  transform-style: preserve-3d;
  perspective: $perspective;
  background-color: #ef4242;

  .first-header__top-side,
  .second-header__top-side {
    position: absolute;
    width: 100%;
    height: $top-side-height;
    background: linear-gradient(90deg, #f8981d 7.29%, #fec111 48.61%);
    top: -(calc($top-side-height/2));
    transform: rotateX(-165deg) translateY(calc($top-side-height/2));
    __top-side__text{
      
    }
  }

  @media screen and (min-width: 768px) {
    .first-header__top-side,
    .second-header__top-side {
      transform: rotateX(-145deg) translateY(calc($top-side-height/2));
    }
  }

  @media screen and (min-width: 1024px) {
    .first-header__top-side,
    .second-header__top-side {
      transform: rotateX(-155deg) translateY(calc($top-side-height/2));
    }
  }

  .first-header__top-side {
    border-right: 26px solid black;
  }

  .second-header__top-side {
    border-left: 26px solid black;
  }
}

.first-header-cube {
  text-transform: uppercase;
  border-left: 0;
  transform: rotateY($headers-rotation-x-degrees) translateX(1.5px);
  perspective-origin: -1700%;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    padding-left: 1em;
    font-size: 1rem;
  }

}

@media screen and (min-width: 700px) {
  .first-header-cube {
    perspective-origin: -400%;
  }
}

.second-header-cube {
  border-right: 0;
  text-align: left;
  transform: rotateY(-($headers-rotation-x-degrees)) translateX(-1.5px);
  perspective-origin: 1700%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #D43737;
  h2 {
    font-size: 1rem;
    width: fit-content;
    span{
      text-decoration: underline;
    }
    div{
      text-decoration: underline;
      border-right: 0.2rem solid black;
      width: fit-content;
    }
  }

 
}

@media screen and (min-width: 700px) {
  .second-header-cube {
    perspective-origin: 400%;
  }
}
@media screen and (min-width: 500px) {
  .first-header-cube{
    h2{
      font-size: 3rem !important;
    }
  } 
  .second-header-cube{
    h2{
      font-size: 2rem !important;
    }
  }
}

</style>
