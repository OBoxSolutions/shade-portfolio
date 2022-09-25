<template>
  <div class="section-questions__outside-box">
    <div
      v-for="(question, index) in questions"
      :key="`question-${index}`"
      class="question-wraper">
      <div class="question-info">
        <h1>{{question.text}}</h1>
        <textarea-input-answer  class="input-answer" @answer="updateAnswer(question, $event)" />
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

      >
      </FilePond>
      <div class="upload-file-image">
        <img src="/upload-file.svg" alt="upload-file-picture">
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
    ...mapMutations(['setAnswerToQuestion', 'setFileToQuestion', 'setMobileFiles']),
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
    }
  },

}
</script>

<style lang="scss" scoped>

  .section-questions__outside-box{
    background: linear-gradient(to right, #8A8A8A 6.5%,#8A8A8A 6.5%,#DBDBDB 6.5%,#DBDBDB 93%,#8A8A8A 93%);;
    width: 100%;
    margin: auto;
    padding: 4rem 0;

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

</style>
