import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface MoviesStore {
  recentlyVisited: number[];
  addVisited: (movieId: number) => void;
  favorites: number[];
  handleFavorite: (movieId: number) => void;
}

export const useMoviesStore = create<MoviesStore>()(
  devtools(
    persist(
      (set, get) => ({
        recentlyVisited: [],
        addVisited: (movieId: number) => {
          const recentlyVisited = get().recentlyVisited;
          const filteredArray = recentlyVisited.filter((id) => id !== movieId);
          set({ recentlyVisited: [...filteredArray, movieId] });
        },
        favorites: [],
        handleFavorite: (movieId: number) => {
          const favorites = get().favorites;
          if (favorites.includes(movieId))
            set({ favorites: favorites.filter((favoriteId) => favoriteId !== movieId) });
          else set({ favorites: [...favorites, movieId] });
        },
      }),
      { name: 'moviesStore' },
    ),
  ),
);
