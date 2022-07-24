<template>
  <div class="section-hero">
    <div class="navbar-wrapper mx-auto">
      <section-hero-navbar></section-hero-navbar>
    </div>
    <div class="resume"></div>
    <div class="sunset-picture"></div>
  </div>
</template>

<script>
export default {
  name: 'SectionHero',
}
</script>

<style scoped>
.section-hero {
  position: relative;
  height: 100vh;
  display: flex;
}

.navbar-wrapper {
  position: relative;
  top: 3em;
}
</style>
