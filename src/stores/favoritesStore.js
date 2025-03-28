// favoritesStore.js
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useFavoritesStore = create(
  persist(
    (set, get) => ({
      favorites: [],
      addFavorite: (cat) => {
        if (!cat || !cat.id) return;
        set({
          favorites: [...get().favorites, cat]
        });
      },
      removeFavorite: (catId) => {
        set({
          favorites: get().favorites.filter(cat => cat.id !== catId)
        });
      },
      isFavorited: (catId) => {
        return get().favorites.some(cat => cat.id === catId);
      },
    }),
    {
      name: 'cat-favorites',
      getStorage: () => localStorage,
    }
  )
);

export default useFavoritesStore;