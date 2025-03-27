import useThemeStore from "../../stores/themeStore";

describe("themeStore", () => {
  test("El tema cambia de 'light' a 'dark' al llamar toggleTheme", () => {
    // Acceder al store
    const { theme, toggleTheme } = useThemeStore.getState();

    
    expect(theme).toBe("light");

    // Llamar a toggleTheme
    toggleTheme();

    
    expect(useThemeStore.getState().theme).toBe("dark");

    
    toggleTheme();

    
    expect(useThemeStore.getState().theme).toBe("light");
  });
});
