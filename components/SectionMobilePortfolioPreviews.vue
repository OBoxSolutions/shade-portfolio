<template>
    <div class="section-portfolio-previews">
      <div class="section-portfolio-previews__title">
        <div class="section-portfolio-previews__title-top">
          <img src="/portfolio-title.svg" alt="portfolio">
        </div>
        <div class="section-portfolio-previews__title-bottom"></div>
      </div>

      <div class="portfolio-previews__content">
        <div v-for="(preview, index) in getPortfolio" :key="`preview-${index}`" class="portfolio-preview">
          <div class="portfolio-preview__image">
            <img :src="preview.image" alt="preview-image">
          </div>

          <div class="portfolio-preview__bottom">
            <div class="__bottom-left">
              <h1>{{preview.name}}</h1>
              <div class="link-container">
                <a target="_blanck" :href="preview.link">View Site</a>
              </div>
            </div>
            <div class="corners">
              <div class="__center" />
              <div class="__right" />
            </div>
          </div>

        </div>

        <!-- <base-button class="portfolio-button">
          <h1>Press Start</h1>
        </base-button> -->

      </div>

    <div class="section-portfolio-previews__bottom">
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

  .portfolio-previews__content{
    width: 100%;
    background-color: #071C50;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 6rem;
    padding: 6rem 0;

    .portfolio-preview__image{
      padding-bottom: 1rem;
      background-color: #FFFFFF;
      img{
        width: 100%;
      }
    }
    .portfolio-preview__bottom{
      width: 100%;
      display: flex;
      .__bottom-left{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 40%;
        background-color: #FFFFFF;
        h1{
          font-size: 1rem;
          color: #000000;
          text-align: center;
          width: 100%;
        }
        .link-container{
          width: 90%;
          background-color: #49EA76;
          text-align: center;
          padding: 10px 0;
          margin-bottom: 5px;
          a{
            font-family: 'Press Start 2P';
            font-size: .7rem;
            font-weight: 400;
            line-height: 10px;
            color: #000000;
          }
        }
      }
      .corners{
        position: relative;
        display: flex;
        width: 60%;
        .__center{
          width: 30%;
          clip-path: polygon(0 0, 25% 36%, 25% 70%, 0% 100%);
          background-color: #352FCF;
          border: 2px solid #000000;
        }
        .__right{
          position: absolute;
          width: calc(100% - 4px);
          height: 100px;
          right: 0;
          clip-path: polygon(0 1%, 100% 0%, 100% 30%, 8% 30%);
          background-color: #352FCF;
          border: 2px solid #000000;
        }

      }

    }

  }

  .section-portfolio-previews__bottom{
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
