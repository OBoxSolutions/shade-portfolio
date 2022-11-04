<template>
  <validation-provider>
    <form class="section-body">
      <div class="section-body__container">
        <div class="section-body__hiring">
          <div class="section-body__left-clip"></div>
        </div>
        <div class="section-body__choose-platform">
          <div class="section-body__top-clip">
            <span>Choose a way for us to contact you</span>
          </div>
          <div class="section-body__email-box-outer">
            <div class="section-body__email-box-inner">
              <input v-model="form.contact" class="section-body__input" />
              <div class="section-body_tag">{{ form.social }}</div>
            </div>
          </div>
          <div class="section-body__choose-platform-outer">
            <div class="section-body__choose-platform-inner">
              <div class="section-body__button"></div>
              <div class="section-body__arrow"></div>
              <div>Choose a platform!</div>
            </div>
          </div>
        </div>
      </div>

      <div class="section-body__choose-platform-mobile">
        <div class="section-body__top-clip">
          <div class="section-body__background"></div>

          <div class="section-body__text-box">
            <div class="section-body__top-clip"></div>
            <div class="section-body__text">
              Choose a way for us to contact you
            </div>
          </div>
        </div>
        <div class="section-body__input-box">
          <input class="section-body__input" />
        </div>

        <div class="section-body__popup">
          <div class="section-body__popup-list">
            <div
              v-for="(option, index) in mediaOptions"
              :key="`media-${index}`"
              :class="option.text === form.social && 'selected-platform'"
            >
              <input
                :id="option.text"
                v-model="form.social"
                :value="option.text"
                type="radio"
                name="social"
              />

              <label :for="option.text" class="platform-label">
                {{ option.text }}
                <div
                  :style="`background-image:url('${option.icon}')`"
                  class="icon"
                ></div>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="section-body__submit">
        <div class="section-body__background">
          <div class="section-body__popup-container">
            <div class="section-body__popup-background"></div>
            <div class="section-body__popup">
              <div class="section-body__popup-list">
                <div
                  v-for="(option, index) in mediaOptions"
                  :key="`media-${index}`"
                  :class="option.text === form.social && 'selected-platform'"
                >
                  <input
                    :id="option.text"
                    v-model="form.social"
                    :value="option.text"
                    type="radio"
                    name="social"
                  />

                  <label :for="option.text" class="platform-label">
                    {{ option.text }}
                    <div
                      :style="`background-image:url('${option.icon}')`"
                      class="icon"
                    ></div>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="section-body__submit-box-container" @click="onSubmit">
            <div class="section-body__submit-box">
              <div class="section-body__submit-button">Submit.</div>
              <div class="section-body__button-clip"></div>
            </div>
            <div class="section-body__clip"></div>
          </div>
        </div>
      </div>
      <div class="section-body__press-start">
        <div class="section-body__button-container"></div>
      </div>
    </form>
  </validation-provider>
</template>

<script>
import formOperation from '@/mixins/formOperations'

export default {
  mixins: [formOperation],
  props: {
    value: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      mediaOptions: [
        { text: 'Discord', icon: '/contact/discord-icon-toned.png' },
        { text: 'Email', icon: '/contact/gmail-icon.png' },
        { text: 'Messenger', icon: '/contact/messenger-icon.png' },
        { text: 'Instagram', icon: '/contact/instagram-icon.png' },
      ],
    }
  },
  computed: {
    form: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      },
    },
  },
  methods: {
    onSubmit() {
      this.$emit('submit')
    },
  },
}
</script>

<style scoped lang="scss">
[type='radio'] {
  display: none;
}

.selected-platform {
  background-color: #8a8a8a;

  .platform-label {
    font-weight: 700;
    font-family: 'Press Start 2P' !important;
    font-size: 0.55rem !important;

    @media only screen and (max-width: 1024px) {
      font-size: 0.8rem !important;
    }
  }
  .icon {
    filter: brightness(1.4);
  }
}

.platform-label {
  font-weight: 400;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  height: 100%;
  cursor: pointer;
  width: 100%;
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
}

