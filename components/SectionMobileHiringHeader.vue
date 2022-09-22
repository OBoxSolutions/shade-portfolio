<template>
  <div class="section-header">
    <div class="__top">
      <div class="title-container">
        <h1>Every Pixel delivered with care.</h1>
      </div>
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
    background: url('/retro-macintosh.png') right no-repeat, url('/hiring-cover-up.png');
    background-size: contain;
    background-position-x: calc(100% + 50px);

    .title-container{
      width: 10rem;
      background: #FFAC06;
      border-radius: 5px;
      padding: 1rem;
      margin: 30px 0 0 35px;
      h1{
        margin: 0;
        width: 100%;
        font-size: 13px;
        line-height: 16px;
        text-align: center;
        color: #000000;
      }
    }
  }
  .__bottom{
    height: 50%;
    background-color: #FFAC06;
    display: flex;
    flex-direction: column;
  }
}
</style>
