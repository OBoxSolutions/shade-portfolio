<template>
    <div class="section-portfolio-previews">
      <div class="section-portfolio-previews__title">
        <div class="section-portfolio-previews__title-top">
          <img src="/portfolio-title.svg" alt="portfolio">
        </div>
        <div class="section-portfolio-previews__title-bottom"></div>
      </div>

      <div class="section-portfolio-previews__content">
        <div v-for="(preview, index) in getPortfolio" :key="`preview-${index}`" class="section-portfolio-preview">
          <div class="section-portfolio-preview__image">
            <img :src="preview.image" alt="preview-image">
          </div>

          <div class="section-portfolio-preview__bottom">
            <div class="section-portfolio-preview__green-middle" />
            <a target="_blanck" :href="preview.link">View Site</a>
          </div>

        </div>

        <!-- <base-button class="portfolio-button">
          <h1>Press Start</h1>
        </base-button> -->

      </div>

    <div class="section-portfolio-previews__botton">
      <h1 class="bottom-title">And many more!</h1>
      <div class="bottom-footer"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  computed: {
    ...mapGetters(['getPortfolio']),
  },

}
</script>

<style lang="scss" scoped>
  .section-portfolio-previews__title{
    height: 90px;

    .section-portfolio-previews__title-top{
      background-color: #00D2F9;
      height: 70px;
      img{
        width: 100%;
      }
    }
    .section-portfolio-previews__title-bottom{
      height: 19px;
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

    .section-portfolio-preview__image > img{
      width: 100%;
    }
  }

  .section-portfolio-previews__botton{
    height: 70px;

    .bottom-title{
      margin: 0;
      height: 80%;
      background-color: #49EA76;
      font-size: 1.2rem;
      font-weight: 400;
      line-height: 60px;
      text-align: center;
      color: #FFFFFF;

    }
    .bottom-footer{
      height: 20%;
      background-color: #33B758;
      border-top: 2px solid #000000;
      border-bottom: 2px solid #000000;
    }
  }

  @media(max-width: 640px) {
  .section-portfolio-previews__title{
    height: 80px !important;
    .section-portfolio-previews__title-top{
      height: 60px !important;
    }
  }
}
  @media(max-width: 500px) {
  .section-portfolio-previews__title{
    height: 60px !important;
    .section-portfolio-previews__title-top{
      height: 40px !important;
    }
  }
}
  @media(max-width: 390px) {
  .section-portfolio-previews__title{
    height: 40px !important;
    .section-portfolio-previews__title-top{
      height: 30px !important;
    }
    .section-portfolio-previews__title-bottom{
      height: 10px !important;
    }
  }
}
</style>
