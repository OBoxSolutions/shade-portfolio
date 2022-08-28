<template>
  <div class="section-partnership">
    <empty-cube class="content" :left="false">
      <template #title> Partnership </template>
      <template #text>
        WebDo is very grateful for every new quality connection it gets to make
        while on this journey, that's why we take communication with clients
        very seriously. Our colleagues will always be open to your ideas and
        give you the time necessary to build an idea about your product that you
        and we will be both proud of. Our website creators will always keep a
        friendly and suitable environment because that is when the best ideas
        are born. I truly hope you get to experience it for yourself.
      </template>
    </empty-cube>
    <div class="connector-line"></div>
    <div class="image">
      <img
        src="/pixelated-handshake.png"
        alt="Pixelated image describing a handshake"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SectionAboutUsPartnership',
}
</script>

<style scoped lang="scss">
.section-partnership {
  display: flex;
  transform-style: preserve-3d;
  position: relative;
  perspective: 800px;

  &::after {
    position: absolute;
    content: '';
    width: 300%;
    height: 100%;
    background-color: #ffac06;
    z-index: -1;
    transform: translateZ(-134px);
  }
}

.content {
  width: calc(50% - 100px);
}

.connector-line {
  $connector-line-height: 120px;
  $connector-line-width: 34%;

  width: $connector-line-width;
  height: $connector-line-height;
  position: absolute;
  left: 867px;
  top: calc(50% - calc($connector-line-height / 2));
  background-color: #d9d9d9;
  z-index: 10;
}

.image {
  width: calc(50% + 100px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
}
</style>
