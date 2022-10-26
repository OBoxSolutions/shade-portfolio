<template>
  <div v-if="breakpoints.isSmAndDown">
    <section-mobile-hiring-header />
    <section-mobile-hiring-information-form v-model="form" />
    <section-mobile-hiring-questions v-model="form" />
  </div>
  <div v-else>
    <section-hiring-header />
    <section-hiring-information-form v-model="form" />
    <section-hiring-questions v-model="form" />
    <hiring-submit-button :form="form" />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'HiringPage',
  data() {
    return {
      form: {
        name: '',
        email: '',
        country: '',
        applying_for: '',
        birthdate: '',
        question_one: '',
        question_two: '',
        question_three: '',
        question_four: '',
        question_five: '',
        question_six: '',
        question_seven: '',
        question_eight: '',
        question_nine: '',
      },
    }
  },
  computed: {
    ...mapState(['breakpoints']),
  },
}
</script>

<style scoped lang="scss"></style>
