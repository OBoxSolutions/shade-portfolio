<template>
  <validation-observer ref="form">
    <form class="section-basic-information">
      <div class="__clip"></div>
      <div class="__form-container">
        <form class="__form">
          <div class="__title">
            BASIC
            <div>INFORMATION</div>
          </div>
          <div class="__input-container">
            <div>Full name:</div>
            <validation-provider v-slot="{ errors }" rules="required">
              <input v-model="form.name" />
              <app-input-error :error="errors[0]"></app-input-error>
            </validation-provider>
          </div>
          <div class="__input-container">
            <div>Email address:</div>
            <validation-provider v-slot="{ errors }" rules="required|email">
              <input v-model="form.email" />
              <app-input-error :error="errors[0]"></app-input-error>
            </validation-provider>
          </div>
          <div class="__input-container">
            <div>Date of Birth:</div>
              <span>
                <validation-provider v-slot="{ errors }" rules="required|numeric">
                  <input v-model="year" maxlength="4" class="__date-input" /> -
                  <app-input-error :error="errors[0]"></app-input-error>
                </validation-provider>

                <validation-provider v-slot="{ errors }" rules="required|numeric">
                  <input v-model="month" maxlength="2" class="__date-input" /> -
                  <app-input-error :error="errors[0]"></app-input-error>
                </validation-provider>

                <validation-provider v-slot="{ errors }" rules="required|numeric">
                  <input v-model="day" maxlength="2" class="__date-input" />
                  <app-input-error :error="errors[0]"></app-input-error>
                </validation-provider>
              </span>
          </div>
          <div class="__input-container">
            <div>Country in which you are based:</div>
            <validation-provider v-slot="{ errors }" rules="required">
              <input v-model="form.country" />
              <app-input-error :error="errors[0]"></app-input-error>
            </validation-provider>
          </div>
        </form>
      </div>
      <div class="__sidebar">
        <div class="__top-clip"></div>
        <div class="__content">
          <div class="__title">
            {{ page }}
          </div>
          <div class="__text">
            When you fill everything out and press submit, either a scheduled
            meeting link, or our Discord is going to be sent to you. It depends on
            what meeting app you chose. Both ways all the information is going to
            be sent to your email inbox, so make sure you typed an email you have
            access to.
          </div>
          <div class="__software-list">
            <div class="__title">What software would you like to use?</div>
            <div class="__list">
              <div
                v-for="(social, index) in socials[page]"
                :key="`chat-${index}`"
                :style="`${social == selectedSocial ? 'background:#352FCF' : ''}`"
                @click="selectSocial(social)"
              >
                {{ social }}
              </div>
            </div>
          </div>
          <div class="__tag"></div>
        </div>
      </div>
    </form>
  </validation-observer>
</template>

<script>
import formOperations from '@/mixins/formOperations'

export default {
  name: 'SectionGetStartedBasicInformation',
  mixins: [formOperations],

  props: {
    page: {
      type: String,
      default: '',
    },
    value: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      socials: {
        chat: ['Discord', 'Messenger', 'Twitter', 'Instagram'],
        meeting: ['Discord', 'Zoom', 'Google Meet'],
      },
      selectedSocial: 'Discord',
      year: '',
      month: '',
      day: '',
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
    birthdate() {
      return `${this.day}-${this.month}-${this.year}`
    },
  },
  watch: {
    birthdate(val) {
      this.form.birthdate = val
    },
  },
  methods: {
    selectSocial(social) {
      this.selectedSocial = social
      this.form.app = this.selectedSocial
    },
  },
}
</script>

<style scoped lang="scss">
.section-basic-information {
  perspective: 300px;
  position: relative;
  z-index: 30;
  background-color: #ef4242;
  padding-bottom: -2rem;
  filter: saturate(0.8);
  .__clip {
    width: 100%;
    height: 1.5rem;
    border: 1px solid black;
    background: linear-gradient(90deg, #f8981d 7.29%, #fec111 48.61%);
  }

  .__form-container {
    background-color: #ef4242;
    padding: 0.5rem 1.5rem;
    font-weight: 400;
    display: flex;
    .__form {
      color: white;
      font-size: 0.7rem;
      width: 100%;
      .__title {
        font-size: 1.5rem;
      }

      .__input-container {
        margin: 1rem 0;

        input {
          background-color: #d43737;
          padding: 0.4rem;
          margin: 0.5rem 0;
          color: white;
          outline: 0;
          border: 2px solid black;
        }
        span {
          color: black;
          .__date-input {
            width: 1.5rem;
          }
          .__date-input:nth-of-type(1) {
            width: 2.7rem;
          }
        }
      }
    }
  }

  .__sidebar {
    height: fit-content;
    overflow-x: clip;

    position: relative;
    width: 100%;
    transform: skewY(5deg);
    .__top-clip {
      height: calc(100vw / 2.5);
      width: 100%;
      background-image: url('/get-started/top-clip.png');
      background-size: cover;
    }

    .__content {
      background-color: #ef4242;
      width: 100%;
      height: 100%;
      border: 1px solid black;
      border-bottom-left-radius: 0.5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      padding: 3rem 0;
      color: white;
      position: relative;
      box-shadow: -10px 0px 6px rgba(0, 0, 0, 0.25);
      .__title {
        font-size: 2rem;
        text-transform: uppercase;
      }
      .__text {
        font-family: 'Lucida Console', sans-serif;
        margin: 0 2rem;
        padding: 1rem 0.5rem;
        background-color: #d43737;
        border: 1px solid black;
        border-radius: 0.5rem;
        font-size: small;
        z-index: 2;
      }
      .__software-list {
        background-color: #15aaaa;
        padding: 1rem;
        margin: 0 2rem;
        border: 1px solid black;
        border-radius: 0.5rem;
        position: relative;
        z-index: 2;
        .__title {
          font-size: smaller;
          text-align: center;
        }
        .__list {
          background-color: #0f7d7d;
          font-size: 0.7rem;
          text-align: center;
          padding: 0.5rem 0;
          border: 1px solid black;
          border-radius: 0.5rem;
          div {
            width: 100%;
            margin: 1rem 0;
            cursor: pointer;
            border: 1px solid black;
            border-width: 1px 0 1px 0;
          }
        }
      }

      .__tag {
        position: absolute;
        height: 4rem;
        background-color: #d9d9d9;
        right: 0;
        width: 50%;
        margin-bottom: calc(100vw / 4);
        margin-left: 3rem;
        z-index: 1;
        bottom: 0;
      }
    }
  }
}

/* Breakpoints begin here  */
@media (min-width: 768px) {
  .section-basic-information {
    background-color: transparent;
    margin-top: -1rem;
    padding-bottom: 0;
    .__clip {
      transform: rotateX(199deg) translateZ(5px);
    }
    .__form-container {
      display: block;
      .__form {
        width: fit-content;
        .__title {
          font-size: 2rem;
        }
        .__input-container {
          input {
            width: 100%;
          }
        }
      }
    }
    .__sidebar {
      width: 300px;
      position: absolute;
      transform: translateY(-12rem) skewY(5deg);
      top: 0;
      bottom: 0;
      right: 0;
      .__top-clip {
        height: 10rem;
      }
      .__content {
        .__tag {
          margin-bottom: calc(100% / 3);
        }
      }
    }
  }
}
</style>
