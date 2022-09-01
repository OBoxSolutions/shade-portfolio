<template>
<div class="upload-container">
  <div class="upload-input">
    <input type="file" accept="image/*,video/*" @change="loadFile($event)">
  </div>
  <base-button @click="uploadFile">Upload</base-button>
</div>
</template>

<script>
import { mapGetters } from "vuex"
import { getStorage, ref, uploadBytes } from 'firebase/storage'
import BaseButton from './BaseButton.vue'


export default {
  name: 'UploadFile',
  components: { BaseButton },
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
      const storage = getStorage()
      const fileRef = ref(storage, this.getUserName+'/'+this.file.name)
      uploadBytes(fileRef, this.file)
      .then((snapshot) => {
        console.log('uploaded a file')
      })
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
}
</style>
