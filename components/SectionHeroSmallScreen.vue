<template>
  <div class="section-hero">
    <div class="logo-wrapper px-1 py-3 mx-2 mt-9">
      <img src="/logo.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SectionHero',
}
</script>

<style scoped lang="scss">
.section-hero {
  position: relative;
  height: calc(100vh + 100px);
  display: flex;
  flex-direction: column;

  .logo-wrapper {
    border: 2px solid black;
    background-color: #15aaaa;
  }
}
</style>
