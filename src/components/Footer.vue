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
  background-color: $white;

  .footer {
    padding: 0.5rem;
    font-size: 0.9rem;
    text-align: center;
    color: $black;
    font-family: monospace;
  }
}
</style>
