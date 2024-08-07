import axios from "axios";
import { create } from "zustand";

export const useFetch = create((set) => ({
  data: {
    movie: { popular: [], now_playing: [] },
    person: { popular: [] },
    tv: { popular: [] },
  },
  isLoading: {
    movie: { popular: false, now_playing: false },
    person: { popular: false },
    tv: { popular: false },
  },
  isError: null,
  fetchMovies: async (type, endPoint, limit = null) => {
    set((state) => ({
      isLoading: { ...state.isLoading, [type]: { ...state.isLoading[type], [endPoint]: true } },
      isError: null, // Reset error state sebelum memulai fetch baru
    }));

    try {
      const response = await axios.get(
        `${import.meta.env.VITE_REACT_BASE_URL}/${type}/${endPoint}?api_key=${import.meta.env.VITE_REACT_API_KEY}`,
      );

      let result = response.data.results;

      // Jika limit disediakan, ambil hanya sejumlah film sesuai limit
      if (limit) {
        result = result.slice(0, limit);
      }

      // Set state dengan hasil fetch
      set((state) => ({
        data: { ...state.data, [type]: { ...state.data[type], [endPoint]: result } },
        isLoading: { ...state.isLoading, [type]: { ...state.isLoading[type], [endPoint]: false } },
        isError: null, // Pastikan tidak ada error setelah fetch berhasil
      }));
    } catch (error) {
      // Set error state jika terjadi error
      set((state) => ({
        isError: error.message || "Something went wrong",
        isLoading: { ...state.isLoading, [type]: { ...state.isLoading[type], [endPoint]: false } },
      }));
    }
  },
}));
