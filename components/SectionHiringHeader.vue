<template>
  <div class="section-header">
    <div class="section-header__description">
      <div class="section-header__outside-box">
        <div class="section-header__inside-box">
          <p>So, want to work for us huh? Alright. Fill out the basic information thing and answer all the questions provided below. Once you’re finished, relax a little while we finish our bit and reach out to you. By the way, DO NOT misinput your email. Make sure the email is typed correctly and that it’s the one you have access to. I mean we know that’s it’s pretty simple to just type in your email, but also, it’s pretty frustrating when people don’t do that!!!</p>
        </div>
      </div>
    </div>
    <div class="section-header__image">
      <img src="/retro-macintosh.png" alt="retro-macintosh" />
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">

.section-header{
  background: url('/hiring-cover-up.png');
  display: flex;
  width: 100%;

  .section-header__description{

    .section-header__outside-box{
      display: flex;
      justify-content: center;
      align-items: center;

      background-color: #FFAC06;
      width: 25em;
      height: 97%;
      margin: 7.5% 0 0 4em;
      border: 1px solid #000000;
    }

    .section-header__inside-box{
      background-color: #CC8800;
      width: 80%;
      height: 90%;
      margin-top: auto;
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
        font-size: 1.4rem;
        line-height: 1.5rem;
        text-align: center;
        color: #FFFFFF;
      }
    }
  }

  .section-header__image{
    margin-left: auto;

    img{
      margin-top: 2rem;
      width: 100%;
    }
  }
}

</style>
