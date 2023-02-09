<template>
  <form @submit.prevent>
    <input type="text" v-model="busca" />
    <button @click="searchPokemon">Buscar</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      busca: "",
    };
  },
  methods: {
    searchPokemon() {
      this.$store.dispatch("getPokemon", this.busca);
    },
  },
};
</script>

<style></style>
