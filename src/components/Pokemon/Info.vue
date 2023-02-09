<template>
  <h1>{{ pokemon.name }}</h1>
  <div>
    <span>{{ pokemon.weight }}</span>
    <ul>
      <li v-for="{ type } in pokemon.types" :key="type">
        <span>{{ type.name }}</span>
      </li>
    </ul>
  </div>
  <div>
    <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["pokemon"]),
  },
};
</script>

<style></style>
