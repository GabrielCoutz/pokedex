import { api, getPokemonColor } from "@/services";
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
      const color = await getPokemonColor(response.data.species.url);
      context.commit("SET_POKEMON", { ...response.data, color });
    },
  },
  modules: {},
});
