<template>
  <validation-observer ref="form">
    <form class="section-header">
      <div class="section-header__description">
        <div class="section-header__outside-box">
          <br />
          <div class="section-header__inside-box">
            <p>
              Here you can leave us a message about... uhm... pretty much
              anything you want, but mostly quick questions you want to ask us.
              Or you know, need someone to talk to, just generally feeling
              lonely, same here. Oh, and you can message us about website design
              services too. Type your message in that big red box, select a way
              we should get back to you and press submit. Pretty simple.
            </p>
          </div>
        </div>
        <div class="section-header__page-title">
          <div class="section-header__page-title-clip"></div>

          <div class="section-header__page-title-text">CONTACTS</div>
        </div>
      </div>
      <div class="section-header__message">
        <div class="section-header__title-box">
          <div>YOUR MESSAGE</div>
          <validation-provider
            v-slot="{ errors }"
            class="section-header__title-box-validation"
            rules="required"
          >
            <input
              v-model="form.subject"
              type="text"
              class="section-header__description mx-auto"
              placeholder="Insert general question"
            />
            <app-input-error
              :error="errors[0]"
              class="mx-auto mt-1 general-question-error"
            ></app-input-error>
          </validation-provider>
        </div>
        <div class="section-header__transition"></div>
        <div class="section-header__text-box">
          <textarea
            v-model="form.text"
            class="section-header__text"
            placeholder="type away..."
          >
          </textarea>
          <validation-provider v-slot="{ errors }" rules="required">
            <div class="section-header__sign-box__outer">
              <div class="section-header__sign-box__inner">
                <div>Signed by:</div>
                - [<input v-model="form.name" placeholder="Your Name" />]
                <app-input-error :error="errors[0]"></app-input-error>
              </div>
            </div>
          </validation-provider>
        </div>
      </div>
    </form>
  </validation-observer>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

import formOperations from '@/mixins/formOperations'

export default {
  mixins: [formOperations],
  props: {
    value: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    ...mapGetters(['getUserName', 'getMessage']),

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
    ...mapMutations(['setUserName', 'setMessage']),
  },
}
</script>

<style scoped lang="scss">
.section-header {
  position: relative;
  width: 100%;
  background-image: url('/contact/header-background.png');
  background-size: contain;
  padding: 8rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-x: clip;

  .section-header__bottom {
    position: absolute;
    width: 100%;
    bottom: -2px;
  }

  .section-header__description {
    width: fit-content;
    height: 100%;
    display: flex;
    outline: none;
    flex-direction: column-reverse;

    .section-header__outside-box {
      display: flex;
      flex-direction: column;
      gap: 2.5rem;
      justify-content: center;
      align-items: center;
      width: 100%;
      background-color: #ffac06;
      border: 1px solid #000000;

      .title {
        margin-top: 6rem;
        padding: 0 1rem;
        text-align: center;
        font-size: 20px;
        line-height: 20px;
        color: #000000;
      }

      .section-header__inside-box {
        background-color: #cc8800;
        width: 80%;
        height: 100%;
        border: 2px solid #000000;
        box-shadow: inset 0px 4px 7px 2px rgba(0, 0, 0, 0.25);
        margin-bottom: 4rem;
        border-radius: 15px;

        p {
          padding: 1px 0.5rem;
          font-family: 'Lucida Console', sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: small;
          line-height: 1.5rem;
          text-align: center;
          color: #ffffff;
        }
      }
    }

    .section-header__page-title {
      width: 100%;
      transform: skewY(-5deg) translateY(2rem);
      .section-header__page-title-clip {
        background-image: url('/contact/top-clip.png');
        background-size: cover;
        height: calc(100vw / 4);
        width: 100%;
      }
      .section-header__page-title-text {
        color: white;
        background-color: #ef4242;
        padding: 20px 0;
        font-size: 2rem;
        text-align: center;
        border: 1px black solid;
        border-bottom-right-radius: 10px;
      }
    }
  }

  .section-header__message {
    width: 100%;
    height: 100%;
    max-width: 900px;
    display: flex;
    flex-direction: column;
    perspective: 300px;

    .section-header__title-box {
      background-color: #ef4242;
      width: 100%;
      padding: 1rem 0;
      display: flex;
      gap: 5px;
      flex-direction: column;
      align-items: center;
      font-size: larger;
      border: 2px solid black;
      color: black;

      .section-header__title-box-validation {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        .general-question-error {
          font-size: 1rem;
        }
      }

      .section-header__description {
        font-size: 10px;
        border: 1px solid black;
        border-radius: 5px;
        text-align: center;
        background-color: #d43737;
        color: white;
        width: 90%;
        height: 7rem;
        display: flex;
        justify-content: center;
        overflow-wrap: break-word;
      }
    }

    .section-header__transition {
      height: 30px;
      background-color: #ad23de;
      border: 1px solid black;
      transform: rotateX(144deg) translateZ(10px);
      width: 100%;
      margin: 0px 2px;
    }

    .section-header__text-box {
      margin: 0 3%;
      border-bottom: 20px solid #f5e65b;
      border-left: 20px solid #f5e65b;
      border-right: 20px solid #f5e65b;
      outline: 1px solid black;
      height: 30rem;
      display: flex;
      flex-direction: column;
      background-color: #ff6363;

      .section-header__text {
        font-family: 'Lucida Console', sans-serif;
        background-color: #ff6363;
        height: 90%;
        padding: 1.4rem;
        resize: none;
        outline: none;
        border-left: 1px solid black;
        border-right: 1px solid black;
        border-bottom: 0;
        color: white;
      }
      .section-header__text::placeholder {
        color: white;
      }

      .section-header__sign-box__outer {
        border-left: 1px solid black;
        border-right: 1px solid black;
        border-bottom: 1px solid black;

        .section-header__sign-box__inner {
          background-color: #d43737;
          padding: 10px;
          margin: 10px;
          width: fit-content;
          color: white;
          border: 2px solid black;
          border-radius: 10px;
          font-size: x-small;
        }

        .section-header__sign-box__inner > input {
          background-color: transparent;
          outline: none;
          border: none;
          width: 150px;
          color: white;
          margin: 5px 0px;
        }
        .section-header__sign-box__inner > input::placeholder {
          color: white;
        }
      }
    }
  }
}

/* Breakpoints begin here  */
@media (min-width: 768px) {
  .section-header {
    flex-direction: row;
    gap: 30px;
    height: 840px;
    .section-header__description {
      flex-direction: column !important;
      .section-header__outside-box {
        margin-left: 3rem;
        width: 25rem;
        height: 70%;

        .section-header__inside-box {
          margin-bottom: 0;
          border-bottom: 0;
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
          p {
            font-size: 1.3rem !important;
          }
        }
      }
      .section-header__page-title {
        width: fit-content;
        transform: translateY(-7.4rem) skewY(-5deg);
        .section-header__page-title-clip {
          height: 98px;
        }
        .section-header__page-title-text {
          padding: 15px;
          width: fit-content;
          font-size: 3rem;
        }
      }
    }

    .section-header__message {
      margin: 0px 20px;
      .section-header__title-box {
        .section-header__description {
          border: 2px solid black;
          border-radius: 20px;
          width: 70%;
          padding: 4px 0;
          height: fit-content;
        }
      }

      .section-header__text-box {
        height: 100%;
      }
    }
  }
}
</style>
