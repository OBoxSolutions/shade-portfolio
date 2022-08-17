<template>
  <div class="hiring-submit mb-9">
    <div class="hiring-submit__top" />
    <button class="hiring-submit__button">
      <h1>
        submit.
      </h1>
    </button>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
$perspective: 300px;

.hiring-submit{
  transform-style: preserve-3d;
  perspective: $perspective;
  perspective-origin: bottom;

  .hiring-submit__top{
    background: #33B758;
    border: 1px solid #000000;
    height: 20px;
  }
  .hiring-submit__button{
    width: 100%;
    background-color: #49EA76;
    outline: none;
    border-top: none;
    cursor: pointer;

    position: absolute;
    width: 100%;
    bottom: -96px;
    transform: rotateX(-20deg) translateY(90px);

    &:hover {
      background-color: #33B758; //hover color
    }
    &:active {
      background-color: #969696; //active color
    }

    h1{
      font-size: 4rem;
      line-height: 96px;
      text-align: center;
      color: #000000;
      transform: matrix(0.83, 0, -0.89, 1, 0, 0);
    }
  }
}
</style>
