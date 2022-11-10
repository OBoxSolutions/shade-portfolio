<template>
  <validation-observer ref="form">
    <div class="section-hiring-cube">
      <div class="section-hiring-form">
        <h1>BASIC INFORMATION</h1>
        <form class="section-form">
          <div class="section-form__column-left">
            <div>
              <label for="full-name">Full name:</label><br />
              <validation-provider v-slot="{ errors }" rules="required">
                <input
                  id="full-name"
                  v-model="form.name"
                  type="text"
                  name="full-name"
                />
                <app-input-error :error="errors[0]"></app-input-error>
              </validation-provider>
              <br />
            </div>
            <div>
              <label for="email-address">Email address:</label><br />
            <validation-provider v-slot="{ errors }" rules="required|email">
              <input
                id="email-address"
                v-model="form.email"
                type="email"
                name="email-address"
              />
              <app-input-error :error="errors[0]"></app-input-error>
            </validation-provider>
              <br />
            </div>
            <div>
              <label for="country">Country in which you are based:</label><br />
              <validation-provider v-slot="{ errors }" rules="required">
                <input
                  id="country"
                  v-model="form.country"
                  type="text"
                  name="country"
                />
                <app-input-error :error="errors[0]"></app-input-error>
              </validation-provider>
              <br />
            </div>
          </div>
          <div class="section-form__column-right">
            <label for="applying-for">Applying for:</label><br />
            <div class="applying-for">
              <div v-for="(job, index) in applying_jobs" :key="`job-${index}`">
                <input
                  :id="index"
                  v-model="form.applying_for"
                  type="radio"
                  name="applying-for"
                  :value="job"
                />
                <label :for="index">{{job}}</label>
              </div>
            </div>
            <label for="birthdate">Date of Birth:</label><br />
            <fieldset class="birthdate" name="birthdate">
              <validation-provider v-slot="{ errors }" rules="required|numeric">
                <input
                  v-model="form.year"
                  class="__date-input year"
                  maxlength="4"
                  type="text"
                  name="birthdate-year"
                />
                <app-input-error :error="errors[0]"></app-input-error>
              </validation-provider>
              -
              <validation-provider v-slot="{ errors }" rules="required|numeric">
                <input
                  v-model="form.month"
                  class="__date-input month"
                  maxlength="2"
                  type="text"
                  name="birthdate-month"
                />
                <app-input-error :error="errors[0]"></app-input-error>
              </validation-provider>
              -
              <validation-provider v-slot="{ errors }" rules="required|numeric">
                <input
                  v-model="form.day"
                  class="__date-input day"
                  maxlength="2"
                  type="text"
                  name="birthdate-day"
                />
                <app-input-error :error="errors[0]"></app-input-error>
              </validation-provider>
            </fieldset>
          </div>
        </form>
      </div>
      <div class="form-bottom-side" />
    </div>
  </validation-observer>
</template>

<script>
import formOperations from '@/mixins/formOperations'

export default {
  name: 'SectionHiringInformationForm',
  mixins: [formOperations],
  props: {
    value: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      applying_jobs: [ 'Full-Stack Web Developer', 'General Manager', 'SEO and Marketing Expert', 'Vice President' ]
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
      return `${this.form.day}-${this.form.month}-${this.form.year}`
    },
  },
  watch: {
    birthdate(val) {
      this.form.birthdate = val
    },
  },
}
</script>

<style scoped lang="scss">
$perspective: 100px;

.section-hiring-cube {
  transform-style: preserve-3d;
  perspective: $perspective;
  perspective-origin: bottom;
}
.section-hiring-form {
  border-top: 2px solid #000000;
  border-bottom: 1px solid #000000;
  background-color: #d43737;

  h1 {
    text-align: right;
    padding-right: 2rem;
    font-size: 3rem;
    font-weight: 400;
    line-height: 60px;
    color: #ffffff;
  }

  .section-form {
    width: 100%;
    display: flex;
    margin-bottom: 3rem;

    label {
      font-size: 1rem;
      line-height: 20px;
      color: #ffffff;
    }

    input {
      background: #d43737;
      border: 2px solid #000000;
      outline: none;
    }

    .section-form__column-left {
      width: 44.5%;
      display: flex;
      flex-direction: column;
      gap: 2.1rem;

      div {
        margin-left: 3rem;

        input {
          margin-top: 5px;
          height: 1.8rem;
          width: 85%;
          background: #d43737;
          border: 2px solid #000000;
          color: #ffffff;
        }
      }
    }

    .section-form__column-right {
      width: 55.5%;

      .applying-for {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        margin: 0.5rem 0 2rem;
        width: 40%;
        padding: 1rem 2rem;
        // background: #8a8a8a;
        background: url('/gray-texture.svg');
        border: 2px solid #000000;

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

      .birthdate {
        border: none;
        padding-left: 0;

        .__date-input {
          width: 5rem;
          height: 1.8rem;
          text-align: center;
          color: #ffffff;
        }
        .month,
        .day {
          width: 2.5rem;
        }
      }
    }
  }
}
.form-bottom-side {
  z-index: 10;
  position: absolute;
  height: 40px;
  width: 100%;
  background-color: #ad23de;
  bottom: -20px;
  transform: rotateX(-20deg) translateY(20px);
}
</style>
