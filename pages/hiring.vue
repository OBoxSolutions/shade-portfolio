<template>
  <div v-if="breakpoints.isSmAndDown">
    <section-mobile-hiring-header />
    <section-mobile-hiring-information-form ref="formBasicInfo" v-model="form" />
    <section-mobile-hiring-questions
      v-model="form"
      :loading="loading"
      :disabled="disabled"
      @submit="submitHiringRequest" />
  </div>
  <div v-else>
    <section-hiring-header />
    <section-hiring-information-form ref="formBasicInfo" v-model="form" />
    <section-hiring-questions v-model="form" />
    <hiring-submit-button
      :loading="loading"
      :disabled="disabled"
      @submit="submitHiringRequest" />
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  name: 'HiringPage',
  data() {
    return {
      disabled: false,
      loading: false,
      form: {
        name: '',
        email: '',
        country: '',
        applying_for: 'Full-Stack Web Developer',
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
  methods: {
    ...mapMutations(['addMessage']),
    ...mapActions(['storeHiringRequest']),
    async validate() {
      return await this.$refs.formBasicInfo.validate()
    },
    async submitHiringRequest(){
      const isValid = await this.validate()
      if (!isValid) return

      this.disabled = true
      this.loading = true

      try{
        await this.storeHiringRequest(this.form)
      }
      catch {
        this.addMessage({
          type: 'error',
          text: 'Some form values are missing',
        })
      }
      this.disabled = false
      this.loading = false
    }
  }
}
</script>

<style scoped lang="scss"></style>
