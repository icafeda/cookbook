import { createContext, useContext, useReducer, useEffect } from "react";
import { themeReducer, themeInitialState } from "../reducers/themeReducer";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, themeInitialState);

  // Đồng bộ với localStorage
  useEffect(() => {
    const savedTheme = JSON.parse(localStorage.getItem("darkMode"));
    if (savedTheme !== null) {
      dispatch({ type: "SET_DARK_MODE", payload: savedTheme });
    }
  }, []);

  // Lưu vào localStorage mỗi khi đổi theme
useEffect(() => {
  document.documentElement.classList.toggle("dark", state.darkMode);
  localStorage.setItem("darkMode", JSON.stringify(state.darkMode));
}, [state.darkMode]);

  const toggleDarkMode = () => {
    dispatch({ type: "TOGGLE_DARK_MODE" });
  };

  return (
    <ThemeContext.Provider value={{ darkMode: state.darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
