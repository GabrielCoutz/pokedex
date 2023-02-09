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
