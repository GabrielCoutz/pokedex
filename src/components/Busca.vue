<template>
  <form @submit.prevent>
    <input type="text" v-model="busca" placeholder="pikachu, charmander..." />
    <Button @click="searchPokemon" >Buscar</Button>
    <Erro />
  </form>
</template>

<script>
import { mapState } from "vuex";
import Erro from "@/components/Erro.vue";
import Button from "@/components/Button.vue";

export default {
  data() {
    return {
      busca: "",
    };
  },
  methods: {
    searchPokemon() {
      this.$store.dispatch("getPokemon", this.busca.toLocaleLowerCase());
    },
  },
  computed: {
    ...mapState(["loading"]),
  },
  components: {
    Erro,
    Button,
  },
};
</script>

<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;
  max-width: 200px;

  input {
    padding: 0.3rem 0;
    text-align: center;
    font-size: 1rem;
  }
}
</style>
