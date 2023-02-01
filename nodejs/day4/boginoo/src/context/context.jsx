import axios from "axios";
import Cookies from "js-cookie";
import React, { createContext, useState } from "react";
import { useEffect } from "react";
export const Context = createContext({
  user: null,
  setUser: () => {},
});
export const Provider = ({ children }) => {
  const [user, setUser] = useState(null);
  axios.interceptors.request.use(
    (config) => {
      const token = Cookies.get("token");
      if (token) {
        config.headers.token = token;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get("https://onis-boginoo.onrender.com/auth");
      console.log(res);
      setUser(res.data.email);
    };
    getUser();
  }, []);
  return (
    <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>
  );
};
