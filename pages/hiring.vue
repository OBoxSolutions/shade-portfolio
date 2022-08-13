<template>
  <div>
    <section-hero-navbar class="nav"></section-hero-navbar>
    <section-hiring-header></section-hiring-header>
  </div>
</template>

<script>
import SectionHeroNavbar from '~/components/SectionHeroNavbar.vue'
import SectionHiringHeader from '~/components/SectionHiringHeader.vue'
export default {
  name: 'HiringPage',
  components: { SectionHeroNavbar, SectionHiringHeader },

}
</script>

<style scoped lang="scss">
.nav{
  position: absolute;
}

</style>
