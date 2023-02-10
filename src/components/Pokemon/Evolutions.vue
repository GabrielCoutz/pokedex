<template>
  <div class="evolutions">
    <h2>Evoluções</h2>
    <ul class="list">
      <li v-for="{ name, img } in pokemon.evolution" :key="name">
        <router-link :to="{ name: 'Details', params: { name } }">
          <span class="evolutionName">{{ name }}</span>
          <img :src="img" :alt="name" />
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Evolutions",
  computed: {
    ...mapState(["pokemon"]),
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/variables";
@import "../../styles/mixins";

.evolutions {
  grid-column: 2;
  text-align: center;
  padding: 1rem 2rem;
  border-radius: $border-radius;
  background-color: $white;

  @include device(large) {
    grid-column: 1;
    margin-top: 2rem;

    .list {
      display: flex;
      gap: 0.5rem;
      justify-content: center;
    }
  }

  h2 {
    margin-bottom: 2rem;
  }

  li {
    border-radius: calc($border-radius / 2);
    margin: 1rem 0;
    @include box-shadow;
    @include font-display;

    .evolutionName {
      display: inline-block;
      padding-bottom: 1rem;
    }
  }
}
</style>
