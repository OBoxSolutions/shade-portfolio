<template>
  <div class="section-questions__outside-box">
    <div class="section-questions__inside-box">
      <div class="question-container">
        <div class="question-title">
          <h1>Question</h1>
        </div>
        <textarea-input-answer class="question-answer" />
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .section-questions__outside-box{
    background-color: #8A8A8A;
    width: 100%;
    height: 900px;
    margin: auto;
    position: relative;

    .section-questions__inside-box{
      background-color: #DBDBDB;
      width: 87%;
      height: 100%;
      margin: auto;


      // display: flex;
      // flex-direction: column;

      // .questions-white-box{
      //   background-color: #FFFFFF;
      //   width: 97%;
      //   height: 78%;
      //   box-shadow: 2px 2px 1px #8A8A8A;
      //   margin: 3rem auto 1rem;

      //   display: flex;
      //   justify-content: center;
      //   align-items: center;

      //   .questions{
      //     border: 5px solid black;
      //     width: 95%;
      //     height: 90%;
      //   }
      // }
    }
  }
</style>
