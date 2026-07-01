"use client";

import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type ColorTheme = "light" | "dark";

type ThemeContextValue = {
  theme: ColorTheme;
  toggleTheme: () => void;
};

const themeStorageKey = "divergence-theme";

const ThemeContext = createContext<ThemeContextValue | null>(null);

function getDocumentTheme(): ColorTheme {
  if (typeof document === "undefined") {
    return "light";
  }

  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function applyTheme(theme: ColorTheme) {
  const root = document.documentElement;

  root.classList.remove("light", "dark");
  root.classList.add(theme);
  root.style.colorScheme = theme;
}

function persistTheme(theme: ColorTheme) {
  try {
    window.localStorage.setItem(themeStorageKey, theme);
  } catch {
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ColorTheme>("light");
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setTheme(getDocumentTheme());
      setIsHydrated(true);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (isHydrated) {
      applyTheme(theme);
    }
  }, [isHydrated, theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme: () =>
          setTheme((current) => {
            const nextTheme = current === "dark" ? "light" : "dark";

            persistTheme(nextTheme);

            return nextTheme;
          }),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useColorTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useColorTheme must be used within ThemeProvider");
  }

  return context;
}
