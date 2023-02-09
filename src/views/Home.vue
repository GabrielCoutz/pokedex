<template>
  <section class="container">
    <Busca />
  </section>
</template>

<script>
import Busca from "@/components/Busca.vue";
import PokemonList from "@/components/PokemonList.vue";

export default {
  name: "Home",
  components: { Busca, PokemonList },
};
</script>

<style lang="scss" scoped>
@import "@/styles/globals";
</style>
