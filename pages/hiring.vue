<template>
  <div>
    <section-hero-navbar class="nav"></section-hero-navbar>
    <section-hiring-header></section-hiring-header>
    <section-hiring-information-form></section-hiring-information-form>
    <section-hiring-questions></section-hiring-questions>
  </div>
</template>

<script>
import SectionHeroNavbar from '~/components/SectionHeroNavbar.vue'
import SectionHiringHeader from '~/components/SectionHiringHeader.vue'
import SectionHiringQuestions from '~/components/SectionHiringQuestions.vue'
export default {
  name: 'HiringPage',
  components: { SectionHeroNavbar, SectionHiringHeader, SectionHiringQuestions },

}
</script>

<style scoped lang="scss">
.nav{
  position: absolute;
}

</style>
