import React from "react";
import { useState, useEffect } from "react";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const FlipCard = ({
  card,
  indexI,
  indexJ,
  selected,
  setSelected,
  destroy,
  setDestroy,
  unflip,
  setUnflip,
}) => {
  const [flip, setFlip] = useState(false);
  const [remove, setRemove] = useState(false);

  const handleClick = async (event) => {
    setFlip(true);
    if (selected === null) {
      setSelected({ i: indexI, j: indexJ, card: card, select: 1 });
      document.getElementById("turn").innerHTML = "1";
      setUnflip({});
    } else {
      if (selected.i !== indexI || selected.j !== indexJ) {
        document.getElementById("turn").innerHTML = "2";
        await delay(1000);
        if (selected.card === card) {
          setRemove(true);
          setDestroy(card);
        }
        setFlip(false);
        setUnflip(card);
        await delay(1);
        setUnflip(null);
        setSelected(null);
      }
    }
  };

  useEffect(() => {
    if (destroy === card) {
      setRemove(true);
    }
    if (unflip === card) {
      setFlip(false);
    }
  }, [destroy, card, flip, remove, selected, unflip]);

  return (
    <button
      key={indexJ}
      style={{
        height: "329px",
        width: "189px",
        backgroundImage: flip
          ? `url("characters/${card}.png")`
          : `url("card.jpeg")`,
        display: remove || destroy === card ? "none" : "block",
        border: 0,
        borderRadius: "10px",
        margin: 10,
        backgroundSize: "cover",
        transition: "ease-in 0.3s",
      }}
      className={card}
      onClick={handleClick}
    />
  );
};
