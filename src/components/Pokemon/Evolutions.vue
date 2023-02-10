<template>
  <div class="evolutions">
    <h2 class="title">Evoluções</h2>
    <ul>
      <li v-for="{ name, img } in pokemon.evolution" :key="name">
        <router-link :to="{ name: 'Detalhes', params: { name } }">
          <span>{{ name }}</span>
          <img :src="img" :alt="name" />
        </router-link>
      </li>
    </ul>
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

<style lang="scss" scoped>
.evolutions {
  grid-column: 2;

  .title {
    text-align: center;
  }
}
</style>
