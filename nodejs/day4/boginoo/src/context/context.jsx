import React, { createContext, useState } from "react";
export const Context = createContext({
  user: null,
  setUser: () => {},
});
export const Provider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>
  );
};
