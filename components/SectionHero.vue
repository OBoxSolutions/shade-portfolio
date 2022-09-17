<template>
  <div class="section-hero">
    <section-hero-small-screen
      v-if="breakpoints.isSmAndDown"
    ></section-hero-small-screen>
    <div v-else class="first-section">
      <div class="navbar-wrapper mx-auto">
        <div class="navbar-content"></div>
      </div>
      <div class="content">
        <div class="resume">
          <img src="/logo.svg" class="mt-9 mx-1" alt="" />
          <h4 class="mx-2">Every pixel delivered with care.</h4>
          <div class="description p-1 mr-1 mt-2">
            <h5>
              We are a website design company, WebDo. The sole purpose of our
              existence is to create something you like. Truth be told, we just
              love making websites!
            </h5>
          </div>
        </div>
        <div class="sunset-picture">
          <img src="/sunset.gif" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'SectionHero',
  computed: {
    ...mapState(['breakpoints']),
  },
}
</script>

<style scoped lang="scss">
.section-hero {
  position: relative;

  .first-section {
    height: calc(100vh + 100px);
  }

  .content {
    display: flex;
    width: 100%;
    height: 100%;

    .resume {
      flex-basis: 25%;
      background-color: #15aaaa;

      p {
        text-align: center;
        font-weight: 400;
        font-size: 25px;
      }

      .description {
        background-color: #0d6666;
        border-radius: 0 15px;
        p {
          text-align: left;
          font-weight: 400;
          font-size: 25px;
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
