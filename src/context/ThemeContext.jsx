/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [temaEscuro, setTemaEscuro] = useState(false);

  useEffect(() => {
    if (temaEscuro) {
      document.body.classList.add("escuro");
    } else {
      document.body.classList.remove("escuro");
    }
  }, [temaEscuro]);

  return (
    <ThemeContext.Provider value={{ temaEscuro, setTemaEscuro }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}