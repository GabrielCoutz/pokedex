import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon",
});

export const api = {
  get(endpoint) {
    return axiosInstance.get(endpoint);
  },
};

export async function getPokemonColor(url) {
  const { data } = await axios.get(url);
  return data.color.name;
}

export async function getPokemonEvolution(pokemon) {
  const { data: pokemonData } = await axios.get(
    `https://pokeapi.co/api/v2/pokemon-species/${pokemon}`
  );
  const { url } = pokemonData.evolution_chain;
  const { data } = await axios.get(url);
  const [{ evolves_to }] = data.chain.evolves_to;
  const evolutionName = evolves_to[0].species.name;
  const { data: evolutionImg } = await axiosInstance.get(evolutionName);
  return [{ name: evolutionName, img: evolutionImg.sprites.front_default }];
}
