<template>
  <div class="section-portfolio-previews">
    <div class="section-portfolio-previews__title">
      <div class="section-portfolio-previews__title-top">
        <img src="/portfolio-title.svg" alt="portfolio">
      </div>
      <div class="section-portfolio-previews__title-bottom"></div>
    </div>

    <div class="section-portfolio-previews__content">
      <div v-for="(preview, index) in previews" :key="`preview-${index}`" class="section-portfolio-preview">
        <div class="section-portfolio-preview__image">
          <img :src="preview.image" alt="preview-image">
        </div>

        <div class="section-portfolio-preview__bottom">
          <div class="section-portfolio-preview__green-middle" />
          <a target="_blanck" :href="preview.link">View Site</a>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      previews: [
        { image: '/portfolio/unborder.png', link: '' },
        { image: '/portfolio/cleaning-services.png', link: '' },
        { image: '/portfolio/cabbo.png', link: '' },
        { image: '/portfolio/flowers.png', link: '' },
      ],
    }
  },

}
</script>

<style scoped lang="scss">
.section-portfolio-previews{
  width: 100%;

  .section-portfolio-previews__title{
    height: 190px;

    .section-portfolio-previews__title-top{
      background-color: #00D2F9;
      height: 150px;
      img{
        width: 100%;
      }
    }
    .section-portfolio-previews__title-bottom{
      height: 39px;
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

    .section-portfolio-preview{
      width: 90%;
    }

    .section-portfolio-preview__image{
      width: 100%;
      img{
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
}
</style>
