<template>
  <div class="about-us-section">
    <section-about-us-headers
      class="section-headers"
    ></section-about-us-headers>
    <app-card v-if="isScreenSmall">
      WebDo started in the April of 2022, with a small but very talented team of
      designers, programmers, and managers to deliver what you deserve, and that
      is the highest quality you could want. We've been pushing ever since, and
      we hope that you will be a part of this journey! Our main focus is to
      provide top-notch website design services to the client, with the least
      trouble possible. If you're working with us, it's about as straightforward
      as it gets. You contact us, we assign a special group of people just for
      you, to make your website the best as it can be. Normally you would have
      to individually hire several people to do your project. You would also
      have to manage them, pay them separately, and above all hope that they are
      trustworthy and have enough experience to be worth your money. Everything
      mentioned above, WebDo takes care of instead of you. All you have to do is
      relax and watch your project grow! Also laugh at people for not choosing
      WebDo while you're at it. Our design agency strives to become the most
      convenient and skillful web development company out there, and by ordering
      from us you are helping to reach this goal. The part about bullying other
      companies is not supposed to be taken seriously, unless...
    </app-card>
    <simple-cube v-else title="Lorem Ipsum" class="section-description mx-auto">
      <p>
        WebDo started in the April of 2022, with a small but very talented team
        of designers, programmers, and managers to deliver what you deserve, and
        that is the highest quality you could want. We've been pushing ever
        since, and we hope that you will be a part of this journey! Our main
        focus is to provide top-notch website design services to the client,
        with the least trouble possible. If you're working with us, it's about
        as straightforward as it gets. You contact us, we assign a special group
        of people just for you, to make your website the best as it can be.
        Normally you would have to individually hire several people to do your
        project. You would also have to manage them, pay them separately, and
        above all hope that they are trustworthy and have enough experience to
        be worth your money. Everything mentioned above, WebDo takes care of
        instead of you. All you have to do is relax and watch your project grow!
        Also laugh at people for not choosing WebDo while you're at it. Our
        design agency strives to become the most convenient and skillful web
        development company out there, and by ordering from us you are helping
        to reach this goal. The part about bullying other companies is not
        supposed to be taken seriously, unless...
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
import SectionAboutUsHeaders from './SectionAboutUsHeaders.vue'

export default {
  name: 'SectionAboutUs',
  components: {
    SectionAboutUsHeaders,
  },
  data() {
    return {
      isScreenSmall: false,
    }
  },
  mounted() {
    this.$breakpoints.on('xs sm', {
      enter: () => {
        this.setSmallScreen(true)
      },
      leave: () => {
        this.setSmallScreen(false)
      },
    })
  },
  methods: {
    setSmallScreen(isScreenSmall) {
      this.isScreenSmall = isScreenSmall
    },
  },
}
</script>

<style scoped>
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

.section-partnership,
.section {
  width: 100%;
  margin: 0;
}
</style>
