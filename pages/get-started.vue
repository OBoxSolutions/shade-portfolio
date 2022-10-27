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
    <section-get-started-basic-information v-model="form" :page="page" />
    <section-get-started-chat v-if="page == 'chat'" v-model="form" />
    <section-get-started-meeting v-if="page == 'meeting'" />
    <section-get-started-summary :form="form" :page="page" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: this.$route.query.mode === 'meeting' ? 'meeting' : 'chat',
      form: {
        name: '',
        email: '',
        country: '',
        birthdate: '',
        app: 'Discord',
        about: '',
        goals: '',
        budget: '',
        logo_info: '',
        logo_file: '',
        more_info: '',
        more_info_file: '',
      },
    }
  },
  watch: {
    $route() {
      this.updatePage()
    },
  },
  methods: {
    updatePage() {
      this.page = this.$route.query.mode === 'meeting' ? 'meeting' : 'chat'
      return this.page
    },
  },
  mounted() {
    this.page = this.$route.query.mode === 'meeting' ? 'meeting' : 'chat'
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
