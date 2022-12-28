import { Hole } from "./components/Hole";
import React from "react";
import { useEffect, useState } from "react";

function App() {
  const [milisecond, setMilisecond] = useState(0);
  const [second, setSecond] = useState(30);
  const [minute, setMinute] = useState(1);
  const [over, setOver] = useState(false);
  const [score, setScore] = useState(0);
  const addScore = () => setScore(score + 1);

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
          setSecond(59);
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
            marginTop: "30px",
            display: "flex",
          }}
        >
          <div
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: "50px",
              width: "500px",
            }}
          >
            {minute}:{second}.{milisecond}
          </div>
          <div
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: "50px",
              width: "250px",
            }}
          >
            score: {score}
          </div>
        </div>
        <div style={{ marginTop: "30px" }}>
          <div style={{ display: "flex" }}>
            <Hole addScore={addScore} />
            <Hole addScore={addScore} />
            <Hole addScore={addScore} />
            <Hole addScore={addScore} />
            <Hole addScore={addScore} />
          </div>
          <div style={{ display: "flex" }}>
            <Hole addScore={addScore} />
            <Hole addScore={addScore} />
            <Hole addScore={addScore} />
            <Hole addScore={addScore} />
            <Hole addScore={addScore} />
          </div>
          <div style={{ display: "flex" }}>
            <Hole addScore={addScore} />
            <Hole addScore={addScore} />
            <Hole addScore={addScore} />
            <Hole addScore={addScore} />
            <Hole addScore={addScore} />
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
        <div
          style={{
            color: "white",
            fontSize: "40px",
          }}
        >
          your score was: {score}
        </div>
      </div>
    </div>
  );
}

export default App;
