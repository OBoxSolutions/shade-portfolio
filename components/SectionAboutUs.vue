<template>
  <div class="about-us-section">
    <section-about-us-headers
      class="section-headers"
    ></section-about-us-headers>
    <simple-cube title="Lorem Ipsum" class="section-description">
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore rem
        vitae facere fugiat voluptatem corrupti repudiandae voluptates eligendi,
        itaque ipsam quos odio consectetur alias. Ratione magni qui eligendi
        illo id!
      </p>
    </simple-cube>
    <empty-cube-right title="Partnership" class="section-partnership">
      WebDo is very grateful for every new quality connection it gets to make
      while on this journey, that’s why we take communication with clients very
      seriously. Our colleagues will always be open to your ideas and give you
      the time necessary to build an idea about your product that you and we
      will be both proud of. Our website creators will always keep a friendly
      and suitable environment because that is when the best ideas are born. I
      truly hope you get to experience it for yourself.
    </empty-cube-right>
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

.section-partnership {
  width: 100%;
  margin: 0;
}
</style>
