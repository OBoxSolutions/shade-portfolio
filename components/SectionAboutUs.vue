<template>
  <div class="about-us-section">
    <section-about-us-headers
      class="section-headers"
    ></section-about-us-headers>
    <app-card v-if="breakpoints.isSmAndDown" class="section-description-card">
      <p>
        NEEDS REWRITING, LEAVE AS TEMPLATE FOR LATER TO BE FILLED TEXT.
      </p>
    </app-card>
    <simple-cube v-else class="section-description mx-auto" bottom>
      <p>
        NEEDS REWRITING, LEAVE AS TEMPLATE FOR LATER TO BE FILLED TEXT.
      </p>
    </simple-cube>
    <section-about-us-partnership class="mt-5"></section-about-us-partnership>
    <section-about-us-commitment class="mt-5"></section-about-us-commitment>
    <section-about-us-style-and-communication
      class="mt-5"
    ></section-about-us-style-and-communication>
    <section-about-us-price class="section mt-8"></section-about-us-price>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import SectionAboutUsHeaders from './SectionAboutUsHeaders.vue'

export default {
  name: 'SectionAboutUs',
  components: {
    SectionAboutUsHeaders,
  },
  computed: {
    ...mapState(['breakpoints']),
  },
}
</script>

<style lang="scss" scoped>
.about-us-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  background: url('~@/static/principal-page-background.svg') #d6932f;
  background-size: cover;
}

.section-headers {
  z-index: 100;
}

.section-description {
  top: -40px;
  z-index: 10;
  max-width: 900px;
}

.section-description-card {
  position: relative;
  top: -50px;
  margin: 0px 2em;
  text-align: center;
}

.section-partnership,
.section {
  width: 100%;
  margin: 0;
}
p{
  font-family: 'Consolas' !important;
  font-size: 1em;
  line-height: 25px;
  color: #000000;
}
</style>
