import "../App.css";
import React from "react";
import { useState, useEffect } from "react";

export const Hole = () => {
  const [up, setUp] = useState(125);

  useEffect(() => {
    const interval = setInterval(() => {
      setUp(20);
    }, Math.floor(Math.random() * (10000 - 1000)) + 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <button
      style={{
        backgroundColor: "rgba(0, 0, 0, 0)",
        border: 0,
        height: "100px",
      }}
      onClick={() => {
        setUp(125);
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100px",
          height: "300px",
        }}
      >
        <img
          src="UpperBack.png"
          alt="upperBack"
          style={{ position: "absolute" }}
        />
        <img
          src="rat.png"
          alt="rat"
          style={{
            position: "absolute",
            transform: `translateY(${up + "px"})`,
          }}
          className="rat"
        />
        <img
          src="LowerBack.png"
          alt="lowerBack"
          style={{ position: "absolute", transform: "translateY(127px)" }}
        />
      </div>
    </button>
  );
};

export default Hole;
