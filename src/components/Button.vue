<template>
  <button :disabled="loading" class="button">
    <span v-if="loading"> Carregando... </span>
    <slot v-else></slot>
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
@import "@/styles/variables.scss";

.button {
  background-color: $primary-color;
  border: none;
  padding: 0.5rem 1rem;
  color: white;
  font-family: monospace;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: 0.3s all;
  outline: none;

  &:hover,
  &:active,
  &:focus {
    background-color: $primary-color-hover;
  }
}
</style>
