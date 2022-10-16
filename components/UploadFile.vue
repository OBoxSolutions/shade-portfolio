<template>
  <div class="file-picker-container">
    <label for="file-picker" class="file-picker">{{ file !== null ? file.name : 'Attach some file to your answer' }}</label>
    <input id="file-picker" type="file" accept="image/*,video/*" @change="loadFile($event)">
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import { getStorage, ref, uploadBytes } from 'firebase/storage'
// import BaseButton from './BaseButton.vue'


export default {
  name: 'UploadFile',
  // components: { BaseButton },
  data (){
    return {
      file: null,
    }
  },
  computed: {
    ...mapGetters(['getHiringName']),
  },
  methods: {
    loadFile(e) {
      this.file = e.target.files[0]
    },
    uploadFile(){
      if(this.file === null || this.getHiringName === ''){
        console.log('missing parameters')
      }
      else{
        const storage = getStorage()
        const fileRef = ref(storage, this.getHiringName+'/'+this.file.name)
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
.file-picker-container{
  height: 20%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .file-picker{
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

  .file-picker + [type='file']{
    display:none;
  }
}
</style>
