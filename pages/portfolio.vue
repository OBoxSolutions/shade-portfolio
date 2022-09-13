<template>
  <div>
    <section-mobile-portfolio-header v-if="isSmall"></section-mobile-portfolio-header>
    <section-porfolio-header v-else></section-porfolio-header>
    <section-portfolio-previews></section-portfolio-previews>
  </div>
</template>

<script>
import SectionMobilePortfolioHeader from '~/components/SectionMobilePortfolioHeader.vue'

export default {
  components: { SectionMobilePortfolioHeader },
  data() {
    return {
      isSmall: false,
    }
  },
  mounted() {
    this.$breakpoints.on('xs', {
      enter: () => {
        this.setSmallScreen(true)
      },
      leave: () => {
        this.setSmallScreen(false)
      },
    })
  },
  methods: {
    setSmallScreen(isSmall) {
      this.isSmall = isSmall
    },
  },
}
</script>

<style scoped lang="scss">

</style>
