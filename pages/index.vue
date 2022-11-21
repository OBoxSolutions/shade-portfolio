<template>
  <div>
    <section-hero></section-hero>
    <section-hero-foot class="mx-0 w-full hero-foot"></section-hero-foot>

    <section-about-us class="section-about-us"></section-about-us>
    <div class="content-sections">
      <div class="content-sections__img"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style scoped>
.content-sections {
  background-color: #d6932f;
}
.content-sections__img {
  background: url('/principal-page-background.svg');
}

.hero-foot {
  position: absolute;
  bottom: -240px;
}

@media screen and (min-width: 700px) {
  .hero-foot {
    bottom: -290px;
  }
}

@media screen and (min-width: 1024px) {
  .hero-foot {
    bottom: -440px;
  }
}

@media screen and (min-width: 1280px) {
  .hero-foot {
    bottom: -410px;
  }
}

@media screen and (min-width: 1536px) {
  .hero-foot {
    bottom: 0px;
  }
}

.section-about-us {
  padding-top: 560px;
}

@media screen and (min-width: 640px) {
  .section-about-us {
    padding-top: 560px;
  }
}

@media screen and (min-width: 768px) {
  .section-about-us {
    padding-top: 190px;
  }
}

@media screen and (min-width: 1024px) {
  .section-about-us {
    padding-top: 220px;
  }
}
</style>
