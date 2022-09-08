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
        <span v-if="question.file !== null">
          <img v-if="question.file.type === 'image/jpeg' || question.file.type === 'image/png'" src="/image-file.svg" alt="image-file">
          <img v-else src="/video-file.svg" alt="video-file">
          {{question.file.name}}
        </span>
      </button>
    </div>
    <div class="tab-content">
      <div
        v-for="(question, index) in questions"
        v-show="index === 0"
        :id="`answer-${index}`"
        :key="`answer-${index}`"
        class="answer">
          <textarea-input-answer @answer="question.answer = $event" />
          <div class="file-picker-container">
            <label
              :for="`file-picker-${index}`"
              class="file-picker-label">
                Attach a file to your answer
            </label>
            <input
              :id="`file-picker-${index}`"
              class="file-picker-input"
              type="file"
              accept="image/*,video/*"
              @change="question.file = $event.target.files[0]"
            >
          </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapGetters } from "vuex"
import { getStorage, ref, uploadBytes } from 'firebase/storage'
import TextareaInputAnswer from './TextareaInputAnswer.vue';

export default {
  components: { TextareaInputAnswer },
  data() {
    return {
      questions: [
        { text: 'What is your proudest accomplishment?', answer: '', file: null },
        { text: 'What moral value do you value the most?', answer: '', file: null },
        { text: 'Are you ever justified to kill?', answer: '', file: null },
        { text: 'Is morality subjective or objective?', answer: '', file: null },
        { text: 'If you could live forever, would do you want to?', answer: '', file: null },
        { text: 'If you could change the world, what would you change?', answer: '', file: null },
        { text: 'Some questions?', answer: '', file: null },
        { text: 'Are you satisfied with yourself?', answer: '', file: null },
        { text: 'Maybe have anything to add? Any questions perhaps?', answer: '', file: null },
      ],
      activeTab: 0,
    }
  },
  computed: {
    ...mapGetters(['getUserName']),
  },
  methods: {
    changeTab(tabIndex, answerIndex){
      const nonActiveTabs = document.getElementsByClassName("answer");
      for (let i = 0; i < nonActiveTabs.length; i++) {
        nonActiveTabs[i].style.display = "none";
      }
      document.getElementById(answerIndex).style.display = "block";
      this.activeTab = tabIndex
    },
    uploadFile(){
      if(this.file === null || this.getUserName === ''){
        console.log('missing parameters')
      }
      else{
        const storage = getStorage()
        const fileRef = ref(storage, this.getUserName+'/'+this.file.name)
        uploadBytes(fileRef, this.file)
        .then((snapshot) => {
          console.log('uploaded a file')
        })
      }
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

        display: flex;
        flex-direction: column;

        span{
          display: flex;
          align-items: center;
          gap: .5em;
          margin-top: .8em;

          img{
            width: 1.8em;
            margin-left: 1em;
          }
        }
      }
    }
  }

}
.tab-content{
  width: 50%;

.file-picker-container{
  height: 10%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;

  .file-picker-label{
    background-color: #1B2032;
    text-align: center;
    color:white;
    border: 1px solid;
    border-radius: 5px;
    font-family: sans-serif;
    display: inline-block;
    margin:5px;
    padding:10px;
    box-shadow:0px 1px 3px rgba(0,0,0,0.4);
    cursor: pointer;
  }

  .file-picker-input{
    display:none;
  }
}

  .answer{
    height: 100%;
  }
}
.isActive {
  background-color: #414E77 !important;
}
</style>
