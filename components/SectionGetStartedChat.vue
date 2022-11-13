<template>
    <div class="section-chat">
        <div class="__title">
            Answer a few questions about your project for us to get a better idea:
        </div>
        <div class="__question-list">
            <div
                v-for="(question, index) in questions"
                :key="`question-${index}`"
                class="__question" >

                <div v-if="question.input" class="__file-container-mobile">
                    <div :class="!inputFileName(question.model) ? '__file-icon' : '__file-icon-loaded'"></div>
                    <label for="file-input" class="__file-input">{{inputFileName(question.model) || 'drop_or_select_file_here'}}</label>
                    <input id="__file-input" type="file" @change="loadFile(question.model, $event)"/>
                </div>
                <div class="__input">
                    <textarea-input-answer @answer="setQuestionsAnswers(question.model, $event)"></textarea-input-answer>
                </div>
                <div class="__clip">
                    <div class="__inner">
                        <div class="__edges">

                        </div>
                    </div>
                </div>

                <div class="__cover"></div>
                <div class="__line"></div>
                <div class="__text-container">
                    <div class="__text">
                        <div class="__title">
                            {{question.title}}
                        </div>
                        <div class="__description">
                            {{question.description}}
                        </div>

                        <div v-if="question.input" class="__file-container">
                            <div :class="!inputFileName(question.model) ? '__file-icon' : '__file-icon-loaded'"></div>
                            <label for="file-input" class="__file-input">{{inputFileName(question.model) || 'drop_or_select_file_here'}}</label>
                            <input id="__file-input" type="file" @change="loadFile(question.model, $event)"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'SectionGetStartedChat',
    props: {
      value: {
        type: Object,
        default: () => {},
      },
    },
    data() {
        return {
        questions: [
            { title: 'YOU', description: 'Explain your brand or business in several sentences. Please describe the core products or services you provide.', input:false, model: 'about' },
            { title: 'YOUR GOALS', description: 'What are you hoping to achieve by getting your website your website built? List any goals that come to mind (for example: more sales, more appointments, more engagement...)', input:false, model: 'goals' },
            { title: 'BUDGET', description: 'What is your approximate budget for this project? (in USD)', input:false, model: 'budget' },
            { title: 'LOGO', description: 'Does your company have a logo?',input:true, model: 'logo_info' },
            { title: "MORE INFO", description: 'Additional space to add information and images', input:true, model: 'more_info' },
        ],
        position: '',
        file: null
        }
    },
    computed: {
      form: {
        get() {
          return this.value
        },
        set(val) {
          this.$emit('input', val)
        },
      },
    },
    mounted(){
      this.form.app = 'Discord'

      const lineCounters = document.getElementsByClassName('lineCounter')
      const largeWidth = window.innerWidth >= 768
      if(largeWidth){
        for (let i = 0; i < lineCounters.length; i++) {
          lineCounters.item(i).style.setProperty('height', '18rem', 'important')
        }
      }
      else{
        for (let i = 0; i < lineCounters.length; i++) {
          lineCounters.item(i).style.setProperty('height', '10rem', 'important')
        }
      }
  },
    methods: {
      setQuestionsAnswers(question, answer){
        this.form[`${question}`] = answer
      },
      loadFile(question, event){
        if(question === 'logo_info'){
          this.form.logo_file = event.target.files[0]
        }
        else{
          this.form.more_info_file = event.target.files[0]
        }
      },
      inputFileName(model){
        if(model === 'logo_info' && this.form.logo_file !== ''){
          return this.form.logo_file.name
        }
        if(model === 'more_info' && this.form.more_info_file !== ''){
          return this.form.more_info_file.name
        }
        return false

      },
    }
  }
</script>


