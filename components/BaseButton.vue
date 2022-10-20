<template>
  <button
    v-bind="$attrs"
    class="button py-2 px-1"
    :class="{ 'button--flat': flat }"
    v-on="$listeners"
  >
    <app-loader v-if="loading"></app-loader>
    <template v-else>
      <slot></slot>
      <span class="side button__left-side"></span>
      <span class="side button__right-side"></span>
      <span
        :class="{
          'button__only-bottom': onlyBottom,
          'button__bottom-side': !onlyBottom,
        }"
        class="side"
      ></span>
    </template>
  </button>
</template>

<script>
import AppLoader from './AppLoader.vue'

export default {
  name: 'BaseButton',
  components: {
    AppLoader,
  },
  props: {
    flat: {
      type: Boolean,
      default: false,
    },
    onlyBottom: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
