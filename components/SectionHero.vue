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
        <div class="description p-1 mr-1 mt-2">
          <p>
            We are a website design company, WebDo. The sole purpose of our
            existence is to create something you like. Truth be told, we just
            love making websites!
          </p>
        </div>
      </div>
      <div class="sunset-picture">
        <img src="/sunset.png" alt="" />
      </div>
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

      .description {
        background-color: #0d6666;
        border-radius: 0 15px;
        p {
          text-align: left;
        }
      }
    }
    .sunset-picture {
      flex-basis: 75%;

      img {
        height: 100%;
        width: 100%;
      }
    }
  }
}

.navbar-wrapper {
  position: absolute;
  top: 3em;
  width: 100%;
  left: 0;
  right: 0;

  .navbar-content {
    position: relative;
    width: fit-content;
    margin: auto;
  }
}
</style>
