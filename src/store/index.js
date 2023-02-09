import { api, getPokemonColor, getPokemonEvolution } from "@/services";
import { createStore } from "vuex";

export default createStore({
  state: {
    pokemon: null,
  },
  getters: {},
  mutations: {
    SET_POKEMON(state, payload) {
      state.pokemon = payload;
    },
  },
  actions: {
    async getPokemon(context, payload) {
      const response = await api.get(payload);
      console.log(response.data);
      const color = await getPokemonColor(response.data.species.url);
      const evolution = await getPokemonEvolution(payload);
      context.commit("SET_POKEMON", { ...response.data, color, evolution });
    },
  },
  modules: {},
});
