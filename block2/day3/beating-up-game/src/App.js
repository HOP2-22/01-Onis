import { Hole } from "./components/Hole";
import React from "react";
import { useEffect, useState } from "react";

function App() {
  const [milisecond, setMilisecond] = useState(0);
  const [second, setSecond] = useState(30);
  const [minute, setMinute] = useState(1);
  const [over, setOver] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (over === false) {
        setMilisecond(milisecond - 1);
        if (milisecond === 0) {
          setSecond(second - 1);
          setMilisecond(100);
        }
        if (second === 0) {
          setMinute(minute - 1);
          setSecond(60);
        }
      }
      if (second === 0 && minute === 0) {
        setOver(true);
      }
    }, 10);
    return () => clearInterval(interval);
  }, [second, minute, milisecond]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          display: over ? "none" : "flex",
          alignItems: "center",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <div
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: "50px",
            width: "100px",
            marginTop: "30px",
          }}
        >
          {minute}:{second}:{milisecond}
        </div>
        <div style={{ marginTop: "30px" }}>
          <div>
            <Hole />
            <Hole />
            <Hole />
            <Hole />
            <Hole />
          </div>
          <div>
            <Hole />
            <Hole />
            <Hole />
            <Hole />
            <Hole />
          </div>
          <div>
            <Hole />
            <Hole />
            <Hole />
            <Hole />
            <Hole />
          </div>
        </div>
      </div>
      <div
        style={{
          display: over ? "block" : "none",
          color: "white",
          fontSize: "80px",
        }}
      >
        GAME OVER
      </div>
    </div>
  );
}

export default App;
