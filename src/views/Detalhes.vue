<template>
  <section class="container">
    <Button class="link" v-if="!loading">
      <router-link to="/">Voltar</router-link>
    </Button>

    <Loading v-if="loading" />

    <PokemonList v-else-if="pokemon" />

    <Erro v-else />
  </section>
</template>

<script>
import PokemonList from "@/components/PokemonList.vue";
import Erro from "@/components/Erro.vue";
import Loading from "@/components/Loading.vue";
import Button from "@/components/Button.vue";

import { mapState } from "vuex";

export default {
  name: "Detalhes",
  props: ["name"],

  methods: {
    searchPokemon() {
      this.$store.dispatch("getPokemon", this.name.toLocaleLowerCase());
    },
  },

  created() {
    this.searchPokemon();
  },

  computed: {
    ...mapState(["pokemon", "erro", "loading"]),
  },

  components: {
    PokemonList,
    Erro,
    Loading,
    Button,
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/globals";

.link {
  display: grid;
  padding: 0;

  a {
    padding: 0.5rem 1rem;
  }
}
</style>
