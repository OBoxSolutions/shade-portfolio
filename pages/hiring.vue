<template>
  <div v-if="breakpoints.isSmAndDown">
    <section-mobile-hiring-header />
    <section-mobile-hiring-information-form />
    <section-mobile-hiring-questions />
  </div>
  <div v-else>
    <section-hiring-header />
    <section-hiring-information-form />
    <section-hiring-questions />
    <hiring-submit-button />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'HiringPage',
    computed: {
    ...mapState(['breakpoints']),
  },
}
</script>

<style scoped lang="scss"></style>
