<template>
  <div class="section-header">
    <div class="__top">

    </div>
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
    margin-top: 4rem;
    height: 50%;
    background: url('/hiring-cover-up.png');
  }
  .__bottom{
    height: 50%;
    background-color: #FFAC06;
    display: flex;
    flex-direction: column;
  }
}
</style>
