<template>
  <div>
    <section-hiring-header></section-hiring-header>
    <section-hiring-information-form></section-hiring-information-form>
    <section-hiring-questions></section-hiring-questions>
    <hiring-submit-button></hiring-submit-button>
  </div>
</template>

<script>
import SectionHiringHeader from '~/components/SectionHiringHeader.vue'
import SectionHiringQuestions from '~/components/SectionHiringQuestions.vue'
import HiringSubmitButton from '~/components/HiringSubmitButton.vue'
export default {
  name: 'HiringPage',
  components: {
    SectionHiringHeader,
    SectionHiringQuestions,
    HiringSubmitButton,
  },
}
</script>

<style scoped lang="scss"></style>
