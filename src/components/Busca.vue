<template>
  <form @submit.prevent="sendToDetailsPage">
    <input
      type="text"
      v-model="busca"
      placeholder="pikachu, charmander ..."
      required
    />
    <button class="icon"></button>
  </form>
</template>

<script>
import { mapState } from "vuex";
import Button from "@/components/Button.vue";

export default {
  data() {
    return {
      busca: "",
    };
  },

  computed: {
    ...mapState(["loading"]),
  },

  methods: {
    sendToDetailsPage() {
      const pokemonName = this.cleanPokemonName(this.busca);
      this.$router.push({ name: "Detalhes", params: { name: pokemonName } });
    },

    cleanPokemonName(name) {
      return name.trim().toLowerCase();
    },
  },

  components: {
    Button,
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/globals.scss";
@import "@/styles/variables.scss";
@import "@/styles/mixins.scss";

form {
  margin: 0 auto;
  max-width: 700px;
  display: grid;
  grid-template-columns: 1fr;
  padding: 0 1rem;
  align-items: center;

  input {
    padding: 2rem 3rem;
    font-size: 1.4rem;
    text-align: center;
    border-radius: 8px;
    outline: none;
    width: 100%;
    border: 1px solid transparent;
    @include box-shadow;
    transition: 0.3s all;
    flex: 1;

    &:hover,
    &:focus,
    &:active {
      &,
      & ~ .icon {
        transform: translateY(-10px);
      }
    }
  }

  input,
  .icon {
    grid-area: 1/1;
  }

  .icon {
    width: fit-content;
    height: fit-content;
    justify-self: end;
    background-color: transparent;
    border: none;
    padding: 12px;
    transition: 0.3s all;
    z-index: 1;

    &::before {
      content: url("@/assets/pokeball.svg");
      display: inline-block;
    }

    &:hover,
    &:focus,
    &:active {
      transform: rotate(360deg);
    }
  }
}
</style>
