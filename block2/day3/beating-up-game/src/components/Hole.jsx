import "../App.css";
import React from "react";
import { useState, useEffect } from "react";

export const Hole = ({ addScore }) => {
  const [up, setUp] = useState(125);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setUp(20);
    }, Math.floor(Math.random() * (15000 - 3000)) + 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "110px",
        height: "300px",
      }}
    >
      <img
        src="UpperBack.png"
        alt="upperBack"
        style={{ position: "absolute" }}
      />
      <button
        style={{
          backgroundColor: "rgba(0, 0, 0, 0)",
          border: 0,
          display: "flex",
          justifyContent: "center",
        }}
        onClick={() => {
          setUp(125);
          addScore();
        }}
      >
        <img
          src="rat.png"
          alt="rat"
          style={{
            position: "absolute",
            transform: `translateY(${up + "px"})`,
          }}
          id="rat"
        />
      </button>
      <img
        src="LowerBack.png"
        alt="lowerBack"
        style={{ position: "absolute", transform: "translateY(127px)" }}
      />
    </div>
  );
};

export default Hole;
