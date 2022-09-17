<template>
  <div v-if="breakpoints.isSmAndDown">
    <section-mobile-portfolio-header></section-mobile-portfolio-header>
    <section-mobile-portfolio-previews></section-mobile-portfolio-previews>
  </div>
  <div v-else>
    <section-porfolio-header></section-porfolio-header>
    <section-portfolio-previews></section-portfolio-previews>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['breakpoints']),
  },
}
</script>

<style scoped lang="scss"></style>
