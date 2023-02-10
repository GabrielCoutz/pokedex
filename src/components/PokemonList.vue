<template>
  <Card v-if="pokemon" />
</template>

<script>
import { mapState } from "vuex";
import Card from "../components/Pokemon/Card.vue";

export default {
  name: "PokemonList",
  components: {
    Card,
  },

  computed: {
    ...mapState(["pokemon"]),
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/globals";
</style>
