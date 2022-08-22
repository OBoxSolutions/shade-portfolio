<template>
  <div class="container">
    <div class="press-start-container">
      <base-button class="w-full"> Press start </base-button>
    </div>
    <div class="divider"></div>
    <div class="hire-team-container">
      <p>Hire a team today!</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SectionHeroFoot',
}
</script>

<style scoped lang="scss">
$background-color: #d6932f;
$border-style: 1px solid #877432;

.container {
  display: flex;
  width: 100%;
}

.press-start-container {
  background-color: $background-color;
  height: 400px;
  width: 35%;
  border: $border-style;
}

.divider {
  background-color: $background-color;
  width: 30%;
  border-top: $border-style;
}

.hire-team-container {
  background-color: $background-color;
  width: 35%;
  border: $border-style;
  padding: 5px;
}
</style>
