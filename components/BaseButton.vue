<template>
  <button
    v-bind="$attrs"
    class="button py-2 px-1"
    :class="{ 'button--flat': flat }"
    v-on="$listeners"
  >
    <slot></slot>
    <span class="side button__left-side"></span>
    <span class="side button__right-side"></span>
    <span :class="{ 'button__only-bottom': onlyBottom, 'button__bottom-side': !onlyBottom }" class="side"></span>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    flat: {
      type: Boolean,
      default: false,
    },
    onlyBottom: {
      type: Boolean,
      default: false
    }
  },
}
</script>
