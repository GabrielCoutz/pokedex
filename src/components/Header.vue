<template>
  <header class="wrapperHeader">
    <div class="container header">Busque seu pokemon favorito!</div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables";
@import "@/styles/globals";
@import "@/styles/mixins";

.wrapperHeader {
  background-color: $white;
  @include box-shadow;

  .header {
    padding: 1rem;
    text-align: center;
    color: $black;
    font-family: monospace;
    font-size: 1.5rem;

    @include device(small) {
      font-size: 1.2rem;
    }
  }
}
</style>