.section-body {
  position: relative;
  background-image: url('/contact/header-background.png');
  background-size: contain;
  overflow-x: clip;
  z-index: 3;

  .section-body__container {
    display: none;
    justify-content: space-between;

    .section-body__hiring {
      display: flex;
      width: fit-content;
      height: 100%;
      transform: skewY(-8deg);

      .section-body__left-clip {
        background-image: url('/contact/left-clip.png');
        background-size: cover;
        background-repeat: no-repeat;
        width: 30px;
      }

      .section-body__text-box-outer {
        background-color: #d43737;
        border: 20px #ef4242 solid;
        border-radius: 10px;
        max-width: 300px;
        outline: 1px solid black;

        .section-body__text-box-inner {
          font-family: 'Lucida Console', sans-serif;
          padding: 10px;
          border: 1px solid black;
          border-radius: 10px;
          color: white;
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 10px;
          align-items: center;
          perspective: 200px;
          transform-style: preserve-3d;

          .section-body__button {
            font-family: 'Press Start 2P', 'Lucida Sans', 'Lucida Sans Regular',
              'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana,
              sans-serif !important;
            background-color: #49ea76;
            cursor: pointer;
            padding: 10px 30px;
            color: black;
            width: fit-content;
            border: 1px solid black;

            &:active {
              border: 3px solid black;
              padding: 8px 30px;
              transform: scale(0.96);
              background-color: grey;
            }
          }
        }
      }
    }

    .section-body__choose-platform {
      transform: rotateZ(6deg) translateX(10px) translateY(-200px);
      .section-body__top-clip {
        background: url('/contact/choose-platform-background.png') no-repeat;
        background-size: cover;
        height: 20rem;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        text-align: center;
        z-index: 3;
        position: relative;
        span {
          transform: skewX(306deg);
          margin-bottom: 20px;
          width: 70%;
          color: white;
        }
      }

      .section-body__email-box-outer {
        background-color: #ef4242;
        transform: skewX(5deg) translateX(5px) translateY(-10px);
        z-index: 2;
        border: 1px solid black;
        border-radius: 5px;
        padding: 10px;
        position: relative;

        .section-body__email-box-inner {
          background-color: #d43737;
          padding: 5px;
          border: 1px solid black;
          margin-right: 10px;
          display: flex;
          gap: 5px;

          .section-body__input {
            background-color: #f06666;
            outline: 0;
            color: black;
            position: relative;
            border: 1px solid black;
            padding: 2px;
          }
          .section-body_tag {
            background-color: #f06666;
            color: black;
            position: relative;
            border: 1px solid black;
            padding: 3px;
            width: 100%;
            font-size: small;
            text-align: center;
          }
        }
      }

      .section-body__choose-platform-outer {
        background-color: #ef4242;
        padding: 0 10px 10px 10px;
        transform: skewX(5deg) translateX(15px) translateY(-11px);
        margin-left: 1.2rem;
        border: 1px solid black;
        border-bottom-left-radius: 5px;

        .section-body__choose-platform-inner {
          background-color: #d43737;
          padding: 0 10px 5px 10px;
          border: 1px solid black;
          border: 0 0 5px 5px;
          display: flex;
          gap: 10px;
          align-items: center;

          .section-body__button {
            background-image: url('/contact/polygon.png');
            height: 20px;
            width: 20px;
            background-repeat: no-repeat;
            background-position: center;
            background-size: 60%;
            cursor: pointer;
            background-color: #f06666;
            padding: 10px;
            border: 1px solid black;
            border-radius: 0 0 5px 5px;
          }

          .section-body__arrow {
            background-image: url('/contact/arrow-left.png');
            height: 40px;
            width: 40px;
            background-size: cover;
          }
        }
      }
    }
  }
  .section-body__choose-platform-mobile {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    .section-body__top-clip {
      height: 9rem;
      width: 100%;
      position: relative;

      .section-body__background {
        background-image: url('/contact/top-clip-2.png');
        background-repeat: no-repeat;
        background-size: cover;
        width: 170%;
        height: 150%;
        position: absolute;
        bottom: 0;
        z-index: 2;
      }
      .section-body__text-box {
        display: flex;
        position: relative;
        flex-direction: column;
        align-items: flex-end;
        z-index: 3;
        width: 100%;
        height: 100%;

        .section-body__top-clip {
          background-image: url('/contact/top-clip-3.png');
          background-size: 100%;
          background-repeat: no-repeat;
          width: 80%;
          background-position: bottom;
        }

        .section-body__text {
          border: 2px solid black;
          padding: 6px;
          width: 80%;
          background-color: #dbdbdb;
          font-size: smaller;
        }
      }
    }
    .section-body__input-box {
      width: 100%;
      border: 2px solid black;
      background-color: #ef4242;
      justify-content: center;
      display: flex;

      .section-body__input {
        background-color: #d43737;
        outline: 0;
        width: 100%;
        color: white;
        height: 2rem;
        position: relative;
        border: 2px solid black;
        padding: 3px;
        margin: 10px;
        border-radius: 5px;
        font-size: small;
      }
    }

    .section-body__popup {
      height: 9rem;
      background-color: #ddd6bf;
      border-radius: 0 0 10px 10px;
      border: 2px solid black;
      padding: 0 15px 15px 15px;
      display: flex;
      width: 60%;
      font-weight: bolder;
      color: black;

      .section-body__popup-list {
        background-color: #dbdbdb;
        height: 100%;
        width: 100%;
        border: 2px solid black;
        border-top: 0;
        border-radius: 0 0 10px 10px;

        div {
          font-family: 'Lucida Console', sans-serif;
          text-align: center;
          cursor: pointer;
          padding: 2px;
          margin: 2px 10px;
          border-bottom: 1px solid black;
          display: flex;
          align-items: center;
          gap: 5px;
          justify-content: center;
          position: relative;
          div {
            height: 15px;
            width: 15px;
            background-size: cover;
            background-position: center;
            border: 0;
            position: absolute;
            right: 0;
          }
        }
      }
    }
  }
  .section-body__submit {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 5rem;
    .section-body__background {
      width: 100%;
      background: url('/contact/submit-background.png');
      background-size: 300%;
      background-position: bottom;
      background-repeat: no-repeat;
      height: 13rem;
      display: flex;
      position: relative;

      .section-body__popup-container {
        height: 2rem;
        width: 14rem;
        margin: 5% 0 0 25%;
        position: relative;
        display: none;

        .section-body__popup-background {
          background-color: #ef4242;
          transform: skew(45deg);
          border: 1px solid black;
          height: 100%;
          width: 100%;
          position: absolute;
          z-index: 10;
        }
        .section-body__popup {
          height: 9rem;
          width: 70%;
          max-width: 70%;

          background-color: #ddd6bf;
          z-index: 11;
          position: absolute;
          bottom: 0;
          right: 0;
          margin-right: 1rem;
          border-radius: 10px 10px 0 0;
          border: 1px solid black;
          padding: 15px 15px 0 15px;
          display: flex;
          font-weight: bolder;
          color: black;

          .section-body__popup-list {
            background-color: #dbdbdb;
            height: 100%;
            width: 100%;
            border: 1px solid black;
            border-bottom: 0;
            border-radius: 10px 10px 0 0;

            div {
              font-family: 'Lucida Console', sans-serif;
              text-align: center;
              font-size: 12px;
              cursor: pointer;
              padding: 2px;
              margin: 0px 10px;
              border-bottom: 1px solid black;
              display: flex;
              align-items: center;
              gap: 5px;
              justify-content: center;
              position: relative;
              div {
                height: 15px;
                width: 15px;
                background-size: cover;
                background-position: center;
                border: 0;
                position: absolute;
                right: 0;
              }
            }
          }
        }
      }
      .section-body__alert {
        width: 90%;
        right: 0;
        bottom: 0;
        height: 25%;
        position: absolute;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    .section-body__submit-box-container {
      width: 17rem;
      height: 4rem;
      margin: 0% 0 0 10%;
      position: absolute;
      right: 0;
      top: 0;
      margin-top: -3rem;
      perspective: 500px;
      transform-style: preserve-3d;
      display: flex;

      .section-body__submit-box {
        width: 80%;
        background-color: #ef4242;
        height: 100%;
        transform: rotateY(325deg) skewY(7deg);
        padding: 20px;
        bottom: 0;
        left: 0;
        display: flex;
        border: 1px solid black;
        perspective: 500px;
        transform-style: preserve-3d;

        .section-body__submit-button {
          background-color: #49ea76;
          height: 100%;
          width: 95%;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid black;
          cursor: pointer;
          &:active {
            background-color: gray;
          }
          &:active ~ .section-body__button-clip {
            display: none;
          }
        }

        .section-body__button-clip {
          height: 100%;
          width: 5%;
          background-color: #39be5e;
          border: 1px solid black;
          transform: rotateY(50deg);
        }
      }

      .section-body__clip {
        background: linear-gradient(180deg, #f8981d 16.71%, #fec111 67.83%);
        width: 20%;
        height: 190%;
        transform: rotateY(50deg) translateY(0.7rem) translateZ(-1.6rem);
        border: 1px solid black;
      }
    }
  }

  .section-body__press-start {
    background-image: url('/contact/mountains-background.png');
    background-repeat: no-repeat;
    background-size: cover;
    height: 20rem;
    margin-top: 3rem;
    position: relative;
    display: flex;
    justify-content: center;

    .section-body__button-container {
      position: absolute;
      bottom: 0;
      margin-bottom: 4rem;
      display: flex;

      $button-color: #f05757;
      $button-hover-color: #c24646;
      .portfolio-button {
        padding: 0 !important;
        background-color: $button-color;
        border-radius: 5px;
        transform-style: preserve-3d;
        perspective: 100px;
        perspective-origin: bottom;

        h1 {
          width: 70%;
          font-weight: 400;
          margin: 1rem auto;
          color: #ffffff;
        }
        &:hover {
          background-color: $button-hover-color;
        }
        &::before {
          background-color: $button-hover-color;
          min-height: 11px;
          width: calc(100% - 13px);
          bottom: -10px;
          left: 6px;
          border-radius: 0;
          transform: skewX(0);
          transform: rotateX(-20deg);
        }
        &::after {
          width: 0;
        }
        &:active {
          transform: translateY(10px);
          background-color: $button-hover-color;

          &::before {
            min-height: 0;
          }
        }
      }
    }
  }
}

/* Breakpoints begin here  */
@media (min-width: 768px) {
  .section-body {
    .section-body__container {
      display: flex;
    }
    .section-body__submit {
      margin-top: 0;
      .section-body__background {
        width: 60vw;
        max-width: 70rem;
        background-size: cover;
        background-position: inherit;

        .section-body__popup-container {
          display: block;
        }
      }
    }
    .section-body__choose-platform-mobile {
      display: none;
    }
    .section-body__press-start {
      .section-body__button-container {
        margin-bottom: -4rem;
        .portfolio-button {
          h1 {
            font-size: 3rem;
          }
        }
      }
    }
  }
}
</style>
