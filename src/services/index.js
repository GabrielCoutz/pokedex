import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon",
});

export const api = {
  get(endpoint) {
    return axiosInstance.get(endpoint);
  },
};
