import { useState } from "react";
import { dark, light } from "styles/theme";

export const useTheme = () => {
  const isBrowserDarkMode =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  let initTheme = isBrowserDarkMode ? "dark" : "light";

  const localSettingTheme = localStorage.getItem("theme");

  if (localSettingTheme) {
    initTheme = localSettingTheme;
  }

  const [theme, setTheme] = useState(initTheme === "light" ? light : dark);
  const [mode, setMode] = useState(initTheme);

  const toggleTheme = () => {
    if (mode === "light") {
      setMode("dark");
      setTheme(dark);
      localStorage.setItem("theme", "dark");
    } else {
      setMode("light");
      setTheme(light);
      localStorage.setItem("theme", "light");
    }
  };

  return [theme, mode, toggleTheme];
};
