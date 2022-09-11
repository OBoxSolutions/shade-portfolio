<template>
  <div class="section-questions">
    <div class="section-questions__outside-box">
      <div class="section-questions__inside-box">
        <div class="questions-white-box">
          <section-hiring-question-tabs class="questions" />
        </div>
        <div class="questions-user-name">
          <h1>{{ getUserName }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SectionHiringQuestionTabs from './SectionHiringQuestionTabs.vue'

export default {
  components: { SectionHiringQuestionTabs },
  computed: {
    ...mapGetters(['getUserName']),
  },

}
</script>

<style scoped lang="scss">
.section-questions{
  height: 900px;
  background: url('/questions-cover-up.svg');
  padding-top: 2rem;

  .section-questions__outside-box{
    background-color: #8A8A8A;
    width: 88%;
    height: 100%; //remove when content have added
    margin: auto;
    margin-bottom: 1rem;

    .section-questions__inside-box{
      background-color: #DBDBDB;
      width: 95%;
      height: 100%; //remove when content have added
      margin: auto;

      display: flex;
      flex-direction: column;

      .questions-white-box{
        background-color: #FFFFFF;
        width: 97%;
        height: 78%;
        box-shadow: 2px 2px 1px #8A8A8A;
        margin: 3rem auto 1rem;

        display: flex;
        justify-content: center;
        align-items: center;

        .questions{
          border: 5px solid black;
          width: 95%;
          height: 90%;
        }
      }
      .questions-user-name{
        width: 97%;
        margin: 0 auto;
        h1{
          text-align: right;
        }
      }
    }
  }
}
</style>
