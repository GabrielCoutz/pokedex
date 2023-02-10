<template>
  <div class="info">
    <div class="topInfo">
      <div class="left">
        <span class="label">Weight</span>
        <span>{{ pokemon.weight }}</span>
      </div>
      <div class="right">
        <span class="label">{{
          pokemon.types.length > 1 ? "Types" : "Type"
        }}</span>
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
  name: "Info",
  computed: {
    ...mapState(["pokemon"]),
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/variables";
@import "../../styles/mixins";

.info {
  grid-column: 1;

  .title {
    text-align: center;
    padding: 0.3rem 1rem;
    text-transform: capitalize;
  }

  .img {
    display: grid;
    justify-items: center;
    align-items: center;

    img {
      border: 1px solid $c3;
      border-radius: 50%;
      overflow: hidden;
      background: $white;
    }
  }

  .topInfo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    @include font-display;

    .left {
      text-align: start;
    }

    .right {
      text-align: end;
    }

    .label {
      font-size: 1.1rem;
      font-weight: 600;
      margin-bottom: 4px;
      display: block;
    }
  }
}
</style>
