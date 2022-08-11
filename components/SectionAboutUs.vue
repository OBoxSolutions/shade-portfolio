<template>
  <div class="about-us-section">
    <section-about-us-headers
      class="section-headers"
    ></section-about-us-headers>
    <simple-cube title="Lorem Ipsum" description="Lorem ipsum"></simple-cube>
  </div>
</template>

<script>
import SectionAboutUsHeaders from './SectionAboutUsHeaders.vue'

export default {
  name: 'SectionAboutUs',
  components: {
    SectionAboutUsHeaders,
  },
}
</script>

<style scoped>
.about-us-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section-headers {
  z-index: 100;
}

.section-description {
  top: -40px;
  z-index: 10;
}
</style>
