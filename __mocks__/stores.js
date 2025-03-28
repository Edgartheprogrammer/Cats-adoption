// __mocks__/stores.js
export const useFavoritesStore = jest.fn(() => ({
  favorites: [],
  addFavorite: jest.fn(),
  removeFavorite: jest.fn(),
  isFavorited: jest.fn(id => false),
  clearFavorites: jest.fn()
}));

export const useThemeStore = jest.fn(() => ({
  theme: 'light',
  toggleTheme: jest.fn()
}));