<template>
  <div class="section-hiring-cube">
    <div class="section-hiring-form">
      <h1>BASIC INFORMATION</h1>
      <form class="section-form">
        <div>
          <label for="full-name">Full name:</label><br />
          <input
            id="full-name"
            v-model="form.name"
            type="text"
            name="full-name"
          /><br />
        </div>
        <div>
          <label for="email-address">Email address:</label><br />
          <input
            id="email-address"
            v-model="form.email"
            type="email"
            name="email-address"
          /><br />
        </div>
        <div>
          <label for="birthdate">Date of Birth:</label>
          <fieldset class="birthdate" name="birthdate">
            <input
              v-model="year"
              class="birthdate-input year"
              maxlength="4"
              type="text"
              name="birthdate-year"
            />
            -
            <input
              v-model="month"
              class="birthdate-input month"
              maxlength="2"
              type="text"
              name="birthdate-month"
            />
            -
            <input
              v-model="day"
              class="birthdate-input day"
              maxlength="2"
              type="text"
              name="birthdate-day"
            />
          </fieldset>
        </div>
        <div>
          <label for="country">Country in which you are based:</label><br />
          <input
            id="country"
            v-model="form.country"
            type="text"
            name="country"
          /><br />
        </div>
        <div>
          <label for="applying-for">Applying for:</label><br />
          <div class="applying-for">
            <div>
              <input
                id="full-stack"
                v-model="form.applying_for"
                type="radio"
                name="applying-for"
                checked
                value="Full-Stack Web Developer"
              />
              <label for="full-stack">Full-Stack Web Developer</label>
            </div>
            <div>
              <input
                id="general-manager"
                v-model="form.applying_for"
                type="radio"
                name="applying-for"
                value="General Manager"
              />
              <label for="general-manager">General Manager</label>
            </div>
            <div>
              <input
                id="seo-marketing"
                v-model="form.applying_for"
                type="radio"
                name="applying-for"
                value="SEO and Marketing Expert"
              />
              <label for="seo-marketing">SEO and Marketing Expert</label>
            </div>
            <div>
              <input
                id="vice-president"
                v-model="form.applying_for"
                type="radio"
                name="applying-for"
                value="Vice President"
              />
              <label for="vice-president">Vice President</label>
            </div>
          </div>
        </div>
      </form>
    </div>
    <div class="form-bottom-side" />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'SectionMobileHiringInformationForm',
  props: {
    value: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      year: '',
      month: '',
      day: '',
    }
  },
  computed: {
    ...mapGetters(['getHiringName']),
    form: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      },
    },
    birthday() {
      return `${this.day}-${this.month}-${this.year}`
    },
  },
  watch: {
    birthday(val) {
      this.form.birthday = val
    },
  },
  methods: {
    ...mapMutations(['setHiringName']),
  },
}
</script>

<style lang="scss" scoped>
.section-hiring-cube {
  transform-style: preserve-3d;
  perspective: 100px;
  perspective-origin: bottom;
}
.section-hiring-form {
  border-top: 2px solid #000000;
  border-bottom: 2px solid #000000;
  background-color: #d43737;

  h1 {
    margin: 1.5rem 1rem 0 0;
    text-align: right;
    font-size: 1.1rem;
    font-weight: 400;
    color: #ffffff;
  }

  div {
    width: 90%;
  }

  .section-form {
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    label {
      font-size: 1rem;
      line-height: 20px;
      color: #ffffff;
    }

    input {
      width: 100%;
      background: #d43737;
      border: 2px solid #000000;
      outline: none;
      color: #ffffff;
      margin-top: 8px;
      padding: 5px 0;
    }

    .birthdate {
      border: none;
      padding-left: 0;

      .birthdate-input {
        width: 5rem;
        height: 1.7rem;
        text-align: center;
        color: #ffffff;
        padding: 0;
      }
      .month,
      .day {
        width: 2.5rem;
      }
    }

    .applying-for {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      margin: 0.5rem 0 2rem;
      padding: 1rem;
      background: #8a8a8a;
      border: 2px solid #000000;
      width: calc(100% + 6px);
      box-sizing: border-box;

      div {
        display: flex;
        gap: 0.8rem;
      }

      input[type='radio'] {
        appearance: none;
        background-color: #ffffff;
        margin: 0;
        width: 1rem;
        height: 1rem;
        border: 2px solid black;
        border-radius: 50%;

        display: grid;
        place-content: center;

        &::before {
          content: '';
          width: 0.8rem;
          height: 0.84rem;
          border-radius: 50%;
          transform: scale(0);
          transition: 120ms transform ease-in-out;
          box-shadow: inset 1rem 1rem #ffac06;
        }
        &:checked::before {
          transform: scale(1);
        }
      }

      label {
        margin-top: 2px;
        font-style: normal;
        font-weight: 400;
        font-size: 10px;
        line-height: 15px;
        color: #ffffff;
      }
    }
  }
}
.form-bottom-side {
  z-index: 10;
  position: absolute;
  height: 30px;
  width: 100%;
  background-color: #ad23de;
  bottom: -18px;
  transform: rotateX(-35deg) translateY(11px);
}
</style>
