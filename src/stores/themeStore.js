import { create } from 'zustand';

const useThemeStore = create((set) => ({
  theme: typeof window !== 'undefined' ? localStorage.getItem('theme') || 'light' : 'light',
  toggleTheme: () => set((state) => {
    const newTheme = state.theme === 'light' ? 'dark' : 'light';
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newTheme);
    }
    return { theme: newTheme };
  }),
}));

// Environment checks for Jest and Vite
if (typeof window !== 'undefined') {
  const isDev = typeof process !== 'undefined' 
    ? process.env.NODE_ENV === 'development'
    : window.Cypress;
  
  if (isDev) {
    window.useThemeStore = useThemeStore;
  }
}

export default useThemeStore;