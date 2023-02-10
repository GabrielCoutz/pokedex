<template>
  <section class="notFound">
    <h1>Página não encontrada.</h1>
    <Button class="link" v-if="!loading">
      <router-link to="/">Voltar</router-link>
    </Button>
  </section>
</template>

<script>
import Button from "../components/Button.vue";

export default {
  name: "NotFound",
  components: {
    Button,
  },
};
</script>

<style lang="scss" scoped>
.notFound {
  margin: 0 auto;
  text-align: center;

  .link {
    margin-top: 1rem;
  }
}
</style>
