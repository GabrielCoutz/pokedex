<template>
  <form @submit.prevent>
    <input
      type="text"
      v-model="busca"
      placeholder="pikachu, charmander..."
      required
    />
    <Button @click="sendToDetailsPage">Buscar</Button>
  </form>
</template>

<script>
import { mapState } from "vuex";
import Button from "@/components/Button.vue";

export default {
  data() {
    return {
      busca: "pikachu",
    };
  },

  computed: {
    ...mapState(["loading"]),
  },

  methods: {
    sendToDetailsPage() {
      this.$router.push({ name: "Detalhes", params: { name: this.busca } });
    },
  },

  components: {
    Button,
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/globals.scss";

form {
  display: flex;
  flex-direction: column;
  max-width: 200px;
  margin: 0 auto;

  input {
    padding: 0.3rem 0;
    text-align: center;
    font-size: 1rem;
  }
}
</style>
