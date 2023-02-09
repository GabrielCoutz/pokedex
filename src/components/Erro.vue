<template>
  <div class="erro">
    <h1>
      {{ erro }}
    </h1>
  </div>
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
