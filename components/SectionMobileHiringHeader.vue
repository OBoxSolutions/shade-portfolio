<template>
  <div class="section-header">
    <div class="__top">
      <div class="title-container">
        <h1>Every Pixel delivered with care.</h1>
      </div>
    </div>
    <div class="__bottom">
      <div class="__bottom-text-wraper">
        <div class="__text">
          <p>So, want to work for us huh? Alright. Fill out the basic information thing and answer all the questions provided below. Once you’re finished, relax a little while we finish our bit and reach out to you. By the way, DO NOT misinput your email. Make sure the email is typed correctly and that it’s the one you have access to. I mean we know that’s it’s pretty simple to just type in your email, but also, it’s pretty frustrating when people don’t do that!!!</p>
        </div>
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
    background: url('/retro-macintosh.png') right no-repeat, url('/hiring-cover-up.png');
    background-size: contain;
    background-position-x: calc(100% + 50px);
    background-position-y: calc(100% + 5px);

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

    .__bottom-text-wraper{
      height: 100%;
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
  }
}
</style>
