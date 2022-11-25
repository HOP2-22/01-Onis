import React, { createContext } from "react";
import { useState, useMemo } from "react";

export const ColorModeContext = createContext();
const dark = {
  backgroundColor: "black",
  color: "white",
};
const light = {
  backgroundColor: "white",
  color: "black",
};

function ThemeContext({ children }) {
  const [isDark, setIsDark] = useState(false);

  const changeTheme = () => {
    setIsDark(!isDark);
  };
  return (
    <ColorModeContext.Provider
      value={{
        changeTheme,
        isDark,
      }}
    >
      {children}
    </ColorModeContext.Provider>
  );
}

export default ThemeContext;
