<template>
  <div class="section-hiring-form">
    <div class="section-hiring-form__title">
      <h1>BASIC INFORMATION</h1>
    </div>
    <form class="section-form">
      <div class="section-form__column-left">
        <label for="full-name">Full name:</label><br>
        <input class="full-name" type="text" name="full-name"><br>
        <label for="email-address">Email address:</label><br>
        <input class="email-address" type="email" name="email-address"><br>
        <label for="country">Country in which you are based:</label><br>
        <input class="country" type="text" name="country"><br>
      </div>
      <div class="section-form__column-right">
        <label for="applying-for">Applying for:</label><br>
        <textarea class="applying-for" name="applying-for" cols="30" rows="10"></textarea><br>
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

  .section-hiring-form__title{
    width: 70%;
    margin-left: auto;

    h1{
      text-align: right;
      padding-right: 2rem;
      font-family: 'Press Start 2P', cursive;
      font-style: normal;
      font-size: 3.75rem;
      font-weight: 400;
      line-height: 60px;
      color: #FFFFFF;
    }
  }


  .section-form{
    width: 100%;
    display: flex;

    .section-form__column-left{
      width: 44.5%;

    }

    .section-form__column-right{
      width: 55.5%;

      .birthdate{
        border: none;
        padding-left: 0;

        .birthdate-input{
          width: 4rem;
        }
        .month, .day {
          width: 2rem;
        }
      }
    }
  }
}

</style>
