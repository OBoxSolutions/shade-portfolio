<template>
  <div>
    <div class="section-head mb-8">
      <h2 class="first-header m-0">About us</h2>
      <h2 class="second-header m-0">Why we're here</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SectionAboutUs',
}
</script>

<style scoped lang="scss">
$angle-of-inclination: 2deg;

.section-head {
  display: flex;
  width: 100%;
  perspective: 200px;
}

.first-header,
.second-header {
  width: 100%;
  padding: 20px 0px;
  text-align: center;
  border: 3px solid black;
  z-index: 100;
}

.first-header {
  background-color: #ef4242;
  text-transform: uppercase;
  font-size: 4.4rem;
  border-left: 0;
  transform: skewY(-$angle-of-inclination);
  perspective-origin: right;
}

.second-header {
  background-color: #d43737;
  border-right: 0;
  font-size: 2.4rem;
  transform: skewY($angle-of-inclination);
  perspective-origin: left;
}
</style>
