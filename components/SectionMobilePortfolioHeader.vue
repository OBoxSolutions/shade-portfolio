<template>
  <div class="section-header">
    <div class="__top" />
    <div class="__bottom">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.section-header{
  height: 100vh;
  display: flex;
  flex-direction: column;

  .__top{
    height: calc(50% + 4rem);
    background-color: red;
  }
  .__bottom{
    height: 50%;
    background-color: blue;
  }
}
</style>
