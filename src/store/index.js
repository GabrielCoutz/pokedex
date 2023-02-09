import { api } from "@/services";
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
      context.commit("SET_POKEMON", response.data);
    },
  },
  modules: {},
});
