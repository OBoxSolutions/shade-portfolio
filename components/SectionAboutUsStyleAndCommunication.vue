<template>
  <div class="section-partnership">
    <div class="cube-wrapper left">
      <div class="connector-line connector-line-left"></div>
      <empty-cube class="cube" perspective="620px">
        <template #title>Style </template>
        <template #text
          >We are aware of the fact that like it or not, hired web developers
          are people, and people have emotions, well most of them anyway.
          Emotions and opinions dictate their style and work, and may or may not
          align with your creative vision. I mean, look at this website, it's
          just flowing with creativity! But I imagine very few people want this
          type of look. That's why during the planning stage we will hand-pick
          the right team to match your wanted style.</template
        >
      </empty-cube>
      <div class="connector-line connector-line-right"></div>
    </div>
    <div class="cube-wrapper right">
      <div class="connector-line connector-line-left"></div>
      <empty-cube class="cube" perspective="620px">
        <template #title>Communication</template>
        <template #text>
          Quality communication with the client is very important to us, I mean,
          that's a big part of the service that we deliver. No matter if we're
          doing website design for a small business, or for a big company, we
          still think you're awesome. Philosophy that exists for quite some time
          is that at the end of the day, the most important thing is not money,
          but the connections you get to make along the way. We could not
          support that saying more, like, who doesn't want to make friends? At
          the end of the day, well, you get the point, talk to us.
        </template>
      </empty-cube>
      <div class="connector-line connector-line-right"></div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.section-partnership {
  display: flex;
  transform-style: preserve-3d;
  position: relative;
  perspective: 800px;

  &::after {
    position: absolute;
    left: 0px;
    content: '';
    width: 100%;
    top: 6.2%;
    height: 87.8%;
    background-color: #ffac06;
    z-index: -1;
  }
}

.cube-wrapper {
  width: 38% !important;
  position: relative;
}

.cube-wrapper.left {
  left: 40px;
}

.cube-wrapper.right {
  position: absolute;
  right: 40px;
}

.connector-line {
  $connector-line-height: 120px;

  height: $connector-line-height;
  position: absolute;
  top: calc(50% - calc($connector-line-height / 2));
  background-color: #d9d9d9;
  z-index: 10;
}

.connector-line-left {
  width: 100px;
  left: -107px;
}

.connector-line-middle {
  $width: 366px;

  width: $width;
  left: calc(50% - $width / 2);
}

.connector-line-right {
  width: 100px;
  right: -107px;
}
</style>
