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

  if (hasEvolve(data.chain.evolves_to)) {
    const a = getEvolutions(data.chain.evolves_to);
    console.log(a);
  }

  const [{ evolves_to }] = data.chain.evolves_to;
  const evolutionName = evolves_to[0].species.name;
  const { data: evolutionImg } = await axiosInstance.get(evolutionName);
  return [{ name: evolutionName, img: evolutionImg.sprites.front_default }];
}

function hasEvolve(item) {
  return item.length;
}

function getEvolutions([pokemon]) {
  const evoChain = [];
  let evoData = pokemon;

  do {
    evoChain.push(evoData.species);

    evoData = evoData["evolves_to"][0];
  } while (!!evoData && evoData.hasOwnProperty("evolves_to"));

  // if (!hasEvolve(pokemon[0].evolves_to))
  //   return evolutions.push(pokemon.species);

  // const teste = pokemon.map((item) => {
  //   if (hasEvolve(item.evolves_to)) return getEvolutions(item.evolves_to);
  // });

  // console.log(teste);

  // evolutions.push(pokemon.evolves_to[0].species);
  // getEvolutions(pokemon.evolves_to);

  return evoChain;
}
