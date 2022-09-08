<template>
  <div>
    <p><textarea id='lineCounter' ref="lineCounter" wrap='off' readonly>1</textarea>
    <textarea id='codeEditor' ref="codeEditor" wrap="off" placeholder="Type your answer here..." @scroll="scroll" @keydown="inputTab" @input="handlerCounter"></textarea></p>
  </div>
</template>

<script>

export default {
  name: 'TextareaInputAnswer',
data () {
  return {
    lineCountCache: 0,
  }
},
methods: {
  scroll(){
    this.$refs.lineCounter.scrollTop = this.$refs.codeEditor.scrollTop;
    this.$refs.lineCounter.scrollLeft = this.$refs.codeEditor.scrollLeft;
  },
  inputTab(e){
    const { keyCode } = e;
    const { value, selectionStart, selectionEnd } = this.$refs.codeEditor;
    if (keyCode === 9) {  // TAB = 9
      e.preventDefault()
      this.$refs.codeEditor.value = value.slice(0, selectionStart) + '\t' + value.slice(selectionEnd);
      this.$refs.codeEditor.setSelectionRange(selectionStart+2, selectionStart+2)
    }
  },
  line_counter() {
      const lineCount = this.$refs.codeEditor.value.split('\n').length
      const outarr = [];
      if (this.lineCountCache !== lineCount) {
         for (let x = 0; x < lineCount; x++) {
            outarr[x] = (x + 1)
         }
         this.$refs.lineCounter.value = outarr.join('\n')
      }
      this.lineCountCache = lineCount
  },
  handlerCounter(){
    this.line_counter();
    this.$emit('answer', this.$refs.codeEditor.value)
  }
},
}
</script>

<style lang="scss" scoped>
div{
    height: 80%;
    p{
      margin: 0;
      height: 100%;
    }
}
#codeEditor, #lineCounter {
    width: 100%;
    margin: 0;
    padding: 5px 0;
    resize: none;
    font-size: 16px;
    line-height: 1.2;
    outline: none;
    border: none;
    box-sizing: border-box;
}
#lineCounter {
      display: flex;
      overflow-y: hidden;
      text-align: right;
      box-shadow: none;
      color: #707070;
      position: absolute;
      width: 1.5rem;
      height: 25rem;
      /* Determine appearance of line counter */
      background-color: transparent;
      color:#ffffff;
}
#codeEditor {
      padding-left: calc(1.5rem + 8px);
      height: 100%;
      /* Determine appearance of code editor */
      background-color: transparent;
      color:#ffffff;
}

</style>
