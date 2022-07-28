<template>
  <div>
    <div class="section-head">
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

<style scoped>
.section-head {
  display: flex;
  width: 100%;
}

.first-header,
.second-header {
  width: 100%;
  padding: 20px 0px;
  text-align: center;
  border: 3px solid black;
}

.first-header {
  background-color: #ef4242;
  text-transform: uppercase;
  font-size: 2rem;
  border-left: 0;
}

.second-header {
  background-color: #d43737;
  border-right: 0;
}
</style>
