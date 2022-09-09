<template>
  <div>
    <app-navbar></app-navbar>
    <section-contact-header></section-contact-header>
    <section-contact-body></section-contact-body>
  </div>
</template>

<script>
import AppNavbar from '~/components/AppNavbar.vue'
import SectionContactHeader from '~/components/SectionContactHeader.vue'
import SectionContactBody from '~/components/SectionContactBody.vue'
export default {
  components: { AppNavbar, SectionContactHeader, SectionContactBody }

}
</script>

<style scoped lang="scss">

</style>