<style scoped lang="scss">
.section-chat{
    background-image: url("/get-started/in-the-stars.gif");
    background-size:cover;
    background-repeat: repeat-y;
    padding: 1rem 0;

    .__title{
        text-align: center;
        color:white;
        font-size: 1.5rem;
        padding: 1rem;
    }

    .__question-list{

        .__question{
            display: flex;
            flex-direction: column-reverse;
            align-items: center;
            perspective: 300px;
            perspective-origin: top;
            margin: 3rem 0;
            .__file-container-mobile{
                width: 100%;
                height: 3rem;
                border: 1px solid black;
                display: flex;
                position: relative;
                cursor: pointer;
                .__file-icon, .__file-icon-loaded{
                    width: 10%;
                    height: 100%;
                    // background-image: url("/get-started/file.png");
                    background-size: 80%;
                    background-repeat: no-repeat;
                    background-position: center;
                    background-color: #8A8A8A;
                    border-right: 1px solid black;
                }
                .__file-icon{
                    background-image: url("/get-started/file.png");
                }
                .__file-icon-loaded{
                    background-image: url("/get-started/file-loaded.svg");
                }
                .__file-input{
                    background-color: #CC8800;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 0.7rem;
                    color:white;
                    cursor: pointer;
                }
                #__file-input{
                    opacity: 0;
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    cursor: pointer;
                }
            }
            .__input{
                height: 10rem;
                width: 100%;
                border:2px solid white;
                margin-right: calc(100vw/85);
                background-color: #071C50;
                padding: 1rem;
                font-family: 'Lucida Console', sans-serif !important;
                z-index: 20;
                position: relative;
                div{
                    height: 100% !important;
                }

            }
            .__input:deep(#lineCounter){
                height: calc(100% - 2rem) !important;
            }
            .__clip{
                background-color: #5A55F8;
                display: flex;
                align-items: center;
                padding: 0 0.5rem;
                position: relative;
                margin:-0.5rem 0;
                width:90%;
                height: 2rem;
                transform: rotateX(88deg);
                .__inner{
                    height: 70%;
                    background-color: #4945C2;
                    width: 100%;
                    border:1px solid black;
                    border-left: 0;
                    display: none;
                    align-items: center;
                    perspective: 300px;

                    .__edges{
                        width: 200%;
                        height: 95%;
                        border: 1px solid black;
                        border-width: 1px 0;
                        transform:rotateY(323deg);
                    }
                }
            }
            .__text-container{
                background-color: #FFAC06;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 90%;
                .__text{
                    width: 70%;
                    background-color: #DDD6BF;
                    height: 70%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 1rem;
                    text-align: center;
                    gap:1rem;
                    z-index: 20;
                    margin: 1.5rem 0;
                    .__title{
                        color:black;
                    }
                    .__description{
                        font-family: 'Lucida Console', sans-serif !important;
                    }
                    .__file-container{
                        width: 100%;
                        height: 3rem;
                        border: 1px solid black;
                        display: none;
                        position: relative;
                        cursor: pointer;
                        .__file-icon, .__file-icon-loaded{
                            width: 10%;
                            height: 100%;
                            // background-image: url("/get-started/file.png");
                            background-size: 80%;
                            background-repeat: no-repeat;
                            background-position: center;
                            background-color: #8A8A8A;
                            border-right: 1px solid black;
                        }
                        .__file-icon{
                            background-image: url("/get-started/file.png");
                        }
                        .__file-icon-loaded{
                            background-image: url("/get-started/file-loaded.svg");
                        }
                        .__file-input{
                            background-color: #CC8800;
                            width: 100%;
                            height: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            font-size: 0.7rem;
                            color:white;
                            cursor: pointer;
                        }
                        #__file-input{
                            opacity: 0;
                            position: absolute;
                            width: 100%;
                            height: 100%;
                            cursor: pointer;
                        }
                    }
                }


            }

            .__cover{
                position: absolute;
                height:70%;
                width: 1rem;
                background-color: #5A55F8;
                z-index: 20;
                margin-left: 58.9%;
                border-right: 1px solid black;
                display: none;
            }
            .__line{
                height: 3rem;
                position: absolute;
                right: 0;
                margin-right: 30%;
                background-color: #D9D9D9;
                width:100vw;
                display: none;
            }
        }
    }

}


/* Breakpoints begin here  */
@media(min-width: 768px) {
    .section-chat{
        .__title{
            width: 25rem;
            padding: 0;
        }
        .__question-list{

            .__question{
                flex-direction: row;
                height: 20rem;
                perspective-origin: right;

                .__file-container-mobile{
                    display: none;
                }
                .__input{
                    height: calc(100% - 2rem);
                    width: 60%;
                }

                .__text-container{
                    width: 40%;
                    height: 90%;
                    .__text{
                        margin:0;

                        .__file-container{
                            display: flex;
                        }
                    }
                }


                .__input:deep(#lineCounter){
                    height: 100% !important;
                }
                .__clip{
                    margin: 0;
                    height: 96%;
                    width: 1.2rem;
                    transform:rotateY(86deg);
                    .__inner{
                        display: flex;
                    }
                }
                .__cover{
                    display: block ;
                    margin-left:55.5%
                }
                .__line{
                    display: block;
                }
            }
        }
    }
}
@media(min-width: 1100px) {
    .section-chat{
        .__question-list{
            .__question{
                .__cover{
                    margin-left:58.9%
                }
            }
        }
    }
}
</style>
