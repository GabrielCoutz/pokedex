<template>
  <div v-if="loading">Carregando...</div>
  <PokemonList v-else-if="pokemon" />
  <div v-else>
    <h1>{{ erro || "Não foi possível encontrar o que você procura =/" }}</h1>
    <router-link to="/">Voltar</router-link>
  </div>
</template>

<script>
import PokemonList from "@/components/PokemonList.vue";
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
  },
};
</script>

<style></style>
