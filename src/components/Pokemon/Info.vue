<template>
  <div class="info">
    <div class="topInfo">
      <div class="left">
        <span>Weight</span>
        <br />
        <span>{{ pokemon.weight }}</span>
      </div>
      <div class="right">
        <span>Type</span>
        <ul>
          <li v-for="{ type } in pokemon.types" :key="type">
            <span>{{ type.name }}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="img">
      <img
        :src="pokemon.sprites.front_default"
        :alt="`Image of ${pokemon.name} pokemon`"
      />
    </div>
    <h1 class="title">
      {{ pokemon.name }}
    </h1>
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
@import "@/styles/variables";

.info {
  .title {
    text-align: center;
    padding: 0.3rem 1rem;
  }

  .img {
    display: grid;
    justify-items: center;
    align-items: center;

    img {
      border: 1px solid black;
      border-radius: 50%;
      overflow: hidden;
      background: white;
    }
  }

  .topInfo {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left {
      text-align: start;
    }

    .right {
      text-align: end;
    }
  }
}
</style>
