<template>
  <div class="section-hiring-form">
    <h1>BASIC INFORMATION</h1>
    <form class="section-form">
      <div class="section-form__column-left">
        <label for="full-name">Full name:</label><br>
        <input id="full-name" type="text" name="full-name"><br>
        <label for="email-address">Email address:</label><br>
        <input id="email-address" type="email" name="email-address"><br>
        <label for="country">Country in which you are based:</label><br>
        <input id="country" type="text" name="country"><br>
      </div>
      <div class="section-form__column-right">
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
        <label for="birthdate">Date of Birth:</label><br>
        <fieldset class="birthdate" name="birthdate">
          <input class="birthdate-input year" type="text" name="birthdate-year"> -
          <input class="birthdate-input month" type="text" name="birthdate-month"> -
          <input class="birthdate-input day" type="text" name="birthdate-day">
        </fieldset>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SectionHiringInformationForm',
}
</script>

<style scoped lang="scss">
.section-hiring-form{
  border-top: 2px solid #000000;
  background-color: #D43737;

  h1{
    text-align: right;
    padding-right: 2rem;
    font-size: 3.75rem;
    font-weight: 400;
    line-height: 60px;
    color: #FFFFFF;
  }

  .section-form{
    width: 100%;
    display: flex;

    label{
      font-size: 20px;
      line-height: 20px;
      color: #FFFFFF;
    }

    input{
      background: #D43737;
      border: 2px solid #000000;
      outline: none;
    }

    .section-form__column-left{
      width: 44.5%;

      input{
        height: 1.5rem;
      }
    }

    .section-form__column-right{
      width: 55.5%;

      .applying-for{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin: .5rem 0 2rem;
        width: 40%;
        padding: 1rem 2rem;
        background: #8A8A8A;
        border: 2px solid #000000;

        div{
          display: flex;
          gap: 1em;
        }

        input[type='radio'] {
          appearance: none;
          background-color: #fff;
          margin: 0;
          width: 20px;
          height: 20px;
          border: 2px solid black;
          border-radius: 50%;

          display: grid;
          place-content: center;

          &::before {
            content: "";
            width: 16px;
            height: 16px;
            border-radius: 50%;
            transform: scale(0);
            // transition: 120ms transform ease-in-out;
            box-shadow: inset 1em 1em #FFAC06;
          }
          &:checked::before {
            transform: scale(1);
          }
        }

        label{
          margin-top: 3px;
          font-style: normal;
          font-weight: 400;
          font-size: 15px;
          line-height: 15px;
          color: #FFFFFF;
        }
      }

      .birthdate{
        border: none;
        padding-left: 0;

        .birthdate-input{
          width: 5rem;
          height: 1.8rem;
          text-align: center;
          color: #FFFFFF
        }
        .month, .day {
          width: 2.5rem;
        }
      }
    }
  }
}

</style>
