<template>
<div class="tabs-container">
  <div class="tabs-header">
    <img src="/down-arrow.svg" alt="down-arrow">
    <h1>Questions</h1>
  </div>
  <div class="tabs">
    <div class="tab-links">
      <button
        v-for="(question, index) in questions"
        :key="`question-${index}`"
        :class="{ isActive: index === activeTab }"
        class="tab-button"
        @click="changeTab(index, `answer-${index}`)">
          {{question.text}}
      </button>
    </div>
    <div class="tab-content">
      <div
        v-for="(question, index) in questions"
        v-show="index === 0"
        :id="`answer-${index}`"
        :key="`answer-${index}`"
        class="answer">
          <textarea :id="`input-${index}`" placeholder="Type your answer here..." class="answer-input"></textarea>
          <upload-file />
      </div>
    </div>
  </div>
</div>
</template>

<script>
import UploadFile from './UploadFile.vue';
export default {
  components: { UploadFile },
  data() {
    return {
      questions: [
        { text: 'What is your proudest accomplishment?' },
        { text: 'What moral value do you value the most?' },
        { text: 'Are you ever justified to kill?' },
        { text: 'Is morality subjective or objective?' },
        { text: 'If you could live forever, would do you want to?' },
        { text: 'If you could change the world, what would you change?' },
        { text: 'Some questions?' },
        { text: 'Are you satisfied with yourself?' },
        { text: 'Maybe have anything to add? Any questions perhaps?' },
      ],
      activeTab: 0
    }
  },
  methods: {
    changeTab(tabIndex, answerIndex){
      const nonActiveTabs = document.getElementsByClassName("answer");
      for (let i = 0; i < nonActiveTabs.length; i++) {
        nonActiveTabs[i].style.display = "none";
      }
      document.getElementById(answerIndex).style.display = "block";
      this.activeTab = tabIndex
    }
  }
}
</script>

<style lang="scss" scoped>
.tabs-container{
  $header-height: 60px;
  .tabs-header{
    background-color: #222940;
    display: flex;
    color: #ffffff;
    height: $header-height;

    img{
      margin-left: 5px;
      width: 45px;
    }

    h1{
      font-family: sans-serif;
      margin: 10px 5px;
    }
  }
  .tabs{
    display: flex;
    background-color: #222940;
    font-family: sans-serif;

    height: calc(100% - $header-height);
    color: #E5E5E5;

    .tab-links{
      width: 50%;
      background-color: #1B2032;
      display: flex;
      flex-direction: column;
      gap: 10px;
      overflow-y: auto;

      .tab-button{
        background-color: #1B2032;
        color: #E5E5E5;
        border: none;
        outline: none;
        cursor: pointer;
        text-align: justify;
        padding: 1em;
      }
    }
  }

}
.tab-content{
  width: 50%;

  .answer{
    height: 100%;
  }

  .answer-input{
    width: 98.7%;
    height: 70%;
    background-color: transparent;
    border: none;
    outline: none;
    resize: none;
    color: #ffffff;
  }
}
.isActive {
  background-color: #414E77 !important;
}
</style>
