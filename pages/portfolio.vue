<template>
  <div>
    <section-porfolio-header></section-porfolio-header>
    <section-portfolio-previews></section-portfolio-previews>
  </div>
</template>

<script>
import SectionPorfolioHeader from '~/components/SectionPorfolioHeader.vue'
import SectionPortfolioPreviews from '~/components/SectionPortfolioPreviews.vue'
export default {
  components: { SectionPorfolioHeader, SectionPortfolioPreviews },

}
</script>

<style scoped lang="scss">
.nav{
  position: absolute;
  z-index: 10;
}
</style>
