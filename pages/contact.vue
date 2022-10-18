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

import api from '@/api/admin'

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
    }
  },
  methods: {
    submitContact() {
      api.post('messages', this.form)
    },
  },
}
</script>

<style scoped lang="scss"></style>
