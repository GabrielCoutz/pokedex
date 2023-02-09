<template>
  <ul>
    <li v-for="{ name, img } in pokemon.evolution" :key="name">
      <div>
        <span>{{ name }}</span>
        <img :src="img" :alt="name" />
      </div>
    </li>
  </ul>
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
