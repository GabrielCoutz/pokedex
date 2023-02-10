<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["loading"]),
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";
@import "../styles/mixins.scss";

.button {
  background-color: $white;
  border: none;
  padding: 0.5rem 1rem;
  color: $black;
  font-family: monospace;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: 0.3s all;
  outline: none;
  border-radius: $border-radius;
  margin: 0 auto 1rem auto;

  &:hover,
  &:active,
  &:focus {
    @include box-shadow;
    transform: scale(0.99);
  }
}
</style>
