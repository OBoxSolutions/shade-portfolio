<template>
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
</template>

<script>
export default {
  name: 'SectionAboutUseDescription',
}
</script>

<style scoped lang="scss">
$angle-of-inclination: 2deg;
$side-bottom-height: 40px;
$perspective: 200px;
$headers-rotation-x-degrees: 2deg;

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
