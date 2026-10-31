"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "sperious-theme";
const ThemeContext = createContext({
  theme: "dark",
  toggleTheme: () => {},
});

function readTheme() {
  if (typeof document === "undefined") {
    return "dark";
  }
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  localStorage.setItem(STORAGE_KEY, theme);
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    setTheme(readTheme());
  }, []);

  const value = useMemo(
    () => ({
      theme,
      toggleTheme() {
        setTheme((current) => {
          const next = current === "dark" ? "light" : "dark";
          applyTheme(next);
          return next;
        });
      },
    }),
    [theme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}
