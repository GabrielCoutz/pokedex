<template>
  <h1 class="erro">
    {{ erro }}
  </h1>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["erro"]),
  },
};
</script>

<style lang="scss" scoped>
.erro {
  text-align: center;
}
</style>
