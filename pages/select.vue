<template>
  <div class="select">
    <div class="title-top">
      <div class="wraper">
        <h1>
          So, the process has begun!
        </h1>
      </div>
    </div>
    <div v-if="breakpoints.isSmAndDown" class="select-bottom-mobile">
      <div class="title-mobile">
        <h1>
          Choose how will we get in touch to discuss your project
        </h1>
      </div>
      <button class="voice-button" @click="$router.push('/get-started?mode=meeting')">
        Voice Call
      </button>
      <button class="chat-button" @click="$router.push('/get-started?mode=chat')">
        Chat
      </button>
    </div>

    <div v-else class="select-bottom">
      <div class="__options">
        <!-- <button  @click="$router.push('/get-started?mode=meeting')"></button> -->
        <button class="voice-button" @click="$router.push('/get-started?mode=meeting')">
          Voice Call
        </button>
        <button class="chat-button" @click="$router.push('/get-started?mode=chat')">
          Chat
        </button>
      </div>
      <div class="__title">
        <div class="title-wraper">
          <h1>
            Choose how will we get in touch to discuss your project
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  layout: 'empty',
  computed: {
    ...mapState(['breakpoints']),
  },
}
</script>

<style lang="scss" scoped>
  .select{
    width: 100vw;
    height: 100vh;

    .title-top{
      color: white;
      height: calc(50% - 3rem);
      margin-left: auto;
      .wraper{
        width: 50%;
        margin-left: auto;
        h1{
          margin: 0;
          padding-top: 3rem;
          margin-right: 5.8rem;
          font-weight: 400;
          font-size: 2.5rem;
          text-align: center;
          color: #FFFFFF;
          border-bottom: 2px solid white;
        }
      }
    }

    .select-bottom{
      height: 50vh;
      display: flex;

      .__options{
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 50px;
      }

      .__title{
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .title-wraper{
          background: #222940;
          height: 83%;
          width: 90%;
          margin-right: auto;
          display: flex;
          h1{
            margin: auto;
            font-weight: 400;
            text-align: center;
            color: white;
            font-size: 3rem;
            padding: 5px;
          }
        }
      }
    }
    .voice-button, .chat-button {
          background-color: #FFAC06;
          color: #ffffff;
          padding: 45px 20px;
          width: 300px;
          border: none;
          cursor: pointer;
          position: relative;
          transform-style: preserve-3d;
          transition: transform 0.15s;
          font-size: 1.6rem;

          &::before {
            content: '';
            height: 50px;
            min-width: calc(100% + 10%);
            position: absolute;
            clip-path: polygon(0 0, 91% 0, 93.9% 12%, 3% 12%);
            background: #D08B00;
            left: 0;

            transform: translate3d(0, 4.65rem, -1em);
            transition: transform 0.15s, min-width 0.15s;
          }
          &::after {
            content: '';
            width: 40px;
            min-height: calc(100% + 5%);
            position: absolute;
            clip-path: polygon(0 0, 25% 5%, 25% 100%, 0 100%);
            background: #D08B00;
            top: -1px;
            right: -40px;
            transition: all 0.15s;
          }
          &:hover{
            background-color: #eca008;
          }
          &:active {
            background: #D08B00;
            transform: translate3d(0.2em, 0.3em, -0.2em);
          }
          &:active::before {
            min-width: 100%;
            transform: translate3d(0, 0, -1em);
          }
          &:active::after {
            min-height: 90%;
            transform: translate3d(-50px, 0em, -20em);
          }
        }
        .chat-button{
          background: #AD23DE;

          &:hover{
            background-color: #9b19ca;
          }
          &::before{
            background: #8B20B0;
            clip-path: polygon(2% 0, 100% -30%, 91.9% 12%, 0% 12%);
            transform: translate3d(0, -3.2rem, -1em);
          }
          &::after{
            background: #8B20B0;
            clip-path: polygon(0% 0%, 25% 0%, 25% 90%, 0% 100%);
            top: -5px;
          }
          &:active {
            background: #8B20B0;
            transform: translate3d(0.2em, -0.3em, -0.2em);
          }
          &:active::after {
            min-height: 90%;
            transform: translate3d(-50px, .3em, -20em);
          }
        }

  }

  /* Breakpoints begin here  */
    @media (max-width: 1400px) {
      .title-wraper > h1{
        font-size: 2.4rem !important;
      }
    }
  @media (max-width: 990px) {
    .title-top > .wraper {
      width: 90% !important;
      margin: auto;
      h1{
        margin-right: 0 !important;
        font-size: 1.2rem !important;
      }
    }
    .select-bottom-mobile{
      height: calc(50% + 3rem);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2rem;

      .title-mobile{
        background: #222940;
        h1{
          margin: 1.5rem;
          color: #FFFFFF;
          font-size: 1.4rem;
          text-align: center;
        }
      }
      .voice-button, .chat-button {
        width: 260px;
        padding: 40px 5px;
        font-size: 1.2rem;
      }
      .voice-button::before{
        transform: translate3d(0, 3.9rem, -1em);
      }
      .voice-button::after{
        min-height: 107%;
      }
      .chat-button::before{
        transform: translate3d(0, -2.8rem, -1em);
      }
    }
  }

</style>
