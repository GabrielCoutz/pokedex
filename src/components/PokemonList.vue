<template>
  <div v-if="pokemon">{{ pokemon.name }}</div>
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
