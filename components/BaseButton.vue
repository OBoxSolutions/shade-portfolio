<template>
  <button v-bind="$attrs" class="button py-2 px-1" v-on="$listeners">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
}
</script>

<style scoped lang="scss">
$bottom-side-height: 5px;
$right-side-width: 5px;
$sides-color: #747474;

.button {
  background-color: #d9d9d9;
  position: relative;
  border: none;
  color: black;
  cursor: pointer;
  transition: linear 0.1s all;

  text-transform: uppercase;
  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: $bottom-side-height;
    left: 2.5px;
    bottom: -$bottom-side-height;
    border-radius: inherit;
    background-color: $sides-color;
    transform: skewX(45deg);
  }
  &::after {
    position: absolute;
    content: '';
    width: $right-side-width;
    height: 100%;
    top: 2.5px;
    right: -$right-side-width;
    border-radius: inherit;
    background-color: $sides-color;
    transform: skewY(45deg);
  }

  &:hover {
    background-color: #929292;
  }

  &:active {
    transform: translate(5px, 5px);
    background-color: #969696;

    &::before {
      height: 0;
    }
    &::after {
      width: 0;
    }
  }
}
</style>
