<template>
  <div class="section-hero">
    <div class="navbar-wrapper mx-auto">
      <div class="navbar-content">
        <section-hero-navbar></section-hero-navbar>
      </div>
    </div>
    <div class="content">
      <div class="resume">
        <img src="/logo.png" class="mt-8" alt="" />
        <p>Every pixel delivered with care</p>
      </div>
      <div class="sunset-picture"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SectionHero',
}
</script>

<style scoped lang="scss">
.section-hero {
  position: relative;
  height: 100vh;

  .content {
    display: flex;
    width: 100%;
    height: 100%;

    .resume {
      flex-basis: 25%;
      background-color: #15aaaa;

      p {
        text-align: center;
      }
    }
    .sunset-picture {
      flex-basis: 75%;
    }
  }
}

.navbar-wrapper {
  position: absolute;
  top: 3em;
  left: 50%;

  .navbar-content {
    position: relative;
    width: fit-content;
    left: -50%;
  }
}
</style>
