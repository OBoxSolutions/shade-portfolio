<template>
  <div class="section-portfolio-previews">
    <div class="section-portfolio-previews__title">
      <img src="/portfolio-title.svg" alt="portfolio">
      <div class="section-portfolio-previews__title-top" />
      <div class="section-portfolio-previews__title-bottom" />
    </div>

    <div class="section-portfolio-previews__content">
      <div v-for="(preview, index) in portfolio" :key="`preview-${index}`" class="section-portfolio-preview">
        <div class="section-portfolio-preview__image">
          <img :src="preview.image" alt="preview-image">
        </div>

        <div class="section-portfolio-preview__bottom">
          <div class="section-portfolio-preview__green-middle" />
          <a target="_blanck" :href="preview.link">View Site</a>
        </div>

      </div>

      <base-button only-bottom class="portfolio-button button--red">
        <h1>Press Start</h1>
      </base-button>

    </div>
    <div class="section-portfolio-previews__bottom">
      <h1 class="bottom-title">And many more!</h1>
      <div class="bottom-footer"></div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      portfolio: [
        { name: 'Unborder', image: '/portfolio/unborder.png', link: '#' },
        { name: 'Cleaning Services', image: '/portfolio/cleaning-services.png', link: '#' },
        { name: 'Caboo', image: '/portfolio/cabbo.png', link: '#' },
        { name: 'Flowers', image: '/portfolio/flowers.png', link: '#' },
      ],
    }
  }
}
</script>

<style scoped lang="scss">
.section-portfolio-previews{
  width: 100%;

  .section-portfolio-previews__title{
    transform-style: preserve-3d;
    perspective: 300px;
    perspective-origin: bottom;
    img{
      position: relative;
      width: 100%;
      z-index: 10;
    }

    .section-portfolio-previews__title-top{
      background-color: #00D2F9;
      position: absolute;
      top: 0;
      height: 80%;
      width: 100%;

    }
    .section-portfolio-previews__title-bottom{
      position: absolute;
      width: 100%;
      height: 20%;
      bottom: 0;
      background-color: #5A55F8;
      border-top: 1px solid #000000;
    }
  }

  .section-portfolio-previews__content{
    width: 100%;
    background-color: #071C50;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 6rem;
    padding: 6rem 0;

    .portfolio-button{
      padding: 0 !important;
      // border-radius: 5px;
      width: 35%;

      transform-style: preserve-3d;
      perspective: 100px;
      perspective-origin: bottom;

      h1{
        font-size: 3.75rem;
        width: 70%;
        font-weight: 400;
        margin: 1rem auto;
        color: #ffffff;
      }
      &:active {
        transform: translateY(10px);
      }
    }

    .section-portfolio-preview{
      width: 90%;

      .section-portfolio-preview__image > img{
        width: 100%;
      }
    }


    .section-portfolio-preview__bottom{
      position: relative;
      height: 110px;
      z-index: 100;
      background-image: linear-gradient(90deg, #FFAC06 33.33%, #5A55F8 33.33%, #5A55F8 66.66%, #FFAC06 66.66%);
      text-align: center;
      clip-path: polygon(100% 0, 100% 40%, 66% 68%, 34% 68%, 0 40%, 0 0);

      .section-portfolio-preview__green-middle{
        position: absolute;
        top: 0;
        width: 100%;
        height: 80px;
        background-color: #15AAAA;
        z-index: 10;
        clip-path: polygon(100% 0, 66% 28%, 34% 28%, 0% 0%);
      }

      a{
        display: block;
        height: 100%;
        width: 20%;
        margin: auto;

        line-height: 100px;
        font-size: 1.5rem;
        text-align: center;
        color: #000000;
        text-decoration: none;
      }
    }
  }
  .section-portfolio-previews__bottom{
    height: 70px;

    .bottom-title{
      margin: 0;
      height: 50px;
      background-color: #49EA76;

      font-weight: 400;
      line-height: 60px;
      text-align: center;
      color: #FFFFFF;

    }
    .bottom-footer{
      height: 16px;
      background-color: #33B758;
      border-top: 2px solid #000000;
      border-bottom: 2px solid #000000;
    }
  }
}


</style>
