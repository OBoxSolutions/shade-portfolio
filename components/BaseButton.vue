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
    <span class="side button__bottom-side"></span>
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
  },
}
</script>

<style scoped lang="scss">
$bottom-side-height: 5px;
$right-side-width: 5px;
$sides-bg-color: #747474;

.button {
  transform-style: preserve-3d;
  background-color: #d9d9d9;
  position: relative;
  border: none;
  color: black;
  cursor: pointer;
  transition: linear 0.1s all;
  text-transform: uppercase;

  .side {
    position: absolute;
    transition: linear 0.1s all;
  }

  .button__bottom-side {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: $sides-bg-color;
    border-radius: inherit;
    transform: translate3d(0, 0.2em, -1em);
  }

  &:hover {
    background-color: #929292;
  }

  &:active {
    transform: translate3d(0, 0.2em, -1em);
    background-color: #969696;

    .button__bottom-side {
      transform: translate3d(0, 0em, -1em);
    }
  }
}

.button--flat {
  &::before,
  &::after {
    display: none;
  }
}
</style>
