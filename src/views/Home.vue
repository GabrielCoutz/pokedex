<template>
  <section class="container home">
    <SearchInput />
  </section>
</template>

<script>
import SearchInput from "../components/SearchInput.vue";
import PokemonList from "../components/PokemonList.vue";

export default {
  name: "Home",
  components: { SearchInput, PokemonList },
};
</script>

<style lang="scss" scoped>
@import "../styles/globals";

.home {
  width: 100%;
}
</style>
