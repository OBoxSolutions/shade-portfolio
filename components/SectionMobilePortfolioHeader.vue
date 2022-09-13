<template>
  <div class="section-header">
    <div class="__top">
      <img class="__top-img" src="/portfolio-header.gif" alt="">
    </div>
    <div class="__bottom">
      <div class="__bottom-text-wraper">
        <div class="__text">
          <p>There’s not a lot to show here at the moment because the company is relatively new. But don’t worry, one client at a time and it’ll build up. When you see a different message here, it means that the portfolio got richer! For now, interact with the built websites and see for yourself.</p>
        </div>
      </div>
      <div class="bottom-transtion">
      </div>
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
    .__top-img{
      width: 100%;
      height: 100%;
    }

  }
  .__bottom{
    height: 50%;
    background-color: #FFAC06;
    display: flex;
    flex-direction: column;
    .__bottom-text-wraper{
      height: 60%;
      display: flex;
      justify-content: center;
      align-items: center;

      .__text{
      background-color: #CC8800;
      width: 90%;
      border: 2px solid #000000;
      box-shadow: inset 0px 4px 7px 2px rgba(0, 0, 0, 0.25);
      border-radius: 1rem;

      p{
        padding: 1px .5rem;
        font-family: 'Lucida Console', sans-serif;
        font-style: normal;
        font-weight: 400;
        line-height: 1rem;
        text-align: center;
        color: #FFFFFF;
      }
    }
    }
    .bottom-transtion{
      height: 40%;
      background: url('/portfolio-transition.svg') center no-repeat;
      background-size: cover;
    }
  }
}
</style>
