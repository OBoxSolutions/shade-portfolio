export default {
  methods: {
    async validate() {
      const success = await this.$refs.form.validate()
      return success
    },

    submit() {
      this.$emit('submit')
    },
  },
}
