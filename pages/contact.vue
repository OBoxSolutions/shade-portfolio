<template>
  <div>
    <section-contact-header v-model="form"></section-contact-header>
    <section-contact-body
      v-model="form"
      @submit="submitContact"
    ></section-contact-body>
  </div>
</template>

<script>
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
    submitContact() {
      try {
        createContact(this.form)
        this.setState(true)
      } catch (error) {
        this.setState(false)
      }
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
