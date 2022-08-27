<template>
  <div class="about-us-section">
    <section-about-us-headers
      class="section-headers"
    ></section-about-us-headers>
    <simple-cube title="Lorem Ipsum" class="section-description mx-auto">
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore rem
        vitae facere fugiat voluptatem corrupti repudiandae voluptates eligendi,
        itaque ipsam quos odio consectetur alias. Ratione magni qui eligendi
        illo id!
      </p>
    </simple-cube>
    <section-about-us-partnership></section-about-us-partnership>
    <section-about-us-commitment></section-about-us-commitment>
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
  max-width: 900px;
}

.section-partnership {
  width: 100%;
  margin: 0;
}
</style>
