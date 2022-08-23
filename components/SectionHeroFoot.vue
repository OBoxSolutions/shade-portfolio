<template>
  <div class="content">
    <div class="press-start-container">
      <base-button class="w-full py-1"> Press start </base-button>
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

.content {
  display: flex;
  width: 100%;
  align-items: end;
}

.press-start-container {
  background-color: $background-color;
  height: 300px;
  width: 35%;
  border: $border-style;
  padding: 40px;
  border-radius: 0 10px 0 0;
  font-weight: 400;
  font-size: 80px;

  .py-1 {
    padding-top: 16px !important;
    padding-bottom: 16px !important;
  }
}

.divider {
  background-color: $background-color;
  height: 200px;
  width: 30%;
  border-top: $border-style;
}

.hire-team-container {
  height: 310px;
  background-color: $background-color;
  width: 35%;
  border: $border-style;
  padding: 20px;
  border-radius: 10px 0 0 0;
}
</style>
