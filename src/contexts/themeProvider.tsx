import useLocalStorage from "@/hooks/useLocalStorage";
import { createContext, useContext, useEffect } from "react";

type Theme = "dark" | "light";

interface ThemeProviderProps {
  children: JSX.Element;
}

interface ThemeContextState {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextState>({
  theme: "dark",
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useLocalStorage<Theme>("theme", "dark");

  function toggleTheme() {
    setTheme((prev) => (prev == "dark" ? "light" : "dark"));
  }

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add(theme);

    return () => {
      root.classList.remove(theme);
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

const useTheme = () => useContext(ThemeContext);
export default useTheme;
