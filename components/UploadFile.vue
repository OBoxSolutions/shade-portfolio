<template>
<div class="upload-container">
  <h1>Do you want to attach some video or picture to your answer?</h1>
  <input type="file" accept="image/*,video/*" @change="loadFile($event)">
  <!-- <base-button  @click="uploadFile">Upload</base-button> -->
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
    ...mapGetters(['getUserName']),
  },
  methods: {
    loadFile(e) {
      this.file = e.target.files[0]
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
.upload-container{
  width: 20%;
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 100%;
  height: calc(30% - 10px);

  h1{
    font-family: sans-serif;
    font-size: 1.2em;
    width: 90%;
    text-align: center;
    margin: 1em auto;
    // margin-top: 1em;
  }
  input{
    margin-left: 1.8em;
  }
}
</style>
