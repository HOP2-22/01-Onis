import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components";

export const Layout = ({ children }) => {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.addEventListener("scroll", onScroll);

    return () => window.addEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      style={{
        width: "100vw",
      }}
    >
      <div
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          backgroundColor: offset != 0 ? "#fff" : "transparent",
          color: offset == 0 ? "white" : "black",
          zIndex: 999,
        }}
      >
        <Header color={offset} />
      </div>
      {children}
    </div>
  );
};
export default Layout;
