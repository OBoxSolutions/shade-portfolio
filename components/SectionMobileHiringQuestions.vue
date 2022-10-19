<template>
  <div class="section-questions__outside-box">
    <div
      v-for="(question, index) in questions"
      :key="`question-${index}`"
      class="question-wraper">
      <div class="question-info">
        <h1>{{question.text}}</h1>
        <textarea-input-answer class="input-answer" @answer="updateAnswer(question, $event)" />
      </div>
    </div>
    <div class="upload-files-wraper">
      <FilePond
        ref="pond"
        class="filepond"
        name="filepong"
        allow-multiple="true"
        credits="false"
        style-button-remove-item-position='right'
        label-idle="Select files here to send them"
        :onaddfile="updateFiles"
        :onremovefile="updateFiles"
        @init="handleFilePondInit">
      </FilePond>
      <div class="upload-file-image">
        <img src="/upload-file.svg" alt="upload-file-picture">
      </div>
    </div>
    <div class="hiring-button-container">
      <base-button only-bottom class="hiring-button button--green">
        <h1>Submit</h1>
      </base-button>
      <div class="__bottom-text">
        <h1>It came through!</h1>
      </div>
    </div>
  </div>
</template>

<script>
import vueFilePond from 'vue-filepond'
import 'filepond/dist/filepond.min.css'

import { mapState, mapMutations } from "vuex"
export default {
  name: 'SectionMobileHiringQuestions',
    components: {
      FilePond: vueFilePond()
  },
  computed: {
    ...mapState(['questions']),
  },
  mounted(){
    document.getElementById('lineCounter').style.setProperty('height', '18rem', 'important')
  },
  methods: {
    ...mapMutations(['setAnswerToQuestion', 'setMobileFiles']),
    updateAnswer(question, answer){
      this.setAnswerToQuestion({question, answer})
    },
    updateFiles(){
      const uploadFiles = []
      const allFiles = this.$refs.pond.getFiles()
      allFiles.forEach(element => {
        uploadFiles.push(element.file)
      })
      this.setMobileFiles(uploadFiles)
    },
    handleFilePondInit(){
      const element = document.querySelector('.filepond--drop-label');

      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'filepond--media-search-action';
      button.innerHTML = 'Import from Storage'

      element.appendChild(button);
    }
  },

}
</script>

<style lang="scss" scoped>

  .section-questions__outside-box{
    background: linear-gradient(to right, #8A8A8A 6.5%,#8A8A8A 6.5%,#DBDBDB 6.5%,#DBDBDB 93%,#8A8A8A 93%);;
    width: 100%;
    margin: auto;
    padding: 4rem 0 0;

    display: flex;
    flex-direction: column;
    gap: 6rem;

    .question-wraper{
      width: 100%;
      height: 20rem;
      background-color: #FFFFFF;
      padding-bottom: 3rem;
      box-shadow: 1.19239px 1.19239px 1.49048px 0.298097px rgba(0, 0, 0, 0.25);

      .question-info{
        width: 94%;
        margin: auto;
        h1{
          height: 2rem;
          margin: 1rem 0;
          font-family: 'Lucida Console';
          font-weight: 400;
          font-size: 18px;
          line-height: 20px;
          color: #000000;
        }
        .input-answer{
          background-color: #222940;
          height: 18rem;
        }

      }
    }
  }
  .upload-files-wraper{
    display: flex;
    .filepond{
      width: 60%;
    }
    .upload-file-image{
      width: 40%;
      height: 12rem;
      background: #222940;
      outline: 2px solid #000000;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
  .hiring-button-container{
    width: 100%;
    position: relative;
    background: #FFFFFF;
    padding: 2rem 0;
    display: flex;
    justify-content: center;
    border-top: 3px solid #000000;

    .hiring-button{
      padding: 1rem 3rem !important;
      border-radius: 5px;
      margin-bottom: 2rem;

      transform-style: preserve-3d;
      perspective: 100px;
      perspective-origin: bottom;

      h1{
        font-weight: 400;
        margin: 1rem auto;
        color: #ffffff;
      }
      &:active {
        transform: translateY(10px);
      }
    }
    .__bottom-text{
      position: absolute;
      width: 100%;
      bottom: 0;
      background: #49EA76;

      h1{
        font-weight: 400;
        font-size: 10px;
        line-height: 10px;
        text-align: center;
        color: #FFFFFF;
      }
    }
  }

</style>
