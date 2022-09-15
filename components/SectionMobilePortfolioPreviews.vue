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
              <div class="__center-wrap">
                <div class="__center" />
              </div>
              <div class="__right" />
            </div>
          </div>

        </div>

        <base-button class="portfolio-button">
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
      padding: .5rem;
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
        border-right: 3px solid #000000;
        h1{
          font-size: 1rem;
          color: #000000;
          text-align: center;
          width: 100%;
        }
        .link-container{
          width: 80%;
          background-color: #49EA76;
          text-align: center;
          padding: 12px 0;
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
        .__center-wrap{
          position: relative;
          width: 30%;
          height: calc(100% + 2px);
          z-index: 5;
          background: #000000;
          clip-path: polygon(0 0, 25% 36%, 25% 70%, 0% 100%);


          .__center{
            position: absolute;
            top: 0px;
            left: -4px;
            right: -2px;
            bottom: 0px;
            clip-path: polygon(0 0, 25% 36%, 25% 70%, 0% 100%);
            background-color: #352FCF;
          }
        }
          .__right{
            position: absolute;
            width: 100%;
            height: 31%;
            right: 0;
            background-color: #4E49DE;
            border-top: 3px solid #000000;
            border-bottom: 3px solid #000000;
          }
        }
      }
      $botton-color: #F05757;
      $botton-hover-color: #C24646;
      .portfolio-button{
        padding: 0 !important;
        background-color: $botton-color;
        border-radius: 5px;

        transform-style: preserve-3d;
        perspective: 100px;
        perspective-origin: bottom;

        h1{
          width: 70%;
          font-weight: 400;
          margin: 1rem auto;
          color: #ffffff;
        }
      &:hover{
        background-color: $botton-hover-color;
      }
      &::before{
        background-color: $botton-hover-color;
        min-height: 11px;
        width: calc(100% - 10px);
        bottom: -10px;
        left: 5px;
        border-radius: 0;
        transform: skewX(0);
        transform: rotateX(-20deg);
      }
      &::after{
        width: 0;
      }
      &:active {
        transform: translateY(10px);
        background-color: $botton-hover-color;

        &::before {
          min-height: 0;
        }
      }
    }

    }

  .section-portfolio-previews__bottom{
    height: 70px;

    .bottom-title{
      margin: 0;
      height: 50px;
      background-color: #49EA76;
      font-size: 1.2rem;
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
