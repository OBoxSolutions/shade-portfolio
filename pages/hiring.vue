<template>
  <div>
    <section-hero-navbar class="nav"></section-hero-navbar>
    <section-hiring-header></section-hiring-header>
    <section-hiring-information-form></section-hiring-information-form>
    <section-hiring-questions></section-hiring-questions>
    <hiring-submit-button></hiring-submit-button>
  </div>
</template>

<script>
import SectionHeroNavbar from '~/components/SectionHeroNavbar.vue'
import SectionHiringHeader from '~/components/SectionHiringHeader.vue'
import SectionHiringQuestions from '~/components/SectionHiringQuestions.vue'
import HiringSubmitButton from '~/components/HiringSubmitButton.vue'
export default {
  name: 'HiringPage',
  components: { SectionHeroNavbar, SectionHiringHeader, SectionHiringQuestions, HiringSubmitButton },

}
</script>

<style scoped lang="scss">
.nav{
  position: absolute;
}

</style>
