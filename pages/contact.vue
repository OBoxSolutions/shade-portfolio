<template>
  <div>
    <section-contact-header
      ref="formHeader"
      v-model="form"
    ></section-contact-header>
    <section-contact-body
      ref="formBody"
      v-model="form"
      @submit="submitContact"
    ></section-contact-body>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import SectionContactHeader from '~/components/SectionContactHeader.vue'
import SectionContactBody from '~/components/SectionContactBody.vue'

import { createContact } from '~/services/contact'

export default {
  components: { SectionContactHeader, SectionContactBody },
  data() {
    return {
      form: {
        name: '',
        subject: '',
        social: 'Email',
        contact: '',
        text: '',
      },
      success: undefined,
    }
  },
  methods: {
    ...mapMutations(['addMessage']),
    async submitContact() {
      const isValid = await this.validate()
      if (!isValid) return

      try {
        createContact(this.form)

        this.addMessage({
          type: 'success',
          text: 'Contact inserted successfully',
        })
        this.setState(true)
      } catch (error) {
        this.setState(false)
        this.addMessage({
          type: 'error',
          text: error.message || 'There was an error trying to contact us',
        })
      }
    },

    async validate() {
      const isFormHeaderValid = await this.$refs.formHeader.validate()
      const isFormBodyValid = await this.$refs.formBody.validate()

      return isFormHeaderValid && isFormBodyValid
    },

    setState(state) {
      this.success = state
      setTimeout(() => {
        this.success = undefined
      }, 2000)
    },
  },
}
</script>

<style scoped lang="scss"></style>
