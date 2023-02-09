import { api, getPokemonColor, getPokemonEvolution } from "@/services";
import { createStore } from "vuex";

export default createStore({
  state: {
    pokemon: null,
    erro: null,
    loading: false,
  },

  mutations: {
    SET_POKEMON(state, payload) {
      state.pokemon = payload;
      state.erro = null;
    },
    SET_ERRO(state, payload) {
      state.pokemon = null;
      state.erro = payload;
    },
    SET_LOADING(state, payload) {
      state.loading = payload;
    },
  },

  actions: {
    async getPokemon(context, payload) {
      context.commit("SET_LOADING", true);
      try {
        const response = await api.get(payload);
        const color = await getPokemonColor(response.data.species.url);
        const evolution = await getPokemonEvolution(payload);
        context.commit("SET_POKEMON", { ...response.data, color, evolution });
      } catch (e) {
        context.commit("SET_ERRO", "Não foi possível encontrar este pokemon.");
      } finally {
        context.commit("SET_LOADING", false);
      }
    },
  },
});
