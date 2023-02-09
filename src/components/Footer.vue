<template>
  <footer class="wrapperFooter">
    <div class="footer">
      <span>Todos direitos reservados</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables";

.wrapperFooter {
  background-color: $primary-color;

  .footer {
    padding: 2rem;
    font-size: 1.2rem;
    text-align: center;
    color: white;
    font-family: monospace;
  }
}
</style>
