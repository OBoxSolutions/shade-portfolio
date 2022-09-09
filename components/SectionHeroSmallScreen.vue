<template>
  <div class="section-hero">
    <div class="logo-wrapper px-1 py-3 mx-2 mt-9">
      <img src="/logo.svg" alt="" />
    </div>
    <p class="mx-2">Every pixel delivered with care.</p>
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
  background-color: #ea5555;

  .logo-wrapper {
    border: 2px solid black;
    background-color: #15aaaa;
  }
}

p {
  text-align: center;
  font-weight: 400;
  font-size: 32px;
  text-align: left;
}
</style>
