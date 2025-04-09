// favoritesStore.js
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useFavoritesStore = create(
  persist(
    (set, get) => ({
      favorites: [],
      resetFavorites: () => set({ favorites: [] }, true),
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
      getStorage: () => typeof localStorage !== 'undefined' ? localStorage : {
        getItem: () => null,
        setItem: () => {},
        removeItem: () => {}
      },
      serialize: JSON.stringify,
      deserialize: JSON.parse,
    }
  )
);

if (typeof window !== 'undefined' && !window.useFavoritesStore) {
  window.useFavoritesStore = useFavoritesStore;
}

export default useFavoritesStore;