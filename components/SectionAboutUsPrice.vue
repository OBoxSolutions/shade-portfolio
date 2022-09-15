<template>
  <div class="section-about-us-price">
    <section-about-us-price-small-screen
      v-if="$breakpoints.isSmAndDown"
    ></section-about-us-price-small-screen>
    <section-about-us-price-big-screen
      v-else
    ></section-about-us-price-big-screen>
  </div>
</template>

<script>
export default {
  name: 'SectionAboutUsPrice',
}
</script>
