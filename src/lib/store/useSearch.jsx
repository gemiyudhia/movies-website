import axios from "axios";
import { create } from "zustand";

export const useSearch = create((set) => ({
  datas: [],
  isLoading: [],
  isError: null,
  searchMovie: async (query) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_REACT_BASE_URL}/search/movie?query=${query}&api_key=${import.meta.env.VITE_REACT_API_KEY}`,
      );

      const result = response.data.results;

      set(() => ({
        datas: result,
        isLoading: false,
      }));
    } catch (error) {
      set(() => ({
        isError: error.message || "Something went wrong",
        isLoading: false,
      }));
    }
  },
}));
