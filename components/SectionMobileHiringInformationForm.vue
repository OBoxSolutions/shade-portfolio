<template>
  <div class="section-hiring-cube">
  <div class="section-hiring-form">
    <h1>BASIC INFORMATION</h1>
    <form class="section-form">
        <div>
          <label for="full-name">Full name:</label><br>
          <input id="full-name"  v-model="hiringName" type="text" name="full-name"><br>
        </div>
        <div>
          <label for="email-address">Email address:</label><br>
          <input id="email-address" type="email" name="email-address"><br>
        </div>
        <div>
          <label for="birthdate">Date of Birth:</label>
          <fieldset class="birthdate" name="birthdate">
            <input class="birthdate-input year" type="text" name="birthdate-year"> -
            <input class="birthdate-input month" type="text" name="birthdate-month"> -
            <input class="birthdate-input day" type="text" name="birthdate-day">
          </fieldset>
        </div>
        <div>
          <label for="country">Country in which you are based:</label><br>
          <input id="country" type="text" name="country"><br>
        </div>
        <div>
          <label for="applying-for">Applying for:</label><br>
          <div class="applying-for">
            <div>
              <input id="full-stack" type="radio" name="applying-for" checked value="Full-Stack Web Developer">
              <label for="full-stack">Full-Stack Web Developer</label>
            </div>
            <div>
              <input id="general-manager" type="radio" name="applying-for" value="General Manager">
              <label for="general-manager">General Manager</label>
            </div>
            <div>
              <input id="seo-marketing" type="radio" name="applying-for" value="SEO and Marketing Expert">
              <label for="seo-marketing">SEO and Marketing Expert</label>
            </div>
            <div>
              <input id="vice-president" type="radio" name="applying-for" value="Vice President">
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
import { mapGetters, mapMutations } from "vuex"
export default {
  name: 'SectionMobileHiringInformationForm',
  computed: {
    ...mapGetters(['getHiringName']),
    hiringName: {
        get(){
            return this.getHiringName
        },
        set(value){
            this.setHiringName(value)
        }
    }
  },
  methods: {
    ...mapMutations(['setHiringName']),
  }
}
</script>

<style lang="scss" scoped>
.section-hiring-cube{
  transform-style: preserve-3d;
  perspective: 100px;
  perspective-origin: bottom;
}
.section-hiring-form{
  border-top: 2px solid #000000;
  border-bottom: 2px solid #000000;
  background-color: #D43737;

  h1{
    margin: 1.5rem 1rem 0 0;
    text-align: right;
    font-size: 1.1rem;
    font-weight: 400;
    color: #FFFFFF;
  }

  div{
    width: 90%;
  }

  .section-form{
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    label{
      font-size: 1rem;
      line-height: 20px;
      color: #FFFFFF;
    }

    input{
      width: 100%;
      background: #D43737;
      border: 2px solid #000000;
      outline: none;
      color: #FFFFFF;
      margin-top: 8px;
      padding: 5px 0;
    }

    .birthdate{
      border: none;
      padding-left: 0;

      .birthdate-input{
        width: 5rem;
        height: 1.7rem;
        text-align: center;
        color: #FFFFFF;
        padding: 0;
      }
      .month, .day {
        width: 2.5rem;
      }
    }

     .applying-for{
        display: flex;
        flex-direction: column;
        gap: .5rem;
        margin: .5rem 0 2rem;
        padding: 1rem;
        background: #8A8A8A;
        border: 2px solid #000000;
        width: calc(100% + 6px);
        box-sizing: border-box;

        div{
          display: flex;
          gap: .8rem;
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
            content: "";
            width: .8rem;
            height: .84rem;
            border-radius: 50%;
            transform: scale(0);
            transition: 120ms transform ease-in-out;
            box-shadow: inset 1rem 1rem #FFAC06;
          }
          &:checked::before {
            transform: scale(1);
          }
        }

        label{
          margin-top: 2px;
          font-style: normal;
          font-weight: 400;
          font-size: 10px;
          line-height: 15px;
          color: #FFFFFF;
        }
      }
  }
}
.form-bottom-side{
  z-index: 10;
  position: absolute;
  height: 30px;
  width: 100%;
  background-color: #AD23DE;;
  bottom: -18px;
  transform: rotateX(-35deg) translateY(11px);
}
</style>
