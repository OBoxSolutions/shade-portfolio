<template>
  <div>
    <section-contact-header v-model="form"></section-contact-header>
    <section-contact-body v-model="form"></section-contact-body>
  </div>
</template>

<script>
import SectionContactHeader from '~/components/SectionContactHeader.vue'
import SectionContactBody from '~/components/SectionContactBody.vue'
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
}
</script>

<style scoped lang="scss"></style>
