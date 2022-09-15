<template>
  <div v-if="isSmall">
    <section-mobile-portfolio-header></section-mobile-portfolio-header>
    <section-mobile-portfolio-previews></section-mobile-portfolio-previews>
  </div>
  <div v-else>
    <section-porfolio-header></section-porfolio-header>
    <section-portfolio-previews></section-portfolio-previews>
  </div>
</template>

<script>

export default {
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
