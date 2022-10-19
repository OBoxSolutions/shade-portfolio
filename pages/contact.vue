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
        this.success = true
      } catch (error) {
        this.success = false
      }
    },
  },
}
</script>

<style scoped lang="scss"></style>
