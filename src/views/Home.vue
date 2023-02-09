<template>
  <section>
    <Busca />
    <PokemonList />
  </section>
</template>

<script>
import Busca from "@/components/Busca.vue";
import PokemonList from "@/components/PokemonList.vue";

export default {
  name: "home",
  components: { Busca, PokemonList },
};
</script>
