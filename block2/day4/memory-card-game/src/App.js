import "./App.css";
import React, { useEffect, useState } from "react";
import { act } from "react-dom/test-utils";
import { FlipCard } from "./components/FlipCard";

function* chunks(arr, n) {
  for (let i = 0; i < arr.length; i += n) {
    yield arr.slice(i, i + n);
  }
}

function App() {
  const characters = ["jonathan", "joseph", "jotaro", "giorno", "johnny"];
  const [cards, setCards] = useState(null);
  const [selected, setSelected] = useState(null);
  const [destroy, setDestroy] = useState(null);
  const [unflip, setUnflip] = useState(null);

  const generate = () => {
    let newCards = [...characters, ...characters].sort(
      (a, b) => 0.5 - Math.random()
    );
    setCards([...chunks(newCards, 5)]);
  };
  useEffect(() => {
    generate();
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div id="turn">BRUH</div>
      {cards?.map((cardRow, indexI) => (
        <div style={{ display: "flex" }} key={indexI}>
          {cardRow.map((card, indexJ) => (
            <FlipCard
              card={card}
              indexI={indexI}
              indexJ={indexJ}
              selected={selected}
              setSelected={setSelected}
              destroy={destroy}
              setDestroy={setDestroy}
              unflip={unflip}
              setUnflip={setUnflip}
            />
          ))}
        </div>
      ))}
      <button
        onClick={() => {
          generate();
        }}
      >
        generate
      </button>
    </div>
  );
}

export default App;
