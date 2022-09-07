<template>
  <div>
    <section-hero-navbar class="nav"></section-hero-navbar>
    <section-contact-header></section-contact-header>
    <section-contact-body></section-contact-body>
  </div>
</template>

<script>
import SectionHeroNavbar from '~/components/SectionHeroNavbar.vue'
import SectionContactHeader from '~/components/SectionContactHeader.vue'
import SectionContactBody from '~/components/SectionContactBody.vue'
export default {
  components: { SectionHeroNavbar, SectionContactHeader, SectionContactBody }

}
</script>

<style scoped lang="scss">
.nav{
    position: absolute;
    z-index: 10;
    width: 100%;
    display: flex;
    justify-content: center;
    display: none;
}
</style>
