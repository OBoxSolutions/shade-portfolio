<template>
  <div class="section-summary">
    <div class="__top">
      <div class="__title">SUMMARY</div>
      <div class="__description">
        [{{ form.name }}] is going to chat via [{{ form.app }}], and he’s going
        to like it!
      </div>
    </div>
    <div class="__clip"></div>
    <div class="__details">
      <div class="__inner-chat">
        <div class="__description">
          Please join our discord server to proceed. Once you join, our team
          will contact you directly
        </div>
        <div class="__title">THE LINK</div>
        <div class="__link-container">
          <div class="__copy" @click="copyTextToClipboard(discordLink)">
            Copy
          </div>
          <div class="__link">{{ discordLink }}</div>
        </div>
      </div>
      <div v-if="page == 'meeting'" class="__inner-arrange-meeting">
        <div class="__description">
          Do you want us to send a reminder to you before the meeting starts?
        </div>
        <div class="__choice-container">
          <div class="__yes-container">
            <div class="__time-display">
              <div class="__yes">Yes</div>
              <div class="__display">
                <div class="__time">[ {{ selectedTime }} ]</div>
                <div class="__text">Before meeting.</div>
              </div>
            </div>
            <div class="__time-list">
              <div
                v-for="(time, index) in timeList"
                :key="`time-${index}`"
                :style="`${time == selectedTime ? 'background:#071C50' : ''}`"
                class="__time"
                @click="selectTime(time)"
              >
                {{ time }}
              </div>
            </div>
          </div>
          <div class="__no">No.</div>
        </div>
      </div>
      <div v-if="page == 'meeting'" class="__inner-meeting-link">
        <div class="title">Here's the link</div>

        <div class="__link-container">
          <div class="__copy">Copy</div>
          <div class="__link">some zoom or google meets link</div>
        </div>
        <div>Do you want us to send it to your inbox?</div>
        <div class="__choice-container">
          <div class="__yes">Yes</div>
          <div class="__no">No</div>
        </div>
      </div>
      <div class="__submit-container">
        <base-button
          :disabled="disabled"
          :loading="loading"
          only-bottom
          class="__submit button--green"
          @click="submitMeeting"
        >
          <h1>Submit</h1>
        </base-button>
      </div>
    </div>
    <div class="__alert">it came through</div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'

import { copyTextToClipboard } from '@/utils/copyToClipboard'
import { validateForm } from '@/utils/validateForm'

