<template>
  <div v-if="pokemon">
    <div :style="{ border: `4px solid ${pokemon.color}` }">
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
    </div>
    <ul>
      <li v-for="item in pokemon.stats" :key="item.stat">
        <div>
          <span>{{ item.stat.name }}</span>
          <span>{{ item.base_stat }}</span>
        </div>
      </li>
    </ul>
  </div>
  <!-- <div v-else>Carregando...</div> -->
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
