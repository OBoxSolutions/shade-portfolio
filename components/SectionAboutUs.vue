<template>
  <div class="about-us-section">
    <section-about-us-headers></section-about-us-headers>
    <section-about-use-description></section-about-use-description>
  </div>
</template>

<script>
import SectionAboutUsHeaders from './SectionAboutUsHeaders.vue'
import SectionAboutUseDescription from './SectionAboutUseDescription.vue'

export default {
  name: 'SectionAboutUs',
  components: {
    SectionAboutUsHeaders,
    SectionAboutUseDescription,
  },
}
</script>

<style scoped>
.about-us-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
