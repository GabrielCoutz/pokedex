<template>
  <footer>
    <span>Todos direitos reservados</span>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables";

footer {
  background-color: $primary-color;
  padding: 2rem;
  text-align: center;
  color: white;
  font-family: monospace;
}
</style>
