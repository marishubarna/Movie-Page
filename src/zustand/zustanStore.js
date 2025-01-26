import { create } from "zustand";

export const useStore = create((set) => ({
  favourites: [],
  addMovie: (movies) =>
    set((state) => {
      if (state.favourites.some((item) => item.id === movies.id)) {
        return state;
      }
      return { favourites: [...state.favourites, { ...movies, quanitity: 1 }] };
    }),
  removeAll: (id) =>
    set((state) => ({
      favourites: state.favourites.filter((item) => item.id !== id),
    })),
  updateBears: (newBears) => set({ bears: newBears }),
}));
