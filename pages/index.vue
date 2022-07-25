<template>
  <div>
    <section-hero></section-hero>
    <div class="content-sections">
      <div class="content-sections__img"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style scoped>
.content-sections {
  background-color: #d6932f;
}
.content-sections__img {
  background: url('/principal-page-background.svg');
}
</style>
