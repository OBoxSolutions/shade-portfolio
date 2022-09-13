<template>
  <div class="section-header">
    <div class="section-header__description">
      <div class="section-header__outside-box">
        <p class="title">
          Every pixel delivered with care.
        </p>
        <div class="section-header__inside-box">
          <p>There’s not a lot to show here at the moment because the company is relatively new. But don’t worry, one client at a time and it’ll build up. When you see a different message here, it means that the portfolio got richer! For now, interact with the built websites and see for yourself.</p>
        </div>
      </div>
    </div>
    <div class="section-header__bottom">
      <img src="/portfolio-transition.svg" alt="transition" />
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.section-header{
  position: relative;
  width: 100%;
  height: 840px;
  background: url('/portfolio-header.gif') repeat;
  background-position: -50% 10%;
  padding-top: 8rem;

  .section-header__bottom{
    position: absolute;
    width: 100%;
    bottom: -2px;
  }

  .section-header__description{
    width: 100%;
    height: 100%;

    .section-header__outside-box{
      display: flex;
      flex-direction: column;
      gap: 2.5rem;
      justify-content: center;
      align-items: center;

      background-color: #FFAC06;
      width: 25em;
      height: 99%;
      margin-left: 3rem;
      border: 1px solid #000000;

      .title{
        margin-top: 6rem;
        padding: 0 1rem;
        text-align: center;
        font-size: 20px;
        line-height: 20px;
        color: #000000;
      }
    }

    .section-header__inside-box{
      background-color: #CC8800;
      width: 80%;
      height: 100%;
      border: 2px solid #000000;
      border-bottom: 0;
      box-shadow: inset 0px 4px 7px 2px rgba(0, 0, 0, 0.25);
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;

      p{
        padding: 1px .5rem;
        font-family: 'Lucida Console', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 1.3rem;
        line-height: 1.5rem;
        text-align: center;
        color: #FFFFFF;
      }
    }
  }
}

</style>
