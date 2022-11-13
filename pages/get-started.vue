<template>
  <div class="get-started">
    <div class="__selector">
      <div class="__inner">
        <label
          ><input
            v-model="page"
            type="radio"
            name="page"
            :value="'chat'"
            :checked="page === 'chat' ? true : false"
          />
          Chat
        </label>
        <label>
          <input v-model="page" type="radio" name="page" :value="'meeting'" />
          Meeting
        </label>
      </div>
    </div>
    <section-get-started-header />
    <section-get-started-basic-information ref="formBasicInfo" v-model="form" :page="page" />
    <section-get-started-chat v-if="page == 'chat'" v-model="form" />
    <section-get-started-meeting v-if="page == 'meeting'" v-model="form" />
    <section-get-started-summary
      v-model="form"
      :page="page"
      :loading="loading"
      :disabled="disabled"
      @submit="submitMeeting" />
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
import { cleanForm } from '@/utils/cleanForm'

export default {
  data() {
    return {
      page: this.$route.query.mode === 'meeting' ? 'meeting' : 'chat',
      disabled: false,
      loading: false,
      form: {
        // Basic info
        name: '',
        email: '',
        country: '',
        year: '',
        month: '',
        day: '',
        birthdate: '',
        app: 'Discord',
        // Chat info
        about: '',
        goals: '',
        budget: '',
        logo_info: '',
        logo_file: '',
        more_info: '',
        more_info_file: '',
        // Voice info
        meeting_date: '',
        time_before_meeting: '',
        meeting_link: 'some zoom or google meets link'
      },
    }
  },
  watch: {
    $route() {
      this.updatePage()
    },
  },
  mounted() {
    this.page = this.$route.query.mode === 'meeting' ? 'meeting' : 'chat'
  },
  methods: {
    ...mapMutations(['addMessage']),
    ...mapActions(['storeChatMeeting', 'storeVoiceMeeting']),
    updatePage() {
      this.page = this.$route.query.mode === 'meeting' ? 'meeting' : 'chat'
      return this.page
    },
    async validate() {
      return await this.$refs.formBasicInfo.validate()
    },
    validateMeetingDate(){
      if(this.form.meeting_date === ''){
          return true
      }
      else{
        const [date, hour] = this.form.meeting_date.split('|')
        return date === '-- ' || hour === ' '
      }
    },
    async submitMeeting() {
      const isValid = await this.validate()
      if (!isValid) return

      if(this.page === 'meeting' && this.validateMeetingDate()){
        this.addMessage({
          type: 'warning',
          text: 'Please select date and hour for the meeting',
        })
        return
      }

      this.disabled = true
      this.loading = true

      try{
        if (this.page === 'chat') {
          await this.storeChatMeeting(this.form)
        }
        else{
          await this.storeVoiceMeeting(this.form)
        }


        cleanForm(this.form)

        this.$nextTick(() => {
            this.$refs.formBasicInfo.reset();
        })

      } catch {
        this.addMessage({
          type: 'error',
          text: 'There was an error. Try again later',
        })
      }
      this.disabled = false
      this.loading = false
    },
  },
}
</script>

<style scoped lang="scss">
.get-started {
  background-color: #321727 !important;
  overflow-x: clip;
  .__selector {
    position: absolute;
    background-color: #f34021;
    margin-top: 2.5rem;
    border: 2px solid black;
    border-radius: 0.6rem;
    padding: 1rem;
    z-index: 1;
    padding-top: 2rem;
    width: fit-content;
    .__inner {
      height: 100%;
      background-color: #d43737;
      display: flex;
      flex-direction: column;
      padding: 1rem 0.5rem 0.5rem 0.5rem;
      text-align: right;
      gap: 1rem;
      label {
        width: 100%;
        display: flex;
        gap: 0.3rem;
        font-family: 'Lucida Console', sans-serif;
        color: white;
        justify-content: right;
        padding: 0 0.1rem;
        cursor: pointer;
        input[type='radio']:not(:checked) {
          opacity: 0;
        }
        input[type='radio']:checked:after {
          width: 1rem;
          height: 1rem;
          border-radius: 15px;
          top: 1px;
          left: -1px;
          position: relative;
          background-color: #49ea76;
          content: '';
          display: inline-block;
          visibility: visible;
        }
      }
    }
  }
}

/* Breakpoints begin here  */
@media (min-width: 768px) {
  .get-started {
    .__selector {
      margin-left: calc(100vw / 1.56);
    }
  }
}

@media (max-width: 1200px) {
  .get-started {
    .__selector {
      display: none;
    }
  }
}
</style>