export default {
  name: 'SectionGetStartedSummary',
  props: {
    page: {
      type: String,
      default: '',
    },
    form: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      timeList: ['15min.', '30min.', '45min.', '1h.'],
      selectedTime: 'time',
      disabled: false,
      loading: false,
      discordLink: 'discord.gg/something5',
    }
  },
  methods: {
    ...mapMutations(['addMessage']),
    ...mapActions(['storeChatMeeting']),
    selectTime(time) {
      this.selectedTime = time
    },
    async submitMeeting() {
      if (validateForm(this.form)) {
        this.disabled = true
        this.loading = true

        if (this.page === 'chat') {
          await this.storeChatMeeting(this.form)
        }

        this.disabled = false
        this.loading = false
        // else{
        //   this.storeVoiceMeeting(this.form)
        // }
      } else {
        this.addMessage({
          type: 'error',
          text: 'Some form values ​​are missing',
        })
      }
    },
    copyTextToClipboard(text) {
      copyTextToClipboard(text)
      this.addMessage({ type: 'success', text: 'Text copied to clipboard' })
    },
  },
}
</script>
<style lang="scss" scoped>
.section-summary {
  perspective: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  filter: saturate(0.8);
  .__top {
    background-color: #ffac06;
    padding: 2rem;
    padding-bottom: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    width: 100%;
    .__title {
      font-size: 2rem;
    }

    .__description {
      padding: 2rem 1rem;
      border: 2px solid black;
      background-color: #cc8800;
      color: white;
      text-align: center;
      box-shadow: inset 4px -4px 4px 4px rgba(0, 0, 0, 0.1),
        inset -4px 4px 4px 4px rgba(0, 0, 0, 0.1);
      margin: 0 1rem;
    }
  }

  .__clip {
    width: 100%;
    height: 2rem;
    background-color: #cc8800;
    transform: rotateX(325deg);
  }

  .__details {
    width: calc(95% - 4rem);
    padding: 1rem 2rem;
    background-color: #15aaaa;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    .__inner-chat {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: #0f7d7d;
      padding: 1rem;
      color: white;
      text-align: center;
      gap: 1rem;
      border-radius: 1rem;

      .__description {
        font-family: 'Lucida Console', sans-serif !important;
        margin: 0 2rem;
      }
      .__link-container {
        border: 1rem solid #4e49de;
        border-width: 0.5rem 1rem;
        display: flex;
        align-items: center;
        background-color: #352fcf;
        width: 100%;
        overflow: hidden;
        .__copy {
          padding: 0.5rem 1rem;
          background-color: #071c50;
          cursor: pointer;
        }
        .__link {
          font-family: 'Lucida Console', sans-serif !important;
          margin: 0 1.5rem;
          font-size: small;
          white-space: nowrap;
        }
      }
    }
    .__inner-arrange-meeting {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: #0f7d7d;
      padding: 1rem;
      color: white;
      text-align: center;
      gap: 2rem;
      border-radius: 1rem;

      .__description {
        font-family: 'Lucida Console', sans-serif !important;
        margin: 0 2rem;
      }

      .__choice-container {
        display: flex;
        flex-direction: column-reverse;
        gap: 3rem;
        width: 100%;
        margin: 0 1rem;
        .__yes-container {
          display: flex;
          flex-direction: column;
          gap: 1rem;

          .__time-display {
            display: flex;
            align-items: center;
            .__yes {
              padding: 1rem 0.5rem;
              background-color: #49ea76;
              border: 1px solid black;
              color: black;
            }

            .__display {
              display: flex;
              align-items: center;
              font-size: 0.5rem;
              border: 0.5rem solid #4e49de;
              background-color: #352fcf;
              border-left: 0;

              .__time {
                background-color: #071c50;
                padding: 0.5rem;
              }
              .__text {
                margin: 0 0.3rem;
              }
            }
          }

          .__time-list {
            display: flex;
            background-color: #4e49de;
            width: 100%;
            .__time {
              width: 100%;
              padding: 0.5rem 0;
              font-size: 0.8rem;
              cursor: pointer;
            }
          }
        }

        .__no {
          display: flex;
          align-items: center;
          border: 1px solid black;
          background-color: #ef4242;
          cursor: pointer;
          color: black;

          width: 100%;
          padding: 1rem 0;
          justify-content: center;
        }
      }
    }

    .__inner-meeting-link {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: #0f7d7d;
      padding: 1rem;
      color: white;
      text-align: center;
      gap: 2rem;
      border-radius: 1rem;

      .__link-container {
        border: 1rem solid #4e49de;
        border-width: 0.5rem 1rem;
        display: flex;
        align-items: center;
        width: calc(100% - 2rem);
        background-color: #352fcf;
        overflow: hidden;
        .__copy {
          padding: 0.5rem 1rem;
          background-color: #071c50;
          cursor: pointer;
          width: 20%;
        }
        .__link {
          font-family: 'Lucida Console', sans-serif !important;
          margin: 0 1.5rem;
          font-size: small;
          width: 80%;
          white-space: nowrap;
        }
      }

      .__choice-container {
        display: flex;
        gap: 1rem;
        div {
          width: 5rem;
          padding: 0.5rem 0;
          border: 1px solid black;
          color: black;
          cursor: pointer;
        }
        .__yes {
          background-color: #49ea76;
        }
        .__no {
          background-color: #ef4242;
        }
      }
    }
    .__submit-container {
      perspective: 300px;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;

      .__submit {
        padding: 1rem 3rem !important;
        // border-radius: 5px;
        margin-bottom: 2rem;
        // border: 1px solid black;

        transform-style: preserve-3d;
        perspective: 100px;
        perspective-origin: bottom;

        h1 {
          font-weight: 400;
          margin: 1rem auto;
          color: #000000;
        }
        &:active {
          transform: translateY(10px);
        }
      }
    }
  }
  .__alert {
    width: 100%;
    padding: 1rem 0;
    color: white;
    background-color: #49ea76;
    text-align: center;
  }
}

/* Breakpoints begin here  */
@media (min-width: 768px) {
  .section-summary {
    .__top {
      .__description {
        margin: 0;
      }
    }
    .__clip {
      height: 4rem;
      transform: rotateX(325deg) translateY(-16px);
    }
    .__details {
      padding: 1rem 3rem;
      width: calc(95% - 4rem);
      transform: translateY(-22px);
      .__inner-chat {
        .__link-container {
          width: fit-content;
        }
      }

      .__inner-arrange-meeting {
        .__choice-container {
          flex-direction: row;
          margin: 0 2rem;
          width: fit-content;
          margin: 0 1rem;
          .__yes-container {
            .__time-display {
              .__yes {
                padding: 1rem 1.5rem;
              }

              .__display {
                font-size: 0.6rem;
                .__time {
                  padding: 0.5rem;
                }
              }
            }
          }
          .__no {
            padding: 0 4rem;
          }
        }
      }
    }
  }
}
</style>
