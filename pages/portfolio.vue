<template>
  <div>
    <section-hero-navbar class="nav"></section-hero-navbar>
    <section-porfolio-header></section-porfolio-header>
    <section-portfolio-previews></section-portfolio-previews>
  </div>
</template>

<script>
import SectionHeroNavbar from '~/components/SectionHeroNavbar.vue'
import SectionPorfolioHeader from '~/components/SectionPorfolioHeader.vue'
import SectionPortfolioPreviews from '~/components/SectionPortfolioPreviews.vue'
export default {
  components: { SectionHeroNavbar, SectionPorfolioHeader, SectionPortfolioPreviews },

}
</script>

<style scoped lang="scss">
.nav{
  position: absolute;
  z-index: 10;
}
</style>
