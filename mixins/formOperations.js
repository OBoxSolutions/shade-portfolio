export default {
  methods: {
    async validate() {
      const success = await this.$refs.form.validate()
      return success
    },
    async reset() {
      const success = await this.$refs.form.reset()
      return success
    },

    submit() {
      this.$emit('submit')
    },
  },
}
