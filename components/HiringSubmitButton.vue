<template>
  <div class="hiring-submit">
    <div class="hiring-submit__top" />
    <button class="hiring-submit__button" @click="submitHiringRequest">
      <h1>
        SUBMIT
      </h1>
    </button>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
import { validateForm } from '@/utils/validateForm'

export default {
  props: {
    form: {
      type: Object,
      default: null,
    },
  },
  methods: {
    ...mapMutations(['addMessage']),
    ...mapActions(['storeHiringRequest']),
    async submitHiringRequest(){
      if (validateForm(this.form)) {
        await this.storeHiringRequest(this.form)
      }
      else {
        this.addMessage({
          type: 'error',
          text: 'Some form values ​​are missing',
        })
      }
    }
  }

}
</script>

<style scoped lang="scss">
$perspective: 300px;

.hiring-submit{
  position: relative;
  transform-style: preserve-3d;
  perspective: $perspective;
  perspective-origin: bottom;
  z-index: 10;

  .hiring-submit__top{
    background: #33B758;
    border: 1px solid #000000;
    min-height: 20px;
    cursor: pointer;
    transition: min-height .1s ease-out;
  }
  &:hover {
    .hiring-submit__button{
      background-color: #33B758;
    }
  }
  &:active {
    .hiring-submit__top{
      min-height: 3px;
    }
    .hiring-submit__button{
      line-height: 80px;
      background-color: #33B758;
    }
  }
  .hiring-submit__button{
    width: 100%;
    background-color: #49EA76;
    outline: none;
    border-top: none;
    cursor: pointer;

    position: absolute;
    width: 100%;
    bottom: -89.8px;
    transform: rotateX(-20deg) translateY(90px);

    &:hover {
      background-color: #33B758;
    }

    h1{
      font-size: 4rem;
      line-height: 90px;
      text-align: center;
      color: #000000;
      transform: matrix(0.83, 0, -0.89, 1, 0, 0);
    }
  }
}
</style>
