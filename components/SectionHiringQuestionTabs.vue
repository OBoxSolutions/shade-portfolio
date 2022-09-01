<template>
<div class="tabs">
  <div class="tab-links">
    <button
      v-for="(question, index) in questions"
      :key="`question-${index}`"
      class="tab-button"
      @click="changeTab(`answer-${index}`)">
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
        <p>{{question.text}}</p>
        <upload-file />
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
    }
  },
  methods: {
    changeTab(tabClass){
      const nonActiveTabs = document.getElementsByClassName("answer");
      for (let i = 0; i < nonActiveTabs.length; i++) {
        nonActiveTabs[i].style.display = "none";
      }
      document.getElementById(tabClass).style.display = "block";
    }
  }
}
</script>

<style lang="scss" scoped>
.tabs{
  display: flex;
  background-color: #222940;
  height: 100%;
  color: #E5E5E5
}
.tab-links{
  width: 50%;
  background-color: #1B2032;
  display: flex;
  flex-direction: column;
  gap: 10px;

  .tab-button{
    background-color: #1B2032;
    color: #E5E5E5;
    border: none;
    outline: none;
    cursor: pointer;
    text-align: justify;
  }
}
.tab-content{
  width: 50%;
}
</style>
