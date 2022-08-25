<template>
  <div class="section-partnership">
    <div class="filler"></div>
    <empty-cube-right class="content">
      <h1>Partnership</h1>
      <p>
        WebDo is very grateful for every new quality connection it gets to make
        while on this journey, that's why we take communication with clients
        very seriously. Our colleagues will always be open to your ideas and
        give you the time necessary to build an idea about your product that you
        and we will be both proud of. Our website creators will always keep a
        friendly and suitable environment because that is when the best ideas
        are born. I truly hope you get to experience it for yourself.
      </p>
    </empty-cube-right>
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

.image {
  width: calc(50% + 100px);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
